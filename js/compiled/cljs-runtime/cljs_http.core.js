goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__51960 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__51960.cljs$core$IFn$_invoke$arity$1 ? fexpr__51960.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__51960.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51963){
var vec__51964 = p__51963;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51964,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__51968 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__51968)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__51968)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__51968)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__51968)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__51968)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__51968)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51968)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__51970){
var map__51971 = p__51970;
var map__51971__$1 = (((((!((map__51971 == null))))?(((((map__51971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51971):map__51971);
var request = map__51971__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__51973 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__51973,default_headers);

cljs_http.core.apply_response_type_BANG_(G__51973,response_type);

G__51973.setTimeoutInterval(timeout);

G__51973.setWithCredentials(send_credentials);

return G__51973;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__51977){
var map__51978 = p__51977;
var map__51978__$1 = (((((!((map__51978 == null))))?(((((map__51978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51978):map__51978);
var request = map__51978__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__51980 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__51980) : cljs_http.core.error_kw.call(null,G__51980));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_52066 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__51982_52067 = xhr;
G__51982_52067.setProgressEventsEnabled(true);

G__51982_52067.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_52066,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__51982_52067.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_52066,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__50415__auto___52070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_51996){
var state_val_51997 = (state_51996[(1)]);
if((state_val_51997 === (1))){
var state_51996__$1 = state_51996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51996__$1,(2),cancel);
} else {
if((state_val_51997 === (2))){
var inst_51987 = (state_51996[(2)]);
var inst_51988 = xhr.isComplete();
var inst_51989 = cljs.core.not(inst_51988);
var state_51996__$1 = (function (){var statearr_51998 = state_51996;
(statearr_51998[(7)] = inst_51987);

return statearr_51998;
})();
if(inst_51989){
var statearr_51999_52073 = state_51996__$1;
(statearr_51999_52073[(1)] = (3));

} else {
var statearr_52000_52075 = state_51996__$1;
(statearr_52000_52075[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51997 === (3))){
var inst_51991 = xhr.abort();
var state_51996__$1 = state_51996;
var statearr_52001_52076 = state_51996__$1;
(statearr_52001_52076[(2)] = inst_51991);

(statearr_52001_52076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51997 === (4))){
var state_51996__$1 = state_51996;
var statearr_52002_52077 = state_51996__$1;
(statearr_52002_52077[(2)] = null);

(statearr_52002_52077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51997 === (5))){
var inst_51994 = (state_51996[(2)]);
var state_51996__$1 = state_51996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51996__$1,inst_51994);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__50380__auto__ = null;
var cljs_http$core$xhr_$_state_machine__50380__auto____0 = (function (){
var statearr_52004 = [null,null,null,null,null,null,null,null];
(statearr_52004[(0)] = cljs_http$core$xhr_$_state_machine__50380__auto__);

(statearr_52004[(1)] = (1));

return statearr_52004;
});
var cljs_http$core$xhr_$_state_machine__50380__auto____1 = (function (state_51996){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_51996);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e52005){var ex__50383__auto__ = e52005;
var statearr_52007_52081 = state_51996;
(statearr_52007_52081[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_51996[(4)]))){
var statearr_52008_52082 = state_51996;
(statearr_52008_52082[(1)] = cljs.core.first((state_51996[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52084 = state_51996;
state_51996 = G__52084;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__50380__auto__ = function(state_51996){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__50380__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__50380__auto____1.call(this,state_51996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__50380__auto____0;
cljs_http$core$xhr_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__50380__auto____1;
return cljs_http$core$xhr_$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_52011 = f__50416__auto__();
(statearr_52011[(6)] = c__50415__auto___52070);

return statearr_52011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__52015){
var map__52016 = p__52015;
var map__52016__$1 = (((((!((map__52016 == null))))?(((((map__52016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52016):map__52016);
var request = map__52016__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52016__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_52090 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_52090], null));

if(cljs.core.truth_(cancel)){
var c__50415__auto___52091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50416__auto__ = (function (){var switch__50379__auto__ = (function (state_52030){
var state_val_52031 = (state_52030[(1)]);
if((state_val_52031 === (1))){
var state_52030__$1 = state_52030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52030__$1,(2),cancel);
} else {
if((state_val_52031 === (2))){
var inst_52027 = (state_52030[(2)]);
var inst_52028 = jsonp.cancel(req_52090);
var state_52030__$1 = (function (){var statearr_52034 = state_52030;
(statearr_52034[(7)] = inst_52027);

return statearr_52034;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52030__$1,inst_52028);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__50380__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__50380__auto____0 = (function (){
var statearr_52037 = [null,null,null,null,null,null,null,null];
(statearr_52037[(0)] = cljs_http$core$jsonp_$_state_machine__50380__auto__);

(statearr_52037[(1)] = (1));

return statearr_52037;
});
var cljs_http$core$jsonp_$_state_machine__50380__auto____1 = (function (state_52030){
while(true){
var ret_value__50381__auto__ = (function (){try{while(true){
var result__50382__auto__ = switch__50379__auto__(state_52030);
if(cljs.core.keyword_identical_QMARK_(result__50382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50382__auto__;
}
break;
}
}catch (e52038){var ex__50383__auto__ = e52038;
var statearr_52039_52094 = state_52030;
(statearr_52039_52094[(2)] = ex__50383__auto__);


if(cljs.core.seq((state_52030[(4)]))){
var statearr_52040_52095 = state_52030;
(statearr_52040_52095[(1)] = cljs.core.first((state_52030[(4)])));

} else {
throw ex__50383__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52098 = state_52030;
state_52030 = G__52098;
continue;
} else {
return ret_value__50381__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__50380__auto__ = function(state_52030){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__50380__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__50380__auto____1.call(this,state_52030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__50380__auto____0;
cljs_http$core$jsonp_$_state_machine__50380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__50380__auto____1;
return cljs_http$core$jsonp_$_state_machine__50380__auto__;
})()
})();
var state__50417__auto__ = (function (){var statearr_52041 = f__50416__auto__();
(statearr_52041[(6)] = c__50415__auto___52091);

return statearr_52041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50417__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__52043){
var map__52044 = p__52043;
var map__52044__$1 = (((((!((map__52044 == null))))?(((((map__52044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52044):map__52044);
var request = map__52044__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52044__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
