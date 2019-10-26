(ns finna.page.main
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]))


(defn c-main []
  [:div.page.main {}
   [:div.panel.header "header"]
   [:div.panel.left "left"]
   [:div.panel.content "content"]
   [:div.panel.right "right"]])
