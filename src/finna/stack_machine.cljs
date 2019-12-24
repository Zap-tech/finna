(ns finna.stack-machine
  "Contains a modified fif stack-machine runtime. Resulting
  `eval-string-async` can be used to depromise/await values returned
  in Promises automatically."
  (:require
   [cljs.core.async :refer [<! go go-loop chan put! close!] :include-macros true]
   [fif.core :as fif]
   [finna.lib :refer [import-finna-lib]]
   [fif.stack-machine :as stack]
   [fif.stack-machine.exceptions :as stack.exceptions]
   [fif.stack-machine.evaluators :as stack.evaluators]
   [fif.client :refer [form-string]]))


;; SHIT Coin Contract
(def test-address "0xaa7fb1c8ce6f18d4fd4aabb61a2193d4d441c54f")


(defn channel?
  "Returns true if the given value is a core.async channel."
  [x]
  (instance? cljs.core.async.impl.channels/ManyToManyChannel x))


(defn stack-channel?
  "Checks if the last value placed on the stack was a core async Channel."
  [sm]
  (let [[value] (stack/get-stack sm)]
    (channel? value)))


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

          ;; Special Sauce: promises are unwrapped
          (stack-promise? sm)
          (let [[value] (stack/get-stack sm)
                result-channel (depromise value)]
            (-> sm
                (stack/pop-stack)
                (stack/push-stack (<! result-channel))
                recur))

          ;; The channel's value is placed on the stack.
          (stack-channel? sm)
          (let [[value] (stack/get-stack sm)]
            (-> sm
                (stack/pop-stack)
                ;; If the channel value is `:procedure-done`, don't push the value to the stack
                (as-> $ (let [value (<! value)]
                          (if (= value :procedure-done)
                            $
                            (stack/push-stack $ value))))
                recur))

          (empty? (-> sm stack/get-code)) sm

          (and (> step-max 0) (>= step-num step-max))
          (stack.exceptions/raise-max-steps-exceeded sm)

          (:halt? sm) sm

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



(def finna-stack-machine
  (-> fif/*default-stack*
      import-finna-lib))


(def test-script (str "*shit-token \"" test-address "\" contract"))
(comment
  (go
   (println
    (-> (eval-string-async finna-stack-machine test-script)
        <! stack/get-stack println))))
