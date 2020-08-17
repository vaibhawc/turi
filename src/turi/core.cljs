(ns turi.core
  (:require [reagent.core :as r]
            [reagent.dom :as d]
            [turi.moves :as moves]))

;;
;; define your app data so that it doesn't get over-written on reload
;(moves/adjis 0)


(defonce app-state (r/atom {:selected-p :none :m [] :e []}))
(defn select-p [p]
  (cond (and (not= :p (:selected-p @app-state)) (not= :c (moves/pos-of-p p)))
        (let [npmoves (moves/pmoves p)]
          ;(js/alert npmoves)
          (reset! app-state (assoc (assoc (assoc @app-state :selected-p p) :m (map :m npmoves)) :e (map :e npmoves))))
        (and (not= :p (:selected-p @app-state)) (moves/lhas (:m @app-state) p))
        (let [expmoves (moves/pmoves (:selected-p @app-state)) npmoves (moves/pmoves p)]
          ;(js/alert (first (filter #(= (:m %) p) expmoves)))
          ;(js/alert npmoves)
          (moves/check-make-pmove (:selected-p @app-state) (first (filter #(= (:m %) p) expmoves)))
          (reset! app-state (assoc (assoc (assoc @app-state :selected-p p) :m (map :m (moves/pmoves p))) :e (map :e (moves/pmoves p)))))))

(defonce x 78)

(defn draw-point [p sx sy sc]
  (let [pl (moves/pos-of-p p)
        r (if (not= pl :c) (if (= p (:selected-p @app-state)) 20 12) (if (moves/lhas (:m @app-state) p) 10 1))
        color (cond (= pl :a) "red" (= pl :b) "blue" (moves/lhas (:m @app-state) p) "green" :else "grey")]
    [:circle {:key (str p)
              :on-click #(select-p p)
              :cx (+ sx (* sc (first (p moves/points))))
              :cy (+ sy (* sc (second (p moves/points))))
              :r r
              :stroke "black"
              :fill color
              :style {:transition "300ms"}}]))

(defn draw-line [p1 p2 sx sy sc] [:line {:key (str (str p1) (str p2))
                                         :x1 (+ sx (* sc (first (p1 moves/points))))
                                         :y1 (+ sy (* sc (second (p1 moves/points))))
                                         :x2 (+ sx (* sc (first (p2 moves/points))))
                                         :y2 (+ sy (* sc (second (p2 moves/points))))
                                         :stroke "grey"
                                         :stroke-width 2}])
(defn board []
  @app-state
  [:svg {:style {:x 0 :y 0 :width (+ 48 (* 4 x)) :height (+ 48 (* 8 x)) :background-color "white"}}
   (map #(draw-line (first %) (last %)  (+ 22 (* 2 x)) (+ 22 (* 4 x)) x) moves/lines)
   (map #(draw-point % (+ 22 (* 2 x)) (+ 22 (* 4 x)) x) (keys moves/points))])


(defn start []
  (r/render [board]
          (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
