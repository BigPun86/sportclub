(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const y of d.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function u(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(f){if(f.ep)return;f.ep=!0;const d=u(f);fetch(f.href,d)}})();function hy(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var mu={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function my(){if(Ag)return Vr;Ag=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,f,d){var y=null;if(d!==void 0&&(y=""+d),f.key!==void 0&&(y=""+f.key),"key"in f){d={};for(var b in f)b!=="key"&&(d[b]=f[b])}else d=f;return f=d.ref,{$$typeof:l,type:c,key:y,ref:f!==void 0?f:null,props:d}}return Vr.Fragment=s,Vr.jsx=u,Vr.jsxs=u,Vr}var Tg;function gy(){return Tg||(Tg=1,mu.exports=my()),mu.exports}var r=gy(),gu={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function py(){if(Rg)return oe;Rg=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function w(_){return _===null||typeof _!="object"?null:(_=S&&_[S]||_["@@iterator"],typeof _=="function"?_:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,B={};function L(_,Q,P){this.props=_,this.context=Q,this.refs=B,this.updater=P||k}L.prototype.isReactComponent={},L.prototype.setState=function(_,Q){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,Q,"setState")},L.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function V(){}V.prototype=L.prototype;function X(_,Q,P){this.props=_,this.context=Q,this.refs=B,this.updater=P||k}var A=X.prototype=new V;A.constructor=X,M(A,L.prototype),A.isPureReactComponent=!0;var $=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function Y(_,Q,P,J,ee,he){return P=he.ref,{$$typeof:l,type:_,key:Q,ref:P!==void 0?P:null,props:he}}function se(_,Q){return Y(_.type,Q,void 0,void 0,void 0,_.props)}function K(_){return typeof _=="object"&&_!==null&&_.$$typeof===l}function be(_){var Q={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(P){return Q[P]})}var Se=/\/+/g;function Ue(_,Q){return typeof _=="object"&&_!==null&&_.key!=null?be(""+_.key):Q.toString(36)}function Ut(){}function at(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Ut,Ut):(_.status="pending",_.then(function(Q){_.status==="pending"&&(_.status="fulfilled",_.value=Q)},function(Q){_.status==="pending"&&(_.status="rejected",_.reason=Q)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function Ce(_,Q,P,J,ee){var he=typeof _;(he==="undefined"||he==="boolean")&&(_=null);var le=!1;if(_===null)le=!0;else switch(he){case"bigint":case"string":case"number":le=!0;break;case"object":switch(_.$$typeof){case l:case s:le=!0;break;case x:return le=_._init,Ce(le(_._payload),Q,P,J,ee)}}if(le)return ee=ee(_),le=J===""?"."+Ue(_,0):J,$(ee)?(P="",le!=null&&(P=le.replace(Se,"$&/")+"/"),Ce(ee,Q,P,"",function(st){return st})):ee!=null&&(K(ee)&&(ee=se(ee,P+(ee.key==null||_&&_.key===ee.key?"":(""+ee.key).replace(Se,"$&/")+"/")+le)),Q.push(ee)),1;le=0;var Pe=J===""?".":J+":";if($(_))for(var je=0;je<_.length;je++)J=_[je],he=Pe+Ue(J,je),le+=Ce(J,Q,P,he,ee);else if(je=w(_),typeof je=="function")for(_=je.call(_),je=0;!(J=_.next()).done;)J=J.value,he=Pe+Ue(J,je++),le+=Ce(J,Q,P,he,ee);else if(he==="object"){if(typeof _.then=="function")return Ce(at(_),Q,P,J,ee);throw Q=String(_),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return le}function N(_,Q,P){if(_==null)return _;var J=[],ee=0;return Ce(_,J,"","",function(he){return Q.call(P,he,ee++)}),J}function Z(_){if(_._status===-1){var Q=_._result;Q=Q(),Q.then(function(P){(_._status===0||_._status===-1)&&(_._status=1,_._result=P)},function(P){(_._status===0||_._status===-1)&&(_._status=2,_._result=P)}),_._status===-1&&(_._status=0,_._result=Q)}if(_._status===1)return _._result.default;throw _._result}var ne=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function ce(){}return oe.Children={map:N,forEach:function(_,Q,P){N(_,function(){Q.apply(this,arguments)},P)},count:function(_){var Q=0;return N(_,function(){Q++}),Q},toArray:function(_){return N(_,function(Q){return Q})||[]},only:function(_){if(!K(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},oe.Component=L,oe.Fragment=u,oe.Profiler=f,oe.PureComponent=X,oe.StrictMode=c,oe.Suspense=h,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(_){return H.H.useMemoCache(_)}},oe.cache=function(_){return function(){return _.apply(null,arguments)}},oe.cloneElement=function(_,Q,P){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var J=M({},_.props),ee=_.key,he=void 0;if(Q!=null)for(le in Q.ref!==void 0&&(he=void 0),Q.key!==void 0&&(ee=""+Q.key),Q)!F.call(Q,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&Q.ref===void 0||(J[le]=Q[le]);var le=arguments.length-2;if(le===1)J.children=P;else if(1<le){for(var Pe=Array(le),je=0;je<le;je++)Pe[je]=arguments[je+2];J.children=Pe}return Y(_.type,ee,void 0,void 0,he,J)},oe.createContext=function(_){return _={$$typeof:y,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:d,_context:_},_},oe.createElement=function(_,Q,P){var J,ee={},he=null;if(Q!=null)for(J in Q.key!==void 0&&(he=""+Q.key),Q)F.call(Q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ee[J]=Q[J]);var le=arguments.length-2;if(le===1)ee.children=P;else if(1<le){for(var Pe=Array(le),je=0;je<le;je++)Pe[je]=arguments[je+2];ee.children=Pe}if(_&&_.defaultProps)for(J in le=_.defaultProps,le)ee[J]===void 0&&(ee[J]=le[J]);return Y(_,he,void 0,void 0,null,ee)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(_){return{$$typeof:b,render:_}},oe.isValidElement=K,oe.lazy=function(_){return{$$typeof:x,_payload:{_status:-1,_result:_},_init:Z}},oe.memo=function(_,Q){return{$$typeof:g,type:_,compare:Q===void 0?null:Q}},oe.startTransition=function(_){var Q=H.T,P={};H.T=P;try{var J=_(),ee=H.S;ee!==null&&ee(P,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ce,ne)}catch(he){ne(he)}finally{H.T=Q}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(_){return H.H.use(_)},oe.useActionState=function(_,Q,P){return H.H.useActionState(_,Q,P)},oe.useCallback=function(_,Q){return H.H.useCallback(_,Q)},oe.useContext=function(_){return H.H.useContext(_)},oe.useDebugValue=function(){},oe.useDeferredValue=function(_,Q){return H.H.useDeferredValue(_,Q)},oe.useEffect=function(_,Q,P){var J=H.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(_,Q)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(_,Q,P){return H.H.useImperativeHandle(_,Q,P)},oe.useInsertionEffect=function(_,Q){return H.H.useInsertionEffect(_,Q)},oe.useLayoutEffect=function(_,Q){return H.H.useLayoutEffect(_,Q)},oe.useMemo=function(_,Q){return H.H.useMemo(_,Q)},oe.useOptimistic=function(_,Q){return H.H.useOptimistic(_,Q)},oe.useReducer=function(_,Q,P){return H.H.useReducer(_,Q,P)},oe.useRef=function(_){return H.H.useRef(_)},oe.useState=function(_){return H.H.useState(_)},oe.useSyncExternalStore=function(_,Q,P){return H.H.useSyncExternalStore(_,Q,P)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.1.0",oe}var Mg;function pf(){return Mg||(Mg=1,gu.exports=py()),gu.exports}var C=pf();const _e=hy(C);var pu={exports:{}},qr={},bu={exports:{}},xu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function by(){return Dg||(Dg=1,function(l){function s(N,Z){var ne=N.length;N.push(Z);e:for(;0<ne;){var ce=ne-1>>>1,_=N[ce];if(0<f(_,Z))N[ce]=Z,N[ne]=_,ne=ce;else break e}}function u(N){return N.length===0?null:N[0]}function c(N){if(N.length===0)return null;var Z=N[0],ne=N.pop();if(ne!==Z){N[0]=ne;e:for(var ce=0,_=N.length,Q=_>>>1;ce<Q;){var P=2*(ce+1)-1,J=N[P],ee=P+1,he=N[ee];if(0>f(J,ne))ee<_&&0>f(he,J)?(N[ce]=he,N[ee]=ne,ce=ee):(N[ce]=J,N[P]=ne,ce=P);else if(ee<_&&0>f(he,ne))N[ce]=he,N[ee]=ne,ce=ee;else break e}}return Z}function f(N,Z){var ne=N.sortIndex-Z.sortIndex;return ne!==0?ne:N.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var y=Date,b=y.now();l.unstable_now=function(){return y.now()-b}}var h=[],g=[],x=1,S=null,w=3,k=!1,M=!1,B=!1,L=!1,V=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function $(N){for(var Z=u(g);Z!==null;){if(Z.callback===null)c(g);else if(Z.startTime<=N)c(g),Z.sortIndex=Z.expirationTime,s(h,Z);else break;Z=u(g)}}function H(N){if(B=!1,$(N),!M)if(u(h)!==null)M=!0,F||(F=!0,Ue());else{var Z=u(g);Z!==null&&Ce(H,Z.startTime-N)}}var F=!1,Y=-1,se=5,K=-1;function be(){return L?!0:!(l.unstable_now()-K<se)}function Se(){if(L=!1,F){var N=l.unstable_now();K=N;var Z=!0;try{e:{M=!1,B&&(B=!1,X(Y),Y=-1),k=!0;var ne=w;try{t:{for($(N),S=u(h);S!==null&&!(S.expirationTime>N&&be());){var ce=S.callback;if(typeof ce=="function"){S.callback=null,w=S.priorityLevel;var _=ce(S.expirationTime<=N);if(N=l.unstable_now(),typeof _=="function"){S.callback=_,$(N),Z=!0;break t}S===u(h)&&c(h),$(N)}else c(h);S=u(h)}if(S!==null)Z=!0;else{var Q=u(g);Q!==null&&Ce(H,Q.startTime-N),Z=!1}}break e}finally{S=null,w=ne,k=!1}Z=void 0}}finally{Z?Ue():F=!1}}}var Ue;if(typeof A=="function")Ue=function(){A(Se)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,at=Ut.port2;Ut.port1.onmessage=Se,Ue=function(){at.postMessage(null)}}else Ue=function(){V(Se,0)};function Ce(N,Z){Y=V(function(){N(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(N){N.callback=null},l.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<N?Math.floor(1e3/N):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(N){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var ne=w;w=Z;try{return N()}finally{w=ne}},l.unstable_requestPaint=function(){L=!0},l.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=w;w=N;try{return Z()}finally{w=ne}},l.unstable_scheduleCallback=function(N,Z,ne){var ce=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ce+ne:ce):ne=ce,N){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=ne+_,N={id:x++,callback:Z,priorityLevel:N,startTime:ne,expirationTime:_,sortIndex:-1},ne>ce?(N.sortIndex=ne,s(g,N),u(h)===null&&N===u(g)&&(B?(X(Y),Y=-1):B=!0,Ce(H,ne-ce))):(N.sortIndex=_,s(h,N),M||k||(M=!0,F||(F=!0,Ue()))),N},l.unstable_shouldYield=be,l.unstable_wrapCallback=function(N){var Z=w;return function(){var ne=w;w=Z;try{return N.apply(this,arguments)}finally{w=ne}}}}(xu)),xu}var kg;function xy(){return kg||(kg=1,bu.exports=by()),bu.exports}var yu={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function yy(){if(Og)return ut;Og=1;var l=pf();function s(h){var g="https://react.dev/errors/"+h;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(h,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:h,containerInfo:g,implementation:x}}var y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(h,g){if(h==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ut.createPortal=function(h,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return d(h,g,null,x)},ut.flushSync=function(h){var g=y.T,x=c.p;try{if(y.T=null,c.p=2,h)return h()}finally{y.T=g,c.p=x,c.d.f()}},ut.preconnect=function(h,g){typeof h=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(h,g))},ut.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},ut.preinit=function(h,g){if(typeof h=="string"&&g&&typeof g.as=="string"){var x=g.as,S=b(x,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?c.d.S(h,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:k}):x==="script"&&c.d.X(h,{crossOrigin:S,integrity:w,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ut.preinitModule=function(h,g){if(typeof h=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=b(g.as,g.crossOrigin);c.d.M(h,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(h)},ut.preload=function(h,g){if(typeof h=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=b(x,g.crossOrigin);c.d.L(h,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ut.preloadModule=function(h,g){if(typeof h=="string")if(g){var x=b(g.as,g.crossOrigin);c.d.m(h,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(h)},ut.requestFormReset=function(h){c.d.r(h)},ut.unstable_batchedUpdates=function(h,g){return h(g)},ut.useFormState=function(h,g,x){return y.H.useFormState(h,g,x)},ut.useFormStatus=function(){return y.H.useHostTransitionStatus()},ut.version="19.1.0",ut}var Bg;function vy(){if(Bg)return yu.exports;Bg=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),yu.exports=yy(),yu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Sy(){if(Ng)return qr;Ng=1;var l=xy(),s=pf(),u=vy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return b(i),e;if(o===a)return b(i),t;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=i,a=o;else{for(var m=!1,p=i.child;p;){if(p===n){m=!0,n=i,a=o;break}if(p===a){m=!0,a=i,n=o;break}p=p.sibling}if(!m){for(p=o.child;p;){if(p===n){m=!0,n=o,a=i;break}if(p===a){m=!0,a=o,n=i;break}p=p.sibling}if(!m)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),A=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case L:return"Profiler";case B:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case A:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var Ce=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ce=[],_=-1;function Q(e){return{current:e}}function P(e){0>_||(e.current=ce[_],ce[_]=null,_--)}function J(e,t){_++,ce[_]=e.current,e.current=t}var ee=Q(null),he=Q(null),le=Q(null),Pe=Q(null);function je(e,t){switch(J(le,t),J(he,e),J(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ng(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ng(t),e=ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(ee),J(ee,e)}function st(){P(ee),P(he),P(le)}function ma(e){e.memoizedState!==null&&J(Pe,e);var t=ee.current,n=ag(t,e.type);t!==n&&(J(he,e),J(ee,n))}function xn(e){he.current===e&&(P(ee),P(he)),Pe.current===e&&(P(Pe),Ur._currentValue=ne)}var Lt=Object.prototype.hasOwnProperty,eo=l.unstable_scheduleCallback,to=l.unstable_cancelCallback,Q1=l.unstable_shouldYield,K1=l.unstable_requestPaint,cn=l.unstable_now,X1=l.unstable_getCurrentPriorityLevel,Nf=l.unstable_ImmediatePriority,Uf=l.unstable_UserBlockingPriority,ni=l.unstable_NormalPriority,Z1=l.unstable_LowPriority,Lf=l.unstable_IdlePriority,P1=l.log,J1=l.unstable_setDisableYieldValue,Ql=null,Et=null;function Hn(e){if(typeof P1=="function"&&J1(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Ql,e)}catch{}}var zt=Math.clz32?Math.clz32:I1,F1=Math.log,W1=Math.LN2;function I1(e){return e>>>=0,e===0?32:31-(F1(e)/W1|0)|0}var ai=256,li=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ri(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~o,a!==0?i=ga(a):(m&=p,m!==0?i=ga(m):n||(n=p&~e,n!==0&&(i=ga(n))))):(p=a&~o,p!==0?i=ga(p):m!==0?i=ga(m):n||(n=a&~e,n!==0&&(i=ga(n)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:i}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function eb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hf(){var e=ai;return ai<<=1,(ai&4194048)===0&&(ai=256),e}function Gf(){var e=li;return li<<=1,(li&62914560)===0&&(li=4194304),e}function no(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tb(e,t,n,a,i,o){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,j=e.expirationTimes,R=e.hiddenUpdates;for(n=m&~n;0<n;){var U=31-zt(n),q=1<<U;p[U]=0,j[U]=-1;var D=R[U];if(D!==null)for(R[U]=null,U=0;U<D.length;U++){var O=D[U];O!==null&&(O.lane&=-536870913)}n&=~q}a!==0&&Yf(e,a,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function Yf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-zt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-zt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function nb(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Gn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Gn,gt="__reactProps$"+Gn,Ga="__reactContainer$"+Gn,ro="__reactEvents$"+Gn,ab="__reactListeners$"+Gn,lb="__reactHandles$"+Gn,$f="__reactResources$"+Gn,Zl="__reactMarker$"+Gn;function io(e){delete e[ot],delete e[gt],delete e[ro],delete e[ab],delete e[lb]}function Ya(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ga]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sg(e);e!==null;){if(n=e[ot])return n;e=sg(e)}return t}e=n,n=e.parentNode}return null}function Va(e){if(e=e[ot]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function qa(e){var t=e[$f];return t||(t=e[$f]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Zl]=!0}var Qf=new Set,Kf={};function pa(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(Kf[e]=t,e=0;e<t.length;e++)Qf.add(t[e])}var rb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},Zf={};function ib(e){return Lt.call(Zf,e)?!0:Lt.call(Xf,e)?!1:rb.test(e)?Zf[e]=!0:(Xf[e]=!0,!1)}function ii(e,t,n){if(ib(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function si(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function yn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var so,Pf;function Qa(e){if(so===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);so=t&&t[1]||"",Pf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+so+e+Pf}var oo=!1;function co(e,t){if(!e||oo)return"";oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(O){var D=O}Reflect.construct(e,[],q)}else{try{q.call()}catch(O){D=O}e.call(q.prototype)}}else{try{throw Error()}catch(O){D=O}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(O){if(O&&D&&typeof O.stack=="string")return[O.stack,D.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),m=o[0],p=o[1];if(m&&p){var j=m.split(`
`),R=p.split(`
`);for(i=a=0;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(a===j.length||i===R.length)for(a=j.length-1,i=R.length-1;1<=a&&0<=i&&j[a]!==R[i];)i--;for(;1<=a&&0<=i;a--,i--)if(j[a]!==R[i]){if(a!==1||i!==1)do if(a--,i--,0>i||j[a]!==R[i]){var U=`
`+j[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=i);break}}}finally{oo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qa(n):""}function sb(e){switch(e.tag){case 26:case 27:case 5:return Qa(e.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 15:return co(e.type,!1);case 11:return co(e.type.render,!1);case 1:return co(e.type,!0);case 31:return Qa("Activity");default:return""}}function Jf(e){try{var t="";do t+=sb(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ob(e){var t=Ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(m){a=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=ob(e))}function Wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ff(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cb=/[\n"\\]/g;function Gt(e){return e.replace(cb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function uo(e,t,n,a,i,o,m,p){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?fo(e,m,Ht(t)):n!=null?fo(e,m,Ht(n)):a!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Ht(p):e.removeAttribute("name")}function If(e,t,n,a,i,o,m,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function fo(e,t,n){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ka(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ed(e,t,n){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ht(n):""}function td(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(Ce(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ht(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ub=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ub.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ad(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&nd(e,i,a)}else for(var o in t)t.hasOwnProperty(o)&&nd(e,o,t[o])}function ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),db=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(e){return db.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var mo=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,Pa=null;function ld(e){var t=Va(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(uo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[gt]||null;if(!i)throw Error(c(90));uo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Wf(a)}break e;case"textarea":ed(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ka(e,!!n.multiple,t,!1)}}}var po=!1;function rd(e,t,n){if(po)return e(t,n);po=!0;try{var a=e(t);return a}finally{if(po=!1,(Za!==null||Pa!==null)&&(Pi(),Za&&(t=Za,e=Pa,Pa=Za=null,ld(t),e)))for(t=0;t<e.length;t++)ld(e[t])}}function Jl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[gt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=!1;if(vn)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{bo=!1}var Yn=null,xo=null,fi=null;function id(){if(fi)return fi;var e,t=xo,n=t.length,a,i="value"in Yn?Yn.value:Yn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var m=n-e;for(a=1;a<=m&&t[n-a]===i[o-a];a++);return fi=i.slice(e,1<a?1-a:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function sd(){return!1}function pt(e){function t(n,a,i,o,m){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:sd,this.isPropagationStopped=sd,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=pt(ba),Wl=x({},ba,{view:0,detail:0}),hb=pt(Wl),yo,vo,Il,gi=x({},Wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Il&&(Il&&e.type==="mousemove"?(yo=e.screenX-Il.screenX,vo=e.screenY-Il.screenY):vo=yo=0,Il=e),yo)},movementY:function(e){return"movementY"in e?e.movementY:vo}}),od=pt(gi),mb=x({},gi,{dataTransfer:0}),gb=pt(mb),pb=x({},Wl,{relatedTarget:0}),So=pt(pb),bb=x({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),xb=pt(bb),yb=x({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vb=pt(yb),Sb=x({},ba,{data:0}),cd=pt(Sb),jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_b[e])?!!t[e]:!1}function jo(){return Eb}var zb=x({},Wl,{key:function(e){if(e.key){var t=jb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jo,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cb=pt(zb),Ab=x({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=pt(Ab),Tb=x({},Wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jo}),Rb=pt(Tb),Mb=x({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Db=pt(Mb),kb=x({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ob=pt(kb),Bb=x({},ba,{newState:0,oldState:0}),Nb=pt(Bb),Ub=[9,13,27,32],wo=vn&&"CompositionEvent"in window,er=null;vn&&"documentMode"in document&&(er=document.documentMode);var Lb=vn&&"TextEvent"in window&&!er,fd=vn&&(!wo||er&&8<er&&11>=er),dd=" ",hd=!1;function md(e,t){switch(e){case"keyup":return Ub.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function Hb(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(hd=!0,dd);case"textInput":return e=t.data,e===dd&&hd?null:e;default:return null}}function Gb(e,t){if(Ja)return e==="compositionend"||!wo&&md(e,t)?(e=id(),fi=xo=Yn=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fd&&t.locale!=="ko"?null:t.data;default:return null}}var Yb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yb[e.type]:t==="textarea"}function bd(e,t,n,a){Za?Pa?Pa.push(a):Pa=[a]:Za=a,t=ts(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var tr=null,nr=null;function Vb(e){Fm(e,0)}function pi(e){var t=Pl(e);if(Wf(t))return e}function xd(e,t){if(e==="change")return t}var yd=!1;if(vn){var _o;if(vn){var Eo="oninput"in document;if(!Eo){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),Eo=typeof vd.oninput=="function"}_o=Eo}else _o=!1;yd=_o&&(!document.documentMode||9<document.documentMode)}function Sd(){tr&&(tr.detachEvent("onpropertychange",jd),nr=tr=null)}function jd(e){if(e.propertyName==="value"&&pi(nr)){var t=[];bd(t,nr,e,go(e)),rd(Vb,t)}}function qb(e,t,n){e==="focusin"?(Sd(),tr=t,nr=n,tr.attachEvent("onpropertychange",jd)):e==="focusout"&&Sd()}function $b(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pi(nr)}function Qb(e,t){if(e==="click")return pi(t)}function Kb(e,t){if(e==="input"||e==="change")return pi(t)}function Xb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Xb;function ar(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Lt.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var n=wd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wd(n)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Zb=vn&&"documentMode"in document&&11>=document.documentMode,Fa=null,Co=null,lr=null,Ao=!1;function Cd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ao||Fa==null||Fa!==ci(a)||(a=Fa,"selectionStart"in a&&zo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),lr&&ar(lr,a)||(lr=a,a=ts(Co,"onSelect"),0<a.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Fa)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wa={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},To={},Ad={};vn&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function ya(e){if(To[e])return To[e];if(!Wa[e])return e;var t=Wa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ad)return To[e]=t[n];return e}var Td=ya("animationend"),Rd=ya("animationiteration"),Md=ya("animationstart"),Pb=ya("transitionrun"),Jb=ya("transitionstart"),Fb=ya("transitioncancel"),Dd=ya("transitionend"),kd=new Map,Ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ro.push("scrollEnd");function tn(e,t){kd.set(e,t),pa(t,[e])}var Od=new WeakMap;function Yt(e,t){if(typeof e=="object"&&e!==null){var n=Od.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Jf(t)},Od.set(e,t),t)}return{value:e,source:t,stack:Jf(t)}}var Vt=[],Ia=0,Mo=0;function bi(){for(var e=Ia,t=Mo=Ia=0;t<e;){var n=Vt[t];Vt[t++]=null;var a=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var o=Vt[t];if(Vt[t++]=null,a!==null&&i!==null){var m=a.pending;m===null?i.next=i:(i.next=m.next,m.next=i),a.pending=i}o!==0&&Bd(n,i,o)}}function xi(e,t,n,a){Vt[Ia++]=e,Vt[Ia++]=t,Vt[Ia++]=n,Vt[Ia++]=a,Mo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Do(e,t,n,a){return xi(e,t,n,a),yi(e)}function el(e,t){return xi(e,null,null,t),yi(e)}function Bd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-zt(n),e=o.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),o):null}function yi(e){if(50<Tr)throw Tr=0,Lc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function Wb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,a){return new Wb(e,t,n,a)}function ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,a,i,o){var m=0;if(a=e,typeof e=="function")ko(e)&&(m=1);else if(typeof e=="string")m=ey(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=At(31,n,t,i),e.elementType=K,e.lanes=o,e;case M:return va(n.children,i,o,t);case B:m=8,i|=24;break;case L:return e=At(12,n,t,i|2),e.elementType=L,e.lanes=o,e;case H:return e=At(13,n,t,i),e.elementType=H,e.lanes=o,e;case F:return e=At(19,n,t,i),e.elementType=F,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case A:m=10;break e;case X:m=9;break e;case $:m=11;break e;case Y:m=14;break e;case se:m=16,a=null;break e}m=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=At(m,n,t,i),t.elementType=e,t.type=a,t.lanes=o,t}function va(e,t,n,a){return e=At(7,e,a,t),e.lanes=n,e}function Oo(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Bo(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nl=[],al=0,Si=null,ji=0,qt=[],$t=0,Sa=null,jn=1,wn="";function ja(e,t){nl[al++]=ji,nl[al++]=Si,Si=e,ji=t}function Ud(e,t,n){qt[$t++]=jn,qt[$t++]=wn,qt[$t++]=Sa,Sa=e;var a=jn;e=wn;var i=32-zt(a)-1;a&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var m=i-i%5;o=(a&(1<<m)-1).toString(32),a>>=m,i-=m,jn=1<<32-zt(t)+i|n<<i|a,wn=o+e}else jn=1<<o|n<<i|a,wn=e}function No(e){e.return!==null&&(ja(e,1),Ud(e,1,0))}function Uo(e){for(;e===Si;)Si=nl[--al],nl[al]=null,ji=nl[--al],nl[al]=null;for(;e===Sa;)Sa=qt[--$t],qt[$t]=null,wn=qt[--$t],qt[$t]=null,jn=qt[--$t],qt[$t]=null}var ft=null,He=null,ve=!1,wa=null,un=!1,Lo=Error(c(519));function _a(e){var t=Error(c(418,""));throw sr(Yt(t,e)),Lo}function Ld(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ot]=e,t[gt]=a,n){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(n=0;n<Mr.length;n++)ge(Mr[n],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),If(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),oi(t);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),td(t,a.value,a.defaultValue,a.children),oi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||tg(t.textContent,n)?(a.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),a.onScroll!=null&&ge("scroll",t),a.onScrollEnd!=null&&ge("scrollend",t),a.onClick!=null&&(t.onclick=ns),t=!0):t=!1,t||_a(e)}function Hd(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 13:un=!1;return;case 27:case 3:un=!0;return;default:ft=ft.return}}function rr(e){if(e!==ft)return!1;if(!ve)return Hd(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||eu(e.type,e.memoizedProps)),n=!n),n&&He&&_a(e),Hd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,aa(e.type)?(e=lu,lu=null,He=e):He=t):He=ft?an(e.stateNode.nextSibling):null;return!0}function ir(){He=ft=null,ve=!1}function Gd(){var e=wa;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),wa=null),e}function sr(e){wa===null?wa=[e]:wa.push(e)}var Ho=Q(null),Ea=null,_n=null;function Vn(e,t,n){J(Ho,t._currentValue),t._currentValue=n}function En(e){e._currentValue=Ho.current,P(Ho)}function Go(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Yo(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var m=i.child;o=o.firstContext;e:for(;o!==null;){var p=o;o=i;for(var j=0;j<t.length;j++)if(p.context===t[j]){o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),Go(o.return,n,e),a||(m=null);break e}o=p.next}}else if(i.tag===18){if(m=i.return,m===null)throw Error(c(341));m.lanes|=n,o=m.alternate,o!==null&&(o.lanes|=n),Go(m,n,e),m=null}else m=i.child;if(m!==null)m.return=i;else for(m=i;m!==null;){if(m===e){m=null;break}if(i=m.sibling,i!==null){i.return=m.return,m=i;break}m=m.return}i=m}}function or(e,t,n,a){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var m=i.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var p=i.type;Ct(i.pendingProps.value,m.value)||(e!==null?e.push(p):e=[p])}}else if(i===Pe.current){if(m=i.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ur):e=[Ur])}i=i.return}e!==null&&Yo(t,e,n,a),t.flags|=262144}function wi(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){Ea=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Yd(Ea,e)}function _i(e,t){return Ea===null&&za(e),Yd(e,t)}function Yd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_n===null){if(e===null)throw Error(c(308));_n=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _n=_n.next=t;return n}var Ib=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ex=l.unstable_scheduleCallback,tx=l.unstable_NormalPriority,Xe={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vo(){return{controller:new Ib,data:new Map,refCount:0}}function cr(e){e.refCount--,e.refCount===0&&ex(tx,function(){e.controller.abort()})}var ur=null,qo=0,ll=0,rl=null;function nx(e,t){if(ur===null){var n=ur=[];qo=0,ll=Qc(),rl={status:"pending",value:void 0,then:function(a){n.push(a)}}}return qo++,t.then(Vd,Vd),t}function Vd(){if(--qo===0&&ur!==null){rl!==null&&(rl.status="fulfilled");var e=ur;ur=null,ll=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ax(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var qd=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&nx(e,t),qd!==null&&qd(e,t)};var Ca=Q(null);function $o(){var e=Ca.current;return e!==null?e:De.pooledCache}function Ei(e,t){t===null?J(Ca,Ca.current):J(Ca,t.pool)}function $d(){var e=$o();return e===null?null:{parent:Xe._currentValue,pool:e}}var fr=Error(c(460)),Qd=Error(c(474)),zi=Error(c(542)),Qo={then:function(){}};function Kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ci(){}function Xd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ci,Ci),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(Ci,Ci);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw dr=t,fr}}var dr=null;function Zd(){if(dr===null)throw Error(c(459));var e=dr;return dr=null,e}function Pd(e){if(e===fr||e===zi)throw Error(c(483))}var qn=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=yi(e),Bd(e,null,n),t}return xi(e,a,t,n),yi(e)}function hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vf(e,n)}}function Zo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?i=o=m:o=o.next=m,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Po=!1;function mr(){if(Po){var e=rl;if(e!==null)throw e}}function gr(e,t,n,a){Po=!1;var i=e.updateQueue;qn=!1;var o=i.firstBaseUpdate,m=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var j=p,R=j.next;j.next=null,m===null?o=R:m.next=R,m=j;var U=e.alternate;U!==null&&(U=U.updateQueue,p=U.lastBaseUpdate,p!==m&&(p===null?U.firstBaseUpdate=R:p.next=R,U.lastBaseUpdate=j))}if(o!==null){var q=i.baseState;m=0,U=R=j=null,p=o;do{var D=p.lane&-536870913,O=D!==p.lane;if(O?(xe&D)===D:(a&D)===D){D!==0&&D===ll&&(Po=!0),U!==null&&(U=U.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ie=e,ae=p;D=t;var Re=n;switch(ae.tag){case 1:if(ie=ae.payload,typeof ie=="function"){q=ie.call(Re,q,D);break e}q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ae.payload,D=typeof ie=="function"?ie.call(Re,q,D):ie,D==null)break e;q=x({},q,D);break e;case 2:qn=!0}}D=p.callback,D!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[D]:O.push(D))}else O={lane:D,tag:p.tag,payload:p.payload,callback:p.callback,next:null},U===null?(R=U=O,j=q):U=U.next=O,m|=D;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;O=p,p=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);U===null&&(j=q),i.baseState=j,i.firstBaseUpdate=R,i.lastBaseUpdate=U,o===null&&(i.shared.lanes=0),In|=m,e.lanes=m,e.memoizedState=q}}function Jd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Fd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Jd(n[e],t)}var il=Q(null),Ai=Q(0);function Wd(e,t){e=Dn,J(Ai,e),J(il,t),Dn=e|t.baseLanes}function Jo(){J(Ai,Dn),J(il,il.current)}function Fo(){Dn=Ai.current,P(il),P(Ai)}var Kn=0,fe=null,Ae=null,$e=null,Ti=!1,sl=!1,Aa=!1,Ri=0,pr=0,ol=null,lx=0;function Ve(){throw Error(c(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Io(e,t,n,a,i,o){return Kn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Bh:Nh,Aa=!1,o=n(a,i),Aa=!1,sl&&(o=eh(t,n,a,i)),Id(e),o}function Id(e){N.H=Ni;var t=Ae!==null&&Ae.next!==null;if(Kn=0,$e=Ae=fe=null,Ti=!1,pr=0,ol=null,t)throw Error(c(300));e===null||Fe||(e=e.dependencies,e!==null&&wi(e)&&(Fe=!0))}function eh(e,t,n,a){fe=e;var i=0;do{if(sl&&(ol=null),pr=0,sl=!1,25<=i)throw Error(c(301));if(i+=1,$e=Ae=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}N.H=fx,o=t(n,a)}while(sl);return o}function rx(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?br(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(fe.flags|=1024),t}function ec(){var e=Ri!==0;return Ri=0,e}function tc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function nc(e){if(Ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ti=!1}Kn=0,$e=Ae=fe=null,sl=!1,pr=Ri=0,ol=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?fe.memoizedState=$e=e:$e=$e.next=e,$e}function Qe(){if(Ae===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=$e===null?fe.memoizedState:$e.next;if(t!==null)$e=t,Ae=e;else{if(e===null)throw fe.alternate===null?Error(c(467)):Error(c(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},$e===null?fe.memoizedState=$e=e:$e=$e.next=e}return $e}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function br(e){var t=pr;return pr+=1,ol===null&&(ol=[]),e=Xd(ol,e,t),t=fe,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Bh:Nh),e}function Mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return br(e);if(e.$$typeof===A)return ct(e)}throw Error(c(438,String(e)))}function lc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ac(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=be;return t.index++,n}function zn(e,t){return typeof t=="function"?t(e):t}function Di(e){var t=Qe();return rc(t,Ae,e)}function rc(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var i=e.baseQueue,o=a.pending;if(o!==null){if(i!==null){var m=i.next;i.next=o.next,o.next=m}t.baseQueue=i=o,a.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var p=m=null,j=null,R=t,U=!1;do{var q=R.lane&-536870913;if(q!==R.lane?(xe&q)===q:(Kn&q)===q){var D=R.revertLane;if(D===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),q===ll&&(U=!0);else if((Kn&D)===D){R=R.next,D===ll&&(U=!0);continue}else q={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(p=j=q,m=o):j=j.next=q,fe.lanes|=D,In|=D;q=R.action,Aa&&n(o,q),o=R.hasEagerState?R.eagerState:n(o,q)}else D={lane:q,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(p=j=D,m=o):j=j.next=D,fe.lanes|=q,In|=q;R=R.next}while(R!==null&&R!==t);if(j===null?m=o:j.next=p,!Ct(o,e.memoizedState)&&(Fe=!0,U&&(n=rl,n!==null)))throw n;e.memoizedState=o,e.baseState=m,e.baseQueue=j,a.lastRenderedState=o}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ic(e){var t=Qe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var m=i=i.next;do o=e(o,m.action),m=m.next;while(m!==i);Ct(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function th(e,t,n){var a=fe,i=Qe(),o=ve;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var m=!Ct((Ae||i).memoizedState,n);m&&(i.memoizedState=n,Fe=!0),i=i.queue;var p=lh.bind(null,a,i,e);if(xr(2048,8,p,[e]),i.getSnapshot!==t||m||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,cl(9,ki(),ah.bind(null,a,i,n,t),null),De===null)throw Error(c(349));o||(Kn&124)!==0||nh(a,t,n)}return n}function nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=ac(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ah(e,t,n,a){t.value=n,t.getSnapshot=a,rh(t)&&ih(e)}function lh(e,t,n){return n(function(){rh(t)&&ih(e)})}function rh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function ih(e){var t=el(e,2);t!==null&&kt(t,e,2)}function sc(e){var t=bt();if(typeof e=="function"){var n=e;if(e=n(),Aa){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:e},t}function sh(e,t,n,a){return e.baseState=n,rc(e,Ae,typeof a=="function"?a:zn)}function ix(e,t,n,a,i){if(Bi(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};N.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,oh(t,o)):(o.next=n.next,t.pending=n.next=o)}}function oh(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var o=N.T,m={};N.T=m;try{var p=n(i,a),j=N.S;j!==null&&j(m,p),ch(e,t,p)}catch(R){oc(e,t,R)}finally{N.T=o}}else try{o=n(i,a),ch(e,t,o)}catch(R){oc(e,t,R)}}function ch(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){uh(e,t,a)},function(a){return oc(e,t,a)}):uh(e,t,n)}function uh(e,t,n){t.status="fulfilled",t.value=n,fh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oh(e,n)))}function oc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,fh(t),t=t.next;while(t!==a)}e.action=null}function fh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dh(e,t){return t}function hh(e,t){if(ve){var n=De.formState;if(n!==null){e:{var a=fe;if(ve){if(He){t:{for(var i=He,o=un;i.nodeType!==8;){if(!o){i=null;break t}if(i=an(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){He=an(i.nextSibling),a=i.data==="F!";break e}}_a(a)}a=!1}a&&(t=n[0])}}return n=bt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dh,lastRenderedState:t},n.queue=a,n=Dh.bind(null,fe,a),a.dispatch=n,a=sc(!1),o=hc.bind(null,fe,!1,a.queue),a=bt(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=ix.bind(null,fe,i,o,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function mh(e){var t=Qe();return gh(t,Ae,e)}function gh(e,t,n){if(t=rc(e,t,dh)[0],e=Di(zn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=br(t)}catch(m){throw m===fr?zi:m}else a=t;t=Qe();var i=t.queue,o=i.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,cl(9,ki(),sx.bind(null,i,n),null)),[a,o,e]}function sx(e,t){e.action=t}function ph(e){var t=Qe(),n=Ae;if(n!==null)return gh(t,n,e);Qe(),t=t.memoizedState,n=Qe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function cl(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=fe.updateQueue,t===null&&(t=ac(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ki(){return{destroy:void 0,resource:void 0}}function bh(){return Qe().memoizedState}function Oi(e,t,n,a){var i=bt();a=a===void 0?null:a,fe.flags|=e,i.memoizedState=cl(1|t,ki(),n,a)}function xr(e,t,n,a){var i=Qe();a=a===void 0?null:a;var o=i.memoizedState.inst;Ae!==null&&a!==null&&Wo(a,Ae.memoizedState.deps)?i.memoizedState=cl(t,o,n,a):(fe.flags|=e,i.memoizedState=cl(1|t,o,n,a))}function xh(e,t){Oi(8390656,8,e,t)}function yh(e,t){xr(2048,8,e,t)}function vh(e,t){return xr(4,2,e,t)}function Sh(e,t){return xr(4,4,e,t)}function jh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,n){n=n!=null?n.concat([e]):null,xr(4,4,jh.bind(null,t,e),n)}function cc(){}function _h(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Wo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Eh(e,t){var n=Qe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Wo(t,a[1]))return a[0];if(a=e(),Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[a,t],a}function uc(e,t,n){return n===void 0||(Kn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Am(),fe.lanes|=e,In|=e,n)}function zh(e,t,n,a){return Ct(n,t)?n:il.current!==null?(e=uc(e,n,a),Ct(e,t)||(Fe=!0),e):(Kn&42)===0?(Fe=!0,e.memoizedState=n):(e=Am(),fe.lanes|=e,In|=e,t)}function Ch(e,t,n,a,i){var o=Z.p;Z.p=o!==0&&8>o?o:8;var m=N.T,p={};N.T=p,hc(e,!1,t,n);try{var j=i(),R=N.S;if(R!==null&&R(p,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var U=ax(j,a);yr(e,t,U,Dt(e))}else yr(e,t,a,Dt(e))}catch(q){yr(e,t,{then:function(){},status:"rejected",reason:q},Dt())}finally{Z.p=o,N.T=m}}function ox(){}function fc(e,t,n,a){if(e.tag!==5)throw Error(c(476));var i=Ah(e).queue;Ch(e,i,t,ne,n===null?ox:function(){return Th(e),n(a)})}function Ah(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Th(e){var t=Ah(e).next.queue;yr(e,t,{},Dt())}function dc(){return ct(Ur)}function Rh(){return Qe().memoizedState}function Mh(){return Qe().memoizedState}function cx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=$n(n);var a=Qn(t,e,n);a!==null&&(kt(a,t,n),hr(a,t,n)),t={cache:Vo()},e.payload=t;return}t=t.return}}function ux(e,t,n){var a=Dt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)?kh(t,n):(n=Do(e,t,n,a),n!==null&&(kt(n,e,a),Oh(n,t,a)))}function Dh(e,t,n){var a=Dt();yr(e,t,n,a)}function yr(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))kh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,p=o(m,n);if(i.hasEagerState=!0,i.eagerState=p,Ct(p,m))return xi(e,t,i,0),De===null&&bi(),!1}catch{}finally{}if(n=Do(e,t,i,a),n!==null)return kt(n,e,a),Oh(n,t,a),!0}return!1}function hc(e,t,n,a){if(a={lane:2,revertLane:Qc(),action:a,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(c(479))}else t=Do(e,n,a,2),t!==null&&kt(t,e,2)}function Bi(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function kh(e,t){sl=Ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Vf(e,n)}}var Ni={readContext:ct,use:Mi,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve},Bh={readContext:ct,use:Mi,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:xh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Oi(4194308,4,jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){Oi(4,2,e,t)},useMemo:function(e,t){var n=bt();t=t===void 0?null:t;var a=e();if(Aa){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=bt();if(n!==void 0){var i=n(t);if(Aa){Hn(!0);try{n(t)}finally{Hn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=ux.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=sc(e);var t=e.queue,n=Dh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cc,useDeferredValue:function(e,t){var n=bt();return uc(n,e,t)},useTransition:function(){var e=sc(!1);return e=Ch.bind(null,fe,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=fe,i=bt();if(ve){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),De===null)throw Error(c(349));(xe&124)!==0||nh(a,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xh(lh.bind(null,a,o,e),[e]),a.flags|=2048,cl(9,ki(),ah.bind(null,a,o,n,t),null),n},useId:function(){var e=bt(),t=De.identifierPrefix;if(ve){var n=wn,a=jn;n=(a&~(1<<32-zt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ri++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=lx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:dc,useFormState:hh,useActionState:hh,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:lc,useCacheRefresh:function(){return bt().memoizedState=cx.bind(null,fe)}},Nh={readContext:ct,use:Mi,useCallback:_h,useContext:ct,useEffect:yh,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:Sh,useMemo:Eh,useReducer:Di,useRef:bh,useState:function(){return Di(zn)},useDebugValue:cc,useDeferredValue:function(e,t){var n=Qe();return zh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Di(zn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:br(e),t]},useSyncExternalStore:th,useId:Rh,useHostTransitionStatus:dc,useFormState:mh,useActionState:mh,useOptimistic:function(e,t){var n=Qe();return sh(n,Ae,e,t)},useMemoCache:lc,useCacheRefresh:Mh},fx={readContext:ct,use:Mi,useCallback:_h,useContext:ct,useEffect:yh,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:Sh,useMemo:Eh,useReducer:ic,useRef:bh,useState:function(){return ic(zn)},useDebugValue:cc,useDeferredValue:function(e,t){var n=Qe();return Ae===null?uc(n,e,t):zh(n,Ae.memoizedState,e,t)},useTransition:function(){var e=ic(zn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:br(e),t]},useSyncExternalStore:th,useId:Rh,useHostTransitionStatus:dc,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var n=Qe();return Ae!==null?sh(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lc,useCacheRefresh:Mh},ul=null,vr=0;function Ui(e){var t=vr;return vr+=1,ul===null&&(ul=[]),Xd(ul,e,t)}function Sr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===S?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Uh(e){var t=e._init;return t(e._payload)}function Lh(e){function t(z,E){if(e){var T=z.deletions;T===null?(z.deletions=[E],z.flags|=16):T.push(E)}}function n(z,E){if(!e)return null;for(;E!==null;)t(z,E),E=E.sibling;return null}function a(z){for(var E=new Map;z!==null;)z.key!==null?E.set(z.key,z):E.set(z.index,z),z=z.sibling;return E}function i(z,E){return z=Sn(z,E),z.index=0,z.sibling=null,z}function o(z,E,T){return z.index=T,e?(T=z.alternate,T!==null?(T=T.index,T<E?(z.flags|=67108866,E):T):(z.flags|=67108866,E)):(z.flags|=1048576,E)}function m(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function p(z,E,T,G){return E===null||E.tag!==6?(E=Oo(T,z.mode,G),E.return=z,E):(E=i(E,T),E.return=z,E)}function j(z,E,T,G){var W=T.type;return W===M?U(z,E,T.props.children,G,T.key):E!==null&&(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===se&&Uh(W)===E.type)?(E=i(E,T.props),Sr(E,T),E.return=z,E):(E=vi(T.type,T.key,T.props,null,z.mode,G),Sr(E,T),E.return=z,E)}function R(z,E,T,G){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Bo(T,z.mode,G),E.return=z,E):(E=i(E,T.children||[]),E.return=z,E)}function U(z,E,T,G,W){return E===null||E.tag!==7?(E=va(T,z.mode,G,W),E.return=z,E):(E=i(E,T),E.return=z,E)}function q(z,E,T){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Oo(""+E,z.mode,T),E.return=z,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return T=vi(E.type,E.key,E.props,null,z.mode,T),Sr(T,E),T.return=z,T;case k:return E=Bo(E,z.mode,T),E.return=z,E;case se:var G=E._init;return E=G(E._payload),q(z,E,T)}if(Ce(E)||Ue(E))return E=va(E,z.mode,T,null),E.return=z,E;if(typeof E.then=="function")return q(z,Ui(E),T);if(E.$$typeof===A)return q(z,_i(z,E),T);Li(z,E)}return null}function D(z,E,T,G){var W=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return W!==null?null:p(z,E,""+T,G);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return T.key===W?j(z,E,T,G):null;case k:return T.key===W?R(z,E,T,G):null;case se:return W=T._init,T=W(T._payload),D(z,E,T,G)}if(Ce(T)||Ue(T))return W!==null?null:U(z,E,T,G,null);if(typeof T.then=="function")return D(z,E,Ui(T),G);if(T.$$typeof===A)return D(z,E,_i(z,T),G);Li(z,T)}return null}function O(z,E,T,G,W){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(T)||null,p(E,z,""+G,W);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return z=z.get(G.key===null?T:G.key)||null,j(E,z,G,W);case k:return z=z.get(G.key===null?T:G.key)||null,R(E,z,G,W);case se:var de=G._init;return G=de(G._payload),O(z,E,T,G,W)}if(Ce(G)||Ue(G))return z=z.get(T)||null,U(E,z,G,W,null);if(typeof G.then=="function")return O(z,E,T,Ui(G),W);if(G.$$typeof===A)return O(z,E,T,_i(E,G),W);Li(E,G)}return null}function ie(z,E,T,G){for(var W=null,de=null,te=E,re=E=0,Ie=null;te!==null&&re<T.length;re++){te.index>re?(Ie=te,te=null):Ie=te.sibling;var ye=D(z,te,T[re],G);if(ye===null){te===null&&(te=Ie);break}e&&te&&ye.alternate===null&&t(z,te),E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye,te=Ie}if(re===T.length)return n(z,te),ve&&ja(z,re),W;if(te===null){for(;re<T.length;re++)te=q(z,T[re],G),te!==null&&(E=o(te,E,re),de===null?W=te:de.sibling=te,de=te);return ve&&ja(z,re),W}for(te=a(te);re<T.length;re++)Ie=O(te,z,re,T[re],G),Ie!==null&&(e&&Ie.alternate!==null&&te.delete(Ie.key===null?re:Ie.key),E=o(Ie,E,re),de===null?W=Ie:de.sibling=Ie,de=Ie);return e&&te.forEach(function(oa){return t(z,oa)}),ve&&ja(z,re),W}function ae(z,E,T,G){if(T==null)throw Error(c(151));for(var W=null,de=null,te=E,re=E=0,Ie=null,ye=T.next();te!==null&&!ye.done;re++,ye=T.next()){te.index>re?(Ie=te,te=null):Ie=te.sibling;var oa=D(z,te,ye.value,G);if(oa===null){te===null&&(te=Ie);break}e&&te&&oa.alternate===null&&t(z,te),E=o(oa,E,re),de===null?W=oa:de.sibling=oa,de=oa,te=Ie}if(ye.done)return n(z,te),ve&&ja(z,re),W;if(te===null){for(;!ye.done;re++,ye=T.next())ye=q(z,ye.value,G),ye!==null&&(E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye);return ve&&ja(z,re),W}for(te=a(te);!ye.done;re++,ye=T.next())ye=O(te,z,re,ye.value,G),ye!==null&&(e&&ye.alternate!==null&&te.delete(ye.key===null?re:ye.key),E=o(ye,E,re),de===null?W=ye:de.sibling=ye,de=ye);return e&&te.forEach(function(dy){return t(z,dy)}),ve&&ja(z,re),W}function Re(z,E,T,G){if(typeof T=="object"&&T!==null&&T.type===M&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case w:e:{for(var W=T.key;E!==null;){if(E.key===W){if(W=T.type,W===M){if(E.tag===7){n(z,E.sibling),G=i(E,T.props.children),G.return=z,z=G;break e}}else if(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===se&&Uh(W)===E.type){n(z,E.sibling),G=i(E,T.props),Sr(G,T),G.return=z,z=G;break e}n(z,E);break}else t(z,E);E=E.sibling}T.type===M?(G=va(T.props.children,z.mode,G,T.key),G.return=z,z=G):(G=vi(T.type,T.key,T.props,null,z.mode,G),Sr(G,T),G.return=z,z=G)}return m(z);case k:e:{for(W=T.key;E!==null;){if(E.key===W)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){n(z,E.sibling),G=i(E,T.children||[]),G.return=z,z=G;break e}else{n(z,E);break}else t(z,E);E=E.sibling}G=Bo(T,z.mode,G),G.return=z,z=G}return m(z);case se:return W=T._init,T=W(T._payload),Re(z,E,T,G)}if(Ce(T))return ie(z,E,T,G);if(Ue(T)){if(W=Ue(T),typeof W!="function")throw Error(c(150));return T=W.call(T),ae(z,E,T,G)}if(typeof T.then=="function")return Re(z,E,Ui(T),G);if(T.$$typeof===A)return Re(z,E,_i(z,T),G);Li(z,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,E!==null&&E.tag===6?(n(z,E.sibling),G=i(E,T),G.return=z,z=G):(n(z,E),G=Oo(T,z.mode,G),G.return=z,z=G),m(z)):n(z,E)}return function(z,E,T,G){try{vr=0;var W=Re(z,E,T,G);return ul=null,W}catch(te){if(te===fr||te===zi)throw te;var de=At(29,te,null,z.mode);return de.lanes=G,de.return=z,de}finally{}}}var fl=Lh(!0),Hh=Lh(!1),Qt=Q(null),fn=null;function Xn(e){var t=e.alternate;J(Ze,Ze.current&1),J(Qt,e),fn===null&&(t===null||il.current!==null||t.memoizedState!==null)&&(fn=e)}function Gh(e){if(e.tag===22){if(J(Ze,Ze.current),J(Qt,e),fn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(fn=e)}}else Zn()}function Zn(){J(Ze,Ze.current),J(Qt,Qt.current)}function Cn(e){P(Qt),fn===e&&(fn=null),P(Ze)}var Ze=Q(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||au(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function mc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Dt(),i=$n(a);i.payload=t,n!=null&&(i.callback=n),t=Qn(e,i,a),t!==null&&(kt(t,e,a),hr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Dt(),i=$n(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qn(e,i,a),t!==null&&(kt(t,e,a),hr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),a=$n(n);a.tag=2,t!=null&&(a.callback=t),t=Qn(e,a,n),t!==null&&(kt(t,e,n),hr(t,e,n))}};function Yh(e,t,n,a,i,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,m):t.prototype&&t.prototype.isPureReactComponent?!ar(n,a)||!ar(i,o):!0}function Vh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&gc.enqueueReplaceState(t,t.state,null)}function Ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var Gi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qh(e){Gi(e)}function $h(e){console.error(e)}function Qh(e){Gi(e)}function Yi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Kh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function pc(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){Yi(e,t)},n}function Xh(e){return e=$n(e),e.tag=3,e}function Zh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var o=a.value;e.payload=function(){return i(o)},e.callback=function(){Kh(t,n,a)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Kh(t,n,a),typeof i!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function dx(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&or(t,n,i,!0),n=Qt.current,n!==null){switch(n.tag){case 13:return fn===null?Gc():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Qo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Vc(e,a,i)),!1;case 22:return n.flags|=65536,a===Qo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Vc(e,a,i)),!1}throw Error(c(435,n.tag))}return Vc(e,a,i),Gc(),!1}if(ve)return t=Qt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Lo&&(e=Error(c(422),{cause:a}),sr(Yt(e,n)))):(a!==Lo&&(t=Error(c(423),{cause:a}),sr(Yt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Yt(a,n),i=pc(e.stateNode,a,i),Zo(e,i),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:a});if(o=Yt(o,n),Ar===null?Ar=[o]:Ar.push(o),Ge!==4&&(Ge=2),t===null)return!0;a=Yt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=pc(n.stateNode,a,e),Zo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ea===null||!ea.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Xh(i),Zh(i,e,n,a),Zo(n,i),!1}n=n.return}while(n!==null);return!1}var Ph=Error(c(461)),Fe=!1;function lt(e,t,n,a){t.child=e===null?Hh(t,null,n,a):fl(t,e.child,n,a)}function Jh(e,t,n,a,i){n=n.render;var o=t.ref;if("ref"in a){var m={};for(var p in a)p!=="ref"&&(m[p]=a[p])}else m=a;return za(t),a=Io(e,t,n,m,o,i),p=ec(),e!==null&&!Fe?(tc(e,t,i),An(e,t,i)):(ve&&p&&No(t),t.flags|=1,lt(e,t,a,i),t.child)}function Fh(e,t,n,a,i){if(e===null){var o=n.type;return typeof o=="function"&&!ko(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Wh(e,t,o,a,i)):(e=vi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!_c(e,i)){var m=o.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(m,a)&&e.ref===t.ref)return An(e,t,i)}return t.flags|=1,e=Sn(o,a),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,n,a,i){if(e!==null){var o=e.memoizedProps;if(ar(o,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=o,_c(e,i))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,An(e,t,i)}return bc(e,t,n,a,i)}function Ih(e,t,n){var a=t.pendingProps,i=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=o!==null?o.baseLanes|n:n,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return em(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ei(t,o!==null?o.cachePool:null),o!==null?Wd(t,o):Jo(),Gh(t);else return t.lanes=t.childLanes=536870912,em(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Ei(t,o.cachePool),Wd(t,o),Zn(),t.memoizedState=null):(e!==null&&Ei(t,null),Jo(),Zn());return lt(e,t,i,n),t.child}function em(e,t,n,a){var i=$o();return i=i===null?null:{parent:Xe._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ei(t,null),Jo(),Gh(t),e!==null&&or(e,t,a,!0),null}function Vi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bc(e,t,n,a,i){return za(t),n=Io(e,t,n,a,void 0,i),a=ec(),e!==null&&!Fe?(tc(e,t,i),An(e,t,i)):(ve&&a&&No(t),t.flags|=1,lt(e,t,n,i),t.child)}function tm(e,t,n,a,i,o){return za(t),t.updateQueue=null,n=eh(t,a,n,i),Id(e),a=ec(),e!==null&&!Fe?(tc(e,t,o),An(e,t,o)):(ve&&a&&No(t),t.flags|=1,lt(e,t,n,o),t.child)}function nm(e,t,n,a,i){if(za(t),t.stateNode===null){var o=tl,m=n.contextType;typeof m=="object"&&m!==null&&(o=ct(m)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=gc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},Ko(t),m=n.contextType,o.context=typeof m=="object"&&m!==null?ct(m):tl,o.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(mc(t,n,m,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&gc.enqueueReplaceState(o,o.state,null),gr(t,a,o,i),mr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var p=t.memoizedProps,j=Ta(n,p);o.props=j;var R=o.context,U=n.contextType;m=tl,typeof U=="object"&&U!==null&&(m=ct(U));var q=n.getDerivedStateFromProps;U=typeof q=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,U||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||R!==m)&&Vh(t,o,a,m),qn=!1;var D=t.memoizedState;o.state=D,gr(t,a,o,i),mr(),R=t.memoizedState,p||D!==R||qn?(typeof q=="function"&&(mc(t,n,q,a),R=t.memoizedState),(j=qn||Yh(t,n,j,a,D,R,m))?(U||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=R),o.props=a,o.state=R,o.context=m,a=j):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Xo(e,t),m=t.memoizedProps,U=Ta(n,m),o.props=U,q=t.pendingProps,D=o.context,R=n.contextType,j=tl,typeof R=="object"&&R!==null&&(j=ct(R)),p=n.getDerivedStateFromProps,(R=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==q||D!==j)&&Vh(t,o,a,j),qn=!1,D=t.memoizedState,o.state=D,gr(t,a,o,i),mr();var O=t.memoizedState;m!==q||D!==O||qn||e!==null&&e.dependencies!==null&&wi(e.dependencies)?(typeof p=="function"&&(mc(t,n,p,a),O=t.memoizedState),(U=qn||Yh(t,n,U,a,D,O,j)||e!==null&&e.dependencies!==null&&wi(e.dependencies))?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,O,j),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,O,j)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),o.props=a,o.state=O,o.context=j,a=U):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Vi(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=fl(t,e.child,null,i),t.child=fl(t,null,n,i)):lt(e,t,n,i),t.memoizedState=o.state,e=t.child):e=An(e,t,i),e}function am(e,t,n,a){return ir(),t.flags|=256,lt(e,t,n,a),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:$d()}}function vc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Kt),e}function lm(e,t,n){var a=t.pendingProps,i=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),m&&(i=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(i?Xn(t):Zn(),ve){var p=He,j;if(j=p){e:{for(j=p,p=un;j.nodeType!==8;){if(!p){p=null;break e}if(j=an(j.nextSibling),j===null){p=null;break e}}p=j}p!==null?(t.memoizedState={dehydrated:p,treeContext:Sa!==null?{id:jn,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},j=At(18,null,null,0),j.stateNode=p,j.return=t,t.child=j,ft=t,He=null,j=!0):j=!1}j||_a(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return au(p)?t.lanes=32:t.lanes=536870912,null;Cn(t)}return p=a.children,a=a.fallback,i?(Zn(),i=t.mode,p=qi({mode:"hidden",children:p},i),a=va(a,i,n,null),p.return=t,a.return=t,p.sibling=a,t.child=p,i=t.child,i.memoizedState=yc(n),i.childLanes=vc(e,m,n),t.memoizedState=xc,a):(Xn(t),Sc(t,p))}if(j=e.memoizedState,j!==null&&(p=j.dehydrated,p!==null)){if(o)t.flags&256?(Xn(t),t.flags&=-257,t=jc(e,t,n)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),i=a.fallback,p=t.mode,a=qi({mode:"visible",children:a.children},p),i=va(i,p,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,fl(t,e.child,null,n),a=t.child,a.memoizedState=yc(n),a.childLanes=vc(e,m,n),t.memoizedState=xc,t=i);else if(Xn(t),au(p)){if(m=p.nextSibling&&p.nextSibling.dataset,m)var R=m.dgst;m=R,a=Error(c(419)),a.stack="",a.digest=m,sr({value:a,source:null,stack:null}),t=jc(e,t,n)}else if(Fe||or(e,t,n,!1),m=(n&e.childLanes)!==0,Fe||m){if(m=De,m!==null&&(a=n&-n,a=(a&42)!==0?1:ao(a),a=(a&(m.suspendedLanes|n))!==0?0:a,a!==0&&a!==j.retryLane))throw j.retryLane=a,el(e,a),kt(m,e,a),Ph;p.data==="$?"||Gc(),t=jc(e,t,n)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,He=an(p.nextSibling),ft=t,ve=!0,wa=null,un=!1,e!==null&&(qt[$t++]=jn,qt[$t++]=wn,qt[$t++]=Sa,jn=e.id,wn=e.overflow,Sa=t),t=Sc(t,a.children),t.flags|=4096);return t}return i?(Zn(),i=a.fallback,p=t.mode,j=e.child,R=j.sibling,a=Sn(j,{mode:"hidden",children:a.children}),a.subtreeFlags=j.subtreeFlags&65011712,R!==null?i=Sn(R,i):(i=va(i,p,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,p=e.child.memoizedState,p===null?p=yc(n):(j=p.cachePool,j!==null?(R=Xe._currentValue,j=j.parent!==R?{parent:R,pool:R}:j):j=$d(),p={baseLanes:p.baseLanes|n,cachePool:j}),i.memoizedState=p,i.childLanes=vc(e,m,n),t.memoizedState=xc,a):(Xn(t),n=e.child,e=n.sibling,n=Sn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=qi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qi(e,t){return e=At(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function jc(e,t,n){return fl(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Go(e.return,t,n)}function wc(e,t,n,a,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=i)}function im(e,t,n){var a=t.pendingProps,i=a.revealOrder,o=a.tail;if(lt(e,t,a.children,n),a=Ze.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,n,t);else if(e.tag===19)rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(J(Ze,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wc(t,!0,n,null,o);break;case"together":wc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function An(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(or(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _c(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wi(e)))}function hx(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),Vn(t,Xe,e.memoizedState.cache),ir();break;case 27:case 5:ma(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Xn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lm(e,t,n):(Xn(t),e=An(e,t,n),e!==null?e.sibling:null);Xn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(or(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return im(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(Ze,Ze.current),a)break;return null;case 22:case 23:return t.lanes=0,Ih(e,t,n);case 24:Vn(t,Xe,e.memoizedState.cache)}return An(e,t,n)}function sm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!_c(e,n)&&(t.flags&128)===0)return Fe=!1,hx(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,ve&&(t.flags&1048576)!==0&&Ud(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")ko(a)?(e=Ta(a,e),t.tag=1,t=nm(null,t,a,e,n)):(t.tag=0,t=bc(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===$){t.tag=11,t=Jh(null,t,a,e,n);break e}else if(i===Y){t.tag=14,t=Fh(null,t,a,e,n);break e}}throw t=at(a)||a,Error(c(306,t,""))}}return t;case 0:return bc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Ta(a,t.pendingProps),nm(e,t,a,i,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var o=t.memoizedState;i=o.element,Xo(e,t),gr(t,a,null,n);var m=t.memoizedState;if(a=m.cache,Vn(t,Xe,a),a!==o.cache&&Yo(t,[Xe],n,!0),mr(),a=m.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=am(e,t,a,n);break e}else if(a!==i){i=Yt(Error(c(424)),t),sr(i),t=am(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=an(e.firstChild),ft=t,ve=!0,wa=null,un=!0,n=Hh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ir(),a===i){t=An(e,t,n);break e}lt(e,t,a,n)}t=t.child}return t;case 26:return Vi(e,t),e===null?(n=fg(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,a=as(le.current).createElement(n),a[ot]=t,a[gt]=e,it(a,n,e),Je(a),t.stateNode=a):t.memoizedState=fg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ma(t),e===null&&ve&&(a=t.stateNode=og(t.type,t.pendingProps,le.current),ft=t,un=!0,i=He,aa(t.type)?(lu=i,He=an(a.firstChild)):He=i),lt(e,t,t.pendingProps.children,n),Vi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((i=a=He)&&(a=Yx(a,t.type,t.pendingProps,un),a!==null?(t.stateNode=a,ft=t,He=an(a.firstChild),un=!1,i=!0):i=!1),i||_a(t)),ma(t),i=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,a=o.children,eu(i,o)?a=null:m!==null&&eu(i,m)&&(t.flags|=32),t.memoizedState!==null&&(i=Io(e,t,rx,null,null,n),Ur._currentValue=i),Vi(e,t),lt(e,t,a,n),t.child;case 6:return e===null&&ve&&((e=n=He)&&(n=Vx(n,t.pendingProps,un),n!==null?(t.stateNode=n,ft=t,He=null,e=!0):e=!1),e||_a(t)),null;case 13:return lm(e,t,n);case 4:return je(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=fl(t,null,a,n):lt(e,t,a,n),t.child;case 11:return Jh(e,t,t.type,t.pendingProps,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Vn(t,t.type,a.value),lt(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,za(t),i=ct(i),a=a(i),t.flags|=1,lt(e,t,a,n),t.child;case 14:return Fh(e,t,t.type,t.pendingProps,n);case 15:return Wh(e,t,t.type,t.pendingProps,n);case 19:return im(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=qi(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Sn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ih(e,t,n);case 24:return za(t),a=ct(Xe),e===null?(i=$o(),i===null&&(i=De,o=Vo(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:a,cache:i},Ko(t),Vn(t,Xe,i)):((e.lanes&n)!==0&&(Xo(e,t),gr(t,null,null,n),mr()),i=e.memoizedState,o=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Vn(t,Xe,a)):(a=o.cache,Vn(t,Xe,a),a!==i.cache&&Yo(t,[Xe],n,!0))),lt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Tn(e){e.flags|=4}function om(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pg(t)){if(t=Qt.current,t!==null&&((xe&4194048)===xe?fn!==null:(xe&62914560)!==xe&&(xe&536870912)===0||t!==fn))throw dr=Qo,Qd;e.flags|=8192}}function $i(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gf():536870912,e.lanes|=t,gl|=t)}function jr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function mx(e,t,n){var a=t.pendingProps;switch(Uo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),En(Xe),st(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(rr(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gd())),Le(t),null;case 26:return n=t.memoizedState,e===null?(Tn(t),n!==null?(Le(t),om(t,n)):(Le(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Tn(t),Le(t),om(t,n)):(Le(t),t.flags&=-16777217):(e.memoizedProps!==a&&Tn(t),Le(t),t.flags&=-16777217),null;case 27:xn(t),n=le.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Le(t),null}e=ee.current,rr(t)?Ld(t):(e=og(i,a,n),t.stateNode=e,Tn(t))}return Le(t),null;case 5:if(xn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Le(t),null}if(e=ee.current,rr(t))Ld(t);else{switch(i=as(le.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[ot]=t,e[gt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(it(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Tn(t)}}return Le(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Tn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,rr(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=ft,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||tg(e.nodeValue,n)),e||_a(t)}else e=as(e).createTextNode(a),e[ot]=t,t.stateNode=e}return Le(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=rr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[ot]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else i=Gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Cn(t),t):(Cn(t),null)}if(Cn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),$i(t,t.updateQueue),Le(t),null;case 4:return st(),e===null&&Pc(t.stateNode.containerInfo),Le(t),null;case 10:return En(t.type),Le(t),null;case 19:if(P(Ze),i=t.memoizedState,i===null)return Le(t),null;if(a=(t.flags&128)!==0,o=i.rendering,o===null)if(a)jr(i,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Hi(e),o!==null){for(t.flags|=128,jr(i,!1),e=o.updateQueue,t.updateQueue=e,$i(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nd(n,e),n=n.sibling;return J(Ze,Ze.current&1|2),t.child}e=e.sibling}i.tail!==null&&cn()>Xi&&(t.flags|=128,a=!0,jr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Hi(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,$i(t,e),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return Le(t),null}else 2*cn()-i.renderingStartTime>Xi&&n!==536870912&&(t.flags|=128,a=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=cn(),t.sibling=null,e=Ze.current,J(Ze,a?e&1|2:e&1),t):(Le(t),null);case 22:case 23:return Cn(t),Fo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&$i(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&P(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),En(Xe),Le(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function gx(e,t){switch(Uo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(Xe),st(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xn(t),null;case 13:if(Cn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Ze),null;case 4:return st(),null;case 10:return En(t.type),null;case 22:case 23:return Cn(t),Fo(),e!==null&&P(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(Xe),null;case 25:return null;default:return null}}function cm(e,t){switch(Uo(t),t.tag){case 3:En(Xe),st();break;case 26:case 27:case 5:xn(t);break;case 4:st();break;case 13:Cn(t);break;case 19:P(Ze);break;case 10:En(t.type);break;case 22:case 23:Cn(t),Fo(),e!==null&&P(Ca);break;case 24:En(Xe)}}function wr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var o=n.create,m=n.inst;a=o(),m.destroy=a}n=n.next}while(n!==i)}}catch(p){Me(t,t.return,p)}}function Pn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&e)===e){var m=a.inst,p=m.destroy;if(p!==void 0){m.destroy=void 0,i=t;var j=n,R=p;try{R()}catch(U){Me(i,j,U)}}}a=a.next}while(a!==o)}}catch(U){Me(t,t.return,U)}}function um(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fd(t,n)}catch(a){Me(e,e.return,a)}}}function fm(e,t,n){n.props=Ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Me(e,t,a)}}function _r(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){Me(e,t,i)}}function dn(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Me(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Me(e,t,i)}else n.current=null}function dm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Me(e,e.return,i)}}function Ec(e,t,n){try{var a=e.stateNode;Nx(a,e.type,n,t),a[gt]=t}catch(i){Me(e,e.return,i)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&aa(e.type)||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ns));else if(a!==4&&(a===27&&aa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}function Qi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&aa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function mm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);it(t,a,n),t[ot]=e,t[gt]=n}catch(o){Me(e,e.return,o)}}var Rn=!1,qe=!1,Ac=!1,gm=typeof WeakSet=="function"?WeakSet:Set,We=null;function px(e,t){if(e=e.containerInfo,Wc=cs,e=zd(e),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var m=0,p=-1,j=-1,R=0,U=0,q=e,D=null;t:for(;;){for(var O;q!==n||i!==0&&q.nodeType!==3||(p=m+i),q!==o||a!==0&&q.nodeType!==3||(j=m+a),q.nodeType===3&&(m+=q.nodeValue.length),(O=q.firstChild)!==null;)D=q,q=O;for(;;){if(q===e)break t;if(D===n&&++R===i&&(p=m),D===o&&++U===a&&(j=m),(O=q.nextSibling)!==null)break;q=D,D=q.parentNode}q=O}n=p===-1||j===-1?null:{start:p,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ic={focusedElem:e,selectionRange:n},cs=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var ie=Ta(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ie,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Me(n,n.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function pm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n),a&4&&wr(5,n);break;case 1:if(Jn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Me(n,n.return,m)}else{var i=Ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Me(n,n.return,m)}}a&64&&um(n),a&512&&_r(n,n.return);break;case 3:if(Jn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fd(e,t)}catch(m){Me(n,n.return,m)}}break;case 27:t===null&&a&4&&mm(n);case 26:case 5:Jn(e,n),t===null&&a&4&&dm(n),a&512&&_r(n,n.return);break;case 12:Jn(e,n);break;case 13:Jn(e,n),a&4&&ym(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ex.bind(null,n),qx(e,n))));break;case 22:if(a=n.memoizedState!==null||Rn,!a){t=t!==null&&t.memoizedState!==null||qe,i=Rn;var o=qe;Rn=a,(qe=t)&&!o?Fn(e,n,(n.subtreeFlags&8772)!==0):Jn(e,n),Rn=i,qe=o}break;case 30:break;default:Jn(e,n)}}function bm(e){var t=e.alternate;t!==null&&(e.alternate=null,bm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&io(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,xt=!1;function Mn(e,t,n){for(n=n.child;n!==null;)xm(e,t,n),n=n.sibling}function xm(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 26:qe||dn(n,t),Mn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||dn(n,t);var a=Be,i=xt;aa(n.type)&&(Be=n.stateNode,xt=!1),Mn(e,t,n),kr(n.stateNode),Be=a,xt=i;break;case 5:qe||dn(n,t);case 6:if(a=Be,i=xt,Be=null,Mn(e,t,n),Be=a,xt=i,Be!==null)if(xt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(n.stateNode)}catch(o){Me(n,t,o)}else try{Be.removeChild(n.stateNode)}catch(o){Me(n,t,o)}break;case 18:Be!==null&&(xt?(e=Be,ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Yr(e)):ig(Be,n.stateNode));break;case 4:a=Be,i=xt,Be=n.stateNode.containerInfo,xt=!0,Mn(e,t,n),Be=a,xt=i;break;case 0:case 11:case 14:case 15:qe||Pn(2,n,t),qe||Pn(4,n,t),Mn(e,t,n);break;case 1:qe||(dn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fm(n,t,a)),Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:qe=(a=qe)||n.memoizedState!==null,Mn(e,t,n),qe=a;break;default:Mn(e,t,n)}}function ym(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(n){Me(t,t.return,n)}}function bx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gm),t;default:throw Error(c(435,e.tag))}}function Tc(e,t){var n=bx(e);t.forEach(function(a){var i=zx.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function Tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],o=e,m=t,p=m;e:for(;p!==null;){switch(p.tag){case 27:if(aa(p.type)){Be=p.stateNode,xt=!1;break e}break;case 5:Be=p.stateNode,xt=!1;break e;case 3:case 4:Be=p.stateNode.containerInfo,xt=!0;break e}p=p.return}if(Be===null)throw Error(c(160));xm(o,m,i),Be=null,xt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vm(t,e),t=t.sibling}var nn=null;function vm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),Rt(e),a&4&&(Pn(3,e,e.return),wr(3,e),Pn(5,e,e.return));break;case 1:Tt(t,e),Rt(e),a&512&&(qe||n===null||dn(n,n.return)),a&64&&Rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=nn;if(Tt(t,e),Rt(e),a&512&&(qe||n===null||dn(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Zl]||o[ot]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(a),i.head.insertBefore(o,i.querySelector("head > title"))),it(o,a,n),o[ot]=e,Je(o),a=o;break e;case"link":var m=mg("link","href",i).get(a+(n.href||""));if(m){for(var p=0;p<m.length;p++)if(o=m[p],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(p,1);break t}}o=i.createElement(a),it(o,a,n),i.head.appendChild(o);break;case"meta":if(m=mg("meta","content",i).get(a+(n.content||""))){for(p=0;p<m.length;p++)if(o=m[p],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(p,1);break t}}o=i.createElement(a),it(o,a,n),i.head.appendChild(o);break;default:throw Error(c(468,a))}o[ot]=e,Je(o),a=o}e.stateNode=a}else gg(i,e.type,e.stateNode);else e.stateNode=hg(i,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?gg(i,e.type,e.stateNode):hg(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tt(t,e),Rt(e),a&512&&(qe||n===null||dn(n,n.return)),n!==null&&a&4&&Ec(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tt(t,e),Rt(e),a&512&&(qe||n===null||dn(n,n.return)),e.flags&32){i=e.stateNode;try{Xa(i,"")}catch(O){Me(e,e.return,O)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Ec(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Ac=!0);break;case 6:if(Tt(t,e),Rt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(O){Me(e,e.return,O)}}break;case 3:if(is=null,i=nn,nn=ls(t.containerInfo),Tt(t,e),nn=i,Rt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(O){Me(e,e.return,O)}Ac&&(Ac=!1,Sm(e));break;case 4:a=nn,nn=ls(e.stateNode.containerInfo),Tt(t,e),Rt(e),nn=a;break;case 12:Tt(t,e),Rt(e);break;case 13:Tt(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bc=cn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tc(e,a)));break;case 22:i=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,R=Rn,U=qe;if(Rn=R||i,qe=U||j,Tt(t,e),qe=U,Rn=R,Rt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||j||Rn||qe||Ra(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(o=j.stateNode,i)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{p=j.stateNode;var q=j.memoizedProps.style,D=q!=null&&q.hasOwnProperty("display")?q.display:null;p.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(O){Me(j,j.return,O)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=i?"":j.memoizedProps}catch(O){Me(j,j.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Tc(e,n))));break;case 19:Tt(t,e),Rt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Tc(e,a)));break;case 30:break;case 21:break;default:Tt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(hm(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var i=n.stateNode,o=zc(e);Qi(e,o,i);break;case 5:var m=n.stateNode;n.flags&32&&(Xa(m,""),n.flags&=-33);var p=zc(e);Qi(e,p,m);break;case 3:case 4:var j=n.stateNode.containerInfo,R=zc(e);Cc(e,R,j);break;default:throw Error(c(161))}}catch(U){Me(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pm(e,t.alternate,t),t=t.sibling}function Ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pn(4,t,t.return),Ra(t);break;case 1:dn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fm(t,t.return,n),Ra(t);break;case 27:kr(t.stateNode);case 26:case 5:dn(t,t.return),Ra(t);break;case 22:t.memoizedState===null&&Ra(t);break;case 30:Ra(t);break;default:Ra(t)}e=e.sibling}}function Fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:Fn(i,o,n),wr(4,o);break;case 1:if(Fn(i,o,n),a=o,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Me(a,a.return,R)}if(a=o,i=a.updateQueue,i!==null){var p=a.stateNode;try{var j=i.shared.hiddenCallbacks;if(j!==null)for(i.shared.hiddenCallbacks=null,i=0;i<j.length;i++)Jd(j[i],p)}catch(R){Me(a,a.return,R)}}n&&m&64&&um(o),_r(o,o.return);break;case 27:mm(o);case 26:case 5:Fn(i,o,n),n&&a===null&&m&4&&dm(o),_r(o,o.return);break;case 12:Fn(i,o,n);break;case 13:Fn(i,o,n),n&&m&4&&ym(i,o);break;case 22:o.memoizedState===null&&Fn(i,o,n),_r(o,o.return);break;case 30:break;default:Fn(i,o,n)}t=t.sibling}}function Rc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cr(n))}function Mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e))}function hn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(e,t,n,a),t=t.sibling}function jm(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,a),i&2048&&wr(9,t);break;case 1:hn(e,t,n,a);break;case 3:hn(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cr(e)));break;case 12:if(i&2048){hn(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,p=o.onPostCommit;typeof p=="function"&&p(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Me(t,t.return,j)}}else hn(e,t,n,a);break;case 13:hn(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?hn(e,t,n,a):Er(e,t):o._visibility&2?hn(e,t,n,a):(o._visibility|=2,dl(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&Rc(m,t);break;case 24:hn(e,t,n,a),i&2048&&Mc(t.alternate,t);break;default:hn(e,t,n,a)}}function dl(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,p=n,j=a,R=m.flags;switch(m.tag){case 0:case 11:case 15:dl(o,m,p,j,i),wr(8,m);break;case 23:break;case 22:var U=m.stateNode;m.memoizedState!==null?U._visibility&2?dl(o,m,p,j,i):Er(o,m):(U._visibility|=2,dl(o,m,p,j,i)),i&&R&2048&&Rc(m.alternate,m);break;case 24:dl(o,m,p,j,i),i&&R&2048&&Mc(m.alternate,m);break;default:dl(o,m,p,j,i)}t=t.sibling}}function Er(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Er(n,a),i&2048&&Rc(a.alternate,a);break;case 24:Er(n,a),i&2048&&Mc(a.alternate,a);break;default:Er(n,a)}t=t.sibling}}var zr=8192;function hl(e){if(e.subtreeFlags&zr)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 26:hl(e),e.flags&zr&&e.memoizedState!==null&&ny(nn,e.memoizedState,e.memoizedProps);break;case 5:hl(e);break;case 3:case 4:var t=nn;nn=ls(e.stateNode.containerInfo),hl(e),nn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=zr,zr=16777216,hl(e),zr=t):hl(e));break;default:hl(e)}}function _m(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];We=a,zm(a,e)}_m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Em(e),e=e.sibling}function Em(e){switch(e.tag){case 0:case 11:case 15:Cr(e),e.flags&2048&&Pn(9,e,e.return);break;case 3:Cr(e);break;case 12:Cr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ki(e)):Cr(e);break;default:Cr(e)}}function Ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];We=a,zm(a,e)}_m(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pn(8,t,t.return),Ki(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ki(t));break;default:Ki(t)}e=e.sibling}}function zm(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Pn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:cr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,We=a;else e:for(n=e;We!==null;){a=We;var i=a.sibling,o=a.return;if(bm(a),a===n){We=null;break e}if(i!==null){i.return=o,We=i;break e}We=o}}}var xx={getCacheForType:function(e){var t=ct(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},yx=typeof WeakMap=="function"?WeakMap:Map,Ee=0,De=null,me=null,xe=0,ze=0,Mt=null,Wn=!1,ml=!1,Dc=!1,Dn=0,Ge=0,In=0,Ma=0,kc=0,Kt=0,gl=0,Ar=null,yt=null,Oc=!1,Bc=0,Xi=1/0,Zi=null,ea=null,rt=0,ta=null,pl=null,bl=0,Nc=0,Uc=null,Cm=null,Tr=0,Lc=null;function Dt(){if((Ee&2)!==0&&xe!==0)return xe&-xe;if(N.T!==null){var e=ll;return e!==0?e:Qc()}return qf()}function Am(){Kt===0&&(Kt=(xe&536870912)===0||ve?Hf():536870912);var e=Qt.current;return e!==null&&(e.flags|=32),Kt}function kt(e,t,n){(e===De&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(xl(e,0),na(e,xe,Kt,!1)),Xl(e,n),((Ee&2)===0||e!==De)&&(e===De&&((Ee&2)===0&&(Ma|=n),Ge===4&&na(e,xe,Kt,!1)),mn(e))}function Tm(e,t,n){if((Ee&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Kl(e,t),i=a?jx(e,t):Yc(e,t,!0),o=a;do{if(i===0){ml&&!a&&na(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vx(n)){i=Yc(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var p=e;i=Ar;var j=p.current.memoizedState.isDehydrated;if(j&&(xl(p,m).flags|=256),m=Yc(p,m,!1),m!==2){if(Dc&&!j){p.errorRecoveryDisabledLanes|=o,Ma|=o,i=4;break e}o=yt,yt=i,o!==null&&(yt===null?yt=o:yt.push.apply(yt,o))}i=m}if(o=!1,i!==2)continue}}if(i===1){xl(e,0),na(e,t,0,!0);break}e:{switch(a=e,o=i,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:na(a,t,Kt,!Wn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Bc+300-cn(),10<i)){if(na(a,t,Kt,!Wn),ri(a,0,!0)!==0)break e;a.timeoutHandle=lg(Rm.bind(null,a,n,yt,Zi,Oc,t,Kt,Ma,gl,Wn,o,2,-0,0),i);break e}Rm(a,n,yt,Zi,Oc,t,Kt,Ma,gl,Wn,o,0,-0,0)}}break}while(!0);mn(e)}function Rm(e,t,n,a,i,o,m,p,j,R,U,q,D,O){if(e.timeoutHandle=-1,q=t.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(Nr={stylesheets:null,count:0,unsuspend:ty},wm(t),q=ay(),q!==null)){e.cancelPendingCommit=q(Um.bind(null,e,t,o,n,a,i,m,p,j,U,1,D,O)),na(e,o,m,!R);return}Um(e,t,o,n,a,i,m,p,j)}function vx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,a){t&=~kc,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var o=31-zt(i),m=1<<o;a[o]=-1,i&=~m}n!==0&&Yf(e,n,t)}function Pi(){return(Ee&6)===0?(Rr(0),!1):!0}function Hc(){if(me!==null){if(ze===0)var e=me.return;else e=me,_n=Ea=null,nc(e),ul=null,vr=0,e=me;for(;e!==null;)cm(e.alternate,e),e=e.return;me=null}}function xl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Lx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Hc(),De=e,me=n=Sn(e.current,null),xe=t,ze=0,Mt=null,Wn=!1,ml=Kl(e,t),Dc=!1,gl=Kt=kc=Ma=In=Ge=0,yt=Ar=null,Oc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-zt(a),o=1<<i;t|=e[i],a&=~o}return Dn=t,bi(),n}function Mm(e,t){fe=null,N.H=Ni,t===fr||t===zi?(t=Zd(),ze=3):t===Qd?(t=Zd(),ze=4):ze=t===Ph?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,me===null&&(Ge=1,Yi(e,Yt(t,e.current)))}function Dm(){var e=N.H;return N.H=Ni,e===null?Ni:e}function km(){var e=N.A;return N.A=xx,e}function Gc(){Ge=4,Wn||(xe&4194048)!==xe&&Qt.current!==null||(ml=!0),(In&134217727)===0&&(Ma&134217727)===0||De===null||na(De,xe,Kt,!1)}function Yc(e,t,n){var a=Ee;Ee|=2;var i=Dm(),o=km();(De!==e||xe!==t)&&(Zi=null,xl(e,t)),t=!1;var m=Ge;e:do try{if(ze!==0&&me!==null){var p=me,j=Mt;switch(ze){case 8:Hc(),m=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(t=!0);var R=ze;if(ze=0,Mt=null,yl(e,p,j,R),n&&ml){m=0;break e}break;default:R=ze,ze=0,Mt=null,yl(e,p,j,R)}}Sx(),m=Ge;break}catch(U){Mm(e,U)}while(!0);return t&&e.shellSuspendCounter++,_n=Ea=null,Ee=a,N.H=i,N.A=o,me===null&&(De=null,xe=0,bi()),m}function Sx(){for(;me!==null;)Om(me)}function jx(e,t){var n=Ee;Ee|=2;var a=Dm(),i=km();De!==e||xe!==t?(Zi=null,Xi=cn()+500,xl(e,t)):ml=Kl(e,t);e:do try{if(ze!==0&&me!==null){t=me;var o=Mt;t:switch(ze){case 1:ze=0,Mt=null,yl(e,t,o,1);break;case 2:case 9:if(Kd(o)){ze=0,Mt=null,Bm(t);break}t=function(){ze!==2&&ze!==9||De!==e||(ze=7),mn(e)},o.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Kd(o)?(ze=0,Mt=null,Bm(t)):(ze=0,Mt=null,yl(e,t,o,7));break;case 5:var m=null;switch(me.tag){case 26:m=me.memoizedState;case 5:case 27:var p=me;if(!m||pg(m)){ze=0,Mt=null;var j=p.sibling;if(j!==null)me=j;else{var R=p.return;R!==null?(me=R,Ji(R)):me=null}break t}}ze=0,Mt=null,yl(e,t,o,5);break;case 6:ze=0,Mt=null,yl(e,t,o,6);break;case 8:Hc(),Ge=6;break e;default:throw Error(c(462))}}wx();break}catch(U){Mm(e,U)}while(!0);return _n=Ea=null,N.H=a,N.A=i,Ee=n,me!==null?0:(De=null,xe=0,bi(),Ge)}function wx(){for(;me!==null&&!Q1();)Om(me)}function Om(e){var t=sm(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?Ji(e):me=t}function Bm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=tm(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=tm(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:nc(t);default:cm(n,t),t=me=Nd(t,Dn),t=sm(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?Ji(e):me=t}function yl(e,t,n,a){_n=Ea=null,nc(t),ul=null,vr=0;var i=t.return;try{if(dx(e,i,t,n,xe)){Ge=1,Yi(e,Yt(n,e.current)),me=null;return}}catch(o){if(i!==null)throw me=i,o;Ge=1,Yi(e,Yt(n,e.current)),me=null;return}t.flags&32768?(ve||a===1?e=!0:ml||(xe&536870912)!==0?e=!1:(Wn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Qt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Nm(t,e)):Ji(t)}function Ji(e){var t=e;do{if((t.flags&32768)!==0){Nm(t,Wn);return}e=t.return;var n=mx(t.alternate,t,Dn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ge===0&&(Ge=5)}function Nm(e,t){do{var n=gx(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);Ge=6,me=null}function Um(e,t,n,a,i,o,m,p,j){e.cancelPendingCommit=null;do Fi();while(rt!==0);if((Ee&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Mo,tb(e,n,o,m,p,j),e===De&&(me=De=null,xe=0),pl=t,ta=e,bl=n,Nc=o,Uc=i,Cm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cx(ni,function(){return Vm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,i=Z.p,Z.p=2,m=Ee,Ee|=4;try{px(e,t,n)}finally{Ee=m,Z.p=i,N.T=a}}rt=1,Lm(),Hm(),Gm()}}function Lm(){if(rt===1){rt=0;var e=ta,t=pl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=Z.p;Z.p=2;var i=Ee;Ee|=4;try{vm(t,e);var o=Ic,m=zd(e.containerInfo),p=o.focusedElem,j=o.selectionRange;if(m!==p&&p&&p.ownerDocument&&Ed(p.ownerDocument.documentElement,p)){if(j!==null&&zo(p)){var R=j.start,U=j.end;if(U===void 0&&(U=R),"selectionStart"in p)p.selectionStart=R,p.selectionEnd=Math.min(U,p.value.length);else{var q=p.ownerDocument||document,D=q&&q.defaultView||window;if(D.getSelection){var O=D.getSelection(),ie=p.textContent.length,ae=Math.min(j.start,ie),Re=j.end===void 0?ae:Math.min(j.end,ie);!O.extend&&ae>Re&&(m=Re,Re=ae,ae=m);var z=_d(p,ae),E=_d(p,Re);if(z&&E&&(O.rangeCount!==1||O.anchorNode!==z.node||O.anchorOffset!==z.offset||O.focusNode!==E.node||O.focusOffset!==E.offset)){var T=q.createRange();T.setStart(z.node,z.offset),O.removeAllRanges(),ae>Re?(O.addRange(T),O.extend(E.node,E.offset)):(T.setEnd(E.node,E.offset),O.addRange(T))}}}}for(q=[],O=p;O=O.parentNode;)O.nodeType===1&&q.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<q.length;p++){var G=q[p];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}cs=!!Wc,Ic=Wc=null}finally{Ee=i,Z.p=a,N.T=n}}e.current=t,rt=2}}function Hm(){if(rt===2){rt=0;var e=ta,t=pl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=Z.p;Z.p=2;var i=Ee;Ee|=4;try{pm(e,t.alternate,t)}finally{Ee=i,Z.p=a,N.T=n}}rt=3}}function Gm(){if(rt===4||rt===3){rt=0,K1();var e=ta,t=pl,n=bl,a=Cm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,pl=ta=null,Ym(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ea=null),lo(n),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,i=Z.p,Z.p=2,N.T=null;try{for(var o=e.onRecoverableError,m=0;m<a.length;m++){var p=a[m];o(p.value,{componentStack:p.stack})}}finally{N.T=t,Z.p=i}}(bl&3)!==0&&Fi(),mn(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===Lc?Tr++:(Tr=0,Lc=e):Tr=0,Rr(0)}}function Ym(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cr(t)))}function Fi(e){return Lm(),Hm(),Gm(),Vm()}function Vm(){if(rt!==5)return!1;var e=ta,t=Nc;Nc=0;var n=lo(bl),a=N.T,i=Z.p;try{Z.p=32>n?32:n,N.T=null,n=Uc,Uc=null;var o=ta,m=bl;if(rt=0,pl=ta=null,bl=0,(Ee&6)!==0)throw Error(c(331));var p=Ee;if(Ee|=4,Em(o.current),jm(o,o.current,m,n),Ee=p,Rr(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ql,o)}catch{}return!0}finally{Z.p=i,N.T=a,Ym(e,t)}}function qm(e,t,n){t=Yt(n,t),t=pc(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(Xl(e,2),mn(e))}function Me(e,t,n){if(e.tag===3)qm(e,e,n);else for(;t!==null;){if(t.tag===3){qm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ea===null||!ea.has(a))){e=Yt(n,e),n=Xh(2),a=Qn(t,n,2),a!==null&&(Zh(n,a,t,e),Xl(a,2),mn(a));break}}t=t.return}}function Vc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new yx;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Dc=!0,i.add(n),e=_x.bind(null,e,t,n),t.then(e,e))}function _x(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(xe&n)===n&&(Ge===4||Ge===3&&(xe&62914560)===xe&&300>cn()-Bc?(Ee&2)===0&&xl(e,0):kc|=n,gl===xe&&(gl=0)),mn(e)}function $m(e,t){t===0&&(t=Gf()),e=el(e,t),e!==null&&(Xl(e,t),mn(e))}function Ex(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$m(e,n)}function zx(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),$m(e,n)}function Cx(e,t){return eo(e,t)}var Wi=null,vl=null,qc=!1,Ii=!1,$c=!1,Da=0;function mn(e){e!==vl&&e.next===null&&(vl===null?Wi=vl=e:vl=vl.next=e),Ii=!0,qc||(qc=!0,Tx())}function Rr(e,t){if(!$c&&Ii){$c=!0;do for(var n=!1,a=Wi;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var o=0;else{var m=a.suspendedLanes,p=a.pingedLanes;o=(1<<31-zt(42|e)+1)-1,o&=i&~(m&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Zm(a,o))}else o=xe,o=ri(a,a===De?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Kl(a,o)||(n=!0,Zm(a,o));a=a.next}while(n);$c=!1}}function Ax(){Qm()}function Qm(){Ii=qc=!1;var e=0;Da!==0&&(Ux()&&(e=Da),Da=0);for(var t=cn(),n=null,a=Wi;a!==null;){var i=a.next,o=Km(a,t);o===0?(a.next=null,n===null?Wi=i:n.next=i,i===null&&(vl=n)):(n=a,(e!==0||(o&3)!==0)&&(Ii=!0)),a=i}Rr(e)}function Km(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-zt(o),p=1<<m,j=i[m];j===-1?((p&n)===0||(p&a)!==0)&&(i[m]=eb(p,t)):j<=t&&(e.expiredLanes|=p),o&=~p}if(t=De,n=xe,n=ri(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&to(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Kl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&to(a),lo(n)){case 2:case 8:n=Uf;break;case 32:n=ni;break;case 268435456:n=Lf;break;default:n=ni}return a=Xm.bind(null,e),n=eo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&to(a),e.callbackPriority=2,e.callbackNode=null,2}function Xm(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Fi()&&e.callbackNode!==n)return null;var a=xe;return a=ri(e,e===De?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Tm(e,a,t),Km(e,cn()),e.callbackNode!=null&&e.callbackNode===n?Xm.bind(null,e):null)}function Zm(e,t){if(Fi())return null;Tm(e,t,!0)}function Tx(){Hx(function(){(Ee&6)!==0?eo(Nf,Ax):Qm()})}function Qc(){return Da===0&&(Da=Hf()),Da}function Pm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ui(""+e)}function Jm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Rx(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var o=Pm((i[gt]||null).action),m=a.submitter;m&&(t=(t=m[gt]||null)?Pm(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var p=new mi("action","action",null,a,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Da!==0){var j=m?Jm(i,m):new FormData(i);fc(n,{pending:!0,data:j,method:i.method,action:o},null,j)}}else typeof o=="function"&&(p.preventDefault(),j=m?Jm(i,m):new FormData(i),fc(n,{pending:!0,data:j,method:i.method,action:o},o,j))},currentTarget:i}]})}}for(var Kc=0;Kc<Ro.length;Kc++){var Xc=Ro[Kc],Mx=Xc.toLowerCase(),Dx=Xc[0].toUpperCase()+Xc.slice(1);tn(Mx,"on"+Dx)}tn(Td,"onAnimationEnd"),tn(Rd,"onAnimationIteration"),tn(Md,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Pb,"onTransitionRun"),tn(Jb,"onTransitionStart"),tn(Fb,"onTransitionCancel"),tn(Dd,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mr));function Fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var m=a.length-1;0<=m;m--){var p=a[m],j=p.instance,R=p.currentTarget;if(p=p.listener,j!==o&&i.isPropagationStopped())break e;o=p,i.currentTarget=R;try{o(i)}catch(U){Gi(U)}i.currentTarget=null,o=j}else for(m=0;m<a.length;m++){if(p=a[m],j=p.instance,R=p.currentTarget,p=p.listener,j!==o&&i.isPropagationStopped())break e;o=p,i.currentTarget=R;try{o(i)}catch(U){Gi(U)}i.currentTarget=null,o=j}}}}function ge(e,t){var n=t[ro];n===void 0&&(n=t[ro]=new Set);var a=e+"__bubble";n.has(a)||(Wm(t,e,2,!1),n.add(a))}function Zc(e,t,n){var a=0;t&&(a|=4),Wm(n,e,a,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function Pc(e){if(!e[es]){e[es]=!0,Qf.forEach(function(n){n!=="selectionchange"&&(kx.has(n)||Zc(n,!1,e),Zc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,Zc("selectionchange",!1,t))}}function Wm(e,t,n,a){switch(jg(t)){case 2:var i=iy;break;case 8:i=sy;break;default:i=cu}n=i.bind(null,t,n,e),i=void 0,!bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jc(e,t,n,a,i){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var p=a.stateNode.containerInfo;if(p===i)break;if(m===4)for(m=a.return;m!==null;){var j=m.tag;if((j===3||j===4)&&m.stateNode.containerInfo===i)return;m=m.return}for(;p!==null;){if(m=Ya(p),m===null)return;if(j=m.tag,j===5||j===6||j===26||j===27){a=o=m;continue e}p=p.parentNode}}a=a.return}rd(function(){var R=o,U=go(n),q=[];e:{var D=kd.get(e);if(D!==void 0){var O=mi,ie=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":O=Cb;break;case"focusin":ie="focus",O=So;break;case"focusout":ie="blur",O=So;break;case"beforeblur":case"afterblur":O=So;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=gb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Rb;break;case Td:case Rd:case Md:O=xb;break;case Dd:O=Db;break;case"scroll":case"scrollend":O=hb;break;case"wheel":O=Ob;break;case"copy":case"cut":case"paste":O=vb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ud;break;case"toggle":case"beforetoggle":O=Nb}var ae=(t&4)!==0,Re=!ae&&(e==="scroll"||e==="scrollend"),z=ae?D!==null?D+"Capture":null:D;ae=[];for(var E=R,T;E!==null;){var G=E;if(T=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||T===null||z===null||(G=Jl(E,z),G!=null&&ae.push(Dr(E,G,T))),Re)break;E=E.return}0<ae.length&&(D=new O(D,ie,null,n,U),q.push({event:D,listeners:ae}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",D&&n!==mo&&(ie=n.relatedTarget||n.fromElement)&&(Ya(ie)||ie[Ga]))break e;if((O||D)&&(D=U.window===U?U:(D=U.ownerDocument)?D.defaultView||D.parentWindow:window,O?(ie=n.relatedTarget||n.toElement,O=R,ie=ie?Ya(ie):null,ie!==null&&(Re=d(ie),ae=ie.tag,ie!==Re||ae!==5&&ae!==27&&ae!==6)&&(ie=null)):(O=null,ie=R),O!==ie)){if(ae=od,G="onMouseLeave",z="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ae=ud,G="onPointerLeave",z="onPointerEnter",E="pointer"),Re=O==null?D:Pl(O),T=ie==null?D:Pl(ie),D=new ae(G,E+"leave",O,n,U),D.target=Re,D.relatedTarget=T,G=null,Ya(U)===R&&(ae=new ae(z,E+"enter",ie,n,U),ae.target=T,ae.relatedTarget=Re,G=ae),Re=G,O&&ie)t:{for(ae=O,z=ie,E=0,T=ae;T;T=Sl(T))E++;for(T=0,G=z;G;G=Sl(G))T++;for(;0<E-T;)ae=Sl(ae),E--;for(;0<T-E;)z=Sl(z),T--;for(;E--;){if(ae===z||z!==null&&ae===z.alternate)break t;ae=Sl(ae),z=Sl(z)}ae=null}else ae=null;O!==null&&Im(q,D,O,ae,!1),ie!==null&&Re!==null&&Im(q,Re,ie,ae,!0)}}e:{if(D=R?Pl(R):window,O=D.nodeName&&D.nodeName.toLowerCase(),O==="select"||O==="input"&&D.type==="file")var W=xd;else if(pd(D))if(yd)W=Kb;else{W=$b;var de=qb}else O=D.nodeName,!O||O.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?R&&ho(R.elementType)&&(W=xd):W=Qb;if(W&&(W=W(e,R))){bd(q,W,n,U);break e}de&&de(e,D,R),e==="focusout"&&R&&D.type==="number"&&R.memoizedProps.value!=null&&fo(D,"number",D.value)}switch(de=R?Pl(R):window,e){case"focusin":(pd(de)||de.contentEditable==="true")&&(Fa=de,Co=R,lr=null);break;case"focusout":lr=Co=Fa=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Cd(q,n,U);break;case"selectionchange":if(Zb)break;case"keydown":case"keyup":Cd(q,n,U)}var te;if(wo)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Ja?md(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(fd&&n.locale!=="ko"&&(Ja||re!=="onCompositionStart"?re==="onCompositionEnd"&&Ja&&(te=id()):(Yn=U,xo="value"in Yn?Yn.value:Yn.textContent,Ja=!0)),de=ts(R,re),0<de.length&&(re=new cd(re,e,null,n,U),q.push({event:re,listeners:de}),te?re.data=te:(te=gd(n),te!==null&&(re.data=te)))),(te=Lb?Hb(e,n):Gb(e,n))&&(re=ts(R,"onBeforeInput"),0<re.length&&(de=new cd("onBeforeInput","beforeinput",null,n,U),q.push({event:de,listeners:re}),de.data=te)),Rx(q,e,R,n,U)}Fm(q,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ts(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Jl(e,n),i!=null&&a.unshift(Dr(e,i,o)),i=Jl(e,t),i!=null&&a.push(Dr(e,i,o))),e.tag===3)return a;e=e.return}return[]}function Sl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,t,n,a,i){for(var o=t._reactName,m=[];n!==null&&n!==a;){var p=n,j=p.alternate,R=p.stateNode;if(p=p.tag,j!==null&&j===a)break;p!==5&&p!==26&&p!==27||R===null||(j=R,i?(R=Jl(n,o),R!=null&&m.unshift(Dr(n,R,j))):i||(R=Jl(n,o),R!=null&&m.push(Dr(n,R,j)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Ox=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(Ox,`
`).replace(Bx,"")}function tg(e,t){return t=eg(t),eg(e)===t}function ns(){}function Te(e,t,n,a,i,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Xa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Xa(e,""+a);break;case"className":si(e,"class",a);break;case"tabIndex":si(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,n,a);break;case"style":ad(e,a,o);break;case"data":if(t!=="object"){si(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ui(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ui(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=ns);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ui(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ii(e,"popover",a);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ii(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=fb.get(n)||n,ii(e,n,a))}}function Fc(e,t,n,a,i,o){switch(n){case"style":ad(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Xa(e,a):(typeof a=="number"||typeof a=="bigint")&&Xa(e,""+a);break;case"onScroll":a!=null&&ge("scroll",e);break;case"onScrollEnd":a!=null&&ge("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ns);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),o=e[gt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ii(e,n,a)}}}function it(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var a=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var m=n[o];if(m!=null)switch(o){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Te(e,t,o,m,n,null)}}i&&Te(e,t,"srcSet",n.srcSet,n,null),a&&Te(e,t,"src",n.src,n,null);return;case"input":ge("invalid",e);var p=o=m=i=null,j=null,R=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":i=U;break;case"type":m=U;break;case"checked":j=U;break;case"defaultChecked":R=U;break;case"value":o=U;break;case"defaultValue":p=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Te(e,t,a,U,n,null)}}If(e,o,p,j,R,m,i,!1),oi(e);return;case"select":ge("invalid",e),a=m=o=null;for(i in n)if(n.hasOwnProperty(i)&&(p=n[i],p!=null))switch(i){case"value":o=p;break;case"defaultValue":m=p;break;case"multiple":a=p;default:Te(e,t,i,p,n,null)}t=o,n=m,e.multiple=!!a,t!=null?Ka(e,!!a,t,!1):n!=null&&Ka(e,!!a,n,!0);return;case"textarea":ge("invalid",e),o=i=a=null;for(m in n)if(n.hasOwnProperty(m)&&(p=n[m],p!=null))switch(m){case"value":a=p;break;case"defaultValue":i=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:Te(e,t,m,p,n,null)}td(e,a,i,o),oi(e);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(a=n[j],a!=null))switch(j){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Te(e,t,j,a,n,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(a=0;a<Mr.length;a++)ge(Mr[a],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(a=n[R],a!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Te(e,t,R,a,n,null)}return;default:if(ho(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Fc(e,t,U,a,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!=null&&Te(e,t,p,a,n,null))}function Nx(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,m=null,p=null,j=null,R=null,U=null;for(O in n){var q=n[O];if(n.hasOwnProperty(O)&&q!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":j=q;default:a.hasOwnProperty(O)||Te(e,t,O,null,a,q)}}for(var D in a){var O=a[D];if(q=n[D],a.hasOwnProperty(D)&&(O!=null||q!=null))switch(D){case"type":o=O;break;case"name":i=O;break;case"checked":R=O;break;case"defaultChecked":U=O;break;case"value":m=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:O!==q&&Te(e,t,D,O,a,q)}}uo(e,m,p,j,R,U,o,i);return;case"select":O=m=p=D=null;for(o in n)if(j=n[o],n.hasOwnProperty(o)&&j!=null)switch(o){case"value":break;case"multiple":O=j;default:a.hasOwnProperty(o)||Te(e,t,o,null,a,j)}for(i in a)if(o=a[i],j=n[i],a.hasOwnProperty(i)&&(o!=null||j!=null))switch(i){case"value":D=o;break;case"defaultValue":p=o;break;case"multiple":m=o;default:o!==j&&Te(e,t,i,o,a,j)}t=p,n=m,a=O,D!=null?Ka(e,!!n,D,!1):!!a!=!!n&&(t!=null?Ka(e,!!n,t,!0):Ka(e,!!n,n?[]:"",!1));return;case"textarea":O=D=null;for(p in n)if(i=n[p],n.hasOwnProperty(p)&&i!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Te(e,t,p,null,a,i)}for(m in a)if(i=a[m],o=n[m],a.hasOwnProperty(m)&&(i!=null||o!=null))switch(m){case"value":D=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==o&&Te(e,t,m,i,a,o)}ed(e,D,O);return;case"option":for(var ie in n)if(D=n[ie],n.hasOwnProperty(ie)&&D!=null&&!a.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Te(e,t,ie,null,a,D)}for(j in a)if(D=a[j],O=n[j],a.hasOwnProperty(j)&&D!==O&&(D!=null||O!=null))switch(j){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Te(e,t,j,D,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in n)D=n[ae],n.hasOwnProperty(ae)&&D!=null&&!a.hasOwnProperty(ae)&&Te(e,t,ae,null,a,D);for(R in a)if(D=a[R],O=n[R],a.hasOwnProperty(R)&&D!==O&&(D!=null||O!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Te(e,t,R,D,a,O)}return;default:if(ho(t)){for(var Re in n)D=n[Re],n.hasOwnProperty(Re)&&D!==void 0&&!a.hasOwnProperty(Re)&&Fc(e,t,Re,void 0,a,D);for(U in a)D=a[U],O=n[U],!a.hasOwnProperty(U)||D===O||D===void 0&&O===void 0||Fc(e,t,U,D,a,O);return}}for(var z in n)D=n[z],n.hasOwnProperty(z)&&D!=null&&!a.hasOwnProperty(z)&&Te(e,t,z,null,a,D);for(q in a)D=a[q],O=n[q],!a.hasOwnProperty(q)||D===O||D==null&&O==null||Te(e,t,q,D,a,O)}var Wc=null,Ic=null;function as(e){return e.nodeType===9?e:e.ownerDocument}function ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=null;function Ux(){var e=window.event;return e&&e.type==="popstate"?e===tu?!1:(tu=e,!0):(tu=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(e){return rg.resolve(null).then(e).catch(Gx)}:lg;function Gx(e){setTimeout(function(){throw e})}function aa(e){return e==="head"}function ig(e,t){var n=t,a=0,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<a&&8>a){n=a;var m=e.ownerDocument;if(n&1&&kr(m.documentElement),n&2&&kr(m.body),n&4)for(n=m.head,kr(n),m=n.firstChild;m;){var p=m.nextSibling,j=m.nodeName;m[Zl]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=p}}if(i===0){e.removeChild(o),Yr(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=o}while(n);Yr(t)}function nu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":nu(n),io(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Yx(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=an(e.nextSibling),e===null)break}return null}function Vx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=an(e.nextSibling),e===null))return null;return e}function au(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function qx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var lu=null;function sg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function og(e,t,n){switch(t=as(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function kr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);io(e)}var Xt=new Map,cg=new Set;function ls(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=Z.d;Z.d={f:$x,r:Qx,D:Kx,C:Xx,L:Zx,m:Px,X:Fx,S:Jx,M:Wx};function $x(){var e=kn.f(),t=Pi();return e||t}function Qx(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Th(t):kn.r(e)}var jl=typeof document>"u"?null:document;function ug(e,t,n){var a=jl;if(a&&typeof t=="string"&&t){var i=Gt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),cg.has(i)||(cg.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),it(t,"link",e),Je(t),a.head.appendChild(t)))}}function Kx(e){kn.D(e),ug("dns-prefetch",e,null)}function Xx(e,t){kn.C(e,t),ug("preconnect",e,t)}function Zx(e,t,n){kn.L(e,t,n);var a=jl;if(a&&e&&t){var i='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Gt(n.imageSizes)+'"]')):i+='[href="'+Gt(e)+'"]';var o=i;switch(t){case"style":o=wl(e);break;case"script":o=_l(e)}Xt.has(o)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xt.set(o,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(Or(o))||t==="script"&&a.querySelector(Br(o))||(t=a.createElement("link"),it(t,"link",e),Je(t),a.head.appendChild(t)))}}function Px(e,t){kn.m(e,t);var n=jl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Gt(a)+'"][href="'+Gt(e)+'"]',o=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=_l(e)}if(!Xt.has(o)&&(e=x({rel:"modulepreload",href:e},t),Xt.set(o,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Br(o)))return}a=n.createElement("link"),it(a,"link",e),Je(a),n.head.appendChild(a)}}}function Jx(e,t,n){kn.S(e,t,n);var a=jl;if(a&&e){var i=qa(a).hoistableStyles,o=wl(e);t=t||"default";var m=i.get(o);if(!m){var p={loading:0,preload:null};if(m=a.querySelector(Or(o)))p.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xt.get(o))&&ru(e,n);var j=m=a.createElement("link");Je(j),it(j,"link",e),j._p=new Promise(function(R,U){j.onload=R,j.onerror=U}),j.addEventListener("load",function(){p.loading|=1}),j.addEventListener("error",function(){p.loading|=2}),p.loading|=4,rs(m,t,a)}m={type:"stylesheet",instance:m,count:1,state:p},i.set(o,m)}}}function Fx(e,t){kn.X(e,t);var n=jl;if(n&&e){var a=qa(n).hoistableScripts,i=_l(e),o=a.get(i);o||(o=n.querySelector(Br(i)),o||(e=x({src:e,async:!0},t),(t=Xt.get(i))&&iu(e,t),o=n.createElement("script"),Je(o),it(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function Wx(e,t){kn.M(e,t);var n=jl;if(n&&e){var a=qa(n).hoistableScripts,i=_l(e),o=a.get(i);o||(o=n.querySelector(Br(i)),o||(e=x({src:e,async:!0,type:"module"},t),(t=Xt.get(i))&&iu(e,t),o=n.createElement("script"),Je(o),it(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function fg(e,t,n,a){var i=(i=le.current)?ls(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wl(n.href),n=qa(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wl(n.href);var o=qa(i).hoistableStyles,m=o.get(e);if(m||(i=i.ownerDocument||i,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=i.querySelector(Or(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xt.set(e,n),o||Ix(i,e,n,m.state))),t&&a===null)throw Error(c(528,""));return m}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(n),n=qa(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function wl(e){return'href="'+Gt(e)+'"'}function Or(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Ix(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),it(t,"link",n),Je(t),e.head.appendChild(t))}function _l(e){return'[src="'+Gt(e)+'"]'}function Br(e){return"script[async]"+e}function hg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Gt(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var i=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),it(a,"style",i),rs(a,n.precedence,e),t.instance=a;case"stylesheet":i=wl(n.href);var o=e.querySelector(Or(i));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;a=dg(n),(i=Xt.get(i))&&ru(a,i),o=(e.ownerDocument||e).createElement("link"),Je(o);var m=o;return m._p=new Promise(function(p,j){m.onload=p,m.onerror=j}),it(o,"link",a),t.state.loading|=4,rs(o,n.precedence,e),t.instance=o;case"script":return o=_l(n.src),(i=e.querySelector(Br(o)))?(t.instance=i,Je(i),i):(a=n,(i=Xt.get(o))&&(a=x({},n),iu(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Je(i),it(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,rs(a,n.precedence,e));return t.instance}function rs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,o=i,m=0;m<a.length;m++){var p=a[m];if(p.dataset.precedence===t)o=p;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var is=null;function mg(e,t,n){if(is===null){var a=new Map,i=is=new Map;i.set(n,a)}else i=is,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Zl]||o[ot]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var p=a.get(m);p?p.push(o):a.set(m,[o])}}return a}function gg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ey(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Nr=null;function ty(){}function ny(e,t,n){if(Nr===null)throw Error(c(475));var a=Nr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=wl(n.href),o=e.querySelector(Or(i));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=ss.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,Je(o);return}o=e.ownerDocument||e,n=dg(n),(i=Xt.get(i))&&ru(n,i),o=o.createElement("link"),Je(o);var m=o;m._p=new Promise(function(p,j){m.onload=p,m.onerror=j}),it(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=ss.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function ay(){if(Nr===null)throw Error(c(475));var e=Nr;return e.stylesheets&&e.count===0&&su(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&su(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ss(){if(this.count--,this.count===0){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var os=null;function su(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,os=new Map,t.forEach(ly,e),os=null,ss.call(e))}function ly(e,t){if(!(t.state.loading&4)){var n=os.get(e);if(n)var a=n.get(null);else{n=new Map,os.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var m=i[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),a=m)}a&&n.set(null,a)}i=t.instance,m=i.getAttribute("data-precedence"),o=n.get(m)||a,o===a&&n.set(null,i),n.set(m,i),this.count++,a=ss.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ur={$$typeof:A,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function ry(e,t,n,a,i,o,m,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=no(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.hiddenUpdates=no(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function bg(e,t,n,a,i,o,m,p,j,R,U,q){return e=new ry(e,t,n,m,p,j,R,q),t=1,o===!0&&(t|=24),o=At(3,null,null,t),e.current=o,o.stateNode=e,t=Vo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},Ko(o),e}function xg(e){return e?(e=tl,e):tl}function yg(e,t,n,a,i,o){i=xg(i),a.context===null?a.context=i:a.pendingContext=i,a=$n(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Qn(e,a,t),n!==null&&(kt(n,e,t),hr(n,e,t))}function vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ou(e,t){vg(e,t),(e=e.alternate)&&vg(e,t)}function Sg(e){if(e.tag===13){var t=el(e,67108864);t!==null&&kt(t,e,67108864),ou(e,67108864)}}var cs=!0;function iy(e,t,n,a){var i=N.T;N.T=null;var o=Z.p;try{Z.p=2,cu(e,t,n,a)}finally{Z.p=o,N.T=i}}function sy(e,t,n,a){var i=N.T;N.T=null;var o=Z.p;try{Z.p=8,cu(e,t,n,a)}finally{Z.p=o,N.T=i}}function cu(e,t,n,a){if(cs){var i=uu(a);if(i===null)Jc(e,t,a,us,n),wg(e,a);else if(cy(i,e,t,n,a))a.stopPropagation();else if(wg(e,a),t&4&&-1<oy.indexOf(e)){for(;i!==null;){var o=Va(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=ga(o.pendingLanes);if(m!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;m;){var j=1<<31-zt(m);p.entanglements[1]|=j,m&=~j}mn(o),(Ee&6)===0&&(Xi=cn()+500,Rr(0))}}break;case 13:p=el(o,2),p!==null&&kt(p,o,2),Pi(),ou(o,2)}if(o=uu(a),o===null&&Jc(e,t,a,us,n),o===i)break;i=o}i!==null&&a.stopPropagation()}else Jc(e,t,a,null,n)}}function uu(e){return e=go(e),fu(e)}var us=null;function fu(e){if(us=null,e=Ya(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return us=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X1()){case Nf:return 2;case Uf:return 8;case ni:case Z1:return 32;case Lf:return 268435456;default:return 32}default:return 32}}var du=!1,la=null,ra=null,ia=null,Lr=new Map,Hr=new Map,sa=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wg(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hr.delete(t.pointerId)}}function Gr(e,t,n,a,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&Sg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cy(e,t,n,a,i){switch(t){case"focusin":return la=Gr(la,e,t,n,a,i),!0;case"dragenter":return ra=Gr(ra,e,t,n,a,i),!0;case"mouseover":return ia=Gr(ia,e,t,n,a,i),!0;case"pointerover":var o=i.pointerId;return Lr.set(o,Gr(Lr.get(o)||null,e,t,n,a,i)),!0;case"gotpointercapture":return o=i.pointerId,Hr.set(o,Gr(Hr.get(o)||null,e,t,n,a,i)),!0}return!1}function _g(e){var t=Ya(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,nb(e.priority,function(){if(n.tag===13){var a=Dt();a=ao(a);var i=el(n,a);i!==null&&kt(i,n,a),ou(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);mo=a,n.target.dispatchEvent(a),mo=null}else return t=Va(n),t!==null&&Sg(t),e.blockedOn=n,!1;t.shift()}return!0}function Eg(e,t,n){fs(e)&&n.delete(t)}function uy(){du=!1,la!==null&&fs(la)&&(la=null),ra!==null&&fs(ra)&&(ra=null),ia!==null&&fs(ia)&&(ia=null),Lr.forEach(Eg),Hr.forEach(Eg)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,uy)))}var hs=null;function zg(e){hs!==e&&(hs=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){hs===e&&(hs=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(fu(a||n)===null)continue;break}var o=Va(n);o!==null&&(e.splice(t,3),t-=3,fc(o,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function Yr(e){function t(j){return ds(j,e)}la!==null&&ds(la,e),ra!==null&&ds(ra,e),ia!==null&&ds(ia,e),Lr.forEach(t),Hr.forEach(t);for(var n=0;n<sa.length;n++){var a=sa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)_g(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],o=n[a+1],m=i[gt]||null;if(typeof o=="function")m||zg(n);else if(m){var p=null;if(o&&o.hasAttribute("formAction")){if(i=o,m=o[gt]||null)p=m.formAction;else if(fu(i)!==null)continue}else p=m.action;typeof p=="function"?n[a+1]=p:(n.splice(a,3),a-=3),zg(n)}}}function hu(e){this._internalRoot=e}ms.prototype.render=hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=Dt();yg(n,a,e,t,null,null)},ms.prototype.unmount=hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yg(e.current,2,null,e,null,null),Pi(),t[Ga]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var t=qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&_g(e)}};var Cg=s.version;if(Cg!=="19.1.0")throw Error(c(527,Cg,"19.1.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var fy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{Ql=gs.inject(fy),Et=gs}catch{}}return qr.createRoot=function(e,t){if(!f(e))throw Error(c(299));var n=!1,a="",i=qh,o=$h,m=Qh,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=bg(e,1,!1,null,null,n,a,i,o,m,p,null),e[Ga]=t.current,Pc(e),new hu(t)},qr.hydrateRoot=function(e,t,n){if(!f(e))throw Error(c(299));var a=!1,i="",o=qh,m=$h,p=Qh,j=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(j=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=bg(e,1,!0,t,n??null,a,i,o,m,p,j,R),t.context=xg(null),n=t.current,a=Dt(),a=ao(a),i=$n(a),i.callback=null,Qn(n,i,a),n=a,t.current.lanes=n,Xl(t,n),mn(t),e[Ga]=t.current,Pc(e),new ms(t)},qr.version="19.1.0",qr}var Ug;function jy(){if(Ug)return pu.exports;Ug=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),pu.exports=Sy(),pu.exports}var wy=jy(),nt=function(){return nt=Object.assign||function(s){for(var u,c=1,f=arguments.length;c<f;c++){u=arguments[c];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(s[d]=u[d])}return s},nt.apply(this,arguments)};function Bl(l,s,u){if(u||arguments.length===2)for(var c=0,f=s.length,d;c<f;c++)(d||!(c in s))&&(d||(d=Array.prototype.slice.call(s,0,c)),d[c]=s[c]);return l.concat(d||Array.prototype.slice.call(s))}var ke="-ms-",Pr="-moz-",we="-webkit-",D0="comm",$s="rule",bf="decl",_y="@import",k0="@keyframes",Ey="@layer",O0=Math.abs,xf=String.fromCharCode,tf=Object.assign;function zy(l,s){return tt(l,0)^45?(((s<<2^tt(l,0))<<2^tt(l,1))<<2^tt(l,2))<<2^tt(l,3):0}function B0(l){return l.trim()}function Bn(l,s){return(l=s.exec(l))?l[0]:l}function ue(l,s,u){return l.replace(s,u)}function Es(l,s,u){return l.indexOf(s,u)}function tt(l,s){return l.charCodeAt(s)|0}function Nl(l,s,u){return l.slice(s,u)}function pn(l){return l.length}function N0(l){return l.length}function Xr(l,s){return s.push(l),l}function Cy(l,s){return l.map(s).join("")}function Lg(l,s){return l.filter(function(u){return!Bn(u,s)})}var Qs=1,Ul=1,U0=0,Zt=0,Ke=0,Gl="";function Ks(l,s,u,c,f,d,y,b){return{value:l,root:s,parent:u,type:c,props:f,children:d,line:Qs,column:Ul,length:y,return:"",siblings:b}}function ua(l,s){return tf(Ks("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},s)}function El(l){for(;l.root;)l=ua(l.root,{children:[l]});Xr(l,l.siblings)}function Ay(){return Ke}function Ty(){return Ke=Zt>0?tt(Gl,--Zt):0,Ul--,Ke===10&&(Ul=1,Qs--),Ke}function ln(){return Ke=Zt<U0?tt(Gl,Zt++):0,Ul++,Ke===10&&(Ul=1,Qs++),Ke}function Ba(){return tt(Gl,Zt)}function zs(){return Zt}function Xs(l,s){return Nl(Gl,l,s)}function nf(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ry(l){return Qs=Ul=1,U0=pn(Gl=l),Zt=0,[]}function My(l){return Gl="",l}function vu(l){return B0(Xs(Zt-1,af(l===91?l+2:l===40?l+1:l)))}function Dy(l){for(;(Ke=Ba())&&Ke<33;)ln();return nf(l)>2||nf(Ke)>3?"":" "}function ky(l,s){for(;--s&&ln()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return Xs(l,zs()+(s<6&&Ba()==32&&ln()==32))}function af(l){for(;ln();)switch(Ke){case l:return Zt;case 34:case 39:l!==34&&l!==39&&af(Ke);break;case 40:l===41&&af(l);break;case 92:ln();break}return Zt}function Oy(l,s){for(;ln()&&l+Ke!==57;)if(l+Ke===84&&Ba()===47)break;return"/*"+Xs(s,Zt-1)+"*"+xf(l===47?l:ln())}function By(l){for(;!nf(Ba());)ln();return Xs(l,Zt)}function Ny(l){return My(Cs("",null,null,null,[""],l=Ry(l),0,[0],l))}function Cs(l,s,u,c,f,d,y,b,h){for(var g=0,x=0,S=y,w=0,k=0,M=0,B=1,L=1,V=1,X=0,A="",$=f,H=d,F=c,Y=A;L;)switch(M=X,X=ln()){case 40:if(M!=108&&tt(Y,S-1)==58){Es(Y+=ue(vu(X),"&","&\f"),"&\f",O0(g?b[g-1]:0))!=-1&&(V=-1);break}case 34:case 39:case 91:Y+=vu(X);break;case 9:case 10:case 13:case 32:Y+=Dy(M);break;case 92:Y+=ky(zs()-1,7);continue;case 47:switch(Ba()){case 42:case 47:Xr(Uy(Oy(ln(),zs()),s,u,h),h);break;default:Y+="/"}break;case 123*B:b[g++]=pn(Y)*V;case 125*B:case 59:case 0:switch(X){case 0:case 125:L=0;case 59+x:V==-1&&(Y=ue(Y,/\f/g,"")),k>0&&pn(Y)-S&&Xr(k>32?Gg(Y+";",c,u,S-1,h):Gg(ue(Y," ","")+";",c,u,S-2,h),h);break;case 59:Y+=";";default:if(Xr(F=Hg(Y,s,u,g,x,f,b,A,$=[],H=[],S,d),d),X===123)if(x===0)Cs(Y,s,F,F,$,d,S,b,H);else switch(w===99&&tt(Y,3)===110?100:w){case 100:case 108:case 109:case 115:Cs(l,F,F,c&&Xr(Hg(l,F,F,0,0,f,b,A,f,$=[],S,H),H),f,H,S,b,c?$:H);break;default:Cs(Y,F,F,F,[""],H,0,b,H)}}g=x=k=0,B=V=1,A=Y="",S=y;break;case 58:S=1+pn(Y),k=M;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&Ty()==125)continue}switch(Y+=xf(X),X*B){case 38:V=x>0?1:(Y+="\f",-1);break;case 44:b[g++]=(pn(Y)-1)*V,V=1;break;case 64:Ba()===45&&(Y+=vu(ln())),w=Ba(),x=S=pn(A=Y+=By(zs())),X++;break;case 45:M===45&&pn(Y)==2&&(B=0)}}return d}function Hg(l,s,u,c,f,d,y,b,h,g,x,S){for(var w=f-1,k=f===0?d:[""],M=N0(k),B=0,L=0,V=0;B<c;++B)for(var X=0,A=Nl(l,w+1,w=O0(L=y[B])),$=l;X<M;++X)($=B0(L>0?k[X]+" "+A:ue(A,/&\f/g,k[X])))&&(h[V++]=$);return Ks(l,s,u,f===0?$s:b,h,g,x,S)}function Uy(l,s,u,c){return Ks(l,s,u,D0,xf(Ay()),Nl(l,2,-2),0,c)}function Gg(l,s,u,c,f){return Ks(l,s,u,bf,Nl(l,0,c),Nl(l,c+1,-1),c,f)}function L0(l,s,u){switch(zy(l,s)){case 5103:return we+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+l+l;case 4789:return Pr+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return we+l+Pr+l+ke+l+l;case 5936:switch(tt(l,s+11)){case 114:return we+l+ke+ue(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return we+l+ke+ue(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return we+l+ke+ue(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return we+l+ke+l+l;case 6165:return we+l+ke+"flex-"+l+l;case 5187:return we+l+ue(l,/(\w+).+(:[^]+)/,we+"box-$1$2"+ke+"flex-$1$2")+l;case 5443:return we+l+ke+"flex-item-"+ue(l,/flex-|-self/g,"")+(Bn(l,/flex-|baseline/)?"":ke+"grid-row-"+ue(l,/flex-|-self/g,""))+l;case 4675:return we+l+ke+"flex-line-pack"+ue(l,/align-content|flex-|-self/g,"")+l;case 5548:return we+l+ke+ue(l,"shrink","negative")+l;case 5292:return we+l+ke+ue(l,"basis","preferred-size")+l;case 6060:return we+"box-"+ue(l,"-grow","")+we+l+ke+ue(l,"grow","positive")+l;case 4554:return we+ue(l,/([^-])(transform)/g,"$1"+we+"$2")+l;case 6187:return ue(ue(ue(l,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),l,"")+l;case 5495:case 3959:return ue(l,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ue(ue(l,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+l+l;case 4200:if(!Bn(l,/flex-|baseline/))return ke+"grid-column-align"+Nl(l,s)+l;break;case 2592:case 3360:return ke+ue(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(c,f){return s=f,Bn(c.props,/grid-\w+-end/)})?~Es(l+(u=u[s].value),"span",0)?l:ke+ue(l,"-start","")+l+ke+"grid-row-span:"+(~Es(u,"span",0)?Bn(u,/\d+/):+Bn(u,/\d+/)-+Bn(l,/\d+/))+";":ke+ue(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(c){return Bn(c.props,/grid-\w+-start/)})?l:ke+ue(ue(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ue(l,/(.+)-inline(.+)/,we+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(l)-1-s>6)switch(tt(l,s+1)){case 109:if(tt(l,s+4)!==45)break;case 102:return ue(l,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Pr+(tt(l,s+3)==108?"$3":"$2-$3"))+l;case 115:return~Es(l,"stretch",0)?L0(ue(l,"stretch","fill-available"),s,u)+l:l}break;case 5152:case 5920:return ue(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,f,d,y,b,h,g){return ke+f+":"+d+g+(y?ke+f+"-span:"+(b?h:+h-+d)+g:"")+l});case 4949:if(tt(l,s+6)===121)return ue(l,":",":"+we)+l;break;case 6444:switch(tt(l,tt(l,14)===45?18:11)){case 120:return ue(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(tt(l,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+ke+"$2box$3")+l;case 100:return ue(l,":",":"+ke)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(l,"scroll-","scroll-snap-")+l}return l}function Os(l,s){for(var u="",c=0;c<l.length;c++)u+=s(l[c],c,l,s)||"";return u}function Ly(l,s,u,c){switch(l.type){case Ey:if(l.children.length)break;case _y:case bf:return l.return=l.return||l.value;case D0:return"";case k0:return l.return=l.value+"{"+Os(l.children,c)+"}";case $s:if(!pn(l.value=l.props.join(",")))return""}return pn(u=Os(l.children,c))?l.return=l.value+"{"+u+"}":""}function Hy(l){var s=N0(l);return function(u,c,f,d){for(var y="",b=0;b<s;b++)y+=l[b](u,c,f,d)||"";return y}}function Gy(l){return function(s){s.root||(s=s.return)&&l(s)}}function Yy(l,s,u,c){if(l.length>-1&&!l.return)switch(l.type){case bf:l.return=L0(l.value,l.length,u);return;case k0:return Os([ua(l,{value:ue(l.value,"@","@"+we)})],c);case $s:if(l.length)return Cy(u=l.props,function(f){switch(Bn(f,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":El(ua(l,{props:[ue(f,/:(read-\w+)/,":"+Pr+"$1")]})),El(ua(l,{props:[f]})),tf(l,{props:Lg(u,c)});break;case"::placeholder":El(ua(l,{props:[ue(f,/:(plac\w+)/,":"+we+"input-$1")]})),El(ua(l,{props:[ue(f,/:(plac\w+)/,":"+Pr+"$1")]})),El(ua(l,{props:[ue(f,/:(plac\w+)/,ke+"input-$1")]})),El(ua(l,{props:[f]})),tf(l,{props:Lg(u,c)});break}return""})}}var Vy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},Ll=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",H0="active",G0="data-styled-version",Zs="6.1.19",yf=`/*!sc*/
`,Bs=typeof window<"u"&&typeof document<"u",qy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),$y={},Ps=Object.freeze([]),Hl=Object.freeze({});function Y0(l,s,u){return u===void 0&&(u=Hl),l.theme!==u.theme&&l.theme||s||u.theme}var V0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ky=/(^-|-$)/g;function Yg(l){return l.replace(Qy,"-").replace(Ky,"")}var Xy=/(a)(d)/gi,ps=52,Vg=function(l){return String.fromCharCode(l+(l>25?39:97))};function lf(l){var s,u="";for(s=Math.abs(l);s>ps;s=s/ps|0)u=Vg(s%ps)+u;return(Vg(s%ps)+u).replace(Xy,"$1-$2")}var Su,q0=5381,kl=function(l,s){for(var u=s.length;u;)l=33*l^s.charCodeAt(--u);return l},$0=function(l){return kl(q0,l)};function vf(l){return lf($0(l)>>>0)}function Zy(l){return l.displayName||l.name||"Component"}function ju(l){return typeof l=="string"&&!0}var Q0=typeof Symbol=="function"&&Symbol.for,K0=Q0?Symbol.for("react.memo"):60115,Py=Q0?Symbol.for("react.forward_ref"):60112,Jy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},X0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wy=((Su={})[Py]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Su[K0]=X0,Su);function qg(l){return("type"in(s=l)&&s.type.$$typeof)===K0?X0:"$$typeof"in l?Wy[l.$$typeof]:Jy;var s}var Iy=Object.defineProperty,ev=Object.getOwnPropertyNames,$g=Object.getOwnPropertySymbols,tv=Object.getOwnPropertyDescriptor,nv=Object.getPrototypeOf,Qg=Object.prototype;function Z0(l,s,u){if(typeof s!="string"){if(Qg){var c=nv(s);c&&c!==Qg&&Z0(l,c,u)}var f=ev(s);$g&&(f=f.concat($g(s)));for(var d=qg(l),y=qg(s),b=0;b<f.length;++b){var h=f[b];if(!(h in Fy||u&&u[h]||y&&h in y||d&&h in d)){var g=tv(s,h);try{Iy(l,h,g)}catch{}}}}return l}function Na(l){return typeof l=="function"}function Sf(l){return typeof l=="object"&&"styledComponentId"in l}function Oa(l,s){return l&&s?"".concat(l," ").concat(s):l||s||""}function Ns(l,s){if(l.length===0)return"";for(var u=l[0],c=1;c<l.length;c++)u+=l[c];return u}function Jr(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function rf(l,s,u){if(u===void 0&&(u=!1),!u&&!Jr(l)&&!Array.isArray(l))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)l[c]=rf(l[c],s[c]);else if(Jr(s))for(var c in s)l[c]=rf(l[c],s[c]);return l}function jf(l,s){Object.defineProperty(l,"toString",{value:s})}function Ua(l){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var av=function(){function l(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return l.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},l.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,f=c.length,d=f;s>=d;)if((d<<=1)<0)throw Ua(16,"".concat(s));this.groupSizes=new Uint32Array(d),this.groupSizes.set(c),this.length=d;for(var y=f;y<d;y++)this.groupSizes[y]=0}for(var b=this.indexOfGroup(s+1),h=(y=0,u.length);y<h;y++)this.tag.insertRule(b,u[y])&&(this.groupSizes[s]++,b++)},l.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),f=c+u;this.groupSizes[s]=0;for(var d=c;d<f;d++)this.tag.deleteRule(c)}},l.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],f=this.indexOfGroup(s),d=f+c,y=f;y<d;y++)u+="".concat(this.tag.getRule(y)).concat(yf);return u},l}(),As=new Map,Us=new Map,Ts=1,bs=function(l){if(As.has(l))return As.get(l);for(;Us.has(Ts);)Ts++;var s=Ts++;return As.set(l,s),Us.set(s,l),s},lv=function(l,s){Ts=s+1,As.set(l,s),Us.set(s,l)},rv="style[".concat(Ll,"][").concat(G0,'="').concat(Zs,'"]'),iv=new RegExp("^".concat(Ll,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sv=function(l,s,u){for(var c,f=u.split(","),d=0,y=f.length;d<y;d++)(c=f[d])&&l.registerName(s,c)},ov=function(l,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(yf),f=[],d=0,y=c.length;d<y;d++){var b=c[d].trim();if(b){var h=b.match(iv);if(h){var g=0|parseInt(h[1],10),x=h[2];g!==0&&(lv(x,g),sv(l,x,h[3]),l.getTag().insertRules(g,f)),f.length=0}else f.push(b)}}},Kg=function(l){for(var s=document.querySelectorAll(rv),u=0,c=s.length;u<c;u++){var f=s[u];f&&f.getAttribute(Ll)!==H0&&(ov(l,f),f.parentNode&&f.parentNode.removeChild(f))}};function cv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P0=function(l){var s=document.head,u=l||s,c=document.createElement("style"),f=function(b){var h=Array.from(b.querySelectorAll("style[".concat(Ll,"]")));return h[h.length-1]}(u),d=f!==void 0?f.nextSibling:null;c.setAttribute(Ll,H0),c.setAttribute(G0,Zs);var y=cv();return y&&c.setAttribute("nonce",y),u.insertBefore(c,d),c},uv=function(){function l(s){this.element=P0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,f=0,d=c.length;f<d;f++){var y=c[f];if(y.ownerNode===u)return y}throw Ua(17)}(this.element),this.length=0}return l.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},l.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},l}(),fv=function(){function l(s){this.element=P0(s),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},l.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},l}(),dv=function(){function l(s){this.rules=[],this.length=0}return l.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},l.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},l.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},l}(),Xg=Bs,hv={isServer:!Bs,useCSSOMInjection:!qy},Ls=function(){function l(s,u,c){s===void 0&&(s=Hl),u===void 0&&(u={});var f=this;this.options=nt(nt({},hv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&Bs&&Xg&&(Xg=!1,Kg(this)),jf(this,function(){return function(d){for(var y=d.getTag(),b=y.length,h="",g=function(S){var w=function(V){return Us.get(V)}(S);if(w===void 0)return"continue";var k=d.names.get(w),M=y.getGroup(S);if(k===void 0||!k.size||M.length===0)return"continue";var B="".concat(Ll,".g").concat(S,'[id="').concat(w,'"]'),L="";k!==void 0&&k.forEach(function(V){V.length>0&&(L+="".concat(V,","))}),h+="".concat(M).concat(B,'{content:"').concat(L,'"}').concat(yf)},x=0;x<b;x++)g(x);return h}(f)})}return l.registerId=function(s){return bs(s)},l.prototype.rehydrate=function(){!this.server&&Bs&&Kg(this)},l.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new l(nt(nt({},this.options),s),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,f=u.target;return u.isServer?new dv(f):c?new uv(f):new fv(f)}(this.options),new av(s)));var s},l.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},l.prototype.registerName=function(s,u){if(bs(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},l.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(bs(s),c)},l.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},l.prototype.clearRules=function(s){this.getTag().clearGroup(bs(s)),this.clearNames(s)},l.prototype.clearTag=function(){this.tag=void 0},l}(),mv=/&/g,gv=/^\s*\/\/.*$/gm;function J0(l,s){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=J0(u.children,s)),u})}function pv(l){var s,u,c,f=Hl,d=f.options,y=d===void 0?Hl:d,b=f.plugins,h=b===void 0?Ps:b,g=function(w,k,M){return M.startsWith(u)&&M.endsWith(u)&&M.replaceAll(u,"").length>0?".".concat(s):w},x=h.slice();x.push(function(w){w.type===$s&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(mv,u).replace(c,g))}),y.prefix&&x.push(Yy),x.push(Ly);var S=function(w,k,M,B){k===void 0&&(k=""),M===void 0&&(M=""),B===void 0&&(B="&"),s=B,u=k,c=new RegExp("\\".concat(u,"\\b"),"g");var L=w.replace(gv,""),V=Ny(M||k?"".concat(M," ").concat(k," { ").concat(L," }"):L);y.namespace&&(V=J0(V,y.namespace));var X=[];return Os(V,Hy(x.concat(Gy(function(A){return X.push(A)})))),X};return S.hash=h.length?h.reduce(function(w,k){return k.name||Ua(15),kl(w,k.name)},q0).toString():"",S}var bv=new Ls,sf=pv(),F0=_e.createContext({shouldForwardProp:void 0,styleSheet:bv,stylis:sf});F0.Consumer;_e.createContext(void 0);function of(){return C.useContext(F0)}var W0=function(){function l(s,u){var c=this;this.inject=function(f,d){d===void 0&&(d=sf);var y=c.name+d.hash;f.hasNameForId(c.id,y)||f.insertRules(c.id,y,d(c.rules,y,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,jf(this,function(){throw Ua(12,String(c.name))})}return l.prototype.getName=function(s){return s===void 0&&(s=sf),this.name+s.hash},l}(),xv=function(l){return l>="A"&&l<="Z"};function Zg(l){for(var s="",u=0;u<l.length;u++){var c=l[u];if(u===1&&c==="-"&&l[0]==="-")return l;xv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var I0=function(l){return l==null||l===!1||l===""},ep=function(l){var s,u,c=[];for(var f in l){var d=l[f];l.hasOwnProperty(f)&&!I0(d)&&(Array.isArray(d)&&d.isCss||Na(d)?c.push("".concat(Zg(f),":"),d,";"):Jr(d)?c.push.apply(c,Bl(Bl(["".concat(f," {")],ep(d),!1),["}"],!1)):c.push("".concat(Zg(f),": ").concat((s=f,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in Vy||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function fa(l,s,u,c){if(I0(l))return[];if(Sf(l))return[".".concat(l.styledComponentId)];if(Na(l)){if(!Na(d=l)||d.prototype&&d.prototype.isReactComponent||!s)return[l];var f=l(s);return fa(f,s,u,c)}var d;return l instanceof W0?u?(l.inject(u,c),[l.getName(c)]):[l]:Jr(l)?ep(l):Array.isArray(l)?Array.prototype.concat.apply(Ps,l.map(function(y){return fa(y,s,u,c)})):[l.toString()]}function tp(l){for(var s=0;s<l.length;s+=1){var u=l[s];if(Na(u)&&!Sf(u))return!1}return!0}var yv=$0(Zs),vv=function(){function l(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&tp(s),this.componentId=u,this.baseHash=kl(yv,u),this.baseStyle=c,Ls.registerId(u)}return l.prototype.generateAndInjectStyles=function(s,u,c){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))f=Oa(f,this.staticRulesId);else{var d=Ns(fa(this.rules,s,u,c)),y=lf(kl(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,y)){var b=c(d,".".concat(y),void 0,this.componentId);u.insertRules(this.componentId,y,b)}f=Oa(f,y),this.staticRulesId=y}else{for(var h=kl(this.baseHash,c.hash),g="",x=0;x<this.rules.length;x++){var S=this.rules[x];if(typeof S=="string")g+=S;else if(S){var w=Ns(fa(S,s,u,c));h=kl(h,w+x),g+=w}}if(g){var k=lf(h>>>0);u.hasNameForId(this.componentId,k)||u.insertRules(this.componentId,k,c(g,".".concat(k),void 0,this.componentId)),f=Oa(f,k)}}return f},l}(),Fr=_e.createContext(void 0);Fr.Consumer;function Sv(l){var s=_e.useContext(Fr),u=C.useMemo(function(){return function(c,f){if(!c)throw Ua(14);if(Na(c)){var d=c(f);return d}if(Array.isArray(c)||typeof c!="object")throw Ua(8);return f?nt(nt({},f),c):c}(l.theme,s)},[l.theme,s]);return l.children?_e.createElement(Fr.Provider,{value:u},l.children):null}var wu={};function jv(l,s,u){var c=Sf(l),f=l,d=!ju(l),y=s.attrs,b=y===void 0?Ps:y,h=s.componentId,g=h===void 0?function($,H){var F=typeof $!="string"?"sc":Yg($);wu[F]=(wu[F]||0)+1;var Y="".concat(F,"-").concat(vf(Zs+F+wu[F]));return H?"".concat(H,"-").concat(Y):Y}(s.displayName,s.parentComponentId):h,x=s.displayName,S=x===void 0?function($){return ju($)?"styled.".concat($):"Styled(".concat(Zy($),")")}(l):x,w=s.displayName&&s.componentId?"".concat(Yg(s.displayName),"-").concat(s.componentId):s.componentId||g,k=c&&f.attrs?f.attrs.concat(b).filter(Boolean):b,M=s.shouldForwardProp;if(c&&f.shouldForwardProp){var B=f.shouldForwardProp;if(s.shouldForwardProp){var L=s.shouldForwardProp;M=function($,H){return B($,H)&&L($,H)}}else M=B}var V=new vv(u,w,c?f.componentStyle:void 0);function X($,H){return function(F,Y,se){var K=F.attrs,be=F.componentStyle,Se=F.defaultProps,Ue=F.foldedComponentIds,Ut=F.styledComponentId,at=F.target,Ce=_e.useContext(Fr),N=of(),Z=F.shouldForwardProp||N.shouldForwardProp,ne=Y0(Y,Ce,Se)||Hl,ce=function(he,le,Pe){for(var je,st=nt(nt({},le),{className:void 0,theme:Pe}),ma=0;ma<he.length;ma+=1){var xn=Na(je=he[ma])?je(st):je;for(var Lt in xn)st[Lt]=Lt==="className"?Oa(st[Lt],xn[Lt]):Lt==="style"?nt(nt({},st[Lt]),xn[Lt]):xn[Lt]}return le.className&&(st.className=Oa(st.className,le.className)),st}(K,Y,ne),_=ce.as||at,Q={};for(var P in ce)ce[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&ce.theme===ne||(P==="forwardedAs"?Q.as=ce.forwardedAs:Z&&!Z(P,_)||(Q[P]=ce[P]));var J=function(he,le){var Pe=of(),je=he.generateAndInjectStyles(le,Pe.styleSheet,Pe.stylis);return je}(be,ce),ee=Oa(Ue,Ut);return J&&(ee+=" "+J),ce.className&&(ee+=" "+ce.className),Q[ju(_)&&!V0.has(_)?"class":"className"]=ee,se&&(Q.ref=se),C.createElement(_,Q)}(A,$,H)}X.displayName=S;var A=_e.forwardRef(X);return A.attrs=k,A.componentStyle=V,A.displayName=S,A.shouldForwardProp=M,A.foldedComponentIds=c?Oa(f.foldedComponentIds,f.styledComponentId):"",A.styledComponentId=w,A.target=c?f.target:l,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=c?function(H){for(var F=[],Y=1;Y<arguments.length;Y++)F[Y-1]=arguments[Y];for(var se=0,K=F;se<K.length;se++)rf(H,K[se],!0);return H}({},f.defaultProps,$):$}}),jf(A,function(){return".".concat(A.styledComponentId)}),d&&Z0(A,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Pg(l,s){for(var u=[l[0]],c=0,f=s.length;c<f;c+=1)u.push(s[c],l[c+1]);return u}var Jg=function(l){return Object.assign(l,{isCss:!0})};function Wr(l){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Na(l)||Jr(l))return Jg(fa(Pg(Ps,Bl([l],s,!0))));var c=l;return s.length===0&&c.length===1&&typeof c[0]=="string"?fa(c):Jg(fa(Pg(c,s)))}function cf(l,s,u){if(u===void 0&&(u=Hl),!s)throw Ua(1,s);var c=function(f){for(var d=[],y=1;y<arguments.length;y++)d[y-1]=arguments[y];return l(s,u,Wr.apply(void 0,Bl([f],d,!1)))};return c.attrs=function(f){return cf(l,s,nt(nt({},u),{attrs:Array.prototype.concat(u.attrs,f).filter(Boolean)}))},c.withConfig=function(f){return cf(l,s,nt(nt({},u),f))},c}var np=function(l){return cf(jv,l)},v=np;V0.forEach(function(l){v[l]=np(l)});var wv=function(){function l(s,u){this.rules=s,this.componentId=u,this.isStatic=tp(s),Ls.registerId(this.componentId+1)}return l.prototype.createStyles=function(s,u,c,f){var d=f(Ns(fa(this.rules,u,c,f)),""),y=this.componentId+s;c.insertRules(y,y,d)},l.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},l.prototype.renderStyles=function(s,u,c,f){s>2&&Ls.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,f)},l}();function _v(l){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Wr.apply(void 0,Bl([l],s,!1)),f="sc-global-".concat(vf(JSON.stringify(c))),d=new wv(c,f),y=function(h){var g=of(),x=_e.useContext(Fr),S=_e.useRef(g.styleSheet.allocateGSInstance(f)).current;return g.styleSheet.server&&b(S,h,g.styleSheet,x,g.stylis),_e.useLayoutEffect(function(){if(!g.styleSheet.server)return b(S,h,g.styleSheet,x,g.stylis),function(){return d.removeStyles(S,g.styleSheet)}},[S,h,g.styleSheet,x,g.stylis]),null};function b(h,g,x,S,w){if(d.isStatic)d.renderStyles(h,$y,x,w);else{var k=nt(nt({},g),{theme:Y0(g,S,y.defaultProps)});d.renderStyles(h,k,x,w)}}return _e.memo(y)}function wf(l){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Ns(Wr.apply(void 0,Bl([l],s,!1))),f=vf(c);return new W0(f,c)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fg="popstate";function Ev(l={}){function s(c,f){let{pathname:d,search:y,hash:b}=c.location;return uf("",{pathname:d,search:y,hash:b},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function u(c,f){return typeof f=="string"?f:Ir(f)}return Cv(s,u,null,l)}function Ne(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Pt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function zv(){return Math.random().toString(36).substring(2,10)}function Wg(l,s){return{usr:l.state,key:l.key,idx:s}}function uf(l,s,u=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?Yl(s):s,state:u,key:s&&s.key||c||zv()}}function Ir({pathname:l="/",search:s="",hash:u=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function Yl(l){let s={};if(l){let u=l.indexOf("#");u>=0&&(s.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(s.search=l.substring(c),l=l.substring(0,c)),l&&(s.pathname=l)}return s}function Cv(l,s,u,c={}){let{window:f=document.defaultView,v5Compat:d=!1}=c,y=f.history,b="POP",h=null,g=x();g==null&&(g=0,y.replaceState({...y.state,idx:g},""));function x(){return(y.state||{idx:null}).idx}function S(){b="POP";let L=x(),V=L==null?null:L-g;g=L,h&&h({action:b,location:B.location,delta:V})}function w(L,V){b="PUSH";let X=uf(B.location,L,V);g=x()+1;let A=Wg(X,g),$=B.createHref(X);try{y.pushState(A,"",$)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;f.location.assign($)}d&&h&&h({action:b,location:B.location,delta:1})}function k(L,V){b="REPLACE";let X=uf(B.location,L,V);g=x();let A=Wg(X,g),$=B.createHref(X);y.replaceState(A,"",$),d&&h&&h({action:b,location:B.location,delta:0})}function M(L){return Av(L)}let B={get action(){return b},get location(){return l(f,y)},listen(L){if(h)throw new Error("A history only accepts one active listener");return f.addEventListener(Fg,S),h=L,()=>{f.removeEventListener(Fg,S),h=null}},createHref(L){return s(f,L)},createURL:M,encodeLocation(L){let V=M(L);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:w,replace:k,go(L){return y.go(L)}};return B}function Av(l,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:Ir(l);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function ap(l,s,u="/"){return Tv(l,s,u,!1)}function Tv(l,s,u,c){let f=typeof s=="string"?Yl(s):s,d=Ln(f.pathname||"/",u);if(d==null)return null;let y=lp(l);Rv(y);let b=null;for(let h=0;b==null&&h<y.length;++h){let g=Yv(d);b=Hv(y[h],g,c)}return b}function lp(l,s=[],u=[],c=""){let f=(d,y,b)=>{let h={relativePath:b===void 0?d.path||"":b,caseSensitive:d.caseSensitive===!0,childrenIndex:y,route:d};h.relativePath.startsWith("/")&&(Ne(h.relativePath.startsWith(c),`Absolute route path "${h.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(c.length));let g=Nn([c,h.relativePath]),x=u.concat(h);d.children&&d.children.length>0&&(Ne(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),lp(d.children,s,x,g)),!(d.path==null&&!d.index)&&s.push({path:g,score:Uv(g,d.index),routesMeta:x})};return l.forEach((d,y)=>{if(d.path===""||!d.path?.includes("?"))f(d,y);else for(let b of rp(d.path))f(d,y,b)}),s}function rp(l){let s=l.split("/");if(s.length===0)return[];let[u,...c]=s,f=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return f?[d,""]:[d];let y=rp(c.join("/")),b=[];return b.push(...y.map(h=>h===""?d:[d,h].join("/"))),f&&b.push(...y),b.map(h=>l.startsWith("/")&&h===""?"/":h)}function Rv(l){l.sort((s,u)=>s.score!==u.score?u.score-s.score:Lv(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Mv=/^:[\w-]+$/,Dv=3,kv=2,Ov=1,Bv=10,Nv=-2,Ig=l=>l==="*";function Uv(l,s){let u=l.split("/"),c=u.length;return u.some(Ig)&&(c+=Nv),s&&(c+=kv),u.filter(f=>!Ig(f)).reduce((f,d)=>f+(Mv.test(d)?Dv:d===""?Ov:Bv),c)}function Lv(l,s){return l.length===s.length&&l.slice(0,-1).every((c,f)=>c===s[f])?l[l.length-1]-s[s.length-1]:0}function Hv(l,s,u=!1){let{routesMeta:c}=l,f={},d="/",y=[];for(let b=0;b<c.length;++b){let h=c[b],g=b===c.length-1,x=d==="/"?s:s.slice(d.length)||"/",S=Hs({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},x),w=h.route;if(!S&&g&&u&&!c[c.length-1].route.index&&(S=Hs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!S)return null;Object.assign(f,S.params),y.push({params:f,pathname:Nn([d,S.pathname]),pathnameBase:Qv(Nn([d,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(d=Nn([d,S.pathnameBase]))}return y}function Hs(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=Gv(l.path,l.caseSensitive,l.end),f=s.match(u);if(!f)return null;let d=f[0],y=d.replace(/(.)\/+$/,"$1"),b=f.slice(1);return{params:c.reduce((g,{paramName:x,isOptional:S},w)=>{if(x==="*"){let M=b[w]||"";y=d.slice(0,d.length-M.length).replace(/(.)\/+$/,"$1")}const k=b[w];return S&&!k?g[x]=void 0:g[x]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:y,pattern:l}}function Gv(l,s=!1,u=!0){Pt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,h)=>(c.push({paramName:b,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),c]}function Yv(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Pt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function Ln(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}function Vv(l,s="/"){let{pathname:u,search:c="",hash:f=""}=typeof l=="string"?Yl(l):l;return{pathname:u?u.startsWith("/")?u:qv(u,s):s,search:Kv(c),hash:Xv(f)}}function qv(l,s){let u=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function _u(l,s,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $v(l){return l.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function _f(l){let s=$v(l);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Ef(l,s,u,c=!1){let f;typeof l=="string"?f=Yl(l):(f={...l},Ne(!f.pathname||!f.pathname.includes("?"),_u("?","pathname","search",f)),Ne(!f.pathname||!f.pathname.includes("#"),_u("#","pathname","hash",f)),Ne(!f.search||!f.search.includes("#"),_u("#","search","hash",f)));let d=l===""||f.pathname==="",y=d?"/":f.pathname,b;if(y==null)b=u;else{let S=s.length-1;if(!c&&y.startsWith("..")){let w=y.split("/");for(;w[0]==="..";)w.shift(),S-=1;f.pathname=w.join("/")}b=S>=0?s[S]:"/"}let h=Vv(f,b),g=y&&y!=="/"&&y.endsWith("/"),x=(d||y===".")&&u.endsWith("/");return!h.pathname.endsWith("/")&&(g||x)&&(h.pathname+="/"),h}var Nn=l=>l.join("/").replace(/\/\/+/g,"/"),Qv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Kv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Xv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Zv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var ip=["POST","PUT","PATCH","DELETE"];new Set(ip);var Pv=["GET",...ip];new Set(Pv);var Vl=C.createContext(null);Vl.displayName="DataRouter";var Js=C.createContext(null);Js.displayName="DataRouterState";C.createContext(!1);var sp=C.createContext({isTransitioning:!1});sp.displayName="ViewTransition";var Jv=C.createContext(new Map);Jv.displayName="Fetchers";var Fv=C.createContext(null);Fv.displayName="Await";var rn=C.createContext(null);rn.displayName="Navigation";var ei=C.createContext(null);ei.displayName="Location";var bn=C.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var zf=C.createContext(null);zf.displayName="RouteError";function Wv(l,{relative:s}={}){Ne(ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=C.useContext(rn),{hash:f,pathname:d,search:y}=ti(l,{relative:s}),b=d;return u!=="/"&&(b=d==="/"?u:Nn([u,d])),c.createHref({pathname:b,search:y,hash:f})}function ql(){return C.useContext(ei)!=null}function sn(){return Ne(ql(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(ei).location}var op="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cp(l){C.useContext(rn).static||C.useLayoutEffect(l)}function Cf(){let{isDataRoute:l}=C.useContext(bn);return l?f2():Iv()}function Iv(){Ne(ql(),"useNavigate() may be used only in the context of a <Router> component.");let l=C.useContext(Vl),{basename:s,navigator:u}=C.useContext(rn),{matches:c}=C.useContext(bn),{pathname:f}=sn(),d=JSON.stringify(_f(c)),y=C.useRef(!1);return cp(()=>{y.current=!0}),C.useCallback((h,g={})=>{if(Pt(y.current,op),!y.current)return;if(typeof h=="number"){u.go(h);return}let x=Ef(h,JSON.parse(d),f,g.relative==="path");l==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:Nn([s,x.pathname])),(g.replace?u.replace:u.push)(x,g.state,g)},[s,u,d,f,l])}C.createContext(null);function ti(l,{relative:s}={}){let{matches:u}=C.useContext(bn),{pathname:c}=sn(),f=JSON.stringify(_f(u));return C.useMemo(()=>Ef(l,JSON.parse(f),c,s==="path"),[l,f,c,s])}function e2(l,s){return up(l,s)}function up(l,s,u,c){Ne(ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=C.useContext(rn),{matches:d}=C.useContext(bn),y=d[d.length-1],b=y?y.params:{},h=y?y.pathname:"/",g=y?y.pathnameBase:"/",x=y&&y.route;{let V=x&&x.path||"";fp(h,!x||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let S=sn(),w;if(s){let V=typeof s=="string"?Yl(s):s;Ne(g==="/"||V.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${V.pathname}" was given in the \`location\` prop.`),w=V}else w=S;let k=w.pathname||"/",M=k;if(g!=="/"){let V=g.replace(/^\//,"").split("/");M="/"+k.replace(/^\//,"").split("/").slice(V.length).join("/")}let B=ap(l,{pathname:M});Pt(x||B!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Pt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=r2(B&&B.map(V=>Object.assign({},V,{params:Object.assign({},b,V.params),pathname:Nn([g,f.encodeLocation?f.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?g:Nn([g,f.encodeLocation?f.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),d,u,c);return s&&L?C.createElement(ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},L):L}function t2(){let l=u2(),s=Zv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",l),y=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:d},"ErrorBoundary")," or"," ",C.createElement("code",{style:d},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},s),u?C.createElement("pre",{style:f},u):null,y)}var n2=C.createElement(t2,null),a2=class extends C.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){console.error("React Router caught the following error during render",l,s)}render(){return this.state.error!==void 0?C.createElement(bn.Provider,{value:this.props.routeContext},C.createElement(zf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function l2({routeContext:l,match:s,children:u}){let c=C.useContext(Vl);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(bn.Provider,{value:l},u)}function r2(l,s=[],u=null,c=null){if(l==null){if(!u)return null;if(u.errors)l=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)l=u.matches;else return null}let f=l,d=u?.errors;if(d!=null){let h=f.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);Ne(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,h+1))}let y=!1,b=-1;if(u)for(let h=0;h<f.length;h++){let g=f[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(b=h),g.route.id){let{loaderData:x,errors:S}=u,w=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){y=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((h,g,x)=>{let S,w=!1,k=null,M=null;u&&(S=d&&g.route.id?d[g.route.id]:void 0,k=g.route.errorElement||n2,y&&(b<0&&x===0?(fp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,M=null):b===x&&(w=!0,M=g.route.hydrateFallbackElement||null)));let B=s.concat(f.slice(0,x+1)),L=()=>{let V;return S?V=k:w?V=M:g.route.Component?V=C.createElement(g.route.Component,null):g.route.element?V=g.route.element:V=h,C.createElement(l2,{match:g,routeContext:{outlet:h,matches:B,isDataRoute:u!=null},children:V})};return u&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?C.createElement(a2,{location:u.location,revalidation:u.revalidation,component:k,error:S,children:L(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):L()},null)}function Af(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i2(l){let s=C.useContext(Vl);return Ne(s,Af(l)),s}function s2(l){let s=C.useContext(Js);return Ne(s,Af(l)),s}function o2(l){let s=C.useContext(bn);return Ne(s,Af(l)),s}function Tf(l){let s=o2(l),u=s.matches[s.matches.length-1];return Ne(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function c2(){return Tf("useRouteId")}function u2(){let l=C.useContext(zf),s=s2("useRouteError"),u=Tf("useRouteError");return l!==void 0?l:s.errors?.[u]}function f2(){let{router:l}=i2("useNavigate"),s=Tf("useNavigate"),u=C.useRef(!1);return cp(()=>{u.current=!0}),C.useCallback(async(f,d={})=>{Pt(u.current,op),u.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:s,...d}))},[l,s])}var e0={};function fp(l,s,u){!s&&!e0[l]&&(e0[l]=!0,Pt(!1,u))}C.memo(d2);function d2({routes:l,future:s,state:u}){return up(l,void 0,u,s)}function Rs({to:l,replace:s,state:u,relative:c}){Ne(ql(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=C.useContext(rn);Pt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=C.useContext(bn),{pathname:y}=sn(),b=Cf(),h=Ef(l,_f(d),y,c==="path"),g=JSON.stringify(h);return C.useEffect(()=>{b(JSON.parse(g),{replace:s,state:u,relative:c})},[b,g,c,s,u]),null}function gn(l){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function h2({basename:l="/",children:s=null,location:u,navigationType:c="POP",navigator:f,static:d=!1}){Ne(!ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),b=C.useMemo(()=>({basename:y,navigator:f,static:d,future:{}}),[y,f,d]);typeof u=="string"&&(u=Yl(u));let{pathname:h="/",search:g="",hash:x="",state:S=null,key:w="default"}=u,k=C.useMemo(()=>{let M=Ln(h,y);return M==null?null:{location:{pathname:M,search:g,hash:x,state:S,key:w},navigationType:c}},[y,h,g,x,S,w,c]);return Pt(k!=null,`<Router basename="${y}"> is not able to match the URL "${h}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:C.createElement(rn.Provider,{value:b},C.createElement(ei.Provider,{children:s,value:k}))}function m2({children:l,location:s}){return e2(ff(l),s)}function ff(l,s=[]){let u=[];return C.Children.forEach(l,(c,f)=>{if(!C.isValidElement(c))return;let d=[...s,f];if(c.type===C.Fragment){u.push.apply(u,ff(c.props.children,d));return}Ne(c.type===gn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=ff(c.props.children,d)),u.push(y)}),u}var Ms="get",Ds="application/x-www-form-urlencoded";function Fs(l){return l!=null&&typeof l.tagName=="string"}function g2(l){return Fs(l)&&l.tagName.toLowerCase()==="button"}function p2(l){return Fs(l)&&l.tagName.toLowerCase()==="form"}function b2(l){return Fs(l)&&l.tagName.toLowerCase()==="input"}function x2(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function y2(l,s){return l.button===0&&(!s||s==="_self")&&!x2(l)}function df(l=""){return new URLSearchParams(typeof l=="string"||Array.isArray(l)||l instanceof URLSearchParams?l:Object.keys(l).reduce((s,u)=>{let c=l[u];return s.concat(Array.isArray(c)?c.map(f=>[u,f]):[[u,c]])},[]))}function v2(l,s){let u=df(l);return s&&s.forEach((c,f)=>{u.has(f)||s.getAll(f).forEach(d=>{u.append(f,d)})}),u}var xs=null;function S2(){if(xs===null)try{new FormData(document.createElement("form"),0),xs=!1}catch{xs=!0}return xs}var j2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Eu(l){return l!=null&&!j2.has(l)?(Pt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ds}"`),null):l}function w2(l,s){let u,c,f,d,y;if(p2(l)){let b=l.getAttribute("action");c=b?Ln(b,s):null,u=l.getAttribute("method")||Ms,f=Eu(l.getAttribute("enctype"))||Ds,d=new FormData(l)}else if(g2(l)||b2(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=l.getAttribute("formaction")||b.getAttribute("action");if(c=h?Ln(h,s):null,u=l.getAttribute("formmethod")||b.getAttribute("method")||Ms,f=Eu(l.getAttribute("formenctype"))||Eu(b.getAttribute("enctype"))||Ds,d=new FormData(b,l),!S2()){let{name:g,type:x,value:S}=l;if(x==="image"){let w=g?`${g}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else g&&d.append(g,S)}}else{if(Fs(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ms,c=null,f=Ds,y=l}return d&&f==="text/plain"&&(y=d,d=void 0),{action:c,method:u.toLowerCase(),encType:f,formData:d,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rf(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function _2(l,s,u){let c=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Ln(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function E2(l,s){if(l.id in s)return s[l.id];try{let u=await import(l.module);return s[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function z2(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function C2(l,s,u){let c=await Promise.all(l.map(async f=>{let d=s.routes[f.route.id];if(d){let y=await E2(d,u);return y.links?y.links():[]}return[]}));return M2(c.flat(1).filter(z2).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function t0(l,s,u,c,f,d){let y=(h,g)=>u[g]?h.route.id!==u[g].route.id:!0,b=(h,g)=>u[g].pathname!==h.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==h.params["*"];return d==="assets"?s.filter((h,g)=>y(h,g)||b(h,g)):d==="data"?s.filter((h,g)=>{let x=c.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(y(h,g)||b(h,g))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function A2(l,s,{includeHydrateFallback:u}={}){return T2(l.map(c=>{let f=s.routes[c.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function T2(l){return[...new Set(l)]}function R2(l){let s={},u=Object.keys(l).sort();for(let c of u)s[c]=l[c];return s}function M2(l,s){let u=new Set;return new Set(s),l.reduce((c,f)=>{let d=JSON.stringify(R2(f));return u.has(d)||(u.add(d),c.push({key:d,link:f})),c},[])}function dp(){let l=C.useContext(Vl);return Rf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function D2(){let l=C.useContext(Js);return Rf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Mf=C.createContext(void 0);Mf.displayName="FrameworkContext";function hp(){let l=C.useContext(Mf);return Rf(l,"You must render this element inside a <HydratedRouter> element"),l}function k2(l,s){let u=C.useContext(Mf),[c,f]=C.useState(!1),[d,y]=C.useState(!1),{onFocus:b,onBlur:h,onMouseEnter:g,onMouseLeave:x,onTouchStart:S}=s,w=C.useRef(null);C.useEffect(()=>{if(l==="render"&&y(!0),l==="viewport"){let B=V=>{V.forEach(X=>{y(X.isIntersecting)})},L=new IntersectionObserver(B,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[l]),C.useEffect(()=>{if(c){let B=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(B)}}},[c]);let k=()=>{f(!0)},M=()=>{f(!1),y(!1)};return u?l!=="intent"?[d,w,{}]:[d,w,{onFocus:$r(b,k),onBlur:$r(h,M),onMouseEnter:$r(g,k),onMouseLeave:$r(x,M),onTouchStart:$r(S,k)}]:[!1,w,{}]}function $r(l,s){return u=>{l&&l(u),u.defaultPrevented||s(u)}}function O2({page:l,...s}){let{router:u}=dp(),c=C.useMemo(()=>ap(u.routes,l,u.basename),[u.routes,l,u.basename]);return c?C.createElement(N2,{page:l,matches:c,...s}):null}function B2(l){let{manifest:s,routeModules:u}=hp(),[c,f]=C.useState([]);return C.useEffect(()=>{let d=!1;return C2(l,s,u).then(y=>{d||f(y)}),()=>{d=!0}},[l,s,u]),c}function N2({page:l,matches:s,...u}){let c=sn(),{manifest:f,routeModules:d}=hp(),{basename:y}=dp(),{loaderData:b,matches:h}=D2(),g=C.useMemo(()=>t0(l,s,h,f,c,"data"),[l,s,h,f,c]),x=C.useMemo(()=>t0(l,s,h,f,c,"assets"),[l,s,h,f,c]),S=C.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let M=new Set,B=!1;if(s.forEach(V=>{let X=f.routes[V.route.id];!X||!X.hasLoader||(!g.some(A=>A.route.id===V.route.id)&&V.route.id in b&&d[V.route.id]?.shouldRevalidate||X.hasClientLoader?B=!0:M.add(V.route.id))}),M.size===0)return[];let L=_2(l,y,"data");return B&&M.size>0&&L.searchParams.set("_routes",s.filter(V=>M.has(V.route.id)).map(V=>V.route.id).join(",")),[L.pathname+L.search]},[y,b,c,f,g,s,l,d]),w=C.useMemo(()=>A2(x,f),[x,f]),k=B2(x);return C.createElement(C.Fragment,null,S.map(M=>C.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...u})),w.map(M=>C.createElement("link",{key:M,rel:"modulepreload",href:M,...u})),k.map(({key:M,link:B})=>C.createElement("link",{key:M,...B})))}function U2(...l){return s=>{l.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var mp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mp&&(window.__reactRouterVersion="7.7.1")}catch{}function L2({basename:l,children:s,window:u}){let c=C.useRef();c.current==null&&(c.current=Ev({window:u,v5Compat:!0}));let f=c.current,[d,y]=C.useState({action:f.action,location:f.location}),b=C.useCallback(h=>{C.startTransition(()=>y(h))},[y]);return C.useLayoutEffect(()=>f.listen(b),[f,b]),C.createElement(h2,{basename:l,children:s,location:d.location,navigationType:d.action,navigator:f})}var gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$l=C.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:f,reloadDocument:d,replace:y,state:b,target:h,to:g,preventScrollReset:x,viewTransition:S,...w},k){let{basename:M}=C.useContext(rn),B=typeof g=="string"&&gp.test(g),L,V=!1;if(typeof g=="string"&&B&&(L=g,mp))try{let K=new URL(window.location.href),be=g.startsWith("//")?new URL(K.protocol+g):new URL(g),Se=Ln(be.pathname,M);be.origin===K.origin&&Se!=null?g=Se+be.search+be.hash:V=!0}catch{Pt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=Wv(g,{relative:f}),[A,$,H]=k2(c,w),F=V2(g,{replace:y,state:b,target:h,preventScrollReset:x,relative:f,viewTransition:S});function Y(K){s&&s(K),K.defaultPrevented||F(K)}let se=C.createElement("a",{...w,...H,href:L||X,onClick:V||d?s:Y,ref:U2(k,$),target:h,"data-discover":!B&&u==="render"?"true":void 0});return A&&!B?C.createElement(C.Fragment,null,se,C.createElement(O2,{page:X})):se});$l.displayName="Link";var H2=C.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:f=!1,style:d,to:y,viewTransition:b,children:h,...g},x){let S=ti(y,{relative:g.relative}),w=sn(),k=C.useContext(Js),{navigator:M,basename:B}=C.useContext(rn),L=k!=null&&X2(S)&&b===!0,V=M.encodeLocation?M.encodeLocation(S).pathname:S.pathname,X=w.pathname,A=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;u||(X=X.toLowerCase(),A=A?A.toLowerCase():null,V=V.toLowerCase()),A&&B&&(A=Ln(A,B)||A);const $=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let H=X===V||!f&&X.startsWith(V)&&X.charAt($)==="/",F=A!=null&&(A===V||!f&&A.startsWith(V)&&A.charAt(V.length)==="/"),Y={isActive:H,isPending:F,isTransitioning:L},se=H?s:void 0,K;typeof c=="function"?K=c(Y):K=[c,H?"active":null,F?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let be=typeof d=="function"?d(Y):d;return C.createElement($l,{...g,"aria-current":se,className:K,ref:x,style:be,to:y,viewTransition:b},typeof h=="function"?h(Y):h)});H2.displayName="NavLink";var G2=C.forwardRef(({discover:l="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:f,state:d,method:y=Ms,action:b,onSubmit:h,relative:g,preventScrollReset:x,viewTransition:S,...w},k)=>{let M=Q2(),B=K2(b,{relative:g}),L=y.toLowerCase()==="get"?"get":"post",V=typeof b=="string"&&gp.test(b),X=A=>{if(h&&h(A),A.defaultPrevented)return;A.preventDefault();let $=A.nativeEvent.submitter,H=$?.getAttribute("formmethod")||y;M($||A.currentTarget,{fetcherKey:s,method:H,navigate:u,replace:f,state:d,relative:g,preventScrollReset:x,viewTransition:S})};return C.createElement("form",{ref:k,method:L,action:B,onSubmit:c?h:X,...w,"data-discover":!V&&l==="render"?"true":void 0})});G2.displayName="Form";function Y2(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pp(l){let s=C.useContext(Vl);return Ne(s,Y2(l)),s}function V2(l,{target:s,replace:u,state:c,preventScrollReset:f,relative:d,viewTransition:y}={}){let b=Cf(),h=sn(),g=ti(l,{relative:d});return C.useCallback(x=>{if(y2(x,s)){x.preventDefault();let S=u!==void 0?u:Ir(h)===Ir(g);b(l,{replace:S,state:c,preventScrollReset:f,relative:d,viewTransition:y})}},[h,b,g,u,c,s,l,f,d,y])}function bp(l){Pt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=C.useRef(df(l)),u=C.useRef(!1),c=sn(),f=C.useMemo(()=>v2(c.search,u.current?null:s.current),[c.search]),d=Cf(),y=C.useCallback((b,h)=>{const g=df(typeof b=="function"?b(new URLSearchParams(f)):b);u.current=!0,d("?"+g,h)},[d,f]);return[f,y]}var q2=0,$2=()=>`__${String(++q2)}__`;function Q2(){let{router:l}=pp("useSubmit"),{basename:s}=C.useContext(rn),u=c2();return C.useCallback(async(c,f={})=>{let{action:d,method:y,encType:b,formData:h,body:g}=w2(c,s);if(f.navigate===!1){let x=f.fetcherKey||$2();await l.fetch(x,u,f.action||d,{preventScrollReset:f.preventScrollReset,formData:h,body:g,formMethod:f.method||y,formEncType:f.encType||b,flushSync:f.flushSync})}else await l.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:h,body:g,formMethod:f.method||y,formEncType:f.encType||b,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,s,u])}function K2(l,{relative:s}={}){let{basename:u}=C.useContext(rn),c=C.useContext(bn);Ne(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),d={...ti(l||".",{relative:s})},y=sn();if(l==null){d.search=y.search;let b=new URLSearchParams(d.search),h=b.getAll("index");if(h.some(x=>x==="")){b.delete("index"),h.filter(S=>S).forEach(S=>b.append("index",S));let x=b.toString();d.search=x?`?${x}`:""}}return(!l||l===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:Nn([u,d.pathname])),Ir(d)}function X2(l,{relative:s}={}){let u=C.useContext(sp);Ne(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=pp("useViewTransitionState"),f=ti(l,{relative:s});if(!u.isTransitioning)return!1;let d=Ln(u.currentLocation.pathname,c)||u.currentLocation.pathname,y=Ln(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Hs(f.pathname,y)!=null||Hs(f.pathname,d)!=null}const Z2="/assets/logo-BY-LKRi7.png",P2=v.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,J2=v.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,F2=v.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,W2=v.img`
  height: 40px;
  width: auto;
`,I2=v.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,eS=v.div`
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
`,zu=v($l)`
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
`,tS=v.button`
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
`;function zl(){const l=sn(),[s,u]=C.useState(!1);return r.jsx(P2,{children:r.jsxs(J2,{children:[r.jsx(zu,{to:"/",onClick:()=>u(!1),children:r.jsxs(F2,{children:[r.jsx(W2,{src:Z2,alt:"SCKW Logo"}),r.jsx(I2,{children:"SC Konstanz-Wollmatingen e. V."})]})}),r.jsxs(tS,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>u(f=>!f),children:["Menü",r.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),r.jsxs(eS,{id:"mobile-nav",$open:s,children:[r.jsx(zu,{to:"/sponsoring",$active:l.pathname==="/sponsoring",onClick:()=>u(!1),children:"🤝 Sponsoring"}),r.jsx(zu,{to:"/sponsoring/club-500",$active:l.pathname==="/sponsoring/club-500",onClick:()=>u(!1),children:"⚽ CLUB 500"}),!1]})]})})}const nS=v.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Cu=v.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,aS=v($l)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,lS=v.div`
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
`,rS=v.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Ws(){return r.jsx(nS,{children:r.jsxs(lS,{children:[r.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",r.jsx(Cu,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),r.jsxs(rS,{"aria-label":"Rechtliches",children:[r.jsx(aS,{to:"/sponsoring/spielerpatenschaft",children:"Personal Partner"}),r.jsx(Cu,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),r.jsx(Cu,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const xp="/assets/cheerleading_0-DQQGXi0R.jpg",yp="/assets/cheerleading_1-NkLBARmH.jpg",vp="/assets/cheerleading_2-CrezcZYL.jpg",Sp="/assets/cheerleading_3-GN5rPHNN.jpg",jp="/assets/1-ClVWb4ei.png",wp="/assets/10-Bwp2eIye.png",_p="/assets/11-W061sOUI.png",Ep="/assets/12-TjJyzl8L.png",zp="/assets/13-ChUUCdQQ.png",Cp="/assets/14-BVhdRr98.png",Ap="/assets/2-CcfgIQYe.png",Tp="/assets/3-DYiPkVd7.png",Rp="/assets/4-1upoqVoS.png",Mp="/assets/5-D0tadXAC.png",Dp="/assets/6-NJ4ELm_j.png",kp="/assets/7-BXo4_Bcj.png",Op="/assets/8-BbOqEnj_.png",Bp="/assets/9-CIK0gi9o.png",Np="/assets/herren_0-BVVgyt1l.jpg",Up="/assets/herren_1-B8ywOnNy.jpg",Lp="/assets/herren_10-DPVQsg9B.jpg",Hp="/assets/herren_11-wfWG62H3.jpg",Gp="/assets/herren_12-DEJSN2zG.jpg",Yp="/assets/herren_13-F52vdukE.jpg",Vp="/assets/herren_14-Cq9hoKfG.jpg",qp="/assets/herren_15-aYIFGauG.jpg",$p="/assets/herren_16-NYI2EaEN.jpg",Qp="/assets/herren_17-B_52ysA2.jpg",Kp="/assets/herren_18-DbwjVNKJ.jpg",Xp="/assets/herren_19-BduD_J85.png",Zp="/assets/herren_2--jFuixBF.jpg",Pp="/assets/herren_3-BPz1zlkG.jpg",Jp="/assets/herren_4-BZRrQaFr.jpg",Fp="/assets/herren_5-D-QrfY2P.jpg",Wp="/assets/herren_6-DWQvi6Am.jpg",Ip="/assets/herren_7-BXO6B8Bt.jpg",e1="/assets/herren_8-Cg4rdr7T.jpg",t1="/assets/herren_9-DoLnTdRG.jpg",n1="/assets/herren_club500_1-DNikBmOh.png",a1="/assets/herren_club500_2-CABnv8vs.png",l1="/assets/herren_club500_3-Cjxe_RiU.png",r1="/assets/herren_club500_4-Dgm0Z9_i.png",i1="/assets/herren_club500_5-3OeJLCAP.png",s1="/assets/herren_jubel_500club-mxBrnD8H.png",o1="/assets/IMG-team-BGcF1agj.png",c1="/assets/IMG_5349-CpvIVKhM.jpg",u1="/assets/IMG_5369-DQ4CSwdg.jpg",f1="/assets/IMG_5421-BBzniIEN.jpg",d1="/assets/IMG_5442-D2PgutWB.jpg",h1="/assets/IMG_5952-B9VW6Qie.jpg",m1="/assets/Unbenann324t-IPGo6eoQ.png",g1="/assets/image0-DDrU5aZn.jpeg",p1="/assets/image11-BNM8hTkT.jpeg",b1="/assets/image8-BUnedp9U.jpeg",iS="/assets/grafhardenberg-Di5cVggE.png",sS="/assets/horta-DydWIGV7.png",oS="/assets/logans-BgpKwKYA.png",cS="/assets/ricobet-DsVC-eZt.png",uS="/assets/rothaus-DqkKD9yW.png",fS="/assets/tasty-B2pSa1rE.png",dS="/assets/cabin-window-B83r_CDB.jpg",hS="/assets/outside-9-xz17qL.jpg",mS="/assets/shower-B75caJ-F.jpg",gS="/assets/sitting-area-D7khB3Gw.jpg",pS="/assets/toilet-BpMHYbhh.jpg",bS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":xp,"../assets/gallery/cheerleading/cheerleading_1.jpg":yp,"../assets/gallery/cheerleading/cheerleading_2.jpg":vp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Sp,"../assets/gallery/damen/1.png":jp,"../assets/gallery/damen/10.png":wp,"../assets/gallery/damen/11.png":_p,"../assets/gallery/damen/12.png":Ep,"../assets/gallery/damen/13.png":zp,"../assets/gallery/damen/14.png":Cp,"../assets/gallery/damen/2.png":Ap,"../assets/gallery/damen/3.png":Tp,"../assets/gallery/damen/4.png":Rp,"../assets/gallery/damen/5.png":Mp,"../assets/gallery/damen/6.png":Dp,"../assets/gallery/damen/7.png":kp,"../assets/gallery/damen/8.png":Op,"../assets/gallery/damen/9.png":Bp,"../assets/gallery/herren/herren_0.jpg":Np,"../assets/gallery/herren/herren_1.jpg":Up,"../assets/gallery/herren/herren_10.jpg":Lp,"../assets/gallery/herren/herren_11.jpg":Hp,"../assets/gallery/herren/herren_12.jpg":Gp,"../assets/gallery/herren/herren_13.jpg":Yp,"../assets/gallery/herren/herren_14.jpg":Vp,"../assets/gallery/herren/herren_15.jpg":qp,"../assets/gallery/herren/herren_16.jpg":$p,"../assets/gallery/herren/herren_17.jpg":Qp,"../assets/gallery/herren/herren_18.jpg":Kp,"../assets/gallery/herren/herren_19.png":Xp,"../assets/gallery/herren/herren_2.jpg":Zp,"../assets/gallery/herren/herren_3.jpg":Pp,"../assets/gallery/herren/herren_4.jpg":Jp,"../assets/gallery/herren/herren_5.jpg":Fp,"../assets/gallery/herren/herren_6.jpg":Wp,"../assets/gallery/herren/herren_7.jpg":Ip,"../assets/gallery/herren/herren_8.jpg":e1,"../assets/gallery/herren/herren_9.jpg":t1,"../assets/gallery/herren/herren_club500_1.png":n1,"../assets/gallery/herren/herren_club500_2.png":a1,"../assets/gallery/herren/herren_club500_3.png":l1,"../assets/gallery/herren/herren_club500_4.png":r1,"../assets/gallery/herren/herren_club500_5.png":i1,"../assets/gallery/herren/herren_jubel_500club.png":s1,"../assets/gallery/jfv/IMG-team.png":o1,"../assets/gallery/jfv/IMG_5349.jpg":c1,"../assets/gallery/jfv/IMG_5369.jpg":u1,"../assets/gallery/jfv/IMG_5421.jpg":f1,"../assets/gallery/jfv/IMG_5442.jpg":d1,"../assets/gallery/jfv/IMG_5952.jpg":h1,"../assets/gallery/jfv/Unbenann324t.png":m1,"../assets/gallery/jfv/image0.jpeg":g1,"../assets/gallery/jfv/image11.jpeg":p1,"../assets/gallery/jfv/image8.jpeg":b1}),xS=Object.assign({"../assets/sponsors/grafhardenberg.png":iS,"../assets/sponsors/horta.png":sS,"../assets/sponsors/logans.png":oS,"../assets/sponsors/ricobet.png":cS,"../assets/sponsors/rothaus.png":uS,"../assets/sponsors/tasty.png":fS}),yS=Object.assign({"../assets/renovation/cabin-window.jpg":dS,"../assets/renovation/outside.jpg":hS,"../assets/renovation/shower.jpg":mS,"../assets/renovation/sitting-area.jpg":gS,"../assets/renovation/toilet.jpg":pS}),x1=l=>l.split("/").pop()?.toLowerCase()||"",vS=l=>{const s=l.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function SS(l){const s=[...l];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const jS=()=>{const l={};Object.entries(bS).forEach(([c,f])=>{const d=vS(c);l[d]||(l[d]=[]),l[d].push(f)}),Object.keys(l).forEach(c=>{l[c]=SS(l[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{l[c]&&(s[c]=l[c])}),Object.keys(l).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=l[c])}),s},wS=()=>{const l={};return Object.entries(xS).forEach(([s,u])=>{const c=x1(s);l[c]=u}),l},y1=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(yS).forEach(([s,u])=>{const c=x1(s);c.includes("sitting")?l.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?l.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&l.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?l.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?l.waschkueche.push({src:u,alt:"Dusche"}):l.waschkueche.push({src:u,alt:"Waschküche"}))}),l},ht=l=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":xp,"../assets/gallery/cheerleading/cheerleading_1.jpg":yp,"../assets/gallery/cheerleading/cheerleading_2.jpg":vp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Sp,"../assets/gallery/damen/1.png":jp,"../assets/gallery/damen/10.png":wp,"../assets/gallery/damen/11.png":_p,"../assets/gallery/damen/12.png":Ep,"../assets/gallery/damen/13.png":zp,"../assets/gallery/damen/14.png":Cp,"../assets/gallery/damen/2.png":Ap,"../assets/gallery/damen/3.png":Tp,"../assets/gallery/damen/4.png":Rp,"../assets/gallery/damen/5.png":Mp,"../assets/gallery/damen/6.png":Dp,"../assets/gallery/damen/7.png":kp,"../assets/gallery/damen/8.png":Op,"../assets/gallery/damen/9.png":Bp,"../assets/gallery/herren/herren_0.jpg":Np,"../assets/gallery/herren/herren_1.jpg":Up,"../assets/gallery/herren/herren_10.jpg":Lp,"../assets/gallery/herren/herren_11.jpg":Hp,"../assets/gallery/herren/herren_12.jpg":Gp,"../assets/gallery/herren/herren_13.jpg":Yp,"../assets/gallery/herren/herren_14.jpg":Vp,"../assets/gallery/herren/herren_15.jpg":qp,"../assets/gallery/herren/herren_16.jpg":$p,"../assets/gallery/herren/herren_17.jpg":Qp,"../assets/gallery/herren/herren_18.jpg":Kp,"../assets/gallery/herren/herren_19.png":Xp,"../assets/gallery/herren/herren_2.jpg":Zp,"../assets/gallery/herren/herren_3.jpg":Pp,"../assets/gallery/herren/herren_4.jpg":Jp,"../assets/gallery/herren/herren_5.jpg":Fp,"../assets/gallery/herren/herren_6.jpg":Wp,"../assets/gallery/herren/herren_7.jpg":Ip,"../assets/gallery/herren/herren_8.jpg":e1,"../assets/gallery/herren/herren_9.jpg":t1,"../assets/gallery/herren/herren_club500_1.png":n1,"../assets/gallery/herren/herren_club500_2.png":a1,"../assets/gallery/herren/herren_club500_3.png":l1,"../assets/gallery/herren/herren_club500_4.png":r1,"../assets/gallery/herren/herren_club500_5.png":i1,"../assets/gallery/herren/herren_jubel_500club.png":s1,"../assets/gallery/jfv/IMG-team.png":o1,"../assets/gallery/jfv/IMG_5349.jpg":c1,"../assets/gallery/jfv/IMG_5369.jpg":u1,"../assets/gallery/jfv/IMG_5421.jpg":f1,"../assets/gallery/jfv/IMG_5442.jpg":d1,"../assets/gallery/jfv/IMG_5952.jpg":h1,"../assets/gallery/jfv/Unbenann324t.png":m1,"../assets/gallery/jfv/image0.jpeg":g1,"../assets/gallery/jfv/image11.jpeg":p1,"../assets/gallery/jfv/image8.jpeg":b1})).find(([c])=>c.includes(l));return u?u[1]:""},_S=(l,s)=>ht(`${l}/${l}_${s}.jpg`);jS(),wS(),y1();const ES={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},zS={packages:ES},CS=v.div`
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
`,AS=v.div`
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
`,TS=v.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,RS=v.div`
  margin-bottom: 1.5rem;
`,MS=v.div`
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
`,DS=v.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,kS=v.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,OS=v.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,BS=v.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,NS=v.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,US=v.div`
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
`,LS=v.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,HS=v.div`
  flex: 1;
`,GS=v.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,YS=v.span`
  font-weight: 600;
  color: #374151;
`,VS=v.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,qS=v.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,$S=v.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,QS=v.button`
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
`,KS=v.div`
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
`,XS=()=>{const l=zS;return{kabinen:{current:l.packages.kabinen.current,goal:l.packages.kabinen.goal,donors:l.packages.kabinen.donors},fassade:{current:l.packages.fassade.current,goal:l.packages.fassade.goal,donors:l.packages.fassade.donors},waschkueche:{current:l.packages.waschkueche.current,goal:l.packages.waschkueche.goal,donors:l.packages.waschkueche.donors}}};function ZS({data:l=XS(),realTime:s=!1}){const[u,c]=C.useState(l),[f,d]=C.useState(new Date),[y,b]=C.useState(!1),h=async()=>{b(!0);try{const S=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(S.ok){const w=await S.json(),k={kabinen:{current:w.packages.kabinen.current,goal:w.packages.kabinen.goal,donors:w.packages.kabinen.donors},fassade:{current:w.packages.fassade.current,goal:w.packages.fassade.goal,donors:w.packages.fassade.donors},waschkueche:{current:w.packages.waschkueche.current,goal:w.packages.waschkueche.goal,donors:w.packages.waschkueche.donors}};c(k),d(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(S){console.error("❌ Fehler beim Laden der Spendendaten:",S)}finally{b(!1)}};C.useEffect(()=>{if(!s)return;const S=setInterval(()=>{h()},3e4);return()=>clearInterval(S)},[s]);const g=S=>{switch(S){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},x=S=>{switch(S){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return S}};return r.jsxs(r.Fragment,{children:[r.jsx(CS,{children:Object.entries(u).map(([S,w])=>{const k=w.current/w.goal*100;return r.jsxs(AS,{children:[r.jsxs(TS,{children:[g(S)," ",x(S)]}),r.jsxs(RS,{children:[r.jsxs(MS,{children:[r.jsxs("span",{children:[w.current.toLocaleString("de-DE")," €"]}),r.jsxs("span",{children:[w.goal.toLocaleString("de-DE")," €"]})]}),r.jsx(DS,{children:r.jsx(kS,{$progress:k})}),r.jsxs(OS,{children:[Math.round(k),"% erreicht"]})]}),r.jsxs(BS,{children:[r.jsxs(NS,{children:["💝 Spender (",w.donors.length,")"]}),r.jsx(US,{children:w.donors.length>0?w.donors.slice().reverse().map((M,B)=>r.jsxs(LS,{children:[r.jsxs(HS,{children:[r.jsx(GS,{children:M.anonymous?"Anonymer Spender":M.name}),M.comment&&r.jsxs(VS,{children:['"',M.comment,'"']}),M.date&&r.jsx(qS,{children:M.date})]}),r.jsxs(YS,{children:[M.amount.toLocaleString("de-DE")," €"]})]},B)):r.jsx($S,{children:"Noch keine Spenden 🤗"})})]})]},S)})}),r.jsxs(QS,{onClick:h,disabled:y,title:"Spendendaten aktualisieren",children:["🔄",y?"Lade...":"Aktualisieren"]}),r.jsxs(KS,{children:["Letztes Update: ",f.toLocaleTimeString("de-DE")]})]})}const PS=v.section`
  background: url("${_S("herren",18)}") center/cover;
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
`,JS=v.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,FS=v.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,WS=v.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,IS=v.main`
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
`,e5=v.section`
  margin-bottom: 4rem;
`,t5=v.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,n5=v.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,a5=v.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,l5=v.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,r5=v.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,i5=v.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,s5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,o5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Au=v.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Tu=v.div`
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
`,c5=v.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,u5=v.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,f5=v.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,d5=v.div`
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
`,h5=v.div`
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
`,m5=v.div`
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
`,g5=v.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,p5=v.button`
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
`,Ru=v.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Mu=v.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,b5=v.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,x5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,y5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Du=v.div`
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
`,ku=v.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Ou=v.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Bu=v.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Nu=v.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,v5=v.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,S5=v.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,j5=v.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,w5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,ys=v.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,vs=v.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Ss=v.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,_5=v.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,E5=v.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,z5=v.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,C5=v.div`
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
`,A5=v.div`
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
`,T5=v.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,R5=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,M5=v.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,D5=v.button`
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
`,k5=v.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Uu=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Lu=v.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Hu=v.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,O5=v.button`
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
`,B5=v.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,Cl=y1();function Gu({images:l,onImageClick:s}){const[u,c]=C.useState(0);return C.useEffect(()=>{if(l.length<=1)return;const f=setInterval(()=>{c(d=>(d+1)%l.length)},4e3);return()=>clearInterval(f)},[l.length]),l.length===0?r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):r.jsxs(c5,{children:[l.map((f,d)=>r.jsx(u5,{src:f.src,alt:f.alt,$isActive:d===u,onClick:()=>s(d)},d)),l.length>1&&r.jsx(f5,{children:l.map((f,d)=>r.jsx(d5,{$isActive:d===u,onClick:()=>c(d)},d))})]})}function N5({images:l,initialIndex:s,onClose:u}){const[c,f]=C.useState(s),d=C.useCallback(()=>{f(b=>(b+1)%l.length)},[l.length]),y=C.useCallback(()=>{f(b=>(b-1+l.length)%l.length)},[l.length]);return C.useEffect(()=>{const b=h=>{h.key==="Escape"&&u(),h.key==="ArrowRight"&&d(),h.key==="ArrowLeft"&&y()};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[u,d,y]),r.jsx(h5,{onClick:u,children:r.jsxs(m5,{onClick:b=>b.stopPropagation(),children:[r.jsx(p5,{onClick:u,children:"×"}),r.jsx(g5,{src:l[c].src,alt:l[c].alt}),l.length>1&&r.jsxs(r.Fragment,{children:[r.jsx(n0,{$direction:"prev",onClick:y,children:"‹"}),r.jsx(n0,{$direction:"next",onClick:d,children:"›"})]})]})})}function U5(){const[l,s]=C.useState(!1),[u,c]=C.useState([]),[f,d]=C.useState(0),[y,b]=C.useState(!1),h=(S,w)=>{c(S),d(w),s(!0)},g=S=>{S.preventDefault(),b(!0)},x=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return r.jsxs(r.Fragment,{children:[r.jsx(PS,{children:r.jsxs(JS,{children:[r.jsx(FS,{children:"🏟️ Fürstenberg weiterentwickeln"}),r.jsx(WS,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),r.jsxs(IS,{children:[r.jsxs(e5,{children:[r.jsx(t5,{children:"Der Fürstenberg - unser Kultplatz"}),r.jsx(n5,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),r.jsxs(a5,{children:[r.jsx(l5,{children:"✨ Charme erhalten, Komfort verbessern"}),r.jsx(r5,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),r.jsxs(i5,{children:[r.jsx(s5,{children:"🔍 Wo wir ansetzen möchten"}),r.jsxs(o5,{children:[r.jsxs(Au,{children:[r.jsx(Tu,{children:r.jsx(Gu,{images:Cl.kabinen,onImageClick:S=>h(Cl.kabinen,S)})}),r.jsx(Ru,{children:"🔧 Kabinen komfortabler gestalten"}),r.jsx(Mu,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),r.jsxs(Au,{children:[r.jsx(Tu,{children:r.jsx(Gu,{images:Cl.fassade,onImageClick:S=>h(Cl.fassade,S)})}),r.jsx(Ru,{children:"🎨 Fassade & Fenster erneuern"}),r.jsx(Mu,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),r.jsxs(Au,{children:[r.jsx(Tu,{children:r.jsx(Gu,{images:Cl.waschkueche,onImageClick:S=>h(Cl.waschkueche,S)})}),r.jsx(Ru,{children:"🧺 Waschküche auf Vordermann bringen"}),r.jsx(Mu,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),r.jsxs(b5,{children:[r.jsx(x5,{children:"✨ Unsere Pläne für den Fürstenberg"}),r.jsxs(y5,{children:[r.jsxs(Du,{children:[r.jsx(ku,{children:"🪑"}),r.jsx(Ou,{children:"Kabinen sanieren"}),r.jsx(Bu,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),r.jsx(Nu,{children:"~8.000 €"})]}),r.jsxs(Du,{children:[r.jsx(ku,{children:"🎨"}),r.jsx(Ou,{children:"Fassade & Fenster erneuern"}),r.jsx(Bu,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),r.jsx(Nu,{children:"~15.000 €"})]}),r.jsxs(Du,{children:[r.jsx(ku,{children:"🧺"}),r.jsx(Ou,{children:"Waschküche modernisieren"}),r.jsx(Bu,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),r.jsx(Nu,{children:"~5.000 €"})]})]})]}),r.jsxs(v5,{children:[r.jsx(S5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),r.jsx(j5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),r.jsxs(w5,{children:[r.jsxs(ys,{children:[r.jsx(vs,{children:"🏆"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),r.jsxs(ys,{children:[r.jsx(vs,{children:"📄"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),r.jsxs(ys,{children:[r.jsx(vs,{children:"📱"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),r.jsxs(ys,{children:[r.jsx(vs,{children:"🎯"}),r.jsxs(Ss,{children:[r.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),r.jsxs(_5,{children:[r.jsx(E5,{children:"🤝 Gemeinsam für den Fürstenberg"}),r.jsx(z5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),r.jsx(ZS,{realTime:!0}),r.jsxs(C5,{children:[r.jsx(a0,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),r.jsx(a0,{href:"#",onClick:g,children:"🏦 Per Überweisung spenden"})]})]})]}),r.jsx(Ws,{}),y&&r.jsx(A5,{onClick:()=>b(!1),children:r.jsxs(T5,{onClick:S=>S.stopPropagation(),children:[r.jsxs(R5,{children:[r.jsx(M5,{children:"Kontoverbindung für Spenden"}),r.jsx(D5,{onClick:()=>b(!1),children:"×"})]}),r.jsxs(k5,{children:[r.jsxs(Uu,{children:[r.jsx(Lu,{children:"Kontoinhaber:"}),r.jsx(Hu,{children:"SC Konstanz-Wollmatingen"})]}),r.jsxs(Uu,{children:[r.jsx(Lu,{children:"IBAN:"}),r.jsx(Hu,{children:"DE12 6905 0001 0000 0228 06"})]}),r.jsxs(Uu,{children:[r.jsx(Lu,{children:"BIC:"}),r.jsx(Hu,{children:"SOLADES1KNZ"})]})]}),r.jsx(O5,{onClick:x,children:"📋 IBAN kopieren"}),r.jsx(B5,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),l&&r.jsx(N5,{images:u,initialIndex:f,onClose:()=>s(!1)})]})}const Yu={text:"Meister & Aufsteiger!",highlight:"Verbandsliga Südbaden",suffix:"Ab Saison 26/27 spielen wir eine Liga höher!"},Df=[{value:"1,3 Mio.",label:"Social-Media-Views / Saison",description:"IG 1,07 Mio. + FB 203K kombiniert (Jul 25 - Jun 26)"},{value:"310.000",label:"Views / Monat aktuell",description:"IG 230K + FB 81K kombiniert (28 Tage, Mai-Jun 26)"},{value:"21.400",label:"Personen erreicht / Monat",description:"Instagram Reach, 97% Non-Followers"},{value:"60.000+",label:"Website-Aufrufe / Jahr",description:"23.800 Sessions, Ø 2:19 Min. Verweildauer"}],L5=[{id:"hauptsponsor",name:"Hauptsponsor",preis:"15.000 €",topFeature:"Trikotbrust",trikot:"Brust (bis 400 cm²)",bande:"9 m",banner:"1× XL (3 × 2 m)",magazin:"1 Seite",saisonkarten:10,vergeben:!0,sponsorName:"Fuchsbau Immobilien",sponsorLogo:"/sponsors/fuchsbau-logo.png",sponsorWebsite:"https://immofuchsbau.com/"},{id:"stadionname",name:"Stadionname-Partner",preis:"12.000 €",topFeature:"Namensrecht Stadion",trikot:"–",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:10,vergeben:!1},{id:"co-sponsor-1",name:"Co-Sponsor I",preis:"9.500 €",topFeature:"Trikot-Rücken",trikot:"Rücken (bis 200 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1},{id:"co-sponsor-2",name:"Co-Sponsor II",preis:"8.000 €",topFeature:"Trikot-Ärmel",trikot:"Ärmel (2 × 100 cm²)",bande:"6 m",banner:"1× Standard (2 × 1,5 m)",magazin:"1/2 Seite",saisonkarten:5,vergeben:!1}],H5=[{name:"Einzelbande",groesse:"3 × 1 m",preis:"800 €",slots:25,kategorie:"bande"},{name:"Doppelbande",groesse:"6 × 1 m",preis:"1.400 €",slots:12,kategorie:"bande"},{name:"Banner Standard",groesse:"ca. 2 × 1,5 m",preis:"1.200 €",slots:10,kategorie:"banner"},{name:"Banner XL",groesse:"ca. 3 × 2 m",preis:"2.000 €",slots:4,kategorie:"banner"}],G5=[{name:"Ballspende",beschreibung:"Durchsage vor Spiel, bei jedem Tor & Halbzeit · 1 Insta-Story",preis:"150 € / Spiel",hinweis:"5er-Pack: 500 €"},{name:"Spielpräsentator",beschreibung:"Alle Aufstellungen & Auswechslungen im Firmennamen",preis:"ab 250 € / Spiel"},{name:"Magazin-Inserat",beschreibung:"15 Ausgaben/Saison · ca. 100 Exemplare + 1.000-1.500 Online-Zugriffe",preis:"250 - 1.000 €",hinweis:"1/4 Seite 250 € · 1/2 Seite 500 € · 1 Seite 1.000 €"}],Y5=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Vu={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},v1=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],S1=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],j1=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],vt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},V5=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],q5=v.div`
  max-width: 1000px;
  margin: 0 auto;
`,$5=v.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,Q5=v.a`
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
`,K5=v.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,X5=v.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,Z5=v.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,P5=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,J5=v.a`
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
`,F5=v.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,W5=v.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,I5={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function ej(){const{hauptsponsor:l,partners:s}=I5;return r.jsxs(q5,{children:[r.jsx($5,{children:r.jsxs(Q5,{href:l.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(K5,{children:"Hauptsponsor"}),r.jsx(X5,{src:l.logo,alt:l.name}),r.jsx(Z5,{children:l.name})]})}),r.jsx(P5,{children:s.map((u,c)=>r.jsxs(J5,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(F5,{src:u.logo,alt:u.name}),r.jsx(W5,{children:u.name})]},c))})]})}const tj=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,nj=v.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,aj=v.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,lj=v.p`
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
`;function rj({headline:l,description:s,contactInfos:u}){const c=f=>{f.preventDefault();const d=f.currentTarget,y=new FormData(d);if(String(y.get("website")||"").trim()!=="")return;const h=String(y.get("firstName")||"").trim(),g=String(y.get("lastName")||"").trim(),x=String(y.get("email")||"").trim(),S=String(y.get("phone")||"").trim(),w={};if(h||(w.firstName="Bitte Vornamen angeben"),g||(w.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)||(w.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(S)||(w.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(w).length>0){const k=Object.keys(w)[0],M=d.querySelector(`[name="${k}"]`);M&&M.focus(),alert(Object.values(w).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),d.reset()};return r.jsx(ij,{id:"kontakt",children:r.jsxs(sj,{children:[r.jsx(xj,{children:l}),r.jsx(yj,{children:s}),r.jsx(tj,{children:u.map((f,d)=>r.jsxs(nj,{children:[r.jsxs(aj,{children:[f.icon," ",f.title]}),r.jsx(lj,{$isEmail:f.isEmail,children:f.isEmail?r.jsx("a",{href:`mailto:${f.content}`,children:f.content}):f.content})]},d))}),r.jsxs(oj,{children:[r.jsx(cj,{children:"Kontakt aufnehmen"}),r.jsx(uj,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),r.jsxs(fj,{noValidate:!0,onSubmit:c,children:[r.jsxs(qu,{children:[r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"firstName",children:"Vorname"}),r.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"lastName",children:"Nachname"}),r.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),r.jsxs(qu,{children:[r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),r.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),r.jsxs(Zr,{children:[r.jsx("label",{htmlFor:"phone",children:"Telefon"}),r.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),r.jsx(qu,{children:r.jsxs(dj,{children:[r.jsx("label",{htmlFor:"email",children:"E-Mail"}),r.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),r.jsxs(hj,{"aria-hidden":"true",tabIndex:-1,children:[r.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),r.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),r.jsxs(mj,{children:[r.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),r.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",r.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),r.jsxs(gj,{children:[r.jsx(pj,{type:"submit",children:"Absenden"}),r.jsxs(bj,{children:["Alternativ:"," ",r.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const ij=v.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,sj=v.div`
  max-width: 1000px;
  margin: 0 auto;
`,oj=v.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,cj=v.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,uj=v.p`
  margin: 0 0 1rem 0;
  color: #555;
`,fj=v.form`
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
`,qu=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,Zr=v.div`
  display: flex;
  flex-direction: column;
`,dj=v(Zr)`
  grid-column: 1 / -1;
`,hj=v.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,mj=v.div`
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
`,gj=v.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,pj=v.button`
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
`,bj=v.span`
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
`,xj=v.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,yj=v.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,vj="sponsoring@sckw.de",Al=v.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,ks=v.section`
  padding: 3rem 0;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,l0=v(ks)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,Tl=v.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,js=v.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,ws=v.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,Sj=v.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
`,jj=v.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,wj=v.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,_j=v.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,Ej=v.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,zj=v.p`
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
`,Cj=v.div`
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
`,Aj=v.div`
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
`,Tj=v.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Rj=v.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,Mj=v.div`
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
`,Dj=wf`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`,kj=v.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`,Oj=v.div`
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
  animation: ${Dj} 2s ease-in-out infinite;
  flex-shrink: 0;
`,Bj=v.span`
  color: white;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.02em;

  strong {
    color: #fbbf24;
  }
`,Nj=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`,Uj=v.div`
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
`,Lj=v.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
  flex-wrap: wrap;
`,Hj=v.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: #222;
  margin: 0;
`,Gj=v.div`
  font-size: 1.1rem;
  font-weight: 800;
  color: #e10073;
  white-space: nowrap;
`,Yj=v.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 0.75rem;
  letter-spacing: 0.02em;
`,Vj=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem 1rem;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1rem;
  flex: 1;
`,Rl=v.div`
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
`,qj=v.div`
  font-size: 0.8rem;
  color: #888;
  border-top: 1px solid #f0f0f0;
  padding-top: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`,$j=v.span`
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  background: ${({$vergeben:l})=>l?"#fee2e2":"#d1fae5"};
  color: ${({$vergeben:l})=>l?"#991b1b":"#065f46"};
`,Qj=v.a`
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
`,Kj=v.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 10px;
  margin-bottom: 1rem;
  flex: 1;
`,Xj=v.img`
  max-width: 80px;
  max-height: 50px;
  object-fit: contain;
`,Zj=v.div`
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
`,c0=v.h3`
  font-size: 1.1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Pj=v.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #065f46;
  background: #d1fae5;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`,Jj=v.div`
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
`,Fj=v.h4`
  font-size: 1rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.25rem;
`,Wj=v.div`
  font-size: 1.05rem;
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Ij=v.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
  flex: 1;
`,e3=v.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 0.5rem;
  font-style: italic;
`,u0=v.p`
  text-align: center;
  font-size: 0.8rem;
  color: #999;
  margin-top: 1.5rem;
  margin-bottom: 0;
`,t3=v.div`
  margin-top: 3rem;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,n3=v.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,a3=v.div`
  position: relative;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 360px;
  }
`,l3=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,r3=v.div`
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
`,i3=v.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,s3=v.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.75rem 0;
`,o3=v.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
`,c3=v.div`
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
`,u3=v.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,f3=v.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,d3=v.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,h3=v.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`,$u=v.div`
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
`,m3=v($l)`
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
`;function g3(){const[l,s]=C.useState(Df);C.useEffect(()=>{fetch("/social-stats.json").then(b=>b.ok?b.json():Promise.reject()).then(b=>{b?.kpis?.length&&s(b.kpis)}).catch(()=>{})},[]);const u=[ht("herren/herren_6"),ht("herren/herren_16"),ht("herren/herren_5"),ht("herren/herren_14")].filter(Boolean),[c,f]=C.useState(0);C.useEffect(()=>{if(u.length<=1)return;const b=setInterval(()=>{f(h=>(h+1)%u.length)},6e3);return()=>clearInterval(b)},[u.length]);const d=b=>{document.getElementById(b)?.scrollIntoView({behavior:"smooth",block:"start"})},y=b=>{const h=encodeURIComponent(`Interesse an Sponsoring: ${b}`),g=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich für den Bereich "${b}" und würde gerne mehr erfahren.

Bitte senden Sie mir weitere Informationen.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Herzliche Grüße
`);return`mailto:${vj}?subject=${h}&body=${g}`};return r.jsxs(r.Fragment,{children:[r.jsxs(Sj,{children:[u.map((b,h)=>r.jsx(jj,{$bg:b,$active:h===c},h)),r.jsx(wj,{}),r.jsxs(_j,{children:[r.jsx(Ej,{children:"Sponsoring, das messbar wirkt"}),r.jsxs(zj,{children:[r.jsx("strong",{children:"1,3 Millionen Social-Media-Views"})," in dieser Saison, 100 % organisch, ohne Werbebudget. Aktuell erreichen wir"," ",r.jsx("strong",{children:"310.000 Views pro Monat"})," und Ihre Marke ist in jedem Spielbericht dabei."]}),r.jsx(Cj,{children:l.map(b=>r.jsxs(Aj,{children:[r.jsx(Tj,{children:b.value}),r.jsx(Rj,{children:b.label})]},b.label))}),r.jsxs(Mj,{children:[r.jsx(r0,{href:"#kontakt",$primary:!0,onClick:b=>{b.preventDefault(),d("kontakt")},children:"Jetzt Kontakt aufnehmen"}),r.jsx(r0,{href:"#angebot",onClick:b=>{b.preventDefault(),d("angebot")},children:"Angebot ansehen"})]})]})]}),r.jsx(kj,{children:r.jsxs(Oj,{children:[r.jsx(i0,{}),r.jsxs(Bj,{children:[Yu.text," ",r.jsx("strong",{children:Yu.highlight})," ",Yu.suffix]}),r.jsx(i0,{})]})}),r.jsx(ks,{children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Unsere Partner"}),r.jsx(ws,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),r.jsx(ej,{})]})}),r.jsx(l0,{id:"angebot",children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Exklusiv-Partnerschaften"}),r.jsx(ws,{children:"Vier einzigartige Pakete, jeweils nur 1× verfügbar. Alle Partner erscheinen in jedem Spielvor- und Nachbericht."})]}),r.jsx(Nj,{children:L5.map(b=>r.jsxs(Uj,{$vergeben:b.vergeben,children:[r.jsxs(Lj,{children:[r.jsxs("div",{children:[r.jsx(Hj,{children:b.name}),r.jsxs(Gj,{children:[b.preis," / Saison"]})]}),r.jsx($j,{$vergeben:b.vergeben,children:b.vergeben?"Vergeben":"Verfügbar"})]}),r.jsx(Yj,{children:b.topFeature}),b.vergeben&&b.sponsorLogo?r.jsxs(Kj,{children:[r.jsx(Xj,{src:b.sponsorLogo,alt:b.sponsorName||""}),r.jsx(Zj,{children:b.sponsorName})]}):r.jsxs(Vj,{children:[b.trikot!=="–"&&r.jsxs(Rl,{children:["Trikot: ",b.trikot]}),b.id==="stadionname"&&r.jsx(Rl,{children:"Stadion trägt Ihren Namen"}),r.jsxs(Rl,{children:["Bande: ",b.bande]}),r.jsxs(Rl,{children:["Banner: ",b.banner]}),r.jsxs(Rl,{children:["Magazin: ",b.magazin]}),r.jsxs(Rl,{children:[b.saisonkarten," Saisonkarten"]})]}),r.jsx(qj,{children:"Logo in allen Spielberichten · Stadionansage · Logo Website"}),r.jsx(Qj,{href:b.vergeben?void 0:y(b.name),$vergeben:b.vergeben,children:b.vergeben?"Vergeben":"Jetzt anfragen"})]},b.id))}),r.jsx(u0,{children:"Alle Preise verstehen sich zzgl. MwSt."})]})}),r.jsx(ks,{id:"werbeflaechen",children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Werbeflächen"}),r.jsx(ws,{children:"Banden, Banner und Buswerbung, einzeln buchbar zu festen Preisen."})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"2rem",maxWidth:900,margin:"0 auto"},children:[r.jsxs(o0,{children:[r.jsx("div",{style:{padding:"1.25rem 1.25rem 0"},children:r.jsx(c0,{children:"Banden & Banner"})}),r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs(s0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Typ"}),r.jsx("th",{children:"Grösse"}),r.jsx("th",{children:"Preis / Saison"}),r.jsx("th",{children:"Verfügbar"})]})}),r.jsx("tbody",{children:H5.map(b=>r.jsxs("tr",{children:[r.jsx("td",{style:{fontWeight:600},children:b.name}),r.jsx("td",{children:b.groesse}),r.jsx("td",{style:{fontWeight:700,color:"#e10073"},children:b.preis}),r.jsx("td",{children:r.jsxs(Pj,{children:[b.slots," Plätze"]})})]},b.name))})]})})]}),r.jsxs(o0,{children:[r.jsxs("div",{style:{padding:"1.25rem 1.25rem 0"},children:[r.jsx(c0,{children:"Buswerbung"}),r.jsx("p",{style:{fontSize:"0.9rem",color:"#666",margin:"0 0 0.75rem",lineHeight:1.5},children:"Jede Woche unterwegs in Konstanz, im Landkreis und bei Auswärtsspielen."})]}),r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SCKW",style:{width:"100%",display:"block"}}),r.jsx("div",{style:{overflowX:"auto"},children:r.jsxs(s0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fläche"}),r.jsx("th",{children:"Grösse"}),r.jsx("th",{children:"Preis / Jahr"})]})}),r.jsx("tbody",{children:[...v1,...S1].map(b=>r.jsxs("tr",{children:[r.jsx("td",{style:{fontWeight:600},children:b.position}),r.jsx("td",{children:b.groesse}),r.jsx("td",{style:{fontWeight:700,color:"#e10073"},children:b.preis})]},b.position))})]})}),r.jsx("div",{style:{padding:"0.75rem 1.25rem 1.25rem"},children:r.jsx("ul",{style:{margin:0,paddingLeft:"1.2rem",fontSize:"0.85rem",color:"#666",lineHeight:1.6},children:j1.map((b,h)=>r.jsx("li",{children:b},h))})})]})]}),r.jsx(u0,{children:"Alle Preise verstehen sich zzgl. MwSt."})]})}),r.jsx(l0,{id:"spieltag",children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(js,{children:"Spieltag & Medien"}),r.jsx(ws,{children:"Einstieg ins Sponsoring ab 150 € netto, perfekt zum Ausprobieren."})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.25rem",maxWidth:900,margin:"0 auto"},children:G5.map(b=>r.jsxs(Jj,{children:[r.jsx(Fj,{children:b.name}),r.jsx(Wj,{children:b.preis}),r.jsx(Ij,{children:b.beschreibung}),b.hinweis&&r.jsx(e3,{children:b.hinweis})]},b.name))})]})}),r.jsx(ks,{children:r.jsx(Al,{children:r.jsx(t3,{children:r.jsxs(n3,{children:[r.jsxs(a3,{children:[r.jsx(l3,{src:"/verbandsliga-karte.jpg",alt:"Verbandsliga Südbaden - Spielorte und Reichweite"}),r.jsx(r3,{children:"Saison 26/27"})]}),r.jsxs(i3,{children:[r.jsx(s3,{children:"Ihre Reichweite wächst mit"}),r.jsx(o3,{children:"Ob Buswerbung, Trikot oder Bande: Ihre Marke wird in der gesamten Region sichtbar. Als frischer Meister und Aufsteiger spielen wir ab Saison 26/27 Verbandsliga, in über 15 Städten zwischen Freiburg und Konstanz."}),r.jsxs(c3,{children:[r.jsx("strong",{children:"Was das für Sie bedeutet:"})," Mehr Gegner, größere Städte, mehr Medienaufmerksamkeit. Ihre Investition wächst automatisch mit, ohne Mehrkosten."]})]})]})})})}),r.jsx(u3,{children:r.jsxs(Al,{children:[r.jsxs(Tl,{children:[r.jsx(f3,{children:"CLUB 500"}),r.jsx(d3,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken. Werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),r.jsxs(h3,{children:[r.jsx($u,{children:"Spendenbescheinigung"}),r.jsx($u,{children:"Name auf der Spendentafel"}),r.jsx($u,{children:"Jugend- & Amateurfußball"})]}),r.jsx(Tl,{children:r.jsx(m3,{to:"/sponsoring/club-500",children:"Jetzt Mitglied werden →"})})]})}),r.jsx(rj,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt, wir erstellen ein passendes Angebot mit klaren Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:vt.email,isEmail:!0},{icon:"📍",title:"Adresse",content:vt.vollAdresse}]}),r.jsx(Ws,{})]})}function p3(){return bp(),!0}const b3=_v`
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
`,f0=v.div`
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
`,d0=v.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,h0=v.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,_s=v.button`
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
`,x3=v.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print {
    display: none !important;
  }
`,y3=v.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print {
    padding: 0;
    background: none;
  }
`,_t=v.section`
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
`,wt=v.p`
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
`,St=v.ul`
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
`,Nt=v.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${l=>(l.$lines||1)*8}mm;
  background: #fafafa;
`,v3=v.div`
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
`;function ha(){return r.jsxs(v3,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",r.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function on(){return r.jsxs(kf,{children:[r.jsxs(Un,{children:[r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),r.jsx("br",{}),"Schleyerweg 5",r.jsx("br",{}),"78467 Konstanz"]}),r.jsxs(Un,{$center:!0,children:[vt.email,r.jsx("br",{}),"partner.sckw.de"]}),r.jsxs(Un,{$right:!0,children:["Sparkasse Bodensee",r.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",r.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const m0=ht("herren/herren_0"),Qu=ht("herren/herren_6"),g0=ht("herren/herren_1"),S3=ht("herren/herren_14"),Gs=v.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function j3(){return r.jsx(_t,{children:r.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),r.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),r.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),r.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",r.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Df.slice(0,2).map(l=>r.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[r.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:l.value}),r.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:l.label})]},l.label))}),r.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function w3(){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"WARUM SCKW?"}),r.jsx(wt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Df.map(l=>r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[r.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:l.value}),r.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:l.label})]},l.label))}),r.jsx(mt,{children:"Was Sie bei uns erreichen"}),r.jsxs(St,{children:[r.jsx(I,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),r.jsx(I,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),r.jsx(I,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),r.jsx(I,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),r.jsx(mt,{children:"Der Verein auf einen Blick"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsxs(Oe,{children:[r.jsx("strong",{children:"Gegründet:"})," 1912"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Mitglieder:"})," 500+"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),r.jsxs("div",{children:[r.jsxs(Oe,{children:[r.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),m0&&r.jsx(Gs,{src:m0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),r.jsx(on,{})]})]})}function _3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"HAUPTSPONSOR"}),r.jsx(wt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(St,{children:[r.jsx(I,{children:"Trikotwerbung auf der Brust"}),r.jsx(I,{children:"Business Club Mitgliedschaft"}),r.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),r.jsx(I,{children:"1/1 seitiges Inserat im SC Magazin"}),r.jsx(I,{children:"10 Saisonkarten"}),r.jsx(I,{children:"Werbeauftritte nach Absprache"}),r.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(La,{$hidden:!l,children:["Beitrag: ",r.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function E3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"CO-SPONSOR"}),r.jsx(wt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(St,{children:[r.jsx(I,{children:"Werbung auf den Trainingsanzügen"}),r.jsx(I,{children:"Business Club Mitgliedschaft"}),r.jsx(I,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),r.jsx(I,{children:"1/2 seitiges Inserat im SC Magazin"}),r.jsx(I,{children:"5 Saisonkarten"}),r.jsx(I,{children:"Werbeauftritte nach Absprache"}),r.jsx(I,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(I,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(I,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(I,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(I,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(La,{$hidden:!l,children:["Beitrag: ",r.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function z3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"SILBER-PARTNER"}),r.jsx(wt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),r.jsxs(St,{children:[r.jsx(I,{children:"1 Bande (5×2 m) am Gelände"}),r.jsx(I,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),r.jsx(I,{children:"Werbeplane am Gelände"}),r.jsx(I,{children:"Vereinsplakate + Eventsichtbarkeit"}),r.jsx(I,{children:"Website: Logo auf Startseite"})]}),r.jsxs(La,{$hidden:!l,children:["Beitrag: ",r.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),r.jsx(mt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),r.jsx(wt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),r.jsxs(St,{children:[r.jsx(I,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),r.jsx(I,{children:"Website: Logo auf der Startseite"}),r.jsx(I,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),r.jsx(I,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),r.jsxs(La,{$hidden:!l,children:["Beitrag: ",r.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function C3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"BANDENWERBUNG"}),r.jsx(wt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),r.jsx(St,{children:r.jsx(I,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Platzierung:"}),r.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",r.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",r.jsx("br",{}),r.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),r.jsxs(La,{$hidden:!l,children:["Beitrag: ",r.jsx("strong",{children:"ab 800€ pro Saison"})]}),g0&&r.jsx(Gs,{src:g0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function A3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:'WERBUNG IM „HEIMSPIEL"'}),r.jsx(wt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),r.jsxs(St,{children:[r.jsx(I,{children:"15 Ausgaben pro Saison"}),r.jsx(I,{children:"ca. 100 Exemplare pro Heimspiel"}),r.jsx(I,{children:"Digitale Version (Social Media & Webseite)"}),r.jsx(I,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),r.jsx(I,{children:"DIN A4 Stadionmagazin"}),r.jsx(I,{children:"wird ausgelegt in diversen Arztpraxen"})]}),l&&r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>r.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),r.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),r.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),l&&r.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[r.jsx("strong",{children:"Maße"}),r.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",r.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",r.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function T3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"SPIELTAG-SPONSORING"}),r.jsx(wt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),r.jsx(mt,{children:"Ballspende"}),r.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),r.jsxs(St,{children:[r.jsx(I,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),r.jsx(I,{children:"Namensnennung in der Halbzeitpause"}),r.jsx(I,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),r.jsx(I,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),r.jsxs(La,{$hidden:!l,children:["Beitrag: ",r.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack:"," ",r.jsx("strong",{children:"500€"})," (statt 750€)"]}),r.jsx(mt,{children:"Spielpräsentator"}),r.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),r.jsxs(St,{children:[r.jsx(I,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),r.jsx(I,{children:"Namentliche Erwähnung im SC Magazin"}),r.jsx(I,{children:"Social Media Erwähnung am Spieltag"})]}),r.jsxs(La,{$hidden:!l,children:["Beitrag: ",r.jsx("strong",{children:"ab 250€ pro Spiel"})]}),Qu&&r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[r.jsx(Gs,{src:Qu,alt:"Action",style:{height:"48mm"}}),r.jsx(Gs,{src:S3||Qu,alt:"Jubel",style:{height:"48mm"}})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function R3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"BUSWERBUNG"}),r.jsx(wt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),l&&r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[...v1,...S1].map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),l&&r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),r.jsx(mt,{children:"Zusatzoptionen"}),r.jsx(St,{children:j1.map((s,u)=>r.jsx(I,{children:s},u))}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function M3({showPrices:l}){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{children:"PRÄMIEN-MODELL"}),r.jsx(wt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),l&&r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),r.jsxs("tbody",{children:[Y5.map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),r.jsxs("tr",{style:{background:"#f0f9ff"},children:[r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Vu.starter}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Vu.premium}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Vu.kombi})]})]})]}),r.jsx(mt,{children:"So funktioniert's"}),r.jsxs(St,{children:[r.jsx(I,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),r.jsx(I,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),r.jsx(I,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),r.jsx(I,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),r.jsx(mt,{children:"Inkludierte Leistungen"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx(Oe,{children:r.jsx("strong",{children:"Starter:"})}),r.jsxs(St,{children:[r.jsx(I,{children:"Stadionansage bei Erfolg"}),r.jsx(I,{children:"Logo auf Website"})]})]}),r.jsxs("div",{children:[r.jsx(Oe,{children:r.jsx("strong",{children:"Premium:"})}),r.jsxs(St,{children:[r.jsx(I,{children:"+ Social Media Post bei Erfolg"}),r.jsx(I,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}const p0=ht("herren/herren_jubel_500club");function D3(){return r.jsxs(_t,{children:[p0&&r.jsx("img",{src:p0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),r.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[r.jsx(wt,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),r.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[r.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den CLUB 500."})," ","Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),r.jsx(mt,{children:"Ihre Vorteile"}),r.jsxs(St,{children:[r.jsxs(I,{children:["Offizielle ",r.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),r.jsxs(I,{children:["Veröffentlichung Ihres ",r.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),r.jsx(I,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),r.jsx(mt,{children:"Zahlungsoptionen"}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),r.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(l=>r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:l.label}),r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:l.betrag})]},l.label))})]}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),r.jsx(mt,{children:"Spendenkonto"}),r.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[r.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),r.jsx("br",{}),"IBAN: ",r.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",r.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[r.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",r.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),r.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",r.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),r.jsx(on,{})]})]})}function k3(){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG CLUB 500"}),r.jsxs(wt,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an"," ",vt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(dt,{children:[r.jsx(et,{children:"Vorname:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"Nachname:"}),r.jsx(Nt,{$lines:1})]})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"Firma (optional):"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"Straße, Hausnummer:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[r.jsxs(dt,{children:[r.jsx(et,{children:"PLZ:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"Ort:"}),r.jsx(Nt,{$lines:1})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[r.jsxs(dt,{children:[r.jsx(et,{children:"Geb.-Datum:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"Telefon:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"E-Mail:"}),r.jsx(Nt,{$lines:1})]})]}),r.jsx(mt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(l=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:r.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),r.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),r.jsx(mt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im CLUB 500 bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(l=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:r.jsxs(et,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",l]})},l))}),r.jsxs(dt,{style:{marginTop:"2mm"},children:[r.jsx(et,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),r.jsx(Nt,{$lines:1})]}),r.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. CLUB 500. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[r.jsxs(dt,{children:[r.jsx(et,{children:"Konstanz, den _______________"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),r.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"Unterschrift:"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),r.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[r.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",r.jsx("br",{}),r.jsx("strong",{children:"Kontakt:"})," ",vt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs(kf,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),r.jsx(Un,{$center:!0,children:"CLUB 500"}),r.jsx(Un,{$right:!0,children:"partner.sckw.de"})]})]})]})}function O3(){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),r.jsx(wt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(l=>r.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[r.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:l.n}),r.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:l.t}),r.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:l.d})]},l.n))}),r.jsx(mt,{children:"Kontakt"}),r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:vt.email})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),r.jsxs("div",{style:{gridColumn:"1 / -1"},children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),r.jsxs("div",{style:{fontSize:"11pt"},children:[vt.adresse.name," · ",vt.adresse.strasse," ·"," ",vt.adresse.plz," ",vt.adresse.ort]})]})]}),r.jsx(mt,{children:"Gesprächsleitfaden"}),r.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "1,4 Mio. Social-Media-Views in dieser Saison – 100 % organisch, aktuell 394.000 Views/Monat."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),r.jsx(on,{})]})]})}function B3(){return r.jsxs(_t,{children:[r.jsx(Jt,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(It,{src:"/logo.svg"})}),r.jsx(en,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),r.jsxs(wt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an"," ",vt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(dt,{children:[r.jsx(et,{children:"Datum:"}),r.jsx(Nt,{$lines:1})]}),r.jsxs(dt,{children:[r.jsx(et,{children:"Gesprächsführer (Helfer):"}),r.jsx(Nt,{$lines:1})]})]}),V5.map((l,s)=>r.jsxs(dt,{children:[r.jsxs(et,{children:[l.label,":"]}),r.jsx(Nt,{$lines:l.lines})]},s)),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(l=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:r.jsxs(et,{style:{marginBottom:0},children:["☐ ",l]})},l))}),r.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:r.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[r.jsx("strong",{children:"Schnellreferenz:"})," ",vt.email," · partner.sckw.de · ",vt.vollAdresse.replace(/\n/g," · ")]})}),r.jsxs(kf,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"Internes Dokument"})}),r.jsx(Un,{$center:!0}),r.jsx(Un,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const On=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>r.jsx(j3,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>r.jsx(w3,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:l=>r.jsx(_3,{showPrices:l})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:l=>r.jsx(E3,{showPrices:l})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:l=>r.jsx(z3,{showPrices:l})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:l=>r.jsx(C3,{showPrices:l})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:l=>r.jsx(A3,{showPrices:l})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:l=>r.jsx(T3,{showPrices:l})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:l=>r.jsx(R3,{showPrices:l})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:l=>r.jsx(M3,{showPrices:l})},{id:"club500",label:"CLUB 500",group:"community",render:()=>r.jsx(D3,{})},{id:"club500form",label:"CLUB 500 Anmeldung",group:"community",render:()=>r.jsx(k3,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>r.jsx(O3,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>r.jsx(B3,{})}],N3=v.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print {
    display: none !important;
  }
`,U3=v.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,L3=v.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,H3=v.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,G3=v.button`
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
`,Ku=v.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,Xu=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,Zu=v.label`
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
`,Y3=v.div`
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
`,V3=v.button`
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
`,q3=v.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function $3(){const l=p3(),[s]=bp(),u=s.get("preset"),c=s.get("view"),f=()=>u==="club500"?new Set(["club500","club500form"]):new Set(On.filter(Y=>Y.group==="broschüre").map(Y=>Y.id)),[d,y]=C.useState(!0),[b,h]=C.useState(f),[g,x]=C.useState(c==="preview"?"preview":"dashboard");if(!l)return r.jsx(Rs,{to:"/",replace:!0});const S=Y=>{h(se=>{const K=new Set(se);return K.has(Y)?K.delete(Y):K.add(Y),K})},w=()=>h(new Set(On.map(Y=>Y.id))),k=()=>h(new Set),M=()=>h(new Set(On.filter(Y=>Y.group==="broschüre").map(Y=>Y.id))),B=()=>h(new Set(On.map(Y=>Y.id))),L=()=>h(new Set(["cover","why","spieltag","banden"])),V=()=>h(new Set(["cover","why","haupt","co","silber"])),X=()=>h(new Set(["club500","club500form"])),A=On.filter(Y=>b.has(Y.id)),$=On.filter(Y=>Y.group==="broschüre"),H=On.filter(Y=>Y.group==="community"),F=On.filter(Y=>Y.group==="helfer");return g==="preview"?r.jsxs(r.Fragment,{children:[r.jsx(b3,{}),r.jsxs(f0,{children:[r.jsxs(d0,{children:["Vorschau · ",A.length," Seiten"]}),r.jsxs(h0,{children:[r.jsx(_s,{$active:d,onClick:()=>y(Y=>!Y),children:d?"Preise ✓":"Preise ✗"}),r.jsx(_s,{onClick:()=>x("dashboard"),children:"Zurück"}),r.jsx(_s,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),r.jsxs(x3,{children:[r.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',r.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),r.jsx(y3,{children:A.map(Y=>r.jsx("div",{children:Y.render(d)},Y.id))})]}):r.jsxs(r.Fragment,{children:[r.jsxs(f0,{children:[r.jsx(d0,{children:"Sponsoring-Kit · SCKW"}),r.jsx(h0,{children:r.jsx(_s,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),r.jsxs(N3,{children:[r.jsx(U3,{children:"Sponsoring-Kit zusammenstellen"}),r.jsx(L3,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),r.jsxs(H3,{children:[r.jsx(G3,{$on:d,onClick:()=>y(Y=>!Y),children:d?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),r.jsxs(q3,{children:[b.size," von ",On.length," Seiten ausgewählt"]})]}),r.jsxs(Y3,{children:[r.jsx(ka,{onClick:w,children:"Alles"}),r.jsx(ka,{onClick:M,children:"Broschüre komplett"}),r.jsx(ka,{onClick:B,children:"Komplett-Kit (+ Helfer)"}),r.jsx(ka,{onClick:V,children:"Nur Premium-Pakete"}),r.jsx(ka,{onClick:L,children:"Starter-Paket"}),r.jsx(ka,{onClick:X,children:"CLUB 500"}),r.jsx(ka,{onClick:k,children:"Keine"})]}),r.jsx(Ku,{children:"Broschüre"}),r.jsx(Xu,{children:$.map(Y=>r.jsxs(Zu,{$checked:b.has(Y.id),children:[r.jsx("input",{type:"checkbox",checked:b.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),r.jsx(Ku,{children:"Community / CLUB 500"}),r.jsx(Xu,{children:H.map(Y=>r.jsxs(Zu,{$checked:b.has(Y.id),children:[r.jsx("input",{type:"checkbox",checked:b.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),r.jsx(Ku,{children:"Helfer-Anhang"}),r.jsx(Xu,{children:F.map(Y=>r.jsxs(Zu,{$checked:b.has(Y.id),children:[r.jsx("input",{type:"checkbox",checked:b.has(Y.id),onChange:()=>S(Y.id)}),Y.label]},Y.id))}),r.jsxs(V3,{disabled:b.size===0,onClick:()=>x("preview"),children:["Vorschau & Drucken (",b.size," Seiten)"]})]})]})}function Q3(l,s){if(l.match(/^[a-z]+:\/\//i))return l;if(l.match(/^\/\//))return window.location.protocol+l;if(l.match(/^[a-z]+:/i))return l;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),f=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(f),s&&(c.href=s),f.href=l,f.href}const K3=(()=>{let l=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(l+=1,`u${s()}${l}`)})();function da(l){const s=[];for(let u=0,c=l.length;u<c;u++)s.push(l[u]);return s}let Ml=null;function w1(l={}){return Ml||(l.includeStyleProperties?(Ml=l.includeStyleProperties,Ml):(Ml=da(window.getComputedStyle(document.documentElement)),Ml))}function Ys(l,s){const c=(l.ownerDocument.defaultView||window).getComputedStyle(l).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function X3(l){const s=Ys(l,"border-left-width"),u=Ys(l,"border-right-width");return l.clientWidth+s+u}function Z3(l){const s=Ys(l,"border-top-width"),u=Ys(l,"border-bottom-width");return l.clientHeight+s+u}function _1(l,s={}){const u=s.width||X3(l),c=s.height||Z3(l);return{width:u,height:c}}function P3(){let l,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(l=parseInt(u,10),Number.isNaN(l)&&(l=1)),l||window.devicePixelRatio||1}const Ot=16384;function J3(l){(l.width>Ot||l.height>Ot)&&(l.width>Ot&&l.height>Ot?l.width>l.height?(l.height*=Ot/l.width,l.width=Ot):(l.width*=Ot/l.height,l.height=Ot):l.width>Ot?(l.height*=Ot/l.width,l.width=Ot):(l.width*=Ot/l.height,l.height=Ot))}function Vs(l){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=l})}async function F3(l){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(l)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function W3(l,s,u){const c="http://www.w3.org/2000/svg",f=document.createElementNS(c,"svg"),d=document.createElementNS(c,"foreignObject");return f.setAttribute("width",`${s}`),f.setAttribute("height",`${u}`),f.setAttribute("viewBox",`0 0 ${s} ${u}`),d.setAttribute("width","100%"),d.setAttribute("height","100%"),d.setAttribute("x","0"),d.setAttribute("y","0"),d.setAttribute("externalResourcesRequired","true"),f.appendChild(d),d.appendChild(l),F3(f)}const jt=(l,s)=>{if(l instanceof s)return!0;const u=Object.getPrototypeOf(l);return u===null?!1:u.constructor.name===s.name||jt(u,s)};function I3(l){const s=l.getPropertyValue("content");return`${l.cssText} content: '${s.replace(/'|"/g,"")}';`}function ew(l,s){return w1(s).map(u=>{const c=l.getPropertyValue(u),f=l.getPropertyPriority(u);return`${u}: ${c}${f?" !important":""};`}).join(" ")}function tw(l,s,u,c){const f=`.${l}:${s}`,d=u.cssText?I3(u):ew(u,c);return document.createTextNode(`${f}{${d}}`)}function b0(l,s,u,c){const f=window.getComputedStyle(l,u),d=f.getPropertyValue("content");if(d===""||d==="none")return;const y=K3();try{s.className=`${s.className} ${y}`}catch{return}const b=document.createElement("style");b.appendChild(tw(y,u,f,c)),s.appendChild(b)}function nw(l,s,u){b0(l,s,":before",u),b0(l,s,":after",u)}const x0="application/font-woff",y0="image/jpeg",aw={woff:x0,woff2:x0,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y0,jpeg:y0,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function lw(l){const s=/\.([^./]*?)$/g.exec(l);return s?s[1]:""}function Of(l){const s=lw(l).toLowerCase();return aw[s]||""}function rw(l){return l.split(/,/)[1]}function hf(l){return l.search(/^(data:)/)!==-1}function iw(l,s){return`data:${s};base64,${l}`}async function E1(l,s,u){const c=await fetch(l,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const f=await c.blob();return new Promise((d,y)=>{const b=new FileReader;b.onerror=y,b.onloadend=()=>{try{d(u({res:c,result:b.result}))}catch(h){y(h)}},b.readAsDataURL(f)})}const Pu={};function sw(l,s,u){let c=l.replace(/\?.*/,"");return u&&(c=l),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Bf(l,s,u){const c=sw(l,s,u.includeQueryParams);if(Pu[c]!=null)return Pu[c];u.cacheBust&&(l+=(/\?/.test(l)?"&":"?")+new Date().getTime());let f;try{const d=await E1(l,u.fetchRequestInit,({res:y,result:b})=>(s||(s=y.headers.get("Content-Type")||""),rw(b)));f=iw(d,s)}catch(d){f=u.imagePlaceholder||"";let y=`Failed to fetch resource: ${l}`;d&&(y=typeof d=="string"?d:d.message),y&&console.warn(y)}return Pu[c]=f,f}async function ow(l){const s=l.toDataURL();return s==="data:,"?l.cloneNode(!1):Vs(s)}async function cw(l,s){if(l.currentSrc){const d=document.createElement("canvas"),y=d.getContext("2d");d.width=l.clientWidth,d.height=l.clientHeight,y?.drawImage(l,0,0,d.width,d.height);const b=d.toDataURL();return Vs(b)}const u=l.poster,c=Of(u),f=await Bf(u,c,s);return Vs(f)}async function uw(l,s){var u;try{if(!((u=l?.contentDocument)===null||u===void 0)&&u.body)return await Is(l.contentDocument.body,s,!0)}catch{}return l.cloneNode(!1)}async function fw(l,s){return jt(l,HTMLCanvasElement)?ow(l):jt(l,HTMLVideoElement)?cw(l,s):jt(l,HTMLIFrameElement)?uw(l,s):l.cloneNode(z1(l))}const dw=l=>l.tagName!=null&&l.tagName.toUpperCase()==="SLOT",z1=l=>l.tagName!=null&&l.tagName.toUpperCase()==="SVG";async function hw(l,s,u){var c,f;if(z1(s))return s;let d=[];return dw(l)&&l.assignedNodes?d=da(l.assignedNodes()):jt(l,HTMLIFrameElement)&&(!((c=l.contentDocument)===null||c===void 0)&&c.body)?d=da(l.contentDocument.body.childNodes):d=da(((f=l.shadowRoot)!==null&&f!==void 0?f:l).childNodes),d.length===0||jt(l,HTMLVideoElement)||await d.reduce((y,b)=>y.then(()=>Is(b,u)).then(h=>{h&&s.appendChild(h)}),Promise.resolve()),s}function mw(l,s,u){const c=s.style;if(!c)return;const f=window.getComputedStyle(l);f.cssText?(c.cssText=f.cssText,c.transformOrigin=f.transformOrigin):w1(u).forEach(d=>{let y=f.getPropertyValue(d);d==="font-size"&&y.endsWith("px")&&(y=`${Math.floor(parseFloat(y.substring(0,y.length-2)))-.1}px`),jt(l,HTMLIFrameElement)&&d==="display"&&y==="inline"&&(y="block"),d==="d"&&s.getAttribute("d")&&(y=`path(${s.getAttribute("d")})`),c.setProperty(d,y,f.getPropertyPriority(d))})}function gw(l,s){jt(l,HTMLTextAreaElement)&&(s.innerHTML=l.value),jt(l,HTMLInputElement)&&s.setAttribute("value",l.value)}function pw(l,s){if(jt(l,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(f=>l.value===f.getAttribute("value"));c&&c.setAttribute("selected","")}}function bw(l,s,u){return jt(s,Element)&&(mw(l,s,u),nw(l,s,u),gw(l,s),pw(l,s)),s}async function xw(l,s){const u=l.querySelectorAll?l.querySelectorAll("use"):[];if(u.length===0)return l;const c={};for(let d=0;d<u.length;d++){const b=u[d].getAttribute("xlink:href");if(b){const h=l.querySelector(b),g=document.querySelector(b);!h&&g&&!c[b]&&(c[b]=await Is(g,s,!0))}}const f=Object.values(c);if(f.length){const d="http://www.w3.org/1999/xhtml",y=document.createElementNS(d,"svg");y.setAttribute("xmlns",d),y.style.position="absolute",y.style.width="0",y.style.height="0",y.style.overflow="hidden",y.style.display="none";const b=document.createElementNS(d,"defs");y.appendChild(b);for(let h=0;h<f.length;h++)b.appendChild(f[h]);l.appendChild(y)}return l}async function Is(l,s,u){return!u&&s.filter&&!s.filter(l)?null:Promise.resolve(l).then(c=>fw(c,s)).then(c=>hw(l,c,s)).then(c=>bw(l,c,s)).then(c=>xw(c,s))}const C1=/url\((['"]?)([^'"]+?)\1\)/g,yw=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,vw=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Sw(l){const s=l.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function jw(l){const s=[];return l.replace(C1,(u,c,f)=>(s.push(f),u)),s.filter(u=>!hf(u))}async function ww(l,s,u,c,f){try{const d=u?Q3(s,u):s,y=Of(s);let b;return f||(b=await Bf(d,y,c)),l.replace(Sw(s),`$1${b}$3`)}catch{}return l}function _w(l,{preferredFontFormat:s}){return s?l.replace(vw,u=>{for(;;){const[c,,f]=yw.exec(u)||[];if(!f)return"";if(f===s)return`src: ${c};`}}):l}function A1(l){return l.search(C1)!==-1}async function T1(l,s,u){if(!A1(l))return l;const c=_w(l,u);return jw(c).reduce((d,y)=>d.then(b=>ww(b,y,s,u)),Promise.resolve(c))}async function Dl(l,s,u){var c;const f=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(l);if(f){const d=await T1(f,null,u);return s.style.setProperty(l,d,s.style.getPropertyPriority(l)),!0}return!1}async function Ew(l,s){await Dl("background",l,s)||await Dl("background-image",l,s),await Dl("mask",l,s)||await Dl("-webkit-mask",l,s)||await Dl("mask-image",l,s)||await Dl("-webkit-mask-image",l,s)}async function zw(l,s){const u=jt(l,HTMLImageElement);if(!(u&&!hf(l.src))&&!(jt(l,SVGImageElement)&&!hf(l.href.baseVal)))return;const c=u?l.src:l.href.baseVal,f=await Bf(c,Of(c),s);await new Promise((d,y)=>{l.onload=d,l.onerror=s.onImageErrorHandler?(...h)=>{try{d(s.onImageErrorHandler(...h))}catch(g){y(g)}}:y;const b=l;b.decode&&(b.decode=d),b.loading==="lazy"&&(b.loading="eager"),u?(l.srcset="",l.src=f):l.href.baseVal=f})}async function Cw(l,s){const c=da(l.childNodes).map(f=>R1(f,s));await Promise.all(c).then(()=>l)}async function R1(l,s){jt(l,Element)&&(await Ew(l,s),await zw(l,s),await Cw(l,s))}function Aw(l,s){const{style:u}=l;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(f=>{u[f]=c[f]}),l}const v0={};async function S0(l){let s=v0[l];if(s!=null)return s;const c=await(await fetch(l)).text();return s={url:l,cssText:c},v0[l]=s,s}async function j0(l,s){let u=l.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,d=(u.match(/url\([^)]+\)/g)||[]).map(async y=>{let b=y.replace(c,"$1");return b.startsWith("https://")||(b=new URL(b,l.url).href),E1(b,s.fetchRequestInit,({result:h})=>(u=u.replace(y,`url(${h})`),[y,h]))});return Promise.all(d).then(()=>u)}function w0(l){if(l==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=l.replace(u,"");const f=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=f.exec(c);if(h===null)break;s.push(h[0])}c=c.replace(f,"");const d=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,y="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",b=new RegExp(y,"gi");for(;;){let h=d.exec(c);if(h===null){if(h=b.exec(c),h===null)break;d.lastIndex=b.lastIndex}else b.lastIndex=d.lastIndex;s.push(h[0])}return s}async function Tw(l,s){const u=[],c=[];return l.forEach(f=>{if("cssRules"in f)try{da(f.cssRules||[]).forEach((d,y)=>{if(d.type===CSSRule.IMPORT_RULE){let b=y+1;const h=d.href,g=S0(h).then(x=>j0(x,s)).then(x=>w0(x).forEach(S=>{try{f.insertRule(S,S.startsWith("@import")?b+=1:f.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:S,error:w})}})).catch(x=>{console.error("Error loading remote css",x.toString())});c.push(g)}})}catch(d){const y=l.find(b=>b.href==null)||document.styleSheets[0];f.href!=null&&c.push(S0(f.href).then(b=>j0(b,s)).then(b=>w0(b).forEach(h=>{y.insertRule(h,y.cssRules.length)})).catch(b=>{console.error("Error loading remote stylesheet",b)})),console.error("Error inlining remote css file",d)}}),Promise.all(c).then(()=>(l.forEach(f=>{if("cssRules"in f)try{da(f.cssRules||[]).forEach(d=>{u.push(d)})}catch(d){console.error(`Error while reading CSS rules from ${f.href}`,d)}}),u))}function Rw(l){return l.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>A1(s.style.getPropertyValue("src")))}async function Mw(l,s){if(l.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=da(l.ownerDocument.styleSheets),c=await Tw(u,s);return Rw(c)}function M1(l){return l.trim().replace(/["']/g,"")}function Dw(l){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(d=>{s.add(M1(d))}),Array.from(c.children).forEach(d=>{d instanceof HTMLElement&&u(d)})}return u(l),s}async function kw(l,s){const u=await Mw(l,s),c=Dw(l);return(await Promise.all(u.filter(d=>c.has(M1(d.style.fontFamily))).map(d=>{const y=d.parentStyleSheet?d.parentStyleSheet.href:null;return T1(d.cssText,y,s)}))).join(`
`)}async function Ow(l,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await kw(l,s);if(u){const c=document.createElement("style"),f=document.createTextNode(u);c.appendChild(f),l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c)}}async function Bw(l,s={}){const{width:u,height:c}=_1(l,s),f=await Is(l,s,!0);return await Ow(f,s),await R1(f,s),Aw(f,s),await W3(f,u,c)}async function Nw(l,s={}){const{width:u,height:c}=_1(l,s),f=await Bw(l,s),d=await Vs(f),y=document.createElement("canvas"),b=y.getContext("2d"),h=s.pixelRatio||P3(),g=s.canvasWidth||u,x=s.canvasHeight||c;return y.width=g*h,y.height=x*h,s.skipAutoScale||J3(y),y.style.width=`${g}`,y.style.height=`${x}`,s.backgroundColor&&(b.fillStyle=s.backgroundColor,b.fillRect(0,0,y.width,y.height)),b.drawImage(d,0,0,y.width,y.height),y}async function Uw(l,s={}){return(await Nw(l,s)).toDataURL()}const Qr=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],Lw=v.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,Hw=v.div`
  max-width: 1200px;
  margin: 0 auto;
`,Gw=v.div`
  text-align: center;
  margin-bottom: 2rem;
`,Yw=v.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Vw=v.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,qw=v.select`
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
`,$w=v.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Qw=v.div`
  flex: 1;
  min-width: 0;
`,Kw=v.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,Xw=v.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,Zw=v.div`
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
`,Pw=v.img`
  width: ${l=>l.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${l=>l.$offsetX}%, ${l=>l.$offsetY}%);
`,Jw=v.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,Fw=v.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,Ww=v.div`
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
`,Iw=v.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,e_=v.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,t_=v.label`
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
`,n_=v.button`
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
`,a_=v.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,l_=v.input`
  display: none;
`,r_=v.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,Ju=v.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Fu=v.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,Wu=v.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,i_=v.button`
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
`,s_=v.button`
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
`;function o_(){const[l,s]=C.useState(Qr[0].id),[u,c]=C.useState(null),[f,d]=C.useState([]),[y,b]=C.useState(!1),h=C.useRef({}),g=C.useRef(null),x=Qr.find(A=>A.id===l)??Qr[0],S=A=>f.find($=>$.zoneId===A),w=C.useCallback((A,$)=>{if(!$)return;const H=new FileReader;H.onload=F=>{const Y=F.target?.result;d(se=>[...se.filter(K=>K.zoneId!==A),{zoneId:A,dataUrl:Y,scale:1,offsetX:0,offsetY:0}])},H.readAsDataURL($)},[]),k=C.useCallback((A,$)=>{d(H=>H.map(F=>F.zoneId===A?{...F,scale:$}:F))},[]),M=C.useCallback((A,$,H)=>{d(F=>F.map(Y=>Y.zoneId===A?{...Y,offsetX:$,offsetY:H}:Y))},[]),B=C.useCallback(A=>{d($=>$.filter(H=>H.zoneId!==A))},[]),L=C.useCallback(()=>{d([]),c(null)},[]),V=C.useCallback(async()=>{if(g.current){b(!0);try{const A=await Uw(g.current,{pixelRatio:2,cacheBust:!0}),$=document.createElement("a");$.download=`${x.label}-mockup.png`,$.href=A,$.click()}finally{b(!1)}}},[x.label]),X=A=>{c(A.id),S(A.id)||h.current[A.id]?.click()};return r.jsx(Lw,{children:r.jsxs(Hw,{children:[r.jsxs(Gw,{children:[r.jsx(Yw,{children:"Mockup Generator"}),r.jsx(Vw,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),Qr.length>1&&r.jsx(qw,{value:l,onChange:A=>{s(A.target.value),d([]),c(null)},children:Qr.map(A=>r.jsx("option",{value:A.id,children:A.label},A.id))}),r.jsxs($w,{children:[r.jsx(Qw,{children:r.jsxs(Kw,{ref:g,children:[r.jsx(Xw,{src:x.image,alt:x.label,draggable:!1}),x.zones.map(A=>{const $=S(A.id);return r.jsx(Zw,{$active:u===A.id,$hasLogo:!!$,style:{left:`${A.x}%`,top:`${A.y}%`,width:`${A.width}%`,height:`${A.height}%`},onClick:()=>X(A),onDragOver:H=>{H.preventDefault(),c(A.id)},onDrop:H=>{H.preventDefault();const F=H.dataTransfer.files?.[0];w(A.id,F)},children:$&&r.jsx(Pw,{src:$.dataUrl,alt:"Logo",draggable:!1,$scale:$.scale,$offsetX:$.offsetX,$offsetY:$.offsetY})},A.id)})]})}),r.jsxs(Jw,{children:[r.jsx(Fw,{children:"Werbeflächen"}),x.zones.map(A=>{const $=S(A.id);return r.jsxs(Ww,{$active:u===A.id,onClick:()=>c(A.id),children:[r.jsx(Iw,{children:A.label}),r.jsxs(e_,{children:[r.jsx(t_,{htmlFor:`file-${A.id}`,children:$?"Ändern":"Logo hochladen"}),r.jsx(l_,{id:`file-${A.id}`,ref:H=>{h.current[A.id]=H},type:"file",accept:"image/*",onChange:H=>w(A.id,H.target.files?.[0])}),$&&r.jsx(n_,{onClick:H=>{H.stopPropagation(),B(A.id)},children:"Entfernen"}),$&&r.jsx(a_,{src:$.dataUrl,alt:"Vorschau"})]}),$&&r.jsxs(r.Fragment,{children:[r.jsxs(Ju,{children:[r.jsxs(Fu,{children:[Math.round($.scale*100),"%"]}),r.jsx(Wu,{type:"range",min:"0.3",max:"3",step:"0.05",value:$.scale,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),k(A.id,parseFloat(H.target.value))}})]}),r.jsxs(Ju,{children:[r.jsx(Fu,{children:"X"}),r.jsx(Wu,{type:"range",min:"-100",max:"100",step:"1",value:$.offsetX,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),M(A.id,parseFloat(H.target.value),$.offsetY)}})]}),r.jsxs(Ju,{children:[r.jsx(Fu,{children:"Y"}),r.jsx(Wu,{type:"range",min:"-100",max:"100",step:"1",value:$.offsetY,onClick:H=>H.stopPropagation(),onChange:H=>{H.stopPropagation(),M(A.id,$.offsetX,parseFloat(H.target.value))}})]})]}),!$&&r.jsx(r_,{children:"Klicken oder Bild hierher ziehen"})]},A.id)}),f.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(s_,{onClick:V,disabled:y,children:y?"Wird erstellt...":"Bild herunterladen"}),r.jsx(i_,{onClick:L,children:"Alle Logos entfernen"})]})]})]})]})})}var c_=Object.defineProperty,qs=Object.getOwnPropertySymbols,D1=Object.prototype.hasOwnProperty,k1=Object.prototype.propertyIsEnumerable,_0=(l,s,u)=>s in l?c_(l,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[s]=u,mf=(l,s)=>{for(var u in s||(s={}))D1.call(s,u)&&_0(l,u,s[u]);if(qs)for(var u of qs(s))k1.call(s,u)&&_0(l,u,s[u]);return l},gf=(l,s)=>{var u={};for(var c in l)D1.call(l,c)&&s.indexOf(c)<0&&(u[c]=l[c]);if(l!=null&&qs)for(var c of qs(l))s.indexOf(c)<0&&k1.call(l,c)&&(u[c]=l[c]);return u};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ha;(l=>{const s=class pe{constructor(h,g,x,S){if(this.version=h,this.errorCorrectionLevel=g,this.modules=[],this.isFunction=[],h<pe.MIN_VERSION||h>pe.MAX_VERSION)throw new RangeError("Version value out of range");if(S<-1||S>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let w=[];for(let M=0;M<this.size;M++)w.push(!1);for(let M=0;M<this.size;M++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const k=this.addEccAndInterleave(x);if(this.drawCodewords(k),S==-1){let M=1e9;for(let B=0;B<8;B++){this.applyMask(B),this.drawFormatBits(B);const L=this.getPenaltyScore();L<M&&(S=B,M=L),this.applyMask(B)}}f(0<=S&&S<=7),this.mask=S,this.applyMask(S),this.drawFormatBits(S),this.isFunction=[]}static encodeText(h,g){const x=l.QrSegment.makeSegments(h);return pe.encodeSegments(x,g)}static encodeBinary(h,g){const x=l.QrSegment.makeBytes(h);return pe.encodeSegments([x],g)}static encodeSegments(h,g,x=1,S=40,w=-1,k=!0){if(!(pe.MIN_VERSION<=x&&x<=S&&S<=pe.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let M,B;for(M=x;;M++){const A=pe.getNumDataCodewords(M,g)*8,$=y.getTotalBits(h,M);if($<=A){B=$;break}if(M>=S)throw new RangeError("Data too long")}for(const A of[pe.Ecc.MEDIUM,pe.Ecc.QUARTILE,pe.Ecc.HIGH])k&&B<=pe.getNumDataCodewords(M,A)*8&&(g=A);let L=[];for(const A of h){u(A.mode.modeBits,4,L),u(A.numChars,A.mode.numCharCountBits(M),L);for(const $ of A.getData())L.push($)}f(L.length==B);const V=pe.getNumDataCodewords(M,g)*8;f(L.length<=V),u(0,Math.min(4,V-L.length),L),u(0,(8-L.length%8)%8,L),f(L.length%8==0);for(let A=236;L.length<V;A^=253)u(A,8,L);let X=[];for(;X.length*8<L.length;)X.push(0);return L.forEach((A,$)=>X[$>>>3]|=A<<7-($&7)),new pe(M,g,X,w)}getModule(h,g){return 0<=h&&h<this.size&&0<=g&&g<this.size&&this.modules[g][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let x=0;x<this.size;x++)this.setFunctionModule(6,x,x%2==0),this.setFunctionModule(x,6,x%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),g=h.length;for(let x=0;x<g;x++)for(let S=0;S<g;S++)x==0&&S==0||x==0&&S==g-1||x==g-1&&S==0||this.drawAlignmentPattern(h[x],h[S]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const g=this.errorCorrectionLevel.formatBits<<3|h;let x=g;for(let w=0;w<10;w++)x=x<<1^(x>>>9)*1335;const S=(g<<10|x)^21522;f(S>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,c(S,w));this.setFunctionModule(8,7,c(S,6)),this.setFunctionModule(8,8,c(S,7)),this.setFunctionModule(7,8,c(S,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,c(S,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,c(S,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,c(S,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let x=0;x<12;x++)h=h<<1^(h>>>11)*7973;const g=this.version<<12|h;f(g>>>18==0);for(let x=0;x<18;x++){const S=c(g,x),w=this.size-11+x%3,k=Math.floor(x/3);this.setFunctionModule(w,k,S),this.setFunctionModule(k,w,S)}}drawFinderPattern(h,g){for(let x=-4;x<=4;x++)for(let S=-4;S<=4;S++){const w=Math.max(Math.abs(S),Math.abs(x)),k=h+S,M=g+x;0<=k&&k<this.size&&0<=M&&M<this.size&&this.setFunctionModule(k,M,w!=2&&w!=4)}}drawAlignmentPattern(h,g){for(let x=-2;x<=2;x++)for(let S=-2;S<=2;S++)this.setFunctionModule(h+S,g+x,Math.max(Math.abs(S),Math.abs(x))!=1)}setFunctionModule(h,g,x){this.modules[g][h]=x,this.isFunction[g][h]=!0}addEccAndInterleave(h){const g=this.version,x=this.errorCorrectionLevel;if(h.length!=pe.getNumDataCodewords(g,x))throw new RangeError("Invalid argument");const S=pe.NUM_ERROR_CORRECTION_BLOCKS[x.ordinal][g],w=pe.ECC_CODEWORDS_PER_BLOCK[x.ordinal][g],k=Math.floor(pe.getNumRawDataModules(g)/8),M=S-k%S,B=Math.floor(k/S);let L=[];const V=pe.reedSolomonComputeDivisor(w);for(let A=0,$=0;A<S;A++){let H=h.slice($,$+B-w+(A<M?0:1));$+=H.length;const F=pe.reedSolomonComputeRemainder(H,V);A<M&&H.push(0),L.push(H.concat(F))}let X=[];for(let A=0;A<L[0].length;A++)L.forEach(($,H)=>{(A!=B-w||H>=M)&&X.push($[A])});return f(X.length==k),X}drawCodewords(h){if(h.length!=Math.floor(pe.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let g=0;for(let x=this.size-1;x>=1;x-=2){x==6&&(x=5);for(let S=0;S<this.size;S++)for(let w=0;w<2;w++){const k=x-w,B=(x+1&2)==0?this.size-1-S:S;!this.isFunction[B][k]&&g<h.length*8&&(this.modules[B][k]=c(h[g>>>3],7-(g&7)),g++)}}f(g==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let g=0;g<this.size;g++)for(let x=0;x<this.size;x++){let S;switch(h){case 0:S=(x+g)%2==0;break;case 1:S=g%2==0;break;case 2:S=x%3==0;break;case 3:S=(x+g)%3==0;break;case 4:S=(Math.floor(x/3)+Math.floor(g/2))%2==0;break;case 5:S=x*g%2+x*g%3==0;break;case 6:S=(x*g%2+x*g%3)%2==0;break;case 7:S=((x+g)%2+x*g%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[g][x]&&S&&(this.modules[g][x]=!this.modules[g][x])}}getPenaltyScore(){let h=0;for(let w=0;w<this.size;w++){let k=!1,M=0,B=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[w][L]==k?(M++,M==5?h+=pe.PENALTY_N1:M>5&&h++):(this.finderPenaltyAddHistory(M,B),k||(h+=this.finderPenaltyCountPatterns(B)*pe.PENALTY_N3),k=this.modules[w][L],M=1);h+=this.finderPenaltyTerminateAndCount(k,M,B)*pe.PENALTY_N3}for(let w=0;w<this.size;w++){let k=!1,M=0,B=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[L][w]==k?(M++,M==5?h+=pe.PENALTY_N1:M>5&&h++):(this.finderPenaltyAddHistory(M,B),k||(h+=this.finderPenaltyCountPatterns(B)*pe.PENALTY_N3),k=this.modules[L][w],M=1);h+=this.finderPenaltyTerminateAndCount(k,M,B)*pe.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let k=0;k<this.size-1;k++){const M=this.modules[w][k];M==this.modules[w][k+1]&&M==this.modules[w+1][k]&&M==this.modules[w+1][k+1]&&(h+=pe.PENALTY_N2)}let g=0;for(const w of this.modules)g=w.reduce((k,M)=>k+(M?1:0),g);const x=this.size*this.size,S=Math.ceil(Math.abs(g*20-x*10)/x)-1;return f(0<=S&&S<=9),h+=S*pe.PENALTY_N4,f(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,g=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let x=[6];for(let S=this.size-7;x.length<h;S-=g)x.splice(1,0,S);return x}}static getNumRawDataModules(h){if(h<pe.MIN_VERSION||h>pe.MAX_VERSION)throw new RangeError("Version number out of range");let g=(16*h+128)*h+64;if(h>=2){const x=Math.floor(h/7)+2;g-=(25*x-10)*x-55,h>=7&&(g-=36)}return f(208<=g&&g<=29648),g}static getNumDataCodewords(h,g){return Math.floor(pe.getNumRawDataModules(h)/8)-pe.ECC_CODEWORDS_PER_BLOCK[g.ordinal][h]*pe.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let g=[];for(let S=0;S<h-1;S++)g.push(0);g.push(1);let x=1;for(let S=0;S<h;S++){for(let w=0;w<g.length;w++)g[w]=pe.reedSolomonMultiply(g[w],x),w+1<g.length&&(g[w]^=g[w+1]);x=pe.reedSolomonMultiply(x,2)}return g}static reedSolomonComputeRemainder(h,g){let x=g.map(S=>0);for(const S of h){const w=S^x.shift();x.push(0),g.forEach((k,M)=>x[M]^=pe.reedSolomonMultiply(k,w))}return x}static reedSolomonMultiply(h,g){if(h>>>8||g>>>8)throw new RangeError("Byte out of range");let x=0;for(let S=7;S>=0;S--)x=x<<1^(x>>>7)*285,x^=(g>>>S&1)*h;return f(x>>>8==0),x}finderPenaltyCountPatterns(h){const g=h[1];f(g<=this.size*3);const x=g>0&&h[2]==g&&h[3]==g*3&&h[4]==g&&h[5]==g;return(x&&h[0]>=g*4&&h[6]>=g?1:0)+(x&&h[6]>=g*4&&h[0]>=g?1:0)}finderPenaltyTerminateAndCount(h,g,x){return h&&(this.finderPenaltyAddHistory(g,x),g=0),g+=this.size,this.finderPenaltyAddHistory(g,x),this.finderPenaltyCountPatterns(x)}finderPenaltyAddHistory(h,g){g[0]==0&&(h+=this.size),g.pop(),g.unshift(h)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],l.QrCode=s;function u(b,h,g){if(h<0||h>31||b>>>h)throw new RangeError("Value out of range");for(let x=h-1;x>=0;x--)g.push(b>>>x&1)}function c(b,h){return(b>>>h&1)!=0}function f(b){if(!b)throw new Error("Assertion error")}const d=class Ye{constructor(h,g,x){if(this.mode=h,this.numChars=g,this.bitData=x,g<0)throw new RangeError("Invalid argument");this.bitData=x.slice()}static makeBytes(h){let g=[];for(const x of h)u(x,8,g);return new Ye(Ye.Mode.BYTE,h.length,g)}static makeNumeric(h){if(!Ye.isNumeric(h))throw new RangeError("String contains non-numeric characters");let g=[];for(let x=0;x<h.length;){const S=Math.min(h.length-x,3);u(parseInt(h.substring(x,x+S),10),S*3+1,g),x+=S}return new Ye(Ye.Mode.NUMERIC,h.length,g)}static makeAlphanumeric(h){if(!Ye.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let g=[],x;for(x=0;x+2<=h.length;x+=2){let S=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x))*45;S+=Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x+1)),u(S,11,g)}return x<h.length&&u(Ye.ALPHANUMERIC_CHARSET.indexOf(h.charAt(x)),6,g),new Ye(Ye.Mode.ALPHANUMERIC,h.length,g)}static makeSegments(h){return h==""?[]:Ye.isNumeric(h)?[Ye.makeNumeric(h)]:Ye.isAlphanumeric(h)?[Ye.makeAlphanumeric(h)]:[Ye.makeBytes(Ye.toUtf8ByteArray(h))]}static makeEci(h){let g=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)u(h,8,g);else if(h<16384)u(2,2,g),u(h,14,g);else if(h<1e6)u(6,3,g),u(h,21,g);else throw new RangeError("ECI assignment value out of range");return new Ye(Ye.Mode.ECI,0,g)}static isNumeric(h){return Ye.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return Ye.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,g){let x=0;for(const S of h){const w=S.mode.numCharCountBits(g);if(S.numChars>=1<<w)return 1/0;x+=4+w+S.bitData.length}return x}static toUtf8ByteArray(h){h=encodeURI(h);let g=[];for(let x=0;x<h.length;x++)h.charAt(x)!="%"?g.push(h.charCodeAt(x)):(g.push(parseInt(h.substring(x+1,x+3),16)),x+=2);return g}};d.NUMERIC_REGEX=/^[0-9]*$/,d.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,d.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let y=d;l.QrSegment=d})(Ha||(Ha={}));(l=>{(s=>{const u=class{constructor(f,d){this.ordinal=f,this.formatBits=d}};u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),s.Ecc=u})(l.QrCode||(l.QrCode={}))})(Ha||(Ha={}));(l=>{(s=>{const u=class{constructor(f,d){this.modeBits=f,this.numBitsCharCount=d}numCharCountBits(f){return this.numBitsCharCount[Math.floor((f+7)/17)]}};u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),s.Mode=u})(l.QrSegment||(l.QrSegment={}))})(Ha||(Ha={}));var Ol=Ha;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var u_={L:Ol.QrCode.Ecc.LOW,M:Ol.QrCode.Ecc.MEDIUM,Q:Ol.QrCode.Ecc.QUARTILE,H:Ol.QrCode.Ecc.HIGH},O1=128,B1="L",N1="#FFFFFF",U1="#000000",L1=!1,H1=1,f_=4,d_=0,h_=.1;function G1(l,s=0){const u=[];return l.forEach(function(c,f){let d=null;c.forEach(function(y,b){if(!y&&d!==null){u.push(`M${d+s} ${f+s}h${b-d}v1H${d+s}z`),d=null;return}if(b===c.length-1){if(!y)return;d===null?u.push(`M${b+s},${f+s} h1v1H${b+s}z`):u.push(`M${d+s},${f+s} h${b+1-d}v1H${d+s}z`);return}y&&d===null&&(d=b)})}),u.join("")}function Y1(l,s){return l.slice().map((u,c)=>c<s.y||c>=s.y+s.h?u:u.map((f,d)=>d<s.x||d>=s.x+s.w?f:!1))}function m_(l,s,u,c){if(c==null)return null;const f=l.length+u*2,d=Math.floor(s*h_),y=f/s,b=(c.width||d)*y,h=(c.height||d)*y,g=c.x==null?l.length/2-b/2:c.x*y,x=c.y==null?l.length/2-h/2:c.y*y,S=c.opacity==null?1:c.opacity;let w=null;if(c.excavate){let M=Math.floor(g),B=Math.floor(x),L=Math.ceil(b+g-M),V=Math.ceil(h+x-B);w={x:M,y:B,w:L,h:V}}const k=c.crossOrigin;return{x:g,y:x,h,w:b,excavation:w,opacity:S,crossOrigin:k}}function g_(l,s){return s!=null?Math.max(Math.floor(s),0):l?f_:d_}function V1({value:l,level:s,minVersion:u,includeMargin:c,marginSize:f,imageSettings:d,size:y,boostLevel:b}){let h=_e.useMemo(()=>{const M=(Array.isArray(l)?l:[l]).reduce((B,L)=>(B.push(...Ol.QrSegment.makeSegments(L)),B),[]);return Ol.QrCode.encodeSegments(M,u_[s],u,void 0,void 0,b)},[l,s,u,b]);const{cells:g,margin:x,numCells:S,calculatedImageSettings:w}=_e.useMemo(()=>{let k=h.getModules();const M=g_(c,f),B=k.length+M*2,L=m_(k,y,M,d);return{cells:k,margin:M,numCells:B,calculatedImageSettings:L}},[h,y,d,c,f]);return{qrcode:h,margin:x,cells:g,numCells:S,calculatedImageSettings:w}}var p_=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),b_=_e.forwardRef(function(s,u){const c=s,{value:f,size:d=O1,level:y=B1,bgColor:b=N1,fgColor:h=U1,includeMargin:g=L1,minVersion:x=H1,boostLevel:S,marginSize:w,imageSettings:k}=c,B=gf(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:L}=B,V=gf(B,["style"]),X=k?.src,A=_e.useRef(null),$=_e.useRef(null),H=_e.useCallback(at=>{A.current=at,typeof u=="function"?u(at):u&&(u.current=at)},[u]),[F,Y]=_e.useState(!1),{margin:se,cells:K,numCells:be,calculatedImageSettings:Se}=V1({value:f,level:y,minVersion:x,boostLevel:S,includeMargin:g,marginSize:w,imageSettings:k,size:d});_e.useEffect(()=>{if(A.current!=null){const at=A.current,Ce=at.getContext("2d");if(!Ce)return;let N=K;const Z=$.current,ne=Se!=null&&Z!==null&&Z.complete&&Z.naturalHeight!==0&&Z.naturalWidth!==0;ne&&Se.excavation!=null&&(N=Y1(K,Se.excavation));const ce=window.devicePixelRatio||1;at.height=at.width=d*ce;const _=d/be*ce;Ce.scale(_,_),Ce.fillStyle=b,Ce.fillRect(0,0,be,be),Ce.fillStyle=h,p_?Ce.fill(new Path2D(G1(N,se))):K.forEach(function(Q,P){Q.forEach(function(J,ee){J&&Ce.fillRect(ee+se,P+se,1,1)})}),Se&&(Ce.globalAlpha=Se.opacity),ne&&Ce.drawImage(Z,Se.x+se,Se.y+se,Se.w,Se.h)}}),_e.useEffect(()=>{Y(!1)},[X]);const Ue=mf({height:d,width:d},L);let Ut=null;return X!=null&&(Ut=_e.createElement("img",{src:X,key:X,style:{display:"none"},onLoad:()=>{Y(!0)},ref:$,crossOrigin:Se?.crossOrigin})),_e.createElement(_e.Fragment,null,_e.createElement("canvas",mf({style:Ue,height:d,width:d,ref:H,role:"img"},V)),Ut)});b_.displayName="QRCodeCanvas";var q1=_e.forwardRef(function(s,u){const c=s,{value:f,size:d=O1,level:y=B1,bgColor:b=N1,fgColor:h=U1,includeMargin:g=L1,minVersion:x=H1,boostLevel:S,title:w,marginSize:k,imageSettings:M}=c,B=gf(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:L,cells:V,numCells:X,calculatedImageSettings:A}=V1({value:f,level:y,minVersion:x,boostLevel:S,includeMargin:g,marginSize:k,imageSettings:M,size:d});let $=V,H=null;M!=null&&A!=null&&(A.excavation!=null&&($=Y1(V,A.excavation)),H=_e.createElement("image",{href:M.src,height:A.h,width:A.w,x:A.x+L,y:A.y+L,preserveAspectRatio:"none",opacity:A.opacity,crossOrigin:A.crossOrigin}));const F=G1($,L);return _e.createElement("svg",mf({height:d,width:d,viewBox:`0 0 ${X} ${X}`,ref:u,role:"img"},B),!!w&&_e.createElement("title",null,w),_e.createElement("path",{fill:b,d:`M0,0 h${X}v${X}H0z`,shapeRendering:"crispEdges"}),_e.createElement("path",{fill:h,d:F,shapeRendering:"crispEdges"}),H)});q1.displayName="QRCodeSVG";const x_={subtitle:"Veränderung beginnt mit dem Engagement jedes Einzelnen. Spenden helfen, einen echten Unterschied zu machen. Gemeinsam erreichen wir mehr.",heroImage:"/sckw-logo-500club.png",heroTitle:"CLUB 500",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Mitglied im CLUB 500"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},benefits:[{icon:"📄",text:"Offizielle <strong>Spendenbescheinigung</strong> (gemeinnütziger Verein)"},{icon:"🏅",text:"Veröffentlichung Ihres <strong>Namens oder Firmennamens</strong> als Unterstützer"},{icon:"⚽",text:"Direkte Förderung des <strong>lokalen Sports</strong> und der Jugend"}],spendentafel:{label:"Spendentafel (optional)",sublabel:"Tragen Sie hier Ihren Namen oder Firmennamen ein, wenn Sie auf unserer Spendentafel (Website & Vereinsgelände) veröffentlicht werden möchten. Lassen Sie das Feld leer, wenn Sie anonym spenden möchten.",nameFieldPlaceholder:"Name/Firma für die Spendentafel (leer = anonym)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},paypalCtaLabel:"Mit PayPal spenden",paypalHinweis:"Bitte geben Sie bei PayPal im Mitteilungsfeld Ihren vollständigen Namen und Ihre Adresse an, damit wir Ihnen eine Spendenbescheinigung ausstellen können.",bankCtaLabel:"Per Überweisung",verwendungszweck:"CLUB 500",paypalMeUrl:"https://www.paypal.me/sckw2012",bankDetails:{kontoinhaber:"SC Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},y_=v.section`
  background: #0b0b0d;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
`,v_=v.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:l})=>l}) center/cover no-repeat;
  opacity: ${({$active:l})=>l?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.65);
`,S_=v.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`,j_=v.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,w_=v.img`
  width: clamp(100px, 22vw, 180px);
  height: auto;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.6));
`,__=v.h1`
  color: #fff;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
`,E_=v.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  margin: 0 0 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 600px;
`,z_=v.a`
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
`,E0=v.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,$1=v.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,C_=v($1)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,z0=v.h2`
  font-size: clamp(1.5rem, 4.5vw, 2.2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`,C0=v.p`
  font-size: clamp(0.92rem, 2.3vw, 1.05rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
`,A_=v.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,T_=v.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
`,R_=v.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`,M_=v.p`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin: 0;

  strong {
    color: #222;
  }
`,A0=v.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.6rem;
`,D_=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,k_=v.button`
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
`,O_=v.div`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${({$active:l})=>l?"#e10073":"#222"};
  margin-bottom: 0.25rem;
  transition: color 0.15s;
`,B_=v.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({$active:l})=>l?"#e10073":"#555"};
  margin-bottom: 0.2rem;
  transition: color 0.15s;
`,N_=v.div`
  font-size: 0.75rem;
  color: #999;
  line-height: 1.3;
`,U_=v.div`
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
`,L_=v.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 0.95rem;
  color: #333;
`,H_=v.div`
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
`,G_=v.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: start;
`,Y_=v.div`
  display: flex;
  gap: 0.35rem;
`,V_=v.button`
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
`,ca=v.input`
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
`,q_=v.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`,$_=v.div`
  margin-bottom: 1.5rem;
`,Q_=v.div`
  font-size: 0.78rem;
  color: #999;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`,K_=v.label`
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
`,X_=v.div`
  font-size: 0.78rem;
  color: #999;
  margin: 0.3rem 0 0 1.6rem;
  line-height: 1.4;
`,Z_=wf`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,P_=wf`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,J_=v.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:l})=>l?Wr`animation: ${Z_} 0.3s ease forwards;`:Wr`animation: ${P_} 0.2s ease forwards; pointer-events: none;`}
`,T0=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,F_=v.div`
  margin-bottom: 1.75rem;
`,W_=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,I_=v.a`
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
`,e6=v.button`
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
`,R0=v.span`
  font-size: 0.78rem;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 0.15rem;
`,t6=v.div`
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #6d4c00;
  line-height: 1.5;
`,n6=v.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,a6=v.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`,l6=v.button`
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
`,r6=v.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #e10073;
  margin: 0 0 0.5rem;
`,i6=v.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,s6=v.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
`,Kr=v.div`
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
  strong { color: #222; }
`,o6=v.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #166534;
  line-height: 1.5;
`;function Iu(l){return l.toLocaleString("de-DE",{minimumFractionDigits:l%1===0?0:1,maximumFractionDigits:2})}function c6(l,s,u,c,f){return["BCD","002","1","SCT",u,l,s,`EUR${c.toFixed(2)}`,"","",f].join(`
`)}const ef=[ht("herren/herren_club500_1"),ht("herren/herren_club500_4"),ht("herren/herren_club500_2"),ht("herren/herren_club500_3"),ht("herren/herren_club500_5")].filter(Boolean),u6=["1 Jahr","2 Jahre","3 Jahre"];function f6(){const l=x_,[s,u]=C.useState(0);C.useEffect(()=>{if(ef.length<=1)return;const K=setInterval(()=>u(be=>(be+1)%ef.length),6e3);return()=>clearInterval(K)},[]);const[c,f]=C.useState(0),[d,y]=C.useState(!1),[b,h]=C.useState(""),[g,x]=C.useState("1 Jahr"),[S,w]=C.useState(""),[k,M]=C.useState(!1),[B,L]=C.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[V,X]=C.useState(!1),A=C.useMemo(()=>{if(d){const K=parseFloat(b.replace(",","."));return isNaN(K)||K<l.customAmount.minAmount?0:K}return l.memberships[c]?.value??0},[d,b,c,l.memberships,l.customAmount.minAmount]),$=C.useMemo(()=>d?g:l.memberships[c]?.duration??"",[d,g,c,l.memberships]),H=C.useMemo(()=>{const K=[l.verwendungszweck];if($&&K.push($),S.trim()&&K.push(`Tafel: ${S.trim()}`),k){const be=[B.vorname,B.nachname].filter(Boolean).join(" "),Se=[B.strasse,B.plz,B.ort].filter(Boolean).join(", "),Ue=[be,Se].filter(Boolean).join(", ");Ue&&K.push(`Besch: ${Ue}`)}return K.join(" | ")},[l.verwendungszweck,$,S,k,B]),F=C.useMemo(()=>A<=0?"#":`${l.paypalMeUrl}/${A}EUR`,[A,l.paypalMeUrl]),Y=C.useMemo(()=>c6(l.bankDetails.kontoinhaber,l.bankDetails.ibanClean,l.bankDetails.bic,A,H),[l.bankDetails.kontoinhaber,l.bankDetails.ibanClean,l.bankDetails.bic,A,H]),se=(K,be)=>L(Se=>({...Se,[K]:be}));return r.jsxs(r.Fragment,{children:[r.jsxs(y_,{children:[ef.map((K,be)=>r.jsx(v_,{$bg:K,$active:be===s},be)),r.jsx(S_,{}),r.jsxs(j_,{children:[r.jsx(w_,{src:l.heroImage,alt:"Club 500"}),r.jsx(__,{children:l.heroTitle}),r.jsx(E_,{children:l.subtitle}),r.jsx(z_,{href:"#mitglied-werden",onClick:K=>{K.preventDefault(),document.getElementById("mitglied-werden")?.scrollIntoView({behavior:"smooth"})},children:"Jetzt Mitglied werden"})]})]}),r.jsx($1,{children:r.jsxs(E0,{children:[r.jsx(z0,{children:"Ihre Vorteile"}),r.jsx(C0,{children:"Als Mitglied im CLUB 500 unterstützen Sie direkt den Jugend- und Amateurfußball in Konstanz."}),r.jsx(A_,{children:l.benefits.map((K,be)=>r.jsxs(T_,{children:[r.jsx(R_,{children:K.icon}),r.jsx(M_,{dangerouslySetInnerHTML:{__html:K.text}})]},be))})]})}),r.jsx(C_,{id:"mitglied-werden",children:r.jsxs(E0,{children:[r.jsx(z0,{children:"Mitglied werden"}),r.jsx(C0,{children:"Wählen Sie Ihre Unterstützung und werden Sie Teil des CLUB 500."}),r.jsx(A0,{children:l.sectionTitle}),r.jsx(D_,{children:l.memberships.map((K,be)=>r.jsxs(k_,{$active:!d&&c===be,onClick:()=>{y(!1),f(be)},type:"button",children:[r.jsx(O_,{$active:!d&&c===be,children:K.label}),r.jsx(B_,{$active:!d&&c===be,children:K.duration}),r.jsx(N_,{children:K.description})]},K.value))}),r.jsxs(U_,{$active:d,onClick:()=>{d||y(!0)},children:[r.jsxs(L_,{children:[r.jsx(H_,{$active:d}),l.customAmount.label]}),d&&r.jsxs(G_,{onClick:K=>K.stopPropagation(),children:[r.jsx(ca,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR",value:b,onChange:K=>h(K.target.value),autoFocus:!0}),r.jsx(Y_,{children:u6.map(K=>r.jsx(V_,{$active:g===K,onClick:()=>x(K),type:"button",children:K},K))})]}),d&&r.jsx(q_,{children:l.customAmount.minHint})]}),r.jsxs($_,{children:[r.jsx(A0,{children:l.spendentafel.label}),r.jsx(Q_,{children:l.spendentafel.sublabel}),r.jsx(ca,{type:"text",placeholder:l.spendentafel.nameFieldPlaceholder,value:S,onChange:K=>w(K.target.value)})]}),r.jsxs(F_,{children:[r.jsxs(K_,{children:[r.jsx("input",{type:"checkbox",checked:k,onChange:K=>M(K.target.checked)}),r.jsx("span",{children:l.bescheinigung.label})]}),r.jsx(X_,{children:l.bescheinigung.hinweis}),r.jsxs(J_,{$visible:k,children:[r.jsxs(T0,{children:[r.jsx(ca,{type:"text",name:"bescheinigung-vorname",autoComplete:"given-name",placeholder:l.bescheinigung.fields.vorname,value:B.vorname,onChange:K=>se("vorname",K.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-nachname",autoComplete:"family-name",placeholder:l.bescheinigung.fields.nachname,value:B.nachname,onChange:K=>se("nachname",K.target.value)})]}),r.jsx(ca,{type:"email",name:"bescheinigung-email",autoComplete:"email",placeholder:l.bescheinigung.fields.email,value:B.email,onChange:K=>se("email",K.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-strasse",autoComplete:"street-address",placeholder:l.bescheinigung.fields.strasse,value:B.strasse,onChange:K=>se("strasse",K.target.value)}),r.jsxs(T0,{children:[r.jsx(ca,{type:"text",name:"bescheinigung-plz",autoComplete:"postal-code",placeholder:l.bescheinigung.fields.plz,value:B.plz,onChange:K=>se("plz",K.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-ort",autoComplete:"address-level2",placeholder:l.bescheinigung.fields.ort,value:B.ort,onChange:K=>se("ort",K.target.value)})]})]})]}),r.jsxs(W_,{children:[r.jsxs(I_,{href:F,target:"_blank",rel:"noopener noreferrer",children:[l.paypalCtaLabel,r.jsxs(R0,{children:[Iu(A)," €"]})]}),r.jsxs(e6,{type:"button",onClick:()=>X(!0),children:[l.bankCtaLabel,r.jsxs(R0,{children:[Iu(A)," €"]})]})]}),k&&r.jsx(t6,{children:l.paypalHinweis})]})}),r.jsx(Ws,{}),V&&r.jsx(n6,{onClick:()=>X(!1),children:r.jsxs(a6,{onClick:K=>K.stopPropagation(),children:[r.jsx(l6,{onClick:()=>X(!1),children:"×"}),r.jsx(r6,{children:"Überweisung per QR-Code"}),r.jsx(i6,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING, etc.) – alle Daten werden automatisch ausgefüllt."}),A>0&&r.jsx(s6,{children:r.jsx(q1,{value:Y,size:220,level:"M"})}),r.jsx(Kr,{children:r.jsx("strong",{children:l.bankDetails.kontoinhaber})}),r.jsxs(Kr,{children:["IBAN: ",r.jsx("strong",{children:l.bankDetails.iban})]}),r.jsxs(Kr,{children:["Betrag: ",r.jsxs("strong",{children:[Iu(A)," €"]}),$&&r.jsxs(r.Fragment,{children:[" · ",r.jsx("strong",{children:$})]})]}),r.jsxs(Kr,{children:["Verwendungszweck: ",r.jsx("strong",{children:H})]}),r.jsxs(Kr,{style:{fontSize:"0.8rem",color:"#888"},children:[l.bankDetails.bank," · ",l.bankDetails.adresse]}),k&&B.email&&r.jsxs(o6,{children:["Wir senden Ihre Spendenbescheinigung an ",r.jsx("strong",{children:B.email}),"."]})]})})]})}const d6=["1 Spieler-Post in der Hinrunde + 1 in der Rückrunde","1 Sponsor-Vorstellung mit 1-2 Bildern gemeinsam mit dem Spieler","Du kommst mit aufs Bild, wenn er Spieler des Spiels wird oder trifft","Ein vom Spieler signiertes Trikot für dein Büro","Exklusiv: nur ein Partner pro Spieler","So sichtbar oder so dezent, wie du magst"];function h6(){return r.jsxs(r.Fragment,{children:[r.jsxs(m6,{children:[r.jsx(g6,{to:"/sponsoring",children:"← Zurück zur Übersicht"}),r.jsx(p6,{children:"Personal Partner"}),r.jsx(b6,{children:"Unterstütze gezielt einen SCKW-Spieler und werde ein Teil seiner Saison. Persönlich, exklusiv und direkt am Herzstück des Vereins."})]}),r.jsx(x6,{children:r.jsxs(M0,{children:[r.jsx(y6,{children:"Als Personal Partner stehst du hinter einem einzelnen Spieler und begleitest seine Saison bei uns. Wir sind ein Amateurverein, kein Profi-Club - es geht um Verbundenheit mit dem SCKW und dem Spieler, nicht um eine Werbetabelle. Dafür bist du ganz nah dran."}),r.jsxs(v6,{children:[r.jsx(S6,{children:"Was drin ist"}),r.jsx(j6,{children:d6.map(l=>r.jsx(w6,{children:l},l))}),r.jsxs(_6,{children:[r.jsx(E6,{children:"Eine Saison"}),r.jsx(z6,{children:"2.500 €"})]}),r.jsx(C6,{children:"Verhandlungsbasis - im Gespräch individuell anpassbar"})]})]})}),r.jsx(A6,{children:r.jsxs(M0,{children:[r.jsx(T6,{children:"Interesse?"}),r.jsx(R6,{children:"Lass uns kurz sprechen, welchen Spieler du begleiten möchtest."}),r.jsx(M6,{href:`mailto:${vt.email}?subject=${encodeURIComponent("Personal Partner - Interesse")}`,children:"Anfragen"})]})}),r.jsx(Ws,{})]})}const m6=v.section`
  background: #0b0b0d;
  padding: 3.5rem 1rem 3rem;
  text-align: center;
`,g6=v($l)`
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
`,p6=v.h1`
  color: white;
  font-size: clamp(1.8rem, 6vw, 3rem);
  font-weight: 900;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
`,b6=v.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  max-width: 620px;
  margin: 0 auto;
  line-height: 1.6;
`,M0=v.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,x6=v.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,y6=v.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto 2.5rem;
  max-width: 620px;
`,v6=v.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`,S6=v.h2`
  font-size: 1.4rem;
  color: #e10073;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
`,j6=v.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,w6=v.li`
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
`,_6=v.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f0f0f0;
`,E6=v.span`
  font-size: 1rem;
  color: #666;
  font-weight: 600;
`,z6=v.span`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 900;
  letter-spacing: -0.02em;
`,C6=v.p`
  margin: 0.6rem 0 0 0;
  font-size: 0.9rem;
  color: #888;
  text-align: right;
`,A6=v.section`
  padding: 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 100%);
`,T6=v.h2`
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
`,R6=v.p`
  font-size: 1.05rem;
  color: #555;
  margin: 0 auto 0.5rem;
  max-width: 480px;
  line-height: 1.6;
`,M6=v.a`
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
`;function D6(){const{pathname:l}=sn();return C.useEffect(()=>{window.scrollTo(0,0)},[l]),null}function k6(){return r.jsxs(L2,{children:[r.jsx(D6,{}),r.jsxs(m2,{children:[r.jsx(gn,{path:"/",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(Rs,{to:"/sponsoring",replace:!0})]})}),r.jsx(gn,{path:"/sponsoring",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(g3,{})]})}),r.jsx(gn,{path:"/sponsoring-handoff",element:r.jsx($3,{})}),r.jsx(gn,{path:"/sponsoring/club-500",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(f6,{})]})}),r.jsx(gn,{path:"/sponsoring/pakete",element:r.jsx(Rs,{to:"/sponsoring#angebot",replace:!0})}),r.jsx(gn,{path:"/sponsoring/spielerpatenschaft",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(h6,{})]})}),r.jsx(gn,{path:"/mockup-generator",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(o_,{})]})}),r.jsx(gn,{path:"/renovierung",element:r.jsxs(r.Fragment,{children:[r.jsx(zl,{}),r.jsx(U5,{})]})}),r.jsx(gn,{path:"*",element:r.jsx(Rs,{to:"/sponsoring",replace:!0})})]})]})}const O6={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");wy.createRoot(document.getElementById("root")).render(r.jsx(C.StrictMode,{children:r.jsx(Sv,{theme:O6,children:r.jsx(k6,{})})}));
