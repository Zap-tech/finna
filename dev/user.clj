(ns user
  (:require
   [figwheel-sidecar.repl-api]))


(defn fig-dev-ui []
  (figwheel-sidecar.repl-api/start-figwheel!)
  (figwheel-sidecar.repl-api/cljs-repl))


(def help-message
  "Run (fig-dev-ui) to start figwheel cljs repl")


(defn help []
  (println help-message))


(println help-message)
