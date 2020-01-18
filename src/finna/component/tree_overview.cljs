(ns finna.component.tree-overview
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   [blueprint.core :refer [Icon Tree]]))


(defn generate-tree-structure
  []
  (clj->js [{:id 0
             :hasCaret true
             :icon "folder-close"
             :label ":stdlib.core"
             :isExpanded true
             :childNodes [{:id 1 :icon "function" :label "and"}
                          {:id 2 :icon "function" :label "or"}]}]))


(defn c-tree-overview
  [{:keys [] :as opts}]
  [:div.tree-overview
   [:div.search-input
    [:input {:type "text" :placeholder "Search"}]
    [:> Icon {:icon "search"}]]
   [:div.tree-container
    [:> Tree {:contents (generate-tree-structure)}]]])
