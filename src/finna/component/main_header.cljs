(ns finna.component.main-header
  (:require
   [reagent.core :as r]
   [re-frame.core :as re]
   [blueprint.core :refer [Menu MenuItem MenuDivider
                           Navbar NavbarGroup NavbarHeading NavbarDivider
                           Popover ButtonGroup Button]]))


(defn c-file-menu []
  [:> Menu {}
   [:> MenuItem {:text "New" :icon "document"}]
   [:> MenuItem {:text "Open" :icon "folder-shared"}]
   [:> MenuDivider {}]
   [:> MenuItem {:text "Save" :icon "floppy-disk"}]
   [:> MenuItem {:text "Save As..." :icon "floppy-disk"}]])


(defn c-main-header []
  [:div.main-header
   [:> Navbar {}
    [:> NavbarGroup {}
     [:> NavbarHeading {} "Finna"]
     [:> NavbarDivider {}]
     [:> Popover {:content (r/as-element [c-file-menu])}
      [:> Button {:text "File" :icon "document" :rightIcon "caret-down"}]]]]])
