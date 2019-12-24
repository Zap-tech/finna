(ns finna.lib
  (:require
   [clojure.pprint :refer [pprint]]
   [cljs.core.async :refer [<! go chan put! close!] :include-macros true]
   [fif.core :as fif]
   [fif.def :as def :refer [wrap-function-with-arity
                            wrap-procedure-with-arity]]
   [fif.stack-machine :as stack]
   [fif.stack-machine.words :as words :refer [set-global-word-defn]]))


(defn abi-url [address]
  (str "https://api.etherscan.io/api?module=contract&action=getabi&address=" address))


;; SHIT Coin Contract
(def test-address "0xaa7fb1c8ce6f18d4fd4aabb61a2193d4d441c54f")


(def *provider (atom (.getDefaultProvider js/ethers)))


(defn json-abi-string [address]
  (let [url (abi-url address)
        success-channel (chan 1)
        error-channel (chan 1)]
    (-> (.fetch js/window url)
        (.then 
         (fn [response]
           (if (not= (.-status response) 200)
             (do (put! error-channel response)
                 (close! success-channel))
             (do (-> (.json response)
                     (.then (fn [result]
                              (let [result (-> (js->clj result :keywordize-keys true)
                                               :result)]
                                (put! success-channel result)
                                (close! error-channel))))))))))
    [success-channel error-channel]))


(defn abi-string->abi-form [abi]
  (-> abi js/JSON.parse (js->clj :keywordize-keys true)))


(defn wrap-contract-function
  "Wrap an contract method as a stack machine function."
  [{:keys [namespace function-abi contract-fn]}]
  (let [{:keys [constant inputs name outputs payable stateMutability type]} function-abi
        num-inputs (count inputs)]
    (wrap-function-with-arity
     num-inputs
     (fn [& args]
       (let [done-channel (chan 1)]
         (go
           (-> (apply js-invoke contract-fn name args)
               (.then (fn [result] (put! done-channel result)))))
         done-channel)))))


(defn generate-contract
  [sm]
  (let [done-channel (chan 1)]
    (go
      (let [[address sym] (stack/get-stack sm)
            _ (.log js/console "Address: " address)
            _ (.log js/console "Symbol:  " sym)
            [success error] (json-abi-string address)
            abi-string (<! success)
            abi-form (abi-string->abi-form abi-string)]
        (pprint abi-form)
        (put! done-channel :procedure-done)))
    (-> sm
        stack/pop-stack
        stack/pop-stack
        stack/dequeue-code
        (stack/push-stack done-channel))))


#_(go
    (let [[result-channel error-channel] (json-abi-string test-address)
          abi (<! result-channel)
          provider (.getDefaultProvider js/ethers)
          contract (js/ethers.Contract. test-address abi provider)]
      (.log js/console contract)
      (pprint (method-listing abi))))


(defn import-finna-lib [sm]
  (-> sm
      (set-global-word-defn
       'contract generate-contract
       :stdlib? false
       :doc "( sym address - ) Generates smart contract methods within the `sym` group for `address`."
       :group :finna.core)))
   
  
