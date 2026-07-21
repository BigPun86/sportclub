(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function u(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=u(f);fetch(f.href,d)}})();function xy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var gu={exports:{}},$r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function yy(){if(Rg)return $r;Rg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,f,d){var v=null;if(d!==void 0&&(v=""+d),f.key!==void 0&&(v=""+f.key),"key"in f){d={};for(var p in f)p!=="key"&&(d[p]=f[p])}else d=f;return f=d.ref,{$$typeof:a,type:c,key:v,ref:f!==void 0?f:null,props:d}}return $r.Fragment=s,$r.jsx=u,$r.jsxs=u,$r}var Mg;function vy(){return Mg||(Mg=1,gu.exports=yy()),gu.exports}var r=vy(),pu={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function Sy(){if(kg)return oe;kg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),v=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function w(_){return _===null||typeof _!="object"?null:(_=S&&_[S]||_["@@iterator"],typeof _=="function"?_:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,B={};function L(_,K,P){this.props=_,this.context=K,this.refs=B,this.updater=P||R}L.prototype.isReactComponent={},L.prototype.setState=function(_,K){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,K,"setState")},L.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function $(){}$.prototype=L.prototype;function X(_,K,P){this.props=_,this.context=K,this.refs=B,this.updater=P||R}var T=X.prototype=new $;T.constructor=X,A(T,L.prototype),T.isPureReactComponent=!0;var q=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},J=Object.prototype.hasOwnProperty;function Y(_,K,P,F,ee,he){return P=he.ref,{$$typeof:a,type:_,key:K,ref:P!==void 0?P:null,props:he}}function se(_,K){return Y(_.type,K,void 0,void 0,void 0,_.props)}function Q(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function be(_){var K={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(P){return K[P]})}var Se=/\/+/g;function Ue(_,K){return typeof _=="object"&&_!==null&&_.key!=null?be(""+_.key):K.toString(36)}function Ut(){}function at(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Ut,Ut):(_.status="pending",_.then(function(K){_.status==="pending"&&(_.status="fulfilled",_.value=K)},function(K){_.status==="pending"&&(_.status="rejected",_.reason=K)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function Ce(_,K,P,F,ee){var he=typeof _;(he==="undefined"||he==="boolean")&&(_=null);var le=!1;if(_===null)le=!0;else switch(he){case"bigint":case"string":case"number":le=!0;break;case"object":switch(_.$$typeof){case a:case s:le=!0;break;case x:return le=_._init,Ce(le(_._payload),K,P,F,ee)}}if(le)return ee=ee(_),le=F===""?"."+Ue(_,0):F,q(ee)?(P="",le!=null&&(P=le.replace(Se,"$&/")+"/"),Ce(ee,K,P,"",function(st){return st})):ee!=null&&(Q(ee)&&(ee=se(ee,P+(ee.key==null||_&&_.key===ee.key?"":(""+ee.key).replace(Se,"$&/")+"/")+le)),K.push(ee)),1;le=0;var Pe=F===""?".":F+":";if(q(_))for(var je=0;je<_.length;je++)F=_[je],he=Pe+Ue(F,je),le+=Ce(F,K,P,he,ee);else if(je=w(_),typeof je=="function")for(_=je.call(_),je=0;!(F=_.next()).done;)F=F.value,he=Pe+Ue(F,je++),le+=Ce(F,K,P,he,ee);else if(he==="object"){if(typeof _.then=="function")return Ce(at(_),K,P,F,ee);throw K=String(_),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return le}function N(_,K,P){if(_==null)return _;var F=[],ee=0;return Ce(_,F,"","",function(he){return K.call(P,he,ee++)}),F}function Z(_){if(_._status===-1){var K=_._result;K=K(),K.then(function(P){(_._status===0||_._status===-1)&&(_._status=1,_._result=P)},function(P){(_._status===0||_._status===-1)&&(_._status=2,_._result=P)}),_._status===-1&&(_._status=0,_._result=K)}if(_._status===1)return _._result.default;throw _._result}var ne=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function ce(){}return oe.Children={map:N,forEach:function(_,K,P){N(_,function(){K.apply(this,arguments)},P)},count:function(_){var K=0;return N(_,function(){K++}),K},toArray:function(_){return N(_,function(K){return K})||[]},only:function(_){if(!Q(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},oe.Component=L,oe.Fragment=u,oe.Profiler=f,oe.PureComponent=X,oe.StrictMode=c,oe.Suspense=h,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(_){return H.H.useMemoCache(_)}},oe.cache=function(_){return function(){return _.apply(null,arguments)}},oe.cloneElement=function(_,K,P){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var F=A({},_.props),ee=_.key,he=void 0;if(K!=null)for(le in K.ref!==void 0&&(he=void 0),K.key!==void 0&&(ee=""+K.key),K)!J.call(K,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&K.ref===void 0||(F[le]=K[le]);var le=arguments.length-2;if(le===1)F.children=P;else if(1<le){for(var Pe=Array(le),je=0;je<le;je++)Pe[je]=arguments[je+2];F.children=Pe}return Y(_.type,ee,void 0,void 0,he,F)},oe.createContext=function(_){return _={$$typeof:v,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:d,_context:_},_},oe.createElement=function(_,K,P){var F,ee={},he=null;if(K!=null)for(F in K.key!==void 0&&(he=""+K.key),K)J.call(K,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ee[F]=K[F]);var le=arguments.length-2;if(le===1)ee.children=P;else if(1<le){for(var Pe=Array(le),je=0;je<le;je++)Pe[je]=arguments[je+2];ee.children=Pe}if(_&&_.defaultProps)for(F in le=_.defaultProps,le)ee[F]===void 0&&(ee[F]=le[F]);return Y(_,he,void 0,void 0,null,ee)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(_){return{$$typeof:p,render:_}},oe.isValidElement=Q,oe.lazy=function(_){return{$$typeof:x,_payload:{_status:-1,_result:_},_init:Z}},oe.memo=function(_,K){return{$$typeof:g,type:_,compare:K===void 0?null:K}},oe.startTransition=function(_){var K=H.T,P={};H.T=P;try{var F=_(),ee=H.S;ee!==null&&ee(P,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ce,ne)}catch(he){ne(he)}finally{H.T=K}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(_){return H.H.use(_)},oe.useActionState=function(_,K,P){return H.H.useActionState(_,K,P)},oe.useCallback=function(_,K){return H.H.useCallback(_,K)},oe.useContext=function(_){return H.H.useContext(_)},oe.useDebugValue=function(){},oe.useDeferredValue=function(_,K){return H.H.useDeferredValue(_,K)},oe.useEffect=function(_,K,P){var F=H.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(_,K)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(_,K,P){return H.H.useImperativeHandle(_,K,P)},oe.useInsertionEffect=function(_,K){return H.H.useInsertionEffect(_,K)},oe.useLayoutEffect=function(_,K){return H.H.useLayoutEffect(_,K)},oe.useMemo=function(_,K){return H.H.useMemo(_,K)},oe.useOptimistic=function(_,K){return H.H.useOptimistic(_,K)},oe.useReducer=function(_,K,P){return H.H.useReducer(_,K,P)},oe.useRef=function(_){return H.H.useRef(_)},oe.useState=function(_){return H.H.useState(_)},oe.useSyncExternalStore=function(_,K,P){return H.H.useSyncExternalStore(_,K,P)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.1.0",oe}var Dg;function xf(){return Dg||(Dg=1,pu.exports=Sy()),pu.exports}var C=xf();const _e=xy(C);var bu={exports:{}},Vr={},xu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function jy(){return Og||(Og=1,function(a){function s(N,Z){var ne=N.length;N.push(Z);e:for(;0<ne;){var ce=ne-1>>>1,_=N[ce];if(0<f(_,Z))N[ce]=Z,N[ne]=_,ne=ce;else break e}}function u(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var Z=N[0],ne=N.pop();if(ne!==Z){N[0]=ne;e:for(var ce=0,_=N.length,K=_>>>1;ce<K;){var P=2*(ce+1)-1,F=N[P],ee=P+1,he=N[ee];if(0>f(F,ne))ee<_&&0>f(he,F)?(N[ce]=he,N[ee]=ne,ce=ee):(N[ce]=F,N[P]=ne,ce=P);else if(ee<_&&0>f(he,ne))N[ce]=he,N[ee]=ne,ce=ee;else break e}}return Z}function f(N,Z){var ne=N.sortIndex-Z.sortIndex;return ne!==0?ne:N.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var v=Date,p=v.now();a.unstable_now=function(){return v.now()-p}}var h=[],g=[],x=1,S=null,w=3,R=!1,A=!1,B=!1,L=!1,$=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function q(N){for(var Z=u(g);Z!==null;){if(Z.callback===null)c(g);else if(Z.startTime<=N)c(g),Z.sortIndex=Z.expirationTime,s(h,Z);else break;Z=u(g)}}function H(N){if(B=!1,q(N),!A)if(u(h)!==null)A=!0,J||(J=!0,Ue());else{var Z=u(g);Z!==null&&Ce(H,Z.startTime-N)}}var J=!1,Y=-1,se=5,Q=-1;function be(){return L?!0:!(a.unstable_now()-Q<se)}function Se(){if(L=!1,J){var N=a.unstable_now();Q=N;var Z=!0;try{e:{A=!1,B&&(B=!1,X(Y),Y=-1),R=!0;var ne=w;try{t:{for(q(N),S=u(h);S!==null&&!(S.expirationTime>N&&be());){var ce=S.callback;if(typeof ce=="function"){S.callback=null,w=S.priorityLevel;var _=ce(S.expirationTime<=N);if(N=a.unstable_now(),typeof _=="function"){S.callback=_,q(N),Z=!0;break t}S===u(h)&&c(h),q(N)}else c(h);S=u(h)}if(S!==null)Z=!0;else{var K=u(g);K!==null&&Ce(H,K.startTime-N),Z=!1}}break e}finally{S=null,w=ne,R=!1}Z=void 0}}finally{Z?Ue():J=!1}}}var Ue;if(typeof T=="function")Ue=function(){T(Se)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,at=Ut.port2;Ut.port1.onmessage=Se,Ue=function(){at.postMessage(null)}}else Ue=function(){$(Se,0)};function Ce(N,Z){Y=$(function(){N(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(N){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var ne=w;w=Z;try{return N()}finally{w=ne}},a.unstable_requestPaint=function(){L=!0},a.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=w;w=N;try{return Z()}finally{w=ne}},a.unstable_scheduleCallback=function(N,Z,ne){var ce=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ce+ne:ce):ne=ce,N){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=ne+_,N={id:x++,callback:Z,priorityLevel:N,startTime:ne,expirationTime:_,sortIndex:-1},ne>ce?(N.sortIndex=ne,s(g,N),u(h)===null&&N===u(g)&&(B?(X(Y),Y=-1):B=!0,Ce(H,ne-ce))):(N.sortIndex=_,s(h,N),A||R||(A=!0,J||(J=!0,Ue()))),N},a.unstable_shouldYield=be,a.unstable_wrapCallback=function(N){var Z=w;return function(){var ne=w;w=Z;try{return N.apply(this,arguments)}finally{w=ne}}}}(yu)),yu}var Bg;function wy(){return Bg||(Bg=1,xu.exports=jy()),xu.exports}var vu={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function _y(){if(Ng)return ut;Ng=1;var a=xf();function s(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(h,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:h,containerInfo:g,implementation:x}}var v=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ut.createPortal=function(h,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return d(h,g,null,x)},ut.flushSync=function(h){var g=v.T,x=c.p;try{if(v.T=null,c.p=2,h)return h()}finally{v.T=g,c.p=x,c.d.f()}},ut.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(h,g))},ut.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},ut.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var x=g.as,S=p(x,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?c.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:R}):x==="script"&&c.d.X(h,{crossOrigin:S,integrity:w,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ut.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=p(g.as,g.crossOrigin);c.d.M(h,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(h)},ut.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=p(x,g.crossOrigin);c.d.L(h,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ut.preloadModule=function(h,g){if(typeof h=="string")if(g){var x=p(g.as,g.crossOrigin);c.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(h)},ut.requestFormReset=function(h){c.d.r(h)},ut.unstable_batchedUpdates=function(h,g){return h(g)},ut.useFormState=function(h,g,x){return v.H.useFormState(h,g,x)},ut.useFormStatus=function(){return v.H.useHostTransitionStatus()},ut.version="19.1.0",ut}var Ug;function Ey(){if(Ug)return vu.exports;Ug=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),vu.exports=_y(),vu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function zy(){if(Lg)return Vr;Lg=1;var a=wy(),s=xf(),u=Ey();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(d(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return p(i),e;if(o===l)return p(i),t;o=o.sibling}throw Error(c(188))}if(n.return!==l.return)n=i,l=o;else{for(var m=!1,b=i.child;b;){if(b===n){m=!0,n=i,l=o;break}if(b===l){m=!0,l=i,n=o;break}b=b.sibling}if(!m){for(b=o.child;b;){if(b===n){m=!0,n=o,l=i;break}if(b===l){m=!0,l=o,n=i;break}b=b.sibling}if(!m)throw Error(c(189))}}if(n.alternate!==l)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),T=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case L:return"Profiler";case B:return"StrictMode";case H:return"Suspense";case J:return"SuspenseList";case Q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case T:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var Ce=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ce=[],_=-1;function K(e){return{current:e}}function P(e){0>_||(e.current=ce[_],ce[_]=null,_--)}function F(e,t){_++,ce[_]=e.current,e.current=t}var ee=K(null),he=K(null),le=K(null),Pe=K(null);function je(e,t){switch(F(le,t),F(he,e),F(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?lg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=lg(t),e=rg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(ee),F(ee,e)}function st(){P(ee),P(he),P(le)}function ma(e){e.memoizedState!==null&&F(Pe,e);var t=ee.current,n=rg(t,e.type);t!==n&&(F(he,e),F(ee,n))}function xn(e){he.current===e&&(P(ee),P(he)),Pe.current===e&&(P(Pe),Ur._currentValue=ne)}var Lt=Object.prototype.hasOwnProperty,to=a.unstable_scheduleCallback,no=a.unstable_cancelCallback,F1=a.unstable_shouldYield,J1=a.unstable_requestPaint,un=a.unstable_now,W1=a.unstable_getCurrentPriorityLevel,Lf=a.unstable_ImmediatePriority,Hf=a.unstable_UserBlockingPriority,ni=a.unstable_NormalPriority,I1=a.unstable_LowPriority,Gf=a.unstable_IdlePriority,eb=a.log,tb=a.unstable_setDisableYieldValue,Kl=null,Et=null;function Hn(e){if(typeof eb=="function"&&tb(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Kl,e)}catch{}}var zt=Math.clz32?Math.clz32:lb,nb=Math.log,ab=Math.LN2;function lb(e){return e>>>=0,e===0?32:31-(nb(e)/ab|0)|0}var ai=256,li=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ri(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var i=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~o,l!==0?i=ga(l):(m&=b,m!==0?i=ga(m):n||(n=b&~e,n!==0&&(i=ga(n))))):(b=l&~o,b!==0?i=ga(b):m!==0?i=ga(m):n||(n=l&~e,n!==0&&(i=ga(n)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:i}function Ql(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(){var e=ai;return ai<<=1,(ai&4194048)===0&&(ai=256),e}function $f(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ib(e,t,n,l,i,o){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,j=e.expirationTimes,k=e.hiddenUpdates;for(n=m&~n;0<n;){var U=31-zt(n),V=1<<U;b[U]=0,j[U]=-1;var D=k[U];if(D!==null)for(k[U]=null,U=0;U<D.length;U++){var O=D[U];O!==null&&(O.lane&=-536870913)}n&=~V}l!==0&&Vf(e,l,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function Vf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-zt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function qf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-zt(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}function lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:_g(e.type))}function sb(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Gn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Gn,gt="__reactProps$"+Gn,Ga="__reactContainer$"+Gn,io="__reactEvents$"+Gn,ob="__reactListeners$"+Gn,cb="__reactHandles$"+Gn,Qf="__reactResources$"+Gn,Zl="__reactMarker$"+Gn;function so(e){delete e[ot],delete e[gt],delete e[io],delete e[ob],delete e[cb]}function Ya(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cg(e);e!==null;){if(n=e[ot])return n;e=cg(e)}return t}e=n,n=e.parentNode}return null}function $a(e){if(e=e[ot]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Va(e){var t=e[Qf];return t||(t=e[Qf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[Zl]=!0}var Xf=new Set,Zf={};function pa(e,t){qa(e,t),qa(e+"Capture",t)}function qa(e,t){for(Zf[e]=t,e=0;e<t.length;e++)Xf.add(t[e])}var ub=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pf={},Ff={};function fb(e){return Lt.call(Ff,e)?!0:Lt.call(Pf,e)?!1:ub.test(e)?Ff[e]=!0:(Pf[e]=!0,!1)}function ii(e,t,n){if(fb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function si(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function yn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var oo,Jf;function Ka(e){if(oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oo=t&&t[1]||"",Jf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oo+e+Jf}var co=!1;function uo(e,t){if(!e||co)return"";co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(O){var D=O}Reflect.construct(e,[],V)}else{try{V.call()}catch(O){D=O}e.call(V.prototype)}}else{try{throw Error()}catch(O){D=O}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(O){if(O&&D&&typeof O.stack=="string")return[O.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),m=o[0],b=o[1];if(m&&b){var j=m.split(`
`),k=b.split(`
`);for(i=l=0;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;for(;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;if(l===j.length||i===k.length)for(l=j.length-1,i=k.length-1;1<=l&&0<=i&&j[l]!==k[i];)i--;for(;1<=l&&0<=i;l--,i--)if(j[l]!==k[i]){if(l!==1||i!==1)do if(l--,i--,0>i||j[l]!==k[i]){var U=`
`+j[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=i);break}}}finally{co=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ka(n):""}function db(e){switch(e.tag){case 26:case 27:case 5:return Ka(e.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 15:return uo(e.type,!1);case 11:return uo(e.type.render,!1);case 1:return uo(e.type,!0);case 31:return Ka("Activity");default:return""}}function Wf(e){try{var t="";do t+=db(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function If(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hb(e){var t=If(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){l=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=hb(e))}function ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=If(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mb=/[\n"\\]/g;function Gt(e){return e.replace(mb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fo(e,t,n,l,i,o,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ho(e,m,Ht(t)):n!=null?ho(e,m,Ht(n)):l!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ht(b):e.removeAttribute("name")}function td(e,t,n,l,i,o,m,b){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function ho(e,t,n){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Qa(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nd(e,t,n){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ht(n):""}function ad(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(c(92));if(Ce(l)){if(1<l.length)throw Error(c(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Ht(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ld(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||gb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function rd(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&n[i]!==l&&ld(e,i,l)}else for(var o in t)t.hasOwnProperty(o)&&ld(e,o,t[o])}function mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(e){return bb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var go=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Pa=null;function id(e){var t=$a(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=l[gt]||null;if(!i)throw Error(c(90));fo(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ed(l)}break e;case"textarea":nd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Qa(e,!!n.multiple,t,!1)}}}var bo=!1;function sd(e,t,n){if(bo)return e(t,n);bo=!0;try{var l=e(t);return l}finally{if(bo=!1,(Za!==null||Pa!==null)&&(Pi(),Za&&(t=Za,e=Pa,Pa=Za=null,id(t),e)))for(t=0;t<e.length;t++)id(e[t])}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[gt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=!1;if(vn)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{xo=!1}var Yn=null,yo=null,fi=null;function od(){if(fi)return fi;var e,t=yo,n=t.length,l,i="value"in Yn?Yn.value:Yn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var m=n-e;for(l=1;l<=m&&t[n-l]===i[o-l];l++);return fi=i.slice(e,1<l?1-l:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function cd(){return!1}function pt(e){function t(n,l,i,o,m){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(o):o[b]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:cd,this.isPropagationStopped=cd,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=pt(ba),Wl=x({},ba,{view:0,detail:0}),xb=pt(Wl),vo,So,Il,gi=x({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(vo=e.screenX-Il.screenX,So=e.screenY-Il.screenY):So=vo=0,Il=e),vo)},movementY:function(e){return"movementY"in e?e.movementY:So}}),ud=pt(gi),yb=x({},gi,{dataTransfer:0}),vb=pt(yb),Sb=x({},Wl,{relatedTarget:0}),jo=pt(Sb),jb=x({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),wb=pt(jb),_b=x({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eb=pt(_b),zb=x({},ba,{data:0}),fd=pt(zb),Cb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ab={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tb[e])?!!t[e]:!1}function wo(){return Rb}var Mb=x({},Wl,{key:function(e){if(e.key){var t=Cb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ab[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kb=pt(Mb),Db=x({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=pt(Db),Ob=x({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),Bb=pt(Ob),Nb=x({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=pt(Nb),Lb=x({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hb=pt(Lb),Gb=x({},ba,{newState:0,oldState:0}),Yb=pt(Gb),$b=[9,13,27,32],_o=vn&&"CompositionEvent"in window,er=null;vn&&"documentMode"in document&&(er=document.documentMode);var Vb=vn&&"TextEvent"in window&&!er,hd=vn&&(!_o||er&&8<er&&11>=er),md=" ",gd=!1;function pd(e,t){switch(e){case"keyup":return $b.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function qb(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(gd=!0,md);case"textInput":return e=t.data,e===md&&gd?null:e;default:return null}}function Kb(e,t){if(Fa)return e==="compositionend"||!_o&&pd(e,t)?(e=od(),fi=yo=Yn=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hd&&t.locale!=="ko"?null:t.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qb[e.type]:t==="textarea"}function yd(e,t,n,l){Za?Pa?Pa.push(l):Pa=[l]:Za=l,t=ts(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var tr=null,nr=null;function Xb(e){Im(e,0)}function pi(e){var t=Pl(e);if(ed(t))return e}function vd(e,t){if(e==="change")return t}var Sd=!1;if(vn){var Eo;if(vn){var zo="oninput"in document;if(!zo){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),zo=typeof jd.oninput=="function"}Eo=zo}else Eo=!1;Sd=Eo&&(!document.documentMode||9<document.documentMode)}function wd(){tr&&(tr.detachEvent("onpropertychange",_d),nr=tr=null)}function _d(e){if(e.propertyName==="value"&&pi(nr)){var t=[];yd(t,nr,e,po(e)),sd(Xb,t)}}function Zb(e,t,n){e==="focusin"?(wd(),tr=t,nr=n,tr.attachEvent("onpropertychange",_d)):e==="focusout"&&wd()}function Pb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(nr)}function Fb(e,t){if(e==="click")return pi(t)}function Jb(e,t){if(e==="input"||e==="change")return pi(t)}function Wb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Wb;function ar(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!Lt.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Ed(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function Cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ib=vn&&"documentMode"in document&&11>=document.documentMode,Ja=null,Ao=null,lr=null,To=!1;function Td(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;To||Ja==null||Ja!==ci(l)||(l=Ja,"selectionStart"in l&&Co(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lr&&ar(lr,l)||(lr=l,l=ts(Ao,"onSelect"),0<l.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ja)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},Ro={},Rd={};vn&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ya(e){if(Ro[e])return Ro[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rd)return Ro[e]=t[n];return e}var Md=ya("animationend"),kd=ya("animationiteration"),Dd=ya("animationstart"),ex=ya("transitionrun"),tx=ya("transitionstart"),nx=ya("transitioncancel"),Od=ya("transitionend"),Bd=new Map,Mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mo.push("scrollEnd");function tn(e,t){Bd.set(e,t),pa(t,[e])}var Nd=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=Nd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Wf(t)},Nd.set(e,t),t)}return{value:e,source:t,stack:Wf(t)}}var $t=[],Ia=0,ko=0;function bi(){for(var e=Ia,t=ko=Ia=0;t<e;){var n=$t[t];$t[t++]=null;var l=$t[t];$t[t++]=null;var i=$t[t];$t[t++]=null;var o=$t[t];if($t[t++]=null,l!==null&&i!==null){var m=l.pending;m===null?i.next=i:(i.next=m.next,m.next=i),l.pending=i}o!==0&&Ud(n,i,o)}}function xi(e,t,n,l){$t[Ia++]=e,$t[Ia++]=t,$t[Ia++]=n,$t[Ia++]=l,ko|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Do(e,t,n,l){return xi(e,t,n,l),yi(e)}function el(e,t){return xi(e,null,null,t),yi(e)}function Ud(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var i=!1,o=e.return;o!==null;)o.childLanes|=n,l=o.alternate,l!==null&&(l.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-zt(n),e=o.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=n|536870912),o):null}function yi(e){if(50<Tr)throw Tr=0,Hc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function ax(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,l){return new ax(e,t,n,l)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ld(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,l,i,o){var m=0;if(l=e,typeof e=="function")Oo(e)&&(m=1);else if(typeof e=="string")m=ry(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Q:return e=At(31,n,t,i),e.elementType=Q,e.lanes=o,e;case A:return va(n.children,i,o,t);case B:m=8,i|=24;break;case L:return e=At(12,n,t,i|2),e.elementType=L,e.lanes=o,e;case H:return e=At(13,n,t,i),e.elementType=H,e.lanes=o,e;case J:return e=At(19,n,t,i),e.elementType=J,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:case T:m=10;break e;case X:m=9;break e;case q:m=11;break e;case Y:m=14;break e;case se:m=16,l=null;break e}m=29,n=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=At(m,n,t,i),t.elementType=e,t.type=l,t.lanes=o,t}function va(e,t,n,l){return e=At(7,e,l,t),e.lanes=n,e}function Bo(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function No(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nl=[],al=0,Si=null,ji=0,Vt=[],qt=0,Sa=null,jn=1,wn="";function ja(e,t){nl[al++]=ji,nl[al++]=Si,Si=e,ji=t}function Hd(e,t,n){Vt[qt++]=jn,Vt[qt++]=wn,Vt[qt++]=Sa,Sa=e;var l=jn;e=wn;var i=32-zt(l)-1;l&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var m=i-i%5;o=(l&(1<<m)-1).toString(32),l>>=m,i-=m,jn=1<<32-zt(t)+i|n<<i|l,wn=o+e}else jn=1<<o|n<<i|l,wn=e}function Uo(e){e.return!==null&&(ja(e,1),Hd(e,1,0))}function Lo(e){for(;e===Si;)Si=nl[--al],nl[al]=null,ji=nl[--al],nl[al]=null;for(;e===Sa;)Sa=Vt[--qt],Vt[qt]=null,wn=Vt[--qt],Vt[qt]=null,jn=Vt[--qt],Vt[qt]=null}var dt=null,He=null,ve=!1,wa=null,fn=!1,Ho=Error(c(519));function _a(e){var t=Error(c(418,""));throw sr(Yt(t,e)),Ho}function Gd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ot]=e,t[gt]=l,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<Mr.length;n++)ge(Mr[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),td(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),oi(t);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),ad(t,l.value,l.defaultValue,l.children),oi(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||ag(t.textContent,n)?(l.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),l.onScroll!=null&&ge("scroll",t),l.onScrollEnd!=null&&ge("scrollend",t),l.onClick!=null&&(t.onclick=ns),t=!0):t=!1,t||_a(e)}function Yd(e){for(dt=e.return;dt;)switch(dt.tag){case 5:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:dt=dt.return}}function rr(e){if(e!==dt)return!1;if(!ve)return Yd(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||tu(e.type,e.memoizedProps)),n=!n),n&&He&&_a(e),Yd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,aa(e.type)?(e=ru,ru=null,He=e):He=t):He=dt?an(e.stateNode.nextSibling):null;return!0}function ir(){He=dt=null,ve=!1}function $d(){var e=wa;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),wa=null),e}function sr(e){wa===null?wa=[e]:wa.push(e)}var Go=K(null),Ea=null,_n=null;function $n(e,t,n){F(Go,t._currentValue),t._currentValue=n}function En(e){e._currentValue=Go.current,P(Go)}function Yo(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function $o(e,t,n,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var m=i.child;o=o.firstContext;e:for(;o!==null;){var b=o;o=i;for(var j=0;j<t.length;j++)if(b.context===t[j]){o.lanes|=n,b=o.alternate,b!==null&&(b.lanes|=n),Yo(o.return,n,e),l||(m=null);break e}o=b.next}}else if(i.tag===18){if(m=i.return,m===null)throw Error(c(341));m.lanes|=n,o=m.alternate,o!==null&&(o.lanes|=n),Yo(m,n,e),m=null}else m=i.child;if(m!==null)m.return=i;else for(m=i;m!==null;){if(m===e){m=null;break}if(i=m.sibling,i!==null){i.return=m.return,m=i;break}m=m.return}i=m}}function or(e,t,n,l){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var m=i.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var b=i.type;Ct(i.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(i===Pe.current){if(m=i.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ur):e=[Ur])}i=i.return}e!==null&&$o(t,e,n,l),t.flags|=262144}function wi(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){Ea=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Vd(Ea,e)}function _i(e,t){return Ea===null&&za(e),Vd(e,t)}function Vd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_n===null){if(e===null)throw Error(c(308));_n=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _n=_n.next=t;return n}var lx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},rx=a.unstable_scheduleCallback,ix=a.unstable_NormalPriority,Xe={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vo(){return{controller:new lx,data:new Map,refCount:0}}function cr(e){e.refCount--,e.refCount===0&&rx(ix,function(){e.controller.abort()})}var ur=null,qo=0,ll=0,rl=null;function sx(e,t){if(ur===null){var n=ur=[];qo=0,ll=Qc(),rl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return qo++,t.then(qd,qd),t}function qd(){if(--qo===0&&ur!==null){rl!==null&&(rl.status="fulfilled");var e=ur;ur=null,ll=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ox(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),l}var Kd=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&sx(e,t),Kd!==null&&Kd(e,t)};var Ca=K(null);function Ko(){var e=Ca.current;return e!==null?e:ke.pooledCache}function Ei(e,t){t===null?F(Ca,Ca.current):F(Ca,t.pool)}function Qd(){var e=Ko();return e===null?null:{parent:Xe._currentValue,pool:e}}var fr=Error(c(460)),Xd=Error(c(474)),zi=Error(c(542)),Qo={then:function(){}};function Zd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ci(){}function Pd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ci,Ci),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jd(e),e;default:if(typeof t.status=="string")t.then(Ci,Ci);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jd(e),e}throw dr=t,fr}}var dr=null;function Fd(){if(dr===null)throw Error(c(459));var e=dr;return dr=null,e}function Jd(e){if(e===fr||e===zi)throw Error(c(483))}var Vn=!1;function Xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=yi(e),Ud(e,null,n),t}return xi(e,l,t,n),yi(e)}function hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qf(e,n)}}function Po(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?i=o=m:o=o.next=m,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fo=!1;function mr(){if(Fo){var e=rl;if(e!==null)throw e}}function gr(e,t,n,l){Fo=!1;var i=e.updateQueue;Vn=!1;var o=i.firstBaseUpdate,m=i.lastBaseUpdate,b=i.shared.pending;if(b!==null){i.shared.pending=null;var j=b,k=j.next;j.next=null,m===null?o=k:m.next=k,m=j;var U=e.alternate;U!==null&&(U=U.updateQueue,b=U.lastBaseUpdate,b!==m&&(b===null?U.firstBaseUpdate=k:b.next=k,U.lastBaseUpdate=j))}if(o!==null){var V=i.baseState;m=0,U=k=j=null,b=o;do{var D=b.lane&-536870913,O=D!==b.lane;if(O?(xe&D)===D:(l&D)===D){D!==0&&D===ll&&(Fo=!0),U!==null&&(U=U.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ie=e,ae=b;D=t;var Re=n;switch(ae.tag){case 1:if(ie=ae.payload,typeof ie=="function"){V=ie.call(Re,V,D);break e}V=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ae.payload,D=typeof ie=="function"?ie.call(Re,V,D):ie,D==null)break e;V=x({},V,D);break e;case 2:Vn=!0}}D=b.callback,D!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[D]:O.push(D))}else O={lane:D,tag:b.tag,payload:b.payload,callback:b.callback,next:null},U===null?(k=U=O,j=V):U=U.next=O,m|=D;if(b=b.next,b===null){if(b=i.shared.pending,b===null)break;O=b,b=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);U===null&&(j=V),i.baseState=j,i.firstBaseUpdate=k,i.lastBaseUpdate=U,o===null&&(i.shared.lanes=0),In|=m,e.lanes=m,e.memoizedState=V}}function Wd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Id(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Wd(n[e],t)}var il=K(null),Ai=K(0);function eh(e,t){e=kn,F(Ai,e),F(il,t),kn=e|t.baseLanes}function Jo(){F(Ai,kn),F(il,il.current)}function Wo(){kn=Ai.current,P(il),P(Ai)}var Qn=0,fe=null,Ae=null,qe=null,Ti=!1,sl=!1,Aa=!1,Ri=0,pr=0,ol=null,cx=0;function $e(){throw Error(c(321))}function Io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function ec(e,t,n,l,i,o){return Qn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Uh:Lh,Aa=!1,o=n(l,i),Aa=!1,sl&&(o=nh(t,n,l,i)),th(e),o}function th(e){N.H=Ni;var t=Ae!==null&&Ae.next!==null;if(Qn=0,qe=Ae=fe=null,Ti=!1,pr=0,ol=null,t)throw Error(c(300));e===null||Je||(e=e.dependencies,e!==null&&wi(e)&&(Je=!0))}function nh(e,t,n,l){fe=e;var i=0;do{if(sl&&(ol=null),pr=0,sl=!1,25<=i)throw Error(c(301));if(i+=1,qe=Ae=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=px,o=t(n,l)}while(sl);return o}function ux(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?br(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(fe.flags|=1024),t}function tc(){var e=Ri!==0;return Ri=0,e}function nc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ac(e){if(Ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ti=!1}Qn=0,qe=Ae=fe=null,sl=!1,pr=Ri=0,ol=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?fe.memoizedState=qe=e:qe=qe.next=e,qe}function Ke(){if(Ae===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=qe===null?fe.memoizedState:qe.next;if(t!==null)qe=t,Ae=e;else{if(e===null)throw fe.alternate===null?Error(c(467)):Error(c(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},qe===null?fe.memoizedState=qe=e:qe=qe.next=e}return qe}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function br(e){var t=pr;return pr+=1,ol===null&&(ol=[]),e=Pd(ol,e,t),t=fe,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Uh:Lh),e}function Mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return br(e);if(e.$$typeof===T)return ct(e)}throw Error(c(438,String(e)))}function rc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=lc(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=be;return t.index++,n}function zn(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=Ke();return ic(t,Ae,e)}function ic(e,t,n){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=n;var i=e.baseQueue,o=l.pending;if(o!==null){if(i!==null){var m=i.next;i.next=o.next,o.next=m}t.baseQueue=i=o,l.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var b=m=null,j=null,k=t,U=!1;do{var V=k.lane&-536870913;if(V!==k.lane?(xe&V)===V:(Qn&V)===V){var D=k.revertLane;if(D===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),V===ll&&(U=!0);else if((Qn&D)===D){k=k.next,D===ll&&(U=!0);continue}else V={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},j===null?(b=j=V,m=o):j=j.next=V,fe.lanes|=D,In|=D;V=k.action,Aa&&n(o,V),o=k.hasEagerState?k.eagerState:n(o,V)}else D={lane:V,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},j===null?(b=j=D,m=o):j=j.next=D,fe.lanes|=V,In|=V;k=k.next}while(k!==null&&k!==t);if(j===null?m=o:j.next=b,!Ct(o,e.memoizedState)&&(Je=!0,U&&(n=rl,n!==null)))throw n;e.memoizedState=o,e.baseState=m,e.baseQueue=j,l.lastRenderedState=o}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sc(e){var t=Ke(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var m=i=i.next;do o=e(o,m.action),m=m.next;while(m!==i);Ct(o,t.memoizedState)||(Je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,l]}function ah(e,t,n){var l=fe,i=Ke(),o=ve;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var m=!Ct((Ae||i).memoizedState,n);m&&(i.memoizedState=n,Je=!0),i=i.queue;var b=ih.bind(null,l,i,e);if(xr(2048,8,b,[e]),i.getSnapshot!==t||m||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,cl(9,Di(),rh.bind(null,l,i,n,t),null),ke===null)throw Error(c(349));o||(Qn&124)!==0||lh(l,t,n)}return n}function lh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=lc(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rh(e,t,n,l){t.value=n,t.getSnapshot=l,sh(t)&&oh(e)}function ih(e,t,n){return n(function(){sh(t)&&oh(e)})}function sh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function oh(e){var t=el(e,2);t!==null&&Dt(t,e,2)}function oc(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),Aa){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},t}function ch(e,t,n,l){return e.baseState=n,ic(e,Ae,typeof l=="function"?l:zn)}function fx(e,t,n,l,i){if(Bi(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};N.T!==null?n(!0):o.isTransition=!1,l(o),n=t.pending,n===null?(o.next=t.pending=o,uh(t,o)):(o.next=n.next,t.pending=n.next=o)}}function uh(e,t){var n=t.action,l=t.payload,i=e.state;if(t.isTransition){var o=N.T,m={};N.T=m;try{var b=n(i,l),j=N.S;j!==null&&j(m,b),fh(e,t,b)}catch(k){cc(e,t,k)}finally{N.T=o}}else try{o=n(i,l),fh(e,t,o)}catch(k){cc(e,t,k)}}function fh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){dh(e,t,l)},function(l){return cc(e,t,l)}):dh(e,t,n)}function dh(e,t,n){t.status="fulfilled",t.value=n,hh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,uh(e,n)))}function cc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,hh(t),t=t.next;while(t!==l)}e.action=null}function hh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mh(e,t){return t}function gh(e,t){if(ve){var n=ke.formState;if(n!==null){e:{var l=fe;if(ve){if(He){t:{for(var i=He,o=fn;i.nodeType!==8;){if(!o){i=null;break t}if(i=an(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){He=an(i.nextSibling),l=i.data==="F!";break e}}_a(l)}l=!1}l&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mh,lastRenderedState:t},n.queue=l,n=Oh.bind(null,fe,l),l.dispatch=n,l=oc(!1),o=mc.bind(null,fe,!1,l.queue),l=bt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,n=fx.bind(null,fe,i,o,n),i.dispatch=n,l.memoizedState=e,[t,n,!1]}function ph(e){var t=Ke();return bh(t,Ae,e)}function bh(e,t,n){if(t=ic(e,t,mh)[0],e=ki(zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=br(t)}catch(m){throw m===fr?zi:m}else l=t;t=Ke();var i=t.queue,o=i.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,cl(9,Di(),dx.bind(null,i,n),null)),[l,o,e]}function dx(e,t){e.action=t}function xh(e){var t=Ke(),n=Ae;if(n!==null)return bh(t,n,e);Ke(),t=t.memoizedState,n=Ke();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function cl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=fe.updateQueue,t===null&&(t=lc(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Di(){return{destroy:void 0,resource:void 0}}function yh(){return Ke().memoizedState}function Oi(e,t,n,l){var i=bt();l=l===void 0?null:l,fe.flags|=e,i.memoizedState=cl(1|t,Di(),n,l)}function xr(e,t,n,l){var i=Ke();l=l===void 0?null:l;var o=i.memoizedState.inst;Ae!==null&&l!==null&&Io(l,Ae.memoizedState.deps)?i.memoizedState=cl(t,o,n,l):(fe.flags|=e,i.memoizedState=cl(1|t,o,n,l))}function vh(e,t){Oi(8390656,8,e,t)}function Sh(e,t){xr(2048,8,e,t)}function jh(e,t){return xr(4,2,e,t)}function wh(e,t){return xr(4,4,e,t)}function _h(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eh(e,t,n){n=n!=null?n.concat([e]):null,xr(4,4,_h.bind(null,t,e),n)}function uc(){}function zh(e,t){var n=Ke();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Io(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Ch(e,t){var n=Ke();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Io(t,l[1]))return l[0];if(l=e(),Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[l,t],l}function fc(e,t,n){return n===void 0||(Qn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Rm(),fe.lanes|=e,In|=e,n)}function Ah(e,t,n,l){return Ct(n,t)?n:il.current!==null?(e=fc(e,n,l),Ct(e,t)||(Je=!0),e):(Qn&42)===0?(Je=!0,e.memoizedState=n):(e=Rm(),fe.lanes|=e,In|=e,t)}function Th(e,t,n,l,i){var o=Z.p;Z.p=o!==0&&8>o?o:8;var m=N.T,b={};N.T=b,mc(e,!1,t,n);try{var j=i(),k=N.S;if(k!==null&&k(b,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var U=ox(j,l);yr(e,t,U,kt(e))}else yr(e,t,l,kt(e))}catch(V){yr(e,t,{then:function(){},status:"rejected",reason:V},kt())}finally{Z.p=o,N.T=m}}function hx(){}function dc(e,t,n,l){if(e.tag!==5)throw Error(c(476));var i=Rh(e).queue;Th(e,i,t,ne,n===null?hx:function(){return Mh(e),n(l)})}function Rh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mh(e){var t=Rh(e).next.queue;yr(e,t,{},kt())}function hc(){return ct(Ur)}function kh(){return Ke().memoizedState}function Dh(){return Ke().memoizedState}function mx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=qn(n);var l=Kn(t,e,n);l!==null&&(Dt(l,t,n),hr(l,t,n)),t={cache:Vo()},e.payload=t;return}t=t.return}}function gx(e,t,n){var l=kt();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Bh(t,n):(n=Do(e,t,n,l),n!==null&&(Dt(n,e,l),Nh(n,t,l)))}function Oh(e,t,n){var l=kt();yr(e,t,n,l)}function yr(e,t,n,l){var i={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Bh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,b=o(m,n);if(i.hasEagerState=!0,i.eagerState=b,Ct(b,m))return xi(e,t,i,0),ke===null&&bi(),!1}catch{}finally{}if(n=Do(e,t,i,l),n!==null)return Dt(n,e,l),Nh(n,t,l),!0}return!1}function mc(e,t,n,l){if(l={lane:2,revertLane:Qc(),action:l,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(c(479))}else t=Do(e,n,l,2),t!==null&&Dt(t,e,2)}function Bi(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Bh(e,t){sl=Ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,qf(e,n)}}var Ni={readContext:ct,use:Mi,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},Uh={readContext:ct,use:Mi,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:vh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Oi(4194308,4,_h.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){Oi(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var l=e();if(Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=bt();if(n!==void 0){var i=n(t);if(Aa){Hn(!0);try{n(t)}finally{Hn(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=gx.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=oc(e);var t=e.queue,n=Oh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:uc,useDeferredValue:function(e,t){var n=bt();return fc(n,e,t)},useTransition:function(){var e=oc(!1);return e=Th.bind(null,fe,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=fe,i=bt();if(ve){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ke===null)throw Error(c(349));(xe&124)!==0||lh(l,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vh(ih.bind(null,l,o,e),[e]),l.flags|=2048,cl(9,Di(),rh.bind(null,l,o,n,t),null),n},useId:function(){var e=bt(),t=ke.identifierPrefix;if(ve){var n=wn,l=jn;n=(l&~(1<<32-zt(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ri++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=cx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:hc,useFormState:gh,useActionState:gh,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:rc,useCacheRefresh:function(){return bt().memoizedState=mx.bind(null,fe)}},Lh={readContext:ct,use:Mi,useCallback:zh,useContext:ct,useEffect:Sh,useImperativeHandle:Eh,useInsertionEffect:jh,useLayoutEffect:wh,useMemo:Ch,useReducer:ki,useRef:yh,useState:function(){return ki(zn)},useDebugValue:uc,useDeferredValue:function(e,t){var n=Ke();return Ah(n,Ae.memoizedState,e,t)},useTransition:function(){var e=ki(zn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:br(e),t]},useSyncExternalStore:ah,useId:kh,useHostTransitionStatus:hc,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var n=Ke();return ch(n,Ae,e,t)},useMemoCache:rc,useCacheRefresh:Dh},px={readContext:ct,use:Mi,useCallback:zh,useContext:ct,useEffect:Sh,useImperativeHandle:Eh,useInsertionEffect:jh,useLayoutEffect:wh,useMemo:Ch,useReducer:sc,useRef:yh,useState:function(){return sc(zn)},useDebugValue:uc,useDeferredValue:function(e,t){var n=Ke();return Ae===null?fc(n,e,t):Ah(n,Ae.memoizedState,e,t)},useTransition:function(){var e=sc(zn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:br(e),t]},useSyncExternalStore:ah,useId:kh,useHostTransitionStatus:hc,useFormState:xh,useActionState:xh,useOptimistic:function(e,t){var n=Ke();return Ae!==null?ch(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:rc,useCacheRefresh:Dh},ul=null,vr=0;function Ui(e){var t=vr;return vr+=1,ul===null&&(ul=[]),Pd(ul,e,t)}function Sr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===S?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hh(e){var t=e._init;return t(e._payload)}function Gh(e){function t(z,E){if(e){var M=z.deletions;M===null?(z.deletions=[E],z.flags|=16):M.push(E)}}function n(z,E){if(!e)return null;for(;E!==null;)t(z,E),E=E.sibling;return null}function l(z){for(var E=new Map;z!==null;)z.key!==null?E.set(z.key,z):E.set(z.index,z),z=z.sibling;return E}function i(z,E){return z=Sn(z,E),z.index=0,z.sibling=null,z}function o(z,E,M){return z.index=M,e?(M=z.alternate,M!==null?(M=M.index,M<E?(z.flags|=67108866,E):M):(z.flags|=67108866,E)):(z.flags|=1048576,E)}function m(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function b(z,E,M,G){return E===null||E.tag!==6?(E=Bo(M,z.mode,G),E.return=z,E):(E=i(E,M),E.return=z,E)}function j(z,E,M,G){var W=M.type;return W===A?U(z,E,M.props.children,G,M.key):E!==null&&(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===se&&Hh(W)===E.type)?(E=i(E,M.props),Sr(E,M),E.return=z,E):(E=vi(M.type,M.key,M.props,null,z.mode,G),Sr(E,M),E.return=z,E)}function k(z,E,M,G){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=No(M,z.mode,G),E.return=z,E):(E=i(E,M.children||[]),E.return=z,E)}function U(z,E,M,G,W){return E===null||E.tag!==7?(E=va(M,z.mode,G,W),E.return=z,E):(E=i(E,M),E.return=z,E)}function V(z,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Bo(""+E,z.mode,M),E.return=z,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return M=vi(E.type,E.key,E.props,null,z.mode,M),Sr(M,E),M.return=z,M;case R:return E=No(E,z.mode,M),E.return=z,E;case se:var G=E._init;return E=G(E._payload),V(z,E,M)}if(Ce(E)||Ue(E))return E=va(E,z.mode,M,null),E.return=z,E;if(typeof E.then=="function")return V(z,Ui(E),M);if(E.$$typeof===T)return V(z,_i(z,E),M);Li(z,E)}return null}function D(z,E,M,G){var W=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return W!==null?null:b(z,E,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return M.key===W?j(z,E,M,G):null;case R:return M.key===W?k(z,E,M,G):null;case se:return W=M._init,M=W(M._payload),D(z,E,M,G)}if(Ce(M)||Ue(M))return W!==null?null:U(z,E,M,G,null);if(typeof M.then=="function")return D(z,E,Ui(M),G);if(M.$$typeof===T)return D(z,E,_i(z,M),G);Li(z,M)}return null}function O(z,E,M,G,W){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(M)||null,b(E,z,""+G,W);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return z=z.get(G.key===null?M:G.key)||null,j(E,z,G,W);case R:return z=z.get(G.key===null?M:G.key)||null,k(E,z,G,W);case se:var de=G._init;return G=de(G._payload),O(z,E,M,G,W)}if(Ce(G)||Ue(G))return z=z.get(M)||null,U(E,z,G,W,null);if(typeof G.then=="function")return O(z,E,M,Ui(G),W);if(G.$$typeof===T)return O(z,E,M,_i(E,G),W);Li(E,G)}return null}function ie(z,E,M,G){for(var W=null,de=null,te=E,re=E=0,Ie=null;te!==null&&re<M.length;re++){te.index>re?(Ie=te,te=null):Ie=te.sibling;var ye=D(z,te,M[re],G);if(ye===null){te===null&&(te=Ie);break}e&&te&&ye.alternate===null&&t(z,te),E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye,te=Ie}if(re===M.length)return n(z,te),ve&&ja(z,re),W;if(te===null){for(;re<M.length;re++)te=V(z,M[re],G),te!==null&&(E=o(te,E,re),de===null?W=te:de.sibling=te,de=te);return ve&&ja(z,re),W}for(te=l(te);re<M.length;re++)Ie=O(te,z,re,M[re],G),Ie!==null&&(e&&Ie.alternate!==null&&te.delete(Ie.key===null?re:Ie.key),E=o(Ie,E,re),de===null?W=Ie:de.sibling=Ie,de=Ie);return e&&te.forEach(function(oa){return t(z,oa)}),ve&&ja(z,re),W}function ae(z,E,M,G){if(M==null)throw Error(c(151));for(var W=null,de=null,te=E,re=E=0,Ie=null,ye=M.next();te!==null&&!ye.done;re++,ye=M.next()){te.index>re?(Ie=te,te=null):Ie=te.sibling;var oa=D(z,te,ye.value,G);if(oa===null){te===null&&(te=Ie);break}e&&te&&oa.alternate===null&&t(z,te),E=o(oa,E,re),de===null?W=oa:de.sibling=oa,de=oa,te=Ie}if(ye.done)return n(z,te),ve&&ja(z,re),W;if(te===null){for(;!ye.done;re++,ye=M.next())ye=V(z,ye.value,G),ye!==null&&(E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye);return ve&&ja(z,re),W}for(te=l(te);!ye.done;re++,ye=M.next())ye=O(te,z,re,ye.value,G),ye!==null&&(e&&ye.alternate!==null&&te.delete(ye.key===null?re:ye.key),E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye);return e&&te.forEach(function(by){return t(z,by)}),ve&&ja(z,re),W}function Re(z,E,M,G){if(typeof M=="object"&&M!==null&&M.type===A&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case w:e:{for(var W=M.key;E!==null;){if(E.key===W){if(W=M.type,W===A){if(E.tag===7){n(z,E.sibling),G=i(E,M.props.children),G.return=z,z=G;break e}}else if(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===se&&Hh(W)===E.type){n(z,E.sibling),G=i(E,M.props),Sr(G,M),G.return=z,z=G;break e}n(z,E);break}else t(z,E);E=E.sibling}M.type===A?(G=va(M.props.children,z.mode,G,M.key),G.return=z,z=G):(G=vi(M.type,M.key,M.props,null,z.mode,G),Sr(G,M),G.return=z,z=G)}return m(z);case R:e:{for(W=M.key;E!==null;){if(E.key===W)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){n(z,E.sibling),G=i(E,M.children||[]),G.return=z,z=G;break e}else{n(z,E);break}else t(z,E);E=E.sibling}G=No(M,z.mode,G),G.return=z,z=G}return m(z);case se:return W=M._init,M=W(M._payload),Re(z,E,M,G)}if(Ce(M))return ie(z,E,M,G);if(Ue(M)){if(W=Ue(M),typeof W!="function")throw Error(c(150));return M=W.call(M),ae(z,E,M,G)}if(typeof M.then=="function")return Re(z,E,Ui(M),G);if(M.$$typeof===T)return Re(z,E,_i(z,M),G);Li(z,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(n(z,E.sibling),G=i(E,M),G.return=z,z=G):(n(z,E),G=Bo(M,z.mode,G),G.return=z,z=G),m(z)):n(z,E)}return function(z,E,M,G){try{vr=0;var W=Re(z,E,M,G);return ul=null,W}catch(te){if(te===fr||te===zi)throw te;var de=At(29,te,null,z.mode);return de.lanes=G,de.return=z,de}finally{}}}var fl=Gh(!0),Yh=Gh(!1),Kt=K(null),dn=null;function Xn(e){var t=e.alternate;F(Ze,Ze.current&1),F(Kt,e),dn===null&&(t===null||il.current!==null||t.memoizedState!==null)&&(dn=e)}function $h(e){if(e.tag===22){if(F(Ze,Ze.current),F(Kt,e),dn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(dn=e)}}else Zn()}function Zn(){F(Ze,Ze.current),F(Kt,Kt.current)}function Cn(e){P(Kt),dn===e&&(dn=null),P(Ze)}var Ze=K(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||lu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function gc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=kt(),i=qn(l);i.payload=t,n!=null&&(i.callback=n),t=Kn(e,i,l),t!==null&&(Dt(t,e,l),hr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=kt(),i=qn(l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kn(e,i,l),t!==null&&(Dt(t,e,l),hr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),l=qn(n);l.tag=2,t!=null&&(l.callback=t),t=Kn(e,l,n),t!==null&&(Dt(t,e,n),hr(t,e,n))}};function Vh(e,t,n,l,i,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,m):t.prototype&&t.prototype.isPureReactComponent?!ar(n,l)||!ar(i,o):!0}function qh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&pc.enqueueReplaceState(t,t.state,null)}function Ta(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var Gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kh(e){Gi(e)}function Qh(e){console.error(e)}function Xh(e){Gi(e)}function Yi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zh(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function bc(e,t,n){return n=qn(n),n.tag=3,n.payload={element:null},n.callback=function(){Yi(e,t)},n}function Ph(e){return e=qn(e),e.tag=3,e}function Fh(e,t,n,l){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var o=l.value;e.payload=function(){return i(o)},e.callback=function(){Zh(t,n,l)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Zh(t,n,l),typeof i!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function bx(e,t,n,l,i){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&or(t,n,i,!0),n=Kt.current,n!==null){switch(n.tag){case 13:return dn===null?Yc():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=i,l===Qo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Vc(e,l,i)),!1;case 22:return n.flags|=65536,l===Qo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Vc(e,l,i)),!1}throw Error(c(435,n.tag))}return Vc(e,l,i),Yc(),!1}if(ve)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Ho&&(e=Error(c(422),{cause:l}),sr(Yt(e,n)))):(l!==Ho&&(t=Error(c(423),{cause:l}),sr(Yt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Yt(l,n),i=bc(e.stateNode,l,i),Po(e,i),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:l});if(o=Yt(o,n),Ar===null?Ar=[o]:Ar.push(o),Ge!==4&&(Ge=2),t===null)return!0;l=Yt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=bc(n.stateNode,l,e),Po(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ea===null||!ea.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ph(i),Fh(i,e,n,l),Po(n,i),!1}n=n.return}while(n!==null);return!1}var Jh=Error(c(461)),Je=!1;function lt(e,t,n,l){t.child=e===null?Yh(t,null,n,l):fl(t,e.child,n,l)}function Wh(e,t,n,l,i){n=n.render;var o=t.ref;if("ref"in l){var m={};for(var b in l)b!=="ref"&&(m[b]=l[b])}else m=l;return za(t),l=ec(e,t,n,m,o,i),b=tc(),e!==null&&!Je?(nc(e,t,i),An(e,t,i)):(ve&&b&&Uo(t),t.flags|=1,lt(e,t,l,i),t.child)}function Ih(e,t,n,l,i){if(e===null){var o=n.type;return typeof o=="function"&&!Oo(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,em(e,t,o,l,i)):(e=vi(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ec(e,i)){var m=o.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(m,l)&&e.ref===t.ref)return An(e,t,i)}return t.flags|=1,e=Sn(o,l),e.ref=t.ref,e.return=t,t.child=e}function em(e,t,n,l,i){if(e!==null){var o=e.memoizedProps;if(ar(o,l)&&e.ref===t.ref)if(Je=!1,t.pendingProps=l=o,Ec(e,i))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,An(e,t,i)}return xc(e,t,n,l,i)}function tm(e,t,n){var l=t.pendingProps,i=l.children,o=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=o!==null?o.baseLanes|n:n,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~l}else t.childLanes=0,t.child=null;return nm(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ei(t,o!==null?o.cachePool:null),o!==null?eh(t,o):Jo(),$h(t);else return t.lanes=t.childLanes=536870912,nm(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Ei(t,o.cachePool),eh(t,o),Zn(),t.memoizedState=null):(e!==null&&Ei(t,null),Jo(),Zn());return lt(e,t,i,n),t.child}function nm(e,t,n,l){var i=Ko();return i=i===null?null:{parent:Xe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ei(t,null),Jo(),$h(t),e!==null&&or(e,t,l,!0),null}function $i(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function xc(e,t,n,l,i){return za(t),n=ec(e,t,n,l,void 0,i),l=tc(),e!==null&&!Je?(nc(e,t,i),An(e,t,i)):(ve&&l&&Uo(t),t.flags|=1,lt(e,t,n,i),t.child)}function am(e,t,n,l,i,o){return za(t),t.updateQueue=null,n=nh(t,l,n,i),th(e),l=tc(),e!==null&&!Je?(nc(e,t,o),An(e,t,o)):(ve&&l&&Uo(t),t.flags|=1,lt(e,t,n,o),t.child)}function lm(e,t,n,l,i){if(za(t),t.stateNode===null){var o=tl,m=n.contextType;typeof m=="object"&&m!==null&&(o=ct(m)),o=new n(l,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=pc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=l,o.state=t.memoizedState,o.refs={},Xo(t),m=n.contextType,o.context=typeof m=="object"&&m!==null?ct(m):tl,o.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(gc(t,n,m,l),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&pc.enqueueReplaceState(o,o.state,null),gr(t,l,o,i),mr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){o=t.stateNode;var b=t.memoizedProps,j=Ta(n,b);o.props=j;var k=o.context,U=n.contextType;m=tl,typeof U=="object"&&U!==null&&(m=ct(U));var V=n.getDerivedStateFromProps;U=typeof V=="function"||typeof o.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,U||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(b||k!==m)&&qh(t,o,l,m),Vn=!1;var D=t.memoizedState;o.state=D,gr(t,l,o,i),mr(),k=t.memoizedState,b||D!==k||Vn?(typeof V=="function"&&(gc(t,n,V,l),k=t.memoizedState),(j=Vn||Vh(t,n,j,l,D,k,m))?(U||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=k),o.props=l,o.state=k,o.context=m,l=j):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{o=t.stateNode,Zo(e,t),m=t.memoizedProps,U=Ta(n,m),o.props=U,V=t.pendingProps,D=o.context,k=n.contextType,j=tl,typeof k=="object"&&k!==null&&(j=ct(k)),b=n.getDerivedStateFromProps,(k=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==V||D!==j)&&qh(t,o,l,j),Vn=!1,D=t.memoizedState,o.state=D,gr(t,l,o,i),mr();var O=t.memoizedState;m!==V||D!==O||Vn||e!==null&&e.dependencies!==null&&wi(e.dependencies)?(typeof b=="function"&&(gc(t,n,b,l),O=t.memoizedState),(U=Vn||Vh(t,n,U,l,D,O,j)||e!==null&&e.dependencies!==null&&wi(e.dependencies))?(k||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,O,j),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,O,j)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),o.props=l,o.state=O,o.context=j,l=U):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),l=!1)}return o=l,$i(e,t),l=(t.flags&128)!==0,o||l?(o=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&l?(t.child=fl(t,e.child,null,i),t.child=fl(t,null,n,i)):lt(e,t,n,i),t.memoizedState=o.state,e=t.child):e=An(e,t,i),e}function rm(e,t,n,l){return ir(),t.flags|=256,lt(e,t,n,l),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:Qd()}}function Sc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qt),e}function im(e,t,n){var l=t.pendingProps,i=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),m&&(i=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(i?Xn(t):Zn(),ve){var b=He,j;if(j=b){e:{for(j=b,b=fn;j.nodeType!==8;){if(!b){b=null;break e}if(j=an(j.nextSibling),j===null){b=null;break e}}b=j}b!==null?(t.memoizedState={dehydrated:b,treeContext:Sa!==null?{id:jn,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},j=At(18,null,null,0),j.stateNode=b,j.return=t,t.child=j,dt=t,He=null,j=!0):j=!1}j||_a(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return lu(b)?t.lanes=32:t.lanes=536870912,null;Cn(t)}return b=l.children,l=l.fallback,i?(Zn(),i=t.mode,b=Vi({mode:"hidden",children:b},i),l=va(l,i,n,null),b.return=t,l.return=t,b.sibling=l,t.child=b,i=t.child,i.memoizedState=vc(n),i.childLanes=Sc(e,m,n),t.memoizedState=yc,l):(Xn(t),jc(t,b))}if(j=e.memoizedState,j!==null&&(b=j.dehydrated,b!==null)){if(o)t.flags&256?(Xn(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),i=l.fallback,b=t.mode,l=Vi({mode:"visible",children:l.children},b),i=va(i,b,n,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,fl(t,e.child,null,n),l=t.child,l.memoizedState=vc(n),l.childLanes=Sc(e,m,n),t.memoizedState=yc,t=i);else if(Xn(t),lu(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var k=m.dgst;m=k,l=Error(c(419)),l.stack="",l.digest=m,sr({value:l,source:null,stack:null}),t=wc(e,t,n)}else if(Je||or(e,t,n,!1),m=(n&e.childLanes)!==0,Je||m){if(m=ke,m!==null&&(l=n&-n,l=(l&42)!==0?1:lo(l),l=(l&(m.suspendedLanes|n))!==0?0:l,l!==0&&l!==j.retryLane))throw j.retryLane=l,el(e,l),Dt(m,e,l),Jh;b.data==="$?"||Yc(),t=wc(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,He=an(b.nextSibling),dt=t,ve=!0,wa=null,fn=!1,e!==null&&(Vt[qt++]=jn,Vt[qt++]=wn,Vt[qt++]=Sa,jn=e.id,wn=e.overflow,Sa=t),t=jc(t,l.children),t.flags|=4096);return t}return i?(Zn(),i=l.fallback,b=t.mode,j=e.child,k=j.sibling,l=Sn(j,{mode:"hidden",children:l.children}),l.subtreeFlags=j.subtreeFlags&65011712,k!==null?i=Sn(k,i):(i=va(i,b,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,b=e.child.memoizedState,b===null?b=vc(n):(j=b.cachePool,j!==null?(k=Xe._currentValue,j=j.parent!==k?{parent:k,pool:k}:j):j=Qd(),b={baseLanes:b.baseLanes|n,cachePool:j}),i.memoizedState=b,i.childLanes=Sc(e,m,n),t.memoizedState=yc,l):(Xn(t),n=e.child,e=n.sibling,n=Sn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function jc(e,t){return t=Vi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vi(e,t){return e=At(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function wc(e,t,n){return fl(t,e.child,null,n),e=jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sm(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Yo(e.return,t,n)}function _c(e,t,n,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=i)}function om(e,t,n){var l=t.pendingProps,i=l.revealOrder,o=l.tail;if(lt(e,t,l.children,n),l=Ze.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sm(e,n,t);else if(e.tag===19)sm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(F(Ze,l),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_c(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_c(t,!0,n,null,o);break;case"together":_c(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(or(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wi(e)))}function xx(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),$n(t,Xe,e.memoizedState.cache),ir();break;case 27:case 5:ma(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Xn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?im(e,t,n):(Xn(t),e=An(e,t,n),e!==null?e.sibling:null);Xn(t);break;case 19:var i=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(or(e,t,n,!1),l=(n&t.childLanes)!==0),i){if(l)return om(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(Ze,Ze.current),l)break;return null;case 22:case 23:return t.lanes=0,tm(e,t,n);case 24:$n(t,Xe,e.memoizedState.cache)}return An(e,t,n)}function cm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Ec(e,n)&&(t.flags&128)===0)return Je=!1,xx(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,ve&&(t.flags&1048576)!==0&&Hd(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,i=l._init;if(l=i(l._payload),t.type=l,typeof l=="function")Oo(l)?(e=Ta(l,e),t.tag=1,t=lm(null,t,l,e,n)):(t.tag=0,t=xc(null,t,l,e,n));else{if(l!=null){if(i=l.$$typeof,i===q){t.tag=11,t=Wh(null,t,l,e,n);break e}else if(i===Y){t.tag=14,t=Ih(null,t,l,e,n);break e}}throw t=at(l)||l,Error(c(306,t,""))}}return t;case 0:return xc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,i=Ta(l,t.pendingProps),lm(e,t,l,i,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var o=t.memoizedState;i=o.element,Zo(e,t),gr(t,l,null,n);var m=t.memoizedState;if(l=m.cache,$n(t,Xe,l),l!==o.cache&&$o(t,[Xe],n,!0),mr(),l=m.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=rm(e,t,l,n);break e}else if(l!==i){i=Yt(Error(c(424)),t),sr(i),t=rm(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=an(e.firstChild),dt=t,ve=!0,wa=null,fn=!0,n=Yh(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ir(),l===i){t=An(e,t,n);break e}lt(e,t,l,n)}t=t.child}return t;case 26:return $i(e,t),e===null?(n=hg(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,l=as(le.current).createElement(n),l[ot]=t,l[gt]=e,it(l,n,e),Fe(l),t.stateNode=l):t.memoizedState=hg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ma(t),e===null&&ve&&(l=t.stateNode=ug(t.type,t.pendingProps,le.current),dt=t,fn=!0,i=He,aa(t.type)?(ru=i,He=an(l.firstChild)):He=i),lt(e,t,t.pendingProps.children,n),$i(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((i=l=He)&&(l=Qx(l,t.type,t.pendingProps,fn),l!==null?(t.stateNode=l,dt=t,He=an(l.firstChild),fn=!1,i=!0):i=!1),i||_a(t)),ma(t),i=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,l=o.children,tu(i,o)?l=null:m!==null&&tu(i,m)&&(t.flags|=32),t.memoizedState!==null&&(i=ec(e,t,ux,null,null,n),Ur._currentValue=i),$i(e,t),lt(e,t,l,n),t.child;case 6:return e===null&&ve&&((e=n=He)&&(n=Xx(n,t.pendingProps,fn),n!==null?(t.stateNode=n,dt=t,He=null,e=!0):e=!1),e||_a(t)),null;case 13:return im(e,t,n);case 4:return je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=fl(t,null,l,n):lt(e,t,l,n),t.child;case 11:return Wh(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,$n(t,t.type,l.value),lt(e,t,l.children,n),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,za(t),i=ct(i),l=l(i),t.flags|=1,lt(e,t,l,n),t.child;case 14:return Ih(e,t,t.type,t.pendingProps,n);case 15:return em(e,t,t.type,t.pendingProps,n);case 19:return om(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Vi(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Sn(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return tm(e,t,n);case 24:return za(t),l=ct(Xe),e===null?(i=Ko(),i===null&&(i=ke,o=Vo(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:l,cache:i},Xo(t),$n(t,Xe,i)):((e.lanes&n)!==0&&(Zo(e,t),gr(t,null,null,n),mr()),i=e.memoizedState,o=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),$n(t,Xe,l)):(l=o.cache,$n(t,Xe,l),l!==i.cache&&$o(t,[Xe],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Tn(e){e.flags|=4}function um(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xg(t)){if(t=Kt.current,t!==null&&((xe&4194048)===xe?dn!==null:(xe&62914560)!==xe&&(xe&536870912)===0||t!==dn))throw dr=Qo,Xd;e.flags|=8192}}function qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$f():536870912,e.lanes|=t,gl|=t)}function jr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function yx(e,t,n){var l=t.pendingProps;switch(Lo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),En(Xe),st(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(rr(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$d())),Le(t),null;case 26:return n=t.memoizedState,e===null?(Tn(t),n!==null?(Le(t),um(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Tn(t),Le(t),um(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==l&&Tn(t),Le(t),t.flags&=-16777217),null;case 27:xn(t),n=le.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Tn(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=ee.current,rr(t)?Gd(t):(e=ug(i,l,n),t.stateNode=e,Tn(t))}return Le(t),null;case 5:if(xn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Tn(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(e=ee.current,rr(t))Gd(t);else{switch(i=as(le.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}e[ot]=t,e[gt]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(it(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Tn(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Tn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,rr(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,i=dt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ag(e.nodeValue,n)),e||_a(t)}else e=as(e).createTextNode(l),e[ot]=t,t.stateNode=e}return Le(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=rr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[ot]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else i=$d(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Cn(t),t):(Cn(t),null)}if(Cn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var o=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==i&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),qi(t,t.updateQueue),Le(t),null;case 4:return st(),e===null&&Fc(t.stateNode.containerInfo),Le(t),null;case 10:return En(t.type),Le(t),null;case 19:if(P(Ze),i=t.memoizedState,i===null)return Le(t),null;if(l=(t.flags&128)!==0,o=i.rendering,o===null)if(l)jr(i,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Hi(e),o!==null){for(t.flags|=128,jr(i,!1),e=o.updateQueue,t.updateQueue=e,qi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ld(n,e),n=n.sibling;return F(Ze,Ze.current&1|2),t.child}e=e.sibling}i.tail!==null&&un()>Xi&&(t.flags|=128,l=!0,jr(i,!1),t.lanes=4194304)}else{if(!l)if(e=Hi(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,qi(t,e),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return Le(t),null}else 2*un()-i.renderingStartTime>Xi&&n!==536870912&&(t.flags|=128,l=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=un(),t.sibling=null,e=Ze.current,F(Ze,l?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return Cn(t),Wo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&qi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&P(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),En(Xe),Le(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function vx(e,t){switch(Lo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(Xe),st(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xn(t),null;case 13:if(Cn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Ze),null;case 4:return st(),null;case 10:return En(t.type),null;case 22:case 23:return Cn(t),Wo(),e!==null&&P(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(Xe),null;case 25:return null;default:return null}}function fm(e,t){switch(Lo(t),t.tag){case 3:En(Xe),st();break;case 26:case 27:case 5:xn(t);break;case 4:st();break;case 13:Cn(t);break;case 19:P(Ze);break;case 10:En(t.type);break;case 22:case 23:Cn(t),Wo(),e!==null&&P(Ca);break;case 24:En(Xe)}}function wr(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){l=void 0;var o=n.create,m=n.inst;l=o(),m.destroy=l}n=n.next}while(n!==i)}}catch(b){Me(t,t.return,b)}}function Pn(e,t,n){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var o=i.next;l=o;do{if((l.tag&e)===e){var m=l.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,i=t;var j=n,k=b;try{k()}catch(U){Me(i,j,U)}}}l=l.next}while(l!==o)}}catch(U){Me(t,t.return,U)}}function dm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Id(t,n)}catch(l){Me(e,e.return,l)}}}function hm(e,t,n){n.props=Ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Me(e,t,l)}}function _r(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){Me(e,t,i)}}function hn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(i){Me(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Me(e,t,i)}else n.current=null}function mm(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(i){Me(e,e.return,i)}}function zc(e,t,n){try{var l=e.stateNode;Yx(l,e.type,n,t),l[gt]=t}catch(i){Me(e,e.return,i)}}function gm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&aa(e.type)||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ns));else if(l!==4&&(l===27&&aa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function Ki(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&aa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function pm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);it(t,l,n),t[ot]=e,t[gt]=n}catch(o){Me(e,e.return,o)}}var Rn=!1,Ve=!1,Tc=!1,bm=typeof WeakSet=="function"?WeakSet:Set,We=null;function Sx(e,t){if(e=e.containerInfo,Ic=cs,e=Ad(e),Co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var m=0,b=-1,j=-1,k=0,U=0,V=e,D=null;t:for(;;){for(var O;V!==n||i!==0&&V.nodeType!==3||(b=m+i),V!==o||l!==0&&V.nodeType!==3||(j=m+l),V.nodeType===3&&(m+=V.nodeValue.length),(O=V.firstChild)!==null;)D=V,V=O;for(;;){if(V===e)break t;if(D===n&&++k===i&&(b=m),D===o&&++U===l&&(j=m),(O=V.nextSibling)!==null)break;V=D,D=V.parentNode}V=O}n=b===-1||j===-1?null:{start:b,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(eu={focusedElem:e,selectionRange:n},cs=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,l=n.stateNode;try{var ie=Ta(n.type,i,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(ie,o),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Me(n,n.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)au(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":au(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function xm(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Fn(e,n),l&4&&wr(5,n);break;case 1:if(Fn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Me(n,n.return,m)}else{var i=Ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Me(n,n.return,m)}}l&64&&dm(n),l&512&&_r(n,n.return);break;case 3:if(Fn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Id(e,t)}catch(m){Me(n,n.return,m)}}break;case 27:t===null&&l&4&&pm(n);case 26:case 5:Fn(e,n),t===null&&l&4&&mm(n),l&512&&_r(n,n.return);break;case 12:Fn(e,n);break;case 13:Fn(e,n),l&4&&Sm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Rx.bind(null,n),Zx(e,n))));break;case 22:if(l=n.memoizedState!==null||Rn,!l){t=t!==null&&t.memoizedState!==null||Ve,i=Rn;var o=Ve;Rn=l,(Ve=t)&&!o?Jn(e,n,(n.subtreeFlags&8772)!==0):Fn(e,n),Rn=i,Ve=o}break;case 30:break;default:Fn(e,n)}}function ym(e){var t=e.alternate;t!==null&&(e.alternate=null,ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&so(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,xt=!1;function Mn(e,t,n){for(n=n.child;n!==null;)vm(e,t,n),n=n.sibling}function vm(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 26:Ve||hn(n,t),Mn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||hn(n,t);var l=Be,i=xt;aa(n.type)&&(Be=n.stateNode,xt=!1),Mn(e,t,n),Dr(n.stateNode),Be=l,xt=i;break;case 5:Ve||hn(n,t);case 6:if(l=Be,i=xt,Be=null,Mn(e,t,n),Be=l,xt=i,Be!==null)if(xt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(o){Me(n,t,o)}else try{Be.removeChild(n.stateNode)}catch(o){Me(n,t,o)}break;case 18:Be!==null&&(xt?(e=Be,og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Yr(e)):og(Be,n.stateNode));break;case 4:l=Be,i=xt,Be=n.stateNode.containerInfo,xt=!0,Mn(e,t,n),Be=l,xt=i;break;case 0:case 11:case 14:case 15:Ve||Pn(2,n,t),Ve||Pn(4,n,t),Mn(e,t,n);break;case 1:Ve||(hn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&hm(n,t,l)),Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:Ve=(l=Ve)||n.memoizedState!==null,Mn(e,t,n),Ve=l;break;default:Mn(e,t,n)}}function Sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(n){Me(t,t.return,n)}}function jx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bm),t;default:throw Error(c(435,e.tag))}}function Rc(e,t){var n=jx(e);t.forEach(function(l){var i=Mx.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}function Tt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l],o=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(aa(b.type)){Be=b.stateNode,xt=!1;break e}break;case 5:Be=b.stateNode,xt=!1;break e;case 3:case 4:Be=b.stateNode.containerInfo,xt=!0;break e}b=b.return}if(Be===null)throw Error(c(160));vm(o,m,i),Be=null,xt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}var nn=null;function jm(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),Rt(e),l&4&&(Pn(3,e,e.return),wr(3,e),Pn(5,e,e.return));break;case 1:Tt(t,e),Rt(e),l&512&&(Ve||n===null||hn(n,n.return)),l&64&&Rn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var i=nn;if(Tt(t,e),Rt(e),l&512&&(Ve||n===null||hn(n,n.return)),l&4){var o=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Zl]||o[ot]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(l),i.head.insertBefore(o,i.querySelector("head > title"))),it(o,l,n),o[ot]=e,Fe(o),l=o;break e;case"link":var m=pg("link","href",i).get(l+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(o=m[b],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}o=i.createElement(l),it(o,l,n),i.head.appendChild(o);break;case"meta":if(m=pg("meta","content",i).get(l+(n.content||""))){for(b=0;b<m.length;b++)if(o=m[b],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}o=i.createElement(l),it(o,l,n),i.head.appendChild(o);break;default:throw Error(c(468,l))}o[ot]=e,Fe(o),l=o}e.stateNode=l}else bg(i,e.type,e.stateNode);else e.stateNode=gg(i,l,e.memoizedProps);else o!==l?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,l===null?bg(i,e.type,e.stateNode):gg(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tt(t,e),Rt(e),l&512&&(Ve||n===null||hn(n,n.return)),n!==null&&l&4&&zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tt(t,e),Rt(e),l&512&&(Ve||n===null||hn(n,n.return)),e.flags&32){i=e.stateNode;try{Xa(i,"")}catch(O){Me(e,e.return,O)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,zc(e,i,n!==null?n.memoizedProps:i)),l&1024&&(Tc=!0);break;case 6:if(Tt(t,e),Rt(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(O){Me(e,e.return,O)}}break;case 3:if(is=null,i=nn,nn=ls(t.containerInfo),Tt(t,e),nn=i,Rt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(O){Me(e,e.return,O)}Tc&&(Tc=!1,wm(e));break;case 4:l=nn,nn=ls(e.stateNode.containerInfo),Tt(t,e),Rt(e),nn=l;break;case 12:Tt(t,e),Rt(e);break;case 13:Tt(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Nc=un()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rc(e,l)));break;case 22:i=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,k=Rn,U=Ve;if(Rn=k||i,Ve=U||j,Tt(t,e),Ve=U,Rn=k,Rt(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||j||Rn||Ve||Ra(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(o=j.stateNode,i)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=j.stateNode;var V=j.memoizedProps.style,D=V!=null&&V.hasOwnProperty("display")?V.display:null;b.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(O){Me(j,j.return,O)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=i?"":j.memoizedProps}catch(O){Me(j,j.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Rc(e,n))));break;case 19:Tt(t,e),Rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rc(e,l)));break;case 30:break;case 21:break;default:Tt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(gm(l)){n=l;break}l=l.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var i=n.stateNode,o=Cc(e);Ki(e,o,i);break;case 5:var m=n.stateNode;n.flags&32&&(Xa(m,""),n.flags&=-33);var b=Cc(e);Ki(e,b,m);break;case 3:case 4:var j=n.stateNode.containerInfo,k=Cc(e);Ac(e,k,j);break;default:throw Error(c(161))}}catch(U){Me(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xm(e,t.alternate,t),t=t.sibling}function Ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pn(4,t,t.return),Ra(t);break;case 1:hn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&hm(t,t.return,n),Ra(t);break;case 27:Dr(t.stateNode);case 26:case 5:hn(t,t.return),Ra(t);break;case 22:t.memoizedState===null&&Ra(t);break;case 30:Ra(t);break;default:Ra(t)}e=e.sibling}}function Jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:Jn(i,o,n),wr(4,o);break;case 1:if(Jn(i,o,n),l=o,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(k){Me(l,l.return,k)}if(l=o,i=l.updateQueue,i!==null){var b=l.stateNode;try{var j=i.shared.hiddenCallbacks;if(j!==null)for(i.shared.hiddenCallbacks=null,i=0;i<j.length;i++)Wd(j[i],b)}catch(k){Me(l,l.return,k)}}n&&m&64&&dm(o),_r(o,o.return);break;case 27:pm(o);case 26:case 5:Jn(i,o,n),n&&l===null&&m&4&&mm(o),_r(o,o.return);break;case 12:Jn(i,o,n);break;case 13:Jn(i,o,n),n&&m&4&&Sm(i,o);break;case 22:o.memoizedState===null&&Jn(i,o,n),_r(o,o.return);break;case 30:break;default:Jn(i,o,n)}t=t.sibling}}function Mc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cr(n))}function kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e))}function mn(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_m(e,t,n,l),t=t.sibling}function _m(e,t,n,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:mn(e,t,n,l),i&2048&&wr(9,t);break;case 1:mn(e,t,n,l);break;case 3:mn(e,t,n,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e)));break;case 12:if(i&2048){mn(e,t,n,l),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,b=o.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Me(t,t.return,j)}}else mn(e,t,n,l);break;case 13:mn(e,t,n,l);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?mn(e,t,n,l):Er(e,t):o._visibility&2?mn(e,t,n,l):(o._visibility|=2,dl(e,t,n,l,(t.subtreeFlags&10256)!==0)),i&2048&&Mc(m,t);break;case 24:mn(e,t,n,l),i&2048&&kc(t.alternate,t);break;default:mn(e,t,n,l)}}function dl(e,t,n,l,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,b=n,j=l,k=m.flags;switch(m.tag){case 0:case 11:case 15:dl(o,m,b,j,i),wr(8,m);break;case 23:break;case 22:var U=m.stateNode;m.memoizedState!==null?U._visibility&2?dl(o,m,b,j,i):Er(o,m):(U._visibility|=2,dl(o,m,b,j,i)),i&&k&2048&&Mc(m.alternate,m);break;case 24:dl(o,m,b,j,i),i&&k&2048&&kc(m.alternate,m);break;default:dl(o,m,b,j,i)}t=t.sibling}}function Er(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,i=l.flags;switch(l.tag){case 22:Er(n,l),i&2048&&Mc(l.alternate,l);break;case 24:Er(n,l),i&2048&&kc(l.alternate,l);break;default:Er(n,l)}t=t.sibling}}var zr=8192;function hl(e){if(e.subtreeFlags&zr)for(e=e.child;e!==null;)Em(e),e=e.sibling}function Em(e){switch(e.tag){case 26:hl(e),e.flags&zr&&e.memoizedState!==null&&sy(nn,e.memoizedState,e.memoizedProps);break;case 5:hl(e);break;case 3:case 4:var t=nn;nn=ls(e.stateNode.containerInfo),hl(e),nn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=zr,zr=16777216,hl(e),zr=t):hl(e));break;default:hl(e)}}function zm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];We=l,Am(l,e)}zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cm(e),e=e.sibling}function Cm(e){switch(e.tag){case 0:case 11:case 15:Cr(e),e.flags&2048&&Pn(9,e,e.return);break;case 3:Cr(e);break;case 12:Cr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qi(e)):Cr(e);break;default:Cr(e)}}function Qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];We=l,Am(l,e)}zm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pn(8,t,t.return),Qi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qi(t));break;default:Qi(t)}e=e.sibling}}function Am(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Pn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cr(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,We=l;else e:for(n=e;We!==null;){l=We;var i=l.sibling,o=l.return;if(ym(l),l===n){We=null;break e}if(i!==null){i.return=o,We=i;break e}We=o}}}var wx={getCacheForType:function(e){var t=ct(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},_x=typeof WeakMap=="function"?WeakMap:Map,Ee=0,ke=null,me=null,xe=0,ze=0,Mt=null,Wn=!1,ml=!1,Dc=!1,kn=0,Ge=0,In=0,Ma=0,Oc=0,Qt=0,gl=0,Ar=null,yt=null,Bc=!1,Nc=0,Xi=1/0,Zi=null,ea=null,rt=0,ta=null,pl=null,bl=0,Uc=0,Lc=null,Tm=null,Tr=0,Hc=null;function kt(){if((Ee&2)!==0&&xe!==0)return xe&-xe;if(N.T!==null){var e=ll;return e!==0?e:Qc()}return Kf()}function Rm(){Qt===0&&(Qt=(xe&536870912)===0||ve?Yf():536870912);var e=Kt.current;return e!==null&&(e.flags|=32),Qt}function Dt(e,t,n){(e===ke&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(xl(e,0),na(e,xe,Qt,!1)),Xl(e,n),((Ee&2)===0||e!==ke)&&(e===ke&&((Ee&2)===0&&(Ma|=n),Ge===4&&na(e,xe,Qt,!1)),gn(e))}function Mm(e,t,n){if((Ee&6)!==0)throw Error(c(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ql(e,t),i=l?Cx(e,t):$c(e,t,!0),o=l;do{if(i===0){ml&&!l&&na(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Ex(n)){i=$c(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;i=Ar;var j=b.current.memoizedState.isDehydrated;if(j&&(xl(b,m).flags|=256),m=$c(b,m,!1),m!==2){if(Dc&&!j){b.errorRecoveryDisabledLanes|=o,Ma|=o,i=4;break e}o=yt,yt=i,o!==null&&(yt===null?yt=o:yt.push.apply(yt,o))}i=m}if(o=!1,i!==2)continue}}if(i===1){xl(e,0),na(e,t,0,!0);break}e:{switch(l=e,o=i,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:na(l,t,Qt,!Wn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Nc+300-un(),10<i)){if(na(l,t,Qt,!Wn),ri(l,0,!0)!==0)break e;l.timeoutHandle=ig(km.bind(null,l,n,yt,Zi,Bc,t,Qt,Ma,gl,Wn,o,2,-0,0),i);break e}km(l,n,yt,Zi,Bc,t,Qt,Ma,gl,Wn,o,0,-0,0)}}break}while(!0);gn(e)}function km(e,t,n,l,i,o,m,b,j,k,U,V,D,O){if(e.timeoutHandle=-1,V=t.subtreeFlags,(V&8192||(V&16785408)===16785408)&&(Nr={stylesheets:null,count:0,unsuspend:iy},Em(t),V=oy(),V!==null)){e.cancelPendingCommit=V(Hm.bind(null,e,t,o,n,l,i,m,b,j,U,1,D,O)),na(e,o,m,!k);return}Hm(e,t,o,n,l,i,m,b,j)}function Ex(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var i=n[l],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,l){t&=~Oc,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var o=31-zt(i),m=1<<o;l[o]=-1,i&=~m}n!==0&&Vf(e,n,t)}function Pi(){return(Ee&6)===0?(Rr(0),!1):!0}function Gc(){if(me!==null){if(ze===0)var e=me.return;else e=me,_n=Ea=null,ac(e),ul=null,vr=0,e=me;for(;e!==null;)fm(e.alternate,e),e=e.return;me=null}}function xl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Vx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gc(),ke=e,me=n=Sn(e.current,null),xe=t,ze=0,Mt=null,Wn=!1,ml=Ql(e,t),Dc=!1,gl=Qt=Oc=Ma=In=Ge=0,yt=Ar=null,Bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-zt(l),o=1<<i;t|=e[i],l&=~o}return kn=t,bi(),n}function Dm(e,t){fe=null,N.H=Ni,t===fr||t===zi?(t=Fd(),ze=3):t===Xd?(t=Fd(),ze=4):ze=t===Jh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,me===null&&(Ge=1,Yi(e,Yt(t,e.current)))}function Om(){var e=N.H;return N.H=Ni,e===null?Ni:e}function Bm(){var e=N.A;return N.A=wx,e}function Yc(){Ge=4,Wn||(xe&4194048)!==xe&&Kt.current!==null||(ml=!0),(In&134217727)===0&&(Ma&134217727)===0||ke===null||na(ke,xe,Qt,!1)}function $c(e,t,n){var l=Ee;Ee|=2;var i=Om(),o=Bm();(ke!==e||xe!==t)&&(Zi=null,xl(e,t)),t=!1;var m=Ge;e:do try{if(ze!==0&&me!==null){var b=me,j=Mt;switch(ze){case 8:Gc(),m=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var k=ze;if(ze=0,Mt=null,yl(e,b,j,k),n&&ml){m=0;break e}break;default:k=ze,ze=0,Mt=null,yl(e,b,j,k)}}zx(),m=Ge;break}catch(U){Dm(e,U)}while(!0);return t&&e.shellSuspendCounter++,_n=Ea=null,Ee=l,N.H=i,N.A=o,me===null&&(ke=null,xe=0,bi()),m}function zx(){for(;me!==null;)Nm(me)}function Cx(e,t){var n=Ee;Ee|=2;var l=Om(),i=Bm();ke!==e||xe!==t?(Zi=null,Xi=un()+500,xl(e,t)):ml=Ql(e,t);e:do try{if(ze!==0&&me!==null){t=me;var o=Mt;t:switch(ze){case 1:ze=0,Mt=null,yl(e,t,o,1);break;case 2:case 9:if(Zd(o)){ze=0,Mt=null,Um(t);break}t=function(){ze!==2&&ze!==9||ke!==e||(ze=7),gn(e)},o.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Zd(o)?(ze=0,Mt=null,Um(t)):(ze=0,Mt=null,yl(e,t,o,7));break;case 5:var m=null;switch(me.tag){case 26:m=me.memoizedState;case 5:case 27:var b=me;if(!m||xg(m)){ze=0,Mt=null;var j=b.sibling;if(j!==null)me=j;else{var k=b.return;k!==null?(me=k,Fi(k)):me=null}break t}}ze=0,Mt=null,yl(e,t,o,5);break;case 6:ze=0,Mt=null,yl(e,t,o,6);break;case 8:Gc(),Ge=6;break e;default:throw Error(c(462))}}Ax();break}catch(U){Dm(e,U)}while(!0);return _n=Ea=null,N.H=l,N.A=i,Ee=n,me!==null?0:(ke=null,xe=0,bi(),Ge)}function Ax(){for(;me!==null&&!F1();)Nm(me)}function Nm(e){var t=cm(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?Fi(e):me=t}function Um(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=am(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=am(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:ac(t);default:fm(n,t),t=me=Ld(t,kn),t=cm(n,t,kn)}e.memoizedProps=e.pendingProps,t===null?Fi(e):me=t}function yl(e,t,n,l){_n=Ea=null,ac(t),ul=null,vr=0;var i=t.return;try{if(bx(e,i,t,n,xe)){Ge=1,Yi(e,Yt(n,e.current)),me=null;return}}catch(o){if(i!==null)throw me=i,o;Ge=1,Yi(e,Yt(n,e.current)),me=null;return}t.flags&32768?(ve||l===1?e=!0:ml||(xe&536870912)!==0?e=!1:(Wn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Kt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Lm(t,e)):Fi(t)}function Fi(e){var t=e;do{if((t.flags&32768)!==0){Lm(t,Wn);return}e=t.return;var n=yx(t.alternate,t,kn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ge===0&&(Ge=5)}function Lm(e,t){do{var n=vx(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Ge=6,me=null}function Hm(e,t,n,l,i,o,m,b,j){e.cancelPendingCommit=null;do Ji();while(rt!==0);if((Ee&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=ko,ib(e,n,o,m,b,j),e===ke&&(me=ke=null,xe=0),pl=t,ta=e,bl=n,Uc=o,Lc=i,Tm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kx(ni,function(){return qm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,i=Z.p,Z.p=2,m=Ee,Ee|=4;try{Sx(e,t,n)}finally{Ee=m,Z.p=i,N.T=l}}rt=1,Gm(),Ym(),$m()}}function Gm(){if(rt===1){rt=0;var e=ta,t=pl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var l=Z.p;Z.p=2;var i=Ee;Ee|=4;try{jm(t,e);var o=eu,m=Ad(e.containerInfo),b=o.focusedElem,j=o.selectionRange;if(m!==b&&b&&b.ownerDocument&&Cd(b.ownerDocument.documentElement,b)){if(j!==null&&Co(b)){var k=j.start,U=j.end;if(U===void 0&&(U=k),"selectionStart"in b)b.selectionStart=k,b.selectionEnd=Math.min(U,b.value.length);else{var V=b.ownerDocument||document,D=V&&V.defaultView||window;if(D.getSelection){var O=D.getSelection(),ie=b.textContent.length,ae=Math.min(j.start,ie),Re=j.end===void 0?ae:Math.min(j.end,ie);!O.extend&&ae>Re&&(m=Re,Re=ae,ae=m);var z=zd(b,ae),E=zd(b,Re);if(z&&E&&(O.rangeCount!==1||O.anchorNode!==z.node||O.anchorOffset!==z.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var M=V.createRange();M.setStart(z.node,z.offset),O.removeAllRanges(),ae>Re?(O.addRange(M),O.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),O.addRange(M))}}}}for(V=[],O=b;O=O.parentNode;)O.nodeType===1&&V.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<V.length;b++){var G=V[b];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}cs=!!Ic,eu=Ic=null}finally{Ee=i,Z.p=l,N.T=n}}e.current=t,rt=2}}function Ym(){if(rt===2){rt=0;var e=ta,t=pl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var l=Z.p;Z.p=2;var i=Ee;Ee|=4;try{xm(e,t.alternate,t)}finally{Ee=i,Z.p=l,N.T=n}}rt=3}}function $m(){if(rt===4||rt===3){rt=0,J1();var e=ta,t=pl,n=bl,l=Tm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,pl=ta=null,Vm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ea=null),ro(n),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=N.T,i=Z.p,Z.p=2,N.T=null;try{for(var o=e.onRecoverableError,m=0;m<l.length;m++){var b=l[m];o(b.value,{componentStack:b.stack})}}finally{N.T=t,Z.p=i}}(bl&3)!==0&&Ji(),gn(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===Hc?Tr++:(Tr=0,Hc=e):Tr=0,Rr(0)}}function Vm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cr(t)))}function Ji(e){return Gm(),Ym(),$m(),qm()}function qm(){if(rt!==5)return!1;var e=ta,t=Uc;Uc=0;var n=ro(bl),l=N.T,i=Z.p;try{Z.p=32>n?32:n,N.T=null,n=Lc,Lc=null;var o=ta,m=bl;if(rt=0,pl=ta=null,bl=0,(Ee&6)!==0)throw Error(c(331));var b=Ee;if(Ee|=4,Cm(o.current),_m(o,o.current,m,n),Ee=b,Rr(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Kl,o)}catch{}return!0}finally{Z.p=i,N.T=l,Vm(e,t)}}function Km(e,t,n){t=Yt(n,t),t=bc(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Xl(e,2),gn(e))}function Me(e,t,n){if(e.tag===3)Km(e,e,n);else for(;t!==null;){if(t.tag===3){Km(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ea===null||!ea.has(l))){e=Yt(n,e),n=Ph(2),l=Kn(t,n,2),l!==null&&(Fh(n,l,t,e),Xl(l,2),gn(l));break}}t=t.return}}function Vc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new _x;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(Dc=!0,i.add(n),e=Tx.bind(null,e,t,n),t.then(e,e))}function Tx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ke===e&&(xe&n)===n&&(Ge===4||Ge===3&&(xe&62914560)===xe&&300>un()-Nc?(Ee&2)===0&&xl(e,0):Oc|=n,gl===xe&&(gl=0)),gn(e)}function Qm(e,t){t===0&&(t=$f()),e=el(e,t),e!==null&&(Xl(e,t),gn(e))}function Rx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qm(e,n)}function Mx(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Qm(e,n)}function kx(e,t){return to(e,t)}var Wi=null,vl=null,qc=!1,Ii=!1,Kc=!1,ka=0;function gn(e){e!==vl&&e.next===null&&(vl===null?Wi=vl=e:vl=vl.next=e),Ii=!0,qc||(qc=!0,Ox())}function Rr(e,t){if(!Kc&&Ii){Kc=!0;do for(var n=!1,l=Wi;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var o=0;else{var m=l.suspendedLanes,b=l.pingedLanes;o=(1<<31-zt(42|e)+1)-1,o&=i&~(m&~b),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Fm(l,o))}else o=xe,o=ri(l,l===ke?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||Ql(l,o)||(n=!0,Fm(l,o));l=l.next}while(n);Kc=!1}}function Dx(){Xm()}function Xm(){Ii=qc=!1;var e=0;ka!==0&&($x()&&(e=ka),ka=0);for(var t=un(),n=null,l=Wi;l!==null;){var i=l.next,o=Zm(l,t);o===0?(l.next=null,n===null?Wi=i:n.next=i,i===null&&(vl=n)):(n=l,(e!==0||(o&3)!==0)&&(Ii=!0)),l=i}Rr(e)}function Zm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-zt(o),b=1<<m,j=i[m];j===-1?((b&n)===0||(b&l)!==0)&&(i[m]=rb(b,t)):j<=t&&(e.expiredLanes|=b),o&=~b}if(t=ke,n=xe,n=ri(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&no(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ql(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&no(l),ro(n)){case 2:case 8:n=Hf;break;case 32:n=ni;break;case 268435456:n=Gf;break;default:n=ni}return l=Pm.bind(null,e),n=to(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&no(l),e.callbackPriority=2,e.callbackNode=null,2}function Pm(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ji()&&e.callbackNode!==n)return null;var l=xe;return l=ri(e,e===ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Mm(e,l,t),Zm(e,un()),e.callbackNode!=null&&e.callbackNode===n?Pm.bind(null,e):null)}function Fm(e,t){if(Ji())return null;Mm(e,t,!0)}function Ox(){qx(function(){(Ee&6)!==0?to(Lf,Dx):Xm()})}function Qc(){return ka===0&&(ka=Yf()),ka}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ui(""+e)}function Wm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Bx(e,t,n,l,i){if(t==="submit"&&n&&n.stateNode===i){var o=Jm((i[gt]||null).action),m=l.submitter;m&&(t=(t=m[gt]||null)?Jm(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var b=new mi("action","action",null,l,i);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ka!==0){var j=m?Wm(i,m):new FormData(i);dc(n,{pending:!0,data:j,method:i.method,action:o},null,j)}}else typeof o=="function"&&(b.preventDefault(),j=m?Wm(i,m):new FormData(i),dc(n,{pending:!0,data:j,method:i.method,action:o},o,j))},currentTarget:i}]})}}for(var Xc=0;Xc<Mo.length;Xc++){var Zc=Mo[Xc],Nx=Zc.toLowerCase(),Ux=Zc[0].toUpperCase()+Zc.slice(1);tn(Nx,"on"+Ux)}tn(Md,"onAnimationEnd"),tn(kd,"onAnimationIteration"),tn(Dd,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(ex,"onTransitionRun"),tn(tx,"onTransitionStart"),tn(nx,"onTransitionCancel"),tn(Od,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mr));function Im(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var o=void 0;if(t)for(var m=l.length-1;0<=m;m--){var b=l[m],j=b.instance,k=b.currentTarget;if(b=b.listener,j!==o&&i.isPropagationStopped())break e;o=b,i.currentTarget=k;try{o(i)}catch(U){Gi(U)}i.currentTarget=null,o=j}else for(m=0;m<l.length;m++){if(b=l[m],j=b.instance,k=b.currentTarget,b=b.listener,j!==o&&i.isPropagationStopped())break e;o=b,i.currentTarget=k;try{o(i)}catch(U){Gi(U)}i.currentTarget=null,o=j}}}}function ge(e,t){var n=t[io];n===void 0&&(n=t[io]=new Set);var l=e+"__bubble";n.has(l)||(eg(t,e,2,!1),n.add(l))}function Pc(e,t,n){var l=0;t&&(l|=4),eg(n,e,l,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function Fc(e){if(!e[es]){e[es]=!0,Xf.forEach(function(n){n!=="selectionchange"&&(Lx.has(n)||Pc(n,!1,e),Pc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,Pc("selectionchange",!1,t))}}function eg(e,t,n,l){switch(_g(t)){case 2:var i=fy;break;case 8:i=dy;break;default:i=uu}n=i.bind(null,t,n,e),i=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jc(e,t,n,l,i){var o=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var b=l.stateNode.containerInfo;if(b===i)break;if(m===4)for(m=l.return;m!==null;){var j=m.tag;if((j===3||j===4)&&m.stateNode.containerInfo===i)return;m=m.return}for(;b!==null;){if(m=Ya(b),m===null)return;if(j=m.tag,j===5||j===6||j===26||j===27){l=o=m;continue e}b=b.parentNode}}l=l.return}sd(function(){var k=o,U=po(n),V=[];e:{var D=Bd.get(e);if(D!==void 0){var O=mi,ie=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":O=kb;break;case"focusin":ie="focus",O=jo;break;case"focusout":ie="blur",O=jo;break;case"beforeblur":case"afterblur":O=jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=vb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Bb;break;case Md:case kd:case Dd:O=wb;break;case Od:O=Ub;break;case"scroll":case"scrollend":O=xb;break;case"wheel":O=Hb;break;case"copy":case"cut":case"paste":O=Eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=dd;break;case"toggle":case"beforetoggle":O=Yb}var ae=(t&4)!==0,Re=!ae&&(e==="scroll"||e==="scrollend"),z=ae?D!==null?D+"Capture":null:D;ae=[];for(var E=k,M;E!==null;){var G=E;if(M=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||M===null||z===null||(G=Fl(E,z),G!=null&&ae.push(kr(E,G,M))),Re)break;E=E.return}0<ae.length&&(D=new O(D,ie,null,n,U),V.push({event:D,listeners:ae}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",D&&n!==go&&(ie=n.relatedTarget||n.fromElement)&&(Ya(ie)||ie[Ga]))break e;if((O||D)&&(D=U.window===U?U:(D=U.ownerDocument)?D.defaultView||D.parentWindow:window,O?(ie=n.relatedTarget||n.toElement,O=k,ie=ie?Ya(ie):null,ie!==null&&(Re=d(ie),ae=ie.tag,ie!==Re||ae!==5&&ae!==27&&ae!==6)&&(ie=null)):(O=null,ie=k),O!==ie)){if(ae=ud,G="onMouseLeave",z="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ae=dd,G="onPointerLeave",z="onPointerEnter",E="pointer"),Re=O==null?D:Pl(O),M=ie==null?D:Pl(ie),D=new ae(G,E+"leave",O,n,U),D.target=Re,D.relatedTarget=M,G=null,Ya(U)===k&&(ae=new ae(z,E+"enter",ie,n,U),ae.target=M,ae.relatedTarget=Re,G=ae),Re=G,O&&ie)t:{for(ae=O,z=ie,E=0,M=ae;M;M=Sl(M))E++;for(M=0,G=z;G;G=Sl(G))M++;for(;0<E-M;)ae=Sl(ae),E--;for(;0<M-E;)z=Sl(z),M--;for(;E--;){if(ae===z||z!==null&&ae===z.alternate)break t;ae=Sl(ae),z=Sl(z)}ae=null}else ae=null;O!==null&&tg(V,D,O,ae,!1),ie!==null&&Re!==null&&tg(V,Re,ie,ae,!0)}}e:{if(D=k?Pl(k):window,O=D.nodeName&&D.nodeName.toLowerCase(),O==="select"||O==="input"&&D.type==="file")var W=vd;else if(xd(D))if(Sd)W=Jb;else{W=Pb;var de=Zb}else O=D.nodeName,!O||O.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?k&&mo(k.elementType)&&(W=vd):W=Fb;if(W&&(W=W(e,k))){yd(V,W,n,U);break e}de&&de(e,D,k),e==="focusout"&&k&&D.type==="number"&&k.memoizedProps.value!=null&&ho(D,"number",D.value)}switch(de=k?Pl(k):window,e){case"focusin":(xd(de)||de.contentEditable==="true")&&(Ja=de,Ao=k,lr=null);break;case"focusout":lr=Ao=Ja=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,Td(V,n,U);break;case"selectionchange":if(Ib)break;case"keydown":case"keyup":Td(V,n,U)}var te;if(_o)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Fa?pd(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(hd&&n.locale!=="ko"&&(Fa||re!=="onCompositionStart"?re==="onCompositionEnd"&&Fa&&(te=od()):(Yn=U,yo="value"in Yn?Yn.value:Yn.textContent,Fa=!0)),de=ts(k,re),0<de.length&&(re=new fd(re,e,null,n,U),V.push({event:re,listeners:de}),te?re.data=te:(te=bd(n),te!==null&&(re.data=te)))),(te=Vb?qb(e,n):Kb(e,n))&&(re=ts(k,"onBeforeInput"),0<re.length&&(de=new fd("onBeforeInput","beforeinput",null,n,U),V.push({event:de,listeners:re}),de.data=te)),Bx(V,e,k,n,U)}Im(V,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ts(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Fl(e,n),i!=null&&l.unshift(kr(e,i,o)),i=Fl(e,t),i!=null&&l.push(kr(e,i,o))),e.tag===3)return l;e=e.return}return[]}function Sl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tg(e,t,n,l,i){for(var o=t._reactName,m=[];n!==null&&n!==l;){var b=n,j=b.alternate,k=b.stateNode;if(b=b.tag,j!==null&&j===l)break;b!==5&&b!==26&&b!==27||k===null||(j=k,i?(k=Fl(n,o),k!=null&&m.unshift(kr(n,k,j))):i||(k=Fl(n,o),k!=null&&m.push(kr(n,k,j)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Hx=/\r\n?/g,Gx=/\u0000|\uFFFD/g;function ng(e){return(typeof e=="string"?e:""+e).replace(Hx,`
`).replace(Gx,"")}function ag(e,t){return t=ng(t),ng(e)===t}function ns(){}function Te(e,t,n,l,i,o){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Xa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Xa(e,""+l);break;case"className":si(e,"class",l);break;case"tabIndex":si(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,n,l);break;case"style":rd(e,l,o);break;case"data":if(t!=="object"){si(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ui(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ui(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=ns);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ui(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ii(e,"popover",l);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ii(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=pb.get(n)||n,ii(e,n,l))}}function Wc(e,t,n,l,i,o){switch(n){case"style":rd(e,l,o);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Xa(e,l):(typeof l=="number"||typeof l=="bigint")&&Xa(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ns);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),o=e[gt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof l=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,i);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ii(e,n,l)}}}function it(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var m=n[o];if(m!=null)switch(o){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Te(e,t,o,m,n,null)}}i&&Te(e,t,"srcSet",n.srcSet,n,null),l&&Te(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var b=o=m=i=null,j=null,k=null;for(l in n)if(n.hasOwnProperty(l)){var U=n[l];if(U!=null)switch(l){case"name":i=U;break;case"type":m=U;break;case"checked":j=U;break;case"defaultChecked":k=U;break;case"value":o=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Te(e,t,l,U,n,null)}}td(e,o,b,j,k,m,i,!1),oi(e);return;case"select":ge("invalid",e),l=m=o=null;for(i in n)if(n.hasOwnProperty(i)&&(b=n[i],b!=null))switch(i){case"value":o=b;break;case"defaultValue":m=b;break;case"multiple":l=b;default:Te(e,t,i,b,n,null)}t=o,n=m,e.multiple=!!l,t!=null?Qa(e,!!l,t,!1):n!=null&&Qa(e,!!l,n,!0);return;case"textarea":ge("invalid",e),o=i=l=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":l=b;break;case"defaultValue":i=b;break;case"children":o=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(c(91));break;default:Te(e,t,m,b,n,null)}ad(e,l,i,o),oi(e);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Te(e,t,j,l,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<Mr.length;l++)ge(Mr[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(l=n[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Te(e,t,k,l,n,null)}return;default:if(mo(t)){for(U in n)n.hasOwnProperty(U)&&(l=n[U],l!==void 0&&Wc(e,t,U,l,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!=null&&Te(e,t,b,l,n,null))}function Yx(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,m=null,b=null,j=null,k=null,U=null;for(O in n){var V=n[O];if(n.hasOwnProperty(O)&&V!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":j=V;default:l.hasOwnProperty(O)||Te(e,t,O,null,l,V)}}for(var D in l){var O=l[D];if(V=n[D],l.hasOwnProperty(D)&&(O!=null||V!=null))switch(D){case"type":o=O;break;case"name":i=O;break;case"checked":k=O;break;case"defaultChecked":U=O;break;case"value":m=O;break;case"defaultValue":b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:O!==V&&Te(e,t,D,O,l,V)}}fo(e,m,b,j,k,U,o,i);return;case"select":O=m=b=D=null;for(o in n)if(j=n[o],n.hasOwnProperty(o)&&j!=null)switch(o){case"value":break;case"multiple":O=j;default:l.hasOwnProperty(o)||Te(e,t,o,null,l,j)}for(i in l)if(o=l[i],j=n[i],l.hasOwnProperty(i)&&(o!=null||j!=null))switch(i){case"value":D=o;break;case"defaultValue":b=o;break;case"multiple":m=o;default:o!==j&&Te(e,t,i,o,l,j)}t=b,n=m,l=O,D!=null?Qa(e,!!n,D,!1):!!l!=!!n&&(t!=null?Qa(e,!!n,t,!0):Qa(e,!!n,n?[]:"",!1));return;case"textarea":O=D=null;for(b in n)if(i=n[b],n.hasOwnProperty(b)&&i!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Te(e,t,b,null,l,i)}for(m in l)if(i=l[m],o=n[m],l.hasOwnProperty(m)&&(i!=null||o!=null))switch(m){case"value":D=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==o&&Te(e,t,m,i,l,o)}nd(e,D,O);return;case"option":for(var ie in n)if(D=n[ie],n.hasOwnProperty(ie)&&D!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Te(e,t,ie,null,l,D)}for(j in l)if(D=l[j],O=n[j],l.hasOwnProperty(j)&&D!==O&&(D!=null||O!=null))switch(j){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Te(e,t,j,D,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in n)D=n[ae],n.hasOwnProperty(ae)&&D!=null&&!l.hasOwnProperty(ae)&&Te(e,t,ae,null,l,D);for(k in l)if(D=l[k],O=n[k],l.hasOwnProperty(k)&&D!==O&&(D!=null||O!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Te(e,t,k,D,l,O)}return;default:if(mo(t)){for(var Re in n)D=n[Re],n.hasOwnProperty(Re)&&D!==void 0&&!l.hasOwnProperty(Re)&&Wc(e,t,Re,void 0,l,D);for(U in l)D=l[U],O=n[U],!l.hasOwnProperty(U)||D===O||D===void 0&&O===void 0||Wc(e,t,U,D,l,O);return}}for(var z in n)D=n[z],n.hasOwnProperty(z)&&D!=null&&!l.hasOwnProperty(z)&&Te(e,t,z,null,l,D);for(V in l)D=l[V],O=n[V],!l.hasOwnProperty(V)||D===O||D==null&&O==null||Te(e,t,V,D,l,O)}var Ic=null,eu=null;function as(e){return e.nodeType===9?e:e.ownerDocument}function lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nu=null;function $x(){var e=window.event;return e&&e.type==="popstate"?e===nu?!1:(nu=e,!0):(nu=null,!1)}var ig=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(e){return sg.resolve(null).then(e).catch(Kx)}:ig;function Kx(e){setTimeout(function(){throw e})}function aa(e){return e==="head"}function og(e,t){var n=t,l=0,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<l&&8>l){n=l;var m=e.ownerDocument;if(n&1&&Dr(m.documentElement),n&2&&Dr(m.body),n&4)for(n=m.head,Dr(n),m=n.firstChild;m;){var b=m.nextSibling,j=m.nodeName;m[Zl]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(i===0){e.removeChild(o),Yr(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:l=n.charCodeAt(0)-48;else l=0;n=o}while(n);Yr(t)}function au(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":au(n),so(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Qx(e,t,n,l){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function Xx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=an(e.nextSibling),e===null))return null;return e}function lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Zx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ru=null;function cg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function ug(e,t,n){switch(t=as(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);so(e)}var Xt=new Map,fg=new Set;function ls(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dn=Z.d;Z.d={f:Px,r:Fx,D:Jx,C:Wx,L:Ix,m:ey,X:ny,S:ty,M:ay};function Px(){var e=Dn.f(),t=Pi();return e||t}function Fx(e){var t=$a(e);t!==null&&t.tag===5&&t.type==="form"?Mh(t):Dn.r(e)}var jl=typeof document>"u"?null:document;function dg(e,t,n){var l=jl;if(l&&typeof t=="string"&&t){var i=Gt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),fg.has(i)||(fg.add(i),e={rel:e,crossOrigin:n,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),it(t,"link",e),Fe(t),l.head.appendChild(t)))}}function Jx(e){Dn.D(e),dg("dns-prefetch",e,null)}function Wx(e,t){Dn.C(e,t),dg("preconnect",e,t)}function Ix(e,t,n){Dn.L(e,t,n);var l=jl;if(l&&e&&t){var i='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Gt(n.imageSizes)+'"]')):i+='[href="'+Gt(e)+'"]';var o=i;switch(t){case"style":o=wl(e);break;case"script":o=_l(e)}Xt.has(o)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xt.set(o,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Or(o))||t==="script"&&l.querySelector(Br(o))||(t=l.createElement("link"),it(t,"link",e),Fe(t),l.head.appendChild(t)))}}function ey(e,t){Dn.m(e,t);var n=jl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Gt(l)+'"][href="'+Gt(e)+'"]',o=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=_l(e)}if(!Xt.has(o)&&(e=x({rel:"modulepreload",href:e},t),Xt.set(o,e),n.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Br(o)))return}l=n.createElement("link"),it(l,"link",e),Fe(l),n.head.appendChild(l)}}}function ty(e,t,n){Dn.S(e,t,n);var l=jl;if(l&&e){var i=Va(l).hoistableStyles,o=wl(e);t=t||"default";var m=i.get(o);if(!m){var b={loading:0,preload:null};if(m=l.querySelector(Or(o)))b.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xt.get(o))&&iu(e,n);var j=m=l.createElement("link");Fe(j),it(j,"link",e),j._p=new Promise(function(k,U){j.onload=k,j.onerror=U}),j.addEventListener("load",function(){b.loading|=1}),j.addEventListener("error",function(){b.loading|=2}),b.loading|=4,rs(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:b},i.set(o,m)}}}function ny(e,t){Dn.X(e,t);var n=jl;if(n&&e){var l=Va(n).hoistableScripts,i=_l(e),o=l.get(i);o||(o=n.querySelector(Br(i)),o||(e=x({src:e,async:!0},t),(t=Xt.get(i))&&su(e,t),o=n.createElement("script"),Fe(o),it(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(i,o))}}function ay(e,t){Dn.M(e,t);var n=jl;if(n&&e){var l=Va(n).hoistableScripts,i=_l(e),o=l.get(i);o||(o=n.querySelector(Br(i)),o||(e=x({src:e,async:!0,type:"module"},t),(t=Xt.get(i))&&su(e,t),o=n.createElement("script"),Fe(o),it(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(i,o))}}function hg(e,t,n,l){var i=(i=le.current)?ls(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wl(n.href),n=Va(i).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wl(n.href);var o=Va(i).hoistableStyles,m=o.get(e);if(m||(i=i.ownerDocument||i,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=i.querySelector(Or(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xt.set(e,n),o||ly(i,e,n,m.state))),t&&l===null)throw Error(c(528,""));return m}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(n),n=Va(i).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function wl(e){return'href="'+Gt(e)+'"'}function Or(e){return'link[rel="stylesheet"]['+e+"]"}function mg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function ly(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),it(t,"link",n),Fe(t),e.head.appendChild(t))}function _l(e){return'[src="'+Gt(e)+'"]'}function Br(e){return"script[async]"+e}function gg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Gt(n.href)+'"]');if(l)return t.instance=l,Fe(l),l;var i=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Fe(l),it(l,"style",i),rs(l,n.precedence,e),t.instance=l;case"stylesheet":i=wl(n.href);var o=e.querySelector(Or(i));if(o)return t.state.loading|=4,t.instance=o,Fe(o),o;l=mg(n),(i=Xt.get(i))&&iu(l,i),o=(e.ownerDocument||e).createElement("link"),Fe(o);var m=o;return m._p=new Promise(function(b,j){m.onload=b,m.onerror=j}),it(o,"link",l),t.state.loading|=4,rs(o,n.precedence,e),t.instance=o;case"script":return o=_l(n.src),(i=e.querySelector(Br(o)))?(t.instance=i,Fe(i),i):(l=n,(i=Xt.get(o))&&(l=x({},n),su(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Fe(i),it(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,rs(l,n.precedence,e));return t.instance}function rs(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,o=i,m=0;m<l.length;m++){var b=l[m];if(b.dataset.precedence===t)o=b;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var is=null;function pg(e,t,n){if(is===null){var l=new Map,i=is=new Map;i.set(n,l)}else i=is,l=i.get(n),l||(l=new Map,i.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Zl]||o[ot]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var b=l.get(m);b?b.push(o):l.set(m,[o])}}return l}function bg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ry(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function xg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Nr=null;function iy(){}function sy(e,t,n){if(Nr===null)throw Error(c(475));var l=Nr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=wl(n.href),o=e.querySelector(Or(i));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=ss.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=o,Fe(o);return}o=e.ownerDocument||e,n=mg(n),(i=Xt.get(i))&&iu(n,i),o=o.createElement("link"),Fe(o);var m=o;m._p=new Promise(function(b,j){m.onload=b,m.onerror=j}),it(o,"link",n),t.instance=o}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=ss.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function oy(){if(Nr===null)throw Error(c(475));var e=Nr;return e.stylesheets&&e.count===0&&ou(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&ou(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ss(){if(this.count--,this.count===0){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var os=null;function ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,os=new Map,t.forEach(cy,e),os=null,ss.call(e))}function cy(e,t){if(!(t.state.loading&4)){var n=os.get(e);if(n)var l=n.get(null);else{n=new Map,os.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var m=i[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),l=m)}l&&n.set(null,l)}i=t.instance,m=i.getAttribute("data-precedence"),o=n.get(m)||l,o===l&&n.set(null,i),n.set(m,i),this.count++,l=ss.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ur={$$typeof:T,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function uy(e,t,n,l,i,o,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ao(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.hiddenUpdates=ao(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function yg(e,t,n,l,i,o,m,b,j,k,U,V){return e=new uy(e,t,n,m,b,j,k,V),t=1,o===!0&&(t|=24),o=At(3,null,null,t),e.current=o,o.stateNode=e,t=Vo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:l,isDehydrated:n,cache:t},Xo(o),e}function vg(e){return e?(e=tl,e):tl}function Sg(e,t,n,l,i,o){i=vg(i),l.context===null?l.context=i:l.pendingContext=i,l=qn(t),l.payload={element:n},o=o===void 0?null:o,o!==null&&(l.callback=o),n=Kn(e,l,t),n!==null&&(Dt(n,e,t),hr(n,e,t))}function jg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cu(e,t){jg(e,t),(e=e.alternate)&&jg(e,t)}function wg(e){if(e.tag===13){var t=el(e,67108864);t!==null&&Dt(t,e,67108864),cu(e,67108864)}}var cs=!0;function fy(e,t,n,l){var i=N.T;N.T=null;var o=Z.p;try{Z.p=2,uu(e,t,n,l)}finally{Z.p=o,N.T=i}}function dy(e,t,n,l){var i=N.T;N.T=null;var o=Z.p;try{Z.p=8,uu(e,t,n,l)}finally{Z.p=o,N.T=i}}function uu(e,t,n,l){if(cs){var i=fu(l);if(i===null)Jc(e,t,l,us,n),Eg(e,l);else if(my(i,e,t,n,l))l.stopPropagation();else if(Eg(e,l),t&4&&-1<hy.indexOf(e)){for(;i!==null;){var o=$a(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=ga(o.pendingLanes);if(m!==0){var b=o;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var j=1<<31-zt(m);b.entanglements[1]|=j,m&=~j}gn(o),(Ee&6)===0&&(Xi=un()+500,Rr(0))}}break;case 13:b=el(o,2),b!==null&&Dt(b,o,2),Pi(),cu(o,2)}if(o=fu(l),o===null&&Jc(e,t,l,us,n),o===i)break;i=o}i!==null&&l.stopPropagation()}else Jc(e,t,l,null,n)}}function fu(e){return e=po(e),du(e)}var us=null;function du(e){if(us=null,e=Ya(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return us=e,null}function _g(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W1()){case Lf:return 2;case Hf:return 8;case ni:case I1:return 32;case Gf:return 268435456;default:return 32}default:return 32}}var hu=!1,la=null,ra=null,ia=null,Lr=new Map,Hr=new Map,sa=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function Gr(e,t,n,l,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:o,targetContainers:[i]},t!==null&&(t=$a(t),t!==null&&wg(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function my(e,t,n,l,i){switch(t){case"focusin":return la=Gr(la,e,t,n,l,i),!0;case"dragenter":return ra=Gr(ra,e,t,n,l,i),!0;case"mouseover":return ia=Gr(ia,e,t,n,l,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,Gr(Lr.get(o)||null,e,t,n,l,i)),!0;case"gotpointercapture":return o=i.pointerId,Hr.set(o,Gr(Hr.get(o)||null,e,t,n,l,i)),!0}return!1}function zg(e){var t=Ya(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=v(n),t!==null){e.blockedOn=t,sb(e.priority,function(){if(n.tag===13){var l=kt();l=lo(l);var i=el(n,l);i!==null&&Dt(i,n,l),cu(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);go=l,n.target.dispatchEvent(l),go=null}else return t=$a(n),t!==null&&wg(t),e.blockedOn=n,!1;t.shift()}return!0}function Cg(e,t,n){fs(e)&&n.delete(t)}function gy(){hu=!1,la!==null&&fs(la)&&(la=null),ra!==null&&fs(ra)&&(ra=null),ia!==null&&fs(ia)&&(ia=null),Lr.forEach(Cg),Hr.forEach(Cg)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,hu||(hu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,gy)))}var hs=null;function Ag(e){hs!==e&&(hs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){hs===e&&(hs=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(du(l||n)===null)continue;break}var o=$a(n);o!==null&&(e.splice(t,3),t-=3,dc(o,{pending:!0,data:i,method:n.method,action:l},l,i))}}))}function Yr(e){function t(j){return ds(j,e)}la!==null&&ds(la,e),ra!==null&&ds(ra,e),ia!==null&&ds(ia,e),Lr.forEach(t),Hr.forEach(t);for(var n=0;n<sa.length;n++){var l=sa[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var i=n[l],o=n[l+1],m=i[gt]||null;if(typeof o=="function")m||Ag(n);else if(m){var b=null;if(o&&o.hasAttribute("formAction")){if(i=o,m=o[gt]||null)b=m.formAction;else if(du(i)!==null)continue}else b=m.action;typeof b=="function"?n[l+1]=b:(n.splice(l,3),l-=3),Ag(n)}}}function mu(e){this._internalRoot=e}ms.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,l=kt();Sg(n,l,e,t,null,null)},ms.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sg(e.current,2,null,e,null,null),Pi(),t[Ga]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&zg(e)}};var Tg=s.version;if(Tg!=="19.1.0")throw Error(c(527,Tg,"19.1.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var py={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{Kl=gs.inject(py),Et=gs}catch{}}return Vr.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,l="",i=Kh,o=Qh,m=Xh,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=yg(e,1,!1,null,null,n,l,i,o,m,b,null),e[Ga]=t.current,Fc(e),new mu(t)},Vr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var l=!1,i="",o=Kh,m=Qh,b=Xh,j=null,k=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(j=n.unstable_transitionCallbacks),n.formState!==void 0&&(k=n.formState)),t=yg(e,1,!0,t,n??null,l,i,o,m,b,j,k),t.context=vg(null),n=t.current,l=kt(),l=lo(l),i=qn(l),i.callback=null,Kn(n,i,l),n=l,t.current.lanes=n,Xl(t,n),gn(t),e[Ga]=t.current,Fc(e),new ms(t)},Vr.version="19.1.0",Vr}var Hg;function Cy(){if(Hg)return bu.exports;Hg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),bu.exports=zy(),bu.exports}var Ay=Cy(),nt=function(){return nt=Object.assign||function(s){for(var u,c=1,f=arguments.length;c<f;c++){u=arguments[c];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(s[d]=u[d])}return s},nt.apply(this,arguments)};function Bl(a,s,u){if(u||arguments.length===2)for(var c=0,f=s.length,d;c<f;c++)(d||!(c in s))&&(d||(d=Array.prototype.slice.call(s,0,c)),d[c]=s[c]);return a.concat(d||Array.prototype.slice.call(s))}var De="-ms-",Pr="-moz-",we="-webkit-",B0="comm",qs="rule",yf="decl",Ty="@import",N0="@keyframes",Ry="@layer",U0=Math.abs,vf=String.fromCharCode,af=Object.assign;function My(a,s){return tt(a,0)^45?(((s<<2^tt(a,0))<<2^tt(a,1))<<2^tt(a,2))<<2^tt(a,3):0}function L0(a){return a.trim()}function Bn(a,s){return(a=s.exec(a))?a[0]:a}function ue(a,s,u){return a.replace(s,u)}function Es(a,s,u){return a.indexOf(s,u)}function tt(a,s){return a.charCodeAt(s)|0}function Nl(a,s,u){return a.slice(s,u)}function pn(a){return a.length}function H0(a){return a.length}function Xr(a,s){return s.push(a),a}function ky(a,s){return a.map(s).join("")}function Gg(a,s){return a.filter(function(u){return!Bn(u,s)})}var Ks=1,Ul=1,G0=0,Zt=0,Qe=0,Gl="";function Qs(a,s,u,c,f,d,v,p){return{value:a,root:s,parent:u,type:c,props:f,children:d,line:Ks,column:Ul,length:v,return:"",siblings:p}}function ua(a,s){return af(Qs("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function El(a){for(;a.root;)a=ua(a.root,{children:[a]});Xr(a,a.siblings)}function Dy(){return Qe}function Oy(){return Qe=Zt>0?tt(Gl,--Zt):0,Ul--,Qe===10&&(Ul=1,Ks--),Qe}function rn(){return Qe=Zt<G0?tt(Gl,Zt++):0,Ul++,Qe===10&&(Ul=1,Ks++),Qe}function Ba(){return tt(Gl,Zt)}function zs(){return Zt}function Xs(a,s){return Nl(Gl,a,s)}function lf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function By(a){return Ks=Ul=1,G0=pn(Gl=a),Zt=0,[]}function Ny(a){return Gl="",a}function Su(a){return L0(Xs(Zt-1,rf(a===91?a+2:a===40?a+1:a)))}function Uy(a){for(;(Qe=Ba())&&Qe<33;)rn();return lf(a)>2||lf(Qe)>3?"":" "}function Ly(a,s){for(;--s&&rn()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return Xs(a,zs()+(s<6&&Ba()==32&&rn()==32))}function rf(a){for(;rn();)switch(Qe){case a:return Zt;case 34:case 39:a!==34&&a!==39&&rf(Qe);break;case 40:a===41&&rf(a);break;case 92:rn();break}return Zt}function Hy(a,s){for(;rn()&&a+Qe!==57;)if(a+Qe===84&&Ba()===47)break;return"/*"+Xs(s,Zt-1)+"*"+vf(a===47?a:rn())}function Gy(a){for(;!lf(Ba());)rn();return Xs(a,Zt)}function Yy(a){return Ny(Cs("",null,null,null,[""],a=By(a),0,[0],a))}function Cs(a,s,u,c,f,d,v,p,h){for(var g=0,x=0,S=v,w=0,R=0,A=0,B=1,L=1,$=1,X=0,T="",q=f,H=d,J=c,Y=T;L;)switch(A=X,X=rn()){case 40:if(A!=108&&tt(Y,S-1)==58){Es(Y+=ue(Su(X),"&","&\f"),"&\f",U0(g?p[g-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:Y+=Su(X);break;case 9:case 10:case 13:case 32:Y+=Uy(A);break;case 92:Y+=Ly(zs()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Xr($y(Hy(rn(),zs()),s,u,h),h);break;default:Y+="/"}break;case 123*B:p[g++]=pn(Y)*$;case 125*B:case 59:case 0:switch(X){case 0:case 125:L=0;case 59+x:$==-1&&(Y=ue(Y,/\f/g,"")),R>0&&pn(Y)-S&&Xr(R>32?$g(Y+";",c,u,S-1,h):$g(ue(Y," ","")+";",c,u,S-2,h),h);break;case 59:Y+=";";default:if(Xr(J=Yg(Y,s,u,g,x,f,p,T,q=[],H=[],S,d),d),X===123)if(x===0)Cs(Y,s,J,J,q,d,S,p,H);else switch(w===99&&tt(Y,3)===110?100:w){case 100:case 108:case 109:case 115:Cs(a,J,J,c&&Xr(Yg(a,J,J,0,0,f,p,T,f,q=[],S,H),H),f,H,S,p,c?q:H);break;default:Cs(Y,J,J,J,[""],H,0,p,H)}}g=x=R=0,B=$=1,T=Y="",S=v;break;case 58:S=1+pn(Y),R=A;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&Oy()==125)continue}switch(Y+=vf(X),X*B){case 38:$=x>0?1:(Y+="\f",-1);break;case 44:p[g++]=(pn(Y)-1)*$,$=1;break;case 64:Ba()===45&&(Y+=Su(rn())),w=Ba(),x=S=pn(T=Y+=Gy(zs())),X++;break;case 45:A===45&&pn(Y)==2&&(B=0)}}return d}function Yg(a,s,u,c,f,d,v,p,h,g,x,S){for(var w=f-1,R=f===0?d:[""],A=H0(R),B=0,L=0,$=0;B<c;++B)for(var X=0,T=Nl(a,w+1,w=U0(L=v[B])),q=a;X<A;++X)(q=L0(L>0?R[X]+" "+T:ue(T,/&\f/g,R[X])))&&(h[$++]=q);return Qs(a,s,u,f===0?qs:p,h,g,x,S)}function $y(a,s,u,c){return Qs(a,s,u,B0,vf(Dy()),Nl(a,2,-2),0,c)}function $g(a,s,u,c,f){return Qs(a,s,u,yf,Nl(a,0,c),Nl(a,c+1,-1),c,f)}function Y0(a,s,u){switch(My(a,s)){case 5103:return we+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+a+a;case 4789:return Pr+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return we+a+Pr+a+De+a+a;case 5936:switch(tt(a,s+11)){case 114:return we+a+De+ue(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return we+a+De+ue(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return we+a+De+ue(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return we+a+De+a+a;case 6165:return we+a+De+"flex-"+a+a;case 5187:return we+a+ue(a,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+a;case 5443:return we+a+De+"flex-item-"+ue(a,/flex-|-self/g,"")+(Bn(a,/flex-|baseline/)?"":De+"grid-row-"+ue(a,/flex-|-self/g,""))+a;case 4675:return we+a+De+"flex-line-pack"+ue(a,/align-content|flex-|-self/g,"")+a;case 5548:return we+a+De+ue(a,"shrink","negative")+a;case 5292:return we+a+De+ue(a,"basis","preferred-size")+a;case 6060:return we+"box-"+ue(a,"-grow","")+we+a+De+ue(a,"grow","positive")+a;case 4554:return we+ue(a,/([^-])(transform)/g,"$1"+we+"$2")+a;case 6187:return ue(ue(ue(a,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),a,"")+a;case 5495:case 3959:return ue(a,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ue(ue(a,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+a+a;case 4200:if(!Bn(a,/flex-|baseline/))return De+"grid-column-align"+Nl(a,s)+a;break;case 2592:case 3360:return De+ue(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,f){return s=f,Bn(c.props,/grid-\w+-end/)})?~Es(a+(u=u[s].value),"span",0)?a:De+ue(a,"-start","")+a+De+"grid-row-span:"+(~Es(u,"span",0)?Bn(u,/\d+/):+Bn(u,/\d+/)-+Bn(a,/\d+/))+";":De+ue(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return Bn(c.props,/grid-\w+-start/)})?a:De+ue(ue(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ue(a,/(.+)-inline(.+)/,we+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(a)-1-s>6)switch(tt(a,s+1)){case 109:if(tt(a,s+4)!==45)break;case 102:return ue(a,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Pr+(tt(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~Es(a,"stretch",0)?Y0(ue(a,"stretch","fill-available"),s,u)+a:a}break;case 5152:case 5920:return ue(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,d,v,p,h,g){return De+f+":"+d+g+(v?De+f+"-span:"+(p?h:+h-+d)+g:"")+a});case 4949:if(tt(a,s+6)===121)return ue(a,":",":"+we)+a;break;case 6444:switch(tt(a,tt(a,14)===45?18:11)){case 120:return ue(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(tt(a,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+a;case 100:return ue(a,":",":"+De)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(a,"scroll-","scroll-snap-")+a}return a}function Os(a,s){for(var u="",c=0;c<a.length;c++)u+=s(a[c],c,a,s)||"";return u}function Vy(a,s,u,c){switch(a.type){case Ry:if(a.children.length)break;case Ty:case yf:return a.return=a.return||a.value;case B0:return"";case N0:return a.return=a.value+"{"+Os(a.children,c)+"}";case qs:if(!pn(a.value=a.props.join(",")))return""}return pn(u=Os(a.children,c))?a.return=a.value+"{"+u+"}":""}function qy(a){var s=H0(a);return function(u,c,f,d){for(var v="",p=0;p<s;p++)v+=a[p](u,c,f,d)||"";return v}}function Ky(a){return function(s){s.root||(s=s.return)&&a(s)}}function Qy(a,s,u,c){if(a.length>-1&&!a.return)switch(a.type){case yf:a.return=Y0(a.value,a.length,u);return;case N0:return Os([ua(a,{value:ue(a.value,"@","@"+we)})],c);case qs:if(a.length)return ky(u=a.props,function(f){switch(Bn(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":El(ua(a,{props:[ue(f,/:(read-\w+)/,":"+Pr+"$1")]})),El(ua(a,{props:[f]})),af(a,{props:Gg(u,c)});break;case"::placeholder":El(ua(a,{props:[ue(f,/:(plac\w+)/,":"+we+"input-$1")]})),El(ua(a,{props:[ue(f,/:(plac\w+)/,":"+Pr+"$1")]})),El(ua(a,{props:[ue(f,/:(plac\w+)/,De+"input-$1")]})),El(ua(a,{props:[f]})),af(a,{props:Gg(u,c)});break}return""})}}var Xy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},Ll=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",$0="active",V0="data-styled-version",Zs="6.1.19",Sf=`/*!sc*/
`,Bs=typeof window<"u"&&typeof document<"u",Zy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),Py={},Ps=Object.freeze([]),Hl=Object.freeze({});function q0(a,s,u){return u===void 0&&(u=Hl),a.theme!==u.theme&&a.theme||s||u.theme}var K0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jy=/(^-|-$)/g;function Vg(a){return a.replace(Fy,"-").replace(Jy,"")}var Wy=/(a)(d)/gi,ps=52,qg=function(a){return String.fromCharCode(a+(a>25?39:97))};function sf(a){var s,u="";for(s=Math.abs(a);s>ps;s=s/ps|0)u=qg(s%ps)+u;return(qg(s%ps)+u).replace(Wy,"$1-$2")}var ju,Q0=5381,Dl=function(a,s){for(var u=s.length;u;)a=33*a^s.charCodeAt(--u);return a},X0=function(a){return Dl(Q0,a)};function jf(a){return sf(X0(a)>>>0)}function Iy(a){return a.displayName||a.name||"Component"}function wu(a){return typeof a=="string"&&!0}var Z0=typeof Symbol=="function"&&Symbol.for,P0=Z0?Symbol.for("react.memo"):60115,ev=Z0?Symbol.for("react.forward_ref"):60112,tv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},F0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},av=((ju={})[ev]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ju[P0]=F0,ju);function Kg(a){return("type"in(s=a)&&s.type.$$typeof)===P0?F0:"$$typeof"in a?av[a.$$typeof]:tv;var s}var lv=Object.defineProperty,rv=Object.getOwnPropertyNames,Qg=Object.getOwnPropertySymbols,iv=Object.getOwnPropertyDescriptor,sv=Object.getPrototypeOf,Xg=Object.prototype;function J0(a,s,u){if(typeof s!="string"){if(Xg){var c=sv(s);c&&c!==Xg&&J0(a,c,u)}var f=rv(s);Qg&&(f=f.concat(Qg(s)));for(var d=Kg(a),v=Kg(s),p=0;p<f.length;++p){var h=f[p];if(!(h in nv||u&&u[h]||v&&h in v||d&&h in d)){var g=iv(s,h);try{lv(a,h,g)}catch{}}}}return a}function Na(a){return typeof a=="function"}function wf(a){return typeof a=="object"&&"styledComponentId"in a}function Oa(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function Ns(a,s){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function Fr(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function of(a,s,u){if(u===void 0&&(u=!1),!u&&!Fr(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)a[c]=of(a[c],s[c]);else if(Fr(s))for(var c in s)a[c]=of(a[c],s[c]);return a}function _f(a,s){Object.defineProperty(a,"toString",{value:s})}function Ua(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var ov=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return a.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,d=f;s>=d;)if((d<<=1)<0)throw Ua(16,"".concat(s));this.groupSizes=new Uint32Array(d),this.groupSizes.set(c),this.length=d;for(var v=f;v<d;v++)this.groupSizes[v]=0}for(var p=this.indexOfGroup(s+1),h=(v=0,u.length);v<h;v++)this.tag.insertRule(p,u[v])&&(this.groupSizes[s]++,p++)},a.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),f=c+u;this.groupSizes[s]=0;for(var d=c;d<f;d++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],f=this.indexOfGroup(s),d=f+c,v=f;v<d;v++)u+="".concat(this.tag.getRule(v)).concat(Sf);return u},a}(),As=new Map,Us=new Map,Ts=1,bs=function(a){if(As.has(a))return As.get(a);for(;Us.has(Ts);)Ts++;var s=Ts++;return As.set(a,s),Us.set(s,a),s},cv=function(a,s){Ts=s+1,As.set(a,s),Us.set(s,a)},uv="style[".concat(Ll,"][").concat(V0,'="').concat(Zs,'"]'),fv=new RegExp("^".concat(Ll,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dv=function(a,s,u){for(var c,f=u.split(","),d=0,v=f.length;d<v;d++)(c=f[d])&&a.registerName(s,c)},hv=function(a,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(Sf),f=[],d=0,v=c.length;d<v;d++){var p=c[d].trim();if(p){var h=p.match(fv);if(h){var g=0|parseInt(h[1],10),x=h[2];g!==0&&(cv(x,g),dv(a,x,h[3]),a.getTag().insertRules(g,f)),f.length=0}else f.push(p)}}},Zg=function(a){for(var s=document.querySelectorAll(uv),u=0,c=s.length;u<c;u++){var f=s[u];f&&f.getAttribute(Ll)!==$0&&(hv(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function mv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var W0=function(a){var s=document.head,u=a||s,c=document.createElement("style"),f=function(p){var h=Array.from(p.querySelectorAll("style[".concat(Ll,"]")));return h[h.length-1]}(u),d=f!==void 0?f.nextSibling:null;c.setAttribute(Ll,$0),c.setAttribute(V0,Zs);var v=mv();return v&&c.setAttribute("nonce",v),u.insertBefore(c,d),c},gv=function(){function a(s){this.element=W0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,f=0,d=c.length;f<d;f++){var v=c[f];if(v.ownerNode===u)return v}throw Ua(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},a}(),pv=function(){function a(s){this.element=W0(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),bv=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),Pg=Bs,xv={isServer:!Bs,useCSSOMInjection:!Zy},Ls=function(){function a(s,u,c){s===void 0&&(s=Hl),u===void 0&&(u={});var f=this;this.options=nt(nt({},xv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&Bs&&Pg&&(Pg=!1,Zg(this)),_f(this,function(){return function(d){for(var v=d.getTag(),p=v.length,h="",g=function(S){var w=function($){return Us.get($)}(S);if(w===void 0)return"continue";var R=d.names.get(w),A=v.getGroup(S);if(R===void 0||!R.size||A.length===0)return"continue";var B="".concat(Ll,".g").concat(S,'[id="').concat(w,'"]'),L="";R!==void 0&&R.forEach(function($){$.length>0&&(L+="".concat($,","))}),h+="".concat(A).concat(B,'{content:"').concat(L,'"}').concat(Sf)},x=0;x<p;x++)g(x);return h}(f)})}return a.registerId=function(s){return bs(s)},a.prototype.rehydrate=function(){!this.server&&Bs&&Zg(this)},a.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new a(nt(nt({},this.options),s),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,f=u.target;return u.isServer?new bv(f):c?new gv(f):new pv(f)}(this.options),new ov(s)));var s},a.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},a.prototype.registerName=function(s,u){if(bs(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},a.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(bs(s),c)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(bs(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),yv=/&/g,vv=/^\s*\/\/.*$/gm;function I0(a,s){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=I0(u.children,s)),u})}function Sv(a){var s,u,c,f=Hl,d=f.options,v=d===void 0?Hl:d,p=f.plugins,h=p===void 0?Ps:p,g=function(w,R,A){return A.startsWith(u)&&A.endsWith(u)&&A.replaceAll(u,"").length>0?".".concat(s):w},x=h.slice();x.push(function(w){w.type===qs&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(yv,u).replace(c,g))}),v.prefix&&x.push(Qy),x.push(Vy);var S=function(w,R,A,B){R===void 0&&(R=""),A===void 0&&(A=""),B===void 0&&(B="&"),s=B,u=R,c=new RegExp("\\".concat(u,"\\b"),"g");var L=w.replace(vv,""),$=Yy(A||R?"".concat(A," ").concat(R," { ").concat(L," }"):L);v.namespace&&($=I0($,v.namespace));var X=[];return Os($,qy(x.concat(Ky(function(T){return X.push(T)})))),X};return S.hash=h.length?h.reduce(function(w,R){return R.name||Ua(15),Dl(w,R.name)},Q0).toString():"",S}var jv=new Ls,cf=Sv(),ep=_e.createContext({shouldForwardProp:void 0,styleSheet:jv,stylis:cf});ep.Consumer;_e.createContext(void 0);function uf(){return C.useContext(ep)}var tp=function(){function a(s,u){var c=this;this.inject=function(f,d){d===void 0&&(d=cf);var v=c.name+d.hash;f.hasNameForId(c.id,v)||f.insertRules(c.id,v,d(c.rules,v,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,_f(this,function(){throw Ua(12,String(c.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=cf),this.name+s.hash},a}(),wv=function(a){return a>="A"&&a<="Z"};function Fg(a){for(var s="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;wv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var np=function(a){return a==null||a===!1||a===""},ap=function(a){var s,u,c=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!np(d)&&(Array.isArray(d)&&d.isCss||Na(d)?c.push("".concat(Fg(f),":"),d,";"):Fr(d)?c.push.apply(c,Bl(Bl(["".concat(f," {")],ap(d),!1),["}"],!1)):c.push("".concat(Fg(f),": ").concat((s=f,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in Xy||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function fa(a,s,u,c){if(np(a))return[];if(wf(a))return[".".concat(a.styledComponentId)];if(Na(a)){if(!Na(d=a)||d.prototype&&d.prototype.isReactComponent||!s)return[a];var f=a(s);return fa(f,s,u,c)}var d;return a instanceof tp?u?(a.inject(u,c),[a.getName(c)]):[a]:Fr(a)?ap(a):Array.isArray(a)?Array.prototype.concat.apply(Ps,a.map(function(v){return fa(v,s,u,c)})):[a.toString()]}function lp(a){for(var s=0;s<a.length;s+=1){var u=a[s];if(Na(u)&&!wf(u))return!1}return!0}var _v=X0(Zs),Ev=function(){function a(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&lp(s),this.componentId=u,this.baseHash=Dl(_v,u),this.baseStyle=c,Ls.registerId(u)}return a.prototype.generateAndInjectStyles=function(s,u,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=Oa(f,this.staticRulesId);else{var d=Ns(fa(this.rules,s,u,c)),v=sf(Dl(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,v)){var p=c(d,".".concat(v),void 0,this.componentId);u.insertRules(this.componentId,v,p)}f=Oa(f,v),this.staticRulesId=v}else{for(var h=Dl(this.baseHash,c.hash),g="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")g+=S;else if(S){var w=Ns(fa(S,s,u,c));h=Dl(h,w+x),g+=w}}if(g){var R=sf(h>>>0);u.hasNameForId(this.componentId,R)||u.insertRules(this.componentId,R,c(g,".".concat(R),void 0,this.componentId)),f=Oa(f,R)}}return f},a}(),Jr=_e.createContext(void 0);Jr.Consumer;function zv(a){var s=_e.useContext(Jr),u=C.useMemo(function(){return function(c,f){if(!c)throw Ua(14);if(Na(c)){var d=c(f);return d}if(Array.isArray(c)||typeof c!="object")throw Ua(8);return f?nt(nt({},f),c):c}(a.theme,s)},[a.theme,s]);return a.children?_e.createElement(Jr.Provider,{value:u},a.children):null}var _u={};function Cv(a,s,u){var c=wf(a),f=a,d=!wu(a),v=s.attrs,p=v===void 0?Ps:v,h=s.componentId,g=h===void 0?function(q,H){var J=typeof q!="string"?"sc":Vg(q);_u[J]=(_u[J]||0)+1;var Y="".concat(J,"-").concat(jf(Zs+J+_u[J]));return H?"".concat(H,"-").concat(Y):Y}(s.displayName,s.parentComponentId):h,x=s.displayName,S=x===void 0?function(q){return wu(q)?"styled.".concat(q):"Styled(".concat(Iy(q),")")}(a):x,w=s.displayName&&s.componentId?"".concat(Vg(s.displayName),"-").concat(s.componentId):s.componentId||g,R=c&&f.attrs?f.attrs.concat(p).filter(Boolean):p,A=s.shouldForwardProp;if(c&&f.shouldForwardProp){var B=f.shouldForwardProp;if(s.shouldForwardProp){var L=s.shouldForwardProp;A=function(q,H){return B(q,H)&&L(q,H)}}else A=B}var $=new Ev(u,w,c?f.componentStyle:void 0);function X(q,H){return function(J,Y,se){var Q=J.attrs,be=J.componentStyle,Se=J.defaultProps,Ue=J.foldedComponentIds,Ut=J.styledComponentId,at=J.target,Ce=_e.useContext(Jr),N=uf(),Z=J.shouldForwardProp||N.shouldForwardProp,ne=q0(Y,Ce,Se)||Hl,ce=function(he,le,Pe){for(var je,st=nt(nt({},le),{className:void 0,theme:Pe}),ma=0;ma<he.length;ma+=1){var xn=Na(je=he[ma])?je(st):je;for(var Lt in xn)st[Lt]=Lt==="className"?Oa(st[Lt],xn[Lt]):Lt==="style"?nt(nt({},st[Lt]),xn[Lt]):xn[Lt]}return le.className&&(st.className=Oa(st.className,le.className)),st}(Q,Y,ne),_=ce.as||at,K={};for(var P in ce)ce[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&ce.theme===ne||(P==="forwardedAs"?K.as=ce.forwardedAs:Z&&!Z(P,_)||(K[P]=ce[P]));var F=function(he,le){var Pe=uf(),je=he.generateAndInjectStyles(le,Pe.styleSheet,Pe.stylis);return je}(be,ce),ee=Oa(Ue,Ut);return F&&(ee+=" "+F),ce.className&&(ee+=" "+ce.className),K[wu(_)&&!K0.has(_)?"class":"className"]=ee,se&&(K.ref=se),C.createElement(_,K)}(T,q,H)}X.displayName=S;var T=_e.forwardRef(X);return T.attrs=R,T.componentStyle=$,T.displayName=S,T.shouldForwardProp=A,T.foldedComponentIds=c?Oa(f.foldedComponentIds,f.styledComponentId):"",T.styledComponentId=w,T.target=c?f.target:a,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=c?function(H){for(var J=[],Y=1;Y<arguments.length;Y++)J[Y-1]=arguments[Y];for(var se=0,Q=J;se<Q.length;se++)of(H,Q[se],!0);return H}({},f.defaultProps,q):q}}),_f(T,function(){return".".concat(T.styledComponentId)}),d&&J0(T,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function Jg(a,s){for(var u=[a[0]],c=0,f=s.length;c<f;c+=1)u.push(s[c],a[c+1]);return u}var Wg=function(a){return Object.assign(a,{isCss:!0})};function Wr(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Na(a)||Fr(a))return Wg(fa(Jg(Ps,Bl([a],s,!0))));var c=a;return s.length===0&&c.length===1&&typeof c[0]=="string"?fa(c):Wg(fa(Jg(c,s)))}function ff(a,s,u){if(u===void 0&&(u=Hl),!s)throw Ua(1,s);var c=function(f){for(var d=[],v=1;v<arguments.length;v++)d[v-1]=arguments[v];return a(s,u,Wr.apply(void 0,Bl([f],d,!1)))};return c.attrs=function(f){return ff(a,s,nt(nt({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return ff(a,s,nt(nt({},u),f))},c}var rp=function(a){return ff(Cv,a)},y=rp;K0.forEach(function(a){y[a]=rp(a)});var Av=function(){function a(s,u){this.rules=s,this.componentId=u,this.isStatic=lp(s),Ls.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,u,c,f){var d=f(Ns(fa(this.rules,u,c,f)),""),v=this.componentId+s;c.insertRules(v,v,d)},a.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,u,c,f){s>2&&Ls.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,f)},a}();function ip(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Wr.apply(void 0,Bl([a],s,!1)),f="sc-global-".concat(jf(JSON.stringify(c))),d=new Av(c,f),v=function(h){var g=uf(),x=_e.useContext(Jr),S=_e.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&p(S,h,g.styleSheet,x,g.stylis),_e.useLayoutEffect(function(){if(!g.styleSheet.server)return p(S,h,g.styleSheet,x,g.stylis),function(){return d.removeStyles(S,g.styleSheet)}},[S,h,g.styleSheet,x,g.stylis]),null};function p(h,g,x,S,w){if(d.isStatic)d.renderStyles(h,Py,x,w);else{var R=nt(nt({},g),{theme:q0(g,S,v.defaultProps)});d.renderStyles(h,R,x,w)}}return _e.memo(v)}function Ef(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Ns(Wr.apply(void 0,Bl([a],s,!1))),f=jf(c);return new tp(f,c)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ig="popstate";function Tv(a={}){function s(c,f){let{pathname:d,search:v,hash:p}=c.location;return df("",{pathname:d,search:v,hash:p},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:Ir(f)}return Mv(s,u,null,a)}function Ne(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Pt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Rv(){return Math.random().toString(36).substring(2,10)}function e0(a,s){return{usr:a.state,key:a.key,idx:s}}function df(a,s,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Yl(s):s,state:u,key:s&&s.key||c||Rv()}}function Ir({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Yl(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function Mv(a,s,u,c={}){let{window:f=document.defaultView,v5Compat:d=!1}=c,v=f.history,p="POP",h=null,g=x();g==null&&(g=0,v.replaceState({...v.state,idx:g},""));function x(){return(v.state||{idx:null}).idx}function S(){p="POP";let L=x(),$=L==null?null:L-g;g=L,h&&h({action:p,location:B.location,delta:$})}function w(L,$){p="PUSH";let X=df(B.location,L,$);g=x()+1;let T=e0(X,g),q=B.createHref(X);try{v.pushState(T,"",q)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;f.location.assign(q)}d&&h&&h({action:p,location:B.location,delta:1})}function R(L,$){p="REPLACE";let X=df(B.location,L,$);g=x();let T=e0(X,g),q=B.createHref(X);v.replaceState(T,"",q),d&&h&&h({action:p,location:B.location,delta:0})}function A(L){return kv(L)}let B={get action(){return p},get location(){return a(f,v)},listen(L){if(h)throw new Error("A history only accepts one active listener");return f.addEventListener(Ig,S),h=L,()=>{f.removeEventListener(Ig,S),h=null}},createHref(L){return s(f,L)},createURL:A,encodeLocation(L){let $=A(L);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:w,replace:R,go(L){return v.go(L)}};return B}function kv(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:Ir(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function sp(a,s,u="/"){return Dv(a,s,u,!1)}function Dv(a,s,u,c){let f=typeof s=="string"?Yl(s):s,d=Ln(f.pathname||"/",u);if(d==null)return null;let v=op(a);Ov(v);let p=null;for(let h=0;p==null&&h<v.length;++h){let g=Kv(d);p=Vv(v[h],g,c)}return p}function op(a,s=[],u=[],c=""){let f=(d,v,p)=>{let h={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:v,route:d};h.relativePath.startsWith("/")&&(Ne(h.relativePath.startsWith(c),`Absolute route path "${h.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(c.length));let g=Nn([c,h.relativePath]),x=u.concat(h);d.children&&d.children.length>0&&(Ne(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),op(d.children,s,x,g)),!(d.path==null&&!d.index)&&s.push({path:g,score:Yv(g,d.index),routesMeta:x})};return a.forEach((d,v)=>{if(d.path===""||!d.path?.includes("?"))f(d,v);else for(let p of cp(d.path))f(d,v,p)}),s}function cp(a){let s=a.split("/");if(s.length===0)return[];let[u,...c]=s,f=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return f?[d,""]:[d];let v=cp(c.join("/")),p=[];return p.push(...v.map(h=>h===""?d:[d,h].join("/"))),f&&p.push(...v),p.map(h=>a.startsWith("/")&&h===""?"/":h)}function Ov(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:$v(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Bv=/^:[\w-]+$/,Nv=3,Uv=2,Lv=1,Hv=10,Gv=-2,t0=a=>a==="*";function Yv(a,s){let u=a.split("/"),c=u.length;return u.some(t0)&&(c+=Gv),s&&(c+=Uv),u.filter(f=>!t0(f)).reduce((f,d)=>f+(Bv.test(d)?Nv:d===""?Lv:Hv),c)}function $v(a,s){return a.length===s.length&&a.slice(0,-1).every((c,f)=>c===s[f])?a[a.length-1]-s[s.length-1]:0}function Vv(a,s,u=!1){let{routesMeta:c}=a,f={},d="/",v=[];for(let p=0;p<c.length;++p){let h=c[p],g=p===c.length-1,x=d==="/"?s:s.slice(d.length)||"/",S=Hs({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},x),w=h.route;if(!S&&g&&u&&!c[c.length-1].route.index&&(S=Hs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!S)return null;Object.assign(f,S.params),v.push({params:f,pathname:Nn([d,S.pathname]),pathnameBase:Pv(Nn([d,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(d=Nn([d,S.pathnameBase]))}return v}function Hs(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=qv(a.path,a.caseSensitive,a.end),f=s.match(u);if(!f)return null;let d=f[0],v=d.replace(/(.)\/+$/,"$1"),p=f.slice(1);return{params:c.reduce((g,{paramName:x,isOptional:S},w)=>{if(x==="*"){let A=p[w]||"";v=d.slice(0,d.length-A.length).replace(/(.)\/+$/,"$1")}const R=p[w];return S&&!R?g[x]=void 0:g[x]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:v,pattern:a}}function qv(a,s=!1,u=!0){Pt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,p,h)=>(c.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),c]}function Kv(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Pt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Ln(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function Qv(a,s="/"){let{pathname:u,search:c="",hash:f=""}=typeof a=="string"?Yl(a):a;return{pathname:u?u.startsWith("/")?u:Xv(u,s):s,search:Fv(c),hash:Jv(f)}}function Xv(a,s){let u=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Eu(a,s,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zv(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function zf(a){let s=Zv(a);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Cf(a,s,u,c=!1){let f;typeof a=="string"?f=Yl(a):(f={...a},Ne(!f.pathname||!f.pathname.includes("?"),Eu("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),Eu("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),Eu("#","search","hash",f)));let d=a===""||f.pathname==="",v=d?"/":f.pathname,p;if(v==null)p=u;else{let S=s.length-1;if(!c&&v.startsWith("..")){let w=v.split("/");for(;w[0]==="..";)w.shift(),S-=1;f.pathname=w.join("/")}p=S>=0?s[S]:"/"}let h=Qv(f,p),g=v&&v!=="/"&&v.endsWith("/"),x=(d||v===".")&&u.endsWith("/");return!h.pathname.endsWith("/")&&(g||x)&&(h.pathname+="/"),h}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),Pv=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Fv=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Jv=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Wv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var up=["POST","PUT","PATCH","DELETE"];new Set(up);var Iv=["GET",...up];new Set(Iv);var $l=C.createContext(null);$l.displayName="DataRouter";var Fs=C.createContext(null);Fs.displayName="DataRouterState";C.createContext(!1);var fp=C.createContext({isTransitioning:!1});fp.displayName="ViewTransition";var e2=C.createContext(new Map);e2.displayName="Fetchers";var t2=C.createContext(null);t2.displayName="Await";var sn=C.createContext(null);sn.displayName="Navigation";var ei=C.createContext(null);ei.displayName="Location";var bn=C.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var Af=C.createContext(null);Af.displayName="RouteError";function n2(a,{relative:s}={}){Ne(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=C.useContext(sn),{hash:f,pathname:d,search:v}=ti(a,{relative:s}),p=d;return u!=="/"&&(p=d==="/"?u:Nn([u,d])),c.createHref({pathname:p,search:v,hash:f})}function Vl(){return C.useContext(ei)!=null}function on(){return Ne(Vl(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(ei).location}var dp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hp(a){C.useContext(sn).static||C.useLayoutEffect(a)}function Tf(){let{isDataRoute:a}=C.useContext(bn);return a?g2():a2()}function a2(){Ne(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let a=C.useContext($l),{basename:s,navigator:u}=C.useContext(sn),{matches:c}=C.useContext(bn),{pathname:f}=on(),d=JSON.stringify(zf(c)),v=C.useRef(!1);return hp(()=>{v.current=!0}),C.useCallback((h,g={})=>{if(Pt(v.current,dp),!v.current)return;if(typeof h=="number"){u.go(h);return}let x=Cf(h,JSON.parse(d),f,g.relative==="path");a==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:Nn([s,x.pathname])),(g.replace?u.replace:u.push)(x,g.state,g)},[s,u,d,f,a])}C.createContext(null);function ti(a,{relative:s}={}){let{matches:u}=C.useContext(bn),{pathname:c}=on(),f=JSON.stringify(zf(u));return C.useMemo(()=>Cf(a,JSON.parse(f),c,s==="path"),[a,f,c,s])}function l2(a,s){return mp(a,s)}function mp(a,s,u,c){Ne(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=C.useContext(sn),{matches:d}=C.useContext(bn),v=d[d.length-1],p=v?v.params:{},h=v?v.pathname:"/",g=v?v.pathnameBase:"/",x=v&&v.route;{let $=x&&x.path||"";gp(h,!x||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let S=on(),w;if(s){let $=typeof s=="string"?Yl(s):s;Ne(g==="/"||$.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${$.pathname}" was given in the \`location\` prop.`),w=$}else w=S;let R=w.pathname||"/",A=R;if(g!=="/"){let $=g.replace(/^\//,"").split("/");A="/"+R.replace(/^\//,"").split("/").slice($.length).join("/")}let B=sp(a,{pathname:A});Pt(x||B!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Pt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=c2(B&&B.map($=>Object.assign({},$,{params:Object.assign({},p,$.params),pathname:Nn([g,f.encodeLocation?f.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?g:Nn([g,f.encodeLocation?f.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),d,u,c);return s&&L?C.createElement(ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},L):L}function r2(){let a=m2(),s=Wv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",a),v=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:d},"ErrorBoundary")," or"," ",C.createElement("code",{style:d},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},s),u?C.createElement("pre",{style:f},u):null,v)}var i2=C.createElement(r2,null),s2=class extends C.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?C.createElement(bn.Provider,{value:this.props.routeContext},C.createElement(Af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function o2({routeContext:a,match:s,children:u}){let c=C.useContext($l);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(bn.Provider,{value:a},u)}function c2(a,s=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let f=a,d=u?.errors;if(d!=null){let h=f.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);Ne(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,h+1))}let v=!1,p=-1;if(u)for(let h=0;h<f.length;h++){let g=f[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=h),g.route.id){let{loaderData:x,errors:S}=u,w=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){v=!0,p>=0?f=f.slice(0,p+1):f=[f[0]];break}}}return f.reduceRight((h,g,x)=>{let S,w=!1,R=null,A=null;u&&(S=d&&g.route.id?d[g.route.id]:void 0,R=g.route.errorElement||i2,v&&(p<0&&x===0?(gp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):p===x&&(w=!0,A=g.route.hydrateFallbackElement||null)));let B=s.concat(f.slice(0,x+1)),L=()=>{let $;return S?$=R:w?$=A:g.route.Component?$=C.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=h,C.createElement(o2,{match:g,routeContext:{outlet:h,matches:B,isDataRoute:u!=null},children:$})};return u&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?C.createElement(s2,{location:u.location,revalidation:u.revalidation,component:R,error:S,children:L(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):L()},null)}function Rf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u2(a){let s=C.useContext($l);return Ne(s,Rf(a)),s}function f2(a){let s=C.useContext(Fs);return Ne(s,Rf(a)),s}function d2(a){let s=C.useContext(bn);return Ne(s,Rf(a)),s}function Mf(a){let s=d2(a),u=s.matches[s.matches.length-1];return Ne(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function h2(){return Mf("useRouteId")}function m2(){let a=C.useContext(Af),s=f2("useRouteError"),u=Mf("useRouteError");return a!==void 0?a:s.errors?.[u]}function g2(){let{router:a}=u2("useNavigate"),s=Mf("useNavigate"),u=C.useRef(!1);return hp(()=>{u.current=!0}),C.useCallback(async(f,d={})=>{Pt(u.current,dp),u.current&&(typeof f=="number"?a.navigate(f):await a.navigate(f,{fromRouteId:s,...d}))},[a,s])}var n0={};function gp(a,s,u){!s&&!n0[a]&&(n0[a]=!0,Pt(!1,u))}C.memo(p2);function p2({routes:a,future:s,state:u}){return mp(a,void 0,u,s)}function Rs({to:a,replace:s,state:u,relative:c}){Ne(Vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=C.useContext(sn);Pt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=C.useContext(bn),{pathname:v}=on(),p=Tf(),h=Cf(a,zf(d),v,c==="path"),g=JSON.stringify(h);return C.useEffect(()=>{p(JSON.parse(g),{replace:s,state:u,relative:c})},[p,g,c,s,u]),null}function ln(a){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function b2({basename:a="/",children:s=null,location:u,navigationType:c="POP",navigator:f,static:d=!1}){Ne(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=a.replace(/^\/*/,"/"),p=C.useMemo(()=>({basename:v,navigator:f,static:d,future:{}}),[v,f,d]);typeof u=="string"&&(u=Yl(u));let{pathname:h="/",search:g="",hash:x="",state:S=null,key:w="default"}=u,R=C.useMemo(()=>{let A=Ln(h,v);return A==null?null:{location:{pathname:A,search:g,hash:x,state:S,key:w},navigationType:c}},[v,h,g,x,S,w,c]);return Pt(R!=null,`<Router basename="${v}"> is not able to match the URL "${h}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:C.createElement(sn.Provider,{value:p},C.createElement(ei.Provider,{children:s,value:R}))}function x2({children:a,location:s}){return l2(hf(a),s)}function hf(a,s=[]){let u=[];return C.Children.forEach(a,(c,f)=>{if(!C.isValidElement(c))return;let d=[...s,f];if(c.type===C.Fragment){u.push.apply(u,hf(c.props.children,d));return}Ne(c.type===ln,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!c.props.index||!c.props.children,"An index route cannot have child routes.");let v={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(v.children=hf(c.props.children,d)),u.push(v)}),u}var Ms="get",ks="application/x-www-form-urlencoded";function Js(a){return a!=null&&typeof a.tagName=="string"}function y2(a){return Js(a)&&a.tagName.toLowerCase()==="button"}function v2(a){return Js(a)&&a.tagName.toLowerCase()==="form"}function S2(a){return Js(a)&&a.tagName.toLowerCase()==="input"}function j2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function w2(a,s){return a.button===0&&(!s||s==="_self")&&!j2(a)}function mf(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let c=a[u];return s.concat(Array.isArray(c)?c.map(f=>[u,f]):[[u,c]])},[]))}function _2(a,s){let u=mf(a);return s&&s.forEach((c,f)=>{u.has(f)||s.getAll(f).forEach(d=>{u.append(f,d)})}),u}var xs=null;function E2(){if(xs===null)try{new FormData(document.createElement("form"),0),xs=!1}catch{xs=!0}return xs}var z2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zu(a){return a!=null&&!z2.has(a)?(Pt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ks}"`),null):a}function C2(a,s){let u,c,f,d,v;if(v2(a)){let p=a.getAttribute("action");c=p?Ln(p,s):null,u=a.getAttribute("method")||Ms,f=zu(a.getAttribute("enctype"))||ks,d=new FormData(a)}else if(y2(a)||S2(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=a.getAttribute("formaction")||p.getAttribute("action");if(c=h?Ln(h,s):null,u=a.getAttribute("formmethod")||p.getAttribute("method")||Ms,f=zu(a.getAttribute("formenctype"))||zu(p.getAttribute("enctype"))||ks,d=new FormData(p,a),!E2()){let{name:g,type:x,value:S}=a;if(x==="image"){let w=g?`${g}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else g&&d.append(g,S)}}else{if(Js(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ms,c=null,f=ks,v=a}return d&&f==="text/plain"&&(v=d,d=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:d,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kf(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function A2(a,s,u){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Ln(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function T2(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function R2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function M2(a,s,u){let c=await Promise.all(a.map(async f=>{let d=s.routes[f.route.id];if(d){let v=await T2(d,u);return v.links?v.links():[]}return[]}));return B2(c.flat(1).filter(R2).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function a0(a,s,u,c,f,d){let v=(h,g)=>u[g]?h.route.id!==u[g].route.id:!0,p=(h,g)=>u[g].pathname!==h.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==h.params["*"];return d==="assets"?s.filter((h,g)=>v(h,g)||p(h,g)):d==="data"?s.filter((h,g)=>{let x=c.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(v(h,g)||p(h,g))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function k2(a,s,{includeHydrateFallback:u}={}){return D2(a.map(c=>{let f=s.routes[c.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function D2(a){return[...new Set(a)]}function O2(a){let s={},u=Object.keys(a).sort();for(let c of u)s[c]=a[c];return s}function B2(a,s){let u=new Set;return new Set(s),a.reduce((c,f)=>{let d=JSON.stringify(O2(f));return u.has(d)||(u.add(d),c.push({key:d,link:f})),c},[])}function pp(){let a=C.useContext($l);return kf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function N2(){let a=C.useContext(Fs);return kf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Df=C.createContext(void 0);Df.displayName="FrameworkContext";function bp(){let a=C.useContext(Df);return kf(a,"You must render this element inside a <HydratedRouter> element"),a}function U2(a,s){let u=C.useContext(Df),[c,f]=C.useState(!1),[d,v]=C.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:g,onMouseLeave:x,onTouchStart:S}=s,w=C.useRef(null);C.useEffect(()=>{if(a==="render"&&v(!0),a==="viewport"){let B=$=>{$.forEach(X=>{v(X.isIntersecting)})},L=new IntersectionObserver(B,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[a]),C.useEffect(()=>{if(c){let B=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(B)}}},[c]);let R=()=>{f(!0)},A=()=>{f(!1),v(!1)};return u?a!=="intent"?[d,w,{}]:[d,w,{onFocus:qr(p,R),onBlur:qr(h,A),onMouseEnter:qr(g,R),onMouseLeave:qr(x,A),onTouchStart:qr(S,R)}]:[!1,w,{}]}function qr(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function L2({page:a,...s}){let{router:u}=pp(),c=C.useMemo(()=>sp(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?C.createElement(G2,{page:a,matches:c,...s}):null}function H2(a){let{manifest:s,routeModules:u}=bp(),[c,f]=C.useState([]);return C.useEffect(()=>{let d=!1;return M2(a,s,u).then(v=>{d||f(v)}),()=>{d=!0}},[a,s,u]),c}function G2({page:a,matches:s,...u}){let c=on(),{manifest:f,routeModules:d}=bp(),{basename:v}=pp(),{loaderData:p,matches:h}=N2(),g=C.useMemo(()=>a0(a,s,h,f,c,"data"),[a,s,h,f,c]),x=C.useMemo(()=>a0(a,s,h,f,c,"assets"),[a,s,h,f,c]),S=C.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let A=new Set,B=!1;if(s.forEach($=>{let X=f.routes[$.route.id];!X||!X.hasLoader||(!g.some(T=>T.route.id===$.route.id)&&$.route.id in p&&d[$.route.id]?.shouldRevalidate||X.hasClientLoader?B=!0:A.add($.route.id))}),A.size===0)return[];let L=A2(a,v,"data");return B&&A.size>0&&L.searchParams.set("_routes",s.filter($=>A.has($.route.id)).map($=>$.route.id).join(",")),[L.pathname+L.search]},[v,p,c,f,g,s,a,d]),w=C.useMemo(()=>k2(x,f),[x,f]),R=H2(x);return C.createElement(C.Fragment,null,S.map(A=>C.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...u})),w.map(A=>C.createElement("link",{key:A,rel:"modulepreload",href:A,...u})),R.map(({key:A,link:B})=>C.createElement("link",{key:A,...B})))}function Y2(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var xp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xp&&(window.__reactRouterVersion="7.7.1")}catch{}function $2({basename:a,children:s,window:u}){let c=C.useRef();c.current==null&&(c.current=Tv({window:u,v5Compat:!0}));let f=c.current,[d,v]=C.useState({action:f.action,location:f.location}),p=C.useCallback(h=>{C.startTransition(()=>v(h))},[v]);return C.useLayoutEffect(()=>f.listen(p),[f,p]),C.createElement(b2,{basename:a,children:s,location:d.location,navigationType:d.action,navigator:f})}var yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ql=C.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:f,reloadDocument:d,replace:v,state:p,target:h,to:g,preventScrollReset:x,viewTransition:S,...w},R){let{basename:A}=C.useContext(sn),B=typeof g=="string"&&yp.test(g),L,$=!1;if(typeof g=="string"&&B&&(L=g,xp))try{let Q=new URL(window.location.href),be=g.startsWith("//")?new URL(Q.protocol+g):new URL(g),Se=Ln(be.pathname,A);be.origin===Q.origin&&Se!=null?g=Se+be.search+be.hash:$=!0}catch{Pt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=n2(g,{relative:f}),[T,q,H]=U2(c,w),J=Q2(g,{replace:v,state:p,target:h,preventScrollReset:x,relative:f,viewTransition:S});function Y(Q){s&&s(Q),Q.defaultPrevented||J(Q)}let se=C.createElement("a",{...w,...H,href:L||X,onClick:$||d?s:Y,ref:Y2(R,q),target:h,"data-discover":!B&&u==="render"?"true":void 0});return T&&!B?C.createElement(C.Fragment,null,se,C.createElement(L2,{page:X})):se});ql.displayName="Link";var V2=C.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:f=!1,style:d,to:v,viewTransition:p,children:h,...g},x){let S=ti(v,{relative:g.relative}),w=on(),R=C.useContext(Fs),{navigator:A,basename:B}=C.useContext(sn),L=R!=null&&J2(S)&&p===!0,$=A.encodeLocation?A.encodeLocation(S).pathname:S.pathname,X=w.pathname,T=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;u||(X=X.toLowerCase(),T=T?T.toLowerCase():null,$=$.toLowerCase()),T&&B&&(T=Ln(T,B)||T);const q=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let H=X===$||!f&&X.startsWith($)&&X.charAt(q)==="/",J=T!=null&&(T===$||!f&&T.startsWith($)&&T.charAt($.length)==="/"),Y={isActive:H,isPending:J,isTransitioning:L},se=H?s:void 0,Q;typeof c=="function"?Q=c(Y):Q=[c,H?"active":null,J?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let be=typeof d=="function"?d(Y):d;return C.createElement(ql,{...g,"aria-current":se,className:Q,ref:x,style:be,to:v,viewTransition:p},typeof h=="function"?h(Y):h)});V2.displayName="NavLink";var q2=C.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:f,state:d,method:v=Ms,action:p,onSubmit:h,relative:g,preventScrollReset:x,viewTransition:S,...w},R)=>{let A=P2(),B=F2(p,{relative:g}),L=v.toLowerCase()==="get"?"get":"post",$=typeof p=="string"&&yp.test(p),X=T=>{if(h&&h(T),T.defaultPrevented)return;T.preventDefault();let q=T.nativeEvent.submitter,H=q?.getAttribute("formmethod")||v;A(q||T.currentTarget,{fetcherKey:s,method:H,navigate:u,replace:f,state:d,relative:g,preventScrollReset:x,viewTransition:S})};return C.createElement("form",{ref:R,method:L,action:B,onSubmit:c?h:X,...w,"data-discover":!$&&a==="render"?"true":void 0})});q2.displayName="Form";function K2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vp(a){let s=C.useContext($l);return Ne(s,K2(a)),s}function Q2(a,{target:s,replace:u,state:c,preventScrollReset:f,relative:d,viewTransition:v}={}){let p=Tf(),h=on(),g=ti(a,{relative:d});return C.useCallback(x=>{if(w2(x,s)){x.preventDefault();let S=u!==void 0?u:Ir(h)===Ir(g);p(a,{replace:S,state:c,preventScrollReset:f,relative:d,viewTransition:v})}},[h,p,g,u,c,s,a,f,d,v])}function Sp(a){Pt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=C.useRef(mf(a)),u=C.useRef(!1),c=on(),f=C.useMemo(()=>_2(c.search,u.current?null:s.current),[c.search]),d=Tf(),v=C.useCallback((p,h)=>{const g=mf(typeof p=="function"?p(new URLSearchParams(f)):p);u.current=!0,d("?"+g,h)},[d,f]);return[f,v]}var X2=0,Z2=()=>`__${String(++X2)}__`;function P2(){let{router:a}=vp("useSubmit"),{basename:s}=C.useContext(sn),u=h2();return C.useCallback(async(c,f={})=>{let{action:d,method:v,encType:p,formData:h,body:g}=C2(c,s);if(f.navigate===!1){let x=f.fetcherKey||Z2();await a.fetch(x,u,f.action||d,{preventScrollReset:f.preventScrollReset,formData:h,body:g,formMethod:f.method||v,formEncType:f.encType||p,flushSync:f.flushSync})}else await a.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:h,body:g,formMethod:f.method||v,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,s,u])}function F2(a,{relative:s}={}){let{basename:u}=C.useContext(sn),c=C.useContext(bn);Ne(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),d={...ti(a||".",{relative:s})},v=on();if(a==null){d.search=v.search;let p=new URLSearchParams(d.search),h=p.getAll("index");if(h.some(x=>x==="")){p.delete("index"),h.filter(S=>S).forEach(S=>p.append("index",S));let x=p.toString();d.search=x?`?${x}`:""}}return(!a||a===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:Nn([u,d.pathname])),Ir(d)}function J2(a,{relative:s}={}){let u=C.useContext(fp);Ne(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=vp("useViewTransitionState"),f=ti(a,{relative:s});if(!u.isTransitioning)return!1;let d=Ln(u.currentLocation.pathname,c)||u.currentLocation.pathname,v=Ln(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Hs(f.pathname,v)!=null||Hs(f.pathname,d)!=null}const W2="/assets/logo-BY-LKRi7.png",I2=y.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,eS=y.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,tS=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nS=y.img`
  height: 40px;
  width: auto;
`,aS=y.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${a=>a.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,lS=y.div`
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
    display: ${a=>a.$open?"flex":"none"};
  }
`,Cu=y(ql)`
  text-decoration: none;
  color: ${a=>a.$active?a.theme.colors.primary:"#333"};
  font-weight: ${a=>a.$active?"700":"600"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${a=>a.$active?`2px solid ${a.theme.colors.primary}`:"2px solid transparent"};

  &:hover {
    color: ${a=>a.theme.colors.primary};
    background: rgba(217, 36, 95, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: rgba(217, 36, 95, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`,rS=y.button`
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
`;function zl(){const a=on(),[s,u]=C.useState(!1);return r.jsx(I2,{children:r.jsxs(eS,{children:[r.jsx(Cu,{to:"/",onClick:()=>u(!1),children:r.jsxs(tS,{children:[r.jsx(nS,{src:W2,alt:"SCKW Logo"}),r.jsx(aS,{children:"SC Konstanz-Wollmatingen e. V."})]})}),r.jsxs(rS,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>u(f=>!f),children:["Menü",r.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),r.jsxs(lS,{id:"mobile-nav",$open:s,children:[r.jsx(Cu,{to:"/sponsoring",$active:a.pathname==="/sponsoring",onClick:()=>u(!1),children:"🤝 Sponsoring"}),r.jsx(Cu,{to:"/sponsoring/club-500",$active:a.pathname==="/sponsoring/club-500",onClick:()=>u(!1),children:"⚽ CLUB 500"}),!1]})]})})}const iS=y.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Au=y.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,sS=y(ql)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,oS=y.div`
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
`,cS=y.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Ws(){return r.jsx(iS,{children:r.jsxs(oS,{children:[r.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",r.jsx(Au,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),r.jsxs(cS,{"aria-label":"Rechtliches",children:[r.jsx(sS,{to:"/sponsoring/spielerpatenschaft",children:"Personal Partner"}),r.jsx(Au,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),r.jsx(Au,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const jp="/assets/cheerleading_0-DQQGXi0R.jpg",wp="/assets/cheerleading_1-NkLBARmH.jpg",_p="/assets/cheerleading_2-CrezcZYL.jpg",Ep="/assets/cheerleading_3-GN5rPHNN.jpg",zp="/assets/1-ClVWb4ei.png",Cp="/assets/10-Bwp2eIye.png",Ap="/assets/11-W061sOUI.png",Tp="/assets/12-TjJyzl8L.png",Rp="/assets/13-ChUUCdQQ.png",Mp="/assets/14-BVhdRr98.png",kp="/assets/2-CcfgIQYe.png",Dp="/assets/3-DYiPkVd7.png",Op="/assets/4-1upoqVoS.png",Bp="/assets/5-D0tadXAC.png",Np="/assets/6-NJ4ELm_j.png",Up="/assets/7-BXo4_Bcj.png",Lp="/assets/8-BbOqEnj_.png",Hp="/assets/9-CIK0gi9o.png",Gp="/assets/herren_0-BVVgyt1l.jpg",Yp="/assets/herren_1-B8ywOnNy.jpg",$p="/assets/herren_10-DPVQsg9B.jpg",Vp="/assets/herren_11-wfWG62H3.jpg",qp="/assets/herren_12-DEJSN2zG.jpg",Kp="/assets/herren_13-F52vdukE.jpg",Qp="/assets/herren_14-Cq9hoKfG.jpg",Xp="/assets/herren_15-aYIFGauG.jpg",Zp="/assets/herren_16-NYI2EaEN.jpg",Pp="/assets/herren_17-B_52ysA2.jpg",Fp="/assets/herren_18-DbwjVNKJ.jpg",Jp="/assets/herren_19-BduD_J85.png",Wp="/assets/herren_2--jFuixBF.jpg",Ip="/assets/herren_3-BPz1zlkG.jpg",e1="/assets/herren_4-BZRrQaFr.jpg",t1="/assets/herren_5-D-QrfY2P.jpg",n1="/assets/herren_6-DWQvi6Am.jpg",a1="/assets/herren_7-BXO6B8Bt.jpg",l1="/assets/herren_8-Cg4rdr7T.jpg",r1="/assets/herren_9-DoLnTdRG.jpg",i1="/assets/herren_club500_1-DNikBmOh.png",s1="/assets/herren_club500_2-CABnv8vs.png",o1="/assets/herren_club500_3-Cjxe_RiU.png",c1="/assets/herren_club500_4-Dgm0Z9_i.png",u1="/assets/herren_club500_5-3OeJLCAP.png",f1="/assets/herren_jubel_500club-mxBrnD8H.png",d1="/assets/IMG-team-BGcF1agj.png",h1="/assets/IMG_5349-CpvIVKhM.jpg",m1="/assets/IMG_5369-DQ4CSwdg.jpg",g1="/assets/IMG_5421-BBzniIEN.jpg",p1="/assets/IMG_5442-D2PgutWB.jpg",b1="/assets/IMG_5952-B9VW6Qie.jpg",x1="/assets/Unbenann324t-IPGo6eoQ.png",y1="/assets/image0-DDrU5aZn.jpeg",v1="/assets/image11-BNM8hTkT.jpeg",S1="/assets/image8-BUnedp9U.jpeg",uS="/assets/grafhardenberg-Di5cVggE.png",fS="/assets/horta-DydWIGV7.png",dS="/assets/logans-BgpKwKYA.png",hS="/assets/ricobet-DsVC-eZt.png",mS="/assets/rothaus-DqkKD9yW.png",gS="/assets/tasty-B2pSa1rE.png",pS="/assets/cabin-window-B83r_CDB.jpg",bS="/assets/outside-9-xz17qL.jpg",xS="/assets/shower-B75caJ-F.jpg",yS="/assets/sitting-area-D7khB3Gw.jpg",vS="/assets/toilet-BpMHYbhh.jpg",SS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":jp,"../assets/gallery/cheerleading/cheerleading_1.jpg":wp,"../assets/gallery/cheerleading/cheerleading_2.jpg":_p,"../assets/gallery/cheerleading/cheerleading_3.jpg":Ep,"../assets/gallery/damen/1.png":zp,"../assets/gallery/damen/10.png":Cp,"../assets/gallery/damen/11.png":Ap,"../assets/gallery/damen/12.png":Tp,"../assets/gallery/damen/13.png":Rp,"../assets/gallery/damen/14.png":Mp,"../assets/gallery/damen/2.png":kp,"../assets/gallery/damen/3.png":Dp,"../assets/gallery/damen/4.png":Op,"../assets/gallery/damen/5.png":Bp,"../assets/gallery/damen/6.png":Np,"../assets/gallery/damen/7.png":Up,"../assets/gallery/damen/8.png":Lp,"../assets/gallery/damen/9.png":Hp,"../assets/gallery/herren/herren_0.jpg":Gp,"../assets/gallery/herren/herren_1.jpg":Yp,"../assets/gallery/herren/herren_10.jpg":$p,"../assets/gallery/herren/herren_11.jpg":Vp,"../assets/gallery/herren/herren_12.jpg":qp,"../assets/gallery/herren/herren_13.jpg":Kp,"../assets/gallery/herren/herren_14.jpg":Qp,"../assets/gallery/herren/herren_15.jpg":Xp,"../assets/gallery/herren/herren_16.jpg":Zp,"../assets/gallery/herren/herren_17.jpg":Pp,"../assets/gallery/herren/herren_18.jpg":Fp,"../assets/gallery/herren/herren_19.png":Jp,"../assets/gallery/herren/herren_2.jpg":Wp,"../assets/gallery/herren/herren_3.jpg":Ip,"../assets/gallery/herren/herren_4.jpg":e1,"../assets/gallery/herren/herren_5.jpg":t1,"../assets/gallery/herren/herren_6.jpg":n1,"../assets/gallery/herren/herren_7.jpg":a1,"../assets/gallery/herren/herren_8.jpg":l1,"../assets/gallery/herren/herren_9.jpg":r1,"../assets/gallery/herren/herren_club500_1.png":i1,"../assets/gallery/herren/herren_club500_2.png":s1,"../assets/gallery/herren/herren_club500_3.png":o1,"../assets/gallery/herren/herren_club500_4.png":c1,"../assets/gallery/herren/herren_club500_5.png":u1,"../assets/gallery/herren/herren_jubel_500club.png":f1,"../assets/gallery/jfv/IMG-team.png":d1,"../assets/gallery/jfv/IMG_5349.jpg":h1,"../assets/gallery/jfv/IMG_5369.jpg":m1,"../assets/gallery/jfv/IMG_5421.jpg":g1,"../assets/gallery/jfv/IMG_5442.jpg":p1,"../assets/gallery/jfv/IMG_5952.jpg":b1,"../assets/gallery/jfv/Unbenann324t.png":x1,"../assets/gallery/jfv/image0.jpeg":y1,"../assets/gallery/jfv/image11.jpeg":v1,"../assets/gallery/jfv/image8.jpeg":S1}),jS=Object.assign({"../assets/sponsors/grafhardenberg.png":uS,"../assets/sponsors/horta.png":fS,"../assets/sponsors/logans.png":dS,"../assets/sponsors/ricobet.png":hS,"../assets/sponsors/rothaus.png":mS,"../assets/sponsors/tasty.png":gS}),wS=Object.assign({"../assets/renovation/cabin-window.jpg":pS,"../assets/renovation/outside.jpg":bS,"../assets/renovation/shower.jpg":xS,"../assets/renovation/sitting-area.jpg":yS,"../assets/renovation/toilet.jpg":vS}),j1=a=>a.split("/").pop()?.toLowerCase()||"",_S=a=>{const s=a.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function ES(a){const s=[...a];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const zS=()=>{const a={};Object.entries(SS).forEach(([c,f])=>{const d=_S(c);a[d]||(a[d]=[]),a[d].push(f)}),Object.keys(a).forEach(c=>{a[c]=ES(a[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{a[c]&&(s[c]=a[c])}),Object.keys(a).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=a[c])}),s},CS=()=>{const a={};return Object.entries(jS).forEach(([s,u])=>{const c=j1(s);a[c]=u}),a},w1=()=>{const a={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(wS).forEach(([s,u])=>{const c=j1(s);c.includes("sitting")?a.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?a.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&a.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?a.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?a.waschkueche.push({src:u,alt:"Dusche"}):a.waschkueche.push({src:u,alt:"Waschküche"}))}),a},ft=a=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":jp,"../assets/gallery/cheerleading/cheerleading_1.jpg":wp,"../assets/gallery/cheerleading/cheerleading_2.jpg":_p,"../assets/gallery/cheerleading/cheerleading_3.jpg":Ep,"../assets/gallery/damen/1.png":zp,"../assets/gallery/damen/10.png":Cp,"../assets/gallery/damen/11.png":Ap,"../assets/gallery/damen/12.png":Tp,"../assets/gallery/damen/13.png":Rp,"../assets/gallery/damen/14.png":Mp,"../assets/gallery/damen/2.png":kp,"../assets/gallery/damen/3.png":Dp,"../assets/gallery/damen/4.png":Op,"../assets/gallery/damen/5.png":Bp,"../assets/gallery/damen/6.png":Np,"../assets/gallery/damen/7.png":Up,"../assets/gallery/damen/8.png":Lp,"../assets/gallery/damen/9.png":Hp,"../assets/gallery/herren/herren_0.jpg":Gp,"../assets/gallery/herren/herren_1.jpg":Yp,"../assets/gallery/herren/herren_10.jpg":$p,"../assets/gallery/herren/herren_11.jpg":Vp,"../assets/gallery/herren/herren_12.jpg":qp,"../assets/gallery/herren/herren_13.jpg":Kp,"../assets/gallery/herren/herren_14.jpg":Qp,"../assets/gallery/herren/herren_15.jpg":Xp,"../assets/gallery/herren/herren_16.jpg":Zp,"../assets/gallery/herren/herren_17.jpg":Pp,"../assets/gallery/herren/herren_18.jpg":Fp,"../assets/gallery/herren/herren_19.png":Jp,"../assets/gallery/herren/herren_2.jpg":Wp,"../assets/gallery/herren/herren_3.jpg":Ip,"../assets/gallery/herren/herren_4.jpg":e1,"../assets/gallery/herren/herren_5.jpg":t1,"../assets/gallery/herren/herren_6.jpg":n1,"../assets/gallery/herren/herren_7.jpg":a1,"../assets/gallery/herren/herren_8.jpg":l1,"../assets/gallery/herren/herren_9.jpg":r1,"../assets/gallery/herren/herren_club500_1.png":i1,"../assets/gallery/herren/herren_club500_2.png":s1,"../assets/gallery/herren/herren_club500_3.png":o1,"../assets/gallery/herren/herren_club500_4.png":c1,"../assets/gallery/herren/herren_club500_5.png":u1,"../assets/gallery/herren/herren_jubel_500club.png":f1,"../assets/gallery/jfv/IMG-team.png":d1,"../assets/gallery/jfv/IMG_5349.jpg":h1,"../assets/gallery/jfv/IMG_5369.jpg":m1,"../assets/gallery/jfv/IMG_5421.jpg":g1,"../assets/gallery/jfv/IMG_5442.jpg":p1,"../assets/gallery/jfv/IMG_5952.jpg":b1,"../assets/gallery/jfv/Unbenann324t.png":x1,"../assets/gallery/jfv/image0.jpeg":y1,"../assets/gallery/jfv/image11.jpeg":v1,"../assets/gallery/jfv/image8.jpeg":S1})).find(([c])=>c.includes(a));return u?u[1]:""},AS=(a,s)=>ft(`${a}/${a}_${s}.jpg`);zS(),CS(),w1();const TS={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},RS={packages:TS},MS=y.div`
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
`,kS=y.div`
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
`,DS=y.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OS=y.div`
  margin-bottom: 1.5rem;
`,BS=y.div`
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
`,NS=y.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,US=y.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${a=>Math.min(a.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,LS=y.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,HS=y.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,GS=y.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,YS=y.div`
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
`,$S=y.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,VS=y.div`
  flex: 1;
`,qS=y.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,KS=y.span`
  font-weight: 600;
  color: #374151;
`,QS=y.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,XS=y.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,ZS=y.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,PS=y.button`
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
`,FS=y.div`
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
`,JS=()=>{const a=RS;return{kabinen:{current:a.packages.kabinen.current,goal:a.packages.kabinen.goal,donors:a.packages.kabinen.donors},fassade:{current:a.packages.fassade.current,goal:a.packages.fassade.goal,donors:a.packages.fassade.donors},waschkueche:{current:a.packages.waschkueche.current,goal:a.packages.waschkueche.goal,donors:a.packages.waschkueche.donors}}};function WS({data:a=JS(),realTime:s=!1}){const[u,c]=C.useState(a),[f,d]=C.useState(new Date),[v,p]=C.useState(!1),h=async()=>{p(!0);try{const S=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(S.ok){const w=await S.json(),R={kabinen:{current:w.packages.kabinen.current,goal:w.packages.kabinen.goal,donors:w.packages.kabinen.donors},fassade:{current:w.packages.fassade.current,goal:w.packages.fassade.goal,donors:w.packages.fassade.donors},waschkueche:{current:w.packages.waschkueche.current,goal:w.packages.waschkueche.goal,donors:w.packages.waschkueche.donors}};c(R),d(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(S){console.error("❌ Fehler beim Laden der Spendendaten:",S)}finally{p(!1)}};C.useEffect(()=>{if(!s)return;const S=setInterval(()=>{h()},3e4);return()=>clearInterval(S)},[s]);const g=S=>{switch(S){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},x=S=>{switch(S){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return S}};return r.jsxs(r.Fragment,{children:[r.jsx(MS,{children:Object.entries(u).map(([S,w])=>{const R=w.current/w.goal*100;return r.jsxs(kS,{children:[r.jsxs(DS,{children:[g(S)," ",x(S)]}),r.jsxs(OS,{children:[r.jsxs(BS,{children:[r.jsxs("span",{children:[w.current.toLocaleString("de-DE")," €"]}),r.jsxs("span",{children:[w.goal.toLocaleString("de-DE")," €"]})]}),r.jsx(NS,{children:r.jsx(US,{$progress:R})}),r.jsxs(LS,{children:[Math.round(R),"% erreicht"]})]}),r.jsxs(HS,{children:[r.jsxs(GS,{children:["💝 Spender (",w.donors.length,")"]}),r.jsx(YS,{children:w.donors.length>0?w.donors.slice().reverse().map((A,B)=>r.jsxs($S,{children:[r.jsxs(VS,{children:[r.jsx(qS,{children:A.anonymous?"Anonymer Spender":A.name}),A.comment&&r.jsxs(QS,{children:['"',A.comment,'"']}),A.date&&r.jsx(XS,{children:A.date})]}),r.jsxs(KS,{children:[A.amount.toLocaleString("de-DE")," €"]})]},B)):r.jsx(ZS,{children:"Noch keine Spenden 🤗"})})]})]},S)})}),r.jsxs(PS,{onClick:h,disabled:v,title:"Spendendaten aktualisieren",children:["🔄",v?"Lade...":"Aktualisieren"]}),r.jsxs(FS,{children:["Letztes Update: ",f.toLocaleTimeString("de-DE")]})]})}const IS=y.section`
  background: url("${AS("herren",18)}") center/cover;
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
`,e5=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,t5=y.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,n5=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,a5=y.main`
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
`,l5=y.section`
  margin-bottom: 4rem;
`,r5=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,i5=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,s5=y.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,o5=y.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,c5=y.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,u5=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,f5=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,d5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Tu=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Ru=y.div`
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
`,h5=y.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,m5=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,g5=y.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,p5=y.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${a=>a.$isActive?"#fff":"rgba(255, 255, 255, 0.5)"};
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #fff;
    transform: scale(1.2);
  }
`,b5=y.div`
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
`,x5=y.div`
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
`,y5=y.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,v5=y.button`
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
`,l0=y.button`
  position: absolute;
  top: 50%;
  ${a=>a.$direction==="prev"?"left: -60px;":"right: -60px;"}
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
    ${a=>a.$direction==="prev"?"left: -50px;":"right: -50px;"}
    font-size: 1.2rem;
    padding: 8px 12px;
  }
`,Mu=y.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,ku=y.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,S5=y.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,j5=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,w5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Du=y.div`
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
`,Ou=y.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Bu=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Nu=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Uu=y.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,_5=y.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,E5=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,z5=y.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,C5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,ys=y.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,vs=y.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Ss=y.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,A5=y.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,T5=y.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,R5=y.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,M5=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,r0=y.a`
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
`,k5=y.div`
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
`,D5=y.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,O5=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,B5=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,N5=y.button`
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
`,U5=y.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Lu=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Hu=y.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Gu=y.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,L5=y.button`
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
`,H5=y.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,Cl=w1();function Yu({images:a,onImageClick:s}){const[u,c]=C.useState(0);return C.useEffect(()=>{if(a.length<=1)return;const f=setInterval(()=>{c(d=>(d+1)%a.length)},4e3);return()=>clearInterval(f)},[a.length]),a.length===0?r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):r.jsxs(h5,{children:[a.map((f,d)=>r.jsx(m5,{src:f.src,alt:f.alt,$isActive:d===u,onClick:()=>s(d)},d)),a.length>1&&r.jsx(g5,{children:a.map((f,d)=>r.jsx(p5,{$isActive:d===u,onClick:()=>c(d)},d))})]})}function G5({images:a,initialIndex:s,onClose:u}){const[c,f]=C.useState(s),d=C.useCallback(()=>{f(p=>(p+1)%a.length)},[a.length]),v=C.useCallback(()=>{f(p=>(p-1+a.length)%a.length)},[a.length]);return C.useEffect(()=>{const p=h=>{h.key==="Escape"&&u(),h.key==="ArrowRight"&&d(),h.key==="ArrowLeft"&&v()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[u,d,v]),r.jsx(b5,{onClick:u,children:r.jsxs(x5,{onClick:p=>p.stopPropagation(),children:[r.jsx(v5,{onClick:u,children:"×"}),r.jsx(y5,{src:a[c].src,alt:a[c].alt}),a.length>1&&r.jsxs(r.Fragment,{children:[r.jsx(l0,{$direction:"prev",onClick:v,children:"‹"}),r.jsx(l0,{$direction:"next",onClick:d,children:"›"})]})]})})}function Y5(){const[a,s]=C.useState(!1),[u,c]=C.useState([]),[f,d]=C.useState(0),[v,p]=C.useState(!1),h=(S,w)=>{c(S),d(w),s(!0)},g=S=>{S.preventDefault(),p(!0)},x=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return r.jsxs(r.Fragment,{children:[r.jsx(IS,{children:r.jsxs(e5,{children:[r.jsx(t5,{children:"🏟️ Fürstenberg weiterentwickeln"}),r.jsx(n5,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),r.jsxs(a5,{children:[r.jsxs(l5,{children:[r.jsx(r5,{children:"Der Fürstenberg - unser Kultplatz"}),r.jsx(i5,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),r.jsxs(s5,{children:[r.jsx(o5,{children:"✨ Charme erhalten, Komfort verbessern"}),r.jsx(c5,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),r.jsxs(u5,{children:[r.jsx(f5,{children:"🔍 Wo wir ansetzen möchten"}),r.jsxs(d5,{children:[r.jsxs(Tu,{children:[r.jsx(Ru,{children:r.jsx(Yu,{images:Cl.kabinen,onImageClick:S=>h(Cl.kabinen,S)})}),r.jsx(Mu,{children:"🔧 Kabinen komfortabler gestalten"}),r.jsx(ku,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),r.jsxs(Tu,{children:[r.jsx(Ru,{children:r.jsx(Yu,{images:Cl.fassade,onImageClick:S=>h(Cl.fassade,S)})}),r.jsx(Mu,{children:"🎨 Fassade & Fenster erneuern"}),r.jsx(ku,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),r.jsxs(Tu,{children:[r.jsx(Ru,{children:r.jsx(Yu,{images:Cl.waschkueche,onImageClick:S=>h(Cl.waschkueche,S)})}),r.jsx(Mu,{children:"🧺 Waschküche auf Vordermann bringen"}),r.jsx(ku,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),r.jsxs(S5,{children:[r.jsx(j5,{children:"✨ Unsere Pläne für den Fürstenberg"}),r.jsxs(w5,{children:[r.jsxs(Du,{children:[r.jsx(Ou,{children:"🪑"}),r.jsx(Bu,{children:"Kabinen sanieren"}),r.jsx(Nu,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),r.jsx(Uu,{children:"~8.000 €"})]}),r.jsxs(Du,{children:[r.jsx(Ou,{children:"🎨"}),r.jsx(Bu,{children:"Fassade & Fenster erneuern"}),r.jsx(Nu,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),r.jsx(Uu,{children:"~15.000 €"})]}),r.jsxs(Du,{children:[r.jsx(Ou,{children:"🧺"}),r.jsx(Bu,{children:"Waschküche modernisieren"}),r.jsx(Nu,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),r.jsx(Uu,{children:"~5.000 €"})]})]})]}),r.jsxs(_5,{children:[r.jsx(E5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),r.jsx(z5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),r.jsxs(C5,{children:[r.jsxs(ys,{children:[r.jsx(vs,{children:"🏆"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),r.jsxs(ys,{children:[r.jsx(vs,{children:"📄"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),r.jsxs(ys,{children:[r.jsx(vs,{children:"📱"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),r.jsxs(ys,{children:[r.jsx(vs,{children:"🎯"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),r.jsxs(A5,{children:[r.jsx(T5,{children:"🤝 Gemeinsam für den Fürstenberg"}),r.jsx(R5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),r.jsx(WS,{realTime:!0}),r.jsxs(M5,{children:[r.jsx(r0,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),r.jsx(r0,{href:"#",onClick:g,children:"🏦 Per Überweisung spenden"})]})]})]}),r.jsx(Ws,{}),v&&r.jsx(k5,{onClick:()=>p(!1),children:r.jsxs(D5,{onClick:S=>S.stopPropagation(),children:[r.jsxs(O5,{children:[r.jsx(B5,{children:"Kontoverbindung für Spenden"}),r.jsx(N5,{onClick:()=>p(!1),children:"×"})]}),r.jsxs(U5,{children:[r.jsxs(Lu,{children:[r.jsx(Hu,{children:"Kontoinhaber:"}),r.jsx(Gu,{children:"SC Konstanz-Wollmatingen"})]}),r.jsxs(Lu,{children:[r.jsx(Hu,{children:"IBAN:"}),r.jsx(Gu,{children:"DE12 6905 0001 0000 0228 06"})]}),r.jsxs(Lu,{children:[r.jsx(Hu,{children:"BIC:"}),r.jsx(Gu,{children:"SOLADES1KNZ"})]})]}),r.jsx(L5,{onClick:x,children:"📋 IBAN kopieren"}),r.jsx(H5,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),a&&r.jsx(G5,{images:u,initialIndex:f,onClose:()=>s(!1)})]})}const $u={text:"Meister & Aufsteiger!",highlight:"Verbandsliga Südbaden",suffix:"Ab Saison 26/27 spielen wir eine Liga höher!"},Of=[{value:"1,3 Mio.",label:"Social-Media-Views / Saison",description:"IG 1,07 Mio. + FB 203K kombiniert (Jul 25 - Jun 26)"},{value:"310.000",label:"Views / Monat aktuell",description:"IG 230K + FB 81K kombiniert (28 Tage, Mai-Jun 26)"},{value:"21.400",label:"Personen erreicht / Monat",description:"Instagram Reach, 97% Non-Followers"},{value:"60.000+",label:"Website-Aufrufe / Jahr",description:"23.800 Sessions, Ø 2:19 Min. Verweildauer"}],$5=[{id:"hauptsponsor",name:"Hauptsponsor",preis:"15.000 €",topFeature:"Trikotbrust",trikot:"Brust (bis 400 cm²)",bande:"9 m",banner:"1× XL (3 × 2 m)",magazin:"1 Seite",saisonkarten:10,vergeben:!0,sponsorName:"Fuchsbau Immobilien",sponsorLogo:"/sponsors/fuchsbau-logo.png",sponsorWebsite:"https://immofuchsbau.com/"},{id:"stadionname",name:"Stadionname-Partner",preis:"12.000 €",topFeature:"Namensrecht Stadion",trikot:"–",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:10,vergeben:!1},{id:"co-sponsor-1",name:"Co-Sponsor I",preis:"9.500 €",topFeature:"Trikot-Rücken",trikot:"Rücken (bis 200 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1},{id:"co-sponsor-2",name:"Co-Sponsor II",preis:"8.000 €",topFeature:"Trikot-Ärmel",trikot:"Ärmel (2 × 100 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1}],V5=[{name:"Einzelbande",groesse:"3 × 1 m",preis:"800 €",slots:25,kategorie:"bande"},{name:"Doppelbande",groesse:"6 × 1 m",preis:"1.400 €",slots:12,kategorie:"bande"},{name:"Banner Standard",groesse:"ca. 2 × 1,5 m",preis:"1.200 €",slots:10,kategorie:"banner"},{name:"Banner XL",groesse:"ca. 3 × 2 m",preis:"2.000 €",slots:4,kategorie:"banner"}],q5=[{name:"Ballspende",beschreibung:"Durchsage vor Spiel, bei jedem Tor & Halbzeit · 1 Insta-Story",preis:"150 € / Spiel",hinweis:"5er-Pack: 500 €"},{name:"Spielpräsentator",beschreibung:"Alle Aufstellungen & Auswechslungen im Firmennamen",preis:"ab 250 € / Spiel"},{name:"Magazin-Inserat",beschreibung:"15 Ausgaben/Saison · ca. 100 Exemplare + 1.000-1.500 Online-Zugriffe",preis:"250 - 1.000 €",hinweis:"1/4 Seite 250 € · 1/2 Seite 500 € · 1 Seite 1.000 €"}],K5=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Vu={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},_1=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],E1=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],z1=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],vt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},Q5=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],X5=y.div`
  max-width: 1000px;
  margin: 0 auto;
`,Z5=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,P5=y.a`
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
`,F5=y.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,J5=y.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,W5=y.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,I5=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,ej=y.a`
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
`,tj=y.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,nj=y.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,aj={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function lj(){const{hauptsponsor:a,partners:s}=aj;return r.jsxs(X5,{children:[r.jsx(Z5,{children:r.jsxs(P5,{href:a.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(F5,{children:"Hauptsponsor"}),r.jsx(J5,{src:a.logo,alt:a.name}),r.jsx(W5,{children:a.name})]})}),r.jsx(I5,{children:s.map((u,c)=>r.jsxs(ej,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(tj,{src:u.logo,alt:u.name}),r.jsx(nj,{children:u.name})]},c))})]})}const rj=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,ij=y.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,sj=y.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,oj=y.p`
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

  ${({$isEmail:a})=>a&&`
    a {
      color: #e10073;
      &:hover {
        color: #b8005a;
      }
    }
  `}
`;function cj({headline:a,description:s,contactInfos:u}){const c=f=>{f.preventDefault();const d=f.currentTarget,v=new FormData(d);if(String(v.get("website")||"").trim()!=="")return;const h=String(v.get("firstName")||"").trim(),g=String(v.get("lastName")||"").trim(),x=String(v.get("email")||"").trim(),S=String(v.get("phone")||"").trim(),w={};if(h||(w.firstName="Bitte Vornamen angeben"),g||(w.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)||(w.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(S)||(w.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(w).length>0){const R=Object.keys(w)[0],A=d.querySelector(`[name="${R}"]`);A&&A.focus(),alert(Object.values(w).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),d.reset()};return r.jsx(uj,{id:"kontakt",children:r.jsxs(fj,{children:[r.jsx(jj,{children:a}),r.jsx(wj,{children:s}),r.jsx(rj,{children:u.map((f,d)=>r.jsxs(ij,{children:[r.jsxs(sj,{children:[f.icon," ",f.title]}),r.jsx(oj,{$isEmail:f.isEmail,children:f.isEmail?r.jsx("a",{href:`mailto:${f.content}`,children:f.content}):f.content})]},d))}),r.jsxs(dj,{children:[r.jsx(hj,{children:"Kontakt aufnehmen"}),r.jsx(mj,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),r.jsxs(gj,{noValidate:!0,onSubmit:c,children:[r.jsxs(qu,{children:[r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"firstName",children:"Vorname"}),r.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"lastName",children:"Nachname"}),r.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),r.jsxs(qu,{children:[r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),r.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"phone",children:"Telefon"}),r.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),r.jsx(qu,{children:r.jsxs(pj,{children:[r.jsx("label",{htmlFor:"email",children:"E-Mail"}),r.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),r.jsxs(bj,{"aria-hidden":"true",tabIndex:-1,children:[r.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),r.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),r.jsxs(xj,{children:[r.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),r.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",r.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),r.jsxs(yj,{children:[r.jsx(vj,{type:"submit",children:"Absenden"}),r.jsxs(Sj,{children:["Alternativ:"," ",r.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const uj=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,fj=y.div`
  max-width: 1000px;
  margin: 0 auto;
`,dj=y.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,hj=y.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,mj=y.p`
  margin: 0 0 1rem 0;
  color: #555;
`,gj=y.form`
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
`,qu=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,Zr=y.div`
  display: flex;
  flex-direction: column;
`,pj=y(Zr)`
  grid-column: 1 / -1;
`,bj=y.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,xj=y.div`
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
`,yj=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,vj=y.button`
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
`,Sj=y.span`
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
`,jj=y.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,wj=y.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,_j="sponsoring@sckw.de",Al=y.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Ds=y.section`
  padding: 3rem 0;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,i0=y(Ds)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,Tl=y.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,js=y.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,ws=y.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,Ej=y.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
`,zj=y.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center/cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,Cj=y.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,Aj=y.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,Tj=y.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Rj=y.p`
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
`,Mj=y.div`
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
`,kj=y.div`
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
`,Dj=y.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Oj=y.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,Bj=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,s0=y.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$primary:a})=>a?"white":"transparent"};
  color: ${({$primary:a})=>a?"#e10073":"white"};
  font-weight: 800;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({$primary:a})=>a?"0 6px 20px rgba(0, 0, 0, 0.2)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:a})=>a?"white":"rgba(255, 255, 255, 0.4)"};
  width: 100%;
  max-width: 280px;
  min-height: 48px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({$primary:a})=>a?"#f8f9fa":"rgba(255, 255, 255, 0.1)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`,Nj=Ef`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`,Uj=y.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`,Lj=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`,o0=y.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  animation: ${Nj} 2s ease-in-out infinite;
  flex-shrink: 0;
`,Hj=y.span`
  color: white;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.02em;

  strong {
    color: #fbbf24;
  }
`,Gj=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`,Yj=y.div`
  background: white;
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 2px solid ${({$vergeben:a})=>a?"#e5e7eb":"#e10073"};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${({$vergeben:a})=>a?.85:1};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.1);
  }
`,$j=y.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
  flex-wrap: wrap;
`,Vj=y.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: #222;
  margin: 0;
`,qj=y.div`
  font-size: 1.1rem;
  font-weight: 800;
  color: #e10073;
  white-space: nowrap;
`,Kj=y.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
`,Qj=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem 1rem;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1rem;
  flex: 1;
`,Rl=y.div`
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
`,Xj=y.div`
  font-size: 0.8rem;
  color: #888;
  border-top: 1px solid #f0f0f0;
  padding-top: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`,Zj=y.span`
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${({$vergeben:a})=>a?"#fee2e2":"#d1fae5"};
  color: ${({$vergeben:a})=>a?"#991b1b":"#065f46"};
`,Pj=y.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$vergeben:a})=>a?"#e5e7eb":"#e10073"};
  color: ${({$vergeben:a})=>a?"#6b7280":"white"};
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;
  pointer-events: ${({$vergeben:a})=>a?"none":"auto"};
  margin-top: auto;

  &:hover {
    background: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }
`,Fj=y.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 10px;
  margin-bottom: 1rem;
  flex: 1;
`,Jj=y.img`
  max-width: 80px;
  max-height: 50px;
  object-fit: contain;
`,Wj=y.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
`,c0=y.table`
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
`,u0=y.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,f0=y.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ij=y.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #065f46;
  background: #d1fae5;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`,ew=y.div`
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
`,tw=y.h4`
  font-size: 1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.25rem;
`,nw=y.div`
  font-size: 1.05rem;
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
`,aw=y.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
  flex: 1;
`,lw=y.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.5rem;
  font-style: italic;
`,d0=y.p`
  text-align: center;
  font-size: 0.8rem;
  color: #999;
  margin-top: 1.5rem;
  margin-bottom: 0;
`,rw=y.div`
  margin-top: 3rem;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,iw=y.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,sw=y.div`
  position: relative;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 360px;
  }
`,ow=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,cw=y.div`
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
`,uw=y.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,fw=y.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.75rem 0;
`,dw=y.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
`,hw=y.div`
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
`,mw=y.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,gw=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,pw=y.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,bw=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`,Ku=y.div`
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
`,xw=y(ql)`
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
`;function yw(){const[a,s]=C.useState(Of);C.useEffect(()=>{fetch("/social-stats.json").then(p=>p.ok?p.json():Promise.reject()).then(p=>{p?.kpis?.length&&s(p.kpis)}).catch(()=>{})},[]);const u=[ft("herren/herren_6"),ft("herren/herren_16"),ft("herren/herren_5"),ft("herren/herren_14")].filter(Boolean),[c,f]=C.useState(0);C.useEffect(()=>{if(u.length<=1)return;const p=setInterval(()=>{f(h=>(h+1)%u.length)},6e3);return()=>clearInterval(p)},[u.length]);const d=p=>{document.getElementById(p)?.scrollIntoView({behavior:"smooth",block:"start"})},v=p=>{const h=encodeURIComponent(`Interesse an Sponsoring: ${p}`),g=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich für den Bereich "${p}" und würde gerne mehr erfahren.

Bitte senden Sie mir weitere Informationen.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Herzliche Grüße
`);return`mailto:${_j}?subject=${h}&body=${g}`};return r.jsxs(r.Fragment,{children:[r.jsxs(Ej,{children:[u.map((p,h)=>r.jsx(zj,{$bg:p,$active:h===c},h)),r.jsx(Cj,{}),r.jsxs(Aj,{children:[r.jsx(Tj,{children:"Sponsoring, das messbar wirkt"}),r.jsxs(Rj,{children:[r.jsx("strong",{children:"1,3 Millionen Social-Media-Views"})," in dieser Saison, 100 % organisch, ohne Werbebudget. Aktuell erreichen wir"," ",r.jsx("strong",{children:"310.000 Views pro Monat"})," und Ihre Marke ist in jedem Spielbericht dabei."]}),r.jsx(Mj,{children:a.map(p=>r.jsxs(kj,{children:[r.jsx(Dj,{children:p.value}),r.jsx(Oj,{children:p.label})]},p.label))}),r.jsxs(Bj,{children:[r.jsx(s0,{href:"#kontakt",$primary:!0,onClick:p=>{p.preventDefault(),d("kontakt")},children:"Jetzt Kontakt aufnehmen"}),r.jsx(s0,{href:"#angebot",onClick:p=>{p.preventDefault(),d("angebot")},children:"Angebot ansehen"})]})]})]}),r.jsx(Uj,{children:r.jsxs(Lj,{children:[r.jsx(o0,{}),r.jsxs(Hj,{children:[$u.text," ",r.jsx("strong",{children:$u.highlight})," ",$u.suffix]}),r.jsx(o0,{})]})}),r.jsx(Ds,{children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Unsere Partner"}),r.jsx(ws,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),r.jsx(lj,{})]})}),r.jsx(i0,{id:"angebot",children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Exklusiv-Partnerschaften"}),r.jsx(ws,{children:"Vier einzigartige Pakete, jeweils nur 1× verfügbar. Alle Partner erscheinen in jedem Spielvor- und Nachbericht."})]}),r.jsx(Gj,{children:$5.map(p=>r.jsxs(Yj,{$vergeben:p.vergeben,children:[r.jsxs($j,{children:[r.jsxs("div",{children:[r.jsx(Vj,{children:p.name}),r.jsxs(qj,{children:[p.preis," / Saison"]})]}),r.jsx(Zj,{$vergeben:p.vergeben,children:p.vergeben?"Vergeben":"Verfügbar"})]}),r.jsx(Kj,{children:p.topFeature}),p.vergeben&&p.sponsorLogo?r.jsxs(Fj,{children:[r.jsx(Jj,{src:p.sponsorLogo,alt:p.sponsorName||""}),r.jsx(Wj,{children:p.sponsorName})]}):r.jsxs(Qj,{children:[p.trikot!=="–"&&r.jsxs(Rl,{children:["Trikot: ",p.trikot]}),p.id==="stadionname"&&r.jsx(Rl,{children:"Stadion trägt Ihren Namen"}),r.jsxs(Rl,{children:["Bande: ",p.bande]}),r.jsxs(Rl,{children:["Banner: ",p.banner]}),r.jsxs(Rl,{children:["Magazin: ",p.magazin]}),r.jsxs(Rl,{children:[p.saisonkarten," Saisonkarten"]})]}),r.jsx(Xj,{children:"Logo in allen Spielberichten · Stadionansage · Logo Website"}),r.jsx(Pj,{href:p.vergeben?void 0:v(p.name),$vergeben:p.vergeben,children:p.vergeben?"Vergeben":"Jetzt anfragen"})]},p.id))}),r.jsx(d0,{children:"Alle Preise verstehen sich zzgl. MwSt."})]})}),r.jsx(Ds,{id:"werbeflaechen",children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Werbeflächen"}),r.jsx(ws,{children:"Banden, Banner und Buswerbung, einzeln buchbar zu festen Preisen."})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"2rem",maxWidth:900,margin:"0 auto"},children:[r.jsxs(u0,{children:[r.jsx("div",{style:{padding:"1.25rem 1.25rem 0"},children:r.jsx(f0,{children:"Banden & Banner"})}),r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs(c0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Typ"}),r.jsx("th",{children:"Grösse"}),r.jsx("th",{children:"Preis / Saison"}),r.jsx("th",{children:"Verfügbar"})]})}),r.jsx("tbody",{children:V5.map(p=>r.jsxs("tr",{children:[r.jsx("td",{style:{fontWeight:600},children:p.name}),r.jsx("td",{children:p.groesse}),r.jsx("td",{style:{fontWeight:700,color:"#e10073"},children:p.preis}),r.jsx("td",{children:r.jsxs(Ij,{children:[p.slots," Plätze"]})})]},p.name))})]})})]}),r.jsxs(u0,{children:[r.jsxs("div",{style:{padding:"1.25rem 1.25rem 0"},children:[r.jsx(f0,{children:"Buswerbung"}),r.jsx("p",{style:{fontSize:"0.9rem",color:"#666",margin:"0 0 0.75rem",lineHeight:1.5},children:"Jede Woche unterwegs in Konstanz, im Landkreis und bei Auswärtsspielen."})]}),r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SCKW",style:{width:"100%",display:"block"}}),r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs(c0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fläche"}),r.jsx("th",{children:"Grösse"}),r.jsx("th",{children:"Preis / Jahr"})]})}),r.jsx("tbody",{children:[..._1,...E1].map(p=>r.jsxs("tr",{children:[r.jsx("td",{style:{fontWeight:600},children:p.position}),r.jsx("td",{children:p.groesse}),r.jsx("td",{style:{fontWeight:700,color:"#e10073"},children:p.preis})]},p.position))})]})}),r.jsx("div",{style:{padding:"0.75rem 1.25rem 1.25rem"},children:r.jsx("ul",{style:{margin:0,paddingLeft:"1.2rem",fontSize:"0.85rem",color:"#666",lineHeight:1.6},children:z1.map((p,h)=>r.jsx("li",{children:p},h))})})]})]}),r.jsx(d0,{children:"Alle Preise verstehen sich zzgl. MwSt."})]})}),r.jsx(i0,{id:"spieltag",children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Spieltag & Medien"}),r.jsx(ws,{children:"Einstieg ins Sponsoring ab 150 € netto, perfekt zum Ausprobieren."})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.25rem",maxWidth:900,margin:"0 auto"},children:q5.map(p=>r.jsxs(ew,{children:[r.jsx(tw,{children:p.name}),r.jsx(nw,{children:p.preis}),r.jsx(aw,{children:p.beschreibung}),p.hinweis&&r.jsx(lw,{children:p.hinweis})]},p.name))})]})}),r.jsx(Ds,{children:r.jsx(Al,{children:r.jsx(rw,{children:r.jsxs(iw,{children:[r.jsxs(sw,{children:[r.jsx(ow,{src:"/verbandsliga-karte.jpg",alt:"Verbandsliga Südbaden - Spielorte und Reichweite"}),r.jsx(cw,{children:"Saison 26/27"})]}),r.jsxs(uw,{children:[r.jsx(fw,{children:"Ihre Reichweite wächst mit"}),r.jsx(dw,{children:"Ob Buswerbung, Trikot oder Bande: Ihre Marke wird in der gesamten Region sichtbar. Als frischer Meister und Aufsteiger spielen wir ab Saison 26/27 Verbandsliga, in über 15 Städten zwischen Freiburg und Konstanz."}),r.jsxs(hw,{children:[r.jsx("strong",{children:"Was das für Sie bedeutet:"})," Mehr Gegner, größere Städte, mehr Medienaufmerksamkeit. Ihre Investition wächst automatisch mit, ohne Mehrkosten."]})]})]})})})}),r.jsx(mw,{children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(gw,{children:"CLUB 500"}),r.jsx(pw,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken. Werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),r.jsxs(bw,{children:[r.jsx(Ku,{children:"Spendenbescheinigung"}),r.jsx(Ku,{children:"Name auf der Spendentafel"}),r.jsx(Ku,{children:"Jugend- & Amateurfußball"})]}),r.jsx(Tl,{children:r.jsx(xw,{to:"/sponsoring/club-500",children:"Jetzt Mitglied werden →"})})]})}),r.jsx(cj,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt, wir erstellen ein passendes Angebot mit klaren Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:vt.email,isEmail:!0},{icon:"📍",title:"Adresse",content:vt.vollAdresse}]}),r.jsx(Ws,{})]})}function vw(){return Sp(),!0}const Sw=ip`
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
`,h0=y.div`
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
`,m0=y.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,g0=y.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,_s=y.button`
  background: ${a=>a.$primary?"#fff":a.$active?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"};
  color: ${a=>a.$primary?"#1a365d":"#fff"};
  border: 2px solid ${a=>a.$primary?"#fff":"rgba(255,255,255,0.25)"};
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
`,jw=y.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print {
    display: none !important;
  }
`,ww=y.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print {
    padding: 0;
    background: none;
  }
`,_t=y.section`
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
`,Ft=y.div`
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
`,Jt=y.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,Wt=y.div`
  text-align: center;
  margin-bottom: 6mm;
`,It=y.img`
  height: 20mm;
`,en=y.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,wt=y.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,mt=y.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Oe=y.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,I=y.li`
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
`,St=y.ul`
  padding: 0;
  margin: 3mm 0;
`,La=y.div`
  display: ${a=>a.$hidden?"none":"block"};
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
`,ht=y.div`
  margin-bottom: 4mm;
`,et=y.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Nt=y.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${a=>(a.$lines||1)*8}mm;
  background: #fafafa;
`,_w=y.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Bf=y.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Un=y.div`
  text-align: ${a=>a.$right?"right":a.$center?"center":"left"};
`;function ha(){return r.jsxs(_w,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",r.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function cn(){return r.jsxs(Bf,{children:[r.jsxs(Un,{children:[r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),r.jsx("br",{}),"Schleyerweg 5",r.jsx("br",{}),"78467 Konstanz"]}),r.jsxs(Un,{$center:!0,children:[vt.email,r.jsx("br",{}),"partner.sckw.de"]}),r.jsxs(Un,{$right:!0,children:["Sparkasse Bodensee",r.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",r.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const p0=ft("herren/herren_0"),Qu=ft("herren/herren_6"),b0=ft("herren/herren_1"),Ew=ft("herren/herren_14"),Gs=y.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function zw(){return r.jsx(_t,{children:r.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),r.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),r.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),r.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",r.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Of.slice(0,2).map(a=>r.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[r.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:a.value}),r.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:a.label})]},a.label))}),r.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function Cw(){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"WARUM SCKW?"}),r.jsx(wt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Of.map(a=>r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[r.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:a.value}),r.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:a.label})]},a.label))}),r.jsx(mt,{children:"Was Sie bei uns erreichen"}),r.jsxs(St,{children:[r.jsx(I,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),r.jsx(I,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),r.jsx(I,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),r.jsx(I,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),r.jsx(mt,{children:"Der Verein auf einen Blick"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsxs(Oe,{children:[r.jsx("strong",{children:"Gegründet:"})," 1912"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Mitglieder:"})," 500+"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),r.jsxs("div",{children:[r.jsxs(Oe,{children:[r.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),p0&&r.jsx(Gs,{src:p0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),r.jsx(cn,{})]})]})}function Aw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"HAUPTSPONSOR"}),r.jsx(wt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(St,{children:[r.jsx(I,{children:"Trikotwerbung auf der Brust"}),r.jsx(I,{children:"Business Club Mitgliedschaft"}),r.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),r.jsx(I,{children:"1/1 seitiges Inserat im SC Magazin"}),r.jsx(I,{children:"10 Saisonkarten"}),r.jsx(I,{children:"Werbeauftritte nach Absprache"}),r.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(La,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}function Tw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"CO-SPONSOR"}),r.jsx(wt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(St,{children:[r.jsx(I,{children:"Werbung auf den Trainingsanzügen"}),r.jsx(I,{children:"Business Club Mitgliedschaft"}),r.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),r.jsx(I,{children:"1/2 seitiges Inserat im SC Magazin"}),r.jsx(I,{children:"5 Saisonkarten"}),r.jsx(I,{children:"Werbeauftritte nach Absprache"}),r.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(La,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}function Rw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"SILBER-PARTNER"}),r.jsx(wt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),r.jsxs(St,{children:[r.jsx(I,{children:"1 Bande (5×2 m) am Gelände"}),r.jsx(I,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),r.jsx(I,{children:"Werbeplane am Gelände"}),r.jsx(I,{children:"Vereinsplakate + Eventsichtbarkeit"}),r.jsx(I,{children:"Website: Logo auf Startseite"})]}),r.jsxs(La,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),r.jsx(mt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),r.jsx(wt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),r.jsxs(St,{children:[r.jsx(I,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),r.jsx(I,{children:"Website: Logo auf der Startseite"}),r.jsx(I,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),r.jsx(I,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),r.jsxs(La,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}function Mw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"BANDENWERBUNG"}),r.jsx(wt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),r.jsx(St,{children:r.jsx(I,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Platzierung:"}),r.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",r.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",r.jsx("br",{}),r.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),r.jsxs(La,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 800€ pro Saison"})]}),b0&&r.jsx(Gs,{src:b0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}function kw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:'WERBUNG IM „HEIMSPIEL"'}),r.jsx(wt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),r.jsxs(St,{children:[r.jsx(I,{children:"15 Ausgaben pro Saison"}),r.jsx(I,{children:"ca. 100 Exemplare pro Heimspiel"}),r.jsx(I,{children:"Digitale Version (Social Media & Webseite)"}),r.jsx(I,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),r.jsx(I,{children:"DIN A4 Stadionmagazin"}),r.jsx(I,{children:"wird ausgelegt in diversen Arztpraxen"})]}),a&&r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>r.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),r.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),r.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),a&&r.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[r.jsx("strong",{children:"Maße"}),r.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",r.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",r.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}function Dw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"SPIELTAG-SPONSORING"}),r.jsx(wt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),r.jsx(mt,{children:"Ballspende"}),r.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),r.jsxs(St,{children:[r.jsx(I,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),r.jsx(I,{children:"Namensnennung in der Halbzeitpause"}),r.jsx(I,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),r.jsx(I,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),r.jsxs(La,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack:"," ",r.jsx("strong",{children:"500€"})," (statt 750€)"]}),r.jsx(mt,{children:"Spielpräsentator"}),r.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),r.jsxs(St,{children:[r.jsx(I,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),r.jsx(I,{children:"Namentliche Erwähnung im SC Magazin"}),r.jsx(I,{children:"Social Media Erwähnung am Spieltag"})]}),r.jsxs(La,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 250€ pro Spiel"})]}),Qu&&r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[r.jsx(Gs,{src:Qu,alt:"Action",style:{height:"48mm"}}),r.jsx(Gs,{src:Ew||Qu,alt:"Jubel",style:{height:"48mm"}})]}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}function Ow({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"BUSWERBUNG"}),r.jsx(wt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),a&&r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[..._1,...E1].map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),a&&r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),r.jsx(mt,{children:"Zusatzoptionen"}),r.jsx(St,{children:z1.map((s,u)=>r.jsx(I,{children:s},u))}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}function Bw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"PRÄMIEN-MODELL"}),r.jsx(wt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a&&r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),r.jsxs("tbody",{children:[K5.map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),r.jsxs("tr",{style:{background:"#f0f9ff"},children:[r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Vu.starter}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Vu.premium}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Vu.kombi})]})]})]}),r.jsx(mt,{children:"So funktioniert's"}),r.jsxs(St,{children:[r.jsx(I,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),r.jsx(I,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),r.jsx(I,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),r.jsx(I,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),r.jsx(mt,{children:"Inkludierte Leistungen"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx(Oe,{children:r.jsx("strong",{children:"Starter:"})}),r.jsxs(St,{children:[r.jsx(I,{children:"Stadionansage bei Erfolg"}),r.jsx(I,{children:"Logo auf Website"})]})]}),r.jsxs("div",{children:[r.jsx(Oe,{children:r.jsx("strong",{children:"Premium:"})}),r.jsxs(St,{children:[r.jsx(I,{children:"+ Social Media Post bei Erfolg"}),r.jsx(I,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),r.jsx(ha,{}),r.jsx(cn,{})]})]})}const x0=ft("herren/herren_jubel_500club");function Nw(){return r.jsxs(_t,{children:[x0&&r.jsx("img",{src:x0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),r.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[r.jsx(wt,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),r.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[r.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den CLUB 500."})," ","Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),r.jsx(mt,{children:"Ihre Vorteile"}),r.jsxs(St,{children:[r.jsxs(I,{children:["Offizielle ",r.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),r.jsxs(I,{children:["Veröffentlichung Ihres ",r.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),r.jsx(I,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),r.jsx(mt,{children:"Zahlungsoptionen"}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),r.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(a=>r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:a.label}),r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:a.betrag})]},a.label))})]}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),r.jsx(mt,{children:"Spendenkonto"}),r.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[r.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),r.jsx("br",{}),"IBAN: ",r.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",r.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[r.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",r.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),r.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",r.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),r.jsx(cn,{})]})]})}function Uw(){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG CLUB 500"}),r.jsxs(wt,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an"," ",vt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(et,{children:"Vorname:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"Nachname:"}),r.jsx(Nt,{$lines:1})]})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"Firma (optional):"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"Straße, Hausnummer:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(et,{children:"PLZ:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"Ort:"}),r.jsx(Nt,{$lines:1})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(et,{children:"Geb.-Datum:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"Telefon:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"E-Mail:"}),r.jsx(Nt,{$lines:1})]})]}),r.jsx(mt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:r.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),r.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),r.jsx(mt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im CLUB 500 bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:r.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),r.jsxs(ht,{style:{marginTop:"2mm"},children:[r.jsx(et,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),r.jsx(Nt,{$lines:1})]}),r.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. CLUB 500. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[r.jsxs(ht,{children:[r.jsx(et,{children:"Konstanz, den _______________"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),r.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"Unterschrift:"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),r.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[r.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",r.jsx("br",{}),r.jsx("strong",{children:"Kontakt:"})," ",vt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs(Bf,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),r.jsx(Un,{$center:!0,children:"CLUB 500"}),r.jsx(Un,{$right:!0,children:"partner.sckw.de"})]})]})]})}function Lw(){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),r.jsx(wt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(a=>r.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[r.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:a.n}),r.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:a.t}),r.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:a.d})]},a.n))}),r.jsx(mt,{children:"Kontakt"}),r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:vt.email})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),r.jsxs("div",{style:{gridColumn:"1 / -1"},children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),r.jsxs("div",{style:{fontSize:"11pt"},children:[vt.adresse.name," · ",vt.adresse.strasse," ·"," ",vt.adresse.plz," ",vt.adresse.ort]})]})]}),r.jsx(mt,{children:"Gesprächsleitfaden"}),r.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "1,4 Mio. Social-Media-Views in dieser Saison – 100 % organisch, aktuell 394.000 Views/Monat."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),r.jsx(cn,{})]})]})}function Hw(){return r.jsxs(_t,{children:[r.jsx(Ft,{}),r.jsxs(Jt,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),r.jsxs(wt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an"," ",vt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(et,{children:"Datum:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(et,{children:"Gesprächsführer (Helfer):"}),r.jsx(Nt,{$lines:1})]})]}),Q5.map((a,s)=>r.jsxs(ht,{children:[r.jsxs(et,{children:[a.label,":"]}),r.jsx(Nt,{$lines:a.lines})]},s)),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:r.jsxs(et,{style:{marginBottom:0},children:["☐ ",a]})},a))}),r.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:r.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[r.jsx("strong",{children:"Schnellreferenz:"})," ",vt.email," · partner.sckw.de · ",vt.vollAdresse.replace(/\n/g," · ")]})}),r.jsxs(Bf,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"Internes Dokument"})}),r.jsx(Un,{$center:!0}),r.jsx(Un,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const On=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>r.jsx(zw,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>r.jsx(Cw,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Aw,{showPrices:a})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Tw,{showPrices:a})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Rw,{showPrices:a})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Mw,{showPrices:a})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:a=>r.jsx(kw,{showPrices:a})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Dw,{showPrices:a})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Ow,{showPrices:a})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Bw,{showPrices:a})},{id:"club500",label:"CLUB 500",group:"community",render:()=>r.jsx(Nw,{})},{id:"club500form",label:"CLUB 500 Anmeldung",group:"community",render:()=>r.jsx(Uw,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>r.jsx(Lw,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>r.jsx(Hw,{})}],Gw=y.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print {
    display: none !important;
  }
`,Yw=y.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,$w=y.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,Vw=y.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,qw=y.button`
  background: ${a=>a.$on?"#1a365d":"#f1f5f9"};
  color: ${a=>a.$on?"#fff":"#475569"};
  border: 2px solid ${a=>a.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    opacity: 0.85;
  }
`,Xu=y.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,Zu=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,Pu=y.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 2px solid ${a=>a.$checked?"#1a365d":"#e2e8f0"};
  background: ${a=>a.$checked?"#f0f4ff":"#fff"};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${a=>a.$checked?"#1a365d":"#64748b"};
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
`,Kw=y.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Da=y.button`
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
`,Qw=y.button`
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
`,Xw=y.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function Zw(){const a=vw(),[s]=Sp(),u=s.get("preset"),c=s.get("view"),f=()=>u==="club500"?new Set(["club500","club500form"]):new Set(On.filter(Y=>Y.group==="broschüre").map(Y=>Y.id)),[d,v]=C.useState(!0),[p,h]=C.useState(f),[g,x]=C.useState(c==="preview"?"preview":"dashboard");if(!a)return r.jsx(Rs,{to:"/",replace:!0});const S=Y=>{h(se=>{const Q=new Set(se);return Q.has(Y)?Q.delete(Y):Q.add(Y),Q})},w=()=>h(new Set(On.map(Y=>Y.id))),R=()=>h(new Set),A=()=>h(new Set(On.filter(Y=>Y.group==="broschüre").map(Y=>Y.id))),B=()=>h(new Set(On.map(Y=>Y.id))),L=()=>h(new Set(["cover","why","spieltag","banden"])),$=()=>h(new Set(["cover","why","haupt","co","silber"])),X=()=>h(new Set(["club500","club500form"])),T=On.filter(Y=>p.has(Y.id)),q=On.filter(Y=>Y.group==="broschüre"),H=On.filter(Y=>Y.group==="community"),J=On.filter(Y=>Y.group==="helfer");return g==="preview"?r.jsxs(r.Fragment,{children:[r.jsx(Sw,{}),r.jsxs(h0,{children:[r.jsxs(m0,{children:["Vorschau · ",T.length," Seiten"]}),r.jsxs(g0,{children:[r.jsx(_s,{$active:d,onClick:()=>v(Y=>!Y),children:d?"Preise ✓":"Preise ✗"}),r.jsx(_s,{onClick:()=>x("dashboard"),children:"Zurück"}),r.jsx(_s,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),r.jsxs(jw,{children:[r.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',r.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),r.jsx(ww,{children:T.map(Y=>r.jsx("div",{children:Y.render(d)},Y.id))})]}):r.jsxs(r.Fragment,{children:[r.jsxs(h0,{children:[r.jsx(m0,{children:"Sponsoring-Kit · SCKW"}),r.jsx(g0,{children:r.jsx(_s,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),r.jsxs(Gw,{children:[r.jsx(Yw,{children:"Sponsoring-Kit zusammenstellen"}),r.jsx($w,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),r.jsxs(Vw,{children:[r.jsx(qw,{$on:d,onClick:()=>v(Y=>!Y),children:d?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),r.jsxs(Xw,{children:[p.size," von ",On.length," Seiten ausgewählt"]})]}),r.jsxs(Kw,{children:[r.jsx(Da,{onClick:w,children:"Alles"}),r.jsx(Da,{onClick:A,children:"Broschüre komplett"}),r.jsx(Da,{onClick:B,children:"Komplett-Kit (+ Helfer)"}),r.jsx(Da,{onClick:$,children:"Nur Premium-Pakete"}),r.jsx(Da,{onClick:L,children:"Starter-Paket"}),r.jsx(Da,{onClick:X,children:"CLUB 500"}),r.jsx(Da,{onClick:R,children:"Keine"})]}),r.jsx(Xu,{children:"Broschüre"}),r.jsx(Zu,{children:q.map(Y=>r.jsxs(Pu,{$checked:p.has(Y.id),children:[r.jsx("input",{type:"checkbox",checked:p.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),r.jsx(Xu,{children:"Community / CLUB 500"}),r.jsx(Zu,{children:H.map(Y=>r.jsxs(Pu,{$checked:p.has(Y.id),children:[r.jsx("input",{type:"checkbox",checked:p.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),r.jsx(Xu,{children:"Helfer-Anhang"}),r.jsx(Zu,{children:J.map(Y=>r.jsxs(Pu,{$checked:p.has(Y.id),children:[r.jsx("input",{type:"checkbox",checked:p.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),r.jsxs(Qw,{disabled:p.size===0,onClick:()=>x("preview"),children:["Vorschau & Drucken (",p.size," Seiten)"]})]})]})}function Pw(a,s){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),f=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(f),s&&(c.href=s),f.href=a,f.href}const Fw=(()=>{let a=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${s()}${a}`)})();function da(a){const s=[];for(let u=0,c=a.length;u<c;u++)s.push(a[u]);return s}let Ml=null;function C1(a={}){return Ml||(a.includeStyleProperties?(Ml=a.includeStyleProperties,Ml):(Ml=da(window.getComputedStyle(document.documentElement)),Ml))}function Ys(a,s){const c=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function Jw(a){const s=Ys(a,"border-left-width"),u=Ys(a,"border-right-width");return a.clientWidth+s+u}function Ww(a){const s=Ys(a,"border-top-width"),u=Ys(a,"border-bottom-width");return a.clientHeight+s+u}function A1(a,s={}){const u=s.width||Jw(a),c=s.height||Ww(a);return{width:u,height:c}}function Iw(){let a,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(a=parseInt(u,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const Ot=16384;function e3(a){(a.width>Ot||a.height>Ot)&&(a.width>Ot&&a.height>Ot?a.width>a.height?(a.height*=Ot/a.width,a.width=Ot):(a.width*=Ot/a.height,a.height=Ot):a.width>Ot?(a.height*=Ot/a.width,a.width=Ot):(a.width*=Ot/a.height,a.height=Ot))}function $s(a){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=a})}async function t3(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function n3(a,s,u){const c="http://www.w3.org/2000/svg",f=document.createElementNS(c,"svg"),d=document.createElementNS(c,"foreignObject");return f.setAttribute("width",`${s}`),f.setAttribute("height",`${u}`),f.setAttribute("viewBox",`0 0 ${s} ${u}`),d.setAttribute("width","100%"),d.setAttribute("height","100%"),d.setAttribute("x","0"),d.setAttribute("y","0"),d.setAttribute("externalResourcesRequired","true"),f.appendChild(d),d.appendChild(a),t3(f)}const jt=(a,s)=>{if(a instanceof s)return!0;const u=Object.getPrototypeOf(a);return u===null?!1:u.constructor.name===s.name||jt(u,s)};function a3(a){const s=a.getPropertyValue("content");return`${a.cssText} content: '${s.replace(/'|"/g,"")}';`}function l3(a,s){return C1(s).map(u=>{const c=a.getPropertyValue(u),f=a.getPropertyPriority(u);return`${u}: ${c}${f?" !important":""};`}).join(" ")}function r3(a,s,u,c){const f=`.${a}:${s}`,d=u.cssText?a3(u):l3(u,c);return document.createTextNode(`${f}{${d}}`)}function y0(a,s,u,c){const f=window.getComputedStyle(a,u),d=f.getPropertyValue("content");if(d===""||d==="none")return;const v=Fw();try{s.className=`${s.className} ${v}`}catch{return}const p=document.createElement("style");p.appendChild(r3(v,u,f,c)),s.appendChild(p)}function i3(a,s,u){y0(a,s,":before",u),y0(a,s,":after",u)}const v0="application/font-woff",S0="image/jpeg",s3={woff:v0,woff2:v0,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:S0,jpeg:S0,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function o3(a){const s=/\.([^./]*?)$/g.exec(a);return s?s[1]:""}function Nf(a){const s=o3(a).toLowerCase();return s3[s]||""}function c3(a){return a.split(/,/)[1]}function gf(a){return a.search(/^(data:)/)!==-1}function u3(a,s){return`data:${s};base64,${a}`}async function T1(a,s,u){const c=await fetch(a,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const f=await c.blob();return new Promise((d,v)=>{const p=new FileReader;p.onerror=v,p.onloadend=()=>{try{d(u({res:c,result:p.result}))}catch(h){v(h)}},p.readAsDataURL(f)})}const Fu={};function f3(a,s,u){let c=a.replace(/\?.*/,"");return u&&(c=a),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Uf(a,s,u){const c=f3(a,s,u.includeQueryParams);if(Fu[c]!=null)return Fu[c];u.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let f;try{const d=await T1(a,u.fetchRequestInit,({res:v,result:p})=>(s||(s=v.headers.get("Content-Type")||""),c3(p)));f=u3(d,s)}catch(d){f=u.imagePlaceholder||"";let v=`Failed to fetch resource: ${a}`;d&&(v=typeof d=="string"?d:d.message),v&&console.warn(v)}return Fu[c]=f,f}async function d3(a){const s=a.toDataURL();return s==="data:,"?a.cloneNode(!1):$s(s)}async function h3(a,s){if(a.currentSrc){const d=document.createElement("canvas"),v=d.getContext("2d");d.width=a.clientWidth,d.height=a.clientHeight,v?.drawImage(a,0,0,d.width,d.height);const p=d.toDataURL();return $s(p)}const u=a.poster,c=Nf(u),f=await Uf(u,c,s);return $s(f)}async function m3(a,s){var u;try{if(!((u=a?.contentDocument)===null||u===void 0)&&u.body)return await Is(a.contentDocument.body,s,!0)}catch{}return a.cloneNode(!1)}async function g3(a,s){return jt(a,HTMLCanvasElement)?d3(a):jt(a,HTMLVideoElement)?h3(a,s):jt(a,HTMLIFrameElement)?m3(a,s):a.cloneNode(R1(a))}const p3=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",R1=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function b3(a,s,u){var c,f;if(R1(s))return s;let d=[];return p3(a)&&a.assignedNodes?d=da(a.assignedNodes()):jt(a,HTMLIFrameElement)&&(!((c=a.contentDocument)===null||c===void 0)&&c.body)?d=da(a.contentDocument.body.childNodes):d=da(((f=a.shadowRoot)!==null&&f!==void 0?f:a).childNodes),d.length===0||jt(a,HTMLVideoElement)||await d.reduce((v,p)=>v.then(()=>Is(p,u)).then(h=>{h&&s.appendChild(h)}),Promise.resolve()),s}function x3(a,s,u){const c=s.style;if(!c)return;const f=window.getComputedStyle(a);f.cssText?(c.cssText=f.cssText,c.transformOrigin=f.transformOrigin):C1(u).forEach(d=>{let v=f.getPropertyValue(d);d==="font-size"&&v.endsWith("px")&&(v=`${Math.floor(parseFloat(v.substring(0,v.length-2)))-.1}px`),jt(a,HTMLIFrameElement)&&d==="display"&&v==="inline"&&(v="block"),d==="d"&&s.getAttribute("d")&&(v=`path(${s.getAttribute("d")})`),c.setProperty(d,v,f.getPropertyPriority(d))})}function y3(a,s){jt(a,HTMLTextAreaElement)&&(s.innerHTML=a.value),jt(a,HTMLInputElement)&&s.setAttribute("value",a.value)}function v3(a,s){if(jt(a,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(f=>a.value===f.getAttribute("value"));c&&c.setAttribute("selected","")}}function S3(a,s,u){return jt(s,Element)&&(x3(a,s,u),i3(a,s,u),y3(a,s),v3(a,s)),s}async function j3(a,s){const u=a.querySelectorAll?a.querySelectorAll("use"):[];if(u.length===0)return a;const c={};for(let d=0;d<u.length;d++){const p=u[d].getAttribute("xlink:href");if(p){const h=a.querySelector(p),g=document.querySelector(p);!h&&g&&!c[p]&&(c[p]=await Is(g,s,!0))}}const f=Object.values(c);if(f.length){const d="http://www.w3.org/1999/xhtml",v=document.createElementNS(d,"svg");v.setAttribute("xmlns",d),v.style.position="absolute",v.style.width="0",v.style.height="0",v.style.overflow="hidden",v.style.display="none";const p=document.createElementNS(d,"defs");v.appendChild(p);for(let h=0;h<f.length;h++)p.appendChild(f[h]);a.appendChild(v)}return a}async function Is(a,s,u){return!u&&s.filter&&!s.filter(a)?null:Promise.resolve(a).then(c=>g3(c,s)).then(c=>b3(a,c,s)).then(c=>S3(a,c,s)).then(c=>j3(c,s))}const M1=/url\((['"]?)([^'"]+?)\1\)/g,w3=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,_3=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function E3(a){const s=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function z3(a){const s=[];return a.replace(M1,(u,c,f)=>(s.push(f),u)),s.filter(u=>!gf(u))}async function C3(a,s,u,c,f){try{const d=u?Pw(s,u):s,v=Nf(s);let p;return f||(p=await Uf(d,v,c)),a.replace(E3(s),`$1${p}$3`)}catch{}return a}function A3(a,{preferredFontFormat:s}){return s?a.replace(_3,u=>{for(;;){const[c,,f]=w3.exec(u)||[];if(!f)return"";if(f===s)return`src: ${c};`}}):a}function k1(a){return a.search(M1)!==-1}async function D1(a,s,u){if(!k1(a))return a;const c=A3(a,u);return z3(c).reduce((d,v)=>d.then(p=>C3(p,v,s,u)),Promise.resolve(c))}async function kl(a,s,u){var c;const f=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(a);if(f){const d=await D1(f,null,u);return s.style.setProperty(a,d,s.style.getPropertyPriority(a)),!0}return!1}async function T3(a,s){await kl("background",a,s)||await kl("background-image",a,s),await kl("mask",a,s)||await kl("-webkit-mask",a,s)||await kl("mask-image",a,s)||await kl("-webkit-mask-image",a,s)}async function R3(a,s){const u=jt(a,HTMLImageElement);if(!(u&&!gf(a.src))&&!(jt(a,SVGImageElement)&&!gf(a.href.baseVal)))return;const c=u?a.src:a.href.baseVal,f=await Uf(c,Nf(c),s);await new Promise((d,v)=>{a.onload=d,a.onerror=s.onImageErrorHandler?(...h)=>{try{d(s.onImageErrorHandler(...h))}catch(g){v(g)}}:v;const p=a;p.decode&&(p.decode=d),p.loading==="lazy"&&(p.loading="eager"),u?(a.srcset="",a.src=f):a.href.baseVal=f})}async function M3(a,s){const c=da(a.childNodes).map(f=>O1(f,s));await Promise.all(c).then(()=>a)}async function O1(a,s){jt(a,Element)&&(await T3(a,s),await R3(a,s),await M3(a,s))}function k3(a,s){const{style:u}=a;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(f=>{u[f]=c[f]}),a}const j0={};async function w0(a){let s=j0[a];if(s!=null)return s;const c=await(await fetch(a)).text();return s={url:a,cssText:c},j0[a]=s,s}async function _0(a,s){let u=a.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,d=(u.match(/url\([^)]+\)/g)||[]).map(async v=>{let p=v.replace(c,"$1");return p.startsWith("https://")||(p=new URL(p,a.url).href),T1(p,s.fetchRequestInit,({result:h})=>(u=u.replace(v,`url(${h})`),[v,h]))});return Promise.all(d).then(()=>u)}function E0(a){if(a==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=a.replace(u,"");const f=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=f.exec(c);if(h===null)break;s.push(h[0])}c=c.replace(f,"");const d=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,v="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",p=new RegExp(v,"gi");for(;;){let h=d.exec(c);if(h===null){if(h=p.exec(c),h===null)break;d.lastIndex=p.lastIndex}else p.lastIndex=d.lastIndex;s.push(h[0])}return s}async function D3(a,s){const u=[],c=[];return a.forEach(f=>{if("cssRules"in f)try{da(f.cssRules||[]).forEach((d,v)=>{if(d.type===CSSRule.IMPORT_RULE){let p=v+1;const h=d.href,g=w0(h).then(x=>_0(x,s)).then(x=>E0(x).forEach(S=>{try{f.insertRule(S,S.startsWith("@import")?p+=1:f.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:S,error:w})}})).catch(x=>{console.error("Error loading remote css",x.toString())});c.push(g)}})}catch(d){const v=a.find(p=>p.href==null)||document.styleSheets[0];f.href!=null&&c.push(w0(f.href).then(p=>_0(p,s)).then(p=>E0(p).forEach(h=>{v.insertRule(h,v.cssRules.length)})).catch(p=>{console.error("Error loading remote stylesheet",p)})),console.error("Error inlining remote css file",d)}}),Promise.all(c).then(()=>(a.forEach(f=>{if("cssRules"in f)try{da(f.cssRules||[]).forEach(d=>{u.push(d)})}catch(d){console.error(`Error while reading CSS rules from ${f.href}`,d)}}),u))}function O3(a){return a.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>k1(s.style.getPropertyValue("src")))}async function B3(a,s){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=da(a.ownerDocument.styleSheets),c=await D3(u,s);return O3(c)}function B1(a){return a.trim().replace(/["']/g,"")}function N3(a){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(d=>{s.add(B1(d))}),Array.from(c.children).forEach(d=>{d instanceof HTMLElement&&u(d)})}return u(a),s}async function U3(a,s){const u=await B3(a,s),c=N3(a);return(await Promise.all(u.filter(d=>c.has(B1(d.style.fontFamily))).map(d=>{const v=d.parentStyleSheet?d.parentStyleSheet.href:null;return D1(d.cssText,v,s)}))).join(`
`)}async function L3(a,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await U3(a,s);if(u){const c=document.createElement("style"),f=document.createTextNode(u);c.appendChild(f),a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)}}async function H3(a,s={}){const{width:u,height:c}=A1(a,s),f=await Is(a,s,!0);return await L3(f,s),await O1(f,s),k3(f,s),await n3(f,u,c)}async function G3(a,s={}){const{width:u,height:c}=A1(a,s),f=await H3(a,s),d=await $s(f),v=document.createElement("canvas"),p=v.getContext("2d"),h=s.pixelRatio||Iw(),g=s.canvasWidth||u,x=s.canvasHeight||c;return v.width=g*h,v.height=x*h,s.skipAutoScale||e3(v),v.style.width=`${g}`,v.style.height=`${x}`,s.backgroundColor&&(p.fillStyle=s.backgroundColor,p.fillRect(0,0,v.width,v.height)),p.drawImage(d,0,0,v.width,v.height),v}async function Y3(a,s={}){return(await G3(a,s)).toDataURL()}const Kr=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],$3=y.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,V3=y.div`
  max-width: 1200px;
  margin: 0 auto;
`,q3=y.div`
  text-align: center;
  margin-bottom: 2rem;
`,K3=y.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Q3=y.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,X3=y.select`
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
`,Z3=y.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,P3=y.div`
  flex: 1;
  min-width: 0;
`,F3=y.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,J3=y.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,W3=y.div`
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
    background: ${a=>a.$hasLogo?"transparent":"rgba(59,130,246,0.08)"};
  }
`,I3=y.img`
  width: ${a=>a.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${a=>a.$offsetX}%, ${a=>a.$offsetY}%);
`,e6=y.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,t6=y.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,n6=y.div`
  background: #fff;
  border: 2px solid ${a=>a.$active?"#3b82f6":"#e5e7eb"};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
  }
`,a6=y.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,l6=y.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,r6=y.label`
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
`,i6=y.button`
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
`,s6=y.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,o6=y.input`
  display: none;
`,c6=y.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,Ju=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Wu=y.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,Iu=y.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,u6=y.button`
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
`,f6=y.button`
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
`;function d6(){const[a,s]=C.useState(Kr[0].id),[u,c]=C.useState(null),[f,d]=C.useState([]),[v,p]=C.useState(!1),h=C.useRef({}),g=C.useRef(null),x=Kr.find(T=>T.id===a)??Kr[0],S=T=>f.find(q=>q.zoneId===T),w=C.useCallback((T,q)=>{if(!q)return;const H=new FileReader;H.onload=J=>{const Y=J.target?.result;d(se=>[...se.filter(Q=>Q.zoneId!==T),{zoneId:T,dataUrl:Y,scale:1,offsetX:0,offsetY:0}])},H.readAsDataURL(q)},[]),R=C.useCallback((T,q)=>{d(H=>H.map(J=>J.zoneId===T?{...J,scale:q}:J))},[]),A=C.useCallback((T,q,H)=>{d(J=>J.map(Y=>Y.zoneId===T?{...Y,offsetX:q,offsetY:H}:Y))},[]),B=C.useCallback(T=>{d(q=>q.filter(H=>H.zoneId!==T))},[]),L=C.useCallback(()=>{d([]),c(null)},[]),$=C.useCallback(async()=>{if(g.current){p(!0);try{const T=await Y3(g.current,{pixelRatio:2,cacheBust:!0}),q=document.createElement("a");q.download=`${x.label}-mockup.png`,q.href=T,q.click()}finally{p(!1)}}},[x.label]),X=T=>{c(T.id),S(T.id)||h.current[T.id]?.click()};return r.jsx($3,{children:r.jsxs(V3,{children:[r.jsxs(q3,{children:[r.jsx(K3,{children:"Mockup Generator"}),r.jsx(Q3,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),Kr.length>1&&r.jsx(X3,{value:a,onChange:T=>{s(T.target.value),d([]),c(null)},children:Kr.map(T=>r.jsx("option",{value:T.id,children:T.label},T.id))}),r.jsxs(Z3,{children:[r.jsx(P3,{children:r.jsxs(F3,{ref:g,children:[r.jsx(J3,{src:x.image,alt:x.label,draggable:!1}),x.zones.map(T=>{const q=S(T.id);return r.jsx(W3,{$active:u===T.id,$hasLogo:!!q,style:{left:`${T.x}%`,top:`${T.y}%`,width:`${T.width}%`,height:`${T.height}%`},onClick:()=>X(T),onDragOver:H=>{H.preventDefault(),c(T.id)},onDrop:H=>{H.preventDefault();const J=H.dataTransfer.files?.[0];w(T.id,J)},children:q&&r.jsx(I3,{src:q.dataUrl,alt:"Logo",draggable:!1,$scale:q.scale,$offsetX:q.offsetX,$offsetY:q.offsetY})},T.id)})]})}),r.jsxs(e6,{children:[r.jsx(t6,{children:"Werbeflächen"}),x.zones.map(T=>{const q=S(T.id);return r.jsxs(n6,{$active:u===T.id,onClick:()=>c(T.id),children:[r.jsx(a6,{children:T.label}),r.jsxs(l6,{children:[r.jsx(r6,{htmlFor:`file-${T.id}`,children:q?"Ändern":"Logo hochladen"}),r.jsx(o6,{id:`file-${T.id}`,ref:H=>{h.current[T.id]=H},type:"file",accept:"image/*",onChange:H=>w(T.id,H.target.files?.[0])}),q&&r.jsx(i6,{onClick:H=>{H.stopPropagation(),B(T.id)},children:"Entfernen"}),q&&r.jsx(s6,{src:q.dataUrl,alt:"Vorschau"})]}),q&&r.jsxs(r.Fragment,{children:[r.jsxs(Ju,{children:[r.jsxs(Wu,{children:[Math.round(q.scale*100),"%"]}),r.jsx(Iu,{type:"range",min:"0.3",max:"3",step:"0.05",value:q.scale,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),R(T.id,parseFloat(H.target.value))}})]}),r.jsxs(Ju,{children:[r.jsx(Wu,{children:"X"}),r.jsx(Iu,{type:"range",min:"-100",max:"100",step:"1",value:q.offsetX,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),A(T.id,parseFloat(H.target.value),q.offsetY)}})]}),r.jsxs(Ju,{children:[r.jsx(Wu,{children:"Y"}),r.jsx(Iu,{type:"range",min:"-100",max:"100",step:"1",value:q.offsetY,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),A(T.id,q.offsetX,parseFloat(H.target.value))}})]})]}),!q&&r.jsx(c6,{children:"Klicken oder Bild hierher ziehen"})]},T.id)}),f.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(f6,{onClick:$,disabled:v,children:v?"Wird erstellt...":"Bild herunterladen"}),r.jsx(u6,{onClick:L,children:"Alle Logos entfernen"})]})]})]})]})})}var h6=Object.defineProperty,Vs=Object.getOwnPropertySymbols,N1=Object.prototype.hasOwnProperty,U1=Object.prototype.propertyIsEnumerable,z0=(a,s,u)=>s in a?h6(a,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[s]=u,pf=(a,s)=>{for(var u in s||(s={}))N1.call(s,u)&&z0(a,u,s[u]);if(Vs)for(var u of Vs(s))U1.call(s,u)&&z0(a,u,s[u]);return a},bf=(a,s)=>{var u={};for(var c in a)N1.call(a,c)&&s.indexOf(c)<0&&(u[c]=a[c]);if(a!=null&&Vs)for(var c of Vs(a))s.indexOf(c)<0&&U1.call(a,c)&&(u[c]=a[c]);return u};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ha;(a=>{const s=class pe{constructor(h,g,x,S){if(this.version=h,this.errorCorrectionLevel=g,this.modules=[],this.isFunction=[],h<pe.MIN_VERSION||h>pe.MAX_VERSION)throw new RangeError("Version value out of range");if(S<-1||S>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let w=[];for(let A=0;A<this.size;A++)w.push(!1);for(let A=0;A<this.size;A++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const R=this.addEccAndInterleave(x);if(this.drawCodewords(R),S==-1){let A=1e9;for(let B=0;B<8;B++){this.applyMask(B),this.drawFormatBits(B);const L=this.getPenaltyScore();L<A&&(S=B,A=L),this.applyMask(B)}}f(0<=S&&S<=7),this.mask=S,this.applyMask(S),this.drawFormatBits(S),this.isFunction=[]}static encodeText(h,g){const x=a.QrSegment.makeSegments(h);return pe.encodeSegments(x,g)}static encodeBinary(h,g){const x=a.QrSegment.makeBytes(h);return pe.encodeSegments([x],g)}static encodeSegments(h,g,x=1,S=40,w=-1,R=!0){if(!(pe.MIN_VERSION<=x&&x<=S&&S<=pe.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let A,B;for(A=x;;A++){const T=pe.getNumDataCodewords(A,g)*8,q=v.getTotalBits(h,A);if(q<=T){B=q;break}if(A>=S)throw new RangeError("Data too long")}for(const T of[pe.Ecc.MEDIUM,pe.Ecc.QUARTILE,pe.Ecc.HIGH])R&&B<=pe.getNumDataCodewords(A,T)*8&&(g=T);let L=[];for(const T of h){u(T.mode.modeBits,4,L),u(T.numChars,T.mode.numCharCountBits(A),L);for(const q of T.getData())L.push(q)}f(L.length==B);const $=pe.getNumDataCodewords(A,g)*8;f(L.length<=$),u(0,Math.min(4,$-L.length),L),u(0,(8-L.length%8)%8,L),f(L.length%8==0);for(let T=236;L.length<$;T^=253)u(T,8,L);let X=[];for(;X.length*8<L.length;)X.push(0);return L.forEach((T,q)=>X[q>>>3]|=T<<7-(q&7)),new pe(A,g,X,w)}getModule(h,g){return 0<=h&&h<this.size&&0<=g&&g<this.size&&this.modules[g][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let x=0;x<this.size;x++)this.setFunctionModule(6,x,x%2==0),this.setFunctionModule(x,6,x%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),g=h.length;for(let x=0;x<g;x++)for(let S=0;S<g;S++)x==0&&S==0||x==0&&S==g-1||x==g-1&&S==0||this.drawAlignmentPattern(h[x],h[S]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const g=this.errorCorrectionLevel.formatBits<<3|h;let x=g;for(let w=0;w<10;w++)x=x<<1^(x>>>9)*1335;const S=(g<<10|x)^21522;f(S>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,c(S,w));this.setFunctionModule(8,7,c(S,6)),this.setFunctionModule(8,8,c(S,7)),this.setFunctionModule(7,8,c(S,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,c(S,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,c(S,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,c(S,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let x=0;x<12;x++)h=h<<1^(h>>>11)*7973;const g=this.version<<12|h;f(g>>>18==0);for(let x=0;x<18;x++){const S=c(g,x),w=this.size-11+x%3,R=Math.floor(x/3);this.setFunctionModule(w,R,S),this.setFunctionModule(R,w,S)}}drawFinderPattern(h,g){for(let x=-4;x<=4;x++)for(let S=-4;S<=4;S++){const w=Math.max(Math.abs(S),Math.abs(x)),R=h+S,A=g+x;0<=R&&R<this.size&&0<=A&&A<this.size&&this.setFunctionModule(R,A,w!=2&&w!=4)}}drawAlignmentPattern(h,g){for(let x=-2;x<=2;x++)for(let S=-2;S<=2;S++)this.setFunctionModule(h+S,g+x,Math.max(Math.abs(S),Math.abs(x))!=1)}setFunctionModule(h,g,x){this.modules[g][h]=x,this.isFunction[g][h]=!0}addEccAndInterleave(h){const g=this.version,x=this.errorCorrectionLevel;if(h.length!=pe.getNumDataCodewords(g,x))throw new RangeError("Invalid argument");const S=pe.NUM_ERROR_CORRECTION_BLOCKS[x.ordinal][g],w=pe.ECC_CODEWORDS_PER_BLOCK[x.ordinal][g],R=Math.floor(pe.getNumRawDataModules(g)/8),A=S-R%S,B=Math.floor(R/S);let L=[];const $=pe.reedSolomonComputeDivisor(w);for(let T=0,q=0;T<S;T++){let H=h.slice(q,q+B-w+(T<A?0:1));q+=H.length;const J=pe.reedSolomonComputeRemainder(H,$);T<A&&H.push(0),L.push(H.concat(J))}let X=[];for(let T=0;T<L[0].length;T++)L.forEach((q,H)=>{(T!=B-w||H>=A)&&X.push(q[T])});return f(X.length==R),X}drawCodewords(h){if(h.length!=Math.floor(pe.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let g=0;for(let x=this.size-1;x>=1;x-=2){x==6&&(x=5);for(let S=0;S<this.size;S++)for(let w=0;w<2;w++){const R=x-w,B=(x+1&2)==0?this.size-1-S:S;!this.isFunction[B][R]&&g<h.length*8&&(this.modules[B][R]=c(h[g>>>3],7-(g&7)),g++)}}f(g==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let g=0;g<this.size;g++)for(let x=0;x<this.size;x++){let S;switch(h){case 0:S=(x+g)%2==0;break;case 1:S=g%2==0;break;case 2:S=x%3==0;break;case 3:S=(x+g)%3==0;break;case 4:S=(Math.floor(x/3)+Math.floor(g/2))%2==0;break;case 5:S=x*g%2+x*g%3==0;break;case 6:S=(x*g%2+x*g%3)%2==0;break;case 7:S=((x+g)%2+x*g%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[g][x]&&S&&(this.modules[g][x]=!this.modules[g][x])}}getPenaltyScore(){let h=0;for(let w=0;w<this.size;w++){let R=!1,A=0,B=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[w][L]==R?(A++,A==5?h+=pe.PENALTY_N1:A>5&&h++):(this.finderPenaltyAddHistory(A,B),R||(h+=this.finderPenaltyCountPatterns(B)*pe.PENALTY_N3),R=this.modules[w][L],A=1);h+=this.finderPenaltyTerminateAndCount(R,A,B)*pe.PENALTY_N3}for(let w=0;w<this.size;w++){let R=!1,A=0,B=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[L][w]==R?(A++,A==5?h+=pe.PENALTY_N1:A>5&&h++):(this.finderPenaltyAddHistory(A,B),R||(h+=this.finderPenaltyCountPatterns(B)*pe.PENALTY_N3),R=this.modules[L][w],A=1);h+=this.finderPenaltyTerminateAndCount(R,A,B)*pe.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let R=0;R<this.size-1;R++){const A=this.modules[w][R];A==this.modules[w][R+1]&&A==this.modules[w+1][R]&&A==this.modules[w+1][R+1]&&(h+=pe.PENALTY_N2)}let g=0;for(const w of this.modules)g=w.reduce((R,A)=>R+(A?1:0),g);const x=this.size*this.size,S=Math.ceil(Math.abs(g*20-x*10)/x)-1;return f(0<=S&&S<=9),h+=S*pe.PENALTY_N4,f(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,g=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let x=[6];for(let S=this.size-7;x.length<h;S-=g)x.splice(1,0,S);return x}}static getNumRawDataModules(h){if(h<pe.MIN_VERSION||h>pe.MAX_VERSION)throw new RangeError("Version number out of range");let g=(16*h+128)*h+64;if(h>=2){const x=Math.floor(h/7)+2;g-=(25*x-10)*x-55,h>=7&&(g-=36)}return f(208<=g&&g<=29648),g}static getNumDataCodewords(h,g){return Math.floor(pe.getNumRawDataModules(h)/8)-pe.ECC_CODEWORDS_PER_BLOCK[g.ordinal][h]*pe.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let g=[];for(let S=0;S<h-1;S++)g.push(0);g.push(1);let x=1;for(let S=0;S<h;S++){for(let w=0;w<g.length;w++)g[w]=pe.reedSolomonMultiply(g[w],x),w+1<g.length&&(g[w]^=g[w+1]);x=pe.reedSolomonMultiply(x,2)}return g}static reedSolomonComputeRemainder(h,g){let x=g.map(S=>0);for(const S of h){const w=S^x.shift();x.push(0),g.forEach((R,A)=>x[A]^=pe.reedSolomonMultiply(R,w))}return x}static reedSolomonMultiply(h,g){if(h>>>8||g>>>8)throw new RangeError("Byte out of range");let x=0;for(let S=7;S>=0;S--)x=x<<1^(x>>>7)*285,x^=(g>>>S&1)*h;return f(x>>>8==0),x}finderPenaltyCountPatterns(h){const g=h[1];f(g<=this.size*3);const x=g>0&&h[2]==g&&h[3]==g*3&&h[4]==g&&h[5]==g;return(x&&h[0]>=g*4&&h[6]>=g?1:0)+(x&&h[6]>=g*4&&h[0]>=g?1:0)}finderPenaltyTerminateAndCount(h,g,x){return h&&(this.finderPenaltyAddHistory(g,x),g=0),g+=this.size,this.finderPenaltyAddHistory(g,x),this.finderPenaltyCountPatterns(x)}finderPenaltyAddHistory(h,g){g[0]==0&&(h+=this.size),g.pop(),g.unshift(h)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=s;function u(p,h,g){if(h<0||h>31||p>>>h)throw new RangeError("Value out of range");for(let x=h-1;x>=0;x--)g.push(p>>>x&1)}function c(p,h){return(p>>>h&1)!=0}function f(p){if(!p)throw new Error("Assertion error")}const d=class Ye{constructor(h,g,x){if(this.mode=h,this.numChars=g,this.bitData=x,g<0)throw new RangeError("Invalid argument");this.bitData=x.slice()}static makeBytes(h){let g=[];for(const x of h)u(x,8,g);return new Ye(Ye.Mode.BYTE,h.length,g)}static makeNumeric(h){if(!Ye.isNumeric(h))throw new RangeError("String contains non-numeric characters");let g=[];for(let x=0;x<h.length;){const S=Math.min(h.length-x,3);u(parseInt(h.substring(x,x+S),10),S*3+1,g),x+=S}return new Ye(Ye.Mode.NUMERIC,h.length,g)}static makeAlphanumeric(h){if(!Ye.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let g=[],x;for(x=0;x+2<=h.length;x+=2){let S=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x))*45;S+=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x+1)),u(S,11,g)}return x<h.length&&u(Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x)),6,g),new Ye(Ye.Mode.ALPHANUMERIC,h.length,g)}static makeSegments(h){return h==""?[]:Ye.isNumeric(h)?[Ye.makeNumeric(h)]:Ye.isAlphanumeric(h)?[Ye.makeAlphanumeric(h)]:[Ye.makeBytes(Ye.toUtf8ByteArray(h))]}static makeEci(h){let g=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)u(h,8,g);else if(h<16384)u(2,2,g),u(h,14,g);else if(h<1e6)u(6,3,g),u(h,21,g);else throw new RangeError("ECI assignment value out of range");return new Ye(Ye.Mode.ECI,0,g)}static isNumeric(h){return Ye.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return Ye.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,g){let x=0;for(const S of h){const w=S.mode.numCharCountBits(g);if(S.numChars>=1<<w)return 1/0;x+=4+w+S.bitData.length}return x}static toUtf8ByteArray(h){h=encodeURI(h);let g=[];for(let x=0;x<h.length;x++)h.charAt(x)!="%"?g.push(h.charCodeAt(x)):(g.push(parseInt(h.substring(x+1,x+3),16)),x+=2);return g}};d.NUMERIC_REGEX=/^[0-9]*$/,d.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,d.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let v=d;a.QrSegment=d})(Ha||(Ha={}));(a=>{(s=>{const u=class{constructor(f,d){this.ordinal=f,this.formatBits=d}};u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),s.Ecc=u})(a.QrCode||(a.QrCode={}))})(Ha||(Ha={}));(a=>{(s=>{const u=class{constructor(f,d){this.modeBits=f,this.numBitsCharCount=d}numCharCountBits(f){return this.numBitsCharCount[Math.floor((f+7)/17)]}};u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),s.Mode=u})(a.QrSegment||(a.QrSegment={}))})(Ha||(Ha={}));var Ol=Ha;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var m6={L:Ol.QrCode.Ecc.LOW,M:Ol.QrCode.Ecc.MEDIUM,Q:Ol.QrCode.Ecc.QUARTILE,H:Ol.QrCode.Ecc.HIGH},L1=128,H1="L",G1="#FFFFFF",Y1="#000000",$1=!1,V1=1,g6=4,p6=0,b6=.1;function q1(a,s=0){const u=[];return a.forEach(function(c,f){let d=null;c.forEach(function(v,p){if(!v&&d!==null){u.push(`M${d+s} ${f+s}h${p-d}v1H${d+s}z`),d=null;return}if(p===c.length-1){if(!v)return;d===null?u.push(`M${p+s},${f+s} h1v1H${p+s}z`):u.push(`M${d+s},${f+s} h${p+1-d}v1H${d+s}z`);return}v&&d===null&&(d=p)})}),u.join("")}function K1(a,s){return a.slice().map((u,c)=>c<s.y||c>=s.y+s.h?u:u.map((f,d)=>d<s.x||d>=s.x+s.w?f:!1))}function x6(a,s,u,c){if(c==null)return null;const f=a.length+u*2,d=Math.floor(s*b6),v=f/s,p=(c.width||d)*v,h=(c.height||d)*v,g=c.x==null?a.length/2-p/2:c.x*v,x=c.y==null?a.length/2-h/2:c.y*v,S=c.opacity==null?1:c.opacity;let w=null;if(c.excavate){let A=Math.floor(g),B=Math.floor(x),L=Math.ceil(p+g-A),$=Math.ceil(h+x-B);w={x:A,y:B,w:L,h:$}}const R=c.crossOrigin;return{x:g,y:x,h,w:p,excavation:w,opacity:S,crossOrigin:R}}function y6(a,s){return s!=null?Math.max(Math.floor(s),0):a?g6:p6}function Q1({value:a,level:s,minVersion:u,includeMargin:c,marginSize:f,imageSettings:d,size:v,boostLevel:p}){let h=_e.useMemo(()=>{const A=(Array.isArray(a)?a:[a]).reduce((B,L)=>(B.push(...Ol.QrSegment.makeSegments(L)),B),[]);return Ol.QrCode.encodeSegments(A,m6[s],u,void 0,void 0,p)},[a,s,u,p]);const{cells:g,margin:x,numCells:S,calculatedImageSettings:w}=_e.useMemo(()=>{let R=h.getModules();const A=y6(c,f),B=R.length+A*2,L=x6(R,v,A,d);return{cells:R,margin:A,numCells:B,calculatedImageSettings:L}},[h,v,d,c,f]);return{qrcode:h,margin:x,cells:g,numCells:S,calculatedImageSettings:w}}var v6=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),S6=_e.forwardRef(function(s,u){const c=s,{value:f,size:d=L1,level:v=H1,bgColor:p=G1,fgColor:h=Y1,includeMargin:g=$1,minVersion:x=V1,boostLevel:S,marginSize:w,imageSettings:R}=c,B=bf(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:L}=B,$=bf(B,["style"]),X=R?.src,T=_e.useRef(null),q=_e.useRef(null),H=_e.useCallback(at=>{T.current=at,typeof u=="function"?u(at):u&&(u.current=at)},[u]),[J,Y]=_e.useState(!1),{margin:se,cells:Q,numCells:be,calculatedImageSettings:Se}=Q1({value:f,level:v,minVersion:x,boostLevel:S,includeMargin:g,marginSize:w,imageSettings:R,size:d});_e.useEffect(()=>{if(T.current!=null){const at=T.current,Ce=at.getContext("2d");if(!Ce)return;let N=Q;const Z=q.current,ne=Se!=null&&Z!==null&&Z.complete&&Z.naturalHeight!==0&&Z.naturalWidth!==0;ne&&Se.excavation!=null&&(N=K1(Q,Se.excavation));const ce=window.devicePixelRatio||1;at.height=at.width=d*ce;const _=d/be*ce;Ce.scale(_,_),Ce.fillStyle=p,Ce.fillRect(0,0,be,be),Ce.fillStyle=h,v6?Ce.fill(new Path2D(q1(N,se))):Q.forEach(function(K,P){K.forEach(function(F,ee){F&&Ce.fillRect(ee+se,P+se,1,1)})}),Se&&(Ce.globalAlpha=Se.opacity),ne&&Ce.drawImage(Z,Se.x+se,Se.y+se,Se.w,Se.h)}}),_e.useEffect(()=>{Y(!1)},[X]);const Ue=pf({height:d,width:d},L);let Ut=null;return X!=null&&(Ut=_e.createElement("img",{src:X,key:X,style:{display:"none"},onLoad:()=>{Y(!0)},ref:q,crossOrigin:Se?.crossOrigin})),_e.createElement(_e.Fragment,null,_e.createElement("canvas",pf({style:Ue,height:d,width:d,ref:H,role:"img"},$)),Ut)});S6.displayName="QRCodeCanvas";var X1=_e.forwardRef(function(s,u){const c=s,{value:f,size:d=L1,level:v=H1,bgColor:p=G1,fgColor:h=Y1,includeMargin:g=$1,minVersion:x=V1,boostLevel:S,title:w,marginSize:R,imageSettings:A}=c,B=bf(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:L,cells:$,numCells:X,calculatedImageSettings:T}=Q1({value:f,level:v,minVersion:x,boostLevel:S,includeMargin:g,marginSize:R,imageSettings:A,size:d});let q=$,H=null;A!=null&&T!=null&&(T.excavation!=null&&(q=K1($,T.excavation)),H=_e.createElement("image",{href:A.src,height:T.h,width:T.w,x:T.x+L,y:T.y+L,preserveAspectRatio:"none",opacity:T.opacity,crossOrigin:T.crossOrigin}));const J=q1(q,L);return _e.createElement("svg",pf({height:d,width:d,viewBox:`0 0 ${X} ${X}`,ref:u,role:"img"},B),!!w&&_e.createElement("title",null,w),_e.createElement("path",{fill:p,d:`M0,0 h${X}v${X}H0z`,shapeRendering:"crispEdges"}),_e.createElement("path",{fill:h,d:J,shapeRendering:"crispEdges"}),H)});X1.displayName="QRCodeSVG";const j6={subtitle:"Veränderung beginnt mit dem Engagement jedes Einzelnen. Spenden helfen, einen echten Unterschied zu machen. Gemeinsam erreichen wir mehr.",heroImage:"/sckw-logo-500club.png",heroTitle:"CLUB 500",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Mitglied im CLUB 500"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},benefits:[{icon:"📄",text:"Offizielle <strong>Spendenbescheinigung</strong> (gemeinnütziger Verein)"},{icon:"🏅",text:"Veröffentlichung Ihres <strong>Namens oder Firmennamens</strong> als Unterstützer"},{icon:"⚽",text:"Direkte Förderung des <strong>lokalen Sports</strong> und der Jugend"}],spendentafel:{label:"Spendentafel (optional)",sublabel:"Tragen Sie hier Ihren Namen oder Firmennamen ein, wenn Sie auf unserer Spendentafel (Website & Vereinsgelände) veröffentlicht werden möchten. Lassen Sie das Feld leer, wenn Sie anonym spenden möchten.",nameFieldPlaceholder:"Name/Firma für die Spendentafel (leer = anonym)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},paypalCtaLabel:"Mit PayPal spenden",paypalHinweis:"Bitte geben Sie bei PayPal im Mitteilungsfeld Ihren vollständigen Namen und Ihre Adresse an, damit wir Ihnen eine Spendenbescheinigung ausstellen können.",bankCtaLabel:"Per Überweisung",verwendungszweck:"CLUB 500",paypalMeUrl:"https://www.paypal.me/sckw2012",bankDetails:{kontoinhaber:"SC Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},w6=y.section`
  background: #0b0b0d;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
`,_6=y.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center/cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.65);
`,E6=y.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`,z6=y.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,C6=y.img`
  width: clamp(100px, 22vw, 180px);
  height: auto;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.6));
`,A6=y.h1`
  color: #fff;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
`,T6=y.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  margin: 0 0 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 600px;
`,R6=y.a`
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
`,C0=y.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Z1=y.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,M6=y(Z1)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,A0=y.h2`
  font-size: clamp(1.5rem, 4.5vw, 2.2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`,T0=y.p`
  font-size: clamp(0.92rem, 2.3vw, 1.05rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
`,k6=y.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,D6=y.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
`,O6=y.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`,B6=y.p`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin: 0;

  strong {
    color: #222;
  }
`,R0=y.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.6rem;
`,N6=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,U6=y.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  border: 2px solid ${({$active:a})=>a?"#e10073":"#e5e7eb"};
  background: ${({$active:a})=>a?"#fff0f6":"#fff"};
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-family: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
    box-shadow: 0 4px 16px rgba(225, 0, 115, 0.1);
  }
`,L6=y.div`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${({$active:a})=>a?"#e10073":"#222"};
  margin-bottom: 0.25rem;
  transition: color 0.15s;
`,H6=y.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({$active:a})=>a?"#e10073":"#555"};
  margin-bottom: 0.2rem;
  transition: color 0.15s;
`,G6=y.div`
  font-size: 0.75rem;
  color: #999;
  line-height: 1.3;
`,Y6=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem;
  border-radius: 16px;
  border: 2px solid ${({$active:a})=>a?"#e10073":"#e5e7eb"};
  background: ${({$active:a})=>a?"#fff0f6":"#fff"};
  margin-bottom: 1.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    border-color: #e10073;
  }
`,$6=y.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 0.95rem;
  color: #333;
`,V6=y.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({$active:a})=>a?"#e10073":"#ccc"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({$active:a})=>a?"#e10073":"transparent"};
  }
`,q6=y.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: start;
`,K6=y.div`
  display: flex;
  gap: 0.35rem;
`,Q6=y.button`
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 1.5px solid ${({$active:a})=>a?"#e10073":"#e5e7eb"};
  background: ${({$active:a})=>a?"#fff0f6":"#fff"};
  color: ${({$active:a})=>a?"#e10073":"#555"};
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: #e10073;
  }
`,ca=y.input`
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
`,X6=y.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`,Z6=y.div`
  margin-bottom: 1.5rem;
`,P6=y.div`
  font-size: 0.78rem;
  color: #999;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`,F6=y.label`
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
`,J6=y.div`
  font-size: 0.78rem;
  color: #999;
  margin: 0.3rem 0 0 1.6rem;
  line-height: 1.4;
`,W6=Ef`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,I6=Ef`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,e_=y.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:a})=>a?Wr`animation: ${W6} 0.3s ease forwards;`:Wr`animation: ${I6} 0.2s ease forwards; pointer-events: none;`}
`,M0=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,t_=y.div`
  margin-bottom: 1.75rem;
`,n_=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,a_=y.a`
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
`,l_=y.button`
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
`,k0=y.span`
  font-size: 0.78rem;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 0.15rem;
`,r_=y.div`
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #6d4c00;
  line-height: 1.5;
`,i_=y.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,s_=y.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`,o_=y.button`
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
`,c_=y.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #e10073;
  margin: 0 0 0.5rem;
`,u_=y.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,f_=y.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
`,Qr=y.div`
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
  strong { color: #222; }
`,d_=y.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #166534;
  line-height: 1.5;
`;function ef(a){return a.toLocaleString("de-DE",{minimumFractionDigits:a%1===0?0:1,maximumFractionDigits:2})}function h_(a,s,u,c,f){return["BCD","002","1","SCT",u,a,s,`EUR${c.toFixed(2)}`,"","",f].join(`
`)}const tf=[ft("herren/herren_club500_1"),ft("herren/herren_club500_4"),ft("herren/herren_club500_2"),ft("herren/herren_club500_3"),ft("herren/herren_club500_5")].filter(Boolean),m_=["1 Jahr","2 Jahre","3 Jahre"];function g_(){const a=j6,[s,u]=C.useState(0);C.useEffect(()=>{if(tf.length<=1)return;const Q=setInterval(()=>u(be=>(be+1)%tf.length),6e3);return()=>clearInterval(Q)},[]);const[c,f]=C.useState(0),[d,v]=C.useState(!1),[p,h]=C.useState(""),[g,x]=C.useState("1 Jahr"),[S,w]=C.useState(""),[R,A]=C.useState(!1),[B,L]=C.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[$,X]=C.useState(!1),T=C.useMemo(()=>{if(d){const Q=parseFloat(p.replace(",","."));return isNaN(Q)||Q<a.customAmount.minAmount?0:Q}return a.memberships[c]?.value??0},[d,p,c,a.memberships,a.customAmount.minAmount]),q=C.useMemo(()=>d?g:a.memberships[c]?.duration??"",[d,g,c,a.memberships]),H=C.useMemo(()=>{const Q=[a.verwendungszweck];if(q&&Q.push(q),S.trim()&&Q.push(`Tafel: ${S.trim()}`),R){const be=[B.vorname,B.nachname].filter(Boolean).join(" "),Se=[B.strasse,B.plz,B.ort].filter(Boolean).join(", "),Ue=[be,Se].filter(Boolean).join(", ");Ue&&Q.push(`Besch: ${Ue}`)}return Q.join(" | ")},[a.verwendungszweck,q,S,R,B]),J=C.useMemo(()=>T<=0?"#":`${a.paypalMeUrl}/${T}EUR`,[T,a.paypalMeUrl]),Y=C.useMemo(()=>h_(a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,T,H),[a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,T,H]),se=(Q,be)=>L(Se=>({...Se,[Q]:be}));return r.jsxs(r.Fragment,{children:[r.jsxs(w6,{children:[tf.map((Q,be)=>r.jsx(_6,{$bg:Q,$active:be===s},be)),r.jsx(E6,{}),r.jsxs(z6,{children:[r.jsx(C6,{src:a.heroImage,alt:"Club 500"}),r.jsx(A6,{children:a.heroTitle}),r.jsx(T6,{children:a.subtitle}),r.jsx(R6,{href:"#mitglied-werden",onClick:Q=>{Q.preventDefault(),document.getElementById("mitglied-werden")?.scrollIntoView({behavior:"smooth"})},children:"Jetzt Mitglied werden"})]})]}),r.jsx(Z1,{children:r.jsxs(C0,{children:[r.jsx(A0,{children:"Ihre Vorteile"}),r.jsx(T0,{children:"Als Mitglied im CLUB 500 unterstützen Sie direkt den Jugend- und Amateurfußball in Konstanz."}),r.jsx(k6,{children:a.benefits.map((Q,be)=>r.jsxs(D6,{children:[r.jsx(O6,{children:Q.icon}),r.jsx(B6,{dangerouslySetInnerHTML:{__html:Q.text}})]},be))})]})}),r.jsx(M6,{id:"mitglied-werden",children:r.jsxs(C0,{children:[r.jsx(A0,{children:"Mitglied werden"}),r.jsx(T0,{children:"Wählen Sie Ihre Unterstützung und werden Sie Teil des CLUB 500."}),r.jsx(R0,{children:a.sectionTitle}),r.jsx(N6,{children:a.memberships.map((Q,be)=>r.jsxs(U6,{$active:!d&&c===be,onClick:()=>{v(!1),f(be)},type:"button",children:[r.jsx(L6,{$active:!d&&c===be,children:Q.label}),r.jsx(H6,{$active:!d&&c===be,children:Q.duration}),r.jsx(G6,{children:Q.description})]},Q.value))}),r.jsxs(Y6,{$active:d,onClick:()=>{d||v(!0)},children:[r.jsxs($6,{children:[r.jsx(V6,{$active:d}),a.customAmount.label]}),d&&r.jsxs(q6,{onClick:Q=>Q.stopPropagation(),children:[r.jsx(ca,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR",value:p,onChange:Q=>h(Q.target.value),autoFocus:!0}),r.jsx(K6,{children:m_.map(Q=>r.jsx(Q6,{$active:g===Q,onClick:()=>x(Q),type:"button",children:Q},Q))})]}),d&&r.jsx(X6,{children:a.customAmount.minHint})]}),r.jsxs(Z6,{children:[r.jsx(R0,{children:a.spendentafel.label}),r.jsx(P6,{children:a.spendentafel.sublabel}),r.jsx(ca,{type:"text",placeholder:a.spendentafel.nameFieldPlaceholder,value:S,onChange:Q=>w(Q.target.value)})]}),r.jsxs(t_,{children:[r.jsxs(F6,{children:[r.jsx("input",{type:"checkbox",checked:R,onChange:Q=>A(Q.target.checked)}),r.jsx("span",{children:a.bescheinigung.label})]}),r.jsx(J6,{children:a.bescheinigung.hinweis}),r.jsxs(e_,{$visible:R,children:[r.jsxs(M0,{children:[r.jsx(ca,{type:"text",name:"bescheinigung-vorname",autoComplete:"given-name",placeholder:a.bescheinigung.fields.vorname,value:B.vorname,onChange:Q=>se("vorname",Q.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-nachname",autoComplete:"family-name",placeholder:a.bescheinigung.fields.nachname,value:B.nachname,onChange:Q=>se("nachname",Q.target.value)})]}),r.jsx(ca,{type:"email",name:"bescheinigung-email",autoComplete:"email",placeholder:a.bescheinigung.fields.email,value:B.email,onChange:Q=>se("email",Q.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-strasse",autoComplete:"street-address",placeholder:a.bescheinigung.fields.strasse,value:B.strasse,onChange:Q=>se("strasse",Q.target.value)}),r.jsxs(M0,{children:[r.jsx(ca,{type:"text",name:"bescheinigung-plz",autoComplete:"postal-code",placeholder:a.bescheinigung.fields.plz,value:B.plz,onChange:Q=>se("plz",Q.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-ort",autoComplete:"address-level2",placeholder:a.bescheinigung.fields.ort,value:B.ort,onChange:Q=>se("ort",Q.target.value)})]})]})]}),r.jsxs(n_,{children:[r.jsxs(a_,{href:J,target:"_blank",rel:"noopener noreferrer",children:[a.paypalCtaLabel,r.jsxs(k0,{children:[ef(T)," €"]})]}),r.jsxs(l_,{type:"button",onClick:()=>X(!0),children:[a.bankCtaLabel,r.jsxs(k0,{children:[ef(T)," €"]})]})]}),R&&r.jsx(r_,{children:a.paypalHinweis})]})}),r.jsx(Ws,{}),$&&r.jsx(i_,{onClick:()=>X(!1),children:r.jsxs(s_,{onClick:Q=>Q.stopPropagation(),children:[r.jsx(o_,{onClick:()=>X(!1),children:"×"}),r.jsx(c_,{children:"Überweisung per QR-Code"}),r.jsx(u_,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING, etc.) – alle Daten werden automatisch ausgefüllt."}),T>0&&r.jsx(f_,{children:r.jsx(X1,{value:Y,size:220,level:"M"})}),r.jsx(Qr,{children:r.jsx("strong",{children:a.bankDetails.kontoinhaber})}),r.jsxs(Qr,{children:["IBAN: ",r.jsx("strong",{children:a.bankDetails.iban})]}),r.jsxs(Qr,{children:["Betrag: ",r.jsxs("strong",{children:[ef(T)," €"]}),q&&r.jsxs(r.Fragment,{children:[" · ",r.jsx("strong",{children:q})]})]}),r.jsxs(Qr,{children:["Verwendungszweck: ",r.jsx("strong",{children:H})]}),r.jsxs(Qr,{style:{fontSize:"0.8rem",color:"#888"},children:[a.bankDetails.bank," · ",a.bankDetails.adresse]}),R&&B.email&&r.jsxs(d_,{children:["Wir senden Ihre Spendenbescheinigung an ",r.jsx("strong",{children:B.email}),"."]})]})})]})}const p_=["1 Spieler-Post in der Hinrunde + 1 in der Rückrunde","1 Sponsor-Vorstellung mit 1-2 Bildern gemeinsam mit dem Spieler","Du kommst mit aufs Bild, wenn er Spieler des Spiels wird oder trifft","Ein vom Spieler signiertes Trikot für dein Büro","Exklusiv: nur ein Partner pro Spieler","So sichtbar oder so dezent, wie du magst"];function b_(){return r.jsxs(r.Fragment,{children:[r.jsxs(x_,{children:[r.jsx(y_,{to:"/sponsoring",children:"← Zurück zur Übersicht"}),r.jsx(v_,{children:"Personal Partner"}),r.jsx(S_,{children:"Unterstütze gezielt einen SCKW-Spieler und werde ein Teil seiner Saison. Persönlich, exklusiv und direkt am Herzstück des Vereins."})]}),r.jsx(j_,{children:r.jsxs(D0,{children:[r.jsx(w_,{children:"Als Personal Partner stehst du hinter einem einzelnen Spieler und begleitest seine Saison bei uns. Wir sind ein Amateurverein, kein Profi-Club - es geht um Verbundenheit mit dem SCKW und dem Spieler, nicht um eine Werbetabelle. Dafür bist du ganz nah dran."}),r.jsxs(__,{children:[r.jsx(E_,{children:"Was drin ist"}),r.jsx(z_,{children:p_.map(a=>r.jsx(C_,{children:a},a))}),r.jsxs(A_,{children:[r.jsx(T_,{children:"Eine Saison"}),r.jsx(R_,{children:"2.500 €"})]}),r.jsx(M_,{children:"Verhandlungsbasis - im Gespräch individuell anpassbar"})]})]})}),r.jsx(k_,{children:r.jsxs(D0,{children:[r.jsx(D_,{children:"Interesse?"}),r.jsx(O_,{children:"Lass uns kurz sprechen, welchen Spieler du begleiten möchtest."}),r.jsx(B_,{href:`mailto:${vt.email}?subject=${encodeURIComponent("Personal Partner - Interesse")}`,children:"Anfragen"})]})}),r.jsx(Ws,{})]})}const x_=y.section`
  background: #0b0b0d;
  padding: 3.5rem 1rem 3rem;
  text-align: center;
`,y_=y(ql)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`,v_=y.h1`
  color: white;
  font-size: clamp(1.8rem, 6vw, 3rem);
  font-weight: 900;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
`,S_=y.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.6;
`,D0=y.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,j_=y.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,w_=y.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto 2.5rem;
  max-width: 620px;
`,__=y.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`,E_=y.h2`
  font-size: 1.4rem;
  color: #e10073;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
`,z_=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,C_=y.li`
  position: relative;
  padding: 0.7rem 0 0.7rem 1.75rem;
  font-size: 1.02rem;
  color: #333;
  line-height: 1.5;
  border-bottom: 1px solid #f4f4f4;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0.7rem;
    color: #e10073;
    font-weight: 800;
  }
`,A_=y.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f0f0f0;
`,T_=y.span`
  font-size: 1rem;
  color: #666;
  font-weight: 600;
`,R_=y.span`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 900;
  letter-spacing: -0.02em;
`,M_=y.p`
  margin: 0.6rem 0 0 0;
  font-size: 0.9rem;
  color: #888;
  text-align: right;
`,k_=y.section`
  padding: 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 100%);
`,D_=y.h2`
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
`,O_=y.p`
  font-size: 1.05rem;
  color: #555;
  margin: 0 auto 0.5rem;
  max-width: 480px;
  line-height: 1.6;
`,B_=y.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 800;
  font-size: 1.05rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.3);
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.4);
  }
`,eo={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}},N_="https://partner.sckw.de",U_=6e3,L_=[{id:"reichweite",active:!0,eyebrow:"SC Konstanz-Wollmatingen · Sponsoring",title:"1,3 Mio. Views pro Saison",subline:"100% organisch - deine Marke bei jedem Spiel im Bild.",href:"/sponsoring",image:"herren/herren_6",cta:"Partner werden"},{id:"exklusiv",active:!0,eyebrow:"Exklusiv-Partnerschaften",title:"Werde das Gesicht des Vereins",subline:"Stadionname, Trikot-Rücken oder -Ärmel - noch zu vergeben.",href:"/sponsoring#angebot",image:"herren/herren_16",badge:"Noch frei",cta:"Details ansehen"},{id:"werbeflaechen",active:!0,eyebrow:"Werbeflächen",title:"Dein Logo bei jedem Heimspiel",subline:"Banden & Banner direkt am Spielfeldrand.",href:"/sponsoring#werbeflaechen",image:"herren/herren_5",cta:"Flächen ansehen"},{id:"spieltag",active:!0,eyebrow:"Spieltag & Medien",title:"Schon mit kleinem Budget dabei",subline:"Ballspende, Spielpräsentator oder Magazin-Inserat.",href:"/sponsoring#spieltag",image:"herren/herren_14",badge:"Einstieg",cta:"Möglichkeiten ansehen"},{id:"club-500",active:!0,eyebrow:"Club 500",title:"Gemeinsam stark - schon als Fan",subline:"Werde Teil des Club 500 und unterstütze den Verein.",href:"/sponsoring/club-500",image:"herren/herren_6",cta:"Zum Club 500"},{id:"kontakt",active:!0,eyebrow:"Partner werden",title:"Lass uns über Sponsoring reden",subline:"Individuelle Pakete jederzeit möglich - sponsoring@sckw.de.",href:"/sponsoring",image:"herren/herren_16",cta:"Zur Sponsoring-Seite"}],nf=L_.filter(a=>a.active),H_=45;function G_(){const[a,s]=C.useState(0),[u,c]=C.useState(!1),[f,d]=C.useState(!1),v=C.useRef(null),p=nf.length,h=C.useCallback(R=>s((R%p+p)%p),[p]);C.useEffect(()=>{const R=window.matchMedia("(prefers-reduced-motion: reduce)");d(R.matches);const A=()=>d(R.matches);return R.addEventListener?.("change",A),()=>R.removeEventListener?.("change",A)},[]),C.useEffect(()=>{if(u||f||p<=1)return;const R=setInterval(()=>s(A=>(A+1)%p),U_);return()=>clearInterval(R)},[u,f,p]);const g=R=>{v.current=R.touches[0].clientX},x=R=>{if(v.current===null)return;const A=R.changedTouches[0].clientX-v.current;Math.abs(A)>H_&&h(a+(A<0?1:-1)),v.current=null};if(p===0)return null;const S=nf[a],w=ft(S.image);return r.jsxs(Y_,{role:"group","aria-roledescription":"Karussell","aria-label":"Sponsoring-Angebote des SC Konstanz-Wollmatingen",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1),onTouchStart:g,onTouchEnd:x,children:[r.jsxs(P1,{href:`${N_}${S.href}`,target:"_blank",rel:"noopener noreferrer","aria-label":`${S.title} - ${S.cta} (öffnet in neuem Tab)`,$bg:w,children:[r.jsxs($_,{children:[r.jsx(V_,{src:"/logo-transparent.avif",alt:"SC Konstanz-Wollmatingen"}),S.badge&&r.jsx(q_,{children:S.badge})]}),r.jsxs(K_,{children:[r.jsx(Q_,{children:S.eyebrow}),r.jsx(X_,{children:S.title}),r.jsx(Z_,{children:S.subline}),r.jsxs(P_,{children:[S.cta,r.jsx("span",{"aria-hidden":!0,children:"→"})]})]})]},S.id),p>1&&r.jsxs(F_,{children:[r.jsx(O0,{onClick:()=>h(a-1),"aria-label":"Vorheriges Angebot",children:"‹"}),r.jsx(J_,{children:nf.map((R,A)=>r.jsx(W_,{$active:A===a,onClick:()=>h(A),"aria-label":`Angebot ${A+1} von ${p}`,"aria-current":A===a?"true":void 0},R.id))}),r.jsx(O0,{onClick:()=>h(a+1),"aria-label":"Nächstes Angebot",children:"›"})]})]})}const Y_=y.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
`,P1=y.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 340px;
  padding: 26px 32px 58px;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  isolation: isolate;
  background: ${({$bg:a})=>a?`url(${a}) center/cover no-repeat`:"#0b0b0d"};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.94) 0%,
      rgba(0, 0, 0, 0.62) 50%,
      rgba(0, 0, 0, 0.45) 100%
    );
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 52px rgba(0, 0, 0, 0.36);
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: -3px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
    padding: 20px 20px 48px;
    border-radius: 16px;
    gap: 14px;
  }
`,$_=y.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,V_=y.img`
  height: 44px;
  width: auto;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));

  @media (max-width: 480px) {
    height: 36px;
  }
`,q_=y.span`
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 999px;
  color: #fff;
  background: ${eo.colors.primary};
  box-shadow: 0 4px 14px rgba(217, 36, 95, 0.45);
`,K_=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Q_=y.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);

  &::before {
    content: "";
    width: 26px;
    height: 3px;
    border-radius: 3px;
    background: ${eo.colors.primary};
  }
`,X_=y.h2`
  margin: 0;
  font-size: clamp(1.7rem, 4.5vw, 2.5rem);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.6);
  max-width: 16ch;

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 8vw, 2rem);
  }
`,Z_=y.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
  max-width: 42ch;

  @media (max-width: 480px) {
    font-size: 14.5px;
  }
`,P_=y.span`
  margin-top: 10px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 800;
  padding: 12px 22px;
  border-radius: 999px;
  background: #fff;
  color: ${eo.colors.primaryDark};
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);

  span {
    transition: transform 0.2s ease;
  }

  ${P1}:hover & span {
    transform: translateX(4px);
  }
`,F_=y.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,O0=y.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #fff;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.32);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  /* Auf Touch-Geräten wird gewischt - Chevrons ausblenden, spart Platz */
  @media (max-width: 480px) {
    display: none;
  }
`,J_=y.div`
  display: flex;
  align-items: center;
  gap: 2px;
`,W_=y.button`
  position: relative;
  width: ${a=>a.$active?"32px":"24px"};
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${a=>a.$active?"0":"8px"};
    right: ${a=>a.$active?"0":"8px"};
    transform: translateY(-50%);
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, ${a=>a.$active?"0.95":"0.6"});
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transition: background 0.25s ease;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
    border-radius: 6px;
  }
`,I_=ip`
  :root,
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    min-height: 0;
    background: transparent !important;
    text-align: left;
  }
`,e4=y.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`;function t4(){return r.jsxs(r.Fragment,{children:[r.jsx(I_,{}),r.jsx(e4,{children:r.jsx(G_,{})})]})}function n4(){const{pathname:a,hash:s}=on();return C.useEffect(()=>{if(!s){window.scrollTo(0,0);return}const u=decodeURIComponent(s.slice(1));let c=0,f=0,d=0;const v=()=>{const p=document.getElementById(u);p?(p.scrollIntoView({block:"start"}),d=window.setTimeout(()=>p.scrollIntoView({block:"start"}),400)):c++<20&&(f=window.setTimeout(v,100))};return v(),()=>{window.clearTimeout(f),window.clearTimeout(d)}},[a,s]),null}function a4(){return r.jsxs($2,{children:[r.jsx(n4,{}),r.jsxs(x2,{children:[r.jsx(ln,{path:"/",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(Rs,{to:"/sponsoring",replace:!0})]})}),r.jsx(ln,{path:"/sponsoring",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(yw,{})]})}),r.jsx(ln,{path:"/sponsoring-handoff",element:r.jsx(Zw,{})}),r.jsx(ln,{path:"/widget",element:r.jsx(t4,{})}),r.jsx(ln,{path:"/sponsoring/club-500",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(g_,{})]})}),r.jsx(ln,{path:"/sponsoring/pakete",element:r.jsx(Rs,{to:"/sponsoring#angebot",replace:!0})}),r.jsx(ln,{path:"/sponsoring/spielerpatenschaft",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(b_,{})]})}),r.jsx(ln,{path:"/mockup-generator",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(d6,{})]})}),r.jsx(ln,{path:"/renovierung",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(Y5,{})]})}),r.jsx(ln,{path:"*",element:r.jsx(Rs,{to:"/sponsoring",replace:!0})})]})]})}console.log("sckw sponsoring Website loaded");Ay.createRoot(document.getElementById("root")).render(r.jsx(C.StrictMode,{children:r.jsx(zv,{theme:eo,children:r.jsx(a4,{})})}));
