(ns finna.component.main-header
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]))


(defn c-main-header []
  [:div.main-header
   [:span.logo "finna"]])
