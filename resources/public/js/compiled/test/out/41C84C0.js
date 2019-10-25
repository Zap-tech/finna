goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__26833__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26834__i = 0, G__26834__a = new Array(arguments.length -  0);
while (G__26834__i < G__26834__a.length) {G__26834__a[G__26834__i] = arguments[G__26834__i + 0]; ++G__26834__i;}
  args = new cljs.core.IndexedSeq(G__26834__a,0,null);
} 
return G__26833__delegate.call(this,args);};
G__26833.cljs$lang$maxFixedArity = 0;
G__26833.cljs$lang$applyTo = (function (arglist__26835){
var args = cljs.core.seq(arglist__26835);
return G__26833__delegate(args);
});
G__26833.cljs$core$IFn$_invoke$arity$variadic = G__26833__delegate;
return G__26833;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__26836__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26837__i = 0, G__26837__a = new Array(arguments.length -  0);
while (G__26837__i < G__26837__a.length) {G__26837__a[G__26837__i] = arguments[G__26837__i + 0]; ++G__26837__i;}
  args = new cljs.core.IndexedSeq(G__26837__a,0,null);
} 
return G__26836__delegate.call(this,args);};
G__26836.cljs$lang$maxFixedArity = 0;
G__26836.cljs$lang$applyTo = (function (arglist__26838){
var args = cljs.core.seq(arglist__26838);
return G__26836__delegate(args);
});
G__26836.cljs$core$IFn$_invoke$arity$variadic = G__26836__delegate;
return G__26836;
})()
);

return null;
});
