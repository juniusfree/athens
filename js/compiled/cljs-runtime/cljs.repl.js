goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56907){
var map__56908 = p__56907;
var map__56908__$1 = (((((!((map__56908 == null))))?(((((map__56908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56908):map__56908);
var m = map__56908__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56908__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56908__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56913_57021 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56914_57022 = null;
var count__56915_57023 = (0);
var i__56916_57024 = (0);
while(true){
if((i__56916_57024 < count__56915_57023)){
var f_57025 = chunk__56914_57022.cljs$core$IIndexed$_nth$arity$2(null,i__56916_57024);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57025], 0));


var G__57026 = seq__56913_57021;
var G__57027 = chunk__56914_57022;
var G__57028 = count__56915_57023;
var G__57029 = (i__56916_57024 + (1));
seq__56913_57021 = G__57026;
chunk__56914_57022 = G__57027;
count__56915_57023 = G__57028;
i__56916_57024 = G__57029;
continue;
} else {
var temp__5735__auto___57030 = cljs.core.seq(seq__56913_57021);
if(temp__5735__auto___57030){
var seq__56913_57031__$1 = temp__5735__auto___57030;
if(cljs.core.chunked_seq_QMARK_(seq__56913_57031__$1)){
var c__4556__auto___57032 = cljs.core.chunk_first(seq__56913_57031__$1);
var G__57033 = cljs.core.chunk_rest(seq__56913_57031__$1);
var G__57034 = c__4556__auto___57032;
var G__57035 = cljs.core.count(c__4556__auto___57032);
var G__57036 = (0);
seq__56913_57021 = G__57033;
chunk__56914_57022 = G__57034;
count__56915_57023 = G__57035;
i__56916_57024 = G__57036;
continue;
} else {
var f_57037 = cljs.core.first(seq__56913_57031__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57037], 0));


var G__57038 = cljs.core.next(seq__56913_57031__$1);
var G__57039 = null;
var G__57040 = (0);
var G__57041 = (0);
seq__56913_57021 = G__57038;
chunk__56914_57022 = G__57039;
count__56915_57023 = G__57040;
i__56916_57024 = G__57041;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57042 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57042], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57042)))?cljs.core.second(arglists_57042):arglists_57042)], 0));
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
var seq__56917_57044 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56918_57045 = null;
var count__56919_57046 = (0);
var i__56920_57047 = (0);
while(true){
if((i__56920_57047 < count__56919_57046)){
var vec__56931_57048 = chunk__56918_57045.cljs$core$IIndexed$_nth$arity$2(null,i__56920_57047);
var name_57049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56931_57048,(0),null);
var map__56934_57050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56931_57048,(1),null);
var map__56934_57051__$1 = (((((!((map__56934_57050 == null))))?(((((map__56934_57050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56934_57050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56934_57050):map__56934_57050);
var doc_57052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56934_57051__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56934_57051__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57049], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57053], 0));

if(cljs.core.truth_(doc_57052)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57052], 0));
} else {
}


var G__57054 = seq__56917_57044;
var G__57055 = chunk__56918_57045;
var G__57056 = count__56919_57046;
var G__57057 = (i__56920_57047 + (1));
seq__56917_57044 = G__57054;
chunk__56918_57045 = G__57055;
count__56919_57046 = G__57056;
i__56920_57047 = G__57057;
continue;
} else {
var temp__5735__auto___57058 = cljs.core.seq(seq__56917_57044);
if(temp__5735__auto___57058){
var seq__56917_57059__$1 = temp__5735__auto___57058;
if(cljs.core.chunked_seq_QMARK_(seq__56917_57059__$1)){
var c__4556__auto___57060 = cljs.core.chunk_first(seq__56917_57059__$1);
var G__57061 = cljs.core.chunk_rest(seq__56917_57059__$1);
var G__57062 = c__4556__auto___57060;
var G__57063 = cljs.core.count(c__4556__auto___57060);
var G__57064 = (0);
seq__56917_57044 = G__57061;
chunk__56918_57045 = G__57062;
count__56919_57046 = G__57063;
i__56920_57047 = G__57064;
continue;
} else {
var vec__56936_57065 = cljs.core.first(seq__56917_57059__$1);
var name_57066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56936_57065,(0),null);
var map__56939_57067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56936_57065,(1),null);
var map__56939_57068__$1 = (((((!((map__56939_57067 == null))))?(((((map__56939_57067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56939_57067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56939_57067):map__56939_57067);
var doc_57069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939_57068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939_57068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57066], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57070], 0));

if(cljs.core.truth_(doc_57069)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57069], 0));
} else {
}


var G__57075 = cljs.core.next(seq__56917_57059__$1);
var G__57076 = null;
var G__57077 = (0);
var G__57078 = (0);
seq__56917_57044 = G__57075;
chunk__56918_57045 = G__57076;
count__56919_57046 = G__57077;
i__56920_57047 = G__57078;
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

var seq__56941 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56942 = null;
var count__56943 = (0);
var i__56944 = (0);
while(true){
if((i__56944 < count__56943)){
var role = chunk__56942.cljs$core$IIndexed$_nth$arity$2(null,i__56944);
var temp__5735__auto___57079__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57079__$1)){
var spec_57080 = temp__5735__auto___57079__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57080)], 0));
} else {
}


var G__57081 = seq__56941;
var G__57082 = chunk__56942;
var G__57083 = count__56943;
var G__57084 = (i__56944 + (1));
seq__56941 = G__57081;
chunk__56942 = G__57082;
count__56943 = G__57083;
i__56944 = G__57084;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56941);
if(temp__5735__auto____$1){
var seq__56941__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56941__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56941__$1);
var G__57085 = cljs.core.chunk_rest(seq__56941__$1);
var G__57086 = c__4556__auto__;
var G__57087 = cljs.core.count(c__4556__auto__);
var G__57088 = (0);
seq__56941 = G__57085;
chunk__56942 = G__57086;
count__56943 = G__57087;
i__56944 = G__57088;
continue;
} else {
var role = cljs.core.first(seq__56941__$1);
var temp__5735__auto___57089__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57089__$2)){
var spec_57090 = temp__5735__auto___57089__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57090)], 0));
} else {
}


var G__57091 = cljs.core.next(seq__56941__$1);
var G__57092 = null;
var G__57093 = (0);
var G__57094 = (0);
seq__56941 = G__57091;
chunk__56942 = G__57092;
count__56943 = G__57093;
i__56944 = G__57094;
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
var G__57095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57096 = cljs.core.ex_cause(t);
via = G__57095;
t = G__57096;
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
var map__56950 = datafied_throwable;
var map__56950__$1 = (((((!((map__56950 == null))))?(((((map__56950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56950):map__56950);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56950__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56951 = cljs.core.last(via);
var map__56951__$1 = (((((!((map__56951 == null))))?(((((map__56951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56951):map__56951);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56952 = data;
var map__56952__$1 = (((((!((map__56952 == null))))?(((((map__56952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56952):map__56952);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56952__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56953 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56953__$1 = (((((!((map__56953 == null))))?(((((map__56953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56953):map__56953);
var top_data = map__56953__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56958 = phase;
var G__56958__$1 = (((G__56958 instanceof cljs.core.Keyword))?G__56958.fqn:null);
switch (G__56958__$1) {
case "read-source":
var map__56959 = data;
var map__56959__$1 = (((((!((map__56959 == null))))?(((((map__56959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56959):map__56959);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56961 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56961__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56961);
var G__56961__$2 = (cljs.core.truth_((function (){var fexpr__56962 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56962.cljs$core$IFn$_invoke$arity$1 ? fexpr__56962.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56962.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56961__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56961__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56961__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56961__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56963 = top_data;
var G__56963__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56963);
var G__56963__$2 = (cljs.core.truth_((function (){var fexpr__56964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56964.cljs$core$IFn$_invoke$arity$1 ? fexpr__56964.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56964.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56963__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56963__$1);
var G__56963__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56963__$2);
var G__56963__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56963__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56963__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56963__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56965 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56965,(3),null);
var G__56968 = top_data;
var G__56968__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56968);
var G__56968__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56968__$1);
var G__56968__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56968__$2);
var G__56968__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56968__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56968__$4;
}

break;
case "execution":
var vec__56969 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56969,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56946_SHARP_){
var or__4126__auto__ = (p1__56946_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56977.cljs$core$IFn$_invoke$arity$1 ? fexpr__56977.cljs$core$IFn$_invoke$arity$1(p1__56946_SHARP_) : fexpr__56977.call(null,p1__56946_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56978 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56978__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56978,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56978);
var G__56978__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56978__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56978__$1);
var G__56978__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56978__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56978__$2);
var G__56978__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56978__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56978__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56978__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56978__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56958__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56981){
var map__56982 = p__56981;
var map__56982__$1 = (((((!((map__56982 == null))))?(((((map__56982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56982):map__56982);
var triage_data = map__56982__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56982__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56984 = phase;
var G__56984__$1 = (((G__56984 instanceof cljs.core.Keyword))?G__56984.fqn:null);
switch (G__56984__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56985 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56986 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56987 = loc;
var G__56988 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56989_57131 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56990_57132 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56991_57133 = true;
var _STAR_print_fn_STAR__temp_val__56992_57134 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56991_57133);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56992_57134);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56979_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56979_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56990_57132);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56989_57131);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56985,G__56986,G__56987,G__56988) : format.call(null,G__56985,G__56986,G__56987,G__56988));

break;
case "macroexpansion":
var G__56993 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56994 = cause_type;
var G__56995 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56996 = loc;
var G__56997 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56993,G__56994,G__56995,G__56996,G__56997) : format.call(null,G__56993,G__56994,G__56995,G__56996,G__56997));

break;
case "compile-syntax-check":
var G__56998 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56999 = cause_type;
var G__57000 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57001 = loc;
var G__57002 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56998,G__56999,G__57000,G__57001,G__57002) : format.call(null,G__56998,G__56999,G__57000,G__57001,G__57002));

break;
case "compilation":
var G__57003 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57004 = cause_type;
var G__57005 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57006 = loc;
var G__57007 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57003,G__57004,G__57005,G__57006,G__57007) : format.call(null,G__57003,G__57004,G__57005,G__57006,G__57007));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57008 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57009 = symbol;
var G__57010 = loc;
var G__57011 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57012_57156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57013_57157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57014_57158 = true;
var _STAR_print_fn_STAR__temp_val__57015_57159 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57014_57158);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57015_57159);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56980_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56980_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57013_57157);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57012_57156);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57008,G__57009,G__57010,G__57011) : format.call(null,G__57008,G__57009,G__57010,G__57011));
} else {
var G__57016 = "Execution error%s at %s(%s).\n%s\n";
var G__57017 = cause_type;
var G__57018 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57019 = loc;
var G__57020 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57016,G__57017,G__57018,G__57019,G__57020) : format.call(null,G__57016,G__57017,G__57018,G__57019,G__57020));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56984__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
