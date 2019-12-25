(ns finna.page.main
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   ;; Components
   [finna.component.main-header :refer [c-main-header]]
   [finna.component.title-bar :refer [c-title-bar]]
   [finna.component.editor :refer [c-editor]]))

(defn c-main []
  [:div.page.main {}
   [:div.panel.header [c-main-header]]
   [:div.panel.title-bar [c-title-bar]]
   [:div.panel.left "left"]
   [:div.panel.content [c-editor]]
   [:div.panel.right "right"]
   [:div.panel.footer
    "© 2019 Zaptech Enterprises"]])
