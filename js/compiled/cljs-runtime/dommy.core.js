goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__54508 = arguments.length;
switch (G__54508) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__54510 = arguments.length;
switch (G__54510) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__54513 = arguments.length;
switch (G__54513) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__54511_SHARP_){
return (!((p1__54511_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54884 = arguments.length;
var i__4737__auto___54885 = (0);
while(true){
if((i__4737__auto___54885 < len__4736__auto___54884)){
args__4742__auto__.push((arguments[i__4737__auto___54885]));

var G__54886 = (i__4737__auto___54885 + (1));
i__4737__auto___54885 = G__54886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__54520_54887 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54521_54888 = null;
var count__54522_54889 = (0);
var i__54523_54890 = (0);
while(true){
if((i__54523_54890 < count__54522_54889)){
var vec__54532_54891 = chunk__54521_54888.cljs$core$IIndexed$_nth$arity$2(null,i__54523_54890);
var k_54892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54532_54891,(0),null);
var v_54893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54532_54891,(1),null);
style.setProperty(dommy.utils.as_str(k_54892),v_54893);


var G__54894 = seq__54520_54887;
var G__54895 = chunk__54521_54888;
var G__54896 = count__54522_54889;
var G__54897 = (i__54523_54890 + (1));
seq__54520_54887 = G__54894;
chunk__54521_54888 = G__54895;
count__54522_54889 = G__54896;
i__54523_54890 = G__54897;
continue;
} else {
var temp__5735__auto___54898 = cljs.core.seq(seq__54520_54887);
if(temp__5735__auto___54898){
var seq__54520_54899__$1 = temp__5735__auto___54898;
if(cljs.core.chunked_seq_QMARK_(seq__54520_54899__$1)){
var c__4556__auto___54900 = cljs.core.chunk_first(seq__54520_54899__$1);
var G__54901 = cljs.core.chunk_rest(seq__54520_54899__$1);
var G__54902 = c__4556__auto___54900;
var G__54903 = cljs.core.count(c__4556__auto___54900);
var G__54904 = (0);
seq__54520_54887 = G__54901;
chunk__54521_54888 = G__54902;
count__54522_54889 = G__54903;
i__54523_54890 = G__54904;
continue;
} else {
var vec__54535_54905 = cljs.core.first(seq__54520_54899__$1);
var k_54906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54535_54905,(0),null);
var v_54907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54535_54905,(1),null);
style.setProperty(dommy.utils.as_str(k_54906),v_54907);


var G__54908 = cljs.core.next(seq__54520_54899__$1);
var G__54909 = null;
var G__54910 = (0);
var G__54911 = (0);
seq__54520_54887 = G__54908;
chunk__54521_54888 = G__54909;
count__54522_54889 = G__54910;
i__54523_54890 = G__54911;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq54517){
var G__54518 = cljs.core.first(seq54517);
var seq54517__$1 = cljs.core.next(seq54517);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54518,seq54517__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54916 = arguments.length;
var i__4737__auto___54917 = (0);
while(true){
if((i__4737__auto___54917 < len__4736__auto___54916)){
args__4742__auto__.push((arguments[i__4737__auto___54917]));

var G__54918 = (i__4737__auto___54917 + (1));
i__4737__auto___54917 = G__54918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__54542_54919 = cljs.core.seq(keywords);
var chunk__54543_54920 = null;
var count__54544_54921 = (0);
var i__54545_54922 = (0);
while(true){
if((i__54545_54922 < count__54544_54921)){
var kw_54923 = chunk__54543_54920.cljs$core$IIndexed$_nth$arity$2(null,i__54545_54922);
style.removeProperty(dommy.utils.as_str(kw_54923));


var G__54924 = seq__54542_54919;
var G__54925 = chunk__54543_54920;
var G__54926 = count__54544_54921;
var G__54927 = (i__54545_54922 + (1));
seq__54542_54919 = G__54924;
chunk__54543_54920 = G__54925;
count__54544_54921 = G__54926;
i__54545_54922 = G__54927;
continue;
} else {
var temp__5735__auto___54928 = cljs.core.seq(seq__54542_54919);
if(temp__5735__auto___54928){
var seq__54542_54929__$1 = temp__5735__auto___54928;
if(cljs.core.chunked_seq_QMARK_(seq__54542_54929__$1)){
var c__4556__auto___54930 = cljs.core.chunk_first(seq__54542_54929__$1);
var G__54931 = cljs.core.chunk_rest(seq__54542_54929__$1);
var G__54932 = c__4556__auto___54930;
var G__54933 = cljs.core.count(c__4556__auto___54930);
var G__54934 = (0);
seq__54542_54919 = G__54931;
chunk__54543_54920 = G__54932;
count__54544_54921 = G__54933;
i__54545_54922 = G__54934;
continue;
} else {
var kw_54935 = cljs.core.first(seq__54542_54929__$1);
style.removeProperty(dommy.utils.as_str(kw_54935));


var G__54936 = cljs.core.next(seq__54542_54929__$1);
var G__54937 = null;
var G__54938 = (0);
var G__54939 = (0);
seq__54542_54919 = G__54936;
chunk__54543_54920 = G__54937;
count__54544_54921 = G__54938;
i__54545_54922 = G__54939;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq54539){
var G__54540 = cljs.core.first(seq54539);
var seq54539__$1 = cljs.core.next(seq54539);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54540,seq54539__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54940 = arguments.length;
var i__4737__auto___54941 = (0);
while(true){
if((i__4737__auto___54941 < len__4736__auto___54940)){
args__4742__auto__.push((arguments[i__4737__auto___54941]));

var G__54942 = (i__4737__auto___54941 + (1));
i__4737__auto___54941 = G__54942;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__54548_54943 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__54549_54944 = null;
var count__54550_54945 = (0);
var i__54551_54946 = (0);
while(true){
if((i__54551_54946 < count__54550_54945)){
var vec__54558_54947 = chunk__54549_54944.cljs$core$IIndexed$_nth$arity$2(null,i__54551_54946);
var k_54948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54558_54947,(0),null);
var v_54949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54558_54947,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54948,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54949),"px"].join('')], 0));


var G__54950 = seq__54548_54943;
var G__54951 = chunk__54549_54944;
var G__54952 = count__54550_54945;
var G__54953 = (i__54551_54946 + (1));
seq__54548_54943 = G__54950;
chunk__54549_54944 = G__54951;
count__54550_54945 = G__54952;
i__54551_54946 = G__54953;
continue;
} else {
var temp__5735__auto___54954 = cljs.core.seq(seq__54548_54943);
if(temp__5735__auto___54954){
var seq__54548_54955__$1 = temp__5735__auto___54954;
if(cljs.core.chunked_seq_QMARK_(seq__54548_54955__$1)){
var c__4556__auto___54956 = cljs.core.chunk_first(seq__54548_54955__$1);
var G__54957 = cljs.core.chunk_rest(seq__54548_54955__$1);
var G__54958 = c__4556__auto___54956;
var G__54959 = cljs.core.count(c__4556__auto___54956);
var G__54960 = (0);
seq__54548_54943 = G__54957;
chunk__54549_54944 = G__54958;
count__54550_54945 = G__54959;
i__54551_54946 = G__54960;
continue;
} else {
var vec__54561_54961 = cljs.core.first(seq__54548_54955__$1);
var k_54962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54561_54961,(0),null);
var v_54963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54561_54961,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54962,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_54963),"px"].join('')], 0));


var G__54964 = cljs.core.next(seq__54548_54955__$1);
var G__54965 = null;
var G__54966 = (0);
var G__54967 = (0);
seq__54548_54943 = G__54964;
chunk__54549_54944 = G__54965;
count__54550_54945 = G__54966;
i__54551_54946 = G__54967;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq54546){
var G__54547 = cljs.core.first(seq54546);
var seq54546__$1 = cljs.core.next(seq54546);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54547,seq54546__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__54569 = arguments.length;
switch (G__54569) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54969 = arguments.length;
var i__4737__auto___54970 = (0);
while(true){
if((i__4737__auto___54970 < len__4736__auto___54969)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54970]));

var G__54971 = (i__4737__auto___54970 + (1));
i__4737__auto___54970 = G__54971;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__54570 = elem;
(G__54570[k__$1] = v);

return G__54570;
} else {
var G__54571 = elem;
G__54571.setAttribute(k__$1,v);

return G__54571;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__54572_54972 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__54573_54973 = null;
var count__54574_54974 = (0);
var i__54575_54975 = (0);
while(true){
if((i__54575_54975 < count__54574_54974)){
var vec__54584_54976 = chunk__54573_54973.cljs$core$IIndexed$_nth$arity$2(null,i__54575_54975);
var k_54977__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54584_54976,(0),null);
var v_54978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54584_54976,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54977__$1,v_54978__$1);


var G__54979 = seq__54572_54972;
var G__54980 = chunk__54573_54973;
var G__54981 = count__54574_54974;
var G__54982 = (i__54575_54975 + (1));
seq__54572_54972 = G__54979;
chunk__54573_54973 = G__54980;
count__54574_54974 = G__54981;
i__54575_54975 = G__54982;
continue;
} else {
var temp__5735__auto___54983 = cljs.core.seq(seq__54572_54972);
if(temp__5735__auto___54983){
var seq__54572_54984__$1 = temp__5735__auto___54983;
if(cljs.core.chunked_seq_QMARK_(seq__54572_54984__$1)){
var c__4556__auto___54985 = cljs.core.chunk_first(seq__54572_54984__$1);
var G__54986 = cljs.core.chunk_rest(seq__54572_54984__$1);
var G__54987 = c__4556__auto___54985;
var G__54988 = cljs.core.count(c__4556__auto___54985);
var G__54989 = (0);
seq__54572_54972 = G__54986;
chunk__54573_54973 = G__54987;
count__54574_54974 = G__54988;
i__54575_54975 = G__54989;
continue;
} else {
var vec__54588_54990 = cljs.core.first(seq__54572_54984__$1);
var k_54991__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54588_54990,(0),null);
var v_54992__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54588_54990,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_54991__$1,v_54992__$1);


var G__54993 = cljs.core.next(seq__54572_54984__$1);
var G__54994 = null;
var G__54995 = (0);
var G__54996 = (0);
seq__54572_54972 = G__54993;
chunk__54573_54973 = G__54994;
count__54574_54974 = G__54995;
i__54575_54975 = G__54996;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq54565){
var G__54566 = cljs.core.first(seq54565);
var seq54565__$1 = cljs.core.next(seq54565);
var G__54567 = cljs.core.first(seq54565__$1);
var seq54565__$2 = cljs.core.next(seq54565__$1);
var G__54568 = cljs.core.first(seq54565__$2);
var seq54565__$3 = cljs.core.next(seq54565__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54566,G__54567,G__54568,seq54565__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__54596 = arguments.length;
switch (G__54596) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54999 = arguments.length;
var i__4737__auto___55000 = (0);
while(true){
if((i__4737__auto___55000 < len__4736__auto___54999)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55000]));

var G__55001 = (i__4737__auto___55000 + (1));
i__4737__auto___55000 = G__55001;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_55002__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__54597 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__54597.cljs$core$IFn$_invoke$arity$1 ? fexpr__54597.cljs$core$IFn$_invoke$arity$1(k_55002__$1) : fexpr__54597.call(null,k_55002__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_55002__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__54598_55003 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__54599_55004 = null;
var count__54600_55005 = (0);
var i__54601_55006 = (0);
while(true){
if((i__54601_55006 < count__54600_55005)){
var k_55007__$1 = chunk__54599_55004.cljs$core$IIndexed$_nth$arity$2(null,i__54601_55006);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55007__$1);


var G__55008 = seq__54598_55003;
var G__55009 = chunk__54599_55004;
var G__55010 = count__54600_55005;
var G__55011 = (i__54601_55006 + (1));
seq__54598_55003 = G__55008;
chunk__54599_55004 = G__55009;
count__54600_55005 = G__55010;
i__54601_55006 = G__55011;
continue;
} else {
var temp__5735__auto___55012 = cljs.core.seq(seq__54598_55003);
if(temp__5735__auto___55012){
var seq__54598_55013__$1 = temp__5735__auto___55012;
if(cljs.core.chunked_seq_QMARK_(seq__54598_55013__$1)){
var c__4556__auto___55014 = cljs.core.chunk_first(seq__54598_55013__$1);
var G__55015 = cljs.core.chunk_rest(seq__54598_55013__$1);
var G__55016 = c__4556__auto___55014;
var G__55017 = cljs.core.count(c__4556__auto___55014);
var G__55018 = (0);
seq__54598_55003 = G__55015;
chunk__54599_55004 = G__55016;
count__54600_55005 = G__55017;
i__54601_55006 = G__55018;
continue;
} else {
var k_55019__$1 = cljs.core.first(seq__54598_55013__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_55019__$1);


var G__55020 = cljs.core.next(seq__54598_55013__$1);
var G__55021 = null;
var G__55022 = (0);
var G__55023 = (0);
seq__54598_55003 = G__55020;
chunk__54599_55004 = G__55021;
count__54600_55005 = G__55022;
i__54601_55006 = G__55023;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq54593){
var G__54594 = cljs.core.first(seq54593);
var seq54593__$1 = cljs.core.next(seq54593);
var G__54595 = cljs.core.first(seq54593__$1);
var seq54593__$2 = cljs.core.next(seq54593__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54594,G__54595,seq54593__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__54603 = arguments.length;
switch (G__54603) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__54608 = arguments.length;
switch (G__54608) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55030 = arguments.length;
var i__4737__auto___55031 = (0);
while(true){
if((i__4737__auto___55031 < len__4736__auto___55030)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55031]));

var G__55032 = (i__4737__auto___55031 + (1));
i__4737__auto___55031 = G__55032;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___55033 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55033)){
var class_list_55034 = temp__5733__auto___55033;
var seq__54609_55035 = cljs.core.seq(classes__$1);
var chunk__54610_55036 = null;
var count__54611_55037 = (0);
var i__54612_55038 = (0);
while(true){
if((i__54612_55038 < count__54611_55037)){
var c_55040 = chunk__54610_55036.cljs$core$IIndexed$_nth$arity$2(null,i__54612_55038);
class_list_55034.add(c_55040);


var G__55041 = seq__54609_55035;
var G__55042 = chunk__54610_55036;
var G__55043 = count__54611_55037;
var G__55044 = (i__54612_55038 + (1));
seq__54609_55035 = G__55041;
chunk__54610_55036 = G__55042;
count__54611_55037 = G__55043;
i__54612_55038 = G__55044;
continue;
} else {
var temp__5735__auto___55046 = cljs.core.seq(seq__54609_55035);
if(temp__5735__auto___55046){
var seq__54609_55048__$1 = temp__5735__auto___55046;
if(cljs.core.chunked_seq_QMARK_(seq__54609_55048__$1)){
var c__4556__auto___55049 = cljs.core.chunk_first(seq__54609_55048__$1);
var G__55051 = cljs.core.chunk_rest(seq__54609_55048__$1);
var G__55052 = c__4556__auto___55049;
var G__55053 = cljs.core.count(c__4556__auto___55049);
var G__55054 = (0);
seq__54609_55035 = G__55051;
chunk__54610_55036 = G__55052;
count__54611_55037 = G__55053;
i__54612_55038 = G__55054;
continue;
} else {
var c_55055 = cljs.core.first(seq__54609_55048__$1);
class_list_55034.add(c_55055);


var G__55056 = cljs.core.next(seq__54609_55048__$1);
var G__55057 = null;
var G__55058 = (0);
var G__55059 = (0);
seq__54609_55035 = G__55056;
chunk__54610_55036 = G__55057;
count__54611_55037 = G__55058;
i__54612_55038 = G__55059;
continue;
}
} else {
}
}
break;
}
} else {
var seq__54613_55061 = cljs.core.seq(classes__$1);
var chunk__54614_55062 = null;
var count__54615_55063 = (0);
var i__54616_55064 = (0);
while(true){
if((i__54616_55064 < count__54615_55063)){
var c_55065 = chunk__54614_55062.cljs$core$IIndexed$_nth$arity$2(null,i__54616_55064);
var class_name_55066 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55066,c_55065))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55066 === ""))?c_55065:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55066)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55065)].join('')));
}


var G__55067 = seq__54613_55061;
var G__55068 = chunk__54614_55062;
var G__55069 = count__54615_55063;
var G__55070 = (i__54616_55064 + (1));
seq__54613_55061 = G__55067;
chunk__54614_55062 = G__55068;
count__54615_55063 = G__55069;
i__54616_55064 = G__55070;
continue;
} else {
var temp__5735__auto___55073 = cljs.core.seq(seq__54613_55061);
if(temp__5735__auto___55073){
var seq__54613_55075__$1 = temp__5735__auto___55073;
if(cljs.core.chunked_seq_QMARK_(seq__54613_55075__$1)){
var c__4556__auto___55076 = cljs.core.chunk_first(seq__54613_55075__$1);
var G__55077 = cljs.core.chunk_rest(seq__54613_55075__$1);
var G__55078 = c__4556__auto___55076;
var G__55079 = cljs.core.count(c__4556__auto___55076);
var G__55080 = (0);
seq__54613_55061 = G__55077;
chunk__54614_55062 = G__55078;
count__54615_55063 = G__55079;
i__54616_55064 = G__55080;
continue;
} else {
var c_55081 = cljs.core.first(seq__54613_55075__$1);
var class_name_55082 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_55082,c_55081))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_55082 === ""))?c_55081:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_55082)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_55081)].join('')));
}


var G__55083 = cljs.core.next(seq__54613_55075__$1);
var G__55084 = null;
var G__55085 = (0);
var G__55086 = (0);
seq__54613_55061 = G__55083;
chunk__54614_55062 = G__55084;
count__54615_55063 = G__55085;
i__54616_55064 = G__55086;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__54617_55087 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__54618_55088 = null;
var count__54619_55089 = (0);
var i__54620_55090 = (0);
while(true){
if((i__54620_55090 < count__54619_55089)){
var c_55091 = chunk__54618_55088.cljs$core$IIndexed$_nth$arity$2(null,i__54620_55090);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55091);


var G__55092 = seq__54617_55087;
var G__55093 = chunk__54618_55088;
var G__55094 = count__54619_55089;
var G__55095 = (i__54620_55090 + (1));
seq__54617_55087 = G__55092;
chunk__54618_55088 = G__55093;
count__54619_55089 = G__55094;
i__54620_55090 = G__55095;
continue;
} else {
var temp__5735__auto___55096 = cljs.core.seq(seq__54617_55087);
if(temp__5735__auto___55096){
var seq__54617_55097__$1 = temp__5735__auto___55096;
if(cljs.core.chunked_seq_QMARK_(seq__54617_55097__$1)){
var c__4556__auto___55098 = cljs.core.chunk_first(seq__54617_55097__$1);
var G__55099 = cljs.core.chunk_rest(seq__54617_55097__$1);
var G__55100 = c__4556__auto___55098;
var G__55101 = cljs.core.count(c__4556__auto___55098);
var G__55102 = (0);
seq__54617_55087 = G__55099;
chunk__54618_55088 = G__55100;
count__54619_55089 = G__55101;
i__54620_55090 = G__55102;
continue;
} else {
var c_55103 = cljs.core.first(seq__54617_55097__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_55103);


var G__55104 = cljs.core.next(seq__54617_55097__$1);
var G__55105 = null;
var G__55106 = (0);
var G__55107 = (0);
seq__54617_55087 = G__55104;
chunk__54618_55088 = G__55105;
count__54619_55089 = G__55106;
i__54620_55090 = G__55107;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq54605){
var G__54606 = cljs.core.first(seq54605);
var seq54605__$1 = cljs.core.next(seq54605);
var G__54607 = cljs.core.first(seq54605__$1);
var seq54605__$2 = cljs.core.next(seq54605__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54606,G__54607,seq54605__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__54625 = arguments.length;
switch (G__54625) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55109 = arguments.length;
var i__4737__auto___55110 = (0);
while(true){
if((i__4737__auto___55110 < len__4736__auto___55109)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55110]));

var G__55111 = (i__4737__auto___55110 + (1));
i__4737__auto___55110 = G__55111;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___55112 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55112)){
var class_list_55113 = temp__5733__auto___55112;
class_list_55113.remove(c__$1);
} else {
var class_name_55114 = dommy.core.class$(elem);
var new_class_name_55115 = dommy.utils.remove_class_str(class_name_55114,c__$1);
if((class_name_55114 === new_class_name_55115)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_55115);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__54626 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__54627 = null;
var count__54628 = (0);
var i__54629 = (0);
while(true){
if((i__54629 < count__54628)){
var c = chunk__54627.cljs$core$IIndexed$_nth$arity$2(null,i__54629);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55116 = seq__54626;
var G__55117 = chunk__54627;
var G__55118 = count__54628;
var G__55119 = (i__54629 + (1));
seq__54626 = G__55116;
chunk__54627 = G__55117;
count__54628 = G__55118;
i__54629 = G__55119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54626);
if(temp__5735__auto__){
var seq__54626__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54626__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54626__$1);
var G__55120 = cljs.core.chunk_rest(seq__54626__$1);
var G__55121 = c__4556__auto__;
var G__55122 = cljs.core.count(c__4556__auto__);
var G__55123 = (0);
seq__54626 = G__55120;
chunk__54627 = G__55121;
count__54628 = G__55122;
i__54629 = G__55123;
continue;
} else {
var c = cljs.core.first(seq__54626__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__55124 = cljs.core.next(seq__54626__$1);
var G__55125 = null;
var G__55126 = (0);
var G__55127 = (0);
seq__54626 = G__55124;
chunk__54627 = G__55125;
count__54628 = G__55126;
i__54629 = G__55127;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq54622){
var G__54623 = cljs.core.first(seq54622);
var seq54622__$1 = cljs.core.next(seq54622);
var G__54624 = cljs.core.first(seq54622__$1);
var seq54622__$2 = cljs.core.next(seq54622__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54623,G__54624,seq54622__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__54631 = arguments.length;
switch (G__54631) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___55130 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___55130)){
var class_list_55131 = temp__5733__auto___55130;
class_list_55131.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__54633 = arguments.length;
switch (G__54633) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__54635 = arguments.length;
switch (G__54635) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__54640 = arguments.length;
switch (G__54640) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55138 = arguments.length;
var i__4737__auto___55139 = (0);
while(true){
if((i__4737__auto___55139 < len__4736__auto___55138)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55139]));

var G__55140 = (i__4737__auto___55139 + (1));
i__4737__auto___55139 = G__55140;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__54641 = parent;
G__54641.appendChild(child);

return G__54641;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54642_55141 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54643_55142 = null;
var count__54644_55143 = (0);
var i__54645_55144 = (0);
while(true){
if((i__54645_55144 < count__54644_55143)){
var c_55145 = chunk__54643_55142.cljs$core$IIndexed$_nth$arity$2(null,i__54645_55144);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55145);


var G__55146 = seq__54642_55141;
var G__55147 = chunk__54643_55142;
var G__55148 = count__54644_55143;
var G__55149 = (i__54645_55144 + (1));
seq__54642_55141 = G__55146;
chunk__54643_55142 = G__55147;
count__54644_55143 = G__55148;
i__54645_55144 = G__55149;
continue;
} else {
var temp__5735__auto___55150 = cljs.core.seq(seq__54642_55141);
if(temp__5735__auto___55150){
var seq__54642_55151__$1 = temp__5735__auto___55150;
if(cljs.core.chunked_seq_QMARK_(seq__54642_55151__$1)){
var c__4556__auto___55152 = cljs.core.chunk_first(seq__54642_55151__$1);
var G__55153 = cljs.core.chunk_rest(seq__54642_55151__$1);
var G__55154 = c__4556__auto___55152;
var G__55155 = cljs.core.count(c__4556__auto___55152);
var G__55156 = (0);
seq__54642_55141 = G__55153;
chunk__54643_55142 = G__55154;
count__54644_55143 = G__55155;
i__54645_55144 = G__55156;
continue;
} else {
var c_55157 = cljs.core.first(seq__54642_55151__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55157);


var G__55158 = cljs.core.next(seq__54642_55151__$1);
var G__55159 = null;
var G__55160 = (0);
var G__55161 = (0);
seq__54642_55141 = G__55158;
chunk__54643_55142 = G__55159;
count__54644_55143 = G__55160;
i__54645_55144 = G__55161;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq54637){
var G__54638 = cljs.core.first(seq54637);
var seq54637__$1 = cljs.core.next(seq54637);
var G__54639 = cljs.core.first(seq54637__$1);
var seq54637__$2 = cljs.core.next(seq54637__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54638,G__54639,seq54637__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__54650 = arguments.length;
switch (G__54650) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___55163 = arguments.length;
var i__4737__auto___55164 = (0);
while(true){
if((i__4737__auto___55164 < len__4736__auto___55163)){
args_arr__4757__auto__.push((arguments[i__4737__auto___55164]));

var G__55165 = (i__4737__auto___55164 + (1));
i__4737__auto___55164 = G__55165;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__54651 = parent;
G__54651.insertBefore(child,parent.firstChild);

return G__54651;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__54652_55166 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__54653_55167 = null;
var count__54654_55168 = (0);
var i__54655_55169 = (0);
while(true){
if((i__54655_55169 < count__54654_55168)){
var c_55170 = chunk__54653_55167.cljs$core$IIndexed$_nth$arity$2(null,i__54655_55169);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55170);


var G__55171 = seq__54652_55166;
var G__55172 = chunk__54653_55167;
var G__55173 = count__54654_55168;
var G__55174 = (i__54655_55169 + (1));
seq__54652_55166 = G__55171;
chunk__54653_55167 = G__55172;
count__54654_55168 = G__55173;
i__54655_55169 = G__55174;
continue;
} else {
var temp__5735__auto___55175 = cljs.core.seq(seq__54652_55166);
if(temp__5735__auto___55175){
var seq__54652_55176__$1 = temp__5735__auto___55175;
if(cljs.core.chunked_seq_QMARK_(seq__54652_55176__$1)){
var c__4556__auto___55177 = cljs.core.chunk_first(seq__54652_55176__$1);
var G__55178 = cljs.core.chunk_rest(seq__54652_55176__$1);
var G__55179 = c__4556__auto___55177;
var G__55180 = cljs.core.count(c__4556__auto___55177);
var G__55181 = (0);
seq__54652_55166 = G__55178;
chunk__54653_55167 = G__55179;
count__54654_55168 = G__55180;
i__54655_55169 = G__55181;
continue;
} else {
var c_55182 = cljs.core.first(seq__54652_55176__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_55182);


var G__55183 = cljs.core.next(seq__54652_55176__$1);
var G__55184 = null;
var G__55185 = (0);
var G__55186 = (0);
seq__54652_55166 = G__55183;
chunk__54653_55167 = G__55184;
count__54654_55168 = G__55185;
i__54655_55169 = G__55186;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq54647){
var G__54648 = cljs.core.first(seq54647);
var seq54647__$1 = cljs.core.next(seq54647);
var G__54649 = cljs.core.first(seq54647__$1);
var seq54647__$2 = cljs.core.next(seq54647__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54648,G__54649,seq54647__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___55187 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___55187)){
var next_55188 = temp__5733__auto___55187;
dommy.core.insert_before_BANG_(elem,next_55188);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__54657 = arguments.length;
switch (G__54657) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__54658 = p;
G__54658.removeChild(elem);

return G__54658;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54659){
var vec__54660 = p__54659;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54660,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54660,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55190 = arguments.length;
var i__4737__auto___55191 = (0);
while(true){
if((i__4737__auto___55191 < len__4736__auto___55190)){
args__4742__auto__.push((arguments[i__4737__auto___55191]));

var G__55192 = (i__4737__auto___55191 + (1));
i__4737__auto___55191 = G__55192;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq54663){
var G__54664 = cljs.core.first(seq54663);
var seq54663__$1 = cljs.core.next(seq54663);
var G__54665 = cljs.core.first(seq54663__$1);
var seq54663__$2 = cljs.core.next(seq54663__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54664,G__54665,seq54663__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55193 = arguments.length;
var i__4737__auto___55194 = (0);
while(true){
if((i__4737__auto___55194 < len__4736__auto___55193)){
args__4742__auto__.push((arguments[i__4737__auto___55194]));

var G__55195 = (i__4737__auto___55194 + (1));
i__4737__auto___55194 = G__55195;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54668_55196 = dommy.core.elem_and_selector(elem_sel);
var elem_55197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54668_55196,(0),null);
var selector_55198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54668_55196,(1),null);
var seq__54671_55199 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54678_55200 = null;
var count__54679_55201 = (0);
var i__54680_55202 = (0);
while(true){
if((i__54680_55202 < count__54679_55201)){
var vec__54733_55203 = chunk__54678_55200.cljs$core$IIndexed$_nth$arity$2(null,i__54680_55202);
var orig_type_55204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54733_55203,(0),null);
var f_55205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54733_55203,(1),null);
var seq__54681_55206 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55204,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55204,cljs.core.identity])));
var chunk__54683_55207 = null;
var count__54684_55208 = (0);
var i__54685_55209 = (0);
while(true){
if((i__54685_55209 < count__54684_55208)){
var vec__54746_55210 = chunk__54683_55207.cljs$core$IIndexed$_nth$arity$2(null,i__54685_55209);
var actual_type_55211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746_55210,(0),null);
var factory_55212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746_55210,(1),null);
var canonical_f_55213 = (function (){var G__54750 = (factory_55212.cljs$core$IFn$_invoke$arity$1 ? factory_55212.cljs$core$IFn$_invoke$arity$1(f_55205) : factory_55212.call(null,f_55205));
var fexpr__54749 = (cljs.core.truth_(selector_55198)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55197,selector_55198):cljs.core.identity);
return (fexpr__54749.cljs$core$IFn$_invoke$arity$1 ? fexpr__54749.cljs$core$IFn$_invoke$arity$1(G__54750) : fexpr__54749.call(null,G__54750));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55197,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55198,actual_type_55211,f_55205], null),canonical_f_55213], 0));

if(cljs.core.truth_(elem_55197.addEventListener)){
elem_55197.addEventListener(cljs.core.name(actual_type_55211),canonical_f_55213);
} else {
elem_55197.attachEvent(cljs.core.name(actual_type_55211),canonical_f_55213);
}


var G__55214 = seq__54681_55206;
var G__55215 = chunk__54683_55207;
var G__55216 = count__54684_55208;
var G__55217 = (i__54685_55209 + (1));
seq__54681_55206 = G__55214;
chunk__54683_55207 = G__55215;
count__54684_55208 = G__55216;
i__54685_55209 = G__55217;
continue;
} else {
var temp__5735__auto___55218 = cljs.core.seq(seq__54681_55206);
if(temp__5735__auto___55218){
var seq__54681_55219__$1 = temp__5735__auto___55218;
if(cljs.core.chunked_seq_QMARK_(seq__54681_55219__$1)){
var c__4556__auto___55220 = cljs.core.chunk_first(seq__54681_55219__$1);
var G__55221 = cljs.core.chunk_rest(seq__54681_55219__$1);
var G__55222 = c__4556__auto___55220;
var G__55223 = cljs.core.count(c__4556__auto___55220);
var G__55224 = (0);
seq__54681_55206 = G__55221;
chunk__54683_55207 = G__55222;
count__54684_55208 = G__55223;
i__54685_55209 = G__55224;
continue;
} else {
var vec__54751_55225 = cljs.core.first(seq__54681_55219__$1);
var actual_type_55226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54751_55225,(0),null);
var factory_55227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54751_55225,(1),null);
var canonical_f_55228 = (function (){var G__54755 = (factory_55227.cljs$core$IFn$_invoke$arity$1 ? factory_55227.cljs$core$IFn$_invoke$arity$1(f_55205) : factory_55227.call(null,f_55205));
var fexpr__54754 = (cljs.core.truth_(selector_55198)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55197,selector_55198):cljs.core.identity);
return (fexpr__54754.cljs$core$IFn$_invoke$arity$1 ? fexpr__54754.cljs$core$IFn$_invoke$arity$1(G__54755) : fexpr__54754.call(null,G__54755));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55197,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55198,actual_type_55226,f_55205], null),canonical_f_55228], 0));

if(cljs.core.truth_(elem_55197.addEventListener)){
elem_55197.addEventListener(cljs.core.name(actual_type_55226),canonical_f_55228);
} else {
elem_55197.attachEvent(cljs.core.name(actual_type_55226),canonical_f_55228);
}


var G__55229 = cljs.core.next(seq__54681_55219__$1);
var G__55230 = null;
var G__55231 = (0);
var G__55232 = (0);
seq__54681_55206 = G__55229;
chunk__54683_55207 = G__55230;
count__54684_55208 = G__55231;
i__54685_55209 = G__55232;
continue;
}
} else {
}
}
break;
}

var G__55233 = seq__54671_55199;
var G__55234 = chunk__54678_55200;
var G__55235 = count__54679_55201;
var G__55236 = (i__54680_55202 + (1));
seq__54671_55199 = G__55233;
chunk__54678_55200 = G__55234;
count__54679_55201 = G__55235;
i__54680_55202 = G__55236;
continue;
} else {
var temp__5735__auto___55237 = cljs.core.seq(seq__54671_55199);
if(temp__5735__auto___55237){
var seq__54671_55238__$1 = temp__5735__auto___55237;
if(cljs.core.chunked_seq_QMARK_(seq__54671_55238__$1)){
var c__4556__auto___55243 = cljs.core.chunk_first(seq__54671_55238__$1);
var G__55244 = cljs.core.chunk_rest(seq__54671_55238__$1);
var G__55245 = c__4556__auto___55243;
var G__55246 = cljs.core.count(c__4556__auto___55243);
var G__55247 = (0);
seq__54671_55199 = G__55244;
chunk__54678_55200 = G__55245;
count__54679_55201 = G__55246;
i__54680_55202 = G__55247;
continue;
} else {
var vec__54756_55248 = cljs.core.first(seq__54671_55238__$1);
var orig_type_55249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756_55248,(0),null);
var f_55250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756_55248,(1),null);
var seq__54672_55255 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55249,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55249,cljs.core.identity])));
var chunk__54674_55256 = null;
var count__54675_55257 = (0);
var i__54676_55258 = (0);
while(true){
if((i__54676_55258 < count__54675_55257)){
var vec__54769_55263 = chunk__54674_55256.cljs$core$IIndexed$_nth$arity$2(null,i__54676_55258);
var actual_type_55264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54769_55263,(0),null);
var factory_55265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54769_55263,(1),null);
var canonical_f_55266 = (function (){var G__54773 = (factory_55265.cljs$core$IFn$_invoke$arity$1 ? factory_55265.cljs$core$IFn$_invoke$arity$1(f_55250) : factory_55265.call(null,f_55250));
var fexpr__54772 = (cljs.core.truth_(selector_55198)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55197,selector_55198):cljs.core.identity);
return (fexpr__54772.cljs$core$IFn$_invoke$arity$1 ? fexpr__54772.cljs$core$IFn$_invoke$arity$1(G__54773) : fexpr__54772.call(null,G__54773));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55197,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55198,actual_type_55264,f_55250], null),canonical_f_55266], 0));

if(cljs.core.truth_(elem_55197.addEventListener)){
elem_55197.addEventListener(cljs.core.name(actual_type_55264),canonical_f_55266);
} else {
elem_55197.attachEvent(cljs.core.name(actual_type_55264),canonical_f_55266);
}


var G__55267 = seq__54672_55255;
var G__55268 = chunk__54674_55256;
var G__55269 = count__54675_55257;
var G__55270 = (i__54676_55258 + (1));
seq__54672_55255 = G__55267;
chunk__54674_55256 = G__55268;
count__54675_55257 = G__55269;
i__54676_55258 = G__55270;
continue;
} else {
var temp__5735__auto___55271__$1 = cljs.core.seq(seq__54672_55255);
if(temp__5735__auto___55271__$1){
var seq__54672_55273__$1 = temp__5735__auto___55271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54672_55273__$1)){
var c__4556__auto___55274 = cljs.core.chunk_first(seq__54672_55273__$1);
var G__55275 = cljs.core.chunk_rest(seq__54672_55273__$1);
var G__55276 = c__4556__auto___55274;
var G__55277 = cljs.core.count(c__4556__auto___55274);
var G__55278 = (0);
seq__54672_55255 = G__55275;
chunk__54674_55256 = G__55276;
count__54675_55257 = G__55277;
i__54676_55258 = G__55278;
continue;
} else {
var vec__54774_55279 = cljs.core.first(seq__54672_55273__$1);
var actual_type_55280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54774_55279,(0),null);
var factory_55281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54774_55279,(1),null);
var canonical_f_55282 = (function (){var G__54778 = (factory_55281.cljs$core$IFn$_invoke$arity$1 ? factory_55281.cljs$core$IFn$_invoke$arity$1(f_55250) : factory_55281.call(null,f_55250));
var fexpr__54777 = (cljs.core.truth_(selector_55198)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_55197,selector_55198):cljs.core.identity);
return (fexpr__54777.cljs$core$IFn$_invoke$arity$1 ? fexpr__54777.cljs$core$IFn$_invoke$arity$1(G__54778) : fexpr__54777.call(null,G__54778));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55197,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55198,actual_type_55280,f_55250], null),canonical_f_55282], 0));

if(cljs.core.truth_(elem_55197.addEventListener)){
elem_55197.addEventListener(cljs.core.name(actual_type_55280),canonical_f_55282);
} else {
elem_55197.attachEvent(cljs.core.name(actual_type_55280),canonical_f_55282);
}


var G__55284 = cljs.core.next(seq__54672_55273__$1);
var G__55285 = null;
var G__55286 = (0);
var G__55287 = (0);
seq__54672_55255 = G__55284;
chunk__54674_55256 = G__55285;
count__54675_55257 = G__55286;
i__54676_55258 = G__55287;
continue;
}
} else {
}
}
break;
}

var G__55288 = cljs.core.next(seq__54671_55238__$1);
var G__55289 = null;
var G__55290 = (0);
var G__55291 = (0);
seq__54671_55199 = G__55288;
chunk__54678_55200 = G__55289;
count__54679_55201 = G__55290;
i__54680_55202 = G__55291;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq54666){
var G__54667 = cljs.core.first(seq54666);
var seq54666__$1 = cljs.core.next(seq54666);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54667,seq54666__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55295 = arguments.length;
var i__4737__auto___55296 = (0);
while(true){
if((i__4737__auto___55296 < len__4736__auto___55295)){
args__4742__auto__.push((arguments[i__4737__auto___55296]));

var G__55297 = (i__4737__auto___55296 + (1));
i__4737__auto___55296 = G__55297;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54781_55298 = dommy.core.elem_and_selector(elem_sel);
var elem_55299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54781_55298,(0),null);
var selector_55300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54781_55298,(1),null);
var seq__54784_55301 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54791_55302 = null;
var count__54792_55303 = (0);
var i__54793_55304 = (0);
while(true){
if((i__54793_55304 < count__54792_55303)){
var vec__54830_55305 = chunk__54791_55302.cljs$core$IIndexed$_nth$arity$2(null,i__54793_55304);
var orig_type_55306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54830_55305,(0),null);
var f_55307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54830_55305,(1),null);
var seq__54794_55308 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55306,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55306,cljs.core.identity])));
var chunk__54796_55309 = null;
var count__54797_55310 = (0);
var i__54798_55311 = (0);
while(true){
if((i__54798_55311 < count__54797_55310)){
var vec__54839_55312 = chunk__54796_55309.cljs$core$IIndexed$_nth$arity$2(null,i__54798_55311);
var actual_type_55313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54839_55312,(0),null);
var __55314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54839_55312,(1),null);
var keys_55315 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55313,f_55307], null);
var canonical_f_55316 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55315);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55315], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55313),canonical_f_55316);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55313),canonical_f_55316);
}


var G__55317 = seq__54794_55308;
var G__55318 = chunk__54796_55309;
var G__55319 = count__54797_55310;
var G__55320 = (i__54798_55311 + (1));
seq__54794_55308 = G__55317;
chunk__54796_55309 = G__55318;
count__54797_55310 = G__55319;
i__54798_55311 = G__55320;
continue;
} else {
var temp__5735__auto___55321 = cljs.core.seq(seq__54794_55308);
if(temp__5735__auto___55321){
var seq__54794_55322__$1 = temp__5735__auto___55321;
if(cljs.core.chunked_seq_QMARK_(seq__54794_55322__$1)){
var c__4556__auto___55323 = cljs.core.chunk_first(seq__54794_55322__$1);
var G__55324 = cljs.core.chunk_rest(seq__54794_55322__$1);
var G__55325 = c__4556__auto___55323;
var G__55326 = cljs.core.count(c__4556__auto___55323);
var G__55327 = (0);
seq__54794_55308 = G__55324;
chunk__54796_55309 = G__55325;
count__54797_55310 = G__55326;
i__54798_55311 = G__55327;
continue;
} else {
var vec__54842_55328 = cljs.core.first(seq__54794_55322__$1);
var actual_type_55329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55328,(0),null);
var __55330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54842_55328,(1),null);
var keys_55331 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55329,f_55307], null);
var canonical_f_55332 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55331);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55331], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55329),canonical_f_55332);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55329),canonical_f_55332);
}


var G__55333 = cljs.core.next(seq__54794_55322__$1);
var G__55334 = null;
var G__55335 = (0);
var G__55336 = (0);
seq__54794_55308 = G__55333;
chunk__54796_55309 = G__55334;
count__54797_55310 = G__55335;
i__54798_55311 = G__55336;
continue;
}
} else {
}
}
break;
}

var G__55337 = seq__54784_55301;
var G__55338 = chunk__54791_55302;
var G__55339 = count__54792_55303;
var G__55340 = (i__54793_55304 + (1));
seq__54784_55301 = G__55337;
chunk__54791_55302 = G__55338;
count__54792_55303 = G__55339;
i__54793_55304 = G__55340;
continue;
} else {
var temp__5735__auto___55341 = cljs.core.seq(seq__54784_55301);
if(temp__5735__auto___55341){
var seq__54784_55342__$1 = temp__5735__auto___55341;
if(cljs.core.chunked_seq_QMARK_(seq__54784_55342__$1)){
var c__4556__auto___55343 = cljs.core.chunk_first(seq__54784_55342__$1);
var G__55344 = cljs.core.chunk_rest(seq__54784_55342__$1);
var G__55345 = c__4556__auto___55343;
var G__55346 = cljs.core.count(c__4556__auto___55343);
var G__55347 = (0);
seq__54784_55301 = G__55344;
chunk__54791_55302 = G__55345;
count__54792_55303 = G__55346;
i__54793_55304 = G__55347;
continue;
} else {
var vec__54845_55348 = cljs.core.first(seq__54784_55342__$1);
var orig_type_55349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55348,(0),null);
var f_55350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54845_55348,(1),null);
var seq__54785_55351 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_55349,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_55349,cljs.core.identity])));
var chunk__54787_55352 = null;
var count__54788_55353 = (0);
var i__54789_55354 = (0);
while(true){
if((i__54789_55354 < count__54788_55353)){
var vec__54854_55355 = chunk__54787_55352.cljs$core$IIndexed$_nth$arity$2(null,i__54789_55354);
var actual_type_55356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54854_55355,(0),null);
var __55357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54854_55355,(1),null);
var keys_55358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55356,f_55350], null);
var canonical_f_55359 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55358);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55358], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55356),canonical_f_55359);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55356),canonical_f_55359);
}


var G__55360 = seq__54785_55351;
var G__55361 = chunk__54787_55352;
var G__55362 = count__54788_55353;
var G__55363 = (i__54789_55354 + (1));
seq__54785_55351 = G__55360;
chunk__54787_55352 = G__55361;
count__54788_55353 = G__55362;
i__54789_55354 = G__55363;
continue;
} else {
var temp__5735__auto___55364__$1 = cljs.core.seq(seq__54785_55351);
if(temp__5735__auto___55364__$1){
var seq__54785_55365__$1 = temp__5735__auto___55364__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54785_55365__$1)){
var c__4556__auto___55366 = cljs.core.chunk_first(seq__54785_55365__$1);
var G__55367 = cljs.core.chunk_rest(seq__54785_55365__$1);
var G__55368 = c__4556__auto___55366;
var G__55369 = cljs.core.count(c__4556__auto___55366);
var G__55370 = (0);
seq__54785_55351 = G__55367;
chunk__54787_55352 = G__55368;
count__54788_55353 = G__55369;
i__54789_55354 = G__55370;
continue;
} else {
var vec__54857_55371 = cljs.core.first(seq__54785_55365__$1);
var actual_type_55372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55371,(0),null);
var __55373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54857_55371,(1),null);
var keys_55374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_55300,actual_type_55372,f_55350], null);
var canonical_f_55375 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_55299),keys_55374);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_55299,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_55374], 0));

if(cljs.core.truth_(elem_55299.removeEventListener)){
elem_55299.removeEventListener(cljs.core.name(actual_type_55372),canonical_f_55375);
} else {
elem_55299.detachEvent(cljs.core.name(actual_type_55372),canonical_f_55375);
}


var G__55376 = cljs.core.next(seq__54785_55365__$1);
var G__55377 = null;
var G__55378 = (0);
var G__55379 = (0);
seq__54785_55351 = G__55376;
chunk__54787_55352 = G__55377;
count__54788_55353 = G__55378;
i__54789_55354 = G__55379;
continue;
}
} else {
}
}
break;
}

var G__55380 = cljs.core.next(seq__54784_55342__$1);
var G__55381 = null;
var G__55382 = (0);
var G__55383 = (0);
seq__54784_55301 = G__55380;
chunk__54791_55302 = G__55381;
count__54792_55303 = G__55382;
i__54793_55304 = G__55383;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq54779){
var G__54780 = cljs.core.first(seq54779);
var seq54779__$1 = cljs.core.next(seq54779);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54780,seq54779__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55384 = arguments.length;
var i__4737__auto___55385 = (0);
while(true){
if((i__4737__auto___55385 < len__4736__auto___55384)){
args__4742__auto__.push((arguments[i__4737__auto___55385]));

var G__55386 = (i__4737__auto___55385 + (1));
i__4737__auto___55385 = G__55386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__54862_55387 = dommy.core.elem_and_selector(elem_sel);
var elem_55388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54862_55387,(0),null);
var selector_55389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54862_55387,(1),null);
var seq__54865_55390 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__54866_55391 = null;
var count__54867_55392 = (0);
var i__54868_55393 = (0);
while(true){
if((i__54868_55393 < count__54867_55392)){
var vec__54875_55394 = chunk__54866_55391.cljs$core$IIndexed$_nth$arity$2(null,i__54868_55393);
var type_55395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54875_55394,(0),null);
var f_55396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54875_55394,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55395,((function (seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54875_55394,type_55395,f_55396,vec__54862_55387,elem_55388,selector_55389){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55395,dommy$core$this_fn], 0));

return (f_55396.cljs$core$IFn$_invoke$arity$1 ? f_55396.cljs$core$IFn$_invoke$arity$1(e) : f_55396.call(null,e));
});})(seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54875_55394,type_55395,f_55396,vec__54862_55387,elem_55388,selector_55389))
], 0));


var G__55397 = seq__54865_55390;
var G__55398 = chunk__54866_55391;
var G__55399 = count__54867_55392;
var G__55400 = (i__54868_55393 + (1));
seq__54865_55390 = G__55397;
chunk__54866_55391 = G__55398;
count__54867_55392 = G__55399;
i__54868_55393 = G__55400;
continue;
} else {
var temp__5735__auto___55401 = cljs.core.seq(seq__54865_55390);
if(temp__5735__auto___55401){
var seq__54865_55402__$1 = temp__5735__auto___55401;
if(cljs.core.chunked_seq_QMARK_(seq__54865_55402__$1)){
var c__4556__auto___55403 = cljs.core.chunk_first(seq__54865_55402__$1);
var G__55404 = cljs.core.chunk_rest(seq__54865_55402__$1);
var G__55405 = c__4556__auto___55403;
var G__55406 = cljs.core.count(c__4556__auto___55403);
var G__55407 = (0);
seq__54865_55390 = G__55404;
chunk__54866_55391 = G__55405;
count__54867_55392 = G__55406;
i__54868_55393 = G__55407;
continue;
} else {
var vec__54878_55408 = cljs.core.first(seq__54865_55402__$1);
var type_55409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55408,(0),null);
var f_55410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54878_55408,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55409,((function (seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54878_55408,type_55409,f_55410,seq__54865_55402__$1,temp__5735__auto___55401,vec__54862_55387,elem_55388,selector_55389){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_55409,dommy$core$this_fn], 0));

return (f_55410.cljs$core$IFn$_invoke$arity$1 ? f_55410.cljs$core$IFn$_invoke$arity$1(e) : f_55410.call(null,e));
});})(seq__54865_55390,chunk__54866_55391,count__54867_55392,i__54868_55393,vec__54878_55408,type_55409,f_55410,seq__54865_55402__$1,temp__5735__auto___55401,vec__54862_55387,elem_55388,selector_55389))
], 0));


var G__55411 = cljs.core.next(seq__54865_55402__$1);
var G__55412 = null;
var G__55413 = (0);
var G__55414 = (0);
seq__54865_55390 = G__55411;
chunk__54866_55391 = G__55412;
count__54867_55392 = G__55413;
i__54868_55393 = G__55414;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq54860){
var G__54861 = cljs.core.first(seq54860);
var seq54860__$1 = cljs.core.next(seq54860);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54861,seq54860__$1);
}));


//# sourceMappingURL=dommy.core.js.map
