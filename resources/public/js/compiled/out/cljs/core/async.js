// Compiled by ClojureScript 1.10.520 {}
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
var G__29932 = arguments.length;
switch (G__29932) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29933 = (function (f,blockable,meta29934){
this.f = f;
this.blockable = blockable;
this.meta29934 = meta29934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29935,meta29934__$1){
var self__ = this;
var _29935__$1 = this;
return (new cljs.core.async.t_cljs$core$async29933(self__.f,self__.blockable,meta29934__$1));
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29935){
var self__ = this;
var _29935__$1 = this;
return self__.meta29934;
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29934","meta29934",-301459518,null)], null);
});

cljs.core.async.t_cljs$core$async29933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29933";

cljs.core.async.t_cljs$core$async29933.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29933");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29933.
 */
cljs.core.async.__GT_t_cljs$core$async29933 = (function cljs$core$async$__GT_t_cljs$core$async29933(f__$1,blockable__$1,meta29934){
return (new cljs.core.async.t_cljs$core$async29933(f__$1,blockable__$1,meta29934));
});

}

return (new cljs.core.async.t_cljs$core$async29933(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__29939 = arguments.length;
switch (G__29939) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29942 = arguments.length;
switch (G__29942) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__29945 = arguments.length;
switch (G__29945) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29947 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29947);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29947,ret){
return (function (){
return fn1.call(null,val_29947);
});})(val_29947,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__29949 = arguments.length;
switch (G__29949) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___29951 = n;
var x_29952 = (0);
while(true){
if((x_29952 < n__4607__auto___29951)){
(a[x_29952] = x_29952);

var G__29953 = (x_29952 + (1));
x_29952 = G__29953;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29954 = (function (flag,meta29955){
this.flag = flag;
this.meta29955 = meta29955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29956,meta29955__$1){
var self__ = this;
var _29956__$1 = this;
return (new cljs.core.async.t_cljs$core$async29954(self__.flag,meta29955__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29956){
var self__ = this;
var _29956__$1 = this;
return self__.meta29955;
});})(flag))
;

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29954.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29955","meta29955",1744025909,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29954";

cljs.core.async.t_cljs$core$async29954.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29954");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29954.
 */
cljs.core.async.__GT_t_cljs$core$async29954 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29954(flag__$1,meta29955){
return (new cljs.core.async.t_cljs$core$async29954(flag__$1,meta29955));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29954(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29957 = (function (flag,cb,meta29958){
this.flag = flag;
this.cb = cb;
this.meta29958 = meta29958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29959,meta29958__$1){
var self__ = this;
var _29959__$1 = this;
return (new cljs.core.async.t_cljs$core$async29957(self__.flag,self__.cb,meta29958__$1));
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29959){
var self__ = this;
var _29959__$1 = this;
return self__.meta29958;
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29958","meta29958",-2074932819,null)], null);
});

cljs.core.async.t_cljs$core$async29957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29957";

cljs.core.async.t_cljs$core$async29957.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29957");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29957.
 */
cljs.core.async.__GT_t_cljs$core$async29957 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29957(flag__$1,cb__$1,meta29958){
return (new cljs.core.async.t_cljs$core$async29957(flag__$1,cb__$1,meta29958));
});

}

return (new cljs.core.async.t_cljs$core$async29957(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29960_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29960_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29961_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29961_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29962 = (i + (1));
i = G__29962;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___29968 = arguments.length;
var i__4731__auto___29969 = (0);
while(true){
if((i__4731__auto___29969 < len__4730__auto___29968)){
args__4736__auto__.push((arguments[i__4731__auto___29969]));

var G__29970 = (i__4731__auto___29969 + (1));
i__4731__auto___29969 = G__29970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29965){
var map__29966 = p__29965;
var map__29966__$1 = (((((!((map__29966 == null))))?(((((map__29966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29966):map__29966);
var opts = map__29966__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29963){
var G__29964 = cljs.core.first.call(null,seq29963);
var seq29963__$1 = cljs.core.next.call(null,seq29963);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29964,seq29963__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__29972 = arguments.length;
switch (G__29972) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29872__auto___30018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___30018){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___30018){
return (function (state_29996){
var state_val_29997 = (state_29996[(1)]);
if((state_val_29997 === (7))){
var inst_29992 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_29998_30019 = state_29996__$1;
(statearr_29998_30019[(2)] = inst_29992);

(statearr_29998_30019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (1))){
var state_29996__$1 = state_29996;
var statearr_29999_30020 = state_29996__$1;
(statearr_29999_30020[(2)] = null);

(statearr_29999_30020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (4))){
var inst_29975 = (state_29996[(7)]);
var inst_29975__$1 = (state_29996[(2)]);
var inst_29976 = (inst_29975__$1 == null);
var state_29996__$1 = (function (){var statearr_30000 = state_29996;
(statearr_30000[(7)] = inst_29975__$1);

return statearr_30000;
})();
if(cljs.core.truth_(inst_29976)){
var statearr_30001_30021 = state_29996__$1;
(statearr_30001_30021[(1)] = (5));

} else {
var statearr_30002_30022 = state_29996__$1;
(statearr_30002_30022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (13))){
var state_29996__$1 = state_29996;
var statearr_30003_30023 = state_29996__$1;
(statearr_30003_30023[(2)] = null);

(statearr_30003_30023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (6))){
var inst_29975 = (state_29996[(7)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29996__$1,(11),to,inst_29975);
} else {
if((state_val_29997 === (3))){
var inst_29994 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29996__$1,inst_29994);
} else {
if((state_val_29997 === (12))){
var state_29996__$1 = state_29996;
var statearr_30004_30024 = state_29996__$1;
(statearr_30004_30024[(2)] = null);

(statearr_30004_30024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (2))){
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29996__$1,(4),from);
} else {
if((state_val_29997 === (11))){
var inst_29985 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
if(cljs.core.truth_(inst_29985)){
var statearr_30005_30025 = state_29996__$1;
(statearr_30005_30025[(1)] = (12));

} else {
var statearr_30006_30026 = state_29996__$1;
(statearr_30006_30026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (9))){
var state_29996__$1 = state_29996;
var statearr_30007_30027 = state_29996__$1;
(statearr_30007_30027[(2)] = null);

(statearr_30007_30027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (5))){
var state_29996__$1 = state_29996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30008_30028 = state_29996__$1;
(statearr_30008_30028[(1)] = (8));

} else {
var statearr_30009_30029 = state_29996__$1;
(statearr_30009_30029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (14))){
var inst_29990 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30010_30030 = state_29996__$1;
(statearr_30010_30030[(2)] = inst_29990);

(statearr_30010_30030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (10))){
var inst_29982 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30011_30031 = state_29996__$1;
(statearr_30011_30031[(2)] = inst_29982);

(statearr_30011_30031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (8))){
var inst_29979 = cljs.core.async.close_BANG_.call(null,to);
var state_29996__$1 = state_29996;
var statearr_30012_30032 = state_29996__$1;
(statearr_30012_30032[(2)] = inst_29979);

(statearr_30012_30032[(1)] = (10));


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
});})(c__29872__auto___30018))
;
return ((function (switch__29777__auto__,c__29872__auto___30018){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_30013 = [null,null,null,null,null,null,null,null];
(statearr_30013[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_30013[(1)] = (1));

return statearr_30013;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_29996){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_29996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30014){if((e30014 instanceof Object)){
var ex__29781__auto__ = e30014;
var statearr_30015_30033 = state_29996;
(statearr_30015_30033[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30034 = state_29996;
state_29996 = G__30034;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_29996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_29996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___30018))
})();
var state__29874__auto__ = (function (){var statearr_30016 = f__29873__auto__.call(null);
(statearr_30016[(6)] = c__29872__auto___30018);

return statearr_30016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___30018))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30035){
var vec__30036 = p__30035;
var v = cljs.core.nth.call(null,vec__30036,(0),null);
var p = cljs.core.nth.call(null,vec__30036,(1),null);
var job = vec__30036;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29872__auto___30207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___30207,res,vec__30036,v,p,job,jobs,results){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___30207,res,vec__30036,v,p,job,jobs,results){
return (function (state_30043){
var state_val_30044 = (state_30043[(1)]);
if((state_val_30044 === (1))){
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30043__$1,(2),res,v);
} else {
if((state_val_30044 === (2))){
var inst_30040 = (state_30043[(2)]);
var inst_30041 = cljs.core.async.close_BANG_.call(null,res);
var state_30043__$1 = (function (){var statearr_30045 = state_30043;
(statearr_30045[(7)] = inst_30040);

return statearr_30045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30043__$1,inst_30041);
} else {
return null;
}
}
});})(c__29872__auto___30207,res,vec__30036,v,p,job,jobs,results))
;
return ((function (switch__29777__auto__,c__29872__auto___30207,res,vec__30036,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0 = (function (){
var statearr_30046 = [null,null,null,null,null,null,null,null];
(statearr_30046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__);

(statearr_30046[(1)] = (1));

return statearr_30046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1 = (function (state_30043){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30047){if((e30047 instanceof Object)){
var ex__29781__auto__ = e30047;
var statearr_30048_30208 = state_30043;
(statearr_30048_30208[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30209 = state_30043;
state_30043 = G__30209;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = function(state_30043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1.call(this,state_30043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___30207,res,vec__30036,v,p,job,jobs,results))
})();
var state__29874__auto__ = (function (){var statearr_30049 = f__29873__auto__.call(null);
(statearr_30049[(6)] = c__29872__auto___30207);

return statearr_30049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___30207,res,vec__30036,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30050){
var vec__30051 = p__30050;
var v = cljs.core.nth.call(null,vec__30051,(0),null);
var p = cljs.core.nth.call(null,vec__30051,(1),null);
var job = vec__30051;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___30210 = n;
var __30211 = (0);
while(true){
if((__30211 < n__4607__auto___30210)){
var G__30054_30212 = type;
var G__30054_30213__$1 = (((G__30054_30212 instanceof cljs.core.Keyword))?G__30054_30212.fqn:null);
switch (G__30054_30213__$1) {
case "compute":
var c__29872__auto___30215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30211,c__29872__auto___30215,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (__30211,c__29872__auto___30215,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async){
return (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (1))){
var state_30067__$1 = state_30067;
var statearr_30069_30216 = state_30067__$1;
(statearr_30069_30216[(2)] = null);

(statearr_30069_30216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (2))){
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30067__$1,(4),jobs);
} else {
if((state_val_30068 === (3))){
var inst_30065 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30067__$1,inst_30065);
} else {
if((state_val_30068 === (4))){
var inst_30057 = (state_30067[(2)]);
var inst_30058 = process.call(null,inst_30057);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30058)){
var statearr_30070_30217 = state_30067__$1;
(statearr_30070_30217[(1)] = (5));

} else {
var statearr_30071_30218 = state_30067__$1;
(statearr_30071_30218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var state_30067__$1 = state_30067;
var statearr_30072_30219 = state_30067__$1;
(statearr_30072_30219[(2)] = null);

(statearr_30072_30219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (6))){
var state_30067__$1 = state_30067;
var statearr_30073_30220 = state_30067__$1;
(statearr_30073_30220[(2)] = null);

(statearr_30073_30220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (7))){
var inst_30063 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30074_30221 = state_30067__$1;
(statearr_30074_30221[(2)] = inst_30063);

(statearr_30074_30221[(1)] = (3));


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
});})(__30211,c__29872__auto___30215,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async))
;
return ((function (__30211,switch__29777__auto__,c__29872__auto___30215,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0 = (function (){
var statearr_30075 = [null,null,null,null,null,null,null];
(statearr_30075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__);

(statearr_30075[(1)] = (1));

return statearr_30075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1 = (function (state_30067){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30076){if((e30076 instanceof Object)){
var ex__29781__auto__ = e30076;
var statearr_30077_30222 = state_30067;
(statearr_30077_30222[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30223 = state_30067;
state_30067 = G__30223;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__;
})()
;})(__30211,switch__29777__auto__,c__29872__auto___30215,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async))
})();
var state__29874__auto__ = (function (){var statearr_30078 = f__29873__auto__.call(null);
(statearr_30078[(6)] = c__29872__auto___30215);

return statearr_30078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(__30211,c__29872__auto___30215,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async))
);


break;
case "async":
var c__29872__auto___30224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30211,c__29872__auto___30224,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (__30211,c__29872__auto___30224,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async){
return (function (state_30091){
var state_val_30092 = (state_30091[(1)]);
if((state_val_30092 === (1))){
var state_30091__$1 = state_30091;
var statearr_30093_30225 = state_30091__$1;
(statearr_30093_30225[(2)] = null);

(statearr_30093_30225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (2))){
var state_30091__$1 = state_30091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30091__$1,(4),jobs);
} else {
if((state_val_30092 === (3))){
var inst_30089 = (state_30091[(2)]);
var state_30091__$1 = state_30091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30091__$1,inst_30089);
} else {
if((state_val_30092 === (4))){
var inst_30081 = (state_30091[(2)]);
var inst_30082 = async.call(null,inst_30081);
var state_30091__$1 = state_30091;
if(cljs.core.truth_(inst_30082)){
var statearr_30094_30226 = state_30091__$1;
(statearr_30094_30226[(1)] = (5));

} else {
var statearr_30095_30227 = state_30091__$1;
(statearr_30095_30227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (5))){
var state_30091__$1 = state_30091;
var statearr_30096_30228 = state_30091__$1;
(statearr_30096_30228[(2)] = null);

(statearr_30096_30228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (6))){
var state_30091__$1 = state_30091;
var statearr_30097_30229 = state_30091__$1;
(statearr_30097_30229[(2)] = null);

(statearr_30097_30229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30092 === (7))){
var inst_30087 = (state_30091[(2)]);
var state_30091__$1 = state_30091;
var statearr_30098_30230 = state_30091__$1;
(statearr_30098_30230[(2)] = inst_30087);

(statearr_30098_30230[(1)] = (3));


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
});})(__30211,c__29872__auto___30224,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async))
;
return ((function (__30211,switch__29777__auto__,c__29872__auto___30224,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0 = (function (){
var statearr_30099 = [null,null,null,null,null,null,null];
(statearr_30099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__);

(statearr_30099[(1)] = (1));

return statearr_30099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1 = (function (state_30091){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30100){if((e30100 instanceof Object)){
var ex__29781__auto__ = e30100;
var statearr_30101_30231 = state_30091;
(statearr_30101_30231[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30232 = state_30091;
state_30091 = G__30232;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = function(state_30091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1.call(this,state_30091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__;
})()
;})(__30211,switch__29777__auto__,c__29872__auto___30224,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async))
})();
var state__29874__auto__ = (function (){var statearr_30102 = f__29873__auto__.call(null);
(statearr_30102[(6)] = c__29872__auto___30224);

return statearr_30102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(__30211,c__29872__auto___30224,G__30054_30212,G__30054_30213__$1,n__4607__auto___30210,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30054_30213__$1)].join('')));

}

var G__30233 = (__30211 + (1));
__30211 = G__30233;
continue;
} else {
}
break;
}

var c__29872__auto___30234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___30234,jobs,results,process,async){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___30234,jobs,results,process,async){
return (function (state_30124){
var state_val_30125 = (state_30124[(1)]);
if((state_val_30125 === (7))){
var inst_30120 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30126_30235 = state_30124__$1;
(statearr_30126_30235[(2)] = inst_30120);

(statearr_30126_30235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (1))){
var state_30124__$1 = state_30124;
var statearr_30127_30236 = state_30124__$1;
(statearr_30127_30236[(2)] = null);

(statearr_30127_30236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (4))){
var inst_30105 = (state_30124[(7)]);
var inst_30105__$1 = (state_30124[(2)]);
var inst_30106 = (inst_30105__$1 == null);
var state_30124__$1 = (function (){var statearr_30128 = state_30124;
(statearr_30128[(7)] = inst_30105__$1);

return statearr_30128;
})();
if(cljs.core.truth_(inst_30106)){
var statearr_30129_30237 = state_30124__$1;
(statearr_30129_30237[(1)] = (5));

} else {
var statearr_30130_30238 = state_30124__$1;
(statearr_30130_30238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (6))){
var inst_30105 = (state_30124[(7)]);
var inst_30110 = (state_30124[(8)]);
var inst_30110__$1 = cljs.core.async.chan.call(null,(1));
var inst_30111 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30112 = [inst_30105,inst_30110__$1];
var inst_30113 = (new cljs.core.PersistentVector(null,2,(5),inst_30111,inst_30112,null));
var state_30124__$1 = (function (){var statearr_30131 = state_30124;
(statearr_30131[(8)] = inst_30110__$1);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30124__$1,(8),jobs,inst_30113);
} else {
if((state_val_30125 === (3))){
var inst_30122 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30124__$1,inst_30122);
} else {
if((state_val_30125 === (2))){
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30124__$1,(4),from);
} else {
if((state_val_30125 === (9))){
var inst_30117 = (state_30124[(2)]);
var state_30124__$1 = (function (){var statearr_30132 = state_30124;
(statearr_30132[(9)] = inst_30117);

return statearr_30132;
})();
var statearr_30133_30239 = state_30124__$1;
(statearr_30133_30239[(2)] = null);

(statearr_30133_30239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (5))){
var inst_30108 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30124__$1 = state_30124;
var statearr_30134_30240 = state_30124__$1;
(statearr_30134_30240[(2)] = inst_30108);

(statearr_30134_30240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (8))){
var inst_30110 = (state_30124[(8)]);
var inst_30115 = (state_30124[(2)]);
var state_30124__$1 = (function (){var statearr_30135 = state_30124;
(statearr_30135[(10)] = inst_30115);

return statearr_30135;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30124__$1,(9),results,inst_30110);
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
});})(c__29872__auto___30234,jobs,results,process,async))
;
return ((function (switch__29777__auto__,c__29872__auto___30234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0 = (function (){
var statearr_30136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__);

(statearr_30136[(1)] = (1));

return statearr_30136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1 = (function (state_30124){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30137){if((e30137 instanceof Object)){
var ex__29781__auto__ = e30137;
var statearr_30138_30241 = state_30124;
(statearr_30138_30241[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30242 = state_30124;
state_30124 = G__30242;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = function(state_30124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1.call(this,state_30124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___30234,jobs,results,process,async))
})();
var state__29874__auto__ = (function (){var statearr_30139 = f__29873__auto__.call(null);
(statearr_30139[(6)] = c__29872__auto___30234);

return statearr_30139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___30234,jobs,results,process,async))
);


var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__,jobs,results,process,async){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__,jobs,results,process,async){
return (function (state_30177){
var state_val_30178 = (state_30177[(1)]);
if((state_val_30178 === (7))){
var inst_30173 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30179_30243 = state_30177__$1;
(statearr_30179_30243[(2)] = inst_30173);

(statearr_30179_30243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (20))){
var state_30177__$1 = state_30177;
var statearr_30180_30244 = state_30177__$1;
(statearr_30180_30244[(2)] = null);

(statearr_30180_30244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (1))){
var state_30177__$1 = state_30177;
var statearr_30181_30245 = state_30177__$1;
(statearr_30181_30245[(2)] = null);

(statearr_30181_30245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (4))){
var inst_30142 = (state_30177[(7)]);
var inst_30142__$1 = (state_30177[(2)]);
var inst_30143 = (inst_30142__$1 == null);
var state_30177__$1 = (function (){var statearr_30182 = state_30177;
(statearr_30182[(7)] = inst_30142__$1);

return statearr_30182;
})();
if(cljs.core.truth_(inst_30143)){
var statearr_30183_30246 = state_30177__$1;
(statearr_30183_30246[(1)] = (5));

} else {
var statearr_30184_30247 = state_30177__$1;
(statearr_30184_30247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (15))){
var inst_30155 = (state_30177[(8)]);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30177__$1,(18),to,inst_30155);
} else {
if((state_val_30178 === (21))){
var inst_30168 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30185_30248 = state_30177__$1;
(statearr_30185_30248[(2)] = inst_30168);

(statearr_30185_30248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (13))){
var inst_30170 = (state_30177[(2)]);
var state_30177__$1 = (function (){var statearr_30186 = state_30177;
(statearr_30186[(9)] = inst_30170);

return statearr_30186;
})();
var statearr_30187_30249 = state_30177__$1;
(statearr_30187_30249[(2)] = null);

(statearr_30187_30249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (6))){
var inst_30142 = (state_30177[(7)]);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30177__$1,(11),inst_30142);
} else {
if((state_val_30178 === (17))){
var inst_30163 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
if(cljs.core.truth_(inst_30163)){
var statearr_30188_30250 = state_30177__$1;
(statearr_30188_30250[(1)] = (19));

} else {
var statearr_30189_30251 = state_30177__$1;
(statearr_30189_30251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (3))){
var inst_30175 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30177__$1,inst_30175);
} else {
if((state_val_30178 === (12))){
var inst_30152 = (state_30177[(10)]);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30177__$1,(14),inst_30152);
} else {
if((state_val_30178 === (2))){
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30177__$1,(4),results);
} else {
if((state_val_30178 === (19))){
var state_30177__$1 = state_30177;
var statearr_30190_30252 = state_30177__$1;
(statearr_30190_30252[(2)] = null);

(statearr_30190_30252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (11))){
var inst_30152 = (state_30177[(2)]);
var state_30177__$1 = (function (){var statearr_30191 = state_30177;
(statearr_30191[(10)] = inst_30152);

return statearr_30191;
})();
var statearr_30192_30253 = state_30177__$1;
(statearr_30192_30253[(2)] = null);

(statearr_30192_30253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (9))){
var state_30177__$1 = state_30177;
var statearr_30193_30254 = state_30177__$1;
(statearr_30193_30254[(2)] = null);

(statearr_30193_30254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (5))){
var state_30177__$1 = state_30177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30194_30255 = state_30177__$1;
(statearr_30194_30255[(1)] = (8));

} else {
var statearr_30195_30256 = state_30177__$1;
(statearr_30195_30256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (14))){
var inst_30157 = (state_30177[(11)]);
var inst_30155 = (state_30177[(8)]);
var inst_30155__$1 = (state_30177[(2)]);
var inst_30156 = (inst_30155__$1 == null);
var inst_30157__$1 = cljs.core.not.call(null,inst_30156);
var state_30177__$1 = (function (){var statearr_30196 = state_30177;
(statearr_30196[(11)] = inst_30157__$1);

(statearr_30196[(8)] = inst_30155__$1);

return statearr_30196;
})();
if(inst_30157__$1){
var statearr_30197_30257 = state_30177__$1;
(statearr_30197_30257[(1)] = (15));

} else {
var statearr_30198_30258 = state_30177__$1;
(statearr_30198_30258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (16))){
var inst_30157 = (state_30177[(11)]);
var state_30177__$1 = state_30177;
var statearr_30199_30259 = state_30177__$1;
(statearr_30199_30259[(2)] = inst_30157);

(statearr_30199_30259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (10))){
var inst_30149 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30200_30260 = state_30177__$1;
(statearr_30200_30260[(2)] = inst_30149);

(statearr_30200_30260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (18))){
var inst_30160 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30201_30261 = state_30177__$1;
(statearr_30201_30261[(2)] = inst_30160);

(statearr_30201_30261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (8))){
var inst_30146 = cljs.core.async.close_BANG_.call(null,to);
var state_30177__$1 = state_30177;
var statearr_30202_30262 = state_30177__$1;
(statearr_30202_30262[(2)] = inst_30146);

(statearr_30202_30262[(1)] = (10));


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
});})(c__29872__auto__,jobs,results,process,async))
;
return ((function (switch__29777__auto__,c__29872__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1 = (function (state_30177){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30204){if((e30204 instanceof Object)){
var ex__29781__auto__ = e30204;
var statearr_30205_30263 = state_30177;
(statearr_30205_30263[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30264 = state_30177;
state_30177 = G__30264;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__ = function(state_30177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1.call(this,state_30177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29778__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__,jobs,results,process,async))
})();
var state__29874__auto__ = (function (){var statearr_30206 = f__29873__auto__.call(null);
(statearr_30206[(6)] = c__29872__auto__);

return statearr_30206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__,jobs,results,process,async))
);

return c__29872__auto__;
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
var G__30266 = arguments.length;
switch (G__30266) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__30269 = arguments.length;
switch (G__30269) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__30272 = arguments.length;
switch (G__30272) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29872__auto___30321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___30321,tc,fc){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___30321,tc,fc){
return (function (state_30298){
var state_val_30299 = (state_30298[(1)]);
if((state_val_30299 === (7))){
var inst_30294 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30300_30322 = state_30298__$1;
(statearr_30300_30322[(2)] = inst_30294);

(statearr_30300_30322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (1))){
var state_30298__$1 = state_30298;
var statearr_30301_30323 = state_30298__$1;
(statearr_30301_30323[(2)] = null);

(statearr_30301_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (4))){
var inst_30275 = (state_30298[(7)]);
var inst_30275__$1 = (state_30298[(2)]);
var inst_30276 = (inst_30275__$1 == null);
var state_30298__$1 = (function (){var statearr_30302 = state_30298;
(statearr_30302[(7)] = inst_30275__$1);

return statearr_30302;
})();
if(cljs.core.truth_(inst_30276)){
var statearr_30303_30324 = state_30298__$1;
(statearr_30303_30324[(1)] = (5));

} else {
var statearr_30304_30325 = state_30298__$1;
(statearr_30304_30325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (13))){
var state_30298__$1 = state_30298;
var statearr_30305_30326 = state_30298__$1;
(statearr_30305_30326[(2)] = null);

(statearr_30305_30326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (6))){
var inst_30275 = (state_30298[(7)]);
var inst_30281 = p.call(null,inst_30275);
var state_30298__$1 = state_30298;
if(cljs.core.truth_(inst_30281)){
var statearr_30306_30327 = state_30298__$1;
(statearr_30306_30327[(1)] = (9));

} else {
var statearr_30307_30328 = state_30298__$1;
(statearr_30307_30328[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (3))){
var inst_30296 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30298__$1,inst_30296);
} else {
if((state_val_30299 === (12))){
var state_30298__$1 = state_30298;
var statearr_30308_30329 = state_30298__$1;
(statearr_30308_30329[(2)] = null);

(statearr_30308_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (2))){
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30298__$1,(4),ch);
} else {
if((state_val_30299 === (11))){
var inst_30275 = (state_30298[(7)]);
var inst_30285 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30298__$1,(8),inst_30285,inst_30275);
} else {
if((state_val_30299 === (9))){
var state_30298__$1 = state_30298;
var statearr_30309_30330 = state_30298__$1;
(statearr_30309_30330[(2)] = tc);

(statearr_30309_30330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (5))){
var inst_30278 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30279 = cljs.core.async.close_BANG_.call(null,fc);
var state_30298__$1 = (function (){var statearr_30310 = state_30298;
(statearr_30310[(8)] = inst_30278);

return statearr_30310;
})();
var statearr_30311_30331 = state_30298__$1;
(statearr_30311_30331[(2)] = inst_30279);

(statearr_30311_30331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (14))){
var inst_30292 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
var statearr_30312_30332 = state_30298__$1;
(statearr_30312_30332[(2)] = inst_30292);

(statearr_30312_30332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (10))){
var state_30298__$1 = state_30298;
var statearr_30313_30333 = state_30298__$1;
(statearr_30313_30333[(2)] = fc);

(statearr_30313_30333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30299 === (8))){
var inst_30287 = (state_30298[(2)]);
var state_30298__$1 = state_30298;
if(cljs.core.truth_(inst_30287)){
var statearr_30314_30334 = state_30298__$1;
(statearr_30314_30334[(1)] = (12));

} else {
var statearr_30315_30335 = state_30298__$1;
(statearr_30315_30335[(1)] = (13));

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
});})(c__29872__auto___30321,tc,fc))
;
return ((function (switch__29777__auto__,c__29872__auto___30321,tc,fc){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_30316 = [null,null,null,null,null,null,null,null,null];
(statearr_30316[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_30316[(1)] = (1));

return statearr_30316;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_30298){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30317){if((e30317 instanceof Object)){
var ex__29781__auto__ = e30317;
var statearr_30318_30336 = state_30298;
(statearr_30318_30336[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30337 = state_30298;
state_30298 = G__30337;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_30298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_30298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___30321,tc,fc))
})();
var state__29874__auto__ = (function (){var statearr_30319 = f__29873__auto__.call(null);
(statearr_30319[(6)] = c__29872__auto___30321);

return statearr_30319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___30321,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__){
return (function (state_30358){
var state_val_30359 = (state_30358[(1)]);
if((state_val_30359 === (7))){
var inst_30354 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30360_30378 = state_30358__$1;
(statearr_30360_30378[(2)] = inst_30354);

(statearr_30360_30378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30359 === (1))){
var inst_30338 = init;
var state_30358__$1 = (function (){var statearr_30361 = state_30358;
(statearr_30361[(7)] = inst_30338);

return statearr_30361;
})();
var statearr_30362_30379 = state_30358__$1;
(statearr_30362_30379[(2)] = null);

(statearr_30362_30379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30359 === (4))){
var inst_30341 = (state_30358[(8)]);
var inst_30341__$1 = (state_30358[(2)]);
var inst_30342 = (inst_30341__$1 == null);
var state_30358__$1 = (function (){var statearr_30363 = state_30358;
(statearr_30363[(8)] = inst_30341__$1);

return statearr_30363;
})();
if(cljs.core.truth_(inst_30342)){
var statearr_30364_30380 = state_30358__$1;
(statearr_30364_30380[(1)] = (5));

} else {
var statearr_30365_30381 = state_30358__$1;
(statearr_30365_30381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30359 === (6))){
var inst_30345 = (state_30358[(9)]);
var inst_30338 = (state_30358[(7)]);
var inst_30341 = (state_30358[(8)]);
var inst_30345__$1 = f.call(null,inst_30338,inst_30341);
var inst_30346 = cljs.core.reduced_QMARK_.call(null,inst_30345__$1);
var state_30358__$1 = (function (){var statearr_30366 = state_30358;
(statearr_30366[(9)] = inst_30345__$1);

return statearr_30366;
})();
if(inst_30346){
var statearr_30367_30382 = state_30358__$1;
(statearr_30367_30382[(1)] = (8));

} else {
var statearr_30368_30383 = state_30358__$1;
(statearr_30368_30383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30359 === (3))){
var inst_30356 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30358__$1,inst_30356);
} else {
if((state_val_30359 === (2))){
var state_30358__$1 = state_30358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30358__$1,(4),ch);
} else {
if((state_val_30359 === (9))){
var inst_30345 = (state_30358[(9)]);
var inst_30338 = inst_30345;
var state_30358__$1 = (function (){var statearr_30369 = state_30358;
(statearr_30369[(7)] = inst_30338);

return statearr_30369;
})();
var statearr_30370_30384 = state_30358__$1;
(statearr_30370_30384[(2)] = null);

(statearr_30370_30384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30359 === (5))){
var inst_30338 = (state_30358[(7)]);
var state_30358__$1 = state_30358;
var statearr_30371_30385 = state_30358__$1;
(statearr_30371_30385[(2)] = inst_30338);

(statearr_30371_30385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30359 === (10))){
var inst_30352 = (state_30358[(2)]);
var state_30358__$1 = state_30358;
var statearr_30372_30386 = state_30358__$1;
(statearr_30372_30386[(2)] = inst_30352);

(statearr_30372_30386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30359 === (8))){
var inst_30345 = (state_30358[(9)]);
var inst_30348 = cljs.core.deref.call(null,inst_30345);
var state_30358__$1 = state_30358;
var statearr_30373_30387 = state_30358__$1;
(statearr_30373_30387[(2)] = inst_30348);

(statearr_30373_30387[(1)] = (10));


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
});})(c__29872__auto__))
;
return ((function (switch__29777__auto__,c__29872__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29778__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29778__auto____0 = (function (){
var statearr_30374 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30374[(0)] = cljs$core$async$reduce_$_state_machine__29778__auto__);

(statearr_30374[(1)] = (1));

return statearr_30374;
});
var cljs$core$async$reduce_$_state_machine__29778__auto____1 = (function (state_30358){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30375){if((e30375 instanceof Object)){
var ex__29781__auto__ = e30375;
var statearr_30376_30388 = state_30358;
(statearr_30376_30388[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30389 = state_30358;
state_30358 = G__30389;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29778__auto__ = function(state_30358){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29778__auto____1.call(this,state_30358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29778__auto____0;
cljs$core$async$reduce_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29778__auto____1;
return cljs$core$async$reduce_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__))
})();
var state__29874__auto__ = (function (){var statearr_30377 = f__29873__auto__.call(null);
(statearr_30377[(6)] = c__29872__auto__);

return statearr_30377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__))
);

return c__29872__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__,f__$1){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__,f__$1){
return (function (state_30395){
var state_val_30396 = (state_30395[(1)]);
if((state_val_30396 === (1))){
var inst_30390 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30395__$1,(2),inst_30390);
} else {
if((state_val_30396 === (2))){
var inst_30392 = (state_30395[(2)]);
var inst_30393 = f__$1.call(null,inst_30392);
var state_30395__$1 = state_30395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30395__$1,inst_30393);
} else {
return null;
}
}
});})(c__29872__auto__,f__$1))
;
return ((function (switch__29777__auto__,c__29872__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29778__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29778__auto____0 = (function (){
var statearr_30397 = [null,null,null,null,null,null,null];
(statearr_30397[(0)] = cljs$core$async$transduce_$_state_machine__29778__auto__);

(statearr_30397[(1)] = (1));

return statearr_30397;
});
var cljs$core$async$transduce_$_state_machine__29778__auto____1 = (function (state_30395){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30398){if((e30398 instanceof Object)){
var ex__29781__auto__ = e30398;
var statearr_30399_30401 = state_30395;
(statearr_30399_30401[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30402 = state_30395;
state_30395 = G__30402;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29778__auto__ = function(state_30395){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29778__auto____1.call(this,state_30395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29778__auto____0;
cljs$core$async$transduce_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29778__auto____1;
return cljs$core$async$transduce_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__,f__$1))
})();
var state__29874__auto__ = (function (){var statearr_30400 = f__29873__auto__.call(null);
(statearr_30400[(6)] = c__29872__auto__);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__,f__$1))
);

return c__29872__auto__;
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
var G__30404 = arguments.length;
switch (G__30404) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__){
return (function (state_30429){
var state_val_30430 = (state_30429[(1)]);
if((state_val_30430 === (7))){
var inst_30411 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30431_30452 = state_30429__$1;
(statearr_30431_30452[(2)] = inst_30411);

(statearr_30431_30452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (1))){
var inst_30405 = cljs.core.seq.call(null,coll);
var inst_30406 = inst_30405;
var state_30429__$1 = (function (){var statearr_30432 = state_30429;
(statearr_30432[(7)] = inst_30406);

return statearr_30432;
})();
var statearr_30433_30453 = state_30429__$1;
(statearr_30433_30453[(2)] = null);

(statearr_30433_30453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (4))){
var inst_30406 = (state_30429[(7)]);
var inst_30409 = cljs.core.first.call(null,inst_30406);
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30429__$1,(7),ch,inst_30409);
} else {
if((state_val_30430 === (13))){
var inst_30423 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30434_30454 = state_30429__$1;
(statearr_30434_30454[(2)] = inst_30423);

(statearr_30434_30454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (6))){
var inst_30414 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
if(cljs.core.truth_(inst_30414)){
var statearr_30435_30455 = state_30429__$1;
(statearr_30435_30455[(1)] = (8));

} else {
var statearr_30436_30456 = state_30429__$1;
(statearr_30436_30456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (3))){
var inst_30427 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30429__$1,inst_30427);
} else {
if((state_val_30430 === (12))){
var state_30429__$1 = state_30429;
var statearr_30437_30457 = state_30429__$1;
(statearr_30437_30457[(2)] = null);

(statearr_30437_30457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (2))){
var inst_30406 = (state_30429[(7)]);
var state_30429__$1 = state_30429;
if(cljs.core.truth_(inst_30406)){
var statearr_30438_30458 = state_30429__$1;
(statearr_30438_30458[(1)] = (4));

} else {
var statearr_30439_30459 = state_30429__$1;
(statearr_30439_30459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (11))){
var inst_30420 = cljs.core.async.close_BANG_.call(null,ch);
var state_30429__$1 = state_30429;
var statearr_30440_30460 = state_30429__$1;
(statearr_30440_30460[(2)] = inst_30420);

(statearr_30440_30460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (9))){
var state_30429__$1 = state_30429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30441_30461 = state_30429__$1;
(statearr_30441_30461[(1)] = (11));

} else {
var statearr_30442_30462 = state_30429__$1;
(statearr_30442_30462[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (5))){
var inst_30406 = (state_30429[(7)]);
var state_30429__$1 = state_30429;
var statearr_30443_30463 = state_30429__$1;
(statearr_30443_30463[(2)] = inst_30406);

(statearr_30443_30463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (10))){
var inst_30425 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30444_30464 = state_30429__$1;
(statearr_30444_30464[(2)] = inst_30425);

(statearr_30444_30464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (8))){
var inst_30406 = (state_30429[(7)]);
var inst_30416 = cljs.core.next.call(null,inst_30406);
var inst_30406__$1 = inst_30416;
var state_30429__$1 = (function (){var statearr_30445 = state_30429;
(statearr_30445[(7)] = inst_30406__$1);

return statearr_30445;
})();
var statearr_30446_30465 = state_30429__$1;
(statearr_30446_30465[(2)] = null);

(statearr_30446_30465[(1)] = (2));


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
});})(c__29872__auto__))
;
return ((function (switch__29777__auto__,c__29872__auto__){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_30447 = [null,null,null,null,null,null,null,null];
(statearr_30447[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_30447[(1)] = (1));

return statearr_30447;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_30429){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30448){if((e30448 instanceof Object)){
var ex__29781__auto__ = e30448;
var statearr_30449_30466 = state_30429;
(statearr_30449_30466[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30467 = state_30429;
state_30429 = G__30467;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_30429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_30429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__))
})();
var state__29874__auto__ = (function (){var statearr_30450 = f__29873__auto__.call(null);
(statearr_30450[(6)] = c__29872__auto__);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__))
);

return c__29872__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30468 = (function (ch,cs,meta30469){
this.ch = ch;
this.cs = cs;
this.meta30469 = meta30469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30470,meta30469__$1){
var self__ = this;
var _30470__$1 = this;
return (new cljs.core.async.t_cljs$core$async30468(self__.ch,self__.cs,meta30469__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30470){
var self__ = this;
var _30470__$1 = this;
return self__.meta30469;
});})(cs))
;

cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30468.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30468.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30469","meta30469",318938703,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30468";

cljs.core.async.t_cljs$core$async30468.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30468");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30468.
 */
cljs.core.async.__GT_t_cljs$core$async30468 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30468(ch__$1,cs__$1,meta30469){
return (new cljs.core.async.t_cljs$core$async30468(ch__$1,cs__$1,meta30469));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30468(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29872__auto___30690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___30690,cs,m,dchan,dctr,done){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___30690,cs,m,dchan,dctr,done){
return (function (state_30605){
var state_val_30606 = (state_30605[(1)]);
if((state_val_30606 === (7))){
var inst_30601 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30607_30691 = state_30605__$1;
(statearr_30607_30691[(2)] = inst_30601);

(statearr_30607_30691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (20))){
var inst_30504 = (state_30605[(7)]);
var inst_30516 = cljs.core.first.call(null,inst_30504);
var inst_30517 = cljs.core.nth.call(null,inst_30516,(0),null);
var inst_30518 = cljs.core.nth.call(null,inst_30516,(1),null);
var state_30605__$1 = (function (){var statearr_30608 = state_30605;
(statearr_30608[(8)] = inst_30517);

return statearr_30608;
})();
if(cljs.core.truth_(inst_30518)){
var statearr_30609_30692 = state_30605__$1;
(statearr_30609_30692[(1)] = (22));

} else {
var statearr_30610_30693 = state_30605__$1;
(statearr_30610_30693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (27))){
var inst_30473 = (state_30605[(9)]);
var inst_30546 = (state_30605[(10)]);
var inst_30548 = (state_30605[(11)]);
var inst_30553 = (state_30605[(12)]);
var inst_30553__$1 = cljs.core._nth.call(null,inst_30546,inst_30548);
var inst_30554 = cljs.core.async.put_BANG_.call(null,inst_30553__$1,inst_30473,done);
var state_30605__$1 = (function (){var statearr_30611 = state_30605;
(statearr_30611[(12)] = inst_30553__$1);

return statearr_30611;
})();
if(cljs.core.truth_(inst_30554)){
var statearr_30612_30694 = state_30605__$1;
(statearr_30612_30694[(1)] = (30));

} else {
var statearr_30613_30695 = state_30605__$1;
(statearr_30613_30695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (1))){
var state_30605__$1 = state_30605;
var statearr_30614_30696 = state_30605__$1;
(statearr_30614_30696[(2)] = null);

(statearr_30614_30696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (24))){
var inst_30504 = (state_30605[(7)]);
var inst_30523 = (state_30605[(2)]);
var inst_30524 = cljs.core.next.call(null,inst_30504);
var inst_30482 = inst_30524;
var inst_30483 = null;
var inst_30484 = (0);
var inst_30485 = (0);
var state_30605__$1 = (function (){var statearr_30615 = state_30605;
(statearr_30615[(13)] = inst_30485);

(statearr_30615[(14)] = inst_30483);

(statearr_30615[(15)] = inst_30523);

(statearr_30615[(16)] = inst_30484);

(statearr_30615[(17)] = inst_30482);

return statearr_30615;
})();
var statearr_30616_30697 = state_30605__$1;
(statearr_30616_30697[(2)] = null);

(statearr_30616_30697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (39))){
var state_30605__$1 = state_30605;
var statearr_30620_30698 = state_30605__$1;
(statearr_30620_30698[(2)] = null);

(statearr_30620_30698[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (4))){
var inst_30473 = (state_30605[(9)]);
var inst_30473__$1 = (state_30605[(2)]);
var inst_30474 = (inst_30473__$1 == null);
var state_30605__$1 = (function (){var statearr_30621 = state_30605;
(statearr_30621[(9)] = inst_30473__$1);

return statearr_30621;
})();
if(cljs.core.truth_(inst_30474)){
var statearr_30622_30699 = state_30605__$1;
(statearr_30622_30699[(1)] = (5));

} else {
var statearr_30623_30700 = state_30605__$1;
(statearr_30623_30700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (15))){
var inst_30485 = (state_30605[(13)]);
var inst_30483 = (state_30605[(14)]);
var inst_30484 = (state_30605[(16)]);
var inst_30482 = (state_30605[(17)]);
var inst_30500 = (state_30605[(2)]);
var inst_30501 = (inst_30485 + (1));
var tmp30617 = inst_30483;
var tmp30618 = inst_30484;
var tmp30619 = inst_30482;
var inst_30482__$1 = tmp30619;
var inst_30483__$1 = tmp30617;
var inst_30484__$1 = tmp30618;
var inst_30485__$1 = inst_30501;
var state_30605__$1 = (function (){var statearr_30624 = state_30605;
(statearr_30624[(13)] = inst_30485__$1);

(statearr_30624[(14)] = inst_30483__$1);

(statearr_30624[(16)] = inst_30484__$1);

(statearr_30624[(18)] = inst_30500);

(statearr_30624[(17)] = inst_30482__$1);

return statearr_30624;
})();
var statearr_30625_30701 = state_30605__$1;
(statearr_30625_30701[(2)] = null);

(statearr_30625_30701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (21))){
var inst_30527 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30629_30702 = state_30605__$1;
(statearr_30629_30702[(2)] = inst_30527);

(statearr_30629_30702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (31))){
var inst_30553 = (state_30605[(12)]);
var inst_30557 = done.call(null,null);
var inst_30558 = cljs.core.async.untap_STAR_.call(null,m,inst_30553);
var state_30605__$1 = (function (){var statearr_30630 = state_30605;
(statearr_30630[(19)] = inst_30557);

return statearr_30630;
})();
var statearr_30631_30703 = state_30605__$1;
(statearr_30631_30703[(2)] = inst_30558);

(statearr_30631_30703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (32))){
var inst_30547 = (state_30605[(20)]);
var inst_30545 = (state_30605[(21)]);
var inst_30546 = (state_30605[(10)]);
var inst_30548 = (state_30605[(11)]);
var inst_30560 = (state_30605[(2)]);
var inst_30561 = (inst_30548 + (1));
var tmp30626 = inst_30547;
var tmp30627 = inst_30545;
var tmp30628 = inst_30546;
var inst_30545__$1 = tmp30627;
var inst_30546__$1 = tmp30628;
var inst_30547__$1 = tmp30626;
var inst_30548__$1 = inst_30561;
var state_30605__$1 = (function (){var statearr_30632 = state_30605;
(statearr_30632[(20)] = inst_30547__$1);

(statearr_30632[(21)] = inst_30545__$1);

(statearr_30632[(10)] = inst_30546__$1);

(statearr_30632[(11)] = inst_30548__$1);

(statearr_30632[(22)] = inst_30560);

return statearr_30632;
})();
var statearr_30633_30704 = state_30605__$1;
(statearr_30633_30704[(2)] = null);

(statearr_30633_30704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (40))){
var inst_30573 = (state_30605[(23)]);
var inst_30577 = done.call(null,null);
var inst_30578 = cljs.core.async.untap_STAR_.call(null,m,inst_30573);
var state_30605__$1 = (function (){var statearr_30634 = state_30605;
(statearr_30634[(24)] = inst_30577);

return statearr_30634;
})();
var statearr_30635_30705 = state_30605__$1;
(statearr_30635_30705[(2)] = inst_30578);

(statearr_30635_30705[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (33))){
var inst_30564 = (state_30605[(25)]);
var inst_30566 = cljs.core.chunked_seq_QMARK_.call(null,inst_30564);
var state_30605__$1 = state_30605;
if(inst_30566){
var statearr_30636_30706 = state_30605__$1;
(statearr_30636_30706[(1)] = (36));

} else {
var statearr_30637_30707 = state_30605__$1;
(statearr_30637_30707[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (13))){
var inst_30494 = (state_30605[(26)]);
var inst_30497 = cljs.core.async.close_BANG_.call(null,inst_30494);
var state_30605__$1 = state_30605;
var statearr_30638_30708 = state_30605__$1;
(statearr_30638_30708[(2)] = inst_30497);

(statearr_30638_30708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (22))){
var inst_30517 = (state_30605[(8)]);
var inst_30520 = cljs.core.async.close_BANG_.call(null,inst_30517);
var state_30605__$1 = state_30605;
var statearr_30639_30709 = state_30605__$1;
(statearr_30639_30709[(2)] = inst_30520);

(statearr_30639_30709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (36))){
var inst_30564 = (state_30605[(25)]);
var inst_30568 = cljs.core.chunk_first.call(null,inst_30564);
var inst_30569 = cljs.core.chunk_rest.call(null,inst_30564);
var inst_30570 = cljs.core.count.call(null,inst_30568);
var inst_30545 = inst_30569;
var inst_30546 = inst_30568;
var inst_30547 = inst_30570;
var inst_30548 = (0);
var state_30605__$1 = (function (){var statearr_30640 = state_30605;
(statearr_30640[(20)] = inst_30547);

(statearr_30640[(21)] = inst_30545);

(statearr_30640[(10)] = inst_30546);

(statearr_30640[(11)] = inst_30548);

return statearr_30640;
})();
var statearr_30641_30710 = state_30605__$1;
(statearr_30641_30710[(2)] = null);

(statearr_30641_30710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (41))){
var inst_30564 = (state_30605[(25)]);
var inst_30580 = (state_30605[(2)]);
var inst_30581 = cljs.core.next.call(null,inst_30564);
var inst_30545 = inst_30581;
var inst_30546 = null;
var inst_30547 = (0);
var inst_30548 = (0);
var state_30605__$1 = (function (){var statearr_30642 = state_30605;
(statearr_30642[(20)] = inst_30547);

(statearr_30642[(27)] = inst_30580);

(statearr_30642[(21)] = inst_30545);

(statearr_30642[(10)] = inst_30546);

(statearr_30642[(11)] = inst_30548);

return statearr_30642;
})();
var statearr_30643_30711 = state_30605__$1;
(statearr_30643_30711[(2)] = null);

(statearr_30643_30711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (43))){
var state_30605__$1 = state_30605;
var statearr_30644_30712 = state_30605__$1;
(statearr_30644_30712[(2)] = null);

(statearr_30644_30712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (29))){
var inst_30589 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30645_30713 = state_30605__$1;
(statearr_30645_30713[(2)] = inst_30589);

(statearr_30645_30713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (44))){
var inst_30598 = (state_30605[(2)]);
var state_30605__$1 = (function (){var statearr_30646 = state_30605;
(statearr_30646[(28)] = inst_30598);

return statearr_30646;
})();
var statearr_30647_30714 = state_30605__$1;
(statearr_30647_30714[(2)] = null);

(statearr_30647_30714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (6))){
var inst_30537 = (state_30605[(29)]);
var inst_30536 = cljs.core.deref.call(null,cs);
var inst_30537__$1 = cljs.core.keys.call(null,inst_30536);
var inst_30538 = cljs.core.count.call(null,inst_30537__$1);
var inst_30539 = cljs.core.reset_BANG_.call(null,dctr,inst_30538);
var inst_30544 = cljs.core.seq.call(null,inst_30537__$1);
var inst_30545 = inst_30544;
var inst_30546 = null;
var inst_30547 = (0);
var inst_30548 = (0);
var state_30605__$1 = (function (){var statearr_30648 = state_30605;
(statearr_30648[(20)] = inst_30547);

(statearr_30648[(29)] = inst_30537__$1);

(statearr_30648[(21)] = inst_30545);

(statearr_30648[(10)] = inst_30546);

(statearr_30648[(11)] = inst_30548);

(statearr_30648[(30)] = inst_30539);

return statearr_30648;
})();
var statearr_30649_30715 = state_30605__$1;
(statearr_30649_30715[(2)] = null);

(statearr_30649_30715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (28))){
var inst_30545 = (state_30605[(21)]);
var inst_30564 = (state_30605[(25)]);
var inst_30564__$1 = cljs.core.seq.call(null,inst_30545);
var state_30605__$1 = (function (){var statearr_30650 = state_30605;
(statearr_30650[(25)] = inst_30564__$1);

return statearr_30650;
})();
if(inst_30564__$1){
var statearr_30651_30716 = state_30605__$1;
(statearr_30651_30716[(1)] = (33));

} else {
var statearr_30652_30717 = state_30605__$1;
(statearr_30652_30717[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (25))){
var inst_30547 = (state_30605[(20)]);
var inst_30548 = (state_30605[(11)]);
var inst_30550 = (inst_30548 < inst_30547);
var inst_30551 = inst_30550;
var state_30605__$1 = state_30605;
if(cljs.core.truth_(inst_30551)){
var statearr_30653_30718 = state_30605__$1;
(statearr_30653_30718[(1)] = (27));

} else {
var statearr_30654_30719 = state_30605__$1;
(statearr_30654_30719[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (34))){
var state_30605__$1 = state_30605;
var statearr_30655_30720 = state_30605__$1;
(statearr_30655_30720[(2)] = null);

(statearr_30655_30720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (17))){
var state_30605__$1 = state_30605;
var statearr_30656_30721 = state_30605__$1;
(statearr_30656_30721[(2)] = null);

(statearr_30656_30721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (3))){
var inst_30603 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30605__$1,inst_30603);
} else {
if((state_val_30606 === (12))){
var inst_30532 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30657_30722 = state_30605__$1;
(statearr_30657_30722[(2)] = inst_30532);

(statearr_30657_30722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (2))){
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30605__$1,(4),ch);
} else {
if((state_val_30606 === (23))){
var state_30605__$1 = state_30605;
var statearr_30658_30723 = state_30605__$1;
(statearr_30658_30723[(2)] = null);

(statearr_30658_30723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (35))){
var inst_30587 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30659_30724 = state_30605__$1;
(statearr_30659_30724[(2)] = inst_30587);

(statearr_30659_30724[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (19))){
var inst_30504 = (state_30605[(7)]);
var inst_30508 = cljs.core.chunk_first.call(null,inst_30504);
var inst_30509 = cljs.core.chunk_rest.call(null,inst_30504);
var inst_30510 = cljs.core.count.call(null,inst_30508);
var inst_30482 = inst_30509;
var inst_30483 = inst_30508;
var inst_30484 = inst_30510;
var inst_30485 = (0);
var state_30605__$1 = (function (){var statearr_30660 = state_30605;
(statearr_30660[(13)] = inst_30485);

(statearr_30660[(14)] = inst_30483);

(statearr_30660[(16)] = inst_30484);

(statearr_30660[(17)] = inst_30482);

return statearr_30660;
})();
var statearr_30661_30725 = state_30605__$1;
(statearr_30661_30725[(2)] = null);

(statearr_30661_30725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (11))){
var inst_30504 = (state_30605[(7)]);
var inst_30482 = (state_30605[(17)]);
var inst_30504__$1 = cljs.core.seq.call(null,inst_30482);
var state_30605__$1 = (function (){var statearr_30662 = state_30605;
(statearr_30662[(7)] = inst_30504__$1);

return statearr_30662;
})();
if(inst_30504__$1){
var statearr_30663_30726 = state_30605__$1;
(statearr_30663_30726[(1)] = (16));

} else {
var statearr_30664_30727 = state_30605__$1;
(statearr_30664_30727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (9))){
var inst_30534 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30665_30728 = state_30605__$1;
(statearr_30665_30728[(2)] = inst_30534);

(statearr_30665_30728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (5))){
var inst_30480 = cljs.core.deref.call(null,cs);
var inst_30481 = cljs.core.seq.call(null,inst_30480);
var inst_30482 = inst_30481;
var inst_30483 = null;
var inst_30484 = (0);
var inst_30485 = (0);
var state_30605__$1 = (function (){var statearr_30666 = state_30605;
(statearr_30666[(13)] = inst_30485);

(statearr_30666[(14)] = inst_30483);

(statearr_30666[(16)] = inst_30484);

(statearr_30666[(17)] = inst_30482);

return statearr_30666;
})();
var statearr_30667_30729 = state_30605__$1;
(statearr_30667_30729[(2)] = null);

(statearr_30667_30729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (14))){
var state_30605__$1 = state_30605;
var statearr_30668_30730 = state_30605__$1;
(statearr_30668_30730[(2)] = null);

(statearr_30668_30730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (45))){
var inst_30595 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30669_30731 = state_30605__$1;
(statearr_30669_30731[(2)] = inst_30595);

(statearr_30669_30731[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (26))){
var inst_30537 = (state_30605[(29)]);
var inst_30591 = (state_30605[(2)]);
var inst_30592 = cljs.core.seq.call(null,inst_30537);
var state_30605__$1 = (function (){var statearr_30670 = state_30605;
(statearr_30670[(31)] = inst_30591);

return statearr_30670;
})();
if(inst_30592){
var statearr_30671_30732 = state_30605__$1;
(statearr_30671_30732[(1)] = (42));

} else {
var statearr_30672_30733 = state_30605__$1;
(statearr_30672_30733[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (16))){
var inst_30504 = (state_30605[(7)]);
var inst_30506 = cljs.core.chunked_seq_QMARK_.call(null,inst_30504);
var state_30605__$1 = state_30605;
if(inst_30506){
var statearr_30673_30734 = state_30605__$1;
(statearr_30673_30734[(1)] = (19));

} else {
var statearr_30674_30735 = state_30605__$1;
(statearr_30674_30735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (38))){
var inst_30584 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30675_30736 = state_30605__$1;
(statearr_30675_30736[(2)] = inst_30584);

(statearr_30675_30736[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (30))){
var state_30605__$1 = state_30605;
var statearr_30676_30737 = state_30605__$1;
(statearr_30676_30737[(2)] = null);

(statearr_30676_30737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (10))){
var inst_30485 = (state_30605[(13)]);
var inst_30483 = (state_30605[(14)]);
var inst_30493 = cljs.core._nth.call(null,inst_30483,inst_30485);
var inst_30494 = cljs.core.nth.call(null,inst_30493,(0),null);
var inst_30495 = cljs.core.nth.call(null,inst_30493,(1),null);
var state_30605__$1 = (function (){var statearr_30677 = state_30605;
(statearr_30677[(26)] = inst_30494);

return statearr_30677;
})();
if(cljs.core.truth_(inst_30495)){
var statearr_30678_30738 = state_30605__$1;
(statearr_30678_30738[(1)] = (13));

} else {
var statearr_30679_30739 = state_30605__$1;
(statearr_30679_30739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (18))){
var inst_30530 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30680_30740 = state_30605__$1;
(statearr_30680_30740[(2)] = inst_30530);

(statearr_30680_30740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (42))){
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30605__$1,(45),dchan);
} else {
if((state_val_30606 === (37))){
var inst_30473 = (state_30605[(9)]);
var inst_30564 = (state_30605[(25)]);
var inst_30573 = (state_30605[(23)]);
var inst_30573__$1 = cljs.core.first.call(null,inst_30564);
var inst_30574 = cljs.core.async.put_BANG_.call(null,inst_30573__$1,inst_30473,done);
var state_30605__$1 = (function (){var statearr_30681 = state_30605;
(statearr_30681[(23)] = inst_30573__$1);

return statearr_30681;
})();
if(cljs.core.truth_(inst_30574)){
var statearr_30682_30741 = state_30605__$1;
(statearr_30682_30741[(1)] = (39));

} else {
var statearr_30683_30742 = state_30605__$1;
(statearr_30683_30742[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (8))){
var inst_30485 = (state_30605[(13)]);
var inst_30484 = (state_30605[(16)]);
var inst_30487 = (inst_30485 < inst_30484);
var inst_30488 = inst_30487;
var state_30605__$1 = state_30605;
if(cljs.core.truth_(inst_30488)){
var statearr_30684_30743 = state_30605__$1;
(statearr_30684_30743[(1)] = (10));

} else {
var statearr_30685_30744 = state_30605__$1;
(statearr_30685_30744[(1)] = (11));

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
});})(c__29872__auto___30690,cs,m,dchan,dctr,done))
;
return ((function (switch__29777__auto__,c__29872__auto___30690,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29778__auto__ = null;
var cljs$core$async$mult_$_state_machine__29778__auto____0 = (function (){
var statearr_30686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30686[(0)] = cljs$core$async$mult_$_state_machine__29778__auto__);

(statearr_30686[(1)] = (1));

return statearr_30686;
});
var cljs$core$async$mult_$_state_machine__29778__auto____1 = (function (state_30605){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30687){if((e30687 instanceof Object)){
var ex__29781__auto__ = e30687;
var statearr_30688_30745 = state_30605;
(statearr_30688_30745[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30746 = state_30605;
state_30605 = G__30746;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29778__auto__ = function(state_30605){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29778__auto____1.call(this,state_30605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29778__auto____0;
cljs$core$async$mult_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29778__auto____1;
return cljs$core$async$mult_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___30690,cs,m,dchan,dctr,done))
})();
var state__29874__auto__ = (function (){var statearr_30689 = f__29873__auto__.call(null);
(statearr_30689[(6)] = c__29872__auto___30690);

return statearr_30689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___30690,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30748 = arguments.length;
switch (G__30748) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30760 = arguments.length;
var i__4731__auto___30761 = (0);
while(true){
if((i__4731__auto___30761 < len__4730__auto___30760)){
args__4736__auto__.push((arguments[i__4731__auto___30761]));

var G__30762 = (i__4731__auto___30761 + (1));
i__4731__auto___30761 = G__30762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30754){
var map__30755 = p__30754;
var map__30755__$1 = (((((!((map__30755 == null))))?(((((map__30755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30755):map__30755);
var opts = map__30755__$1;
var statearr_30757_30763 = state;
(statearr_30757_30763[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__30755,map__30755__$1,opts){
return (function (val){
var statearr_30758_30764 = state;
(statearr_30758_30764[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30755,map__30755__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_30759_30765 = state;
(statearr_30759_30765[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30750){
var G__30751 = cljs.core.first.call(null,seq30750);
var seq30750__$1 = cljs.core.next.call(null,seq30750);
var G__30752 = cljs.core.first.call(null,seq30750__$1);
var seq30750__$2 = cljs.core.next.call(null,seq30750__$1);
var G__30753 = cljs.core.first.call(null,seq30750__$2);
var seq30750__$3 = cljs.core.next.call(null,seq30750__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30751,G__30752,G__30753,seq30750__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30766 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30767){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30767 = meta30767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30768,meta30767__$1){
var self__ = this;
var _30768__$1 = this;
return (new cljs.core.async.t_cljs$core$async30766(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30767__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30768){
var self__ = this;
var _30768__$1 = this;
return self__.meta30767;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30767","meta30767",182436861,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30766";

cljs.core.async.t_cljs$core$async30766.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30766");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30766.
 */
cljs.core.async.__GT_t_cljs$core$async30766 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30766(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30767){
return (new cljs.core.async.t_cljs$core$async30766(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30767));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30766(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29872__auto___30930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30870){
var state_val_30871 = (state_30870[(1)]);
if((state_val_30871 === (7))){
var inst_30785 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
var statearr_30872_30931 = state_30870__$1;
(statearr_30872_30931[(2)] = inst_30785);

(statearr_30872_30931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (20))){
var inst_30797 = (state_30870[(7)]);
var state_30870__$1 = state_30870;
var statearr_30873_30932 = state_30870__$1;
(statearr_30873_30932[(2)] = inst_30797);

(statearr_30873_30932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (27))){
var state_30870__$1 = state_30870;
var statearr_30874_30933 = state_30870__$1;
(statearr_30874_30933[(2)] = null);

(statearr_30874_30933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (1))){
var inst_30772 = (state_30870[(8)]);
var inst_30772__$1 = calc_state.call(null);
var inst_30774 = (inst_30772__$1 == null);
var inst_30775 = cljs.core.not.call(null,inst_30774);
var state_30870__$1 = (function (){var statearr_30875 = state_30870;
(statearr_30875[(8)] = inst_30772__$1);

return statearr_30875;
})();
if(inst_30775){
var statearr_30876_30934 = state_30870__$1;
(statearr_30876_30934[(1)] = (2));

} else {
var statearr_30877_30935 = state_30870__$1;
(statearr_30877_30935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (24))){
var inst_30830 = (state_30870[(9)]);
var inst_30821 = (state_30870[(10)]);
var inst_30844 = (state_30870[(11)]);
var inst_30844__$1 = inst_30821.call(null,inst_30830);
var state_30870__$1 = (function (){var statearr_30878 = state_30870;
(statearr_30878[(11)] = inst_30844__$1);

return statearr_30878;
})();
if(cljs.core.truth_(inst_30844__$1)){
var statearr_30879_30936 = state_30870__$1;
(statearr_30879_30936[(1)] = (29));

} else {
var statearr_30880_30937 = state_30870__$1;
(statearr_30880_30937[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (4))){
var inst_30788 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
if(cljs.core.truth_(inst_30788)){
var statearr_30881_30938 = state_30870__$1;
(statearr_30881_30938[(1)] = (8));

} else {
var statearr_30882_30939 = state_30870__$1;
(statearr_30882_30939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (15))){
var inst_30815 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
if(cljs.core.truth_(inst_30815)){
var statearr_30883_30940 = state_30870__$1;
(statearr_30883_30940[(1)] = (19));

} else {
var statearr_30884_30941 = state_30870__$1;
(statearr_30884_30941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (21))){
var inst_30820 = (state_30870[(12)]);
var inst_30820__$1 = (state_30870[(2)]);
var inst_30821 = cljs.core.get.call(null,inst_30820__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30822 = cljs.core.get.call(null,inst_30820__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30823 = cljs.core.get.call(null,inst_30820__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30870__$1 = (function (){var statearr_30885 = state_30870;
(statearr_30885[(10)] = inst_30821);

(statearr_30885[(12)] = inst_30820__$1);

(statearr_30885[(13)] = inst_30822);

return statearr_30885;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30870__$1,(22),inst_30823);
} else {
if((state_val_30871 === (31))){
var inst_30852 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
if(cljs.core.truth_(inst_30852)){
var statearr_30886_30942 = state_30870__$1;
(statearr_30886_30942[(1)] = (32));

} else {
var statearr_30887_30943 = state_30870__$1;
(statearr_30887_30943[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (32))){
var inst_30829 = (state_30870[(14)]);
var state_30870__$1 = state_30870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30870__$1,(35),out,inst_30829);
} else {
if((state_val_30871 === (33))){
var inst_30820 = (state_30870[(12)]);
var inst_30797 = inst_30820;
var state_30870__$1 = (function (){var statearr_30888 = state_30870;
(statearr_30888[(7)] = inst_30797);

return statearr_30888;
})();
var statearr_30889_30944 = state_30870__$1;
(statearr_30889_30944[(2)] = null);

(statearr_30889_30944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (13))){
var inst_30797 = (state_30870[(7)]);
var inst_30804 = inst_30797.cljs$lang$protocol_mask$partition0$;
var inst_30805 = (inst_30804 & (64));
var inst_30806 = inst_30797.cljs$core$ISeq$;
var inst_30807 = (cljs.core.PROTOCOL_SENTINEL === inst_30806);
var inst_30808 = ((inst_30805) || (inst_30807));
var state_30870__$1 = state_30870;
if(cljs.core.truth_(inst_30808)){
var statearr_30890_30945 = state_30870__$1;
(statearr_30890_30945[(1)] = (16));

} else {
var statearr_30891_30946 = state_30870__$1;
(statearr_30891_30946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (22))){
var inst_30830 = (state_30870[(9)]);
var inst_30829 = (state_30870[(14)]);
var inst_30828 = (state_30870[(2)]);
var inst_30829__$1 = cljs.core.nth.call(null,inst_30828,(0),null);
var inst_30830__$1 = cljs.core.nth.call(null,inst_30828,(1),null);
var inst_30831 = (inst_30829__$1 == null);
var inst_30832 = cljs.core._EQ_.call(null,inst_30830__$1,change);
var inst_30833 = ((inst_30831) || (inst_30832));
var state_30870__$1 = (function (){var statearr_30892 = state_30870;
(statearr_30892[(9)] = inst_30830__$1);

(statearr_30892[(14)] = inst_30829__$1);

return statearr_30892;
})();
if(cljs.core.truth_(inst_30833)){
var statearr_30893_30947 = state_30870__$1;
(statearr_30893_30947[(1)] = (23));

} else {
var statearr_30894_30948 = state_30870__$1;
(statearr_30894_30948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (36))){
var inst_30820 = (state_30870[(12)]);
var inst_30797 = inst_30820;
var state_30870__$1 = (function (){var statearr_30895 = state_30870;
(statearr_30895[(7)] = inst_30797);

return statearr_30895;
})();
var statearr_30896_30949 = state_30870__$1;
(statearr_30896_30949[(2)] = null);

(statearr_30896_30949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (29))){
var inst_30844 = (state_30870[(11)]);
var state_30870__$1 = state_30870;
var statearr_30897_30950 = state_30870__$1;
(statearr_30897_30950[(2)] = inst_30844);

(statearr_30897_30950[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (6))){
var state_30870__$1 = state_30870;
var statearr_30898_30951 = state_30870__$1;
(statearr_30898_30951[(2)] = false);

(statearr_30898_30951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (28))){
var inst_30840 = (state_30870[(2)]);
var inst_30841 = calc_state.call(null);
var inst_30797 = inst_30841;
var state_30870__$1 = (function (){var statearr_30899 = state_30870;
(statearr_30899[(7)] = inst_30797);

(statearr_30899[(15)] = inst_30840);

return statearr_30899;
})();
var statearr_30900_30952 = state_30870__$1;
(statearr_30900_30952[(2)] = null);

(statearr_30900_30952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (25))){
var inst_30866 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
var statearr_30901_30953 = state_30870__$1;
(statearr_30901_30953[(2)] = inst_30866);

(statearr_30901_30953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (34))){
var inst_30864 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
var statearr_30902_30954 = state_30870__$1;
(statearr_30902_30954[(2)] = inst_30864);

(statearr_30902_30954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (17))){
var state_30870__$1 = state_30870;
var statearr_30903_30955 = state_30870__$1;
(statearr_30903_30955[(2)] = false);

(statearr_30903_30955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (3))){
var state_30870__$1 = state_30870;
var statearr_30904_30956 = state_30870__$1;
(statearr_30904_30956[(2)] = false);

(statearr_30904_30956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (12))){
var inst_30868 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30870__$1,inst_30868);
} else {
if((state_val_30871 === (2))){
var inst_30772 = (state_30870[(8)]);
var inst_30777 = inst_30772.cljs$lang$protocol_mask$partition0$;
var inst_30778 = (inst_30777 & (64));
var inst_30779 = inst_30772.cljs$core$ISeq$;
var inst_30780 = (cljs.core.PROTOCOL_SENTINEL === inst_30779);
var inst_30781 = ((inst_30778) || (inst_30780));
var state_30870__$1 = state_30870;
if(cljs.core.truth_(inst_30781)){
var statearr_30905_30957 = state_30870__$1;
(statearr_30905_30957[(1)] = (5));

} else {
var statearr_30906_30958 = state_30870__$1;
(statearr_30906_30958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (23))){
var inst_30829 = (state_30870[(14)]);
var inst_30835 = (inst_30829 == null);
var state_30870__$1 = state_30870;
if(cljs.core.truth_(inst_30835)){
var statearr_30907_30959 = state_30870__$1;
(statearr_30907_30959[(1)] = (26));

} else {
var statearr_30908_30960 = state_30870__$1;
(statearr_30908_30960[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (35))){
var inst_30855 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
if(cljs.core.truth_(inst_30855)){
var statearr_30909_30961 = state_30870__$1;
(statearr_30909_30961[(1)] = (36));

} else {
var statearr_30910_30962 = state_30870__$1;
(statearr_30910_30962[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (19))){
var inst_30797 = (state_30870[(7)]);
var inst_30817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30797);
var state_30870__$1 = state_30870;
var statearr_30911_30963 = state_30870__$1;
(statearr_30911_30963[(2)] = inst_30817);

(statearr_30911_30963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (11))){
var inst_30797 = (state_30870[(7)]);
var inst_30801 = (inst_30797 == null);
var inst_30802 = cljs.core.not.call(null,inst_30801);
var state_30870__$1 = state_30870;
if(inst_30802){
var statearr_30912_30964 = state_30870__$1;
(statearr_30912_30964[(1)] = (13));

} else {
var statearr_30913_30965 = state_30870__$1;
(statearr_30913_30965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (9))){
var inst_30772 = (state_30870[(8)]);
var state_30870__$1 = state_30870;
var statearr_30914_30966 = state_30870__$1;
(statearr_30914_30966[(2)] = inst_30772);

(statearr_30914_30966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (5))){
var state_30870__$1 = state_30870;
var statearr_30915_30967 = state_30870__$1;
(statearr_30915_30967[(2)] = true);

(statearr_30915_30967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (14))){
var state_30870__$1 = state_30870;
var statearr_30916_30968 = state_30870__$1;
(statearr_30916_30968[(2)] = false);

(statearr_30916_30968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (26))){
var inst_30830 = (state_30870[(9)]);
var inst_30837 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30830);
var state_30870__$1 = state_30870;
var statearr_30917_30969 = state_30870__$1;
(statearr_30917_30969[(2)] = inst_30837);

(statearr_30917_30969[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (16))){
var state_30870__$1 = state_30870;
var statearr_30918_30970 = state_30870__$1;
(statearr_30918_30970[(2)] = true);

(statearr_30918_30970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (38))){
var inst_30860 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
var statearr_30919_30971 = state_30870__$1;
(statearr_30919_30971[(2)] = inst_30860);

(statearr_30919_30971[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (30))){
var inst_30830 = (state_30870[(9)]);
var inst_30821 = (state_30870[(10)]);
var inst_30822 = (state_30870[(13)]);
var inst_30847 = cljs.core.empty_QMARK_.call(null,inst_30821);
var inst_30848 = inst_30822.call(null,inst_30830);
var inst_30849 = cljs.core.not.call(null,inst_30848);
var inst_30850 = ((inst_30847) && (inst_30849));
var state_30870__$1 = state_30870;
var statearr_30920_30972 = state_30870__$1;
(statearr_30920_30972[(2)] = inst_30850);

(statearr_30920_30972[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (10))){
var inst_30772 = (state_30870[(8)]);
var inst_30793 = (state_30870[(2)]);
var inst_30794 = cljs.core.get.call(null,inst_30793,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30795 = cljs.core.get.call(null,inst_30793,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30796 = cljs.core.get.call(null,inst_30793,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30797 = inst_30772;
var state_30870__$1 = (function (){var statearr_30921 = state_30870;
(statearr_30921[(7)] = inst_30797);

(statearr_30921[(16)] = inst_30794);

(statearr_30921[(17)] = inst_30795);

(statearr_30921[(18)] = inst_30796);

return statearr_30921;
})();
var statearr_30922_30973 = state_30870__$1;
(statearr_30922_30973[(2)] = null);

(statearr_30922_30973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (18))){
var inst_30812 = (state_30870[(2)]);
var state_30870__$1 = state_30870;
var statearr_30923_30974 = state_30870__$1;
(statearr_30923_30974[(2)] = inst_30812);

(statearr_30923_30974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (37))){
var state_30870__$1 = state_30870;
var statearr_30924_30975 = state_30870__$1;
(statearr_30924_30975[(2)] = null);

(statearr_30924_30975[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (8))){
var inst_30772 = (state_30870[(8)]);
var inst_30790 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30772);
var state_30870__$1 = state_30870;
var statearr_30925_30976 = state_30870__$1;
(statearr_30925_30976[(2)] = inst_30790);

(statearr_30925_30976[(1)] = (10));


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
});})(c__29872__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29777__auto__,c__29872__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29778__auto__ = null;
var cljs$core$async$mix_$_state_machine__29778__auto____0 = (function (){
var statearr_30926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30926[(0)] = cljs$core$async$mix_$_state_machine__29778__auto__);

(statearr_30926[(1)] = (1));

return statearr_30926;
});
var cljs$core$async$mix_$_state_machine__29778__auto____1 = (function (state_30870){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_30870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e30927){if((e30927 instanceof Object)){
var ex__29781__auto__ = e30927;
var statearr_30928_30977 = state_30870;
(statearr_30928_30977[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30978 = state_30870;
state_30870 = G__30978;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29778__auto__ = function(state_30870){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29778__auto____1.call(this,state_30870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29778__auto____0;
cljs$core$async$mix_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29778__auto____1;
return cljs$core$async$mix_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29874__auto__ = (function (){var statearr_30929 = f__29873__auto__.call(null);
(statearr_30929[(6)] = c__29872__auto___30930);

return statearr_30929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___30930,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30980 = arguments.length;
switch (G__30980) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__30984 = arguments.length;
switch (G__30984) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__30982_SHARP_){
if(cljs.core.truth_(p1__30982_SHARP_.call(null,topic))){
return p1__30982_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30985 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30986){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30986 = meta30986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30987,meta30986__$1){
var self__ = this;
var _30987__$1 = this;
return (new cljs.core.async.t_cljs$core$async30985(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30986__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30987){
var self__ = this;
var _30987__$1 = this;
return self__.meta30986;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30986","meta30986",-553279352,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30985";

cljs.core.async.t_cljs$core$async30985.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async30985");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30985.
 */
cljs.core.async.__GT_t_cljs$core$async30985 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30986){
return (new cljs.core.async.t_cljs$core$async30985(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30986));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30985(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29872__auto___31105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31105,mults,ensure_mult,p){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31105,mults,ensure_mult,p){
return (function (state_31059){
var state_val_31060 = (state_31059[(1)]);
if((state_val_31060 === (7))){
var inst_31055 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
var statearr_31061_31106 = state_31059__$1;
(statearr_31061_31106[(2)] = inst_31055);

(statearr_31061_31106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (20))){
var state_31059__$1 = state_31059;
var statearr_31062_31107 = state_31059__$1;
(statearr_31062_31107[(2)] = null);

(statearr_31062_31107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (1))){
var state_31059__$1 = state_31059;
var statearr_31063_31108 = state_31059__$1;
(statearr_31063_31108[(2)] = null);

(statearr_31063_31108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (24))){
var inst_31038 = (state_31059[(7)]);
var inst_31047 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31038);
var state_31059__$1 = state_31059;
var statearr_31064_31109 = state_31059__$1;
(statearr_31064_31109[(2)] = inst_31047);

(statearr_31064_31109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (4))){
var inst_30990 = (state_31059[(8)]);
var inst_30990__$1 = (state_31059[(2)]);
var inst_30991 = (inst_30990__$1 == null);
var state_31059__$1 = (function (){var statearr_31065 = state_31059;
(statearr_31065[(8)] = inst_30990__$1);

return statearr_31065;
})();
if(cljs.core.truth_(inst_30991)){
var statearr_31066_31110 = state_31059__$1;
(statearr_31066_31110[(1)] = (5));

} else {
var statearr_31067_31111 = state_31059__$1;
(statearr_31067_31111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (15))){
var inst_31032 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
var statearr_31068_31112 = state_31059__$1;
(statearr_31068_31112[(2)] = inst_31032);

(statearr_31068_31112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (21))){
var inst_31052 = (state_31059[(2)]);
var state_31059__$1 = (function (){var statearr_31069 = state_31059;
(statearr_31069[(9)] = inst_31052);

return statearr_31069;
})();
var statearr_31070_31113 = state_31059__$1;
(statearr_31070_31113[(2)] = null);

(statearr_31070_31113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (13))){
var inst_31014 = (state_31059[(10)]);
var inst_31016 = cljs.core.chunked_seq_QMARK_.call(null,inst_31014);
var state_31059__$1 = state_31059;
if(inst_31016){
var statearr_31071_31114 = state_31059__$1;
(statearr_31071_31114[(1)] = (16));

} else {
var statearr_31072_31115 = state_31059__$1;
(statearr_31072_31115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (22))){
var inst_31044 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
if(cljs.core.truth_(inst_31044)){
var statearr_31073_31116 = state_31059__$1;
(statearr_31073_31116[(1)] = (23));

} else {
var statearr_31074_31117 = state_31059__$1;
(statearr_31074_31117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (6))){
var inst_30990 = (state_31059[(8)]);
var inst_31038 = (state_31059[(7)]);
var inst_31040 = (state_31059[(11)]);
var inst_31038__$1 = topic_fn.call(null,inst_30990);
var inst_31039 = cljs.core.deref.call(null,mults);
var inst_31040__$1 = cljs.core.get.call(null,inst_31039,inst_31038__$1);
var state_31059__$1 = (function (){var statearr_31075 = state_31059;
(statearr_31075[(7)] = inst_31038__$1);

(statearr_31075[(11)] = inst_31040__$1);

return statearr_31075;
})();
if(cljs.core.truth_(inst_31040__$1)){
var statearr_31076_31118 = state_31059__$1;
(statearr_31076_31118[(1)] = (19));

} else {
var statearr_31077_31119 = state_31059__$1;
(statearr_31077_31119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (25))){
var inst_31049 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
var statearr_31078_31120 = state_31059__$1;
(statearr_31078_31120[(2)] = inst_31049);

(statearr_31078_31120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (17))){
var inst_31014 = (state_31059[(10)]);
var inst_31023 = cljs.core.first.call(null,inst_31014);
var inst_31024 = cljs.core.async.muxch_STAR_.call(null,inst_31023);
var inst_31025 = cljs.core.async.close_BANG_.call(null,inst_31024);
var inst_31026 = cljs.core.next.call(null,inst_31014);
var inst_31000 = inst_31026;
var inst_31001 = null;
var inst_31002 = (0);
var inst_31003 = (0);
var state_31059__$1 = (function (){var statearr_31079 = state_31059;
(statearr_31079[(12)] = inst_31002);

(statearr_31079[(13)] = inst_31000);

(statearr_31079[(14)] = inst_31025);

(statearr_31079[(15)] = inst_31001);

(statearr_31079[(16)] = inst_31003);

return statearr_31079;
})();
var statearr_31080_31121 = state_31059__$1;
(statearr_31080_31121[(2)] = null);

(statearr_31080_31121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (3))){
var inst_31057 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31059__$1,inst_31057);
} else {
if((state_val_31060 === (12))){
var inst_31034 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
var statearr_31081_31122 = state_31059__$1;
(statearr_31081_31122[(2)] = inst_31034);

(statearr_31081_31122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (2))){
var state_31059__$1 = state_31059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31059__$1,(4),ch);
} else {
if((state_val_31060 === (23))){
var state_31059__$1 = state_31059;
var statearr_31082_31123 = state_31059__$1;
(statearr_31082_31123[(2)] = null);

(statearr_31082_31123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (19))){
var inst_30990 = (state_31059[(8)]);
var inst_31040 = (state_31059[(11)]);
var inst_31042 = cljs.core.async.muxch_STAR_.call(null,inst_31040);
var state_31059__$1 = state_31059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31059__$1,(22),inst_31042,inst_30990);
} else {
if((state_val_31060 === (11))){
var inst_31014 = (state_31059[(10)]);
var inst_31000 = (state_31059[(13)]);
var inst_31014__$1 = cljs.core.seq.call(null,inst_31000);
var state_31059__$1 = (function (){var statearr_31083 = state_31059;
(statearr_31083[(10)] = inst_31014__$1);

return statearr_31083;
})();
if(inst_31014__$1){
var statearr_31084_31124 = state_31059__$1;
(statearr_31084_31124[(1)] = (13));

} else {
var statearr_31085_31125 = state_31059__$1;
(statearr_31085_31125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (9))){
var inst_31036 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
var statearr_31086_31126 = state_31059__$1;
(statearr_31086_31126[(2)] = inst_31036);

(statearr_31086_31126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (5))){
var inst_30997 = cljs.core.deref.call(null,mults);
var inst_30998 = cljs.core.vals.call(null,inst_30997);
var inst_30999 = cljs.core.seq.call(null,inst_30998);
var inst_31000 = inst_30999;
var inst_31001 = null;
var inst_31002 = (0);
var inst_31003 = (0);
var state_31059__$1 = (function (){var statearr_31087 = state_31059;
(statearr_31087[(12)] = inst_31002);

(statearr_31087[(13)] = inst_31000);

(statearr_31087[(15)] = inst_31001);

(statearr_31087[(16)] = inst_31003);

return statearr_31087;
})();
var statearr_31088_31127 = state_31059__$1;
(statearr_31088_31127[(2)] = null);

(statearr_31088_31127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (14))){
var state_31059__$1 = state_31059;
var statearr_31092_31128 = state_31059__$1;
(statearr_31092_31128[(2)] = null);

(statearr_31092_31128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (16))){
var inst_31014 = (state_31059[(10)]);
var inst_31018 = cljs.core.chunk_first.call(null,inst_31014);
var inst_31019 = cljs.core.chunk_rest.call(null,inst_31014);
var inst_31020 = cljs.core.count.call(null,inst_31018);
var inst_31000 = inst_31019;
var inst_31001 = inst_31018;
var inst_31002 = inst_31020;
var inst_31003 = (0);
var state_31059__$1 = (function (){var statearr_31093 = state_31059;
(statearr_31093[(12)] = inst_31002);

(statearr_31093[(13)] = inst_31000);

(statearr_31093[(15)] = inst_31001);

(statearr_31093[(16)] = inst_31003);

return statearr_31093;
})();
var statearr_31094_31129 = state_31059__$1;
(statearr_31094_31129[(2)] = null);

(statearr_31094_31129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (10))){
var inst_31002 = (state_31059[(12)]);
var inst_31000 = (state_31059[(13)]);
var inst_31001 = (state_31059[(15)]);
var inst_31003 = (state_31059[(16)]);
var inst_31008 = cljs.core._nth.call(null,inst_31001,inst_31003);
var inst_31009 = cljs.core.async.muxch_STAR_.call(null,inst_31008);
var inst_31010 = cljs.core.async.close_BANG_.call(null,inst_31009);
var inst_31011 = (inst_31003 + (1));
var tmp31089 = inst_31002;
var tmp31090 = inst_31000;
var tmp31091 = inst_31001;
var inst_31000__$1 = tmp31090;
var inst_31001__$1 = tmp31091;
var inst_31002__$1 = tmp31089;
var inst_31003__$1 = inst_31011;
var state_31059__$1 = (function (){var statearr_31095 = state_31059;
(statearr_31095[(17)] = inst_31010);

(statearr_31095[(12)] = inst_31002__$1);

(statearr_31095[(13)] = inst_31000__$1);

(statearr_31095[(15)] = inst_31001__$1);

(statearr_31095[(16)] = inst_31003__$1);

return statearr_31095;
})();
var statearr_31096_31130 = state_31059__$1;
(statearr_31096_31130[(2)] = null);

(statearr_31096_31130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (18))){
var inst_31029 = (state_31059[(2)]);
var state_31059__$1 = state_31059;
var statearr_31097_31131 = state_31059__$1;
(statearr_31097_31131[(2)] = inst_31029);

(statearr_31097_31131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31060 === (8))){
var inst_31002 = (state_31059[(12)]);
var inst_31003 = (state_31059[(16)]);
var inst_31005 = (inst_31003 < inst_31002);
var inst_31006 = inst_31005;
var state_31059__$1 = state_31059;
if(cljs.core.truth_(inst_31006)){
var statearr_31098_31132 = state_31059__$1;
(statearr_31098_31132[(1)] = (10));

} else {
var statearr_31099_31133 = state_31059__$1;
(statearr_31099_31133[(1)] = (11));

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
});})(c__29872__auto___31105,mults,ensure_mult,p))
;
return ((function (switch__29777__auto__,c__29872__auto___31105,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31100[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31100[(1)] = (1));

return statearr_31100;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31059){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31101){if((e31101 instanceof Object)){
var ex__29781__auto__ = e31101;
var statearr_31102_31134 = state_31059;
(statearr_31102_31134[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31135 = state_31059;
state_31059 = G__31135;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31105,mults,ensure_mult,p))
})();
var state__29874__auto__ = (function (){var statearr_31103 = f__29873__auto__.call(null);
(statearr_31103[(6)] = c__29872__auto___31105);

return statearr_31103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31105,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31137 = arguments.length;
switch (G__31137) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31140 = arguments.length;
switch (G__31140) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__31143 = arguments.length;
switch (G__31143) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29872__auto___31210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31182){
var state_val_31183 = (state_31182[(1)]);
if((state_val_31183 === (7))){
var state_31182__$1 = state_31182;
var statearr_31184_31211 = state_31182__$1;
(statearr_31184_31211[(2)] = null);

(statearr_31184_31211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (1))){
var state_31182__$1 = state_31182;
var statearr_31185_31212 = state_31182__$1;
(statearr_31185_31212[(2)] = null);

(statearr_31185_31212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (4))){
var inst_31146 = (state_31182[(7)]);
var inst_31148 = (inst_31146 < cnt);
var state_31182__$1 = state_31182;
if(cljs.core.truth_(inst_31148)){
var statearr_31186_31213 = state_31182__$1;
(statearr_31186_31213[(1)] = (6));

} else {
var statearr_31187_31214 = state_31182__$1;
(statearr_31187_31214[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (15))){
var inst_31178 = (state_31182[(2)]);
var state_31182__$1 = state_31182;
var statearr_31188_31215 = state_31182__$1;
(statearr_31188_31215[(2)] = inst_31178);

(statearr_31188_31215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (13))){
var inst_31171 = cljs.core.async.close_BANG_.call(null,out);
var state_31182__$1 = state_31182;
var statearr_31189_31216 = state_31182__$1;
(statearr_31189_31216[(2)] = inst_31171);

(statearr_31189_31216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (6))){
var state_31182__$1 = state_31182;
var statearr_31190_31217 = state_31182__$1;
(statearr_31190_31217[(2)] = null);

(statearr_31190_31217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (3))){
var inst_31180 = (state_31182[(2)]);
var state_31182__$1 = state_31182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31182__$1,inst_31180);
} else {
if((state_val_31183 === (12))){
var inst_31168 = (state_31182[(8)]);
var inst_31168__$1 = (state_31182[(2)]);
var inst_31169 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31168__$1);
var state_31182__$1 = (function (){var statearr_31191 = state_31182;
(statearr_31191[(8)] = inst_31168__$1);

return statearr_31191;
})();
if(cljs.core.truth_(inst_31169)){
var statearr_31192_31218 = state_31182__$1;
(statearr_31192_31218[(1)] = (13));

} else {
var statearr_31193_31219 = state_31182__$1;
(statearr_31193_31219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (2))){
var inst_31145 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31146 = (0);
var state_31182__$1 = (function (){var statearr_31194 = state_31182;
(statearr_31194[(7)] = inst_31146);

(statearr_31194[(9)] = inst_31145);

return statearr_31194;
})();
var statearr_31195_31220 = state_31182__$1;
(statearr_31195_31220[(2)] = null);

(statearr_31195_31220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (11))){
var inst_31146 = (state_31182[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31182,(10),Object,null,(9));
var inst_31155 = chs__$1.call(null,inst_31146);
var inst_31156 = done.call(null,inst_31146);
var inst_31157 = cljs.core.async.take_BANG_.call(null,inst_31155,inst_31156);
var state_31182__$1 = state_31182;
var statearr_31196_31221 = state_31182__$1;
(statearr_31196_31221[(2)] = inst_31157);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31182__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (9))){
var inst_31146 = (state_31182[(7)]);
var inst_31159 = (state_31182[(2)]);
var inst_31160 = (inst_31146 + (1));
var inst_31146__$1 = inst_31160;
var state_31182__$1 = (function (){var statearr_31197 = state_31182;
(statearr_31197[(10)] = inst_31159);

(statearr_31197[(7)] = inst_31146__$1);

return statearr_31197;
})();
var statearr_31198_31222 = state_31182__$1;
(statearr_31198_31222[(2)] = null);

(statearr_31198_31222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (5))){
var inst_31166 = (state_31182[(2)]);
var state_31182__$1 = (function (){var statearr_31199 = state_31182;
(statearr_31199[(11)] = inst_31166);

return statearr_31199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31182__$1,(12),dchan);
} else {
if((state_val_31183 === (14))){
var inst_31168 = (state_31182[(8)]);
var inst_31173 = cljs.core.apply.call(null,f,inst_31168);
var state_31182__$1 = state_31182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31182__$1,(16),out,inst_31173);
} else {
if((state_val_31183 === (16))){
var inst_31175 = (state_31182[(2)]);
var state_31182__$1 = (function (){var statearr_31200 = state_31182;
(statearr_31200[(12)] = inst_31175);

return statearr_31200;
})();
var statearr_31201_31223 = state_31182__$1;
(statearr_31201_31223[(2)] = null);

(statearr_31201_31223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (10))){
var inst_31150 = (state_31182[(2)]);
var inst_31151 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31182__$1 = (function (){var statearr_31202 = state_31182;
(statearr_31202[(13)] = inst_31150);

return statearr_31202;
})();
var statearr_31203_31224 = state_31182__$1;
(statearr_31203_31224[(2)] = inst_31151);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31182__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (8))){
var inst_31164 = (state_31182[(2)]);
var state_31182__$1 = state_31182;
var statearr_31204_31225 = state_31182__$1;
(statearr_31204_31225[(2)] = inst_31164);

(statearr_31204_31225[(1)] = (5));


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
});})(c__29872__auto___31210,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29777__auto__,c__29872__auto___31210,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31205[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31205[(1)] = (1));

return statearr_31205;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31182){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31206){if((e31206 instanceof Object)){
var ex__29781__auto__ = e31206;
var statearr_31207_31226 = state_31182;
(statearr_31207_31226[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31227 = state_31182;
state_31182 = G__31227;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31210,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29874__auto__ = (function (){var statearr_31208 = f__29873__auto__.call(null);
(statearr_31208[(6)] = c__29872__auto___31210);

return statearr_31208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31210,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31230 = arguments.length;
switch (G__31230) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29872__auto___31284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31284,out){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31284,out){
return (function (state_31262){
var state_val_31263 = (state_31262[(1)]);
if((state_val_31263 === (7))){
var inst_31241 = (state_31262[(7)]);
var inst_31242 = (state_31262[(8)]);
var inst_31241__$1 = (state_31262[(2)]);
var inst_31242__$1 = cljs.core.nth.call(null,inst_31241__$1,(0),null);
var inst_31243 = cljs.core.nth.call(null,inst_31241__$1,(1),null);
var inst_31244 = (inst_31242__$1 == null);
var state_31262__$1 = (function (){var statearr_31264 = state_31262;
(statearr_31264[(7)] = inst_31241__$1);

(statearr_31264[(9)] = inst_31243);

(statearr_31264[(8)] = inst_31242__$1);

return statearr_31264;
})();
if(cljs.core.truth_(inst_31244)){
var statearr_31265_31285 = state_31262__$1;
(statearr_31265_31285[(1)] = (8));

} else {
var statearr_31266_31286 = state_31262__$1;
(statearr_31266_31286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (1))){
var inst_31231 = cljs.core.vec.call(null,chs);
var inst_31232 = inst_31231;
var state_31262__$1 = (function (){var statearr_31267 = state_31262;
(statearr_31267[(10)] = inst_31232);

return statearr_31267;
})();
var statearr_31268_31287 = state_31262__$1;
(statearr_31268_31287[(2)] = null);

(statearr_31268_31287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (4))){
var inst_31232 = (state_31262[(10)]);
var state_31262__$1 = state_31262;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31262__$1,(7),inst_31232);
} else {
if((state_val_31263 === (6))){
var inst_31258 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31269_31288 = state_31262__$1;
(statearr_31269_31288[(2)] = inst_31258);

(statearr_31269_31288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (3))){
var inst_31260 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31262__$1,inst_31260);
} else {
if((state_val_31263 === (2))){
var inst_31232 = (state_31262[(10)]);
var inst_31234 = cljs.core.count.call(null,inst_31232);
var inst_31235 = (inst_31234 > (0));
var state_31262__$1 = state_31262;
if(cljs.core.truth_(inst_31235)){
var statearr_31271_31289 = state_31262__$1;
(statearr_31271_31289[(1)] = (4));

} else {
var statearr_31272_31290 = state_31262__$1;
(statearr_31272_31290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (11))){
var inst_31232 = (state_31262[(10)]);
var inst_31251 = (state_31262[(2)]);
var tmp31270 = inst_31232;
var inst_31232__$1 = tmp31270;
var state_31262__$1 = (function (){var statearr_31273 = state_31262;
(statearr_31273[(10)] = inst_31232__$1);

(statearr_31273[(11)] = inst_31251);

return statearr_31273;
})();
var statearr_31274_31291 = state_31262__$1;
(statearr_31274_31291[(2)] = null);

(statearr_31274_31291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (9))){
var inst_31242 = (state_31262[(8)]);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31262__$1,(11),out,inst_31242);
} else {
if((state_val_31263 === (5))){
var inst_31256 = cljs.core.async.close_BANG_.call(null,out);
var state_31262__$1 = state_31262;
var statearr_31275_31292 = state_31262__$1;
(statearr_31275_31292[(2)] = inst_31256);

(statearr_31275_31292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (10))){
var inst_31254 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31276_31293 = state_31262__$1;
(statearr_31276_31293[(2)] = inst_31254);

(statearr_31276_31293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (8))){
var inst_31232 = (state_31262[(10)]);
var inst_31241 = (state_31262[(7)]);
var inst_31243 = (state_31262[(9)]);
var inst_31242 = (state_31262[(8)]);
var inst_31246 = (function (){var cs = inst_31232;
var vec__31237 = inst_31241;
var v = inst_31242;
var c = inst_31243;
return ((function (cs,vec__31237,v,c,inst_31232,inst_31241,inst_31243,inst_31242,state_val_31263,c__29872__auto___31284,out){
return (function (p1__31228_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31228_SHARP_);
});
;})(cs,vec__31237,v,c,inst_31232,inst_31241,inst_31243,inst_31242,state_val_31263,c__29872__auto___31284,out))
})();
var inst_31247 = cljs.core.filterv.call(null,inst_31246,inst_31232);
var inst_31232__$1 = inst_31247;
var state_31262__$1 = (function (){var statearr_31277 = state_31262;
(statearr_31277[(10)] = inst_31232__$1);

return statearr_31277;
})();
var statearr_31278_31294 = state_31262__$1;
(statearr_31278_31294[(2)] = null);

(statearr_31278_31294[(1)] = (2));


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
});})(c__29872__auto___31284,out))
;
return ((function (switch__29777__auto__,c__29872__auto___31284,out){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31279 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31279[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31279[(1)] = (1));

return statearr_31279;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31262){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31280){if((e31280 instanceof Object)){
var ex__29781__auto__ = e31280;
var statearr_31281_31295 = state_31262;
(statearr_31281_31295[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31296 = state_31262;
state_31262 = G__31296;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31284,out))
})();
var state__29874__auto__ = (function (){var statearr_31282 = f__29873__auto__.call(null);
(statearr_31282[(6)] = c__29872__auto___31284);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31284,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31298 = arguments.length;
switch (G__31298) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29872__auto___31343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31343,out){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31343,out){
return (function (state_31322){
var state_val_31323 = (state_31322[(1)]);
if((state_val_31323 === (7))){
var inst_31304 = (state_31322[(7)]);
var inst_31304__$1 = (state_31322[(2)]);
var inst_31305 = (inst_31304__$1 == null);
var inst_31306 = cljs.core.not.call(null,inst_31305);
var state_31322__$1 = (function (){var statearr_31324 = state_31322;
(statearr_31324[(7)] = inst_31304__$1);

return statearr_31324;
})();
if(inst_31306){
var statearr_31325_31344 = state_31322__$1;
(statearr_31325_31344[(1)] = (8));

} else {
var statearr_31326_31345 = state_31322__$1;
(statearr_31326_31345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (1))){
var inst_31299 = (0);
var state_31322__$1 = (function (){var statearr_31327 = state_31322;
(statearr_31327[(8)] = inst_31299);

return statearr_31327;
})();
var statearr_31328_31346 = state_31322__$1;
(statearr_31328_31346[(2)] = null);

(statearr_31328_31346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (4))){
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31322__$1,(7),ch);
} else {
if((state_val_31323 === (6))){
var inst_31317 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31329_31347 = state_31322__$1;
(statearr_31329_31347[(2)] = inst_31317);

(statearr_31329_31347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (3))){
var inst_31319 = (state_31322[(2)]);
var inst_31320 = cljs.core.async.close_BANG_.call(null,out);
var state_31322__$1 = (function (){var statearr_31330 = state_31322;
(statearr_31330[(9)] = inst_31319);

return statearr_31330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31322__$1,inst_31320);
} else {
if((state_val_31323 === (2))){
var inst_31299 = (state_31322[(8)]);
var inst_31301 = (inst_31299 < n);
var state_31322__$1 = state_31322;
if(cljs.core.truth_(inst_31301)){
var statearr_31331_31348 = state_31322__$1;
(statearr_31331_31348[(1)] = (4));

} else {
var statearr_31332_31349 = state_31322__$1;
(statearr_31332_31349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (11))){
var inst_31299 = (state_31322[(8)]);
var inst_31309 = (state_31322[(2)]);
var inst_31310 = (inst_31299 + (1));
var inst_31299__$1 = inst_31310;
var state_31322__$1 = (function (){var statearr_31333 = state_31322;
(statearr_31333[(10)] = inst_31309);

(statearr_31333[(8)] = inst_31299__$1);

return statearr_31333;
})();
var statearr_31334_31350 = state_31322__$1;
(statearr_31334_31350[(2)] = null);

(statearr_31334_31350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (9))){
var state_31322__$1 = state_31322;
var statearr_31335_31351 = state_31322__$1;
(statearr_31335_31351[(2)] = null);

(statearr_31335_31351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (5))){
var state_31322__$1 = state_31322;
var statearr_31336_31352 = state_31322__$1;
(statearr_31336_31352[(2)] = null);

(statearr_31336_31352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (10))){
var inst_31314 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31337_31353 = state_31322__$1;
(statearr_31337_31353[(2)] = inst_31314);

(statearr_31337_31353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (8))){
var inst_31304 = (state_31322[(7)]);
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31322__$1,(11),out,inst_31304);
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
});})(c__29872__auto___31343,out))
;
return ((function (switch__29777__auto__,c__29872__auto___31343,out){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31322){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31339){if((e31339 instanceof Object)){
var ex__29781__auto__ = e31339;
var statearr_31340_31354 = state_31322;
(statearr_31340_31354[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31355 = state_31322;
state_31322 = G__31355;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31343,out))
})();
var state__29874__auto__ = (function (){var statearr_31341 = f__29873__auto__.call(null);
(statearr_31341[(6)] = c__29872__auto___31343);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31343,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31357 = (function (f,ch,meta31358){
this.f = f;
this.ch = ch;
this.meta31358 = meta31358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31359,meta31358__$1){
var self__ = this;
var _31359__$1 = this;
return (new cljs.core.async.t_cljs$core$async31357(self__.f,self__.ch,meta31358__$1));
});

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31359){
var self__ = this;
var _31359__$1 = this;
return self__.meta31358;
});

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31360 = (function (f,ch,meta31358,_,fn1,meta31361){
this.f = f;
this.ch = ch;
this.meta31358 = meta31358;
this._ = _;
this.fn1 = fn1;
this.meta31361 = meta31361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31362,meta31361__$1){
var self__ = this;
var _31362__$1 = this;
return (new cljs.core.async.t_cljs$core$async31360(self__.f,self__.ch,self__.meta31358,self__._,self__.fn1,meta31361__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31362){
var self__ = this;
var _31362__$1 = this;
return self__.meta31361;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31356_SHARP_){
return f1.call(null,(((p1__31356_SHARP_ == null))?null:self__.f.call(null,p1__31356_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31360.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31358","meta31358",1834870815,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31357","cljs.core.async/t_cljs$core$async31357",395523797,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31361","meta31361",-1048240088,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31360";

cljs.core.async.t_cljs$core$async31360.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31360");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31360.
 */
cljs.core.async.__GT_t_cljs$core$async31360 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31360(f__$1,ch__$1,meta31358__$1,___$2,fn1__$1,meta31361){
return (new cljs.core.async.t_cljs$core$async31360(f__$1,ch__$1,meta31358__$1,___$2,fn1__$1,meta31361));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31360(self__.f,self__.ch,self__.meta31358,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31358","meta31358",1834870815,null)], null);
});

cljs.core.async.t_cljs$core$async31357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31357";

cljs.core.async.t_cljs$core$async31357.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31357");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31357.
 */
cljs.core.async.__GT_t_cljs$core$async31357 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31357(f__$1,ch__$1,meta31358){
return (new cljs.core.async.t_cljs$core$async31357(f__$1,ch__$1,meta31358));
});

}

return (new cljs.core.async.t_cljs$core$async31357(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31363 = (function (f,ch,meta31364){
this.f = f;
this.ch = ch;
this.meta31364 = meta31364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31365,meta31364__$1){
var self__ = this;
var _31365__$1 = this;
return (new cljs.core.async.t_cljs$core$async31363(self__.f,self__.ch,meta31364__$1));
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31365){
var self__ = this;
var _31365__$1 = this;
return self__.meta31364;
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31364","meta31364",-396727719,null)], null);
});

cljs.core.async.t_cljs$core$async31363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31363";

cljs.core.async.t_cljs$core$async31363.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31363");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31363.
 */
cljs.core.async.__GT_t_cljs$core$async31363 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31363(f__$1,ch__$1,meta31364){
return (new cljs.core.async.t_cljs$core$async31363(f__$1,ch__$1,meta31364));
});

}

return (new cljs.core.async.t_cljs$core$async31363(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31366 = (function (p,ch,meta31367){
this.p = p;
this.ch = ch;
this.meta31367 = meta31367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31368,meta31367__$1){
var self__ = this;
var _31368__$1 = this;
return (new cljs.core.async.t_cljs$core$async31366(self__.p,self__.ch,meta31367__$1));
});

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31368){
var self__ = this;
var _31368__$1 = this;
return self__.meta31367;
});

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31367","meta31367",-159803645,null)], null);
});

cljs.core.async.t_cljs$core$async31366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31366";

cljs.core.async.t_cljs$core$async31366.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31366");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31366.
 */
cljs.core.async.__GT_t_cljs$core$async31366 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31366(p__$1,ch__$1,meta31367){
return (new cljs.core.async.t_cljs$core$async31366(p__$1,ch__$1,meta31367));
});

}

return (new cljs.core.async.t_cljs$core$async31366(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31370 = arguments.length;
switch (G__31370) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29872__auto___31410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31410,out){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31410,out){
return (function (state_31391){
var state_val_31392 = (state_31391[(1)]);
if((state_val_31392 === (7))){
var inst_31387 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
var statearr_31393_31411 = state_31391__$1;
(statearr_31393_31411[(2)] = inst_31387);

(statearr_31393_31411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (1))){
var state_31391__$1 = state_31391;
var statearr_31394_31412 = state_31391__$1;
(statearr_31394_31412[(2)] = null);

(statearr_31394_31412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (4))){
var inst_31373 = (state_31391[(7)]);
var inst_31373__$1 = (state_31391[(2)]);
var inst_31374 = (inst_31373__$1 == null);
var state_31391__$1 = (function (){var statearr_31395 = state_31391;
(statearr_31395[(7)] = inst_31373__$1);

return statearr_31395;
})();
if(cljs.core.truth_(inst_31374)){
var statearr_31396_31413 = state_31391__$1;
(statearr_31396_31413[(1)] = (5));

} else {
var statearr_31397_31414 = state_31391__$1;
(statearr_31397_31414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (6))){
var inst_31373 = (state_31391[(7)]);
var inst_31378 = p.call(null,inst_31373);
var state_31391__$1 = state_31391;
if(cljs.core.truth_(inst_31378)){
var statearr_31398_31415 = state_31391__$1;
(statearr_31398_31415[(1)] = (8));

} else {
var statearr_31399_31416 = state_31391__$1;
(statearr_31399_31416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (3))){
var inst_31389 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31391__$1,inst_31389);
} else {
if((state_val_31392 === (2))){
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31391__$1,(4),ch);
} else {
if((state_val_31392 === (11))){
var inst_31381 = (state_31391[(2)]);
var state_31391__$1 = state_31391;
var statearr_31400_31417 = state_31391__$1;
(statearr_31400_31417[(2)] = inst_31381);

(statearr_31400_31417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (9))){
var state_31391__$1 = state_31391;
var statearr_31401_31418 = state_31391__$1;
(statearr_31401_31418[(2)] = null);

(statearr_31401_31418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (5))){
var inst_31376 = cljs.core.async.close_BANG_.call(null,out);
var state_31391__$1 = state_31391;
var statearr_31402_31419 = state_31391__$1;
(statearr_31402_31419[(2)] = inst_31376);

(statearr_31402_31419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (10))){
var inst_31384 = (state_31391[(2)]);
var state_31391__$1 = (function (){var statearr_31403 = state_31391;
(statearr_31403[(8)] = inst_31384);

return statearr_31403;
})();
var statearr_31404_31420 = state_31391__$1;
(statearr_31404_31420[(2)] = null);

(statearr_31404_31420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31392 === (8))){
var inst_31373 = (state_31391[(7)]);
var state_31391__$1 = state_31391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31391__$1,(11),out,inst_31373);
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
});})(c__29872__auto___31410,out))
;
return ((function (switch__29777__auto__,c__29872__auto___31410,out){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31405 = [null,null,null,null,null,null,null,null,null];
(statearr_31405[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31405[(1)] = (1));

return statearr_31405;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31391){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31406){if((e31406 instanceof Object)){
var ex__29781__auto__ = e31406;
var statearr_31407_31421 = state_31391;
(statearr_31407_31421[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31422 = state_31391;
state_31391 = G__31422;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31410,out))
})();
var state__29874__auto__ = (function (){var statearr_31408 = f__29873__auto__.call(null);
(statearr_31408[(6)] = c__29872__auto___31410);

return statearr_31408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31410,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31424 = arguments.length;
switch (G__31424) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__){
return (function (state_31487){
var state_val_31488 = (state_31487[(1)]);
if((state_val_31488 === (7))){
var inst_31483 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31489_31527 = state_31487__$1;
(statearr_31489_31527[(2)] = inst_31483);

(statearr_31489_31527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (20))){
var inst_31453 = (state_31487[(7)]);
var inst_31464 = (state_31487[(2)]);
var inst_31465 = cljs.core.next.call(null,inst_31453);
var inst_31439 = inst_31465;
var inst_31440 = null;
var inst_31441 = (0);
var inst_31442 = (0);
var state_31487__$1 = (function (){var statearr_31490 = state_31487;
(statearr_31490[(8)] = inst_31439);

(statearr_31490[(9)] = inst_31464);

(statearr_31490[(10)] = inst_31440);

(statearr_31490[(11)] = inst_31442);

(statearr_31490[(12)] = inst_31441);

return statearr_31490;
})();
var statearr_31491_31528 = state_31487__$1;
(statearr_31491_31528[(2)] = null);

(statearr_31491_31528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (1))){
var state_31487__$1 = state_31487;
var statearr_31492_31529 = state_31487__$1;
(statearr_31492_31529[(2)] = null);

(statearr_31492_31529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (4))){
var inst_31428 = (state_31487[(13)]);
var inst_31428__$1 = (state_31487[(2)]);
var inst_31429 = (inst_31428__$1 == null);
var state_31487__$1 = (function (){var statearr_31493 = state_31487;
(statearr_31493[(13)] = inst_31428__$1);

return statearr_31493;
})();
if(cljs.core.truth_(inst_31429)){
var statearr_31494_31530 = state_31487__$1;
(statearr_31494_31530[(1)] = (5));

} else {
var statearr_31495_31531 = state_31487__$1;
(statearr_31495_31531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (15))){
var state_31487__$1 = state_31487;
var statearr_31499_31532 = state_31487__$1;
(statearr_31499_31532[(2)] = null);

(statearr_31499_31532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (21))){
var state_31487__$1 = state_31487;
var statearr_31500_31533 = state_31487__$1;
(statearr_31500_31533[(2)] = null);

(statearr_31500_31533[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (13))){
var inst_31439 = (state_31487[(8)]);
var inst_31440 = (state_31487[(10)]);
var inst_31442 = (state_31487[(11)]);
var inst_31441 = (state_31487[(12)]);
var inst_31449 = (state_31487[(2)]);
var inst_31450 = (inst_31442 + (1));
var tmp31496 = inst_31439;
var tmp31497 = inst_31440;
var tmp31498 = inst_31441;
var inst_31439__$1 = tmp31496;
var inst_31440__$1 = tmp31497;
var inst_31441__$1 = tmp31498;
var inst_31442__$1 = inst_31450;
var state_31487__$1 = (function (){var statearr_31501 = state_31487;
(statearr_31501[(8)] = inst_31439__$1);

(statearr_31501[(10)] = inst_31440__$1);

(statearr_31501[(11)] = inst_31442__$1);

(statearr_31501[(12)] = inst_31441__$1);

(statearr_31501[(14)] = inst_31449);

return statearr_31501;
})();
var statearr_31502_31534 = state_31487__$1;
(statearr_31502_31534[(2)] = null);

(statearr_31502_31534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (22))){
var state_31487__$1 = state_31487;
var statearr_31503_31535 = state_31487__$1;
(statearr_31503_31535[(2)] = null);

(statearr_31503_31535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (6))){
var inst_31428 = (state_31487[(13)]);
var inst_31437 = f.call(null,inst_31428);
var inst_31438 = cljs.core.seq.call(null,inst_31437);
var inst_31439 = inst_31438;
var inst_31440 = null;
var inst_31441 = (0);
var inst_31442 = (0);
var state_31487__$1 = (function (){var statearr_31504 = state_31487;
(statearr_31504[(8)] = inst_31439);

(statearr_31504[(10)] = inst_31440);

(statearr_31504[(11)] = inst_31442);

(statearr_31504[(12)] = inst_31441);

return statearr_31504;
})();
var statearr_31505_31536 = state_31487__$1;
(statearr_31505_31536[(2)] = null);

(statearr_31505_31536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (17))){
var inst_31453 = (state_31487[(7)]);
var inst_31457 = cljs.core.chunk_first.call(null,inst_31453);
var inst_31458 = cljs.core.chunk_rest.call(null,inst_31453);
var inst_31459 = cljs.core.count.call(null,inst_31457);
var inst_31439 = inst_31458;
var inst_31440 = inst_31457;
var inst_31441 = inst_31459;
var inst_31442 = (0);
var state_31487__$1 = (function (){var statearr_31506 = state_31487;
(statearr_31506[(8)] = inst_31439);

(statearr_31506[(10)] = inst_31440);

(statearr_31506[(11)] = inst_31442);

(statearr_31506[(12)] = inst_31441);

return statearr_31506;
})();
var statearr_31507_31537 = state_31487__$1;
(statearr_31507_31537[(2)] = null);

(statearr_31507_31537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (3))){
var inst_31485 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31487__$1,inst_31485);
} else {
if((state_val_31488 === (12))){
var inst_31473 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31508_31538 = state_31487__$1;
(statearr_31508_31538[(2)] = inst_31473);

(statearr_31508_31538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (2))){
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31487__$1,(4),in$);
} else {
if((state_val_31488 === (23))){
var inst_31481 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31509_31539 = state_31487__$1;
(statearr_31509_31539[(2)] = inst_31481);

(statearr_31509_31539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (19))){
var inst_31468 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31510_31540 = state_31487__$1;
(statearr_31510_31540[(2)] = inst_31468);

(statearr_31510_31540[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (11))){
var inst_31453 = (state_31487[(7)]);
var inst_31439 = (state_31487[(8)]);
var inst_31453__$1 = cljs.core.seq.call(null,inst_31439);
var state_31487__$1 = (function (){var statearr_31511 = state_31487;
(statearr_31511[(7)] = inst_31453__$1);

return statearr_31511;
})();
if(inst_31453__$1){
var statearr_31512_31541 = state_31487__$1;
(statearr_31512_31541[(1)] = (14));

} else {
var statearr_31513_31542 = state_31487__$1;
(statearr_31513_31542[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (9))){
var inst_31475 = (state_31487[(2)]);
var inst_31476 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31487__$1 = (function (){var statearr_31514 = state_31487;
(statearr_31514[(15)] = inst_31475);

return statearr_31514;
})();
if(cljs.core.truth_(inst_31476)){
var statearr_31515_31543 = state_31487__$1;
(statearr_31515_31543[(1)] = (21));

} else {
var statearr_31516_31544 = state_31487__$1;
(statearr_31516_31544[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (5))){
var inst_31431 = cljs.core.async.close_BANG_.call(null,out);
var state_31487__$1 = state_31487;
var statearr_31517_31545 = state_31487__$1;
(statearr_31517_31545[(2)] = inst_31431);

(statearr_31517_31545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (14))){
var inst_31453 = (state_31487[(7)]);
var inst_31455 = cljs.core.chunked_seq_QMARK_.call(null,inst_31453);
var state_31487__$1 = state_31487;
if(inst_31455){
var statearr_31518_31546 = state_31487__$1;
(statearr_31518_31546[(1)] = (17));

} else {
var statearr_31519_31547 = state_31487__$1;
(statearr_31519_31547[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (16))){
var inst_31471 = (state_31487[(2)]);
var state_31487__$1 = state_31487;
var statearr_31520_31548 = state_31487__$1;
(statearr_31520_31548[(2)] = inst_31471);

(statearr_31520_31548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (10))){
var inst_31440 = (state_31487[(10)]);
var inst_31442 = (state_31487[(11)]);
var inst_31447 = cljs.core._nth.call(null,inst_31440,inst_31442);
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31487__$1,(13),out,inst_31447);
} else {
if((state_val_31488 === (18))){
var inst_31453 = (state_31487[(7)]);
var inst_31462 = cljs.core.first.call(null,inst_31453);
var state_31487__$1 = state_31487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31487__$1,(20),out,inst_31462);
} else {
if((state_val_31488 === (8))){
var inst_31442 = (state_31487[(11)]);
var inst_31441 = (state_31487[(12)]);
var inst_31444 = (inst_31442 < inst_31441);
var inst_31445 = inst_31444;
var state_31487__$1 = state_31487;
if(cljs.core.truth_(inst_31445)){
var statearr_31521_31549 = state_31487__$1;
(statearr_31521_31549[(1)] = (10));

} else {
var statearr_31522_31550 = state_31487__$1;
(statearr_31522_31550[(1)] = (11));

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
});})(c__29872__auto__))
;
return ((function (switch__29777__auto__,c__29872__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29778__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29778__auto____0 = (function (){
var statearr_31523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31523[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29778__auto__);

(statearr_31523[(1)] = (1));

return statearr_31523;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29778__auto____1 = (function (state_31487){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31524){if((e31524 instanceof Object)){
var ex__29781__auto__ = e31524;
var statearr_31525_31551 = state_31487;
(statearr_31525_31551[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31552 = state_31487;
state_31487 = G__31552;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29778__auto__ = function(state_31487){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29778__auto____1.call(this,state_31487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29778__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29778__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__))
})();
var state__29874__auto__ = (function (){var statearr_31526 = f__29873__auto__.call(null);
(statearr_31526[(6)] = c__29872__auto__);

return statearr_31526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__))
);

return c__29872__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31554 = arguments.length;
switch (G__31554) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31557 = arguments.length;
switch (G__31557) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31560 = arguments.length;
switch (G__31560) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29872__auto___31607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31607,out){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31607,out){
return (function (state_31584){
var state_val_31585 = (state_31584[(1)]);
if((state_val_31585 === (7))){
var inst_31579 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31586_31608 = state_31584__$1;
(statearr_31586_31608[(2)] = inst_31579);

(statearr_31586_31608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (1))){
var inst_31561 = null;
var state_31584__$1 = (function (){var statearr_31587 = state_31584;
(statearr_31587[(7)] = inst_31561);

return statearr_31587;
})();
var statearr_31588_31609 = state_31584__$1;
(statearr_31588_31609[(2)] = null);

(statearr_31588_31609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (4))){
var inst_31564 = (state_31584[(8)]);
var inst_31564__$1 = (state_31584[(2)]);
var inst_31565 = (inst_31564__$1 == null);
var inst_31566 = cljs.core.not.call(null,inst_31565);
var state_31584__$1 = (function (){var statearr_31589 = state_31584;
(statearr_31589[(8)] = inst_31564__$1);

return statearr_31589;
})();
if(inst_31566){
var statearr_31590_31610 = state_31584__$1;
(statearr_31590_31610[(1)] = (5));

} else {
var statearr_31591_31611 = state_31584__$1;
(statearr_31591_31611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (6))){
var state_31584__$1 = state_31584;
var statearr_31592_31612 = state_31584__$1;
(statearr_31592_31612[(2)] = null);

(statearr_31592_31612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (3))){
var inst_31581 = (state_31584[(2)]);
var inst_31582 = cljs.core.async.close_BANG_.call(null,out);
var state_31584__$1 = (function (){var statearr_31593 = state_31584;
(statearr_31593[(9)] = inst_31581);

return statearr_31593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31584__$1,inst_31582);
} else {
if((state_val_31585 === (2))){
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31584__$1,(4),ch);
} else {
if((state_val_31585 === (11))){
var inst_31564 = (state_31584[(8)]);
var inst_31573 = (state_31584[(2)]);
var inst_31561 = inst_31564;
var state_31584__$1 = (function (){var statearr_31594 = state_31584;
(statearr_31594[(7)] = inst_31561);

(statearr_31594[(10)] = inst_31573);

return statearr_31594;
})();
var statearr_31595_31613 = state_31584__$1;
(statearr_31595_31613[(2)] = null);

(statearr_31595_31613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (9))){
var inst_31564 = (state_31584[(8)]);
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31584__$1,(11),out,inst_31564);
} else {
if((state_val_31585 === (5))){
var inst_31561 = (state_31584[(7)]);
var inst_31564 = (state_31584[(8)]);
var inst_31568 = cljs.core._EQ_.call(null,inst_31564,inst_31561);
var state_31584__$1 = state_31584;
if(inst_31568){
var statearr_31597_31614 = state_31584__$1;
(statearr_31597_31614[(1)] = (8));

} else {
var statearr_31598_31615 = state_31584__$1;
(statearr_31598_31615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (10))){
var inst_31576 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
var statearr_31599_31616 = state_31584__$1;
(statearr_31599_31616[(2)] = inst_31576);

(statearr_31599_31616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31585 === (8))){
var inst_31561 = (state_31584[(7)]);
var tmp31596 = inst_31561;
var inst_31561__$1 = tmp31596;
var state_31584__$1 = (function (){var statearr_31600 = state_31584;
(statearr_31600[(7)] = inst_31561__$1);

return statearr_31600;
})();
var statearr_31601_31617 = state_31584__$1;
(statearr_31601_31617[(2)] = null);

(statearr_31601_31617[(1)] = (2));


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
});})(c__29872__auto___31607,out))
;
return ((function (switch__29777__auto__,c__29872__auto___31607,out){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31602[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31602[(1)] = (1));

return statearr_31602;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31584){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31603){if((e31603 instanceof Object)){
var ex__29781__auto__ = e31603;
var statearr_31604_31618 = state_31584;
(statearr_31604_31618[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31619 = state_31584;
state_31584 = G__31619;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31607,out))
})();
var state__29874__auto__ = (function (){var statearr_31605 = f__29873__auto__.call(null);
(statearr_31605[(6)] = c__29872__auto___31607);

return statearr_31605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31607,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31621 = arguments.length;
switch (G__31621) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29872__auto___31687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31687,out){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31687,out){
return (function (state_31659){
var state_val_31660 = (state_31659[(1)]);
if((state_val_31660 === (7))){
var inst_31655 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31661_31688 = state_31659__$1;
(statearr_31661_31688[(2)] = inst_31655);

(statearr_31661_31688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (1))){
var inst_31622 = (new Array(n));
var inst_31623 = inst_31622;
var inst_31624 = (0);
var state_31659__$1 = (function (){var statearr_31662 = state_31659;
(statearr_31662[(7)] = inst_31623);

(statearr_31662[(8)] = inst_31624);

return statearr_31662;
})();
var statearr_31663_31689 = state_31659__$1;
(statearr_31663_31689[(2)] = null);

(statearr_31663_31689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (4))){
var inst_31627 = (state_31659[(9)]);
var inst_31627__$1 = (state_31659[(2)]);
var inst_31628 = (inst_31627__$1 == null);
var inst_31629 = cljs.core.not.call(null,inst_31628);
var state_31659__$1 = (function (){var statearr_31664 = state_31659;
(statearr_31664[(9)] = inst_31627__$1);

return statearr_31664;
})();
if(inst_31629){
var statearr_31665_31690 = state_31659__$1;
(statearr_31665_31690[(1)] = (5));

} else {
var statearr_31666_31691 = state_31659__$1;
(statearr_31666_31691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (15))){
var inst_31649 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31667_31692 = state_31659__$1;
(statearr_31667_31692[(2)] = inst_31649);

(statearr_31667_31692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (13))){
var state_31659__$1 = state_31659;
var statearr_31668_31693 = state_31659__$1;
(statearr_31668_31693[(2)] = null);

(statearr_31668_31693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (6))){
var inst_31624 = (state_31659[(8)]);
var inst_31645 = (inst_31624 > (0));
var state_31659__$1 = state_31659;
if(cljs.core.truth_(inst_31645)){
var statearr_31669_31694 = state_31659__$1;
(statearr_31669_31694[(1)] = (12));

} else {
var statearr_31670_31695 = state_31659__$1;
(statearr_31670_31695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (3))){
var inst_31657 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31659__$1,inst_31657);
} else {
if((state_val_31660 === (12))){
var inst_31623 = (state_31659[(7)]);
var inst_31647 = cljs.core.vec.call(null,inst_31623);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31659__$1,(15),out,inst_31647);
} else {
if((state_val_31660 === (2))){
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31659__$1,(4),ch);
} else {
if((state_val_31660 === (11))){
var inst_31639 = (state_31659[(2)]);
var inst_31640 = (new Array(n));
var inst_31623 = inst_31640;
var inst_31624 = (0);
var state_31659__$1 = (function (){var statearr_31671 = state_31659;
(statearr_31671[(7)] = inst_31623);

(statearr_31671[(8)] = inst_31624);

(statearr_31671[(10)] = inst_31639);

return statearr_31671;
})();
var statearr_31672_31696 = state_31659__$1;
(statearr_31672_31696[(2)] = null);

(statearr_31672_31696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (9))){
var inst_31623 = (state_31659[(7)]);
var inst_31637 = cljs.core.vec.call(null,inst_31623);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31659__$1,(11),out,inst_31637);
} else {
if((state_val_31660 === (5))){
var inst_31632 = (state_31659[(11)]);
var inst_31623 = (state_31659[(7)]);
var inst_31624 = (state_31659[(8)]);
var inst_31627 = (state_31659[(9)]);
var inst_31631 = (inst_31623[inst_31624] = inst_31627);
var inst_31632__$1 = (inst_31624 + (1));
var inst_31633 = (inst_31632__$1 < n);
var state_31659__$1 = (function (){var statearr_31673 = state_31659;
(statearr_31673[(11)] = inst_31632__$1);

(statearr_31673[(12)] = inst_31631);

return statearr_31673;
})();
if(cljs.core.truth_(inst_31633)){
var statearr_31674_31697 = state_31659__$1;
(statearr_31674_31697[(1)] = (8));

} else {
var statearr_31675_31698 = state_31659__$1;
(statearr_31675_31698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (14))){
var inst_31652 = (state_31659[(2)]);
var inst_31653 = cljs.core.async.close_BANG_.call(null,out);
var state_31659__$1 = (function (){var statearr_31677 = state_31659;
(statearr_31677[(13)] = inst_31652);

return statearr_31677;
})();
var statearr_31678_31699 = state_31659__$1;
(statearr_31678_31699[(2)] = inst_31653);

(statearr_31678_31699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (10))){
var inst_31643 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31679_31700 = state_31659__$1;
(statearr_31679_31700[(2)] = inst_31643);

(statearr_31679_31700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (8))){
var inst_31632 = (state_31659[(11)]);
var inst_31623 = (state_31659[(7)]);
var tmp31676 = inst_31623;
var inst_31623__$1 = tmp31676;
var inst_31624 = inst_31632;
var state_31659__$1 = (function (){var statearr_31680 = state_31659;
(statearr_31680[(7)] = inst_31623__$1);

(statearr_31680[(8)] = inst_31624);

return statearr_31680;
})();
var statearr_31681_31701 = state_31659__$1;
(statearr_31681_31701[(2)] = null);

(statearr_31681_31701[(1)] = (2));


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
});})(c__29872__auto___31687,out))
;
return ((function (switch__29777__auto__,c__29872__auto___31687,out){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31682[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31659){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31683){if((e31683 instanceof Object)){
var ex__29781__auto__ = e31683;
var statearr_31684_31702 = state_31659;
(statearr_31684_31702[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31703 = state_31659;
state_31659 = G__31703;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31687,out))
})();
var state__29874__auto__ = (function (){var statearr_31685 = f__29873__auto__.call(null);
(statearr_31685[(6)] = c__29872__auto___31687);

return statearr_31685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31687,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31705 = arguments.length;
switch (G__31705) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29872__auto___31775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___31775,out){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___31775,out){
return (function (state_31747){
var state_val_31748 = (state_31747[(1)]);
if((state_val_31748 === (7))){
var inst_31743 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31749_31776 = state_31747__$1;
(statearr_31749_31776[(2)] = inst_31743);

(statearr_31749_31776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (1))){
var inst_31706 = [];
var inst_31707 = inst_31706;
var inst_31708 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31747__$1 = (function (){var statearr_31750 = state_31747;
(statearr_31750[(7)] = inst_31707);

(statearr_31750[(8)] = inst_31708);

return statearr_31750;
})();
var statearr_31751_31777 = state_31747__$1;
(statearr_31751_31777[(2)] = null);

(statearr_31751_31777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (4))){
var inst_31711 = (state_31747[(9)]);
var inst_31711__$1 = (state_31747[(2)]);
var inst_31712 = (inst_31711__$1 == null);
var inst_31713 = cljs.core.not.call(null,inst_31712);
var state_31747__$1 = (function (){var statearr_31752 = state_31747;
(statearr_31752[(9)] = inst_31711__$1);

return statearr_31752;
})();
if(inst_31713){
var statearr_31753_31778 = state_31747__$1;
(statearr_31753_31778[(1)] = (5));

} else {
var statearr_31754_31779 = state_31747__$1;
(statearr_31754_31779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (15))){
var inst_31737 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31755_31780 = state_31747__$1;
(statearr_31755_31780[(2)] = inst_31737);

(statearr_31755_31780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (13))){
var state_31747__$1 = state_31747;
var statearr_31756_31781 = state_31747__$1;
(statearr_31756_31781[(2)] = null);

(statearr_31756_31781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (6))){
var inst_31707 = (state_31747[(7)]);
var inst_31732 = inst_31707.length;
var inst_31733 = (inst_31732 > (0));
var state_31747__$1 = state_31747;
if(cljs.core.truth_(inst_31733)){
var statearr_31757_31782 = state_31747__$1;
(statearr_31757_31782[(1)] = (12));

} else {
var statearr_31758_31783 = state_31747__$1;
(statearr_31758_31783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (3))){
var inst_31745 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31747__$1,inst_31745);
} else {
if((state_val_31748 === (12))){
var inst_31707 = (state_31747[(7)]);
var inst_31735 = cljs.core.vec.call(null,inst_31707);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31747__$1,(15),out,inst_31735);
} else {
if((state_val_31748 === (2))){
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31747__$1,(4),ch);
} else {
if((state_val_31748 === (11))){
var inst_31715 = (state_31747[(10)]);
var inst_31711 = (state_31747[(9)]);
var inst_31725 = (state_31747[(2)]);
var inst_31726 = [];
var inst_31727 = inst_31726.push(inst_31711);
var inst_31707 = inst_31726;
var inst_31708 = inst_31715;
var state_31747__$1 = (function (){var statearr_31759 = state_31747;
(statearr_31759[(7)] = inst_31707);

(statearr_31759[(8)] = inst_31708);

(statearr_31759[(11)] = inst_31725);

(statearr_31759[(12)] = inst_31727);

return statearr_31759;
})();
var statearr_31760_31784 = state_31747__$1;
(statearr_31760_31784[(2)] = null);

(statearr_31760_31784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (9))){
var inst_31707 = (state_31747[(7)]);
var inst_31723 = cljs.core.vec.call(null,inst_31707);
var state_31747__$1 = state_31747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31747__$1,(11),out,inst_31723);
} else {
if((state_val_31748 === (5))){
var inst_31708 = (state_31747[(8)]);
var inst_31715 = (state_31747[(10)]);
var inst_31711 = (state_31747[(9)]);
var inst_31715__$1 = f.call(null,inst_31711);
var inst_31716 = cljs.core._EQ_.call(null,inst_31715__$1,inst_31708);
var inst_31717 = cljs.core.keyword_identical_QMARK_.call(null,inst_31708,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31718 = ((inst_31716) || (inst_31717));
var state_31747__$1 = (function (){var statearr_31761 = state_31747;
(statearr_31761[(10)] = inst_31715__$1);

return statearr_31761;
})();
if(cljs.core.truth_(inst_31718)){
var statearr_31762_31785 = state_31747__$1;
(statearr_31762_31785[(1)] = (8));

} else {
var statearr_31763_31786 = state_31747__$1;
(statearr_31763_31786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (14))){
var inst_31740 = (state_31747[(2)]);
var inst_31741 = cljs.core.async.close_BANG_.call(null,out);
var state_31747__$1 = (function (){var statearr_31765 = state_31747;
(statearr_31765[(13)] = inst_31740);

return statearr_31765;
})();
var statearr_31766_31787 = state_31747__$1;
(statearr_31766_31787[(2)] = inst_31741);

(statearr_31766_31787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (10))){
var inst_31730 = (state_31747[(2)]);
var state_31747__$1 = state_31747;
var statearr_31767_31788 = state_31747__$1;
(statearr_31767_31788[(2)] = inst_31730);

(statearr_31767_31788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31748 === (8))){
var inst_31707 = (state_31747[(7)]);
var inst_31715 = (state_31747[(10)]);
var inst_31711 = (state_31747[(9)]);
var inst_31720 = inst_31707.push(inst_31711);
var tmp31764 = inst_31707;
var inst_31707__$1 = tmp31764;
var inst_31708 = inst_31715;
var state_31747__$1 = (function (){var statearr_31768 = state_31747;
(statearr_31768[(7)] = inst_31707__$1);

(statearr_31768[(14)] = inst_31720);

(statearr_31768[(8)] = inst_31708);

return statearr_31768;
})();
var statearr_31769_31789 = state_31747__$1;
(statearr_31769_31789[(2)] = null);

(statearr_31769_31789[(1)] = (2));


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
});})(c__29872__auto___31775,out))
;
return ((function (switch__29777__auto__,c__29872__auto___31775,out){
return (function() {
var cljs$core$async$state_machine__29778__auto__ = null;
var cljs$core$async$state_machine__29778__auto____0 = (function (){
var statearr_31770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31770[(0)] = cljs$core$async$state_machine__29778__auto__);

(statearr_31770[(1)] = (1));

return statearr_31770;
});
var cljs$core$async$state_machine__29778__auto____1 = (function (state_31747){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_31747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e31771){if((e31771 instanceof Object)){
var ex__29781__auto__ = e31771;
var statearr_31772_31790 = state_31747;
(statearr_31772_31790[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31791 = state_31747;
state_31747 = G__31791;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
cljs$core$async$state_machine__29778__auto__ = function(state_31747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29778__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29778__auto____1.call(this,state_31747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29778__auto____0;
cljs$core$async$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29778__auto____1;
return cljs$core$async$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___31775,out))
})();
var state__29874__auto__ = (function (){var statearr_31773 = f__29873__auto__.call(null);
(statearr_31773[(6)] = c__29872__auto___31775);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___31775,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1572042000408
