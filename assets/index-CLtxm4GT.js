(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function c(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(f){if(f.ep)return;f.ep=!0;const d=c(f);fetch(f.href,d)}})();function fy(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var hc={exports:{}},Gr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function dy(){if(Ag)return Gr;Ag=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,f,d){var y=null;if(d!==void 0&&(y=""+d),f.key!==void 0&&(y=""+f.key),"key"in f){d={};for(var b in f)b!=="key"&&(d[b]=f[b])}else d=f;return f=d.ref,{$$typeof:l,type:u,key:y,ref:f!==void 0?f:null,props:d}}return Gr.Fragment=s,Gr.jsx=c,Gr.jsxs=c,Gr}var Tg;function hy(){return Tg||(Tg=1,hc.exports=dy()),hc.exports}var i=hy(),mc={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function my(){if(Rg)return oe;Rg=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function w(_){return _===null||typeof _!="object"?null:(_=S&&_[S]||_["@@iterator"],typeof _=="function"?_:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,B={};function L(_,Q,P){this.props=_,this.context=Q,this.refs=B,this.updater=P||k}L.prototype.isReactComponent={},L.prototype.setState=function(_,Q){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,Q,"setState")},L.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function V(){}V.prototype=L.prototype;function X(_,Q,P){this.props=_,this.context=Q,this.refs=B,this.updater=P||k}var A=X.prototype=new V;A.constructor=X,M(A,L.prototype),A.isPureReactComponent=!0;var $=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function Y(_,Q,P,J,ee,he){return P=he.ref,{$$typeof:l,type:_,key:Q,ref:P!==void 0?P:null,props:he}}function se(_,Q){return Y(_.type,Q,void 0,void 0,void 0,_.props)}function K(_){return typeof _=="object"&&_!==null&&_.$$typeof===l}function be(_){var Q={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(P){return Q[P]})}var Se=/\/+/g;function Ue(_,Q){return typeof _=="object"&&_!==null&&_.key!=null?be(""+_.key):Q.toString(36)}function Ut(){}function at(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Ut,Ut):(_.status="pending",_.then(function(Q){_.status==="pending"&&(_.status="fulfilled",_.value=Q)},function(Q){_.status==="pending"&&(_.status="rejected",_.reason=Q)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function Ce(_,Q,P,J,ee){var he=typeof _;(he==="undefined"||he==="boolean")&&(_=null);var le=!1;if(_===null)le=!0;else switch(he){case"bigint":case"string":case"number":le=!0;break;case"object":switch(_.$$typeof){case l:case s:le=!0;break;case x:return le=_._init,Ce(le(_._payload),Q,P,J,ee)}}if(le)return ee=ee(_),le=J===""?"."+Ue(_,0):J,$(ee)?(P="",le!=null&&(P=le.replace(Se,"$&/")+"/"),Ce(ee,Q,P,"",function(st){return st})):ee!=null&&(K(ee)&&(ee=se(ee,P+(ee.key==null||_&&_.key===ee.key?"":(""+ee.key).replace(Se,"$&/")+"/")+le)),Q.push(ee)),1;le=0;var Pe=J===""?".":J+":";if($(_))for(var je=0;je<_.length;je++)J=_[je],he=Pe+Ue(J,je),le+=Ce(J,Q,P,he,ee);else if(je=w(_),typeof je=="function")for(_=je.call(_),je=0;!(J=_.next()).done;)J=J.value,he=Pe+Ue(J,je++),le+=Ce(J,Q,P,he,ee);else if(he==="object"){if(typeof _.then=="function")return Ce(at(_),Q,P,J,ee);throw Q=String(_),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return le}function N(_,Q,P){if(_==null)return _;var J=[],ee=0;return Ce(_,J,"","",function(he){return Q.call(P,he,ee++)}),J}function Z(_){if(_._status===-1){var Q=_._result;Q=Q(),Q.then(function(P){(_._status===0||_._status===-1)&&(_._status=1,_._result=P)},function(P){(_._status===0||_._status===-1)&&(_._status=2,_._result=P)}),_._status===-1&&(_._status=0,_._result=Q)}if(_._status===1)return _._result.default;throw _._result}var ne=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function ue(){}return oe.Children={map:N,forEach:function(_,Q,P){N(_,function(){Q.apply(this,arguments)},P)},count:function(_){var Q=0;return N(_,function(){Q++}),Q},toArray:function(_){return N(_,function(Q){return Q})||[]},only:function(_){if(!K(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},oe.Component=L,oe.Fragment=c,oe.Profiler=f,oe.PureComponent=X,oe.StrictMode=u,oe.Suspense=h,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(_){return H.H.useMemoCache(_)}},oe.cache=function(_){return function(){return _.apply(null,arguments)}},oe.cloneElement=function(_,Q,P){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var J=M({},_.props),ee=_.key,he=void 0;if(Q!=null)for(le in Q.ref!==void 0&&(he=void 0),Q.key!==void 0&&(ee=""+Q.key),Q)!F.call(Q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&Q.ref===void 0||(J[le]=Q[le]);var le=arguments.length-2;if(le===1)J.children=P;else if(1<le){for(var Pe=Array(le),je=0;je<le;je++)Pe[je]=arguments[je+2];J.children=Pe}return Y(_.type,ee,void 0,void 0,he,J)},oe.createContext=function(_){return _={$$typeof:y,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:d,_context:_},_},oe.createElement=function(_,Q,P){var J,ee={},he=null;if(Q!=null)for(J in Q.key!==void 0&&(he=""+Q.key),Q)F.call(Q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ee[J]=Q[J]);var le=arguments.length-2;if(le===1)ee.children=P;else if(1<le){for(var Pe=Array(le),je=0;je<le;je++)Pe[je]=arguments[je+2];ee.children=Pe}if(_&&_.defaultProps)for(J in le=_.defaultProps,le)ee[J]===void 0&&(ee[J]=le[J]);return Y(_,he,void 0,void 0,null,ee)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(_){return{$$typeof:b,render:_}},oe.isValidElement=K,oe.lazy=function(_){return{$$typeof:x,_payload:{_status:-1,_result:_},_init:Z}},oe.memo=function(_,Q){return{$$typeof:g,type:_,compare:Q===void 0?null:Q}},oe.startTransition=function(_){var Q=H.T,P={};H.T=P;try{var J=_(),ee=H.S;ee!==null&&ee(P,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ue,ne)}catch(he){ne(he)}finally{H.T=Q}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(_){return H.H.use(_)},oe.useActionState=function(_,Q,P){return H.H.useActionState(_,Q,P)},oe.useCallback=function(_,Q){return H.H.useCallback(_,Q)},oe.useContext=function(_){return H.H.useContext(_)},oe.useDebugValue=function(){},oe.useDeferredValue=function(_,Q){return H.H.useDeferredValue(_,Q)},oe.useEffect=function(_,Q,P){var J=H.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(_,Q)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(_,Q,P){return H.H.useImperativeHandle(_,Q,P)},oe.useInsertionEffect=function(_,Q){return H.H.useInsertionEffect(_,Q)},oe.useLayoutEffect=function(_,Q){return H.H.useLayoutEffect(_,Q)},oe.useMemo=function(_,Q){return H.H.useMemo(_,Q)},oe.useOptimistic=function(_,Q){return H.H.useOptimistic(_,Q)},oe.useReducer=function(_,Q,P){return H.H.useReducer(_,Q,P)},oe.useRef=function(_){return H.H.useRef(_)},oe.useState=function(_){return H.H.useState(_)},oe.useSyncExternalStore=function(_,Q,P){return H.H.useSyncExternalStore(_,Q,P)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.1.0",oe}var Mg;function gf(){return Mg||(Mg=1,mc.exports=my()),mc.exports}var C=gf();const _e=fy(C);var gc={exports:{}},Yr={},pc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function gy(){return Dg||(Dg=1,function(l){function s(N,Z){var ne=N.length;N.push(Z);e:for(;0<ne;){var ue=ne-1>>>1,_=N[ue];if(0<f(_,Z))N[ue]=Z,N[ne]=_,ne=ue;else break e}}function c(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var Z=N[0],ne=N.pop();if(ne!==Z){N[0]=ne;e:for(var ue=0,_=N.length,Q=_>>>1;ue<Q;){var P=2*(ue+1)-1,J=N[P],ee=P+1,he=N[ee];if(0>f(J,ne))ee<_&&0>f(he,J)?(N[ue]=he,N[ee]=ne,ue=ee):(N[ue]=J,N[P]=ne,ue=P);else if(ee<_&&0>f(he,ne))N[ue]=he,N[ee]=ne,ue=ee;else break e}}return Z}function f(N,Z){var ne=N.sortIndex-Z.sortIndex;return ne!==0?ne:N.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var y=Date,b=y.now();l.unstable_now=function(){return y.now()-b}}var h=[],g=[],x=1,S=null,w=3,k=!1,M=!1,B=!1,L=!1,V=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function $(N){for(var Z=c(g);Z!==null;){if(Z.callback===null)u(g);else if(Z.startTime<=N)u(g),Z.sortIndex=Z.expirationTime,s(h,Z);else break;Z=c(g)}}function H(N){if(B=!1,$(N),!M)if(c(h)!==null)M=!0,F||(F=!0,Ue());else{var Z=c(g);Z!==null&&Ce(H,Z.startTime-N)}}var F=!1,Y=-1,se=5,K=-1;function be(){return L?!0:!(l.unstable_now()-K<se)}function Se(){if(L=!1,F){var N=l.unstable_now();K=N;var Z=!0;try{e:{M=!1,B&&(B=!1,X(Y),Y=-1),k=!0;var ne=w;try{t:{for($(N),S=c(h);S!==null&&!(S.expirationTime>N&&be());){var ue=S.callback;if(typeof ue=="function"){S.callback=null,w=S.priorityLevel;var _=ue(S.expirationTime<=N);if(N=l.unstable_now(),typeof _=="function"){S.callback=_,$(N),Z=!0;break t}S===c(h)&&u(h),$(N)}else u(h);S=c(h)}if(S!==null)Z=!0;else{var Q=c(g);Q!==null&&Ce(H,Q.startTime-N),Z=!1}}break e}finally{S=null,w=ne,k=!1}Z=void 0}}finally{Z?Ue():F=!1}}}var Ue;if(typeof A=="function")Ue=function(){A(Se)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,at=Ut.port2;Ut.port1.onmessage=Se,Ue=function(){at.postMessage(null)}}else Ue=function(){V(Se,0)};function Ce(N,Z){Y=V(function(){N(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(N){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var ne=w;w=Z;try{return N()}finally{w=ne}},l.unstable_requestPaint=function(){L=!0},l.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=w;w=N;try{return Z()}finally{w=ne}},l.unstable_scheduleCallback=function(N,Z,ne){var ue=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ue+ne:ue):ne=ue,N){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=ne+_,N={id:x++,callback:Z,priorityLevel:N,startTime:ne,expirationTime:_,sortIndex:-1},ne>ue?(N.sortIndex=ne,s(g,N),c(h)===null&&N===c(g)&&(B?(X(Y),Y=-1):B=!0,Ce(H,ne-ue))):(N.sortIndex=_,s(h,N),M||k||(M=!0,F||(F=!0,Ue()))),N},l.unstable_shouldYield=be,l.unstable_wrapCallback=function(N){var Z=w;return function(){var ne=w;w=Z;try{return N.apply(this,arguments)}finally{w=ne}}}}(bc)),bc}var kg;function py(){return kg||(kg=1,pc.exports=gy()),pc.exports}var xc={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function by(){if(Og)return ct;Og=1;var l=gf();function s(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(h,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:h,containerInfo:g,implementation:x}}var y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ct.createPortal=function(h,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return d(h,g,null,x)},ct.flushSync=function(h){var g=y.T,x=u.p;try{if(y.T=null,u.p=2,h)return h()}finally{y.T=g,u.p=x,u.d.f()}},ct.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(h,g))},ct.prefetchDNS=function(h){typeof h=="string"&&u.d.D(h)},ct.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var x=g.as,S=b(x,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?u.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:k}):x==="script"&&u.d.X(h,{crossOrigin:S,integrity:w,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ct.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=b(g.as,g.crossOrigin);u.d.M(h,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(h)},ct.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=b(x,g.crossOrigin);u.d.L(h,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ct.preloadModule=function(h,g){if(typeof h=="string")if(g){var x=b(g.as,g.crossOrigin);u.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(h)},ct.requestFormReset=function(h){u.d.r(h)},ct.unstable_batchedUpdates=function(h,g){return h(g)},ct.useFormState=function(h,g,x){return y.H.useFormState(h,g,x)},ct.useFormStatus=function(){return y.H.useHostTransitionStatus()},ct.version="19.1.0",ct}var Bg;function xy(){if(Bg)return xc.exports;Bg=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),xc.exports=by(),xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function yy(){if(Ng)return Yr;Ng=1;var l=py(),s=gf(),c=xy();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(u(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return b(r),e;if(o===a)return b(r),t;o=o.sibling}throw Error(u(188))}if(n.return!==a.return)n=r,a=o;else{for(var m=!1,p=r.child;p;){if(p===n){m=!0,n=r,a=o;break}if(p===a){m=!0,a=r,n=o;break}p=p.sibling}if(!m){for(p=o.child;p;){if(p===n){m=!0,n=o,a=r;break}if(p===a){m=!0,a=o,n=r;break}p=p.sibling}if(!m)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),A=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case L:return"Profiler";case B:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case A:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var Ce=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ue=[],_=-1;function Q(e){return{current:e}}function P(e){0>_||(e.current=ue[_],ue[_]=null,_--)}function J(e,t){_++,ue[_]=e.current,e.current=t}var ee=Q(null),he=Q(null),le=Q(null),Pe=Q(null);function je(e,t){switch(J(le,t),J(he,e),J(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ng(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ng(t),e=ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(ee),J(ee,e)}function st(){P(ee),P(he),P(le)}function ma(e){e.memoizedState!==null&&J(Pe,e);var t=ee.current,n=ag(t,e.type);t!==n&&(J(he,e),J(ee,n))}function bn(e){he.current===e&&(P(ee),P(he)),Pe.current===e&&(P(Pe),Br._currentValue=ne)}var Lt=Object.prototype.hasOwnProperty,Is=l.unstable_scheduleCallback,eo=l.unstable_cancelCallback,q1=l.unstable_shouldYield,$1=l.unstable_requestPaint,un=l.unstable_now,Q1=l.unstable_getCurrentPriorityLevel,Nf=l.unstable_ImmediatePriority,Uf=l.unstable_UserBlockingPriority,ti=l.unstable_NormalPriority,K1=l.unstable_LowPriority,Lf=l.unstable_IdlePriority,X1=l.log,Z1=l.unstable_setDisableYieldValue,ql=null,_t=null;function Hn(e){if(typeof X1=="function"&&Z1(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ql,e)}catch{}}var Et=Math.clz32?Math.clz32:F1,P1=Math.log,J1=Math.LN2;function F1(e){return e>>>=0,e===0?32:31-(P1(e)/J1|0)|0}var ni=256,ai=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function li(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~o,a!==0?r=ga(a):(m&=p,m!==0?r=ga(m):n||(n=p&~e,n!==0&&(r=ga(n))))):(p=a&~o,p!==0?r=ga(p):m!==0?r=ga(m):n||(n=a&~e,n!==0&&(r=ga(n)))),r===0?0:t!==0&&t!==r&&(t&o)===0&&(o=r&-r,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:r}function $l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function W1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hf(){var e=ni;return ni<<=1,(ni&4194048)===0&&(ni=256),e}function Gf(){var e=ai;return ai<<=1,(ai&62914560)===0&&(ai=4194304),e}function to(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function I1(e,t,n,a,r,o){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,j=e.expirationTimes,R=e.hiddenUpdates;for(n=m&~n;0<n;){var U=31-Et(n),q=1<<U;p[U]=0,j[U]=-1;var D=R[U];if(D!==null)for(R[U]=null,U=0;U<D.length;U++){var O=D[U];O!==null&&(O.lane&=-536870913)}n&=~q}a!==0&&Yf(e,a,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function Yf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Et(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Et(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function no(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function eb(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Gn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Gn,gt="__reactProps$"+Gn,Ga="__reactContainer$"+Gn,lo="__reactEvents$"+Gn,tb="__reactListeners$"+Gn,nb="__reactHandles$"+Gn,$f="__reactResources$"+Gn,Kl="__reactMarker$"+Gn;function ro(e){delete e[ot],delete e[gt],delete e[lo],delete e[tb],delete e[nb]}function Ya(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sg(e);e!==null;){if(n=e[ot])return n;e=sg(e)}return t}e=n,n=e.parentNode}return null}function Va(e){if(e=e[ot]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function qa(e){var t=e[$f];return t||(t=e[$f]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Kl]=!0}var Qf=new Set,Kf={};function pa(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(Kf[e]=t,e=0;e<t.length;e++)Qf.add(t[e])}var ab=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},Zf={};function lb(e){return Lt.call(Zf,e)?!0:Lt.call(Xf,e)?!1:ab.test(e)?Zf[e]=!0:(Xf[e]=!0,!1)}function ri(e,t,n){if(lb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ii(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function xn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var io,Pf;function Qa(e){if(io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);io=t&&t[1]||"",Pf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+io+e+Pf}var so=!1;function oo(e,t){if(!e||so)return"";so=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(O){var D=O}Reflect.construct(e,[],q)}else{try{q.call()}catch(O){D=O}e.call(q.prototype)}}else{try{throw Error()}catch(O){D=O}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(O){if(O&&D&&typeof O.stack=="string")return[O.stack,D.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),m=o[0],p=o[1];if(m&&p){var j=m.split(`
`),R=p.split(`
`);for(r=a=0;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;for(;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;if(a===j.length||r===R.length)for(a=j.length-1,r=R.length-1;1<=a&&0<=r&&j[a]!==R[r];)r--;for(;1<=a&&0<=r;a--,r--)if(j[a]!==R[r]){if(a!==1||r!==1)do if(a--,r--,0>r||j[a]!==R[r]){var U=`
`+j[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=r);break}}}finally{so=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qa(n):""}function rb(e){switch(e.tag){case 26:case 27:case 5:return Qa(e.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 15:return oo(e.type,!1);case 11:return oo(e.type.render,!1);case 1:return oo(e.type,!0);case 31:return Qa("Activity");default:return""}}function Jf(e){try{var t="";do t+=rb(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ib(e){var t=Ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){a=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=ib(e))}function Wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ff(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sb=/[\n"\\]/g;function Gt(e){return e.replace(sb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function uo(e,t,n,a,r,o,m,p){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?co(e,m,Ht(t)):n!=null?co(e,m,Ht(n)):a!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Ht(p):e.removeAttribute("name")}function If(e,t,n,a,r,o,m,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function co(e,t,n){t==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ka(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ed(e,t,n){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ht(n):""}function td(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Ce(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ht(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ob=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ob.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ad(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&nd(e,r,a)}else for(var o in t)t.hasOwnProperty(o)&&nd(e,o,t[o])}function fo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ub=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(e){return cb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ho=null;function mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Pa=null;function ld(e){var t=Va(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(uo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[gt]||null;if(!r)throw Error(u(90));uo(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Wf(a)}break e;case"textarea":ed(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ka(e,!!n.multiple,t,!1)}}}var go=!1;function rd(e,t,n){if(go)return e(t,n);go=!0;try{var a=e(t);return a}finally{if(go=!1,(Za!==null||Pa!==null)&&(Zi(),Za&&(t=Za,e=Pa,Pa=Za=null,ld(t),e)))for(t=0;t<e.length;t++)ld(e[t])}}function Zl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),po=!1;if(yn)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){po=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{po=!1}var Yn=null,bo=null,ci=null;function id(){if(ci)return ci;var e,t=bo,n=t.length,a,r="value"in Yn?Yn.value:Yn.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var m=n-e;for(a=1;a<=m&&t[n-a]===r[o-a];a++);return ci=r.slice(e,1<a?1-a:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function sd(){return!1}function pt(e){function t(n,a,r,o,m){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:sd,this.isPropagationStopped=sd,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hi=pt(ba),Jl=x({},ba,{view:0,detail:0}),fb=pt(Jl),xo,yo,Fl,mi=x({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(xo=e.screenX-Fl.screenX,yo=e.screenY-Fl.screenY):yo=xo=0,Fl=e),xo)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),od=pt(mi),db=x({},mi,{dataTransfer:0}),hb=pt(db),mb=x({},Jl,{relatedTarget:0}),vo=pt(mb),gb=x({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),pb=pt(gb),bb=x({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xb=pt(bb),yb=x({},ba,{data:0}),ud=pt(yb),vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jb[e])?!!t[e]:!1}function So(){return wb}var _b=x({},Jl,{key:function(e){if(e.key){var t=vb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eb=pt(_b),zb=x({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=pt(zb),Cb=x({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Ab=pt(Cb),Tb=x({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rb=pt(Tb),Mb=x({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Db=pt(Mb),kb=x({},ba,{newState:0,oldState:0}),Ob=pt(kb),Bb=[9,13,27,32],jo=yn&&"CompositionEvent"in window,Wl=null;yn&&"documentMode"in document&&(Wl=document.documentMode);var Nb=yn&&"TextEvent"in window&&!Wl,fd=yn&&(!jo||Wl&&8<Wl&&11>=Wl),dd=" ",hd=!1;function md(e,t){switch(e){case"keyup":return Bb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function Ub(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(hd=!0,dd);case"textInput":return e=t.data,e===dd&&hd?null:e;default:return null}}function Lb(e,t){if(Ja)return e==="compositionend"||!jo&&md(e,t)?(e=id(),ci=bo=Yn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fd&&t.locale!=="ko"?null:t.data;default:return null}}var Hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hb[e.type]:t==="textarea"}function bd(e,t,n,a){Za?Pa?Pa.push(a):Pa=[a]:Za=a,t=es(t,"onChange"),0<t.length&&(n=new hi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Il=null,er=null;function Gb(e){Fm(e,0)}function gi(e){var t=Xl(e);if(Wf(t))return e}function xd(e,t){if(e==="change")return t}var yd=!1;if(yn){var wo;if(yn){var _o="oninput"in document;if(!_o){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),_o=typeof vd.oninput=="function"}wo=_o}else wo=!1;yd=wo&&(!document.documentMode||9<document.documentMode)}function Sd(){Il&&(Il.detachEvent("onpropertychange",jd),er=Il=null)}function jd(e){if(e.propertyName==="value"&&gi(er)){var t=[];bd(t,er,e,mo(e)),rd(Gb,t)}}function Yb(e,t,n){e==="focusin"?(Sd(),Il=t,er=n,Il.attachEvent("onpropertychange",jd)):e==="focusout"&&Sd()}function Vb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(er)}function qb(e,t){if(e==="click")return gi(t)}function $b(e,t){if(e==="input"||e==="change")return gi(t)}function Qb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Qb;function tr(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Lt.call(t,r)||!zt(e[r],t[r]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var n=wd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wd(n)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kb=yn&&"documentMode"in document&&11>=document.documentMode,Fa=null,zo=null,nr=null,Co=!1;function Cd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Co||Fa==null||Fa!==oi(a)||(a=Fa,"selectionStart"in a&&Eo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),nr&&tr(nr,a)||(nr=a,a=es(zo,"onSelect"),0<a.length&&(t=new hi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Fa)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},Ao={},Ad={};yn&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ya(e){if(Ao[e])return Ao[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ad)return Ao[e]=t[n];return e}var Td=ya("animationend"),Rd=ya("animationiteration"),Md=ya("animationstart"),Xb=ya("transitionrun"),Zb=ya("transitionstart"),Pb=ya("transitioncancel"),Dd=ya("transitionend"),kd=new Map,To="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");To.push("scrollEnd");function tn(e,t){kd.set(e,t),pa(t,[e])}var Od=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=Od.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Jf(t)},Od.set(e,t),t)}return{value:e,source:t,stack:Jf(t)}}var Vt=[],Ia=0,Ro=0;function pi(){for(var e=Ia,t=Ro=Ia=0;t<e;){var n=Vt[t];Vt[t++]=null;var a=Vt[t];Vt[t++]=null;var r=Vt[t];Vt[t++]=null;var o=Vt[t];if(Vt[t++]=null,a!==null&&r!==null){var m=a.pending;m===null?r.next=r:(r.next=m.next,m.next=r),a.pending=r}o!==0&&Bd(n,r,o)}}function bi(e,t,n,a){Vt[Ia++]=e,Vt[Ia++]=t,Vt[Ia++]=n,Vt[Ia++]=a,Ro|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Mo(e,t,n,a){return bi(e,t,n,a),xi(e)}function el(e,t){return bi(e,null,null,t),xi(e)}function Bd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&t!==null&&(r=31-Et(n),e=o.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),o):null}function xi(e){if(50<Cr)throw Cr=0,Uu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function Jb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,a){return new Jb(e,t,n,a)}function Do(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,a,r,o){var m=0;if(a=e,typeof e=="function")Do(e)&&(m=1);else if(typeof e=="string")m=Wx(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Ct(31,n,t,r),e.elementType=K,e.lanes=o,e;case M:return va(n.children,r,o,t);case B:m=8,r|=24;break;case L:return e=Ct(12,n,t,r|2),e.elementType=L,e.lanes=o,e;case H:return e=Ct(13,n,t,r),e.elementType=H,e.lanes=o,e;case F:return e=Ct(19,n,t,r),e.elementType=F,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case A:m=10;break e;case X:m=9;break e;case $:m=11;break e;case Y:m=14;break e;case se:m=16,a=null;break e}m=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Ct(m,n,t,r),t.elementType=e,t.type=a,t.lanes=o,t}function va(e,t,n,a){return e=Ct(7,e,a,t),e.lanes=n,e}function ko(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Oo(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nl=[],al=0,vi=null,Si=0,qt=[],$t=0,Sa=null,Sn=1,jn="";function ja(e,t){nl[al++]=Si,nl[al++]=vi,vi=e,Si=t}function Ud(e,t,n){qt[$t++]=Sn,qt[$t++]=jn,qt[$t++]=Sa,Sa=e;var a=Sn;e=jn;var r=32-Et(a)-1;a&=~(1<<r),n+=1;var o=32-Et(t)+r;if(30<o){var m=r-r%5;o=(a&(1<<m)-1).toString(32),a>>=m,r-=m,Sn=1<<32-Et(t)+r|n<<r|a,jn=o+e}else Sn=1<<o|n<<r|a,jn=e}function Bo(e){e.return!==null&&(ja(e,1),Ud(e,1,0))}function No(e){for(;e===vi;)vi=nl[--al],nl[al]=null,Si=nl[--al],nl[al]=null;for(;e===Sa;)Sa=qt[--$t],qt[$t]=null,jn=qt[--$t],qt[$t]=null,Sn=qt[--$t],qt[$t]=null}var ft=null,He=null,ve=!1,wa=null,cn=!1,Uo=Error(u(519));function _a(e){var t=Error(u(418,""));throw rr(Yt(t,e)),Uo}function Ld(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ot]=e,t[gt]=a,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<Tr.length;n++)ge(Tr[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),If(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),si(t);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),td(t,a.value,a.defaultValue,a.children),si(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||tg(t.textContent,n)?(a.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),a.onScroll!=null&&ge("scroll",t),a.onScrollEnd!=null&&ge("scrollend",t),a.onClick!=null&&(t.onclick=ts),t=!0):t=!1,t||_a(e)}function Hd(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 13:cn=!1;return;case 27:case 3:cn=!0;return;default:ft=ft.return}}function ar(e){if(e!==ft)return!1;if(!ve)return Hd(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Iu(e.type,e.memoizedProps)),n=!n),n&&He&&_a(e),Hd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,aa(e.type)?(e=ac,ac=null,He=e):He=t):He=ft?an(e.stateNode.nextSibling):null;return!0}function lr(){He=ft=null,ve=!1}function Gd(){var e=wa;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),wa=null),e}function rr(e){wa===null?wa=[e]:wa.push(e)}var Lo=Q(null),Ea=null,wn=null;function Vn(e,t,n){J(Lo,t._currentValue),t._currentValue=n}function _n(e){e._currentValue=Lo.current,P(Lo)}function Ho(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Go(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var m=r.child;o=o.firstContext;e:for(;o!==null;){var p=o;o=r;for(var j=0;j<t.length;j++)if(p.context===t[j]){o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),Ho(o.return,n,e),a||(m=null);break e}o=p.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(u(341));m.lanes|=n,o=m.alternate,o!==null&&(o.lanes|=n),Ho(m,n,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function ir(e,t,n,a){e=null;for(var r=t,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(u(387));if(m=m.memoizedProps,m!==null){var p=r.type;zt(r.pendingProps.value,m.value)||(e!==null?e.push(p):e=[p])}}else if(r===Pe.current){if(m=r.alternate,m===null)throw Error(u(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Br):e=[Br])}r=r.return}e!==null&&Go(t,e,n,a),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){Ea=e,wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return Yd(Ea,e)}function wi(e,t){return Ea===null&&za(e),Yd(e,t)}function Yd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wn===null){if(e===null)throw Error(u(308));wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wn=wn.next=t;return n}var Fb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Wb=l.unstable_scheduleCallback,Ib=l.unstable_NormalPriority,Xe={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yo(){return{controller:new Fb,data:new Map,refCount:0}}function sr(e){e.refCount--,e.refCount===0&&Wb(Ib,function(){e.controller.abort()})}var or=null,Vo=0,ll=0,rl=null;function ex(e,t){if(or===null){var n=or=[];Vo=0,ll=$u(),rl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Vo++,t.then(Vd,Vd),t}function Vd(){if(--Vo===0&&or!==null){rl!==null&&(rl.status="fulfilled");var e=or;or=null,ll=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tx(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var qd=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&ex(e,t),qd!==null&&qd(e,t)};var Ca=Q(null);function qo(){var e=Ca.current;return e!==null?e:De.pooledCache}function _i(e,t){t===null?J(Ca,Ca.current):J(Ca,t.pool)}function $d(){var e=qo();return e===null?null:{parent:Xe._currentValue,pool:e}}var ur=Error(u(460)),Qd=Error(u(474)),Ei=Error(u(542)),$o={then:function(){}};function Kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zi(){}function Xd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zi,zi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(zi,zi);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw cr=t,ur}}var cr=null;function Zd(){if(cr===null)throw Error(u(459));var e=cr;return cr=null,e}function Pd(e){if(e===ur||e===Ei)throw Error(u(483))}var qn=!1;function Qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=xi(e),Bd(e,null,n),t}return bi(e,a,t,n),xi(e)}function fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vf(e,n)}}function Xo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=m:o=o.next=m,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Zo=!1;function dr(){if(Zo){var e=rl;if(e!==null)throw e}}function hr(e,t,n,a){Zo=!1;var r=e.updateQueue;qn=!1;var o=r.firstBaseUpdate,m=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var j=p,R=j.next;j.next=null,m===null?o=R:m.next=R,m=j;var U=e.alternate;U!==null&&(U=U.updateQueue,p=U.lastBaseUpdate,p!==m&&(p===null?U.firstBaseUpdate=R:p.next=R,U.lastBaseUpdate=j))}if(o!==null){var q=r.baseState;m=0,U=R=j=null,p=o;do{var D=p.lane&-536870913,O=D!==p.lane;if(O?(xe&D)===D:(a&D)===D){D!==0&&D===ll&&(Zo=!0),U!==null&&(U=U.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ie=e,ae=p;D=t;var Re=n;switch(ae.tag){case 1:if(ie=ae.payload,typeof ie=="function"){q=ie.call(Re,q,D);break e}q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ae.payload,D=typeof ie=="function"?ie.call(Re,q,D):ie,D==null)break e;q=x({},q,D);break e;case 2:qn=!0}}D=p.callback,D!==null&&(e.flags|=64,O&&(e.flags|=8192),O=r.callbacks,O===null?r.callbacks=[D]:O.push(D))}else O={lane:D,tag:p.tag,payload:p.payload,callback:p.callback,next:null},U===null?(R=U=O,j=q):U=U.next=O,m|=D;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;O=p,p=O.next,O.next=null,r.lastBaseUpdate=O,r.shared.pending=null}}while(!0);U===null&&(j=q),r.baseState=j,r.firstBaseUpdate=R,r.lastBaseUpdate=U,o===null&&(r.shared.lanes=0),In|=m,e.lanes=m,e.memoizedState=q}}function Jd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Fd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Jd(n[e],t)}var il=Q(null),Ci=Q(0);function Wd(e,t){e=Mn,J(Ci,e),J(il,t),Mn=e|t.baseLanes}function Po(){J(Ci,Mn),J(il,il.current)}function Jo(){Mn=Ci.current,P(il),P(Ci)}var Kn=0,fe=null,Ae=null,$e=null,Ai=!1,sl=!1,Aa=!1,Ti=0,mr=0,ol=null,nx=0;function Ve(){throw Error(u(321))}function Fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Wo(e,t,n,a,r,o){return Kn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Bh:Nh,Aa=!1,o=n(a,r),Aa=!1,sl&&(o=eh(t,n,a,r)),Id(e),o}function Id(e){N.H=Bi;var t=Ae!==null&&Ae.next!==null;if(Kn=0,$e=Ae=fe=null,Ai=!1,mr=0,ol=null,t)throw Error(u(300));e===null||Fe||(e=e.dependencies,e!==null&&ji(e)&&(Fe=!0))}function eh(e,t,n,a){fe=e;var r=0;do{if(sl&&(ol=null),mr=0,sl=!1,25<=r)throw Error(u(301));if(r+=1,$e=Ae=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=ux,o=t(n,a)}while(sl);return o}function ax(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?gr(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(fe.flags|=1024),t}function Io(){var e=Ti!==0;return Ti=0,e}function eu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function tu(e){if(Ai){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ai=!1}Kn=0,$e=Ae=fe=null,sl=!1,mr=Ti=0,ol=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?fe.memoizedState=$e=e:$e=$e.next=e,$e}function Qe(){if(Ae===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=$e===null?fe.memoizedState:$e.next;if(t!==null)$e=t,Ae=e;else{if(e===null)throw fe.alternate===null?Error(u(467)):Error(u(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},$e===null?fe.memoizedState=$e=e:$e=$e.next=e}return $e}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gr(e){var t=mr;return mr+=1,ol===null&&(ol=[]),e=Xd(ol,e,t),t=fe,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Bh:Nh),e}function Ri(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gr(e);if(e.$$typeof===A)return ut(e)}throw Error(u(438,String(e)))}function au(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=nu(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=be;return t.index++,n}function En(e,t){return typeof t=="function"?t(e):t}function Mi(e){var t=Qe();return lu(t,Ae,e)}function lu(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var r=e.baseQueue,o=a.pending;if(o!==null){if(r!==null){var m=r.next;r.next=o.next,o.next=m}t.baseQueue=r=o,a.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{t=r.next;var p=m=null,j=null,R=t,U=!1;do{var q=R.lane&-536870913;if(q!==R.lane?(xe&q)===q:(Kn&q)===q){var D=R.revertLane;if(D===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),q===ll&&(U=!0);else if((Kn&D)===D){R=R.next,D===ll&&(U=!0);continue}else q={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(p=j=q,m=o):j=j.next=q,fe.lanes|=D,In|=D;q=R.action,Aa&&n(o,q),o=R.hasEagerState?R.eagerState:n(o,q)}else D={lane:q,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(p=j=D,m=o):j=j.next=D,fe.lanes|=q,In|=q;R=R.next}while(R!==null&&R!==t);if(j===null?m=o:j.next=p,!zt(o,e.memoizedState)&&(Fe=!0,U&&(n=rl,n!==null)))throw n;e.memoizedState=o,e.baseState=m,e.baseQueue=j,a.lastRenderedState=o}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ru(e){var t=Qe(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do o=e(o,m.action),m=m.next;while(m!==r);zt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function th(e,t,n){var a=fe,r=Qe(),o=ve;if(o){if(n===void 0)throw Error(u(407));n=n()}else n=t();var m=!zt((Ae||r).memoizedState,n);m&&(r.memoizedState=n,Fe=!0),r=r.queue;var p=lh.bind(null,a,r,e);if(pr(2048,8,p,[e]),r.getSnapshot!==t||m||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,ul(9,Di(),ah.bind(null,a,r,n,t),null),De===null)throw Error(u(349));o||(Kn&124)!==0||nh(a,t,n)}return n}function nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=nu(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ah(e,t,n,a){t.value=n,t.getSnapshot=a,rh(t)&&ih(e)}function lh(e,t,n){return n(function(){rh(t)&&ih(e)})}function rh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function ih(e){var t=el(e,2);t!==null&&Dt(t,e,2)}function iu(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),Aa){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t}function sh(e,t,n,a){return e.baseState=n,lu(e,Ae,typeof a=="function"?a:En)}function lx(e,t,n,a,r){if(Oi(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};N.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,oh(t,o)):(o.next=n.next,t.pending=n.next=o)}}function oh(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var o=N.T,m={};N.T=m;try{var p=n(r,a),j=N.S;j!==null&&j(m,p),uh(e,t,p)}catch(R){su(e,t,R)}finally{N.T=o}}else try{o=n(r,a),uh(e,t,o)}catch(R){su(e,t,R)}}function uh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ch(e,t,a)},function(a){return su(e,t,a)}):ch(e,t,n)}function ch(e,t,n){t.status="fulfilled",t.value=n,fh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oh(e,n)))}function su(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,fh(t),t=t.next;while(t!==a)}e.action=null}function fh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dh(e,t){return t}function hh(e,t){if(ve){var n=De.formState;if(n!==null){e:{var a=fe;if(ve){if(He){t:{for(var r=He,o=cn;r.nodeType!==8;){if(!o){r=null;break t}if(r=an(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){He=an(r.nextSibling),a=r.data==="F!";break e}}_a(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dh,lastRenderedState:t},n.queue=a,n=Dh.bind(null,fe,a),a.dispatch=n,a=iu(!1),o=du.bind(null,fe,!1,a.queue),a=bt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=lx.bind(null,fe,r,o,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function mh(e){var t=Qe();return gh(t,Ae,e)}function gh(e,t,n){if(t=lu(e,t,dh)[0],e=Mi(En)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=gr(t)}catch(m){throw m===ur?Ei:m}else a=t;t=Qe();var r=t.queue,o=r.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,ul(9,Di(),rx.bind(null,r,n),null)),[a,o,e]}function rx(e,t){e.action=t}function ph(e){var t=Qe(),n=Ae;if(n!==null)return gh(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ul(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=fe.updateQueue,t===null&&(t=nu(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Di(){return{destroy:void 0,resource:void 0}}function bh(){return Qe().memoizedState}function ki(e,t,n,a){var r=bt();a=a===void 0?null:a,fe.flags|=e,r.memoizedState=ul(1|t,Di(),n,a)}function pr(e,t,n,a){var r=Qe();a=a===void 0?null:a;var o=r.memoizedState.inst;Ae!==null&&a!==null&&Fo(a,Ae.memoizedState.deps)?r.memoizedState=ul(t,o,n,a):(fe.flags|=e,r.memoizedState=ul(1|t,o,n,a))}function xh(e,t){ki(8390656,8,e,t)}function yh(e,t){pr(2048,8,e,t)}function vh(e,t){return pr(4,2,e,t)}function Sh(e,t){return pr(4,4,e,t)}function jh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,n){n=n!=null?n.concat([e]):null,pr(4,4,jh.bind(null,t,e),n)}function ou(){}function _h(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Fo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Eh(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Fo(t,a[1]))return a[0];if(a=e(),Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[a,t],a}function uu(e,t,n){return n===void 0||(Kn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Am(),fe.lanes|=e,In|=e,n)}function zh(e,t,n,a){return zt(n,t)?n:il.current!==null?(e=uu(e,n,a),zt(e,t)||(Fe=!0),e):(Kn&42)===0?(Fe=!0,e.memoizedState=n):(e=Am(),fe.lanes|=e,In|=e,t)}function Ch(e,t,n,a,r){var o=Z.p;Z.p=o!==0&&8>o?o:8;var m=N.T,p={};N.T=p,du(e,!1,t,n);try{var j=r(),R=N.S;if(R!==null&&R(p,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var U=tx(j,a);br(e,t,U,Mt(e))}else br(e,t,a,Mt(e))}catch(q){br(e,t,{then:function(){},status:"rejected",reason:q},Mt())}finally{Z.p=o,N.T=m}}function ix(){}function cu(e,t,n,a){if(e.tag!==5)throw Error(u(476));var r=Ah(e).queue;Ch(e,r,t,ne,n===null?ix:function(){return Th(e),n(a)})}function Ah(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Th(e){var t=Ah(e).next.queue;br(e,t,{},Mt())}function fu(){return ut(Br)}function Rh(){return Qe().memoizedState}function Mh(){return Qe().memoizedState}function sx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Mt();e=$n(n);var a=Qn(t,e,n);a!==null&&(Dt(a,t,n),fr(a,t,n)),t={cache:Yo()},e.payload=t;return}t=t.return}}function ox(e,t,n){var a=Mt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Oi(e)?kh(t,n):(n=Mo(e,t,n,a),n!==null&&(Dt(n,e,a),Oh(n,t,a)))}function Dh(e,t,n){var a=Mt();br(e,t,n,a)}function br(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))kh(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,p=o(m,n);if(r.hasEagerState=!0,r.eagerState=p,zt(p,m))return bi(e,t,r,0),De===null&&pi(),!1}catch{}finally{}if(n=Mo(e,t,r,a),n!==null)return Dt(n,e,a),Oh(n,t,a),!0}return!1}function du(e,t,n,a){if(a={lane:2,revertLane:$u(),action:a,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(t)throw Error(u(479))}else t=Mo(e,n,a,2),t!==null&&Dt(t,e,2)}function Oi(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function kh(e,t){sl=Ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vf(e,n)}}var Bi={readContext:ut,use:Ri,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve},Bh={readContext:ut,use:Ri,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:xh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ki(4194308,4,jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){ki(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var r=n(t);if(Aa){Hn(!0);try{n(t)}finally{Hn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=ox.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=iu(e);var t=e.queue,n=Dh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ou,useDeferredValue:function(e,t){var n=bt();return uu(n,e,t)},useTransition:function(){var e=iu(!1);return e=Ch.bind(null,fe,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=fe,r=bt();if(ve){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),De===null)throw Error(u(349));(xe&124)!==0||nh(a,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,xh(lh.bind(null,a,o,e),[e]),a.flags|=2048,ul(9,Di(),ah.bind(null,a,o,n,t),null),n},useId:function(){var e=bt(),t=De.identifierPrefix;if(ve){var n=jn,a=Sn;n=(a&~(1<<32-Et(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ti++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=nx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:fu,useFormState:hh,useActionState:hh,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=du.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:au,useCacheRefresh:function(){return bt().memoizedState=sx.bind(null,fe)}},Nh={readContext:ut,use:Ri,useCallback:_h,useContext:ut,useEffect:yh,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:Sh,useMemo:Eh,useReducer:Mi,useRef:bh,useState:function(){return Mi(En)},useDebugValue:ou,useDeferredValue:function(e,t){var n=Qe();return zh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Mi(En)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:th,useId:Rh,useHostTransitionStatus:fu,useFormState:mh,useActionState:mh,useOptimistic:function(e,t){var n=Qe();return sh(n,Ae,e,t)},useMemoCache:au,useCacheRefresh:Mh},ux={readContext:ut,use:Ri,useCallback:_h,useContext:ut,useEffect:yh,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:Sh,useMemo:Eh,useReducer:ru,useRef:bh,useState:function(){return ru(En)},useDebugValue:ou,useDeferredValue:function(e,t){var n=Qe();return Ae===null?uu(n,e,t):zh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=ru(En)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:gr(e),t]},useSyncExternalStore:th,useId:Rh,useHostTransitionStatus:fu,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var n=Qe();return Ae!==null?sh(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:au,useCacheRefresh:Mh},cl=null,xr=0;function Ni(e){var t=xr;return xr+=1,cl===null&&(cl=[]),Xd(cl,e,t)}function yr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ui(e,t){throw t.$$typeof===S?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uh(e){var t=e._init;return t(e._payload)}function Lh(e){function t(z,E){if(e){var T=z.deletions;T===null?(z.deletions=[E],z.flags|=16):T.push(E)}}function n(z,E){if(!e)return null;for(;E!==null;)t(z,E),E=E.sibling;return null}function a(z){for(var E=new Map;z!==null;)z.key!==null?E.set(z.key,z):E.set(z.index,z),z=z.sibling;return E}function r(z,E){return z=vn(z,E),z.index=0,z.sibling=null,z}function o(z,E,T){return z.index=T,e?(T=z.alternate,T!==null?(T=T.index,T<E?(z.flags|=67108866,E):T):(z.flags|=67108866,E)):(z.flags|=1048576,E)}function m(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function p(z,E,T,G){return E===null||E.tag!==6?(E=ko(T,z.mode,G),E.return=z,E):(E=r(E,T),E.return=z,E)}function j(z,E,T,G){var W=T.type;return W===M?U(z,E,T.props.children,G,T.key):E!==null&&(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===se&&Uh(W)===E.type)?(E=r(E,T.props),yr(E,T),E.return=z,E):(E=yi(T.type,T.key,T.props,null,z.mode,G),yr(E,T),E.return=z,E)}function R(z,E,T,G){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Oo(T,z.mode,G),E.return=z,E):(E=r(E,T.children||[]),E.return=z,E)}function U(z,E,T,G,W){return E===null||E.tag!==7?(E=va(T,z.mode,G,W),E.return=z,E):(E=r(E,T),E.return=z,E)}function q(z,E,T){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=ko(""+E,z.mode,T),E.return=z,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return T=yi(E.type,E.key,E.props,null,z.mode,T),yr(T,E),T.return=z,T;case k:return E=Oo(E,z.mode,T),E.return=z,E;case se:var G=E._init;return E=G(E._payload),q(z,E,T)}if(Ce(E)||Ue(E))return E=va(E,z.mode,T,null),E.return=z,E;if(typeof E.then=="function")return q(z,Ni(E),T);if(E.$$typeof===A)return q(z,wi(z,E),T);Ui(z,E)}return null}function D(z,E,T,G){var W=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return W!==null?null:p(z,E,""+T,G);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return T.key===W?j(z,E,T,G):null;case k:return T.key===W?R(z,E,T,G):null;case se:return W=T._init,T=W(T._payload),D(z,E,T,G)}if(Ce(T)||Ue(T))return W!==null?null:U(z,E,T,G,null);if(typeof T.then=="function")return D(z,E,Ni(T),G);if(T.$$typeof===A)return D(z,E,wi(z,T),G);Ui(z,T)}return null}function O(z,E,T,G,W){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(T)||null,p(E,z,""+G,W);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return z=z.get(G.key===null?T:G.key)||null,j(E,z,G,W);case k:return z=z.get(G.key===null?T:G.key)||null,R(E,z,G,W);case se:var de=G._init;return G=de(G._payload),O(z,E,T,G,W)}if(Ce(G)||Ue(G))return z=z.get(T)||null,U(E,z,G,W,null);if(typeof G.then=="function")return O(z,E,T,Ni(G),W);if(G.$$typeof===A)return O(z,E,T,wi(E,G),W);Ui(E,G)}return null}function ie(z,E,T,G){for(var W=null,de=null,te=E,re=E=0,Ie=null;te!==null&&re<T.length;re++){te.index>re?(Ie=te,te=null):Ie=te.sibling;var ye=D(z,te,T[re],G);if(ye===null){te===null&&(te=Ie);break}e&&te&&ye.alternate===null&&t(z,te),E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye,te=Ie}if(re===T.length)return n(z,te),ve&&ja(z,re),W;if(te===null){for(;re<T.length;re++)te=q(z,T[re],G),te!==null&&(E=o(te,E,re),de===null?W=te:de.sibling=te,de=te);return ve&&ja(z,re),W}for(te=a(te);re<T.length;re++)Ie=O(te,z,re,T[re],G),Ie!==null&&(e&&Ie.alternate!==null&&te.delete(Ie.key===null?re:Ie.key),E=o(Ie,E,re),de===null?W=Ie:de.sibling=Ie,de=Ie);return e&&te.forEach(function(oa){return t(z,oa)}),ve&&ja(z,re),W}function ae(z,E,T,G){if(T==null)throw Error(u(151));for(var W=null,de=null,te=E,re=E=0,Ie=null,ye=T.next();te!==null&&!ye.done;re++,ye=T.next()){te.index>re?(Ie=te,te=null):Ie=te.sibling;var oa=D(z,te,ye.value,G);if(oa===null){te===null&&(te=Ie);break}e&&te&&oa.alternate===null&&t(z,te),E=o(oa,E,re),de===null?W=oa:de.sibling=oa,de=oa,te=Ie}if(ye.done)return n(z,te),ve&&ja(z,re),W;if(te===null){for(;!ye.done;re++,ye=T.next())ye=q(z,ye.value,G),ye!==null&&(E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye);return ve&&ja(z,re),W}for(te=a(te);!ye.done;re++,ye=T.next())ye=O(te,z,re,ye.value,G),ye!==null&&(e&&ye.alternate!==null&&te.delete(ye.key===null?re:ye.key),E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye);return e&&te.forEach(function(cy){return t(z,cy)}),ve&&ja(z,re),W}function Re(z,E,T,G){if(typeof T=="object"&&T!==null&&T.type===M&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case w:e:{for(var W=T.key;E!==null;){if(E.key===W){if(W=T.type,W===M){if(E.tag===7){n(z,E.sibling),G=r(E,T.props.children),G.return=z,z=G;break e}}else if(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===se&&Uh(W)===E.type){n(z,E.sibling),G=r(E,T.props),yr(G,T),G.return=z,z=G;break e}n(z,E);break}else t(z,E);E=E.sibling}T.type===M?(G=va(T.props.children,z.mode,G,T.key),G.return=z,z=G):(G=yi(T.type,T.key,T.props,null,z.mode,G),yr(G,T),G.return=z,z=G)}return m(z);case k:e:{for(W=T.key;E!==null;){if(E.key===W)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){n(z,E.sibling),G=r(E,T.children||[]),G.return=z,z=G;break e}else{n(z,E);break}else t(z,E);E=E.sibling}G=Oo(T,z.mode,G),G.return=z,z=G}return m(z);case se:return W=T._init,T=W(T._payload),Re(z,E,T,G)}if(Ce(T))return ie(z,E,T,G);if(Ue(T)){if(W=Ue(T),typeof W!="function")throw Error(u(150));return T=W.call(T),ae(z,E,T,G)}if(typeof T.then=="function")return Re(z,E,Ni(T),G);if(T.$$typeof===A)return Re(z,E,wi(z,T),G);Ui(z,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,E!==null&&E.tag===6?(n(z,E.sibling),G=r(E,T),G.return=z,z=G):(n(z,E),G=ko(T,z.mode,G),G.return=z,z=G),m(z)):n(z,E)}return function(z,E,T,G){try{xr=0;var W=Re(z,E,T,G);return cl=null,W}catch(te){if(te===ur||te===Ei)throw te;var de=Ct(29,te,null,z.mode);return de.lanes=G,de.return=z,de}finally{}}}var fl=Lh(!0),Hh=Lh(!1),Qt=Q(null),fn=null;function Xn(e){var t=e.alternate;J(Ze,Ze.current&1),J(Qt,e),fn===null&&(t===null||il.current!==null||t.memoizedState!==null)&&(fn=e)}function Gh(e){if(e.tag===22){if(J(Ze,Ze.current),J(Qt,e),fn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(fn=e)}}else Zn()}function Zn(){J(Ze,Ze.current),J(Qt,Qt.current)}function zn(e){P(Qt),fn===e&&(fn=null),P(Ze)}var Ze=Q(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||nc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function hu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Mt(),r=$n(a);r.payload=t,n!=null&&(r.callback=n),t=Qn(e,r,a),t!==null&&(Dt(t,e,a),fr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Mt(),r=$n(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Qn(e,r,a),t!==null&&(Dt(t,e,a),fr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),a=$n(n);a.tag=2,t!=null&&(a.callback=t),t=Qn(e,a,n),t!==null&&(Dt(t,e,n),fr(t,e,n))}};function Yh(e,t,n,a,r,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,m):t.prototype&&t.prototype.isPureReactComponent?!tr(n,a)||!tr(r,o):!0}function Vh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&mu.enqueueReplaceState(t,t.state,null)}function Ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var Hi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qh(e){Hi(e)}function $h(e){console.error(e)}function Qh(e){Hi(e)}function Gi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Kh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function gu(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){Gi(e,t)},n}function Xh(e){return e=$n(e),e.tag=3,e}function Zh(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=a.value;e.payload=function(){return r(o)},e.callback=function(){Kh(t,n,a)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Kh(t,n,a),typeof r!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function cx(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ir(t,n,r,!0),n=Qt.current,n!==null){switch(n.tag){case 13:return fn===null?Hu():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===$o?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Yu(e,a,r)),!1;case 22:return n.flags|=65536,a===$o?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Yu(e,a,r)),!1}throw Error(u(435,n.tag))}return Yu(e,a,r),Hu(),!1}if(ve)return t=Qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Uo&&(e=Error(u(422),{cause:a}),rr(Yt(e,n)))):(a!==Uo&&(t=Error(u(423),{cause:a}),rr(Yt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Yt(a,n),r=gu(e.stateNode,a,r),Xo(e,r),Ge!==4&&(Ge=2)),!1;var o=Error(u(520),{cause:a});if(o=Yt(o,n),zr===null?zr=[o]:zr.push(o),Ge!==4&&(Ge=2),t===null)return!0;a=Yt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=gu(n.stateNode,a,e),Xo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ea===null||!ea.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Xh(r),Zh(r,e,n,a),Xo(n,r),!1}n=n.return}while(n!==null);return!1}var Ph=Error(u(461)),Fe=!1;function lt(e,t,n,a){t.child=e===null?Hh(t,null,n,a):fl(t,e.child,n,a)}function Jh(e,t,n,a,r){n=n.render;var o=t.ref;if("ref"in a){var m={};for(var p in a)p!=="ref"&&(m[p]=a[p])}else m=a;return za(t),a=Wo(e,t,n,m,o,r),p=Io(),e!==null&&!Fe?(eu(e,t,r),Cn(e,t,r)):(ve&&p&&Bo(t),t.flags|=1,lt(e,t,a,r),t.child)}function Fh(e,t,n,a,r){if(e===null){var o=n.type;return typeof o=="function"&&!Do(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Wh(e,t,o,a,r)):(e=yi(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!wu(e,r)){var m=o.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(m,a)&&e.ref===t.ref)return Cn(e,t,r)}return t.flags|=1,e=vn(o,a),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,n,a,r){if(e!==null){var o=e.memoizedProps;if(tr(o,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=o,wu(e,r))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,Cn(e,t,r)}return pu(e,t,n,a,r)}function Ih(e,t,n){var a=t.pendingProps,r=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=o!==null?o.baseLanes|n:n,e!==null){for(r=t.child=e.child,o=0;r!==null;)o=o|r.lanes|r.childLanes,r=r.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return em(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_i(t,o!==null?o.cachePool:null),o!==null?Wd(t,o):Po(),Gh(t);else return t.lanes=t.childLanes=536870912,em(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(_i(t,o.cachePool),Wd(t,o),Zn(),t.memoizedState=null):(e!==null&&_i(t,null),Po(),Zn());return lt(e,t,r,n),t.child}function em(e,t,n,a){var r=qo();return r=r===null?null:{parent:Xe._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&_i(t,null),Po(),Gh(t),e!==null&&ir(e,t,a,!0),null}function Yi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pu(e,t,n,a,r){return za(t),n=Wo(e,t,n,a,void 0,r),a=Io(),e!==null&&!Fe?(eu(e,t,r),Cn(e,t,r)):(ve&&a&&Bo(t),t.flags|=1,lt(e,t,n,r),t.child)}function tm(e,t,n,a,r,o){return za(t),t.updateQueue=null,n=eh(t,a,n,r),Id(e),a=Io(),e!==null&&!Fe?(eu(e,t,o),Cn(e,t,o)):(ve&&a&&Bo(t),t.flags|=1,lt(e,t,n,o),t.child)}function nm(e,t,n,a,r){if(za(t),t.stateNode===null){var o=tl,m=n.contextType;typeof m=="object"&&m!==null&&(o=ut(m)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=mu,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},Qo(t),m=n.contextType,o.context=typeof m=="object"&&m!==null?ut(m):tl,o.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(hu(t,n,m,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&mu.enqueueReplaceState(o,o.state,null),hr(t,a,o,r),dr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var p=t.memoizedProps,j=Ta(n,p);o.props=j;var R=o.context,U=n.contextType;m=tl,typeof U=="object"&&U!==null&&(m=ut(U));var q=n.getDerivedStateFromProps;U=typeof q=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,U||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||R!==m)&&Vh(t,o,a,m),qn=!1;var D=t.memoizedState;o.state=D,hr(t,a,o,r),dr(),R=t.memoizedState,p||D!==R||qn?(typeof q=="function"&&(hu(t,n,q,a),R=t.memoizedState),(j=qn||Yh(t,n,j,a,D,R,m))?(U||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),o.props=a,o.state=R,o.context=m,a=j):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Ko(e,t),m=t.memoizedProps,U=Ta(n,m),o.props=U,q=t.pendingProps,D=o.context,R=n.contextType,j=tl,typeof R=="object"&&R!==null&&(j=ut(R)),p=n.getDerivedStateFromProps,(R=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==q||D!==j)&&Vh(t,o,a,j),qn=!1,D=t.memoizedState,o.state=D,hr(t,a,o,r),dr();var O=t.memoizedState;m!==q||D!==O||qn||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof p=="function"&&(hu(t,n,p,a),O=t.memoizedState),(U=qn||Yh(t,n,U,a,D,O,j)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,O,j),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,O,j)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),o.props=a,o.state=O,o.context=j,a=U):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Yi(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=fl(t,e.child,null,r),t.child=fl(t,null,n,r)):lt(e,t,n,r),t.memoizedState=o.state,e=t.child):e=Cn(e,t,r),e}function am(e,t,n,a){return lr(),t.flags|=256,lt(e,t,n,a),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xu(e){return{baseLanes:e,cachePool:$d()}}function yu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kt),e}function lm(e,t,n){var a=t.pendingProps,r=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(r?Xn(t):Zn(),ve){var p=He,j;if(j=p){e:{for(j=p,p=cn;j.nodeType!==8;){if(!p){p=null;break e}if(j=an(j.nextSibling),j===null){p=null;break e}}p=j}p!==null?(t.memoizedState={dehydrated:p,treeContext:Sa!==null?{id:Sn,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},j=Ct(18,null,null,0),j.stateNode=p,j.return=t,t.child=j,ft=t,He=null,j=!0):j=!1}j||_a(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return nc(p)?t.lanes=32:t.lanes=536870912,null;zn(t)}return p=a.children,a=a.fallback,r?(Zn(),r=t.mode,p=Vi({mode:"hidden",children:p},r),a=va(a,r,n,null),p.return=t,a.return=t,p.sibling=a,t.child=p,r=t.child,r.memoizedState=xu(n),r.childLanes=yu(e,m,n),t.memoizedState=bu,a):(Xn(t),vu(t,p))}if(j=e.memoizedState,j!==null&&(p=j.dehydrated,p!==null)){if(o)t.flags&256?(Xn(t),t.flags&=-257,t=Su(e,t,n)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),r=a.fallback,p=t.mode,a=Vi({mode:"visible",children:a.children},p),r=va(r,p,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,fl(t,e.child,null,n),a=t.child,a.memoizedState=xu(n),a.childLanes=yu(e,m,n),t.memoizedState=bu,t=r);else if(Xn(t),nc(p)){if(m=p.nextSibling&&p.nextSibling.dataset,m)var R=m.dgst;m=R,a=Error(u(419)),a.stack="",a.digest=m,rr({value:a,source:null,stack:null}),t=Su(e,t,n)}else if(Fe||ir(e,t,n,!1),m=(n&e.childLanes)!==0,Fe||m){if(m=De,m!==null&&(a=n&-n,a=(a&42)!==0?1:no(a),a=(a&(m.suspendedLanes|n))!==0?0:a,a!==0&&a!==j.retryLane))throw j.retryLane=a,el(e,a),Dt(m,e,a),Ph;p.data==="$?"||Hu(),t=Su(e,t,n)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,He=an(p.nextSibling),ft=t,ve=!0,wa=null,cn=!1,e!==null&&(qt[$t++]=Sn,qt[$t++]=jn,qt[$t++]=Sa,Sn=e.id,jn=e.overflow,Sa=t),t=vu(t,a.children),t.flags|=4096);return t}return r?(Zn(),r=a.fallback,p=t.mode,j=e.child,R=j.sibling,a=vn(j,{mode:"hidden",children:a.children}),a.subtreeFlags=j.subtreeFlags&65011712,R!==null?r=vn(R,r):(r=va(r,p,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,p=e.child.memoizedState,p===null?p=xu(n):(j=p.cachePool,j!==null?(R=Xe._currentValue,j=j.parent!==R?{parent:R,pool:R}:j):j=$d(),p={baseLanes:p.baseLanes|n,cachePool:j}),r.memoizedState=p,r.childLanes=yu(e,m,n),t.memoizedState=bu,a):(Xn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function vu(e,t){return t=Vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vi(e,t){return e=Ct(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Su(e,t,n){return fl(t,e.child,null,n),e=vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ho(e.return,t,n)}function ju(e,t,n,a,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=r)}function im(e,t,n){var a=t.pendingProps,r=a.revealOrder,o=a.tail;if(lt(e,t,a.children,n),a=Ze.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,n,t);else if(e.tag===19)rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(J(Ze,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),ju(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Li(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}ju(t,!0,n,null,o);break;case"together":ju(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ir(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function fx(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),Vn(t,Xe,e.memoizedState.cache),lr();break;case 27:case 5:ma(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Xn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lm(e,t,n):(Xn(t),e=Cn(e,t,n),e!==null?e.sibling:null);Xn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ir(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return im(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(Ze,Ze.current),a)break;return null;case 22:case 23:return t.lanes=0,Ih(e,t,n);case 24:Vn(t,Xe,e.memoizedState.cache)}return Cn(e,t,n)}function sm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!wu(e,n)&&(t.flags&128)===0)return Fe=!1,fx(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,ve&&(t.flags&1048576)!==0&&Ud(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")Do(a)?(e=Ta(a,e),t.tag=1,t=nm(null,t,a,e,n)):(t.tag=0,t=pu(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===$){t.tag=11,t=Jh(null,t,a,e,n);break e}else if(r===Y){t.tag=14,t=Fh(null,t,a,e,n);break e}}throw t=at(a)||a,Error(u(306,t,""))}}return t;case 0:return pu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Ta(a,t.pendingProps),nm(e,t,a,r,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var o=t.memoizedState;r=o.element,Ko(e,t),hr(t,a,null,n);var m=t.memoizedState;if(a=m.cache,Vn(t,Xe,a),a!==o.cache&&Go(t,[Xe],n,!0),dr(),a=m.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=am(e,t,a,n);break e}else if(a!==r){r=Yt(Error(u(424)),t),rr(r),t=am(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=an(e.firstChild),ft=t,ve=!0,wa=null,cn=!0,n=Hh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(lr(),a===r){t=Cn(e,t,n);break e}lt(e,t,a,n)}t=t.child}return t;case 26:return Yi(e,t),e===null?(n=fg(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,a=ns(le.current).createElement(n),a[ot]=t,a[gt]=e,it(a,n,e),Je(a),t.stateNode=a):t.memoizedState=fg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ma(t),e===null&&ve&&(a=t.stateNode=og(t.type,t.pendingProps,le.current),ft=t,cn=!0,r=He,aa(t.type)?(ac=r,He=an(a.firstChild)):He=r),lt(e,t,t.pendingProps.children,n),Yi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((r=a=He)&&(a=Hx(a,t.type,t.pendingProps,cn),a!==null?(t.stateNode=a,ft=t,He=an(a.firstChild),cn=!1,r=!0):r=!1),r||_a(t)),ma(t),r=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,a=o.children,Iu(r,o)?a=null:m!==null&&Iu(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=Wo(e,t,ax,null,null,n),Br._currentValue=r),Yi(e,t),lt(e,t,a,n),t.child;case 6:return e===null&&ve&&((e=n=He)&&(n=Gx(n,t.pendingProps,cn),n!==null?(t.stateNode=n,ft=t,He=null,e=!0):e=!1),e||_a(t)),null;case 13:return lm(e,t,n);case 4:return je(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=fl(t,null,a,n):lt(e,t,a,n),t.child;case 11:return Jh(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Vn(t,t.type,a.value),lt(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,za(t),r=ut(r),a=a(r),t.flags|=1,lt(e,t,a,n),t.child;case 14:return Fh(e,t,t.type,t.pendingProps,n);case 15:return Wh(e,t,t.type,t.pendingProps,n);case 19:return im(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Vi(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=vn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ih(e,t,n);case 24:return za(t),a=ut(Xe),e===null?(r=qo(),r===null&&(r=De,o=Yo(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),t.memoizedState={parent:a,cache:r},Qo(t),Vn(t,Xe,r)):((e.lanes&n)!==0&&(Ko(e,t),hr(t,null,null,n),dr()),r=e.memoizedState,o=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Vn(t,Xe,a)):(a=o.cache,Vn(t,Xe,a),a!==r.cache&&Go(t,[Xe],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function An(e){e.flags|=4}function om(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pg(t)){if(t=Qt.current,t!==null&&((xe&4194048)===xe?fn!==null:(xe&62914560)!==xe&&(xe&536870912)===0||t!==fn))throw cr=$o,Qd;e.flags|=8192}}function qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gf():536870912,e.lanes|=t,gl|=t)}function vr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function dx(e,t,n){var a=t.pendingProps;switch(No(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_n(Xe),st(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ar(t)?An(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gd())),Le(t),null;case 26:return n=t.memoizedState,e===null?(An(t),n!==null?(Le(t),om(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(An(t),Le(t),om(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==a&&An(t),Le(t),t.flags&=-16777217),null;case 27:bn(t),n=le.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Le(t),null}e=ee.current,ar(t)?Ld(t):(e=og(r,a,n),t.stateNode=e,An(t))}return Le(t),null;case 5:if(bn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Le(t),null}if(e=ee.current,ar(t))Ld(t);else{switch(r=ns(le.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[ot]=t,e[gt]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(it(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&An(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=le.current,ar(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=ft,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||tg(e.nodeValue,n)),e||_a(t)}else e=ns(e).createTextNode(a),e[ot]=t,t.stateNode=e}return Le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ar(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(u(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(u(317));r[ot]=t}else lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),r=!1}else r=Gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(zn(t),t):(zn(t),null)}if(zn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),qi(t,t.updateQueue),Le(t),null;case 4:return st(),e===null&&Zu(t.stateNode.containerInfo),Le(t),null;case 10:return _n(t.type),Le(t),null;case 19:if(P(Ze),r=t.memoizedState,r===null)return Le(t),null;if(a=(t.flags&128)!==0,o=r.rendering,o===null)if(a)vr(r,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Li(e),o!==null){for(t.flags|=128,vr(r,!1),e=o.updateQueue,t.updateQueue=e,qi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nd(n,e),n=n.sibling;return J(Ze,Ze.current&1|2),t.child}e=e.sibling}r.tail!==null&&un()>Ki&&(t.flags|=128,a=!0,vr(r,!1),t.lanes=4194304)}else{if(!a)if(e=Li(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,qi(t,e),vr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!ve)return Le(t),null}else 2*un()-r.renderingStartTime>Ki&&n!==536870912&&(t.flags|=128,a=!0,vr(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e!==null?e.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=un(),t.sibling=null,e=Ze.current,J(Ze,a?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return zn(t),Jo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&qi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&P(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_n(Xe),Le(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function hx(e,t){switch(No(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(Xe),st(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bn(t),null;case 13:if(zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Ze),null;case 4:return st(),null;case 10:return _n(t.type),null;case 22:case 23:return zn(t),Jo(),e!==null&&P(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(Xe),null;case 25:return null;default:return null}}function um(e,t){switch(No(t),t.tag){case 3:_n(Xe),st();break;case 26:case 27:case 5:bn(t);break;case 4:st();break;case 13:zn(t);break;case 19:P(Ze);break;case 10:_n(t.type);break;case 22:case 23:zn(t),Jo(),e!==null&&P(Ca);break;case 24:_n(Xe)}}function Sr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var o=n.create,m=n.inst;a=o(),m.destroy=a}n=n.next}while(n!==r)}}catch(p){Me(t,t.return,p)}}function Pn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&e)===e){var m=a.inst,p=m.destroy;if(p!==void 0){m.destroy=void 0,r=t;var j=n,R=p;try{R()}catch(U){Me(r,j,U)}}}a=a.next}while(a!==o)}}catch(U){Me(t,t.return,U)}}function cm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fd(t,n)}catch(a){Me(e,e.return,a)}}}function fm(e,t,n){n.props=Ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Me(e,t,a)}}function jr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Me(e,t,r)}}function dn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Me(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Me(e,t,r)}else n.current=null}function dm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Me(e,e.return,r)}}function _u(e,t,n){try{var a=e.stateNode;Ox(a,e.type,n,t),a[gt]=t}catch(r){Me(e,e.return,r)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&aa(e.type)||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ts));else if(a!==4&&(a===27&&aa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function $i(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&aa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($i(e,t,n),e=e.sibling;e!==null;)$i(e,t,n),e=e.sibling}function mm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);it(t,a,n),t[ot]=e,t[gt]=n}catch(o){Me(e,e.return,o)}}var Tn=!1,qe=!1,Cu=!1,gm=typeof WeakSet=="function"?WeakSet:Set,We=null;function mx(e,t){if(e=e.containerInfo,Fu=os,e=zd(e),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var m=0,p=-1,j=-1,R=0,U=0,q=e,D=null;t:for(;;){for(var O;q!==n||r!==0&&q.nodeType!==3||(p=m+r),q!==o||a!==0&&q.nodeType!==3||(j=m+a),q.nodeType===3&&(m+=q.nodeValue.length),(O=q.firstChild)!==null;)D=q,q=O;for(;;){if(q===e)break t;if(D===n&&++R===r&&(p=m),D===o&&++U===a&&(j=m),(O=q.nextSibling)!==null)break;q=D,D=q.parentNode}q=O}n=p===-1||j===-1?null:{start:p,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:e,selectionRange:n},os=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,r=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var ie=Ta(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ie,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Me(n,n.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":tc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function pm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n),a&4&&Sr(5,n);break;case 1:if(Jn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Me(n,n.return,m)}else{var r=Ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Me(n,n.return,m)}}a&64&&cm(n),a&512&&jr(n,n.return);break;case 3:if(Jn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fd(e,t)}catch(m){Me(n,n.return,m)}}break;case 27:t===null&&a&4&&mm(n);case 26:case 5:Jn(e,n),t===null&&a&4&&dm(n),a&512&&jr(n,n.return);break;case 12:Jn(e,n);break;case 13:Jn(e,n),a&4&&ym(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=wx.bind(null,n),Yx(e,n))));break;case 22:if(a=n.memoizedState!==null||Tn,!a){t=t!==null&&t.memoizedState!==null||qe,r=Tn;var o=qe;Tn=a,(qe=t)&&!o?Fn(e,n,(n.subtreeFlags&8772)!==0):Jn(e,n),Tn=r,qe=o}break;case 30:break;default:Jn(e,n)}}function bm(e){var t=e.alternate;t!==null&&(e.alternate=null,bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ro(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,xt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)xm(e,t,n),n=n.sibling}function xm(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 26:qe||dn(n,t),Rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||dn(n,t);var a=Be,r=xt;aa(n.type)&&(Be=n.stateNode,xt=!1),Rn(e,t,n),Mr(n.stateNode),Be=a,xt=r;break;case 5:qe||dn(n,t);case 6:if(a=Be,r=xt,Be=null,Rn(e,t,n),Be=a,xt=r,Be!==null)if(xt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(o){Me(n,t,o)}else try{Be.removeChild(n.stateNode)}catch(o){Me(n,t,o)}break;case 18:Be!==null&&(xt?(e=Be,ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Hr(e)):ig(Be,n.stateNode));break;case 4:a=Be,r=xt,Be=n.stateNode.containerInfo,xt=!0,Rn(e,t,n),Be=a,xt=r;break;case 0:case 11:case 14:case 15:qe||Pn(2,n,t),qe||Pn(4,n,t),Rn(e,t,n);break;case 1:qe||(dn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fm(n,t,a)),Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:qe=(a=qe)||n.memoizedState!==null,Rn(e,t,n),qe=a;break;default:Rn(e,t,n)}}function ym(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hr(e)}catch(n){Me(t,t.return,n)}}function gx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gm),t;default:throw Error(u(435,e.tag))}}function Au(e,t){var n=gx(e);t.forEach(function(a){var r=_x.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function At(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],o=e,m=t,p=m;e:for(;p!==null;){switch(p.tag){case 27:if(aa(p.type)){Be=p.stateNode,xt=!1;break e}break;case 5:Be=p.stateNode,xt=!1;break e;case 3:case 4:Be=p.stateNode.containerInfo,xt=!0;break e}p=p.return}if(Be===null)throw Error(u(160));xm(o,m,r),Be=null,xt=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vm(t,e),t=t.sibling}var nn=null;function vm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(t,e),Tt(e),a&4&&(Pn(3,e,e.return),Sr(3,e),Pn(5,e,e.return));break;case 1:At(t,e),Tt(e),a&512&&(qe||n===null||dn(n,n.return)),a&64&&Tn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=nn;if(At(t,e),Tt(e),a&512&&(qe||n===null||dn(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Kl]||o[ot]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(a),r.head.insertBefore(o,r.querySelector("head > title"))),it(o,a,n),o[ot]=e,Je(o),a=o;break e;case"link":var m=mg("link","href",r).get(a+(n.href||""));if(m){for(var p=0;p<m.length;p++)if(o=m[p],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(p,1);break t}}o=r.createElement(a),it(o,a,n),r.head.appendChild(o);break;case"meta":if(m=mg("meta","content",r).get(a+(n.content||""))){for(p=0;p<m.length;p++)if(o=m[p],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(p,1);break t}}o=r.createElement(a),it(o,a,n),r.head.appendChild(o);break;default:throw Error(u(468,a))}o[ot]=e,Je(o),a=o}e.stateNode=a}else gg(r,e.type,e.stateNode);else e.stateNode=hg(r,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?gg(r,e.type,e.stateNode):hg(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&_u(e,e.memoizedProps,n.memoizedProps)}break;case 27:At(t,e),Tt(e),a&512&&(qe||n===null||dn(n,n.return)),n!==null&&a&4&&_u(e,e.memoizedProps,n.memoizedProps);break;case 5:if(At(t,e),Tt(e),a&512&&(qe||n===null||dn(n,n.return)),e.flags&32){r=e.stateNode;try{Xa(r,"")}catch(O){Me(e,e.return,O)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,_u(e,r,n!==null?n.memoizedProps:r)),a&1024&&(Cu=!0);break;case 6:if(At(t,e),Tt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(O){Me(e,e.return,O)}}break;case 3:if(rs=null,r=nn,nn=as(t.containerInfo),At(t,e),nn=r,Tt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(O){Me(e,e.return,O)}Cu&&(Cu=!1,Sm(e));break;case 4:a=nn,nn=as(e.stateNode.containerInfo),At(t,e),Tt(e),nn=a;break;case 12:At(t,e),Tt(e);break;case 13:At(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ou=un()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Au(e,a)));break;case 22:r=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,R=Tn,U=qe;if(Tn=R||r,qe=U||j,At(t,e),qe=U,Tn=R,Tt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||j||Tn||qe||Ra(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(o=j.stateNode,r)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{p=j.stateNode;var q=j.memoizedProps.style,D=q!=null&&q.hasOwnProperty("display")?q.display:null;p.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(O){Me(j,j.return,O)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(O){Me(j,j.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Au(e,n))));break;case 19:At(t,e),Tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Au(e,a)));break;case 30:break;case 21:break;default:At(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(hm(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var r=n.stateNode,o=Eu(e);$i(e,o,r);break;case 5:var m=n.stateNode;n.flags&32&&(Xa(m,""),n.flags&=-33);var p=Eu(e);$i(e,p,m);break;case 3:case 4:var j=n.stateNode.containerInfo,R=Eu(e);zu(e,R,j);break;default:throw Error(u(161))}}catch(U){Me(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pm(e,t.alternate,t),t=t.sibling}function Ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pn(4,t,t.return),Ra(t);break;case 1:dn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fm(t,t.return,n),Ra(t);break;case 27:Mr(t.stateNode);case 26:case 5:dn(t,t.return),Ra(t);break;case 22:t.memoizedState===null&&Ra(t);break;case 30:Ra(t);break;default:Ra(t)}e=e.sibling}}function Fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:Fn(r,o,n),Sr(4,o);break;case 1:if(Fn(r,o,n),a=o,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(R){Me(a,a.return,R)}if(a=o,r=a.updateQueue,r!==null){var p=a.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)Jd(j[r],p)}catch(R){Me(a,a.return,R)}}n&&m&64&&cm(o),jr(o,o.return);break;case 27:mm(o);case 26:case 5:Fn(r,o,n),n&&a===null&&m&4&&dm(o),jr(o,o.return);break;case 12:Fn(r,o,n);break;case 13:Fn(r,o,n),n&&m&4&&ym(r,o);break;case 22:o.memoizedState===null&&Fn(r,o,n),jr(o,o.return);break;case 30:break;default:Fn(r,o,n)}t=t.sibling}}function Tu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sr(n))}function Ru(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sr(e))}function hn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(e,t,n,a),t=t.sibling}function jm(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,a),r&2048&&Sr(9,t);break;case 1:hn(e,t,n,a);break;case 3:hn(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sr(e)));break;case 12:if(r&2048){hn(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,p=o.onPostCommit;typeof p=="function"&&p(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Me(t,t.return,j)}}else hn(e,t,n,a);break;case 13:hn(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?hn(e,t,n,a):wr(e,t):o._visibility&2?hn(e,t,n,a):(o._visibility|=2,dl(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&Tu(m,t);break;case 24:hn(e,t,n,a),r&2048&&Ru(t.alternate,t);break;default:hn(e,t,n,a)}}function dl(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,p=n,j=a,R=m.flags;switch(m.tag){case 0:case 11:case 15:dl(o,m,p,j,r),Sr(8,m);break;case 23:break;case 22:var U=m.stateNode;m.memoizedState!==null?U._visibility&2?dl(o,m,p,j,r):wr(o,m):(U._visibility|=2,dl(o,m,p,j,r)),r&&R&2048&&Tu(m.alternate,m);break;case 24:dl(o,m,p,j,r),r&&R&2048&&Ru(m.alternate,m);break;default:dl(o,m,p,j,r)}t=t.sibling}}function wr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:wr(n,a),r&2048&&Tu(a.alternate,a);break;case 24:wr(n,a),r&2048&&Ru(a.alternate,a);break;default:wr(n,a)}t=t.sibling}}var _r=8192;function hl(e){if(e.subtreeFlags&_r)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 26:hl(e),e.flags&_r&&e.memoizedState!==null&&ey(nn,e.memoizedState,e.memoizedProps);break;case 5:hl(e);break;case 3:case 4:var t=nn;nn=as(e.stateNode.containerInfo),hl(e),nn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=_r,_r=16777216,hl(e),_r=t):hl(e));break;default:hl(e)}}function _m(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Er(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];We=a,zm(a,e)}_m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Em(e),e=e.sibling}function Em(e){switch(e.tag){case 0:case 11:case 15:Er(e),e.flags&2048&&Pn(9,e,e.return);break;case 3:Er(e);break;case 12:Er(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qi(e)):Er(e);break;default:Er(e)}}function Qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];We=a,zm(a,e)}_m(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pn(8,t,t.return),Qi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qi(t));break;default:Qi(t)}e=e.sibling}}function zm(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Pn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:sr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,We=a;else e:for(n=e;We!==null;){a=We;var r=a.sibling,o=a.return;if(bm(a),a===n){We=null;break e}if(r!==null){r.return=o,We=r;break e}We=o}}}var px={getCacheForType:function(e){var t=ut(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},bx=typeof WeakMap=="function"?WeakMap:Map,Ee=0,De=null,me=null,xe=0,ze=0,Rt=null,Wn=!1,ml=!1,Mu=!1,Mn=0,Ge=0,In=0,Ma=0,Du=0,Kt=0,gl=0,zr=null,yt=null,ku=!1,Ou=0,Ki=1/0,Xi=null,ea=null,rt=0,ta=null,pl=null,bl=0,Bu=0,Nu=null,Cm=null,Cr=0,Uu=null;function Mt(){if((Ee&2)!==0&&xe!==0)return xe&-xe;if(N.T!==null){var e=ll;return e!==0?e:$u()}return qf()}function Am(){Kt===0&&(Kt=(xe&536870912)===0||ve?Hf():536870912);var e=Qt.current;return e!==null&&(e.flags|=32),Kt}function Dt(e,t,n){(e===De&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(xl(e,0),na(e,xe,Kt,!1)),Ql(e,n),((Ee&2)===0||e!==De)&&(e===De&&((Ee&2)===0&&(Ma|=n),Ge===4&&na(e,xe,Kt,!1)),mn(e))}function Tm(e,t,n){if((Ee&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||$l(e,t),r=a?vx(e,t):Gu(e,t,!0),o=a;do{if(r===0){ml&&!a&&na(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!xx(n)){r=Gu(e,t,!1),o=!1;continue}if(r===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var p=e;r=zr;var j=p.current.memoizedState.isDehydrated;if(j&&(xl(p,m).flags|=256),m=Gu(p,m,!1),m!==2){if(Mu&&!j){p.errorRecoveryDisabledLanes|=o,Ma|=o,r=4;break e}o=yt,yt=r,o!==null&&(yt===null?yt=o:yt.push.apply(yt,o))}r=m}if(o=!1,r!==2)continue}}if(r===1){xl(e,0),na(e,t,0,!0);break}e:{switch(a=e,o=r,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:na(a,t,Kt,!Wn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(r=Ou+300-un(),10<r)){if(na(a,t,Kt,!Wn),li(a,0,!0)!==0)break e;a.timeoutHandle=lg(Rm.bind(null,a,n,yt,Xi,ku,t,Kt,Ma,gl,Wn,o,2,-0,0),r);break e}Rm(a,n,yt,Xi,ku,t,Kt,Ma,gl,Wn,o,0,-0,0)}}break}while(!0);mn(e)}function Rm(e,t,n,a,r,o,m,p,j,R,U,q,D,O){if(e.timeoutHandle=-1,q=t.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(Or={stylesheets:null,count:0,unsuspend:Ix},wm(t),q=ty(),q!==null)){e.cancelPendingCommit=q(Um.bind(null,e,t,o,n,a,r,m,p,j,U,1,D,O)),na(e,o,m,!R);return}Um(e,t,o,n,a,r,m,p,j)}function xx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],o=r.getSnapshot;r=r.value;try{if(!zt(o(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,a){t&=~Du,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var o=31-Et(r),m=1<<o;a[o]=-1,r&=~m}n!==0&&Yf(e,n,t)}function Zi(){return(Ee&6)===0?(Ar(0),!1):!0}function Lu(){if(me!==null){if(ze===0)var e=me.return;else e=me,wn=Ea=null,tu(e),cl=null,xr=0,e=me;for(;e!==null;)um(e.alternate,e),e=e.return;me=null}}function xl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Nx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Lu(),De=e,me=n=vn(e.current,null),xe=t,ze=0,Rt=null,Wn=!1,ml=$l(e,t),Mu=!1,gl=Kt=Du=Ma=In=Ge=0,yt=zr=null,ku=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-Et(a),o=1<<r;t|=e[r],a&=~o}return Mn=t,pi(),n}function Mm(e,t){fe=null,N.H=Bi,t===ur||t===Ei?(t=Zd(),ze=3):t===Qd?(t=Zd(),ze=4):ze=t===Ph?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,me===null&&(Ge=1,Gi(e,Yt(t,e.current)))}function Dm(){var e=N.H;return N.H=Bi,e===null?Bi:e}function km(){var e=N.A;return N.A=px,e}function Hu(){Ge=4,Wn||(xe&4194048)!==xe&&Qt.current!==null||(ml=!0),(In&134217727)===0&&(Ma&134217727)===0||De===null||na(De,xe,Kt,!1)}function Gu(e,t,n){var a=Ee;Ee|=2;var r=Dm(),o=km();(De!==e||xe!==t)&&(Xi=null,xl(e,t)),t=!1;var m=Ge;e:do try{if(ze!==0&&me!==null){var p=me,j=Rt;switch(ze){case 8:Lu(),m=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(t=!0);var R=ze;if(ze=0,Rt=null,yl(e,p,j,R),n&&ml){m=0;break e}break;default:R=ze,ze=0,Rt=null,yl(e,p,j,R)}}yx(),m=Ge;break}catch(U){Mm(e,U)}while(!0);return t&&e.shellSuspendCounter++,wn=Ea=null,Ee=a,N.H=r,N.A=o,me===null&&(De=null,xe=0,pi()),m}function yx(){for(;me!==null;)Om(me)}function vx(e,t){var n=Ee;Ee|=2;var a=Dm(),r=km();De!==e||xe!==t?(Xi=null,Ki=un()+500,xl(e,t)):ml=$l(e,t);e:do try{if(ze!==0&&me!==null){t=me;var o=Rt;t:switch(ze){case 1:ze=0,Rt=null,yl(e,t,o,1);break;case 2:case 9:if(Kd(o)){ze=0,Rt=null,Bm(t);break}t=function(){ze!==2&&ze!==9||De!==e||(ze=7),mn(e)},o.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Kd(o)?(ze=0,Rt=null,Bm(t)):(ze=0,Rt=null,yl(e,t,o,7));break;case 5:var m=null;switch(me.tag){case 26:m=me.memoizedState;case 5:case 27:var p=me;if(!m||pg(m)){ze=0,Rt=null;var j=p.sibling;if(j!==null)me=j;else{var R=p.return;R!==null?(me=R,Pi(R)):me=null}break t}}ze=0,Rt=null,yl(e,t,o,5);break;case 6:ze=0,Rt=null,yl(e,t,o,6);break;case 8:Lu(),Ge=6;break e;default:throw Error(u(462))}}Sx();break}catch(U){Mm(e,U)}while(!0);return wn=Ea=null,N.H=a,N.A=r,Ee=n,me!==null?0:(De=null,xe=0,pi(),Ge)}function Sx(){for(;me!==null&&!q1();)Om(me)}function Om(e){var t=sm(e.alternate,e,Mn);e.memoizedProps=e.pendingProps,t===null?Pi(e):me=t}function Bm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=tm(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=tm(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:tu(t);default:um(n,t),t=me=Nd(t,Mn),t=sm(n,t,Mn)}e.memoizedProps=e.pendingProps,t===null?Pi(e):me=t}function yl(e,t,n,a){wn=Ea=null,tu(t),cl=null,xr=0;var r=t.return;try{if(cx(e,r,t,n,xe)){Ge=1,Gi(e,Yt(n,e.current)),me=null;return}}catch(o){if(r!==null)throw me=r,o;Ge=1,Gi(e,Yt(n,e.current)),me=null;return}t.flags&32768?(ve||a===1?e=!0:ml||(xe&536870912)!==0?e=!1:(Wn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Qt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Nm(t,e)):Pi(t)}function Pi(e){var t=e;do{if((t.flags&32768)!==0){Nm(t,Wn);return}e=t.return;var n=dx(t.alternate,t,Mn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ge===0&&(Ge=5)}function Nm(e,t){do{var n=hx(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Ge=6,me=null}function Um(e,t,n,a,r,o,m,p,j){e.cancelPendingCommit=null;do Ji();while(rt!==0);if((Ee&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=Ro,I1(e,n,o,m,p,j),e===De&&(me=De=null,xe=0),pl=t,ta=e,bl=n,Bu=o,Nu=r,Cm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ex(ti,function(){return Vm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,r=Z.p,Z.p=2,m=Ee,Ee|=4;try{mx(e,t,n)}finally{Ee=m,Z.p=r,N.T=a}}rt=1,Lm(),Hm(),Gm()}}function Lm(){if(rt===1){rt=0;var e=ta,t=pl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=Z.p;Z.p=2;var r=Ee;Ee|=4;try{vm(t,e);var o=Wu,m=zd(e.containerInfo),p=o.focusedElem,j=o.selectionRange;if(m!==p&&p&&p.ownerDocument&&Ed(p.ownerDocument.documentElement,p)){if(j!==null&&Eo(p)){var R=j.start,U=j.end;if(U===void 0&&(U=R),"selectionStart"in p)p.selectionStart=R,p.selectionEnd=Math.min(U,p.value.length);else{var q=p.ownerDocument||document,D=q&&q.defaultView||window;if(D.getSelection){var O=D.getSelection(),ie=p.textContent.length,ae=Math.min(j.start,ie),Re=j.end===void 0?ae:Math.min(j.end,ie);!O.extend&&ae>Re&&(m=Re,Re=ae,ae=m);var z=_d(p,ae),E=_d(p,Re);if(z&&E&&(O.rangeCount!==1||O.anchorNode!==z.node||O.anchorOffset!==z.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var T=q.createRange();T.setStart(z.node,z.offset),O.removeAllRanges(),ae>Re?(O.addRange(T),O.extend(E.node,E.offset)):(T.setEnd(E.node,E.offset),O.addRange(T))}}}}for(q=[],O=p;O=O.parentNode;)O.nodeType===1&&q.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<q.length;p++){var G=q[p];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}os=!!Fu,Wu=Fu=null}finally{Ee=r,Z.p=a,N.T=n}}e.current=t,rt=2}}function Hm(){if(rt===2){rt=0;var e=ta,t=pl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=Z.p;Z.p=2;var r=Ee;Ee|=4;try{pm(e,t.alternate,t)}finally{Ee=r,Z.p=a,N.T=n}}rt=3}}function Gm(){if(rt===4||rt===3){rt=0,$1();var e=ta,t=pl,n=bl,a=Cm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,pl=ta=null,Ym(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ea=null),ao(n),t=t.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,r=Z.p,Z.p=2,N.T=null;try{for(var o=e.onRecoverableError,m=0;m<a.length;m++){var p=a[m];o(p.value,{componentStack:p.stack})}}finally{N.T=t,Z.p=r}}(bl&3)!==0&&Ji(),mn(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===Uu?Cr++:(Cr=0,Uu=e):Cr=0,Ar(0)}}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sr(t)))}function Ji(e){return Lm(),Hm(),Gm(),Vm()}function Vm(){if(rt!==5)return!1;var e=ta,t=Bu;Bu=0;var n=ao(bl),a=N.T,r=Z.p;try{Z.p=32>n?32:n,N.T=null,n=Nu,Nu=null;var o=ta,m=bl;if(rt=0,pl=ta=null,bl=0,(Ee&6)!==0)throw Error(u(331));var p=Ee;if(Ee|=4,Em(o.current),jm(o,o.current,m,n),Ee=p,Ar(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ql,o)}catch{}return!0}finally{Z.p=r,N.T=a,Ym(e,t)}}function qm(e,t,n){t=Yt(n,t),t=gu(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(Ql(e,2),mn(e))}function Me(e,t,n){if(e.tag===3)qm(e,e,n);else for(;t!==null;){if(t.tag===3){qm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ea===null||!ea.has(a))){e=Yt(n,e),n=Xh(2),a=Qn(t,n,2),a!==null&&(Zh(n,a,t,e),Ql(a,2),mn(a));break}}t=t.return}}function Yu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new bx;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Mu=!0,r.add(n),e=jx.bind(null,e,t,n),t.then(e,e))}function jx(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(xe&n)===n&&(Ge===4||Ge===3&&(xe&62914560)===xe&&300>un()-Ou?(Ee&2)===0&&xl(e,0):Du|=n,gl===xe&&(gl=0)),mn(e)}function $m(e,t){t===0&&(t=Gf()),e=el(e,t),e!==null&&(Ql(e,t),mn(e))}function wx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$m(e,n)}function _x(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),$m(e,n)}function Ex(e,t){return Is(e,t)}var Fi=null,vl=null,Vu=!1,Wi=!1,qu=!1,Da=0;function mn(e){e!==vl&&e.next===null&&(vl===null?Fi=vl=e:vl=vl.next=e),Wi=!0,Vu||(Vu=!0,Cx())}function Ar(e,t){if(!qu&&Wi){qu=!0;do for(var n=!1,a=Fi;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var o=0;else{var m=a.suspendedLanes,p=a.pingedLanes;o=(1<<31-Et(42|e)+1)-1,o&=r&~(m&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Zm(a,o))}else o=xe,o=li(a,a===De?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||$l(a,o)||(n=!0,Zm(a,o));a=a.next}while(n);qu=!1}}function zx(){Qm()}function Qm(){Wi=Vu=!1;var e=0;Da!==0&&(Bx()&&(e=Da),Da=0);for(var t=un(),n=null,a=Fi;a!==null;){var r=a.next,o=Km(a,t);o===0?(a.next=null,n===null?Fi=r:n.next=r,r===null&&(vl=n)):(n=a,(e!==0||(o&3)!==0)&&(Wi=!0)),a=r}Ar(e)}function Km(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-Et(o),p=1<<m,j=r[m];j===-1?((p&n)===0||(p&a)!==0)&&(r[m]=W1(p,t)):j<=t&&(e.expiredLanes|=p),o&=~p}if(t=De,n=xe,n=li(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&eo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||$l(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&eo(a),ao(n)){case 2:case 8:n=Uf;break;case 32:n=ti;break;case 268435456:n=Lf;break;default:n=ti}return a=Xm.bind(null,e),n=Is(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&eo(a),e.callbackPriority=2,e.callbackNode=null,2}function Xm(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ji()&&e.callbackNode!==n)return null;var a=xe;return a=li(e,e===De?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Tm(e,a,t),Km(e,un()),e.callbackNode!=null&&e.callbackNode===n?Xm.bind(null,e):null)}function Zm(e,t){if(Ji())return null;Tm(e,t,!0)}function Cx(){Ux(function(){(Ee&6)!==0?Is(Nf,zx):Qm()})}function $u(){return Da===0&&(Da=Hf()),Da}function Pm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ui(""+e)}function Jm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ax(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var o=Pm((r[gt]||null).action),m=a.submitter;m&&(t=(t=m[gt]||null)?Pm(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var p=new hi("action","action",null,a,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Da!==0){var j=m?Jm(r,m):new FormData(r);cu(n,{pending:!0,data:j,method:r.method,action:o},null,j)}}else typeof o=="function"&&(p.preventDefault(),j=m?Jm(r,m):new FormData(r),cu(n,{pending:!0,data:j,method:r.method,action:o},o,j))},currentTarget:r}]})}}for(var Qu=0;Qu<To.length;Qu++){var Ku=To[Qu],Tx=Ku.toLowerCase(),Rx=Ku[0].toUpperCase()+Ku.slice(1);tn(Tx,"on"+Rx)}tn(Td,"onAnimationEnd"),tn(Rd,"onAnimationIteration"),tn(Md,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Xb,"onTransitionRun"),tn(Zb,"onTransitionStart"),tn(Pb,"onTransitionCancel"),tn(Dd,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tr));function Fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var m=a.length-1;0<=m;m--){var p=a[m],j=p.instance,R=p.currentTarget;if(p=p.listener,j!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=R;try{o(r)}catch(U){Hi(U)}r.currentTarget=null,o=j}else for(m=0;m<a.length;m++){if(p=a[m],j=p.instance,R=p.currentTarget,p=p.listener,j!==o&&r.isPropagationStopped())break e;o=p,r.currentTarget=R;try{o(r)}catch(U){Hi(U)}r.currentTarget=null,o=j}}}}function ge(e,t){var n=t[lo];n===void 0&&(n=t[lo]=new Set);var a=e+"__bubble";n.has(a)||(Wm(t,e,2,!1),n.add(a))}function Xu(e,t,n){var a=0;t&&(a|=4),Wm(n,e,a,t)}var Ii="_reactListening"+Math.random().toString(36).slice(2);function Zu(e){if(!e[Ii]){e[Ii]=!0,Qf.forEach(function(n){n!=="selectionchange"&&(Mx.has(n)||Xu(n,!1,e),Xu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ii]||(t[Ii]=!0,Xu("selectionchange",!1,t))}}function Wm(e,t,n,a){switch(jg(t)){case 2:var r=ly;break;case 8:r=ry;break;default:r=oc}n=r.bind(null,t,n,e),r=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Pu(e,t,n,a,r){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var p=a.stateNode.containerInfo;if(p===r)break;if(m===4)for(m=a.return;m!==null;){var j=m.tag;if((j===3||j===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;p!==null;){if(m=Ya(p),m===null)return;if(j=m.tag,j===5||j===6||j===26||j===27){a=o=m;continue e}p=p.parentNode}}a=a.return}rd(function(){var R=o,U=mo(n),q=[];e:{var D=kd.get(e);if(D!==void 0){var O=hi,ie=e;switch(e){case"keypress":if(fi(n)===0)break e;case"keydown":case"keyup":O=Eb;break;case"focusin":ie="focus",O=vo;break;case"focusout":ie="blur",O=vo;break;case"beforeblur":case"afterblur":O=vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=hb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Ab;break;case Td:case Rd:case Md:O=pb;break;case Dd:O=Rb;break;case"scroll":case"scrollend":O=fb;break;case"wheel":O=Db;break;case"copy":case"cut":case"paste":O=xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=cd;break;case"toggle":case"beforetoggle":O=Ob}var ae=(t&4)!==0,Re=!ae&&(e==="scroll"||e==="scrollend"),z=ae?D!==null?D+"Capture":null:D;ae=[];for(var E=R,T;E!==null;){var G=E;if(T=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||T===null||z===null||(G=Zl(E,z),G!=null&&ae.push(Rr(E,G,T))),Re)break;E=E.return}0<ae.length&&(D=new O(D,ie,null,n,U),q.push({event:D,listeners:ae}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",D&&n!==ho&&(ie=n.relatedTarget||n.fromElement)&&(Ya(ie)||ie[Ga]))break e;if((O||D)&&(D=U.window===U?U:(D=U.ownerDocument)?D.defaultView||D.parentWindow:window,O?(ie=n.relatedTarget||n.toElement,O=R,ie=ie?Ya(ie):null,ie!==null&&(Re=d(ie),ae=ie.tag,ie!==Re||ae!==5&&ae!==27&&ae!==6)&&(ie=null)):(O=null,ie=R),O!==ie)){if(ae=od,G="onMouseLeave",z="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ae=cd,G="onPointerLeave",z="onPointerEnter",E="pointer"),Re=O==null?D:Xl(O),T=ie==null?D:Xl(ie),D=new ae(G,E+"leave",O,n,U),D.target=Re,D.relatedTarget=T,G=null,Ya(U)===R&&(ae=new ae(z,E+"enter",ie,n,U),ae.target=T,ae.relatedTarget=Re,G=ae),Re=G,O&&ie)t:{for(ae=O,z=ie,E=0,T=ae;T;T=Sl(T))E++;for(T=0,G=z;G;G=Sl(G))T++;for(;0<E-T;)ae=Sl(ae),E--;for(;0<T-E;)z=Sl(z),T--;for(;E--;){if(ae===z||z!==null&&ae===z.alternate)break t;ae=Sl(ae),z=Sl(z)}ae=null}else ae=null;O!==null&&Im(q,D,O,ae,!1),ie!==null&&Re!==null&&Im(q,Re,ie,ae,!0)}}e:{if(D=R?Xl(R):window,O=D.nodeName&&D.nodeName.toLowerCase(),O==="select"||O==="input"&&D.type==="file")var W=xd;else if(pd(D))if(yd)W=$b;else{W=Vb;var de=Yb}else O=D.nodeName,!O||O.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?R&&fo(R.elementType)&&(W=xd):W=qb;if(W&&(W=W(e,R))){bd(q,W,n,U);break e}de&&de(e,D,R),e==="focusout"&&R&&D.type==="number"&&R.memoizedProps.value!=null&&co(D,"number",D.value)}switch(de=R?Xl(R):window,e){case"focusin":(pd(de)||de.contentEditable==="true")&&(Fa=de,zo=R,nr=null);break;case"focusout":nr=zo=Fa=null;break;case"mousedown":Co=!0;break;case"contextmenu":case"mouseup":case"dragend":Co=!1,Cd(q,n,U);break;case"selectionchange":if(Kb)break;case"keydown":case"keyup":Cd(q,n,U)}var te;if(jo)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Ja?md(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(fd&&n.locale!=="ko"&&(Ja||re!=="onCompositionStart"?re==="onCompositionEnd"&&Ja&&(te=id()):(Yn=U,bo="value"in Yn?Yn.value:Yn.textContent,Ja=!0)),de=es(R,re),0<de.length&&(re=new ud(re,e,null,n,U),q.push({event:re,listeners:de}),te?re.data=te:(te=gd(n),te!==null&&(re.data=te)))),(te=Nb?Ub(e,n):Lb(e,n))&&(re=es(R,"onBeforeInput"),0<re.length&&(de=new ud("onBeforeInput","beforeinput",null,n,U),q.push({event:de,listeners:re}),de.data=te)),Ax(q,e,R,n,U)}Fm(q,t)})}function Rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function es(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Zl(e,n),r!=null&&a.unshift(Rr(e,r,o)),r=Zl(e,t),r!=null&&a.push(Rr(e,r,o))),e.tag===3)return a;e=e.return}return[]}function Sl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,t,n,a,r){for(var o=t._reactName,m=[];n!==null&&n!==a;){var p=n,j=p.alternate,R=p.stateNode;if(p=p.tag,j!==null&&j===a)break;p!==5&&p!==26&&p!==27||R===null||(j=R,r?(R=Zl(n,o),R!=null&&m.unshift(Rr(n,R,j))):r||(R=Zl(n,o),R!=null&&m.push(Rr(n,R,j)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Dx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(Dx,`
`).replace(kx,"")}function tg(e,t){return t=eg(t),eg(e)===t}function ts(){}function Te(e,t,n,a,r,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Xa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Xa(e,""+a);break;case"className":ii(e,"class",a);break;case"tabIndex":ii(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,n,a);break;case"style":ad(e,a,o);break;case"data":if(t!=="object"){ii(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ui(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",r.name,r,null),Te(e,t,"formEncType",r.formEncType,r,null),Te(e,t,"formMethod",r.formMethod,r,null),Te(e,t,"formTarget",r.formTarget,r,null)):(Te(e,t,"encType",r.encType,r,null),Te(e,t,"method",r.method,r,null),Te(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ui(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=ts);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ui(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ri(e,"popover",a);break;case"xlinkActuate":xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":xn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":xn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":xn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":xn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ri(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ub.get(n)||n,ri(e,n,a))}}function Ju(e,t,n,a,r,o){switch(n){case"style":ad(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Xa(e,a):(typeof a=="number"||typeof a=="bigint")&&Xa(e,""+a);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ts);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),o=e[gt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,r),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ri(e,n,a)}}}function it(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var a=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var m=n[o];if(m!=null)switch(o){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,o,m,n,null)}}r&&Te(e,t,"srcSet",n.srcSet,n,null),a&&Te(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var p=o=m=r=null,j=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":r=U;break;case"type":m=U;break;case"checked":j=U;break;case"defaultChecked":R=U;break;case"value":o=U;break;case"defaultValue":p=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:Te(e,t,a,U,n,null)}}If(e,o,p,j,R,m,r,!1),si(e);return;case"select":ge("invalid",e),a=m=o=null;for(r in n)if(n.hasOwnProperty(r)&&(p=n[r],p!=null))switch(r){case"value":o=p;break;case"defaultValue":m=p;break;case"multiple":a=p;default:Te(e,t,r,p,n,null)}t=o,n=m,e.multiple=!!a,t!=null?Ka(e,!!a,t,!1):n!=null&&Ka(e,!!a,n,!0);return;case"textarea":ge("invalid",e),o=r=a=null;for(m in n)if(n.hasOwnProperty(m)&&(p=n[m],p!=null))switch(m){case"value":a=p;break;case"defaultValue":r=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:Te(e,t,m,p,n,null)}td(e,a,r,o),si(e);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(a=n[j],a!=null))switch(j){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Te(e,t,j,a,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(a=0;a<Tr.length;a++)ge(Tr[a],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Te(e,t,R,a,n,null)}return;default:if(fo(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Ju(e,t,U,a,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!=null&&Te(e,t,p,a,n,null))}function Ox(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,m=null,p=null,j=null,R=null,U=null;for(O in n){var q=n[O];if(n.hasOwnProperty(O)&&q!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":j=q;default:a.hasOwnProperty(O)||Te(e,t,O,null,a,q)}}for(var D in a){var O=a[D];if(q=n[D],a.hasOwnProperty(D)&&(O!=null||q!=null))switch(D){case"type":o=O;break;case"name":r=O;break;case"checked":R=O;break;case"defaultChecked":U=O;break;case"value":m=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:O!==q&&Te(e,t,D,O,a,q)}}uo(e,m,p,j,R,U,o,r);return;case"select":O=m=p=D=null;for(o in n)if(j=n[o],n.hasOwnProperty(o)&&j!=null)switch(o){case"value":break;case"multiple":O=j;default:a.hasOwnProperty(o)||Te(e,t,o,null,a,j)}for(r in a)if(o=a[r],j=n[r],a.hasOwnProperty(r)&&(o!=null||j!=null))switch(r){case"value":D=o;break;case"defaultValue":p=o;break;case"multiple":m=o;default:o!==j&&Te(e,t,r,o,a,j)}t=p,n=m,a=O,D!=null?Ka(e,!!n,D,!1):!!a!=!!n&&(t!=null?Ka(e,!!n,t,!0):Ka(e,!!n,n?[]:"",!1));return;case"textarea":O=D=null;for(p in n)if(r=n[p],n.hasOwnProperty(p)&&r!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Te(e,t,p,null,a,r)}for(m in a)if(r=a[m],o=n[m],a.hasOwnProperty(m)&&(r!=null||o!=null))switch(m){case"value":D=r;break;case"defaultValue":O=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:r!==o&&Te(e,t,m,r,a,o)}ed(e,D,O);return;case"option":for(var ie in n)if(D=n[ie],n.hasOwnProperty(ie)&&D!=null&&!a.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Te(e,t,ie,null,a,D)}for(j in a)if(D=a[j],O=n[j],a.hasOwnProperty(j)&&D!==O&&(D!=null||O!=null))switch(j){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Te(e,t,j,D,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in n)D=n[ae],n.hasOwnProperty(ae)&&D!=null&&!a.hasOwnProperty(ae)&&Te(e,t,ae,null,a,D);for(R in a)if(D=a[R],O=n[R],a.hasOwnProperty(R)&&D!==O&&(D!=null||O!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:Te(e,t,R,D,a,O)}return;default:if(fo(t)){for(var Re in n)D=n[Re],n.hasOwnProperty(Re)&&D!==void 0&&!a.hasOwnProperty(Re)&&Ju(e,t,Re,void 0,a,D);for(U in a)D=a[U],O=n[U],!a.hasOwnProperty(U)||D===O||D===void 0&&O===void 0||Ju(e,t,U,D,a,O);return}}for(var z in n)D=n[z],n.hasOwnProperty(z)&&D!=null&&!a.hasOwnProperty(z)&&Te(e,t,z,null,a,D);for(q in a)D=a[q],O=n[q],!a.hasOwnProperty(q)||D===O||D==null&&O==null||Te(e,t,q,D,a,O)}var Fu=null,Wu=null;function ns(e){return e.nodeType===9?e:e.ownerDocument}function ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Iu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ec=null;function Bx(){var e=window.event;return e&&e.type==="popstate"?e===ec?!1:(ec=e,!0):(ec=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(e){return rg.resolve(null).then(e).catch(Lx)}:lg;function Lx(e){setTimeout(function(){throw e})}function aa(e){return e==="head"}function ig(e,t){var n=t,a=0,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<a&&8>a){n=a;var m=e.ownerDocument;if(n&1&&Mr(m.documentElement),n&2&&Mr(m.body),n&4)for(n=m.head,Mr(n),m=n.firstChild;m;){var p=m.nextSibling,j=m.nodeName;m[Kl]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=p}}if(r===0){e.removeChild(o),Hr(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:a=n.charCodeAt(0)-48;else a=0;n=o}while(n);Hr(t)}function tc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":tc(n),ro(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Hx(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function Gx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=an(e.nextSibling),e===null))return null;return e}function nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Yx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ac=null;function sg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function og(e,t,n){switch(t=ns(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Mr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ro(e)}var Xt=new Map,ug=new Set;function as(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dn=Z.d;Z.d={f:Vx,r:qx,D:$x,C:Qx,L:Kx,m:Xx,X:Px,S:Zx,M:Jx};function Vx(){var e=Dn.f(),t=Zi();return e||t}function qx(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Th(t):Dn.r(e)}var jl=typeof document>"u"?null:document;function cg(e,t,n){var a=jl;if(a&&typeof t=="string"&&t){var r=Gt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),ug.has(r)||(ug.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),it(t,"link",e),Je(t),a.head.appendChild(t)))}}function $x(e){Dn.D(e),cg("dns-prefetch",e,null)}function Qx(e,t){Dn.C(e,t),cg("preconnect",e,t)}function Kx(e,t,n){Dn.L(e,t,n);var a=jl;if(a&&e&&t){var r='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Gt(n.imageSizes)+'"]')):r+='[href="'+Gt(e)+'"]';var o=r;switch(t){case"style":o=wl(e);break;case"script":o=_l(e)}Xt.has(o)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xt.set(o,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Dr(o))||t==="script"&&a.querySelector(kr(o))||(t=a.createElement("link"),it(t,"link",e),Je(t),a.head.appendChild(t)))}}function Xx(e,t){Dn.m(e,t);var n=jl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Gt(a)+'"][href="'+Gt(e)+'"]',o=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=_l(e)}if(!Xt.has(o)&&(e=x({rel:"modulepreload",href:e},t),Xt.set(o,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(kr(o)))return}a=n.createElement("link"),it(a,"link",e),Je(a),n.head.appendChild(a)}}}function Zx(e,t,n){Dn.S(e,t,n);var a=jl;if(a&&e){var r=qa(a).hoistableStyles,o=wl(e);t=t||"default";var m=r.get(o);if(!m){var p={loading:0,preload:null};if(m=a.querySelector(Dr(o)))p.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xt.get(o))&&lc(e,n);var j=m=a.createElement("link");Je(j),it(j,"link",e),j._p=new Promise(function(R,U){j.onload=R,j.onerror=U}),j.addEventListener("load",function(){p.loading|=1}),j.addEventListener("error",function(){p.loading|=2}),p.loading|=4,ls(m,t,a)}m={type:"stylesheet",instance:m,count:1,state:p},r.set(o,m)}}}function Px(e,t){Dn.X(e,t);var n=jl;if(n&&e){var a=qa(n).hoistableScripts,r=_l(e),o=a.get(r);o||(o=n.querySelector(kr(r)),o||(e=x({src:e,async:!0},t),(t=Xt.get(r))&&rc(e,t),o=n.createElement("script"),Je(o),it(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function Jx(e,t){Dn.M(e,t);var n=jl;if(n&&e){var a=qa(n).hoistableScripts,r=_l(e),o=a.get(r);o||(o=n.querySelector(kr(r)),o||(e=x({src:e,async:!0,type:"module"},t),(t=Xt.get(r))&&rc(e,t),o=n.createElement("script"),Je(o),it(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(r,o))}}function fg(e,t,n,a){var r=(r=le.current)?as(r):null;if(!r)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wl(n.href),n=qa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wl(n.href);var o=qa(r).hoistableStyles,m=o.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=r.querySelector(Dr(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xt.set(e,n),o||Fx(r,e,n,m.state))),t&&a===null)throw Error(u(528,""));return m}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(n),n=qa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function wl(e){return'href="'+Gt(e)+'"'}function Dr(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Fx(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),it(t,"link",n),Je(t),e.head.appendChild(t))}function _l(e){return'[src="'+Gt(e)+'"]'}function kr(e){return"script[async]"+e}function hg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Gt(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),it(a,"style",r),ls(a,n.precedence,e),t.instance=a;case"stylesheet":r=wl(n.href);var o=e.querySelector(Dr(r));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;a=dg(n),(r=Xt.get(r))&&lc(a,r),o=(e.ownerDocument||e).createElement("link"),Je(o);var m=o;return m._p=new Promise(function(p,j){m.onload=p,m.onerror=j}),it(o,"link",a),t.state.loading|=4,ls(o,n.precedence,e),t.instance=o;case"script":return o=_l(n.src),(r=e.querySelector(kr(o)))?(t.instance=r,Je(r),r):(a=n,(r=Xt.get(o))&&(a=x({},n),rc(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Je(r),it(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ls(a,n.precedence,e));return t.instance}function ls(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,o=r,m=0;m<a.length;m++){var p=a[m];if(p.dataset.precedence===t)o=p;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rs=null;function mg(e,t,n){if(rs===null){var a=new Map,r=rs=new Map;r.set(n,a)}else r=rs,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var o=n[r];if(!(o[Kl]||o[ot]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var p=a.get(m);p?p.push(o):a.set(m,[o])}}return a}function gg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Wx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Or=null;function Ix(){}function ey(e,t,n){if(Or===null)throw Error(u(475));var a=Or;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=wl(n.href),o=e.querySelector(Dr(r));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=is.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,Je(o);return}o=e.ownerDocument||e,n=dg(n),(r=Xt.get(r))&&lc(n,r),o=o.createElement("link"),Je(o);var m=o;m._p=new Promise(function(p,j){m.onload=p,m.onerror=j}),it(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=is.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function ty(){if(Or===null)throw Error(u(475));var e=Or;return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function is(){if(this.count--,this.count===0){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ss=null;function ic(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ss=new Map,t.forEach(ny,e),ss=null,is.call(e))}function ny(e,t){if(!(t.state.loading&4)){var n=ss.get(e);if(n)var a=n.get(null);else{n=new Map,ss.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var m=r[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),a=m)}a&&n.set(null,a)}r=t.instance,m=r.getAttribute("data-precedence"),o=n.get(m)||a,o===a&&n.set(null,r),n.set(m,r),this.count++,a=is.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Br={$$typeof:A,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function ay(e,t,n,a,r,o,m,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=to(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.hiddenUpdates=to(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function bg(e,t,n,a,r,o,m,p,j,R,U,q){return e=new ay(e,t,n,m,p,j,R,q),t=1,o===!0&&(t|=24),o=Ct(3,null,null,t),e.current=o,o.stateNode=e,t=Yo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},Qo(o),e}function xg(e){return e?(e=tl,e):tl}function yg(e,t,n,a,r,o){r=xg(r),a.context===null?a.context=r:a.pendingContext=r,a=$n(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Qn(e,a,t),n!==null&&(Dt(n,e,t),fr(n,e,t))}function vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sc(e,t){vg(e,t),(e=e.alternate)&&vg(e,t)}function Sg(e){if(e.tag===13){var t=el(e,67108864);t!==null&&Dt(t,e,67108864),sc(e,67108864)}}var os=!0;function ly(e,t,n,a){var r=N.T;N.T=null;var o=Z.p;try{Z.p=2,oc(e,t,n,a)}finally{Z.p=o,N.T=r}}function ry(e,t,n,a){var r=N.T;N.T=null;var o=Z.p;try{Z.p=8,oc(e,t,n,a)}finally{Z.p=o,N.T=r}}function oc(e,t,n,a){if(os){var r=uc(a);if(r===null)Pu(e,t,a,us,n),wg(e,a);else if(sy(r,e,t,n,a))a.stopPropagation();else if(wg(e,a),t&4&&-1<iy.indexOf(e)){for(;r!==null;){var o=Va(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=ga(o.pendingLanes);if(m!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;m;){var j=1<<31-Et(m);p.entanglements[1]|=j,m&=~j}mn(o),(Ee&6)===0&&(Ki=un()+500,Ar(0))}}break;case 13:p=el(o,2),p!==null&&Dt(p,o,2),Zi(),sc(o,2)}if(o=uc(a),o===null&&Pu(e,t,a,us,n),o===r)break;r=o}r!==null&&a.stopPropagation()}else Pu(e,t,a,null,n)}}function uc(e){return e=mo(e),cc(e)}var us=null;function cc(e){if(us=null,e=Ya(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return us=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q1()){case Nf:return 2;case Uf:return 8;case ti:case K1:return 32;case Lf:return 268435456;default:return 32}default:return 32}}var fc=!1,la=null,ra=null,ia=null,Nr=new Map,Ur=new Map,sa=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wg(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function Lr(e,t,n,a,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Va(t),t!==null&&Sg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function sy(e,t,n,a,r){switch(t){case"focusin":return la=Lr(la,e,t,n,a,r),!0;case"dragenter":return ra=Lr(ra,e,t,n,a,r),!0;case"mouseover":return ia=Lr(ia,e,t,n,a,r),!0;case"pointerover":var o=r.pointerId;return Nr.set(o,Lr(Nr.get(o)||null,e,t,n,a,r)),!0;case"gotpointercapture":return o=r.pointerId,Ur.set(o,Lr(Ur.get(o)||null,e,t,n,a,r)),!0}return!1}function _g(e){var t=Ya(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,eb(e.priority,function(){if(n.tag===13){var a=Mt();a=no(a);var r=el(n,a);r!==null&&Dt(r,n,a),sc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ho=a,n.target.dispatchEvent(a),ho=null}else return t=Va(n),t!==null&&Sg(t),e.blockedOn=n,!1;t.shift()}return!0}function Eg(e,t,n){cs(e)&&n.delete(t)}function oy(){fc=!1,la!==null&&cs(la)&&(la=null),ra!==null&&cs(ra)&&(ra=null),ia!==null&&cs(ia)&&(ia=null),Nr.forEach(Eg),Ur.forEach(Eg)}function fs(e,t){e.blockedOn===t&&(e.blockedOn=null,fc||(fc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,oy)))}var ds=null;function zg(e){ds!==e&&(ds=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ds===e&&(ds=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(cc(a||n)===null)continue;break}var o=Va(n);o!==null&&(e.splice(t,3),t-=3,cu(o,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Hr(e){function t(j){return fs(j,e)}la!==null&&fs(la,e),ra!==null&&fs(ra,e),ia!==null&&fs(ia,e),Nr.forEach(t),Ur.forEach(t);for(var n=0;n<sa.length;n++){var a=sa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)_g(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],o=n[a+1],m=r[gt]||null;if(typeof o=="function")m||zg(n);else if(m){var p=null;if(o&&o.hasAttribute("formAction")){if(r=o,m=o[gt]||null)p=m.formAction;else if(cc(r)!==null)continue}else p=m.action;typeof p=="function"?n[a+1]=p:(n.splice(a,3),a-=3),zg(n)}}}function dc(e){this._internalRoot=e}hs.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Mt();yg(n,a,e,t,null,null)},hs.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yg(e.current,2,null,e,null,null),Zi(),t[Ga]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&_g(e)}};var Cg=s.version;if(Cg!=="19.1.0")throw Error(u(527,Cg,"19.1.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var uy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{ql=ms.inject(uy),_t=ms}catch{}}return Yr.createRoot=function(e,t){if(!f(e))throw Error(u(299));var n=!1,a="",r=qh,o=$h,m=Qh,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=bg(e,1,!1,null,null,n,a,r,o,m,p,null),e[Ga]=t.current,Zu(e),new dc(t)},Yr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(u(299));var a=!1,r="",o=qh,m=$h,p=Qh,j=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(j=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=bg(e,1,!0,t,n??null,a,r,o,m,p,j,R),t.context=xg(null),n=t.current,a=Mt(),a=no(a),r=$n(a),r.callback=null,Qn(n,r,a),n=a,t.current.lanes=n,Ql(t,n),mn(t),e[Ga]=t.current,Zu(e),new hs(t)},Yr.version="19.1.0",Yr}var Ug;function vy(){if(Ug)return gc.exports;Ug=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),gc.exports=yy(),gc.exports}var Sy=vy(),nt=function(){return nt=Object.assign||function(s){for(var c,u=1,f=arguments.length;u<f;u++){c=arguments[u];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(s[d]=c[d])}return s},nt.apply(this,arguments)};function Ol(l,s,c){if(c||arguments.length===2)for(var u=0,f=s.length,d;u<f;u++)(d||!(u in s))&&(d||(d=Array.prototype.slice.call(s,0,u)),d[u]=s[u]);return l.concat(d||Array.prototype.slice.call(s))}var ke="-ms-",Zr="-moz-",we="-webkit-",R0="comm",qs="rule",pf="decl",jy="@import",M0="@keyframes",wy="@layer",D0=Math.abs,bf=String.fromCharCode,ef=Object.assign;function _y(l,s){return tt(l,0)^45?(((s<<2^tt(l,0))<<2^tt(l,1))<<2^tt(l,2))<<2^tt(l,3):0}function k0(l){return l.trim()}function Bn(l,s){return(l=s.exec(l))?l[0]:l}function ce(l,s,c){return l.replace(s,c)}function _s(l,s,c){return l.indexOf(s,c)}function tt(l,s){return l.charCodeAt(s)|0}function Bl(l,s,c){return l.slice(s,c)}function gn(l){return l.length}function O0(l){return l.length}function Kr(l,s){return s.push(l),l}function Ey(l,s){return l.map(s).join("")}function Lg(l,s){return l.filter(function(c){return!Bn(c,s)})}var $s=1,Nl=1,B0=0,Zt=0,Ke=0,Hl="";function Qs(l,s,c,u,f,d,y,b){return{value:l,root:s,parent:c,type:u,props:f,children:d,line:$s,column:Nl,length:y,return:"",siblings:b}}function ca(l,s){return ef(Qs("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},s)}function El(l){for(;l.root;)l=ca(l.root,{children:[l]});Kr(l,l.siblings)}function zy(){return Ke}function Cy(){return Ke=Zt>0?tt(Hl,--Zt):0,Nl--,Ke===10&&(Nl=1,$s--),Ke}function ln(){return Ke=Zt<B0?tt(Hl,Zt++):0,Nl++,Ke===10&&(Nl=1,$s++),Ke}function Ba(){return tt(Hl,Zt)}function Es(){return Zt}function Ks(l,s){return Bl(Hl,l,s)}function tf(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ay(l){return $s=Nl=1,B0=gn(Hl=l),Zt=0,[]}function Ty(l){return Hl="",l}function yc(l){return k0(Ks(Zt-1,nf(l===91?l+2:l===40?l+1:l)))}function Ry(l){for(;(Ke=Ba())&&Ke<33;)ln();return tf(l)>2||tf(Ke)>3?"":" "}function My(l,s){for(;--s&&ln()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return Ks(l,Es()+(s<6&&Ba()==32&&ln()==32))}function nf(l){for(;ln();)switch(Ke){case l:return Zt;case 34:case 39:l!==34&&l!==39&&nf(Ke);break;case 40:l===41&&nf(l);break;case 92:ln();break}return Zt}function Dy(l,s){for(;ln()&&l+Ke!==57;)if(l+Ke===84&&Ba()===47)break;return"/*"+Ks(s,Zt-1)+"*"+bf(l===47?l:ln())}function ky(l){for(;!tf(Ba());)ln();return Ks(l,Zt)}function Oy(l){return Ty(zs("",null,null,null,[""],l=Ay(l),0,[0],l))}function zs(l,s,c,u,f,d,y,b,h){for(var g=0,x=0,S=y,w=0,k=0,M=0,B=1,L=1,V=1,X=0,A="",$=f,H=d,F=u,Y=A;L;)switch(M=X,X=ln()){case 40:if(M!=108&&tt(Y,S-1)==58){_s(Y+=ce(yc(X),"&","&\f"),"&\f",D0(g?b[g-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:Y+=yc(X);break;case 9:case 10:case 13:case 32:Y+=Ry(M);break;case 92:Y+=My(Es()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Kr(By(Dy(ln(),Es()),s,c,h),h);break;default:Y+="/"}break;case 123*B:b[g++]=gn(Y)*V;case 125*B:case 59:case 0:switch(X){case 0:case 125:L=0;case 59+x:V==-1&&(Y=ce(Y,/\f/g,"")),k>0&&gn(Y)-S&&Kr(k>32?Gg(Y+";",u,c,S-1,h):Gg(ce(Y," ","")+";",u,c,S-2,h),h);break;case 59:Y+=";";default:if(Kr(F=Hg(Y,s,c,g,x,f,b,A,$=[],H=[],S,d),d),X===123)if(x===0)zs(Y,s,F,F,$,d,S,b,H);else switch(w===99&&tt(Y,3)===110?100:w){case 100:case 108:case 109:case 115:zs(l,F,F,u&&Kr(Hg(l,F,F,0,0,f,b,A,f,$=[],S,H),H),f,H,S,b,u?$:H);break;default:zs(Y,F,F,F,[""],H,0,b,H)}}g=x=k=0,B=V=1,A=Y="",S=y;break;case 58:S=1+gn(Y),k=M;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&Cy()==125)continue}switch(Y+=bf(X),X*B){case 38:V=x>0?1:(Y+="\f",-1);break;case 44:b[g++]=(gn(Y)-1)*V,V=1;break;case 64:Ba()===45&&(Y+=yc(ln())),w=Ba(),x=S=gn(A=Y+=ky(Es())),X++;break;case 45:M===45&&gn(Y)==2&&(B=0)}}return d}function Hg(l,s,c,u,f,d,y,b,h,g,x,S){for(var w=f-1,k=f===0?d:[""],M=O0(k),B=0,L=0,V=0;B<u;++B)for(var X=0,A=Bl(l,w+1,w=D0(L=y[B])),$=l;X<M;++X)($=k0(L>0?k[X]+" "+A:ce(A,/&\f/g,k[X])))&&(h[V++]=$);return Qs(l,s,c,f===0?qs:b,h,g,x,S)}function By(l,s,c,u){return Qs(l,s,c,R0,bf(zy()),Bl(l,2,-2),0,u)}function Gg(l,s,c,u,f){return Qs(l,s,c,pf,Bl(l,0,u),Bl(l,u+1,-1),u,f)}function N0(l,s,c){switch(_y(l,s)){case 5103:return we+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+l+l;case 4789:return Zr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return we+l+Zr+l+ke+l+l;case 5936:switch(tt(l,s+11)){case 114:return we+l+ke+ce(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return we+l+ke+ce(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return we+l+ke+ce(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return we+l+ke+l+l;case 6165:return we+l+ke+"flex-"+l+l;case 5187:return we+l+ce(l,/(\w+).+(:[^]+)/,we+"box-$1$2"+ke+"flex-$1$2")+l;case 5443:return we+l+ke+"flex-item-"+ce(l,/flex-|-self/g,"")+(Bn(l,/flex-|baseline/)?"":ke+"grid-row-"+ce(l,/flex-|-self/g,""))+l;case 4675:return we+l+ke+"flex-line-pack"+ce(l,/align-content|flex-|-self/g,"")+l;case 5548:return we+l+ke+ce(l,"shrink","negative")+l;case 5292:return we+l+ke+ce(l,"basis","preferred-size")+l;case 6060:return we+"box-"+ce(l,"-grow","")+we+l+ke+ce(l,"grow","positive")+l;case 4554:return we+ce(l,/([^-])(transform)/g,"$1"+we+"$2")+l;case 6187:return ce(ce(ce(l,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),l,"")+l;case 5495:case 3959:return ce(l,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ce(ce(l,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+l+l;case 4200:if(!Bn(l,/flex-|baseline/))return ke+"grid-column-align"+Bl(l,s)+l;break;case 2592:case 3360:return ke+ce(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(u,f){return s=f,Bn(u.props,/grid-\w+-end/)})?~_s(l+(c=c[s].value),"span",0)?l:ke+ce(l,"-start","")+l+ke+"grid-row-span:"+(~_s(c,"span",0)?Bn(c,/\d+/):+Bn(c,/\d+/)-+Bn(l,/\d+/))+";":ke+ce(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(u){return Bn(u.props,/grid-\w+-start/)})?l:ke+ce(ce(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ce(l,/(.+)-inline(.+)/,we+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(l)-1-s>6)switch(tt(l,s+1)){case 109:if(tt(l,s+4)!==45)break;case 102:return ce(l,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Zr+(tt(l,s+3)==108?"$3":"$2-$3"))+l;case 115:return~_s(l,"stretch",0)?N0(ce(l,"stretch","fill-available"),s,c)+l:l}break;case 5152:case 5920:return ce(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,f,d,y,b,h,g){return ke+f+":"+d+g+(y?ke+f+"-span:"+(b?h:+h-+d)+g:"")+l});case 4949:if(tt(l,s+6)===121)return ce(l,":",":"+we)+l;break;case 6444:switch(tt(l,tt(l,14)===45?18:11)){case 120:return ce(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(tt(l,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+ke+"$2box$3")+l;case 100:return ce(l,":",":"+ke)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(l,"scroll-","scroll-snap-")+l}return l}function ks(l,s){for(var c="",u=0;u<l.length;u++)c+=s(l[u],u,l,s)||"";return c}function Ny(l,s,c,u){switch(l.type){case wy:if(l.children.length)break;case jy:case pf:return l.return=l.return||l.value;case R0:return"";case M0:return l.return=l.value+"{"+ks(l.children,u)+"}";case qs:if(!gn(l.value=l.props.join(",")))return""}return gn(c=ks(l.children,u))?l.return=l.value+"{"+c+"}":""}function Uy(l){var s=O0(l);return function(c,u,f,d){for(var y="",b=0;b<s;b++)y+=l[b](c,u,f,d)||"";return y}}function Ly(l){return function(s){s.root||(s=s.return)&&l(s)}}function Hy(l,s,c,u){if(l.length>-1&&!l.return)switch(l.type){case pf:l.return=N0(l.value,l.length,c);return;case M0:return ks([ca(l,{value:ce(l.value,"@","@"+we)})],u);case qs:if(l.length)return Ey(c=l.props,function(f){switch(Bn(f,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":El(ca(l,{props:[ce(f,/:(read-\w+)/,":"+Zr+"$1")]})),El(ca(l,{props:[f]})),ef(l,{props:Lg(c,u)});break;case"::placeholder":El(ca(l,{props:[ce(f,/:(plac\w+)/,":"+we+"input-$1")]})),El(ca(l,{props:[ce(f,/:(plac\w+)/,":"+Zr+"$1")]})),El(ca(l,{props:[ce(f,/:(plac\w+)/,ke+"input-$1")]})),El(ca(l,{props:[f]})),ef(l,{props:Lg(c,u)});break}return""})}}var Gy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},Ul=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",U0="active",L0="data-styled-version",Xs="6.1.19",xf=`/*!sc*/
`,Os=typeof window<"u"&&typeof document<"u",Yy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),Vy={},Zs=Object.freeze([]),Ll=Object.freeze({});function H0(l,s,c){return c===void 0&&(c=Ll),l.theme!==c.theme&&l.theme||s||c.theme}var G0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$y=/(^-|-$)/g;function Yg(l){return l.replace(qy,"-").replace($y,"")}var Qy=/(a)(d)/gi,gs=52,Vg=function(l){return String.fromCharCode(l+(l>25?39:97))};function af(l){var s,c="";for(s=Math.abs(l);s>gs;s=s/gs|0)c=Vg(s%gs)+c;return(Vg(s%gs)+c).replace(Qy,"$1-$2")}var vc,Y0=5381,Dl=function(l,s){for(var c=s.length;c;)l=33*l^s.charCodeAt(--c);return l},V0=function(l){return Dl(Y0,l)};function yf(l){return af(V0(l)>>>0)}function Ky(l){return l.displayName||l.name||"Component"}function Sc(l){return typeof l=="string"&&!0}var q0=typeof Symbol=="function"&&Symbol.for,$0=q0?Symbol.for("react.memo"):60115,Xy=q0?Symbol.for("react.forward_ref"):60112,Zy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Py={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Q0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jy=((vc={})[Xy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vc[$0]=Q0,vc);function qg(l){return("type"in(s=l)&&s.type.$$typeof)===$0?Q0:"$$typeof"in l?Jy[l.$$typeof]:Zy;var s}var Fy=Object.defineProperty,Wy=Object.getOwnPropertyNames,$g=Object.getOwnPropertySymbols,Iy=Object.getOwnPropertyDescriptor,ev=Object.getPrototypeOf,Qg=Object.prototype;function K0(l,s,c){if(typeof s!="string"){if(Qg){var u=ev(s);u&&u!==Qg&&K0(l,u,c)}var f=Wy(s);$g&&(f=f.concat($g(s)));for(var d=qg(l),y=qg(s),b=0;b<f.length;++b){var h=f[b];if(!(h in Py||c&&c[h]||y&&h in y||d&&h in d)){var g=Iy(s,h);try{Fy(l,h,g)}catch{}}}}return l}function Na(l){return typeof l=="function"}function vf(l){return typeof l=="object"&&"styledComponentId"in l}function Oa(l,s){return l&&s?"".concat(l," ").concat(s):l||s||""}function Bs(l,s){if(l.length===0)return"";for(var c=l[0],u=1;u<l.length;u++)c+=l[u];return c}function Pr(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function lf(l,s,c){if(c===void 0&&(c=!1),!c&&!Pr(l)&&!Array.isArray(l))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)l[u]=lf(l[u],s[u]);else if(Pr(s))for(var u in s)l[u]=lf(l[u],s[u]);return l}function Sf(l,s){Object.defineProperty(l,"toString",{value:s})}function Ua(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var tv=function(){function l(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return l.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},l.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,f=u.length,d=f;s>=d;)if((d<<=1)<0)throw Ua(16,"".concat(s));this.groupSizes=new Uint32Array(d),this.groupSizes.set(u),this.length=d;for(var y=f;y<d;y++)this.groupSizes[y]=0}for(var b=this.indexOfGroup(s+1),h=(y=0,c.length);y<h;y++)this.tag.insertRule(b,c[y])&&(this.groupSizes[s]++,b++)},l.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),f=u+c;this.groupSizes[s]=0;for(var d=u;d<f;d++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],f=this.indexOfGroup(s),d=f+u,y=f;y<d;y++)c+="".concat(this.tag.getRule(y)).concat(xf);return c},l}(),Cs=new Map,Ns=new Map,As=1,ps=function(l){if(Cs.has(l))return Cs.get(l);for(;Ns.has(As);)As++;var s=As++;return Cs.set(l,s),Ns.set(s,l),s},nv=function(l,s){As=s+1,Cs.set(l,s),Ns.set(s,l)},av="style[".concat(Ul,"][").concat(L0,'="').concat(Xs,'"]'),lv=new RegExp("^".concat(Ul,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rv=function(l,s,c){for(var u,f=c.split(","),d=0,y=f.length;d<y;d++)(u=f[d])&&l.registerName(s,u)},iv=function(l,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(xf),f=[],d=0,y=u.length;d<y;d++){var b=u[d].trim();if(b){var h=b.match(lv);if(h){var g=0|parseInt(h[1],10),x=h[2];g!==0&&(nv(x,g),rv(l,x,h[3]),l.getTag().insertRules(g,f)),f.length=0}else f.push(b)}}},Kg=function(l){for(var s=document.querySelectorAll(av),c=0,u=s.length;c<u;c++){var f=s[c];f&&f.getAttribute(Ul)!==U0&&(iv(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function sv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var X0=function(l){var s=document.head,c=l||s,u=document.createElement("style"),f=function(b){var h=Array.from(b.querySelectorAll("style[".concat(Ul,"]")));return h[h.length-1]}(c),d=f!==void 0?f.nextSibling:null;u.setAttribute(Ul,U0),u.setAttribute(L0,Xs);var y=sv();return y&&u.setAttribute("nonce",y),c.insertBefore(u,d),u},ov=function(){function l(s){this.element=X0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,f=0,d=u.length;f<d;f++){var y=u[f];if(y.ownerNode===c)return y}throw Ua(17)}(this.element),this.length=0}return l.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},l.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},l}(),uv=function(){function l(s){this.element=X0(s),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},l.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},l}(),cv=function(){function l(s){this.rules=[],this.length=0}return l.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},l.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},l.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},l}(),Xg=Os,fv={isServer:!Os,useCSSOMInjection:!Yy},Us=function(){function l(s,c,u){s===void 0&&(s=Ll),c===void 0&&(c={});var f=this;this.options=nt(nt({},fv),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&Os&&Xg&&(Xg=!1,Kg(this)),Sf(this,function(){return function(d){for(var y=d.getTag(),b=y.length,h="",g=function(S){var w=function(V){return Ns.get(V)}(S);if(w===void 0)return"continue";var k=d.names.get(w),M=y.getGroup(S);if(k===void 0||!k.size||M.length===0)return"continue";var B="".concat(Ul,".g").concat(S,'[id="').concat(w,'"]'),L="";k!==void 0&&k.forEach(function(V){V.length>0&&(L+="".concat(V,","))}),h+="".concat(M).concat(B,'{content:"').concat(L,'"}').concat(xf)},x=0;x<b;x++)g(x);return h}(f)})}return l.registerId=function(s){return ps(s)},l.prototype.rehydrate=function(){!this.server&&Os&&Kg(this)},l.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new l(nt(nt({},this.options),s),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var u=c.useCSSOMInjection,f=c.target;return c.isServer?new cv(f):u?new ov(f):new uv(f)}(this.options),new tv(s)));var s},l.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},l.prototype.registerName=function(s,c){if(ps(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},l.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(ps(s),u)},l.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},l.prototype.clearRules=function(s){this.getTag().clearGroup(ps(s)),this.clearNames(s)},l.prototype.clearTag=function(){this.tag=void 0},l}(),dv=/&/g,hv=/^\s*\/\/.*$/gm;function Z0(l,s){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Z0(c.children,s)),c})}function mv(l){var s,c,u,f=Ll,d=f.options,y=d===void 0?Ll:d,b=f.plugins,h=b===void 0?Zs:b,g=function(w,k,M){return M.startsWith(c)&&M.endsWith(c)&&M.replaceAll(c,"").length>0?".".concat(s):w},x=h.slice();x.push(function(w){w.type===qs&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(dv,c).replace(u,g))}),y.prefix&&x.push(Hy),x.push(Ny);var S=function(w,k,M,B){k===void 0&&(k=""),M===void 0&&(M=""),B===void 0&&(B="&"),s=B,c=k,u=new RegExp("\\".concat(c,"\\b"),"g");var L=w.replace(hv,""),V=Oy(M||k?"".concat(M," ").concat(k," { ").concat(L," }"):L);y.namespace&&(V=Z0(V,y.namespace));var X=[];return ks(V,Uy(x.concat(Ly(function(A){return X.push(A)})))),X};return S.hash=h.length?h.reduce(function(w,k){return k.name||Ua(15),Dl(w,k.name)},Y0).toString():"",S}var gv=new Us,rf=mv(),P0=_e.createContext({shouldForwardProp:void 0,styleSheet:gv,stylis:rf});P0.Consumer;_e.createContext(void 0);function sf(){return C.useContext(P0)}var J0=function(){function l(s,c){var u=this;this.inject=function(f,d){d===void 0&&(d=rf);var y=u.name+d.hash;f.hasNameForId(u.id,y)||f.insertRules(u.id,y,d(u.rules,y,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,Sf(this,function(){throw Ua(12,String(u.name))})}return l.prototype.getName=function(s){return s===void 0&&(s=rf),this.name+s.hash},l}(),pv=function(l){return l>="A"&&l<="Z"};function Zg(l){for(var s="",c=0;c<l.length;c++){var u=l[c];if(c===1&&u==="-"&&l[0]==="-")return l;pv(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var F0=function(l){return l==null||l===!1||l===""},W0=function(l){var s,c,u=[];for(var f in l){var d=l[f];l.hasOwnProperty(f)&&!F0(d)&&(Array.isArray(d)&&d.isCss||Na(d)?u.push("".concat(Zg(f),":"),d,";"):Pr(d)?u.push.apply(u,Ol(Ol(["".concat(f," {")],W0(d),!1),["}"],!1)):u.push("".concat(Zg(f),": ").concat((s=f,(c=d)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in Gy||s.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function fa(l,s,c,u){if(F0(l))return[];if(vf(l))return[".".concat(l.styledComponentId)];if(Na(l)){if(!Na(d=l)||d.prototype&&d.prototype.isReactComponent||!s)return[l];var f=l(s);return fa(f,s,c,u)}var d;return l instanceof J0?c?(l.inject(c,u),[l.getName(u)]):[l]:Pr(l)?W0(l):Array.isArray(l)?Array.prototype.concat.apply(Zs,l.map(function(y){return fa(y,s,c,u)})):[l.toString()]}function I0(l){for(var s=0;s<l.length;s+=1){var c=l[s];if(Na(c)&&!vf(c))return!1}return!0}var bv=V0(Xs),xv=function(){function l(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&I0(s),this.componentId=c,this.baseHash=Dl(bv,c),this.baseStyle=u,Us.registerId(c)}return l.prototype.generateAndInjectStyles=function(s,c,u){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))f=Oa(f,this.staticRulesId);else{var d=Bs(fa(this.rules,s,c,u)),y=af(Dl(this.baseHash,d)>>>0);if(!c.hasNameForId(this.componentId,y)){var b=u(d,".".concat(y),void 0,this.componentId);c.insertRules(this.componentId,y,b)}f=Oa(f,y),this.staticRulesId=y}else{for(var h=Dl(this.baseHash,u.hash),g="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")g+=S;else if(S){var w=Bs(fa(S,s,c,u));h=Dl(h,w+x),g+=w}}if(g){var k=af(h>>>0);c.hasNameForId(this.componentId,k)||c.insertRules(this.componentId,k,u(g,".".concat(k),void 0,this.componentId)),f=Oa(f,k)}}return f},l}(),Jr=_e.createContext(void 0);Jr.Consumer;function yv(l){var s=_e.useContext(Jr),c=C.useMemo(function(){return function(u,f){if(!u)throw Ua(14);if(Na(u)){var d=u(f);return d}if(Array.isArray(u)||typeof u!="object")throw Ua(8);return f?nt(nt({},f),u):u}(l.theme,s)},[l.theme,s]);return l.children?_e.createElement(Jr.Provider,{value:c},l.children):null}var jc={};function vv(l,s,c){var u=vf(l),f=l,d=!Sc(l),y=s.attrs,b=y===void 0?Zs:y,h=s.componentId,g=h===void 0?function($,H){var F=typeof $!="string"?"sc":Yg($);jc[F]=(jc[F]||0)+1;var Y="".concat(F,"-").concat(yf(Xs+F+jc[F]));return H?"".concat(H,"-").concat(Y):Y}(s.displayName,s.parentComponentId):h,x=s.displayName,S=x===void 0?function($){return Sc($)?"styled.".concat($):"Styled(".concat(Ky($),")")}(l):x,w=s.displayName&&s.componentId?"".concat(Yg(s.displayName),"-").concat(s.componentId):s.componentId||g,k=u&&f.attrs?f.attrs.concat(b).filter(Boolean):b,M=s.shouldForwardProp;if(u&&f.shouldForwardProp){var B=f.shouldForwardProp;if(s.shouldForwardProp){var L=s.shouldForwardProp;M=function($,H){return B($,H)&&L($,H)}}else M=B}var V=new xv(c,w,u?f.componentStyle:void 0);function X($,H){return function(F,Y,se){var K=F.attrs,be=F.componentStyle,Se=F.defaultProps,Ue=F.foldedComponentIds,Ut=F.styledComponentId,at=F.target,Ce=_e.useContext(Jr),N=sf(),Z=F.shouldForwardProp||N.shouldForwardProp,ne=H0(Y,Ce,Se)||Ll,ue=function(he,le,Pe){for(var je,st=nt(nt({},le),{className:void 0,theme:Pe}),ma=0;ma<he.length;ma+=1){var bn=Na(je=he[ma])?je(st):je;for(var Lt in bn)st[Lt]=Lt==="className"?Oa(st[Lt],bn[Lt]):Lt==="style"?nt(nt({},st[Lt]),bn[Lt]):bn[Lt]}return le.className&&(st.className=Oa(st.className,le.className)),st}(K,Y,ne),_=ue.as||at,Q={};for(var P in ue)ue[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&ue.theme===ne||(P==="forwardedAs"?Q.as=ue.forwardedAs:Z&&!Z(P,_)||(Q[P]=ue[P]));var J=function(he,le){var Pe=sf(),je=he.generateAndInjectStyles(le,Pe.styleSheet,Pe.stylis);return je}(be,ue),ee=Oa(Ue,Ut);return J&&(ee+=" "+J),ue.className&&(ee+=" "+ue.className),Q[Sc(_)&&!G0.has(_)?"class":"className"]=ee,se&&(Q.ref=se),C.createElement(_,Q)}(A,$,H)}X.displayName=S;var A=_e.forwardRef(X);return A.attrs=k,A.componentStyle=V,A.displayName=S,A.shouldForwardProp=M,A.foldedComponentIds=u?Oa(f.foldedComponentIds,f.styledComponentId):"",A.styledComponentId=w,A.target=u?f.target:l,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=u?function(H){for(var F=[],Y=1;Y<arguments.length;Y++)F[Y-1]=arguments[Y];for(var se=0,K=F;se<K.length;se++)lf(H,K[se],!0);return H}({},f.defaultProps,$):$}}),Sf(A,function(){return".".concat(A.styledComponentId)}),d&&K0(A,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Pg(l,s){for(var c=[l[0]],u=0,f=s.length;u<f;u+=1)c.push(s[u],l[u+1]);return c}var Jg=function(l){return Object.assign(l,{isCss:!0})};function Fr(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(Na(l)||Pr(l))return Jg(fa(Pg(Zs,Ol([l],s,!0))));var u=l;return s.length===0&&u.length===1&&typeof u[0]=="string"?fa(u):Jg(fa(Pg(u,s)))}function of(l,s,c){if(c===void 0&&(c=Ll),!s)throw Ua(1,s);var u=function(f){for(var d=[],y=1;y<arguments.length;y++)d[y-1]=arguments[y];return l(s,c,Fr.apply(void 0,Ol([f],d,!1)))};return u.attrs=function(f){return of(l,s,nt(nt({},c),{attrs:Array.prototype.concat(c.attrs,f).filter(Boolean)}))},u.withConfig=function(f){return of(l,s,nt(nt({},c),f))},u}var ep=function(l){return of(vv,l)},v=ep;G0.forEach(function(l){v[l]=ep(l)});var Sv=function(){function l(s,c){this.rules=s,this.componentId=c,this.isStatic=I0(s),Us.registerId(this.componentId+1)}return l.prototype.createStyles=function(s,c,u,f){var d=f(Bs(fa(this.rules,c,u,f)),""),y=this.componentId+s;u.insertRules(y,y,d)},l.prototype.removeStyles=function(s,c){c.clearRules(this.componentId+s)},l.prototype.renderStyles=function(s,c,u,f){s>2&&Us.registerId(this.componentId+s),this.removeStyles(s,u),this.createStyles(s,c,u,f)},l}();function jv(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];var u=Fr.apply(void 0,Ol([l],s,!1)),f="sc-global-".concat(yf(JSON.stringify(u))),d=new Sv(u,f),y=function(h){var g=sf(),x=_e.useContext(Jr),S=_e.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&b(S,h,g.styleSheet,x,g.stylis),_e.useLayoutEffect(function(){if(!g.styleSheet.server)return b(S,h,g.styleSheet,x,g.stylis),function(){return d.removeStyles(S,g.styleSheet)}},[S,h,g.styleSheet,x,g.stylis]),null};function b(h,g,x,S,w){if(d.isStatic)d.renderStyles(h,Vy,x,w);else{var k=nt(nt({},g),{theme:H0(g,S,y.defaultProps)});d.renderStyles(h,k,x,w)}}return _e.memo(y)}function jf(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];var u=Bs(Fr.apply(void 0,Ol([l],s,!1))),f=yf(u);return new J0(f,u)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fg="popstate";function wv(l={}){function s(u,f){let{pathname:d,search:y,hash:b}=u.location;return uf("",{pathname:d,search:y,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(u,f){return typeof f=="string"?f:Wr(f)}return Ev(s,c,null,l)}function Ne(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Pt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function _v(){return Math.random().toString(36).substring(2,10)}function Wg(l,s){return{usr:l.state,key:l.key,idx:s}}function uf(l,s,c=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?Gl(s):s,state:c,key:s&&s.key||u||_v()}}function Wr({pathname:l="/",search:s="",hash:c=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Gl(l){let s={};if(l){let c=l.indexOf("#");c>=0&&(s.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(s.search=l.substring(u),l=l.substring(0,u)),l&&(s.pathname=l)}return s}function Ev(l,s,c,u={}){let{window:f=document.defaultView,v5Compat:d=!1}=u,y=f.history,b="POP",h=null,g=x();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function x(){return(y.state||{idx:null}).idx}function S(){b="POP";let L=x(),V=L==null?null:L-g;g=L,h&&h({action:b,location:B.location,delta:V})}function w(L,V){b="PUSH";let X=uf(B.location,L,V);g=x()+1;let A=Wg(X,g),$=B.createHref(X);try{y.pushState(A,"",$)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;f.location.assign($)}d&&h&&h({action:b,location:B.location,delta:1})}function k(L,V){b="REPLACE";let X=uf(B.location,L,V);g=x();let A=Wg(X,g),$=B.createHref(X);y.replaceState(A,"",$),d&&h&&h({action:b,location:B.location,delta:0})}function M(L){return zv(L)}let B={get action(){return b},get location(){return l(f,y)},listen(L){if(h)throw new Error("A history only accepts one active listener");return f.addEventListener(Fg,S),h=L,()=>{f.removeEventListener(Fg,S),h=null}},createHref(L){return s(f,L)},createURL:M,encodeLocation(L){let V=M(L);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:w,replace:k,go(L){return y.go(L)}};return B}function zv(l,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(c,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Wr(l);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function tp(l,s,c="/"){return Cv(l,s,c,!1)}function Cv(l,s,c,u){let f=typeof s=="string"?Gl(s):s,d=Ln(f.pathname||"/",c);if(d==null)return null;let y=np(l);Av(y);let b=null;for(let h=0;b==null&&h<y.length;++h){let g=Hv(d);b=Uv(y[h],g,u)}return b}function np(l,s=[],c=[],u=""){let f=(d,y,b)=>{let h={relativePath:b===void 0?d.path||"":b,caseSensitive:d.caseSensitive===!0,childrenIndex:y,route:d};h.relativePath.startsWith("/")&&(Ne(h.relativePath.startsWith(u),`Absolute route path "${h.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(u.length));let g=Nn([u,h.relativePath]),x=c.concat(h);d.children&&d.children.length>0&&(Ne(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),np(d.children,s,x,g)),!(d.path==null&&!d.index)&&s.push({path:g,score:Bv(g,d.index),routesMeta:x})};return l.forEach((d,y)=>{if(d.path===""||!d.path?.includes("?"))f(d,y);else for(let b of ap(d.path))f(d,y,b)}),s}function ap(l){let s=l.split("/");if(s.length===0)return[];let[c,...u]=s,f=c.endsWith("?"),d=c.replace(/\?$/,"");if(u.length===0)return f?[d,""]:[d];let y=ap(u.join("/")),b=[];return b.push(...y.map(h=>h===""?d:[d,h].join("/"))),f&&b.push(...y),b.map(h=>l.startsWith("/")&&h===""?"/":h)}function Av(l){l.sort((s,c)=>s.score!==c.score?c.score-s.score:Nv(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Tv=/^:[\w-]+$/,Rv=3,Mv=2,Dv=1,kv=10,Ov=-2,Ig=l=>l==="*";function Bv(l,s){let c=l.split("/"),u=c.length;return c.some(Ig)&&(u+=Ov),s&&(u+=Mv),c.filter(f=>!Ig(f)).reduce((f,d)=>f+(Tv.test(d)?Rv:d===""?Dv:kv),u)}function Nv(l,s){return l.length===s.length&&l.slice(0,-1).every((u,f)=>u===s[f])?l[l.length-1]-s[s.length-1]:0}function Uv(l,s,c=!1){let{routesMeta:u}=l,f={},d="/",y=[];for(let b=0;b<u.length;++b){let h=u[b],g=b===u.length-1,x=d==="/"?s:s.slice(d.length)||"/",S=Ls({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},x),w=h.route;if(!S&&g&&c&&!u[u.length-1].route.index&&(S=Ls({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!S)return null;Object.assign(f,S.params),y.push({params:f,pathname:Nn([d,S.pathname]),pathnameBase:qv(Nn([d,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(d=Nn([d,S.pathnameBase]))}return y}function Ls(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=Lv(l.path,l.caseSensitive,l.end),f=s.match(c);if(!f)return null;let d=f[0],y=d.replace(/(.)\/+$/,"$1"),b=f.slice(1);return{params:u.reduce((g,{paramName:x,isOptional:S},w)=>{if(x==="*"){let M=b[w]||"";y=d.slice(0,d.length-M.length).replace(/(.)\/+$/,"$1")}const k=b[w];return S&&!k?g[x]=void 0:g[x]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:y,pattern:l}}function Lv(l,s=!1,c=!0){Pt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,h)=>(u.push({paramName:b,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(u.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),u]}function Hv(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Pt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function Ln(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}function Gv(l,s="/"){let{pathname:c,search:u="",hash:f=""}=typeof l=="string"?Gl(l):l;return{pathname:c?c.startsWith("/")?c:Yv(c,s):s,search:$v(u),hash:Qv(f)}}function Yv(l,s){let c=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function wc(l,s,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vv(l){return l.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function wf(l){let s=Vv(l);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function _f(l,s,c,u=!1){let f;typeof l=="string"?f=Gl(l):(f={...l},Ne(!f.pathname||!f.pathname.includes("?"),wc("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),wc("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),wc("#","search","hash",f)));let d=l===""||f.pathname==="",y=d?"/":f.pathname,b;if(y==null)b=c;else{let S=s.length-1;if(!u&&y.startsWith("..")){let w=y.split("/");for(;w[0]==="..";)w.shift(),S-=1;f.pathname=w.join("/")}b=S>=0?s[S]:"/"}let h=Gv(f,b),g=y&&y!=="/"&&y.endsWith("/"),x=(d||y===".")&&c.endsWith("/");return!h.pathname.endsWith("/")&&(g||x)&&(h.pathname+="/"),h}var Nn=l=>l.join("/").replace(/\/\/+/g,"/"),qv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),$v=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Qv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Kv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var lp=["POST","PUT","PATCH","DELETE"];new Set(lp);var Xv=["GET",...lp];new Set(Xv);var Yl=C.createContext(null);Yl.displayName="DataRouter";var Ps=C.createContext(null);Ps.displayName="DataRouterState";C.createContext(!1);var rp=C.createContext({isTransitioning:!1});rp.displayName="ViewTransition";var Zv=C.createContext(new Map);Zv.displayName="Fetchers";var Pv=C.createContext(null);Pv.displayName="Await";var rn=C.createContext(null);rn.displayName="Navigation";var Ir=C.createContext(null);Ir.displayName="Location";var pn=C.createContext({outlet:null,matches:[],isDataRoute:!1});pn.displayName="Route";var Ef=C.createContext(null);Ef.displayName="RouteError";function Jv(l,{relative:s}={}){Ne(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=C.useContext(rn),{hash:f,pathname:d,search:y}=ei(l,{relative:s}),b=d;return c!=="/"&&(b=d==="/"?c:Nn([c,d])),u.createHref({pathname:b,search:y,hash:f})}function Vl(){return C.useContext(Ir)!=null}function sn(){return Ne(Vl(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Ir).location}var ip="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sp(l){C.useContext(rn).static||C.useLayoutEffect(l)}function zf(){let{isDataRoute:l}=C.useContext(pn);return l?u2():Fv()}function Fv(){Ne(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let l=C.useContext(Yl),{basename:s,navigator:c}=C.useContext(rn),{matches:u}=C.useContext(pn),{pathname:f}=sn(),d=JSON.stringify(wf(u)),y=C.useRef(!1);return sp(()=>{y.current=!0}),C.useCallback((h,g={})=>{if(Pt(y.current,ip),!y.current)return;if(typeof h=="number"){c.go(h);return}let x=_f(h,JSON.parse(d),f,g.relative==="path");l==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:Nn([s,x.pathname])),(g.replace?c.replace:c.push)(x,g.state,g)},[s,c,d,f,l])}C.createContext(null);function ei(l,{relative:s}={}){let{matches:c}=C.useContext(pn),{pathname:u}=sn(),f=JSON.stringify(wf(c));return C.useMemo(()=>_f(l,JSON.parse(f),u,s==="path"),[l,f,u,s])}function Wv(l,s){return op(l,s)}function op(l,s,c,u){Ne(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=C.useContext(rn),{matches:d}=C.useContext(pn),y=d[d.length-1],b=y?y.params:{},h=y?y.pathname:"/",g=y?y.pathnameBase:"/",x=y&&y.route;{let V=x&&x.path||"";up(h,!x||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let S=sn(),w;if(s){let V=typeof s=="string"?Gl(s):s;Ne(g==="/"||V.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${V.pathname}" was given in the \`location\` prop.`),w=V}else w=S;let k=w.pathname||"/",M=k;if(g!=="/"){let V=g.replace(/^\//,"").split("/");M="/"+k.replace(/^\//,"").split("/").slice(V.length).join("/")}let B=tp(l,{pathname:M});Pt(x||B!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Pt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=a2(B&&B.map(V=>Object.assign({},V,{params:Object.assign({},b,V.params),pathname:Nn([g,f.encodeLocation?f.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?g:Nn([g,f.encodeLocation?f.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),d,c,u);return s&&L?C.createElement(Ir.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},L):L}function Iv(){let l=o2(),s=Kv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},d={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",l),y=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:d},"ErrorBoundary")," or"," ",C.createElement("code",{style:d},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},s),c?C.createElement("pre",{style:f},c):null,y)}var e2=C.createElement(Iv,null),t2=class extends C.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){console.error("React Router caught the following error during render",l,s)}render(){return this.state.error!==void 0?C.createElement(pn.Provider,{value:this.props.routeContext},C.createElement(Ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function n2({routeContext:l,match:s,children:c}){let u=C.useContext(Yl);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(pn.Provider,{value:l},c)}function a2(l,s=[],c=null,u=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let f=l,d=c?.errors;if(d!=null){let h=f.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);Ne(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,h+1))}let y=!1,b=-1;if(c)for(let h=0;h<f.length;h++){let g=f[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(b=h),g.route.id){let{loaderData:x,errors:S}=c,w=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){y=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((h,g,x)=>{let S,w=!1,k=null,M=null;c&&(S=d&&g.route.id?d[g.route.id]:void 0,k=g.route.errorElement||e2,y&&(b<0&&x===0?(up("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,M=null):b===x&&(w=!0,M=g.route.hydrateFallbackElement||null)));let B=s.concat(f.slice(0,x+1)),L=()=>{let V;return S?V=k:w?V=M:g.route.Component?V=C.createElement(g.route.Component,null):g.route.element?V=g.route.element:V=h,C.createElement(n2,{match:g,routeContext:{outlet:h,matches:B,isDataRoute:c!=null},children:V})};return c&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?C.createElement(t2,{location:c.location,revalidation:c.revalidation,component:k,error:S,children:L(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):L()},null)}function Cf(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l2(l){let s=C.useContext(Yl);return Ne(s,Cf(l)),s}function r2(l){let s=C.useContext(Ps);return Ne(s,Cf(l)),s}function i2(l){let s=C.useContext(pn);return Ne(s,Cf(l)),s}function Af(l){let s=i2(l),c=s.matches[s.matches.length-1];return Ne(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function s2(){return Af("useRouteId")}function o2(){let l=C.useContext(Ef),s=r2("useRouteError"),c=Af("useRouteError");return l!==void 0?l:s.errors?.[c]}function u2(){let{router:l}=l2("useNavigate"),s=Af("useNavigate"),c=C.useRef(!1);return sp(()=>{c.current=!0}),C.useCallback(async(f,d={})=>{Pt(c.current,ip),c.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:s,...d}))},[l,s])}var e0={};function up(l,s,c){!s&&!e0[l]&&(e0[l]=!0,Pt(!1,c))}C.memo(c2);function c2({routes:l,future:s,state:c}){return op(l,void 0,c,s)}function Ts({to:l,replace:s,state:c,relative:u}){Ne(Vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=C.useContext(rn);Pt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=C.useContext(pn),{pathname:y}=sn(),b=zf(),h=_f(l,wf(d),y,u==="path"),g=JSON.stringify(h);return C.useEffect(()=>{b(JSON.parse(g),{replace:s,state:c,relative:u})},[b,g,u,s,c]),null}function On(l){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function f2({basename:l="/",children:s=null,location:c,navigationType:u="POP",navigator:f,static:d=!1}){Ne(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),b=C.useMemo(()=>({basename:y,navigator:f,static:d,future:{}}),[y,f,d]);typeof c=="string"&&(c=Gl(c));let{pathname:h="/",search:g="",hash:x="",state:S=null,key:w="default"}=c,k=C.useMemo(()=>{let M=Ln(h,y);return M==null?null:{location:{pathname:M,search:g,hash:x,state:S,key:w},navigationType:u}},[y,h,g,x,S,w,u]);return Pt(k!=null,`<Router basename="${y}"> is not able to match the URL "${h}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:C.createElement(rn.Provider,{value:b},C.createElement(Ir.Provider,{children:s,value:k}))}function d2({children:l,location:s}){return Wv(cf(l),s)}function cf(l,s=[]){let c=[];return C.Children.forEach(l,(u,f)=>{if(!C.isValidElement(u))return;let d=[...s,f];if(u.type===C.Fragment){c.push.apply(c,cf(u.props.children,d));return}Ne(u.type===On,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||d.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=cf(u.props.children,d)),c.push(y)}),c}var Rs="get",Ms="application/x-www-form-urlencoded";function Js(l){return l!=null&&typeof l.tagName=="string"}function h2(l){return Js(l)&&l.tagName.toLowerCase()==="button"}function m2(l){return Js(l)&&l.tagName.toLowerCase()==="form"}function g2(l){return Js(l)&&l.tagName.toLowerCase()==="input"}function p2(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function b2(l,s){return l.button===0&&(!s||s==="_self")&&!p2(l)}function ff(l=""){return new URLSearchParams(typeof l=="string"||Array.isArray(l)||l instanceof URLSearchParams?l:Object.keys(l).reduce((s,c)=>{let u=l[c];return s.concat(Array.isArray(u)?u.map(f=>[c,f]):[[c,u]])},[]))}function x2(l,s){let c=ff(l);return s&&s.forEach((u,f)=>{c.has(f)||s.getAll(f).forEach(d=>{c.append(f,d)})}),c}var bs=null;function y2(){if(bs===null)try{new FormData(document.createElement("form"),0),bs=!1}catch{bs=!0}return bs}var v2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _c(l){return l!=null&&!v2.has(l)?(Pt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ms}"`),null):l}function S2(l,s){let c,u,f,d,y;if(m2(l)){let b=l.getAttribute("action");u=b?Ln(b,s):null,c=l.getAttribute("method")||Rs,f=_c(l.getAttribute("enctype"))||Ms,d=new FormData(l)}else if(h2(l)||g2(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=l.getAttribute("formaction")||b.getAttribute("action");if(u=h?Ln(h,s):null,c=l.getAttribute("formmethod")||b.getAttribute("method")||Rs,f=_c(l.getAttribute("formenctype"))||_c(b.getAttribute("enctype"))||Ms,d=new FormData(b,l),!y2()){let{name:g,type:x,value:S}=l;if(x==="image"){let w=g?`${g}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else g&&d.append(g,S)}}else{if(Js(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Rs,u=null,f=Ms,y=l}return d&&f==="text/plain"&&(y=d,d=void 0),{action:u,method:c.toLowerCase(),encType:f,formData:d,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Tf(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function j2(l,s,c){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname=`_root.${c}`:s&&Ln(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function w2(l,s){if(l.id in s)return s[l.id];try{let c=await import(l.module);return s[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _2(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function E2(l,s,c){let u=await Promise.all(l.map(async f=>{let d=s.routes[f.route.id];if(d){let y=await w2(d,c);return y.links?y.links():[]}return[]}));return T2(u.flat(1).filter(_2).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function t0(l,s,c,u,f,d){let y=(h,g)=>c[g]?h.route.id!==c[g].route.id:!0,b=(h,g)=>c[g].pathname!==h.pathname||c[g].route.path?.endsWith("*")&&c[g].params["*"]!==h.params["*"];return d==="assets"?s.filter((h,g)=>y(h,g)||b(h,g)):d==="data"?s.filter((h,g)=>{let x=u.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(y(h,g)||b(h,g))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function z2(l,s,{includeHydrateFallback:c}={}){return C2(l.map(u=>{let f=s.routes[u.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function C2(l){return[...new Set(l)]}function A2(l){let s={},c=Object.keys(l).sort();for(let u of c)s[u]=l[u];return s}function T2(l,s){let c=new Set;return new Set(s),l.reduce((u,f)=>{let d=JSON.stringify(A2(f));return c.has(d)||(c.add(d),u.push({key:d,link:f})),u},[])}function cp(){let l=C.useContext(Yl);return Tf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function R2(){let l=C.useContext(Ps);return Tf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Rf=C.createContext(void 0);Rf.displayName="FrameworkContext";function fp(){let l=C.useContext(Rf);return Tf(l,"You must render this element inside a <HydratedRouter> element"),l}function M2(l,s){let c=C.useContext(Rf),[u,f]=C.useState(!1),[d,y]=C.useState(!1),{onFocus:b,onBlur:h,onMouseEnter:g,onMouseLeave:x,onTouchStart:S}=s,w=C.useRef(null);C.useEffect(()=>{if(l==="render"&&y(!0),l==="viewport"){let B=V=>{V.forEach(X=>{y(X.isIntersecting)})},L=new IntersectionObserver(B,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[l]),C.useEffect(()=>{if(u){let B=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(B)}}},[u]);let k=()=>{f(!0)},M=()=>{f(!1),y(!1)};return c?l!=="intent"?[d,w,{}]:[d,w,{onFocus:Vr(b,k),onBlur:Vr(h,M),onMouseEnter:Vr(g,k),onMouseLeave:Vr(x,M),onTouchStart:Vr(S,k)}]:[!1,w,{}]}function Vr(l,s){return c=>{l&&l(c),c.defaultPrevented||s(c)}}function D2({page:l,...s}){let{router:c}=cp(),u=C.useMemo(()=>tp(c.routes,l,c.basename),[c.routes,l,c.basename]);return u?C.createElement(O2,{page:l,matches:u,...s}):null}function k2(l){let{manifest:s,routeModules:c}=fp(),[u,f]=C.useState([]);return C.useEffect(()=>{let d=!1;return E2(l,s,c).then(y=>{d||f(y)}),()=>{d=!0}},[l,s,c]),u}function O2({page:l,matches:s,...c}){let u=sn(),{manifest:f,routeModules:d}=fp(),{basename:y}=cp(),{loaderData:b,matches:h}=R2(),g=C.useMemo(()=>t0(l,s,h,f,u,"data"),[l,s,h,f,u]),x=C.useMemo(()=>t0(l,s,h,f,u,"assets"),[l,s,h,f,u]),S=C.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let M=new Set,B=!1;if(s.forEach(V=>{let X=f.routes[V.route.id];!X||!X.hasLoader||(!g.some(A=>A.route.id===V.route.id)&&V.route.id in b&&d[V.route.id]?.shouldRevalidate||X.hasClientLoader?B=!0:M.add(V.route.id))}),M.size===0)return[];let L=j2(l,y,"data");return B&&M.size>0&&L.searchParams.set("_routes",s.filter(V=>M.has(V.route.id)).map(V=>V.route.id).join(",")),[L.pathname+L.search]},[y,b,u,f,g,s,l,d]),w=C.useMemo(()=>z2(x,f),[x,f]),k=k2(x);return C.createElement(C.Fragment,null,S.map(M=>C.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...c})),w.map(M=>C.createElement("link",{key:M,rel:"modulepreload",href:M,...c})),k.map(({key:M,link:B})=>C.createElement("link",{key:M,...B})))}function B2(...l){return s=>{l.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var dp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dp&&(window.__reactRouterVersion="7.7.1")}catch{}function N2({basename:l,children:s,window:c}){let u=C.useRef();u.current==null&&(u.current=wv({window:c,v5Compat:!0}));let f=u.current,[d,y]=C.useState({action:f.action,location:f.location}),b=C.useCallback(h=>{C.startTransition(()=>y(h))},[y]);return C.useLayoutEffect(()=>f.listen(b),[f,b]),C.createElement(f2,{basename:l,children:s,location:d.location,navigationType:d.action,navigator:f})}var hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fs=C.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:f,reloadDocument:d,replace:y,state:b,target:h,to:g,preventScrollReset:x,viewTransition:S,...w},k){let{basename:M}=C.useContext(rn),B=typeof g=="string"&&hp.test(g),L,V=!1;if(typeof g=="string"&&B&&(L=g,dp))try{let K=new URL(window.location.href),be=g.startsWith("//")?new URL(K.protocol+g):new URL(g),Se=Ln(be.pathname,M);be.origin===K.origin&&Se!=null?g=Se+be.search+be.hash:V=!0}catch{Pt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=Jv(g,{relative:f}),[A,$,H]=M2(u,w),F=G2(g,{replace:y,state:b,target:h,preventScrollReset:x,relative:f,viewTransition:S});function Y(K){s&&s(K),K.defaultPrevented||F(K)}let se=C.createElement("a",{...w,...H,href:L||X,onClick:V||d?s:Y,ref:B2(k,$),target:h,"data-discover":!B&&c==="render"?"true":void 0});return A&&!B?C.createElement(C.Fragment,null,se,C.createElement(D2,{page:X})):se});Fs.displayName="Link";var U2=C.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:f=!1,style:d,to:y,viewTransition:b,children:h,...g},x){let S=ei(y,{relative:g.relative}),w=sn(),k=C.useContext(Ps),{navigator:M,basename:B}=C.useContext(rn),L=k!=null&&Q2(S)&&b===!0,V=M.encodeLocation?M.encodeLocation(S).pathname:S.pathname,X=w.pathname,A=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;c||(X=X.toLowerCase(),A=A?A.toLowerCase():null,V=V.toLowerCase()),A&&B&&(A=Ln(A,B)||A);const $=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let H=X===V||!f&&X.startsWith(V)&&X.charAt($)==="/",F=A!=null&&(A===V||!f&&A.startsWith(V)&&A.charAt(V.length)==="/"),Y={isActive:H,isPending:F,isTransitioning:L},se=H?s:void 0,K;typeof u=="function"?K=u(Y):K=[u,H?"active":null,F?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let be=typeof d=="function"?d(Y):d;return C.createElement(Fs,{...g,"aria-current":se,className:K,ref:x,style:be,to:y,viewTransition:b},typeof h=="function"?h(Y):h)});U2.displayName="NavLink";var L2=C.forwardRef(({discover:l="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:f,state:d,method:y=Rs,action:b,onSubmit:h,relative:g,preventScrollReset:x,viewTransition:S,...w},k)=>{let M=q2(),B=$2(b,{relative:g}),L=y.toLowerCase()==="get"?"get":"post",V=typeof b=="string"&&hp.test(b),X=A=>{if(h&&h(A),A.defaultPrevented)return;A.preventDefault();let $=A.nativeEvent.submitter,H=$?.getAttribute("formmethod")||y;M($||A.currentTarget,{fetcherKey:s,method:H,navigate:c,replace:f,state:d,relative:g,preventScrollReset:x,viewTransition:S})};return C.createElement("form",{ref:k,method:L,action:B,onSubmit:u?h:X,...w,"data-discover":!V&&l==="render"?"true":void 0})});L2.displayName="Form";function H2(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mp(l){let s=C.useContext(Yl);return Ne(s,H2(l)),s}function G2(l,{target:s,replace:c,state:u,preventScrollReset:f,relative:d,viewTransition:y}={}){let b=zf(),h=sn(),g=ei(l,{relative:d});return C.useCallback(x=>{if(b2(x,s)){x.preventDefault();let S=c!==void 0?c:Wr(h)===Wr(g);b(l,{replace:S,state:u,preventScrollReset:f,relative:d,viewTransition:y})}},[h,b,g,c,u,s,l,f,d,y])}function gp(l){Pt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=C.useRef(ff(l)),c=C.useRef(!1),u=sn(),f=C.useMemo(()=>x2(u.search,c.current?null:s.current),[u.search]),d=zf(),y=C.useCallback((b,h)=>{const g=ff(typeof b=="function"?b(new URLSearchParams(f)):b);c.current=!0,d("?"+g,h)},[d,f]);return[f,y]}var Y2=0,V2=()=>`__${String(++Y2)}__`;function q2(){let{router:l}=mp("useSubmit"),{basename:s}=C.useContext(rn),c=s2();return C.useCallback(async(u,f={})=>{let{action:d,method:y,encType:b,formData:h,body:g}=S2(u,s);if(f.navigate===!1){let x=f.fetcherKey||V2();await l.fetch(x,c,f.action||d,{preventScrollReset:f.preventScrollReset,formData:h,body:g,formMethod:f.method||y,formEncType:f.encType||b,flushSync:f.flushSync})}else await l.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:h,body:g,formMethod:f.method||y,formEncType:f.encType||b,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,s,c])}function $2(l,{relative:s}={}){let{basename:c}=C.useContext(rn),u=C.useContext(pn);Ne(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),d={...ei(l||".",{relative:s})},y=sn();if(l==null){d.search=y.search;let b=new URLSearchParams(d.search),h=b.getAll("index");if(h.some(x=>x==="")){b.delete("index"),h.filter(S=>S).forEach(S=>b.append("index",S));let x=b.toString();d.search=x?`?${x}`:""}}return(!l||l===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:Nn([c,d.pathname])),Wr(d)}function Q2(l,{relative:s}={}){let c=C.useContext(rp);Ne(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=mp("useViewTransitionState"),f=ei(l,{relative:s});if(!c.isTransitioning)return!1;let d=Ln(c.currentLocation.pathname,u)||c.currentLocation.pathname,y=Ln(c.nextLocation.pathname,u)||c.nextLocation.pathname;return Ls(f.pathname,y)!=null||Ls(f.pathname,d)!=null}const K2="/assets/logo-BY-LKRi7.png",X2=v.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,Z2=v.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,P2=v.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,J2=v.img`
  height: 40px;
  width: auto;
`,F2=v.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,W2=v.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #fff;
    border-top: 1px solid #eee;
    padding: 0.75rem 1rem;
    flex-direction: column;
    align-items: stretch;
    display: ${l=>l.$open?"flex":"none"};
  }
`,Ec=v(Fs)`
  text-decoration: none;
  color: ${l=>l.$active?l.theme.colors.primary:"#333"};
  font-weight: ${l=>l.$active?"700":"600"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${l=>l.$active?`2px solid ${l.theme.colors.primary}`:"2px solid transparent"};

  &:hover {
    color: ${l=>l.theme.colors.primary};
    background: rgba(217, 36, 95, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: rgba(217, 36, 95, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`,I2=v.button`
  display: none;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
  color: #222;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  gap: 0.4rem;
  line-height: 1;

  &:hover {
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }
`;function qr(){const l=sn(),[s,c]=C.useState(!1);return i.jsx(X2,{children:i.jsxs(Z2,{children:[i.jsx(Ec,{to:"/",onClick:()=>c(!1),children:i.jsxs(P2,{children:[i.jsx(J2,{src:K2,alt:"SCKW Logo"}),i.jsx(F2,{children:"SC Konstanz-Wollmatingen e. V."})]})}),i.jsxs(I2,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>c(f=>!f),children:["Menü",i.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),i.jsxs(W2,{id:"mobile-nav",$open:s,children:[i.jsx(Ec,{to:"/sponsoring",$active:l.pathname==="/sponsoring",onClick:()=>c(!1),children:"🤝 Sponsoring"}),i.jsx(Ec,{to:"/sponsoring/club-500",$active:l.pathname==="/sponsoring/club-500",onClick:()=>c(!1),children:"⚽ CLUB 500"}),!1]})]})})}const eS=v.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,zc=v.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,tS=v.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,nS=v.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Mf(){return i.jsx(eS,{children:i.jsxs(tS,{children:[i.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",i.jsx(zc,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),i.jsxs(nS,{"aria-label":"Rechtliches",children:[i.jsx(zc,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),i.jsx(zc,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const pp="/assets/cheerleading_0-DQQGXi0R.jpg",bp="/assets/cheerleading_1-NkLBARmH.jpg",xp="/assets/cheerleading_2-CrezcZYL.jpg",yp="/assets/cheerleading_3-GN5rPHNN.jpg",vp="/assets/1-ClVWb4ei.png",Sp="/assets/10-Bwp2eIye.png",jp="/assets/11-W061sOUI.png",wp="/assets/12-TjJyzl8L.png",_p="/assets/13-ChUUCdQQ.png",Ep="/assets/14-BVhdRr98.png",zp="/assets/2-CcfgIQYe.png",Cp="/assets/3-DYiPkVd7.png",Ap="/assets/4-1upoqVoS.png",Tp="/assets/5-D0tadXAC.png",Rp="/assets/6-NJ4ELm_j.png",Mp="/assets/7-BXo4_Bcj.png",Dp="/assets/8-BbOqEnj_.png",kp="/assets/9-CIK0gi9o.png",Op="/assets/herren_0-BVVgyt1l.jpg",Bp="/assets/herren_1-B8ywOnNy.jpg",Np="/assets/herren_10-DPVQsg9B.jpg",Up="/assets/herren_11-wfWG62H3.jpg",Lp="/assets/herren_12-DEJSN2zG.jpg",Hp="/assets/herren_13-F52vdukE.jpg",Gp="/assets/herren_14-Cq9hoKfG.jpg",Yp="/assets/herren_15-aYIFGauG.jpg",Vp="/assets/herren_16-NYI2EaEN.jpg",qp="/assets/herren_17-B_52ysA2.jpg",$p="/assets/herren_18-DbwjVNKJ.jpg",Qp="/assets/herren_19-BduD_J85.png",Kp="/assets/herren_2--jFuixBF.jpg",Xp="/assets/herren_3-BPz1zlkG.jpg",Zp="/assets/herren_4-BZRrQaFr.jpg",Pp="/assets/herren_5-D-QrfY2P.jpg",Jp="/assets/herren_6-DWQvi6Am.jpg",Fp="/assets/herren_7-BXO6B8Bt.jpg",Wp="/assets/herren_8-Cg4rdr7T.jpg",Ip="/assets/herren_9-DoLnTdRG.jpg",e1="/assets/herren_club500_1-DNikBmOh.png",t1="/assets/herren_club500_2-CABnv8vs.png",n1="/assets/herren_club500_3-Cjxe_RiU.png",a1="/assets/herren_club500_4-Dgm0Z9_i.png",l1="/assets/herren_club500_5-3OeJLCAP.png",r1="/assets/herren_jubel_500club-mxBrnD8H.png",i1="/assets/IMG-team-BGcF1agj.png",s1="/assets/IMG_5349-CpvIVKhM.jpg",o1="/assets/IMG_5369-DQ4CSwdg.jpg",u1="/assets/IMG_5421-BBzniIEN.jpg",c1="/assets/IMG_5442-D2PgutWB.jpg",f1="/assets/IMG_5952-B9VW6Qie.jpg",d1="/assets/Unbenann324t-IPGo6eoQ.png",h1="/assets/image0-DDrU5aZn.jpeg",m1="/assets/image11-BNM8hTkT.jpeg",g1="/assets/image8-BUnedp9U.jpeg",aS="/assets/grafhardenberg-Di5cVggE.png",lS="/assets/horta-DydWIGV7.png",rS="/assets/logans-BgpKwKYA.png",iS="/assets/ricobet-DsVC-eZt.png",sS="/assets/rothaus-DqkKD9yW.png",oS="/assets/tasty-B2pSa1rE.png",uS="/assets/cabin-window-B83r_CDB.jpg",cS="/assets/outside-9-xz17qL.jpg",fS="/assets/shower-B75caJ-F.jpg",dS="/assets/sitting-area-D7khB3Gw.jpg",hS="/assets/toilet-BpMHYbhh.jpg",mS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":pp,"../assets/gallery/cheerleading/cheerleading_1.jpg":bp,"../assets/gallery/cheerleading/cheerleading_2.jpg":xp,"../assets/gallery/cheerleading/cheerleading_3.jpg":yp,"../assets/gallery/damen/1.png":vp,"../assets/gallery/damen/10.png":Sp,"../assets/gallery/damen/11.png":jp,"../assets/gallery/damen/12.png":wp,"../assets/gallery/damen/13.png":_p,"../assets/gallery/damen/14.png":Ep,"../assets/gallery/damen/2.png":zp,"../assets/gallery/damen/3.png":Cp,"../assets/gallery/damen/4.png":Ap,"../assets/gallery/damen/5.png":Tp,"../assets/gallery/damen/6.png":Rp,"../assets/gallery/damen/7.png":Mp,"../assets/gallery/damen/8.png":Dp,"../assets/gallery/damen/9.png":kp,"../assets/gallery/herren/herren_0.jpg":Op,"../assets/gallery/herren/herren_1.jpg":Bp,"../assets/gallery/herren/herren_10.jpg":Np,"../assets/gallery/herren/herren_11.jpg":Up,"../assets/gallery/herren/herren_12.jpg":Lp,"../assets/gallery/herren/herren_13.jpg":Hp,"../assets/gallery/herren/herren_14.jpg":Gp,"../assets/gallery/herren/herren_15.jpg":Yp,"../assets/gallery/herren/herren_16.jpg":Vp,"../assets/gallery/herren/herren_17.jpg":qp,"../assets/gallery/herren/herren_18.jpg":$p,"../assets/gallery/herren/herren_19.png":Qp,"../assets/gallery/herren/herren_2.jpg":Kp,"../assets/gallery/herren/herren_3.jpg":Xp,"../assets/gallery/herren/herren_4.jpg":Zp,"../assets/gallery/herren/herren_5.jpg":Pp,"../assets/gallery/herren/herren_6.jpg":Jp,"../assets/gallery/herren/herren_7.jpg":Fp,"../assets/gallery/herren/herren_8.jpg":Wp,"../assets/gallery/herren/herren_9.jpg":Ip,"../assets/gallery/herren/herren_club500_1.png":e1,"../assets/gallery/herren/herren_club500_2.png":t1,"../assets/gallery/herren/herren_club500_3.png":n1,"../assets/gallery/herren/herren_club500_4.png":a1,"../assets/gallery/herren/herren_club500_5.png":l1,"../assets/gallery/herren/herren_jubel_500club.png":r1,"../assets/gallery/jfv/IMG-team.png":i1,"../assets/gallery/jfv/IMG_5349.jpg":s1,"../assets/gallery/jfv/IMG_5369.jpg":o1,"../assets/gallery/jfv/IMG_5421.jpg":u1,"../assets/gallery/jfv/IMG_5442.jpg":c1,"../assets/gallery/jfv/IMG_5952.jpg":f1,"../assets/gallery/jfv/Unbenann324t.png":d1,"../assets/gallery/jfv/image0.jpeg":h1,"../assets/gallery/jfv/image11.jpeg":m1,"../assets/gallery/jfv/image8.jpeg":g1}),gS=Object.assign({"../assets/sponsors/grafhardenberg.png":aS,"../assets/sponsors/horta.png":lS,"../assets/sponsors/logans.png":rS,"../assets/sponsors/ricobet.png":iS,"../assets/sponsors/rothaus.png":sS,"../assets/sponsors/tasty.png":oS}),pS=Object.assign({"../assets/renovation/cabin-window.jpg":uS,"../assets/renovation/outside.jpg":cS,"../assets/renovation/shower.jpg":fS,"../assets/renovation/sitting-area.jpg":dS,"../assets/renovation/toilet.jpg":hS}),p1=l=>l.split("/").pop()?.toLowerCase()||"",bS=l=>{const s=l.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function xS(l){const s=[...l];for(let c=s.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1));[s[c],s[u]]=[s[u],s[c]]}return s}const yS=()=>{const l={};Object.entries(mS).forEach(([u,f])=>{const d=bS(u);l[d]||(l[d]=[]),l[d].push(f)}),Object.keys(l).forEach(u=>{l[u]=xS(l[u])});const s={},c=["jfv","cheerleading","damen","herren"];return c.forEach(u=>{l[u]&&(s[u]=l[u])}),Object.keys(l).forEach(u=>{c.includes(u.toLowerCase())||(s[u]=l[u])}),s},vS=()=>{const l={};return Object.entries(gS).forEach(([s,c])=>{const u=p1(s);l[u]=c}),l},b1=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(pS).forEach(([s,c])=>{const u=p1(s);u.includes("sitting")?l.kabinen.push({src:c,alt:"Sitzbereich in den Kabinen"}):u.includes("outside")||u.includes("cabin-window")?u.includes("outside")?l.fassade.push({src:c,alt:"Außenfassade des Fürstenberg"}):u.includes("cabin-window")&&l.fassade.push({src:c,alt:"Fenster in den Kabinen"}):(u.includes("toilet")||u.includes("shower")||u.includes("wash"))&&(u.includes("toilet")?l.waschkueche.push({src:c,alt:"Toilette"}):u.includes("shower")?l.waschkueche.push({src:c,alt:"Dusche"}):l.waschkueche.push({src:c,alt:"Waschküche"}))}),l},ht=l=>{const c=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":pp,"../assets/gallery/cheerleading/cheerleading_1.jpg":bp,"../assets/gallery/cheerleading/cheerleading_2.jpg":xp,"../assets/gallery/cheerleading/cheerleading_3.jpg":yp,"../assets/gallery/damen/1.png":vp,"../assets/gallery/damen/10.png":Sp,"../assets/gallery/damen/11.png":jp,"../assets/gallery/damen/12.png":wp,"../assets/gallery/damen/13.png":_p,"../assets/gallery/damen/14.png":Ep,"../assets/gallery/damen/2.png":zp,"../assets/gallery/damen/3.png":Cp,"../assets/gallery/damen/4.png":Ap,"../assets/gallery/damen/5.png":Tp,"../assets/gallery/damen/6.png":Rp,"../assets/gallery/damen/7.png":Mp,"../assets/gallery/damen/8.png":Dp,"../assets/gallery/damen/9.png":kp,"../assets/gallery/herren/herren_0.jpg":Op,"../assets/gallery/herren/herren_1.jpg":Bp,"../assets/gallery/herren/herren_10.jpg":Np,"../assets/gallery/herren/herren_11.jpg":Up,"../assets/gallery/herren/herren_12.jpg":Lp,"../assets/gallery/herren/herren_13.jpg":Hp,"../assets/gallery/herren/herren_14.jpg":Gp,"../assets/gallery/herren/herren_15.jpg":Yp,"../assets/gallery/herren/herren_16.jpg":Vp,"../assets/gallery/herren/herren_17.jpg":qp,"../assets/gallery/herren/herren_18.jpg":$p,"../assets/gallery/herren/herren_19.png":Qp,"../assets/gallery/herren/herren_2.jpg":Kp,"../assets/gallery/herren/herren_3.jpg":Xp,"../assets/gallery/herren/herren_4.jpg":Zp,"../assets/gallery/herren/herren_5.jpg":Pp,"../assets/gallery/herren/herren_6.jpg":Jp,"../assets/gallery/herren/herren_7.jpg":Fp,"../assets/gallery/herren/herren_8.jpg":Wp,"../assets/gallery/herren/herren_9.jpg":Ip,"../assets/gallery/herren/herren_club500_1.png":e1,"../assets/gallery/herren/herren_club500_2.png":t1,"../assets/gallery/herren/herren_club500_3.png":n1,"../assets/gallery/herren/herren_club500_4.png":a1,"../assets/gallery/herren/herren_club500_5.png":l1,"../assets/gallery/herren/herren_jubel_500club.png":r1,"../assets/gallery/jfv/IMG-team.png":i1,"../assets/gallery/jfv/IMG_5349.jpg":s1,"../assets/gallery/jfv/IMG_5369.jpg":o1,"../assets/gallery/jfv/IMG_5421.jpg":u1,"../assets/gallery/jfv/IMG_5442.jpg":c1,"../assets/gallery/jfv/IMG_5952.jpg":f1,"../assets/gallery/jfv/Unbenann324t.png":d1,"../assets/gallery/jfv/image0.jpeg":h1,"../assets/gallery/jfv/image11.jpeg":m1,"../assets/gallery/jfv/image8.jpeg":g1})).find(([u])=>u.includes(l));return c?c[1]:""},SS=(l,s)=>ht(`${l}/${l}_${s}.jpg`);yS(),vS(),b1();const jS={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},wS={packages:jS},_S=v.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,ES=v.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.15);
  }
`,zS=v.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,CS=v.div`
  margin-bottom: 1.5rem;
`,AS=v.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;

  span:first-child {
    color: #059669;
  }
  span:last-child {
    color: #6b7280;
  }
`,TS=v.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,RS=v.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,MS=v.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,DS=v.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,kS=v.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OS=v.div`
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f1f5f9;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
`,BS=v.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,NS=v.div`
  flex: 1;
`,US=v.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,LS=v.span`
  font-weight: 600;
  color: #374151;
`,HS=v.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,GS=v.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,YS=v.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,VS=v.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
  }
`,qS=v.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: #6b7280;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }
`,$S=()=>{const l=wS;return{kabinen:{current:l.packages.kabinen.current,goal:l.packages.kabinen.goal,donors:l.packages.kabinen.donors},fassade:{current:l.packages.fassade.current,goal:l.packages.fassade.goal,donors:l.packages.fassade.donors},waschkueche:{current:l.packages.waschkueche.current,goal:l.packages.waschkueche.goal,donors:l.packages.waschkueche.donors}}};function QS({data:l=$S(),realTime:s=!1}){const[c,u]=C.useState(l),[f,d]=C.useState(new Date),[y,b]=C.useState(!1),h=async()=>{b(!0);try{const S=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(S.ok){const w=await S.json(),k={kabinen:{current:w.packages.kabinen.current,goal:w.packages.kabinen.goal,donors:w.packages.kabinen.donors},fassade:{current:w.packages.fassade.current,goal:w.packages.fassade.goal,donors:w.packages.fassade.donors},waschkueche:{current:w.packages.waschkueche.current,goal:w.packages.waschkueche.goal,donors:w.packages.waschkueche.donors}};u(k),d(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(S){console.error("❌ Fehler beim Laden der Spendendaten:",S)}finally{b(!1)}};C.useEffect(()=>{if(!s)return;const S=setInterval(()=>{h()},3e4);return()=>clearInterval(S)},[s]);const g=S=>{switch(S){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},x=S=>{switch(S){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return S}};return i.jsxs(i.Fragment,{children:[i.jsx(_S,{children:Object.entries(c).map(([S,w])=>{const k=w.current/w.goal*100;return i.jsxs(ES,{children:[i.jsxs(zS,{children:[g(S)," ",x(S)]}),i.jsxs(CS,{children:[i.jsxs(AS,{children:[i.jsxs("span",{children:[w.current.toLocaleString("de-DE")," €"]}),i.jsxs("span",{children:[w.goal.toLocaleString("de-DE")," €"]})]}),i.jsx(TS,{children:i.jsx(RS,{$progress:k})}),i.jsxs(MS,{children:[Math.round(k),"% erreicht"]})]}),i.jsxs(DS,{children:[i.jsxs(kS,{children:["💝 Spender (",w.donors.length,")"]}),i.jsx(OS,{children:w.donors.length>0?w.donors.slice().reverse().map((M,B)=>i.jsxs(BS,{children:[i.jsxs(NS,{children:[i.jsx(US,{children:M.anonymous?"Anonymer Spender":M.name}),M.comment&&i.jsxs(HS,{children:['"',M.comment,'"']}),M.date&&i.jsx(GS,{children:M.date})]}),i.jsxs(LS,{children:[M.amount.toLocaleString("de-DE")," €"]})]},B)):i.jsx(YS,{children:"Noch keine Spenden 🤗"})})]})]},S)})}),i.jsxs(VS,{onClick:h,disabled:y,title:"Spendendaten aktualisieren",children:["🔄",y?"Lade...":"Aktualisieren"]}),i.jsxs(qS,{children:["Letztes Update: ",f.toLocaleTimeString("de-DE")]})]})}const KS=v.section`
  background: url("${SS("herren",18)}") center/cover;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`,XS=v.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,ZS=v.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,PS=v.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,JS=v.main`
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  padding: 3rem 2rem 2rem 2rem;
  margin-top: -60px;
  position: relative;
  z-index: 2;
`,FS=v.section`
  margin-bottom: 4rem;
`,WS=v.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,IS=v.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,e5=v.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,t5=v.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,n5=v.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,a5=v.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,l5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,r5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Cc=v.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Ac=v.div`
  width: 100%;
  height: 200px;
  background: #f1f5f9;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 0.9rem;
  border: 2px dashed #cbd5e1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`,i5=v.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,s5=v.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,o5=v.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,u5=v.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${l=>l.$isActive?"#fff":"rgba(255, 255, 255, 0.5)"};
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #fff;
    transform: scale(1.2);
  }
`,c5=v.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,f5=v.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: scaleIn 0.3s ease;

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`,d5=v.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,h5=v.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`,n0=v.button`
  position: absolute;
  top: 50%;
  ${l=>l.$direction==="prev"?"left: -60px;":"right: -60px;"}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 12px 16px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    ${l=>l.$direction==="prev"?"left: -50px;":"right: -50px;"}
    font-size: 1.2rem;
    padding: 8px 12px;
  }
`,Tc=v.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Rc=v.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,m5=v.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,g5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,p5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Mc=v.div`
  background: white;
  border: 2px solid #0ea5e9;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(14, 165, 233, 0.15);
  }
`,Dc=v.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,kc=v.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Oc=v.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Bc=v.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,b5=v.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,x5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,y5=v.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,v5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,xs=v.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,ys=v.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,vs=v.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,S5=v.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,j5=v.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,w5=v.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,_5=v.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,a0=v.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &.primary {
    background: #fff;
    color: #059669;

    &:hover {
      background: #f0fdf4;
      transform: translateY(-2px);
    }
  }
`,E5=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,z5=v.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,C5=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,A5=v.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,T5=v.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }
`,R5=v.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Nc=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Uc=v.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Lc=v.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,M5=v.button`
  background: #e10073;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.95rem;

  &:hover {
    background: #b8005a;
  }
`,D5=v.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,zl=b1();function Hc({images:l,onImageClick:s}){const[c,u]=C.useState(0);return C.useEffect(()=>{if(l.length<=1)return;const f=setInterval(()=>{u(d=>(d+1)%l.length)},4e3);return()=>clearInterval(f)},[l.length]),l.length===0?i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):i.jsxs(i5,{children:[l.map((f,d)=>i.jsx(s5,{src:f.src,alt:f.alt,$isActive:d===c,onClick:()=>s(d)},d)),l.length>1&&i.jsx(o5,{children:l.map((f,d)=>i.jsx(u5,{$isActive:d===c,onClick:()=>u(d)},d))})]})}function k5({images:l,initialIndex:s,onClose:c}){const[u,f]=C.useState(s),d=C.useCallback(()=>{f(b=>(b+1)%l.length)},[l.length]),y=C.useCallback(()=>{f(b=>(b-1+l.length)%l.length)},[l.length]);return C.useEffect(()=>{const b=h=>{h.key==="Escape"&&c(),h.key==="ArrowRight"&&d(),h.key==="ArrowLeft"&&y()};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[c,d,y]),i.jsx(c5,{onClick:c,children:i.jsxs(f5,{onClick:b=>b.stopPropagation(),children:[i.jsx(h5,{onClick:c,children:"×"}),i.jsx(d5,{src:l[u].src,alt:l[u].alt}),l.length>1&&i.jsxs(i.Fragment,{children:[i.jsx(n0,{$direction:"prev",onClick:y,children:"‹"}),i.jsx(n0,{$direction:"next",onClick:d,children:"›"})]})]})})}function O5(){const[l,s]=C.useState(!1),[c,u]=C.useState([]),[f,d]=C.useState(0),[y,b]=C.useState(!1),h=(S,w)=>{u(S),d(w),s(!0)},g=S=>{S.preventDefault(),b(!0)},x=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return i.jsxs(i.Fragment,{children:[i.jsx(KS,{children:i.jsxs(XS,{children:[i.jsx(ZS,{children:"🏟️ Fürstenberg weiterentwickeln"}),i.jsx(PS,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),i.jsxs(JS,{children:[i.jsxs(FS,{children:[i.jsx(WS,{children:"Der Fürstenberg - unser Kultplatz"}),i.jsx(IS,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),i.jsxs(e5,{children:[i.jsx(t5,{children:"✨ Charme erhalten, Komfort verbessern"}),i.jsx(n5,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),i.jsxs(a5,{children:[i.jsx(l5,{children:"🔍 Wo wir ansetzen möchten"}),i.jsxs(r5,{children:[i.jsxs(Cc,{children:[i.jsx(Ac,{children:i.jsx(Hc,{images:zl.kabinen,onImageClick:S=>h(zl.kabinen,S)})}),i.jsx(Tc,{children:"🔧 Kabinen komfortabler gestalten"}),i.jsx(Rc,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),i.jsxs(Cc,{children:[i.jsx(Ac,{children:i.jsx(Hc,{images:zl.fassade,onImageClick:S=>h(zl.fassade,S)})}),i.jsx(Tc,{children:"🎨 Fassade & Fenster erneuern"}),i.jsx(Rc,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),i.jsxs(Cc,{children:[i.jsx(Ac,{children:i.jsx(Hc,{images:zl.waschkueche,onImageClick:S=>h(zl.waschkueche,S)})}),i.jsx(Tc,{children:"🧺 Waschküche auf Vordermann bringen"}),i.jsx(Rc,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),i.jsxs(m5,{children:[i.jsx(g5,{children:"✨ Unsere Pläne für den Fürstenberg"}),i.jsxs(p5,{children:[i.jsxs(Mc,{children:[i.jsx(Dc,{children:"🪑"}),i.jsx(kc,{children:"Kabinen sanieren"}),i.jsx(Oc,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),i.jsx(Bc,{children:"~8.000 €"})]}),i.jsxs(Mc,{children:[i.jsx(Dc,{children:"🎨"}),i.jsx(kc,{children:"Fassade & Fenster erneuern"}),i.jsx(Oc,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),i.jsx(Bc,{children:"~15.000 €"})]}),i.jsxs(Mc,{children:[i.jsx(Dc,{children:"🧺"}),i.jsx(kc,{children:"Waschküche modernisieren"}),i.jsx(Oc,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),i.jsx(Bc,{children:"~5.000 €"})]})]})]}),i.jsxs(b5,{children:[i.jsx(x5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),i.jsx(y5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),i.jsxs(v5,{children:[i.jsxs(xs,{children:[i.jsx(ys,{children:"🏆"}),i.jsxs(vs,{children:[i.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),i.jsxs(xs,{children:[i.jsx(ys,{children:"📄"}),i.jsxs(vs,{children:[i.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),i.jsxs(xs,{children:[i.jsx(ys,{children:"📱"}),i.jsxs(vs,{children:[i.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),i.jsxs(xs,{children:[i.jsx(ys,{children:"🎯"}),i.jsxs(vs,{children:[i.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),i.jsxs(S5,{children:[i.jsx(j5,{children:"🤝 Gemeinsam für den Fürstenberg"}),i.jsx(w5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),i.jsx(QS,{realTime:!0}),i.jsxs(_5,{children:[i.jsx(a0,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),i.jsx(a0,{href:"#",onClick:g,children:"🏦 Per Überweisung spenden"})]})]})]}),i.jsx(Mf,{}),y&&i.jsx(E5,{onClick:()=>b(!1),children:i.jsxs(z5,{onClick:S=>S.stopPropagation(),children:[i.jsxs(C5,{children:[i.jsx(A5,{children:"Kontoverbindung für Spenden"}),i.jsx(T5,{onClick:()=>b(!1),children:"×"})]}),i.jsxs(R5,{children:[i.jsxs(Nc,{children:[i.jsx(Uc,{children:"Kontoinhaber:"}),i.jsx(Lc,{children:"SC Konstanz-Wollmatingen"})]}),i.jsxs(Nc,{children:[i.jsx(Uc,{children:"IBAN:"}),i.jsx(Lc,{children:"DE12 6905 0001 0000 0228 06"})]}),i.jsxs(Nc,{children:[i.jsx(Uc,{children:"BIC:"}),i.jsx(Lc,{children:"SOLADES1KNZ"})]})]}),i.jsx(M5,{onClick:x,children:"📋 IBAN kopieren"}),i.jsx(D5,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),l&&i.jsx(k5,{images:c,initialIndex:f,onClose:()=>s(!1)})]})}const Gc={text:"Meister & Aufsteiger!",highlight:"Verbandsliga Südbaden",suffix:"– ab Saison 26/27 spielen wir eine Liga höher"},Df=[{value:"1,3 Mio.",label:"Social-Media-Views / Saison",description:"IG 1,07 Mio. + FB 203K kombiniert (Jul 25 – Jun 26)"},{value:"310.000",label:"Views / Monat aktuell",description:"IG 230K + FB 81K kombiniert (28 Tage, Mai–Jun 26)"},{value:"21.400",label:"Personen erreicht / Monat",description:"Instagram Reach, 97% Non-Followers"},{value:"60.000+",label:"Website-Aufrufe / Jahr",description:"23.800 Sessions, Ø 2:19 Min. Verweildauer"}],B5=[{id:"hauptsponsor",name:"Hauptsponsor",preis:"15.000 €",topFeature:"Trikotbrust",trikot:"Brust (bis 400 cm²)",bande:"9 m",banner:"1× XL (3 × 2 m)",magazin:"1 Seite",saisonkarten:10,vergeben:!0,sponsorName:"Fuchsbau Immobilien",sponsorLogo:"/sponsors/fuchsbau-logo.png",sponsorWebsite:"https://immofuchsbau.com/"},{id:"stadionname",name:"Stadionname-Partner",preis:"12.000 €",topFeature:"Namensrecht Stadion",trikot:"–",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:10,vergeben:!1},{id:"co-sponsor-1",name:"Co-Sponsor I",preis:"9.500 €",topFeature:"Trikot-Rücken",trikot:"Rücken (bis 200 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1},{id:"co-sponsor-2",name:"Co-Sponsor II",preis:"8.000 €",topFeature:"Trikot-Ärmel",trikot:"Ärmel (2 × 100 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1}],N5=[{name:"Einzelbande",groesse:"3 × 1 m",preis:"800 €",slots:25,kategorie:"bande"},{name:"Doppelbande",groesse:"6 × 1 m",preis:"1.400 €",slots:12,kategorie:"bande"},{name:"Banner Standard",groesse:"ca. 2 × 1,5 m",preis:"1.200 €",slots:10,kategorie:"banner"},{name:"Banner XL",groesse:"ca. 3 × 2 m",preis:"2.000 €",slots:4,kategorie:"banner"}],U5=[{name:"Ballspende",beschreibung:"Durchsage vor Spiel, bei jedem Tor & Halbzeit · 1 Insta-Story",preis:"150 € / Spiel",hinweis:"5er-Pack: 500 €"},{name:"Spielpräsentator",beschreibung:"Alle Aufstellungen & Auswechslungen im Firmennamen",preis:"ab 250 € / Spiel"},{name:"Magazin-Inserat",beschreibung:"15 Ausgaben/Saison · ca. 100 Exemplare + 1.000–1.500 Online-Zugriffe",preis:"250 – 1.000 €",hinweis:"1/4 Seite 250 € · 1/2 Seite 500 € · 1 Seite 1.000 €"}],L5=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Yc={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},x1=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],y1=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],v1=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],Nt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},H5=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],G5=v.div`
  max-width: 1000px;
  margin: 0 auto;
`,Y5=v.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,V5=v.a`
  background: white;
  border-radius: 20px;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.12);
  border: 3px solid #e10073;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 280px;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.2);
  }
`,q5=v.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,$5=v.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,Q5=v.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,K5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,X5=v.a`
  background: white;
  border-radius: 12px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 100px;

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 8px 24px rgba(225, 0, 115, 0.12);
  }
`,Z5=v.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,P5=v.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,J5={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function F5(){const{hauptsponsor:l,partners:s}=J5;return i.jsxs(G5,{children:[i.jsx(Y5,{children:i.jsxs(V5,{href:l.website,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(q5,{children:"Hauptsponsor"}),i.jsx($5,{src:l.logo,alt:l.name}),i.jsx(Q5,{children:l.name})]})}),i.jsx(K5,{children:s.map((c,u)=>i.jsxs(X5,{href:c.website,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(Z5,{src:c.logo,alt:c.name}),i.jsx(P5,{children:c.name})]},u))})]})}const W5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,I5=v.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,ej=v.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,tj=v.p`
  font-size: 0.95rem;
  color: #222;
  line-height: 1.5;

  a {
    color: #e10073;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  ${({$isEmail:l})=>l&&`
    a {
      color: #e10073;
      &:hover {
        color: #b8005a;
      }
    }
  `}
`;function nj({headline:l,description:s,contactInfos:c}){const u=f=>{f.preventDefault();const d=f.currentTarget,y=new FormData(d);if(String(y.get("website")||"").trim()!=="")return;const h=String(y.get("firstName")||"").trim(),g=String(y.get("lastName")||"").trim(),x=String(y.get("email")||"").trim(),S=String(y.get("phone")||"").trim(),w={};if(h||(w.firstName="Bitte Vornamen angeben"),g||(w.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)||(w.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(S)||(w.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(w).length>0){const k=Object.keys(w)[0],M=d.querySelector(`[name="${k}"]`);M&&M.focus(),alert(Object.values(w).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),d.reset()};return i.jsx(aj,{id:"kontakt",children:i.jsxs(lj,{children:[i.jsx(gj,{children:l}),i.jsx(pj,{children:s}),i.jsx(W5,{children:c.map((f,d)=>i.jsxs(I5,{children:[i.jsxs(ej,{children:[f.icon," ",f.title]}),i.jsx(tj,{$isEmail:f.isEmail,children:f.isEmail?i.jsx("a",{href:`mailto:${f.content}`,children:f.content}):f.content})]},d))}),i.jsxs(rj,{children:[i.jsx(ij,{children:"Kontakt aufnehmen"}),i.jsx(sj,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),i.jsxs(oj,{noValidate:!0,onSubmit:u,children:[i.jsxs(Vc,{children:[i.jsxs(Xr,{children:[i.jsx("label",{htmlFor:"firstName",children:"Vorname"}),i.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),i.jsxs(Xr,{children:[i.jsx("label",{htmlFor:"lastName",children:"Nachname"}),i.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),i.jsxs(Vc,{children:[i.jsxs(Xr,{children:[i.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),i.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),i.jsxs(Xr,{children:[i.jsx("label",{htmlFor:"phone",children:"Telefon"}),i.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),i.jsx(Vc,{children:i.jsxs(uj,{children:[i.jsx("label",{htmlFor:"email",children:"E-Mail"}),i.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),i.jsxs(cj,{"aria-hidden":"true",tabIndex:-1,children:[i.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),i.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),i.jsxs(fj,{children:[i.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),i.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",i.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),i.jsxs(dj,{children:[i.jsx(hj,{type:"submit",children:"Absenden"}),i.jsxs(mj,{children:["Alternativ:"," ",i.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const aj=v.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,lj=v.div`
  max-width: 1000px;
  margin: 0 auto;
`,rj=v.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,ij=v.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,sj=v.p`
  margin: 0 0 1rem 0;
  color: #555;
`,oj=v.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
    display: inline-block;
    text-align: left;
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    font-size: 1rem;
    line-height: 1.2;
    height: 44px;
    outline: none;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    background: #fff;
    color: #111;
    caret-color: #e10073;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.15);
  }

  input::placeholder {
    color: #9ca3af;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #111;
    transition: background-color 9999s ease-in-out 0s;
    box-shadow: 0 0 0px 1000px #fff inset;
  }
`,Vc=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,Xr=v.div`
  display: flex;
  flex-direction: column;
`,uj=v(Xr)`
  grid-column: 1 / -1;
`,cj=v.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,fj=v.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;

  input[type="checkbox"] {
    margin-top: 0.2rem;
  }

  a {
    color: #e10073;
  }
`,dj=v.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,hj=v.button`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 16px rgba(225, 0, 115, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(225, 0, 115, 0.35);
  }
`,mj=v.span`
  font-size: 0.9rem;
  color: #666;

  a {
    color: #e10073;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`,gj=v.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,pj=v.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,bj="sponsoring@sckw.de",Cl=v.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Ds=v.section`
  padding: 3rem 0;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,l0=v(Ds)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,Al=v.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,Ss=v.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,js=v.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,xj=v.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
`,yj=v.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,vj=v.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,Sj=v.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,jj=v.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,wj=v.p`
  color: white;
  font-size: clamp(1rem, 3.5vw, 1.4rem);
  font-weight: 500;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  opacity: 0.95;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
`,_j=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  max-width: 100%;

  @media (min-width: 768px) {
    gap: 1.25rem;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(4, 1fr);
  }
`,Ej=v.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,zj=v.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Cj=v.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,Aj=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,r0=v.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$primary:l})=>l?"white":"transparent"};
  color: ${({$primary:l})=>l?"#e10073":"white"};
  font-weight: 800;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({$primary:l})=>l?"0 6px 20px rgba(0, 0, 0, 0.2)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:l})=>l?"white":"rgba(255, 255, 255, 0.4)"};
  width: 100%;
  max-width: 280px;
  min-height: 48px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({$primary:l})=>l?"#f8f9fa":"rgba(255, 255, 255, 0.1)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`,Tj=jf`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`,Rj=v.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`,Mj=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`,i0=v.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  animation: ${Tj} 2s ease-in-out infinite;
  flex-shrink: 0;
`,Dj=v.span`
  color: white;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.02em;

  strong {
    color: #fbbf24;
  }
`,kj=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`,Oj=v.div`
  background: white;
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 2px solid ${({$vergeben:l})=>l?"#e5e7eb":"#e10073"};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${({$vergeben:l})=>l?.85:1};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
  }
`,Bj=v.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
  flex-wrap: wrap;
`,Nj=v.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: #222;
  margin: 0;
`,Uj=v.div`
  font-size: 1.1rem;
  font-weight: 800;
  color: #e10073;
  white-space: nowrap;
`,Lj=v.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
`,Hj=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem 1rem;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1rem;
  flex: 1;
`,Tl=v.div`
  display: flex;
  gap: 0.4rem;
  align-items: baseline;
  padding: 0.2rem 0;

  &::before {
    content: "\\2713";
    color: #e10073;
    font-weight: 700;
    flex-shrink: 0;
    font-size: 0.75rem;
  }
`,Gj=v.div`
  font-size: 0.8rem;
  color: #888;
  border-top: 1px solid #f0f0f0;
  padding-top: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`,Yj=v.span`
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${({$vergeben:l})=>l?"#fee2e2":"#d1fae5"};
  color: ${({$vergeben:l})=>l?"#991b1b":"#065f46"};
`,Vj=v.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$vergeben:l})=>l?"#e5e7eb":"#e10073"};
  color: ${({$vergeben:l})=>l?"#6b7280":"white"};
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;
  pointer-events: ${({$vergeben:l})=>l?"none":"auto"};
  margin-top: auto;

  &:hover {
    background: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }
`,qj=v.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 10px;
  margin-bottom: 1rem;
  flex: 1;
`,$j=v.img`
  max-width: 80px;
  max-height: 50px;
  object-fit: contain;
`,Qj=v.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
`,s0=v.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th {
    text-align: left;
    padding: 0.75rem 0.75rem;
    font-weight: 700;
    color: white;
    background: #e10073;

    &:first-child {
      border-radius: 10px 0 0 0;
    }
    &:last-child {
      border-radius: 0 10px 0 0;
    }
  }

  td {
    padding: 0.65rem 0.75rem;
    border-bottom: 1px solid #f0f0f0;
    color: #333;
  }

  tr:nth-child(even) td {
    background: #fafafa;
  }
  tr:last-child td {
    border-bottom: none;
  }
`,o0=v.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,u0=v.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kj=v.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #065f46;
  background: #d1fae5;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`,Xj=v.div`
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
`,Zj=v.h4`
  font-size: 1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.25rem;
`,Pj=v.div`
  font-size: 1.05rem;
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Jj=v.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
  flex: 1;
`,Fj=v.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.5rem;
  font-style: italic;
`,Wj=v.div`
  margin-top: 3rem;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Ij=v.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,e3=v.div`
  position: relative;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 360px;
  }
`,t3=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,n3=v.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(225, 0, 115, 0.9);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
`,a3=v.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,l3=v.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.75rem 0;
`,r3=v.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
`,i3=v.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1rem;
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;

  strong {
    color: #e10073;
  }
`,s3=v.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,o3=v.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,u3=v.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,c3=v.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`,qc=v.div`
  background: white;
  border-radius: 50px;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  color: #444;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f2c2d9;
  font-weight: 600;

  &::before {
    content: "\\2713  ";
    color: #e10073;
    font-weight: 800;
  }
`,f3=v(Fs)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 800;
  font-size: 1.05rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.3);
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.4);
  }
`;function d3(){const[l,s]=C.useState(Df);C.useEffect(()=>{fetch("/social-stats.json").then(b=>b.ok?b.json():Promise.reject()).then(b=>{b?.kpis?.length&&s(b.kpis)}).catch(()=>{})},[]);const c=[ht("herren/herren_6"),ht("herren/herren_16"),ht("herren/herren_5"),ht("herren/herren_14")].filter(Boolean),[u,f]=C.useState(0);C.useEffect(()=>{if(c.length<=1)return;const b=setInterval(()=>{f(h=>(h+1)%c.length)},6e3);return()=>clearInterval(b)},[c.length]);const d=b=>{document.getElementById(b)?.scrollIntoView({behavior:"smooth",block:"start"})},y=b=>{const h=encodeURIComponent(`Interesse an Sponsoring: ${b}`),g=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich für den Bereich "${b}" und würde gerne mehr erfahren.

Bitte senden Sie mir weitere Informationen.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Herzliche Grüße
`);return`mailto:${bj}?subject=${h}&body=${g}`};return i.jsxs(i.Fragment,{children:[i.jsxs(xj,{children:[c.map((b,h)=>i.jsx(yj,{$bg:b,$active:h===u},h)),i.jsx(vj,{}),i.jsxs(Sj,{children:[i.jsx(jj,{children:"Sponsoring, das messbar wirkt"}),i.jsxs(wj,{children:[i.jsx("strong",{children:"1,3 Millionen Social-Media-Views"})," in dieser Saison – 100 % organisch, ohne Werbebudget. Aktuell erreichen wir"," ",i.jsx("strong",{children:"310.000 Views pro Monat"})," und Ihre Marke ist in jedem Spielbericht dabei."]}),i.jsx(_j,{children:l.map(b=>i.jsxs(Ej,{children:[i.jsx(zj,{children:b.value}),i.jsx(Cj,{children:b.label})]},b.label))}),i.jsxs(Aj,{children:[i.jsx(r0,{href:"#kontakt",$primary:!0,onClick:b=>{b.preventDefault(),d("kontakt")},children:"Jetzt Kontakt aufnehmen"}),i.jsx(r0,{href:"#angebot",onClick:b=>{b.preventDefault(),d("angebot")},children:"Angebot ansehen"})]})]})]}),i.jsx(Rj,{children:i.jsxs(Mj,{children:[i.jsx(i0,{}),i.jsxs(Dj,{children:[Gc.text," ",i.jsx("strong",{children:Gc.highlight})," ",Gc.suffix]}),i.jsx(i0,{})]})}),i.jsx(Ds,{children:i.jsxs(Cl,{children:[i.jsxs(Al,{children:[i.jsx(Ss,{children:"Unsere Partner"}),i.jsx(js,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),i.jsx(F5,{})]})}),i.jsx(l0,{id:"angebot",children:i.jsxs(Cl,{children:[i.jsxs(Al,{children:[i.jsx(Ss,{children:"Exklusiv-Partnerschaften"}),i.jsx(js,{children:"Vier einzigartige Pakete – jeweils nur 1× verfügbar. Alle Partner erscheinen in jedem Spielvor- und Nachbericht."})]}),i.jsx(kj,{children:B5.map(b=>i.jsxs(Oj,{$vergeben:b.vergeben,children:[i.jsxs(Bj,{children:[i.jsxs("div",{children:[i.jsx(Nj,{children:b.name}),i.jsxs(Uj,{children:[b.preis," / Saison"]})]}),i.jsx(Yj,{$vergeben:b.vergeben,children:b.vergeben?"Vergeben":"Verfügbar"})]}),i.jsx(Lj,{children:b.topFeature}),b.vergeben&&b.sponsorLogo?i.jsxs(qj,{children:[i.jsx($j,{src:b.sponsorLogo,alt:b.sponsorName||""}),i.jsx(Qj,{children:b.sponsorName})]}):i.jsxs(Hj,{children:[b.trikot!=="–"&&i.jsxs(Tl,{children:["Trikot: ",b.trikot]}),b.id==="stadionname"&&i.jsx(Tl,{children:"Stadion trägt Ihren Namen"}),i.jsxs(Tl,{children:["Bande: ",b.bande]}),i.jsxs(Tl,{children:["Banner: ",b.banner]}),i.jsxs(Tl,{children:["Magazin: ",b.magazin]}),i.jsxs(Tl,{children:[b.saisonkarten," Saisonkarten"]})]}),i.jsx(Gj,{children:"Logo in allen Spielberichten · Stadionansage · Logo Website"}),i.jsx(Vj,{href:b.vergeben?void 0:y(b.name),$vergeben:b.vergeben,children:b.vergeben?"Vergeben":"Jetzt anfragen"})]},b.id))})]})}),i.jsx(Ds,{id:"werbeflaechen",children:i.jsxs(Cl,{children:[i.jsxs(Al,{children:[i.jsx(Ss,{children:"Werbeflächen"}),i.jsx(js,{children:"Banden, Banner und Buswerbung – à la carte buchbar, klare Preise."})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"2rem",maxWidth:900,margin:"0 auto"},children:[i.jsxs(o0,{children:[i.jsx("div",{style:{padding:"1.25rem 1.25rem 0"},children:i.jsx(u0,{children:"Banden & Banner"})}),i.jsx("div",{style:{overflowX:"auto"},children:i.jsxs(s0,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Typ"}),i.jsx("th",{children:"Grösse"}),i.jsx("th",{children:"Preis / Saison"}),i.jsx("th",{children:"Verfügbar"})]})}),i.jsx("tbody",{children:N5.map(b=>i.jsxs("tr",{children:[i.jsx("td",{style:{fontWeight:600},children:b.name}),i.jsx("td",{children:b.groesse}),i.jsx("td",{style:{fontWeight:700,color:"#e10073"},children:b.preis}),i.jsx("td",{children:i.jsxs(Kj,{children:[b.slots," Plätze"]})})]},b.name))})]})})]}),i.jsxs(o0,{children:[i.jsxs("div",{style:{padding:"1.25rem 1.25rem 0"},children:[i.jsx(u0,{children:"Buswerbung"}),i.jsx("p",{style:{fontSize:"0.9rem",color:"#666",margin:"0 0 0.75rem",lineHeight:1.5},children:"Jede Woche unterwegs in Konstanz, im Landkreis und bei Auswärtsspielen."})]}),i.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SCKW",style:{width:"100%",display:"block"}}),i.jsx("div",{style:{overflowX:"auto"},children:i.jsxs(s0,{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Fläche"}),i.jsx("th",{children:"Grösse"}),i.jsx("th",{children:"Preis / Jahr"})]})}),i.jsx("tbody",{children:[...x1,...y1].map(b=>i.jsxs("tr",{children:[i.jsx("td",{style:{fontWeight:600},children:b.position}),i.jsx("td",{children:b.groesse}),i.jsx("td",{style:{fontWeight:700,color:"#e10073"},children:b.preis})]},b.position))})]})}),i.jsx("div",{style:{padding:"0.75rem 1.25rem 1.25rem"},children:i.jsx("ul",{style:{margin:0,paddingLeft:"1.2rem",fontSize:"0.85rem",color:"#666",lineHeight:1.6},children:v1.map((b,h)=>i.jsx("li",{children:b},h))})})]})]})]})}),i.jsx(l0,{id:"spieltag",children:i.jsxs(Cl,{children:[i.jsxs(Al,{children:[i.jsx(Ss,{children:"Spieltag & Medien"}),i.jsx(js,{children:"Einstieg ins Sponsoring ab 150 € – perfekt zum Ausprobieren."})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.25rem",maxWidth:900,margin:"0 auto"},children:U5.map(b=>i.jsxs(Xj,{children:[i.jsx(Zj,{children:b.name}),i.jsx(Pj,{children:b.preis}),i.jsx(Jj,{children:b.beschreibung}),b.hinweis&&i.jsx(Fj,{children:b.hinweis})]},b.name))})]})}),i.jsx(Ds,{children:i.jsx(Cl,{children:i.jsx(Wj,{children:i.jsxs(Ij,{children:[i.jsxs(e3,{children:[i.jsx(t3,{src:"/verbandsliga-karte.jpg",alt:"Verbandsliga Südbaden – Spielorte und Reichweite"}),i.jsx(n3,{children:"Saison 26/27"})]}),i.jsxs(a3,{children:[i.jsx(l3,{children:"Ihre Reichweite wächst mit"}),i.jsx(r3,{children:"Ob Buswerbung, Trikot oder Bande – Ihre Marke wird in der gesamten Region sichtbar. Als frischer Meister und Aufsteiger spielen wir ab Saison 26/27 Verbandsliga – in 15+ Städten zwischen Freiburg und Konstanz."}),i.jsxs(i3,{children:[i.jsx("strong",{children:"Was das für Sie bedeutet:"})," Mehr Gegner, größere Städte, mehr Medienaufmerksamkeit – Ihre Investition wächst automatisch mit, ohne Mehrkosten."]})]})]})})})}),i.jsx(s3,{children:i.jsxs(Cl,{children:[i.jsxs(Al,{children:[i.jsx(o3,{children:"CLUB 500"}),i.jsx(u3,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken – werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),i.jsxs(c3,{children:[i.jsx(qc,{children:"Spendenbescheinigung"}),i.jsx(qc,{children:"Name auf der Spendentafel"}),i.jsx(qc,{children:"Jugend- & Amateurfußball"})]}),i.jsx(Al,{children:i.jsx(f3,{to:"/sponsoring/club-500",children:"Jetzt Mitglied werden →"})})]})}),i.jsx(nj,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt – wir erstellen ein passendes Angebot mit klaren Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:Nt.email,isEmail:!0},{icon:"📍",title:"Adresse",content:Nt.vollAdresse}]}),i.jsx(Mf,{})]})}function h3(){return gp(),!0}const m3=jv`
  @media print {
    @page { size: A4 portrait; margin: 0; }

    html, body, #root {
      width: 100% !important;
      height: auto !important;
      margin: 0 !important;
      padding: 0 !important;
      background: white !important;
      overflow: visible !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
`,c0=v.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  padding: 0.75rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  @media print {
    display: none !important;
  }
`,f0=v.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,d0=v.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,ws=v.button`
  background: ${l=>l.$primary?"#fff":l.$active?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"};
  color: ${l=>l.$primary?"#1a365d":"#fff"};
  border: 2px solid ${l=>l.$primary?"#fff":"rgba(255,255,255,0.25)"};
  padding: 0.5rem 1.1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`,g3=v.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print {
    display: none !important;
  }
`,p3=v.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print {
    padding: 0;
    background: none;
  }
`,wt=v.section`
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto 2rem;
  background: #fff;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media print {
    width: 100%;
    min-height: 297mm;
    height: 297mm;
    margin: 0;
    box-shadow: none;
    page-break-after: always;
    break-after: page;
  }
  &:last-child {
    @media print {
      page-break-after: auto;
      break-after: auto;
    }
  }
`,Jt=v.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    bottom: -320px;
    left: -160px;
    background: radial-gradient(
      circle,
      rgba(74, 144, 226, 0.1) 0%,
      transparent 70%
    );
  }

  &::after {
    content: "";
    position: absolute;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    bottom: -200px;
    right: -120px;
    background: radial-gradient(
      circle,
      rgba(196, 30, 58, 0.08) 0%,
      transparent 70%
    );
  }
`,Ft=v.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,Wt=v.div`
  text-align: center;
  margin-bottom: 6mm;
`,It=v.img`
  height: 20mm;
`,en=v.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,jt=v.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,mt=v.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Oe=v.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,I=v.li`
  font-size: 10.5pt;
  color: #222;
  line-height: 1.7;
  margin-bottom: 2mm;
  padding-left: 6mm;
  position: relative;
  list-style: none;
  &::before {
    content: "\\2713";
    position: absolute;
    left: 0;
    color: #1a365d;
    font-weight: 700;
  }
`,vt=v.ul`
  padding: 0;
  margin: 3mm 0;
`,La=v.div`
  display: ${l=>l.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong {
    font-size: 14pt;
    color: #1a365d;
    margin-left: 2mm;
  }
`,dt=v.div`
  margin-bottom: 4mm;
`,et=v.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Bt=v.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${l=>(l.$lines||1)*8}mm;
  background: #fafafa;
`,b3=v.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,kf=v.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Un=v.div`
  text-align: ${l=>l.$right?"right":l.$center?"center":"left"};
`;function ha(){return i.jsxs(b3,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",i.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function on(){return i.jsxs(kf,{children:[i.jsxs(Un,{children:[i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),i.jsx("br",{}),"Schleyerweg 5",i.jsx("br",{}),"78467 Konstanz"]}),i.jsxs(Un,{$center:!0,children:[Nt.email,i.jsx("br",{}),"partner.sckw.de"]}),i.jsxs(Un,{$right:!0,children:["Sparkasse Bodensee",i.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",i.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const h0=ht("herren/herren_0"),$c=ht("herren/herren_6"),m0=ht("herren/herren_1"),x3=ht("herren/herren_14"),Hs=v.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function y3(){return i.jsx(wt,{children:i.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),i.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),i.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),i.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),i.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",i.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Df.slice(0,2).map(l=>i.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[i.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:l.value}),i.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:l.label})]},l.label))}),i.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function v3(){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"WARUM SCKW?"}),i.jsx(jt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Df.map(l=>i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[i.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:l.value}),i.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:l.label})]},l.label))}),i.jsx(mt,{children:"Was Sie bei uns erreichen"}),i.jsxs(vt,{children:[i.jsx(I,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),i.jsx(I,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),i.jsx(I,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),i.jsx(I,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),i.jsx(mt,{children:"Der Verein auf einen Blick"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsxs(Oe,{children:[i.jsx("strong",{children:"Gegründet:"})," 1912"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Mitglieder:"})," 500+"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),i.jsxs("div",{children:[i.jsxs(Oe,{children:[i.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),h0&&i.jsx(Hs,{src:h0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),i.jsx(on,{})]})]})}function S3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"HAUPTSPONSOR"}),i.jsx(jt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(vt,{children:[i.jsx(I,{children:"Trikotwerbung auf der Brust"}),i.jsx(I,{children:"Business Club Mitgliedschaft"}),i.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),i.jsx(I,{children:"1/1 seitiges Inserat im SC Magazin"}),i.jsx(I,{children:"10 Saisonkarten"}),i.jsx(I,{children:"Werbeauftritte nach Absprache"}),i.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(La,{$hidden:!l,children:["Beitrag: ",i.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),i.jsx(ha,{}),i.jsx(on,{})]})]})}function j3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"CO-SPONSOR"}),i.jsx(jt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),i.jsxs(vt,{children:[i.jsx(I,{children:"Werbung auf den Trainingsanzügen"}),i.jsx(I,{children:"Business Club Mitgliedschaft"}),i.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),i.jsx(I,{children:"1/2 seitiges Inserat im SC Magazin"}),i.jsx(I,{children:"5 Saisonkarten"}),i.jsx(I,{children:"Werbeauftritte nach Absprache"}),i.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),i.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),i.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),i.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),i.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),i.jsxs(La,{$hidden:!l,children:["Beitrag: ",i.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),i.jsx(ha,{}),i.jsx(on,{})]})]})}function w3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"SILBER-PARTNER"}),i.jsx(jt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),i.jsxs(vt,{children:[i.jsx(I,{children:"1 Bande (5×2 m) am Gelände"}),i.jsx(I,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),i.jsx(I,{children:"Werbeplane am Gelände"}),i.jsx(I,{children:"Vereinsplakate + Eventsichtbarkeit"}),i.jsx(I,{children:"Website: Logo auf Startseite"})]}),i.jsxs(La,{$hidden:!l,children:["Beitrag: ",i.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),i.jsx(mt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),i.jsx(jt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),i.jsxs(vt,{children:[i.jsx(I,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),i.jsx(I,{children:"Website: Logo auf der Startseite"}),i.jsx(I,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),i.jsx(I,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),i.jsxs(La,{$hidden:!l,children:["Beitrag: ",i.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),i.jsx(ha,{}),i.jsx(on,{})]})]})}function _3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"BANDENWERBUNG"}),i.jsx(jt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),i.jsx(vt,{children:i.jsx(I,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),i.jsxs(Oe,{children:[i.jsx("strong",{children:"Platzierung:"}),i.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",i.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",i.jsx("br",{}),i.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),i.jsxs(La,{$hidden:!l,children:["Beitrag: ",i.jsx("strong",{children:"ab 800€ pro Saison"})]}),m0&&i.jsx(Hs,{src:m0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),i.jsx(ha,{}),i.jsx(on,{})]})]})}function E3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:'WERBUNG IM „HEIMSPIEL"'}),i.jsx(jt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),i.jsxs(vt,{children:[i.jsx(I,{children:"15 Ausgaben pro Saison"}),i.jsx(I,{children:"ca. 100 Exemplare pro Heimspiel"}),i.jsx(I,{children:"Digitale Version (Social Media & Webseite)"}),i.jsx(I,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),i.jsx(I,{children:"DIN A4 Stadionmagazin"}),i.jsx(I,{children:"wird ausgelegt in diversen Arztpraxen"})]}),l&&i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>i.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),i.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),i.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),l&&i.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[i.jsx("strong",{children:"Maße"}),i.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",i.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",i.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),i.jsx(ha,{}),i.jsx(on,{})]})]})}function z3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"SPIELTAG-SPONSORING"}),i.jsx(jt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),i.jsx(mt,{children:"Ballspende"}),i.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),i.jsxs(vt,{children:[i.jsx(I,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),i.jsx(I,{children:"Namensnennung in der Halbzeitpause"}),i.jsx(I,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),i.jsx(I,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),i.jsxs(La,{$hidden:!l,children:["Beitrag: ",i.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack:"," ",i.jsx("strong",{children:"500€"})," (statt 750€)"]}),i.jsx(mt,{children:"Spielpräsentator"}),i.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),i.jsxs(vt,{children:[i.jsx(I,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),i.jsx(I,{children:"Namentliche Erwähnung im SC Magazin"}),i.jsx(I,{children:"Social Media Erwähnung am Spieltag"})]}),i.jsxs(La,{$hidden:!l,children:["Beitrag: ",i.jsx("strong",{children:"ab 250€ pro Spiel"})]}),$c&&i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[i.jsx(Hs,{src:$c,alt:"Action",style:{height:"48mm"}}),i.jsx(Hs,{src:x3||$c,alt:"Jubel",style:{height:"48mm"}})]}),i.jsx(ha,{}),i.jsx(on,{})]})]})}function C3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"BUSWERBUNG"}),i.jsx(jt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),i.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),l&&i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),i.jsx("tbody",{children:[...x1,...y1].map((s,c)=>i.jsxs("tr",{style:{background:c%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),l&&i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),i.jsx(mt,{children:"Zusatzoptionen"}),i.jsx(vt,{children:v1.map((s,c)=>i.jsx(I,{children:s},c))}),i.jsx(ha,{}),i.jsx(on,{})]})]})}function A3({showPrices:l}){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{children:"PRÄMIEN-MODELL"}),i.jsx(jt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),l&&i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),i.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),i.jsxs("tbody",{children:[L5.map((s,c)=>i.jsxs("tr",{style:{background:c%2===1?"#f8fafc":"transparent"},children:[i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),i.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),i.jsxs("tr",{style:{background:"#f0f9ff"},children:[i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Yc.starter}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Yc.premium}),i.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Yc.kombi})]})]})]}),i.jsx(mt,{children:"So funktioniert's"}),i.jsxs(vt,{children:[i.jsx(I,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),i.jsx(I,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),i.jsx(I,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),i.jsx(I,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),i.jsx(mt,{children:"Inkludierte Leistungen"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx(Oe,{children:i.jsx("strong",{children:"Starter:"})}),i.jsxs(vt,{children:[i.jsx(I,{children:"Stadionansage bei Erfolg"}),i.jsx(I,{children:"Logo auf Website"})]})]}),i.jsxs("div",{children:[i.jsx(Oe,{children:i.jsx("strong",{children:"Premium:"})}),i.jsxs(vt,{children:[i.jsx(I,{children:"+ Social Media Post bei Erfolg"}),i.jsx(I,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),i.jsx(ha,{}),i.jsx(on,{})]})]})}const g0=ht("herren/herren_jubel_500club");function T3(){return i.jsxs(wt,{children:[g0&&i.jsx("img",{src:g0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),i.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[i.jsx(jt,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),i.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[i.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den CLUB 500."})," ","Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),i.jsx(mt,{children:"Ihre Vorteile"}),i.jsxs(vt,{children:[i.jsxs(I,{children:["Offizielle ",i.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),i.jsxs(I,{children:["Veröffentlichung Ihres ",i.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),i.jsx(I,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),i.jsx(mt,{children:"Zahlungsoptionen"}),i.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),i.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),i.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(l=>i.jsxs("tr",{children:[i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:l.label}),i.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:l.betrag})]},l.label))})]}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),i.jsx(mt,{children:"Spendenkonto"}),i.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[i.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),i.jsx("br",{}),"IBAN: ",i.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",i.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[i.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",i.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),i.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",i.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),i.jsx(on,{})]})]})}function R3(){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG CLUB 500"}),i.jsxs(jt,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an"," ",Nt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(dt,{children:[i.jsx(et,{children:"Vorname:"}),i.jsx(Bt,{$lines:1})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"Nachname:"}),i.jsx(Bt,{$lines:1})]})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"Firma (optional):"}),i.jsx(Bt,{$lines:1})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"Straße, Hausnummer:"}),i.jsx(Bt,{$lines:1})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[i.jsxs(dt,{children:[i.jsx(et,{children:"PLZ:"}),i.jsx(Bt,{$lines:1})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"Ort:"}),i.jsx(Bt,{$lines:1})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[i.jsxs(dt,{children:[i.jsx(et,{children:"Geb.-Datum:"}),i.jsx(Bt,{$lines:1})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"Telefon:"}),i.jsx(Bt,{$lines:1})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"E-Mail:"}),i.jsx(Bt,{$lines:1})]})]}),i.jsx(mt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(l=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:i.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),i.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),i.jsx(mt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im CLUB 500 bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(l=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:i.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),i.jsxs(dt,{style:{marginTop:"2mm"},children:[i.jsx(et,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),i.jsx(Bt,{$lines:1})]}),i.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. CLUB 500. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[i.jsxs(dt,{children:[i.jsx(et,{children:"Konstanz, den _______________"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),i.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"Unterschrift:"}),i.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),i.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[i.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",i.jsx("br",{}),i.jsx("strong",{children:"Kontakt:"})," ",Nt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),i.jsxs(kf,{style:{marginTop:"auto"},children:[i.jsx(Un,{children:i.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),i.jsx(Un,{$center:!0,children:"CLUB 500"}),i.jsx(Un,{$right:!0,children:"partner.sckw.de"})]})]})]})}function M3(){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),i.jsx(jt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(l=>i.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[i.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:l.n}),i.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:l.t}),i.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:l.d})]},l.n))}),i.jsx(mt,{children:"Kontakt"}),i.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:Nt.email})]}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),i.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),i.jsxs("div",{style:{gridColumn:"1 / -1"},children:[i.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),i.jsxs("div",{style:{fontSize:"11pt"},children:[Nt.adresse.name," · ",Nt.adresse.strasse," ·"," ",Nt.adresse.plz," ",Nt.adresse.ort]})]})]}),i.jsx(mt,{children:"Gesprächsleitfaden"}),i.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "1,4 Mio. Social-Media-Views in dieser Saison – 100 % organisch, aktuell 394.000 Views/Monat."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),i.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),i.jsx(on,{})]})]})}function D3(){return i.jsxs(wt,{children:[i.jsx(Jt,{}),i.jsxs(Ft,{children:[i.jsx(Wt,{children:i.jsx(It,{src:"/logo.svg"})}),i.jsx(en,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),i.jsxs(jt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an"," ",Nt.email," senden."]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[i.jsxs(dt,{children:[i.jsx(et,{children:"Datum:"}),i.jsx(Bt,{$lines:1})]}),i.jsxs(dt,{children:[i.jsx(et,{children:"Gesprächsführer (Helfer):"}),i.jsx(Bt,{$lines:1})]})]}),H5.map((l,s)=>i.jsxs(dt,{children:[i.jsxs(et,{children:[l.label,":"]}),i.jsx(Bt,{$lines:l.lines})]},s)),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(l=>i.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:i.jsxs(et,{style:{marginBottom:0},children:["☐ ",l]})},l))}),i.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:i.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[i.jsx("strong",{children:"Schnellreferenz:"})," ",Nt.email," · partner.sckw.de · ",Nt.vollAdresse.replace(/\n/g," · ")]})}),i.jsxs(kf,{style:{marginTop:"auto"},children:[i.jsx(Un,{children:i.jsx("strong",{children:"Internes Dokument"})}),i.jsx(Un,{$center:!0}),i.jsx(Un,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const kn=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>i.jsx(y3,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>i.jsx(v3,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:l=>i.jsx(S3,{showPrices:l})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:l=>i.jsx(j3,{showPrices:l})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:l=>i.jsx(w3,{showPrices:l})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:l=>i.jsx(_3,{showPrices:l})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:l=>i.jsx(E3,{showPrices:l})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:l=>i.jsx(z3,{showPrices:l})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:l=>i.jsx(C3,{showPrices:l})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:l=>i.jsx(A3,{showPrices:l})},{id:"club500",label:"CLUB 500",group:"community",render:()=>i.jsx(T3,{})},{id:"club500form",label:"CLUB 500 Anmeldung",group:"community",render:()=>i.jsx(R3,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>i.jsx(M3,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>i.jsx(D3,{})}],k3=v.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print {
    display: none !important;
  }
`,O3=v.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,B3=v.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,N3=v.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,U3=v.button`
  background: ${l=>l.$on?"#1a365d":"#f1f5f9"};
  color: ${l=>l.$on?"#fff":"#475569"};
  border: 2px solid ${l=>l.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    opacity: 0.85;
  }
`,Qc=v.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,Kc=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,Xc=v.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 2px solid ${l=>l.$checked?"#1a365d":"#e2e8f0"};
  background: ${l=>l.$checked?"#f0f4ff":"#fff"};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${l=>l.$checked?"#1a365d":"#64748b"};
  transition: all 0.15s;
  user-select: none;
  &:hover {
    border-color: #94a3b8;
  }

  input {
    accent-color: #1a365d;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`,L3=v.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,ka=v.button`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background: #e2e8f0;
  }
`,H3=v.button`
  background: linear-gradient(135deg, #1a365d, #2d5a87);
  color: #fff;
  border: none;
  padding: 0.85rem 2.5rem;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1.5rem;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26, 54, 93, 0.3);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,G3=v.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function Y3(){const l=h3(),[s]=gp(),c=s.get("preset"),u=s.get("view"),f=()=>c==="club500"?new Set(["club500","club500form"]):new Set(kn.filter(Y=>Y.group==="broschüre").map(Y=>Y.id)),[d,y]=C.useState(!0),[b,h]=C.useState(f),[g,x]=C.useState(u==="preview"?"preview":"dashboard");if(!l)return i.jsx(Ts,{to:"/",replace:!0});const S=Y=>{h(se=>{const K=new Set(se);return K.has(Y)?K.delete(Y):K.add(Y),K})},w=()=>h(new Set(kn.map(Y=>Y.id))),k=()=>h(new Set),M=()=>h(new Set(kn.filter(Y=>Y.group==="broschüre").map(Y=>Y.id))),B=()=>h(new Set(kn.map(Y=>Y.id))),L=()=>h(new Set(["cover","why","spieltag","banden"])),V=()=>h(new Set(["cover","why","haupt","co","silber"])),X=()=>h(new Set(["club500","club500form"])),A=kn.filter(Y=>b.has(Y.id)),$=kn.filter(Y=>Y.group==="broschüre"),H=kn.filter(Y=>Y.group==="community"),F=kn.filter(Y=>Y.group==="helfer");return g==="preview"?i.jsxs(i.Fragment,{children:[i.jsx(m3,{}),i.jsxs(c0,{children:[i.jsxs(f0,{children:["Vorschau · ",A.length," Seiten"]}),i.jsxs(d0,{children:[i.jsx(ws,{$active:d,onClick:()=>y(Y=>!Y),children:d?"Preise ✓":"Preise ✗"}),i.jsx(ws,{onClick:()=>x("dashboard"),children:"Zurück"}),i.jsx(ws,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),i.jsxs(g3,{children:[i.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',i.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),i.jsx(p3,{children:A.map(Y=>i.jsx("div",{children:Y.render(d)},Y.id))})]}):i.jsxs(i.Fragment,{children:[i.jsxs(c0,{children:[i.jsx(f0,{children:"Sponsoring-Kit · SCKW"}),i.jsx(d0,{children:i.jsx(ws,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),i.jsxs(k3,{children:[i.jsx(O3,{children:"Sponsoring-Kit zusammenstellen"}),i.jsx(B3,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),i.jsxs(N3,{children:[i.jsx(U3,{$on:d,onClick:()=>y(Y=>!Y),children:d?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),i.jsxs(G3,{children:[b.size," von ",kn.length," Seiten ausgewählt"]})]}),i.jsxs(L3,{children:[i.jsx(ka,{onClick:w,children:"Alles"}),i.jsx(ka,{onClick:M,children:"Broschüre komplett"}),i.jsx(ka,{onClick:B,children:"Komplett-Kit (+ Helfer)"}),i.jsx(ka,{onClick:V,children:"Nur Premium-Pakete"}),i.jsx(ka,{onClick:L,children:"Starter-Paket"}),i.jsx(ka,{onClick:X,children:"CLUB 500"}),i.jsx(ka,{onClick:k,children:"Keine"})]}),i.jsx(Qc,{children:"Broschüre"}),i.jsx(Kc,{children:$.map(Y=>i.jsxs(Xc,{$checked:b.has(Y.id),children:[i.jsx("input",{type:"checkbox",checked:b.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),i.jsx(Qc,{children:"Community / CLUB 500"}),i.jsx(Kc,{children:H.map(Y=>i.jsxs(Xc,{$checked:b.has(Y.id),children:[i.jsx("input",{type:"checkbox",checked:b.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),i.jsx(Qc,{children:"Helfer-Anhang"}),i.jsx(Kc,{children:F.map(Y=>i.jsxs(Xc,{$checked:b.has(Y.id),children:[i.jsx("input",{type:"checkbox",checked:b.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),i.jsxs(H3,{disabled:b.size===0,onClick:()=>x("preview"),children:["Vorschau & Drucken (",b.size," Seiten)"]})]})]})}function V3(l,s){if(l.match(/^[a-z]+:\/\//i))return l;if(l.match(/^\/\//))return window.location.protocol+l;if(l.match(/^[a-z]+:/i))return l;const c=document.implementation.createHTMLDocument(),u=c.createElement("base"),f=c.createElement("a");return c.head.appendChild(u),c.body.appendChild(f),s&&(u.href=s),f.href=l,f.href}const q3=(()=>{let l=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(l+=1,`u${s()}${l}`)})();function da(l){const s=[];for(let c=0,u=l.length;c<u;c++)s.push(l[c]);return s}let Rl=null;function S1(l={}){return Rl||(l.includeStyleProperties?(Rl=l.includeStyleProperties,Rl):(Rl=da(window.getComputedStyle(document.documentElement)),Rl))}function Gs(l,s){const u=(l.ownerDocument.defaultView||window).getComputedStyle(l).getPropertyValue(s);return u?parseFloat(u.replace("px","")):0}function $3(l){const s=Gs(l,"border-left-width"),c=Gs(l,"border-right-width");return l.clientWidth+s+c}function Q3(l){const s=Gs(l,"border-top-width"),c=Gs(l,"border-bottom-width");return l.clientHeight+s+c}function j1(l,s={}){const c=s.width||$3(l),u=s.height||Q3(l);return{width:c,height:u}}function K3(){let l,s;try{s=process}catch{}const c=s&&s.env?s.env.devicePixelRatio:null;return c&&(l=parseInt(c,10),Number.isNaN(l)&&(l=1)),l||window.devicePixelRatio||1}const kt=16384;function X3(l){(l.width>kt||l.height>kt)&&(l.width>kt&&l.height>kt?l.width>l.height?(l.height*=kt/l.width,l.width=kt):(l.width*=kt/l.height,l.height=kt):l.width>kt?(l.height*=kt/l.width,l.width=kt):(l.width*=kt/l.height,l.height=kt))}function Ys(l){return new Promise((s,c)=>{const u=new Image;u.onload=()=>{u.decode().then(()=>{requestAnimationFrame(()=>s(u))})},u.onerror=c,u.crossOrigin="anonymous",u.decoding="async",u.src=l})}async function Z3(l){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(l)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function P3(l,s,c){const u="http://www.w3.org/2000/svg",f=document.createElementNS(u,"svg"),d=document.createElementNS(u,"foreignObject");return f.setAttribute("width",`${s}`),f.setAttribute("height",`${c}`),f.setAttribute("viewBox",`0 0 ${s} ${c}`),d.setAttribute("width","100%"),d.setAttribute("height","100%"),d.setAttribute("x","0"),d.setAttribute("y","0"),d.setAttribute("externalResourcesRequired","true"),f.appendChild(d),d.appendChild(l),Z3(f)}const St=(l,s)=>{if(l instanceof s)return!0;const c=Object.getPrototypeOf(l);return c===null?!1:c.constructor.name===s.name||St(c,s)};function J3(l){const s=l.getPropertyValue("content");return`${l.cssText} content: '${s.replace(/'|"/g,"")}';`}function F3(l,s){return S1(s).map(c=>{const u=l.getPropertyValue(c),f=l.getPropertyPriority(c);return`${c}: ${u}${f?" !important":""};`}).join(" ")}function W3(l,s,c,u){const f=`.${l}:${s}`,d=c.cssText?J3(c):F3(c,u);return document.createTextNode(`${f}{${d}}`)}function p0(l,s,c,u){const f=window.getComputedStyle(l,c),d=f.getPropertyValue("content");if(d===""||d==="none")return;const y=q3();try{s.className=`${s.className} ${y}`}catch{return}const b=document.createElement("style");b.appendChild(W3(y,c,f,u)),s.appendChild(b)}function I3(l,s,c){p0(l,s,":before",c),p0(l,s,":after",c)}const b0="application/font-woff",x0="image/jpeg",ew={woff:b0,woff2:b0,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:x0,jpeg:x0,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function tw(l){const s=/\.([^./]*?)$/g.exec(l);return s?s[1]:""}function Of(l){const s=tw(l).toLowerCase();return ew[s]||""}function nw(l){return l.split(/,/)[1]}function df(l){return l.search(/^(data:)/)!==-1}function aw(l,s){return`data:${s};base64,${l}`}async function w1(l,s,c){const u=await fetch(l,s);if(u.status===404)throw new Error(`Resource "${u.url}" not found`);const f=await u.blob();return new Promise((d,y)=>{const b=new FileReader;b.onerror=y,b.onloadend=()=>{try{d(c({res:u,result:b.result}))}catch(h){y(h)}},b.readAsDataURL(f)})}const Zc={};function lw(l,s,c){let u=l.replace(/\?.*/,"");return c&&(u=l),/ttf|otf|eot|woff2?/i.test(u)&&(u=u.replace(/.*\//,"")),s?`[${s}]${u}`:u}async function Bf(l,s,c){const u=lw(l,s,c.includeQueryParams);if(Zc[u]!=null)return Zc[u];c.cacheBust&&(l+=(/\?/.test(l)?"&":"?")+new Date().getTime());let f;try{const d=await w1(l,c.fetchRequestInit,({res:y,result:b})=>(s||(s=y.headers.get("Content-Type")||""),nw(b)));f=aw(d,s)}catch(d){f=c.imagePlaceholder||"";let y=`Failed to fetch resource: ${l}`;d&&(y=typeof d=="string"?d:d.message),y&&console.warn(y)}return Zc[u]=f,f}async function rw(l){const s=l.toDataURL();return s==="data:,"?l.cloneNode(!1):Ys(s)}async function iw(l,s){if(l.currentSrc){const d=document.createElement("canvas"),y=d.getContext("2d");d.width=l.clientWidth,d.height=l.clientHeight,y?.drawImage(l,0,0,d.width,d.height);const b=d.toDataURL();return Ys(b)}const c=l.poster,u=Of(c),f=await Bf(c,u,s);return Ys(f)}async function sw(l,s){var c;try{if(!((c=l?.contentDocument)===null||c===void 0)&&c.body)return await Ws(l.contentDocument.body,s,!0)}catch{}return l.cloneNode(!1)}async function ow(l,s){return St(l,HTMLCanvasElement)?rw(l):St(l,HTMLVideoElement)?iw(l,s):St(l,HTMLIFrameElement)?sw(l,s):l.cloneNode(_1(l))}const uw=l=>l.tagName!=null&&l.tagName.toUpperCase()==="SLOT",_1=l=>l.tagName!=null&&l.tagName.toUpperCase()==="SVG";async function cw(l,s,c){var u,f;if(_1(s))return s;let d=[];return uw(l)&&l.assignedNodes?d=da(l.assignedNodes()):St(l,HTMLIFrameElement)&&(!((u=l.contentDocument)===null||u===void 0)&&u.body)?d=da(l.contentDocument.body.childNodes):d=da(((f=l.shadowRoot)!==null&&f!==void 0?f:l).childNodes),d.length===0||St(l,HTMLVideoElement)||await d.reduce((y,b)=>y.then(()=>Ws(b,c)).then(h=>{h&&s.appendChild(h)}),Promise.resolve()),s}function fw(l,s,c){const u=s.style;if(!u)return;const f=window.getComputedStyle(l);f.cssText?(u.cssText=f.cssText,u.transformOrigin=f.transformOrigin):S1(c).forEach(d=>{let y=f.getPropertyValue(d);d==="font-size"&&y.endsWith("px")&&(y=`${Math.floor(parseFloat(y.substring(0,y.length-2)))-.1}px`),St(l,HTMLIFrameElement)&&d==="display"&&y==="inline"&&(y="block"),d==="d"&&s.getAttribute("d")&&(y=`path(${s.getAttribute("d")})`),u.setProperty(d,y,f.getPropertyPriority(d))})}function dw(l,s){St(l,HTMLTextAreaElement)&&(s.innerHTML=l.value),St(l,HTMLInputElement)&&s.setAttribute("value",l.value)}function hw(l,s){if(St(l,HTMLSelectElement)){const c=s,u=Array.from(c.children).find(f=>l.value===f.getAttribute("value"));u&&u.setAttribute("selected","")}}function mw(l,s,c){return St(s,Element)&&(fw(l,s,c),I3(l,s,c),dw(l,s),hw(l,s)),s}async function gw(l,s){const c=l.querySelectorAll?l.querySelectorAll("use"):[];if(c.length===0)return l;const u={};for(let d=0;d<c.length;d++){const b=c[d].getAttribute("xlink:href");if(b){const h=l.querySelector(b),g=document.querySelector(b);!h&&g&&!u[b]&&(u[b]=await Ws(g,s,!0))}}const f=Object.values(u);if(f.length){const d="http://www.w3.org/1999/xhtml",y=document.createElementNS(d,"svg");y.setAttribute("xmlns",d),y.style.position="absolute",y.style.width="0",y.style.height="0",y.style.overflow="hidden",y.style.display="none";const b=document.createElementNS(d,"defs");y.appendChild(b);for(let h=0;h<f.length;h++)b.appendChild(f[h]);l.appendChild(y)}return l}async function Ws(l,s,c){return!c&&s.filter&&!s.filter(l)?null:Promise.resolve(l).then(u=>ow(u,s)).then(u=>cw(l,u,s)).then(u=>mw(l,u,s)).then(u=>gw(u,s))}const E1=/url\((['"]?)([^'"]+?)\1\)/g,pw=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,bw=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function xw(l){const s=l.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function yw(l){const s=[];return l.replace(E1,(c,u,f)=>(s.push(f),c)),s.filter(c=>!df(c))}async function vw(l,s,c,u,f){try{const d=c?V3(s,c):s,y=Of(s);let b;return f||(b=await Bf(d,y,u)),l.replace(xw(s),`$1${b}$3`)}catch{}return l}function Sw(l,{preferredFontFormat:s}){return s?l.replace(bw,c=>{for(;;){const[u,,f]=pw.exec(c)||[];if(!f)return"";if(f===s)return`src: ${u};`}}):l}function z1(l){return l.search(E1)!==-1}async function C1(l,s,c){if(!z1(l))return l;const u=Sw(l,c);return yw(u).reduce((d,y)=>d.then(b=>vw(b,y,s,c)),Promise.resolve(u))}async function Ml(l,s,c){var u;const f=(u=s.style)===null||u===void 0?void 0:u.getPropertyValue(l);if(f){const d=await C1(f,null,c);return s.style.setProperty(l,d,s.style.getPropertyPriority(l)),!0}return!1}async function jw(l,s){await Ml("background",l,s)||await Ml("background-image",l,s),await Ml("mask",l,s)||await Ml("-webkit-mask",l,s)||await Ml("mask-image",l,s)||await Ml("-webkit-mask-image",l,s)}async function ww(l,s){const c=St(l,HTMLImageElement);if(!(c&&!df(l.src))&&!(St(l,SVGImageElement)&&!df(l.href.baseVal)))return;const u=c?l.src:l.href.baseVal,f=await Bf(u,Of(u),s);await new Promise((d,y)=>{l.onload=d,l.onerror=s.onImageErrorHandler?(...h)=>{try{d(s.onImageErrorHandler(...h))}catch(g){y(g)}}:y;const b=l;b.decode&&(b.decode=d),b.loading==="lazy"&&(b.loading="eager"),c?(l.srcset="",l.src=f):l.href.baseVal=f})}async function _w(l,s){const u=da(l.childNodes).map(f=>A1(f,s));await Promise.all(u).then(()=>l)}async function A1(l,s){St(l,Element)&&(await jw(l,s),await ww(l,s),await _w(l,s))}function Ew(l,s){const{style:c}=l;s.backgroundColor&&(c.backgroundColor=s.backgroundColor),s.width&&(c.width=`${s.width}px`),s.height&&(c.height=`${s.height}px`);const u=s.style;return u!=null&&Object.keys(u).forEach(f=>{c[f]=u[f]}),l}const y0={};async function v0(l){let s=y0[l];if(s!=null)return s;const u=await(await fetch(l)).text();return s={url:l,cssText:u},y0[l]=s,s}async function S0(l,s){let c=l.cssText;const u=/url\(["']?([^"')]+)["']?\)/g,d=(c.match(/url\([^)]+\)/g)||[]).map(async y=>{let b=y.replace(u,"$1");return b.startsWith("https://")||(b=new URL(b,l.url).href),w1(b,s.fetchRequestInit,({result:h})=>(c=c.replace(y,`url(${h})`),[y,h]))});return Promise.all(d).then(()=>c)}function j0(l){if(l==null)return[];const s=[],c=/(\/\*[\s\S]*?\*\/)/gi;let u=l.replace(c,"");const f=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=f.exec(u);if(h===null)break;s.push(h[0])}u=u.replace(f,"");const d=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,y="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",b=new RegExp(y,"gi");for(;;){let h=d.exec(u);if(h===null){if(h=b.exec(u),h===null)break;d.lastIndex=b.lastIndex}else b.lastIndex=d.lastIndex;s.push(h[0])}return s}async function zw(l,s){const c=[],u=[];return l.forEach(f=>{if("cssRules"in f)try{da(f.cssRules||[]).forEach((d,y)=>{if(d.type===CSSRule.IMPORT_RULE){let b=y+1;const h=d.href,g=v0(h).then(x=>S0(x,s)).then(x=>j0(x).forEach(S=>{try{f.insertRule(S,S.startsWith("@import")?b+=1:f.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:S,error:w})}})).catch(x=>{console.error("Error loading remote css",x.toString())});u.push(g)}})}catch(d){const y=l.find(b=>b.href==null)||document.styleSheets[0];f.href!=null&&u.push(v0(f.href).then(b=>S0(b,s)).then(b=>j0(b).forEach(h=>{y.insertRule(h,y.cssRules.length)})).catch(b=>{console.error("Error loading remote stylesheet",b)})),console.error("Error inlining remote css file",d)}}),Promise.all(u).then(()=>(l.forEach(f=>{if("cssRules"in f)try{da(f.cssRules||[]).forEach(d=>{c.push(d)})}catch(d){console.error(`Error while reading CSS rules from ${f.href}`,d)}}),c))}function Cw(l){return l.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>z1(s.style.getPropertyValue("src")))}async function Aw(l,s){if(l.ownerDocument==null)throw new Error("Provided element is not within a Document");const c=da(l.ownerDocument.styleSheets),u=await zw(c,s);return Cw(u)}function T1(l){return l.trim().replace(/["']/g,"")}function Tw(l){const s=new Set;function c(u){(u.style.fontFamily||getComputedStyle(u).fontFamily).split(",").forEach(d=>{s.add(T1(d))}),Array.from(u.children).forEach(d=>{d instanceof HTMLElement&&c(d)})}return c(l),s}async function Rw(l,s){const c=await Aw(l,s),u=Tw(l);return(await Promise.all(c.filter(d=>u.has(T1(d.style.fontFamily))).map(d=>{const y=d.parentStyleSheet?d.parentStyleSheet.href:null;return C1(d.cssText,y,s)}))).join(`
`)}async function Mw(l,s){const c=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await Rw(l,s);if(c){const u=document.createElement("style"),f=document.createTextNode(c);u.appendChild(f),l.firstChild?l.insertBefore(u,l.firstChild):l.appendChild(u)}}async function Dw(l,s={}){const{width:c,height:u}=j1(l,s),f=await Ws(l,s,!0);return await Mw(f,s),await A1(f,s),Ew(f,s),await P3(f,c,u)}async function kw(l,s={}){const{width:c,height:u}=j1(l,s),f=await Dw(l,s),d=await Ys(f),y=document.createElement("canvas"),b=y.getContext("2d"),h=s.pixelRatio||K3(),g=s.canvasWidth||c,x=s.canvasHeight||u;return y.width=g*h,y.height=x*h,s.skipAutoScale||X3(y),y.style.width=`${g}`,y.style.height=`${x}`,s.backgroundColor&&(b.fillStyle=s.backgroundColor,b.fillRect(0,0,y.width,y.height)),b.drawImage(d,0,0,y.width,y.height),y}async function Ow(l,s={}){return(await kw(l,s)).toDataURL()}const $r=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],Bw=v.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,Nw=v.div`
  max-width: 1200px;
  margin: 0 auto;
`,Uw=v.div`
  text-align: center;
  margin-bottom: 2rem;
`,Lw=v.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Hw=v.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,Gw=v.select`
  display: block;
  margin: 0 auto 2rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-weight: 600;
  color: #1a365d;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`,Yw=v.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Vw=v.div`
  flex: 1;
  min-width: 0;
`,qw=v.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,$w=v.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,Qw=v.div`
  position: absolute;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:hover {
    background: ${l=>l.$hasLogo?"transparent":"rgba(59,130,246,0.08)"};
  }
`,Kw=v.img`
  width: ${l=>l.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${l=>l.$offsetX}%, ${l=>l.$offsetY}%);
`,Xw=v.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,Zw=v.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,Pw=v.div`
  background: #fff;
  border: 2px solid ${l=>l.$active?"#3b82f6":"#e5e7eb"};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
  }
`,Jw=v.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,Fw=v.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Ww=v.label`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  background: #3b82f6;
  color: #fff;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`,Iw=v.button`
  padding: 0.4rem 0.8rem;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #fecaca;
  }
`,e_=v.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,t_=v.input`
  display: none;
`,n_=v.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,Pc=v.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Jc=v.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,Fc=v.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,a_=v.button`
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.5rem;
  background: #f3f4f6;
  color: #666;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
    color: #333;
  }
`,l_=v.button`
  width: 100%;
  padding: 0.7rem;
  margin-top: 0.5rem;
  background: #1a365d;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #2d5a87;
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }
`;function r_(){const[l,s]=C.useState($r[0].id),[c,u]=C.useState(null),[f,d]=C.useState([]),[y,b]=C.useState(!1),h=C.useRef({}),g=C.useRef(null),x=$r.find(A=>A.id===l)??$r[0],S=A=>f.find($=>$.zoneId===A),w=C.useCallback((A,$)=>{if(!$)return;const H=new FileReader;H.onload=F=>{const Y=F.target?.result;d(se=>[...se.filter(K=>K.zoneId!==A),{zoneId:A,dataUrl:Y,scale:1,offsetX:0,offsetY:0}])},H.readAsDataURL($)},[]),k=C.useCallback((A,$)=>{d(H=>H.map(F=>F.zoneId===A?{...F,scale:$}:F))},[]),M=C.useCallback((A,$,H)=>{d(F=>F.map(Y=>Y.zoneId===A?{...Y,offsetX:$,offsetY:H}:Y))},[]),B=C.useCallback(A=>{d($=>$.filter(H=>H.zoneId!==A))},[]),L=C.useCallback(()=>{d([]),u(null)},[]),V=C.useCallback(async()=>{if(g.current){b(!0);try{const A=await Ow(g.current,{pixelRatio:2,cacheBust:!0}),$=document.createElement("a");$.download=`${x.label}-mockup.png`,$.href=A,$.click()}finally{b(!1)}}},[x.label]),X=A=>{u(A.id),S(A.id)||h.current[A.id]?.click()};return i.jsx(Bw,{children:i.jsxs(Nw,{children:[i.jsxs(Uw,{children:[i.jsx(Lw,{children:"Mockup Generator"}),i.jsx(Hw,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),$r.length>1&&i.jsx(Gw,{value:l,onChange:A=>{s(A.target.value),d([]),u(null)},children:$r.map(A=>i.jsx("option",{value:A.id,children:A.label},A.id))}),i.jsxs(Yw,{children:[i.jsx(Vw,{children:i.jsxs(qw,{ref:g,children:[i.jsx($w,{src:x.image,alt:x.label,draggable:!1}),x.zones.map(A=>{const $=S(A.id);return i.jsx(Qw,{$active:c===A.id,$hasLogo:!!$,style:{left:`${A.x}%`,top:`${A.y}%`,width:`${A.width}%`,height:`${A.height}%`},onClick:()=>X(A),onDragOver:H=>{H.preventDefault(),u(A.id)},onDrop:H=>{H.preventDefault();const F=H.dataTransfer.files?.[0];w(A.id,F)},children:$&&i.jsx(Kw,{src:$.dataUrl,alt:"Logo",draggable:!1,$scale:$.scale,$offsetX:$.offsetX,$offsetY:$.offsetY})},A.id)})]})}),i.jsxs(Xw,{children:[i.jsx(Zw,{children:"Werbeflächen"}),x.zones.map(A=>{const $=S(A.id);return i.jsxs(Pw,{$active:c===A.id,onClick:()=>u(A.id),children:[i.jsx(Jw,{children:A.label}),i.jsxs(Fw,{children:[i.jsx(Ww,{htmlFor:`file-${A.id}`,children:$?"Ändern":"Logo hochladen"}),i.jsx(t_,{id:`file-${A.id}`,ref:H=>{h.current[A.id]=H},type:"file",accept:"image/*",onChange:H=>w(A.id,H.target.files?.[0])}),$&&i.jsx(Iw,{onClick:H=>{H.stopPropagation(),B(A.id)},children:"Entfernen"}),$&&i.jsx(e_,{src:$.dataUrl,alt:"Vorschau"})]}),$&&i.jsxs(i.Fragment,{children:[i.jsxs(Pc,{children:[i.jsxs(Jc,{children:[Math.round($.scale*100),"%"]}),i.jsx(Fc,{type:"range",min:"0.3",max:"3",step:"0.05",value:$.scale,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),k(A.id,parseFloat(H.target.value))}})]}),i.jsxs(Pc,{children:[i.jsx(Jc,{children:"X"}),i.jsx(Fc,{type:"range",min:"-100",max:"100",step:"1",value:$.offsetX,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),M(A.id,parseFloat(H.target.value),$.offsetY)}})]}),i.jsxs(Pc,{children:[i.jsx(Jc,{children:"Y"}),i.jsx(Fc,{type:"range",min:"-100",max:"100",step:"1",value:$.offsetY,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),M(A.id,$.offsetX,parseFloat(H.target.value))}})]})]}),!$&&i.jsx(n_,{children:"Klicken oder Bild hierher ziehen"})]},A.id)}),f.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(l_,{onClick:V,disabled:y,children:y?"Wird erstellt...":"Bild herunterladen"}),i.jsx(a_,{onClick:L,children:"Alle Logos entfernen"})]})]})]})]})})}var i_=Object.defineProperty,Vs=Object.getOwnPropertySymbols,R1=Object.prototype.hasOwnProperty,M1=Object.prototype.propertyIsEnumerable,w0=(l,s,c)=>s in l?i_(l,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[s]=c,hf=(l,s)=>{for(var c in s||(s={}))R1.call(s,c)&&w0(l,c,s[c]);if(Vs)for(var c of Vs(s))M1.call(s,c)&&w0(l,c,s[c]);return l},mf=(l,s)=>{var c={};for(var u in l)R1.call(l,u)&&s.indexOf(u)<0&&(c[u]=l[u]);if(l!=null&&Vs)for(var u of Vs(l))s.indexOf(u)<0&&M1.call(l,u)&&(c[u]=l[u]);return c};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ha;(l=>{const s=class pe{constructor(h,g,x,S){if(this.version=h,this.errorCorrectionLevel=g,this.modules=[],this.isFunction=[],h<pe.MIN_VERSION||h>pe.MAX_VERSION)throw new RangeError("Version value out of range");if(S<-1||S>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let w=[];for(let M=0;M<this.size;M++)w.push(!1);for(let M=0;M<this.size;M++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const k=this.addEccAndInterleave(x);if(this.drawCodewords(k),S==-1){let M=1e9;for(let B=0;B<8;B++){this.applyMask(B),this.drawFormatBits(B);const L=this.getPenaltyScore();L<M&&(S=B,M=L),this.applyMask(B)}}f(0<=S&&S<=7),this.mask=S,this.applyMask(S),this.drawFormatBits(S),this.isFunction=[]}static encodeText(h,g){const x=l.QrSegment.makeSegments(h);return pe.encodeSegments(x,g)}static encodeBinary(h,g){const x=l.QrSegment.makeBytes(h);return pe.encodeSegments([x],g)}static encodeSegments(h,g,x=1,S=40,w=-1,k=!0){if(!(pe.MIN_VERSION<=x&&x<=S&&S<=pe.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let M,B;for(M=x;;M++){const A=pe.getNumDataCodewords(M,g)*8,$=y.getTotalBits(h,M);if($<=A){B=$;break}if(M>=S)throw new RangeError("Data too long")}for(const A of[pe.Ecc.MEDIUM,pe.Ecc.QUARTILE,pe.Ecc.HIGH])k&&B<=pe.getNumDataCodewords(M,A)*8&&(g=A);let L=[];for(const A of h){c(A.mode.modeBits,4,L),c(A.numChars,A.mode.numCharCountBits(M),L);for(const $ of A.getData())L.push($)}f(L.length==B);const V=pe.getNumDataCodewords(M,g)*8;f(L.length<=V),c(0,Math.min(4,V-L.length),L),c(0,(8-L.length%8)%8,L),f(L.length%8==0);for(let A=236;L.length<V;A^=253)c(A,8,L);let X=[];for(;X.length*8<L.length;)X.push(0);return L.forEach((A,$)=>X[$>>>3]|=A<<7-($&7)),new pe(M,g,X,w)}getModule(h,g){return 0<=h&&h<this.size&&0<=g&&g<this.size&&this.modules[g][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let x=0;x<this.size;x++)this.setFunctionModule(6,x,x%2==0),this.setFunctionModule(x,6,x%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),g=h.length;for(let x=0;x<g;x++)for(let S=0;S<g;S++)x==0&&S==0||x==0&&S==g-1||x==g-1&&S==0||this.drawAlignmentPattern(h[x],h[S]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const g=this.errorCorrectionLevel.formatBits<<3|h;let x=g;for(let w=0;w<10;w++)x=x<<1^(x>>>9)*1335;const S=(g<<10|x)^21522;f(S>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,u(S,w));this.setFunctionModule(8,7,u(S,6)),this.setFunctionModule(8,8,u(S,7)),this.setFunctionModule(7,8,u(S,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,u(S,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,u(S,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,u(S,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let x=0;x<12;x++)h=h<<1^(h>>>11)*7973;const g=this.version<<12|h;f(g>>>18==0);for(let x=0;x<18;x++){const S=u(g,x),w=this.size-11+x%3,k=Math.floor(x/3);this.setFunctionModule(w,k,S),this.setFunctionModule(k,w,S)}}drawFinderPattern(h,g){for(let x=-4;x<=4;x++)for(let S=-4;S<=4;S++){const w=Math.max(Math.abs(S),Math.abs(x)),k=h+S,M=g+x;0<=k&&k<this.size&&0<=M&&M<this.size&&this.setFunctionModule(k,M,w!=2&&w!=4)}}drawAlignmentPattern(h,g){for(let x=-2;x<=2;x++)for(let S=-2;S<=2;S++)this.setFunctionModule(h+S,g+x,Math.max(Math.abs(S),Math.abs(x))!=1)}setFunctionModule(h,g,x){this.modules[g][h]=x,this.isFunction[g][h]=!0}addEccAndInterleave(h){const g=this.version,x=this.errorCorrectionLevel;if(h.length!=pe.getNumDataCodewords(g,x))throw new RangeError("Invalid argument");const S=pe.NUM_ERROR_CORRECTION_BLOCKS[x.ordinal][g],w=pe.ECC_CODEWORDS_PER_BLOCK[x.ordinal][g],k=Math.floor(pe.getNumRawDataModules(g)/8),M=S-k%S,B=Math.floor(k/S);let L=[];const V=pe.reedSolomonComputeDivisor(w);for(let A=0,$=0;A<S;A++){let H=h.slice($,$+B-w+(A<M?0:1));$+=H.length;const F=pe.reedSolomonComputeRemainder(H,V);A<M&&H.push(0),L.push(H.concat(F))}let X=[];for(let A=0;A<L[0].length;A++)L.forEach(($,H)=>{(A!=B-w||H>=M)&&X.push($[A])});return f(X.length==k),X}drawCodewords(h){if(h.length!=Math.floor(pe.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let g=0;for(let x=this.size-1;x>=1;x-=2){x==6&&(x=5);for(let S=0;S<this.size;S++)for(let w=0;w<2;w++){const k=x-w,B=(x+1&2)==0?this.size-1-S:S;!this.isFunction[B][k]&&g<h.length*8&&(this.modules[B][k]=u(h[g>>>3],7-(g&7)),g++)}}f(g==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let g=0;g<this.size;g++)for(let x=0;x<this.size;x++){let S;switch(h){case 0:S=(x+g)%2==0;break;case 1:S=g%2==0;break;case 2:S=x%3==0;break;case 3:S=(x+g)%3==0;break;case 4:S=(Math.floor(x/3)+Math.floor(g/2))%2==0;break;case 5:S=x*g%2+x*g%3==0;break;case 6:S=(x*g%2+x*g%3)%2==0;break;case 7:S=((x+g)%2+x*g%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[g][x]&&S&&(this.modules[g][x]=!this.modules[g][x])}}getPenaltyScore(){let h=0;for(let w=0;w<this.size;w++){let k=!1,M=0,B=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[w][L]==k?(M++,M==5?h+=pe.PENALTY_N1:M>5&&h++):(this.finderPenaltyAddHistory(M,B),k||(h+=this.finderPenaltyCountPatterns(B)*pe.PENALTY_N3),k=this.modules[w][L],M=1);h+=this.finderPenaltyTerminateAndCount(k,M,B)*pe.PENALTY_N3}for(let w=0;w<this.size;w++){let k=!1,M=0,B=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[L][w]==k?(M++,M==5?h+=pe.PENALTY_N1:M>5&&h++):(this.finderPenaltyAddHistory(M,B),k||(h+=this.finderPenaltyCountPatterns(B)*pe.PENALTY_N3),k=this.modules[L][w],M=1);h+=this.finderPenaltyTerminateAndCount(k,M,B)*pe.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let k=0;k<this.size-1;k++){const M=this.modules[w][k];M==this.modules[w][k+1]&&M==this.modules[w+1][k]&&M==this.modules[w+1][k+1]&&(h+=pe.PENALTY_N2)}let g=0;for(const w of this.modules)g=w.reduce((k,M)=>k+(M?1:0),g);const x=this.size*this.size,S=Math.ceil(Math.abs(g*20-x*10)/x)-1;return f(0<=S&&S<=9),h+=S*pe.PENALTY_N4,f(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,g=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let x=[6];for(let S=this.size-7;x.length<h;S-=g)x.splice(1,0,S);return x}}static getNumRawDataModules(h){if(h<pe.MIN_VERSION||h>pe.MAX_VERSION)throw new RangeError("Version number out of range");let g=(16*h+128)*h+64;if(h>=2){const x=Math.floor(h/7)+2;g-=(25*x-10)*x-55,h>=7&&(g-=36)}return f(208<=g&&g<=29648),g}static getNumDataCodewords(h,g){return Math.floor(pe.getNumRawDataModules(h)/8)-pe.ECC_CODEWORDS_PER_BLOCK[g.ordinal][h]*pe.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let g=[];for(let S=0;S<h-1;S++)g.push(0);g.push(1);let x=1;for(let S=0;S<h;S++){for(let w=0;w<g.length;w++)g[w]=pe.reedSolomonMultiply(g[w],x),w+1<g.length&&(g[w]^=g[w+1]);x=pe.reedSolomonMultiply(x,2)}return g}static reedSolomonComputeRemainder(h,g){let x=g.map(S=>0);for(const S of h){const w=S^x.shift();x.push(0),g.forEach((k,M)=>x[M]^=pe.reedSolomonMultiply(k,w))}return x}static reedSolomonMultiply(h,g){if(h>>>8||g>>>8)throw new RangeError("Byte out of range");let x=0;for(let S=7;S>=0;S--)x=x<<1^(x>>>7)*285,x^=(g>>>S&1)*h;return f(x>>>8==0),x}finderPenaltyCountPatterns(h){const g=h[1];f(g<=this.size*3);const x=g>0&&h[2]==g&&h[3]==g*3&&h[4]==g&&h[5]==g;return(x&&h[0]>=g*4&&h[6]>=g?1:0)+(x&&h[6]>=g*4&&h[0]>=g?1:0)}finderPenaltyTerminateAndCount(h,g,x){return h&&(this.finderPenaltyAddHistory(g,x),g=0),g+=this.size,this.finderPenaltyAddHistory(g,x),this.finderPenaltyCountPatterns(x)}finderPenaltyAddHistory(h,g){g[0]==0&&(h+=this.size),g.pop(),g.unshift(h)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],l.QrCode=s;function c(b,h,g){if(h<0||h>31||b>>>h)throw new RangeError("Value out of range");for(let x=h-1;x>=0;x--)g.push(b>>>x&1)}function u(b,h){return(b>>>h&1)!=0}function f(b){if(!b)throw new Error("Assertion error")}const d=class Ye{constructor(h,g,x){if(this.mode=h,this.numChars=g,this.bitData=x,g<0)throw new RangeError("Invalid argument");this.bitData=x.slice()}static makeBytes(h){let g=[];for(const x of h)c(x,8,g);return new Ye(Ye.Mode.BYTE,h.length,g)}static makeNumeric(h){if(!Ye.isNumeric(h))throw new RangeError("String contains non-numeric characters");let g=[];for(let x=0;x<h.length;){const S=Math.min(h.length-x,3);c(parseInt(h.substring(x,x+S),10),S*3+1,g),x+=S}return new Ye(Ye.Mode.NUMERIC,h.length,g)}static makeAlphanumeric(h){if(!Ye.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let g=[],x;for(x=0;x+2<=h.length;x+=2){let S=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x))*45;S+=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x+1)),c(S,11,g)}return x<h.length&&c(Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x)),6,g),new Ye(Ye.Mode.ALPHANUMERIC,h.length,g)}static makeSegments(h){return h==""?[]:Ye.isNumeric(h)?[Ye.makeNumeric(h)]:Ye.isAlphanumeric(h)?[Ye.makeAlphanumeric(h)]:[Ye.makeBytes(Ye.toUtf8ByteArray(h))]}static makeEci(h){let g=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)c(h,8,g);else if(h<16384)c(2,2,g),c(h,14,g);else if(h<1e6)c(6,3,g),c(h,21,g);else throw new RangeError("ECI assignment value out of range");return new Ye(Ye.Mode.ECI,0,g)}static isNumeric(h){return Ye.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return Ye.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,g){let x=0;for(const S of h){const w=S.mode.numCharCountBits(g);if(S.numChars>=1<<w)return 1/0;x+=4+w+S.bitData.length}return x}static toUtf8ByteArray(h){h=encodeURI(h);let g=[];for(let x=0;x<h.length;x++)h.charAt(x)!="%"?g.push(h.charCodeAt(x)):(g.push(parseInt(h.substring(x+1,x+3),16)),x+=2);return g}};d.NUMERIC_REGEX=/^[0-9]*$/,d.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,d.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let y=d;l.QrSegment=d})(Ha||(Ha={}));(l=>{(s=>{const c=class{constructor(f,d){this.ordinal=f,this.formatBits=d}};c.LOW=new c(0,1),c.MEDIUM=new c(1,0),c.QUARTILE=new c(2,3),c.HIGH=new c(3,2),s.Ecc=c})(l.QrCode||(l.QrCode={}))})(Ha||(Ha={}));(l=>{(s=>{const c=class{constructor(f,d){this.modeBits=f,this.numBitsCharCount=d}numCharCountBits(f){return this.numBitsCharCount[Math.floor((f+7)/17)]}};c.NUMERIC=new c(1,[10,12,14]),c.ALPHANUMERIC=new c(2,[9,11,13]),c.BYTE=new c(4,[8,16,16]),c.KANJI=new c(8,[8,10,12]),c.ECI=new c(7,[0,0,0]),s.Mode=c})(l.QrSegment||(l.QrSegment={}))})(Ha||(Ha={}));var kl=Ha;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var s_={L:kl.QrCode.Ecc.LOW,M:kl.QrCode.Ecc.MEDIUM,Q:kl.QrCode.Ecc.QUARTILE,H:kl.QrCode.Ecc.HIGH},D1=128,k1="L",O1="#FFFFFF",B1="#000000",N1=!1,U1=1,o_=4,u_=0,c_=.1;function L1(l,s=0){const c=[];return l.forEach(function(u,f){let d=null;u.forEach(function(y,b){if(!y&&d!==null){c.push(`M${d+s} ${f+s}h${b-d}v1H${d+s}z`),d=null;return}if(b===u.length-1){if(!y)return;d===null?c.push(`M${b+s},${f+s} h1v1H${b+s}z`):c.push(`M${d+s},${f+s} h${b+1-d}v1H${d+s}z`);return}y&&d===null&&(d=b)})}),c.join("")}function H1(l,s){return l.slice().map((c,u)=>u<s.y||u>=s.y+s.h?c:c.map((f,d)=>d<s.x||d>=s.x+s.w?f:!1))}function f_(l,s,c,u){if(u==null)return null;const f=l.length+c*2,d=Math.floor(s*c_),y=f/s,b=(u.width||d)*y,h=(u.height||d)*y,g=u.x==null?l.length/2-b/2:u.x*y,x=u.y==null?l.length/2-h/2:u.y*y,S=u.opacity==null?1:u.opacity;let w=null;if(u.excavate){let M=Math.floor(g),B=Math.floor(x),L=Math.ceil(b+g-M),V=Math.ceil(h+x-B);w={x:M,y:B,w:L,h:V}}const k=u.crossOrigin;return{x:g,y:x,h,w:b,excavation:w,opacity:S,crossOrigin:k}}function d_(l,s){return s!=null?Math.max(Math.floor(s),0):l?o_:u_}function G1({value:l,level:s,minVersion:c,includeMargin:u,marginSize:f,imageSettings:d,size:y,boostLevel:b}){let h=_e.useMemo(()=>{const M=(Array.isArray(l)?l:[l]).reduce((B,L)=>(B.push(...kl.QrSegment.makeSegments(L)),B),[]);return kl.QrCode.encodeSegments(M,s_[s],c,void 0,void 0,b)},[l,s,c,b]);const{cells:g,margin:x,numCells:S,calculatedImageSettings:w}=_e.useMemo(()=>{let k=h.getModules();const M=d_(u,f),B=k.length+M*2,L=f_(k,y,M,d);return{cells:k,margin:M,numCells:B,calculatedImageSettings:L}},[h,y,d,u,f]);return{qrcode:h,margin:x,cells:g,numCells:S,calculatedImageSettings:w}}var h_=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),m_=_e.forwardRef(function(s,c){const u=s,{value:f,size:d=D1,level:y=k1,bgColor:b=O1,fgColor:h=B1,includeMargin:g=N1,minVersion:x=U1,boostLevel:S,marginSize:w,imageSettings:k}=u,B=mf(u,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:L}=B,V=mf(B,["style"]),X=k?.src,A=_e.useRef(null),$=_e.useRef(null),H=_e.useCallback(at=>{A.current=at,typeof c=="function"?c(at):c&&(c.current=at)},[c]),[F,Y]=_e.useState(!1),{margin:se,cells:K,numCells:be,calculatedImageSettings:Se}=G1({value:f,level:y,minVersion:x,boostLevel:S,includeMargin:g,marginSize:w,imageSettings:k,size:d});_e.useEffect(()=>{if(A.current!=null){const at=A.current,Ce=at.getContext("2d");if(!Ce)return;let N=K;const Z=$.current,ne=Se!=null&&Z!==null&&Z.complete&&Z.naturalHeight!==0&&Z.naturalWidth!==0;ne&&Se.excavation!=null&&(N=H1(K,Se.excavation));const ue=window.devicePixelRatio||1;at.height=at.width=d*ue;const _=d/be*ue;Ce.scale(_,_),Ce.fillStyle=b,Ce.fillRect(0,0,be,be),Ce.fillStyle=h,h_?Ce.fill(new Path2D(L1(N,se))):K.forEach(function(Q,P){Q.forEach(function(J,ee){J&&Ce.fillRect(ee+se,P+se,1,1)})}),Se&&(Ce.globalAlpha=Se.opacity),ne&&Ce.drawImage(Z,Se.x+se,Se.y+se,Se.w,Se.h)}}),_e.useEffect(()=>{Y(!1)},[X]);const Ue=hf({height:d,width:d},L);let Ut=null;return X!=null&&(Ut=_e.createElement("img",{src:X,key:X,style:{display:"none"},onLoad:()=>{Y(!0)},ref:$,crossOrigin:Se?.crossOrigin})),_e.createElement(_e.Fragment,null,_e.createElement("canvas",hf({style:Ue,height:d,width:d,ref:H,role:"img"},V)),Ut)});m_.displayName="QRCodeCanvas";var Y1=_e.forwardRef(function(s,c){const u=s,{value:f,size:d=D1,level:y=k1,bgColor:b=O1,fgColor:h=B1,includeMargin:g=N1,minVersion:x=U1,boostLevel:S,title:w,marginSize:k,imageSettings:M}=u,B=mf(u,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:L,cells:V,numCells:X,calculatedImageSettings:A}=G1({value:f,level:y,minVersion:x,boostLevel:S,includeMargin:g,marginSize:k,imageSettings:M,size:d});let $=V,H=null;M!=null&&A!=null&&(A.excavation!=null&&($=H1(V,A.excavation)),H=_e.createElement("image",{href:M.src,height:A.h,width:A.w,x:A.x+L,y:A.y+L,preserveAspectRatio:"none",opacity:A.opacity,crossOrigin:A.crossOrigin}));const F=L1($,L);return _e.createElement("svg",hf({height:d,width:d,viewBox:`0 0 ${X} ${X}`,ref:c,role:"img"},B),!!w&&_e.createElement("title",null,w),_e.createElement("path",{fill:b,d:`M0,0 h${X}v${X}H0z`,shapeRendering:"crispEdges"}),_e.createElement("path",{fill:h,d:F,shapeRendering:"crispEdges"}),H)});Y1.displayName="QRCodeSVG";const g_={subtitle:"Veränderung beginnt mit dem Engagement jedes Einzelnen. Spenden helfen, einen echten Unterschied zu machen. Gemeinsam erreichen wir mehr.",heroImage:"/sckw-logo-500club.png",heroTitle:"CLUB 500",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Mitglied im CLUB 500"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},benefits:[{icon:"📄",text:"Offizielle <strong>Spendenbescheinigung</strong> (gemeinnütziger Verein)"},{icon:"🏅",text:"Veröffentlichung Ihres <strong>Namens oder Firmennamens</strong> als Unterstützer"},{icon:"⚽",text:"Direkte Förderung des <strong>lokalen Sports</strong> und der Jugend"}],spendentafel:{label:"Spendentafel (optional)",sublabel:"Tragen Sie hier Ihren Namen oder Firmennamen ein, wenn Sie auf unserer Spendentafel (Website & Vereinsgelände) veröffentlicht werden möchten. Lassen Sie das Feld leer, wenn Sie anonym spenden möchten.",nameFieldPlaceholder:"Name/Firma für die Spendentafel (leer = anonym)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},paypalCtaLabel:"Mit PayPal spenden",paypalHinweis:"Bitte geben Sie bei PayPal im Mitteilungsfeld Ihren vollständigen Namen und Ihre Adresse an, damit wir Ihnen eine Spendenbescheinigung ausstellen können.",bankCtaLabel:"Per Überweisung",verwendungszweck:"CLUB 500",paypalMeUrl:"https://www.paypal.me/sckw2012",bankDetails:{kontoinhaber:"SC Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},p_=v.section`
  background: #0b0b0d;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
`,b_=v.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.65);
`,x_=v.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`,y_=v.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,v_=v.img`
  width: clamp(100px, 22vw, 180px);
  height: auto;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.6));
`,S_=v.h1`
  color: #fff;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
`,j_=v.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  margin: 0 0 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 600px;
`,w_=v.a`
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #e10073;
  font-weight: 800;
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  padding: 0.9rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);
  }
`,_0=v.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,V1=v.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,__=v(V1)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,E0=v.h2`
  font-size: clamp(1.5rem, 4.5vw, 2.2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`,z0=v.p`
  font-size: clamp(0.92rem, 2.3vw, 1.05rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
`,E_=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,z_=v.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
`,C_=v.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`,A_=v.p`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin: 0;

  strong {
    color: #222;
  }
`,C0=v.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.6rem;
`,T_=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,R_=v.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  border: 2px solid ${({$active:l})=>l?"#e10073":"#e5e7eb"};
  background: ${({$active:l})=>l?"#fff0f6":"#fff"};
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-family: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
    box-shadow: 0 4px 16px rgba(225, 0, 115, 0.1);
  }
`,M_=v.div`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${({$active:l})=>l?"#e10073":"#222"};
  margin-bottom: 0.25rem;
  transition: color 0.15s;
`,D_=v.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({$active:l})=>l?"#e10073":"#555"};
  margin-bottom: 0.2rem;
  transition: color 0.15s;
`,k_=v.div`
  font-size: 0.75rem;
  color: #999;
  line-height: 1.3;
`,O_=v.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem;
  border-radius: 16px;
  border: 2px solid ${({$active:l})=>l?"#e10073":"#e5e7eb"};
  background: ${({$active:l})=>l?"#fff0f6":"#fff"};
  margin-bottom: 1.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
  }
`,B_=v.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 0.95rem;
  color: #333;
`,N_=v.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({$active:l})=>l?"#e10073":"#ccc"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({$active:l})=>l?"#e10073":"transparent"};
  }
`,U_=v.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: start;
`,L_=v.div`
  display: flex;
  gap: 0.35rem;
`,H_=v.button`
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1.5px solid ${({$active:l})=>l?"#e10073":"#e5e7eb"};
  background: ${({$active:l})=>l?"#fff0f6":"#fff"};
  color: ${({$active:l})=>l?"#e10073":"#555"};
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: #e10073;
  }
`,ua=v.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  background: #fff;
  color: #111;

  &:focus {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.12);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,G_=v.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`,Y_=v.div`
  margin-bottom: 1.5rem;
`,V_=v.div`
  font-size: 0.78rem;
  color: #999;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`,q_=v.label`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  line-height: 1.4;

  input {
    margin-top: 2px;
    width: 18px;
    height: 18px;
    accent-color: #e10073;
    flex-shrink: 0;
  }
`,$_=v.div`
  font-size: 0.78rem;
  color: #999;
  margin: 0.3rem 0 0 1.6rem;
  line-height: 1.4;
`,Q_=jf`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,K_=jf`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,X_=v.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:l})=>l?Fr`animation: ${Q_} 0.3s ease forwards;`:Fr`animation: ${K_} 0.2s ease forwards; pointer-events: none;`}
`,A0=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,Z_=v.div`
  margin-bottom: 1.75rem;
`,P_=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,J_=v.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 0.95rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: #fff;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.25);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.35);
  }
`,F_=v.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 800;
  font-size: 0.95rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
  color: #e10073;
  border: 2px solid #e10073;
  box-shadow: 0 4px 12px rgba(225, 0, 115, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(225, 0, 115, 0.2);
    background: #fff0f6;
  }
`,T0=v.span`
  font-size: 0.78rem;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 0.15rem;
`,W_=v.div`
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #6d4c00;
  line-height: 1.5;
`,I_=v.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,e6=v.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`,t6=v.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover { background: #f0f0f0; }
`,n6=v.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #e10073;
  margin: 0 0 0.5rem;
`,a6=v.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,l6=v.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
`,Qr=v.div`
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
  strong { color: #222; }
`,r6=v.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #166534;
  line-height: 1.5;
`;function Wc(l){return l.toLocaleString("de-DE",{minimumFractionDigits:l%1===0?0:1,maximumFractionDigits:2})}function i6(l,s,c,u,f){return["BCD","002","1","SCT",c,l,s,`EUR${u.toFixed(2)}`,"","",f].join(`
`)}const Ic=[ht("herren/herren_club500_1"),ht("herren/herren_club500_4"),ht("herren/herren_club500_2"),ht("herren/herren_club500_3"),ht("herren/herren_club500_5")].filter(Boolean),s6=["1 Jahr","2 Jahre","3 Jahre"];function o6(){const l=g_,[s,c]=C.useState(0);C.useEffect(()=>{if(Ic.length<=1)return;const K=setInterval(()=>c(be=>(be+1)%Ic.length),6e3);return()=>clearInterval(K)},[]);const[u,f]=C.useState(0),[d,y]=C.useState(!1),[b,h]=C.useState(""),[g,x]=C.useState("1 Jahr"),[S,w]=C.useState(""),[k,M]=C.useState(!1),[B,L]=C.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[V,X]=C.useState(!1),A=C.useMemo(()=>{if(d){const K=parseFloat(b.replace(",","."));return isNaN(K)||K<l.customAmount.minAmount?0:K}return l.memberships[u]?.value??0},[d,b,u,l.memberships,l.customAmount.minAmount]),$=C.useMemo(()=>d?g:l.memberships[u]?.duration??"",[d,g,u,l.memberships]),H=C.useMemo(()=>{const K=[l.verwendungszweck];if($&&K.push($),S.trim()&&K.push(`Tafel: ${S.trim()}`),k){const be=[B.vorname,B.nachname].filter(Boolean).join(" "),Se=[B.strasse,B.plz,B.ort].filter(Boolean).join(", "),Ue=[be,Se].filter(Boolean).join(", ");Ue&&K.push(`Besch: ${Ue}`)}return K.join(" | ")},[l.verwendungszweck,$,S,k,B]),F=C.useMemo(()=>A<=0?"#":`${l.paypalMeUrl}/${A}EUR`,[A,l.paypalMeUrl]),Y=C.useMemo(()=>i6(l.bankDetails.kontoinhaber,l.bankDetails.ibanClean,l.bankDetails.bic,A,H),[l.bankDetails.kontoinhaber,l.bankDetails.ibanClean,l.bankDetails.bic,A,H]),se=(K,be)=>L(Se=>({...Se,[K]:be}));return i.jsxs(i.Fragment,{children:[i.jsxs(p_,{children:[Ic.map((K,be)=>i.jsx(b_,{$bg:K,$active:be===s},be)),i.jsx(x_,{}),i.jsxs(y_,{children:[i.jsx(v_,{src:l.heroImage,alt:"Club 500"}),i.jsx(S_,{children:l.heroTitle}),i.jsx(j_,{children:l.subtitle}),i.jsx(w_,{href:"#mitglied-werden",onClick:K=>{K.preventDefault(),document.getElementById("mitglied-werden")?.scrollIntoView({behavior:"smooth"})},children:"Jetzt Mitglied werden"})]})]}),i.jsx(V1,{children:i.jsxs(_0,{children:[i.jsx(E0,{children:"Ihre Vorteile"}),i.jsx(z0,{children:"Als Mitglied im CLUB 500 unterstützen Sie direkt den Jugend- und Amateurfußball in Konstanz."}),i.jsx(E_,{children:l.benefits.map((K,be)=>i.jsxs(z_,{children:[i.jsx(C_,{children:K.icon}),i.jsx(A_,{dangerouslySetInnerHTML:{__html:K.text}})]},be))})]})}),i.jsx(__,{id:"mitglied-werden",children:i.jsxs(_0,{children:[i.jsx(E0,{children:"Mitglied werden"}),i.jsx(z0,{children:"Wählen Sie Ihre Unterstützung und werden Sie Teil des CLUB 500."}),i.jsx(C0,{children:l.sectionTitle}),i.jsx(T_,{children:l.memberships.map((K,be)=>i.jsxs(R_,{$active:!d&&u===be,onClick:()=>{y(!1),f(be)},type:"button",children:[i.jsx(M_,{$active:!d&&u===be,children:K.label}),i.jsx(D_,{$active:!d&&u===be,children:K.duration}),i.jsx(k_,{children:K.description})]},K.value))}),i.jsxs(O_,{$active:d,onClick:()=>{d||y(!0)},children:[i.jsxs(B_,{children:[i.jsx(N_,{$active:d}),l.customAmount.label]}),d&&i.jsxs(U_,{onClick:K=>K.stopPropagation(),children:[i.jsx(ua,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR",value:b,onChange:K=>h(K.target.value),autoFocus:!0}),i.jsx(L_,{children:s6.map(K=>i.jsx(H_,{$active:g===K,onClick:()=>x(K),type:"button",children:K},K))})]}),d&&i.jsx(G_,{children:l.customAmount.minHint})]}),i.jsxs(Y_,{children:[i.jsx(C0,{children:l.spendentafel.label}),i.jsx(V_,{children:l.spendentafel.sublabel}),i.jsx(ua,{type:"text",placeholder:l.spendentafel.nameFieldPlaceholder,value:S,onChange:K=>w(K.target.value)})]}),i.jsxs(Z_,{children:[i.jsxs(q_,{children:[i.jsx("input",{type:"checkbox",checked:k,onChange:K=>M(K.target.checked)}),i.jsx("span",{children:l.bescheinigung.label})]}),i.jsx($_,{children:l.bescheinigung.hinweis}),i.jsxs(X_,{$visible:k,children:[i.jsxs(A0,{children:[i.jsx(ua,{type:"text",name:"bescheinigung-vorname",autoComplete:"given-name",placeholder:l.bescheinigung.fields.vorname,value:B.vorname,onChange:K=>se("vorname",K.target.value)}),i.jsx(ua,{type:"text",name:"bescheinigung-nachname",autoComplete:"family-name",placeholder:l.bescheinigung.fields.nachname,value:B.nachname,onChange:K=>se("nachname",K.target.value)})]}),i.jsx(ua,{type:"email",name:"bescheinigung-email",autoComplete:"email",placeholder:l.bescheinigung.fields.email,value:B.email,onChange:K=>se("email",K.target.value)}),i.jsx(ua,{type:"text",name:"bescheinigung-strasse",autoComplete:"street-address",placeholder:l.bescheinigung.fields.strasse,value:B.strasse,onChange:K=>se("strasse",K.target.value)}),i.jsxs(A0,{children:[i.jsx(ua,{type:"text",name:"bescheinigung-plz",autoComplete:"postal-code",placeholder:l.bescheinigung.fields.plz,value:B.plz,onChange:K=>se("plz",K.target.value)}),i.jsx(ua,{type:"text",name:"bescheinigung-ort",autoComplete:"address-level2",placeholder:l.bescheinigung.fields.ort,value:B.ort,onChange:K=>se("ort",K.target.value)})]})]})]}),i.jsxs(P_,{children:[i.jsxs(J_,{href:F,target:"_blank",rel:"noopener noreferrer",children:[l.paypalCtaLabel,i.jsxs(T0,{children:[Wc(A)," €"]})]}),i.jsxs(F_,{type:"button",onClick:()=>X(!0),children:[l.bankCtaLabel,i.jsxs(T0,{children:[Wc(A)," €"]})]})]}),k&&i.jsx(W_,{children:l.paypalHinweis})]})}),i.jsx(Mf,{}),V&&i.jsx(I_,{onClick:()=>X(!1),children:i.jsxs(e6,{onClick:K=>K.stopPropagation(),children:[i.jsx(t6,{onClick:()=>X(!1),children:"×"}),i.jsx(n6,{children:"Überweisung per QR-Code"}),i.jsx(a6,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING, etc.) – alle Daten werden automatisch ausgefüllt."}),A>0&&i.jsx(l6,{children:i.jsx(Y1,{value:Y,size:220,level:"M"})}),i.jsx(Qr,{children:i.jsx("strong",{children:l.bankDetails.kontoinhaber})}),i.jsxs(Qr,{children:["IBAN: ",i.jsx("strong",{children:l.bankDetails.iban})]}),i.jsxs(Qr,{children:["Betrag: ",i.jsxs("strong",{children:[Wc(A)," €"]}),$&&i.jsxs(i.Fragment,{children:[" · ",i.jsx("strong",{children:$})]})]}),i.jsxs(Qr,{children:["Verwendungszweck: ",i.jsx("strong",{children:H})]}),i.jsxs(Qr,{style:{fontSize:"0.8rem",color:"#888"},children:[l.bankDetails.bank," · ",l.bankDetails.adresse]}),k&&B.email&&i.jsxs(r6,{children:["Wir senden Ihre Spendenbescheinigung an ",i.jsx("strong",{children:B.email}),"."]})]})})]})}function u6(){const{pathname:l}=sn();return C.useEffect(()=>{window.scrollTo(0,0)},[l]),null}function c6(){return i.jsxs(N2,{children:[i.jsx(u6,{}),i.jsxs(d2,{children:[i.jsx(On,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(qr,{}),i.jsx(Ts,{to:"/sponsoring",replace:!0})]})}),i.jsx(On,{path:"/sponsoring",element:i.jsxs(i.Fragment,{children:[i.jsx(qr,{}),i.jsx(d3,{})]})}),i.jsx(On,{path:"/sponsoring-handoff",element:i.jsx(Y3,{})}),i.jsx(On,{path:"/sponsoring/club-500",element:i.jsxs(i.Fragment,{children:[i.jsx(qr,{}),i.jsx(o6,{})]})}),i.jsx(On,{path:"/sponsoring/pakete",element:i.jsx(Ts,{to:"/sponsoring#angebot",replace:!0})}),i.jsx(On,{path:"/mockup-generator",element:i.jsxs(i.Fragment,{children:[i.jsx(qr,{}),i.jsx(r_,{})]})}),i.jsx(On,{path:"/renovierung",element:i.jsxs(i.Fragment,{children:[i.jsx(qr,{}),i.jsx(O5,{})]})}),i.jsx(On,{path:"*",element:i.jsx(Ts,{to:"/sponsoring",replace:!0})})]})]})}const f6={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");Sy.createRoot(document.getElementById("root")).render(i.jsx(C.StrictMode,{children:i.jsx(yv,{theme:f6,children:i.jsx(c6,{})})}));
