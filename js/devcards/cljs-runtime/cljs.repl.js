goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45122){
var map__45123 = p__45122;
var map__45123__$1 = (((((!((map__45123 == null))))?(((((map__45123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45123):map__45123);
var m = map__45123__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__45125_45330 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45126_45331 = null;
var count__45127_45332 = (0);
var i__45128_45333 = (0);
while(true){
if((i__45128_45333 < count__45127_45332)){
var f_45334 = chunk__45126_45331.cljs$core$IIndexed$_nth$arity$2(null,i__45128_45333);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45334], 0));


var G__45335 = seq__45125_45330;
var G__45336 = chunk__45126_45331;
var G__45337 = count__45127_45332;
var G__45338 = (i__45128_45333 + (1));
seq__45125_45330 = G__45335;
chunk__45126_45331 = G__45336;
count__45127_45332 = G__45337;
i__45128_45333 = G__45338;
continue;
} else {
var temp__5735__auto___45339 = cljs.core.seq(seq__45125_45330);
if(temp__5735__auto___45339){
var seq__45125_45340__$1 = temp__5735__auto___45339;
if(cljs.core.chunked_seq_QMARK_(seq__45125_45340__$1)){
var c__4609__auto___45341 = cljs.core.chunk_first(seq__45125_45340__$1);
var G__45342 = cljs.core.chunk_rest(seq__45125_45340__$1);
var G__45343 = c__4609__auto___45341;
var G__45344 = cljs.core.count(c__4609__auto___45341);
var G__45345 = (0);
seq__45125_45330 = G__45342;
chunk__45126_45331 = G__45343;
count__45127_45332 = G__45344;
i__45128_45333 = G__45345;
continue;
} else {
var f_45346 = cljs.core.first(seq__45125_45340__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45346], 0));


var G__45347 = cljs.core.next(seq__45125_45340__$1);
var G__45348 = null;
var G__45349 = (0);
var G__45350 = (0);
seq__45125_45330 = G__45347;
chunk__45126_45331 = G__45348;
count__45127_45332 = G__45349;
i__45128_45333 = G__45350;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45351], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45351)))?cljs.core.second(arglists_45351):arglists_45351)], 0));
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
var seq__45130_45353 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45131_45354 = null;
var count__45132_45355 = (0);
var i__45133_45356 = (0);
while(true){
if((i__45133_45356 < count__45132_45355)){
var vec__45144_45358 = chunk__45131_45354.cljs$core$IIndexed$_nth$arity$2(null,i__45133_45356);
var name_45359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45144_45358,(0),null);
var map__45147_45360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45144_45358,(1),null);
var map__45147_45361__$1 = (((((!((map__45147_45360 == null))))?(((((map__45147_45360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45147_45360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45147_45360):map__45147_45360);
var doc_45362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45147_45361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45147_45361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45359], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45363], 0));

if(cljs.core.truth_(doc_45362)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45362], 0));
} else {
}


var G__45364 = seq__45130_45353;
var G__45365 = chunk__45131_45354;
var G__45366 = count__45132_45355;
var G__45367 = (i__45133_45356 + (1));
seq__45130_45353 = G__45364;
chunk__45131_45354 = G__45365;
count__45132_45355 = G__45366;
i__45133_45356 = G__45367;
continue;
} else {
var temp__5735__auto___45369 = cljs.core.seq(seq__45130_45353);
if(temp__5735__auto___45369){
var seq__45130_45370__$1 = temp__5735__auto___45369;
if(cljs.core.chunked_seq_QMARK_(seq__45130_45370__$1)){
var c__4609__auto___45371 = cljs.core.chunk_first(seq__45130_45370__$1);
var G__45372 = cljs.core.chunk_rest(seq__45130_45370__$1);
var G__45373 = c__4609__auto___45371;
var G__45374 = cljs.core.count(c__4609__auto___45371);
var G__45375 = (0);
seq__45130_45353 = G__45372;
chunk__45131_45354 = G__45373;
count__45132_45355 = G__45374;
i__45133_45356 = G__45375;
continue;
} else {
var vec__45150_45376 = cljs.core.first(seq__45130_45370__$1);
var name_45377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150_45376,(0),null);
var map__45153_45378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45150_45376,(1),null);
var map__45153_45379__$1 = (((((!((map__45153_45378 == null))))?(((((map__45153_45378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45153_45378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45153_45378):map__45153_45378);
var doc_45380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153_45379__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153_45379__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45377], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45381], 0));

if(cljs.core.truth_(doc_45380)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45380], 0));
} else {
}


var G__45382 = cljs.core.next(seq__45130_45370__$1);
var G__45383 = null;
var G__45384 = (0);
var G__45385 = (0);
seq__45130_45353 = G__45382;
chunk__45131_45354 = G__45383;
count__45132_45355 = G__45384;
i__45133_45356 = G__45385;
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

var seq__45155 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45156 = null;
var count__45157 = (0);
var i__45158 = (0);
while(true){
if((i__45158 < count__45157)){
var role = chunk__45156.cljs$core$IIndexed$_nth$arity$2(null,i__45158);
var temp__5735__auto___45386__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45386__$1)){
var spec_45387 = temp__5735__auto___45386__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45387)], 0));
} else {
}


var G__45389 = seq__45155;
var G__45390 = chunk__45156;
var G__45391 = count__45157;
var G__45392 = (i__45158 + (1));
seq__45155 = G__45389;
chunk__45156 = G__45390;
count__45157 = G__45391;
i__45158 = G__45392;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45155);
if(temp__5735__auto____$1){
var seq__45155__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45155__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45155__$1);
var G__45393 = cljs.core.chunk_rest(seq__45155__$1);
var G__45394 = c__4609__auto__;
var G__45395 = cljs.core.count(c__4609__auto__);
var G__45396 = (0);
seq__45155 = G__45393;
chunk__45156 = G__45394;
count__45157 = G__45395;
i__45158 = G__45396;
continue;
} else {
var role = cljs.core.first(seq__45155__$1);
var temp__5735__auto___45397__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45397__$2)){
var spec_45398 = temp__5735__auto___45397__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45398)], 0));
} else {
}


var G__45399 = cljs.core.next(seq__45155__$1);
var G__45400 = null;
var G__45401 = (0);
var G__45402 = (0);
seq__45155 = G__45399;
chunk__45156 = G__45400;
count__45157 = G__45401;
i__45158 = G__45402;
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
var G__45403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45404 = cljs.core.ex_cause(t);
via = G__45403;
t = G__45404;
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
var map__45170 = datafied_throwable;
var map__45170__$1 = (((((!((map__45170 == null))))?(((((map__45170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45170):map__45170);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45170__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45171 = cljs.core.last(via);
var map__45171__$1 = (((((!((map__45171 == null))))?(((((map__45171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45171):map__45171);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45171__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45172 = data;
var map__45172__$1 = (((((!((map__45172 == null))))?(((((map__45172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45172):map__45172);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45172__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45172__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45172__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45173 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45173__$1 = (((((!((map__45173 == null))))?(((((map__45173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45173):map__45173);
var top_data = map__45173__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45173__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45191 = phase;
var G__45191__$1 = (((G__45191 instanceof cljs.core.Keyword))?G__45191.fqn:null);
switch (G__45191__$1) {
case "read-source":
var map__45192 = data;
var map__45192__$1 = (((((!((map__45192 == null))))?(((((map__45192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45192):map__45192);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45201 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45201__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45201,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45201);
var G__45201__$2 = (cljs.core.truth_((function (){var fexpr__45202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45202.cljs$core$IFn$_invoke$arity$1 ? fexpr__45202.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45202.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45201__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45201__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45201__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45201__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45203 = top_data;
var G__45203__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45203,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45203);
var G__45203__$2 = (cljs.core.truth_((function (){var fexpr__45204 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45204.cljs$core$IFn$_invoke$arity$1 ? fexpr__45204.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45204.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45203__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45203__$1);
var G__45203__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45203__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45203__$2);
var G__45203__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45203__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45203__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45203__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45203__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45211 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45211,(3),null);
var G__45219 = top_data;
var G__45219__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45219,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45219);
var G__45219__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45219__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45219__$1);
var G__45219__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45219__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45219__$2);
var G__45219__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45219__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45219__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45219__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45219__$4;
}

break;
case "execution":
var vec__45227 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45165_SHARP_){
var or__4185__auto__ = (p1__45165_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45238 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45238.cljs$core$IFn$_invoke$arity$1 ? fexpr__45238.cljs$core$IFn$_invoke$arity$1(p1__45165_SHARP_) : fexpr__45238.call(null,p1__45165_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45252 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45252__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45252,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45252);
var G__45252__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45252__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45252__$1);
var G__45252__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45252__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45252__$2);
var G__45252__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45252__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45252__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45252__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45252__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45191__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45262){
var map__45263 = p__45262;
var map__45263__$1 = (((((!((map__45263 == null))))?(((((map__45263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45263):map__45263);
var triage_data = map__45263__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45263__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45279 = phase;
var G__45279__$1 = (((G__45279 instanceof cljs.core.Keyword))?G__45279.fqn:null);
switch (G__45279__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45280 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45282 = loc;
var G__45283 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45288_45415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45289_45416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45290_45417 = true;
var _STAR_print_fn_STAR__temp_val__45291_45418 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45290_45417);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45291_45418);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45253_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45253_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45289_45416);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45288_45415);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45280,G__45281,G__45282,G__45283) : format.call(null,G__45280,G__45281,G__45282,G__45283));

break;
case "macroexpansion":
var G__45300 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45301 = cause_type;
var G__45302 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45303 = loc;
var G__45304 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45300,G__45301,G__45302,G__45303,G__45304) : format.call(null,G__45300,G__45301,G__45302,G__45303,G__45304));

break;
case "compile-syntax-check":
var G__45305 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45306 = cause_type;
var G__45307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45308 = loc;
var G__45309 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45305,G__45306,G__45307,G__45308,G__45309) : format.call(null,G__45305,G__45306,G__45307,G__45308,G__45309));

break;
case "compilation":
var G__45310 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45311 = cause_type;
var G__45312 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45313 = loc;
var G__45314 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45310,G__45311,G__45312,G__45313,G__45314) : format.call(null,G__45310,G__45311,G__45312,G__45313,G__45314));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45315 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45316 = symbol;
var G__45317 = loc;
var G__45318 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45319_45420 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45320_45421 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45321_45422 = true;
var _STAR_print_fn_STAR__temp_val__45322_45423 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45321_45422);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45322_45423);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45258_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45258_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45320_45421);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45319_45420);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45315,G__45316,G__45317,G__45318) : format.call(null,G__45315,G__45316,G__45317,G__45318));
} else {
var G__45324 = "Execution error%s at %s(%s).\n%s\n";
var G__45325 = cause_type;
var G__45326 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45327 = loc;
var G__45328 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45324,G__45325,G__45326,G__45327,G__45328) : format.call(null,G__45324,G__45325,G__45326,G__45327,G__45328));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45279__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map