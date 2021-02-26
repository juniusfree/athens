goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56904){
var map__56905 = p__56904;
var map__56905__$1 = (((((!((map__56905 == null))))?(((((map__56905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56905):map__56905);
var m = map__56905__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56905__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56905__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56907_57018 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56908_57019 = null;
var count__56909_57020 = (0);
var i__56910_57021 = (0);
while(true){
if((i__56910_57021 < count__56909_57020)){
var f_57022 = chunk__56908_57019.cljs$core$IIndexed$_nth$arity$2(null,i__56910_57021);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57022], 0));


var G__57023 = seq__56907_57018;
var G__57024 = chunk__56908_57019;
var G__57025 = count__56909_57020;
var G__57026 = (i__56910_57021 + (1));
seq__56907_57018 = G__57023;
chunk__56908_57019 = G__57024;
count__56909_57020 = G__57025;
i__56910_57021 = G__57026;
continue;
} else {
var temp__5735__auto___57027 = cljs.core.seq(seq__56907_57018);
if(temp__5735__auto___57027){
var seq__56907_57028__$1 = temp__5735__auto___57027;
if(cljs.core.chunked_seq_QMARK_(seq__56907_57028__$1)){
var c__4556__auto___57029 = cljs.core.chunk_first(seq__56907_57028__$1);
var G__57030 = cljs.core.chunk_rest(seq__56907_57028__$1);
var G__57031 = c__4556__auto___57029;
var G__57032 = cljs.core.count(c__4556__auto___57029);
var G__57033 = (0);
seq__56907_57018 = G__57030;
chunk__56908_57019 = G__57031;
count__56909_57020 = G__57032;
i__56910_57021 = G__57033;
continue;
} else {
var f_57034 = cljs.core.first(seq__56907_57028__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57034], 0));


var G__57035 = cljs.core.next(seq__56907_57028__$1);
var G__57036 = null;
var G__57037 = (0);
var G__57038 = (0);
seq__56907_57018 = G__57035;
chunk__56908_57019 = G__57036;
count__56909_57020 = G__57037;
i__56910_57021 = G__57038;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57039 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57039], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57039)))?cljs.core.second(arglists_57039):arglists_57039)], 0));
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
var seq__56914_57040 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56915_57041 = null;
var count__56916_57042 = (0);
var i__56917_57043 = (0);
while(true){
if((i__56917_57043 < count__56916_57042)){
var vec__56928_57044 = chunk__56915_57041.cljs$core$IIndexed$_nth$arity$2(null,i__56917_57043);
var name_57045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56928_57044,(0),null);
var map__56931_57046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56928_57044,(1),null);
var map__56931_57047__$1 = (((((!((map__56931_57046 == null))))?(((((map__56931_57046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56931_57046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56931_57046):map__56931_57046);
var doc_57048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56931_57047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56931_57047__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57045], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57049], 0));

if(cljs.core.truth_(doc_57048)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57048], 0));
} else {
}


var G__57050 = seq__56914_57040;
var G__57051 = chunk__56915_57041;
var G__57052 = count__56916_57042;
var G__57053 = (i__56917_57043 + (1));
seq__56914_57040 = G__57050;
chunk__56915_57041 = G__57051;
count__56916_57042 = G__57052;
i__56917_57043 = G__57053;
continue;
} else {
var temp__5735__auto___57054 = cljs.core.seq(seq__56914_57040);
if(temp__5735__auto___57054){
var seq__56914_57055__$1 = temp__5735__auto___57054;
if(cljs.core.chunked_seq_QMARK_(seq__56914_57055__$1)){
var c__4556__auto___57056 = cljs.core.chunk_first(seq__56914_57055__$1);
var G__57058 = cljs.core.chunk_rest(seq__56914_57055__$1);
var G__57059 = c__4556__auto___57056;
var G__57060 = cljs.core.count(c__4556__auto___57056);
var G__57061 = (0);
seq__56914_57040 = G__57058;
chunk__56915_57041 = G__57059;
count__56916_57042 = G__57060;
i__56917_57043 = G__57061;
continue;
} else {
var vec__56933_57062 = cljs.core.first(seq__56914_57055__$1);
var name_57063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56933_57062,(0),null);
var map__56936_57064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56933_57062,(1),null);
var map__56936_57065__$1 = (((((!((map__56936_57064 == null))))?(((((map__56936_57064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56936_57064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56936_57064):map__56936_57064);
var doc_57066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936_57065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936_57065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57063], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57067], 0));

if(cljs.core.truth_(doc_57066)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57066], 0));
} else {
}


var G__57068 = cljs.core.next(seq__56914_57055__$1);
var G__57069 = null;
var G__57070 = (0);
var G__57071 = (0);
seq__56914_57040 = G__57068;
chunk__56915_57041 = G__57069;
count__56916_57042 = G__57070;
i__56917_57043 = G__57071;
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

var seq__56938 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56939 = null;
var count__56940 = (0);
var i__56941 = (0);
while(true){
if((i__56941 < count__56940)){
var role = chunk__56939.cljs$core$IIndexed$_nth$arity$2(null,i__56941);
var temp__5735__auto___57072__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57072__$1)){
var spec_57074 = temp__5735__auto___57072__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57074)], 0));
} else {
}


var G__57076 = seq__56938;
var G__57077 = chunk__56939;
var G__57078 = count__56940;
var G__57079 = (i__56941 + (1));
seq__56938 = G__57076;
chunk__56939 = G__57077;
count__56940 = G__57078;
i__56941 = G__57079;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56938);
if(temp__5735__auto____$1){
var seq__56938__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56938__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56938__$1);
var G__57082 = cljs.core.chunk_rest(seq__56938__$1);
var G__57083 = c__4556__auto__;
var G__57084 = cljs.core.count(c__4556__auto__);
var G__57085 = (0);
seq__56938 = G__57082;
chunk__56939 = G__57083;
count__56940 = G__57084;
i__56941 = G__57085;
continue;
} else {
var role = cljs.core.first(seq__56938__$1);
var temp__5735__auto___57086__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57086__$2)){
var spec_57087 = temp__5735__auto___57086__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57087)], 0));
} else {
}


var G__57088 = cljs.core.next(seq__56938__$1);
var G__57089 = null;
var G__57090 = (0);
var G__57091 = (0);
seq__56938 = G__57088;
chunk__56939 = G__57089;
count__56940 = G__57090;
i__56941 = G__57091;
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
var G__57092 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57093 = cljs.core.ex_cause(t);
via = G__57092;
t = G__57093;
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
var map__56944 = datafied_throwable;
var map__56944__$1 = (((((!((map__56944 == null))))?(((((map__56944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56944):map__56944);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56944__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56945 = cljs.core.last(via);
var map__56945__$1 = (((((!((map__56945 == null))))?(((((map__56945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56945):map__56945);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56946 = data;
var map__56946__$1 = (((((!((map__56946 == null))))?(((((map__56946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56946):map__56946);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56947 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56947__$1 = (((((!((map__56947 == null))))?(((((map__56947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56947):map__56947);
var top_data = map__56947__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56952 = phase;
var G__56952__$1 = (((G__56952 instanceof cljs.core.Keyword))?G__56952.fqn:null);
switch (G__56952__$1) {
case "read-source":
var map__56956 = data;
var map__56956__$1 = (((((!((map__56956 == null))))?(((((map__56956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56956):map__56956);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56956__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56958 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56958__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56958,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56958);
var G__56958__$2 = (cljs.core.truth_((function (){var fexpr__56959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56959.cljs$core$IFn$_invoke$arity$1 ? fexpr__56959.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56959.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56958__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56958__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56958__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56958__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56960 = top_data;
var G__56960__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56960);
var G__56960__$2 = (cljs.core.truth_((function (){var fexpr__56961 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56961.cljs$core$IFn$_invoke$arity$1 ? fexpr__56961.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56961.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56960__$1);
var G__56960__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56960__$2);
var G__56960__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56960__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56960__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56960__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56962 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(3),null);
var G__56965 = top_data;
var G__56965__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56965);
var G__56965__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56965__$1);
var G__56965__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56965__$2);
var G__56965__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56965__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56965__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56965__$4;
}

break;
case "execution":
var vec__56966 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56966,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56966,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56966,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56966,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56943_SHARP_){
var or__4126__auto__ = (p1__56943_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56970 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56970.cljs$core$IFn$_invoke$arity$1 ? fexpr__56970.cljs$core$IFn$_invoke$arity$1(p1__56943_SHARP_) : fexpr__56970.call(null,p1__56943_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56971 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56971__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56971,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56971);
var G__56971__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56971__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56971__$1);
var G__56971__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56971__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56971__$2);
var G__56971__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56971__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56971__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56971__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56971__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56952__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56978){
var map__56979 = p__56978;
var map__56979__$1 = (((((!((map__56979 == null))))?(((((map__56979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56979):map__56979);
var triage_data = map__56979__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56981 = phase;
var G__56981__$1 = (((G__56981 instanceof cljs.core.Keyword))?G__56981.fqn:null);
switch (G__56981__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56982 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56983 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56984 = loc;
var G__56985 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56986_57131 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56987_57132 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56988_57133 = true;
var _STAR_print_fn_STAR__temp_val__56989_57134 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56988_57133);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56989_57134);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56976_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56976_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56987_57132);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56986_57131);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56982,G__56983,G__56984,G__56985) : format.call(null,G__56982,G__56983,G__56984,G__56985));

break;
case "macroexpansion":
var G__56990 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56991 = cause_type;
var G__56992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56993 = loc;
var G__56994 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56990,G__56991,G__56992,G__56993,G__56994) : format.call(null,G__56990,G__56991,G__56992,G__56993,G__56994));

break;
case "compile-syntax-check":
var G__56995 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56996 = cause_type;
var G__56997 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56998 = loc;
var G__56999 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56995,G__56996,G__56997,G__56998,G__56999) : format.call(null,G__56995,G__56996,G__56997,G__56998,G__56999));

break;
case "compilation":
var G__57000 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57001 = cause_type;
var G__57002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57003 = loc;
var G__57004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57000,G__57001,G__57002,G__57003,G__57004) : format.call(null,G__57000,G__57001,G__57002,G__57003,G__57004));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57005 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57006 = symbol;
var G__57007 = loc;
var G__57008 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57009_57153 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57010_57154 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57011_57155 = true;
var _STAR_print_fn_STAR__temp_val__57012_57156 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57011_57155);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57012_57156);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56977_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56977_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57010_57154);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57009_57153);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57005,G__57006,G__57007,G__57008) : format.call(null,G__57005,G__57006,G__57007,G__57008));
} else {
var G__57013 = "Execution error%s at %s(%s).\n%s\n";
var G__57014 = cause_type;
var G__57015 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57016 = loc;
var G__57017 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57013,G__57014,G__57015,G__57016,G__57017) : format.call(null,G__57013,G__57014,G__57015,G__57016,G__57017));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56981__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
