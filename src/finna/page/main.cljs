(ns finna.page.main
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   ;; Components
   [finna.component.main-header :refer [c-main-header]]
   [finna.component.editor :refer [c-editor]]
   [finna.component.tree-overview :refer [c-tree-overview]]
   [finna.component.output-panel :refer [c-output-panel]]
   [finna.component.console :refer [c-console]]))

(defn c-main []
  [:div.page.main {}
   [:div.panel.header [c-main-header]]
   [:div.panel.left [c-tree-overview]]
   [:div.panel.content [c-editor]]
   [:div.panel.right [c-console]]
   [:div.panel.bottom [c-output-panel]]
   [:div.panel.footer
    "© 2019 Zaptech Enterprises"]])
