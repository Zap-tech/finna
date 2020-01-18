(ns finna.component.console
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   [blueprint.core :refer [Tab Tabs]]))


(defn c-console []
  [:div.console
   [:div.output
    [:pre.log "Hello World!"]
    [:pre.error "This is an error"]]
   [:div.input
    [:div.prompt ">"]
    [:input {:type "text"}]]])
