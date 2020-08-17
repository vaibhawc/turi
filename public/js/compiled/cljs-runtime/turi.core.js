goog.provide('turi.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('turi.moves');
if((typeof turi !== 'undefined') && (typeof turi.core !== 'undefined') && (typeof turi.core.app_state !== 'undefined')){
} else {
turi.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"m","m",1632677161),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY], null));
}
turi.core.select_p = (function turi$core$select_p(p){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"c","c",-1763192079),turi.moves.pos_of_p(p))))){
var npmoves = turi.moves.pmoves(p);
return cljs.core.reset_BANG_(turi.core.app_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(turi.core.app_state),new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185),p),new cljs.core.Keyword(null,"m","m",1632677161),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m","m",1632677161),npmoves)),new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),npmoves)));
} else {
if(cljs.core.truth_(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state))))?turi.moves.lhas(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state)),p):false))){
var expmoves = turi.moves.pmoves(new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state)));
var npmoves = turi.moves.pmoves(p);
turi.moves.check_make_pmove(new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state)),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(p1__27311_SHARP_),p);
}),expmoves)));

return cljs.core.reset_BANG_(turi.core.app_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(turi.core.app_state),new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185),p),new cljs.core.Keyword(null,"m","m",1632677161),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m","m",1632677161),turi.moves.pmoves(p))),new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),turi.moves.pmoves(p))));
} else {
return null;
}
}
});
if((typeof turi !== 'undefined') && (typeof turi.core !== 'undefined') && (typeof turi.core.x !== 'undefined')){
} else {
turi.core.x = (78);
}
turi.core.draw_point = (function turi$core$draw_point(p,sx,sy,sc){
var pl = turi.moves.pos_of_p(p);
var r = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pl,new cljs.core.Keyword(null,"c","c",-1763192079)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"selected-p","selected-p",-1231603185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state))))?(20):(12)):(cljs.core.truth_(turi.moves.lhas(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state)),p))?(10):(1)));
var color = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pl,new cljs.core.Keyword(null,"a","a",-2123407586)))?"red":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pl,new cljs.core.Keyword(null,"b","b",1482224470)))?"blue":(cljs.core.truth_(turi.moves.lhas(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(turi.core.app_state)),p))?"green":"grey"
)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return turi.core.select_p(p);
}),new cljs.core.Keyword(null,"cx","cx",1272694324),(sx + (sc * cljs.core.first((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(turi.moves.points) : p.call(null,turi.moves.points))))),new cljs.core.Keyword(null,"cy","cy",755331060),(sy + (sc * cljs.core.second((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(turi.moves.points) : p.call(null,turi.moves.points))))),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"300ms"], null)], null)], null);
});
turi.core.draw_line = (function turi$core$draw_line(p1,p2,sx,sy,sc){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2)].join(''),new cljs.core.Keyword(null,"x1","x1",-1863922247),(sx + (sc * cljs.core.first((p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(turi.moves.points) : p1.call(null,turi.moves.points))))),new cljs.core.Keyword(null,"y1","y1",589123466),(sy + (sc * cljs.core.second((p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(turi.moves.points) : p1.call(null,turi.moves.points))))),new cljs.core.Keyword(null,"x2","x2",-1362513475),(sx + (sc * cljs.core.first((p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(turi.moves.points) : p2.call(null,turi.moves.points))))),new cljs.core.Keyword(null,"y2","y2",-718691301),(sy + (sc * cljs.core.second((p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(turi.moves.points) : p2.call(null,turi.moves.points))))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null)], null);
});
turi.core.board = (function turi$core$board(){
cljs.core.deref(turi.core.app_state);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),((48) + ((4) * turi.core.x)),new cljs.core.Keyword(null,"height","height",1025178622),((48) + ((8) * turi.core.x)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27312_SHARP_){
return turi.core.draw_line(cljs.core.first(p1__27312_SHARP_),cljs.core.last(p1__27312_SHARP_),((22) + ((2) * turi.core.x)),((22) + ((4) * turi.core.x)),turi.core.x);
}),turi.moves.lines),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27313_SHARP_){
return turi.core.draw_point(p1__27313_SHARP_,((22) + ((2) * turi.core.x)),((22) + ((4) * turi.core.x)),turi.core.x);
}),cljs.core.keys(turi.moves.points))], null);
});
turi.core.start = (function turi$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [turi.core.board], null),document.getElementById("app"));
});
turi.core.init = (function turi$core$init(){
return turi.core.start();
});
goog.exportSymbol('turi.core.init', turi.core.init);
turi.core.stop = (function turi$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=turi.core.js.map
