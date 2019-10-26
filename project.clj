(defproject finna "0.1.0-SNAPSHOT"
  :description "finna - An Ethereum Blockchain Scratchpad"
  :url "http://github.com/zap-tech/finna"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [reagent "0.9.0-rc2"]
                 [re-frame "0.11.0-rc2"]
                 [org.clojure/core.async "0.4.500"]
                 [cljs-http "0.1.46"]]

  :repl-options {:init-ns finna.core
                 :nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

  :repositories [["clojars" {:sign-releases false}]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :plugins [[lein-ancient "0.6.15"]
            [lein-cljsbuild "1.1.7"]
            [lein-npm "0.6.2"]]

  :figwheel {:css-dirs ["resources/public/css"]
             :server-port 8081}

  :cljsbuild {:builds {:dev
                       {:source-paths ["src"] 
                        :figwheel true
                        :compiler {:main finna.core
                                   :output-dir "resources/public/js/compiled/out"
                                   :output-to "resources/public/js/compiled/finna.js"
                                   :asset-path "js/compiled/out"
                                   :optimizations :none
                                   :pretty-print true
                                   :source-map-timestamp true}}

                       :prod
                       {:source-paths ["src"]
                        :compiler {:output-to "resources/public/js/compiled/finna.min.js"
                                   :optimizations :advanced
                                   :pretty-print false}}

                       :test
                       {:id "test"
                        :source-paths ["src" "test"]
                        :compiler {:output-to "resources/public/js/compiled/test/test-runner.js"
                                   :output-dir "resources/public/js/compiled/test/out"
                                   :main finna.test-runner
                                   :target :nodejs
                                   :optimizations :none}}}}

  :npm {:dependencies

        ;; Development Dependencies
        [[less "3.10.3"]
         [less-watch-compiler "1.14.1"]]}

  :profiles
  {:dev
   {:source-paths ["src" "test" "dev"]
    :resource-paths ["dev/resources"]
    :dependencies [[cider/piggieback "0.4.1"]
                   [org.clojure/tools.nrepl "0.2.13"]
                   [figwheel "0.5.19"]
                   [figwheel-sidecar "0.5.19"]
                   [binaryage/devtools "0.9.10"]
                   [doo "0.1.11"]]
    :plugins [[lein-figwheel "0.5.19"]
              [lein-doo "0.1.10"]]}})

