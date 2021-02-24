goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__46659 = (line + (1));
var G__46660 = (1);
var G__46661 = (counter + (1));
line = G__46659;
col = G__46660;
counter = G__46661;
continue;
} else {
var G__46662 = line;
var G__46663 = (col + (1));
var G__46664 = (counter + (1));
line = G__46662;
col = G__46663;
counter = G__46664;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__46665 = cljs.core.next(chars);
var G__46666 = (n__$1 - (1));
chars = G__46665;
n__$1 = G__46666;
continue;
} else {
var G__46667 = cljs.core.next(chars);
var G__46668 = n__$1;
chars = G__46667;
n__$1 = G__46668;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__46645){
var map__46646 = p__46645;
var map__46646__$1 = (((((!((map__46646 == null))))?(((((map__46646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46646):map__46646);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__46648_46672 = cljs.core.seq(full_reasons);
var chunk__46649_46673 = null;
var count__46650_46674 = (0);
var i__46651_46675 = (0);
while(true){
if((i__46651_46675 < count__46650_46674)){
var r_46676 = chunk__46649_46673.cljs$core$IIndexed$_nth$arity$2(null,i__46651_46675);
instaparse.failure.print_reason(r_46676);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46677 = seq__46648_46672;
var G__46678 = chunk__46649_46673;
var G__46679 = count__46650_46674;
var G__46680 = (i__46651_46675 + (1));
seq__46648_46672 = G__46677;
chunk__46649_46673 = G__46678;
count__46650_46674 = G__46679;
i__46651_46675 = G__46680;
continue;
} else {
var temp__5735__auto___46681 = cljs.core.seq(seq__46648_46672);
if(temp__5735__auto___46681){
var seq__46648_46684__$1 = temp__5735__auto___46681;
if(cljs.core.chunked_seq_QMARK_(seq__46648_46684__$1)){
var c__4556__auto___46685 = cljs.core.chunk_first(seq__46648_46684__$1);
var G__46687 = cljs.core.chunk_rest(seq__46648_46684__$1);
var G__46688 = c__4556__auto___46685;
var G__46689 = cljs.core.count(c__4556__auto___46685);
var G__46690 = (0);
seq__46648_46672 = G__46687;
chunk__46649_46673 = G__46688;
count__46650_46674 = G__46689;
i__46651_46675 = G__46690;
continue;
} else {
var r_46691 = cljs.core.first(seq__46648_46684__$1);
instaparse.failure.print_reason(r_46691);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46692 = cljs.core.next(seq__46648_46684__$1);
var G__46693 = null;
var G__46694 = (0);
var G__46695 = (0);
seq__46648_46672 = G__46692;
chunk__46649_46673 = G__46693;
count__46650_46674 = G__46694;
i__46651_46675 = G__46695;
continue;
}
} else {
}
}
break;
}

var seq__46654 = cljs.core.seq(partial_reasons);
var chunk__46655 = null;
var count__46656 = (0);
var i__46657 = (0);
while(true){
if((i__46657 < count__46656)){
var r = chunk__46655.cljs$core$IIndexed$_nth$arity$2(null,i__46657);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46696 = seq__46654;
var G__46697 = chunk__46655;
var G__46698 = count__46656;
var G__46699 = (i__46657 + (1));
seq__46654 = G__46696;
chunk__46655 = G__46697;
count__46656 = G__46698;
i__46657 = G__46699;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46654);
if(temp__5735__auto__){
var seq__46654__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46654__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46654__$1);
var G__46700 = cljs.core.chunk_rest(seq__46654__$1);
var G__46701 = c__4556__auto__;
var G__46702 = cljs.core.count(c__4556__auto__);
var G__46703 = (0);
seq__46654 = G__46700;
chunk__46655 = G__46701;
count__46656 = G__46702;
i__46657 = G__46703;
continue;
} else {
var r = cljs.core.first(seq__46654__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46704 = cljs.core.next(seq__46654__$1);
var G__46705 = null;
var G__46706 = (0);
var G__46707 = (0);
seq__46654 = G__46704;
chunk__46655 = G__46705;
count__46656 = G__46706;
i__46657 = G__46707;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
