goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38056){
var map__38057 = p__38056;
var map__38057__$1 = (((((!((map__38057 == null))))?(((((map__38057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38057):map__38057);
var m = map__38057__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38059_38281 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38060_38282 = null;
var count__38061_38283 = (0);
var i__38062_38284 = (0);
while(true){
if((i__38062_38284 < count__38061_38283)){
var f_38285 = chunk__38060_38282.cljs$core$IIndexed$_nth$arity$2(null,i__38062_38284);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38285], 0));


var G__38286 = seq__38059_38281;
var G__38287 = chunk__38060_38282;
var G__38288 = count__38061_38283;
var G__38289 = (i__38062_38284 + (1));
seq__38059_38281 = G__38286;
chunk__38060_38282 = G__38287;
count__38061_38283 = G__38288;
i__38062_38284 = G__38289;
continue;
} else {
var temp__5735__auto___38290 = cljs.core.seq(seq__38059_38281);
if(temp__5735__auto___38290){
var seq__38059_38291__$1 = temp__5735__auto___38290;
if(cljs.core.chunked_seq_QMARK_(seq__38059_38291__$1)){
var c__4609__auto___38293 = cljs.core.chunk_first(seq__38059_38291__$1);
var G__38294 = cljs.core.chunk_rest(seq__38059_38291__$1);
var G__38295 = c__4609__auto___38293;
var G__38296 = cljs.core.count(c__4609__auto___38293);
var G__38297 = (0);
seq__38059_38281 = G__38294;
chunk__38060_38282 = G__38295;
count__38061_38283 = G__38296;
i__38062_38284 = G__38297;
continue;
} else {
var f_38298 = cljs.core.first(seq__38059_38291__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38298], 0));


var G__38299 = cljs.core.next(seq__38059_38291__$1);
var G__38300 = null;
var G__38301 = (0);
var G__38302 = (0);
seq__38059_38281 = G__38299;
chunk__38060_38282 = G__38300;
count__38061_38283 = G__38301;
i__38062_38284 = G__38302;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38303 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38303], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38303)))?cljs.core.second(arglists_38303):arglists_38303)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38065_38304 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38066_38305 = null;
var count__38067_38306 = (0);
var i__38068_38307 = (0);
while(true){
if((i__38068_38307 < count__38067_38306)){
var vec__38085_38308 = chunk__38066_38305.cljs$core$IIndexed$_nth$arity$2(null,i__38068_38307);
var name_38309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085_38308,(0),null);
var map__38088_38310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085_38308,(1),null);
var map__38088_38311__$1 = (((((!((map__38088_38310 == null))))?(((((map__38088_38310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38088_38310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38088_38310):map__38088_38310);
var doc_38312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38088_38311__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38088_38311__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38309], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38313], 0));

if(cljs.core.truth_(doc_38312)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38312], 0));
} else {
}


var G__38314 = seq__38065_38304;
var G__38315 = chunk__38066_38305;
var G__38316 = count__38067_38306;
var G__38317 = (i__38068_38307 + (1));
seq__38065_38304 = G__38314;
chunk__38066_38305 = G__38315;
count__38067_38306 = G__38316;
i__38068_38307 = G__38317;
continue;
} else {
var temp__5735__auto___38318 = cljs.core.seq(seq__38065_38304);
if(temp__5735__auto___38318){
var seq__38065_38319__$1 = temp__5735__auto___38318;
if(cljs.core.chunked_seq_QMARK_(seq__38065_38319__$1)){
var c__4609__auto___38320 = cljs.core.chunk_first(seq__38065_38319__$1);
var G__38321 = cljs.core.chunk_rest(seq__38065_38319__$1);
var G__38322 = c__4609__auto___38320;
var G__38323 = cljs.core.count(c__4609__auto___38320);
var G__38324 = (0);
seq__38065_38304 = G__38321;
chunk__38066_38305 = G__38322;
count__38067_38306 = G__38323;
i__38068_38307 = G__38324;
continue;
} else {
var vec__38155_38325 = cljs.core.first(seq__38065_38319__$1);
var name_38326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38155_38325,(0),null);
var map__38158_38327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38155_38325,(1),null);
var map__38158_38328__$1 = (((((!((map__38158_38327 == null))))?(((((map__38158_38327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38158_38327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38158_38327):map__38158_38327);
var doc_38329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38158_38328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38158_38328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38326], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38330], 0));

if(cljs.core.truth_(doc_38329)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38329], 0));
} else {
}


var G__38331 = cljs.core.next(seq__38065_38319__$1);
var G__38332 = null;
var G__38333 = (0);
var G__38334 = (0);
seq__38065_38304 = G__38331;
chunk__38066_38305 = G__38332;
count__38067_38306 = G__38333;
i__38068_38307 = G__38334;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38182 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38183 = null;
var count__38184 = (0);
var i__38185 = (0);
while(true){
if((i__38185 < count__38184)){
var role = chunk__38183.cljs$core$IIndexed$_nth$arity$2(null,i__38185);
var temp__5735__auto___38335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38335__$1)){
var spec_38336 = temp__5735__auto___38335__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38336)], 0));
} else {
}


var G__38337 = seq__38182;
var G__38338 = chunk__38183;
var G__38339 = count__38184;
var G__38340 = (i__38185 + (1));
seq__38182 = G__38337;
chunk__38183 = G__38338;
count__38184 = G__38339;
i__38185 = G__38340;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38182);
if(temp__5735__auto____$1){
var seq__38182__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38182__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38182__$1);
var G__38341 = cljs.core.chunk_rest(seq__38182__$1);
var G__38342 = c__4609__auto__;
var G__38343 = cljs.core.count(c__4609__auto__);
var G__38344 = (0);
seq__38182 = G__38341;
chunk__38183 = G__38342;
count__38184 = G__38343;
i__38185 = G__38344;
continue;
} else {
var role = cljs.core.first(seq__38182__$1);
var temp__5735__auto___38345__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38345__$2)){
var spec_38346 = temp__5735__auto___38345__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38346)], 0));
} else {
}


var G__38347 = cljs.core.next(seq__38182__$1);
var G__38348 = null;
var G__38349 = (0);
var G__38350 = (0);
seq__38182 = G__38347;
chunk__38183 = G__38348;
count__38184 = G__38349;
i__38185 = G__38350;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38354 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38355 = cljs.core.ex_cause(t);
via = G__38354;
t = G__38355;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38206 = datafied_throwable;
var map__38206__$1 = (((((!((map__38206 == null))))?(((((map__38206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38206):map__38206);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38206__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38206__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38206__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38207 = cljs.core.last(via);
var map__38207__$1 = (((((!((map__38207 == null))))?(((((map__38207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38207):map__38207);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38208 = data;
var map__38208__$1 = (((((!((map__38208 == null))))?(((((map__38208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38208):map__38208);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38208__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38208__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38208__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38209 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38209__$1 = (((((!((map__38209 == null))))?(((((map__38209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38209):map__38209);
var top_data = map__38209__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38209__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38215 = phase;
var G__38215__$1 = (((G__38215 instanceof cljs.core.Keyword))?G__38215.fqn:null);
switch (G__38215__$1) {
case "read-source":
var map__38216 = data;
var map__38216__$1 = (((((!((map__38216 == null))))?(((((map__38216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38216):map__38216);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38216__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38216__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38218 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38218__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38218,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38218);
var G__38218__$2 = (cljs.core.truth_((function (){var fexpr__38219 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38219.cljs$core$IFn$_invoke$arity$1 ? fexpr__38219.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38219.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38218__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38218__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38218__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38218__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38220 = top_data;
var G__38220__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38220,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38220);
var G__38220__$2 = (cljs.core.truth_((function (){var fexpr__38221 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38221.cljs$core$IFn$_invoke$arity$1 ? fexpr__38221.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38221.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38220__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38220__$1);
var G__38220__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38220__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38220__$2);
var G__38220__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38220__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38220__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38220__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38220__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38222 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38222,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38222,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38222,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38222,(3),null);
var G__38225 = top_data;
var G__38225__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38225,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38225);
var G__38225__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38225__$1);
var G__38225__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38225__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38225__$2);
var G__38225__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38225__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38225__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38225__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38225__$4;
}

break;
case "execution":
var vec__38226 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38226,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38226,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38226,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38226,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38205_SHARP_){
var or__4185__auto__ = (p1__38205_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__38231 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38231.cljs$core$IFn$_invoke$arity$1 ? fexpr__38231.cljs$core$IFn$_invoke$arity$1(p1__38205_SHARP_) : fexpr__38231.call(null,p1__38205_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__38232 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38232__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38232,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38232);
var G__38232__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38232__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38232__$1);
var G__38232__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38232__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38232__$2);
var G__38232__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38232__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38232__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38232__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38232__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38215__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38235){
var map__38236 = p__38235;
var map__38236__$1 = (((((!((map__38236 == null))))?(((((map__38236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38236):map__38236);
var triage_data = map__38236__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38238 = phase;
var G__38238__$1 = (((G__38238 instanceof cljs.core.Keyword))?G__38238.fqn:null);
switch (G__38238__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38239 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38240 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38241 = loc;
var G__38242 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38243_38364 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38244_38365 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38245_38366 = true;
var _STAR_print_fn_STAR__temp_val__38246_38367 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38245_38366);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38246_38367);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38233_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38233_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38244_38365);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38243_38364);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38239,G__38240,G__38241,G__38242) : format.call(null,G__38239,G__38240,G__38241,G__38242));

break;
case "macroexpansion":
var G__38247 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38248 = cause_type;
var G__38249 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38250 = loc;
var G__38251 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38247,G__38248,G__38249,G__38250,G__38251) : format.call(null,G__38247,G__38248,G__38249,G__38250,G__38251));

break;
case "compile-syntax-check":
var G__38252 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38253 = cause_type;
var G__38254 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38255 = loc;
var G__38256 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38252,G__38253,G__38254,G__38255,G__38256) : format.call(null,G__38252,G__38253,G__38254,G__38255,G__38256));

break;
case "compilation":
var G__38258 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38259 = cause_type;
var G__38260 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38261 = loc;
var G__38262 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38258,G__38259,G__38260,G__38261,G__38262) : format.call(null,G__38258,G__38259,G__38260,G__38261,G__38262));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38263 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38264 = symbol;
var G__38265 = loc;
var G__38266 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38267_38369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38268_38370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38269_38371 = true;
var _STAR_print_fn_STAR__temp_val__38270_38372 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38269_38371);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38270_38372);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38234_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38234_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38268_38370);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38267_38369);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38263,G__38264,G__38265,G__38266) : format.call(null,G__38263,G__38264,G__38265,G__38266));
} else {
var G__38275 = "Execution error%s at %s(%s).\n%s\n";
var G__38276 = cause_type;
var G__38277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38278 = loc;
var G__38279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38275,G__38276,G__38277,G__38278,G__38279) : format.call(null,G__38275,G__38276,G__38277,G__38278,G__38279));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38238__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
