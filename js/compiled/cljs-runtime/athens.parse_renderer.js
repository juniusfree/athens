goog.provide('athens.parse_renderer');
athens.parse_renderer.page_link = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0px 0px 0px 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))].join('')], null)], null)], null)], null);
athens.parse_renderer.hashtag = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".formatting",".formatting",-282112073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null)], null);
athens.parse_renderer.image = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.125rem"], null);
athens.parse_renderer.url_link = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.parse_renderer.block_ref = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em",new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.05s ease",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px","solid",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540))], null)], null),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-color","highlight-color",-1394121540),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"alias"], null)], null)], null)], null);
/**
 * Title coll is a sequence of plain strings or hiccup elements. If string, return string, otherwise parse the hiccup
 *   for its plain-text representation.
 */
athens.parse_renderer.parse_title = (function athens$parse_renderer$parse_title(title_coll){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
if(typeof el === 'string'){
return el;
} else {
return ["[[",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null))),"]]"].join('');
}
}),title_coll));
});
/**
 * Gets a block's node from the display string name (or partially parsed string tree)
 */
athens.parse_renderer.pull_node_from_string = (function athens$parse_renderer$pull_node_from_string(title_coll){
var title = athens.parse_renderer.parse_title(title_coll);
return posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),title], null));
});
/**
 * Renders a page link given the title of the page.
 */
athens.parse_renderer.render_page_link = (function athens$parse_renderer$render_page_link(title){
var node = athens.parse_renderer.pull_node_from_string(title);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.page_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"page-link"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"[["], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)),e);
})], null)], null),title),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"]]"], null)], null);
});
/**
 * Transforms Instaparse output to Hiccup.
 */
athens.parse_renderer.transform = (function athens$parse_renderer$transform(tree,uid){
var G__61769 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"url-image","url-image",535142411),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"page-link","page-link",-169621200),new cljs.core.Keyword(null,"pre-formatted","pre-formatted",797009626),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),new cljs.core.Keyword(null,"url-link","url-link",1615670141)],[(function (text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents bold"], null),text], null);
}),(function() { 
var G__61777__delegate = function (contents){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block"], null)], null),contents);
};
var G__61777 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__61778__i = 0, G__61778__a = new Array(arguments.length -  0);
while (G__61778__i < G__61778__a.length) {G__61778__a[G__61778__i] = arguments[G__61778__i + 0]; ++G__61778__i;}
  contents = new cljs.core.IndexedSeq(G__61778__a,0,null);
} 
return G__61777__delegate.call(this,contents);};
G__61777.cljs$lang$maxFixedArity = 0;
G__61777.cljs$lang$applyTo = (function (arglist__61779){
var contents = cljs.core.seq(arglist__61779);
return G__61777__delegate(contents);
});
G__61777.cljs$core$IFn$_invoke$arity$variadic = G__61777__delegate;
return G__61777;
})()
,(function (p__61771){
var map__61772 = p__61771;
var map__61772__$1 = (((((!((map__61772 == null))))?(((((map__61772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61772):map__61772);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61772__$1,new cljs.core.Keyword(null,"url","url",276297046));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61772__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-image",new cljs.core.Keyword(null,"alt","alt",-3214426),alt,new cljs.core.Keyword(null,"src","src",-1651076051),url], null))], null);
}),(function() { 
var G__61780__delegate = function (contents){
return athens.components.render_component(cljs.core.first(contents),uid);
};
var G__61780 = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__61781__i = 0, G__61781__a = new Array(arguments.length -  0);
while (G__61781__i < G__61781__a.length) {G__61781__a[G__61781__i] = arguments[G__61781__i + 0]; ++G__61781__i;}
  contents = new cljs.core.IndexedSeq(G__61781__a,0,null);
} 
return G__61780__delegate.call(this,contents);};
G__61780.cljs$lang$maxFixedArity = 0;
G__61780.cljs$lang$applyTo = (function (arglist__61782){
var contents = cljs.core.seq(arglist__61782);
return G__61780__delegate(contents);
});
G__61780.cljs$core$IFn$_invoke$arity$variadic = G__61780__delegate;
return G__61780;
})()
,(function() { 
var G__61783__delegate = function (title_coll){
return athens.parse_renderer.render_page_link(title_coll);
};
var G__61783 = function (var_args){
var title_coll = null;
if (arguments.length > 0) {
var G__61784__i = 0, G__61784__a = new Array(arguments.length -  0);
while (G__61784__i < G__61784__a.length) {G__61784__a[G__61784__i] = arguments[G__61784__i + 0]; ++G__61784__i;}
  title_coll = new cljs.core.IndexedSeq(G__61784__a,0,null);
} 
return G__61783__delegate.call(this,title_coll);};
G__61783.cljs$lang$maxFixedArity = 0;
G__61783.cljs$lang$applyTo = (function (arglist__61785){
var title_coll = cljs.core.seq(arglist__61785);
return G__61783__delegate(title_coll);
});
G__61783.cljs$core$IFn$_invoke$arity$variadic = G__61783__delegate;
return G__61783;
})()
,(function (text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),text], null);
}),(function (ref_uid){
var block = posh.reagent.pull(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),ref_uid], null));
if(cljs.core.truth_(cljs.core.deref(block))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.block_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-ref"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__61768_SHARP_){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(ref_uid,p1__61768_SHARP_);
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,ref_uid))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,"{{SELF}}"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block)),ref_uid], null))], null)], null);
} else {
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref_uid),"))"].join('');
}
}),(function() { 
var G__61786__delegate = function (title_coll){
var node = athens.parse_renderer.pull_node_from_string(title_coll);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.hashtag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"hashtag",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__61767_SHARP_){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)),p1__61767_SHARP_);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"formatting"], null),"#"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contents"], null),title_coll], null)], null);
};
var G__61786 = function (var_args){
var title_coll = null;
if (arguments.length > 0) {
var G__61787__i = 0, G__61787__a = new Array(arguments.length -  0);
while (G__61787__i < G__61787__a.length) {G__61787__a[G__61787__i] = arguments[G__61787__i + 0]; ++G__61787__i;}
  title_coll = new cljs.core.IndexedSeq(G__61787__a,0,null);
} 
return G__61786__delegate.call(this,title_coll);};
G__61786.cljs$lang$maxFixedArity = 0;
G__61786.cljs$lang$applyTo = (function (arglist__61788){
var title_coll = cljs.core.seq(arglist__61788);
return G__61786__delegate(title_coll);
});
G__61786.cljs$core$IFn$_invoke$arity$variadic = G__61786__delegate;
return G__61786;
})()
,(function (p__61774,text){
var map__61775 = p__61774;
var map__61775__$1 = (((((!((map__61775 == null))))?(((((map__61775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61775):map__61775);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61775__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.parse_renderer.url_link,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"url-link",new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)),text], null);
})]);
var G__61770 = tree;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__61769,G__61770) : instaparse.core.transform.call(null,G__61769,G__61770));
});
/**
 * Converts a string of block syntax to Hiccup, with fallback formatting if it can’t be parsed.
 */
athens.parse_renderer.parse_and_render = (function athens$parse_renderer$parse_and_render(string,uid){
var result = athens.parser.parse_to_ast(string);
if(instaparse.core.failure_QMARK_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.core.get_failure(result)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),string], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec,athens.parse_renderer.transform(result,uid)], null);
}
});

//# sourceMappingURL=athens.parse_renderer.js.map