// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e33931){if((e33931 instanceof Error)){
var e = e33931;
return "Error: Unable to stringify";
} else {
throw e33931;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__33934 = arguments.length;
switch (G__33934) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__33932_SHARP_){
if(typeof p1__33932_SHARP_ === 'string'){
return p1__33932_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__33932_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33937 = arguments.length;
var i__4731__auto___33938 = (0);
while(true){
if((i__4731__auto___33938 < len__4730__auto___33937)){
args__4736__auto__.push((arguments[i__4731__auto___33938]));

var G__33939 = (i__4731__auto___33938 + (1));
i__4731__auto___33938 = G__33939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq33936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33936));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33941 = arguments.length;
var i__4731__auto___33942 = (0);
while(true){
if((i__4731__auto___33942 < len__4730__auto___33941)){
args__4736__auto__.push((arguments[i__4731__auto___33942]));

var G__33943 = (i__4731__auto___33942 + (1));
i__4731__auto___33942 = G__33943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq33940){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33940));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33944){
var map__33945 = p__33944;
var map__33945__$1 = (((((!((map__33945 == null))))?(((((map__33945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33945):map__33945);
var message = cljs.core.get.call(null,map__33945__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33945__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29872__auto___34024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___34024,ch){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___34024,ch){
return (function (state_33996){
var state_val_33997 = (state_33996[(1)]);
if((state_val_33997 === (7))){
var inst_33992 = (state_33996[(2)]);
var state_33996__$1 = state_33996;
var statearr_33998_34025 = state_33996__$1;
(statearr_33998_34025[(2)] = inst_33992);

(statearr_33998_34025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (1))){
var state_33996__$1 = state_33996;
var statearr_33999_34026 = state_33996__$1;
(statearr_33999_34026[(2)] = null);

(statearr_33999_34026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (4))){
var inst_33949 = (state_33996[(7)]);
var inst_33949__$1 = (state_33996[(2)]);
var state_33996__$1 = (function (){var statearr_34000 = state_33996;
(statearr_34000[(7)] = inst_33949__$1);

return statearr_34000;
})();
if(cljs.core.truth_(inst_33949__$1)){
var statearr_34001_34027 = state_33996__$1;
(statearr_34001_34027[(1)] = (5));

} else {
var statearr_34002_34028 = state_33996__$1;
(statearr_34002_34028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (15))){
var inst_33956 = (state_33996[(8)]);
var inst_33971 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33956);
var inst_33972 = cljs.core.first.call(null,inst_33971);
var inst_33973 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33972);
var inst_33974 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33973)].join('');
var inst_33975 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33974);
var state_33996__$1 = state_33996;
var statearr_34003_34029 = state_33996__$1;
(statearr_34003_34029[(2)] = inst_33975);

(statearr_34003_34029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (13))){
var inst_33980 = (state_33996[(2)]);
var state_33996__$1 = state_33996;
var statearr_34004_34030 = state_33996__$1;
(statearr_34004_34030[(2)] = inst_33980);

(statearr_34004_34030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (6))){
var state_33996__$1 = state_33996;
var statearr_34005_34031 = state_33996__$1;
(statearr_34005_34031[(2)] = null);

(statearr_34005_34031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (17))){
var inst_33978 = (state_33996[(2)]);
var state_33996__$1 = state_33996;
var statearr_34006_34032 = state_33996__$1;
(statearr_34006_34032[(2)] = inst_33978);

(statearr_34006_34032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (3))){
var inst_33994 = (state_33996[(2)]);
var state_33996__$1 = state_33996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33996__$1,inst_33994);
} else {
if((state_val_33997 === (12))){
var inst_33955 = (state_33996[(9)]);
var inst_33969 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33955,opts);
var state_33996__$1 = state_33996;
if(inst_33969){
var statearr_34007_34033 = state_33996__$1;
(statearr_34007_34033[(1)] = (15));

} else {
var statearr_34008_34034 = state_33996__$1;
(statearr_34008_34034[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (2))){
var state_33996__$1 = state_33996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33996__$1,(4),ch);
} else {
if((state_val_33997 === (11))){
var inst_33956 = (state_33996[(8)]);
var inst_33961 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33962 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33956);
var inst_33963 = cljs.core.async.timeout.call(null,(1000));
var inst_33964 = [inst_33962,inst_33963];
var inst_33965 = (new cljs.core.PersistentVector(null,2,(5),inst_33961,inst_33964,null));
var state_33996__$1 = state_33996;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33996__$1,(14),inst_33965);
} else {
if((state_val_33997 === (9))){
var inst_33956 = (state_33996[(8)]);
var inst_33982 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33983 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33956);
var inst_33984 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33983);
var inst_33985 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33984)].join('');
var inst_33986 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33985);
var state_33996__$1 = (function (){var statearr_34009 = state_33996;
(statearr_34009[(10)] = inst_33982);

return statearr_34009;
})();
var statearr_34010_34035 = state_33996__$1;
(statearr_34010_34035[(2)] = inst_33986);

(statearr_34010_34035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (5))){
var inst_33949 = (state_33996[(7)]);
var inst_33951 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33952 = (new cljs.core.PersistentArrayMap(null,2,inst_33951,null));
var inst_33953 = (new cljs.core.PersistentHashSet(null,inst_33952,null));
var inst_33954 = figwheel.client.focus_msgs.call(null,inst_33953,inst_33949);
var inst_33955 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33954);
var inst_33956 = cljs.core.first.call(null,inst_33954);
var inst_33957 = figwheel.client.autoload_QMARK_.call(null);
var state_33996__$1 = (function (){var statearr_34011 = state_33996;
(statearr_34011[(9)] = inst_33955);

(statearr_34011[(8)] = inst_33956);

return statearr_34011;
})();
if(cljs.core.truth_(inst_33957)){
var statearr_34012_34036 = state_33996__$1;
(statearr_34012_34036[(1)] = (8));

} else {
var statearr_34013_34037 = state_33996__$1;
(statearr_34013_34037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (14))){
var inst_33967 = (state_33996[(2)]);
var state_33996__$1 = state_33996;
var statearr_34014_34038 = state_33996__$1;
(statearr_34014_34038[(2)] = inst_33967);

(statearr_34014_34038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (16))){
var state_33996__$1 = state_33996;
var statearr_34015_34039 = state_33996__$1;
(statearr_34015_34039[(2)] = null);

(statearr_34015_34039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (10))){
var inst_33988 = (state_33996[(2)]);
var state_33996__$1 = (function (){var statearr_34016 = state_33996;
(statearr_34016[(11)] = inst_33988);

return statearr_34016;
})();
var statearr_34017_34040 = state_33996__$1;
(statearr_34017_34040[(2)] = null);

(statearr_34017_34040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33997 === (8))){
var inst_33955 = (state_33996[(9)]);
var inst_33959 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33955,opts);
var state_33996__$1 = state_33996;
if(cljs.core.truth_(inst_33959)){
var statearr_34018_34041 = state_33996__$1;
(statearr_34018_34041[(1)] = (11));

} else {
var statearr_34019_34042 = state_33996__$1;
(statearr_34019_34042[(1)] = (12));

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
});})(c__29872__auto___34024,ch))
;
return ((function (switch__29777__auto__,c__29872__auto___34024,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29778__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29778__auto____0 = (function (){
var statearr_34020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34020[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29778__auto__);

(statearr_34020[(1)] = (1));

return statearr_34020;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29778__auto____1 = (function (state_33996){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_33996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e34021){if((e34021 instanceof Object)){
var ex__29781__auto__ = e34021;
var statearr_34022_34043 = state_33996;
(statearr_34022_34043[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34044 = state_33996;
state_33996 = G__34044;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29778__auto__ = function(state_33996){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29778__auto____1.call(this,state_33996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29778__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29778__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___34024,ch))
})();
var state__29874__auto__ = (function (){var statearr_34023 = f__29873__auto__.call(null);
(statearr_34023[(6)] = c__29872__auto___34024);

return statearr_34023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___34024,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34045_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34045_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
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
}
});
var base_path_34051 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34051){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34047 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34048 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34049 = true;
var _STAR_print_fn_STAR__temp_val__34050 = ((function (_STAR_print_newline_STAR__orig_val__34047,_STAR_print_fn_STAR__orig_val__34048,_STAR_print_newline_STAR__temp_val__34049,sb,base_path_34051){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__34047,_STAR_print_fn_STAR__orig_val__34048,_STAR_print_newline_STAR__temp_val__34049,sb,base_path_34051))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34049;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34050;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34048;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34047;
}}catch (e34046){if((e34046 instanceof Error)){
var e = e34046;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34051], null));
} else {
var e = e34046;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34051))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34052){
var map__34053 = p__34052;
var map__34053__$1 = (((((!((map__34053 == null))))?(((((map__34053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34053):map__34053);
var opts = map__34053__$1;
var build_id = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34053,map__34053__$1,opts,build_id){
return (function (p__34055){
var vec__34056 = p__34055;
var seq__34057 = cljs.core.seq.call(null,vec__34056);
var first__34058 = cljs.core.first.call(null,seq__34057);
var seq__34057__$1 = cljs.core.next.call(null,seq__34057);
var map__34059 = first__34058;
var map__34059__$1 = (((((!((map__34059 == null))))?(((((map__34059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34059):map__34059);
var msg = map__34059__$1;
var msg_name = cljs.core.get.call(null,map__34059__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34057__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34056,seq__34057,first__34058,seq__34057__$1,map__34059,map__34059__$1,msg,msg_name,_,map__34053,map__34053__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34056,seq__34057,first__34058,seq__34057__$1,map__34059,map__34059__$1,msg,msg_name,_,map__34053,map__34053__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34053,map__34053__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34061){
var vec__34062 = p__34061;
var seq__34063 = cljs.core.seq.call(null,vec__34062);
var first__34064 = cljs.core.first.call(null,seq__34063);
var seq__34063__$1 = cljs.core.next.call(null,seq__34063);
var map__34065 = first__34064;
var map__34065__$1 = (((((!((map__34065 == null))))?(((((map__34065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34065):map__34065);
var msg = map__34065__$1;
var msg_name = cljs.core.get.call(null,map__34065__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34063__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34067){
var map__34068 = p__34067;
var map__34068__$1 = (((((!((map__34068 == null))))?(((((map__34068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34068):map__34068);
var on_compile_warning = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34068,map__34068__$1,on_compile_warning,on_compile_fail){
return (function (p__34070){
var vec__34071 = p__34070;
var seq__34072 = cljs.core.seq.call(null,vec__34071);
var first__34073 = cljs.core.first.call(null,seq__34072);
var seq__34072__$1 = cljs.core.next.call(null,seq__34072);
var map__34074 = first__34073;
var map__34074__$1 = (((((!((map__34074 == null))))?(((((map__34074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34074):map__34074);
var msg = map__34074__$1;
var msg_name = cljs.core.get.call(null,map__34074__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34072__$1;
var pred__34076 = cljs.core._EQ_;
var expr__34077 = msg_name;
if(cljs.core.truth_(pred__34076.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34077))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34076.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34077))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34068,map__34068__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__,msg_hist,msg_names,msg){
return (function (state_34166){
var state_val_34167 = (state_34166[(1)]);
if((state_val_34167 === (7))){
var inst_34086 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
if(cljs.core.truth_(inst_34086)){
var statearr_34168_34215 = state_34166__$1;
(statearr_34168_34215[(1)] = (8));

} else {
var statearr_34169_34216 = state_34166__$1;
(statearr_34169_34216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (20))){
var inst_34160 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34170_34217 = state_34166__$1;
(statearr_34170_34217[(2)] = inst_34160);

(statearr_34170_34217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (27))){
var inst_34156 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34171_34218 = state_34166__$1;
(statearr_34171_34218[(2)] = inst_34156);

(statearr_34171_34218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (1))){
var inst_34079 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34166__$1 = state_34166;
if(cljs.core.truth_(inst_34079)){
var statearr_34172_34219 = state_34166__$1;
(statearr_34172_34219[(1)] = (2));

} else {
var statearr_34173_34220 = state_34166__$1;
(statearr_34173_34220[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (24))){
var inst_34158 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34174_34221 = state_34166__$1;
(statearr_34174_34221[(2)] = inst_34158);

(statearr_34174_34221[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (4))){
var inst_34164 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34166__$1,inst_34164);
} else {
if((state_val_34167 === (15))){
var inst_34162 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34175_34222 = state_34166__$1;
(statearr_34175_34222[(2)] = inst_34162);

(statearr_34175_34222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (21))){
var inst_34115 = (state_34166[(2)]);
var inst_34116 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34117 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34116);
var state_34166__$1 = (function (){var statearr_34176 = state_34166;
(statearr_34176[(7)] = inst_34115);

return statearr_34176;
})();
var statearr_34177_34223 = state_34166__$1;
(statearr_34177_34223[(2)] = inst_34117);

(statearr_34177_34223[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (31))){
var inst_34145 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34166__$1 = state_34166;
if(inst_34145){
var statearr_34178_34224 = state_34166__$1;
(statearr_34178_34224[(1)] = (34));

} else {
var statearr_34179_34225 = state_34166__$1;
(statearr_34179_34225[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (32))){
var inst_34154 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34180_34226 = state_34166__$1;
(statearr_34180_34226[(2)] = inst_34154);

(statearr_34180_34226[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (33))){
var inst_34141 = (state_34166[(2)]);
var inst_34142 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34143 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34142);
var state_34166__$1 = (function (){var statearr_34181 = state_34166;
(statearr_34181[(8)] = inst_34141);

return statearr_34181;
})();
var statearr_34182_34227 = state_34166__$1;
(statearr_34182_34227[(2)] = inst_34143);

(statearr_34182_34227[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (13))){
var inst_34100 = figwheel.client.heads_up.clear.call(null);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(16),inst_34100);
} else {
if((state_val_34167 === (22))){
var inst_34121 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34122 = figwheel.client.heads_up.append_warning_message.call(null,inst_34121);
var state_34166__$1 = state_34166;
var statearr_34183_34228 = state_34166__$1;
(statearr_34183_34228[(2)] = inst_34122);

(statearr_34183_34228[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (36))){
var inst_34152 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34184_34229 = state_34166__$1;
(statearr_34184_34229[(2)] = inst_34152);

(statearr_34184_34229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (29))){
var inst_34132 = (state_34166[(2)]);
var inst_34133 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34134 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34133);
var state_34166__$1 = (function (){var statearr_34185 = state_34166;
(statearr_34185[(9)] = inst_34132);

return statearr_34185;
})();
var statearr_34186_34230 = state_34166__$1;
(statearr_34186_34230[(2)] = inst_34134);

(statearr_34186_34230[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (6))){
var inst_34081 = (state_34166[(10)]);
var state_34166__$1 = state_34166;
var statearr_34187_34231 = state_34166__$1;
(statearr_34187_34231[(2)] = inst_34081);

(statearr_34187_34231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (28))){
var inst_34128 = (state_34166[(2)]);
var inst_34129 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34130 = figwheel.client.heads_up.display_warning.call(null,inst_34129);
var state_34166__$1 = (function (){var statearr_34188 = state_34166;
(statearr_34188[(11)] = inst_34128);

return statearr_34188;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(29),inst_34130);
} else {
if((state_val_34167 === (25))){
var inst_34126 = figwheel.client.heads_up.clear.call(null);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(28),inst_34126);
} else {
if((state_val_34167 === (34))){
var inst_34147 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(37),inst_34147);
} else {
if((state_val_34167 === (17))){
var inst_34106 = (state_34166[(2)]);
var inst_34107 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34108 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34107);
var state_34166__$1 = (function (){var statearr_34189 = state_34166;
(statearr_34189[(12)] = inst_34106);

return statearr_34189;
})();
var statearr_34190_34232 = state_34166__$1;
(statearr_34190_34232[(2)] = inst_34108);

(statearr_34190_34232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (3))){
var inst_34098 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34166__$1 = state_34166;
if(inst_34098){
var statearr_34191_34233 = state_34166__$1;
(statearr_34191_34233[(1)] = (13));

} else {
var statearr_34192_34234 = state_34166__$1;
(statearr_34192_34234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (12))){
var inst_34094 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34193_34235 = state_34166__$1;
(statearr_34193_34235[(2)] = inst_34094);

(statearr_34193_34235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (2))){
var inst_34081 = (state_34166[(10)]);
var inst_34081__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34166__$1 = (function (){var statearr_34194 = state_34166;
(statearr_34194[(10)] = inst_34081__$1);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34081__$1)){
var statearr_34195_34236 = state_34166__$1;
(statearr_34195_34236[(1)] = (5));

} else {
var statearr_34196_34237 = state_34166__$1;
(statearr_34196_34237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (23))){
var inst_34124 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34166__$1 = state_34166;
if(inst_34124){
var statearr_34197_34238 = state_34166__$1;
(statearr_34197_34238[(1)] = (25));

} else {
var statearr_34198_34239 = state_34166__$1;
(statearr_34198_34239[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (35))){
var state_34166__$1 = state_34166;
var statearr_34199_34240 = state_34166__$1;
(statearr_34199_34240[(2)] = null);

(statearr_34199_34240[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (19))){
var inst_34119 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34166__$1 = state_34166;
if(inst_34119){
var statearr_34200_34241 = state_34166__$1;
(statearr_34200_34241[(1)] = (22));

} else {
var statearr_34201_34242 = state_34166__$1;
(statearr_34201_34242[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (11))){
var inst_34090 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34202_34243 = state_34166__$1;
(statearr_34202_34243[(2)] = inst_34090);

(statearr_34202_34243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (9))){
var inst_34092 = figwheel.client.heads_up.clear.call(null);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(12),inst_34092);
} else {
if((state_val_34167 === (5))){
var inst_34083 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34166__$1 = state_34166;
var statearr_34203_34244 = state_34166__$1;
(statearr_34203_34244[(2)] = inst_34083);

(statearr_34203_34244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (14))){
var inst_34110 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34166__$1 = state_34166;
if(inst_34110){
var statearr_34204_34245 = state_34166__$1;
(statearr_34204_34245[(1)] = (18));

} else {
var statearr_34205_34246 = state_34166__$1;
(statearr_34205_34246[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (26))){
var inst_34136 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34166__$1 = state_34166;
if(inst_34136){
var statearr_34206_34247 = state_34166__$1;
(statearr_34206_34247[(1)] = (30));

} else {
var statearr_34207_34248 = state_34166__$1;
(statearr_34207_34248[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (16))){
var inst_34102 = (state_34166[(2)]);
var inst_34103 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34104 = figwheel.client.heads_up.display_exception.call(null,inst_34103);
var state_34166__$1 = (function (){var statearr_34208 = state_34166;
(statearr_34208[(13)] = inst_34102);

return statearr_34208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(17),inst_34104);
} else {
if((state_val_34167 === (30))){
var inst_34138 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34139 = figwheel.client.heads_up.display_warning.call(null,inst_34138);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(33),inst_34139);
} else {
if((state_val_34167 === (10))){
var inst_34096 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34209_34249 = state_34166__$1;
(statearr_34209_34249[(2)] = inst_34096);

(statearr_34209_34249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (18))){
var inst_34112 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34113 = figwheel.client.heads_up.display_exception.call(null,inst_34112);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(21),inst_34113);
} else {
if((state_val_34167 === (37))){
var inst_34149 = (state_34166[(2)]);
var state_34166__$1 = state_34166;
var statearr_34210_34250 = state_34166__$1;
(statearr_34210_34250[(2)] = inst_34149);

(statearr_34210_34250[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34167 === (8))){
var inst_34088 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34166__$1 = state_34166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34166__$1,(11),inst_34088);
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
});})(c__29872__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29777__auto__,c__29872__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto____0 = (function (){
var statearr_34211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34211[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto__);

(statearr_34211[(1)] = (1));

return statearr_34211;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto____1 = (function (state_34166){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_34166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e34212){if((e34212 instanceof Object)){
var ex__29781__auto__ = e34212;
var statearr_34213_34251 = state_34166;
(statearr_34213_34251[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34252 = state_34166;
state_34166 = G__34252;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto__ = function(state_34166){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto____1.call(this,state_34166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__,msg_hist,msg_names,msg))
})();
var state__29874__auto__ = (function (){var statearr_34214 = f__29873__auto__.call(null);
(statearr_34214[(6)] = c__29872__auto__);

return statearr_34214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__,msg_hist,msg_names,msg))
);

return c__29872__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29872__auto___34281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___34281,ch){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___34281,ch){
return (function (state_34267){
var state_val_34268 = (state_34267[(1)]);
if((state_val_34268 === (1))){
var state_34267__$1 = state_34267;
var statearr_34269_34282 = state_34267__$1;
(statearr_34269_34282[(2)] = null);

(statearr_34269_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (2))){
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34267__$1,(4),ch);
} else {
if((state_val_34268 === (3))){
var inst_34265 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34267__$1,inst_34265);
} else {
if((state_val_34268 === (4))){
var inst_34255 = (state_34267[(7)]);
var inst_34255__$1 = (state_34267[(2)]);
var state_34267__$1 = (function (){var statearr_34270 = state_34267;
(statearr_34270[(7)] = inst_34255__$1);

return statearr_34270;
})();
if(cljs.core.truth_(inst_34255__$1)){
var statearr_34271_34283 = state_34267__$1;
(statearr_34271_34283[(1)] = (5));

} else {
var statearr_34272_34284 = state_34267__$1;
(statearr_34272_34284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (5))){
var inst_34255 = (state_34267[(7)]);
var inst_34257 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34255);
var state_34267__$1 = state_34267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34267__$1,(8),inst_34257);
} else {
if((state_val_34268 === (6))){
var state_34267__$1 = state_34267;
var statearr_34273_34285 = state_34267__$1;
(statearr_34273_34285[(2)] = null);

(statearr_34273_34285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (7))){
var inst_34263 = (state_34267[(2)]);
var state_34267__$1 = state_34267;
var statearr_34274_34286 = state_34267__$1;
(statearr_34274_34286[(2)] = inst_34263);

(statearr_34274_34286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34268 === (8))){
var inst_34259 = (state_34267[(2)]);
var state_34267__$1 = (function (){var statearr_34275 = state_34267;
(statearr_34275[(8)] = inst_34259);

return statearr_34275;
})();
var statearr_34276_34287 = state_34267__$1;
(statearr_34276_34287[(2)] = null);

(statearr_34276_34287[(1)] = (2));


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
});})(c__29872__auto___34281,ch))
;
return ((function (switch__29777__auto__,c__29872__auto___34281,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29778__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29778__auto____0 = (function (){
var statearr_34277 = [null,null,null,null,null,null,null,null,null];
(statearr_34277[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29778__auto__);

(statearr_34277[(1)] = (1));

return statearr_34277;
});
var figwheel$client$heads_up_plugin_$_state_machine__29778__auto____1 = (function (state_34267){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_34267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e34278){if((e34278 instanceof Object)){
var ex__29781__auto__ = e34278;
var statearr_34279_34288 = state_34267;
(statearr_34279_34288[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34289 = state_34267;
state_34267 = G__34289;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29778__auto__ = function(state_34267){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29778__auto____1.call(this,state_34267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29778__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29778__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___34281,ch))
})();
var state__29874__auto__ = (function (){var statearr_34280 = f__29873__auto__.call(null);
(statearr_34280[(6)] = c__29872__auto___34281);

return statearr_34280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___34281,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__){
return (function (state_34295){
var state_val_34296 = (state_34295[(1)]);
if((state_val_34296 === (1))){
var inst_34290 = cljs.core.async.timeout.call(null,(3000));
var state_34295__$1 = state_34295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34295__$1,(2),inst_34290);
} else {
if((state_val_34296 === (2))){
var inst_34292 = (state_34295[(2)]);
var inst_34293 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34295__$1 = (function (){var statearr_34297 = state_34295;
(statearr_34297[(7)] = inst_34292);

return statearr_34297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34295__$1,inst_34293);
} else {
return null;
}
}
});})(c__29872__auto__))
;
return ((function (switch__29777__auto__,c__29872__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29778__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29778__auto____0 = (function (){
var statearr_34298 = [null,null,null,null,null,null,null,null];
(statearr_34298[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29778__auto__);

(statearr_34298[(1)] = (1));

return statearr_34298;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29778__auto____1 = (function (state_34295){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_34295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e34299){if((e34299 instanceof Object)){
var ex__29781__auto__ = e34299;
var statearr_34300_34302 = state_34295;
(statearr_34300_34302[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34303 = state_34295;
state_34295 = G__34303;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29778__auto__ = function(state_34295){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29778__auto____1.call(this,state_34295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29778__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29778__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__))
})();
var state__29874__auto__ = (function (){var statearr_34301 = f__29873__auto__.call(null);
(statearr_34301[(6)] = c__29872__auto__);

return statearr_34301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__))
);

return c__29872__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__,figwheel_version,temp__5720__auto__){
return (function (state_34310){
var state_val_34311 = (state_34310[(1)]);
if((state_val_34311 === (1))){
var inst_34304 = cljs.core.async.timeout.call(null,(2000));
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34310__$1,(2),inst_34304);
} else {
if((state_val_34311 === (2))){
var inst_34306 = (state_34310[(2)]);
var inst_34307 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34308 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34307);
var state_34310__$1 = (function (){var statearr_34312 = state_34310;
(statearr_34312[(7)] = inst_34306);

return statearr_34312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34310__$1,inst_34308);
} else {
return null;
}
}
});})(c__29872__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__29777__auto__,c__29872__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto____0 = (function (){
var statearr_34313 = [null,null,null,null,null,null,null,null];
(statearr_34313[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto__);

(statearr_34313[(1)] = (1));

return statearr_34313;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto____1 = (function (state_34310){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_34310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e34314){if((e34314 instanceof Object)){
var ex__29781__auto__ = e34314;
var statearr_34315_34317 = state_34310;
(statearr_34315_34317[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34318 = state_34310;
state_34310 = G__34318;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto__ = function(state_34310){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto____1.call(this,state_34310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__,figwheel_version,temp__5720__auto__))
})();
var state__29874__auto__ = (function (){var statearr_34316 = f__29873__auto__.call(null);
(statearr_34316[(6)] = c__29872__auto__);

return statearr_34316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__,figwheel_version,temp__5720__auto__))
);

return c__29872__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34319){
var map__34320 = p__34319;
var map__34320__$1 = (((((!((map__34320 == null))))?(((((map__34320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34320):map__34320);
var file = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34322 = "";
var G__34322__$1 = (cljs.core.truth_(file)?[G__34322,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34322);
var G__34322__$2 = (cljs.core.truth_(line)?[G__34322__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34322__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__34322__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34322__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34323){
var map__34324 = p__34323;
var map__34324__$1 = (((((!((map__34324 == null))))?(((((map__34324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34324):map__34324);
var ed = map__34324__$1;
var exception_data = cljs.core.get.call(null,map__34324__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34324__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_34327 = (function (){var G__34326 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34326)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__34326;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_34327);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34328){
var map__34329 = p__34328;
var map__34329__$1 = (((((!((map__34329 == null))))?(((((map__34329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34329):map__34329);
var w = map__34329__$1;
var message = cljs.core.get.call(null,map__34329__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34331 = cljs.core.seq.call(null,plugins);
var chunk__34332 = null;
var count__34333 = (0);
var i__34334 = (0);
while(true){
if((i__34334 < count__34333)){
var vec__34341 = cljs.core._nth.call(null,chunk__34332,i__34334);
var k = cljs.core.nth.call(null,vec__34341,(0),null);
var plugin = cljs.core.nth.call(null,vec__34341,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34347 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34331,chunk__34332,count__34333,i__34334,pl_34347,vec__34341,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34347.call(null,msg_hist);
});})(seq__34331,chunk__34332,count__34333,i__34334,pl_34347,vec__34341,k,plugin))
);
} else {
}


var G__34348 = seq__34331;
var G__34349 = chunk__34332;
var G__34350 = count__34333;
var G__34351 = (i__34334 + (1));
seq__34331 = G__34348;
chunk__34332 = G__34349;
count__34333 = G__34350;
i__34334 = G__34351;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34331);
if(temp__5720__auto__){
var seq__34331__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34331__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34331__$1);
var G__34352 = cljs.core.chunk_rest.call(null,seq__34331__$1);
var G__34353 = c__4550__auto__;
var G__34354 = cljs.core.count.call(null,c__4550__auto__);
var G__34355 = (0);
seq__34331 = G__34352;
chunk__34332 = G__34353;
count__34333 = G__34354;
i__34334 = G__34355;
continue;
} else {
var vec__34344 = cljs.core.first.call(null,seq__34331__$1);
var k = cljs.core.nth.call(null,vec__34344,(0),null);
var plugin = cljs.core.nth.call(null,vec__34344,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34356 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34331,chunk__34332,count__34333,i__34334,pl_34356,vec__34344,k,plugin,seq__34331__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34356.call(null,msg_hist);
});})(seq__34331,chunk__34332,count__34333,i__34334,pl_34356,vec__34344,k,plugin,seq__34331__$1,temp__5720__auto__))
);
} else {
}


var G__34357 = cljs.core.next.call(null,seq__34331__$1);
var G__34358 = null;
var G__34359 = (0);
var G__34360 = (0);
seq__34331 = G__34357;
chunk__34332 = G__34358;
count__34333 = G__34359;
i__34334 = G__34360;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34362 = arguments.length;
switch (G__34362) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34363_34368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34364_34369 = null;
var count__34365_34370 = (0);
var i__34366_34371 = (0);
while(true){
if((i__34366_34371 < count__34365_34370)){
var msg_34372 = cljs.core._nth.call(null,chunk__34364_34369,i__34366_34371);
figwheel.client.socket.handle_incoming_message.call(null,msg_34372);


var G__34373 = seq__34363_34368;
var G__34374 = chunk__34364_34369;
var G__34375 = count__34365_34370;
var G__34376 = (i__34366_34371 + (1));
seq__34363_34368 = G__34373;
chunk__34364_34369 = G__34374;
count__34365_34370 = G__34375;
i__34366_34371 = G__34376;
continue;
} else {
var temp__5720__auto___34377 = cljs.core.seq.call(null,seq__34363_34368);
if(temp__5720__auto___34377){
var seq__34363_34378__$1 = temp__5720__auto___34377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34363_34378__$1)){
var c__4550__auto___34379 = cljs.core.chunk_first.call(null,seq__34363_34378__$1);
var G__34380 = cljs.core.chunk_rest.call(null,seq__34363_34378__$1);
var G__34381 = c__4550__auto___34379;
var G__34382 = cljs.core.count.call(null,c__4550__auto___34379);
var G__34383 = (0);
seq__34363_34368 = G__34380;
chunk__34364_34369 = G__34381;
count__34365_34370 = G__34382;
i__34366_34371 = G__34383;
continue;
} else {
var msg_34384 = cljs.core.first.call(null,seq__34363_34378__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34384);


var G__34385 = cljs.core.next.call(null,seq__34363_34378__$1);
var G__34386 = null;
var G__34387 = (0);
var G__34388 = (0);
seq__34363_34368 = G__34385;
chunk__34364_34369 = G__34386;
count__34365_34370 = G__34387;
i__34366_34371 = G__34388;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34393 = arguments.length;
var i__4731__auto___34394 = (0);
while(true){
if((i__4731__auto___34394 < len__4730__auto___34393)){
args__4736__auto__.push((arguments[i__4731__auto___34394]));

var G__34395 = (i__4731__auto___34394 + (1));
i__4731__auto___34394 = G__34395;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34390){
var map__34391 = p__34390;
var map__34391__$1 = (((((!((map__34391 == null))))?(((((map__34391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34391):map__34391);
var opts = map__34391__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34389));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34396){if((e34396 instanceof Error)){
var e = e34396;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34396;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34397){
var map__34398 = p__34397;
var map__34398__$1 = (((((!((map__34398 == null))))?(((((map__34398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34398):map__34398);
var msg_name = cljs.core.get.call(null,map__34398__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1572042003772
