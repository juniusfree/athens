goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31362__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31363__i = 0, G__31363__a = new Array(arguments.length -  0);
while (G__31363__i < G__31363__a.length) {G__31363__a[G__31363__i] = arguments[G__31363__i + 0]; ++G__31363__i;}
  args = new cljs.core.IndexedSeq(G__31363__a,0,null);
} 
return G__31362__delegate.call(this,args);};
G__31362.cljs$lang$maxFixedArity = 0;
G__31362.cljs$lang$applyTo = (function (arglist__31364){
var args = cljs.core.seq(arglist__31364);
return G__31362__delegate(args);
});
G__31362.cljs$core$IFn$_invoke$arity$variadic = G__31362__delegate;
return G__31362;
})()
);

(o.error = (function() { 
var G__31365__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31366__i = 0, G__31366__a = new Array(arguments.length -  0);
while (G__31366__i < G__31366__a.length) {G__31366__a[G__31366__i] = arguments[G__31366__i + 0]; ++G__31366__i;}
  args = new cljs.core.IndexedSeq(G__31366__a,0,null);
} 
return G__31365__delegate.call(this,args);};
G__31365.cljs$lang$maxFixedArity = 0;
G__31365.cljs$lang$applyTo = (function (arglist__31367){
var args = cljs.core.seq(arglist__31367);
return G__31365__delegate(args);
});
G__31365.cljs$core$IFn$_invoke$arity$variadic = G__31365__delegate;
return G__31365;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map