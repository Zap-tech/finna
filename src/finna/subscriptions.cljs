(ns finna.subscriptions
  (:require
   [re-frame.core :as re]))


(re/reg-sub
 :editor
 (fn [db _]
   (:editor db)))
