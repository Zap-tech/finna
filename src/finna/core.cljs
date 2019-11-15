(ns finna.core
  (:require
   [re-frame.core :as re]
   [reagent.core :as r]
   [finna.page.main :refer [c-main]]))


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
  (render))


