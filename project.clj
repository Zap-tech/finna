(defproject finna "0.1.0-SNAPSHOT"
  :description "finna - An Ethereum Blockchain Scratchpad"
  :url "http://github.com/zap-tech/finna"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [funcool/cuerdas "2.2.0"]
                 [reagent "0.9.0-rc2"]
                 [re-frame "0.11.0-rc2"]
                 [day8.re-frame/http-fx "v0.2.0"]
                 [org.clojure/core.async "0.4.500"]
                 [fif-lang/fif "1.4.0"]
                 [cljsjs/react "16.12.0-1"]
                 [cljsjs/react-dom "16.12.0-1"]]

  :repl-options {:init-ns user
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
                        :figwheel {:on-jsload "finna.core/re-render"}
                        :compiler {:main                 finna.core
                                   :output-dir           "resources/public/js/compiled/out"
                                   :output-to            "resources/public/js/compiled/finna.js"
                                   :asset-path           "js/compiled/out"
                                   :optimizations        :none
                                   :pretty-print         true
                                   :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true}
                                   :preloads             [day8.re-frame-10x.preload]
                                   :source-map-timestamp true
                                   :foreign-libs [{:file "public/js/index_bundle.js"
                                                   :provides ["blueprint.core" "blueprint.icons"]
                                                   :global-exports {blueprint.core  BluePrintCore
                                                                    blueprint.icons BluePrintIcons}
                                                   :requires ["react" "react-dom"]}]}}

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
        [;; Production Libraries
         ["@blueprintjs/core" "3.22.3"]
         ["@blueprintjs/datetime" "3.15.1"]
         ["@blueprintjs/icons" "3.13.0"]
         ["@blueprintjs/select" "3.11.2"]
         ["@blueprintjs/table" "3.8.2"]
         ["@blueprintjs/timezone" "3.6.1"]

         ;; Development Libraries
         [webpack "4.41.4"]
         [webpack-cli "3.3.10"]
         [less "3.10.3"]
         [less-watch-compiler "1.14.1"]]}

  :profiles
  {:dev
   {:source-paths ["src" "test" "dev"]
    :resource-paths ["dev/resources"]
    :dependencies [[cider/piggieback "0.4.1"]
                   [org.clojure/tools.nrepl "0.2.13"]
                   [day8.re-frame/re-frame-10x "0.4.5"]
                   [figwheel "0.5.19"]
                   [figwheel-sidecar "0.5.19"]
                   [binaryage/devtools "0.9.10"]
                   [doo "0.1.11"]]
    :plugins [[lein-figwheel "0.5.19"]
              [lein-doo "0.1.10"]]}})

