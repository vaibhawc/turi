goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36781 = arguments.length;
var i__4790__auto___36782 = (0);
while(true){
if((i__4790__auto___36782 < len__4789__auto___36781)){
args__4795__auto__.push((arguments[i__4790__auto___36782]));

var G__36783 = (i__4790__auto___36782 + (1));
i__4790__auto___36782 = G__36783;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36556){
var G__36557 = cljs.core.first(seq36556);
var seq36556__$1 = cljs.core.next(seq36556);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36557,seq36556__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36571 = cljs.core.seq(sources);
var chunk__36572 = null;
var count__36573 = (0);
var i__36574 = (0);
while(true){
if((i__36574 < count__36573)){
var map__36593 = chunk__36572.cljs$core$IIndexed$_nth$arity$2(null,i__36574);
var map__36593__$1 = (((((!((map__36593 == null))))?(((((map__36593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36593):map__36593);
var src = map__36593__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36595){var e_36786 = e36595;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36786);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36786.message)].join('')));
}

var G__36787 = seq__36571;
var G__36788 = chunk__36572;
var G__36789 = count__36573;
var G__36790 = (i__36574 + (1));
seq__36571 = G__36787;
chunk__36572 = G__36788;
count__36573 = G__36789;
i__36574 = G__36790;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36571);
if(temp__5735__auto__){
var seq__36571__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36571__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36571__$1);
var G__36791 = cljs.core.chunk_rest(seq__36571__$1);
var G__36792 = c__4609__auto__;
var G__36793 = cljs.core.count(c__4609__auto__);
var G__36794 = (0);
seq__36571 = G__36791;
chunk__36572 = G__36792;
count__36573 = G__36793;
i__36574 = G__36794;
continue;
} else {
var map__36598 = cljs.core.first(seq__36571__$1);
var map__36598__$1 = (((((!((map__36598 == null))))?(((((map__36598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36598):map__36598);
var src = map__36598__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36604){var e_36797 = e36604;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36797);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36797.message)].join('')));
}

var G__36798 = cljs.core.next(seq__36571__$1);
var G__36799 = null;
var G__36800 = (0);
var G__36801 = (0);
seq__36571 = G__36798;
chunk__36572 = G__36799;
count__36573 = G__36800;
i__36574 = G__36801;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36605 = cljs.core.seq(js_requires);
var chunk__36606 = null;
var count__36607 = (0);
var i__36608 = (0);
while(true){
if((i__36608 < count__36607)){
var js_ns = chunk__36606.cljs$core$IIndexed$_nth$arity$2(null,i__36608);
var require_str_36802 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36802);


var G__36803 = seq__36605;
var G__36804 = chunk__36606;
var G__36805 = count__36607;
var G__36806 = (i__36608 + (1));
seq__36605 = G__36803;
chunk__36606 = G__36804;
count__36607 = G__36805;
i__36608 = G__36806;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36605);
if(temp__5735__auto__){
var seq__36605__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36605__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36605__$1);
var G__36807 = cljs.core.chunk_rest(seq__36605__$1);
var G__36808 = c__4609__auto__;
var G__36809 = cljs.core.count(c__4609__auto__);
var G__36810 = (0);
seq__36605 = G__36807;
chunk__36606 = G__36808;
count__36607 = G__36809;
i__36608 = G__36810;
continue;
} else {
var js_ns = cljs.core.first(seq__36605__$1);
var require_str_36811 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36811);


var G__36812 = cljs.core.next(seq__36605__$1);
var G__36813 = null;
var G__36814 = (0);
var G__36815 = (0);
seq__36605 = G__36812;
chunk__36606 = G__36813;
count__36607 = G__36814;
i__36608 = G__36815;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36613 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36613) : callback.call(null,G__36613));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36615){
var map__36616 = p__36615;
var map__36616__$1 = (((((!((map__36616 == null))))?(((((map__36616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36616):map__36616);
var msg = map__36616__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36616__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36618(s__36619){
return (new cljs.core.LazySeq(null,(function (){
var s__36619__$1 = s__36619;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36619__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36624 = cljs.core.first(xs__6292__auto__);
var map__36624__$1 = (((((!((map__36624 == null))))?(((((map__36624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36624):map__36624);
var src = map__36624__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36624__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36624__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__36619__$1,map__36624,map__36624__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36616,map__36616__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36618_$_iter__36620(s__36621){
return (new cljs.core.LazySeq(null,((function (s__36619__$1,map__36624,map__36624__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36616,map__36616__$1,msg,info,reload_info){
return (function (){
var s__36621__$1 = s__36621;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36621__$1);
if(temp__5735__auto____$1){
var s__36621__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36621__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36621__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36623 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36622 = (0);
while(true){
if((i__36622 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__36622);
cljs.core.chunk_append(b__36623,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36818 = (i__36622 + (1));
i__36622 = G__36818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36623),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36618_$_iter__36620(cljs.core.chunk_rest(s__36621__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36623),null);
}
} else {
var warning = cljs.core.first(s__36621__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36618_$_iter__36620(cljs.core.rest(s__36621__$2)));
}
} else {
return null;
}
break;
}
});})(s__36619__$1,map__36624,map__36624__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36616,map__36616__$1,msg,info,reload_info))
,null,null));
});})(s__36619__$1,map__36624,map__36624__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36616,map__36616__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36618(cljs.core.rest(s__36619__$1)));
} else {
var G__36820 = cljs.core.rest(s__36619__$1);
s__36619__$1 = G__36820;
continue;
}
} else {
var G__36821 = cljs.core.rest(s__36619__$1);
s__36619__$1 = G__36821;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36626_36822 = cljs.core.seq(warnings);
var chunk__36627_36823 = null;
var count__36628_36824 = (0);
var i__36629_36825 = (0);
while(true){
if((i__36629_36825 < count__36628_36824)){
var map__36640_36826 = chunk__36627_36823.cljs$core$IIndexed$_nth$arity$2(null,i__36629_36825);
var map__36640_36827__$1 = (((((!((map__36640_36826 == null))))?(((((map__36640_36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36640_36826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36640_36826):map__36640_36826);
var w_36828 = map__36640_36827__$1;
var msg_36829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36640_36827__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36640_36827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36640_36827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36640_36827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36832)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36831),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36829__$1)].join(''));


var G__36836 = seq__36626_36822;
var G__36837 = chunk__36627_36823;
var G__36838 = count__36628_36824;
var G__36839 = (i__36629_36825 + (1));
seq__36626_36822 = G__36836;
chunk__36627_36823 = G__36837;
count__36628_36824 = G__36838;
i__36629_36825 = G__36839;
continue;
} else {
var temp__5735__auto___36840 = cljs.core.seq(seq__36626_36822);
if(temp__5735__auto___36840){
var seq__36626_36841__$1 = temp__5735__auto___36840;
if(cljs.core.chunked_seq_QMARK_(seq__36626_36841__$1)){
var c__4609__auto___36842 = cljs.core.chunk_first(seq__36626_36841__$1);
var G__36843 = cljs.core.chunk_rest(seq__36626_36841__$1);
var G__36844 = c__4609__auto___36842;
var G__36845 = cljs.core.count(c__4609__auto___36842);
var G__36846 = (0);
seq__36626_36822 = G__36843;
chunk__36627_36823 = G__36844;
count__36628_36824 = G__36845;
i__36629_36825 = G__36846;
continue;
} else {
var map__36644_36847 = cljs.core.first(seq__36626_36841__$1);
var map__36644_36848__$1 = (((((!((map__36644_36847 == null))))?(((((map__36644_36847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36644_36847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36644_36847):map__36644_36847);
var w_36849 = map__36644_36848__$1;
var msg_36850__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36644_36848__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36644_36848__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36644_36848__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36644_36848__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36853)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36851),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36852),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36850__$1)].join(''));


var G__36857 = cljs.core.next(seq__36626_36841__$1);
var G__36858 = null;
var G__36859 = (0);
var G__36860 = (0);
seq__36626_36822 = G__36857;
chunk__36627_36823 = G__36858;
count__36628_36824 = G__36859;
i__36629_36825 = G__36860;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36614_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36614_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36646){
var map__36647 = p__36646;
var map__36647__$1 = (((((!((map__36647 == null))))?(((((map__36647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36647):map__36647);
var msg = map__36647__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36647__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36649 = cljs.core.seq(updates);
var chunk__36651 = null;
var count__36652 = (0);
var i__36653 = (0);
while(true){
if((i__36653 < count__36652)){
var path = chunk__36651.cljs$core$IIndexed$_nth$arity$2(null,i__36653);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36710_36862 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36713_36863 = null;
var count__36714_36864 = (0);
var i__36715_36865 = (0);
while(true){
if((i__36715_36865 < count__36714_36864)){
var node_36866 = chunk__36713_36863.cljs$core$IIndexed$_nth$arity$2(null,i__36715_36865);
var path_match_36867 = shadow.cljs.devtools.client.browser.match_paths(node_36866.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36867)){
var new_link_36868 = (function (){var G__36724 = node_36866.cloneNode(true);
G__36724.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36867),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36724;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36867], 0));

goog.dom.insertSiblingAfter(new_link_36868,node_36866);

goog.dom.removeNode(node_36866);


var G__36869 = seq__36710_36862;
var G__36870 = chunk__36713_36863;
var G__36871 = count__36714_36864;
var G__36872 = (i__36715_36865 + (1));
seq__36710_36862 = G__36869;
chunk__36713_36863 = G__36870;
count__36714_36864 = G__36871;
i__36715_36865 = G__36872;
continue;
} else {
var G__36873 = seq__36710_36862;
var G__36874 = chunk__36713_36863;
var G__36875 = count__36714_36864;
var G__36876 = (i__36715_36865 + (1));
seq__36710_36862 = G__36873;
chunk__36713_36863 = G__36874;
count__36714_36864 = G__36875;
i__36715_36865 = G__36876;
continue;
}
} else {
var temp__5735__auto___36877 = cljs.core.seq(seq__36710_36862);
if(temp__5735__auto___36877){
var seq__36710_36878__$1 = temp__5735__auto___36877;
if(cljs.core.chunked_seq_QMARK_(seq__36710_36878__$1)){
var c__4609__auto___36879 = cljs.core.chunk_first(seq__36710_36878__$1);
var G__36880 = cljs.core.chunk_rest(seq__36710_36878__$1);
var G__36881 = c__4609__auto___36879;
var G__36882 = cljs.core.count(c__4609__auto___36879);
var G__36883 = (0);
seq__36710_36862 = G__36880;
chunk__36713_36863 = G__36881;
count__36714_36864 = G__36882;
i__36715_36865 = G__36883;
continue;
} else {
var node_36884 = cljs.core.first(seq__36710_36878__$1);
var path_match_36885 = shadow.cljs.devtools.client.browser.match_paths(node_36884.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36885)){
var new_link_36886 = (function (){var G__36725 = node_36884.cloneNode(true);
G__36725.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36885),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36725;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36885], 0));

goog.dom.insertSiblingAfter(new_link_36886,node_36884);

goog.dom.removeNode(node_36884);


var G__36887 = cljs.core.next(seq__36710_36878__$1);
var G__36888 = null;
var G__36889 = (0);
var G__36890 = (0);
seq__36710_36862 = G__36887;
chunk__36713_36863 = G__36888;
count__36714_36864 = G__36889;
i__36715_36865 = G__36890;
continue;
} else {
var G__36891 = cljs.core.next(seq__36710_36878__$1);
var G__36892 = null;
var G__36893 = (0);
var G__36894 = (0);
seq__36710_36862 = G__36891;
chunk__36713_36863 = G__36892;
count__36714_36864 = G__36893;
i__36715_36865 = G__36894;
continue;
}
}
} else {
}
}
break;
}


var G__36895 = seq__36649;
var G__36896 = chunk__36651;
var G__36897 = count__36652;
var G__36898 = (i__36653 + (1));
seq__36649 = G__36895;
chunk__36651 = G__36896;
count__36652 = G__36897;
i__36653 = G__36898;
continue;
} else {
var G__36899 = seq__36649;
var G__36900 = chunk__36651;
var G__36901 = count__36652;
var G__36902 = (i__36653 + (1));
seq__36649 = G__36899;
chunk__36651 = G__36900;
count__36652 = G__36901;
i__36653 = G__36902;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36649);
if(temp__5735__auto__){
var seq__36649__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36649__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36649__$1);
var G__36903 = cljs.core.chunk_rest(seq__36649__$1);
var G__36904 = c__4609__auto__;
var G__36905 = cljs.core.count(c__4609__auto__);
var G__36906 = (0);
seq__36649 = G__36903;
chunk__36651 = G__36904;
count__36652 = G__36905;
i__36653 = G__36906;
continue;
} else {
var path = cljs.core.first(seq__36649__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36726_36908 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36729_36909 = null;
var count__36730_36910 = (0);
var i__36731_36911 = (0);
while(true){
if((i__36731_36911 < count__36730_36910)){
var node_36912 = chunk__36729_36909.cljs$core$IIndexed$_nth$arity$2(null,i__36731_36911);
var path_match_36913 = shadow.cljs.devtools.client.browser.match_paths(node_36912.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36913)){
var new_link_36914 = (function (){var G__36738 = node_36912.cloneNode(true);
G__36738.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36913),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36738;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36913], 0));

goog.dom.insertSiblingAfter(new_link_36914,node_36912);

goog.dom.removeNode(node_36912);


var G__36916 = seq__36726_36908;
var G__36917 = chunk__36729_36909;
var G__36918 = count__36730_36910;
var G__36919 = (i__36731_36911 + (1));
seq__36726_36908 = G__36916;
chunk__36729_36909 = G__36917;
count__36730_36910 = G__36918;
i__36731_36911 = G__36919;
continue;
} else {
var G__36920 = seq__36726_36908;
var G__36921 = chunk__36729_36909;
var G__36922 = count__36730_36910;
var G__36923 = (i__36731_36911 + (1));
seq__36726_36908 = G__36920;
chunk__36729_36909 = G__36921;
count__36730_36910 = G__36922;
i__36731_36911 = G__36923;
continue;
}
} else {
var temp__5735__auto___36924__$1 = cljs.core.seq(seq__36726_36908);
if(temp__5735__auto___36924__$1){
var seq__36726_36925__$1 = temp__5735__auto___36924__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36726_36925__$1)){
var c__4609__auto___36926 = cljs.core.chunk_first(seq__36726_36925__$1);
var G__36927 = cljs.core.chunk_rest(seq__36726_36925__$1);
var G__36928 = c__4609__auto___36926;
var G__36929 = cljs.core.count(c__4609__auto___36926);
var G__36930 = (0);
seq__36726_36908 = G__36927;
chunk__36729_36909 = G__36928;
count__36730_36910 = G__36929;
i__36731_36911 = G__36930;
continue;
} else {
var node_36931 = cljs.core.first(seq__36726_36925__$1);
var path_match_36932 = shadow.cljs.devtools.client.browser.match_paths(node_36931.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36932)){
var new_link_36933 = (function (){var G__36739 = node_36931.cloneNode(true);
G__36739.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36932),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36739;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36932], 0));

goog.dom.insertSiblingAfter(new_link_36933,node_36931);

goog.dom.removeNode(node_36931);


var G__36934 = cljs.core.next(seq__36726_36925__$1);
var G__36935 = null;
var G__36936 = (0);
var G__36937 = (0);
seq__36726_36908 = G__36934;
chunk__36729_36909 = G__36935;
count__36730_36910 = G__36936;
i__36731_36911 = G__36937;
continue;
} else {
var G__36938 = cljs.core.next(seq__36726_36925__$1);
var G__36939 = null;
var G__36940 = (0);
var G__36941 = (0);
seq__36726_36908 = G__36938;
chunk__36729_36909 = G__36939;
count__36730_36910 = G__36940;
i__36731_36911 = G__36941;
continue;
}
}
} else {
}
}
break;
}


var G__36942 = cljs.core.next(seq__36649__$1);
var G__36943 = null;
var G__36944 = (0);
var G__36945 = (0);
seq__36649 = G__36942;
chunk__36651 = G__36943;
count__36652 = G__36944;
i__36653 = G__36945;
continue;
} else {
var G__36946 = cljs.core.next(seq__36649__$1);
var G__36947 = null;
var G__36948 = (0);
var G__36949 = (0);
seq__36649 = G__36946;
chunk__36651 = G__36947;
count__36652 = G__36948;
i__36653 = G__36949;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36744){
var map__36745 = p__36744;
var map__36745__$1 = (((((!((map__36745 == null))))?(((((map__36745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36745):map__36745);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36745__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36749,done){
var map__36750 = p__36749;
var map__36750__$1 = (((((!((map__36750 == null))))?(((((map__36750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36750):map__36750);
var msg = map__36750__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36752){
var map__36753 = p__36752;
var map__36753__$1 = (((((!((map__36753 == null))))?(((((map__36753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36753):map__36753);
var src = map__36753__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36753__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36755){var e = e36755;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36756,done){
var map__36757 = p__36756;
var map__36757__$1 = (((((!((map__36757 == null))))?(((((map__36757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36757):map__36757);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36757__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36757__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36759){
var map__36760 = p__36759;
var map__36760__$1 = (((((!((map__36760 == null))))?(((((map__36760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36760):map__36760);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36760__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36762,done){
var map__36763 = p__36762;
var map__36763__$1 = (((((!((map__36763 == null))))?(((((map__36763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36763):map__36763);
var msg = map__36763__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36763__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36765_36950 = type;
var G__36765_36951__$1 = (((G__36765_36950 instanceof cljs.core.Keyword))?G__36765_36950.fqn:null);
switch (G__36765_36951__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36773 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36773.cljs$core$IFn$_invoke$arity$1 ? fexpr__36773.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__36773.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36774){var e = e36774;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36972 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36972)){
var s_36973 = temp__5735__auto___36972;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36973.onclose = (function (e){
return null;
}));

s_36973.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = goog.global.document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
