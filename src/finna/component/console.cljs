(ns finna.component.console
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   [blueprint.core :refer [Tab Tabs]]))


(defn c-console []
  [:div.console
   [:span "console!"]])
