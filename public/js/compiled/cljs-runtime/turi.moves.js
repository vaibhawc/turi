goog.provide('turi.moves');
goog.require('cljs.core');
if((typeof turi !== 'undefined') && (typeof turi.moves !== 'undefined') && (typeof turi.moves.points !== 'undefined')){
} else {
turi.moves.points = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"br8","br8",440047616),new cljs.core.Keyword(null,"cr2","cr2",681854944),new cljs.core.Keyword(null,"br7","br7",-1694542206),new cljs.core.Keyword(null,"cr3","cr3",531332323),new cljs.core.Keyword(null,"br1","br1",-1957699932),new cljs.core.Keyword(null,"ar6","ar6",1956341540),new cljs.core.Keyword(null,"at1","at1",299835974),new cljs.core.Keyword(null,"bt4","bt4",718932615),new cljs.core.Keyword(null,"br0","br0",2048594952),new cljs.core.Keyword(null,"cr1","cr1",95557864),new cljs.core.Keyword(null,"br3","br3",-207247672),new cljs.core.Keyword(null,"br9","br9",-526807160),new cljs.core.Keyword(null,"bt3","bt3",853768649),new cljs.core.Keyword(null,"ar1","ar1",-1685696790),new cljs.core.Keyword(null,"ar8","ar8",-1436849813),new cljs.core.Keyword(null,"ar0","ar0",1221692395),new cljs.core.Keyword(null,"br2","br2",2097427564),new cljs.core.Keyword(null,"br5","br5",-2115825396),new cljs.core.Keyword(null,"at2","at2",1487610541),new cljs.core.Keyword(null,"ar7","ar7",-752665554),new cljs.core.Keyword(null,"br4","br4",1245913039),new cljs.core.Keyword(null,"at3","at3",261710258),new cljs.core.Keyword(null,"ar5","ar5",1180792435),new cljs.core.Keyword(null,"ar9","ar9",-1382794795),new cljs.core.Keyword(null,"ar3","ar3",546625590),new cljs.core.Keyword(null,"at4","at4",145365238),new cljs.core.Keyword(null,"bt1","bt1",606225847),new cljs.core.Keyword(null,"br6","br6",-1039212136),new cljs.core.Keyword(null,"cr0","cr0",25560664),new cljs.core.Keyword(null,"ar4","ar4",-1114433959),new cljs.core.Keyword(null,"bt0","bt0",1032208538),new cljs.core.Keyword(null,"at0","at0",-1188495845),new cljs.core.Keyword(null,"bt2","bt2",983259067),new cljs.core.Keyword(null,"bt5","bt5",-1659521636),new cljs.core.Keyword(null,"cr4","cr4",82297276),new cljs.core.Keyword(null,"ar2","ar2",51652188),new cljs.core.Keyword(null,"at5","at5",643483805)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-2.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.75,-2.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.75,2.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),2.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.5,-3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.5,3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,-3.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75,-2.75], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75,2.75], null)]);
}
if((typeof turi !== 'undefined') && (typeof turi.moves !== 'undefined') && (typeof turi.moves.lines !== 'undefined')){
} else {
turi.moves.lines = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at0","at0",-1188495845),new cljs.core.Keyword(null,"at1","at1",299835974),new cljs.core.Keyword(null,"at2","at2",1487610541)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at3","at3",261710258),new cljs.core.Keyword(null,"at4","at4",145365238),new cljs.core.Keyword(null,"at5","at5",643483805)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ar5","ar5",1180792435),new cljs.core.Keyword(null,"ar6","ar6",1956341540),new cljs.core.Keyword(null,"ar7","ar7",-752665554),new cljs.core.Keyword(null,"ar8","ar8",-1436849813),new cljs.core.Keyword(null,"ar9","ar9",-1382794795)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ar0","ar0",1221692395),new cljs.core.Keyword(null,"ar1","ar1",-1685696790),new cljs.core.Keyword(null,"ar2","ar2",51652188),new cljs.core.Keyword(null,"ar3","ar3",546625590),new cljs.core.Keyword(null,"ar4","ar4",-1114433959)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cr0","cr0",25560664),new cljs.core.Keyword(null,"cr1","cr1",95557864),new cljs.core.Keyword(null,"cr2","cr2",681854944),new cljs.core.Keyword(null,"cr3","cr3",531332323),new cljs.core.Keyword(null,"cr4","cr4",82297276)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br0","br0",2048594952),new cljs.core.Keyword(null,"br1","br1",-1957699932),new cljs.core.Keyword(null,"br2","br2",2097427564),new cljs.core.Keyword(null,"br3","br3",-207247672),new cljs.core.Keyword(null,"br4","br4",1245913039)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br5","br5",-2115825396),new cljs.core.Keyword(null,"br6","br6",-1039212136),new cljs.core.Keyword(null,"br7","br7",-1694542206),new cljs.core.Keyword(null,"br8","br8",440047616),new cljs.core.Keyword(null,"br9","br9",-526807160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt3","bt3",853768649),new cljs.core.Keyword(null,"bt4","bt4",718932615),new cljs.core.Keyword(null,"bt5","bt5",-1659521636)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt0","bt0",1032208538),new cljs.core.Keyword(null,"bt1","bt1",606225847),new cljs.core.Keyword(null,"bt2","bt2",983259067)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ar5","ar5",1180792435),new cljs.core.Keyword(null,"ar0","ar0",1221692395),new cljs.core.Keyword(null,"cr0","cr0",25560664),new cljs.core.Keyword(null,"br0","br0",2048594952),new cljs.core.Keyword(null,"br5","br5",-2115825396)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ar6","ar6",1956341540),new cljs.core.Keyword(null,"ar1","ar1",-1685696790),new cljs.core.Keyword(null,"cr1","cr1",95557864),new cljs.core.Keyword(null,"br1","br1",-1957699932),new cljs.core.Keyword(null,"br6","br6",-1039212136)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at1","at1",299835974),new cljs.core.Keyword(null,"at4","at4",145365238),new cljs.core.Keyword(null,"ar7","ar7",-752665554),new cljs.core.Keyword(null,"ar2","ar2",51652188),new cljs.core.Keyword(null,"cr2","cr2",681854944),new cljs.core.Keyword(null,"br2","br2",2097427564),new cljs.core.Keyword(null,"br7","br7",-1694542206),new cljs.core.Keyword(null,"bt4","bt4",718932615),new cljs.core.Keyword(null,"bt1","bt1",606225847)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ar8","ar8",-1436849813),new cljs.core.Keyword(null,"ar3","ar3",546625590),new cljs.core.Keyword(null,"cr3","cr3",531332323),new cljs.core.Keyword(null,"br3","br3",-207247672),new cljs.core.Keyword(null,"br8","br8",440047616)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ar9","ar9",-1382794795),new cljs.core.Keyword(null,"ar4","ar4",-1114433959),new cljs.core.Keyword(null,"cr4","cr4",82297276),new cljs.core.Keyword(null,"br4","br4",1245913039),new cljs.core.Keyword(null,"br9","br9",-526807160)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at0","at0",-1188495845),new cljs.core.Keyword(null,"at3","at3",261710258),new cljs.core.Keyword(null,"ar7","ar7",-752665554),new cljs.core.Keyword(null,"ar3","ar3",546625590),new cljs.core.Keyword(null,"cr4","cr4",82297276)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cr4","cr4",82297276),new cljs.core.Keyword(null,"br3","br3",-207247672),new cljs.core.Keyword(null,"br7","br7",-1694542206),new cljs.core.Keyword(null,"bt3","bt3",853768649),new cljs.core.Keyword(null,"bt0","bt0",1032208538)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at2","at2",1487610541),new cljs.core.Keyword(null,"at5","at5",643483805),new cljs.core.Keyword(null,"ar7","ar7",-752665554),new cljs.core.Keyword(null,"ar1","ar1",-1685696790),new cljs.core.Keyword(null,"cr0","cr0",25560664)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cr0","cr0",25560664),new cljs.core.Keyword(null,"br1","br1",-1957699932),new cljs.core.Keyword(null,"br7","br7",-1694542206),new cljs.core.Keyword(null,"bt5","bt5",-1659521636),new cljs.core.Keyword(null,"bt2","bt2",983259067)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ar5","ar5",1180792435),new cljs.core.Keyword(null,"ar1","ar1",-1685696790),new cljs.core.Keyword(null,"cr2","cr2",681854944),new cljs.core.Keyword(null,"br3","br3",-207247672),new cljs.core.Keyword(null,"br9","br9",-526807160)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br5","br5",-2115825396),new cljs.core.Keyword(null,"br1","br1",-1957699932),new cljs.core.Keyword(null,"cr2","cr2",681854944),new cljs.core.Keyword(null,"ar3","ar3",546625590),new cljs.core.Keyword(null,"ar9","ar9",-1382794795)], null)], null);
}
turi.moves.pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"br8","br8",440047616),new cljs.core.Keyword(null,"cr2","cr2",681854944),new cljs.core.Keyword(null,"br7","br7",-1694542206),new cljs.core.Keyword(null,"cr3","cr3",531332323),new cljs.core.Keyword(null,"br1","br1",-1957699932),new cljs.core.Keyword(null,"ar6","ar6",1956341540),new cljs.core.Keyword(null,"at1","at1",299835974),new cljs.core.Keyword(null,"bt4","bt4",718932615),new cljs.core.Keyword(null,"br0","br0",2048594952),new cljs.core.Keyword(null,"cr1","cr1",95557864),new cljs.core.Keyword(null,"br3","br3",-207247672),new cljs.core.Keyword(null,"br9","br9",-526807160),new cljs.core.Keyword(null,"bt3","bt3",853768649),new cljs.core.Keyword(null,"ar1","ar1",-1685696790),new cljs.core.Keyword(null,"ar8","ar8",-1436849813),new cljs.core.Keyword(null,"ar0","ar0",1221692395),new cljs.core.Keyword(null,"br2","br2",2097427564),new cljs.core.Keyword(null,"br5","br5",-2115825396),new cljs.core.Keyword(null,"at2","at2",1487610541),new cljs.core.Keyword(null,"ar7","ar7",-752665554),new cljs.core.Keyword(null,"br4","br4",1245913039),new cljs.core.Keyword(null,"at3","at3",261710258),new cljs.core.Keyword(null,"ar5","ar5",1180792435),new cljs.core.Keyword(null,"ar9","ar9",-1382794795),new cljs.core.Keyword(null,"ar3","ar3",546625590),new cljs.core.Keyword(null,"at4","at4",145365238),new cljs.core.Keyword(null,"bt1","bt1",606225847),new cljs.core.Keyword(null,"br6","br6",-1039212136),new cljs.core.Keyword(null,"cr0","cr0",25560664),new cljs.core.Keyword(null,"ar4","ar4",-1114433959),new cljs.core.Keyword(null,"bt0","bt0",1032208538),new cljs.core.Keyword(null,"at0","at0",-1188495845),new cljs.core.Keyword(null,"bt2","bt2",983259067),new cljs.core.Keyword(null,"bt5","bt5",-1659521636),new cljs.core.Keyword(null,"cr4","cr4",82297276),new cljs.core.Keyword(null,"ar2","ar2",51652188),new cljs.core.Keyword(null,"at5","at5",643483805)],[new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586)]));
turi.moves.pos_of_p = (function turi$moves$pos_of_p(p){
var G__27316 = cljs.core.deref(turi.moves.pos);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__27316) : p.call(null,G__27316));
});
turi.moves.oppo_pos = (function turi$moves$oppo_pos(pos){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),pos)){
return new cljs.core.Keyword(null,"b","b",1482224470);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"b","b",1482224470),pos)){
return new cljs.core.Keyword(null,"a","a",-2123407586);
} else {
return new cljs.core.Keyword(null,"c","c",-1763192079);

}
}
});
turi.moves.adjis = (function turi$moves$adjis(i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - (1)),(i + (1))], null);
});
turi.moves.valid_ix = (function turi$moves$valid_ix(ix,l){
return (((ix >= (0))) && ((ix < cljs.core.count(l))));
});
turi.moves.movs = (function turi$moves$movs(l,p,ix){
var ip = l.indexOf(p);
var ex = (ix + (ix - ip));
if(turi.moves.valid_ix(ix,l)){
var xp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,ix);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turi.moves.pos_of_p(xp),new cljs.core.Keyword(null,"c","c",-1763192079))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m","m",1632677161),xp,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"none","none",1333468478)], null);
} else {
if(((turi.moves.valid_ix(ex,l)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turi.moves.oppo_pos(turi.moves.pos_of_p(p)),turi.moves.pos_of_p(xp))))){
var yp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,ex);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turi.moves.pos_of_p(yp),new cljs.core.Keyword(null,"c","c",-1763192079))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m","m",1632677161),yp,new cljs.core.Keyword(null,"e","e",1381269198),xp], null);
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
}
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
});
turi.moves.pm_lp = (function turi$moves$pm_lp(l,p){
return cljs.core.filterv((function (p1__27317_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),p1__27317_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27318_SHARP_){
return turi.moves.movs(l,p,p1__27318_SHARP_);
}),turi.moves.adjis(l.indexOf(p))));
});
turi.moves.lhas = (function turi$moves$lhas(l,e){
return cljs.core.some((function (p1__27319_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27319_SHARP_,e);
}),l);
});
turi.moves.pmoves = (function turi$moves$pmoves(p){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turi.moves.pos_of_p(p),new cljs.core.Keyword(null,"none","none",1333468478))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27320_SHARP_){
return turi.moves.pm_lp(p1__27320_SHARP_,p);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27321_SHARP_){
return turi.moves.lhas(p1__27321_SHARP_,p);
}),turi.moves.lines)));
}
});
turi.moves.check_make_pmove = (function turi$moves$check_make_pmove(p,move){
if(cljs.core.truth_(cljs.core.some((function (p1__27322_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27322_SHARP_,move);
}),turi.moves.pmoves(p)))){
var poo = cljs.core.deref(turi.moves.pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(move))){
return cljs.core.reset_BANG_(turi.moves.pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(poo,p,new cljs.core.Keyword(null,"c","c",-1763192079)),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(move),turi.moves.pos_of_p(p)));
} else {
return cljs.core.reset_BANG_(turi.moves.pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(poo,p,new cljs.core.Keyword(null,"c","c",-1763192079)),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(move),turi.moves.pos_of_p(p)),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(move),new cljs.core.Keyword(null,"c","c",-1763192079)));
}
} else {
return null;
}
});

//# sourceMappingURL=turi.moves.js.map
