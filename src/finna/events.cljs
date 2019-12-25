(ns finna.events
  (:require
   [re-frame.core :as re]))


(re/reg-event-db
 :initialize
 (fn [db _]
   db))


(re/reg-event-db
 :editor/init
 (fn [db [_ editor]]
   (assoc db :editor editor)))


(re/reg-event-db
 :editor/set-text
 (fn [db [_ text]]
   (when-let [editor (:editor db)]
     (.setValue editor text))
   db))
