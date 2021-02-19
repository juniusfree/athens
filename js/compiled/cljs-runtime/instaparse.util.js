goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46649 = arguments.length;
var i__4737__auto___46650 = (0);
while(true){
if((i__4737__auto___46650 < len__4736__auto___46649)){
args__4742__auto__.push((arguments[i__4737__auto___46650]));

var G__46651 = (i__4737__auto___46650 + (1));
i__4737__auto___46650 = G__46651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq46643){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46643));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46652 = arguments.length;
var i__4737__auto___46653 = (0);
while(true){
if((i__4737__auto___46653 < len__4736__auto___46652)){
args__4742__auto__.push((arguments[i__4737__auto___46653]));

var G__46654 = (i__4737__auto___46653 + (1));
i__4737__auto___46653 = G__46654;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq46644){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46644));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__46645 = "";
var G__46645__$1 = (cljs.core.truth_(re.ignoreCase)?[G__46645,"i"].join(''):G__46645);
var G__46645__$2 = (cljs.core.truth_(re.multiline)?[G__46645__$1,"m"].join(''):G__46645__$1);
if(cljs.core.truth_(re.unicode)){
return [G__46645__$2,"u"].join('');
} else {
return G__46645__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
