goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34605 = coll;
var G__34606 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34605,G__34606) : shadow.dom.lazy_native_coll_seq.call(null,G__34605,G__34606));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34617 = arguments.length;
switch (G__34617) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34645 = arguments.length;
switch (G__34645) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34651 = arguments.length;
switch (G__34651) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34658 = arguments.length;
switch (G__34658) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34673 = arguments.length;
switch (G__34673) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34683 = arguments.length;
switch (G__34683) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34708){if((e34708 instanceof Object)){
var e = e34708;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34708;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34715 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34716 = null;
var count__34717 = (0);
var i__34718 = (0);
while(true){
if((i__34718 < count__34717)){
var el = chunk__34716.cljs$core$IIndexed$_nth$arity$2(null,i__34718);
var handler_35280__$1 = ((function (seq__34715,chunk__34716,count__34717,i__34718,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34715,chunk__34716,count__34717,i__34718,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35280__$1);


var G__35281 = seq__34715;
var G__35282 = chunk__34716;
var G__35283 = count__34717;
var G__35284 = (i__34718 + (1));
seq__34715 = G__35281;
chunk__34716 = G__35282;
count__34717 = G__35283;
i__34718 = G__35284;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34715);
if(temp__5735__auto__){
var seq__34715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34715__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34715__$1);
var G__35285 = cljs.core.chunk_rest(seq__34715__$1);
var G__35286 = c__4609__auto__;
var G__35287 = cljs.core.count(c__4609__auto__);
var G__35288 = (0);
seq__34715 = G__35285;
chunk__34716 = G__35286;
count__34717 = G__35287;
i__34718 = G__35288;
continue;
} else {
var el = cljs.core.first(seq__34715__$1);
var handler_35289__$1 = ((function (seq__34715,chunk__34716,count__34717,i__34718,el,seq__34715__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34715,chunk__34716,count__34717,i__34718,el,seq__34715__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35289__$1);


var G__35290 = cljs.core.next(seq__34715__$1);
var G__35291 = null;
var G__35292 = (0);
var G__35293 = (0);
seq__34715 = G__35290;
chunk__34716 = G__35291;
count__34717 = G__35292;
i__34718 = G__35293;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34742 = arguments.length;
switch (G__34742) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34743 = cljs.core.seq(events);
var chunk__34744 = null;
var count__34745 = (0);
var i__34746 = (0);
while(true){
if((i__34746 < count__34745)){
var vec__34753 = chunk__34744.cljs$core$IIndexed$_nth$arity$2(null,i__34746);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35295 = seq__34743;
var G__35296 = chunk__34744;
var G__35297 = count__34745;
var G__35298 = (i__34746 + (1));
seq__34743 = G__35295;
chunk__34744 = G__35296;
count__34745 = G__35297;
i__34746 = G__35298;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34743);
if(temp__5735__auto__){
var seq__34743__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34743__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34743__$1);
var G__35299 = cljs.core.chunk_rest(seq__34743__$1);
var G__35300 = c__4609__auto__;
var G__35301 = cljs.core.count(c__4609__auto__);
var G__35302 = (0);
seq__34743 = G__35299;
chunk__34744 = G__35300;
count__34745 = G__35301;
i__34746 = G__35302;
continue;
} else {
var vec__34756 = cljs.core.first(seq__34743__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35303 = cljs.core.next(seq__34743__$1);
var G__35304 = null;
var G__35305 = (0);
var G__35306 = (0);
seq__34743 = G__35303;
chunk__34744 = G__35304;
count__34745 = G__35305;
i__34746 = G__35306;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34761 = cljs.core.seq(styles);
var chunk__34762 = null;
var count__34763 = (0);
var i__34764 = (0);
while(true){
if((i__34764 < count__34763)){
var vec__34780 = chunk__34762.cljs$core$IIndexed$_nth$arity$2(null,i__34764);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35307 = seq__34761;
var G__35308 = chunk__34762;
var G__35309 = count__34763;
var G__35310 = (i__34764 + (1));
seq__34761 = G__35307;
chunk__34762 = G__35308;
count__34763 = G__35309;
i__34764 = G__35310;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34761);
if(temp__5735__auto__){
var seq__34761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34761__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34761__$1);
var G__35311 = cljs.core.chunk_rest(seq__34761__$1);
var G__35312 = c__4609__auto__;
var G__35313 = cljs.core.count(c__4609__auto__);
var G__35314 = (0);
seq__34761 = G__35311;
chunk__34762 = G__35312;
count__34763 = G__35313;
i__34764 = G__35314;
continue;
} else {
var vec__34786 = cljs.core.first(seq__34761__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35315 = cljs.core.next(seq__34761__$1);
var G__35316 = null;
var G__35317 = (0);
var G__35318 = (0);
seq__34761 = G__35315;
chunk__34762 = G__35316;
count__34763 = G__35317;
i__34764 = G__35318;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34794_35319 = key;
var G__34794_35320__$1 = (((G__34794_35319 instanceof cljs.core.Keyword))?G__34794_35319.fqn:null);
switch (G__34794_35320__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35324 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_35324,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_35324,"aria-");
}
})())){
el.setAttribute(ks_35324,value);
} else {
(el[ks_35324] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34812){
var map__34813 = p__34812;
var map__34813__$1 = (((((!((map__34813 == null))))?(((((map__34813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34813):map__34813);
var props = map__34813__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34813__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34818 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34822 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34822,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34822;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34826 = arguments.length;
switch (G__34826) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34836){
var vec__34838 = p__34836;
var seq__34839 = cljs.core.seq(vec__34838);
var first__34840 = cljs.core.first(seq__34839);
var seq__34839__$1 = cljs.core.next(seq__34839);
var nn = first__34840;
var first__34840__$1 = cljs.core.first(seq__34839__$1);
var seq__34839__$2 = cljs.core.next(seq__34839__$1);
var np = first__34840__$1;
var nc = seq__34839__$2;
var node = vec__34838;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34844 = nn;
var G__34845 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34844,G__34845) : create_fn.call(null,G__34844,G__34845));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34846 = nn;
var G__34847 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34846,G__34847) : create_fn.call(null,G__34846,G__34847));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34851 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(1),null);
var seq__34854_35326 = cljs.core.seq(node_children);
var chunk__34855_35327 = null;
var count__34856_35328 = (0);
var i__34857_35329 = (0);
while(true){
if((i__34857_35329 < count__34856_35328)){
var child_struct_35330 = chunk__34855_35327.cljs$core$IIndexed$_nth$arity$2(null,i__34857_35329);
var children_35331 = shadow.dom.dom_node(child_struct_35330);
if(cljs.core.seq_QMARK_(children_35331)){
var seq__34877_35332 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35331));
var chunk__34879_35333 = null;
var count__34880_35334 = (0);
var i__34881_35335 = (0);
while(true){
if((i__34881_35335 < count__34880_35334)){
var child_35337 = chunk__34879_35333.cljs$core$IIndexed$_nth$arity$2(null,i__34881_35335);
if(cljs.core.truth_(child_35337)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35337);


var G__35338 = seq__34877_35332;
var G__35339 = chunk__34879_35333;
var G__35340 = count__34880_35334;
var G__35341 = (i__34881_35335 + (1));
seq__34877_35332 = G__35338;
chunk__34879_35333 = G__35339;
count__34880_35334 = G__35340;
i__34881_35335 = G__35341;
continue;
} else {
var G__35342 = seq__34877_35332;
var G__35343 = chunk__34879_35333;
var G__35344 = count__34880_35334;
var G__35345 = (i__34881_35335 + (1));
seq__34877_35332 = G__35342;
chunk__34879_35333 = G__35343;
count__34880_35334 = G__35344;
i__34881_35335 = G__35345;
continue;
}
} else {
var temp__5735__auto___35346 = cljs.core.seq(seq__34877_35332);
if(temp__5735__auto___35346){
var seq__34877_35347__$1 = temp__5735__auto___35346;
if(cljs.core.chunked_seq_QMARK_(seq__34877_35347__$1)){
var c__4609__auto___35349 = cljs.core.chunk_first(seq__34877_35347__$1);
var G__35350 = cljs.core.chunk_rest(seq__34877_35347__$1);
var G__35351 = c__4609__auto___35349;
var G__35352 = cljs.core.count(c__4609__auto___35349);
var G__35353 = (0);
seq__34877_35332 = G__35350;
chunk__34879_35333 = G__35351;
count__34880_35334 = G__35352;
i__34881_35335 = G__35353;
continue;
} else {
var child_35354 = cljs.core.first(seq__34877_35347__$1);
if(cljs.core.truth_(child_35354)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35354);


var G__35355 = cljs.core.next(seq__34877_35347__$1);
var G__35356 = null;
var G__35357 = (0);
var G__35358 = (0);
seq__34877_35332 = G__35355;
chunk__34879_35333 = G__35356;
count__34880_35334 = G__35357;
i__34881_35335 = G__35358;
continue;
} else {
var G__35359 = cljs.core.next(seq__34877_35347__$1);
var G__35360 = null;
var G__35361 = (0);
var G__35362 = (0);
seq__34877_35332 = G__35359;
chunk__34879_35333 = G__35360;
count__34880_35334 = G__35361;
i__34881_35335 = G__35362;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35331);
}


var G__35363 = seq__34854_35326;
var G__35364 = chunk__34855_35327;
var G__35365 = count__34856_35328;
var G__35366 = (i__34857_35329 + (1));
seq__34854_35326 = G__35363;
chunk__34855_35327 = G__35364;
count__34856_35328 = G__35365;
i__34857_35329 = G__35366;
continue;
} else {
var temp__5735__auto___35367 = cljs.core.seq(seq__34854_35326);
if(temp__5735__auto___35367){
var seq__34854_35368__$1 = temp__5735__auto___35367;
if(cljs.core.chunked_seq_QMARK_(seq__34854_35368__$1)){
var c__4609__auto___35369 = cljs.core.chunk_first(seq__34854_35368__$1);
var G__35370 = cljs.core.chunk_rest(seq__34854_35368__$1);
var G__35371 = c__4609__auto___35369;
var G__35372 = cljs.core.count(c__4609__auto___35369);
var G__35373 = (0);
seq__34854_35326 = G__35370;
chunk__34855_35327 = G__35371;
count__34856_35328 = G__35372;
i__34857_35329 = G__35373;
continue;
} else {
var child_struct_35374 = cljs.core.first(seq__34854_35368__$1);
var children_35375 = shadow.dom.dom_node(child_struct_35374);
if(cljs.core.seq_QMARK_(children_35375)){
var seq__34883_35376 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35375));
var chunk__34885_35377 = null;
var count__34886_35378 = (0);
var i__34887_35379 = (0);
while(true){
if((i__34887_35379 < count__34886_35378)){
var child_35380 = chunk__34885_35377.cljs$core$IIndexed$_nth$arity$2(null,i__34887_35379);
if(cljs.core.truth_(child_35380)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35380);


var G__35381 = seq__34883_35376;
var G__35382 = chunk__34885_35377;
var G__35383 = count__34886_35378;
var G__35384 = (i__34887_35379 + (1));
seq__34883_35376 = G__35381;
chunk__34885_35377 = G__35382;
count__34886_35378 = G__35383;
i__34887_35379 = G__35384;
continue;
} else {
var G__35385 = seq__34883_35376;
var G__35386 = chunk__34885_35377;
var G__35387 = count__34886_35378;
var G__35388 = (i__34887_35379 + (1));
seq__34883_35376 = G__35385;
chunk__34885_35377 = G__35386;
count__34886_35378 = G__35387;
i__34887_35379 = G__35388;
continue;
}
} else {
var temp__5735__auto___35389__$1 = cljs.core.seq(seq__34883_35376);
if(temp__5735__auto___35389__$1){
var seq__34883_35390__$1 = temp__5735__auto___35389__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34883_35390__$1)){
var c__4609__auto___35391 = cljs.core.chunk_first(seq__34883_35390__$1);
var G__35392 = cljs.core.chunk_rest(seq__34883_35390__$1);
var G__35393 = c__4609__auto___35391;
var G__35394 = cljs.core.count(c__4609__auto___35391);
var G__35395 = (0);
seq__34883_35376 = G__35392;
chunk__34885_35377 = G__35393;
count__34886_35378 = G__35394;
i__34887_35379 = G__35395;
continue;
} else {
var child_35396 = cljs.core.first(seq__34883_35390__$1);
if(cljs.core.truth_(child_35396)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35396);


var G__35397 = cljs.core.next(seq__34883_35390__$1);
var G__35398 = null;
var G__35399 = (0);
var G__35400 = (0);
seq__34883_35376 = G__35397;
chunk__34885_35377 = G__35398;
count__34886_35378 = G__35399;
i__34887_35379 = G__35400;
continue;
} else {
var G__35401 = cljs.core.next(seq__34883_35390__$1);
var G__35402 = null;
var G__35403 = (0);
var G__35404 = (0);
seq__34883_35376 = G__35401;
chunk__34885_35377 = G__35402;
count__34886_35378 = G__35403;
i__34887_35379 = G__35404;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35375);
}


var G__35405 = cljs.core.next(seq__34854_35368__$1);
var G__35406 = null;
var G__35407 = (0);
var G__35408 = (0);
seq__34854_35326 = G__35405;
chunk__34855_35327 = G__35406;
count__34856_35328 = G__35407;
i__34857_35329 = G__35408;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34912 = cljs.core.seq(node);
var chunk__34913 = null;
var count__34914 = (0);
var i__34915 = (0);
while(true){
if((i__34915 < count__34914)){
var n = chunk__34913.cljs$core$IIndexed$_nth$arity$2(null,i__34915);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35411 = seq__34912;
var G__35412 = chunk__34913;
var G__35413 = count__34914;
var G__35414 = (i__34915 + (1));
seq__34912 = G__35411;
chunk__34913 = G__35412;
count__34914 = G__35413;
i__34915 = G__35414;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34912);
if(temp__5735__auto__){
var seq__34912__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34912__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34912__$1);
var G__35415 = cljs.core.chunk_rest(seq__34912__$1);
var G__35416 = c__4609__auto__;
var G__35417 = cljs.core.count(c__4609__auto__);
var G__35418 = (0);
seq__34912 = G__35415;
chunk__34913 = G__35416;
count__34914 = G__35417;
i__34915 = G__35418;
continue;
} else {
var n = cljs.core.first(seq__34912__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35419 = cljs.core.next(seq__34912__$1);
var G__35420 = null;
var G__35421 = (0);
var G__35422 = (0);
seq__34912 = G__35419;
chunk__34913 = G__35420;
count__34914 = G__35421;
i__34915 = G__35422;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34924 = arguments.length;
switch (G__34924) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34933 = arguments.length;
switch (G__34933) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34944 = arguments.length;
switch (G__34944) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35428 = arguments.length;
var i__4790__auto___35429 = (0);
while(true){
if((i__4790__auto___35429 < len__4789__auto___35428)){
args__4795__auto__.push((arguments[i__4790__auto___35429]));

var G__35430 = (i__4790__auto___35429 + (1));
i__4790__auto___35429 = G__35430;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34952_35431 = cljs.core.seq(nodes);
var chunk__34953_35432 = null;
var count__34954_35433 = (0);
var i__34955_35434 = (0);
while(true){
if((i__34955_35434 < count__34954_35433)){
var node_35435 = chunk__34953_35432.cljs$core$IIndexed$_nth$arity$2(null,i__34955_35434);
fragment.appendChild(shadow.dom._to_dom(node_35435));


var G__35436 = seq__34952_35431;
var G__35437 = chunk__34953_35432;
var G__35438 = count__34954_35433;
var G__35439 = (i__34955_35434 + (1));
seq__34952_35431 = G__35436;
chunk__34953_35432 = G__35437;
count__34954_35433 = G__35438;
i__34955_35434 = G__35439;
continue;
} else {
var temp__5735__auto___35440 = cljs.core.seq(seq__34952_35431);
if(temp__5735__auto___35440){
var seq__34952_35442__$1 = temp__5735__auto___35440;
if(cljs.core.chunked_seq_QMARK_(seq__34952_35442__$1)){
var c__4609__auto___35443 = cljs.core.chunk_first(seq__34952_35442__$1);
var G__35444 = cljs.core.chunk_rest(seq__34952_35442__$1);
var G__35445 = c__4609__auto___35443;
var G__35446 = cljs.core.count(c__4609__auto___35443);
var G__35447 = (0);
seq__34952_35431 = G__35444;
chunk__34953_35432 = G__35445;
count__34954_35433 = G__35446;
i__34955_35434 = G__35447;
continue;
} else {
var node_35448 = cljs.core.first(seq__34952_35442__$1);
fragment.appendChild(shadow.dom._to_dom(node_35448));


var G__35449 = cljs.core.next(seq__34952_35442__$1);
var G__35450 = null;
var G__35451 = (0);
var G__35452 = (0);
seq__34952_35431 = G__35449;
chunk__34953_35432 = G__35450;
count__34954_35433 = G__35451;
i__34955_35434 = G__35452;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34950){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34950));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34957_35453 = cljs.core.seq(scripts);
var chunk__34958_35454 = null;
var count__34959_35455 = (0);
var i__34960_35456 = (0);
while(true){
if((i__34960_35456 < count__34959_35455)){
var vec__34968_35457 = chunk__34958_35454.cljs$core$IIndexed$_nth$arity$2(null,i__34960_35456);
var script_tag_35458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35457,(0),null);
var script_body_35459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35457,(1),null);
eval(script_body_35459);


var G__35461 = seq__34957_35453;
var G__35462 = chunk__34958_35454;
var G__35463 = count__34959_35455;
var G__35464 = (i__34960_35456 + (1));
seq__34957_35453 = G__35461;
chunk__34958_35454 = G__35462;
count__34959_35455 = G__35463;
i__34960_35456 = G__35464;
continue;
} else {
var temp__5735__auto___35465 = cljs.core.seq(seq__34957_35453);
if(temp__5735__auto___35465){
var seq__34957_35466__$1 = temp__5735__auto___35465;
if(cljs.core.chunked_seq_QMARK_(seq__34957_35466__$1)){
var c__4609__auto___35467 = cljs.core.chunk_first(seq__34957_35466__$1);
var G__35468 = cljs.core.chunk_rest(seq__34957_35466__$1);
var G__35469 = c__4609__auto___35467;
var G__35470 = cljs.core.count(c__4609__auto___35467);
var G__35471 = (0);
seq__34957_35453 = G__35468;
chunk__34958_35454 = G__35469;
count__34959_35455 = G__35470;
i__34960_35456 = G__35471;
continue;
} else {
var vec__34974_35472 = cljs.core.first(seq__34957_35466__$1);
var script_tag_35473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974_35472,(0),null);
var script_body_35474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974_35472,(1),null);
eval(script_body_35474);


var G__35475 = cljs.core.next(seq__34957_35466__$1);
var G__35476 = null;
var G__35477 = (0);
var G__35478 = (0);
seq__34957_35453 = G__35475;
chunk__34958_35454 = G__35476;
count__34959_35455 = G__35477;
i__34960_35456 = G__35478;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34978){
var vec__34979 = p__34978;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34979,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34979,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34994 = arguments.length;
switch (G__34994) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35005 = cljs.core.seq(style_keys);
var chunk__35007 = null;
var count__35008 = (0);
var i__35009 = (0);
while(true){
if((i__35009 < count__35008)){
var it = chunk__35007.cljs$core$IIndexed$_nth$arity$2(null,i__35009);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35480 = seq__35005;
var G__35481 = chunk__35007;
var G__35482 = count__35008;
var G__35483 = (i__35009 + (1));
seq__35005 = G__35480;
chunk__35007 = G__35481;
count__35008 = G__35482;
i__35009 = G__35483;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35005);
if(temp__5735__auto__){
var seq__35005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35005__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35005__$1);
var G__35484 = cljs.core.chunk_rest(seq__35005__$1);
var G__35485 = c__4609__auto__;
var G__35486 = cljs.core.count(c__4609__auto__);
var G__35487 = (0);
seq__35005 = G__35484;
chunk__35007 = G__35485;
count__35008 = G__35486;
i__35009 = G__35487;
continue;
} else {
var it = cljs.core.first(seq__35005__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35488 = cljs.core.next(seq__35005__$1);
var G__35489 = null;
var G__35490 = (0);
var G__35491 = (0);
seq__35005 = G__35488;
chunk__35007 = G__35489;
count__35008 = G__35490;
i__35009 = G__35491;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k35014,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__35022 = k35014;
var G__35022__$1 = (((G__35022 instanceof cljs.core.Keyword))?G__35022.fqn:null);
switch (G__35022__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35014,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__35024){
var vec__35025 = p__35024;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35025,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35013){
var self__ = this;
var G__35013__$1 = this;
return (new cljs.core.RecordIter((0),G__35013__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35015,other35016){
var self__ = this;
var this35015__$1 = this;
return (((!((other35016 == null)))) && ((this35015__$1.constructor === other35016.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35015__$1.x,other35016.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35015__$1.y,other35016.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35015__$1.__extmap,other35016.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__35013){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__35041 = cljs.core.keyword_identical_QMARK_;
var expr__35042 = k__4447__auto__;
if(cljs.core.truth_((pred__35041.cljs$core$IFn$_invoke$arity$2 ? pred__35041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35042) : pred__35041.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35042)))){
return (new shadow.dom.Coordinate(G__35013,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35041.cljs$core$IFn$_invoke$arity$2 ? pred__35041.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35042) : pred__35041.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35042)))){
return (new shadow.dom.Coordinate(self__.x,G__35013,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__35013),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__35013){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35013,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35019){
var extmap__4478__auto__ = (function (){var G__35049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35019,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35019)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35049);
} else {
return G__35049;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35019),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35019),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k35059,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__35067 = k35059;
var G__35067__$1 = (((G__35067 instanceof cljs.core.Keyword))?G__35067.fqn:null);
switch (G__35067__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35059,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__35070){
var vec__35071 = p__35070;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35071,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35058){
var self__ = this;
var G__35058__$1 = this;
return (new cljs.core.RecordIter((0),G__35058__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35060,other35061){
var self__ = this;
var this35060__$1 = this;
return (((!((other35061 == null)))) && ((this35060__$1.constructor === other35061.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35060__$1.w,other35061.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35060__$1.h,other35061.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35060__$1.__extmap,other35061.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__35058){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__35087 = cljs.core.keyword_identical_QMARK_;
var expr__35088 = k__4447__auto__;
if(cljs.core.truth_((pred__35087.cljs$core$IFn$_invoke$arity$2 ? pred__35087.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35088) : pred__35087.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35088)))){
return (new shadow.dom.Size(G__35058,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35087.cljs$core$IFn$_invoke$arity$2 ? pred__35087.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35088) : pred__35087.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35088)))){
return (new shadow.dom.Size(self__.w,G__35058,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__35058),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__35058){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35058,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35063){
var extmap__4478__auto__ = (function (){var G__35096 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35063,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35063)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35096);
} else {
return G__35096;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35063),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35063),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__35507 = (i + (1));
var G__35508 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35507;
ret = G__35508;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35101){
var vec__35102 = p__35101;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35102,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35106 = arguments.length;
switch (G__35106) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35510 = ps;
var G__35511 = (i + (1));
el__$1 = G__35510;
i = G__35511;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35130 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35133_35516 = cljs.core.seq(props);
var chunk__35134_35517 = null;
var count__35135_35518 = (0);
var i__35136_35519 = (0);
while(true){
if((i__35136_35519 < count__35135_35518)){
var vec__35148_35520 = chunk__35134_35517.cljs$core$IIndexed$_nth$arity$2(null,i__35136_35519);
var k_35521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148_35520,(0),null);
var v_35522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148_35520,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35521);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35521),v_35522);


var G__35523 = seq__35133_35516;
var G__35524 = chunk__35134_35517;
var G__35525 = count__35135_35518;
var G__35526 = (i__35136_35519 + (1));
seq__35133_35516 = G__35523;
chunk__35134_35517 = G__35524;
count__35135_35518 = G__35525;
i__35136_35519 = G__35526;
continue;
} else {
var temp__5735__auto___35527 = cljs.core.seq(seq__35133_35516);
if(temp__5735__auto___35527){
var seq__35133_35528__$1 = temp__5735__auto___35527;
if(cljs.core.chunked_seq_QMARK_(seq__35133_35528__$1)){
var c__4609__auto___35529 = cljs.core.chunk_first(seq__35133_35528__$1);
var G__35530 = cljs.core.chunk_rest(seq__35133_35528__$1);
var G__35531 = c__4609__auto___35529;
var G__35532 = cljs.core.count(c__4609__auto___35529);
var G__35533 = (0);
seq__35133_35516 = G__35530;
chunk__35134_35517 = G__35531;
count__35135_35518 = G__35532;
i__35136_35519 = G__35533;
continue;
} else {
var vec__35153_35534 = cljs.core.first(seq__35133_35528__$1);
var k_35535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35153_35534,(0),null);
var v_35536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35153_35534,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35535);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35535),v_35536);


var G__35540 = cljs.core.next(seq__35133_35528__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__35133_35516 = G__35540;
chunk__35134_35517 = G__35541;
count__35135_35518 = G__35542;
i__35136_35519 = G__35543;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35165 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35165,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35165,(1),null);
var seq__35168_35544 = cljs.core.seq(node_children);
var chunk__35170_35545 = null;
var count__35171_35546 = (0);
var i__35172_35547 = (0);
while(true){
if((i__35172_35547 < count__35171_35546)){
var child_struct_35548 = chunk__35170_35545.cljs$core$IIndexed$_nth$arity$2(null,i__35172_35547);
if((!((child_struct_35548 == null)))){
if(typeof child_struct_35548 === 'string'){
var text_35549 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35549),child_struct_35548].join(''));
} else {
var children_35550 = shadow.dom.svg_node(child_struct_35548);
if(cljs.core.seq_QMARK_(children_35550)){
var seq__35201_35551 = cljs.core.seq(children_35550);
var chunk__35204_35552 = null;
var count__35205_35553 = (0);
var i__35206_35554 = (0);
while(true){
if((i__35206_35554 < count__35205_35553)){
var child_35555 = chunk__35204_35552.cljs$core$IIndexed$_nth$arity$2(null,i__35206_35554);
if(cljs.core.truth_(child_35555)){
node.appendChild(child_35555);


var G__35556 = seq__35201_35551;
var G__35557 = chunk__35204_35552;
var G__35558 = count__35205_35553;
var G__35559 = (i__35206_35554 + (1));
seq__35201_35551 = G__35556;
chunk__35204_35552 = G__35557;
count__35205_35553 = G__35558;
i__35206_35554 = G__35559;
continue;
} else {
var G__35560 = seq__35201_35551;
var G__35561 = chunk__35204_35552;
var G__35562 = count__35205_35553;
var G__35563 = (i__35206_35554 + (1));
seq__35201_35551 = G__35560;
chunk__35204_35552 = G__35561;
count__35205_35553 = G__35562;
i__35206_35554 = G__35563;
continue;
}
} else {
var temp__5735__auto___35564 = cljs.core.seq(seq__35201_35551);
if(temp__5735__auto___35564){
var seq__35201_35565__$1 = temp__5735__auto___35564;
if(cljs.core.chunked_seq_QMARK_(seq__35201_35565__$1)){
var c__4609__auto___35566 = cljs.core.chunk_first(seq__35201_35565__$1);
var G__35567 = cljs.core.chunk_rest(seq__35201_35565__$1);
var G__35568 = c__4609__auto___35566;
var G__35569 = cljs.core.count(c__4609__auto___35566);
var G__35570 = (0);
seq__35201_35551 = G__35567;
chunk__35204_35552 = G__35568;
count__35205_35553 = G__35569;
i__35206_35554 = G__35570;
continue;
} else {
var child_35571 = cljs.core.first(seq__35201_35565__$1);
if(cljs.core.truth_(child_35571)){
node.appendChild(child_35571);


var G__35572 = cljs.core.next(seq__35201_35565__$1);
var G__35573 = null;
var G__35574 = (0);
var G__35575 = (0);
seq__35201_35551 = G__35572;
chunk__35204_35552 = G__35573;
count__35205_35553 = G__35574;
i__35206_35554 = G__35575;
continue;
} else {
var G__35576 = cljs.core.next(seq__35201_35565__$1);
var G__35577 = null;
var G__35578 = (0);
var G__35579 = (0);
seq__35201_35551 = G__35576;
chunk__35204_35552 = G__35577;
count__35205_35553 = G__35578;
i__35206_35554 = G__35579;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35550);
}
}


var G__35580 = seq__35168_35544;
var G__35581 = chunk__35170_35545;
var G__35582 = count__35171_35546;
var G__35583 = (i__35172_35547 + (1));
seq__35168_35544 = G__35580;
chunk__35170_35545 = G__35581;
count__35171_35546 = G__35582;
i__35172_35547 = G__35583;
continue;
} else {
var G__35584 = seq__35168_35544;
var G__35585 = chunk__35170_35545;
var G__35586 = count__35171_35546;
var G__35587 = (i__35172_35547 + (1));
seq__35168_35544 = G__35584;
chunk__35170_35545 = G__35585;
count__35171_35546 = G__35586;
i__35172_35547 = G__35587;
continue;
}
} else {
var temp__5735__auto___35588 = cljs.core.seq(seq__35168_35544);
if(temp__5735__auto___35588){
var seq__35168_35589__$1 = temp__5735__auto___35588;
if(cljs.core.chunked_seq_QMARK_(seq__35168_35589__$1)){
var c__4609__auto___35590 = cljs.core.chunk_first(seq__35168_35589__$1);
var G__35591 = cljs.core.chunk_rest(seq__35168_35589__$1);
var G__35592 = c__4609__auto___35590;
var G__35593 = cljs.core.count(c__4609__auto___35590);
var G__35594 = (0);
seq__35168_35544 = G__35591;
chunk__35170_35545 = G__35592;
count__35171_35546 = G__35593;
i__35172_35547 = G__35594;
continue;
} else {
var child_struct_35595 = cljs.core.first(seq__35168_35589__$1);
if((!((child_struct_35595 == null)))){
if(typeof child_struct_35595 === 'string'){
var text_35596 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35596),child_struct_35595].join(''));
} else {
var children_35597 = shadow.dom.svg_node(child_struct_35595);
if(cljs.core.seq_QMARK_(children_35597)){
var seq__35217_35598 = cljs.core.seq(children_35597);
var chunk__35219_35599 = null;
var count__35220_35600 = (0);
var i__35221_35601 = (0);
while(true){
if((i__35221_35601 < count__35220_35600)){
var child_35602 = chunk__35219_35599.cljs$core$IIndexed$_nth$arity$2(null,i__35221_35601);
if(cljs.core.truth_(child_35602)){
node.appendChild(child_35602);


var G__35603 = seq__35217_35598;
var G__35604 = chunk__35219_35599;
var G__35605 = count__35220_35600;
var G__35606 = (i__35221_35601 + (1));
seq__35217_35598 = G__35603;
chunk__35219_35599 = G__35604;
count__35220_35600 = G__35605;
i__35221_35601 = G__35606;
continue;
} else {
var G__35607 = seq__35217_35598;
var G__35608 = chunk__35219_35599;
var G__35609 = count__35220_35600;
var G__35610 = (i__35221_35601 + (1));
seq__35217_35598 = G__35607;
chunk__35219_35599 = G__35608;
count__35220_35600 = G__35609;
i__35221_35601 = G__35610;
continue;
}
} else {
var temp__5735__auto___35611__$1 = cljs.core.seq(seq__35217_35598);
if(temp__5735__auto___35611__$1){
var seq__35217_35612__$1 = temp__5735__auto___35611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35217_35612__$1)){
var c__4609__auto___35613 = cljs.core.chunk_first(seq__35217_35612__$1);
var G__35614 = cljs.core.chunk_rest(seq__35217_35612__$1);
var G__35615 = c__4609__auto___35613;
var G__35616 = cljs.core.count(c__4609__auto___35613);
var G__35617 = (0);
seq__35217_35598 = G__35614;
chunk__35219_35599 = G__35615;
count__35220_35600 = G__35616;
i__35221_35601 = G__35617;
continue;
} else {
var child_35618 = cljs.core.first(seq__35217_35612__$1);
if(cljs.core.truth_(child_35618)){
node.appendChild(child_35618);


var G__35619 = cljs.core.next(seq__35217_35612__$1);
var G__35620 = null;
var G__35621 = (0);
var G__35622 = (0);
seq__35217_35598 = G__35619;
chunk__35219_35599 = G__35620;
count__35220_35600 = G__35621;
i__35221_35601 = G__35622;
continue;
} else {
var G__35623 = cljs.core.next(seq__35217_35612__$1);
var G__35624 = null;
var G__35625 = (0);
var G__35626 = (0);
seq__35217_35598 = G__35623;
chunk__35219_35599 = G__35624;
count__35220_35600 = G__35625;
i__35221_35601 = G__35626;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35597);
}
}


var G__35627 = cljs.core.next(seq__35168_35589__$1);
var G__35628 = null;
var G__35629 = (0);
var G__35630 = (0);
seq__35168_35544 = G__35627;
chunk__35170_35545 = G__35628;
count__35171_35546 = G__35629;
i__35172_35547 = G__35630;
continue;
} else {
var G__35631 = cljs.core.next(seq__35168_35589__$1);
var G__35632 = null;
var G__35633 = (0);
var G__35634 = (0);
seq__35168_35544 = G__35631;
chunk__35170_35545 = G__35632;
count__35171_35546 = G__35633;
i__35172_35547 = G__35634;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35635 = arguments.length;
var i__4790__auto___35636 = (0);
while(true){
if((i__4790__auto___35636 < len__4789__auto___35635)){
args__4795__auto__.push((arguments[i__4790__auto___35636]));

var G__35637 = (i__4790__auto___35636 + (1));
i__4790__auto___35636 = G__35637;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35233){
var G__35234 = cljs.core.first(seq35233);
var seq35233__$1 = cljs.core.next(seq35233);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35234,seq35233__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35243 = arguments.length;
switch (G__35243) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__32932__auto___35639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_35257){
var state_val_35258 = (state_35257[(1)]);
if((state_val_35258 === (1))){
var state_35257__$1 = state_35257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35257__$1,(2),once_or_cleanup);
} else {
if((state_val_35258 === (2))){
var inst_35253 = (state_35257[(2)]);
var inst_35254 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35257__$1 = (function (){var statearr_35259 = state_35257;
(statearr_35259[(7)] = inst_35253);

return statearr_35259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35257__$1,inst_35254);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32880__auto__ = null;
var shadow$dom$state_machine__32880__auto____0 = (function (){
var statearr_35261 = [null,null,null,null,null,null,null,null];
(statearr_35261[(0)] = shadow$dom$state_machine__32880__auto__);

(statearr_35261[(1)] = (1));

return statearr_35261;
});
var shadow$dom$state_machine__32880__auto____1 = (function (state_35257){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_35257);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e35262){var ex__32883__auto__ = e35262;
var statearr_35263_35640 = state_35257;
(statearr_35263_35640[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_35257[(4)]))){
var statearr_35265_35641 = state_35257;
(statearr_35265_35641[(1)] = cljs.core.first((state_35257[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35645 = state_35257;
state_35257 = G__35645;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
shadow$dom$state_machine__32880__auto__ = function(state_35257){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32880__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32880__auto____1.call(this,state_35257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32880__auto____0;
shadow$dom$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32880__auto____1;
return shadow$dom$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_35268 = f__32933__auto__();
(statearr_35268[(6)] = c__32932__auto___35639);

return statearr_35268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
