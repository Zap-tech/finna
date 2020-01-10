(ns finna.page.main
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   ;; Components
   [finna.component.main-header :refer [c-main-header]]
   [finna.component.editor :refer [c-editor]]
   [finna.component.tree-overview :refer [c-tree-overview]]))

(defn c-main []
  [:div.page.main {}
   [:div.panel.header [c-main-header]]
   [:div.panel.left [c-tree-overview]]
   [:div.panel.content [c-editor]]
   [:div.panel.right "console"]
   [:div.panel.bottom "output"]
   [:div.panel.footer
    "© 2019 Zaptech Enterprises"]])
