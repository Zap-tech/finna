(ns finna.events
  (:require
   [re-frame.core :as re]))


(re/reg-event-db
 :initialize
 (fn [db _]
   db))


(re/reg-event-db
 :set-editor
 (fn [db [_ editor]]
   (assoc db :editor editor)))
