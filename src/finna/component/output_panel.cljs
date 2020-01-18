(ns finna.component.output-panel
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]

   [blueprint.core :refer [Tab Tabs]]))


(def TabsExpander (aget "Expander" Tabs))


(def test-data-output
  [{:text "Test Data" :type :out :datetime 1}
   {:text "Test Data 2" :type :out :datetime 2}
   {:text "1" :type :out :datetime 3}
   {:text " 2" :type :out :datetime 4}
   {:text "  3" :type :out :datetime 5}])


(defn c-output-tab []
  [:div.output-tab
   [:div.output-listing
    (doall
     (for [{:keys [text type datetime]} test-data-output]
       ^{:key (str "output-" datetime)}
       [:pre.output text]))]])


(defn c-transactions-tab []
  [:div.transactions-tab "transactions"])


(defn c-output-panel []
  [:div.output-panel
   [:> Tabs
    {:vertical true}
    [:> Tab {:id "tab-output"
             :title "Output"
             :panel (r/as-element [c-output-tab])}]
    [:> Tab {:id "tab-transactions"
             :title "Transactions"
             :panel (r/as-element [c-transactions-tab])}]]])
