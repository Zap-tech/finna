// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33584){
var map__33585 = p__33584;
var map__33585__$1 = (((((!((map__33585 == null))))?(((((map__33585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33585):map__33585);
var m = map__33585__$1;
var n = cljs.core.get.call(null,map__33585__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33587_33619 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33588_33620 = null;
var count__33589_33621 = (0);
var i__33590_33622 = (0);
while(true){
if((i__33590_33622 < count__33589_33621)){
var f_33623 = cljs.core._nth.call(null,chunk__33588_33620,i__33590_33622);
cljs.core.println.call(null,"  ",f_33623);


var G__33624 = seq__33587_33619;
var G__33625 = chunk__33588_33620;
var G__33626 = count__33589_33621;
var G__33627 = (i__33590_33622 + (1));
seq__33587_33619 = G__33624;
chunk__33588_33620 = G__33625;
count__33589_33621 = G__33626;
i__33590_33622 = G__33627;
continue;
} else {
var temp__5720__auto___33628 = cljs.core.seq.call(null,seq__33587_33619);
if(temp__5720__auto___33628){
var seq__33587_33629__$1 = temp__5720__auto___33628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33587_33629__$1)){
var c__4550__auto___33630 = cljs.core.chunk_first.call(null,seq__33587_33629__$1);
var G__33631 = cljs.core.chunk_rest.call(null,seq__33587_33629__$1);
var G__33632 = c__4550__auto___33630;
var G__33633 = cljs.core.count.call(null,c__4550__auto___33630);
var G__33634 = (0);
seq__33587_33619 = G__33631;
chunk__33588_33620 = G__33632;
count__33589_33621 = G__33633;
i__33590_33622 = G__33634;
continue;
} else {
var f_33635 = cljs.core.first.call(null,seq__33587_33629__$1);
cljs.core.println.call(null,"  ",f_33635);


var G__33636 = cljs.core.next.call(null,seq__33587_33629__$1);
var G__33637 = null;
var G__33638 = (0);
var G__33639 = (0);
seq__33587_33619 = G__33636;
chunk__33588_33620 = G__33637;
count__33589_33621 = G__33638;
i__33590_33622 = G__33639;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33640 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33640);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33640)))?cljs.core.second.call(null,arglists_33640):arglists_33640));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33591_33641 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33592_33642 = null;
var count__33593_33643 = (0);
var i__33594_33644 = (0);
while(true){
if((i__33594_33644 < count__33593_33643)){
var vec__33605_33645 = cljs.core._nth.call(null,chunk__33592_33642,i__33594_33644);
var name_33646 = cljs.core.nth.call(null,vec__33605_33645,(0),null);
var map__33608_33647 = cljs.core.nth.call(null,vec__33605_33645,(1),null);
var map__33608_33648__$1 = (((((!((map__33608_33647 == null))))?(((((map__33608_33647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33608_33647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33608_33647):map__33608_33647);
var doc_33649 = cljs.core.get.call(null,map__33608_33648__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33650 = cljs.core.get.call(null,map__33608_33648__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33646);

cljs.core.println.call(null," ",arglists_33650);

if(cljs.core.truth_(doc_33649)){
cljs.core.println.call(null," ",doc_33649);
} else {
}


var G__33651 = seq__33591_33641;
var G__33652 = chunk__33592_33642;
var G__33653 = count__33593_33643;
var G__33654 = (i__33594_33644 + (1));
seq__33591_33641 = G__33651;
chunk__33592_33642 = G__33652;
count__33593_33643 = G__33653;
i__33594_33644 = G__33654;
continue;
} else {
var temp__5720__auto___33655 = cljs.core.seq.call(null,seq__33591_33641);
if(temp__5720__auto___33655){
var seq__33591_33656__$1 = temp__5720__auto___33655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33591_33656__$1)){
var c__4550__auto___33657 = cljs.core.chunk_first.call(null,seq__33591_33656__$1);
var G__33658 = cljs.core.chunk_rest.call(null,seq__33591_33656__$1);
var G__33659 = c__4550__auto___33657;
var G__33660 = cljs.core.count.call(null,c__4550__auto___33657);
var G__33661 = (0);
seq__33591_33641 = G__33658;
chunk__33592_33642 = G__33659;
count__33593_33643 = G__33660;
i__33594_33644 = G__33661;
continue;
} else {
var vec__33610_33662 = cljs.core.first.call(null,seq__33591_33656__$1);
var name_33663 = cljs.core.nth.call(null,vec__33610_33662,(0),null);
var map__33613_33664 = cljs.core.nth.call(null,vec__33610_33662,(1),null);
var map__33613_33665__$1 = (((((!((map__33613_33664 == null))))?(((((map__33613_33664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33613_33664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33613_33664):map__33613_33664);
var doc_33666 = cljs.core.get.call(null,map__33613_33665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33667 = cljs.core.get.call(null,map__33613_33665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33663);

cljs.core.println.call(null," ",arglists_33667);

if(cljs.core.truth_(doc_33666)){
cljs.core.println.call(null," ",doc_33666);
} else {
}


var G__33668 = cljs.core.next.call(null,seq__33591_33656__$1);
var G__33669 = null;
var G__33670 = (0);
var G__33671 = (0);
seq__33591_33641 = G__33668;
chunk__33592_33642 = G__33669;
count__33593_33643 = G__33670;
i__33594_33644 = G__33671;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__33615 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33616 = null;
var count__33617 = (0);
var i__33618 = (0);
while(true){
if((i__33618 < count__33617)){
var role = cljs.core._nth.call(null,chunk__33616,i__33618);
var temp__5720__auto___33672__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33672__$1)){
var spec_33673 = temp__5720__auto___33672__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33673));
} else {
}


var G__33674 = seq__33615;
var G__33675 = chunk__33616;
var G__33676 = count__33617;
var G__33677 = (i__33618 + (1));
seq__33615 = G__33674;
chunk__33616 = G__33675;
count__33617 = G__33676;
i__33618 = G__33677;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__33615);
if(temp__5720__auto____$1){
var seq__33615__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33615__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33615__$1);
var G__33678 = cljs.core.chunk_rest.call(null,seq__33615__$1);
var G__33679 = c__4550__auto__;
var G__33680 = cljs.core.count.call(null,c__4550__auto__);
var G__33681 = (0);
seq__33615 = G__33678;
chunk__33616 = G__33679;
count__33617 = G__33680;
i__33618 = G__33681;
continue;
} else {
var role = cljs.core.first.call(null,seq__33615__$1);
var temp__5720__auto___33682__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___33682__$2)){
var spec_33683 = temp__5720__auto___33682__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33683));
} else {
}


var G__33684 = cljs.core.next.call(null,seq__33615__$1);
var G__33685 = null;
var G__33686 = (0);
var G__33687 = (0);
seq__33615 = G__33684;
chunk__33616 = G__33685;
count__33617 = G__33686;
i__33618 = G__33687;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33688 = cljs.core.conj.call(null,via,t);
var G__33689 = cljs.core.ex_cause.call(null,t);
via = G__33688;
t = G__33689;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__33692 = datafied_throwable;
var map__33692__$1 = (((((!((map__33692 == null))))?(((((map__33692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33692):map__33692);
var via = cljs.core.get.call(null,map__33692__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33692__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33692__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33693 = cljs.core.last.call(null,via);
var map__33693__$1 = (((((!((map__33693 == null))))?(((((map__33693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33693):map__33693);
var type = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33693__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33694 = data;
var map__33694__$1 = (((((!((map__33694 == null))))?(((((map__33694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33694):map__33694);
var problems = cljs.core.get.call(null,map__33694__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33694__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33694__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33695 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33695__$1 = (((((!((map__33695 == null))))?(((((map__33695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33695):map__33695);
var top_data = map__33695__$1;
var source = cljs.core.get.call(null,map__33695__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33700 = phase;
var G__33700__$1 = (((G__33700 instanceof cljs.core.Keyword))?G__33700.fqn:null);
switch (G__33700__$1) {
case "read-source":
var map__33701 = data;
var map__33701__$1 = (((((!((map__33701 == null))))?(((((map__33701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33701):map__33701);
var line = cljs.core.get.call(null,map__33701__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33701__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33703 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33703__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33703,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33703);
var G__33703__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33703__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33703__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33703__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33703__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33704 = top_data;
var G__33704__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33704,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33704);
var G__33704__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33704__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33704__$1);
var G__33704__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33704__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33704__$2);
var G__33704__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33704__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33704__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33704__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33704__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33705 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33705,(0),null);
var method = cljs.core.nth.call(null,vec__33705,(1),null);
var file = cljs.core.nth.call(null,vec__33705,(2),null);
var line = cljs.core.nth.call(null,vec__33705,(3),null);
var G__33708 = top_data;
var G__33708__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33708,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33708);
var G__33708__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33708__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33708__$1);
var G__33708__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__33708__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33708__$2);
var G__33708__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33708__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33708__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33708__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33708__$4;
}

break;
case "execution":
var vec__33709 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33709,(0),null);
var method = cljs.core.nth.call(null,vec__33709,(1),null);
var file = cljs.core.nth.call(null,vec__33709,(2),null);
var line = cljs.core.nth.call(null,vec__33709,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__33709,source__$1,method,file,line,G__33700,G__33700__$1,map__33692,map__33692__$1,via,trace,phase,map__33693,map__33693__$1,type,message,data,map__33694,map__33694__$1,problems,fn,caller,map__33695,map__33695__$1,top_data,source){
return (function (p1__33691_SHARP_){
var or__4131__auto__ = (p1__33691_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33691_SHARP_);
}
});})(vec__33709,source__$1,method,file,line,G__33700,G__33700__$1,map__33692,map__33692__$1,via,trace,phase,map__33693,map__33693__$1,type,message,data,map__33694,map__33694__$1,problems,fn,caller,map__33695,map__33695__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__33712 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33712__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33712,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33712);
var G__33712__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33712__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33712__$1);
var G__33712__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__33712__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33712__$2);
var G__33712__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33712__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33712__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33712__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33712__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33700__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33716){
var map__33717 = p__33716;
var map__33717__$1 = (((((!((map__33717 == null))))?(((((map__33717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33717):map__33717);
var triage_data = map__33717__$1;
var phase = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33717__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33719 = phase;
var G__33719__$1 = (((G__33719 instanceof cljs.core.Keyword))?G__33719.fqn:null);
switch (G__33719__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33720_33729 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33721_33730 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33722_33731 = true;
var _STAR_print_fn_STAR__temp_val__33723_33732 = ((function (_STAR_print_newline_STAR__orig_val__33720_33729,_STAR_print_fn_STAR__orig_val__33721_33730,_STAR_print_newline_STAR__temp_val__33722_33731,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33720_33729,_STAR_print_fn_STAR__orig_val__33721_33730,_STAR_print_newline_STAR__temp_val__33722_33731,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33722_33731;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33723_33732;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33720_33729,_STAR_print_fn_STAR__orig_val__33721_33730,_STAR_print_newline_STAR__temp_val__33722_33731,_STAR_print_fn_STAR__temp_val__33723_33732,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33720_33729,_STAR_print_fn_STAR__orig_val__33721_33730,_STAR_print_newline_STAR__temp_val__33722_33731,_STAR_print_fn_STAR__temp_val__33723_33732,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33714_SHARP_){
return cljs.core.dissoc.call(null,p1__33714_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33720_33729,_STAR_print_fn_STAR__orig_val__33721_33730,_STAR_print_newline_STAR__temp_val__33722_33731,_STAR_print_fn_STAR__temp_val__33723_33732,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33720_33729,_STAR_print_fn_STAR__orig_val__33721_33730,_STAR_print_newline_STAR__temp_val__33722_33731,_STAR_print_fn_STAR__temp_val__33723_33732,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33721_33730;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33720_33729;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33724_33733 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33725_33734 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33726_33735 = true;
var _STAR_print_fn_STAR__temp_val__33727_33736 = ((function (_STAR_print_newline_STAR__orig_val__33724_33733,_STAR_print_fn_STAR__orig_val__33725_33734,_STAR_print_newline_STAR__temp_val__33726_33735,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__33724_33733,_STAR_print_fn_STAR__orig_val__33725_33734,_STAR_print_newline_STAR__temp_val__33726_33735,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33726_33735;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33727_33736;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33724_33733,_STAR_print_fn_STAR__orig_val__33725_33734,_STAR_print_newline_STAR__temp_val__33726_33735,_STAR_print_fn_STAR__temp_val__33727_33736,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33724_33733,_STAR_print_fn_STAR__orig_val__33725_33734,_STAR_print_newline_STAR__temp_val__33726_33735,_STAR_print_fn_STAR__temp_val__33727_33736,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33715_SHARP_){
return cljs.core.dissoc.call(null,p1__33715_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33724_33733,_STAR_print_fn_STAR__orig_val__33725_33734,_STAR_print_newline_STAR__temp_val__33726_33735,_STAR_print_fn_STAR__temp_val__33727_33736,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33724_33733,_STAR_print_fn_STAR__orig_val__33725_33734,_STAR_print_newline_STAR__temp_val__33726_33735,_STAR_print_fn_STAR__temp_val__33727_33736,sb__4661__auto__,G__33719,G__33719__$1,loc,class_name,simple_class,cause_type,format,map__33717,map__33717__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33725_33734;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33724_33733;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33719__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1572042003148
