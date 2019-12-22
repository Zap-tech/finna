(ns finna.stack-machine
  "Contains a modified fif stack-machine runtime. Resulting
  `eval-string-async` can be used to depromise/await values returned
  in Promises automatically."
  (:require
   [cljs.core.async :refer [<! go-loop chan put! close!] :include-macros true]
   [fif.core :as fif]
   [fif.stack-machine :as stack]
   [fif.stack-machine.exceptions :as stack.exceptions]
   [fif.stack-machine.evaluators :as stack.evaluators]))


(defn promise?
  "Returns true if the given value is a javascript Promise."
  [x]
  (instance? js/Promise x))


(defn depromise
  "Returns the resolved value of a promise on the returned result channel.

  # Notes:

  - Errors are also returned on the result channel.
  "
  [x]
  (let [result-channel (chan 1)]
    (.then x
           (fn [result] (put! result-channel result))
           (fn [error] (put! result-channel error)))
    result-channel))


(defn stack-promise?
  "Checks if the last value placed on the stack was a Promise."
  [sm]
  (let [[value] (stack/get-stack sm)]
    (promise? value)))


(defn run-async
  "Runs the fif stack machine asynchronously so that we can unwrap Promises."
  [sm]
  (let [input-channel (chan)]
    (go-loop [sm sm]
      (let [step-num (stack/get-step-num sm)
            step-max (stack/get-step-max sm)]
        (cond
          (empty? (-> sm stack/get-code)) sm

          (and (> step-max 0) (>= step-num step-max))
          (stack.exceptions/raise-max-steps-exceeded sm)

          (:halt? sm) sm

          ;; Special Sauce: promises are unwrapped
          (stack-promise? sm)
          (let [[value] (stack/get-stack sm)
                result-channel (depromise value)]
            (-> sm
                (stack/pop-stack)
                (stack/push-stack (<! result-channel))
                recur))

          :else
          (recur (stack/step sm)))))))


(defn eval-fn-async
  [sm args]
  (-> sm 
      (stack/set-code (concat (stack/get-code sm) args))
      run-async))


(defn eval-string-async
  "Main entrypoint into running the stack machine asychronously."
  [sm s]
  (let [[sm args] (stack.evaluators/read-string sm s)]
    (eval-fn-async sm args)))
