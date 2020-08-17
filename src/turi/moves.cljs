(ns turi.moves)
(defonce points {:ar0 [-2 1]
                 :ar1 [-1 1]
                 :ar2 [0 1]
                 :ar3 [1 1]
                 :ar4 [2 1]
                 :ar5 [-2 2]
                 :ar6 [-1 2]
                 :ar7 [0 2]
                 :ar8 [1 2]
                 :ar9 [2 2]
                 :at0 [-1.5 3.5]
                 :at1 [0 3.5]
                 :at2 [1.5 3.5]
                 :at3 [-0.75 2.75]
                 :at4 [0 2.75]
                 :at5 [0.75 2.75]
                 :br0 [-2 -1]
                 :br1 [-1 -1]
                 :br2 [0 -1]
                 :br3 [1 -1]
                 :br4 [2 -1]
                 :br5 [-2 -2]
                 :br6 [-1 -2]
                 :br7 [0 -2]
                 :br8 [1 -2]
                 :br9 [2 -2]
                 :bt0 [-1.5 -3.5]
                 :bt2 [1.5 -3.5]
                 :bt1 [0 -3.5]
                 :bt3 [-0.75 -2.75]
                 :bt4 [0 -2.75]
                 :bt5 [0.75 -2.75]
                 :cr0 [-2 0]
                 :cr1 [-1 0]
                 :cr2 [0 0]
                 :cr3 [1 0]
                 :cr4 [2 0]})
(defonce lines [[:at0 :at1 :at2]
                [:at3 :at4 :at5]
                [:ar5 :ar6 :ar7 :ar8 :ar9]
                [:ar0 :ar1 :ar2 :ar3 :ar4]
                [:cr0 :cr1 :cr2 :cr3 :cr4]
                [:br0 :br1 :br2 :br3 :br4]
                [:br5 :br6 :br7 :br8 :br9]
                [:bt3 :bt4 :bt5]
                [:bt0 :bt1 :bt2]
                [:ar5 :ar0 :cr0 :br0 :br5]
                [:ar6 :ar1 :cr1 :br1 :br6]
                [:at1 :at4 :ar7 :ar2 :cr2 :br2 :br7 :bt4 :bt1]
                [:ar8 :ar3 :cr3 :br3 :br8]
                [:ar9 :ar4 :cr4 :br4 :br9]
                [:at0 :at3 :ar7 :ar3 :cr4]
                [:cr4 :br3 :br7 :bt3 :bt0]
                [:at2 :at5 :ar7 :ar1 :cr0]
                [:cr0 :br1 :br7 :bt5 :bt2]
                [:ar5 :ar1 :cr2 :br3 :br9]
                [:br5 :br1 :cr2 :ar3 :ar9]])
(def pos (atom {:ar0 :a
                :ar1 :a
                :ar2 :a
                :ar3 :a
                :ar4 :a
                :ar5 :a
                :ar6 :a
                :ar7 :a
                :ar8 :a
                :ar9 :a
                :at0 :a
                :at1 :a
                :at2 :a
                :at3 :a
                :at4 :a
                :at5 :a
                :br0 :b
                :br1 :b
                :br2 :b
                :br3 :b
                :br4 :b
                :br5 :b
                :br6 :b
                :br7 :b
                :br8 :b
                :br9 :b
                :bt0 :b
                :bt2 :b
                :bt1 :b
                :bt3 :b
                :bt4 :b
                :bt5 :b
                :cr0 :c
                :cr1 :c
                :cr2 :c
                :cr3 :c
                :cr4 :c}))


(defn pos-of-p [p] (p @pos))
(defn oppo-pos [pos] (cond (= :a pos) :b (= :b pos) :a :else :c))
(defn adjis [i] [(dec i) (inc i)])
(defn valid-ix [ix l] (and (>= ix 0) (< ix (count l))))
(defn movs [l p ix]
  (let [ip (.indexOf l p) ex (+ ix (- ix ip))]
    (if (valid-ix ix l)
        (let [xp (nth l ix)]
          (if (= (pos-of-p xp) :c)
              {:m xp :e :none}
              (if (and (valid-ix ex l) (= (oppo-pos (pos-of-p p)) (pos-of-p xp)))
                  (let [yp (nth l ex)]
                    (if (= (pos-of-p yp) :c) {:m yp :e xp} :none))
                  :none)))
        :none)))
(defn pm-lp [l p]
    (filterv #(not= :none %) (mapv #(movs l p %) (adjis (.indexOf l p)))))

(defn lhas [l e] (some #(= % e) l))

(defn pmoves [p]
  (if (= (pos-of-p p) :none)
      []
      (flatten (map #(pm-lp % p) (filter #(lhas % p) lines)))))

(defn check-make-pmove [p move]
  (if (some #(= % move) (pmoves p))
      (let [poo @pos]
        (if (= :none (:e move))
            (reset! pos (assoc (assoc poo p :c) (:m move) (pos-of-p p)))
            (reset! pos (assoc (assoc (assoc poo p :c) (:m move) (pos-of-p p)) (:e move) :c))))))
