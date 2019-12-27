(ns finna.core
  (:require
   [cljsjs.react]
   [cljsjs.react.dom]
   [re-frame.core :as re]
   [reagent.core :as r]
   [finna.page.main :refer [c-main]]
   [finna.events]
   [finna.subscriptions]
   [finna.effects]
   [finna.stack-machine]))


(enable-console-print!)


(defn main-layout []
  [c-main])


(defn render []
  (r/render main-layout (.querySelector js/document "#app")))


(defn re-render []
  (println "Re-rendering...")
  (render)
  (r/force-update-all))


(defn init []
  (println "Initializing Finna.")
  (re/dispatch-sync [:initialize])
  (render))


