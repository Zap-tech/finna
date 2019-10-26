(ns finna.core
  (:require
   [re-frame.core :as re]
   [reagent.core :as r]))


(enable-console-print!)


(defn main-layout []
  [:div "Hello World!"])


(defn render []
  (r/render main-layout (.querySelector js/document "#app")))


(defn re-render []
  (println "Re-rendering...")
  (render))


(defn init []
  (println "Initializing Finna.")
  (render))


