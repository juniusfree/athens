goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56911){
var map__56912 = p__56911;
var map__56912__$1 = (((((!((map__56912 == null))))?(((((map__56912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56912):map__56912);
var m = map__56912__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56918_57056 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56919_57057 = null;
var count__56920_57058 = (0);
var i__56921_57059 = (0);
while(true){
if((i__56921_57059 < count__56920_57058)){
var f_57063 = chunk__56919_57057.cljs$core$IIndexed$_nth$arity$2(null,i__56921_57059);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57063], 0));


var G__57064 = seq__56918_57056;
var G__57065 = chunk__56919_57057;
var G__57066 = count__56920_57058;
var G__57067 = (i__56921_57059 + (1));
seq__56918_57056 = G__57064;
chunk__56919_57057 = G__57065;
count__56920_57058 = G__57066;
i__56921_57059 = G__57067;
continue;
} else {
var temp__5735__auto___57068 = cljs.core.seq(seq__56918_57056);
if(temp__5735__auto___57068){
var seq__56918_57069__$1 = temp__5735__auto___57068;
if(cljs.core.chunked_seq_QMARK_(seq__56918_57069__$1)){
var c__4556__auto___57070 = cljs.core.chunk_first(seq__56918_57069__$1);
var G__57075 = cljs.core.chunk_rest(seq__56918_57069__$1);
var G__57076 = c__4556__auto___57070;
var G__57077 = cljs.core.count(c__4556__auto___57070);
var G__57078 = (0);
seq__56918_57056 = G__57075;
chunk__56919_57057 = G__57076;
count__56920_57058 = G__57077;
i__56921_57059 = G__57078;
continue;
} else {
var f_57080 = cljs.core.first(seq__56918_57069__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57080], 0));


var G__57082 = cljs.core.next(seq__56918_57069__$1);
var G__57083 = null;
var G__57084 = (0);
var G__57085 = (0);
seq__56918_57056 = G__57082;
chunk__56919_57057 = G__57083;
count__56920_57058 = G__57084;
i__56921_57059 = G__57085;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57091 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57091], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57091)))?cljs.core.second(arglists_57091):arglists_57091)], 0));
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
var seq__56922_57099 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56923_57100 = null;
var count__56924_57101 = (0);
var i__56925_57102 = (0);
while(true){
if((i__56925_57102 < count__56924_57101)){
var vec__56936_57103 = chunk__56923_57100.cljs$core$IIndexed$_nth$arity$2(null,i__56925_57102);
var name_57104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56936_57103,(0),null);
var map__56939_57105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56936_57103,(1),null);
var map__56939_57106__$1 = (((((!((map__56939_57105 == null))))?(((((map__56939_57105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56939_57105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56939_57105):map__56939_57105);
var doc_57107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939_57106__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939_57106__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57104], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57108], 0));

if(cljs.core.truth_(doc_57107)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57107], 0));
} else {
}


var G__57109 = seq__56922_57099;
var G__57110 = chunk__56923_57100;
var G__57111 = count__56924_57101;
var G__57112 = (i__56925_57102 + (1));
seq__56922_57099 = G__57109;
chunk__56923_57100 = G__57110;
count__56924_57101 = G__57111;
i__56925_57102 = G__57112;
continue;
} else {
var temp__5735__auto___57113 = cljs.core.seq(seq__56922_57099);
if(temp__5735__auto___57113){
var seq__56922_57114__$1 = temp__5735__auto___57113;
if(cljs.core.chunked_seq_QMARK_(seq__56922_57114__$1)){
var c__4556__auto___57115 = cljs.core.chunk_first(seq__56922_57114__$1);
var G__57116 = cljs.core.chunk_rest(seq__56922_57114__$1);
var G__57117 = c__4556__auto___57115;
var G__57118 = cljs.core.count(c__4556__auto___57115);
var G__57119 = (0);
seq__56922_57099 = G__57116;
chunk__56923_57100 = G__57117;
count__56924_57101 = G__57118;
i__56925_57102 = G__57119;
continue;
} else {
var vec__56941_57120 = cljs.core.first(seq__56922_57114__$1);
var name_57121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56941_57120,(0),null);
var map__56944_57122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56941_57120,(1),null);
var map__56944_57123__$1 = (((((!((map__56944_57122 == null))))?(((((map__56944_57122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56944_57122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56944_57122):map__56944_57122);
var doc_57124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944_57123__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944_57123__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57121], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57125], 0));

if(cljs.core.truth_(doc_57124)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57124], 0));
} else {
}


var G__57126 = cljs.core.next(seq__56922_57114__$1);
var G__57127 = null;
var G__57128 = (0);
var G__57129 = (0);
seq__56922_57099 = G__57126;
chunk__56923_57100 = G__57127;
count__56924_57101 = G__57128;
i__56925_57102 = G__57129;
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

var seq__56946 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56947 = null;
var count__56948 = (0);
var i__56949 = (0);
while(true){
if((i__56949 < count__56948)){
var role = chunk__56947.cljs$core$IIndexed$_nth$arity$2(null,i__56949);
var temp__5735__auto___57130__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57130__$1)){
var spec_57131 = temp__5735__auto___57130__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57131)], 0));
} else {
}


var G__57132 = seq__56946;
var G__57133 = chunk__56947;
var G__57134 = count__56948;
var G__57135 = (i__56949 + (1));
seq__56946 = G__57132;
chunk__56947 = G__57133;
count__56948 = G__57134;
i__56949 = G__57135;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56946);
if(temp__5735__auto____$1){
var seq__56946__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56946__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56946__$1);
var G__57136 = cljs.core.chunk_rest(seq__56946__$1);
var G__57137 = c__4556__auto__;
var G__57138 = cljs.core.count(c__4556__auto__);
var G__57139 = (0);
seq__56946 = G__57136;
chunk__56947 = G__57137;
count__56948 = G__57138;
i__56949 = G__57139;
continue;
} else {
var role = cljs.core.first(seq__56946__$1);
var temp__5735__auto___57140__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57140__$2)){
var spec_57141 = temp__5735__auto___57140__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57141)], 0));
} else {
}


var G__57142 = cljs.core.next(seq__56946__$1);
var G__57143 = null;
var G__57144 = (0);
var G__57145 = (0);
seq__56946 = G__57142;
chunk__56947 = G__57143;
count__56948 = G__57144;
i__56949 = G__57145;
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
var G__57146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57147 = cljs.core.ex_cause(t);
via = G__57146;
t = G__57147;
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
var map__56957 = datafied_throwable;
var map__56957__$1 = (((((!((map__56957 == null))))?(((((map__56957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56957):map__56957);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56957__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56957__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56957__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56958 = cljs.core.last(via);
var map__56958__$1 = (((((!((map__56958 == null))))?(((((map__56958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56958):map__56958);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56958__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56959 = data;
var map__56959__$1 = (((((!((map__56959 == null))))?(((((map__56959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56959):map__56959);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56960 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56960__$1 = (((((!((map__56960 == null))))?(((((map__56960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56960):map__56960);
var top_data = map__56960__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56960__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56965 = phase;
var G__56965__$1 = (((G__56965 instanceof cljs.core.Keyword))?G__56965.fqn:null);
switch (G__56965__$1) {
case "read-source":
var map__56966 = data;
var map__56966__$1 = (((((!((map__56966 == null))))?(((((map__56966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56966):map__56966);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56968 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56968__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56968);
var G__56968__$2 = (cljs.core.truth_((function (){var fexpr__56969 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56969.cljs$core$IFn$_invoke$arity$1 ? fexpr__56969.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56969.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56968__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56968__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56968__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56970 = top_data;
var G__56970__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56970);
var G__56970__$2 = (cljs.core.truth_((function (){var fexpr__56972 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56972.cljs$core$IFn$_invoke$arity$1 ? fexpr__56972.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56972.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56970__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56970__$1);
var G__56970__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56970__$2);
var G__56970__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56970__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56970__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56970__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56973 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56973,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56973,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56973,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56973,(3),null);
var G__56976 = top_data;
var G__56976__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56976,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56976);
var G__56976__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56976__$1);
var G__56976__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56976__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56976__$2);
var G__56976__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56976__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56976__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56976__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56976__$4;
}

break;
case "execution":
var vec__56977 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56977,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56977,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56977,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56977,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56952_SHARP_){
var or__4126__auto__ = (p1__56952_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56982 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56982.cljs$core$IFn$_invoke$arity$1 ? fexpr__56982.cljs$core$IFn$_invoke$arity$1(p1__56952_SHARP_) : fexpr__56982.call(null,p1__56952_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56983 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56983__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56983,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56983);
var G__56983__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56983__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56983__$1);
var G__56983__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56983__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56983__$2);
var G__56983__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56983__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56983__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56983__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56983__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56965__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56999){
var map__57000 = p__56999;
var map__57000__$1 = (((((!((map__57000 == null))))?(((((map__57000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57000):map__57000);
var triage_data = map__57000__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57000__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__57002 = phase;
var G__57002__$1 = (((G__57002 instanceof cljs.core.Keyword))?G__57002.fqn:null);
switch (G__57002__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__57003 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__57004 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57005 = loc;
var G__57006 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57007_57181 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57008_57182 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57009_57183 = true;
var _STAR_print_fn_STAR__temp_val__57010_57184 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57009_57183);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57010_57184);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56993_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56993_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57008_57182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57007_57181);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57003,G__57004,G__57005,G__57006) : format.call(null,G__57003,G__57004,G__57005,G__57006));

break;
case "macroexpansion":
var G__57011 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__57012 = cause_type;
var G__57013 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57014 = loc;
var G__57015 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57011,G__57012,G__57013,G__57014,G__57015) : format.call(null,G__57011,G__57012,G__57013,G__57014,G__57015));

break;
case "compile-syntax-check":
var G__57016 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57017 = cause_type;
var G__57018 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57019 = loc;
var G__57020 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57016,G__57017,G__57018,G__57019,G__57020) : format.call(null,G__57016,G__57017,G__57018,G__57019,G__57020));

break;
case "compilation":
var G__57021 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57022 = cause_type;
var G__57023 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57024 = loc;
var G__57025 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57021,G__57022,G__57023,G__57024,G__57025) : format.call(null,G__57021,G__57022,G__57023,G__57024,G__57025));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57026 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57027 = symbol;
var G__57028 = loc;
var G__57029 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57030_57210 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57031_57211 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57032_57212 = true;
var _STAR_print_fn_STAR__temp_val__57033_57213 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57032_57212);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57033_57213);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56994_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56994_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57031_57211);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57030_57210);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57026,G__57027,G__57028,G__57029) : format.call(null,G__57026,G__57027,G__57028,G__57029));
} else {
var G__57034 = "Execution error%s at %s(%s).\n%s\n";
var G__57035 = cause_type;
var G__57036 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57037 = loc;
var G__57038 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57034,G__57035,G__57036,G__57037,G__57038) : format.call(null,G__57034,G__57035,G__57036,G__57037,G__57038));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57002__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
