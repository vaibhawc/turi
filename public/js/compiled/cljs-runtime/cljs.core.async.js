goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33008 = arguments.length;
switch (G__33008) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33009 = (function (f,blockable,meta33010){
this.f = f;
this.blockable = blockable;
this.meta33010 = meta33010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33011,meta33010__$1){
var self__ = this;
var _33011__$1 = this;
return (new cljs.core.async.t_cljs$core$async33009(self__.f,self__.blockable,meta33010__$1));
}));

(cljs.core.async.t_cljs$core$async33009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33011){
var self__ = this;
var _33011__$1 = this;
return self__.meta33010;
}));

(cljs.core.async.t_cljs$core$async33009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33010","meta33010",-828454931,null)], null);
}));

(cljs.core.async.t_cljs$core$async33009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33009");

(cljs.core.async.t_cljs$core$async33009.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33009.
 */
cljs.core.async.__GT_t_cljs$core$async33009 = (function cljs$core$async$__GT_t_cljs$core$async33009(f__$1,blockable__$1,meta33010){
return (new cljs.core.async.t_cljs$core$async33009(f__$1,blockable__$1,meta33010));
});

}

return (new cljs.core.async.t_cljs$core$async33009(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33014 = arguments.length;
switch (G__33014) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33016 = arguments.length;
switch (G__33016) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33018 = arguments.length;
switch (G__33018) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34496 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34496) : fn1.call(null,val_34496));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34496) : fn1.call(null,val_34496));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33020 = arguments.length;
switch (G__33020) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___34508 = n;
var x_34509 = (0);
while(true){
if((x_34509 < n__4666__auto___34508)){
(a[x_34509] = x_34509);

var G__34510 = (x_34509 + (1));
x_34509 = G__34510;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33021 = (function (flag,meta33022){
this.flag = flag;
this.meta33022 = meta33022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33023,meta33022__$1){
var self__ = this;
var _33023__$1 = this;
return (new cljs.core.async.t_cljs$core$async33021(self__.flag,meta33022__$1));
}));

(cljs.core.async.t_cljs$core$async33021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33023){
var self__ = this;
var _33023__$1 = this;
return self__.meta33022;
}));

(cljs.core.async.t_cljs$core$async33021.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33022","meta33022",744948444,null)], null);
}));

(cljs.core.async.t_cljs$core$async33021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33021");

(cljs.core.async.t_cljs$core$async33021.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33021.
 */
cljs.core.async.__GT_t_cljs$core$async33021 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33021(flag__$1,meta33022){
return (new cljs.core.async.t_cljs$core$async33021(flag__$1,meta33022));
});

}

return (new cljs.core.async.t_cljs$core$async33021(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33024 = (function (flag,cb,meta33025){
this.flag = flag;
this.cb = cb;
this.meta33025 = meta33025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33026,meta33025__$1){
var self__ = this;
var _33026__$1 = this;
return (new cljs.core.async.t_cljs$core$async33024(self__.flag,self__.cb,meta33025__$1));
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33026){
var self__ = this;
var _33026__$1 = this;
return self__.meta33025;
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33025","meta33025",-92926705,null)], null);
}));

(cljs.core.async.t_cljs$core$async33024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33024");

(cljs.core.async.t_cljs$core$async33024.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33024.
 */
cljs.core.async.__GT_t_cljs$core$async33024 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33024(flag__$1,cb__$1,meta33025){
return (new cljs.core.async.t_cljs$core$async33024(flag__$1,cb__$1,meta33025));
});

}

return (new cljs.core.async.t_cljs$core$async33024(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33027_SHARP_){
var G__33029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33027_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33029) : fret.call(null,G__33029));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33028_SHARP_){
var G__33030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33028_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33030) : fret.call(null,G__33030));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34526 = (i + (1));
i = G__34526;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34532 = arguments.length;
var i__4790__auto___34533 = (0);
while(true){
if((i__4790__auto___34533 < len__4789__auto___34532)){
args__4795__auto__.push((arguments[i__4790__auto___34533]));

var G__34534 = (i__4790__auto___34533 + (1));
i__4790__auto___34533 = G__34534;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33033){
var map__33034 = p__33033;
var map__33034__$1 = (((((!((map__33034 == null))))?(((((map__33034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33034):map__33034);
var opts = map__33034__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33031){
var G__33032 = cljs.core.first(seq33031);
var seq33031__$1 = cljs.core.next(seq33031);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33032,seq33031__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33037 = arguments.length;
switch (G__33037) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32932__auto___34543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33061){
var state_val_33062 = (state_33061[(1)]);
if((state_val_33062 === (7))){
var inst_33057 = (state_33061[(2)]);
var state_33061__$1 = state_33061;
var statearr_33063_34551 = state_33061__$1;
(statearr_33063_34551[(2)] = inst_33057);

(statearr_33063_34551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (1))){
var state_33061__$1 = state_33061;
var statearr_33064_34552 = state_33061__$1;
(statearr_33064_34552[(2)] = null);

(statearr_33064_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (4))){
var inst_33040 = (state_33061[(7)]);
var inst_33040__$1 = (state_33061[(2)]);
var inst_33041 = (inst_33040__$1 == null);
var state_33061__$1 = (function (){var statearr_33065 = state_33061;
(statearr_33065[(7)] = inst_33040__$1);

return statearr_33065;
})();
if(cljs.core.truth_(inst_33041)){
var statearr_33066_34554 = state_33061__$1;
(statearr_33066_34554[(1)] = (5));

} else {
var statearr_33067_34555 = state_33061__$1;
(statearr_33067_34555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (13))){
var state_33061__$1 = state_33061;
var statearr_33068_34556 = state_33061__$1;
(statearr_33068_34556[(2)] = null);

(statearr_33068_34556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (6))){
var inst_33040 = (state_33061[(7)]);
var state_33061__$1 = state_33061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33061__$1,(11),to,inst_33040);
} else {
if((state_val_33062 === (3))){
var inst_33059 = (state_33061[(2)]);
var state_33061__$1 = state_33061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33061__$1,inst_33059);
} else {
if((state_val_33062 === (12))){
var state_33061__$1 = state_33061;
var statearr_33069_34557 = state_33061__$1;
(statearr_33069_34557[(2)] = null);

(statearr_33069_34557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (2))){
var state_33061__$1 = state_33061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33061__$1,(4),from);
} else {
if((state_val_33062 === (11))){
var inst_33050 = (state_33061[(2)]);
var state_33061__$1 = state_33061;
if(cljs.core.truth_(inst_33050)){
var statearr_33070_34558 = state_33061__$1;
(statearr_33070_34558[(1)] = (12));

} else {
var statearr_33071_34559 = state_33061__$1;
(statearr_33071_34559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (9))){
var state_33061__$1 = state_33061;
var statearr_33072_34560 = state_33061__$1;
(statearr_33072_34560[(2)] = null);

(statearr_33072_34560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (5))){
var state_33061__$1 = state_33061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33073_34561 = state_33061__$1;
(statearr_33073_34561[(1)] = (8));

} else {
var statearr_33074_34562 = state_33061__$1;
(statearr_33074_34562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (14))){
var inst_33055 = (state_33061[(2)]);
var state_33061__$1 = state_33061;
var statearr_33075_34563 = state_33061__$1;
(statearr_33075_34563[(2)] = inst_33055);

(statearr_33075_34563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (10))){
var inst_33047 = (state_33061[(2)]);
var state_33061__$1 = state_33061;
var statearr_33076_34566 = state_33061__$1;
(statearr_33076_34566[(2)] = inst_33047);

(statearr_33076_34566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33062 === (8))){
var inst_33044 = cljs.core.async.close_BANG_(to);
var state_33061__$1 = state_33061;
var statearr_33077_34568 = state_33061__$1;
(statearr_33077_34568[(2)] = inst_33044);

(statearr_33077_34568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_33078 = [null,null,null,null,null,null,null,null];
(statearr_33078[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_33078[(1)] = (1));

return statearr_33078;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_33061){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33061);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33079){var ex__32883__auto__ = e33079;
var statearr_33080_34572 = state_33061;
(statearr_33080_34572[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33061[(4)]))){
var statearr_33081_34574 = state_33061;
(statearr_33081_34574[(1)] = cljs.core.first((state_33061[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34575 = state_33061;
state_33061 = G__34575;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_33061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_33061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33082 = f__32933__auto__();
(statearr_33082[(6)] = c__32932__auto___34543);

return statearr_33082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33083){
var vec__33084 = p__33083;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(1),null);
var job = vec__33084;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32932__auto___34576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33091){
var state_val_33092 = (state_33091[(1)]);
if((state_val_33092 === (1))){
var state_33091__$1 = state_33091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33091__$1,(2),res,v);
} else {
if((state_val_33092 === (2))){
var inst_33088 = (state_33091[(2)]);
var inst_33089 = cljs.core.async.close_BANG_(res);
var state_33091__$1 = (function (){var statearr_33093 = state_33091;
(statearr_33093[(7)] = inst_33088);

return statearr_33093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33091__$1,inst_33089);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0 = (function (){
var statearr_33094 = [null,null,null,null,null,null,null,null];
(statearr_33094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__);

(statearr_33094[(1)] = (1));

return statearr_33094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1 = (function (state_33091){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33091);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33095){var ex__32883__auto__ = e33095;
var statearr_33096_34577 = state_33091;
(statearr_33096_34577[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33091[(4)]))){
var statearr_33097_34579 = state_33091;
(statearr_33097_34579[(1)] = cljs.core.first((state_33091[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34581 = state_33091;
state_33091 = G__34581;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = function(state_33091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1.call(this,state_33091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33098 = f__32933__auto__();
(statearr_33098[(6)] = c__32932__auto___34576);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33099){
var vec__33100 = p__33099;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33100,(1),null);
var job = vec__33100;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___34592 = n;
var __34593 = (0);
while(true){
if((__34593 < n__4666__auto___34592)){
var G__33103_34594 = type;
var G__33103_34595__$1 = (((G__33103_34594 instanceof cljs.core.Keyword))?G__33103_34594.fqn:null);
switch (G__33103_34595__$1) {
case "compute":
var c__32932__auto___34598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34593,c__32932__auto___34598,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async){
return (function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = ((function (__34593,c__32932__auto___34598,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async){
return (function (state_33116){
var state_val_33117 = (state_33116[(1)]);
if((state_val_33117 === (1))){
var state_33116__$1 = state_33116;
var statearr_33118_34599 = state_33116__$1;
(statearr_33118_34599[(2)] = null);

(statearr_33118_34599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (2))){
var state_33116__$1 = state_33116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33116__$1,(4),jobs);
} else {
if((state_val_33117 === (3))){
var inst_33114 = (state_33116[(2)]);
var state_33116__$1 = state_33116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33116__$1,inst_33114);
} else {
if((state_val_33117 === (4))){
var inst_33106 = (state_33116[(2)]);
var inst_33107 = process(inst_33106);
var state_33116__$1 = state_33116;
if(cljs.core.truth_(inst_33107)){
var statearr_33119_34600 = state_33116__$1;
(statearr_33119_34600[(1)] = (5));

} else {
var statearr_33120_34601 = state_33116__$1;
(statearr_33120_34601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (5))){
var state_33116__$1 = state_33116;
var statearr_33121_34602 = state_33116__$1;
(statearr_33121_34602[(2)] = null);

(statearr_33121_34602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (6))){
var state_33116__$1 = state_33116;
var statearr_33122_34603 = state_33116__$1;
(statearr_33122_34603[(2)] = null);

(statearr_33122_34603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33117 === (7))){
var inst_33112 = (state_33116[(2)]);
var state_33116__$1 = state_33116;
var statearr_33123_34604 = state_33116__$1;
(statearr_33123_34604[(2)] = inst_33112);

(statearr_33123_34604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34593,c__32932__auto___34598,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async))
;
return ((function (__34593,switch__32879__auto__,c__32932__auto___34598,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0 = (function (){
var statearr_33124 = [null,null,null,null,null,null,null];
(statearr_33124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__);

(statearr_33124[(1)] = (1));

return statearr_33124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1 = (function (state_33116){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33116);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33125){var ex__32883__auto__ = e33125;
var statearr_33126_34607 = state_33116;
(statearr_33126_34607[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33116[(4)]))){
var statearr_33127_34608 = state_33116;
(statearr_33127_34608[(1)] = cljs.core.first((state_33116[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34609 = state_33116;
state_33116 = G__34609;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = function(state_33116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1.call(this,state_33116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__;
})()
;})(__34593,switch__32879__auto__,c__32932__auto___34598,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async))
})();
var state__32934__auto__ = (function (){var statearr_33128 = f__32933__auto__();
(statearr_33128[(6)] = c__32932__auto___34598);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
});})(__34593,c__32932__auto___34598,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async))
);


break;
case "async":
var c__32932__auto___34610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34593,c__32932__auto___34610,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async){
return (function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = ((function (__34593,c__32932__auto___34610,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async){
return (function (state_33141){
var state_val_33142 = (state_33141[(1)]);
if((state_val_33142 === (1))){
var state_33141__$1 = state_33141;
var statearr_33143_34612 = state_33141__$1;
(statearr_33143_34612[(2)] = null);

(statearr_33143_34612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (2))){
var state_33141__$1 = state_33141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33141__$1,(4),jobs);
} else {
if((state_val_33142 === (3))){
var inst_33139 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33141__$1,inst_33139);
} else {
if((state_val_33142 === (4))){
var inst_33131 = (state_33141[(2)]);
var inst_33132 = async(inst_33131);
var state_33141__$1 = state_33141;
if(cljs.core.truth_(inst_33132)){
var statearr_33144_34613 = state_33141__$1;
(statearr_33144_34613[(1)] = (5));

} else {
var statearr_33145_34614 = state_33141__$1;
(statearr_33145_34614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (5))){
var state_33141__$1 = state_33141;
var statearr_33146_34616 = state_33141__$1;
(statearr_33146_34616[(2)] = null);

(statearr_33146_34616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (6))){
var state_33141__$1 = state_33141;
var statearr_33147_34618 = state_33141__$1;
(statearr_33147_34618[(2)] = null);

(statearr_33147_34618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (7))){
var inst_33137 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
var statearr_33148_34619 = state_33141__$1;
(statearr_33148_34619[(2)] = inst_33137);

(statearr_33148_34619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34593,c__32932__auto___34610,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async))
;
return ((function (__34593,switch__32879__auto__,c__32932__auto___34610,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0 = (function (){
var statearr_33149 = [null,null,null,null,null,null,null];
(statearr_33149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__);

(statearr_33149[(1)] = (1));

return statearr_33149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1 = (function (state_33141){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33141);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33150){var ex__32883__auto__ = e33150;
var statearr_33151_34624 = state_33141;
(statearr_33151_34624[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33141[(4)]))){
var statearr_33152_34625 = state_33141;
(statearr_33152_34625[(1)] = cljs.core.first((state_33141[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34626 = state_33141;
state_33141 = G__34626;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = function(state_33141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1.call(this,state_33141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__;
})()
;})(__34593,switch__32879__auto__,c__32932__auto___34610,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async))
})();
var state__32934__auto__ = (function (){var statearr_33153 = f__32933__auto__();
(statearr_33153[(6)] = c__32932__auto___34610);

return statearr_33153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
});})(__34593,c__32932__auto___34610,G__33103_34594,G__33103_34595__$1,n__4666__auto___34592,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33103_34595__$1)].join('')));

}

var G__34627 = (__34593 + (1));
__34593 = G__34627;
continue;
} else {
}
break;
}

var c__32932__auto___34628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33175){
var state_val_33176 = (state_33175[(1)]);
if((state_val_33176 === (7))){
var inst_33171 = (state_33175[(2)]);
var state_33175__$1 = state_33175;
var statearr_33177_34629 = state_33175__$1;
(statearr_33177_34629[(2)] = inst_33171);

(statearr_33177_34629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (1))){
var state_33175__$1 = state_33175;
var statearr_33178_34630 = state_33175__$1;
(statearr_33178_34630[(2)] = null);

(statearr_33178_34630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (4))){
var inst_33156 = (state_33175[(7)]);
var inst_33156__$1 = (state_33175[(2)]);
var inst_33157 = (inst_33156__$1 == null);
var state_33175__$1 = (function (){var statearr_33179 = state_33175;
(statearr_33179[(7)] = inst_33156__$1);

return statearr_33179;
})();
if(cljs.core.truth_(inst_33157)){
var statearr_33180_34631 = state_33175__$1;
(statearr_33180_34631[(1)] = (5));

} else {
var statearr_33181_34632 = state_33175__$1;
(statearr_33181_34632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (6))){
var inst_33156 = (state_33175[(7)]);
var inst_33161 = (state_33175[(8)]);
var inst_33161__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33163 = [inst_33156,inst_33161__$1];
var inst_33164 = (new cljs.core.PersistentVector(null,2,(5),inst_33162,inst_33163,null));
var state_33175__$1 = (function (){var statearr_33182 = state_33175;
(statearr_33182[(8)] = inst_33161__$1);

return statearr_33182;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33175__$1,(8),jobs,inst_33164);
} else {
if((state_val_33176 === (3))){
var inst_33173 = (state_33175[(2)]);
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33175__$1,inst_33173);
} else {
if((state_val_33176 === (2))){
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33175__$1,(4),from);
} else {
if((state_val_33176 === (9))){
var inst_33168 = (state_33175[(2)]);
var state_33175__$1 = (function (){var statearr_33183 = state_33175;
(statearr_33183[(9)] = inst_33168);

return statearr_33183;
})();
var statearr_33184_34634 = state_33175__$1;
(statearr_33184_34634[(2)] = null);

(statearr_33184_34634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (5))){
var inst_33159 = cljs.core.async.close_BANG_(jobs);
var state_33175__$1 = state_33175;
var statearr_33185_34635 = state_33175__$1;
(statearr_33185_34635[(2)] = inst_33159);

(statearr_33185_34635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (8))){
var inst_33161 = (state_33175[(8)]);
var inst_33166 = (state_33175[(2)]);
var state_33175__$1 = (function (){var statearr_33186 = state_33175;
(statearr_33186[(10)] = inst_33166);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33175__$1,(9),results,inst_33161);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0 = (function (){
var statearr_33187 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__);

(statearr_33187[(1)] = (1));

return statearr_33187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1 = (function (state_33175){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33175);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33188){var ex__32883__auto__ = e33188;
var statearr_33189_34638 = state_33175;
(statearr_33189_34638[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33175[(4)]))){
var statearr_33190_34639 = state_33175;
(statearr_33190_34639[(1)] = cljs.core.first((state_33175[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34640 = state_33175;
state_33175 = G__34640;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = function(state_33175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1.call(this,state_33175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33191 = f__32933__auto__();
(statearr_33191[(6)] = c__32932__auto___34628);

return statearr_33191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


var c__32932__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33229){
var state_val_33230 = (state_33229[(1)]);
if((state_val_33230 === (7))){
var inst_33225 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33231_34652 = state_33229__$1;
(statearr_33231_34652[(2)] = inst_33225);

(statearr_33231_34652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (20))){
var state_33229__$1 = state_33229;
var statearr_33232_34653 = state_33229__$1;
(statearr_33232_34653[(2)] = null);

(statearr_33232_34653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (1))){
var state_33229__$1 = state_33229;
var statearr_33233_34654 = state_33229__$1;
(statearr_33233_34654[(2)] = null);

(statearr_33233_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (4))){
var inst_33194 = (state_33229[(7)]);
var inst_33194__$1 = (state_33229[(2)]);
var inst_33195 = (inst_33194__$1 == null);
var state_33229__$1 = (function (){var statearr_33234 = state_33229;
(statearr_33234[(7)] = inst_33194__$1);

return statearr_33234;
})();
if(cljs.core.truth_(inst_33195)){
var statearr_33235_34655 = state_33229__$1;
(statearr_33235_34655[(1)] = (5));

} else {
var statearr_33236_34656 = state_33229__$1;
(statearr_33236_34656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (15))){
var inst_33207 = (state_33229[(8)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33229__$1,(18),to,inst_33207);
} else {
if((state_val_33230 === (21))){
var inst_33220 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33237_34659 = state_33229__$1;
(statearr_33237_34659[(2)] = inst_33220);

(statearr_33237_34659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (13))){
var inst_33222 = (state_33229[(2)]);
var state_33229__$1 = (function (){var statearr_33238 = state_33229;
(statearr_33238[(9)] = inst_33222);

return statearr_33238;
})();
var statearr_33239_34660 = state_33229__$1;
(statearr_33239_34660[(2)] = null);

(statearr_33239_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (6))){
var inst_33194 = (state_33229[(7)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33229__$1,(11),inst_33194);
} else {
if((state_val_33230 === (17))){
var inst_33215 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
if(cljs.core.truth_(inst_33215)){
var statearr_33240_34661 = state_33229__$1;
(statearr_33240_34661[(1)] = (19));

} else {
var statearr_33241_34662 = state_33229__$1;
(statearr_33241_34662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (3))){
var inst_33227 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33229__$1,inst_33227);
} else {
if((state_val_33230 === (12))){
var inst_33204 = (state_33229[(10)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33229__$1,(14),inst_33204);
} else {
if((state_val_33230 === (2))){
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33229__$1,(4),results);
} else {
if((state_val_33230 === (19))){
var state_33229__$1 = state_33229;
var statearr_33242_34663 = state_33229__$1;
(statearr_33242_34663[(2)] = null);

(statearr_33242_34663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (11))){
var inst_33204 = (state_33229[(2)]);
var state_33229__$1 = (function (){var statearr_33243 = state_33229;
(statearr_33243[(10)] = inst_33204);

return statearr_33243;
})();
var statearr_33244_34664 = state_33229__$1;
(statearr_33244_34664[(2)] = null);

(statearr_33244_34664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (9))){
var state_33229__$1 = state_33229;
var statearr_33245_34665 = state_33229__$1;
(statearr_33245_34665[(2)] = null);

(statearr_33245_34665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (5))){
var state_33229__$1 = state_33229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33246_34666 = state_33229__$1;
(statearr_33246_34666[(1)] = (8));

} else {
var statearr_33247_34667 = state_33229__$1;
(statearr_33247_34667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (14))){
var inst_33207 = (state_33229[(8)]);
var inst_33207__$1 = (state_33229[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var inst_33209 = cljs.core.not(inst_33208);
var state_33229__$1 = (function (){var statearr_33248 = state_33229;
(statearr_33248[(8)] = inst_33207__$1);

return statearr_33248;
})();
if(inst_33209){
var statearr_33249_34668 = state_33229__$1;
(statearr_33249_34668[(1)] = (15));

} else {
var statearr_33250_34669 = state_33229__$1;
(statearr_33250_34669[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (16))){
var state_33229__$1 = state_33229;
var statearr_33251_34670 = state_33229__$1;
(statearr_33251_34670[(2)] = false);

(statearr_33251_34670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (10))){
var inst_33201 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33252_34672 = state_33229__$1;
(statearr_33252_34672[(2)] = inst_33201);

(statearr_33252_34672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (18))){
var inst_33212 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33253_34674 = state_33229__$1;
(statearr_33253_34674[(2)] = inst_33212);

(statearr_33253_34674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (8))){
var inst_33198 = cljs.core.async.close_BANG_(to);
var state_33229__$1 = state_33229;
var statearr_33254_34675 = state_33229__$1;
(statearr_33254_34675[(2)] = inst_33198);

(statearr_33254_34675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0 = (function (){
var statearr_33255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__);

(statearr_33255[(1)] = (1));

return statearr_33255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1 = (function (state_33229){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33229);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33256){var ex__32883__auto__ = e33256;
var statearr_33257_34676 = state_33229;
(statearr_33257_34676[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33229[(4)]))){
var statearr_33258_34677 = state_33229;
(statearr_33258_34677[(1)] = cljs.core.first((state_33229[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34678 = state_33229;
state_33229 = G__34678;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__ = function(state_33229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1.call(this,state_33229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33259 = f__32933__auto__();
(statearr_33259[(6)] = c__32932__auto__);

return statearr_33259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));

return c__32932__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33261 = arguments.length;
switch (G__33261) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33263 = arguments.length;
switch (G__33263) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33265 = arguments.length;
switch (G__33265) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32932__auto___34684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33291){
var state_val_33292 = (state_33291[(1)]);
if((state_val_33292 === (7))){
var inst_33287 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33293_34685 = state_33291__$1;
(statearr_33293_34685[(2)] = inst_33287);

(statearr_33293_34685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (1))){
var state_33291__$1 = state_33291;
var statearr_33294_34686 = state_33291__$1;
(statearr_33294_34686[(2)] = null);

(statearr_33294_34686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (4))){
var inst_33268 = (state_33291[(7)]);
var inst_33268__$1 = (state_33291[(2)]);
var inst_33269 = (inst_33268__$1 == null);
var state_33291__$1 = (function (){var statearr_33295 = state_33291;
(statearr_33295[(7)] = inst_33268__$1);

return statearr_33295;
})();
if(cljs.core.truth_(inst_33269)){
var statearr_33296_34687 = state_33291__$1;
(statearr_33296_34687[(1)] = (5));

} else {
var statearr_33297_34688 = state_33291__$1;
(statearr_33297_34688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (13))){
var state_33291__$1 = state_33291;
var statearr_33298_34689 = state_33291__$1;
(statearr_33298_34689[(2)] = null);

(statearr_33298_34689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (6))){
var inst_33268 = (state_33291[(7)]);
var inst_33274 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33268) : p.call(null,inst_33268));
var state_33291__$1 = state_33291;
if(cljs.core.truth_(inst_33274)){
var statearr_33299_34690 = state_33291__$1;
(statearr_33299_34690[(1)] = (9));

} else {
var statearr_33300_34691 = state_33291__$1;
(statearr_33300_34691[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (3))){
var inst_33289 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33291__$1,inst_33289);
} else {
if((state_val_33292 === (12))){
var state_33291__$1 = state_33291;
var statearr_33301_34692 = state_33291__$1;
(statearr_33301_34692[(2)] = null);

(statearr_33301_34692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (2))){
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33291__$1,(4),ch);
} else {
if((state_val_33292 === (11))){
var inst_33268 = (state_33291[(7)]);
var inst_33278 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33291__$1,(8),inst_33278,inst_33268);
} else {
if((state_val_33292 === (9))){
var state_33291__$1 = state_33291;
var statearr_33302_34693 = state_33291__$1;
(statearr_33302_34693[(2)] = tc);

(statearr_33302_34693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (5))){
var inst_33271 = cljs.core.async.close_BANG_(tc);
var inst_33272 = cljs.core.async.close_BANG_(fc);
var state_33291__$1 = (function (){var statearr_33303 = state_33291;
(statearr_33303[(8)] = inst_33271);

return statearr_33303;
})();
var statearr_33304_34694 = state_33291__$1;
(statearr_33304_34694[(2)] = inst_33272);

(statearr_33304_34694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (14))){
var inst_33285 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
var statearr_33305_34695 = state_33291__$1;
(statearr_33305_34695[(2)] = inst_33285);

(statearr_33305_34695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (10))){
var state_33291__$1 = state_33291;
var statearr_33306_34696 = state_33291__$1;
(statearr_33306_34696[(2)] = fc);

(statearr_33306_34696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33292 === (8))){
var inst_33280 = (state_33291[(2)]);
var state_33291__$1 = state_33291;
if(cljs.core.truth_(inst_33280)){
var statearr_33307_34697 = state_33291__$1;
(statearr_33307_34697[(1)] = (12));

} else {
var statearr_33308_34698 = state_33291__$1;
(statearr_33308_34698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_33309 = [null,null,null,null,null,null,null,null,null];
(statearr_33309[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_33309[(1)] = (1));

return statearr_33309;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_33291){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33291);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33310){var ex__32883__auto__ = e33310;
var statearr_33311_34699 = state_33291;
(statearr_33311_34699[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33291[(4)]))){
var statearr_33312_34700 = state_33291;
(statearr_33312_34700[(1)] = cljs.core.first((state_33291[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34701 = state_33291;
state_33291 = G__34701;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_33291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_33291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33313 = f__32933__auto__();
(statearr_33313[(6)] = c__32932__auto___34684);

return statearr_33313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32932__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33335){
var state_val_33336 = (state_33335[(1)]);
if((state_val_33336 === (7))){
var inst_33331 = (state_33335[(2)]);
var state_33335__$1 = state_33335;
var statearr_33337_34702 = state_33335__$1;
(statearr_33337_34702[(2)] = inst_33331);

(statearr_33337_34702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33336 === (1))){
var inst_33314 = init;
var inst_33315 = inst_33314;
var state_33335__$1 = (function (){var statearr_33338 = state_33335;
(statearr_33338[(7)] = inst_33315);

return statearr_33338;
})();
var statearr_33339_34703 = state_33335__$1;
(statearr_33339_34703[(2)] = null);

(statearr_33339_34703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33336 === (4))){
var inst_33318 = (state_33335[(8)]);
var inst_33318__$1 = (state_33335[(2)]);
var inst_33319 = (inst_33318__$1 == null);
var state_33335__$1 = (function (){var statearr_33340 = state_33335;
(statearr_33340[(8)] = inst_33318__$1);

return statearr_33340;
})();
if(cljs.core.truth_(inst_33319)){
var statearr_33341_34704 = state_33335__$1;
(statearr_33341_34704[(1)] = (5));

} else {
var statearr_33342_34705 = state_33335__$1;
(statearr_33342_34705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33336 === (6))){
var inst_33318 = (state_33335[(8)]);
var inst_33315 = (state_33335[(7)]);
var inst_33322 = (state_33335[(9)]);
var inst_33322__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33315,inst_33318) : f.call(null,inst_33315,inst_33318));
var inst_33323 = cljs.core.reduced_QMARK_(inst_33322__$1);
var state_33335__$1 = (function (){var statearr_33343 = state_33335;
(statearr_33343[(9)] = inst_33322__$1);

return statearr_33343;
})();
if(inst_33323){
var statearr_33344_34706 = state_33335__$1;
(statearr_33344_34706[(1)] = (8));

} else {
var statearr_33345_34707 = state_33335__$1;
(statearr_33345_34707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33336 === (3))){
var inst_33333 = (state_33335[(2)]);
var state_33335__$1 = state_33335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33335__$1,inst_33333);
} else {
if((state_val_33336 === (2))){
var state_33335__$1 = state_33335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33335__$1,(4),ch);
} else {
if((state_val_33336 === (9))){
var inst_33322 = (state_33335[(9)]);
var inst_33315 = inst_33322;
var state_33335__$1 = (function (){var statearr_33346 = state_33335;
(statearr_33346[(7)] = inst_33315);

return statearr_33346;
})();
var statearr_33347_34709 = state_33335__$1;
(statearr_33347_34709[(2)] = null);

(statearr_33347_34709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33336 === (5))){
var inst_33315 = (state_33335[(7)]);
var state_33335__$1 = state_33335;
var statearr_33348_34710 = state_33335__$1;
(statearr_33348_34710[(2)] = inst_33315);

(statearr_33348_34710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33336 === (10))){
var inst_33329 = (state_33335[(2)]);
var state_33335__$1 = state_33335;
var statearr_33349_34711 = state_33335__$1;
(statearr_33349_34711[(2)] = inst_33329);

(statearr_33349_34711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33336 === (8))){
var inst_33322 = (state_33335[(9)]);
var inst_33325 = cljs.core.deref(inst_33322);
var state_33335__$1 = state_33335;
var statearr_33350_34712 = state_33335__$1;
(statearr_33350_34712[(2)] = inst_33325);

(statearr_33350_34712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32880__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32880__auto____0 = (function (){
var statearr_33351 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33351[(0)] = cljs$core$async$reduce_$_state_machine__32880__auto__);

(statearr_33351[(1)] = (1));

return statearr_33351;
});
var cljs$core$async$reduce_$_state_machine__32880__auto____1 = (function (state_33335){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33335);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33352){var ex__32883__auto__ = e33352;
var statearr_33353_34713 = state_33335;
(statearr_33353_34713[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33335[(4)]))){
var statearr_33354_34714 = state_33335;
(statearr_33354_34714[(1)] = cljs.core.first((state_33335[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34719 = state_33335;
state_33335 = G__34719;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32880__auto__ = function(state_33335){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32880__auto____1.call(this,state_33335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32880__auto____0;
cljs$core$async$reduce_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32880__auto____1;
return cljs$core$async$reduce_$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33355 = f__32933__auto__();
(statearr_33355[(6)] = c__32932__auto__);

return statearr_33355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));

return c__32932__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32932__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33361){
var state_val_33362 = (state_33361[(1)]);
if((state_val_33362 === (1))){
var inst_33356 = cljs.core.async.reduce(f__$1,init,ch);
var state_33361__$1 = state_33361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33361__$1,(2),inst_33356);
} else {
if((state_val_33362 === (2))){
var inst_33358 = (state_33361[(2)]);
var inst_33359 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33358) : f__$1.call(null,inst_33358));
var state_33361__$1 = state_33361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33361__$1,inst_33359);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32880__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32880__auto____0 = (function (){
var statearr_33363 = [null,null,null,null,null,null,null];
(statearr_33363[(0)] = cljs$core$async$transduce_$_state_machine__32880__auto__);

(statearr_33363[(1)] = (1));

return statearr_33363;
});
var cljs$core$async$transduce_$_state_machine__32880__auto____1 = (function (state_33361){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33361);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33364){var ex__32883__auto__ = e33364;
var statearr_33365_34720 = state_33361;
(statearr_33365_34720[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33361[(4)]))){
var statearr_33366_34721 = state_33361;
(statearr_33366_34721[(1)] = cljs.core.first((state_33361[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34722 = state_33361;
state_33361 = G__34722;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32880__auto__ = function(state_33361){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32880__auto____1.call(this,state_33361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32880__auto____0;
cljs$core$async$transduce_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32880__auto____1;
return cljs$core$async$transduce_$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33367 = f__32933__auto__();
(statearr_33367[(6)] = c__32932__auto__);

return statearr_33367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));

return c__32932__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33369 = arguments.length;
switch (G__33369) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32932__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33394){
var state_val_33395 = (state_33394[(1)]);
if((state_val_33395 === (7))){
var inst_33376 = (state_33394[(2)]);
var state_33394__$1 = state_33394;
var statearr_33396_34724 = state_33394__$1;
(statearr_33396_34724[(2)] = inst_33376);

(statearr_33396_34724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (1))){
var inst_33370 = cljs.core.seq(coll);
var inst_33371 = inst_33370;
var state_33394__$1 = (function (){var statearr_33397 = state_33394;
(statearr_33397[(7)] = inst_33371);

return statearr_33397;
})();
var statearr_33398_34725 = state_33394__$1;
(statearr_33398_34725[(2)] = null);

(statearr_33398_34725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (4))){
var inst_33371 = (state_33394[(7)]);
var inst_33374 = cljs.core.first(inst_33371);
var state_33394__$1 = state_33394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33394__$1,(7),ch,inst_33374);
} else {
if((state_val_33395 === (13))){
var inst_33388 = (state_33394[(2)]);
var state_33394__$1 = state_33394;
var statearr_33399_34726 = state_33394__$1;
(statearr_33399_34726[(2)] = inst_33388);

(statearr_33399_34726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (6))){
var inst_33379 = (state_33394[(2)]);
var state_33394__$1 = state_33394;
if(cljs.core.truth_(inst_33379)){
var statearr_33400_34727 = state_33394__$1;
(statearr_33400_34727[(1)] = (8));

} else {
var statearr_33401_34728 = state_33394__$1;
(statearr_33401_34728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (3))){
var inst_33392 = (state_33394[(2)]);
var state_33394__$1 = state_33394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33394__$1,inst_33392);
} else {
if((state_val_33395 === (12))){
var state_33394__$1 = state_33394;
var statearr_33402_34729 = state_33394__$1;
(statearr_33402_34729[(2)] = null);

(statearr_33402_34729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (2))){
var inst_33371 = (state_33394[(7)]);
var state_33394__$1 = state_33394;
if(cljs.core.truth_(inst_33371)){
var statearr_33403_34730 = state_33394__$1;
(statearr_33403_34730[(1)] = (4));

} else {
var statearr_33404_34731 = state_33394__$1;
(statearr_33404_34731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (11))){
var inst_33385 = cljs.core.async.close_BANG_(ch);
var state_33394__$1 = state_33394;
var statearr_33405_34732 = state_33394__$1;
(statearr_33405_34732[(2)] = inst_33385);

(statearr_33405_34732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (9))){
var state_33394__$1 = state_33394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33406_34733 = state_33394__$1;
(statearr_33406_34733[(1)] = (11));

} else {
var statearr_33407_34734 = state_33394__$1;
(statearr_33407_34734[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (5))){
var inst_33371 = (state_33394[(7)]);
var state_33394__$1 = state_33394;
var statearr_33408_34735 = state_33394__$1;
(statearr_33408_34735[(2)] = inst_33371);

(statearr_33408_34735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (10))){
var inst_33390 = (state_33394[(2)]);
var state_33394__$1 = state_33394;
var statearr_33409_34736 = state_33394__$1;
(statearr_33409_34736[(2)] = inst_33390);

(statearr_33409_34736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33395 === (8))){
var inst_33371 = (state_33394[(7)]);
var inst_33381 = cljs.core.next(inst_33371);
var inst_33371__$1 = inst_33381;
var state_33394__$1 = (function (){var statearr_33410 = state_33394;
(statearr_33410[(7)] = inst_33371__$1);

return statearr_33410;
})();
var statearr_33411_34737 = state_33394__$1;
(statearr_33411_34737[(2)] = null);

(statearr_33411_34737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_33412 = [null,null,null,null,null,null,null,null];
(statearr_33412[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_33412[(1)] = (1));

return statearr_33412;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_33394){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33394);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33413){var ex__32883__auto__ = e33413;
var statearr_33414_34738 = state_33394;
(statearr_33414_34738[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33394[(4)]))){
var statearr_33415_34739 = state_33394;
(statearr_33415_34739[(1)] = cljs.core.first((state_33394[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34740 = state_33394;
state_33394 = G__34740;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_33394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_33394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33416 = f__32933__auto__();
(statearr_33416[(6)] = c__32932__auto__);

return statearr_33416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));

return c__32932__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33417 = (function (ch,cs,meta33418){
this.ch = ch;
this.cs = cs;
this.meta33418 = meta33418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33419,meta33418__$1){
var self__ = this;
var _33419__$1 = this;
return (new cljs.core.async.t_cljs$core$async33417(self__.ch,self__.cs,meta33418__$1));
}));

(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33419){
var self__ = this;
var _33419__$1 = this;
return self__.meta33418;
}));

(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33417.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33418","meta33418",1070741302,null)], null);
}));

(cljs.core.async.t_cljs$core$async33417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33417");

(cljs.core.async.t_cljs$core$async33417.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33417.
 */
cljs.core.async.__GT_t_cljs$core$async33417 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33417(ch__$1,cs__$1,meta33418){
return (new cljs.core.async.t_cljs$core$async33417(ch__$1,cs__$1,meta33418));
});

}

return (new cljs.core.async.t_cljs$core$async33417(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32932__auto___34759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33552){
var state_val_33553 = (state_33552[(1)]);
if((state_val_33553 === (7))){
var inst_33548 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33554_34760 = state_33552__$1;
(statearr_33554_34760[(2)] = inst_33548);

(statearr_33554_34760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (20))){
var inst_33453 = (state_33552[(7)]);
var inst_33465 = cljs.core.first(inst_33453);
var inst_33466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33465,(0),null);
var inst_33467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33465,(1),null);
var state_33552__$1 = (function (){var statearr_33555 = state_33552;
(statearr_33555[(8)] = inst_33466);

return statearr_33555;
})();
if(cljs.core.truth_(inst_33467)){
var statearr_33556_34765 = state_33552__$1;
(statearr_33556_34765[(1)] = (22));

} else {
var statearr_33557_34766 = state_33552__$1;
(statearr_33557_34766[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (27))){
var inst_33502 = (state_33552[(9)]);
var inst_33422 = (state_33552[(10)]);
var inst_33495 = (state_33552[(11)]);
var inst_33497 = (state_33552[(12)]);
var inst_33502__$1 = cljs.core._nth(inst_33495,inst_33497);
var inst_33503 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33502__$1,inst_33422,done);
var state_33552__$1 = (function (){var statearr_33558 = state_33552;
(statearr_33558[(9)] = inst_33502__$1);

return statearr_33558;
})();
if(cljs.core.truth_(inst_33503)){
var statearr_33559_34770 = state_33552__$1;
(statearr_33559_34770[(1)] = (30));

} else {
var statearr_33560_34771 = state_33552__$1;
(statearr_33560_34771[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (1))){
var state_33552__$1 = state_33552;
var statearr_33561_34772 = state_33552__$1;
(statearr_33561_34772[(2)] = null);

(statearr_33561_34772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (24))){
var inst_33453 = (state_33552[(7)]);
var inst_33472 = (state_33552[(2)]);
var inst_33473 = cljs.core.next(inst_33453);
var inst_33431 = inst_33473;
var inst_33432 = null;
var inst_33433 = (0);
var inst_33434 = (0);
var state_33552__$1 = (function (){var statearr_33562 = state_33552;
(statearr_33562[(13)] = inst_33433);

(statearr_33562[(14)] = inst_33472);

(statearr_33562[(15)] = inst_33432);

(statearr_33562[(16)] = inst_33431);

(statearr_33562[(17)] = inst_33434);

return statearr_33562;
})();
var statearr_33563_34773 = state_33552__$1;
(statearr_33563_34773[(2)] = null);

(statearr_33563_34773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (39))){
var state_33552__$1 = state_33552;
var statearr_33567_34774 = state_33552__$1;
(statearr_33567_34774[(2)] = null);

(statearr_33567_34774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (4))){
var inst_33422 = (state_33552[(10)]);
var inst_33422__$1 = (state_33552[(2)]);
var inst_33423 = (inst_33422__$1 == null);
var state_33552__$1 = (function (){var statearr_33568 = state_33552;
(statearr_33568[(10)] = inst_33422__$1);

return statearr_33568;
})();
if(cljs.core.truth_(inst_33423)){
var statearr_33569_34775 = state_33552__$1;
(statearr_33569_34775[(1)] = (5));

} else {
var statearr_33570_34776 = state_33552__$1;
(statearr_33570_34776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (15))){
var inst_33433 = (state_33552[(13)]);
var inst_33432 = (state_33552[(15)]);
var inst_33431 = (state_33552[(16)]);
var inst_33434 = (state_33552[(17)]);
var inst_33449 = (state_33552[(2)]);
var inst_33450 = (inst_33434 + (1));
var tmp33564 = inst_33433;
var tmp33565 = inst_33432;
var tmp33566 = inst_33431;
var inst_33431__$1 = tmp33566;
var inst_33432__$1 = tmp33565;
var inst_33433__$1 = tmp33564;
var inst_33434__$1 = inst_33450;
var state_33552__$1 = (function (){var statearr_33571 = state_33552;
(statearr_33571[(13)] = inst_33433__$1);

(statearr_33571[(18)] = inst_33449);

(statearr_33571[(15)] = inst_33432__$1);

(statearr_33571[(16)] = inst_33431__$1);

(statearr_33571[(17)] = inst_33434__$1);

return statearr_33571;
})();
var statearr_33572_34783 = state_33552__$1;
(statearr_33572_34783[(2)] = null);

(statearr_33572_34783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (21))){
var inst_33476 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33576_34784 = state_33552__$1;
(statearr_33576_34784[(2)] = inst_33476);

(statearr_33576_34784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (31))){
var inst_33502 = (state_33552[(9)]);
var inst_33506 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33502);
var state_33552__$1 = state_33552;
var statearr_33577_34785 = state_33552__$1;
(statearr_33577_34785[(2)] = inst_33506);

(statearr_33577_34785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (32))){
var inst_33495 = (state_33552[(11)]);
var inst_33496 = (state_33552[(19)]);
var inst_33494 = (state_33552[(20)]);
var inst_33497 = (state_33552[(12)]);
var inst_33508 = (state_33552[(2)]);
var inst_33509 = (inst_33497 + (1));
var tmp33573 = inst_33495;
var tmp33574 = inst_33496;
var tmp33575 = inst_33494;
var inst_33494__$1 = tmp33575;
var inst_33495__$1 = tmp33573;
var inst_33496__$1 = tmp33574;
var inst_33497__$1 = inst_33509;
var state_33552__$1 = (function (){var statearr_33578 = state_33552;
(statearr_33578[(21)] = inst_33508);

(statearr_33578[(11)] = inst_33495__$1);

(statearr_33578[(19)] = inst_33496__$1);

(statearr_33578[(20)] = inst_33494__$1);

(statearr_33578[(12)] = inst_33497__$1);

return statearr_33578;
})();
var statearr_33579_34789 = state_33552__$1;
(statearr_33579_34789[(2)] = null);

(statearr_33579_34789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (40))){
var inst_33521 = (state_33552[(22)]);
var inst_33525 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33521);
var state_33552__$1 = state_33552;
var statearr_33580_34790 = state_33552__$1;
(statearr_33580_34790[(2)] = inst_33525);

(statearr_33580_34790[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (33))){
var inst_33512 = (state_33552[(23)]);
var inst_33514 = cljs.core.chunked_seq_QMARK_(inst_33512);
var state_33552__$1 = state_33552;
if(inst_33514){
var statearr_33581_34791 = state_33552__$1;
(statearr_33581_34791[(1)] = (36));

} else {
var statearr_33582_34792 = state_33552__$1;
(statearr_33582_34792[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (13))){
var inst_33443 = (state_33552[(24)]);
var inst_33446 = cljs.core.async.close_BANG_(inst_33443);
var state_33552__$1 = state_33552;
var statearr_33583_34793 = state_33552__$1;
(statearr_33583_34793[(2)] = inst_33446);

(statearr_33583_34793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (22))){
var inst_33466 = (state_33552[(8)]);
var inst_33469 = cljs.core.async.close_BANG_(inst_33466);
var state_33552__$1 = state_33552;
var statearr_33584_34795 = state_33552__$1;
(statearr_33584_34795[(2)] = inst_33469);

(statearr_33584_34795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (36))){
var inst_33512 = (state_33552[(23)]);
var inst_33516 = cljs.core.chunk_first(inst_33512);
var inst_33517 = cljs.core.chunk_rest(inst_33512);
var inst_33518 = cljs.core.count(inst_33516);
var inst_33494 = inst_33517;
var inst_33495 = inst_33516;
var inst_33496 = inst_33518;
var inst_33497 = (0);
var state_33552__$1 = (function (){var statearr_33585 = state_33552;
(statearr_33585[(11)] = inst_33495);

(statearr_33585[(19)] = inst_33496);

(statearr_33585[(20)] = inst_33494);

(statearr_33585[(12)] = inst_33497);

return statearr_33585;
})();
var statearr_33586_34796 = state_33552__$1;
(statearr_33586_34796[(2)] = null);

(statearr_33586_34796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (41))){
var inst_33512 = (state_33552[(23)]);
var inst_33527 = (state_33552[(2)]);
var inst_33528 = cljs.core.next(inst_33512);
var inst_33494 = inst_33528;
var inst_33495 = null;
var inst_33496 = (0);
var inst_33497 = (0);
var state_33552__$1 = (function (){var statearr_33587 = state_33552;
(statearr_33587[(11)] = inst_33495);

(statearr_33587[(25)] = inst_33527);

(statearr_33587[(19)] = inst_33496);

(statearr_33587[(20)] = inst_33494);

(statearr_33587[(12)] = inst_33497);

return statearr_33587;
})();
var statearr_33588_34797 = state_33552__$1;
(statearr_33588_34797[(2)] = null);

(statearr_33588_34797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (43))){
var state_33552__$1 = state_33552;
var statearr_33589_34798 = state_33552__$1;
(statearr_33589_34798[(2)] = null);

(statearr_33589_34798[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (29))){
var inst_33536 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33590_34799 = state_33552__$1;
(statearr_33590_34799[(2)] = inst_33536);

(statearr_33590_34799[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (44))){
var inst_33545 = (state_33552[(2)]);
var state_33552__$1 = (function (){var statearr_33591 = state_33552;
(statearr_33591[(26)] = inst_33545);

return statearr_33591;
})();
var statearr_33592_34800 = state_33552__$1;
(statearr_33592_34800[(2)] = null);

(statearr_33592_34800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (6))){
var inst_33486 = (state_33552[(27)]);
var inst_33485 = cljs.core.deref(cs);
var inst_33486__$1 = cljs.core.keys(inst_33485);
var inst_33487 = cljs.core.count(inst_33486__$1);
var inst_33488 = cljs.core.reset_BANG_(dctr,inst_33487);
var inst_33493 = cljs.core.seq(inst_33486__$1);
var inst_33494 = inst_33493;
var inst_33495 = null;
var inst_33496 = (0);
var inst_33497 = (0);
var state_33552__$1 = (function (){var statearr_33593 = state_33552;
(statearr_33593[(11)] = inst_33495);

(statearr_33593[(28)] = inst_33488);

(statearr_33593[(27)] = inst_33486__$1);

(statearr_33593[(19)] = inst_33496);

(statearr_33593[(20)] = inst_33494);

(statearr_33593[(12)] = inst_33497);

return statearr_33593;
})();
var statearr_33594_34801 = state_33552__$1;
(statearr_33594_34801[(2)] = null);

(statearr_33594_34801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (28))){
var inst_33512 = (state_33552[(23)]);
var inst_33494 = (state_33552[(20)]);
var inst_33512__$1 = cljs.core.seq(inst_33494);
var state_33552__$1 = (function (){var statearr_33595 = state_33552;
(statearr_33595[(23)] = inst_33512__$1);

return statearr_33595;
})();
if(inst_33512__$1){
var statearr_33596_34802 = state_33552__$1;
(statearr_33596_34802[(1)] = (33));

} else {
var statearr_33597_34803 = state_33552__$1;
(statearr_33597_34803[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (25))){
var inst_33496 = (state_33552[(19)]);
var inst_33497 = (state_33552[(12)]);
var inst_33499 = (inst_33497 < inst_33496);
var inst_33500 = inst_33499;
var state_33552__$1 = state_33552;
if(cljs.core.truth_(inst_33500)){
var statearr_33598_34804 = state_33552__$1;
(statearr_33598_34804[(1)] = (27));

} else {
var statearr_33599_34805 = state_33552__$1;
(statearr_33599_34805[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (34))){
var state_33552__$1 = state_33552;
var statearr_33600_34806 = state_33552__$1;
(statearr_33600_34806[(2)] = null);

(statearr_33600_34806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (17))){
var state_33552__$1 = state_33552;
var statearr_33601_34807 = state_33552__$1;
(statearr_33601_34807[(2)] = null);

(statearr_33601_34807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (3))){
var inst_33550 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33552__$1,inst_33550);
} else {
if((state_val_33553 === (12))){
var inst_33481 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33602_34808 = state_33552__$1;
(statearr_33602_34808[(2)] = inst_33481);

(statearr_33602_34808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (2))){
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33552__$1,(4),ch);
} else {
if((state_val_33553 === (23))){
var state_33552__$1 = state_33552;
var statearr_33603_34809 = state_33552__$1;
(statearr_33603_34809[(2)] = null);

(statearr_33603_34809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (35))){
var inst_33534 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33604_34810 = state_33552__$1;
(statearr_33604_34810[(2)] = inst_33534);

(statearr_33604_34810[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (19))){
var inst_33453 = (state_33552[(7)]);
var inst_33457 = cljs.core.chunk_first(inst_33453);
var inst_33458 = cljs.core.chunk_rest(inst_33453);
var inst_33459 = cljs.core.count(inst_33457);
var inst_33431 = inst_33458;
var inst_33432 = inst_33457;
var inst_33433 = inst_33459;
var inst_33434 = (0);
var state_33552__$1 = (function (){var statearr_33605 = state_33552;
(statearr_33605[(13)] = inst_33433);

(statearr_33605[(15)] = inst_33432);

(statearr_33605[(16)] = inst_33431);

(statearr_33605[(17)] = inst_33434);

return statearr_33605;
})();
var statearr_33606_34811 = state_33552__$1;
(statearr_33606_34811[(2)] = null);

(statearr_33606_34811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (11))){
var inst_33453 = (state_33552[(7)]);
var inst_33431 = (state_33552[(16)]);
var inst_33453__$1 = cljs.core.seq(inst_33431);
var state_33552__$1 = (function (){var statearr_33607 = state_33552;
(statearr_33607[(7)] = inst_33453__$1);

return statearr_33607;
})();
if(inst_33453__$1){
var statearr_33608_34815 = state_33552__$1;
(statearr_33608_34815[(1)] = (16));

} else {
var statearr_33609_34816 = state_33552__$1;
(statearr_33609_34816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (9))){
var inst_33483 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33610_34817 = state_33552__$1;
(statearr_33610_34817[(2)] = inst_33483);

(statearr_33610_34817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (5))){
var inst_33429 = cljs.core.deref(cs);
var inst_33430 = cljs.core.seq(inst_33429);
var inst_33431 = inst_33430;
var inst_33432 = null;
var inst_33433 = (0);
var inst_33434 = (0);
var state_33552__$1 = (function (){var statearr_33611 = state_33552;
(statearr_33611[(13)] = inst_33433);

(statearr_33611[(15)] = inst_33432);

(statearr_33611[(16)] = inst_33431);

(statearr_33611[(17)] = inst_33434);

return statearr_33611;
})();
var statearr_33612_34821 = state_33552__$1;
(statearr_33612_34821[(2)] = null);

(statearr_33612_34821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (14))){
var state_33552__$1 = state_33552;
var statearr_33613_34823 = state_33552__$1;
(statearr_33613_34823[(2)] = null);

(statearr_33613_34823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (45))){
var inst_33542 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33614_34824 = state_33552__$1;
(statearr_33614_34824[(2)] = inst_33542);

(statearr_33614_34824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (26))){
var inst_33486 = (state_33552[(27)]);
var inst_33538 = (state_33552[(2)]);
var inst_33539 = cljs.core.seq(inst_33486);
var state_33552__$1 = (function (){var statearr_33615 = state_33552;
(statearr_33615[(29)] = inst_33538);

return statearr_33615;
})();
if(inst_33539){
var statearr_33616_34827 = state_33552__$1;
(statearr_33616_34827[(1)] = (42));

} else {
var statearr_33617_34828 = state_33552__$1;
(statearr_33617_34828[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (16))){
var inst_33453 = (state_33552[(7)]);
var inst_33455 = cljs.core.chunked_seq_QMARK_(inst_33453);
var state_33552__$1 = state_33552;
if(inst_33455){
var statearr_33618_34829 = state_33552__$1;
(statearr_33618_34829[(1)] = (19));

} else {
var statearr_33619_34830 = state_33552__$1;
(statearr_33619_34830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (38))){
var inst_33531 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33620_34831 = state_33552__$1;
(statearr_33620_34831[(2)] = inst_33531);

(statearr_33620_34831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (30))){
var state_33552__$1 = state_33552;
var statearr_33621_34832 = state_33552__$1;
(statearr_33621_34832[(2)] = null);

(statearr_33621_34832[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (10))){
var inst_33432 = (state_33552[(15)]);
var inst_33434 = (state_33552[(17)]);
var inst_33442 = cljs.core._nth(inst_33432,inst_33434);
var inst_33443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33442,(0),null);
var inst_33444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33442,(1),null);
var state_33552__$1 = (function (){var statearr_33622 = state_33552;
(statearr_33622[(24)] = inst_33443);

return statearr_33622;
})();
if(cljs.core.truth_(inst_33444)){
var statearr_33623_34833 = state_33552__$1;
(statearr_33623_34833[(1)] = (13));

} else {
var statearr_33624_34834 = state_33552__$1;
(statearr_33624_34834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (18))){
var inst_33479 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33625_34835 = state_33552__$1;
(statearr_33625_34835[(2)] = inst_33479);

(statearr_33625_34835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (42))){
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33552__$1,(45),dchan);
} else {
if((state_val_33553 === (37))){
var inst_33512 = (state_33552[(23)]);
var inst_33422 = (state_33552[(10)]);
var inst_33521 = (state_33552[(22)]);
var inst_33521__$1 = cljs.core.first(inst_33512);
var inst_33522 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33521__$1,inst_33422,done);
var state_33552__$1 = (function (){var statearr_33626 = state_33552;
(statearr_33626[(22)] = inst_33521__$1);

return statearr_33626;
})();
if(cljs.core.truth_(inst_33522)){
var statearr_33627_34837 = state_33552__$1;
(statearr_33627_34837[(1)] = (39));

} else {
var statearr_33628_34841 = state_33552__$1;
(statearr_33628_34841[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (8))){
var inst_33433 = (state_33552[(13)]);
var inst_33434 = (state_33552[(17)]);
var inst_33436 = (inst_33434 < inst_33433);
var inst_33437 = inst_33436;
var state_33552__$1 = state_33552;
if(cljs.core.truth_(inst_33437)){
var statearr_33629_34842 = state_33552__$1;
(statearr_33629_34842[(1)] = (10));

} else {
var statearr_33630_34843 = state_33552__$1;
(statearr_33630_34843[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32880__auto__ = null;
var cljs$core$async$mult_$_state_machine__32880__auto____0 = (function (){
var statearr_33631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33631[(0)] = cljs$core$async$mult_$_state_machine__32880__auto__);

(statearr_33631[(1)] = (1));

return statearr_33631;
});
var cljs$core$async$mult_$_state_machine__32880__auto____1 = (function (state_33552){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33552);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33632){var ex__32883__auto__ = e33632;
var statearr_33633_34848 = state_33552;
(statearr_33633_34848[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33552[(4)]))){
var statearr_33634_34849 = state_33552;
(statearr_33634_34849[(1)] = cljs.core.first((state_33552[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34850 = state_33552;
state_33552 = G__34850;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32880__auto__ = function(state_33552){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32880__auto____1.call(this,state_33552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32880__auto____0;
cljs$core$async$mult_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32880__auto____1;
return cljs$core$async$mult_$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33635 = f__32933__auto__();
(statearr_33635[(6)] = c__32932__auto___34759);

return statearr_33635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33637 = arguments.length;
switch (G__33637) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34871 = arguments.length;
var i__4790__auto___34872 = (0);
while(true){
if((i__4790__auto___34872 < len__4789__auto___34871)){
args__4795__auto__.push((arguments[i__4790__auto___34872]));

var G__34873 = (i__4790__auto___34872 + (1));
i__4790__auto___34872 = G__34873;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33642){
var map__33643 = p__33642;
var map__33643__$1 = (((((!((map__33643 == null))))?(((((map__33643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33643):map__33643);
var opts = map__33643__$1;
var statearr_33645_34874 = state;
(statearr_33645_34874[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33646_34875 = state;
(statearr_33646_34875[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33647_34876 = state;
(statearr_33647_34876[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33638){
var G__33639 = cljs.core.first(seq33638);
var seq33638__$1 = cljs.core.next(seq33638);
var G__33640 = cljs.core.first(seq33638__$1);
var seq33638__$2 = cljs.core.next(seq33638__$1);
var G__33641 = cljs.core.first(seq33638__$2);
var seq33638__$3 = cljs.core.next(seq33638__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33639,G__33640,G__33641,seq33638__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33648 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33649){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33649 = meta33649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33650,meta33649__$1){
var self__ = this;
var _33650__$1 = this;
return (new cljs.core.async.t_cljs$core$async33648(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33649__$1));
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33650){
var self__ = this;
var _33650__$1 = this;
return self__.meta33649;
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33649","meta33649",637761193,null)], null);
}));

(cljs.core.async.t_cljs$core$async33648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33648");

(cljs.core.async.t_cljs$core$async33648.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33648.
 */
cljs.core.async.__GT_t_cljs$core$async33648 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33648(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33649){
return (new cljs.core.async.t_cljs$core$async33648(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33649));
});

}

return (new cljs.core.async.t_cljs$core$async33648(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32932__auto___34889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33752){
var state_val_33753 = (state_33752[(1)]);
if((state_val_33753 === (7))){
var inst_33667 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33754_34890 = state_33752__$1;
(statearr_33754_34890[(2)] = inst_33667);

(statearr_33754_34890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (20))){
var inst_33679 = (state_33752[(7)]);
var state_33752__$1 = state_33752;
var statearr_33755_34891 = state_33752__$1;
(statearr_33755_34891[(2)] = inst_33679);

(statearr_33755_34891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (27))){
var state_33752__$1 = state_33752;
var statearr_33756_34892 = state_33752__$1;
(statearr_33756_34892[(2)] = null);

(statearr_33756_34892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (1))){
var inst_33654 = (state_33752[(8)]);
var inst_33654__$1 = calc_state();
var inst_33656 = (inst_33654__$1 == null);
var inst_33657 = cljs.core.not(inst_33656);
var state_33752__$1 = (function (){var statearr_33757 = state_33752;
(statearr_33757[(8)] = inst_33654__$1);

return statearr_33757;
})();
if(inst_33657){
var statearr_33758_34893 = state_33752__$1;
(statearr_33758_34893[(1)] = (2));

} else {
var statearr_33759_34894 = state_33752__$1;
(statearr_33759_34894[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (24))){
var inst_33726 = (state_33752[(9)]);
var inst_33712 = (state_33752[(10)]);
var inst_33703 = (state_33752[(11)]);
var inst_33726__$1 = (inst_33703.cljs$core$IFn$_invoke$arity$1 ? inst_33703.cljs$core$IFn$_invoke$arity$1(inst_33712) : inst_33703.call(null,inst_33712));
var state_33752__$1 = (function (){var statearr_33760 = state_33752;
(statearr_33760[(9)] = inst_33726__$1);

return statearr_33760;
})();
if(cljs.core.truth_(inst_33726__$1)){
var statearr_33761_34895 = state_33752__$1;
(statearr_33761_34895[(1)] = (29));

} else {
var statearr_33762_34896 = state_33752__$1;
(statearr_33762_34896[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (4))){
var inst_33670 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33670)){
var statearr_33763_34897 = state_33752__$1;
(statearr_33763_34897[(1)] = (8));

} else {
var statearr_33764_34898 = state_33752__$1;
(statearr_33764_34898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (15))){
var inst_33697 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33697)){
var statearr_33765_34899 = state_33752__$1;
(statearr_33765_34899[(1)] = (19));

} else {
var statearr_33766_34900 = state_33752__$1;
(statearr_33766_34900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (21))){
var inst_33702 = (state_33752[(12)]);
var inst_33702__$1 = (state_33752[(2)]);
var inst_33703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33702__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33702__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33702__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33752__$1 = (function (){var statearr_33767 = state_33752;
(statearr_33767[(13)] = inst_33704);

(statearr_33767[(12)] = inst_33702__$1);

(statearr_33767[(11)] = inst_33703);

return statearr_33767;
})();
return cljs.core.async.ioc_alts_BANG_(state_33752__$1,(22),inst_33705);
} else {
if((state_val_33753 === (31))){
var inst_33734 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33734)){
var statearr_33768_34901 = state_33752__$1;
(statearr_33768_34901[(1)] = (32));

} else {
var statearr_33769_34902 = state_33752__$1;
(statearr_33769_34902[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (32))){
var inst_33711 = (state_33752[(14)]);
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33752__$1,(35),out,inst_33711);
} else {
if((state_val_33753 === (33))){
var inst_33702 = (state_33752[(12)]);
var inst_33679 = inst_33702;
var state_33752__$1 = (function (){var statearr_33770 = state_33752;
(statearr_33770[(7)] = inst_33679);

return statearr_33770;
})();
var statearr_33771_34903 = state_33752__$1;
(statearr_33771_34903[(2)] = null);

(statearr_33771_34903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (13))){
var inst_33679 = (state_33752[(7)]);
var inst_33686 = inst_33679.cljs$lang$protocol_mask$partition0$;
var inst_33687 = (inst_33686 & (64));
var inst_33688 = inst_33679.cljs$core$ISeq$;
var inst_33689 = (cljs.core.PROTOCOL_SENTINEL === inst_33688);
var inst_33690 = ((inst_33687) || (inst_33689));
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33690)){
var statearr_33772_34904 = state_33752__$1;
(statearr_33772_34904[(1)] = (16));

} else {
var statearr_33773_34905 = state_33752__$1;
(statearr_33773_34905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (22))){
var inst_33712 = (state_33752[(10)]);
var inst_33711 = (state_33752[(14)]);
var inst_33710 = (state_33752[(2)]);
var inst_33711__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33710,(0),null);
var inst_33712__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33710,(1),null);
var inst_33713 = (inst_33711__$1 == null);
var inst_33714 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33712__$1,change);
var inst_33715 = ((inst_33713) || (inst_33714));
var state_33752__$1 = (function (){var statearr_33774 = state_33752;
(statearr_33774[(10)] = inst_33712__$1);

(statearr_33774[(14)] = inst_33711__$1);

return statearr_33774;
})();
if(cljs.core.truth_(inst_33715)){
var statearr_33775_34907 = state_33752__$1;
(statearr_33775_34907[(1)] = (23));

} else {
var statearr_33776_34908 = state_33752__$1;
(statearr_33776_34908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (36))){
var inst_33702 = (state_33752[(12)]);
var inst_33679 = inst_33702;
var state_33752__$1 = (function (){var statearr_33777 = state_33752;
(statearr_33777[(7)] = inst_33679);

return statearr_33777;
})();
var statearr_33778_34909 = state_33752__$1;
(statearr_33778_34909[(2)] = null);

(statearr_33778_34909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (29))){
var inst_33726 = (state_33752[(9)]);
var state_33752__$1 = state_33752;
var statearr_33779_34910 = state_33752__$1;
(statearr_33779_34910[(2)] = inst_33726);

(statearr_33779_34910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (6))){
var state_33752__$1 = state_33752;
var statearr_33780_34911 = state_33752__$1;
(statearr_33780_34911[(2)] = false);

(statearr_33780_34911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (28))){
var inst_33722 = (state_33752[(2)]);
var inst_33723 = calc_state();
var inst_33679 = inst_33723;
var state_33752__$1 = (function (){var statearr_33781 = state_33752;
(statearr_33781[(15)] = inst_33722);

(statearr_33781[(7)] = inst_33679);

return statearr_33781;
})();
var statearr_33782_34916 = state_33752__$1;
(statearr_33782_34916[(2)] = null);

(statearr_33782_34916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (25))){
var inst_33748 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33783_34917 = state_33752__$1;
(statearr_33783_34917[(2)] = inst_33748);

(statearr_33783_34917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (34))){
var inst_33746 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33784_34918 = state_33752__$1;
(statearr_33784_34918[(2)] = inst_33746);

(statearr_33784_34918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (17))){
var state_33752__$1 = state_33752;
var statearr_33785_34919 = state_33752__$1;
(statearr_33785_34919[(2)] = false);

(statearr_33785_34919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (3))){
var state_33752__$1 = state_33752;
var statearr_33786_34920 = state_33752__$1;
(statearr_33786_34920[(2)] = false);

(statearr_33786_34920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (12))){
var inst_33750 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33752__$1,inst_33750);
} else {
if((state_val_33753 === (2))){
var inst_33654 = (state_33752[(8)]);
var inst_33659 = inst_33654.cljs$lang$protocol_mask$partition0$;
var inst_33660 = (inst_33659 & (64));
var inst_33661 = inst_33654.cljs$core$ISeq$;
var inst_33662 = (cljs.core.PROTOCOL_SENTINEL === inst_33661);
var inst_33663 = ((inst_33660) || (inst_33662));
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33663)){
var statearr_33787_34922 = state_33752__$1;
(statearr_33787_34922[(1)] = (5));

} else {
var statearr_33788_34923 = state_33752__$1;
(statearr_33788_34923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (23))){
var inst_33711 = (state_33752[(14)]);
var inst_33717 = (inst_33711 == null);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33717)){
var statearr_33789_34925 = state_33752__$1;
(statearr_33789_34925[(1)] = (26));

} else {
var statearr_33790_34926 = state_33752__$1;
(statearr_33790_34926[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (35))){
var inst_33737 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33737)){
var statearr_33791_34927 = state_33752__$1;
(statearr_33791_34927[(1)] = (36));

} else {
var statearr_33792_34928 = state_33752__$1;
(statearr_33792_34928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (19))){
var inst_33679 = (state_33752[(7)]);
var inst_33699 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33679);
var state_33752__$1 = state_33752;
var statearr_33793_34929 = state_33752__$1;
(statearr_33793_34929[(2)] = inst_33699);

(statearr_33793_34929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (11))){
var inst_33679 = (state_33752[(7)]);
var inst_33683 = (inst_33679 == null);
var inst_33684 = cljs.core.not(inst_33683);
var state_33752__$1 = state_33752;
if(inst_33684){
var statearr_33794_34931 = state_33752__$1;
(statearr_33794_34931[(1)] = (13));

} else {
var statearr_33795_34932 = state_33752__$1;
(statearr_33795_34932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (9))){
var inst_33654 = (state_33752[(8)]);
var state_33752__$1 = state_33752;
var statearr_33796_34934 = state_33752__$1;
(statearr_33796_34934[(2)] = inst_33654);

(statearr_33796_34934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (5))){
var state_33752__$1 = state_33752;
var statearr_33797_34935 = state_33752__$1;
(statearr_33797_34935[(2)] = true);

(statearr_33797_34935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (14))){
var state_33752__$1 = state_33752;
var statearr_33798_34936 = state_33752__$1;
(statearr_33798_34936[(2)] = false);

(statearr_33798_34936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (26))){
var inst_33712 = (state_33752[(10)]);
var inst_33719 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33712);
var state_33752__$1 = state_33752;
var statearr_33799_34937 = state_33752__$1;
(statearr_33799_34937[(2)] = inst_33719);

(statearr_33799_34937[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (16))){
var state_33752__$1 = state_33752;
var statearr_33800_34938 = state_33752__$1;
(statearr_33800_34938[(2)] = true);

(statearr_33800_34938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (38))){
var inst_33742 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33801_34939 = state_33752__$1;
(statearr_33801_34939[(2)] = inst_33742);

(statearr_33801_34939[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (30))){
var inst_33704 = (state_33752[(13)]);
var inst_33712 = (state_33752[(10)]);
var inst_33703 = (state_33752[(11)]);
var inst_33729 = cljs.core.empty_QMARK_(inst_33703);
var inst_33730 = (inst_33704.cljs$core$IFn$_invoke$arity$1 ? inst_33704.cljs$core$IFn$_invoke$arity$1(inst_33712) : inst_33704.call(null,inst_33712));
var inst_33731 = cljs.core.not(inst_33730);
var inst_33732 = ((inst_33729) && (inst_33731));
var state_33752__$1 = state_33752;
var statearr_33802_34940 = state_33752__$1;
(statearr_33802_34940[(2)] = inst_33732);

(statearr_33802_34940[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (10))){
var inst_33654 = (state_33752[(8)]);
var inst_33675 = (state_33752[(2)]);
var inst_33676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33675,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33675,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33675,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33679 = inst_33654;
var state_33752__$1 = (function (){var statearr_33803 = state_33752;
(statearr_33803[(7)] = inst_33679);

(statearr_33803[(16)] = inst_33676);

(statearr_33803[(17)] = inst_33677);

(statearr_33803[(18)] = inst_33678);

return statearr_33803;
})();
var statearr_33804_34941 = state_33752__$1;
(statearr_33804_34941[(2)] = null);

(statearr_33804_34941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (18))){
var inst_33694 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33805_34943 = state_33752__$1;
(statearr_33805_34943[(2)] = inst_33694);

(statearr_33805_34943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (37))){
var state_33752__$1 = state_33752;
var statearr_33806_34945 = state_33752__$1;
(statearr_33806_34945[(2)] = null);

(statearr_33806_34945[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (8))){
var inst_33654 = (state_33752[(8)]);
var inst_33672 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33654);
var state_33752__$1 = state_33752;
var statearr_33807_34946 = state_33752__$1;
(statearr_33807_34946[(2)] = inst_33672);

(statearr_33807_34946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32880__auto__ = null;
var cljs$core$async$mix_$_state_machine__32880__auto____0 = (function (){
var statearr_33808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33808[(0)] = cljs$core$async$mix_$_state_machine__32880__auto__);

(statearr_33808[(1)] = (1));

return statearr_33808;
});
var cljs$core$async$mix_$_state_machine__32880__auto____1 = (function (state_33752){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33752);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33809){var ex__32883__auto__ = e33809;
var statearr_33810_34947 = state_33752;
(statearr_33810_34947[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33752[(4)]))){
var statearr_33811_34948 = state_33752;
(statearr_33811_34948[(1)] = cljs.core.first((state_33752[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34949 = state_33752;
state_33752 = G__34949;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32880__auto__ = function(state_33752){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32880__auto____1.call(this,state_33752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32880__auto____0;
cljs$core$async$mix_$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32880__auto____1;
return cljs$core$async$mix_$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33812 = f__32933__auto__();
(statearr_33812[(6)] = c__32932__auto___34889);

return statearr_33812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33814 = arguments.length;
switch (G__33814) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33817 = arguments.length;
switch (G__33817) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33815_SHARP_){
if(cljs.core.truth_((p1__33815_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33815_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33815_SHARP_.call(null,topic)))){
return p1__33815_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33815_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33818 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33819){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33819 = meta33819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33820,meta33819__$1){
var self__ = this;
var _33820__$1 = this;
return (new cljs.core.async.t_cljs$core$async33818(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33819__$1));
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33820){
var self__ = this;
var _33820__$1 = this;
return self__.meta33819;
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33819","meta33819",-864166184,null)], null);
}));

(cljs.core.async.t_cljs$core$async33818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33818");

(cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33818.
 */
cljs.core.async.__GT_t_cljs$core$async33818 = (function cljs$core$async$__GT_t_cljs$core$async33818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33819){
return (new cljs.core.async.t_cljs$core$async33818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33819));
});

}

return (new cljs.core.async.t_cljs$core$async33818(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32932__auto___34967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33892){
var state_val_33893 = (state_33892[(1)]);
if((state_val_33893 === (7))){
var inst_33888 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33894_34971 = state_33892__$1;
(statearr_33894_34971[(2)] = inst_33888);

(statearr_33894_34971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (20))){
var state_33892__$1 = state_33892;
var statearr_33895_34972 = state_33892__$1;
(statearr_33895_34972[(2)] = null);

(statearr_33895_34972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (1))){
var state_33892__$1 = state_33892;
var statearr_33896_34973 = state_33892__$1;
(statearr_33896_34973[(2)] = null);

(statearr_33896_34973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (24))){
var inst_33871 = (state_33892[(7)]);
var inst_33880 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33871);
var state_33892__$1 = state_33892;
var statearr_33897_34977 = state_33892__$1;
(statearr_33897_34977[(2)] = inst_33880);

(statearr_33897_34977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (4))){
var inst_33823 = (state_33892[(8)]);
var inst_33823__$1 = (state_33892[(2)]);
var inst_33824 = (inst_33823__$1 == null);
var state_33892__$1 = (function (){var statearr_33898 = state_33892;
(statearr_33898[(8)] = inst_33823__$1);

return statearr_33898;
})();
if(cljs.core.truth_(inst_33824)){
var statearr_33899_34982 = state_33892__$1;
(statearr_33899_34982[(1)] = (5));

} else {
var statearr_33900_34983 = state_33892__$1;
(statearr_33900_34983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (15))){
var inst_33865 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33901_34984 = state_33892__$1;
(statearr_33901_34984[(2)] = inst_33865);

(statearr_33901_34984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (21))){
var inst_33885 = (state_33892[(2)]);
var state_33892__$1 = (function (){var statearr_33902 = state_33892;
(statearr_33902[(9)] = inst_33885);

return statearr_33902;
})();
var statearr_33903_34985 = state_33892__$1;
(statearr_33903_34985[(2)] = null);

(statearr_33903_34985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (13))){
var inst_33847 = (state_33892[(10)]);
var inst_33849 = cljs.core.chunked_seq_QMARK_(inst_33847);
var state_33892__$1 = state_33892;
if(inst_33849){
var statearr_33904_34986 = state_33892__$1;
(statearr_33904_34986[(1)] = (16));

} else {
var statearr_33905_34987 = state_33892__$1;
(statearr_33905_34987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (22))){
var inst_33877 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33877)){
var statearr_33906_34988 = state_33892__$1;
(statearr_33906_34988[(1)] = (23));

} else {
var statearr_33907_34989 = state_33892__$1;
(statearr_33907_34989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (6))){
var inst_33823 = (state_33892[(8)]);
var inst_33871 = (state_33892[(7)]);
var inst_33873 = (state_33892[(11)]);
var inst_33871__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33823) : topic_fn.call(null,inst_33823));
var inst_33872 = cljs.core.deref(mults);
var inst_33873__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33872,inst_33871__$1);
var state_33892__$1 = (function (){var statearr_33908 = state_33892;
(statearr_33908[(7)] = inst_33871__$1);

(statearr_33908[(11)] = inst_33873__$1);

return statearr_33908;
})();
if(cljs.core.truth_(inst_33873__$1)){
var statearr_33909_34990 = state_33892__$1;
(statearr_33909_34990[(1)] = (19));

} else {
var statearr_33910_34991 = state_33892__$1;
(statearr_33910_34991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (25))){
var inst_33882 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33911_34993 = state_33892__$1;
(statearr_33911_34993[(2)] = inst_33882);

(statearr_33911_34993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (17))){
var inst_33847 = (state_33892[(10)]);
var inst_33856 = cljs.core.first(inst_33847);
var inst_33857 = cljs.core.async.muxch_STAR_(inst_33856);
var inst_33858 = cljs.core.async.close_BANG_(inst_33857);
var inst_33859 = cljs.core.next(inst_33847);
var inst_33833 = inst_33859;
var inst_33834 = null;
var inst_33835 = (0);
var inst_33836 = (0);
var state_33892__$1 = (function (){var statearr_33912 = state_33892;
(statearr_33912[(12)] = inst_33836);

(statearr_33912[(13)] = inst_33858);

(statearr_33912[(14)] = inst_33834);

(statearr_33912[(15)] = inst_33835);

(statearr_33912[(16)] = inst_33833);

return statearr_33912;
})();
var statearr_33913_34995 = state_33892__$1;
(statearr_33913_34995[(2)] = null);

(statearr_33913_34995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (3))){
var inst_33890 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33892__$1,inst_33890);
} else {
if((state_val_33893 === (12))){
var inst_33867 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33914_34996 = state_33892__$1;
(statearr_33914_34996[(2)] = inst_33867);

(statearr_33914_34996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (2))){
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33892__$1,(4),ch);
} else {
if((state_val_33893 === (23))){
var state_33892__$1 = state_33892;
var statearr_33915_34997 = state_33892__$1;
(statearr_33915_34997[(2)] = null);

(statearr_33915_34997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (19))){
var inst_33823 = (state_33892[(8)]);
var inst_33873 = (state_33892[(11)]);
var inst_33875 = cljs.core.async.muxch_STAR_(inst_33873);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33892__$1,(22),inst_33875,inst_33823);
} else {
if((state_val_33893 === (11))){
var inst_33833 = (state_33892[(16)]);
var inst_33847 = (state_33892[(10)]);
var inst_33847__$1 = cljs.core.seq(inst_33833);
var state_33892__$1 = (function (){var statearr_33916 = state_33892;
(statearr_33916[(10)] = inst_33847__$1);

return statearr_33916;
})();
if(inst_33847__$1){
var statearr_33917_34998 = state_33892__$1;
(statearr_33917_34998[(1)] = (13));

} else {
var statearr_33918_34999 = state_33892__$1;
(statearr_33918_34999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (9))){
var inst_33869 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33919_35000 = state_33892__$1;
(statearr_33919_35000[(2)] = inst_33869);

(statearr_33919_35000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (5))){
var inst_33830 = cljs.core.deref(mults);
var inst_33831 = cljs.core.vals(inst_33830);
var inst_33832 = cljs.core.seq(inst_33831);
var inst_33833 = inst_33832;
var inst_33834 = null;
var inst_33835 = (0);
var inst_33836 = (0);
var state_33892__$1 = (function (){var statearr_33920 = state_33892;
(statearr_33920[(12)] = inst_33836);

(statearr_33920[(14)] = inst_33834);

(statearr_33920[(15)] = inst_33835);

(statearr_33920[(16)] = inst_33833);

return statearr_33920;
})();
var statearr_33921_35001 = state_33892__$1;
(statearr_33921_35001[(2)] = null);

(statearr_33921_35001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (14))){
var state_33892__$1 = state_33892;
var statearr_33925_35002 = state_33892__$1;
(statearr_33925_35002[(2)] = null);

(statearr_33925_35002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (16))){
var inst_33847 = (state_33892[(10)]);
var inst_33851 = cljs.core.chunk_first(inst_33847);
var inst_33852 = cljs.core.chunk_rest(inst_33847);
var inst_33853 = cljs.core.count(inst_33851);
var inst_33833 = inst_33852;
var inst_33834 = inst_33851;
var inst_33835 = inst_33853;
var inst_33836 = (0);
var state_33892__$1 = (function (){var statearr_33926 = state_33892;
(statearr_33926[(12)] = inst_33836);

(statearr_33926[(14)] = inst_33834);

(statearr_33926[(15)] = inst_33835);

(statearr_33926[(16)] = inst_33833);

return statearr_33926;
})();
var statearr_33927_35003 = state_33892__$1;
(statearr_33927_35003[(2)] = null);

(statearr_33927_35003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (10))){
var inst_33836 = (state_33892[(12)]);
var inst_33834 = (state_33892[(14)]);
var inst_33835 = (state_33892[(15)]);
var inst_33833 = (state_33892[(16)]);
var inst_33841 = cljs.core._nth(inst_33834,inst_33836);
var inst_33842 = cljs.core.async.muxch_STAR_(inst_33841);
var inst_33843 = cljs.core.async.close_BANG_(inst_33842);
var inst_33844 = (inst_33836 + (1));
var tmp33922 = inst_33834;
var tmp33923 = inst_33835;
var tmp33924 = inst_33833;
var inst_33833__$1 = tmp33924;
var inst_33834__$1 = tmp33922;
var inst_33835__$1 = tmp33923;
var inst_33836__$1 = inst_33844;
var state_33892__$1 = (function (){var statearr_33928 = state_33892;
(statearr_33928[(12)] = inst_33836__$1);

(statearr_33928[(14)] = inst_33834__$1);

(statearr_33928[(15)] = inst_33835__$1);

(statearr_33928[(17)] = inst_33843);

(statearr_33928[(16)] = inst_33833__$1);

return statearr_33928;
})();
var statearr_33929_35004 = state_33892__$1;
(statearr_33929_35004[(2)] = null);

(statearr_33929_35004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (18))){
var inst_33862 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33930_35006 = state_33892__$1;
(statearr_33930_35006[(2)] = inst_33862);

(statearr_33930_35006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (8))){
var inst_33836 = (state_33892[(12)]);
var inst_33835 = (state_33892[(15)]);
var inst_33838 = (inst_33836 < inst_33835);
var inst_33839 = inst_33838;
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33839)){
var statearr_33931_35010 = state_33892__$1;
(statearr_33931_35010[(1)] = (10));

} else {
var statearr_33932_35011 = state_33892__$1;
(statearr_33932_35011[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_33933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33933[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_33933[(1)] = (1));

return statearr_33933;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_33892){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33892);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e33934){var ex__32883__auto__ = e33934;
var statearr_33935_35012 = state_33892;
(statearr_33935_35012[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33892[(4)]))){
var statearr_33936_35017 = state_33892;
(statearr_33936_35017[(1)] = cljs.core.first((state_33892[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35018 = state_33892;
state_33892 = G__35018;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_33892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_33892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_33937 = f__32933__auto__();
(statearr_33937[(6)] = c__32932__auto___34967);

return statearr_33937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33939 = arguments.length;
switch (G__33939) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33941 = arguments.length;
switch (G__33941) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33943 = arguments.length;
switch (G__33943) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32932__auto___35028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_33986){
var state_val_33987 = (state_33986[(1)]);
if((state_val_33987 === (7))){
var state_33986__$1 = state_33986;
var statearr_33988_35029 = state_33986__$1;
(statearr_33988_35029[(2)] = null);

(statearr_33988_35029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (1))){
var state_33986__$1 = state_33986;
var statearr_33989_35030 = state_33986__$1;
(statearr_33989_35030[(2)] = null);

(statearr_33989_35030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (4))){
var inst_33946 = (state_33986[(7)]);
var inst_33947 = (state_33986[(8)]);
var inst_33949 = (inst_33947 < inst_33946);
var state_33986__$1 = state_33986;
if(cljs.core.truth_(inst_33949)){
var statearr_33990_35031 = state_33986__$1;
(statearr_33990_35031[(1)] = (6));

} else {
var statearr_33991_35032 = state_33986__$1;
(statearr_33991_35032[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (15))){
var inst_33972 = (state_33986[(9)]);
var inst_33977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33972);
var state_33986__$1 = state_33986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33986__$1,(17),out,inst_33977);
} else {
if((state_val_33987 === (13))){
var inst_33972 = (state_33986[(9)]);
var inst_33972__$1 = (state_33986[(2)]);
var inst_33973 = cljs.core.some(cljs.core.nil_QMARK_,inst_33972__$1);
var state_33986__$1 = (function (){var statearr_33992 = state_33986;
(statearr_33992[(9)] = inst_33972__$1);

return statearr_33992;
})();
if(cljs.core.truth_(inst_33973)){
var statearr_33993_35033 = state_33986__$1;
(statearr_33993_35033[(1)] = (14));

} else {
var statearr_33994_35034 = state_33986__$1;
(statearr_33994_35034[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (6))){
var state_33986__$1 = state_33986;
var statearr_33995_35035 = state_33986__$1;
(statearr_33995_35035[(2)] = null);

(statearr_33995_35035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (17))){
var inst_33979 = (state_33986[(2)]);
var state_33986__$1 = (function (){var statearr_33997 = state_33986;
(statearr_33997[(10)] = inst_33979);

return statearr_33997;
})();
var statearr_33998_35036 = state_33986__$1;
(statearr_33998_35036[(2)] = null);

(statearr_33998_35036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (3))){
var inst_33984 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33986__$1,inst_33984);
} else {
if((state_val_33987 === (12))){
var _ = (function (){var statearr_33999 = state_33986;
(statearr_33999[(4)] = cljs.core.rest((state_33986[(4)])));

return statearr_33999;
})();
var state_33986__$1 = state_33986;
var ex33996 = (state_33986__$1[(2)]);
var statearr_34000_35037 = state_33986__$1;
(statearr_34000_35037[(5)] = ex33996);


if((ex33996 instanceof Object)){
var statearr_34001_35038 = state_33986__$1;
(statearr_34001_35038[(1)] = (11));

(statearr_34001_35038[(5)] = null);

} else {
throw ex33996;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (2))){
var inst_33945 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33946 = cnt;
var inst_33947 = (0);
var state_33986__$1 = (function (){var statearr_34002 = state_33986;
(statearr_34002[(7)] = inst_33946);

(statearr_34002[(11)] = inst_33945);

(statearr_34002[(8)] = inst_33947);

return statearr_34002;
})();
var statearr_34003_35039 = state_33986__$1;
(statearr_34003_35039[(2)] = null);

(statearr_34003_35039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (11))){
var inst_33951 = (state_33986[(2)]);
var inst_33952 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33986__$1 = (function (){var statearr_34004 = state_33986;
(statearr_34004[(12)] = inst_33951);

return statearr_34004;
})();
var statearr_34005_35040 = state_33986__$1;
(statearr_34005_35040[(2)] = inst_33952);

(statearr_34005_35040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (9))){
var inst_33947 = (state_33986[(8)]);
var _ = (function (){var statearr_34006 = state_33986;
(statearr_34006[(4)] = cljs.core.cons((12),(state_33986[(4)])));

return statearr_34006;
})();
var inst_33958 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33947) : chs__$1.call(null,inst_33947));
var inst_33959 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33947) : done.call(null,inst_33947));
var inst_33960 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33958,inst_33959);
var ___$1 = (function (){var statearr_34007 = state_33986;
(statearr_34007[(4)] = cljs.core.rest((state_33986[(4)])));

return statearr_34007;
})();
var state_33986__$1 = state_33986;
var statearr_34008_35044 = state_33986__$1;
(statearr_34008_35044[(2)] = inst_33960);

(statearr_34008_35044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (5))){
var inst_33970 = (state_33986[(2)]);
var state_33986__$1 = (function (){var statearr_34009 = state_33986;
(statearr_34009[(13)] = inst_33970);

return statearr_34009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33986__$1,(13),dchan);
} else {
if((state_val_33987 === (14))){
var inst_33975 = cljs.core.async.close_BANG_(out);
var state_33986__$1 = state_33986;
var statearr_34010_35045 = state_33986__$1;
(statearr_34010_35045[(2)] = inst_33975);

(statearr_34010_35045[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (16))){
var inst_33982 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
var statearr_34011_35046 = state_33986__$1;
(statearr_34011_35046[(2)] = inst_33982);

(statearr_34011_35046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (10))){
var inst_33947 = (state_33986[(8)]);
var inst_33963 = (state_33986[(2)]);
var inst_33964 = (inst_33947 + (1));
var inst_33947__$1 = inst_33964;
var state_33986__$1 = (function (){var statearr_34012 = state_33986;
(statearr_34012[(14)] = inst_33963);

(statearr_34012[(8)] = inst_33947__$1);

return statearr_34012;
})();
var statearr_34013_35047 = state_33986__$1;
(statearr_34013_35047[(2)] = null);

(statearr_34013_35047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (8))){
var inst_33968 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
var statearr_34014_35048 = state_33986__$1;
(statearr_34014_35048[(2)] = inst_33968);

(statearr_34014_35048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_34015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34015[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_34015[(1)] = (1));

return statearr_34015;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_33986){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_33986);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34016){var ex__32883__auto__ = e34016;
var statearr_34017_35050 = state_33986;
(statearr_34017_35050[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_33986[(4)]))){
var statearr_34018_35051 = state_33986;
(statearr_34018_35051[(1)] = cljs.core.first((state_33986[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35052 = state_33986;
state_33986 = G__35052;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_33986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_33986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34019 = f__32933__auto__();
(statearr_34019[(6)] = c__32932__auto___35028);

return statearr_34019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34022 = arguments.length;
switch (G__34022) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32932__auto___35054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_34054){
var state_val_34055 = (state_34054[(1)]);
if((state_val_34055 === (7))){
var inst_34033 = (state_34054[(7)]);
var inst_34034 = (state_34054[(8)]);
var inst_34033__$1 = (state_34054[(2)]);
var inst_34034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34033__$1,(0),null);
var inst_34035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34033__$1,(1),null);
var inst_34036 = (inst_34034__$1 == null);
var state_34054__$1 = (function (){var statearr_34056 = state_34054;
(statearr_34056[(9)] = inst_34035);

(statearr_34056[(7)] = inst_34033__$1);

(statearr_34056[(8)] = inst_34034__$1);

return statearr_34056;
})();
if(cljs.core.truth_(inst_34036)){
var statearr_34057_35055 = state_34054__$1;
(statearr_34057_35055[(1)] = (8));

} else {
var statearr_34058_35056 = state_34054__$1;
(statearr_34058_35056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (1))){
var inst_34023 = cljs.core.vec(chs);
var inst_34024 = inst_34023;
var state_34054__$1 = (function (){var statearr_34059 = state_34054;
(statearr_34059[(10)] = inst_34024);

return statearr_34059;
})();
var statearr_34060_35057 = state_34054__$1;
(statearr_34060_35057[(2)] = null);

(statearr_34060_35057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (4))){
var inst_34024 = (state_34054[(10)]);
var state_34054__$1 = state_34054;
return cljs.core.async.ioc_alts_BANG_(state_34054__$1,(7),inst_34024);
} else {
if((state_val_34055 === (6))){
var inst_34050 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34061_35062 = state_34054__$1;
(statearr_34061_35062[(2)] = inst_34050);

(statearr_34061_35062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (3))){
var inst_34052 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34054__$1,inst_34052);
} else {
if((state_val_34055 === (2))){
var inst_34024 = (state_34054[(10)]);
var inst_34026 = cljs.core.count(inst_34024);
var inst_34027 = (inst_34026 > (0));
var state_34054__$1 = state_34054;
if(cljs.core.truth_(inst_34027)){
var statearr_34063_35064 = state_34054__$1;
(statearr_34063_35064[(1)] = (4));

} else {
var statearr_34064_35065 = state_34054__$1;
(statearr_34064_35065[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (11))){
var inst_34024 = (state_34054[(10)]);
var inst_34043 = (state_34054[(2)]);
var tmp34062 = inst_34024;
var inst_34024__$1 = tmp34062;
var state_34054__$1 = (function (){var statearr_34065 = state_34054;
(statearr_34065[(11)] = inst_34043);

(statearr_34065[(10)] = inst_34024__$1);

return statearr_34065;
})();
var statearr_34066_35066 = state_34054__$1;
(statearr_34066_35066[(2)] = null);

(statearr_34066_35066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (9))){
var inst_34034 = (state_34054[(8)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34054__$1,(11),out,inst_34034);
} else {
if((state_val_34055 === (5))){
var inst_34048 = cljs.core.async.close_BANG_(out);
var state_34054__$1 = state_34054;
var statearr_34067_35068 = state_34054__$1;
(statearr_34067_35068[(2)] = inst_34048);

(statearr_34067_35068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (10))){
var inst_34046 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34068_35069 = state_34054__$1;
(statearr_34068_35069[(2)] = inst_34046);

(statearr_34068_35069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (8))){
var inst_34035 = (state_34054[(9)]);
var inst_34033 = (state_34054[(7)]);
var inst_34024 = (state_34054[(10)]);
var inst_34034 = (state_34054[(8)]);
var inst_34038 = (function (){var cs = inst_34024;
var vec__34029 = inst_34033;
var v = inst_34034;
var c = inst_34035;
return (function (p1__34020_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34020_SHARP_);
});
})();
var inst_34039 = cljs.core.filterv(inst_34038,inst_34024);
var inst_34024__$1 = inst_34039;
var state_34054__$1 = (function (){var statearr_34069 = state_34054;
(statearr_34069[(10)] = inst_34024__$1);

return statearr_34069;
})();
var statearr_34070_35074 = state_34054__$1;
(statearr_34070_35074[(2)] = null);

(statearr_34070_35074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_34071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34071[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_34071[(1)] = (1));

return statearr_34071;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_34054){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_34054);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34072){var ex__32883__auto__ = e34072;
var statearr_34073_35075 = state_34054;
(statearr_34073_35075[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_34054[(4)]))){
var statearr_34074_35076 = state_34054;
(statearr_34074_35076[(1)] = cljs.core.first((state_34054[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35077 = state_34054;
state_34054 = G__35077;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_34054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_34054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34075 = f__32933__auto__();
(statearr_34075[(6)] = c__32932__auto___35054);

return statearr_34075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34077 = arguments.length;
switch (G__34077) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32932__auto___35079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_34101){
var state_val_34102 = (state_34101[(1)]);
if((state_val_34102 === (7))){
var inst_34083 = (state_34101[(7)]);
var inst_34083__$1 = (state_34101[(2)]);
var inst_34084 = (inst_34083__$1 == null);
var inst_34085 = cljs.core.not(inst_34084);
var state_34101__$1 = (function (){var statearr_34103 = state_34101;
(statearr_34103[(7)] = inst_34083__$1);

return statearr_34103;
})();
if(inst_34085){
var statearr_34104_35080 = state_34101__$1;
(statearr_34104_35080[(1)] = (8));

} else {
var statearr_34105_35081 = state_34101__$1;
(statearr_34105_35081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (1))){
var inst_34078 = (0);
var state_34101__$1 = (function (){var statearr_34106 = state_34101;
(statearr_34106[(8)] = inst_34078);

return statearr_34106;
})();
var statearr_34107_35082 = state_34101__$1;
(statearr_34107_35082[(2)] = null);

(statearr_34107_35082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (4))){
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34101__$1,(7),ch);
} else {
if((state_val_34102 === (6))){
var inst_34096 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34108_35083 = state_34101__$1;
(statearr_34108_35083[(2)] = inst_34096);

(statearr_34108_35083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (3))){
var inst_34098 = (state_34101[(2)]);
var inst_34099 = cljs.core.async.close_BANG_(out);
var state_34101__$1 = (function (){var statearr_34109 = state_34101;
(statearr_34109[(9)] = inst_34098);

return statearr_34109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34101__$1,inst_34099);
} else {
if((state_val_34102 === (2))){
var inst_34078 = (state_34101[(8)]);
var inst_34080 = (inst_34078 < n);
var state_34101__$1 = state_34101;
if(cljs.core.truth_(inst_34080)){
var statearr_34110_35084 = state_34101__$1;
(statearr_34110_35084[(1)] = (4));

} else {
var statearr_34111_35085 = state_34101__$1;
(statearr_34111_35085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (11))){
var inst_34078 = (state_34101[(8)]);
var inst_34088 = (state_34101[(2)]);
var inst_34089 = (inst_34078 + (1));
var inst_34078__$1 = inst_34089;
var state_34101__$1 = (function (){var statearr_34112 = state_34101;
(statearr_34112[(10)] = inst_34088);

(statearr_34112[(8)] = inst_34078__$1);

return statearr_34112;
})();
var statearr_34113_35086 = state_34101__$1;
(statearr_34113_35086[(2)] = null);

(statearr_34113_35086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (9))){
var state_34101__$1 = state_34101;
var statearr_34114_35090 = state_34101__$1;
(statearr_34114_35090[(2)] = null);

(statearr_34114_35090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (5))){
var state_34101__$1 = state_34101;
var statearr_34115_35091 = state_34101__$1;
(statearr_34115_35091[(2)] = null);

(statearr_34115_35091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (10))){
var inst_34093 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34116_35092 = state_34101__$1;
(statearr_34116_35092[(2)] = inst_34093);

(statearr_34116_35092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (8))){
var inst_34083 = (state_34101[(7)]);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34101__$1,(11),out,inst_34083);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_34117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34117[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_34117[(1)] = (1));

return statearr_34117;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_34101){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_34101);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34118){var ex__32883__auto__ = e34118;
var statearr_34119_35093 = state_34101;
(statearr_34119_35093[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_34101[(4)]))){
var statearr_34120_35094 = state_34101;
(statearr_34120_35094[(1)] = cljs.core.first((state_34101[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35095 = state_34101;
state_34101 = G__35095;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_34101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_34101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34121 = f__32933__auto__();
(statearr_34121[(6)] = c__32932__auto___35079);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34123 = (function (f,ch,meta34124){
this.f = f;
this.ch = ch;
this.meta34124 = meta34124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34125,meta34124__$1){
var self__ = this;
var _34125__$1 = this;
return (new cljs.core.async.t_cljs$core$async34123(self__.f,self__.ch,meta34124__$1));
}));

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34125){
var self__ = this;
var _34125__$1 = this;
return self__.meta34124;
}));

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34126 = (function (f,ch,meta34124,_,fn1,meta34127){
this.f = f;
this.ch = ch;
this.meta34124 = meta34124;
this._ = _;
this.fn1 = fn1;
this.meta34127 = meta34127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34128,meta34127__$1){
var self__ = this;
var _34128__$1 = this;
return (new cljs.core.async.t_cljs$core$async34126(self__.f,self__.ch,self__.meta34124,self__._,self__.fn1,meta34127__$1));
}));

(cljs.core.async.t_cljs$core$async34126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34128){
var self__ = this;
var _34128__$1 = this;
return self__.meta34127;
}));

(cljs.core.async.t_cljs$core$async34126.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34126.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34122_SHARP_){
var G__34129 = (((p1__34122_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34122_SHARP_) : self__.f.call(null,p1__34122_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34129) : f1.call(null,G__34129));
});
}));

(cljs.core.async.t_cljs$core$async34126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34124","meta34124",1608753533,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34123","cljs.core.async/t_cljs$core$async34123",1126590685,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34127","meta34127",-1931810176,null)], null);
}));

(cljs.core.async.t_cljs$core$async34126.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34126");

(cljs.core.async.t_cljs$core$async34126.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34126");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34126.
 */
cljs.core.async.__GT_t_cljs$core$async34126 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34126(f__$1,ch__$1,meta34124__$1,___$2,fn1__$1,meta34127){
return (new cljs.core.async.t_cljs$core$async34126(f__$1,ch__$1,meta34124__$1,___$2,fn1__$1,meta34127));
});

}

return (new cljs.core.async.t_cljs$core$async34126(self__.f,self__.ch,self__.meta34124,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34130 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34130) : self__.f.call(null,G__34130));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34124","meta34124",1608753533,null)], null);
}));

(cljs.core.async.t_cljs$core$async34123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34123");

(cljs.core.async.t_cljs$core$async34123.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34123.
 */
cljs.core.async.__GT_t_cljs$core$async34123 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34123(f__$1,ch__$1,meta34124){
return (new cljs.core.async.t_cljs$core$async34123(f__$1,ch__$1,meta34124));
});

}

return (new cljs.core.async.t_cljs$core$async34123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34131 = (function (f,ch,meta34132){
this.f = f;
this.ch = ch;
this.meta34132 = meta34132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34133,meta34132__$1){
var self__ = this;
var _34133__$1 = this;
return (new cljs.core.async.t_cljs$core$async34131(self__.f,self__.ch,meta34132__$1));
}));

(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34133){
var self__ = this;
var _34133__$1 = this;
return self__.meta34132;
}));

(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34132","meta34132",-1322649248,null)], null);
}));

(cljs.core.async.t_cljs$core$async34131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34131");

(cljs.core.async.t_cljs$core$async34131.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34131.
 */
cljs.core.async.__GT_t_cljs$core$async34131 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34131(f__$1,ch__$1,meta34132){
return (new cljs.core.async.t_cljs$core$async34131(f__$1,ch__$1,meta34132));
});

}

return (new cljs.core.async.t_cljs$core$async34131(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34134 = (function (p,ch,meta34135){
this.p = p;
this.ch = ch;
this.meta34135 = meta34135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34136,meta34135__$1){
var self__ = this;
var _34136__$1 = this;
return (new cljs.core.async.t_cljs$core$async34134(self__.p,self__.ch,meta34135__$1));
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34136){
var self__ = this;
var _34136__$1 = this;
return self__.meta34135;
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34135","meta34135",1267019723,null)], null);
}));

(cljs.core.async.t_cljs$core$async34134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34134");

(cljs.core.async.t_cljs$core$async34134.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34134.
 */
cljs.core.async.__GT_t_cljs$core$async34134 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34134(p__$1,ch__$1,meta34135){
return (new cljs.core.async.t_cljs$core$async34134(p__$1,ch__$1,meta34135));
});

}

return (new cljs.core.async.t_cljs$core$async34134(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34138 = arguments.length;
switch (G__34138) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32932__auto___35108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_34159){
var state_val_34160 = (state_34159[(1)]);
if((state_val_34160 === (7))){
var inst_34155 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34161_35109 = state_34159__$1;
(statearr_34161_35109[(2)] = inst_34155);

(statearr_34161_35109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (1))){
var state_34159__$1 = state_34159;
var statearr_34162_35110 = state_34159__$1;
(statearr_34162_35110[(2)] = null);

(statearr_34162_35110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (4))){
var inst_34141 = (state_34159[(7)]);
var inst_34141__$1 = (state_34159[(2)]);
var inst_34142 = (inst_34141__$1 == null);
var state_34159__$1 = (function (){var statearr_34163 = state_34159;
(statearr_34163[(7)] = inst_34141__$1);

return statearr_34163;
})();
if(cljs.core.truth_(inst_34142)){
var statearr_34164_35111 = state_34159__$1;
(statearr_34164_35111[(1)] = (5));

} else {
var statearr_34165_35112 = state_34159__$1;
(statearr_34165_35112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (6))){
var inst_34141 = (state_34159[(7)]);
var inst_34146 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34141) : p.call(null,inst_34141));
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34146)){
var statearr_34166_35113 = state_34159__$1;
(statearr_34166_35113[(1)] = (8));

} else {
var statearr_34167_35114 = state_34159__$1;
(statearr_34167_35114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (3))){
var inst_34157 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34159__$1,inst_34157);
} else {
if((state_val_34160 === (2))){
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34159__$1,(4),ch);
} else {
if((state_val_34160 === (11))){
var inst_34149 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34168_35115 = state_34159__$1;
(statearr_34168_35115[(2)] = inst_34149);

(statearr_34168_35115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (9))){
var state_34159__$1 = state_34159;
var statearr_34169_35116 = state_34159__$1;
(statearr_34169_35116[(2)] = null);

(statearr_34169_35116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (5))){
var inst_34144 = cljs.core.async.close_BANG_(out);
var state_34159__$1 = state_34159;
var statearr_34170_35117 = state_34159__$1;
(statearr_34170_35117[(2)] = inst_34144);

(statearr_34170_35117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (10))){
var inst_34152 = (state_34159[(2)]);
var state_34159__$1 = (function (){var statearr_34171 = state_34159;
(statearr_34171[(8)] = inst_34152);

return statearr_34171;
})();
var statearr_34172_35118 = state_34159__$1;
(statearr_34172_35118[(2)] = null);

(statearr_34172_35118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (8))){
var inst_34141 = (state_34159[(7)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34159__$1,(11),out,inst_34141);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_34173 = [null,null,null,null,null,null,null,null,null];
(statearr_34173[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_34173[(1)] = (1));

return statearr_34173;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_34159){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_34159);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34174){var ex__32883__auto__ = e34174;
var statearr_34175_35119 = state_34159;
(statearr_34175_35119[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_34159[(4)]))){
var statearr_34176_35120 = state_34159;
(statearr_34176_35120[(1)] = cljs.core.first((state_34159[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35121 = state_34159;
state_34159 = G__35121;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_34159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_34159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34177 = f__32933__auto__();
(statearr_34177[(6)] = c__32932__auto___35108);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34179 = arguments.length;
switch (G__34179) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32932__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_34241){
var state_val_34242 = (state_34241[(1)]);
if((state_val_34242 === (7))){
var inst_34237 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34243_35123 = state_34241__$1;
(statearr_34243_35123[(2)] = inst_34237);

(statearr_34243_35123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (20))){
var inst_34207 = (state_34241[(7)]);
var inst_34218 = (state_34241[(2)]);
var inst_34219 = cljs.core.next(inst_34207);
var inst_34193 = inst_34219;
var inst_34194 = null;
var inst_34195 = (0);
var inst_34196 = (0);
var state_34241__$1 = (function (){var statearr_34244 = state_34241;
(statearr_34244[(8)] = inst_34196);

(statearr_34244[(9)] = inst_34194);

(statearr_34244[(10)] = inst_34218);

(statearr_34244[(11)] = inst_34193);

(statearr_34244[(12)] = inst_34195);

return statearr_34244;
})();
var statearr_34245_35124 = state_34241__$1;
(statearr_34245_35124[(2)] = null);

(statearr_34245_35124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (1))){
var state_34241__$1 = state_34241;
var statearr_34246_35125 = state_34241__$1;
(statearr_34246_35125[(2)] = null);

(statearr_34246_35125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (4))){
var inst_34182 = (state_34241[(13)]);
var inst_34182__$1 = (state_34241[(2)]);
var inst_34183 = (inst_34182__$1 == null);
var state_34241__$1 = (function (){var statearr_34247 = state_34241;
(statearr_34247[(13)] = inst_34182__$1);

return statearr_34247;
})();
if(cljs.core.truth_(inst_34183)){
var statearr_34248_35126 = state_34241__$1;
(statearr_34248_35126[(1)] = (5));

} else {
var statearr_34249_35127 = state_34241__$1;
(statearr_34249_35127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (15))){
var state_34241__$1 = state_34241;
var statearr_34253_35128 = state_34241__$1;
(statearr_34253_35128[(2)] = null);

(statearr_34253_35128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (21))){
var state_34241__$1 = state_34241;
var statearr_34254_35129 = state_34241__$1;
(statearr_34254_35129[(2)] = null);

(statearr_34254_35129[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (13))){
var inst_34196 = (state_34241[(8)]);
var inst_34194 = (state_34241[(9)]);
var inst_34193 = (state_34241[(11)]);
var inst_34195 = (state_34241[(12)]);
var inst_34203 = (state_34241[(2)]);
var inst_34204 = (inst_34196 + (1));
var tmp34250 = inst_34194;
var tmp34251 = inst_34193;
var tmp34252 = inst_34195;
var inst_34193__$1 = tmp34251;
var inst_34194__$1 = tmp34250;
var inst_34195__$1 = tmp34252;
var inst_34196__$1 = inst_34204;
var state_34241__$1 = (function (){var statearr_34255 = state_34241;
(statearr_34255[(14)] = inst_34203);

(statearr_34255[(8)] = inst_34196__$1);

(statearr_34255[(9)] = inst_34194__$1);

(statearr_34255[(11)] = inst_34193__$1);

(statearr_34255[(12)] = inst_34195__$1);

return statearr_34255;
})();
var statearr_34256_35137 = state_34241__$1;
(statearr_34256_35137[(2)] = null);

(statearr_34256_35137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (22))){
var state_34241__$1 = state_34241;
var statearr_34257_35138 = state_34241__$1;
(statearr_34257_35138[(2)] = null);

(statearr_34257_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (6))){
var inst_34182 = (state_34241[(13)]);
var inst_34191 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34182) : f.call(null,inst_34182));
var inst_34192 = cljs.core.seq(inst_34191);
var inst_34193 = inst_34192;
var inst_34194 = null;
var inst_34195 = (0);
var inst_34196 = (0);
var state_34241__$1 = (function (){var statearr_34258 = state_34241;
(statearr_34258[(8)] = inst_34196);

(statearr_34258[(9)] = inst_34194);

(statearr_34258[(11)] = inst_34193);

(statearr_34258[(12)] = inst_34195);

return statearr_34258;
})();
var statearr_34259_35142 = state_34241__$1;
(statearr_34259_35142[(2)] = null);

(statearr_34259_35142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (17))){
var inst_34207 = (state_34241[(7)]);
var inst_34211 = cljs.core.chunk_first(inst_34207);
var inst_34212 = cljs.core.chunk_rest(inst_34207);
var inst_34213 = cljs.core.count(inst_34211);
var inst_34193 = inst_34212;
var inst_34194 = inst_34211;
var inst_34195 = inst_34213;
var inst_34196 = (0);
var state_34241__$1 = (function (){var statearr_34260 = state_34241;
(statearr_34260[(8)] = inst_34196);

(statearr_34260[(9)] = inst_34194);

(statearr_34260[(11)] = inst_34193);

(statearr_34260[(12)] = inst_34195);

return statearr_34260;
})();
var statearr_34261_35146 = state_34241__$1;
(statearr_34261_35146[(2)] = null);

(statearr_34261_35146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (3))){
var inst_34239 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34241__$1,inst_34239);
} else {
if((state_val_34242 === (12))){
var inst_34227 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34262_35147 = state_34241__$1;
(statearr_34262_35147[(2)] = inst_34227);

(statearr_34262_35147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (2))){
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34241__$1,(4),in$);
} else {
if((state_val_34242 === (23))){
var inst_34235 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34263_35151 = state_34241__$1;
(statearr_34263_35151[(2)] = inst_34235);

(statearr_34263_35151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (19))){
var inst_34222 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34264_35152 = state_34241__$1;
(statearr_34264_35152[(2)] = inst_34222);

(statearr_34264_35152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (11))){
var inst_34193 = (state_34241[(11)]);
var inst_34207 = (state_34241[(7)]);
var inst_34207__$1 = cljs.core.seq(inst_34193);
var state_34241__$1 = (function (){var statearr_34265 = state_34241;
(statearr_34265[(7)] = inst_34207__$1);

return statearr_34265;
})();
if(inst_34207__$1){
var statearr_34266_35156 = state_34241__$1;
(statearr_34266_35156[(1)] = (14));

} else {
var statearr_34267_35157 = state_34241__$1;
(statearr_34267_35157[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (9))){
var inst_34229 = (state_34241[(2)]);
var inst_34230 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34241__$1 = (function (){var statearr_34268 = state_34241;
(statearr_34268[(15)] = inst_34229);

return statearr_34268;
})();
if(cljs.core.truth_(inst_34230)){
var statearr_34269_35158 = state_34241__$1;
(statearr_34269_35158[(1)] = (21));

} else {
var statearr_34270_35159 = state_34241__$1;
(statearr_34270_35159[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (5))){
var inst_34185 = cljs.core.async.close_BANG_(out);
var state_34241__$1 = state_34241;
var statearr_34271_35161 = state_34241__$1;
(statearr_34271_35161[(2)] = inst_34185);

(statearr_34271_35161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (14))){
var inst_34207 = (state_34241[(7)]);
var inst_34209 = cljs.core.chunked_seq_QMARK_(inst_34207);
var state_34241__$1 = state_34241;
if(inst_34209){
var statearr_34272_35162 = state_34241__$1;
(statearr_34272_35162[(1)] = (17));

} else {
var statearr_34273_35163 = state_34241__$1;
(statearr_34273_35163[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (16))){
var inst_34225 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34274_35164 = state_34241__$1;
(statearr_34274_35164[(2)] = inst_34225);

(statearr_34274_35164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (10))){
var inst_34196 = (state_34241[(8)]);
var inst_34194 = (state_34241[(9)]);
var inst_34201 = cljs.core._nth(inst_34194,inst_34196);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34241__$1,(13),out,inst_34201);
} else {
if((state_val_34242 === (18))){
var inst_34207 = (state_34241[(7)]);
var inst_34216 = cljs.core.first(inst_34207);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34241__$1,(20),out,inst_34216);
} else {
if((state_val_34242 === (8))){
var inst_34196 = (state_34241[(8)]);
var inst_34195 = (state_34241[(12)]);
var inst_34198 = (inst_34196 < inst_34195);
var inst_34199 = inst_34198;
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34199)){
var statearr_34275_35174 = state_34241__$1;
(statearr_34275_35174[(1)] = (10));

} else {
var statearr_34276_35175 = state_34241__$1;
(statearr_34276_35175[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32880__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32880__auto____0 = (function (){
var statearr_34277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34277[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32880__auto__);

(statearr_34277[(1)] = (1));

return statearr_34277;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32880__auto____1 = (function (state_34241){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_34241);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34278){var ex__32883__auto__ = e34278;
var statearr_34279_35182 = state_34241;
(statearr_34279_35182[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_34241[(4)]))){
var statearr_34280_35183 = state_34241;
(statearr_34280_35183[(1)] = cljs.core.first((state_34241[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35184 = state_34241;
state_34241 = G__35184;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32880__auto__ = function(state_34241){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32880__auto____1.call(this,state_34241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34281 = f__32933__auto__();
(statearr_34281[(6)] = c__32932__auto__);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));

return c__32932__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34283 = arguments.length;
switch (G__34283) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34285 = arguments.length;
switch (G__34285) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34287 = arguments.length;
switch (G__34287) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32932__auto___35188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_34311){
var state_val_34312 = (state_34311[(1)]);
if((state_val_34312 === (7))){
var inst_34306 = (state_34311[(2)]);
var state_34311__$1 = state_34311;
var statearr_34313_35189 = state_34311__$1;
(statearr_34313_35189[(2)] = inst_34306);

(statearr_34313_35189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (1))){
var inst_34288 = null;
var state_34311__$1 = (function (){var statearr_34314 = state_34311;
(statearr_34314[(7)] = inst_34288);

return statearr_34314;
})();
var statearr_34315_35196 = state_34311__$1;
(statearr_34315_35196[(2)] = null);

(statearr_34315_35196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (4))){
var inst_34291 = (state_34311[(8)]);
var inst_34291__$1 = (state_34311[(2)]);
var inst_34292 = (inst_34291__$1 == null);
var inst_34293 = cljs.core.not(inst_34292);
var state_34311__$1 = (function (){var statearr_34316 = state_34311;
(statearr_34316[(8)] = inst_34291__$1);

return statearr_34316;
})();
if(inst_34293){
var statearr_34317_35197 = state_34311__$1;
(statearr_34317_35197[(1)] = (5));

} else {
var statearr_34318_35198 = state_34311__$1;
(statearr_34318_35198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (6))){
var state_34311__$1 = state_34311;
var statearr_34319_35199 = state_34311__$1;
(statearr_34319_35199[(2)] = null);

(statearr_34319_35199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (3))){
var inst_34308 = (state_34311[(2)]);
var inst_34309 = cljs.core.async.close_BANG_(out);
var state_34311__$1 = (function (){var statearr_34320 = state_34311;
(statearr_34320[(9)] = inst_34308);

return statearr_34320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34311__$1,inst_34309);
} else {
if((state_val_34312 === (2))){
var state_34311__$1 = state_34311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34311__$1,(4),ch);
} else {
if((state_val_34312 === (11))){
var inst_34291 = (state_34311[(8)]);
var inst_34300 = (state_34311[(2)]);
var inst_34288 = inst_34291;
var state_34311__$1 = (function (){var statearr_34321 = state_34311;
(statearr_34321[(7)] = inst_34288);

(statearr_34321[(10)] = inst_34300);

return statearr_34321;
})();
var statearr_34322_35200 = state_34311__$1;
(statearr_34322_35200[(2)] = null);

(statearr_34322_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (9))){
var inst_34291 = (state_34311[(8)]);
var state_34311__$1 = state_34311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34311__$1,(11),out,inst_34291);
} else {
if((state_val_34312 === (5))){
var inst_34291 = (state_34311[(8)]);
var inst_34288 = (state_34311[(7)]);
var inst_34295 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34291,inst_34288);
var state_34311__$1 = state_34311;
if(inst_34295){
var statearr_34324_35202 = state_34311__$1;
(statearr_34324_35202[(1)] = (8));

} else {
var statearr_34325_35208 = state_34311__$1;
(statearr_34325_35208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (10))){
var inst_34303 = (state_34311[(2)]);
var state_34311__$1 = state_34311;
var statearr_34326_35209 = state_34311__$1;
(statearr_34326_35209[(2)] = inst_34303);

(statearr_34326_35209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (8))){
var inst_34288 = (state_34311[(7)]);
var tmp34323 = inst_34288;
var inst_34288__$1 = tmp34323;
var state_34311__$1 = (function (){var statearr_34327 = state_34311;
(statearr_34327[(7)] = inst_34288__$1);

return statearr_34327;
})();
var statearr_34328_35210 = state_34311__$1;
(statearr_34328_35210[(2)] = null);

(statearr_34328_35210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_34329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34329[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_34329[(1)] = (1));

return statearr_34329;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_34311){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_34311);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34330){var ex__32883__auto__ = e34330;
var statearr_34331_35211 = state_34311;
(statearr_34331_35211[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_34311[(4)]))){
var statearr_34332_35212 = state_34311;
(statearr_34332_35212[(1)] = cljs.core.first((state_34311[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35213 = state_34311;
state_34311 = G__35213;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_34311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_34311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34333 = f__32933__auto__();
(statearr_34333[(6)] = c__32932__auto___35188);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34335 = arguments.length;
switch (G__34335) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32932__auto___35215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_34373){
var state_val_34374 = (state_34373[(1)]);
if((state_val_34374 === (7))){
var inst_34369 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
var statearr_34375_35216 = state_34373__$1;
(statearr_34375_35216[(2)] = inst_34369);

(statearr_34375_35216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (1))){
var inst_34336 = (new Array(n));
var inst_34337 = inst_34336;
var inst_34338 = (0);
var state_34373__$1 = (function (){var statearr_34376 = state_34373;
(statearr_34376[(7)] = inst_34337);

(statearr_34376[(8)] = inst_34338);

return statearr_34376;
})();
var statearr_34377_35223 = state_34373__$1;
(statearr_34377_35223[(2)] = null);

(statearr_34377_35223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (4))){
var inst_34341 = (state_34373[(9)]);
var inst_34341__$1 = (state_34373[(2)]);
var inst_34342 = (inst_34341__$1 == null);
var inst_34343 = cljs.core.not(inst_34342);
var state_34373__$1 = (function (){var statearr_34378 = state_34373;
(statearr_34378[(9)] = inst_34341__$1);

return statearr_34378;
})();
if(inst_34343){
var statearr_34379_35224 = state_34373__$1;
(statearr_34379_35224[(1)] = (5));

} else {
var statearr_34380_35225 = state_34373__$1;
(statearr_34380_35225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (15))){
var inst_34363 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
var statearr_34381_35226 = state_34373__$1;
(statearr_34381_35226[(2)] = inst_34363);

(statearr_34381_35226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (13))){
var state_34373__$1 = state_34373;
var statearr_34382_35227 = state_34373__$1;
(statearr_34382_35227[(2)] = null);

(statearr_34382_35227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (6))){
var inst_34338 = (state_34373[(8)]);
var inst_34359 = (inst_34338 > (0));
var state_34373__$1 = state_34373;
if(cljs.core.truth_(inst_34359)){
var statearr_34383_35228 = state_34373__$1;
(statearr_34383_35228[(1)] = (12));

} else {
var statearr_34384_35229 = state_34373__$1;
(statearr_34384_35229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (3))){
var inst_34371 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34373__$1,inst_34371);
} else {
if((state_val_34374 === (12))){
var inst_34337 = (state_34373[(7)]);
var inst_34361 = cljs.core.vec(inst_34337);
var state_34373__$1 = state_34373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34373__$1,(15),out,inst_34361);
} else {
if((state_val_34374 === (2))){
var state_34373__$1 = state_34373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34373__$1,(4),ch);
} else {
if((state_val_34374 === (11))){
var inst_34353 = (state_34373[(2)]);
var inst_34354 = (new Array(n));
var inst_34337 = inst_34354;
var inst_34338 = (0);
var state_34373__$1 = (function (){var statearr_34385 = state_34373;
(statearr_34385[(7)] = inst_34337);

(statearr_34385[(10)] = inst_34353);

(statearr_34385[(8)] = inst_34338);

return statearr_34385;
})();
var statearr_34386_35230 = state_34373__$1;
(statearr_34386_35230[(2)] = null);

(statearr_34386_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (9))){
var inst_34337 = (state_34373[(7)]);
var inst_34351 = cljs.core.vec(inst_34337);
var state_34373__$1 = state_34373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34373__$1,(11),out,inst_34351);
} else {
if((state_val_34374 === (5))){
var inst_34341 = (state_34373[(9)]);
var inst_34337 = (state_34373[(7)]);
var inst_34346 = (state_34373[(11)]);
var inst_34338 = (state_34373[(8)]);
var inst_34345 = (inst_34337[inst_34338] = inst_34341);
var inst_34346__$1 = (inst_34338 + (1));
var inst_34347 = (inst_34346__$1 < n);
var state_34373__$1 = (function (){var statearr_34387 = state_34373;
(statearr_34387[(12)] = inst_34345);

(statearr_34387[(11)] = inst_34346__$1);

return statearr_34387;
})();
if(cljs.core.truth_(inst_34347)){
var statearr_34388_35231 = state_34373__$1;
(statearr_34388_35231[(1)] = (8));

} else {
var statearr_34389_35232 = state_34373__$1;
(statearr_34389_35232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (14))){
var inst_34366 = (state_34373[(2)]);
var inst_34367 = cljs.core.async.close_BANG_(out);
var state_34373__$1 = (function (){var statearr_34391 = state_34373;
(statearr_34391[(13)] = inst_34366);

return statearr_34391;
})();
var statearr_34392_35235 = state_34373__$1;
(statearr_34392_35235[(2)] = inst_34367);

(statearr_34392_35235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (10))){
var inst_34357 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
var statearr_34393_35236 = state_34373__$1;
(statearr_34393_35236[(2)] = inst_34357);

(statearr_34393_35236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (8))){
var inst_34337 = (state_34373[(7)]);
var inst_34346 = (state_34373[(11)]);
var tmp34390 = inst_34337;
var inst_34337__$1 = tmp34390;
var inst_34338 = inst_34346;
var state_34373__$1 = (function (){var statearr_34394 = state_34373;
(statearr_34394[(7)] = inst_34337__$1);

(statearr_34394[(8)] = inst_34338);

return statearr_34394;
})();
var statearr_34395_35237 = state_34373__$1;
(statearr_34395_35237[(2)] = null);

(statearr_34395_35237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_34396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34396[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_34396[(1)] = (1));

return statearr_34396;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_34373){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_34373);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34397){var ex__32883__auto__ = e34397;
var statearr_34398_35238 = state_34373;
(statearr_34398_35238[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_34373[(4)]))){
var statearr_34399_35239 = state_34373;
(statearr_34399_35239[(1)] = cljs.core.first((state_34373[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35240 = state_34373;
state_34373 = G__35240;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_34373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_34373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34400 = f__32933__auto__();
(statearr_34400[(6)] = c__32932__auto___35215);

return statearr_34400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34402 = arguments.length;
switch (G__34402) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32932__auto___35244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32933__auto__ = (function (){var switch__32879__auto__ = (function (state_34444){
var state_val_34445 = (state_34444[(1)]);
if((state_val_34445 === (7))){
var inst_34440 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34446_35245 = state_34444__$1;
(statearr_34446_35245[(2)] = inst_34440);

(statearr_34446_35245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (1))){
var inst_34403 = [];
var inst_34404 = inst_34403;
var inst_34405 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34444__$1 = (function (){var statearr_34447 = state_34444;
(statearr_34447[(7)] = inst_34405);

(statearr_34447[(8)] = inst_34404);

return statearr_34447;
})();
var statearr_34448_35246 = state_34444__$1;
(statearr_34448_35246[(2)] = null);

(statearr_34448_35246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (4))){
var inst_34408 = (state_34444[(9)]);
var inst_34408__$1 = (state_34444[(2)]);
var inst_34409 = (inst_34408__$1 == null);
var inst_34410 = cljs.core.not(inst_34409);
var state_34444__$1 = (function (){var statearr_34449 = state_34444;
(statearr_34449[(9)] = inst_34408__$1);

return statearr_34449;
})();
if(inst_34410){
var statearr_34450_35247 = state_34444__$1;
(statearr_34450_35247[(1)] = (5));

} else {
var statearr_34451_35248 = state_34444__$1;
(statearr_34451_35248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (15))){
var inst_34434 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34452_35249 = state_34444__$1;
(statearr_34452_35249[(2)] = inst_34434);

(statearr_34452_35249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (13))){
var state_34444__$1 = state_34444;
var statearr_34453_35250 = state_34444__$1;
(statearr_34453_35250[(2)] = null);

(statearr_34453_35250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (6))){
var inst_34404 = (state_34444[(8)]);
var inst_34429 = inst_34404.length;
var inst_34430 = (inst_34429 > (0));
var state_34444__$1 = state_34444;
if(cljs.core.truth_(inst_34430)){
var statearr_34454_35251 = state_34444__$1;
(statearr_34454_35251[(1)] = (12));

} else {
var statearr_34455_35256 = state_34444__$1;
(statearr_34455_35256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (3))){
var inst_34442 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34444__$1,inst_34442);
} else {
if((state_val_34445 === (12))){
var inst_34404 = (state_34444[(8)]);
var inst_34432 = cljs.core.vec(inst_34404);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34444__$1,(15),out,inst_34432);
} else {
if((state_val_34445 === (2))){
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34444__$1,(4),ch);
} else {
if((state_val_34445 === (11))){
var inst_34408 = (state_34444[(9)]);
var inst_34412 = (state_34444[(10)]);
var inst_34422 = (state_34444[(2)]);
var inst_34423 = [];
var inst_34424 = inst_34423.push(inst_34408);
var inst_34404 = inst_34423;
var inst_34405 = inst_34412;
var state_34444__$1 = (function (){var statearr_34456 = state_34444;
(statearr_34456[(11)] = inst_34422);

(statearr_34456[(7)] = inst_34405);

(statearr_34456[(12)] = inst_34424);

(statearr_34456[(8)] = inst_34404);

return statearr_34456;
})();
var statearr_34457_35260 = state_34444__$1;
(statearr_34457_35260[(2)] = null);

(statearr_34457_35260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (9))){
var inst_34404 = (state_34444[(8)]);
var inst_34420 = cljs.core.vec(inst_34404);
var state_34444__$1 = state_34444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34444__$1,(11),out,inst_34420);
} else {
if((state_val_34445 === (5))){
var inst_34408 = (state_34444[(9)]);
var inst_34405 = (state_34444[(7)]);
var inst_34412 = (state_34444[(10)]);
var inst_34412__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34408) : f.call(null,inst_34408));
var inst_34413 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34412__$1,inst_34405);
var inst_34414 = cljs.core.keyword_identical_QMARK_(inst_34405,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34415 = ((inst_34413) || (inst_34414));
var state_34444__$1 = (function (){var statearr_34458 = state_34444;
(statearr_34458[(10)] = inst_34412__$1);

return statearr_34458;
})();
if(cljs.core.truth_(inst_34415)){
var statearr_34459_35264 = state_34444__$1;
(statearr_34459_35264[(1)] = (8));

} else {
var statearr_34460_35266 = state_34444__$1;
(statearr_34460_35266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (14))){
var inst_34437 = (state_34444[(2)]);
var inst_34438 = cljs.core.async.close_BANG_(out);
var state_34444__$1 = (function (){var statearr_34462 = state_34444;
(statearr_34462[(13)] = inst_34437);

return statearr_34462;
})();
var statearr_34463_35267 = state_34444__$1;
(statearr_34463_35267[(2)] = inst_34438);

(statearr_34463_35267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (10))){
var inst_34427 = (state_34444[(2)]);
var state_34444__$1 = state_34444;
var statearr_34464_35269 = state_34444__$1;
(statearr_34464_35269[(2)] = inst_34427);

(statearr_34464_35269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34445 === (8))){
var inst_34408 = (state_34444[(9)]);
var inst_34412 = (state_34444[(10)]);
var inst_34404 = (state_34444[(8)]);
var inst_34417 = inst_34404.push(inst_34408);
var tmp34461 = inst_34404;
var inst_34404__$1 = tmp34461;
var inst_34405 = inst_34412;
var state_34444__$1 = (function (){var statearr_34465 = state_34444;
(statearr_34465[(7)] = inst_34405);

(statearr_34465[(8)] = inst_34404__$1);

(statearr_34465[(14)] = inst_34417);

return statearr_34465;
})();
var statearr_34466_35270 = state_34444__$1;
(statearr_34466_35270[(2)] = null);

(statearr_34466_35270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32880__auto__ = null;
var cljs$core$async$state_machine__32880__auto____0 = (function (){
var statearr_34467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34467[(0)] = cljs$core$async$state_machine__32880__auto__);

(statearr_34467[(1)] = (1));

return statearr_34467;
});
var cljs$core$async$state_machine__32880__auto____1 = (function (state_34444){
while(true){
var ret_value__32881__auto__ = (function (){try{while(true){
var result__32882__auto__ = switch__32879__auto__(state_34444);
if(cljs.core.keyword_identical_QMARK_(result__32882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32882__auto__;
}
break;
}
}catch (e34468){var ex__32883__auto__ = e34468;
var statearr_34469_35271 = state_34444;
(statearr_34469_35271[(2)] = ex__32883__auto__);


if(cljs.core.seq((state_34444[(4)]))){
var statearr_34470_35272 = state_34444;
(statearr_34470_35272[(1)] = cljs.core.first((state_34444[(4)])));

} else {
throw ex__32883__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35273 = state_34444;
state_34444 = G__35273;
continue;
} else {
return ret_value__32881__auto__;
}
break;
}
});
cljs$core$async$state_machine__32880__auto__ = function(state_34444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32880__auto____1.call(this,state_34444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32880__auto____0;
cljs$core$async$state_machine__32880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32880__auto____1;
return cljs$core$async$state_machine__32880__auto__;
})()
})();
var state__32934__auto__ = (function (){var statearr_34471 = f__32933__auto__();
(statearr_34471[(6)] = c__32932__auto___35244);

return statearr_34471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32934__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
