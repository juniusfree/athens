goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56901){
var map__56902 = p__56901;
var map__56902__$1 = (((((!((map__56902 == null))))?(((((map__56902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56902):map__56902);
var m = map__56902__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__56904_57010 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56905_57011 = null;
var count__56906_57012 = (0);
var i__56907_57013 = (0);
while(true){
if((i__56907_57013 < count__56906_57012)){
var f_57014 = chunk__56905_57011.cljs$core$IIndexed$_nth$arity$2(null,i__56907_57013);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57014], 0));


var G__57015 = seq__56904_57010;
var G__57016 = chunk__56905_57011;
var G__57017 = count__56906_57012;
var G__57018 = (i__56907_57013 + (1));
seq__56904_57010 = G__57015;
chunk__56905_57011 = G__57016;
count__56906_57012 = G__57017;
i__56907_57013 = G__57018;
continue;
} else {
var temp__5735__auto___57019 = cljs.core.seq(seq__56904_57010);
if(temp__5735__auto___57019){
var seq__56904_57020__$1 = temp__5735__auto___57019;
if(cljs.core.chunked_seq_QMARK_(seq__56904_57020__$1)){
var c__4556__auto___57021 = cljs.core.chunk_first(seq__56904_57020__$1);
var G__57022 = cljs.core.chunk_rest(seq__56904_57020__$1);
var G__57023 = c__4556__auto___57021;
var G__57024 = cljs.core.count(c__4556__auto___57021);
var G__57025 = (0);
seq__56904_57010 = G__57022;
chunk__56905_57011 = G__57023;
count__56906_57012 = G__57024;
i__56907_57013 = G__57025;
continue;
} else {
var f_57026 = cljs.core.first(seq__56904_57020__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57026], 0));


var G__57027 = cljs.core.next(seq__56904_57020__$1);
var G__57028 = null;
var G__57029 = (0);
var G__57030 = (0);
seq__56904_57010 = G__57027;
chunk__56905_57011 = G__57028;
count__56906_57012 = G__57029;
i__56907_57013 = G__57030;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57031 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57031], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57031)))?cljs.core.second(arglists_57031):arglists_57031)], 0));
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
var seq__56910_57032 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56911_57033 = null;
var count__56912_57034 = (0);
var i__56913_57035 = (0);
while(true){
if((i__56913_57035 < count__56912_57034)){
var vec__56924_57036 = chunk__56911_57033.cljs$core$IIndexed$_nth$arity$2(null,i__56913_57035);
var name_57037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56924_57036,(0),null);
var map__56927_57038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56924_57036,(1),null);
var map__56927_57039__$1 = (((((!((map__56927_57038 == null))))?(((((map__56927_57038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56927_57038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56927_57038):map__56927_57038);
var doc_57040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56927_57039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56927_57039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57037], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57041], 0));

if(cljs.core.truth_(doc_57040)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57040], 0));
} else {
}


var G__57042 = seq__56910_57032;
var G__57043 = chunk__56911_57033;
var G__57044 = count__56912_57034;
var G__57045 = (i__56913_57035 + (1));
seq__56910_57032 = G__57042;
chunk__56911_57033 = G__57043;
count__56912_57034 = G__57044;
i__56913_57035 = G__57045;
continue;
} else {
var temp__5735__auto___57046 = cljs.core.seq(seq__56910_57032);
if(temp__5735__auto___57046){
var seq__56910_57047__$1 = temp__5735__auto___57046;
if(cljs.core.chunked_seq_QMARK_(seq__56910_57047__$1)){
var c__4556__auto___57048 = cljs.core.chunk_first(seq__56910_57047__$1);
var G__57049 = cljs.core.chunk_rest(seq__56910_57047__$1);
var G__57050 = c__4556__auto___57048;
var G__57051 = cljs.core.count(c__4556__auto___57048);
var G__57052 = (0);
seq__56910_57032 = G__57049;
chunk__56911_57033 = G__57050;
count__56912_57034 = G__57051;
i__56913_57035 = G__57052;
continue;
} else {
var vec__56929_57053 = cljs.core.first(seq__56910_57047__$1);
var name_57054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929_57053,(0),null);
var map__56932_57055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929_57053,(1),null);
var map__56932_57056__$1 = (((((!((map__56932_57055 == null))))?(((((map__56932_57055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56932_57055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56932_57055):map__56932_57055);
var doc_57057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932_57056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932_57056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57054], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57058], 0));

if(cljs.core.truth_(doc_57057)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57057], 0));
} else {
}


var G__57059 = cljs.core.next(seq__56910_57047__$1);
var G__57060 = null;
var G__57061 = (0);
var G__57062 = (0);
seq__56910_57032 = G__57059;
chunk__56911_57033 = G__57060;
count__56912_57034 = G__57061;
i__56913_57035 = G__57062;
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

var seq__56934 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56935 = null;
var count__56936 = (0);
var i__56937 = (0);
while(true){
if((i__56937 < count__56936)){
var role = chunk__56935.cljs$core$IIndexed$_nth$arity$2(null,i__56937);
var temp__5735__auto___57063__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57063__$1)){
var spec_57064 = temp__5735__auto___57063__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57064)], 0));
} else {
}


var G__57065 = seq__56934;
var G__57066 = chunk__56935;
var G__57067 = count__56936;
var G__57068 = (i__56937 + (1));
seq__56934 = G__57065;
chunk__56935 = G__57066;
count__56936 = G__57067;
i__56937 = G__57068;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56934);
if(temp__5735__auto____$1){
var seq__56934__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56934__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56934__$1);
var G__57069 = cljs.core.chunk_rest(seq__56934__$1);
var G__57070 = c__4556__auto__;
var G__57071 = cljs.core.count(c__4556__auto__);
var G__57072 = (0);
seq__56934 = G__57069;
chunk__56935 = G__57070;
count__56936 = G__57071;
i__56937 = G__57072;
continue;
} else {
var role = cljs.core.first(seq__56934__$1);
var temp__5735__auto___57073__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57073__$2)){
var spec_57074 = temp__5735__auto___57073__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57074)], 0));
} else {
}


var G__57075 = cljs.core.next(seq__56934__$1);
var G__57076 = null;
var G__57077 = (0);
var G__57078 = (0);
seq__56934 = G__57075;
chunk__56935 = G__57076;
count__56936 = G__57077;
i__56937 = G__57078;
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
var G__57079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57080 = cljs.core.ex_cause(t);
via = G__57079;
t = G__57080;
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
var map__56940 = datafied_throwable;
var map__56940__$1 = (((((!((map__56940 == null))))?(((((map__56940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56940):map__56940);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56940__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56940__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56940__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56941 = cljs.core.last(via);
var map__56941__$1 = (((((!((map__56941 == null))))?(((((map__56941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56941):map__56941);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56941__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56941__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56942 = data;
var map__56942__$1 = (((((!((map__56942 == null))))?(((((map__56942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56942):map__56942);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56942__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56943 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56943__$1 = (((((!((map__56943 == null))))?(((((map__56943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56943):map__56943);
var top_data = map__56943__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56948 = phase;
var G__56948__$1 = (((G__56948 instanceof cljs.core.Keyword))?G__56948.fqn:null);
switch (G__56948__$1) {
case "read-source":
var map__56949 = data;
var map__56949__$1 = (((((!((map__56949 == null))))?(((((map__56949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56949):map__56949);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56949__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56949__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56951 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56951);
var G__56951__$2 = (cljs.core.truth_((function (){var fexpr__56952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56952.cljs$core$IFn$_invoke$arity$1 ? fexpr__56952.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56952.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56951__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56951__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56951__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56953 = top_data;
var G__56953__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56953,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56953);
var G__56953__$2 = (cljs.core.truth_((function (){var fexpr__56954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56954.cljs$core$IFn$_invoke$arity$1 ? fexpr__56954.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56954.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56953__$1);
var G__56953__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56953__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56953__$2);
var G__56953__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56953__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56953__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56953__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56953__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56955 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56955,(3),null);
var G__56958 = top_data;
var G__56958__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56958,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56958);
var G__56958__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56958__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56958__$1);
var G__56958__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56958__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56958__$2);
var G__56958__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56958__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56958__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56958__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56958__$4;
}

break;
case "execution":
var vec__56959 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56959,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56959,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56959,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56959,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56939_SHARP_){
var or__4126__auto__ = (p1__56939_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56963 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56963.cljs$core$IFn$_invoke$arity$1 ? fexpr__56963.cljs$core$IFn$_invoke$arity$1(p1__56939_SHARP_) : fexpr__56963.call(null,p1__56939_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56964 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56964__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56964,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56964);
var G__56964__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56964__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56964__$1);
var G__56964__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56964__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56964__$2);
var G__56964__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56964__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56964__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56964__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56964__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56948__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56967){
var map__56968 = p__56967;
var map__56968__$1 = (((((!((map__56968 == null))))?(((((map__56968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56968):map__56968);
var triage_data = map__56968__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56968__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56973 = phase;
var G__56973__$1 = (((G__56973 instanceof cljs.core.Keyword))?G__56973.fqn:null);
switch (G__56973__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56974 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56975 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56976 = loc;
var G__56977 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56978_57090 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56979_57091 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56980_57092 = true;
var _STAR_print_fn_STAR__temp_val__56981_57093 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56980_57092);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56981_57093);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56965_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56965_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56979_57091);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56978_57090);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56974,G__56975,G__56976,G__56977) : format.call(null,G__56974,G__56975,G__56976,G__56977));

break;
case "macroexpansion":
var G__56982 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56983 = cause_type;
var G__56984 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56985 = loc;
var G__56986 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56982,G__56983,G__56984,G__56985,G__56986) : format.call(null,G__56982,G__56983,G__56984,G__56985,G__56986));

break;
case "compile-syntax-check":
var G__56987 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56988 = cause_type;
var G__56989 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56990 = loc;
var G__56991 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56987,G__56988,G__56989,G__56990,G__56991) : format.call(null,G__56987,G__56988,G__56989,G__56990,G__56991));

break;
case "compilation":
var G__56992 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56993 = cause_type;
var G__56994 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56995 = loc;
var G__56996 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56992,G__56993,G__56994,G__56995,G__56996) : format.call(null,G__56992,G__56993,G__56994,G__56995,G__56996));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56997 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56998 = symbol;
var G__56999 = loc;
var G__57000 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57001_57094 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57002_57095 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57003_57096 = true;
var _STAR_print_fn_STAR__temp_val__57004_57097 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57003_57096);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57004_57097);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56966_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56966_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57002_57095);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57001_57094);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56997,G__56998,G__56999,G__57000) : format.call(null,G__56997,G__56998,G__56999,G__57000));
} else {
var G__57005 = "Execution error%s at %s(%s).\n%s\n";
var G__57006 = cause_type;
var G__57007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57008 = loc;
var G__57009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57005,G__57006,G__57007,G__57008,G__57009) : format.call(null,G__57005,G__57006,G__57007,G__57008,G__57009));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56973__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
