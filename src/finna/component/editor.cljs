(ns finna.component.editor
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]))


(defn c-editor []
  (let []
    (r/create-class
     {:display-name "c-editor"
      
      :component-did-mount
      (fn [this]
        (let [el-node (r/dom-node this)
              ;; Instantiate Code Mirror Instance
              editor (js/CodeMirror. 
                      el-node 
                      #js {:lineNumbers true
                           :scrollbarStyle "simple"
                           :mode "clojure"})]
          (re/dispatch [:set-editor editor])))

      :reagent-render
      (fn []
        [:div.codemirror.editor])})))
