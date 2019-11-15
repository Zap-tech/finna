(ns finna.page.main
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   ;; Components
   [finna.component.main-header :refer [c-main-header]]))

(defn c-main []
  [:div.page.main {}
   [:div.panel.header [c-main-header]]
   [:div.panel.left "left"]
   [:div.panel.content "content"]
   [:div.panel.right "right"]
   [:div.footer "footer"]])
