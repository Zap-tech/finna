(ns finna.lib
  (:require
   [clojure.pprint :refer [pprint]]
   [cljs.core.async :refer [<! go chan put! close!] :include-macros true]
   [fif.core :as fif]))


(defn get-abi-url [address]
  (str "https://api.etherscan.io/api?module=contract&action=getabi&address=" address))


;; SHIT Coin Contract
(def test-address "0xaa7fb1c8ce6f18d4fd4aabb61a2193d4d441c54f")


(defn get-json-abi-string [address]
  (let [url (get-abi-url address)
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
                                (put! success-channel result)))))
                 (close! error-channel))))))
    [success-channel error-channel]))


#_(go
    (let [[result-channel error-channel] (get-json-abi-string test-address)
          abi (<! result-channel)
          provider (.getDefaultProvider js/ethers)
          contract (js/ethers.Contract. test-address abi provider)]
      (.log js/console contract)))
