// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32044_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32044_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32045 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32046 = null;
var count__32047 = (0);
var i__32048 = (0);
while(true){
if((i__32048 < count__32047)){
var n = cljs.core._nth.call(null,chunk__32046,i__32048);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32049 = seq__32045;
var G__32050 = chunk__32046;
var G__32051 = count__32047;
var G__32052 = (i__32048 + (1));
seq__32045 = G__32049;
chunk__32046 = G__32050;
count__32047 = G__32051;
i__32048 = G__32052;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32045);
if(temp__5720__auto__){
var seq__32045__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32045__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32045__$1);
var G__32053 = cljs.core.chunk_rest.call(null,seq__32045__$1);
var G__32054 = c__4550__auto__;
var G__32055 = cljs.core.count.call(null,c__4550__auto__);
var G__32056 = (0);
seq__32045 = G__32053;
chunk__32046 = G__32054;
count__32047 = G__32055;
i__32048 = G__32056;
continue;
} else {
var n = cljs.core.first.call(null,seq__32045__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32057 = cljs.core.next.call(null,seq__32045__$1);
var G__32058 = null;
var G__32059 = (0);
var G__32060 = (0);
seq__32045 = G__32057;
chunk__32046 = G__32058;
count__32047 = G__32059;
i__32048 = G__32060;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__32061){
var vec__32062 = p__32061;
var _ = cljs.core.nth.call(null,vec__32062,(0),null);
var v = cljs.core.nth.call(null,vec__32062,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__32065){
var vec__32066 = p__32065;
var k = cljs.core.nth.call(null,vec__32066,(0),null);
var v = cljs.core.nth.call(null,vec__32066,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32078_32086 = cljs.core.seq.call(null,deps);
var chunk__32079_32087 = null;
var count__32080_32088 = (0);
var i__32081_32089 = (0);
while(true){
if((i__32081_32089 < count__32080_32088)){
var dep_32090 = cljs.core._nth.call(null,chunk__32079_32087,i__32081_32089);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32090;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32090));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32090,(depth + (1)),state);
} else {
}


var G__32091 = seq__32078_32086;
var G__32092 = chunk__32079_32087;
var G__32093 = count__32080_32088;
var G__32094 = (i__32081_32089 + (1));
seq__32078_32086 = G__32091;
chunk__32079_32087 = G__32092;
count__32080_32088 = G__32093;
i__32081_32089 = G__32094;
continue;
} else {
var temp__5720__auto___32095 = cljs.core.seq.call(null,seq__32078_32086);
if(temp__5720__auto___32095){
var seq__32078_32096__$1 = temp__5720__auto___32095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32078_32096__$1)){
var c__4550__auto___32097 = cljs.core.chunk_first.call(null,seq__32078_32096__$1);
var G__32098 = cljs.core.chunk_rest.call(null,seq__32078_32096__$1);
var G__32099 = c__4550__auto___32097;
var G__32100 = cljs.core.count.call(null,c__4550__auto___32097);
var G__32101 = (0);
seq__32078_32086 = G__32098;
chunk__32079_32087 = G__32099;
count__32080_32088 = G__32100;
i__32081_32089 = G__32101;
continue;
} else {
var dep_32102 = cljs.core.first.call(null,seq__32078_32096__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_32102;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32102));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32102,(depth + (1)),state);
} else {
}


var G__32103 = cljs.core.next.call(null,seq__32078_32096__$1);
var G__32104 = null;
var G__32105 = (0);
var G__32106 = (0);
seq__32078_32086 = G__32103;
chunk__32079_32087 = G__32104;
count__32080_32088 = G__32105;
i__32081_32089 = G__32106;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32082){
var vec__32083 = p__32082;
var seq__32084 = cljs.core.seq.call(null,vec__32083);
var first__32085 = cljs.core.first.call(null,seq__32084);
var seq__32084__$1 = cljs.core.next.call(null,seq__32084);
var x = first__32085;
var xs = seq__32084__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32083,seq__32084,first__32085,seq__32084__$1,x,xs,get_deps__$1){
return (function (p1__32069_SHARP_){
return clojure.set.difference.call(null,p1__32069_SHARP_,x);
});})(vec__32083,seq__32084,first__32085,seq__32084__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32107 = cljs.core.seq.call(null,provides);
var chunk__32108 = null;
var count__32109 = (0);
var i__32110 = (0);
while(true){
if((i__32110 < count__32109)){
var prov = cljs.core._nth.call(null,chunk__32108,i__32110);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32119_32127 = cljs.core.seq.call(null,requires);
var chunk__32120_32128 = null;
var count__32121_32129 = (0);
var i__32122_32130 = (0);
while(true){
if((i__32122_32130 < count__32121_32129)){
var req_32131 = cljs.core._nth.call(null,chunk__32120_32128,i__32122_32130);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32131,prov);


var G__32132 = seq__32119_32127;
var G__32133 = chunk__32120_32128;
var G__32134 = count__32121_32129;
var G__32135 = (i__32122_32130 + (1));
seq__32119_32127 = G__32132;
chunk__32120_32128 = G__32133;
count__32121_32129 = G__32134;
i__32122_32130 = G__32135;
continue;
} else {
var temp__5720__auto___32136 = cljs.core.seq.call(null,seq__32119_32127);
if(temp__5720__auto___32136){
var seq__32119_32137__$1 = temp__5720__auto___32136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32119_32137__$1)){
var c__4550__auto___32138 = cljs.core.chunk_first.call(null,seq__32119_32137__$1);
var G__32139 = cljs.core.chunk_rest.call(null,seq__32119_32137__$1);
var G__32140 = c__4550__auto___32138;
var G__32141 = cljs.core.count.call(null,c__4550__auto___32138);
var G__32142 = (0);
seq__32119_32127 = G__32139;
chunk__32120_32128 = G__32140;
count__32121_32129 = G__32141;
i__32122_32130 = G__32142;
continue;
} else {
var req_32143 = cljs.core.first.call(null,seq__32119_32137__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32143,prov);


var G__32144 = cljs.core.next.call(null,seq__32119_32137__$1);
var G__32145 = null;
var G__32146 = (0);
var G__32147 = (0);
seq__32119_32127 = G__32144;
chunk__32120_32128 = G__32145;
count__32121_32129 = G__32146;
i__32122_32130 = G__32147;
continue;
}
} else {
}
}
break;
}


var G__32148 = seq__32107;
var G__32149 = chunk__32108;
var G__32150 = count__32109;
var G__32151 = (i__32110 + (1));
seq__32107 = G__32148;
chunk__32108 = G__32149;
count__32109 = G__32150;
i__32110 = G__32151;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32107);
if(temp__5720__auto__){
var seq__32107__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32107__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32107__$1);
var G__32152 = cljs.core.chunk_rest.call(null,seq__32107__$1);
var G__32153 = c__4550__auto__;
var G__32154 = cljs.core.count.call(null,c__4550__auto__);
var G__32155 = (0);
seq__32107 = G__32152;
chunk__32108 = G__32153;
count__32109 = G__32154;
i__32110 = G__32155;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32107__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32123_32156 = cljs.core.seq.call(null,requires);
var chunk__32124_32157 = null;
var count__32125_32158 = (0);
var i__32126_32159 = (0);
while(true){
if((i__32126_32159 < count__32125_32158)){
var req_32160 = cljs.core._nth.call(null,chunk__32124_32157,i__32126_32159);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32160,prov);


var G__32161 = seq__32123_32156;
var G__32162 = chunk__32124_32157;
var G__32163 = count__32125_32158;
var G__32164 = (i__32126_32159 + (1));
seq__32123_32156 = G__32161;
chunk__32124_32157 = G__32162;
count__32125_32158 = G__32163;
i__32126_32159 = G__32164;
continue;
} else {
var temp__5720__auto___32165__$1 = cljs.core.seq.call(null,seq__32123_32156);
if(temp__5720__auto___32165__$1){
var seq__32123_32166__$1 = temp__5720__auto___32165__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32123_32166__$1)){
var c__4550__auto___32167 = cljs.core.chunk_first.call(null,seq__32123_32166__$1);
var G__32168 = cljs.core.chunk_rest.call(null,seq__32123_32166__$1);
var G__32169 = c__4550__auto___32167;
var G__32170 = cljs.core.count.call(null,c__4550__auto___32167);
var G__32171 = (0);
seq__32123_32156 = G__32168;
chunk__32124_32157 = G__32169;
count__32125_32158 = G__32170;
i__32126_32159 = G__32171;
continue;
} else {
var req_32172 = cljs.core.first.call(null,seq__32123_32166__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32172,prov);


var G__32173 = cljs.core.next.call(null,seq__32123_32166__$1);
var G__32174 = null;
var G__32175 = (0);
var G__32176 = (0);
seq__32123_32156 = G__32173;
chunk__32124_32157 = G__32174;
count__32125_32158 = G__32175;
i__32126_32159 = G__32176;
continue;
}
} else {
}
}
break;
}


var G__32177 = cljs.core.next.call(null,seq__32107__$1);
var G__32178 = null;
var G__32179 = (0);
var G__32180 = (0);
seq__32107 = G__32177;
chunk__32108 = G__32178;
count__32109 = G__32179;
i__32110 = G__32180;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32181_32185 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32182_32186 = null;
var count__32183_32187 = (0);
var i__32184_32188 = (0);
while(true){
if((i__32184_32188 < count__32183_32187)){
var ns_32189 = cljs.core._nth.call(null,chunk__32182_32186,i__32184_32188);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32189);


var G__32190 = seq__32181_32185;
var G__32191 = chunk__32182_32186;
var G__32192 = count__32183_32187;
var G__32193 = (i__32184_32188 + (1));
seq__32181_32185 = G__32190;
chunk__32182_32186 = G__32191;
count__32183_32187 = G__32192;
i__32184_32188 = G__32193;
continue;
} else {
var temp__5720__auto___32194 = cljs.core.seq.call(null,seq__32181_32185);
if(temp__5720__auto___32194){
var seq__32181_32195__$1 = temp__5720__auto___32194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32181_32195__$1)){
var c__4550__auto___32196 = cljs.core.chunk_first.call(null,seq__32181_32195__$1);
var G__32197 = cljs.core.chunk_rest.call(null,seq__32181_32195__$1);
var G__32198 = c__4550__auto___32196;
var G__32199 = cljs.core.count.call(null,c__4550__auto___32196);
var G__32200 = (0);
seq__32181_32185 = G__32197;
chunk__32182_32186 = G__32198;
count__32183_32187 = G__32199;
i__32184_32188 = G__32200;
continue;
} else {
var ns_32201 = cljs.core.first.call(null,seq__32181_32195__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32201);


var G__32202 = cljs.core.next.call(null,seq__32181_32195__$1);
var G__32203 = null;
var G__32204 = (0);
var G__32205 = (0);
seq__32181_32185 = G__32202;
chunk__32182_32186 = G__32203;
count__32183_32187 = G__32204;
i__32184_32188 = G__32205;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32206__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32207__i = 0, G__32207__a = new Array(arguments.length -  0);
while (G__32207__i < G__32207__a.length) {G__32207__a[G__32207__i] = arguments[G__32207__i + 0]; ++G__32207__i;}
  args = new cljs.core.IndexedSeq(G__32207__a,0,null);
} 
return G__32206__delegate.call(this,args);};
G__32206.cljs$lang$maxFixedArity = 0;
G__32206.cljs$lang$applyTo = (function (arglist__32208){
var args = cljs.core.seq(arglist__32208);
return G__32206__delegate(args);
});
G__32206.cljs$core$IFn$_invoke$arity$variadic = G__32206__delegate;
return G__32206;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32209_SHARP_,p2__32210_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32209_SHARP_)),p2__32210_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32211_SHARP_,p2__32212_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32211_SHARP_),p2__32212_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32213 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32213.addCallback(((function (G__32213){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32213))
);

G__32213.addErrback(((function (G__32213){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32213))
);

return G__32213;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32214){if((e32214 instanceof Error)){
var e = e32214;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32214;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32215){if((e32215 instanceof Error)){
var e = e32215;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32215;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32216 = cljs.core._EQ_;
var expr__32217 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32216.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32217))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32216.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32217))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32216.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32217))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32216,expr__32217){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32216,expr__32217))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32219,callback){
var map__32220 = p__32219;
var map__32220__$1 = (((((!((map__32220 == null))))?(((((map__32220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32220):map__32220);
var file_msg = map__32220__$1;
var request_url = cljs.core.get.call(null,map__32220__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32220,map__32220__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32220,map__32220__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__){
return (function (state_32258){
var state_val_32259 = (state_32258[(1)]);
if((state_val_32259 === (7))){
var inst_32254 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32260_32286 = state_32258__$1;
(statearr_32260_32286[(2)] = inst_32254);

(statearr_32260_32286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (1))){
var state_32258__$1 = state_32258;
var statearr_32261_32287 = state_32258__$1;
(statearr_32261_32287[(2)] = null);

(statearr_32261_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (4))){
var inst_32224 = (state_32258[(7)]);
var inst_32224__$1 = (state_32258[(2)]);
var state_32258__$1 = (function (){var statearr_32262 = state_32258;
(statearr_32262[(7)] = inst_32224__$1);

return statearr_32262;
})();
if(cljs.core.truth_(inst_32224__$1)){
var statearr_32263_32288 = state_32258__$1;
(statearr_32263_32288[(1)] = (5));

} else {
var statearr_32264_32289 = state_32258__$1;
(statearr_32264_32289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (15))){
var inst_32237 = (state_32258[(8)]);
var inst_32239 = (state_32258[(9)]);
var inst_32241 = inst_32239.call(null,inst_32237);
var state_32258__$1 = state_32258;
var statearr_32265_32290 = state_32258__$1;
(statearr_32265_32290[(2)] = inst_32241);

(statearr_32265_32290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (13))){
var inst_32248 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32266_32291 = state_32258__$1;
(statearr_32266_32291[(2)] = inst_32248);

(statearr_32266_32291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (6))){
var state_32258__$1 = state_32258;
var statearr_32267_32292 = state_32258__$1;
(statearr_32267_32292[(2)] = null);

(statearr_32267_32292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (17))){
var inst_32245 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
var statearr_32268_32293 = state_32258__$1;
(statearr_32268_32293[(2)] = inst_32245);

(statearr_32268_32293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (3))){
var inst_32256 = (state_32258[(2)]);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32258__$1,inst_32256);
} else {
if((state_val_32259 === (12))){
var state_32258__$1 = state_32258;
var statearr_32269_32294 = state_32258__$1;
(statearr_32269_32294[(2)] = null);

(statearr_32269_32294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (2))){
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32258__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32259 === (11))){
var inst_32229 = (state_32258[(10)]);
var inst_32235 = figwheel.client.file_reloading.blocking_load.call(null,inst_32229);
var state_32258__$1 = state_32258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32258__$1,(14),inst_32235);
} else {
if((state_val_32259 === (9))){
var inst_32229 = (state_32258[(10)]);
var state_32258__$1 = state_32258;
if(cljs.core.truth_(inst_32229)){
var statearr_32270_32295 = state_32258__$1;
(statearr_32270_32295[(1)] = (11));

} else {
var statearr_32271_32296 = state_32258__$1;
(statearr_32271_32296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (5))){
var inst_32224 = (state_32258[(7)]);
var inst_32230 = (state_32258[(11)]);
var inst_32229 = cljs.core.nth.call(null,inst_32224,(0),null);
var inst_32230__$1 = cljs.core.nth.call(null,inst_32224,(1),null);
var state_32258__$1 = (function (){var statearr_32272 = state_32258;
(statearr_32272[(10)] = inst_32229);

(statearr_32272[(11)] = inst_32230__$1);

return statearr_32272;
})();
if(cljs.core.truth_(inst_32230__$1)){
var statearr_32273_32297 = state_32258__$1;
(statearr_32273_32297[(1)] = (8));

} else {
var statearr_32274_32298 = state_32258__$1;
(statearr_32274_32298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (14))){
var inst_32229 = (state_32258[(10)]);
var inst_32239 = (state_32258[(9)]);
var inst_32237 = (state_32258[(2)]);
var inst_32238 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32239__$1 = cljs.core.get.call(null,inst_32238,inst_32229);
var state_32258__$1 = (function (){var statearr_32275 = state_32258;
(statearr_32275[(8)] = inst_32237);

(statearr_32275[(9)] = inst_32239__$1);

return statearr_32275;
})();
if(cljs.core.truth_(inst_32239__$1)){
var statearr_32276_32299 = state_32258__$1;
(statearr_32276_32299[(1)] = (15));

} else {
var statearr_32277_32300 = state_32258__$1;
(statearr_32277_32300[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (16))){
var inst_32237 = (state_32258[(8)]);
var inst_32243 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32237);
var state_32258__$1 = state_32258;
var statearr_32278_32301 = state_32258__$1;
(statearr_32278_32301[(2)] = inst_32243);

(statearr_32278_32301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (10))){
var inst_32250 = (state_32258[(2)]);
var state_32258__$1 = (function (){var statearr_32279 = state_32258;
(statearr_32279[(12)] = inst_32250);

return statearr_32279;
})();
var statearr_32280_32302 = state_32258__$1;
(statearr_32280_32302[(2)] = null);

(statearr_32280_32302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32259 === (8))){
var inst_32230 = (state_32258[(11)]);
var inst_32232 = eval(inst_32230);
var state_32258__$1 = state_32258;
var statearr_32281_32303 = state_32258__$1;
(statearr_32281_32303[(2)] = inst_32232);

(statearr_32281_32303[(1)] = (10));


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
});})(c__29872__auto__))
;
return ((function (switch__29777__auto__,c__29872__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29778__auto__ = null;
var figwheel$client$file_reloading$state_machine__29778__auto____0 = (function (){
var statearr_32282 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32282[(0)] = figwheel$client$file_reloading$state_machine__29778__auto__);

(statearr_32282[(1)] = (1));

return statearr_32282;
});
var figwheel$client$file_reloading$state_machine__29778__auto____1 = (function (state_32258){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_32258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e32283){if((e32283 instanceof Object)){
var ex__29781__auto__ = e32283;
var statearr_32284_32304 = state_32258;
(statearr_32284_32304[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32305 = state_32258;
state_32258 = G__32305;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29778__auto__ = function(state_32258){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29778__auto____1.call(this,state_32258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29778__auto____0;
figwheel$client$file_reloading$state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29778__auto____1;
return figwheel$client$file_reloading$state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__))
})();
var state__29874__auto__ = (function (){var statearr_32285 = f__29873__auto__.call(null);
(statearr_32285[(6)] = c__29872__auto__);

return statearr_32285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__))
);

return c__29872__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32307 = arguments.length;
switch (G__32307) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32309,callback){
var map__32310 = p__32309;
var map__32310__$1 = (((((!((map__32310 == null))))?(((((map__32310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32310):map__32310);
var file_msg = map__32310__$1;
var namespace = cljs.core.get.call(null,map__32310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32310,map__32310__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32310,map__32310__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32312){
var map__32313 = p__32312;
var map__32313__$1 = (((((!((map__32313 == null))))?(((((map__32313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32313):map__32313);
var file_msg = map__32313__$1;
var namespace = cljs.core.get.call(null,map__32313__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32315){
var map__32316 = p__32315;
var map__32316__$1 = (((((!((map__32316 == null))))?(((((map__32316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32316):map__32316);
var file_msg = map__32316__$1;
var namespace = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32318,callback){
var map__32319 = p__32318;
var map__32319__$1 = (((((!((map__32319 == null))))?(((((map__32319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32319):map__32319);
var file_msg = map__32319__$1;
var request_url = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29872__auto___32369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto___32369,out){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto___32369,out){
return (function (state_32354){
var state_val_32355 = (state_32354[(1)]);
if((state_val_32355 === (1))){
var inst_32328 = cljs.core.seq.call(null,files);
var inst_32329 = cljs.core.first.call(null,inst_32328);
var inst_32330 = cljs.core.next.call(null,inst_32328);
var inst_32331 = files;
var state_32354__$1 = (function (){var statearr_32356 = state_32354;
(statearr_32356[(7)] = inst_32331);

(statearr_32356[(8)] = inst_32330);

(statearr_32356[(9)] = inst_32329);

return statearr_32356;
})();
var statearr_32357_32370 = state_32354__$1;
(statearr_32357_32370[(2)] = null);

(statearr_32357_32370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (2))){
var inst_32331 = (state_32354[(7)]);
var inst_32337 = (state_32354[(10)]);
var inst_32336 = cljs.core.seq.call(null,inst_32331);
var inst_32337__$1 = cljs.core.first.call(null,inst_32336);
var inst_32338 = cljs.core.next.call(null,inst_32336);
var inst_32339 = (inst_32337__$1 == null);
var inst_32340 = cljs.core.not.call(null,inst_32339);
var state_32354__$1 = (function (){var statearr_32358 = state_32354;
(statearr_32358[(10)] = inst_32337__$1);

(statearr_32358[(11)] = inst_32338);

return statearr_32358;
})();
if(inst_32340){
var statearr_32359_32371 = state_32354__$1;
(statearr_32359_32371[(1)] = (4));

} else {
var statearr_32360_32372 = state_32354__$1;
(statearr_32360_32372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (3))){
var inst_32352 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32354__$1,inst_32352);
} else {
if((state_val_32355 === (4))){
var inst_32337 = (state_32354[(10)]);
var inst_32342 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32337);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32354__$1,(7),inst_32342);
} else {
if((state_val_32355 === (5))){
var inst_32348 = cljs.core.async.close_BANG_.call(null,out);
var state_32354__$1 = state_32354;
var statearr_32361_32373 = state_32354__$1;
(statearr_32361_32373[(2)] = inst_32348);

(statearr_32361_32373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (6))){
var inst_32350 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32362_32374 = state_32354__$1;
(statearr_32362_32374[(2)] = inst_32350);

(statearr_32362_32374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (7))){
var inst_32338 = (state_32354[(11)]);
var inst_32344 = (state_32354[(2)]);
var inst_32345 = cljs.core.async.put_BANG_.call(null,out,inst_32344);
var inst_32331 = inst_32338;
var state_32354__$1 = (function (){var statearr_32363 = state_32354;
(statearr_32363[(7)] = inst_32331);

(statearr_32363[(12)] = inst_32345);

return statearr_32363;
})();
var statearr_32364_32375 = state_32354__$1;
(statearr_32364_32375[(2)] = null);

(statearr_32364_32375[(1)] = (2));


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
});})(c__29872__auto___32369,out))
;
return ((function (switch__29777__auto__,c__29872__auto___32369,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto____0 = (function (){
var statearr_32365 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32365[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto__);

(statearr_32365[(1)] = (1));

return statearr_32365;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto____1 = (function (state_32354){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_32354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e32366){if((e32366 instanceof Object)){
var ex__29781__auto__ = e32366;
var statearr_32367_32376 = state_32354;
(statearr_32367_32376[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32377 = state_32354;
state_32354 = G__32377;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto__ = function(state_32354){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto____1.call(this,state_32354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto___32369,out))
})();
var state__29874__auto__ = (function (){var statearr_32368 = f__29873__auto__.call(null);
(statearr_32368[(6)] = c__29872__auto___32369);

return statearr_32368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto___32369,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32378,opts){
var map__32379 = p__32378;
var map__32379__$1 = (((((!((map__32379 == null))))?(((((map__32379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32379):map__32379);
var eval_body = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32379__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32381){var e = e32381;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32382_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32382_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32383){
var vec__32384 = p__32383;
var k = cljs.core.nth.call(null,vec__32384,(0),null);
var v = cljs.core.nth.call(null,vec__32384,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32387){
var vec__32388 = p__32387;
var k = cljs.core.nth.call(null,vec__32388,(0),null);
var v = cljs.core.nth.call(null,vec__32388,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32394,p__32395){
var map__32396 = p__32394;
var map__32396__$1 = (((((!((map__32396 == null))))?(((((map__32396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32396):map__32396);
var opts = map__32396__$1;
var before_jsload = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32396__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32397 = p__32395;
var map__32397__$1 = (((((!((map__32397 == null))))?(((((map__32397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32397):map__32397);
var msg = map__32397__$1;
var files = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29872__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29873__auto__ = (function (){var switch__29777__auto__ = ((function (c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32551){
var state_val_32552 = (state_32551[(1)]);
if((state_val_32552 === (7))){
var inst_32411 = (state_32551[(7)]);
var inst_32414 = (state_32551[(8)]);
var inst_32412 = (state_32551[(9)]);
var inst_32413 = (state_32551[(10)]);
var inst_32419 = cljs.core._nth.call(null,inst_32412,inst_32414);
var inst_32420 = figwheel.client.file_reloading.eval_body.call(null,inst_32419,opts);
var inst_32421 = (inst_32414 + (1));
var tmp32553 = inst_32411;
var tmp32554 = inst_32412;
var tmp32555 = inst_32413;
var inst_32411__$1 = tmp32553;
var inst_32412__$1 = tmp32554;
var inst_32413__$1 = tmp32555;
var inst_32414__$1 = inst_32421;
var state_32551__$1 = (function (){var statearr_32556 = state_32551;
(statearr_32556[(7)] = inst_32411__$1);

(statearr_32556[(11)] = inst_32420);

(statearr_32556[(8)] = inst_32414__$1);

(statearr_32556[(9)] = inst_32412__$1);

(statearr_32556[(10)] = inst_32413__$1);

return statearr_32556;
})();
var statearr_32557_32640 = state_32551__$1;
(statearr_32557_32640[(2)] = null);

(statearr_32557_32640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (20))){
var inst_32454 = (state_32551[(12)]);
var inst_32462 = figwheel.client.file_reloading.sort_files.call(null,inst_32454);
var state_32551__$1 = state_32551;
var statearr_32558_32641 = state_32551__$1;
(statearr_32558_32641[(2)] = inst_32462);

(statearr_32558_32641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (27))){
var state_32551__$1 = state_32551;
var statearr_32559_32642 = state_32551__$1;
(statearr_32559_32642[(2)] = null);

(statearr_32559_32642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (1))){
var inst_32403 = (state_32551[(13)]);
var inst_32400 = before_jsload.call(null,files);
var inst_32401 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32402 = (function (){return ((function (inst_32403,inst_32400,inst_32401,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32391_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32391_SHARP_);
});
;})(inst_32403,inst_32400,inst_32401,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32403__$1 = cljs.core.filter.call(null,inst_32402,files);
var inst_32404 = cljs.core.not_empty.call(null,inst_32403__$1);
var state_32551__$1 = (function (){var statearr_32560 = state_32551;
(statearr_32560[(14)] = inst_32401);

(statearr_32560[(15)] = inst_32400);

(statearr_32560[(13)] = inst_32403__$1);

return statearr_32560;
})();
if(cljs.core.truth_(inst_32404)){
var statearr_32561_32643 = state_32551__$1;
(statearr_32561_32643[(1)] = (2));

} else {
var statearr_32562_32644 = state_32551__$1;
(statearr_32562_32644[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (24))){
var state_32551__$1 = state_32551;
var statearr_32563_32645 = state_32551__$1;
(statearr_32563_32645[(2)] = null);

(statearr_32563_32645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (39))){
var inst_32504 = (state_32551[(16)]);
var state_32551__$1 = state_32551;
var statearr_32564_32646 = state_32551__$1;
(statearr_32564_32646[(2)] = inst_32504);

(statearr_32564_32646[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (46))){
var inst_32546 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32565_32647 = state_32551__$1;
(statearr_32565_32647[(2)] = inst_32546);

(statearr_32565_32647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (4))){
var inst_32448 = (state_32551[(2)]);
var inst_32449 = cljs.core.List.EMPTY;
var inst_32450 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32449);
var inst_32451 = (function (){return ((function (inst_32448,inst_32449,inst_32450,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32392_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32392_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32392_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32392_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32448,inst_32449,inst_32450,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32452 = cljs.core.filter.call(null,inst_32451,files);
var inst_32453 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32454 = cljs.core.concat.call(null,inst_32452,inst_32453);
var state_32551__$1 = (function (){var statearr_32566 = state_32551;
(statearr_32566[(12)] = inst_32454);

(statearr_32566[(17)] = inst_32448);

(statearr_32566[(18)] = inst_32450);

return statearr_32566;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32567_32648 = state_32551__$1;
(statearr_32567_32648[(1)] = (16));

} else {
var statearr_32568_32649 = state_32551__$1;
(statearr_32568_32649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (15))){
var inst_32438 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32569_32650 = state_32551__$1;
(statearr_32569_32650[(2)] = inst_32438);

(statearr_32569_32650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (21))){
var inst_32464 = (state_32551[(19)]);
var inst_32464__$1 = (state_32551[(2)]);
var inst_32465 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32464__$1);
var state_32551__$1 = (function (){var statearr_32570 = state_32551;
(statearr_32570[(19)] = inst_32464__$1);

return statearr_32570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32551__$1,(22),inst_32465);
} else {
if((state_val_32552 === (31))){
var inst_32549 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32551__$1,inst_32549);
} else {
if((state_val_32552 === (32))){
var inst_32504 = (state_32551[(16)]);
var inst_32509 = inst_32504.cljs$lang$protocol_mask$partition0$;
var inst_32510 = (inst_32509 & (64));
var inst_32511 = inst_32504.cljs$core$ISeq$;
var inst_32512 = (cljs.core.PROTOCOL_SENTINEL === inst_32511);
var inst_32513 = ((inst_32510) || (inst_32512));
var state_32551__$1 = state_32551;
if(cljs.core.truth_(inst_32513)){
var statearr_32571_32651 = state_32551__$1;
(statearr_32571_32651[(1)] = (35));

} else {
var statearr_32572_32652 = state_32551__$1;
(statearr_32572_32652[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (40))){
var inst_32526 = (state_32551[(20)]);
var inst_32525 = (state_32551[(2)]);
var inst_32526__$1 = cljs.core.get.call(null,inst_32525,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32527 = cljs.core.get.call(null,inst_32525,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32528 = cljs.core.not_empty.call(null,inst_32526__$1);
var state_32551__$1 = (function (){var statearr_32573 = state_32551;
(statearr_32573[(20)] = inst_32526__$1);

(statearr_32573[(21)] = inst_32527);

return statearr_32573;
})();
if(cljs.core.truth_(inst_32528)){
var statearr_32574_32653 = state_32551__$1;
(statearr_32574_32653[(1)] = (41));

} else {
var statearr_32575_32654 = state_32551__$1;
(statearr_32575_32654[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (33))){
var state_32551__$1 = state_32551;
var statearr_32576_32655 = state_32551__$1;
(statearr_32576_32655[(2)] = false);

(statearr_32576_32655[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (13))){
var inst_32424 = (state_32551[(22)]);
var inst_32428 = cljs.core.chunk_first.call(null,inst_32424);
var inst_32429 = cljs.core.chunk_rest.call(null,inst_32424);
var inst_32430 = cljs.core.count.call(null,inst_32428);
var inst_32411 = inst_32429;
var inst_32412 = inst_32428;
var inst_32413 = inst_32430;
var inst_32414 = (0);
var state_32551__$1 = (function (){var statearr_32577 = state_32551;
(statearr_32577[(7)] = inst_32411);

(statearr_32577[(8)] = inst_32414);

(statearr_32577[(9)] = inst_32412);

(statearr_32577[(10)] = inst_32413);

return statearr_32577;
})();
var statearr_32578_32656 = state_32551__$1;
(statearr_32578_32656[(2)] = null);

(statearr_32578_32656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (22))){
var inst_32468 = (state_32551[(23)]);
var inst_32464 = (state_32551[(19)]);
var inst_32467 = (state_32551[(24)]);
var inst_32472 = (state_32551[(25)]);
var inst_32467__$1 = (state_32551[(2)]);
var inst_32468__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32467__$1);
var inst_32469 = (function (){var all_files = inst_32464;
var res_SINGLEQUOTE_ = inst_32467__$1;
var res = inst_32468__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32468,inst_32464,inst_32467,inst_32472,inst_32467__$1,inst_32468__$1,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32393_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32393_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32468,inst_32464,inst_32467,inst_32472,inst_32467__$1,inst_32468__$1,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32470 = cljs.core.filter.call(null,inst_32469,inst_32467__$1);
var inst_32471 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32472__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32471);
var inst_32473 = cljs.core.not_empty.call(null,inst_32472__$1);
var state_32551__$1 = (function (){var statearr_32579 = state_32551;
(statearr_32579[(23)] = inst_32468__$1);

(statearr_32579[(24)] = inst_32467__$1);

(statearr_32579[(25)] = inst_32472__$1);

(statearr_32579[(26)] = inst_32470);

return statearr_32579;
})();
if(cljs.core.truth_(inst_32473)){
var statearr_32580_32657 = state_32551__$1;
(statearr_32580_32657[(1)] = (23));

} else {
var statearr_32581_32658 = state_32551__$1;
(statearr_32581_32658[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (36))){
var state_32551__$1 = state_32551;
var statearr_32582_32659 = state_32551__$1;
(statearr_32582_32659[(2)] = false);

(statearr_32582_32659[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (41))){
var inst_32526 = (state_32551[(20)]);
var inst_32530 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32531 = cljs.core.map.call(null,inst_32530,inst_32526);
var inst_32532 = cljs.core.pr_str.call(null,inst_32531);
var inst_32533 = ["figwheel-no-load meta-data: ",inst_32532].join('');
var inst_32534 = figwheel.client.utils.log.call(null,inst_32533);
var state_32551__$1 = state_32551;
var statearr_32583_32660 = state_32551__$1;
(statearr_32583_32660[(2)] = inst_32534);

(statearr_32583_32660[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (43))){
var inst_32527 = (state_32551[(21)]);
var inst_32537 = (state_32551[(2)]);
var inst_32538 = cljs.core.not_empty.call(null,inst_32527);
var state_32551__$1 = (function (){var statearr_32584 = state_32551;
(statearr_32584[(27)] = inst_32537);

return statearr_32584;
})();
if(cljs.core.truth_(inst_32538)){
var statearr_32585_32661 = state_32551__$1;
(statearr_32585_32661[(1)] = (44));

} else {
var statearr_32586_32662 = state_32551__$1;
(statearr_32586_32662[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (29))){
var inst_32504 = (state_32551[(16)]);
var inst_32468 = (state_32551[(23)]);
var inst_32464 = (state_32551[(19)]);
var inst_32467 = (state_32551[(24)]);
var inst_32472 = (state_32551[(25)]);
var inst_32470 = (state_32551[(26)]);
var inst_32500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32503 = (function (){var all_files = inst_32464;
var res_SINGLEQUOTE_ = inst_32467;
var res = inst_32468;
var files_not_loaded = inst_32470;
var dependencies_that_loaded = inst_32472;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32504,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32500,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32502){
var map__32587 = p__32502;
var map__32587__$1 = (((((!((map__32587 == null))))?(((((map__32587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32587):map__32587);
var namespace = cljs.core.get.call(null,map__32587__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32504,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32500,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32504__$1 = cljs.core.group_by.call(null,inst_32503,inst_32470);
var inst_32506 = (inst_32504__$1 == null);
var inst_32507 = cljs.core.not.call(null,inst_32506);
var state_32551__$1 = (function (){var statearr_32589 = state_32551;
(statearr_32589[(16)] = inst_32504__$1);

(statearr_32589[(28)] = inst_32500);

return statearr_32589;
})();
if(inst_32507){
var statearr_32590_32663 = state_32551__$1;
(statearr_32590_32663[(1)] = (32));

} else {
var statearr_32591_32664 = state_32551__$1;
(statearr_32591_32664[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (44))){
var inst_32527 = (state_32551[(21)]);
var inst_32540 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32527);
var inst_32541 = cljs.core.pr_str.call(null,inst_32540);
var inst_32542 = ["not required: ",inst_32541].join('');
var inst_32543 = figwheel.client.utils.log.call(null,inst_32542);
var state_32551__$1 = state_32551;
var statearr_32592_32665 = state_32551__$1;
(statearr_32592_32665[(2)] = inst_32543);

(statearr_32592_32665[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (6))){
var inst_32445 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32593_32666 = state_32551__$1;
(statearr_32593_32666[(2)] = inst_32445);

(statearr_32593_32666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (28))){
var inst_32470 = (state_32551[(26)]);
var inst_32497 = (state_32551[(2)]);
var inst_32498 = cljs.core.not_empty.call(null,inst_32470);
var state_32551__$1 = (function (){var statearr_32594 = state_32551;
(statearr_32594[(29)] = inst_32497);

return statearr_32594;
})();
if(cljs.core.truth_(inst_32498)){
var statearr_32595_32667 = state_32551__$1;
(statearr_32595_32667[(1)] = (29));

} else {
var statearr_32596_32668 = state_32551__$1;
(statearr_32596_32668[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (25))){
var inst_32468 = (state_32551[(23)]);
var inst_32484 = (state_32551[(2)]);
var inst_32485 = cljs.core.not_empty.call(null,inst_32468);
var state_32551__$1 = (function (){var statearr_32597 = state_32551;
(statearr_32597[(30)] = inst_32484);

return statearr_32597;
})();
if(cljs.core.truth_(inst_32485)){
var statearr_32598_32669 = state_32551__$1;
(statearr_32598_32669[(1)] = (26));

} else {
var statearr_32599_32670 = state_32551__$1;
(statearr_32599_32670[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (34))){
var inst_32520 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
if(cljs.core.truth_(inst_32520)){
var statearr_32600_32671 = state_32551__$1;
(statearr_32600_32671[(1)] = (38));

} else {
var statearr_32601_32672 = state_32551__$1;
(statearr_32601_32672[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (17))){
var state_32551__$1 = state_32551;
var statearr_32602_32673 = state_32551__$1;
(statearr_32602_32673[(2)] = recompile_dependents);

(statearr_32602_32673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (3))){
var state_32551__$1 = state_32551;
var statearr_32603_32674 = state_32551__$1;
(statearr_32603_32674[(2)] = null);

(statearr_32603_32674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (12))){
var inst_32441 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32604_32675 = state_32551__$1;
(statearr_32604_32675[(2)] = inst_32441);

(statearr_32604_32675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (2))){
var inst_32403 = (state_32551[(13)]);
var inst_32410 = cljs.core.seq.call(null,inst_32403);
var inst_32411 = inst_32410;
var inst_32412 = null;
var inst_32413 = (0);
var inst_32414 = (0);
var state_32551__$1 = (function (){var statearr_32605 = state_32551;
(statearr_32605[(7)] = inst_32411);

(statearr_32605[(8)] = inst_32414);

(statearr_32605[(9)] = inst_32412);

(statearr_32605[(10)] = inst_32413);

return statearr_32605;
})();
var statearr_32606_32676 = state_32551__$1;
(statearr_32606_32676[(2)] = null);

(statearr_32606_32676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (23))){
var inst_32468 = (state_32551[(23)]);
var inst_32464 = (state_32551[(19)]);
var inst_32467 = (state_32551[(24)]);
var inst_32472 = (state_32551[(25)]);
var inst_32470 = (state_32551[(26)]);
var inst_32475 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32477 = (function (){var all_files = inst_32464;
var res_SINGLEQUOTE_ = inst_32467;
var res = inst_32468;
var files_not_loaded = inst_32470;
var dependencies_that_loaded = inst_32472;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32475,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32476){
var map__32607 = p__32476;
var map__32607__$1 = (((((!((map__32607 == null))))?(((((map__32607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32607):map__32607);
var request_url = cljs.core.get.call(null,map__32607__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32475,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32478 = cljs.core.reverse.call(null,inst_32472);
var inst_32479 = cljs.core.map.call(null,inst_32477,inst_32478);
var inst_32480 = cljs.core.pr_str.call(null,inst_32479);
var inst_32481 = figwheel.client.utils.log.call(null,inst_32480);
var state_32551__$1 = (function (){var statearr_32609 = state_32551;
(statearr_32609[(31)] = inst_32475);

return statearr_32609;
})();
var statearr_32610_32677 = state_32551__$1;
(statearr_32610_32677[(2)] = inst_32481);

(statearr_32610_32677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (35))){
var state_32551__$1 = state_32551;
var statearr_32611_32678 = state_32551__$1;
(statearr_32611_32678[(2)] = true);

(statearr_32611_32678[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (19))){
var inst_32454 = (state_32551[(12)]);
var inst_32460 = figwheel.client.file_reloading.expand_files.call(null,inst_32454);
var state_32551__$1 = state_32551;
var statearr_32612_32679 = state_32551__$1;
(statearr_32612_32679[(2)] = inst_32460);

(statearr_32612_32679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (11))){
var state_32551__$1 = state_32551;
var statearr_32613_32680 = state_32551__$1;
(statearr_32613_32680[(2)] = null);

(statearr_32613_32680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (9))){
var inst_32443 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32614_32681 = state_32551__$1;
(statearr_32614_32681[(2)] = inst_32443);

(statearr_32614_32681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (5))){
var inst_32414 = (state_32551[(8)]);
var inst_32413 = (state_32551[(10)]);
var inst_32416 = (inst_32414 < inst_32413);
var inst_32417 = inst_32416;
var state_32551__$1 = state_32551;
if(cljs.core.truth_(inst_32417)){
var statearr_32615_32682 = state_32551__$1;
(statearr_32615_32682[(1)] = (7));

} else {
var statearr_32616_32683 = state_32551__$1;
(statearr_32616_32683[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (14))){
var inst_32424 = (state_32551[(22)]);
var inst_32433 = cljs.core.first.call(null,inst_32424);
var inst_32434 = figwheel.client.file_reloading.eval_body.call(null,inst_32433,opts);
var inst_32435 = cljs.core.next.call(null,inst_32424);
var inst_32411 = inst_32435;
var inst_32412 = null;
var inst_32413 = (0);
var inst_32414 = (0);
var state_32551__$1 = (function (){var statearr_32617 = state_32551;
(statearr_32617[(7)] = inst_32411);

(statearr_32617[(32)] = inst_32434);

(statearr_32617[(8)] = inst_32414);

(statearr_32617[(9)] = inst_32412);

(statearr_32617[(10)] = inst_32413);

return statearr_32617;
})();
var statearr_32618_32684 = state_32551__$1;
(statearr_32618_32684[(2)] = null);

(statearr_32618_32684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (45))){
var state_32551__$1 = state_32551;
var statearr_32619_32685 = state_32551__$1;
(statearr_32619_32685[(2)] = null);

(statearr_32619_32685[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (26))){
var inst_32468 = (state_32551[(23)]);
var inst_32464 = (state_32551[(19)]);
var inst_32467 = (state_32551[(24)]);
var inst_32472 = (state_32551[(25)]);
var inst_32470 = (state_32551[(26)]);
var inst_32487 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32489 = (function (){var all_files = inst_32464;
var res_SINGLEQUOTE_ = inst_32467;
var res = inst_32468;
var files_not_loaded = inst_32470;
var dependencies_that_loaded = inst_32472;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32487,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32488){
var map__32620 = p__32488;
var map__32620__$1 = (((((!((map__32620 == null))))?(((((map__32620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32620):map__32620);
var namespace = cljs.core.get.call(null,map__32620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32620__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32487,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32490 = cljs.core.map.call(null,inst_32489,inst_32468);
var inst_32491 = cljs.core.pr_str.call(null,inst_32490);
var inst_32492 = figwheel.client.utils.log.call(null,inst_32491);
var inst_32493 = (function (){var all_files = inst_32464;
var res_SINGLEQUOTE_ = inst_32467;
var res = inst_32468;
var files_not_loaded = inst_32470;
var dependencies_that_loaded = inst_32472;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32487,inst_32489,inst_32490,inst_32491,inst_32492,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32468,inst_32464,inst_32467,inst_32472,inst_32470,inst_32487,inst_32489,inst_32490,inst_32491,inst_32492,state_val_32552,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32494 = setTimeout(inst_32493,(10));
var state_32551__$1 = (function (){var statearr_32622 = state_32551;
(statearr_32622[(33)] = inst_32487);

(statearr_32622[(34)] = inst_32492);

return statearr_32622;
})();
var statearr_32623_32686 = state_32551__$1;
(statearr_32623_32686[(2)] = inst_32494);

(statearr_32623_32686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (16))){
var state_32551__$1 = state_32551;
var statearr_32624_32687 = state_32551__$1;
(statearr_32624_32687[(2)] = reload_dependents);

(statearr_32624_32687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (38))){
var inst_32504 = (state_32551[(16)]);
var inst_32522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32504);
var state_32551__$1 = state_32551;
var statearr_32625_32688 = state_32551__$1;
(statearr_32625_32688[(2)] = inst_32522);

(statearr_32625_32688[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (30))){
var state_32551__$1 = state_32551;
var statearr_32626_32689 = state_32551__$1;
(statearr_32626_32689[(2)] = null);

(statearr_32626_32689[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (10))){
var inst_32424 = (state_32551[(22)]);
var inst_32426 = cljs.core.chunked_seq_QMARK_.call(null,inst_32424);
var state_32551__$1 = state_32551;
if(inst_32426){
var statearr_32627_32690 = state_32551__$1;
(statearr_32627_32690[(1)] = (13));

} else {
var statearr_32628_32691 = state_32551__$1;
(statearr_32628_32691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (18))){
var inst_32458 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
if(cljs.core.truth_(inst_32458)){
var statearr_32629_32692 = state_32551__$1;
(statearr_32629_32692[(1)] = (19));

} else {
var statearr_32630_32693 = state_32551__$1;
(statearr_32630_32693[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (42))){
var state_32551__$1 = state_32551;
var statearr_32631_32694 = state_32551__$1;
(statearr_32631_32694[(2)] = null);

(statearr_32631_32694[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (37))){
var inst_32517 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32632_32695 = state_32551__$1;
(statearr_32632_32695[(2)] = inst_32517);

(statearr_32632_32695[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (8))){
var inst_32411 = (state_32551[(7)]);
var inst_32424 = (state_32551[(22)]);
var inst_32424__$1 = cljs.core.seq.call(null,inst_32411);
var state_32551__$1 = (function (){var statearr_32633 = state_32551;
(statearr_32633[(22)] = inst_32424__$1);

return statearr_32633;
})();
if(inst_32424__$1){
var statearr_32634_32696 = state_32551__$1;
(statearr_32634_32696[(1)] = (10));

} else {
var statearr_32635_32697 = state_32551__$1;
(statearr_32635_32697[(1)] = (11));

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
}
});})(c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29777__auto__,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto____0 = (function (){
var statearr_32636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32636[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto__);

(statearr_32636[(1)] = (1));

return statearr_32636;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto____1 = (function (state_32551){
while(true){
var ret_value__29779__auto__ = (function (){try{while(true){
var result__29780__auto__ = switch__29777__auto__.call(null,state_32551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29780__auto__;
}
break;
}
}catch (e32637){if((e32637 instanceof Object)){
var ex__29781__auto__ = e32637;
var statearr_32638_32698 = state_32551;
(statearr_32638_32698[(5)] = ex__29781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32699 = state_32551;
state_32551 = G__32699;
continue;
} else {
return ret_value__29779__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto__ = function(state_32551){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto____1.call(this,state_32551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29778__auto__;
})()
;})(switch__29777__auto__,c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29874__auto__ = (function (){var statearr_32639 = f__29873__auto__.call(null);
(statearr_32639[(6)] = c__29872__auto__);

return statearr_32639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29874__auto__);
});})(c__29872__auto__,map__32396,map__32396__$1,opts,before_jsload,on_jsload,reload_dependents,map__32397,map__32397__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29872__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32702,link){
var map__32703 = p__32702;
var map__32703__$1 = (((((!((map__32703 == null))))?(((((map__32703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32703):map__32703);
var file = cljs.core.get.call(null,map__32703__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__32703,map__32703__$1,file){
return (function (p1__32700_SHARP_,p2__32701_SHARP_){
if(cljs.core._EQ_.call(null,p1__32700_SHARP_,p2__32701_SHARP_)){
return p1__32700_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__32703,map__32703__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32706){
var map__32707 = p__32706;
var map__32707__$1 = (((((!((map__32707 == null))))?(((((map__32707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32707):map__32707);
var match_length = cljs.core.get.call(null,map__32707__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32707__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32705_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32705_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32709_SHARP_,p2__32710_SHARP_){
return cljs.core.assoc.call(null,p1__32709_SHARP_,cljs.core.get.call(null,p2__32710_SHARP_,key),p2__32710_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32711 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32711);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32711);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32712,p__32713){
var map__32714 = p__32712;
var map__32714__$1 = (((((!((map__32714 == null))))?(((((map__32714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32714):map__32714);
var on_cssload = cljs.core.get.call(null,map__32714__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32715 = p__32713;
var map__32715__$1 = (((((!((map__32715 == null))))?(((((map__32715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32715):map__32715);
var files_msg = map__32715__$1;
var files = cljs.core.get.call(null,map__32715__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1572042001449
