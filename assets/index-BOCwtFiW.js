(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function u(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=u(d);fetch(d.href,m)}})();function my(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var wu={exports:{}},Pr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function gy(){if(Zg)return Pr;Zg=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,m){var p=null;if(m!==void 0&&(p=""+m),d.key!==void 0&&(p=""+d.key),"key"in d){m={};for(var y in d)y!=="key"&&(m[y]=d[y])}else m=d;return d=m.ref,{$$typeof:i,type:c,key:p,ref:d!==void 0?d:null,props:m}}return Pr.Fragment=s,Pr.jsx=u,Pr.jsxs=u,Pr}var Xg;function py(){return Xg||(Xg=1,wu.exports=gy()),wu.exports}var r=py(),zu={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function xy(){if(Qg)return le;Qg=1;var i=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function C(j){return j===null||typeof j!="object"?null:(j=R&&j[R]||j["@@iterator"],typeof j=="function"?j:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,q={};function Q(j,L,K){this.props=j,this.context=L,this.refs=q,this.updater=K||V}Q.prototype.isReactComponent={},Q.prototype.setState=function(j,L){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,L,"setState")},Q.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function G(){}G.prototype=Q.prototype;function W(j,L,K){this.props=j,this.context=L,this.refs=q,this.updater=K||V}var D=W.prototype=new G;D.constructor=W,Y(D,Q.prototype),D.isPureReactComponent=!0;var $=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function H(j,L,K,X,ee,de){return K=de.ref,{$$typeof:i,type:j,key:L,ref:K!==void 0?K:null,props:de}}function ve(j,L){return H(j.type,L,void 0,void 0,void 0,j.props)}function me(j){return typeof j=="object"&&j!==null&&j.$$typeof===i}function lt(j){var L={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(K){return L[K]})}var ut=/\/+/g;function $e(j,L){return typeof j=="object"&&j!==null&&j.key!=null?lt(""+j.key):L.toString(36)}function gn(){}function pn(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(gn,gn):(j.status="pending",j.then(function(L){j.status==="pending"&&(j.status="fulfilled",j.value=L)},function(L){j.status==="pending"&&(j.status="rejected",j.reason=L)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function qe(j,L,K,X,ee){var de=typeof j;(de==="undefined"||de==="boolean")&&(j=null);var ie=!1;if(j===null)ie=!0;else switch(de){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(j.$$typeof){case i:case s:ie=!0;break;case w:return ie=j._init,qe(ie(j._payload),L,K,X,ee)}}if(ie)return ee=ee(j),ie=X===""?"."+$e(j,0):X,$(ee)?(K="",ie!=null&&(K=ie.replace(ut,"$&/")+"/"),qe(ee,L,K,"",function(nt){return nt})):ee!=null&&(me(ee)&&(ee=ve(ee,K+(ee.key==null||j&&j.key===ee.key?"":(""+ee.key).replace(ut,"$&/")+"/")+ie)),L.push(ee)),1;ie=0;var Ke=X===""?".":X+":";if($(j))for(var be=0;be<j.length;be++)X=j[be],de=Ke+$e(X,be),ie+=qe(X,L,K,de,ee);else if(be=C(j),typeof be=="function")for(j=be.call(j),be=0;!(X=j.next()).done;)X=X.value,de=Ke+$e(X,be++),ie+=qe(X,L,K,de,ee);else if(de==="object"){if(typeof j.then=="function")return qe(pn(j),L,K,X,ee);throw L=String(j),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ie}function M(j,L,K){if(j==null)return j;var X=[],ee=0;return qe(j,X,"","",function(de){return L.call(K,de,ee++)}),X}function Z(j){if(j._status===-1){var L=j._result;L=L(),L.then(function(K){(j._status===0||j._status===-1)&&(j._status=1,j._result=K)},function(K){(j._status===0||j._status===-1)&&(j._status=2,j._result=K)}),j._status===-1&&(j._status=0,j._result=L)}if(j._status===1)return j._result.default;throw j._result}var te=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function ue(){}return le.Children={map:M,forEach:function(j,L,K){M(j,function(){L.apply(this,arguments)},K)},count:function(j){var L=0;return M(j,function(){L++}),L},toArray:function(j){return M(j,function(L){return L})||[]},only:function(j){if(!me(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},le.Component=Q,le.Fragment=u,le.Profiler=d,le.PureComponent=W,le.StrictMode=c,le.Suspense=b,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,le.__COMPILER_RUNTIME={__proto__:null,c:function(j){return U.H.useMemoCache(j)}},le.cache=function(j){return function(){return j.apply(null,arguments)}},le.cloneElement=function(j,L,K){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var X=Y({},j.props),ee=j.key,de=void 0;if(L!=null)for(ie in L.ref!==void 0&&(de=void 0),L.key!==void 0&&(ee=""+L.key),L)!F.call(L,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&L.ref===void 0||(X[ie]=L[ie]);var ie=arguments.length-2;if(ie===1)X.children=K;else if(1<ie){for(var Ke=Array(ie),be=0;be<ie;be++)Ke[be]=arguments[be+2];X.children=Ke}return H(j.type,ee,void 0,void 0,de,X)},le.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},le.createElement=function(j,L,K){var X,ee={},de=null;if(L!=null)for(X in L.key!==void 0&&(de=""+L.key),L)F.call(L,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ee[X]=L[X]);var ie=arguments.length-2;if(ie===1)ee.children=K;else if(1<ie){for(var Ke=Array(ie),be=0;be<ie;be++)Ke[be]=arguments[be+2];ee.children=Ke}if(j&&j.defaultProps)for(X in ie=j.defaultProps,ie)ee[X]===void 0&&(ee[X]=ie[X]);return H(j,de,void 0,void 0,null,ee)},le.createRef=function(){return{current:null}},le.forwardRef=function(j){return{$$typeof:y,render:j}},le.isValidElement=me,le.lazy=function(j){return{$$typeof:w,_payload:{_status:-1,_result:j},_init:Z}},le.memo=function(j,L){return{$$typeof:x,type:j,compare:L===void 0?null:L}},le.startTransition=function(j){var L=U.T,K={};U.T=K;try{var X=j(),ee=U.S;ee!==null&&ee(K,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ue,te)}catch(de){te(de)}finally{U.T=L}},le.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},le.use=function(j){return U.H.use(j)},le.useActionState=function(j,L,K){return U.H.useActionState(j,L,K)},le.useCallback=function(j,L){return U.H.useCallback(j,L)},le.useContext=function(j){return U.H.useContext(j)},le.useDebugValue=function(){},le.useDeferredValue=function(j,L){return U.H.useDeferredValue(j,L)},le.useEffect=function(j,L,K){var X=U.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(j,L)},le.useId=function(){return U.H.useId()},le.useImperativeHandle=function(j,L,K){return U.H.useImperativeHandle(j,L,K)},le.useInsertionEffect=function(j,L){return U.H.useInsertionEffect(j,L)},le.useLayoutEffect=function(j,L){return U.H.useLayoutEffect(j,L)},le.useMemo=function(j,L){return U.H.useMemo(j,L)},le.useOptimistic=function(j,L){return U.H.useOptimistic(j,L)},le.useReducer=function(j,L,K){return U.H.useReducer(j,L,K)},le.useRef=function(j){return U.H.useRef(j)},le.useState=function(j){return U.H.useState(j)},le.useSyncExternalStore=function(j,L,K){return U.H.useSyncExternalStore(j,L,K)},le.useTransition=function(){return U.H.useTransition()},le.version="19.1.0",le}var Pg;function Bd(){return Pg||(Pg=1,zu.exports=xy()),zu.exports}var A=Bd();const en=my(A);var Eu={exports:{}},Jr={},_u={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function by(){return Jg||(Jg=1,function(i){function s(M,Z){var te=M.length;M.push(Z);e:for(;0<te;){var ue=te-1>>>1,j=M[ue];if(0<d(j,Z))M[ue]=Z,M[te]=j,te=ue;else break e}}function u(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var Z=M[0],te=M.pop();if(te!==Z){M[0]=te;e:for(var ue=0,j=M.length,L=j>>>1;ue<L;){var K=2*(ue+1)-1,X=M[K],ee=K+1,de=M[ee];if(0>d(X,te))ee<j&&0>d(de,X)?(M[ue]=de,M[ee]=te,ue=ee):(M[ue]=X,M[K]=te,ue=K);else if(ee<j&&0>d(de,te))M[ue]=de,M[ee]=te,ue=ee;else break e}}return Z}function d(M,Z){var te=M.sortIndex-Z.sortIndex;return te!==0?te:M.id-Z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var p=Date,y=p.now();i.unstable_now=function(){return p.now()-y}}var b=[],x=[],w=1,R=null,C=3,V=!1,Y=!1,q=!1,Q=!1,G=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function $(M){for(var Z=u(x);Z!==null;){if(Z.callback===null)c(x);else if(Z.startTime<=M)c(x),Z.sortIndex=Z.expirationTime,s(b,Z);else break;Z=u(x)}}function U(M){if(q=!1,$(M),!Y)if(u(b)!==null)Y=!0,F||(F=!0,$e());else{var Z=u(x);Z!==null&&qe(U,Z.startTime-M)}}var F=!1,H=-1,ve=5,me=-1;function lt(){return Q?!0:!(i.unstable_now()-me<ve)}function ut(){if(Q=!1,F){var M=i.unstable_now();me=M;var Z=!0;try{e:{Y=!1,q&&(q=!1,W(H),H=-1),V=!0;var te=C;try{t:{for($(M),R=u(b);R!==null&&!(R.expirationTime>M&&lt());){var ue=R.callback;if(typeof ue=="function"){R.callback=null,C=R.priorityLevel;var j=ue(R.expirationTime<=M);if(M=i.unstable_now(),typeof j=="function"){R.callback=j,$(M),Z=!0;break t}R===u(b)&&c(b),$(M)}else c(b);R=u(b)}if(R!==null)Z=!0;else{var L=u(x);L!==null&&qe(U,L.startTime-M),Z=!1}}break e}finally{R=null,C=te,V=!1}Z=void 0}}finally{Z?$e():F=!1}}}var $e;if(typeof D=="function")$e=function(){D(ut)};else if(typeof MessageChannel<"u"){var gn=new MessageChannel,pn=gn.port2;gn.port1.onmessage=ut,$e=function(){pn.postMessage(null)}}else $e=function(){G(ut,0)};function qe(M,Z){H=G(function(){M(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_next=function(M){switch(C){case 1:case 2:case 3:var Z=3;break;default:Z=C}var te=C;C=Z;try{return M()}finally{C=te}},i.unstable_requestPaint=function(){Q=!0},i.unstable_runWithPriority=function(M,Z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var te=C;C=M;try{return Z()}finally{C=te}},i.unstable_scheduleCallback=function(M,Z,te){var ue=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ue+te:ue):te=ue,M){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=te+j,M={id:w++,callback:Z,priorityLevel:M,startTime:te,expirationTime:j,sortIndex:-1},te>ue?(M.sortIndex=te,s(x,M),u(b)===null&&M===u(x)&&(q?(W(H),H=-1):q=!0,qe(U,te-ue))):(M.sortIndex=j,s(b,M),Y||V||(Y=!0,F||(F=!0,$e()))),M},i.unstable_shouldYield=lt,i.unstable_wrapCallback=function(M){var Z=C;return function(){var te=C;C=Z;try{return M.apply(this,arguments)}finally{C=te}}}}(Tu)),Tu}var Wg;function yy(){return Wg||(Wg=1,_u.exports=by()),_u.exports}var ku={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function vy(){if(Fg)return rt;Fg=1;var i=Bd();function s(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)x+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,x,w){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:b,containerInfo:x,implementation:w}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,rt.createPortal=function(b,x){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(s(299));return m(b,x,null,w)},rt.flushSync=function(b){var x=p.T,w=c.p;try{if(p.T=null,c.p=2,b)return b()}finally{p.T=x,c.p=w,c.d.f()}},rt.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(b,x))},rt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},rt.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var w=x.as,R=y(w,x.crossOrigin),C=typeof x.integrity=="string"?x.integrity:void 0,V=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;w==="style"?c.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:R,integrity:C,fetchPriority:V}):w==="script"&&c.d.X(b,{crossOrigin:R,integrity:C,fetchPriority:V,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},rt.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var w=y(x.as,x.crossOrigin);c.d.M(b,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(b)},rt.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var w=x.as,R=y(w,x.crossOrigin);c.d.L(b,w,{crossOrigin:R,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},rt.preloadModule=function(b,x){if(typeof b=="string")if(x){var w=y(x.as,x.crossOrigin);c.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(b)},rt.requestFormReset=function(b){c.d.r(b)},rt.unstable_batchedUpdates=function(b,x){return b(x)},rt.useFormState=function(b,x,w){return p.H.useFormState(b,x,w)},rt.useFormStatus=function(){return p.H.useHostTransitionStatus()},rt.version="19.1.0",rt}var Ig;function jy(){if(Ig)return ku.exports;Ig=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),ku.exports=vy(),ku.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function Sy(){if(e0)return Jr;e0=1;var i=yy(),s=Bd(),u=jy();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(m(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return y(l),e;if(o===a)return y(l),t;o=o.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=o;else{for(var f=!1,g=l.child;g;){if(g===n){f=!0,n=l,a=o;break}if(g===a){f=!0,a=l,n=o;break}g=g.sibling}if(!f){for(g=o.child;g;){if(g===n){f=!0,n=o,a=l;break}if(g===a){f=!0,a=o,n=l;break}g=g.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,R=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),D=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var gn=Symbol.for("react.client.reference");function pn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Q:return"Profiler";case q:return"StrictMode";case U:return"Suspense";case F:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case D:return(e.displayName||"Context")+".Provider";case W:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:pn(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return pn(e(t))}catch{}}return null}var qe=Array.isArray,M=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ue=[],j=-1;function L(e){return{current:e}}function K(e){0>j||(e.current=ue[j],ue[j]=null,j--)}function X(e,t){j++,ue[j]=e.current,e.current=t}var ee=L(null),de=L(null),ie=L(null),Ke=L(null);function be(e,t){switch(X(ie,t),X(de,e),X(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vg(t),e=jg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(ee),X(ee,e)}function nt(){K(ee),K(de),K(ie)}function xi(e){e.memoizedState!==null&&X(Ke,e);var t=ee.current,n=jg(t,e.type);t!==n&&(X(de,e),X(ee,n))}function xn(e){de.current===e&&(K(ee),K(de)),Ke.current===e&&(K(Ke),qr._currentValue=te)}var Dt=Object.prototype.hasOwnProperty,co=i.unstable_scheduleCallback,uo=i.unstable_cancelCallback,Zx=i.unstable_shouldYield,Xx=i.unstable_requestPaint,rn=i.unstable_now,Qx=i.unstable_getCurrentPriorityLevel,Id=i.unstable_ImmediatePriority,ef=i.unstable_UserBlockingPriority,ul=i.unstable_NormalPriority,Px=i.unstable_LowPriority,tf=i.unstable_IdlePriority,Jx=i.log,Wx=i.unstable_setDisableYieldValue,Fa=null,jt=null;function Vn(e){if(typeof Jx=="function"&&Wx(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Fa,e)}catch{}}var St=Math.clz32?Math.clz32:eb,Fx=Math.log,Ix=Math.LN2;function eb(e){return e>>>=0,e===0?32:31-(Fx(e)/Ix|0)|0}var dl=256,fl=4194304;function bi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~o,a!==0?l=bi(a):(f&=g,f!==0?l=bi(f):n||(n=g&~e,n!==0&&(l=bi(n))))):(g=a&~o,g!==0?l=bi(g):f!==0?l=bi(f):n||(n=a&~e,n!==0&&(l=bi(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function Ia(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(){var e=dl;return dl<<=1,(dl&4194048)===0&&(dl=256),e}function af(){var e=fl;return fl<<=1,(fl&62914560)===0&&(fl=4194304),e}function fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nb(e,t,n,a,l,o){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,_=e.hiddenUpdates;for(n=f&~n;0<n;){var B=31-St(n),N=1<<B;g[B]=0,v[B]=-1;var T=_[B];if(T!==null)for(_[B]=null,B=0;B<T.length;B++){var k=T[B];k!==null&&(k.lane&=-536870913)}n&=~N}a!==0&&rf(e,a,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function rf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-St(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function lf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-St(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function ho(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Gg(e.type))}function ib(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Yn=Math.random().toString(36).slice(2),it="__reactFiber$"+Yn,dt="__reactProps$"+Yn,$i="__reactContainer$"+Yn,go="__reactEvents$"+Yn,ab="__reactListeners$"+Yn,rb="__reactHandles$"+Yn,of="__reactResources$"+Yn,tr="__reactMarker$"+Yn;function po(e){delete e[it],delete e[dt],delete e[go],delete e[ab],delete e[rb]}function qi(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$i]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eg(e);e!==null;){if(n=e[it])return n;e=Eg(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){if(e=e[it]||e[$i]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function nr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Zi(e){var t=e[of];return t||(t=e[of]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[tr]=!0}var cf=new Set,uf={};function yi(e,t){Xi(e,t),Xi(e+"Capture",t)}function Xi(e,t){for(uf[e]=t,e=0;e<t.length;e++)cf.add(t[e])}var lb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),df={},ff={};function sb(e){return Dt.call(ff,e)?!0:Dt.call(df,e)?!1:lb.test(e)?ff[e]=!0:(df[e]=!0,!1)}function ml(e,t,n){if(sb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function bn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var xo,hf;function Qi(e){if(xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xo=t&&t[1]||"",hf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xo+e+hf}var bo=!1;function yo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(k){var T=k}Reflect.construct(e,[],N)}else{try{N.call()}catch(k){T=k}e.call(N.prototype)}}else{try{throw Error()}catch(k){T=k}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(k){if(k&&T&&typeof k.stack=="string")return[k.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),f=o[0],g=o[1];if(f&&g){var v=f.split(`
`),_=g.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===_.length)for(a=v.length-1,l=_.length-1;1<=a&&0<=l&&v[a]!==_[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==_[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==_[l]){var B=`
`+v[a].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=a&&0<=l);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qi(n):""}function ob(e){switch(e.tag){case 26:case 27:case 5:return Qi(e.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 15:return yo(e.type,!1);case 11:return yo(e.type.render,!1);case 1:return yo(e.type,!0);case 31:return Qi("Activity");default:return""}}function mf(e){try{var t="";do t+=ob(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cb(e){var t=gf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pl(e){e._valueTracker||(e._valueTracker=cb(e))}function pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=gf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ub=/[\n"\\]/g;function Nt(e){return e.replace(ub,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vo(e,t,n,a,l,o,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?jo(e,f,Ot(t)):n!=null?jo(e,f,Ot(n)):a!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ot(g):e.removeAttribute("name")}function xf(e,t,n,a,l,o,f,g){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ot(n):"",t=t!=null?""+Ot(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function jo(e,t,n){t==="number"&&xl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Pi(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bf(e,t,n){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ot(n):""}function yf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(qe(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Ot(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var db=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||db.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function jf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&vf(e,l,a)}else for(var o in t)t.hasOwnProperty(o)&&vf(e,o,t[o])}function So(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(e){return hb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wo=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wi=null,Fi=null;function Sf(e){var t=Ki(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(vo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[dt]||null;if(!l)throw Error(c(90));vo(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&pf(a)}break e;case"textarea":bf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}}}var Eo=!1;function wf(e,t,n){if(Eo)return e(t,n);Eo=!0;try{var a=e(t);return a}finally{if(Eo=!1,(Wi!==null||Fi!==null)&&(is(),Wi&&(t=Wi,e=Fi,Fi=Wi=null,Sf(t),e)))for(t=0;t<e.length;t++)Sf(e[t])}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var a=n[dt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_o=!1;if(yn)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){_o=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{_o=!1}var $n=null,To=null,yl=null;function zf(){if(yl)return yl;var e,t=To,n=t.length,a,l="value"in $n?$n.value:$n.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[o-a];a++);return yl=l.slice(e,1<a?1-a:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function Ef(){return!1}function ft(e){function t(n,a,l,o,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jl:Ef,this.isPropagationStopped=Ef,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),t}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=ft(vi),rr=w({},vi,{view:0,detail:0}),mb=ft(rr),ko,Ao,lr,wl=w({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(ko=e.screenX-lr.screenX,Ao=e.screenY-lr.screenY):Ao=ko=0,lr=e),ko)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),_f=ft(wl),gb=w({},wl,{dataTransfer:0}),pb=ft(gb),xb=w({},rr,{relatedTarget:0}),Ro=ft(xb),bb=w({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),yb=ft(bb),vb=w({},vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jb=ft(vb),Sb=w({},vi,{data:0}),Tf=ft(Sb),wb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _b(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eb[e])?!!t[e]:!1}function Co(){return _b}var Tb=w({},rr,{key:function(e){if(e.key){var t=wb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kb=ft(Tb),Ab=w({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=ft(Ab),Rb=w({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),Cb=ft(Rb),Mb=w({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bb=ft(Mb),Db=w({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ob=ft(Db),Nb=w({},vi,{newState:0,oldState:0}),Hb=ft(Nb),Lb=[9,13,27,32],Mo=yn&&"CompositionEvent"in window,sr=null;yn&&"documentMode"in document&&(sr=document.documentMode);var Ub=yn&&"TextEvent"in window&&!sr,Af=yn&&(!Mo||sr&&8<sr&&11>=sr),Rf=" ",Cf=!1;function Mf(e,t){switch(e){case"keyup":return Lb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ii=!1;function Gb(e,t){switch(e){case"compositionend":return Bf(t);case"keypress":return t.which!==32?null:(Cf=!0,Rf);case"textInput":return e=t.data,e===Rf&&Cf?null:e;default:return null}}function Vb(e,t){if(Ii)return e==="compositionend"||!Mo&&Mf(e,t)?(e=zf(),yl=To=$n=null,Ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Af&&t.locale!=="ko"?null:t.data;default:return null}}var Yb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yb[e.type]:t==="textarea"}function Of(e,t,n,a){Wi?Fi?Fi.push(a):Fi=[a]:Wi=a,t=cs(t,"onChange"),0<t.length&&(n=new Sl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var or=null,cr=null;function $b(e){gg(e,0)}function zl(e){var t=nr(e);if(pf(t))return e}function Nf(e,t){if(e==="change")return t}var Hf=!1;if(yn){var Bo;if(yn){var Do="oninput"in document;if(!Do){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),Do=typeof Lf.oninput=="function"}Bo=Do}else Bo=!1;Hf=Bo&&(!document.documentMode||9<document.documentMode)}function Uf(){or&&(or.detachEvent("onpropertychange",Gf),cr=or=null)}function Gf(e){if(e.propertyName==="value"&&zl(cr)){var t=[];Of(t,cr,e,zo(e)),wf($b,t)}}function qb(e,t,n){e==="focusin"?(Uf(),or=t,cr=n,or.attachEvent("onpropertychange",Gf)):e==="focusout"&&Uf()}function Kb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(cr)}function Zb(e,t){if(e==="click")return zl(t)}function Xb(e,t){if(e==="input"||e==="change")return zl(t)}function Qb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Qb;function ur(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Dt.call(t,l)||!wt(e[l],t[l]))return!1}return!0}function Vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yf(e,t){var n=Vf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vf(n)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xl(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Pb=yn&&"documentMode"in document&&11>=document.documentMode,ea=null,No=null,dr=null,Ho=!1;function Kf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ho||ea==null||ea!==xl(a)||(a=ea,"selectionStart"in a&&Oo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),dr&&ur(dr,a)||(dr=a,a=cs(No,"onSelect"),0<a.length&&(t=new Sl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ea)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ta={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionrun:ji("Transition","TransitionRun"),transitionstart:ji("Transition","TransitionStart"),transitioncancel:ji("Transition","TransitionCancel"),transitionend:ji("Transition","TransitionEnd")},Lo={},Zf={};yn&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Si(e){if(Lo[e])return Lo[e];if(!ta[e])return e;var t=ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zf)return Lo[e]=t[n];return e}var Xf=Si("animationend"),Qf=Si("animationiteration"),Pf=Si("animationstart"),Jb=Si("transitionrun"),Wb=Si("transitionstart"),Fb=Si("transitioncancel"),Jf=Si("transitionend"),Wf=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function Wt(e,t){Wf.set(e,t),yi(t,[e])}var Ff=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=Ff.get(e);return n!==void 0?n:(t={value:e,source:t,stack:mf(t)},Ff.set(e,t),t)}return{value:e,source:t,stack:mf(t)}}var Lt=[],na=0,Go=0;function El(){for(var e=na,t=Go=na=0;t<e;){var n=Lt[t];Lt[t++]=null;var a=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var o=Lt[t];if(Lt[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}o!==0&&If(n,l,o)}}function _l(e,t,n,a){Lt[na++]=e,Lt[na++]=t,Lt[na++]=n,Lt[na++]=a,Go|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Vo(e,t,n,a){return _l(e,t,n,a),Tl(e)}function ia(e,t){return _l(e,null,null,t),Tl(e)}function If(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,a=o.alternate,a!==null&&(a.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-St(n),e=o.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),o):null}function Tl(e){if(50<Nr)throw Nr=0,Xc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Ib(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,a){return new Ib(e,t,n,a)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function eh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kl(e,t,n,a,l,o){var f=0;if(a=e,typeof e=="function")Yo(e)&&(f=1);else if(typeof e=="string")f=ty(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=zt(31,n,t,l),e.elementType=me,e.lanes=o,e;case Y:return wi(n.children,l,o,t);case q:f=8,l|=24;break;case Q:return e=zt(12,n,t,l|2),e.elementType=Q,e.lanes=o,e;case U:return e=zt(13,n,t,l),e.elementType=U,e.lanes=o,e;case F:return e=zt(19,n,t,l),e.elementType=F,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case D:f=10;break e;case W:f=9;break e;case $:f=11;break e;case H:f=14;break e;case ve:f=16,a=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=zt(f,n,t,l),t.elementType=e,t.type=a,t.lanes=o,t}function wi(e,t,n,a){return e=zt(7,e,a,t),e.lanes=n,e}function $o(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ra=[],la=0,Al=null,Rl=0,Ut=[],Gt=0,zi=null,jn=1,Sn="";function Ei(e,t){ra[la++]=Rl,ra[la++]=Al,Al=e,Rl=t}function th(e,t,n){Ut[Gt++]=jn,Ut[Gt++]=Sn,Ut[Gt++]=zi,zi=e;var a=jn;e=Sn;var l=32-St(a)-1;a&=~(1<<l),n+=1;var o=32-St(t)+l;if(30<o){var f=l-l%5;o=(a&(1<<f)-1).toString(32),a>>=f,l-=f,jn=1<<32-St(t)+l|n<<l|a,Sn=o+e}else jn=1<<o|n<<l|a,Sn=e}function Ko(e){e.return!==null&&(Ei(e,1),th(e,1,0))}function Zo(e){for(;e===Al;)Al=ra[--la],ra[la]=null,Rl=ra[--la],ra[la]=null;for(;e===zi;)zi=Ut[--Gt],Ut[Gt]=null,Sn=Ut[--Gt],Ut[Gt]=null,jn=Ut[--Gt],Ut[Gt]=null}var st=null,De=null,xe=!1,_i=null,ln=!1,Xo=Error(c(519));function Ti(e){var t=Error(c(418,""));throw mr(Ht(t,e)),Xo}function nh(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[it]=e,t[dt]=a,n){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(n=0;n<Lr.length;n++)he(Lr[n],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),xf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),pl(t);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),yf(t,a.value,a.defaultValue,a.children),pl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||yg(t.textContent,n)?(a.popover!=null&&(he("beforetoggle",t),he("toggle",t)),a.onScroll!=null&&he("scroll",t),a.onScrollEnd!=null&&he("scrollend",t),a.onClick!=null&&(t.onclick=us),t=!0):t=!1,t||Ti(e)}function ih(e){for(st=e.return;st;)switch(st.tag){case 5:case 13:ln=!1;return;case 27:case 3:ln=!0;return;default:st=st.return}}function fr(e){if(e!==st)return!1;if(!xe)return ih(e),xe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cu(e.type,e.memoizedProps)),n=!n),n&&De&&Ti(e),ih(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){De=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}De=null}}else t===27?(t=De,ri(e.type)?(e=hu,hu=null,De=e):De=t):De=st?It(e.stateNode.nextSibling):null;return!0}function hr(){De=st=null,xe=!1}function ah(){var e=_i;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),_i=null),e}function mr(e){_i===null?_i=[e]:_i.push(e)}var Qo=L(null),ki=null,wn=null;function qn(e,t,n){X(Qo,t._currentValue),t._currentValue=n}function zn(e){e._currentValue=Qo.current,K(Qo)}function Po(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var f=l.child;o=o.firstContext;e:for(;o!==null;){var g=o;o=l;for(var v=0;v<t.length;v++)if(g.context===t[v]){o.lanes|=n,g=o.alternate,g!==null&&(g.lanes|=n),Po(o.return,n,e),a||(f=null);break e}o=g.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=n,o=f.alternate,o!==null&&(o.lanes|=n),Po(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function gr(e,t,n,a){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var g=l.type;wt(l.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(l===Ke.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(qr):e=[qr])}l=l.return}e!==null&&Jo(t,e,n,a),t.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ai(e){ki=e,wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return rh(ki,e)}function Ml(e,t){return ki===null&&Ai(e),rh(e,t)}function rh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wn===null){if(e===null)throw Error(c(308));wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wn=wn.next=t;return n}var e1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},t1=i.unstable_scheduleCallback,n1=i.unstable_NormalPriority,Ve={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wo(){return{controller:new e1,data:new Map,refCount:0}}function pr(e){e.refCount--,e.refCount===0&&t1(n1,function(){e.controller.abort()})}var xr=null,Fo=0,sa=0,oa=null;function i1(e,t){if(xr===null){var n=xr=[];Fo=0,sa=eu(),oa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Fo++,t.then(lh,lh),t}function lh(){if(--Fo===0&&xr!==null){oa!==null&&(oa.status="fulfilled");var e=xr;xr=null,sa=0,oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function a1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var sh=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&i1(e,t),sh!==null&&sh(e,t)};var Ri=L(null);function Io(){var e=Ri.current;return e!==null?e:Te.pooledCache}function Bl(e,t){t===null?X(Ri,Ri.current):X(Ri,t.pool)}function oh(){var e=Io();return e===null?null:{parent:Ve._currentValue,pool:e}}var br=Error(c(460)),ch=Error(c(474)),Dl=Error(c(542)),ec={then:function(){}};function uh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ol(){}function dh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ol,Ol),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hh(e),e;default:if(typeof t.status=="string")t.then(Ol,Ol);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hh(e),e}throw yr=t,br}}var yr=null;function fh(){if(yr===null)throw Error(c(459));var e=yr;return yr=null,e}function hh(e){if(e===br||e===Dl)throw Error(c(483))}var Kn=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(je&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Tl(e),If(e,null,n),t}return _l(e,a,t,n),Tl(e)}function vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,lf(e,n)}}function ic(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=f:o=o.next=f,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ac=!1;function jr(){if(ac){var e=oa;if(e!==null)throw e}}function Sr(e,t,n,a){ac=!1;var l=e.updateQueue;Kn=!1;var o=l.firstBaseUpdate,f=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var v=g,_=v.next;v.next=null,f===null?o=_:f.next=_,f=v;var B=e.alternate;B!==null&&(B=B.updateQueue,g=B.lastBaseUpdate,g!==f&&(g===null?B.firstBaseUpdate=_:g.next=_,B.lastBaseUpdate=v))}if(o!==null){var N=l.baseState;f=0,B=_=v=null,g=o;do{var T=g.lane&-536870913,k=T!==g.lane;if(k?(ge&T)===T:(a&T)===T){T!==0&&T===sa&&(ac=!0),B!==null&&(B=B.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var re=e,ne=g;T=t;var Ee=n;switch(ne.tag){case 1:if(re=ne.payload,typeof re=="function"){N=re.call(Ee,N,T);break e}N=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ne.payload,T=typeof re=="function"?re.call(Ee,N,T):re,T==null)break e;N=w({},N,T);break e;case 2:Kn=!0}}T=g.callback,T!==null&&(e.flags|=64,k&&(e.flags|=8192),k=l.callbacks,k===null?l.callbacks=[T]:k.push(T))}else k={lane:T,tag:g.tag,payload:g.payload,callback:g.callback,next:null},B===null?(_=B=k,v=N):B=B.next=k,f|=T;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;k=g,g=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);B===null&&(v=N),l.baseState=v,l.firstBaseUpdate=_,l.lastBaseUpdate=B,o===null&&(l.shared.lanes=0),ti|=f,e.lanes=f,e.memoizedState=N}}function mh(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function gh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mh(n[e],t)}var ca=L(null),Nl=L(0);function ph(e,t){e=Cn,X(Nl,e),X(ca,t),Cn=e|t.baseLanes}function rc(){X(Nl,Cn),X(ca,ca.current)}function lc(){Cn=Nl.current,K(ca),K(Nl)}var Qn=0,oe=null,we=null,Le=null,Hl=!1,ua=!1,Ci=!1,Ll=0,wr=0,da=null,r1=0;function Ne(){throw Error(c(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function oc(e,t,n,a,l,o){return Qn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ih:em,Ci=!1,o=n(a,l),Ci=!1,ua&&(o=bh(t,n,a,l)),xh(e),o}function xh(e){M.H=ql;var t=we!==null&&we.next!==null;if(Qn=0,Le=we=oe=null,Hl=!1,wr=0,da=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Cl(e)&&(Xe=!0))}function bh(e,t,n,a){oe=e;var l=0;do{if(ua&&(da=null),wr=0,ua=!1,25<=l)throw Error(c(301));if(l+=1,Le=we=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=f1,o=t(n,a)}while(ua);return o}function l1(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?zr(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(oe.flags|=1024),t}function cc(){var e=Ll!==0;return Ll=0,e}function uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dc(e){if(Hl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hl=!1}Qn=0,Le=we=oe=null,ua=!1,wr=Ll=0,da=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?oe.memoizedState=Le=e:Le=Le.next=e,Le}function Ue(){if(we===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Le===null?oe.memoizedState:Le.next;if(t!==null)Le=t,we=e;else{if(e===null)throw oe.alternate===null?Error(c(467)):Error(c(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Le===null?oe.memoizedState=Le=e:Le=Le.next=e}return Le}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zr(e){var t=wr;return wr+=1,da===null&&(da=[]),e=dh(da,e,t),t=oe,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ih:em),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zr(e);if(e.$$typeof===D)return at(e)}throw Error(c(438,String(e)))}function hc(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fc(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=lt;return t.index++,n}function En(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Ue();return mc(t,we,e)}function mc(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,o=a.pending;if(o!==null){if(l!==null){var f=l.next;l.next=o.next,o.next=f}t.baseQueue=l=o,a.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var g=f=null,v=null,_=t,B=!1;do{var N=_.lane&-536870913;if(N!==_.lane?(ge&N)===N:(Qn&N)===N){var T=_.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),N===sa&&(B=!0);else if((Qn&T)===T){_=_.next,T===sa&&(B=!0);continue}else N={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(g=v=N,f=o):v=v.next=N,oe.lanes|=T,ti|=T;N=_.action,Ci&&n(o,N),o=_.hasEagerState?_.eagerState:n(o,N)}else T={lane:N,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(g=v=T,f=o):v=v.next=T,oe.lanes|=N,ti|=N;_=_.next}while(_!==null&&_!==t);if(v===null?f=o:v.next=g,!wt(o,e.memoizedState)&&(Xe=!0,B&&(n=oa,n!==null)))throw n;e.memoizedState=o,e.baseState=f,e.baseQueue=v,a.lastRenderedState=o}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function gc(e){var t=Ue(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do o=e(o,f.action),f=f.next;while(f!==l);wt(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,a]}function yh(e,t,n){var a=oe,l=Ue(),o=xe;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!wt((we||l).memoizedState,n);f&&(l.memoizedState=n,Xe=!0),l=l.queue;var g=Sh.bind(null,a,l,e);if(Er(2048,8,g,[e]),l.getSnapshot!==t||f||Le!==null&&Le.memoizedState.tag&1){if(a.flags|=2048,fa(9,Vl(),jh.bind(null,a,l,n,t),null),Te===null)throw Error(c(349));o||(Qn&124)!==0||vh(a,t,n)}return n}function vh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=fc(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jh(e,t,n,a){t.value=n,t.getSnapshot=a,wh(t)&&zh(e)}function Sh(e,t,n){return n(function(){wh(t)&&zh(e)})}function wh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function zh(e){var t=ia(e,2);t!==null&&At(t,e,2)}function pc(e){var t=ht();if(typeof e=="function"){var n=e;if(e=n(),Ci){Vn(!0);try{n()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t}function Eh(e,t,n,a){return e.baseState=n,mc(e,we,typeof a=="function"?a:En)}function s1(e,t,n,a,l){if($l(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};M.T!==null?n(!0):o.isTransition=!1,a(o),n=t.pending,n===null?(o.next=t.pending=o,_h(t,o)):(o.next=n.next,t.pending=n.next=o)}}function _h(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var o=M.T,f={};M.T=f;try{var g=n(l,a),v=M.S;v!==null&&v(f,g),Th(e,t,g)}catch(_){xc(e,t,_)}finally{M.T=o}}else try{o=n(l,a),Th(e,t,o)}catch(_){xc(e,t,_)}}function Th(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){kh(e,t,a)},function(a){return xc(e,t,a)}):kh(e,t,n)}function kh(e,t,n){t.status="fulfilled",t.value=n,Ah(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_h(e,n)))}function xc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Ah(t),t=t.next;while(t!==a)}e.action=null}function Ah(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rh(e,t){return t}function Ch(e,t){if(xe){var n=Te.formState;if(n!==null){e:{var a=oe;if(xe){if(De){t:{for(var l=De,o=ln;l.nodeType!==8;){if(!o){l=null;break t}if(l=It(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){De=It(l.nextSibling),a=l.data==="F!";break e}}Ti(a)}a=!1}a&&(t=n[0])}}return n=ht(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rh,lastRenderedState:t},n.queue=a,n=Jh.bind(null,oe,a),a.dispatch=n,a=pc(!1),o=Sc.bind(null,oe,!1,a.queue),a=ht(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=s1.bind(null,oe,l,o,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Mh(e){var t=Ue();return Bh(t,we,e)}function Bh(e,t,n){if(t=mc(e,t,Rh)[0],e=Gl(En)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=zr(t)}catch(f){throw f===br?Dl:f}else a=t;t=Ue();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,fa(9,Vl(),o1.bind(null,l,n),null)),[a,o,e]}function o1(e,t){e.action=t}function Dh(e){var t=Ue(),n=we;if(n!==null)return Bh(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function fa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=oe.updateQueue,t===null&&(t=fc(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Vl(){return{destroy:void 0,resource:void 0}}function Oh(){return Ue().memoizedState}function Yl(e,t,n,a){var l=ht();a=a===void 0?null:a,oe.flags|=e,l.memoizedState=fa(1|t,Vl(),n,a)}function Er(e,t,n,a){var l=Ue();a=a===void 0?null:a;var o=l.memoizedState.inst;we!==null&&a!==null&&sc(a,we.memoizedState.deps)?l.memoizedState=fa(t,o,n,a):(oe.flags|=e,l.memoizedState=fa(1|t,o,n,a))}function Nh(e,t){Yl(8390656,8,e,t)}function Hh(e,t){Er(2048,8,e,t)}function Lh(e,t){return Er(4,2,e,t)}function Uh(e,t){return Er(4,4,e,t)}function Gh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vh(e,t,n){n=n!=null?n.concat([e]):null,Er(4,4,Gh.bind(null,t,e),n)}function bc(){}function Yh(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&sc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function $h(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&sc(t,a[1]))return a[0];if(a=e(),Ci){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[a,t],a}function yc(e,t,n){return n===void 0||(Qn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Zm(),oe.lanes|=e,ti|=e,n)}function qh(e,t,n,a){return wt(n,t)?n:ca.current!==null?(e=yc(e,n,a),wt(e,t)||(Xe=!0),e):(Qn&42)===0?(Xe=!0,e.memoizedState=n):(e=Zm(),oe.lanes|=e,ti|=e,t)}function Kh(e,t,n,a,l){var o=Z.p;Z.p=o!==0&&8>o?o:8;var f=M.T,g={};M.T=g,Sc(e,!1,t,n);try{var v=l(),_=M.S;if(_!==null&&_(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var B=a1(v,a);_r(e,t,B,kt(e))}else _r(e,t,a,kt(e))}catch(N){_r(e,t,{then:function(){},status:"rejected",reason:N},kt())}finally{Z.p=o,M.T=f}}function c1(){}function vc(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=Zh(e).queue;Kh(e,l,t,te,n===null?c1:function(){return Xh(e),n(a)})}function Zh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xh(e){var t=Zh(e).next.queue;_r(e,t,{},kt())}function jc(){return at(qr)}function Qh(){return Ue().memoizedState}function Ph(){return Ue().memoizedState}function u1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Zn(n);var a=Xn(t,e,n);a!==null&&(At(a,t,n),vr(a,t,n)),t={cache:Wo()},e.payload=t;return}t=t.return}}function d1(e,t,n){var a=kt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},$l(e)?Wh(t,n):(n=Vo(e,t,n,a),n!==null&&(At(n,e,a),Fh(n,t,a)))}function Jh(e,t,n){var a=kt();_r(e,t,n,a)}function _r(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if($l(e))Wh(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,g=o(f,n);if(l.hasEagerState=!0,l.eagerState=g,wt(g,f))return _l(e,t,l,0),Te===null&&El(),!1}catch{}finally{}if(n=Vo(e,t,l,a),n!==null)return At(n,e,a),Fh(n,t,a),!0}return!1}function Sc(e,t,n,a){if(a={lane:2,revertLane:eu(),action:a,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(t)throw Error(c(479))}else t=Vo(e,n,a,2),t!==null&&At(t,e,2)}function $l(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Wh(e,t){ua=Hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,lf(e,n)}}var ql={readContext:at,use:Ul,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Ih={readContext:at,use:Ul,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Nh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yl(4194308,4,Gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yl(4194308,4,e,t)},useInsertionEffect:function(e,t){Yl(4,2,e,t)},useMemo:function(e,t){var n=ht();t=t===void 0?null:t;var a=e();if(Ci){Vn(!0);try{e()}finally{Vn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ht();if(n!==void 0){var l=n(t);if(Ci){Vn(!0);try{n(t)}finally{Vn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=d1.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=pc(e);var t=e.queue,n=Jh.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bc,useDeferredValue:function(e,t){var n=ht();return yc(n,e,t)},useTransition:function(){var e=pc(!1);return e=Kh.bind(null,oe,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=oe,l=ht();if(xe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Te===null)throw Error(c(349));(ge&124)!==0||vh(a,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Nh(Sh.bind(null,a,o,e),[e]),a.flags|=2048,fa(9,Vl(),jh.bind(null,a,o,n,t),null),n},useId:function(){var e=ht(),t=Te.identifierPrefix;if(xe){var n=Sn,a=jn;n=(a&~(1<<32-St(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ll++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=r1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:jc,useFormState:Ch,useActionState:Ch,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Sc.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:hc,useCacheRefresh:function(){return ht().memoizedState=u1.bind(null,oe)}},em={readContext:at,use:Ul,useCallback:Yh,useContext:at,useEffect:Hh,useImperativeHandle:Vh,useInsertionEffect:Lh,useLayoutEffect:Uh,useMemo:$h,useReducer:Gl,useRef:Oh,useState:function(){return Gl(En)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Ue();return qh(n,we.memoizedState,e,t)},useTransition:function(){var e=Gl(En)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:zr(e),t]},useSyncExternalStore:yh,useId:Qh,useHostTransitionStatus:jc,useFormState:Mh,useActionState:Mh,useOptimistic:function(e,t){var n=Ue();return Eh(n,we,e,t)},useMemoCache:hc,useCacheRefresh:Ph},f1={readContext:at,use:Ul,useCallback:Yh,useContext:at,useEffect:Hh,useImperativeHandle:Vh,useInsertionEffect:Lh,useLayoutEffect:Uh,useMemo:$h,useReducer:gc,useRef:Oh,useState:function(){return gc(En)},useDebugValue:bc,useDeferredValue:function(e,t){var n=Ue();return we===null?yc(n,e,t):qh(n,we.memoizedState,e,t)},useTransition:function(){var e=gc(En)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:zr(e),t]},useSyncExternalStore:yh,useId:Qh,useHostTransitionStatus:jc,useFormState:Dh,useActionState:Dh,useOptimistic:function(e,t){var n=Ue();return we!==null?Eh(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hc,useCacheRefresh:Ph},ha=null,Tr=0;function Kl(e){var t=Tr;return Tr+=1,ha===null&&(ha=[]),dh(ha,e,t)}function kr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zl(e,t){throw t.$$typeof===R?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tm(e){var t=e._init;return t(e._payload)}function nm(e){function t(z,S){if(e){var E=z.deletions;E===null?(z.deletions=[S],z.flags|=16):E.push(S)}}function n(z,S){if(!e)return null;for(;S!==null;)t(z,S),S=S.sibling;return null}function a(z){for(var S=new Map;z!==null;)z.key!==null?S.set(z.key,z):S.set(z.index,z),z=z.sibling;return S}function l(z,S){return z=vn(z,S),z.index=0,z.sibling=null,z}function o(z,S,E){return z.index=E,e?(E=z.alternate,E!==null?(E=E.index,E<S?(z.flags|=67108866,S):E):(z.flags|=67108866,S)):(z.flags|=1048576,S)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,S,E,O){return S===null||S.tag!==6?(S=$o(E,z.mode,O),S.return=z,S):(S=l(S,E),S.return=z,S)}function v(z,S,E,O){var P=E.type;return P===Y?B(z,S,E.props.children,O,E.key):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ve&&tm(P)===S.type)?(S=l(S,E.props),kr(S,E),S.return=z,S):(S=kl(E.type,E.key,E.props,null,z.mode,O),kr(S,E),S.return=z,S)}function _(z,S,E,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=qo(E,z.mode,O),S.return=z,S):(S=l(S,E.children||[]),S.return=z,S)}function B(z,S,E,O,P){return S===null||S.tag!==7?(S=wi(E,z.mode,O,P),S.return=z,S):(S=l(S,E),S.return=z,S)}function N(z,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=$o(""+S,z.mode,E),S.return=z,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return E=kl(S.type,S.key,S.props,null,z.mode,E),kr(E,S),E.return=z,E;case V:return S=qo(S,z.mode,E),S.return=z,S;case ve:var O=S._init;return S=O(S._payload),N(z,S,E)}if(qe(S)||$e(S))return S=wi(S,z.mode,E,null),S.return=z,S;if(typeof S.then=="function")return N(z,Kl(S),E);if(S.$$typeof===D)return N(z,Ml(z,S),E);Zl(z,S)}return null}function T(z,S,E,O){var P=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return P!==null?null:g(z,S,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case C:return E.key===P?v(z,S,E,O):null;case V:return E.key===P?_(z,S,E,O):null;case ve:return P=E._init,E=P(E._payload),T(z,S,E,O)}if(qe(E)||$e(E))return P!==null?null:B(z,S,E,O,null);if(typeof E.then=="function")return T(z,S,Kl(E),O);if(E.$$typeof===D)return T(z,S,Ml(z,E),O);Zl(z,E)}return null}function k(z,S,E,O,P){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return z=z.get(E)||null,g(S,z,""+O,P);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return z=z.get(O.key===null?E:O.key)||null,v(S,z,O,P);case V:return z=z.get(O.key===null?E:O.key)||null,_(S,z,O,P);case ve:var ce=O._init;return O=ce(O._payload),k(z,S,E,O,P)}if(qe(O)||$e(O))return z=z.get(E)||null,B(S,z,O,P,null);if(typeof O.then=="function")return k(z,S,E,Kl(O),P);if(O.$$typeof===D)return k(z,S,E,Ml(S,O),P);Zl(S,O)}return null}function re(z,S,E,O){for(var P=null,ce=null,I=S,ae=S=0,Pe=null;I!==null&&ae<E.length;ae++){I.index>ae?(Pe=I,I=null):Pe=I.sibling;var pe=T(z,I,E[ae],O);if(pe===null){I===null&&(I=Pe);break}e&&I&&pe.alternate===null&&t(z,I),S=o(pe,S,ae),ce===null?P=pe:ce.sibling=pe,ce=pe,I=Pe}if(ae===E.length)return n(z,I),xe&&Ei(z,ae),P;if(I===null){for(;ae<E.length;ae++)I=N(z,E[ae],O),I!==null&&(S=o(I,S,ae),ce===null?P=I:ce.sibling=I,ce=I);return xe&&Ei(z,ae),P}for(I=a(I);ae<E.length;ae++)Pe=k(I,z,ae,E[ae],O),Pe!==null&&(e&&Pe.alternate!==null&&I.delete(Pe.key===null?ae:Pe.key),S=o(Pe,S,ae),ce===null?P=Pe:ce.sibling=Pe,ce=Pe);return e&&I.forEach(function(ui){return t(z,ui)}),xe&&Ei(z,ae),P}function ne(z,S,E,O){if(E==null)throw Error(c(151));for(var P=null,ce=null,I=S,ae=S=0,Pe=null,pe=E.next();I!==null&&!pe.done;ae++,pe=E.next()){I.index>ae?(Pe=I,I=null):Pe=I.sibling;var ui=T(z,I,pe.value,O);if(ui===null){I===null&&(I=Pe);break}e&&I&&ui.alternate===null&&t(z,I),S=o(ui,S,ae),ce===null?P=ui:ce.sibling=ui,ce=ui,I=Pe}if(pe.done)return n(z,I),xe&&Ei(z,ae),P;if(I===null){for(;!pe.done;ae++,pe=E.next())pe=N(z,pe.value,O),pe!==null&&(S=o(pe,S,ae),ce===null?P=pe:ce.sibling=pe,ce=pe);return xe&&Ei(z,ae),P}for(I=a(I);!pe.done;ae++,pe=E.next())pe=k(I,z,ae,pe.value,O),pe!==null&&(e&&pe.alternate!==null&&I.delete(pe.key===null?ae:pe.key),S=o(pe,S,ae),ce===null?P=pe:ce.sibling=pe,ce=pe);return e&&I.forEach(function(hy){return t(z,hy)}),xe&&Ei(z,ae),P}function Ee(z,S,E,O){if(typeof E=="object"&&E!==null&&E.type===Y&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case C:e:{for(var P=E.key;S!==null;){if(S.key===P){if(P=E.type,P===Y){if(S.tag===7){n(z,S.sibling),O=l(S,E.props.children),O.return=z,z=O;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ve&&tm(P)===S.type){n(z,S.sibling),O=l(S,E.props),kr(O,E),O.return=z,z=O;break e}n(z,S);break}else t(z,S);S=S.sibling}E.type===Y?(O=wi(E.props.children,z.mode,O,E.key),O.return=z,z=O):(O=kl(E.type,E.key,E.props,null,z.mode,O),kr(O,E),O.return=z,z=O)}return f(z);case V:e:{for(P=E.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(z,S.sibling),O=l(S,E.children||[]),O.return=z,z=O;break e}else{n(z,S);break}else t(z,S);S=S.sibling}O=qo(E,z.mode,O),O.return=z,z=O}return f(z);case ve:return P=E._init,E=P(E._payload),Ee(z,S,E,O)}if(qe(E))return re(z,S,E,O);if($e(E)){if(P=$e(E),typeof P!="function")throw Error(c(150));return E=P.call(E),ne(z,S,E,O)}if(typeof E.then=="function")return Ee(z,S,Kl(E),O);if(E.$$typeof===D)return Ee(z,S,Ml(z,E),O);Zl(z,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(n(z,S.sibling),O=l(S,E),O.return=z,z=O):(n(z,S),O=$o(E,z.mode,O),O.return=z,z=O),f(z)):n(z,S)}return function(z,S,E,O){try{Tr=0;var P=Ee(z,S,E,O);return ha=null,P}catch(I){if(I===br||I===Dl)throw I;var ce=zt(29,I,null,z.mode);return ce.lanes=O,ce.return=z,ce}finally{}}}var ma=nm(!0),im=nm(!1),Vt=L(null),sn=null;function Pn(e){var t=e.alternate;X(Ye,Ye.current&1),X(Vt,e),sn===null&&(t===null||ca.current!==null||t.memoizedState!==null)&&(sn=e)}function am(e){if(e.tag===22){if(X(Ye,Ye.current),X(Vt,e),sn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(sn=e)}}else Jn()}function Jn(){X(Ye,Ye.current),X(Vt,Vt.current)}function _n(e){K(Vt),sn===e&&(sn=null),K(Ye)}var Ye=L(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||fu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=kt(),l=Zn(a);l.payload=t,n!=null&&(l.callback=n),t=Xn(e,l,a),t!==null&&(At(t,e,a),vr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=kt(),l=Zn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Xn(e,l,a),t!==null&&(At(t,e,a),vr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),a=Zn(n);a.tag=2,t!=null&&(a.callback=t),t=Xn(e,a,n),t!==null&&(At(t,e,n),vr(t,e,n))}};function rm(e,t,n,a,l,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,f):t.prototype&&t.prototype.isPureReactComponent?!ur(n,a)||!ur(l,o):!0}function lm(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function Mi(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sm(e){Ql(e)}function om(e){console.error(e)}function cm(e){Ql(e)}function Pl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function um(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ec(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Pl(e,t)},n}function dm(e){return e=Zn(e),e.tag=3,e}function fm(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=a.value;e.payload=function(){return l(o)},e.callback=function(){um(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){um(t,n,a),typeof l!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function h1(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&gr(t,n,l,!0),n=Vt.current,n!==null){switch(n.tag){case 13:return sn===null?Pc():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===ec?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Wc(e,a,l)),!1;case 22:return n.flags|=65536,a===ec?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Wc(e,a,l)),!1}throw Error(c(435,n.tag))}return Wc(e,a,l),Pc(),!1}if(xe)return t=Vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Xo&&(e=Error(c(422),{cause:a}),mr(Ht(e,n)))):(a!==Xo&&(t=Error(c(423),{cause:a}),mr(Ht(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Ht(a,n),l=Ec(e.stateNode,a,l),ic(e,l),Oe!==4&&(Oe=2)),!1;var o=Error(c(520),{cause:a});if(o=Ht(o,n),Or===null?Or=[o]:Or.push(o),Oe!==4&&(Oe=2),t===null)return!0;a=Ht(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ec(n.stateNode,a,e),ic(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ni===null||!ni.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=dm(l),fm(l,e,n,a),ic(n,l),!1}n=n.return}while(n!==null);return!1}var hm=Error(c(461)),Xe=!1;function Ie(e,t,n,a){t.child=e===null?im(t,null,n,a):ma(t,e.child,n,a)}function mm(e,t,n,a,l){n=n.render;var o=t.ref;if("ref"in a){var f={};for(var g in a)g!=="ref"&&(f[g]=a[g])}else f=a;return Ai(t),a=oc(e,t,n,f,o,l),g=cc(),e!==null&&!Xe?(uc(e,t,l),Tn(e,t,l)):(xe&&g&&Ko(t),t.flags|=1,Ie(e,t,a,l),t.child)}function gm(e,t,n,a,l){if(e===null){var o=n.type;return typeof o=="function"&&!Yo(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,pm(e,t,o,a,l)):(e=kl(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Bc(e,l)){var f=o.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(f,a)&&e.ref===t.ref)return Tn(e,t,l)}return t.flags|=1,e=vn(o,a),e.ref=t.ref,e.return=t,t.child=e}function pm(e,t,n,a,l){if(e!==null){var o=e.memoizedProps;if(ur(o,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=o,Bc(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Tn(e,t,l)}return _c(e,t,n,a,l)}function xm(e,t,n){var a=t.pendingProps,l=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=o!==null?o.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~a}else t.childLanes=0,t.child=null;return bm(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(t,o!==null?o.cachePool:null),o!==null?ph(t,o):rc(),am(t);else return t.lanes=t.childLanes=536870912,bm(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Bl(t,o.cachePool),ph(t,o),Jn(),t.memoizedState=null):(e!==null&&Bl(t,null),rc(),Jn());return Ie(e,t,l,n),t.child}function bm(e,t,n,a){var l=Io();return l=l===null?null:{parent:Ve._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Bl(t,null),rc(),am(t),e!==null&&gr(e,t,a,!0),null}function Jl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,a,l){return Ai(t),n=oc(e,t,n,a,void 0,l),a=cc(),e!==null&&!Xe?(uc(e,t,l),Tn(e,t,l)):(xe&&a&&Ko(t),t.flags|=1,Ie(e,t,n,l),t.child)}function ym(e,t,n,a,l,o){return Ai(t),t.updateQueue=null,n=bh(t,a,n,l),xh(e),a=cc(),e!==null&&!Xe?(uc(e,t,o),Tn(e,t,o)):(xe&&a&&Ko(t),t.flags|=1,Ie(e,t,n,o),t.child)}function vm(e,t,n,a,l){if(Ai(t),t.stateNode===null){var o=aa,f=n.contextType;typeof f=="object"&&f!==null&&(o=at(f)),o=new n(a,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=zc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=a,o.state=t.memoizedState,o.refs={},tc(t),f=n.contextType,o.context=typeof f=="object"&&f!==null?at(f):aa,o.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(wc(t,n,f,a),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&zc.enqueueReplaceState(o,o.state,null),Sr(t,a,o,l),jr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){o=t.stateNode;var g=t.memoizedProps,v=Mi(n,g);o.props=v;var _=o.context,B=n.contextType;f=aa,typeof B=="object"&&B!==null&&(f=at(B));var N=n.getDerivedStateFromProps;B=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,B||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g||_!==f)&&lm(t,o,a,f),Kn=!1;var T=t.memoizedState;o.state=T,Sr(t,a,o,l),jr(),_=t.memoizedState,g||T!==_||Kn?(typeof N=="function"&&(wc(t,n,N,a),_=t.memoizedState),(v=Kn||rm(t,n,v,a,T,_,f))?(B||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=_),o.props=a,o.state=_,o.context=f,a=v):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,nc(e,t),f=t.memoizedProps,B=Mi(n,f),o.props=B,N=t.pendingProps,T=o.context,_=n.contextType,v=aa,typeof _=="object"&&_!==null&&(v=at(_)),g=n.getDerivedStateFromProps,(_=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==N||T!==v)&&lm(t,o,a,v),Kn=!1,T=t.memoizedState,o.state=T,Sr(t,a,o,l),jr();var k=t.memoizedState;f!==N||T!==k||Kn||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof g=="function"&&(wc(t,n,g,a),k=t.memoizedState),(B=Kn||rm(t,n,B,a,T,k,v)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(_||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,k,v),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,k,v)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=k),o.props=a,o.state=k,o.context=v,a=B):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return o=a,Jl(e,t),a=(t.flags&128)!==0,o||a?(o=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&a?(t.child=ma(t,e.child,null,l),t.child=ma(t,null,n,l)):Ie(e,t,n,l),t.memoizedState=o.state,e=t.child):e=Tn(e,t,l),e}function jm(e,t,n,a){return hr(),t.flags|=256,Ie(e,t,n,a),t.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kc(e){return{baseLanes:e,cachePool:oh()}}function Ac(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Yt),e}function Sm(e,t,n){var a=t.pendingProps,l=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(xe){if(l?Pn(t):Jn(),xe){var g=De,v;if(v=g){e:{for(v=g,g=ln;v.nodeType!==8;){if(!g){g=null;break e}if(v=It(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(t.memoizedState={dehydrated:g,treeContext:zi!==null?{id:jn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},v=zt(18,null,null,0),v.stateNode=g,v.return=t,t.child=v,st=t,De=null,v=!0):v=!1}v||Ti(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return fu(g)?t.lanes=32:t.lanes=536870912,null;_n(t)}return g=a.children,a=a.fallback,l?(Jn(),l=t.mode,g=Wl({mode:"hidden",children:g},l),a=wi(a,l,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,l=t.child,l.memoizedState=kc(n),l.childLanes=Ac(e,f,n),t.memoizedState=Tc,a):(Pn(t),Rc(t,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(o)t.flags&256?(Pn(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState!==null?(Jn(),t.child=e.child,t.flags|=128,t=null):(Jn(),l=a.fallback,g=t.mode,a=Wl({mode:"visible",children:a.children},g),l=wi(l,g,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,ma(t,e.child,null,n),a=t.child,a.memoizedState=kc(n),a.childLanes=Ac(e,f,n),t.memoizedState=Tc,t=l);else if(Pn(t),fu(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var _=f.dgst;f=_,a=Error(c(419)),a.stack="",a.digest=f,mr({value:a,source:null,stack:null}),t=Cc(e,t,n)}else if(Xe||gr(e,t,n,!1),f=(n&e.childLanes)!==0,Xe||f){if(f=Te,f!==null&&(a=n&-n,a=(a&42)!==0?1:ho(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,ia(e,a),At(f,e,a),hm;g.data==="$?"||Pc(),t=Cc(e,t,n)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,De=It(g.nextSibling),st=t,xe=!0,_i=null,ln=!1,e!==null&&(Ut[Gt++]=jn,Ut[Gt++]=Sn,Ut[Gt++]=zi,jn=e.id,Sn=e.overflow,zi=t),t=Rc(t,a.children),t.flags|=4096);return t}return l?(Jn(),l=a.fallback,g=t.mode,v=e.child,_=v.sibling,a=vn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,_!==null?l=vn(_,l):(l=wi(l,g,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,g=e.child.memoizedState,g===null?g=kc(n):(v=g.cachePool,v!==null?(_=Ve._currentValue,v=v.parent!==_?{parent:_,pool:_}:v):v=oh(),g={baseLanes:g.baseLanes|n,cachePool:v}),l.memoizedState=g,l.childLanes=Ac(e,f,n),t.memoizedState=Tc,a):(Pn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Rc(e,t){return t=Wl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wl(e,t){return e=zt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cc(e,t,n){return ma(t,e.child,null,n),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wm(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Po(e.return,t,n)}function Mc(e,t,n,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l)}function zm(e,t,n){var a=t.pendingProps,l=a.revealOrder,o=a.tail;if(Ie(e,t,a.children,n),a=Ye.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wm(e,n,t);else if(e.tag===19)wm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(X(Ye,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Mc(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Mc(t,!0,n,null,o);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function m1(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),qn(t,Ve,e.memoizedState.cache),hr();break;case 27:case 5:xi(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Pn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Sm(e,t,n):(Pn(t),e=Tn(e,t,n),e!==null?e.sibling:null);Pn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(gr(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return zm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(Ye,Ye.current),a)break;return null;case 22:case 23:return t.lanes=0,xm(e,t,n);case 24:qn(t,Ve,e.memoizedState.cache)}return Tn(e,t,n)}function Em(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Bc(e,n)&&(t.flags&128)===0)return Xe=!1,m1(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,xe&&(t.flags&1048576)!==0&&th(t,Rl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")Yo(a)?(e=Mi(a,e),t.tag=1,t=vm(null,t,a,e,n)):(t.tag=0,t=_c(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===$){t.tag=11,t=mm(null,t,a,e,n);break e}else if(l===H){t.tag=14,t=gm(null,t,a,e,n);break e}}throw t=pn(a)||a,Error(c(306,t,""))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Mi(a,t.pendingProps),vm(e,t,a,l,n);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var o=t.memoizedState;l=o.element,nc(e,t),Sr(t,a,null,n);var f=t.memoizedState;if(a=f.cache,qn(t,Ve,a),a!==o.cache&&Jo(t,[Ve],n,!0),jr(),a=f.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=jm(e,t,a,n);break e}else if(a!==l){l=Ht(Error(c(424)),t),mr(l),t=jm(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=It(e.firstChild),st=t,xe=!0,_i=null,ln=!0,n=im(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hr(),a===l){t=Tn(e,t,n);break e}Ie(e,t,a,n)}t=t.child}return t;case 26:return Jl(e,t),e===null?(n=Ag(t.type,null,t.pendingProps,null))?t.memoizedState=n:xe||(n=t.type,e=t.pendingProps,a=ds(ie.current).createElement(n),a[it]=t,a[dt]=e,tt(a,n,e),Ze(a),t.stateNode=a):t.memoizedState=Ag(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xi(t),e===null&&xe&&(a=t.stateNode=_g(t.type,t.pendingProps,ie.current),st=t,ln=!0,l=De,ri(t.type)?(hu=l,De=It(a.firstChild)):De=l),Ie(e,t,t.pendingProps.children,n),Jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&xe&&((l=a=De)&&(a=Y1(a,t.type,t.pendingProps,ln),a!==null?(t.stateNode=a,st=t,De=It(a.firstChild),ln=!1,l=!0):l=!1),l||Ti(t)),xi(t),l=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,a=o.children,cu(l,o)?a=null:f!==null&&cu(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=oc(e,t,l1,null,null,n),qr._currentValue=l),Jl(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&xe&&((e=n=De)&&(n=$1(n,t.pendingProps,ln),n!==null?(t.stateNode=n,st=t,De=null,e=!0):e=!1),e||Ti(t)),null;case 13:return Sm(e,t,n);case 4:return be(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ma(t,null,a,n):Ie(e,t,a,n),t.child;case 11:return mm(e,t,t.type,t.pendingProps,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,qn(t,t.type,a.value),Ie(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Ai(t),l=at(l),a=a(l),t.flags|=1,Ie(e,t,a,n),t.child;case 14:return gm(e,t,t.type,t.pendingProps,n);case 15:return pm(e,t,t.type,t.pendingProps,n);case 19:return zm(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Wl(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=vn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return xm(e,t,n);case 24:return Ai(t),a=at(Ve),e===null?(l=Io(),l===null&&(l=Te,o=Wo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:a,cache:l},tc(t),qn(t,Ve,l)):((e.lanes&n)!==0&&(nc(e,t),Sr(t,null,null,n),jr()),l=e.memoizedState,o=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),qn(t,Ve,a)):(a=o.cache,qn(t,Ve,a),a!==l.cache&&Jo(t,[Ve],n,!0))),Ie(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function kn(e){e.flags|=4}function _m(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dg(t)){if(t=Vt.current,t!==null&&((ge&4194048)===ge?sn!==null:(ge&62914560)!==ge&&(ge&536870912)===0||t!==sn))throw yr=ec,ch;e.flags|=8192}}function Fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?af():536870912,e.lanes|=t,ba|=t)}function Ar(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function g1(e,t,n){var a=t.pendingProps;switch(Zo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),zn(Ve),nt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fr(t)?kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ah())),Be(t),null;case 26:return n=t.memoizedState,e===null?(kn(t),n!==null?(Be(t),_m(t,n)):(Be(t),t.flags&=-16777217)):n?n!==e.memoizedState?(kn(t),Be(t),_m(t,n)):(Be(t),t.flags&=-16777217):(e.memoizedProps!==a&&kn(t),Be(t),t.flags&=-16777217),null;case 27:xn(t),n=ie.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Be(t),null}e=ee.current,fr(t)?nh(t):(e=_g(l,a,n),t.stateNode=e,kn(t))}return Be(t),null;case 5:if(xn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Be(t),null}if(e=ee.current,fr(t))nh(t);else{switch(l=ds(ie.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[it]=t,e[dt]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(tt(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&kn(t)}}return Be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&kn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,fr(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=st,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[it]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||yg(e.nodeValue,n)),e||Ti(t)}else e=ds(e).createTextNode(a),e[it]=t,t.stateNode=e}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=fr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[it]=t}else hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else l=ah(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(_n(t),t):(_n(t),null)}if(_n(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Fl(t,t.updateQueue),Be(t),null;case 4:return nt(),e===null&&au(t.stateNode.containerInfo),Be(t),null;case 10:return zn(t.type),Be(t),null;case 19:if(K(Ye),l=t.memoizedState,l===null)return Be(t),null;if(a=(t.flags&128)!==0,o=l.rendering,o===null)if(a)Ar(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Xl(e),o!==null){for(t.flags|=128,Ar(l,!1),e=o.updateQueue,t.updateQueue=e,Fl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)eh(n,e),n=n.sibling;return X(Ye,Ye.current&1|2),t.child}e=e.sibling}l.tail!==null&&rn()>ts&&(t.flags|=128,a=!0,Ar(l,!1),t.lanes=4194304)}else{if(!a)if(e=Xl(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fl(t,e),Ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!xe)return Be(t),null}else 2*rn()-l.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,a=!0,Ar(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=rn(),t.sibling=null,e=Ye.current,X(Ye,a?e&1|2:e&1),t):(Be(t),null);case 22:case 23:return _n(t),lc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Fl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&K(Ri),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zn(Ve),Be(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function p1(e,t){switch(Zo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(Ve),nt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xn(t),null;case 13:if(_n(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Ye),null;case 4:return nt(),null;case 10:return zn(t.type),null;case 22:case 23:return _n(t),lc(),e!==null&&K(Ri),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zn(Ve),null;case 25:return null;default:return null}}function Tm(e,t){switch(Zo(t),t.tag){case 3:zn(Ve),nt();break;case 26:case 27:case 5:xn(t);break;case 4:nt();break;case 13:_n(t);break;case 19:K(Ye);break;case 10:zn(t.type);break;case 22:case 23:_n(t),lc(),e!==null&&K(Ri);break;case 24:zn(Ve)}}function Rr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var o=n.create,f=n.inst;a=o(),f.destroy=a}n=n.next}while(n!==l)}}catch(g){_e(t,t.return,g)}}function Wn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&e)===e){var f=a.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,l=t;var v=n,_=g;try{_()}catch(B){_e(l,v,B)}}}a=a.next}while(a!==o)}}catch(B){_e(t,t.return,B)}}function km(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gh(t,n)}catch(a){_e(e,e.return,a)}}}function Am(e,t,n){n.props=Mi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function Cr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){_e(e,t,l)}}function on(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){_e(e,t,l)}else n.current=null}function Rm(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){_e(e,e.return,l)}}function Dc(e,t,n){try{var a=e.stateNode;H1(a,e.type,n,t),a[dt]=t}catch(l){_e(e,e.return,l)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ri(e.type)||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ri(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us));else if(a!==4&&(a===27&&ri(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}function Il(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ri(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Mm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);tt(t,a,n),t[it]=e,t[dt]=n}catch(o){_e(e,e.return,o)}}var An=!1,He=!1,Hc=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function x1(e,t){if(e=e.containerInfo,su=xs,e=qf(e),Oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var f=0,g=-1,v=-1,_=0,B=0,N=e,T=null;t:for(;;){for(var k;N!==n||l!==0&&N.nodeType!==3||(g=f+l),N!==o||a!==0&&N.nodeType!==3||(v=f+a),N.nodeType===3&&(f+=N.nodeValue.length),(k=N.firstChild)!==null;)T=N,N=k;for(;;){if(N===e)break t;if(T===n&&++_===l&&(g=f),T===o&&++B===a&&(v=f),(k=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=k}n=g===-1||v===-1?null:{start:g,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},xs=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,a=n.stateNode;try{var re=Mi(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(re,o),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){_e(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Dm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Fn(e,n),a&4&&Rr(5,n);break;case 1:if(Fn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var l=Mi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}a&64&&km(n),a&512&&Cr(n,n.return);break;case 3:if(Fn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gh(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&a&4&&Mm(n);case 26:case 5:Fn(e,n),t===null&&a&4&&Rm(n),a&512&&Cr(n,n.return);break;case 12:Fn(e,n);break;case 13:Fn(e,n),a&4&&Hm(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_1.bind(null,n),q1(e,n))));break;case 22:if(a=n.memoizedState!==null||An,!a){t=t!==null&&t.memoizedState!==null||He,l=An;var o=He;An=a,(He=t)&&!o?In(e,n,(n.subtreeFlags&8772)!==0):Fn(e,n),An=l,He=o}break;case 30:break;default:Fn(e,n)}}function Om(e){var t=e.alternate;t!==null&&(e.alternate=null,Om(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,mt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)Nm(e,t,n),n=n.sibling}function Nm(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 26:He||on(n,t),Rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||on(n,t);var a=Re,l=mt;ri(n.type)&&(Re=n.stateNode,mt=!1),Rn(e,t,n),Gr(n.stateNode),Re=a,mt=l;break;case 5:He||on(n,t);case 6:if(a=Re,l=mt,Re=null,Rn(e,t,n),Re=a,mt=l,Re!==null)if(mt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(o){_e(n,t,o)}else try{Re.removeChild(n.stateNode)}catch(o){_e(n,t,o)}break;case 18:Re!==null&&(mt?(e=Re,zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Qr(e)):zg(Re,n.stateNode));break;case 4:a=Re,l=mt,Re=n.stateNode.containerInfo,mt=!0,Rn(e,t,n),Re=a,mt=l;break;case 0:case 11:case 14:case 15:He||Wn(2,n,t),He||Wn(4,n,t),Rn(e,t,n);break;case 1:He||(on(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Am(n,t,a)),Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:He=(a=He)||n.memoizedState!==null,Rn(e,t,n),He=a;break;default:Rn(e,t,n)}}function Hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(n){_e(t,t.return,n)}}function b1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bm),t;default:throw Error(c(435,e.tag))}}function Lc(e,t){var n=b1(e);t.forEach(function(a){var l=T1.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function Et(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],o=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(ri(g.type)){Re=g.stateNode,mt=!1;break e}break;case 5:Re=g.stateNode,mt=!1;break e;case 3:case 4:Re=g.stateNode.containerInfo,mt=!0;break e}g=g.return}if(Re===null)throw Error(c(160));Nm(o,f,l),Re=null,mt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Lm(t,e),t=t.sibling}var Ft=null;function Lm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),_t(e),a&4&&(Wn(3,e,e.return),Rr(3,e),Wn(5,e,e.return));break;case 1:Et(t,e),_t(e),a&512&&(He||n===null||on(n,n.return)),a&64&&An&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Ft;if(Et(t,e),_t(e),a&512&&(He||n===null||on(n,n.return)),a&4){var o=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":o=l.getElementsByTagName("title")[0],(!o||o[tr]||o[it]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(a),l.head.insertBefore(o,l.querySelector("head > title"))),tt(o,a,n),o[it]=e,Ze(o),a=o;break e;case"link":var f=Mg("link","href",l).get(a+(n.href||""));if(f){for(var g=0;g<f.length;g++)if(o=f[g],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(g,1);break t}}o=l.createElement(a),tt(o,a,n),l.head.appendChild(o);break;case"meta":if(f=Mg("meta","content",l).get(a+(n.content||""))){for(g=0;g<f.length;g++)if(o=f[g],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(g,1);break t}}o=l.createElement(a),tt(o,a,n),l.head.appendChild(o);break;default:throw Error(c(468,a))}o[it]=e,Ze(o),a=o}e.stateNode=a}else Bg(l,e.type,e.stateNode);else e.stateNode=Cg(l,a,e.memoizedProps);else o!==a?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,a===null?Bg(l,e.type,e.stateNode):Cg(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Dc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),_t(e),a&512&&(He||n===null||on(n,n.return)),n!==null&&a&4&&Dc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),_t(e),a&512&&(He||n===null||on(n,n.return)),e.flags&32){l=e.stateNode;try{Ji(l,"")}catch(k){_e(e,e.return,k)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Dc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Hc=!0);break;case 6:if(Et(t,e),_t(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(k){_e(e,e.return,k)}}break;case 3:if(ms=null,l=Ft,Ft=fs(t.containerInfo),Et(t,e),Ft=l,_t(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(k){_e(e,e.return,k)}Hc&&(Hc=!1,Um(e));break;case 4:a=Ft,Ft=fs(e.stateNode.containerInfo),Et(t,e),_t(e),Ft=a;break;case 12:Et(t,e),_t(e);break;case 13:Et(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qc=rn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Lc(e,a)));break;case 22:l=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,_=An,B=He;if(An=_||l,He=B||v,Et(t,e),He=B,An=_,_t(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||v||An||He||Bi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(o=v.stateNode,l)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=v.stateNode;var N=v.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null;g.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(k){_e(v,v.return,k)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(k){_e(v,v.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Lc(e,n))));break;case 19:Et(t,e),_t(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Lc(e,a)));break;case 30:break;case 21:break;default:Et(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Cm(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,o=Oc(e);Il(e,o,l);break;case 5:var f=n.stateNode;n.flags&32&&(Ji(f,""),n.flags&=-33);var g=Oc(e);Il(e,g,f);break;case 3:case 4:var v=n.stateNode.containerInfo,_=Oc(e);Nc(e,_,v);break;default:throw Error(c(161))}}catch(B){_e(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Um(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Um(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Fn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dm(e,t.alternate,t),t=t.sibling}function Bi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wn(4,t,t.return),Bi(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Am(t,t.return,n),Bi(t);break;case 27:Gr(t.stateNode);case 26:case 5:on(t,t.return),Bi(t);break;case 22:t.memoizedState===null&&Bi(t);break;case 30:Bi(t);break;default:Bi(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:In(l,o,n),Rr(4,o);break;case 1:if(In(l,o,n),a=o,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(_){_e(a,a.return,_)}if(a=o,l=a.updateQueue,l!==null){var g=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)mh(v[l],g)}catch(_){_e(a,a.return,_)}}n&&f&64&&km(o),Cr(o,o.return);break;case 27:Mm(o);case 26:case 5:In(l,o,n),n&&a===null&&f&4&&Rm(o),Cr(o,o.return);break;case 12:In(l,o,n);break;case 13:In(l,o,n),n&&f&4&&Hm(l,o);break;case 22:o.memoizedState===null&&In(l,o,n),Cr(o,o.return);break;case 30:break;default:In(l,o,n)}t=t.sibling}}function Uc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pr(n))}function Gc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pr(e))}function cn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gm(e,t,n,a),t=t.sibling}function Gm(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:cn(e,t,n,a),l&2048&&Rr(9,t);break;case 1:cn(e,t,n,a);break;case 3:cn(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pr(e)));break;case 12:if(l&2048){cn(e,t,n,a),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,g=o.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){_e(t,t.return,v)}}else cn(e,t,n,a);break;case 13:cn(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?cn(e,t,n,a):Mr(e,t):o._visibility&2?cn(e,t,n,a):(o._visibility|=2,ga(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Uc(f,t);break;case 24:cn(e,t,n,a),l&2048&&Gc(t.alternate,t);break;default:cn(e,t,n,a)}}function ga(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,f=t,g=n,v=a,_=f.flags;switch(f.tag){case 0:case 11:case 15:ga(o,f,g,v,l),Rr(8,f);break;case 23:break;case 22:var B=f.stateNode;f.memoizedState!==null?B._visibility&2?ga(o,f,g,v,l):Mr(o,f):(B._visibility|=2,ga(o,f,g,v,l)),l&&_&2048&&Uc(f.alternate,f);break;case 24:ga(o,f,g,v,l),l&&_&2048&&Gc(f.alternate,f);break;default:ga(o,f,g,v,l)}t=t.sibling}}function Mr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Mr(n,a),l&2048&&Uc(a.alternate,a);break;case 24:Mr(n,a),l&2048&&Gc(a.alternate,a);break;default:Mr(n,a)}t=t.sibling}}var Br=8192;function pa(e){if(e.subtreeFlags&Br)for(e=e.child;e!==null;)Vm(e),e=e.sibling}function Vm(e){switch(e.tag){case 26:pa(e),e.flags&Br&&e.memoizedState!==null&&iy(Ft,e.memoizedState,e.memoizedProps);break;case 5:pa(e);break;case 3:case 4:var t=Ft;Ft=fs(e.stateNode.containerInfo),pa(e),Ft=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Br,Br=16777216,pa(e),Br=t):pa(e));break;default:pa(e)}}function Ym(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,qm(a,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 0:case 11:case 15:Dr(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Dr(e);break;case 12:Dr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,es(e)):Dr(e);break;default:Dr(e)}}function es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,qm(a,e)}Ym(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wn(8,t,t.return),es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,es(t));break;default:es(t)}e=e.sibling}}function qm(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Wn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:pr(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var l=a.sibling,o=a.return;if(Om(a),a===n){Qe=null;break e}if(l!==null){l.return=o,Qe=l;break e}Qe=o}}}var y1={getCacheForType:function(e){var t=at(Ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},v1=typeof WeakMap=="function"?WeakMap:Map,je=0,Te=null,fe=null,ge=0,Se=0,Tt=null,ei=!1,xa=!1,Vc=!1,Cn=0,Oe=0,ti=0,Di=0,Yc=0,Yt=0,ba=0,Or=null,gt=null,$c=!1,qc=0,ts=1/0,ns=null,ni=null,et=0,ii=null,ya=null,va=0,Kc=0,Zc=null,Km=null,Nr=0,Xc=null;function kt(){if((je&2)!==0&&ge!==0)return ge&-ge;if(M.T!==null){var e=sa;return e!==0?e:eu()}return sf()}function Zm(){Yt===0&&(Yt=(ge&536870912)===0||xe?nf():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),Yt}function At(e,t,n){(e===Te&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(ja(e,0),ai(e,ge,Yt,!1)),er(e,n),((je&2)===0||e!==Te)&&(e===Te&&((je&2)===0&&(Di|=n),Oe===4&&ai(e,ge,Yt,!1)),un(e))}function Xm(e,t,n){if((je&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ia(e,t),l=a?w1(e,t):Jc(e,t,!0),o=a;do{if(l===0){xa&&!a&&ai(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!j1(n)){l=Jc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;l=Or;var v=g.current.memoizedState.isDehydrated;if(v&&(ja(g,f).flags|=256),f=Jc(g,f,!1),f!==2){if(Vc&&!v){g.errorRecoveryDisabledLanes|=o,Di|=o,l=4;break e}o=gt,gt=l,o!==null&&(gt===null?gt=o:gt.push.apply(gt,o))}l=f}if(o=!1,l!==2)continue}}if(l===1){ja(e,0),ai(e,t,0,!0);break}e:{switch(a=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:ai(a,t,Yt,!ei);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=qc+300-rn(),10<l)){if(ai(a,t,Yt,!ei),hl(a,0,!0)!==0)break e;a.timeoutHandle=Sg(Qm.bind(null,a,n,gt,ns,$c,t,Yt,Di,ba,ei,o,2,-0,0),l);break e}Qm(a,n,gt,ns,$c,t,Yt,Di,ba,ei,o,0,-0,0)}}break}while(!0);un(e)}function Qm(e,t,n,a,l,o,f,g,v,_,B,N,T,k){if(e.timeoutHandle=-1,N=t.subtreeFlags,(N&8192||(N&16785408)===16785408)&&($r={stylesheets:null,count:0,unsuspend:ny},Vm(t),N=ay(),N!==null)){e.cancelPendingCommit=N(tg.bind(null,e,t,o,n,a,l,f,g,v,B,1,T,k)),ai(e,o,f,!_);return}tg(e,t,o,n,a,l,f,g,v)}function j1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],o=l.getSnapshot;l=l.value;try{if(!wt(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ai(e,t,n,a){t&=~Yc,t&=~Di,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var o=31-St(l),f=1<<o;a[o]=-1,l&=~f}n!==0&&rf(e,n,t)}function is(){return(je&6)===0?(Hr(0),!1):!0}function Qc(){if(fe!==null){if(Se===0)var e=fe.return;else e=fe,wn=ki=null,dc(e),ha=null,Tr=0,e=fe;for(;e!==null;)Tm(e.alternate,e),e=e.return;fe=null}}function ja(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,U1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qc(),Te=e,fe=n=vn(e.current,null),ge=t,Se=0,Tt=null,ei=!1,xa=Ia(e,t),Vc=!1,ba=Yt=Yc=Di=ti=Oe=0,gt=Or=null,$c=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-St(a),o=1<<l;t|=e[l],a&=~o}return Cn=t,El(),n}function Pm(e,t){oe=null,M.H=ql,t===br||t===Dl?(t=fh(),Se=3):t===ch?(t=fh(),Se=4):Se=t===hm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,fe===null&&(Oe=1,Pl(e,Ht(t,e.current)))}function Jm(){var e=M.H;return M.H=ql,e===null?ql:e}function Wm(){var e=M.A;return M.A=y1,e}function Pc(){Oe=4,ei||(ge&4194048)!==ge&&Vt.current!==null||(xa=!0),(ti&134217727)===0&&(Di&134217727)===0||Te===null||ai(Te,ge,Yt,!1)}function Jc(e,t,n){var a=je;je|=2;var l=Jm(),o=Wm();(Te!==e||ge!==t)&&(ns=null,ja(e,t)),t=!1;var f=Oe;e:do try{if(Se!==0&&fe!==null){var g=fe,v=Tt;switch(Se){case 8:Qc(),f=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(t=!0);var _=Se;if(Se=0,Tt=null,Sa(e,g,v,_),n&&xa){f=0;break e}break;default:_=Se,Se=0,Tt=null,Sa(e,g,v,_)}}S1(),f=Oe;break}catch(B){Pm(e,B)}while(!0);return t&&e.shellSuspendCounter++,wn=ki=null,je=a,M.H=l,M.A=o,fe===null&&(Te=null,ge=0,El()),f}function S1(){for(;fe!==null;)Fm(fe)}function w1(e,t){var n=je;je|=2;var a=Jm(),l=Wm();Te!==e||ge!==t?(ns=null,ts=rn()+500,ja(e,t)):xa=Ia(e,t);e:do try{if(Se!==0&&fe!==null){t=fe;var o=Tt;t:switch(Se){case 1:Se=0,Tt=null,Sa(e,t,o,1);break;case 2:case 9:if(uh(o)){Se=0,Tt=null,Im(t);break}t=function(){Se!==2&&Se!==9||Te!==e||(Se=7),un(e)},o.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:uh(o)?(Se=0,Tt=null,Im(t)):(Se=0,Tt=null,Sa(e,t,o,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var g=fe;if(!f||Dg(f)){Se=0,Tt=null;var v=g.sibling;if(v!==null)fe=v;else{var _=g.return;_!==null?(fe=_,as(_)):fe=null}break t}}Se=0,Tt=null,Sa(e,t,o,5);break;case 6:Se=0,Tt=null,Sa(e,t,o,6);break;case 8:Qc(),Oe=6;break e;default:throw Error(c(462))}}z1();break}catch(B){Pm(e,B)}while(!0);return wn=ki=null,M.H=a,M.A=l,je=n,fe!==null?0:(Te=null,ge=0,El(),Oe)}function z1(){for(;fe!==null&&!Zx();)Fm(fe)}function Fm(e){var t=Em(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?as(e):fe=t}function Im(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ym(n,t,t.pendingProps,t.type,void 0,ge);break;case 11:t=ym(n,t,t.pendingProps,t.type.render,t.ref,ge);break;case 5:dc(t);default:Tm(n,t),t=fe=eh(t,Cn),t=Em(n,t,Cn)}e.memoizedProps=e.pendingProps,t===null?as(e):fe=t}function Sa(e,t,n,a){wn=ki=null,dc(t),ha=null,Tr=0;var l=t.return;try{if(h1(e,l,t,n,ge)){Oe=1,Pl(e,Ht(n,e.current)),fe=null;return}}catch(o){if(l!==null)throw fe=l,o;Oe=1,Pl(e,Ht(n,e.current)),fe=null;return}t.flags&32768?(xe||a===1?e=!0:xa||(ge&536870912)!==0?e=!1:(ei=e=!0,(a===2||a===9||a===3||a===6)&&(a=Vt.current,a!==null&&a.tag===13&&(a.flags|=16384))),eg(t,e)):as(t)}function as(e){var t=e;do{if((t.flags&32768)!==0){eg(t,ei);return}e=t.return;var n=g1(t.alternate,t,Cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Oe===0&&(Oe=5)}function eg(e,t){do{var n=p1(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Oe=6,fe=null}function tg(e,t,n,a,l,o,f,g,v){e.cancelPendingCommit=null;do rs();while(et!==0);if((je&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Go,nb(e,n,o,f,g,v),e===Te&&(fe=Te=null,ge=0),ya=t,ii=e,va=n,Kc=o,Zc=l,Km=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,k1(ul,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,l=Z.p,Z.p=2,f=je,je|=4;try{x1(e,t,n)}finally{je=f,Z.p=l,M.T=a}}et=1,ng(),ig(),ag()}}function ng(){if(et===1){et=0;var e=ii,t=ya,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var a=Z.p;Z.p=2;var l=je;je|=4;try{Lm(t,e);var o=ou,f=qf(e.containerInfo),g=o.focusedElem,v=o.selectionRange;if(f!==g&&g&&g.ownerDocument&&$f(g.ownerDocument.documentElement,g)){if(v!==null&&Oo(g)){var _=v.start,B=v.end;if(B===void 0&&(B=_),"selectionStart"in g)g.selectionStart=_,g.selectionEnd=Math.min(B,g.value.length);else{var N=g.ownerDocument||document,T=N&&N.defaultView||window;if(T.getSelection){var k=T.getSelection(),re=g.textContent.length,ne=Math.min(v.start,re),Ee=v.end===void 0?ne:Math.min(v.end,re);!k.extend&&ne>Ee&&(f=Ee,Ee=ne,ne=f);var z=Yf(g,ne),S=Yf(g,Ee);if(z&&S&&(k.rangeCount!==1||k.anchorNode!==z.node||k.anchorOffset!==z.offset||k.focusNode!==S.node||k.focusOffset!==S.offset)){var E=N.createRange();E.setStart(z.node,z.offset),k.removeAllRanges(),ne>Ee?(k.addRange(E),k.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),k.addRange(E))}}}}for(N=[],k=g;k=k.parentNode;)k.nodeType===1&&N.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<N.length;g++){var O=N[g];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}xs=!!su,ou=su=null}finally{je=l,Z.p=a,M.T=n}}e.current=t,et=2}}function ig(){if(et===2){et=0;var e=ii,t=ya,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var a=Z.p;Z.p=2;var l=je;je|=4;try{Dm(e,t.alternate,t)}finally{je=l,Z.p=a,M.T=n}}et=3}}function ag(){if(et===4||et===3){et=0,Xx();var e=ii,t=ya,n=va,a=Km;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,ya=ii=null,rg(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ni=null),mo(n),t=t.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Fa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,l=Z.p,Z.p=2,M.T=null;try{for(var o=e.onRecoverableError,f=0;f<a.length;f++){var g=a[f];o(g.value,{componentStack:g.stack})}}finally{M.T=t,Z.p=l}}(va&3)!==0&&rs(),un(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Xc?Nr++:(Nr=0,Xc=e):Nr=0,Hr(0)}}function rg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pr(t)))}function rs(e){return ng(),ig(),ag(),lg()}function lg(){if(et!==5)return!1;var e=ii,t=Kc;Kc=0;var n=mo(va),a=M.T,l=Z.p;try{Z.p=32>n?32:n,M.T=null,n=Zc,Zc=null;var o=ii,f=va;if(et=0,ya=ii=null,va=0,(je&6)!==0)throw Error(c(331));var g=je;if(je|=4,$m(o.current),Gm(o,o.current,f,n),je=g,Hr(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Fa,o)}catch{}return!0}finally{Z.p=l,M.T=a,rg(e,t)}}function sg(e,t,n){t=Ht(n,t),t=Ec(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(er(e,2),un(e))}function _e(e,t,n){if(e.tag===3)sg(e,e,n);else for(;t!==null;){if(t.tag===3){sg(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ni===null||!ni.has(a))){e=Ht(n,e),n=dm(2),a=Xn(t,n,2),a!==null&&(fm(n,a,t,e),er(a,2),un(a));break}}t=t.return}}function Wc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new v1;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Vc=!0,l.add(n),e=E1.bind(null,e,t,n),t.then(e,e))}function E1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ge&n)===n&&(Oe===4||Oe===3&&(ge&62914560)===ge&&300>rn()-qc?(je&2)===0&&ja(e,0):Yc|=n,ba===ge&&(ba=0)),un(e)}function og(e,t){t===0&&(t=af()),e=ia(e,t),e!==null&&(er(e,t),un(e))}function _1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),og(e,n)}function T1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),og(e,n)}function k1(e,t){return co(e,t)}var ls=null,wa=null,Fc=!1,ss=!1,Ic=!1,Oi=0;function un(e){e!==wa&&e.next===null&&(wa===null?ls=wa=e:wa=wa.next=e),ss=!0,Fc||(Fc=!0,R1())}function Hr(e,t){if(!Ic&&ss){Ic=!0;do for(var n=!1,a=ls;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var o=0;else{var f=a.suspendedLanes,g=a.pingedLanes;o=(1<<31-St(42|e)+1)-1,o&=l&~(f&~g),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,fg(a,o))}else o=ge,o=hl(a,a===Te?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Ia(a,o)||(n=!0,fg(a,o));a=a.next}while(n);Ic=!1}}function A1(){cg()}function cg(){ss=Fc=!1;var e=0;Oi!==0&&(L1()&&(e=Oi),Oi=0);for(var t=rn(),n=null,a=ls;a!==null;){var l=a.next,o=ug(a,t);o===0?(a.next=null,n===null?ls=l:n.next=l,l===null&&(wa=n)):(n=a,(e!==0||(o&3)!==0)&&(ss=!0)),a=l}Hr(e)}function ug(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-St(o),g=1<<f,v=l[f];v===-1?((g&n)===0||(g&a)!==0)&&(l[f]=tb(g,t)):v<=t&&(e.expiredLanes|=g),o&=~g}if(t=Te,n=ge,n=hl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&uo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ia(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&uo(a),mo(n)){case 2:case 8:n=ef;break;case 32:n=ul;break;case 268435456:n=tf;break;default:n=ul}return a=dg.bind(null,e),n=co(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&uo(a),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(rs()&&e.callbackNode!==n)return null;var a=ge;return a=hl(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Xm(e,a,t),ug(e,rn()),e.callbackNode!=null&&e.callbackNode===n?dg.bind(null,e):null)}function fg(e,t){if(rs())return null;Xm(e,t,!0)}function R1(){G1(function(){(je&6)!==0?co(Id,A1):cg()})}function eu(){return Oi===0&&(Oi=nf()),Oi}function hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bl(""+e)}function mg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function C1(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var o=hg((l[dt]||null).action),f=a.submitter;f&&(t=(t=f[dt]||null)?hg(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var g=new Sl("action","action",null,a,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Oi!==0){var v=f?mg(l,f):new FormData(l);vc(n,{pending:!0,data:v,method:l.method,action:o},null,v)}}else typeof o=="function"&&(g.preventDefault(),v=f?mg(l,f):new FormData(l),vc(n,{pending:!0,data:v,method:l.method,action:o},o,v))},currentTarget:l}]})}}for(var tu=0;tu<Uo.length;tu++){var nu=Uo[tu],M1=nu.toLowerCase(),B1=nu[0].toUpperCase()+nu.slice(1);Wt(M1,"on"+B1)}Wt(Xf,"onAnimationEnd"),Wt(Qf,"onAnimationIteration"),Wt(Pf,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(Jb,"onTransitionRun"),Wt(Wb,"onTransitionStart"),Wt(Fb,"onTransitionCancel"),Wt(Jf,"onTransitionEnd"),Xi("onMouseEnter",["mouseout","mouseover"]),Xi("onMouseLeave",["mouseout","mouseover"]),Xi("onPointerEnter",["pointerout","pointerover"]),Xi("onPointerLeave",["pointerout","pointerover"]),yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lr));function gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var o=void 0;if(t)for(var f=a.length-1;0<=f;f--){var g=a[f],v=g.instance,_=g.currentTarget;if(g=g.listener,v!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=_;try{o(l)}catch(B){Ql(B)}l.currentTarget=null,o=v}else for(f=0;f<a.length;f++){if(g=a[f],v=g.instance,_=g.currentTarget,g=g.listener,v!==o&&l.isPropagationStopped())break e;o=g,l.currentTarget=_;try{o(l)}catch(B){Ql(B)}l.currentTarget=null,o=v}}}}function he(e,t){var n=t[go];n===void 0&&(n=t[go]=new Set);var a=e+"__bubble";n.has(a)||(pg(t,e,2,!1),n.add(a))}function iu(e,t,n){var a=0;t&&(a|=4),pg(n,e,a,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[os]){e[os]=!0,cf.forEach(function(n){n!=="selectionchange"&&(D1.has(n)||iu(n,!1,e),iu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,iu("selectionchange",!1,t))}}function pg(e,t,n,a){switch(Gg(t)){case 2:var l=sy;break;case 8:l=oy;break;default:l=bu}n=l.bind(null,t,n,e),l=void 0,!_o||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ru(e,t,n,a,l){var o=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var g=a.stateNode.containerInfo;if(g===l)break;if(f===4)for(f=a.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;g!==null;){if(f=qi(g),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){a=o=f;continue e}g=g.parentNode}}a=a.return}wf(function(){var _=o,B=zo(n),N=[];e:{var T=Wf.get(e);if(T!==void 0){var k=Sl,re=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":k=kb;break;case"focusin":re="focus",k=Ro;break;case"focusout":re="blur",k=Ro;break;case"beforeblur":case"afterblur":k=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Cb;break;case Xf:case Qf:case Pf:k=yb;break;case Jf:k=Bb;break;case"scroll":case"scrollend":k=mb;break;case"wheel":k=Ob;break;case"copy":case"cut":case"paste":k=jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=kf;break;case"toggle":case"beforetoggle":k=Hb}var ne=(t&4)!==0,Ee=!ne&&(e==="scroll"||e==="scrollend"),z=ne?T!==null?T+"Capture":null:T;ne=[];for(var S=_,E;S!==null;){var O=S;if(E=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||E===null||z===null||(O=ir(S,z),O!=null&&ne.push(Ur(S,O,E))),Ee)break;S=S.return}0<ne.length&&(T=new k(T,re,null,n,B),N.push({event:T,listeners:ne}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",T&&n!==wo&&(re=n.relatedTarget||n.fromElement)&&(qi(re)||re[$i]))break e;if((k||T)&&(T=B.window===B?B:(T=B.ownerDocument)?T.defaultView||T.parentWindow:window,k?(re=n.relatedTarget||n.toElement,k=_,re=re?qi(re):null,re!==null&&(Ee=m(re),ne=re.tag,re!==Ee||ne!==5&&ne!==27&&ne!==6)&&(re=null)):(k=null,re=_),k!==re)){if(ne=_f,O="onMouseLeave",z="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ne=kf,O="onPointerLeave",z="onPointerEnter",S="pointer"),Ee=k==null?T:nr(k),E=re==null?T:nr(re),T=new ne(O,S+"leave",k,n,B),T.target=Ee,T.relatedTarget=E,O=null,qi(B)===_&&(ne=new ne(z,S+"enter",re,n,B),ne.target=E,ne.relatedTarget=Ee,O=ne),Ee=O,k&&re)t:{for(ne=k,z=re,S=0,E=ne;E;E=za(E))S++;for(E=0,O=z;O;O=za(O))E++;for(;0<S-E;)ne=za(ne),S--;for(;0<E-S;)z=za(z),E--;for(;S--;){if(ne===z||z!==null&&ne===z.alternate)break t;ne=za(ne),z=za(z)}ne=null}else ne=null;k!==null&&xg(N,T,k,ne,!1),re!==null&&Ee!==null&&xg(N,Ee,re,ne,!0)}}e:{if(T=_?nr(_):window,k=T.nodeName&&T.nodeName.toLowerCase(),k==="select"||k==="input"&&T.type==="file")var P=Nf;else if(Df(T))if(Hf)P=Xb;else{P=Kb;var ce=qb}else k=T.nodeName,!k||k.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?_&&So(_.elementType)&&(P=Nf):P=Zb;if(P&&(P=P(e,_))){Of(N,P,n,B);break e}ce&&ce(e,T,_),e==="focusout"&&_&&T.type==="number"&&_.memoizedProps.value!=null&&jo(T,"number",T.value)}switch(ce=_?nr(_):window,e){case"focusin":(Df(ce)||ce.contentEditable==="true")&&(ea=ce,No=_,dr=null);break;case"focusout":dr=No=ea=null;break;case"mousedown":Ho=!0;break;case"contextmenu":case"mouseup":case"dragend":Ho=!1,Kf(N,n,B);break;case"selectionchange":if(Pb)break;case"keydown":case"keyup":Kf(N,n,B)}var I;if(Mo)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Ii?Mf(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(Af&&n.locale!=="ko"&&(Ii||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Ii&&(I=zf()):($n=B,To="value"in $n?$n.value:$n.textContent,Ii=!0)),ce=cs(_,ae),0<ce.length&&(ae=new Tf(ae,e,null,n,B),N.push({event:ae,listeners:ce}),I?ae.data=I:(I=Bf(n),I!==null&&(ae.data=I)))),(I=Ub?Gb(e,n):Vb(e,n))&&(ae=cs(_,"onBeforeInput"),0<ae.length&&(ce=new Tf("onBeforeInput","beforeinput",null,n,B),N.push({event:ce,listeners:ae}),ce.data=I)),C1(N,e,_,n,B)}gg(N,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=ir(e,n),l!=null&&a.unshift(Ur(e,l,o)),l=ir(e,t),l!=null&&a.push(Ur(e,l,o))),e.tag===3)return a;e=e.return}return[]}function za(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,t,n,a,l){for(var o=t._reactName,f=[];n!==null&&n!==a;){var g=n,v=g.alternate,_=g.stateNode;if(g=g.tag,v!==null&&v===a)break;g!==5&&g!==26&&g!==27||_===null||(v=_,l?(_=ir(n,o),_!=null&&f.unshift(Ur(n,_,v))):l||(_=ir(n,o),_!=null&&f.push(Ur(n,_,v)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var O1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function bg(e){return(typeof e=="string"?e:""+e).replace(O1,`
`).replace(N1,"")}function yg(e,t){return t=bg(t),bg(e)===t}function us(){}function ze(e,t,n,a,l,o){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ji(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ji(e,""+a);break;case"className":gl(e,"class",a);break;case"tabIndex":gl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(e,n,a);break;case"style":jf(e,a,o);break;case"data":if(t!=="object"){gl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=bl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&ze(e,t,"name",l.name,l,null),ze(e,t,"formEncType",l.formEncType,l,null),ze(e,t,"formMethod",l.formMethod,l,null),ze(e,t,"formTarget",l.formTarget,l,null)):(ze(e,t,"encType",l.encType,l,null),ze(e,t,"method",l.method,l,null),ze(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=bl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=us);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=bl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":he("beforetoggle",e),he("toggle",e),ml(e,"popover",a);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ml(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=fb.get(n)||n,ml(e,n,a))}}function lu(e,t,n,a,l,o){switch(n){case"style":jf(e,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ji(e,a):(typeof a=="number"||typeof a=="bigint")&&Ji(e,""+a);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"onClick":a!=null&&(e.onclick=us);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[dt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof a=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ml(e,n,a)}}}function tt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var a=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var f=n[o];if(f!=null)switch(o){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,o,f,n,null)}}l&&ze(e,t,"srcSet",n.srcSet,n,null),a&&ze(e,t,"src",n.src,n,null);return;case"input":he("invalid",e);var g=o=f=l=null,v=null,_=null;for(a in n)if(n.hasOwnProperty(a)){var B=n[a];if(B!=null)switch(a){case"name":l=B;break;case"type":f=B;break;case"checked":v=B;break;case"defaultChecked":_=B;break;case"value":o=B;break;case"defaultValue":g=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:ze(e,t,a,B,n,null)}}xf(e,o,g,v,_,f,l,!1),pl(e);return;case"select":he("invalid",e),a=f=o=null;for(l in n)if(n.hasOwnProperty(l)&&(g=n[l],g!=null))switch(l){case"value":o=g;break;case"defaultValue":f=g;break;case"multiple":a=g;default:ze(e,t,l,g,n,null)}t=o,n=f,e.multiple=!!a,t!=null?Pi(e,!!a,t,!1):n!=null&&Pi(e,!!a,n,!0);return;case"textarea":he("invalid",e),o=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(g=n[f],g!=null))switch(f){case"value":a=g;break;case"defaultValue":l=g;break;case"children":o=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:ze(e,t,f,g,n,null)}yf(e,a,l,o),pl(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ze(e,t,v,a,n,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(a=0;a<Lr.length;a++)he(Lr[a],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(a=n[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ze(e,t,_,a,n,null)}return;default:if(So(t)){for(B in n)n.hasOwnProperty(B)&&(a=n[B],a!==void 0&&lu(e,t,B,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&ze(e,t,g,a,n,null))}function H1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,f=null,g=null,v=null,_=null,B=null;for(k in n){var N=n[k];if(n.hasOwnProperty(k)&&N!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":v=N;default:a.hasOwnProperty(k)||ze(e,t,k,null,a,N)}}for(var T in a){var k=a[T];if(N=n[T],a.hasOwnProperty(T)&&(k!=null||N!=null))switch(T){case"type":o=k;break;case"name":l=k;break;case"checked":_=k;break;case"defaultChecked":B=k;break;case"value":f=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:k!==N&&ze(e,t,T,k,a,N)}}vo(e,f,g,v,_,B,o,l);return;case"select":k=f=g=T=null;for(o in n)if(v=n[o],n.hasOwnProperty(o)&&v!=null)switch(o){case"value":break;case"multiple":k=v;default:a.hasOwnProperty(o)||ze(e,t,o,null,a,v)}for(l in a)if(o=a[l],v=n[l],a.hasOwnProperty(l)&&(o!=null||v!=null))switch(l){case"value":T=o;break;case"defaultValue":g=o;break;case"multiple":f=o;default:o!==v&&ze(e,t,l,o,a,v)}t=g,n=f,a=k,T!=null?Pi(e,!!n,T,!1):!!a!=!!n&&(t!=null?Pi(e,!!n,t,!0):Pi(e,!!n,n?[]:"",!1));return;case"textarea":k=T=null;for(g in n)if(l=n[g],n.hasOwnProperty(g)&&l!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ze(e,t,g,null,a,l)}for(f in a)if(l=a[f],o=n[f],a.hasOwnProperty(f)&&(l!=null||o!=null))switch(f){case"value":T=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&ze(e,t,f,l,a,o)}bf(e,T,k);return;case"option":for(var re in n)if(T=n[re],n.hasOwnProperty(re)&&T!=null&&!a.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:ze(e,t,re,null,a,T)}for(v in a)if(T=a[v],k=n[v],a.hasOwnProperty(v)&&T!==k&&(T!=null||k!=null))switch(v){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:ze(e,t,v,T,a,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)T=n[ne],n.hasOwnProperty(ne)&&T!=null&&!a.hasOwnProperty(ne)&&ze(e,t,ne,null,a,T);for(_ in a)if(T=a[_],k=n[_],a.hasOwnProperty(_)&&T!==k&&(T!=null||k!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:ze(e,t,_,T,a,k)}return;default:if(So(t)){for(var Ee in n)T=n[Ee],n.hasOwnProperty(Ee)&&T!==void 0&&!a.hasOwnProperty(Ee)&&lu(e,t,Ee,void 0,a,T);for(B in a)T=a[B],k=n[B],!a.hasOwnProperty(B)||T===k||T===void 0&&k===void 0||lu(e,t,B,T,a,k);return}}for(var z in n)T=n[z],n.hasOwnProperty(z)&&T!=null&&!a.hasOwnProperty(z)&&ze(e,t,z,null,a,T);for(N in a)T=a[N],k=n[N],!a.hasOwnProperty(N)||T===k||T==null&&k==null||ze(e,t,N,T,a,k)}var su=null,ou=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=null;function L1(){var e=window.event;return e&&e.type==="popstate"?e===uu?!1:(uu=e,!0):(uu=null,!1)}var Sg=typeof setTimeout=="function"?setTimeout:void 0,U1=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,G1=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(e){return wg.resolve(null).then(e).catch(V1)}:Sg;function V1(e){setTimeout(function(){throw e})}function ri(e){return e==="head"}function zg(e,t){var n=t,a=0,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&Gr(f.documentElement),n&2&&Gr(f.body),n&4)for(n=f.head,Gr(n),f=n.firstChild;f;){var g=f.nextSibling,v=f.nodeName;f[tr]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=g}}if(l===0){e.removeChild(o),Qr(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=o}while(n);Qr(t)}function du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":du(n),po(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Y1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[tr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function $1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=It(e.nextSibling),e===null))return null;return e}function fu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function q1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var hu=null;function Eg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function _g(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Gr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);po(e)}var $t=new Map,Tg=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=Z.d;Z.d={f:K1,r:Z1,D:X1,C:Q1,L:P1,m:J1,X:F1,S:W1,M:I1};function K1(){var e=Mn.f(),t=is();return e||t}function Z1(e){var t=Ki(e);t!==null&&t.tag===5&&t.type==="form"?Xh(t):Mn.r(e)}var Ea=typeof document>"u"?null:document;function kg(e,t,n){var a=Ea;if(a&&typeof t=="string"&&t){var l=Nt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Tg.has(l)||(Tg.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),tt(t,"link",e),Ze(t),a.head.appendChild(t)))}}function X1(e){Mn.D(e),kg("dns-prefetch",e,null)}function Q1(e,t){Mn.C(e,t),kg("preconnect",e,t)}function P1(e,t,n){Mn.L(e,t,n);var a=Ea;if(a&&e&&t){var l='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Nt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Nt(n.imageSizes)+'"]')):l+='[href="'+Nt(e)+'"]';var o=l;switch(t){case"style":o=_a(e);break;case"script":o=Ta(e)}$t.has(o)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$t.set(o,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Vr(o))||t==="script"&&a.querySelector(Yr(o))||(t=a.createElement("link"),tt(t,"link",e),Ze(t),a.head.appendChild(t)))}}function J1(e,t){Mn.m(e,t);var n=Ea;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Nt(a)+'"][href="'+Nt(e)+'"]',o=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ta(e)}if(!$t.has(o)&&(e=w({rel:"modulepreload",href:e},t),$t.set(o,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yr(o)))return}a=n.createElement("link"),tt(a,"link",e),Ze(a),n.head.appendChild(a)}}}function W1(e,t,n){Mn.S(e,t,n);var a=Ea;if(a&&e){var l=Zi(a).hoistableStyles,o=_a(e);t=t||"default";var f=l.get(o);if(!f){var g={loading:0,preload:null};if(f=a.querySelector(Vr(o)))g.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$t.get(o))&&mu(e,n);var v=f=a.createElement("link");Ze(v),tt(v,"link",e),v._p=new Promise(function(_,B){v.onload=_,v.onerror=B}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,hs(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:g},l.set(o,f)}}}function F1(e,t){Mn.X(e,t);var n=Ea;if(n&&e){var a=Zi(n).hoistableScripts,l=Ta(e),o=a.get(l);o||(o=n.querySelector(Yr(l)),o||(e=w({src:e,async:!0},t),(t=$t.get(l))&&gu(e,t),o=n.createElement("script"),Ze(o),tt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function I1(e,t){Mn.M(e,t);var n=Ea;if(n&&e){var a=Zi(n).hoistableScripts,l=Ta(e),o=a.get(l);o||(o=n.querySelector(Yr(l)),o||(e=w({src:e,async:!0,type:"module"},t),(t=$t.get(l))&&gu(e,t),o=n.createElement("script"),Ze(o),tt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(l,o))}}function Ag(e,t,n,a){var l=(l=ie.current)?fs(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=_a(n.href),n=Zi(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=_a(n.href);var o=Zi(l).hoistableStyles,f=o.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=l.querySelector(Vr(e)))&&!o._p&&(f.instance=o,f.state.loading=5),$t.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$t.set(e,n),o||ey(l,e,n,f.state))),t&&a===null)throw Error(c(528,""));return f}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(n),n=Zi(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _a(e){return'href="'+Nt(e)+'"'}function Vr(e){return'link[rel="stylesheet"]['+e+"]"}function Rg(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function ey(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),tt(t,"link",n),Ze(t),e.head.appendChild(t))}function Ta(e){return'[src="'+Nt(e)+'"]'}function Yr(e){return"script[async]"+e}function Cg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Nt(n.href)+'"]');if(a)return t.instance=a,Ze(a),a;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),tt(a,"style",l),hs(a,n.precedence,e),t.instance=a;case"stylesheet":l=_a(n.href);var o=e.querySelector(Vr(l));if(o)return t.state.loading|=4,t.instance=o,Ze(o),o;a=Rg(n),(l=$t.get(l))&&mu(a,l),o=(e.ownerDocument||e).createElement("link"),Ze(o);var f=o;return f._p=new Promise(function(g,v){f.onload=g,f.onerror=v}),tt(o,"link",a),t.state.loading|=4,hs(o,n.precedence,e),t.instance=o;case"script":return o=Ta(n.src),(l=e.querySelector(Yr(o)))?(t.instance=l,Ze(l),l):(a=n,(l=$t.get(o))&&(a=w({},n),gu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),tt(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,hs(a,n.precedence,e));return t.instance}function hs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,o=l,f=0;f<a.length;f++){var g=a[f];if(g.dataset.precedence===t)o=g;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ms=null;function Mg(e,t,n){if(ms===null){var a=new Map,l=ms=new Map;l.set(n,a)}else l=ms,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[tr]||o[it]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var g=a.get(f);g?g.push(o):a.set(f,[o])}}return a}function Bg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ty(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $r=null;function ny(){}function iy(e,t,n){if($r===null)throw Error(c(475));var a=$r;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=_a(n.href),o=e.querySelector(Vr(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=gs.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,Ze(o);return}o=e.ownerDocument||e,n=Rg(n),(l=$t.get(l))&&mu(n,l),o=o.createElement("link"),Ze(o);var f=o;f._p=new Promise(function(g,v){f.onload=g,f.onerror=v}),tt(o,"link",n),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=gs.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function ay(){if($r===null)throw Error(c(475));var e=$r;return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function pu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,t.forEach(ry,e),ps=null,gs.call(e))}function ry(e,t){if(!(t.state.loading&4)){var n=ps.get(e);if(n)var a=n.get(null);else{n=new Map,ps.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var f=l[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),o=n.get(f)||a,o===a&&n.set(null,l),n.set(f,l),this.count++,a=gs.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var qr={$$typeof:D,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ly(e,t,n,a,l,o,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Og(e,t,n,a,l,o,f,g,v,_,B,N){return e=new ly(e,t,n,f,g,v,_,N),t=1,o===!0&&(t|=24),o=zt(3,null,null,t),e.current=o,o.stateNode=e,t=Wo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:a,isDehydrated:n,cache:t},tc(o),e}function Ng(e){return e?(e=aa,e):aa}function Hg(e,t,n,a,l,o){l=Ng(l),a.context===null?a.context=l:a.pendingContext=l,a=Zn(t),a.payload={element:n},o=o===void 0?null:o,o!==null&&(a.callback=o),n=Xn(e,a,t),n!==null&&(At(n,e,t),vr(n,e,t))}function Lg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xu(e,t){Lg(e,t),(e=e.alternate)&&Lg(e,t)}function Ug(e){if(e.tag===13){var t=ia(e,67108864);t!==null&&At(t,e,67108864),xu(e,67108864)}}var xs=!0;function sy(e,t,n,a){var l=M.T;M.T=null;var o=Z.p;try{Z.p=2,bu(e,t,n,a)}finally{Z.p=o,M.T=l}}function oy(e,t,n,a){var l=M.T;M.T=null;var o=Z.p;try{Z.p=8,bu(e,t,n,a)}finally{Z.p=o,M.T=l}}function bu(e,t,n,a){if(xs){var l=yu(a);if(l===null)ru(e,t,a,bs,n),Vg(e,a);else if(uy(l,e,t,n,a))a.stopPropagation();else if(Vg(e,a),t&4&&-1<cy.indexOf(e)){for(;l!==null;){var o=Ki(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=bi(o.pendingLanes);if(f!==0){var g=o;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var v=1<<31-St(f);g.entanglements[1]|=v,f&=~v}un(o),(je&6)===0&&(ts=rn()+500,Hr(0))}}break;case 13:g=ia(o,2),g!==null&&At(g,o,2),is(),xu(o,2)}if(o=yu(a),o===null&&ru(e,t,a,bs,n),o===l)break;l=o}l!==null&&a.stopPropagation()}else ru(e,t,a,null,n)}}function yu(e){return e=zo(e),vu(e)}var bs=null;function vu(e){if(bs=null,e=qi(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bs=e,null}function Gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qx()){case Id:return 2;case ef:return 8;case ul:case Px:return 32;case tf:return 268435456;default:return 32}default:return 32}}var ju=!1,li=null,si=null,oi=null,Kr=new Map,Zr=new Map,ci=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(e,t){switch(e){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":oi=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Xr(e,t,n,a,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ki(t),t!==null&&Ug(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function uy(e,t,n,a,l){switch(t){case"focusin":return li=Xr(li,e,t,n,a,l),!0;case"dragenter":return si=Xr(si,e,t,n,a,l),!0;case"mouseover":return oi=Xr(oi,e,t,n,a,l),!0;case"pointerover":var o=l.pointerId;return Kr.set(o,Xr(Kr.get(o)||null,e,t,n,a,l)),!0;case"gotpointercapture":return o=l.pointerId,Zr.set(o,Xr(Zr.get(o)||null,e,t,n,a,l)),!0}return!1}function Yg(e){var t=qi(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,ib(e.priority,function(){if(n.tag===13){var a=kt();a=ho(a);var l=ia(n,a);l!==null&&At(l,n,a),xu(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);wo=a,n.target.dispatchEvent(a),wo=null}else return t=Ki(n),t!==null&&Ug(t),e.blockedOn=n,!1;t.shift()}return!0}function $g(e,t,n){ys(e)&&n.delete(t)}function dy(){ju=!1,li!==null&&ys(li)&&(li=null),si!==null&&ys(si)&&(si=null),oi!==null&&ys(oi)&&(oi=null),Kr.forEach($g),Zr.forEach($g)}function vs(e,t){e.blockedOn===t&&(e.blockedOn=null,ju||(ju=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,dy)))}var js=null;function qg(e){js!==e&&(js=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){js===e&&(js=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(vu(a||n)===null)continue;break}var o=Ki(n);o!==null&&(e.splice(t,3),t-=3,vc(o,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Qr(e){function t(v){return vs(v,e)}li!==null&&vs(li,e),si!==null&&vs(si,e),oi!==null&&vs(oi,e),Kr.forEach(t),Zr.forEach(t);for(var n=0;n<ci.length;n++){var a=ci[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&ci.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],o=n[a+1],f=l[dt]||null;if(typeof o=="function")f||qg(n);else if(f){var g=null;if(o&&o.hasAttribute("formAction")){if(l=o,f=o[dt]||null)g=f.formAction;else if(vu(l)!==null)continue}else g=f.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),qg(n)}}}function Su(e){this._internalRoot=e}Ss.prototype.render=Su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=kt();Hg(n,a,e,t,null,null)},Ss.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hg(e.current,2,null,e,null,null),is(),t[$i]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=sf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ci.length&&t!==0&&t<ci[n].priority;n++);ci.splice(n,0,e),n===0&&Yg(e)}};var Kg=s.version;if(Kg!=="19.1.0")throw Error(c(527,Kg,"19.1.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var fy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Fa=ws.inject(fy),jt=ws}catch{}}return Jr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",l=sm,o=om,f=cm,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=Og(e,1,!1,null,null,n,a,l,o,f,g,null),e[$i]=t.current,au(e),new Su(t)},Jr.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,l="",o=sm,f=om,g=cm,v=null,_=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(_=n.formState)),t=Og(e,1,!0,t,n??null,a,l,o,f,g,v,_),t.context=Ng(null),n=t.current,a=kt(),a=ho(a),l=Zn(a),l.callback=null,Xn(n,l,a),n=a,t.current.lanes=n,er(t,n),un(t),e[$i]=t.current,au(e),new Ss(t)},Jr.version="19.1.0",Jr}var t0;function wy(){if(t0)return Eu.exports;t0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Eu.exports=Sy(),Eu.exports}var zy=wy(),Fe=function(){return Fe=Object.assign||function(s){for(var u,c=1,d=arguments.length;c<d;c++){u=arguments[c];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(s[m]=u[m])}return s},Fe.apply(this,arguments)};function al(i,s,u){if(u||arguments.length===2)for(var c=0,d=s.length,m;c<d;c++)(m||!(c in s))&&(m||(m=Array.prototype.slice.call(s,0,c)),m[c]=s[c]);return i.concat(m||Array.prototype.slice.call(s))}var ke="-ms-",il="-moz-",ye="-webkit-",Z0="comm",Is="rule",Dd="decl",Ey="@import",X0="@keyframes",_y="@layer",Q0=Math.abs,Od=String.fromCharCode,vd=Object.assign;function Ty(i,s){return We(i,0)^45?(((s<<2^We(i,0))<<2^We(i,1))<<2^We(i,2))<<2^We(i,3):0}function P0(i){return i.trim()}function Nn(i,s){return(i=s.exec(i))?i[0]:i}function se(i,s,u){return i.replace(s,u)}function Hs(i,s,u){return i.indexOf(s,u)}function We(i,s){return i.charCodeAt(s)|0}function qa(i,s,u){return i.slice(s,u)}function fn(i){return i.length}function J0(i){return i.length}function tl(i,s){return s.push(i),i}function ky(i,s){return i.map(s).join("")}function n0(i,s){return i.filter(function(u){return!Nn(u,s)})}var eo=1,Ka=1,W0=0,qt=0,Ge=0,Qa="";function to(i,s,u,c,d,m,p,y){return{value:i,root:s,parent:u,type:c,props:d,children:m,line:eo,column:Ka,length:p,return:"",siblings:y}}function hi(i,s){return vd(to("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},s)}function ka(i){for(;i.root;)i=hi(i.root,{children:[i]});tl(i,i.siblings)}function Ay(){return Ge}function Ry(){return Ge=qt>0?We(Qa,--qt):0,Ka--,Ge===10&&(Ka=1,eo--),Ge}function tn(){return Ge=qt<W0?We(Qa,qt++):0,Ka++,Ge===10&&(Ka=1,eo++),Ge}function Ui(){return We(Qa,qt)}function Ls(){return qt}function no(i,s){return qa(Qa,i,s)}function jd(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cy(i){return eo=Ka=1,W0=fn(Qa=i),qt=0,[]}function My(i){return Qa="",i}function Au(i){return P0(no(qt-1,Sd(i===91?i+2:i===40?i+1:i)))}function By(i){for(;(Ge=Ui())&&Ge<33;)tn();return jd(i)>2||jd(Ge)>3?"":" "}function Dy(i,s){for(;--s&&tn()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return no(i,Ls()+(s<6&&Ui()==32&&tn()==32))}function Sd(i){for(;tn();)switch(Ge){case i:return qt;case 34:case 39:i!==34&&i!==39&&Sd(Ge);break;case 40:i===41&&Sd(i);break;case 92:tn();break}return qt}function Oy(i,s){for(;tn()&&i+Ge!==57;)if(i+Ge===84&&Ui()===47)break;return"/*"+no(s,qt-1)+"*"+Od(i===47?i:tn())}function Ny(i){for(;!jd(Ui());)tn();return no(i,qt)}function Hy(i){return My(Us("",null,null,null,[""],i=Cy(i),0,[0],i))}function Us(i,s,u,c,d,m,p,y,b){for(var x=0,w=0,R=p,C=0,V=0,Y=0,q=1,Q=1,G=1,W=0,D="",$=d,U=m,F=c,H=D;Q;)switch(Y=W,W=tn()){case 40:if(Y!=108&&We(H,R-1)==58){Hs(H+=se(Au(W),"&","&\f"),"&\f",Q0(x?y[x-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:H+=Au(W);break;case 9:case 10:case 13:case 32:H+=By(Y);break;case 92:H+=Dy(Ls()-1,7);continue;case 47:switch(Ui()){case 42:case 47:tl(Ly(Oy(tn(),Ls()),s,u,b),b);break;default:H+="/"}break;case 123*q:y[x++]=fn(H)*G;case 125*q:case 59:case 0:switch(W){case 0:case 125:Q=0;case 59+w:G==-1&&(H=se(H,/\f/g,"")),V>0&&fn(H)-R&&tl(V>32?a0(H+";",c,u,R-1,b):a0(se(H," ","")+";",c,u,R-2,b),b);break;case 59:H+=";";default:if(tl(F=i0(H,s,u,x,w,d,y,D,$=[],U=[],R,m),m),W===123)if(w===0)Us(H,s,F,F,$,m,R,y,U);else switch(C===99&&We(H,3)===110?100:C){case 100:case 108:case 109:case 115:Us(i,F,F,c&&tl(i0(i,F,F,0,0,d,y,D,d,$=[],R,U),U),d,U,R,y,c?$:U);break;default:Us(H,F,F,F,[""],U,0,y,U)}}x=w=V=0,q=G=1,D=H="",R=p;break;case 58:R=1+fn(H),V=Y;default:if(q<1){if(W==123)--q;else if(W==125&&q++==0&&Ry()==125)continue}switch(H+=Od(W),W*q){case 38:G=w>0?1:(H+="\f",-1);break;case 44:y[x++]=(fn(H)-1)*G,G=1;break;case 64:Ui()===45&&(H+=Au(tn())),C=Ui(),w=R=fn(D=H+=Ny(Ls())),W++;break;case 45:Y===45&&fn(H)==2&&(q=0)}}return m}function i0(i,s,u,c,d,m,p,y,b,x,w,R){for(var C=d-1,V=d===0?m:[""],Y=J0(V),q=0,Q=0,G=0;q<c;++q)for(var W=0,D=qa(i,C+1,C=Q0(Q=p[q])),$=i;W<Y;++W)($=P0(Q>0?V[W]+" "+D:se(D,/&\f/g,V[W])))&&(b[G++]=$);return to(i,s,u,d===0?Is:y,b,x,w,R)}function Ly(i,s,u,c){return to(i,s,u,Z0,Od(Ay()),qa(i,2,-2),0,c)}function a0(i,s,u,c,d){return to(i,s,u,Dd,qa(i,0,c),qa(i,c+1,-1),c,d)}function F0(i,s,u){switch(Ty(i,s)){case 5103:return ye+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+i+i;case 4789:return il+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+i+il+i+ke+i+i;case 5936:switch(We(i,s+11)){case 114:return ye+i+ke+se(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return ye+i+ke+se(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return ye+i+ke+se(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return ye+i+ke+i+i;case 6165:return ye+i+ke+"flex-"+i+i;case 5187:return ye+i+se(i,/(\w+).+(:[^]+)/,ye+"box-$1$2"+ke+"flex-$1$2")+i;case 5443:return ye+i+ke+"flex-item-"+se(i,/flex-|-self/g,"")+(Nn(i,/flex-|baseline/)?"":ke+"grid-row-"+se(i,/flex-|-self/g,""))+i;case 4675:return ye+i+ke+"flex-line-pack"+se(i,/align-content|flex-|-self/g,"")+i;case 5548:return ye+i+ke+se(i,"shrink","negative")+i;case 5292:return ye+i+ke+se(i,"basis","preferred-size")+i;case 6060:return ye+"box-"+se(i,"-grow","")+ye+i+ke+se(i,"grow","positive")+i;case 4554:return ye+se(i,/([^-])(transform)/g,"$1"+ye+"$2")+i;case 6187:return se(se(se(i,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),i,"")+i;case 5495:case 3959:return se(i,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return se(se(i,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+i+i;case 4200:if(!Nn(i,/flex-|baseline/))return ke+"grid-column-align"+qa(i,s)+i;break;case 2592:case 3360:return ke+se(i,"template-","")+i;case 4384:case 3616:return u&&u.some(function(c,d){return s=d,Nn(c.props,/grid-\w+-end/)})?~Hs(i+(u=u[s].value),"span",0)?i:ke+se(i,"-start","")+i+ke+"grid-row-span:"+(~Hs(u,"span",0)?Nn(u,/\d+/):+Nn(u,/\d+/)-+Nn(i,/\d+/))+";":ke+se(i,"-start","")+i;case 4896:case 4128:return u&&u.some(function(c){return Nn(c.props,/grid-\w+-start/)})?i:ke+se(se(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return se(i,/(.+)-inline(.+)/,ye+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(i)-1-s>6)switch(We(i,s+1)){case 109:if(We(i,s+4)!==45)break;case 102:return se(i,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+il+(We(i,s+3)==108?"$3":"$2-$3"))+i;case 115:return~Hs(i,"stretch",0)?F0(se(i,"stretch","fill-available"),s,u)+i:i}break;case 5152:case 5920:return se(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,m,p,y,b,x){return ke+d+":"+m+x+(p?ke+d+"-span:"+(y?b:+b-+m)+x:"")+i});case 4949:if(We(i,s+6)===121)return se(i,":",":"+ye)+i;break;case 6444:switch(We(i,We(i,14)===45?18:11)){case 120:return se(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(We(i,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+ke+"$2box$3")+i;case 100:return se(i,":",":"+ke)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(i,"scroll-","scroll-snap-")+i}return i}function Ks(i,s){for(var u="",c=0;c<i.length;c++)u+=s(i[c],c,i,s)||"";return u}function Uy(i,s,u,c){switch(i.type){case _y:if(i.children.length)break;case Ey:case Dd:return i.return=i.return||i.value;case Z0:return"";case X0:return i.return=i.value+"{"+Ks(i.children,c)+"}";case Is:if(!fn(i.value=i.props.join(",")))return""}return fn(u=Ks(i.children,c))?i.return=i.value+"{"+u+"}":""}function Gy(i){var s=J0(i);return function(u,c,d,m){for(var p="",y=0;y<s;y++)p+=i[y](u,c,d,m)||"";return p}}function Vy(i){return function(s){s.root||(s=s.return)&&i(s)}}function Yy(i,s,u,c){if(i.length>-1&&!i.return)switch(i.type){case Dd:i.return=F0(i.value,i.length,u);return;case X0:return Ks([hi(i,{value:se(i.value,"@","@"+ye)})],c);case Is:if(i.length)return ky(u=i.props,function(d){switch(Nn(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ka(hi(i,{props:[se(d,/:(read-\w+)/,":"+il+"$1")]})),ka(hi(i,{props:[d]})),vd(i,{props:n0(u,c)});break;case"::placeholder":ka(hi(i,{props:[se(d,/:(plac\w+)/,":"+ye+"input-$1")]})),ka(hi(i,{props:[se(d,/:(plac\w+)/,":"+il+"$1")]})),ka(hi(i,{props:[se(d,/:(plac\w+)/,ke+"input-$1")]})),ka(hi(i,{props:[d]})),vd(i,{props:n0(u,c)});break}return""})}}var $y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ct={},Za=typeof process<"u"&&Ct!==void 0&&(Ct.REACT_APP_SC_ATTR||Ct.SC_ATTR)||"data-styled",I0="active",ep="data-styled-version",io="6.1.19",Nd=`/*!sc*/
`,Zs=typeof window<"u"&&typeof document<"u",qy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ct.REACT_APP_SC_DISABLE_SPEEDY!==""?Ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ct!==void 0&&Ct.SC_DISABLE_SPEEDY!==void 0&&Ct.SC_DISABLE_SPEEDY!==""&&Ct.SC_DISABLE_SPEEDY!=="false"&&Ct.SC_DISABLE_SPEEDY),Ky={},ao=Object.freeze([]),Xa=Object.freeze({});function tp(i,s,u){return u===void 0&&(u=Xa),i.theme!==u.theme&&i.theme||s||u.theme}var np=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xy=/(^-|-$)/g;function r0(i){return i.replace(Zy,"-").replace(Xy,"")}var Qy=/(a)(d)/gi,zs=52,l0=function(i){return String.fromCharCode(i+(i>25?39:97))};function wd(i){var s,u="";for(s=Math.abs(i);s>zs;s=s/zs|0)u=l0(s%zs)+u;return(l0(s%zs)+u).replace(Qy,"$1-$2")}var Ru,ip=5381,Va=function(i,s){for(var u=s.length;u;)i=33*i^s.charCodeAt(--u);return i},ap=function(i){return Va(ip,i)};function rp(i){return wd(ap(i)>>>0)}function Py(i){return i.displayName||i.name||"Component"}function Cu(i){return typeof i=="string"&&!0}var lp=typeof Symbol=="function"&&Symbol.for,sp=lp?Symbol.for("react.memo"):60115,Jy=lp?Symbol.for("react.forward_ref"):60112,Wy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},op={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Iy=((Ru={})[Jy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ru[sp]=op,Ru);function s0(i){return("type"in(s=i)&&s.type.$$typeof)===sp?op:"$$typeof"in i?Iy[i.$$typeof]:Wy;var s}var ev=Object.defineProperty,tv=Object.getOwnPropertyNames,o0=Object.getOwnPropertySymbols,nv=Object.getOwnPropertyDescriptor,iv=Object.getPrototypeOf,c0=Object.prototype;function cp(i,s,u){if(typeof s!="string"){if(c0){var c=iv(s);c&&c!==c0&&cp(i,c,u)}var d=tv(s);o0&&(d=d.concat(o0(s)));for(var m=s0(i),p=s0(s),y=0;y<d.length;++y){var b=d[y];if(!(b in Fy||u&&u[b]||p&&b in p||m&&b in m)){var x=nv(s,b);try{ev(i,b,x)}catch{}}}}return i}function Gi(i){return typeof i=="function"}function Hd(i){return typeof i=="object"&&"styledComponentId"in i}function Li(i,s){return i&&s?"".concat(i," ").concat(s):i||s||""}function zd(i,s){if(i.length===0)return"";for(var u=i[0],c=1;c<i.length;c++)u+=i[c];return u}function rl(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ed(i,s,u){if(u===void 0&&(u=!1),!u&&!rl(i)&&!Array.isArray(i))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)i[c]=Ed(i[c],s[c]);else if(rl(s))for(var c in s)i[c]=Ed(i[c],s[c]);return i}function Ld(i,s){Object.defineProperty(i,"toString",{value:s})}function Vi(i){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var av=function(){function i(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return i.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},i.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,m=d;s>=m;)if((m<<=1)<0)throw Vi(16,"".concat(s));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var p=d;p<m;p++)this.groupSizes[p]=0}for(var y=this.indexOfGroup(s+1),b=(p=0,u.length);p<b;p++)this.tag.insertRule(y,u[p])&&(this.groupSizes[s]++,y++)},i.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),d=c+u;this.groupSizes[s]=0;for(var m=c;m<d;m++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],d=this.indexOfGroup(s),m=d+c,p=d;p<m;p++)u+="".concat(this.tag.getRule(p)).concat(Nd);return u},i}(),Gs=new Map,Xs=new Map,Vs=1,Es=function(i){if(Gs.has(i))return Gs.get(i);for(;Xs.has(Vs);)Vs++;var s=Vs++;return Gs.set(i,s),Xs.set(s,i),s},rv=function(i,s){Vs=s+1,Gs.set(i,s),Xs.set(s,i)},lv="style[".concat(Za,"][").concat(ep,'="').concat(io,'"]'),sv=new RegExp("^".concat(Za,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ov=function(i,s,u){for(var c,d=u.split(","),m=0,p=d.length;m<p;m++)(c=d[m])&&i.registerName(s,c)},cv=function(i,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(Nd),d=[],m=0,p=c.length;m<p;m++){var y=c[m].trim();if(y){var b=y.match(sv);if(b){var x=0|parseInt(b[1],10),w=b[2];x!==0&&(rv(w,x),ov(i,w,b[3]),i.getTag().insertRules(x,d)),d.length=0}else d.push(y)}}},u0=function(i){for(var s=document.querySelectorAll(lv),u=0,c=s.length;u<c;u++){var d=s[u];d&&d.getAttribute(Za)!==I0&&(cv(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function uv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var up=function(i){var s=document.head,u=i||s,c=document.createElement("style"),d=function(y){var b=Array.from(y.querySelectorAll("style[".concat(Za,"]")));return b[b.length-1]}(u),m=d!==void 0?d.nextSibling:null;c.setAttribute(Za,I0),c.setAttribute(ep,io);var p=uv();return p&&c.setAttribute("nonce",p),u.insertBefore(c,m),c},dv=function(){function i(s){this.element=up(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,d=0,m=c.length;d<m;d++){var p=c[d];if(p.ownerNode===u)return p}throw Vi(17)}(this.element),this.length=0}return i.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},i.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},i}(),fv=function(){function i(s){this.element=up(s),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},i.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},i}(),hv=function(){function i(s){this.rules=[],this.length=0}return i.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},i.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},i.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},i}(),d0=Zs,mv={isServer:!Zs,useCSSOMInjection:!qy},Qs=function(){function i(s,u,c){s===void 0&&(s=Xa),u===void 0&&(u={});var d=this;this.options=Fe(Fe({},mv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&Zs&&d0&&(d0=!1,u0(this)),Ld(this,function(){return function(m){for(var p=m.getTag(),y=p.length,b="",x=function(R){var C=function(G){return Xs.get(G)}(R);if(C===void 0)return"continue";var V=m.names.get(C),Y=p.getGroup(R);if(V===void 0||!V.size||Y.length===0)return"continue";var q="".concat(Za,".g").concat(R,'[id="').concat(C,'"]'),Q="";V!==void 0&&V.forEach(function(G){G.length>0&&(Q+="".concat(G,","))}),b+="".concat(Y).concat(q,'{content:"').concat(Q,'"}').concat(Nd)},w=0;w<y;w++)x(w);return b}(d)})}return i.registerId=function(s){return Es(s)},i.prototype.rehydrate=function(){!this.server&&Zs&&u0(this)},i.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new i(Fe(Fe({},this.options),s),this.gs,u&&this.names||void 0)},i.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,d=u.target;return u.isServer?new hv(d):c?new dv(d):new fv(d)}(this.options),new av(s)));var s},i.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},i.prototype.registerName=function(s,u){if(Es(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},i.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(Es(s),c)},i.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},i.prototype.clearRules=function(s){this.getTag().clearGroup(Es(s)),this.clearNames(s)},i.prototype.clearTag=function(){this.tag=void 0},i}(),gv=/&/g,pv=/^\s*\/\/.*$/gm;function dp(i,s){return i.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=dp(u.children,s)),u})}function xv(i){var s,u,c,d=Xa,m=d.options,p=m===void 0?Xa:m,y=d.plugins,b=y===void 0?ao:y,x=function(C,V,Y){return Y.startsWith(u)&&Y.endsWith(u)&&Y.replaceAll(u,"").length>0?".".concat(s):C},w=b.slice();w.push(function(C){C.type===Is&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(gv,u).replace(c,x))}),p.prefix&&w.push(Yy),w.push(Uy);var R=function(C,V,Y,q){V===void 0&&(V=""),Y===void 0&&(Y=""),q===void 0&&(q="&"),s=q,u=V,c=new RegExp("\\".concat(u,"\\b"),"g");var Q=C.replace(pv,""),G=Hy(Y||V?"".concat(Y," ").concat(V," { ").concat(Q," }"):Q);p.namespace&&(G=dp(G,p.namespace));var W=[];return Ks(G,Gy(w.concat(Vy(function(D){return W.push(D)})))),W};return R.hash=b.length?b.reduce(function(C,V){return V.name||Vi(15),Va(C,V.name)},ip).toString():"",R}var bv=new Qs,_d=xv(),fp=en.createContext({shouldForwardProp:void 0,styleSheet:bv,stylis:_d});fp.Consumer;en.createContext(void 0);function Td(){return A.useContext(fp)}var yv=function(){function i(s,u){var c=this;this.inject=function(d,m){m===void 0&&(m=_d);var p=c.name+m.hash;d.hasNameForId(c.id,p)||d.insertRules(c.id,p,m(c.rules,p,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,Ld(this,function(){throw Vi(12,String(c.name))})}return i.prototype.getName=function(s){return s===void 0&&(s=_d),this.name+s.hash},i}(),vv=function(i){return i>="A"&&i<="Z"};function f0(i){for(var s="",u=0;u<i.length;u++){var c=i[u];if(u===1&&c==="-"&&i[0]==="-")return i;vv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var hp=function(i){return i==null||i===!1||i===""},mp=function(i){var s,u,c=[];for(var d in i){var m=i[d];i.hasOwnProperty(d)&&!hp(m)&&(Array.isArray(m)&&m.isCss||Gi(m)?c.push("".concat(f0(d),":"),m,";"):rl(m)?c.push.apply(c,al(al(["".concat(d," {")],mp(m),!1),["}"],!1)):c.push("".concat(f0(d),": ").concat((s=d,(u=m)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in $y||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function mi(i,s,u,c){if(hp(i))return[];if(Hd(i))return[".".concat(i.styledComponentId)];if(Gi(i)){if(!Gi(m=i)||m.prototype&&m.prototype.isReactComponent||!s)return[i];var d=i(s);return mi(d,s,u,c)}var m;return i instanceof yv?u?(i.inject(u,c),[i.getName(c)]):[i]:rl(i)?mp(i):Array.isArray(i)?Array.prototype.concat.apply(ao,i.map(function(p){return mi(p,s,u,c)})):[i.toString()]}function gp(i){for(var s=0;s<i.length;s+=1){var u=i[s];if(Gi(u)&&!Hd(u))return!1}return!0}var jv=ap(io),Sv=function(){function i(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&gp(s),this.componentId=u,this.baseHash=Va(jv,u),this.baseStyle=c,Qs.registerId(u)}return i.prototype.generateAndInjectStyles=function(s,u,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=Li(d,this.staticRulesId);else{var m=zd(mi(this.rules,s,u,c)),p=wd(Va(this.baseHash,m)>>>0);if(!u.hasNameForId(this.componentId,p)){var y=c(m,".".concat(p),void 0,this.componentId);u.insertRules(this.componentId,p,y)}d=Li(d,p),this.staticRulesId=p}else{for(var b=Va(this.baseHash,c.hash),x="",w=0;w<this.rules.length;w++){var R=this.rules[w];if(typeof R=="string")x+=R;else if(R){var C=zd(mi(R,s,u,c));b=Va(b,C+w),x+=C}}if(x){var V=wd(b>>>0);u.hasNameForId(this.componentId,V)||u.insertRules(this.componentId,V,c(x,".".concat(V),void 0,this.componentId)),d=Li(d,V)}}return d},i}(),ll=en.createContext(void 0);ll.Consumer;function wv(i){var s=en.useContext(ll),u=A.useMemo(function(){return function(c,d){if(!c)throw Vi(14);if(Gi(c)){var m=c(d);return m}if(Array.isArray(c)||typeof c!="object")throw Vi(8);return d?Fe(Fe({},d),c):c}(i.theme,s)},[i.theme,s]);return i.children?en.createElement(ll.Provider,{value:u},i.children):null}var Mu={};function zv(i,s,u){var c=Hd(i),d=i,m=!Cu(i),p=s.attrs,y=p===void 0?ao:p,b=s.componentId,x=b===void 0?function($,U){var F=typeof $!="string"?"sc":r0($);Mu[F]=(Mu[F]||0)+1;var H="".concat(F,"-").concat(rp(io+F+Mu[F]));return U?"".concat(U,"-").concat(H):H}(s.displayName,s.parentComponentId):b,w=s.displayName,R=w===void 0?function($){return Cu($)?"styled.".concat($):"Styled(".concat(Py($),")")}(i):w,C=s.displayName&&s.componentId?"".concat(r0(s.displayName),"-").concat(s.componentId):s.componentId||x,V=c&&d.attrs?d.attrs.concat(y).filter(Boolean):y,Y=s.shouldForwardProp;if(c&&d.shouldForwardProp){var q=d.shouldForwardProp;if(s.shouldForwardProp){var Q=s.shouldForwardProp;Y=function($,U){return q($,U)&&Q($,U)}}else Y=q}var G=new Sv(u,C,c?d.componentStyle:void 0);function W($,U){return function(F,H,ve){var me=F.attrs,lt=F.componentStyle,ut=F.defaultProps,$e=F.foldedComponentIds,gn=F.styledComponentId,pn=F.target,qe=en.useContext(ll),M=Td(),Z=F.shouldForwardProp||M.shouldForwardProp,te=tp(H,qe,ut)||Xa,ue=function(de,ie,Ke){for(var be,nt=Fe(Fe({},ie),{className:void 0,theme:Ke}),xi=0;xi<de.length;xi+=1){var xn=Gi(be=de[xi])?be(nt):be;for(var Dt in xn)nt[Dt]=Dt==="className"?Li(nt[Dt],xn[Dt]):Dt==="style"?Fe(Fe({},nt[Dt]),xn[Dt]):xn[Dt]}return ie.className&&(nt.className=Li(nt.className,ie.className)),nt}(me,H,te),j=ue.as||pn,L={};for(var K in ue)ue[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&ue.theme===te||(K==="forwardedAs"?L.as=ue.forwardedAs:Z&&!Z(K,j)||(L[K]=ue[K]));var X=function(de,ie){var Ke=Td(),be=de.generateAndInjectStyles(ie,Ke.styleSheet,Ke.stylis);return be}(lt,ue),ee=Li($e,gn);return X&&(ee+=" "+X),ue.className&&(ee+=" "+ue.className),L[Cu(j)&&!np.has(j)?"class":"className"]=ee,ve&&(L.ref=ve),A.createElement(j,L)}(D,$,U)}W.displayName=R;var D=en.forwardRef(W);return D.attrs=V,D.componentStyle=G,D.displayName=R,D.shouldForwardProp=Y,D.foldedComponentIds=c?Li(d.foldedComponentIds,d.styledComponentId):"",D.styledComponentId=C,D.target=c?d.target:i,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=c?function(U){for(var F=[],H=1;H<arguments.length;H++)F[H-1]=arguments[H];for(var ve=0,me=F;ve<me.length;ve++)Ed(U,me[ve],!0);return U}({},d.defaultProps,$):$}}),Ld(D,function(){return".".concat(D.styledComponentId)}),m&&cp(D,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function h0(i,s){for(var u=[i[0]],c=0,d=s.length;c<d;c+=1)u.push(s[c],i[c+1]);return u}var m0=function(i){return Object.assign(i,{isCss:!0})};function pp(i){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Gi(i)||rl(i))return m0(mi(h0(ao,al([i],s,!0))));var c=i;return s.length===0&&c.length===1&&typeof c[0]=="string"?mi(c):m0(mi(h0(c,s)))}function kd(i,s,u){if(u===void 0&&(u=Xa),!s)throw Vi(1,s);var c=function(d){for(var m=[],p=1;p<arguments.length;p++)m[p-1]=arguments[p];return i(s,u,pp.apply(void 0,al([d],m,!1)))};return c.attrs=function(d){return kd(i,s,Fe(Fe({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return kd(i,s,Fe(Fe({},u),d))},c}var xp=function(i){return kd(zv,i)},h=xp;np.forEach(function(i){h[i]=xp(i)});var Ev=function(){function i(s,u){this.rules=s,this.componentId=u,this.isStatic=gp(s),Qs.registerId(this.componentId+1)}return i.prototype.createStyles=function(s,u,c,d){var m=d(zd(mi(this.rules,u,c,d)),""),p=this.componentId+s;c.insertRules(p,p,m)},i.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},i.prototype.renderStyles=function(s,u,c,d){s>2&&Qs.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,d)},i}();function _v(i){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=pp.apply(void 0,al([i],s,!1)),d="sc-global-".concat(rp(JSON.stringify(c))),m=new Ev(c,d),p=function(b){var x=Td(),w=en.useContext(ll),R=en.useRef(x.styleSheet.allocateGSInstance(d)).current;return x.styleSheet.server&&y(R,b,x.styleSheet,w,x.stylis),en.useLayoutEffect(function(){if(!x.styleSheet.server)return y(R,b,x.styleSheet,w,x.stylis),function(){return m.removeStyles(R,x.styleSheet)}},[R,b,x.styleSheet,w,x.stylis]),null};function y(b,x,w,R,C){if(m.isStatic)m.renderStyles(b,Ky,w,C);else{var V=Fe(Fe({},x),{theme:tp(x,R,p.defaultProps)});m.renderStyles(b,V,w,C)}}return en.memo(p)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g0="popstate";function Tv(i={}){function s(c,d){let{pathname:m,search:p,hash:y}=c.location;return Ad("",{pathname:m,search:p,hash:y},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:sl(d)}return Av(s,u,null,i)}function Me(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function Kt(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function kv(){return Math.random().toString(36).substring(2,10)}function p0(i,s){return{usr:i.state,key:i.key,idx:s}}function Ad(i,s,u=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof s=="string"?Pa(s):s,state:u,key:s&&s.key||c||kv()}}function sl({pathname:i="/",search:s="",hash:u=""}){return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Pa(i){let s={};if(i){let u=i.indexOf("#");u>=0&&(s.hash=i.substring(u),i=i.substring(0,u));let c=i.indexOf("?");c>=0&&(s.search=i.substring(c),i=i.substring(0,c)),i&&(s.pathname=i)}return s}function Av(i,s,u,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,p=d.history,y="POP",b=null,x=w();x==null&&(x=0,p.replaceState({...p.state,idx:x},""));function w(){return(p.state||{idx:null}).idx}function R(){y="POP";let Q=w(),G=Q==null?null:Q-x;x=Q,b&&b({action:y,location:q.location,delta:G})}function C(Q,G){y="PUSH";let W=Ad(q.location,Q,G);x=w()+1;let D=p0(W,x),$=q.createHref(W);try{p.pushState(D,"",$)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;d.location.assign($)}m&&b&&b({action:y,location:q.location,delta:1})}function V(Q,G){y="REPLACE";let W=Ad(q.location,Q,G);x=w();let D=p0(W,x),$=q.createHref(W);p.replaceState(D,"",$),m&&b&&b({action:y,location:q.location,delta:0})}function Y(Q){return Rv(Q)}let q={get action(){return y},get location(){return i(d,p)},listen(Q){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(g0,R),b=Q,()=>{d.removeEventListener(g0,R),b=null}},createHref(Q){return s(d,Q)},createURL:Y,encodeLocation(Q){let G=Y(Q);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:C,replace:V,go(Q){return p.go(Q)}};return q}function Rv(i,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Me(u,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:sl(i);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function bp(i,s,u="/"){return Cv(i,s,u,!1)}function Cv(i,s,u,c){let d=typeof s=="string"?Pa(s):s,m=Gn(d.pathname||"/",u);if(m==null)return null;let p=yp(i);Mv(p);let y=null;for(let b=0;y==null&&b<p.length;++b){let x=$v(m);y=Vv(p[b],x,c)}return y}function yp(i,s=[],u=[],c=""){let d=(m,p,y)=>{let b={relativePath:y===void 0?m.path||"":y,caseSensitive:m.caseSensitive===!0,childrenIndex:p,route:m};b.relativePath.startsWith("/")&&(Me(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length));let x=Hn([c,b.relativePath]),w=u.concat(b);m.children&&m.children.length>0&&(Me(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),yp(m.children,s,w,x)),!(m.path==null&&!m.index)&&s.push({path:x,score:Uv(x,m.index),routesMeta:w})};return i.forEach((m,p)=>{if(m.path===""||!m.path?.includes("?"))d(m,p);else for(let y of vp(m.path))d(m,p,y)}),s}function vp(i){let s=i.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),m=u.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let p=vp(c.join("/")),y=[];return y.push(...p.map(b=>b===""?m:[m,b].join("/"))),d&&y.push(...p),y.map(b=>i.startsWith("/")&&b===""?"/":b)}function Mv(i){i.sort((s,u)=>s.score!==u.score?u.score-s.score:Gv(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var Bv=/^:[\w-]+$/,Dv=3,Ov=2,Nv=1,Hv=10,Lv=-2,x0=i=>i==="*";function Uv(i,s){let u=i.split("/"),c=u.length;return u.some(x0)&&(c+=Lv),s&&(c+=Ov),u.filter(d=>!x0(d)).reduce((d,m)=>d+(Bv.test(m)?Dv:m===""?Nv:Hv),c)}function Gv(i,s){return i.length===s.length&&i.slice(0,-1).every((c,d)=>c===s[d])?i[i.length-1]-s[s.length-1]:0}function Vv(i,s,u=!1){let{routesMeta:c}=i,d={},m="/",p=[];for(let y=0;y<c.length;++y){let b=c[y],x=y===c.length-1,w=m==="/"?s:s.slice(m.length)||"/",R=Ps({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},w),C=b.route;if(!R&&x&&u&&!c[c.length-1].route.index&&(R=Ps({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},w)),!R)return null;Object.assign(d,R.params),p.push({params:d,pathname:Hn([m,R.pathname]),pathnameBase:Xv(Hn([m,R.pathnameBase])),route:C}),R.pathnameBase!=="/"&&(m=Hn([m,R.pathnameBase]))}return p}function Ps(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,c]=Yv(i.path,i.caseSensitive,i.end),d=s.match(u);if(!d)return null;let m=d[0],p=m.replace(/(.)\/+$/,"$1"),y=d.slice(1);return{params:c.reduce((x,{paramName:w,isOptional:R},C)=>{if(w==="*"){let Y=y[C]||"";p=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const V=y[C];return R&&!V?x[w]=void 0:x[w]=(V||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:p,pattern:i}}function Yv(i,s=!1,u=!0){Kt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,b)=>(c.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function $v(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Kt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),i}}function Gn(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=i.charAt(u);return c&&c!=="/"?null:i.slice(u)||"/"}function qv(i,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof i=="string"?Pa(i):i;return{pathname:u?u.startsWith("/")?u:Kv(u,s):s,search:Qv(c),hash:Pv(d)}}function Kv(i,s){let u=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Bu(i,s,u,c){return`Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zv(i){return i.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Ud(i){let s=Zv(i);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Gd(i,s,u,c=!1){let d;typeof i=="string"?d=Pa(i):(d={...i},Me(!d.pathname||!d.pathname.includes("?"),Bu("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Bu("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Bu("#","search","hash",d)));let m=i===""||d.pathname==="",p=m?"/":d.pathname,y;if(p==null)y=u;else{let R=s.length-1;if(!c&&p.startsWith("..")){let C=p.split("/");for(;C[0]==="..";)C.shift(),R-=1;d.pathname=C.join("/")}y=R>=0?s[R]:"/"}let b=qv(d,y),x=p&&p!=="/"&&p.endsWith("/"),w=(m||p===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(x||w)&&(b.pathname+="/"),b}var Hn=i=>i.join("/").replace(/\/\/+/g,"/"),Xv=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Qv=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Pv=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Jv(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var jp=["POST","PUT","PATCH","DELETE"];new Set(jp);var Wv=["GET",...jp];new Set(Wv);var Ja=A.createContext(null);Ja.displayName="DataRouter";var ro=A.createContext(null);ro.displayName="DataRouterState";A.createContext(!1);var Sp=A.createContext({isTransitioning:!1});Sp.displayName="ViewTransition";var Fv=A.createContext(new Map);Fv.displayName="Fetchers";var Iv=A.createContext(null);Iv.displayName="Await";var nn=A.createContext(null);nn.displayName="Navigation";var ol=A.createContext(null);ol.displayName="Location";var hn=A.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var Vd=A.createContext(null);Vd.displayName="RouteError";function ej(i,{relative:s}={}){Me(Wa(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=A.useContext(nn),{hash:d,pathname:m,search:p}=cl(i,{relative:s}),y=m;return u!=="/"&&(y=m==="/"?u:Hn([u,m])),c.createHref({pathname:y,search:p,hash:d})}function Wa(){return A.useContext(ol)!=null}function mn(){return Me(Wa(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(ol).location}var wp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zp(i){A.useContext(nn).static||A.useLayoutEffect(i)}function Yd(){let{isDataRoute:i}=A.useContext(hn);return i?hj():tj()}function tj(){Me(Wa(),"useNavigate() may be used only in the context of a <Router> component.");let i=A.useContext(Ja),{basename:s,navigator:u}=A.useContext(nn),{matches:c}=A.useContext(hn),{pathname:d}=mn(),m=JSON.stringify(Ud(c)),p=A.useRef(!1);return zp(()=>{p.current=!0}),A.useCallback((b,x={})=>{if(Kt(p.current,wp),!p.current)return;if(typeof b=="number"){u.go(b);return}let w=Gd(b,JSON.parse(m),d,x.relative==="path");i==null&&s!=="/"&&(w.pathname=w.pathname==="/"?s:Hn([s,w.pathname])),(x.replace?u.replace:u.push)(w,x.state,x)},[s,u,m,d,i])}A.createContext(null);function cl(i,{relative:s}={}){let{matches:u}=A.useContext(hn),{pathname:c}=mn(),d=JSON.stringify(Ud(u));return A.useMemo(()=>Gd(i,JSON.parse(d),c,s==="path"),[i,d,c,s])}function nj(i,s){return Ep(i,s)}function Ep(i,s,u,c){Me(Wa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=A.useContext(nn),{matches:m}=A.useContext(hn),p=m[m.length-1],y=p?p.params:{},b=p?p.pathname:"/",x=p?p.pathnameBase:"/",w=p&&p.route;{let G=w&&w.path||"";_p(b,!w||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let R=mn(),C;if(s){let G=typeof s=="string"?Pa(s):s;Me(x==="/"||G.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${G.pathname}" was given in the \`location\` prop.`),C=G}else C=R;let V=C.pathname||"/",Y=V;if(x!=="/"){let G=x.replace(/^\//,"").split("/");Y="/"+V.replace(/^\//,"").split("/").slice(G.length).join("/")}let q=bp(i,{pathname:Y});Kt(w||q!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Kt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=sj(q&&q.map(G=>Object.assign({},G,{params:Object.assign({},y,G.params),pathname:Hn([x,d.encodeLocation?d.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?x:Hn([x,d.encodeLocation?d.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),m,u,c);return s&&Q?A.createElement(ol.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},Q):Q}function ij(){let i=fj(),s=Jv(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},p=null;return console.error("Error handled by React Router default ErrorBoundary:",i),p=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:m},"ErrorBoundary")," or"," ",A.createElement("code",{style:m},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},s),u?A.createElement("pre",{style:d},u):null,p)}var aj=A.createElement(ij,null),rj=class extends A.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?A.createElement(hn.Provider,{value:this.props.routeContext},A.createElement(Vd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function lj({routeContext:i,match:s,children:u}){let c=A.useContext(Ja);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),A.createElement(hn.Provider,{value:i},u)}function sj(i,s=[],u=null,c=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let d=i,m=u?.errors;if(m!=null){let b=d.findIndex(x=>x.route.id&&m?.[x.route.id]!==void 0);Me(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let p=!1,y=-1;if(u)for(let b=0;b<d.length;b++){let x=d[b];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=b),x.route.id){let{loaderData:w,errors:R}=u,C=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!R||R[x.route.id]===void 0);if(x.route.lazy||C){p=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((b,x,w)=>{let R,C=!1,V=null,Y=null;u&&(R=m&&x.route.id?m[x.route.id]:void 0,V=x.route.errorElement||aj,p&&(y<0&&w===0?(_p("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,Y=null):y===w&&(C=!0,Y=x.route.hydrateFallbackElement||null)));let q=s.concat(d.slice(0,w+1)),Q=()=>{let G;return R?G=V:C?G=Y:x.route.Component?G=A.createElement(x.route.Component,null):x.route.element?G=x.route.element:G=b,A.createElement(lj,{match:x,routeContext:{outlet:b,matches:q,isDataRoute:u!=null},children:G})};return u&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?A.createElement(rj,{location:u.location,revalidation:u.revalidation,component:V,error:R,children:Q(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):Q()},null)}function $d(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oj(i){let s=A.useContext(Ja);return Me(s,$d(i)),s}function cj(i){let s=A.useContext(ro);return Me(s,$d(i)),s}function uj(i){let s=A.useContext(hn);return Me(s,$d(i)),s}function qd(i){let s=uj(i),u=s.matches[s.matches.length-1];return Me(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function dj(){return qd("useRouteId")}function fj(){let i=A.useContext(Vd),s=cj("useRouteError"),u=qd("useRouteError");return i!==void 0?i:s.errors?.[u]}function hj(){let{router:i}=oj("useNavigate"),s=qd("useNavigate"),u=A.useRef(!1);return zp(()=>{u.current=!0}),A.useCallback(async(d,m={})=>{Kt(u.current,wp),u.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:s,...m}))},[i,s])}var b0={};function _p(i,s,u){!s&&!b0[i]&&(b0[i]=!0,Kt(!1,u))}A.memo(mj);function mj({routes:i,future:s,state:u}){return Ep(i,void 0,u,s)}function Ys({to:i,replace:s,state:u,relative:c}){Me(Wa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=A.useContext(nn);Kt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=A.useContext(hn),{pathname:p}=mn(),y=Yd(),b=Gd(i,Ud(m),p,c==="path"),x=JSON.stringify(b);return A.useEffect(()=>{y(JSON.parse(x),{replace:s,state:u,relative:c})},[y,x,c,s,u]),null}function On(i){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gj({basename:i="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:m=!1}){Me(!Wa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=i.replace(/^\/*/,"/"),y=A.useMemo(()=>({basename:p,navigator:d,static:m,future:{}}),[p,d,m]);typeof u=="string"&&(u=Pa(u));let{pathname:b="/",search:x="",hash:w="",state:R=null,key:C="default"}=u,V=A.useMemo(()=>{let Y=Gn(b,p);return Y==null?null:{location:{pathname:Y,search:x,hash:w,state:R,key:C},navigationType:c}},[p,b,x,w,R,C,c]);return Kt(V!=null,`<Router basename="${p}"> is not able to match the URL "${b}${x}${w}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:A.createElement(nn.Provider,{value:y},A.createElement(ol.Provider,{children:s,value:V}))}function pj({children:i,location:s}){return nj(Rd(i),s)}function Rd(i,s=[]){let u=[];return A.Children.forEach(i,(c,d)=>{if(!A.isValidElement(c))return;let m=[...s,d];if(c.type===A.Fragment){u.push.apply(u,Rd(c.props.children,m));return}Me(c.type===On,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!c.props.index||!c.props.children,"An index route cannot have child routes.");let p={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(p.children=Rd(c.props.children,m)),u.push(p)}),u}var $s="get",qs="application/x-www-form-urlencoded";function lo(i){return i!=null&&typeof i.tagName=="string"}function xj(i){return lo(i)&&i.tagName.toLowerCase()==="button"}function bj(i){return lo(i)&&i.tagName.toLowerCase()==="form"}function yj(i){return lo(i)&&i.tagName.toLowerCase()==="input"}function vj(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function jj(i,s){return i.button===0&&(!s||s==="_self")&&!vj(i)}function Cd(i=""){return new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((s,u)=>{let c=i[u];return s.concat(Array.isArray(c)?c.map(d=>[u,d]):[[u,c]])},[]))}function Sj(i,s){let u=Cd(i);return s&&s.forEach((c,d)=>{u.has(d)||s.getAll(d).forEach(m=>{u.append(d,m)})}),u}var _s=null;function wj(){if(_s===null)try{new FormData(document.createElement("form"),0),_s=!1}catch{_s=!0}return _s}var zj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Du(i){return i!=null&&!zj.has(i)?(Kt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qs}"`),null):i}function Ej(i,s){let u,c,d,m,p;if(bj(i)){let y=i.getAttribute("action");c=y?Gn(y,s):null,u=i.getAttribute("method")||$s,d=Du(i.getAttribute("enctype"))||qs,m=new FormData(i)}else if(xj(i)||yj(i)&&(i.type==="submit"||i.type==="image")){let y=i.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||y.getAttribute("action");if(c=b?Gn(b,s):null,u=i.getAttribute("formmethod")||y.getAttribute("method")||$s,d=Du(i.getAttribute("formenctype"))||Du(y.getAttribute("enctype"))||qs,m=new FormData(y,i),!wj()){let{name:x,type:w,value:R}=i;if(w==="image"){let C=x?`${x}.`:"";m.append(`${C}x`,"0"),m.append(`${C}y`,"0")}else x&&m.append(x,R)}}else{if(lo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=$s,c=null,d=qs,p=i}return m&&d==="text/plain"&&(p=m,m=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:m,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kd(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function _j(i,s,u){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Gn(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function Tj(i,s){if(i.id in s)return s[i.id];try{let u=await import(i.module);return s[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kj(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Aj(i,s,u){let c=await Promise.all(i.map(async d=>{let m=s.routes[d.route.id];if(m){let p=await Tj(m,u);return p.links?p.links():[]}return[]}));return Bj(c.flat(1).filter(kj).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function y0(i,s,u,c,d,m){let p=(b,x)=>u[x]?b.route.id!==u[x].route.id:!0,y=(b,x)=>u[x].pathname!==b.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==b.params["*"];return m==="assets"?s.filter((b,x)=>p(b,x)||y(b,x)):m==="data"?s.filter((b,x)=>{let w=c.routes[b.route.id];if(!w||!w.hasLoader)return!1;if(p(b,x)||y(b,x))return!0;if(b.route.shouldRevalidate){let R=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Rj(i,s,{includeHydrateFallback:u}={}){return Cj(i.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function Cj(i){return[...new Set(i)]}function Mj(i){let s={},u=Object.keys(i).sort();for(let c of u)s[c]=i[c];return s}function Bj(i,s){let u=new Set;return new Set(s),i.reduce((c,d)=>{let m=JSON.stringify(Mj(d));return u.has(m)||(u.add(m),c.push({key:m,link:d})),c},[])}function Tp(){let i=A.useContext(Ja);return Kd(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Dj(){let i=A.useContext(ro);return Kd(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Zd=A.createContext(void 0);Zd.displayName="FrameworkContext";function kp(){let i=A.useContext(Zd);return Kd(i,"You must render this element inside a <HydratedRouter> element"),i}function Oj(i,s){let u=A.useContext(Zd),[c,d]=A.useState(!1),[m,p]=A.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:x,onMouseLeave:w,onTouchStart:R}=s,C=A.useRef(null);A.useEffect(()=>{if(i==="render"&&p(!0),i==="viewport"){let q=G=>{G.forEach(W=>{p(W.isIntersecting)})},Q=new IntersectionObserver(q,{threshold:.5});return C.current&&Q.observe(C.current),()=>{Q.disconnect()}}},[i]),A.useEffect(()=>{if(c){let q=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(q)}}},[c]);let V=()=>{d(!0)},Y=()=>{d(!1),p(!1)};return u?i!=="intent"?[m,C,{}]:[m,C,{onFocus:Wr(y,V),onBlur:Wr(b,Y),onMouseEnter:Wr(x,V),onMouseLeave:Wr(w,Y),onTouchStart:Wr(R,V)}]:[!1,C,{}]}function Wr(i,s){return u=>{i&&i(u),u.defaultPrevented||s(u)}}function Nj({page:i,...s}){let{router:u}=Tp(),c=A.useMemo(()=>bp(u.routes,i,u.basename),[u.routes,i,u.basename]);return c?A.createElement(Lj,{page:i,matches:c,...s}):null}function Hj(i){let{manifest:s,routeModules:u}=kp(),[c,d]=A.useState([]);return A.useEffect(()=>{let m=!1;return Aj(i,s,u).then(p=>{m||d(p)}),()=>{m=!0}},[i,s,u]),c}function Lj({page:i,matches:s,...u}){let c=mn(),{manifest:d,routeModules:m}=kp(),{basename:p}=Tp(),{loaderData:y,matches:b}=Dj(),x=A.useMemo(()=>y0(i,s,b,d,c,"data"),[i,s,b,d,c]),w=A.useMemo(()=>y0(i,s,b,d,c,"assets"),[i,s,b,d,c]),R=A.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let Y=new Set,q=!1;if(s.forEach(G=>{let W=d.routes[G.route.id];!W||!W.hasLoader||(!x.some(D=>D.route.id===G.route.id)&&G.route.id in y&&m[G.route.id]?.shouldRevalidate||W.hasClientLoader?q=!0:Y.add(G.route.id))}),Y.size===0)return[];let Q=_j(i,p,"data");return q&&Y.size>0&&Q.searchParams.set("_routes",s.filter(G=>Y.has(G.route.id)).map(G=>G.route.id).join(",")),[Q.pathname+Q.search]},[p,y,c,d,x,s,i,m]),C=A.useMemo(()=>Rj(w,d),[w,d]),V=Hj(w);return A.createElement(A.Fragment,null,R.map(Y=>A.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...u})),C.map(Y=>A.createElement("link",{key:Y,rel:"modulepreload",href:Y,...u})),V.map(({key:Y,link:q})=>A.createElement("link",{key:Y,...q})))}function Uj(...i){return s=>{i.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Ap=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ap&&(window.__reactRouterVersion="7.7.1")}catch{}function Gj({basename:i,children:s,window:u}){let c=A.useRef();c.current==null&&(c.current=Tv({window:u,v5Compat:!0}));let d=c.current,[m,p]=A.useState({action:d.action,location:d.location}),y=A.useCallback(b=>{A.startTransition(()=>p(b))},[p]);return A.useLayoutEffect(()=>d.listen(y),[d,y]),A.createElement(gj,{basename:i,children:s,location:m.location,navigationType:m.action,navigator:d})}var Rp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,so=A.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:m,replace:p,state:y,target:b,to:x,preventScrollReset:w,viewTransition:R,...C},V){let{basename:Y}=A.useContext(nn),q=typeof x=="string"&&Rp.test(x),Q,G=!1;if(typeof x=="string"&&q&&(Q=x,Ap))try{let me=new URL(window.location.href),lt=x.startsWith("//")?new URL(me.protocol+x):new URL(x),ut=Gn(lt.pathname,Y);lt.origin===me.origin&&ut!=null?x=ut+lt.search+lt.hash:G=!0}catch{Kt(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=ej(x,{relative:d}),[D,$,U]=Oj(c,C),F=qj(x,{replace:p,state:y,target:b,preventScrollReset:w,relative:d,viewTransition:R});function H(me){s&&s(me),me.defaultPrevented||F(me)}let ve=A.createElement("a",{...C,...U,href:Q||W,onClick:G||m?s:H,ref:Uj(V,$),target:b,"data-discover":!q&&u==="render"?"true":void 0});return D&&!q?A.createElement(A.Fragment,null,ve,A.createElement(Nj,{page:W})):ve});so.displayName="Link";var Vj=A.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:m,to:p,viewTransition:y,children:b,...x},w){let R=cl(p,{relative:x.relative}),C=mn(),V=A.useContext(ro),{navigator:Y,basename:q}=A.useContext(nn),Q=V!=null&&Pj(R)&&y===!0,G=Y.encodeLocation?Y.encodeLocation(R).pathname:R.pathname,W=C.pathname,D=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;u||(W=W.toLowerCase(),D=D?D.toLowerCase():null,G=G.toLowerCase()),D&&q&&(D=Gn(D,q)||D);const $=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let U=W===G||!d&&W.startsWith(G)&&W.charAt($)==="/",F=D!=null&&(D===G||!d&&D.startsWith(G)&&D.charAt(G.length)==="/"),H={isActive:U,isPending:F,isTransitioning:Q},ve=U?s:void 0,me;typeof c=="function"?me=c(H):me=[c,U?"active":null,F?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let lt=typeof m=="function"?m(H):m;return A.createElement(so,{...x,"aria-current":ve,className:me,ref:w,style:lt,to:p,viewTransition:y},typeof b=="function"?b(H):b)});Vj.displayName="NavLink";var Yj=A.forwardRef(({discover:i="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:m,method:p=$s,action:y,onSubmit:b,relative:x,preventScrollReset:w,viewTransition:R,...C},V)=>{let Y=Xj(),q=Qj(y,{relative:x}),Q=p.toLowerCase()==="get"?"get":"post",G=typeof y=="string"&&Rp.test(y),W=D=>{if(b&&b(D),D.defaultPrevented)return;D.preventDefault();let $=D.nativeEvent.submitter,U=$?.getAttribute("formmethod")||p;Y($||D.currentTarget,{fetcherKey:s,method:U,navigate:u,replace:d,state:m,relative:x,preventScrollReset:w,viewTransition:R})};return A.createElement("form",{ref:V,method:Q,action:q,onSubmit:c?b:W,...C,"data-discover":!G&&i==="render"?"true":void 0})});Yj.displayName="Form";function $j(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cp(i){let s=A.useContext(Ja);return Me(s,$j(i)),s}function qj(i,{target:s,replace:u,state:c,preventScrollReset:d,relative:m,viewTransition:p}={}){let y=Yd(),b=mn(),x=cl(i,{relative:m});return A.useCallback(w=>{if(jj(w,s)){w.preventDefault();let R=u!==void 0?u:sl(b)===sl(x);y(i,{replace:R,state:c,preventScrollReset:d,relative:m,viewTransition:p})}},[b,y,x,u,c,s,i,d,m,p])}function Mp(i){Kt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=A.useRef(Cd(i)),u=A.useRef(!1),c=mn(),d=A.useMemo(()=>Sj(c.search,u.current?null:s.current),[c.search]),m=Yd(),p=A.useCallback((y,b)=>{const x=Cd(typeof y=="function"?y(new URLSearchParams(d)):y);u.current=!0,m("?"+x,b)},[m,d]);return[d,p]}var Kj=0,Zj=()=>`__${String(++Kj)}__`;function Xj(){let{router:i}=Cp("useSubmit"),{basename:s}=A.useContext(nn),u=dj();return A.useCallback(async(c,d={})=>{let{action:m,method:p,encType:y,formData:b,body:x}=Ej(c,s);if(d.navigate===!1){let w=d.fetcherKey||Zj();await i.fetch(w,u,d.action||m,{preventScrollReset:d.preventScrollReset,formData:b,body:x,formMethod:d.method||p,formEncType:d.encType||y,flushSync:d.flushSync})}else await i.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:b,body:x,formMethod:d.method||p,formEncType:d.encType||y,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,s,u])}function Qj(i,{relative:s}={}){let{basename:u}=A.useContext(nn),c=A.useContext(hn);Me(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...cl(i||".",{relative:s})},p=mn();if(i==null){m.search=p.search;let y=new URLSearchParams(m.search),b=y.getAll("index");if(b.some(w=>w==="")){y.delete("index"),b.filter(R=>R).forEach(R=>y.append("index",R));let w=y.toString();m.search=w?`?${w}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Hn([u,m.pathname])),sl(m)}function Pj(i,{relative:s}={}){let u=A.useContext(Sp);Me(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Cp("useViewTransitionState"),d=cl(i,{relative:s});if(!u.isTransitioning)return!1;let m=Gn(u.currentLocation.pathname,c)||u.currentLocation.pathname,p=Gn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Ps(d.pathname,p)!=null||Ps(d.pathname,m)!=null}const Jj="/assets/logo-BY-LKRi7.png",Wj=h.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,Fj=h.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,Ij=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,eS=h.img`
  height: 40px;
  width: auto;
`,tS=h.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${i=>i.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,nS=h.div`
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
    display: ${i=>i.$open?"flex":"none"};
  }
`,Ou=h(so)`
  text-decoration: none;
  color: ${i=>i.$active?i.theme.colors.primary:"#333"};
  font-weight: ${i=>i.$active?"700":"600"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${i=>i.$active?`2px solid ${i.theme.colors.primary}`:"2px solid transparent"};

  &:hover {
    color: ${i=>i.theme.colors.primary};
    background: rgba(217, 36, 95, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    background: rgba(217, 36, 95, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`,iS=h.button`
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
`;function Fr(){const i=mn(),[s,u]=A.useState(!1);return r.jsx(Wj,{children:r.jsxs(Fj,{children:[r.jsx(Ou,{to:"/",onClick:()=>u(!1),children:r.jsxs(Ij,{children:[r.jsx(eS,{src:Jj,alt:"SCKW Logo"}),r.jsx(tS,{children:"SC Konstanz-Wollmatingen e. V."})]})}),r.jsxs(iS,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>u(d=>!d),children:["Menü",r.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),r.jsxs(nS,{id:"mobile-nav",$open:s,children:[r.jsx(Ou,{to:"/sponsoring",$active:i.pathname==="/sponsoring"||i.pathname==="/sponsoring-v2",onClick:()=>u(!1),children:"🤝 Sponsoring"}),r.jsx(Ou,{to:"/jobs",$active:i.pathname==="/jobs",onClick:()=>u(!1),children:"💼 Jobbörse"}),!1]})]})})}const aS=h.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Nu=h.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,rS=h(so)`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,lS=h.div`
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
`,sS=h.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function Xd(){return r.jsx(aS,{children:r.jsxs(lS,{children:[r.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",r.jsx(Nu,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),r.jsxs(sS,{"aria-label":"Rechtliches",children:[r.jsx(rS,{to:"/sponsoring-v1",children:"Sponsoring-Archiv"}),r.jsx(Nu,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),r.jsx(Nu,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const Ln=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),oS=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,cS=h.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${i=>i.isVergeben?"0.8":"1"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`,uS=h.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,dS=h.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,fS=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,hS=h.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,mS=h.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,gS=h.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,pS=h.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  line-height: 1.5;
  color: ${i=>i.isHighlight?"#e10073":"#222"};
  font-weight: ${i=>i.isHighlight?"600":"400"};
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`,xS=h.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,bS=h.span`
  flex: 1;
`,yS=h.a`
  display: inline-block;
  background: ${i=>i.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 1.75rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${i=>i.isVergeben?"none":"auto"};
  margin-top: auto;
  border: ${i=>i.isVergeben?"2px solid #ccc":"2px solid #e10073"};
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${i=>i.isVergeben?"#ccc":"#b8005a"};
    border-color: ${i=>i.isVergeben?"#ccc":"#b8005a"};
    transform: ${i=>i.isVergeben?"none":"translateY(-1px)"};
    box-shadow: ${i=>i.isVergeben?"none":"0 4px 12px rgba(225, 0, 115, 0.3)"};
  }

  &:focus {
    outline: 3px solid
      ${i=>i.isVergeben?"#ccc":"rgba(225, 0, 115, 0.5)"};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
    padding: 1rem 1.5rem;
  }
`,vS=h.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,jS=h.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,SS=h.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,wS=h.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,zS=h.a`
  display: inline-block;
  background: #f0f0f0;
  color: #e10073;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;

  &:hover {
    background: #e10073;
    color: white;
    border-color: #e10073;
    transform: translateY(-1px);
  }
`,ES="sponsoring@sckw.de";function Ya({packages:i}){const s=p=>p.toLowerCase().includes("verfügbar")?"verfügbar":p.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=p=>{const y=p.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return y?y[0]:""},c=p=>{const y=p.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),b=encodeURIComponent(`Interesse am Sponsoring-Paket "${y}"`),x=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${y}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${ES}?subject=${b}&body=${x}`},d=p=>{const y=p.maxSponsors-(p.sponsors?.length||0);return{availableSlots:y,isFullyBooked:y===0}},m=i.filter(p=>!p.title.includes("Platz-Renovierung"));return r.jsx(oS,{children:m.map((p,y)=>{const{isFullyBooked:b}=d(p),x=s(p.status),w=x==="vergeben"||b,R=b?"vergeben":x,C=p.keyBenefits||[];return r.jsxs(cS,{isVergeben:w,children:[r.jsxs(uS,{children:[r.jsx(dS,{children:u(p.title)}),r.jsx(fS,{children:p.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!w&&r.jsx(hS,{children:p.price}),r.jsx(mS,{status:R,children:R==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),w&&p.sponsors&&p.sponsors.length>0?r.jsxs(vS,{children:[p.sponsors[0].image&&r.jsx(jS,{src:`/sponsors/${p.sponsors[0].image}`,alt:p.sponsors[0].name}),r.jsx(SS,{children:p.sponsors[0].name}),r.jsxs(wS,{children:["Hauptsponsor seit ",p.sponsors[0].since]}),p.sponsors[0].website&&r.jsx(zS,{href:p.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):r.jsx(gS,{children:C.map((V,Y)=>r.jsxs(pS,{isHighlight:V.highlight,children:[r.jsx(xS,{children:V.icon}),r.jsx(bS,{children:V.text})]},Y))}),r.jsx(yS,{href:w?void 0:c(p.title),isVergeben:w,children:w?"Vergeben":"Jetzt anfragen"})]},y)})})}const _S=h.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${i=>i.theme.colors.bgMuted};
  border: 1px solid ${i=>i.theme.colors.border};
  overflow: hidden;
`,TS=h.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,kS=h.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${i=>i.isOpen?i.theme.colors.bg:i.theme.colors.bgMuted};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: ${i=>i.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  span {
    text-align: left;
  }

  &:hover {
    background: ${i=>i.theme.colors.bg};
  }

  &:focus {
    outline: 2px solid #e10073;
    outline-offset: -2px;
  }
`,AS=h.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${i=>i.theme.colors.primary};
`,RS=h.div`
  background: ${i=>i.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,CS=h.div`
  padding: 1.5rem;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  color: ${i=>i.theme.colors.text};
  text-align: left;

  b {
    color: ${i=>i.theme.colors.primary};
    font-weight: 600;
  }

  br {
    margin-bottom: 0.5rem;
  }
`,MS=h.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,BS=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:r.jsxs(r.Fragment,{children:[r.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:r.jsxs(r.Fragment,{children:[r.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",r.jsx("br",{}),r.jsx("br",{}),r.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:r.jsx(r.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen - Sie müssen sich um nichts kümmern!"})}];function DS(){const[i,s]=A.useState([]),u=d=>{s(m=>m.includes(d)?m.filter(p=>p!==d):[...m,d])},c=(d,m)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),u(m))};return r.jsx(_S,{children:BS.map(d=>{const m=i.includes(d.id);return r.jsxs(TS,{children:[r.jsxs(kS,{isOpen:m,onClick:()=>u(d.id),onKeyDown:p=>c(p,d.id),"aria-expanded":m,"aria-controls":`accordion-content-${d.id}`,children:[r.jsxs("span",{children:[r.jsx(MS,{children:d.icon}),d.title]}),r.jsx(AS,{isOpen:m,children:"▼"})]}),r.jsx(RS,{isOpen:m,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:r.jsx(CS,{children:d.content})})]},d.id)})})}const Bp="/assets/cheerleading_0-DQQGXi0R.jpg",Dp="/assets/cheerleading_1-NkLBARmH.jpg",Op="/assets/cheerleading_2-CrezcZYL.jpg",Np="/assets/cheerleading_3-GN5rPHNN.jpg",Hp="/assets/1-ClVWb4ei.png",Lp="/assets/10-Bwp2eIye.png",Up="/assets/11-W061sOUI.png",Gp="/assets/12-TjJyzl8L.png",Vp="/assets/13-ChUUCdQQ.png",Yp="/assets/14-BVhdRr98.png",$p="/assets/2-CcfgIQYe.png",qp="/assets/3-DYiPkVd7.png",Kp="/assets/4-1upoqVoS.png",Zp="/assets/5-D0tadXAC.png",Xp="/assets/6-NJ4ELm_j.png",Qp="/assets/7-BXo4_Bcj.png",Pp="/assets/8-BbOqEnj_.png",Jp="/assets/9-CIK0gi9o.png",Wp="/assets/herren_0-BVVgyt1l.jpg",Fp="/assets/herren_1-B8ywOnNy.jpg",Ip="/assets/herren_10-DPVQsg9B.jpg",ex="/assets/herren_11-wfWG62H3.jpg",tx="/assets/herren_12-DEJSN2zG.jpg",nx="/assets/herren_13-F52vdukE.jpg",ix="/assets/herren_14-Cq9hoKfG.jpg",ax="/assets/herren_15-aYIFGauG.jpg",rx="/assets/herren_16-NYI2EaEN.jpg",lx="/assets/herren_17-B_52ysA2.jpg",sx="/assets/herren_18-DbwjVNKJ.jpg",ox="/assets/herren_19-BduD_J85.png",cx="/assets/herren_2--jFuixBF.jpg",ux="/assets/herren_3-BPz1zlkG.jpg",dx="/assets/herren_4-BZRrQaFr.jpg",fx="/assets/herren_5-D-QrfY2P.jpg",hx="/assets/herren_6-DWQvi6Am.jpg",mx="/assets/herren_7-BXO6B8Bt.jpg",gx="/assets/herren_8-Cg4rdr7T.jpg",px="/assets/herren_9-DoLnTdRG.jpg",xx="/assets/herren_jubel_500club-mxBrnD8H.png",bx="/assets/IMG-team-BGcF1agj.png",yx="/assets/IMG_5349-CpvIVKhM.jpg",vx="/assets/IMG_5369-DQ4CSwdg.jpg",jx="/assets/IMG_5421-BBzniIEN.jpg",Sx="/assets/IMG_5442-D2PgutWB.jpg",wx="/assets/IMG_5952-B9VW6Qie.jpg",zx="/assets/Unbenann324t-IPGo6eoQ.png",Ex="/assets/image0-DDrU5aZn.jpeg",_x="/assets/image11-BNM8hTkT.jpeg",Tx="/assets/image8-BUnedp9U.jpeg",OS="/assets/grafhardenberg-Di5cVggE.png",NS="/assets/horta-DydWIGV7.png",HS="/assets/logans-BgpKwKYA.png",LS="/assets/ricobet-DsVC-eZt.png",US="/assets/rothaus-DqkKD9yW.png",GS="/assets/tasty-B2pSa1rE.png",VS="/assets/cabin-window-B83r_CDB.jpg",YS="/assets/outside-9-xz17qL.jpg",$S="/assets/shower-B75caJ-F.jpg",qS="/assets/sitting-area-D7khB3Gw.jpg",KS="/assets/toilet-BpMHYbhh.jpg",ZS=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Bp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Dp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Op,"../assets/gallery/cheerleading/cheerleading_3.jpg":Np,"../assets/gallery/damen/1.png":Hp,"../assets/gallery/damen/10.png":Lp,"../assets/gallery/damen/11.png":Up,"../assets/gallery/damen/12.png":Gp,"../assets/gallery/damen/13.png":Vp,"../assets/gallery/damen/14.png":Yp,"../assets/gallery/damen/2.png":$p,"../assets/gallery/damen/3.png":qp,"../assets/gallery/damen/4.png":Kp,"../assets/gallery/damen/5.png":Zp,"../assets/gallery/damen/6.png":Xp,"../assets/gallery/damen/7.png":Qp,"../assets/gallery/damen/8.png":Pp,"../assets/gallery/damen/9.png":Jp,"../assets/gallery/herren/herren_0.jpg":Wp,"../assets/gallery/herren/herren_1.jpg":Fp,"../assets/gallery/herren/herren_10.jpg":Ip,"../assets/gallery/herren/herren_11.jpg":ex,"../assets/gallery/herren/herren_12.jpg":tx,"../assets/gallery/herren/herren_13.jpg":nx,"../assets/gallery/herren/herren_14.jpg":ix,"../assets/gallery/herren/herren_15.jpg":ax,"../assets/gallery/herren/herren_16.jpg":rx,"../assets/gallery/herren/herren_17.jpg":lx,"../assets/gallery/herren/herren_18.jpg":sx,"../assets/gallery/herren/herren_19.png":ox,"../assets/gallery/herren/herren_2.jpg":cx,"../assets/gallery/herren/herren_3.jpg":ux,"../assets/gallery/herren/herren_4.jpg":dx,"../assets/gallery/herren/herren_5.jpg":fx,"../assets/gallery/herren/herren_6.jpg":hx,"../assets/gallery/herren/herren_7.jpg":mx,"../assets/gallery/herren/herren_8.jpg":gx,"../assets/gallery/herren/herren_9.jpg":px,"../assets/gallery/herren/herren_jubel_500club.png":xx,"../assets/gallery/jfv/IMG-team.png":bx,"../assets/gallery/jfv/IMG_5349.jpg":yx,"../assets/gallery/jfv/IMG_5369.jpg":vx,"../assets/gallery/jfv/IMG_5421.jpg":jx,"../assets/gallery/jfv/IMG_5442.jpg":Sx,"../assets/gallery/jfv/IMG_5952.jpg":wx,"../assets/gallery/jfv/Unbenann324t.png":zx,"../assets/gallery/jfv/image0.jpeg":Ex,"../assets/gallery/jfv/image11.jpeg":_x,"../assets/gallery/jfv/image8.jpeg":Tx}),XS=Object.assign({"../assets/sponsors/grafhardenberg.png":OS,"../assets/sponsors/horta.png":NS,"../assets/sponsors/logans.png":HS,"../assets/sponsors/ricobet.png":LS,"../assets/sponsors/rothaus.png":US,"../assets/sponsors/tasty.png":GS}),QS=Object.assign({"../assets/renovation/cabin-window.jpg":VS,"../assets/renovation/outside.jpg":YS,"../assets/renovation/shower.jpg":$S,"../assets/renovation/sitting-area.jpg":qS,"../assets/renovation/toilet.jpg":KS}),kx=i=>i.split("/").pop()?.toLowerCase()||"",PS=i=>{const s=i.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function JS(i){const s=[...i];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const Ax=()=>{const i={};Object.entries(ZS).forEach(([c,d])=>{const m=PS(c);i[m]||(i[m]=[]),i[m].push(d)}),Object.keys(i).forEach(c=>{i[c]=JS(i[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{i[c]&&(s[c]=i[c])}),Object.keys(i).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=i[c])}),s},WS=()=>{const i={};return Object.entries(XS).forEach(([s,u])=>{const c=kx(s);i[c]=u}),i},Rx=()=>{const i={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(QS).forEach(([s,u])=>{const c=kx(s);c.includes("sitting")?i.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?i.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&i.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?i.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?i.waschkueche.push({src:u,alt:"Dusche"}):i.waschkueche.push({src:u,alt:"Waschküche"}))}),i},pt=i=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":Bp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Dp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Op,"../assets/gallery/cheerleading/cheerleading_3.jpg":Np,"../assets/gallery/damen/1.png":Hp,"../assets/gallery/damen/10.png":Lp,"../assets/gallery/damen/11.png":Up,"../assets/gallery/damen/12.png":Gp,"../assets/gallery/damen/13.png":Vp,"../assets/gallery/damen/14.png":Yp,"../assets/gallery/damen/2.png":$p,"../assets/gallery/damen/3.png":qp,"../assets/gallery/damen/4.png":Kp,"../assets/gallery/damen/5.png":Zp,"../assets/gallery/damen/6.png":Xp,"../assets/gallery/damen/7.png":Qp,"../assets/gallery/damen/8.png":Pp,"../assets/gallery/damen/9.png":Jp,"../assets/gallery/herren/herren_0.jpg":Wp,"../assets/gallery/herren/herren_1.jpg":Fp,"../assets/gallery/herren/herren_10.jpg":Ip,"../assets/gallery/herren/herren_11.jpg":ex,"../assets/gallery/herren/herren_12.jpg":tx,"../assets/gallery/herren/herren_13.jpg":nx,"../assets/gallery/herren/herren_14.jpg":ix,"../assets/gallery/herren/herren_15.jpg":ax,"../assets/gallery/herren/herren_16.jpg":rx,"../assets/gallery/herren/herren_17.jpg":lx,"../assets/gallery/herren/herren_18.jpg":sx,"../assets/gallery/herren/herren_19.png":ox,"../assets/gallery/herren/herren_2.jpg":cx,"../assets/gallery/herren/herren_3.jpg":ux,"../assets/gallery/herren/herren_4.jpg":dx,"../assets/gallery/herren/herren_5.jpg":fx,"../assets/gallery/herren/herren_6.jpg":hx,"../assets/gallery/herren/herren_7.jpg":mx,"../assets/gallery/herren/herren_8.jpg":gx,"../assets/gallery/herren/herren_9.jpg":px,"../assets/gallery/herren/herren_jubel_500club.png":xx,"../assets/gallery/jfv/IMG-team.png":bx,"../assets/gallery/jfv/IMG_5349.jpg":yx,"../assets/gallery/jfv/IMG_5369.jpg":vx,"../assets/gallery/jfv/IMG_5421.jpg":jx,"../assets/gallery/jfv/IMG_5442.jpg":Sx,"../assets/gallery/jfv/IMG_5952.jpg":wx,"../assets/gallery/jfv/Unbenann324t.png":zx,"../assets/gallery/jfv/image0.jpeg":Ex,"../assets/gallery/jfv/image11.jpeg":_x,"../assets/gallery/jfv/image8.jpeg":Tx})).find(([c])=>c.includes(i));return u?u[1]:""},Qd=(i,s)=>pt(`${i}/${i}_${s}.jpg`);Ax(),WS(),Rx();function FS(){const i=Ax(),[s,u]=A.useState(null);return A.useEffect(()=>{if(!s)return;const c=d=>{d.key==="Escape"&&u(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[s]),r.jsxs("section",{children:[r.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([c,d])=>r.jsxs("div",{style:{marginBottom:"2.5rem"},children:[r.jsx(IS,{children:c.toUpperCase()}),r.jsx(e2,{children:d.map((m,p)=>r.jsx(t2,{src:m,alt:`Bild ${p+1} aus ${c}`,onClick:()=>u({folder:c,idx:p}),style:{cursor:"pointer"}},p))}),s&&s.folder===c&&r.jsx(n2,{onClick:()=>u(null),children:r.jsxs(i2,{onClick:m=>m.stopPropagation(),children:[r.jsx(a2,{src:d[s.idx],alt:`Großansicht aus ${c}`}),r.jsx(r2,{onClick:()=>u(null),title:"Schließen",children:"×"})]})})]},c))]})}const IS=h.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,e2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,t2=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,n2=h.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`,i2=h.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,a2=h.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,r2=h.button`
  position: absolute;
  top: -18px;
  right: -18px;
  background: #fff;
  color: #e10073;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 2rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  &:hover {
    background: #ffe6f2;
  }
`,l2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,s2=h.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: #e10073;
    box-shadow: 0 12px 32px rgba(225, 0, 115, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:focus-within {
    border-color: #e10073;
    box-shadow: 0 0 0 3px rgba(225, 0, 115, 0.3);
  }
`,o2=h.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,c2=h.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,u2=h.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,d2=h.div`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #333;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  padding: 0 1rem;

  /* Zentrierte Listen */
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    text-align: center;
    position: relative;
    padding-left: 1.5rem;
  }

  li::before {
    content: "•";
    color: #e10073;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`,f2=h.a`
  display: inline-block;
  background: #e10073;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 1.75rem;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 2px solid #e10073;
  text-transform: none;
  letter-spacing: 0.02em;

  &:hover {
    background: #b8005a;
    border-color: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }
`;function Hu({icon:i,title:s,description:u,packages:c,buttonHref:d,buttonText:m}){return r.jsxs(s2,{children:[r.jsx(o2,{children:i}),r.jsx(c2,{children:s}),r.jsx(u2,{children:u}),r.jsx(d2,{children:c.map((p,y)=>r.jsxs("div",{children:[p,y<c.length-1&&r.jsx("br",{})]},y))}),r.jsx(f2,{href:d,children:m})]})}const h2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,m2=h.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,g2=h.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,p2=h.p`
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

  ${({$isEmail:i})=>i&&`
    a {
      color: #e10073;
      &:hover {
        color: #b8005a;
      }
    }
  `}
`;function Cx({headline:i,description:s,contactInfos:u}){const c=d=>{d.preventDefault();const m=d.currentTarget,p=new FormData(m);if(String(p.get("website")||"").trim()!=="")return;const b=String(p.get("firstName")||"").trim(),x=String(p.get("lastName")||"").trim(),w=String(p.get("email")||"").trim(),R=String(p.get("phone")||"").trim(),C={};if(b||(C.firstName="Bitte Vornamen angeben"),x||(C.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)||(C.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(R)||(C.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(C).length>0){const V=Object.keys(C)[0],Y=m.querySelector(`[name="${V}"]`);Y&&Y.focus(),alert(Object.values(C).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),m.reset()};return r.jsx(x2,{id:"kontakt",children:r.jsxs(b2,{children:[r.jsx(A2,{children:i}),r.jsx(R2,{children:s}),r.jsx(h2,{children:u.map((d,m)=>r.jsxs(m2,{children:[r.jsxs(g2,{children:[d.icon," ",d.title]}),r.jsx(p2,{$isEmail:d.isEmail,children:d.isEmail?r.jsx("a",{href:`mailto:${d.content}`,children:d.content}):d.content})]},m))}),r.jsxs(y2,{children:[r.jsx(v2,{children:"Kontakt aufnehmen"}),r.jsx(j2,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),r.jsxs(S2,{noValidate:!0,onSubmit:c,children:[r.jsxs(Lu,{children:[r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"firstName",children:"Vorname"}),r.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"lastName",children:"Nachname"}),r.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),r.jsxs(Lu,{children:[r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),r.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),r.jsxs(nl,{children:[r.jsx("label",{htmlFor:"phone",children:"Telefon"}),r.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),r.jsx(Lu,{children:r.jsxs(w2,{children:[r.jsx("label",{htmlFor:"email",children:"E-Mail"}),r.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),r.jsxs(z2,{"aria-hidden":"true",tabIndex:-1,children:[r.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),r.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),r.jsxs(E2,{children:[r.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),r.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",r.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),r.jsxs(_2,{children:[r.jsx(T2,{type:"submit",children:"Absenden"}),r.jsxs(k2,{children:["Alternativ:"," ",r.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const x2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,b2=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,y2=h.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,v2=h.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,j2=h.p`
  margin: 0 0 1rem 0;
  color: #555;
`,S2=h.form`
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
`,Lu=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,nl=h.div`
  display: flex;
  flex-direction: column;
`,w2=h(nl)`
  grid-column: 1 / -1;
`,z2=h.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,E2=h.div`
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
`,_2=h.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,T2=h.button`
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
`,k2=h.span`
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
`,A2=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,R2=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,C2=h.section`
  background: url("${Qd("herren",4)}") center/cover;
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
`,M2=h.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
  z-index: 1;
  text-align: center;
  line-height: 1.1;
  margin-bottom: 1rem;
`,B2=h.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.4rem, 4vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  z-index: 1;
  text-align: center;
  margin-top: 0;
  opacity: 0.95;
`,v0=h.a`
  display: inline-block;
  background: ${i=>i.secondary?"rgba(255, 255, 255, 0.15)":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  border: ${i=>i.secondary?"2px solid rgba(255, 255, 255, 0.5)":"none"};
  backdrop-filter: ${i=>i.secondary?"blur(15px)":"none"};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:hover {
    background: ${i=>i.secondary?"rgba(255, 255, 255, 0.25)":"#b8005a"};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`,D2=h.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,O2=h.main`
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
`,Ir=h.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  margin-top: 4rem;
  border-bottom: 5px solid #e10073;
  display: inline-block;
  scroll-margin-top: 100px; /* Für Anker-Navigation */
  letter-spacing: -0.02em;
  line-height: 1.2;

  &:first-of-type {
    margin-top: 2rem;
  }
`,N2=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,H2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,L2=h.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,U2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,G2=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,V2=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,j0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,S0=h.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,w0=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  li {
    color: #222;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    padding-left: 0;
    text-align: left;
    &:before {
      content: "•";
      color: #e10073;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`,Y2=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,$2=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,q2=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,K2=h.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,Z2=h.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,X2=h.ul`
  font-size: 1.08rem;
  color: #222;
  line-height: 1.7;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`,Uu=h.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,Gu=h.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Vu=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yu=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,$u=h.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,qu=h.div`
  font-size: 0.98rem;
  color: #666;
`,Q2=h.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 2px solid #f0f0f0;

  &:hover {
    border-color: #e10073;
    box-shadow: 0 4px 16px rgba(225, 0, 115, 0.1);
  }
`,P2=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,J2=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,W2=h.a`
  display: inline-block;
  background: #e10073;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 2px solid #e10073;

  &:hover {
    background: #b8005a;
    border-color: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }
`,F2=h.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,I2=h.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 2px solid #f0f0f0;

  &:hover {
    border-color: #e10073;
    box-shadow: 0 4px 16px rgba(225, 0, 115, 0.1);
  }
`,e5=h.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,t5=h.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,n5=h.a`
  display: inline-block;
  background: #e10073;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 2px solid #e10073;

  &:hover {
    background: #b8005a;
    border-color: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }
`,i5=h.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,a5=h.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &::before {
    content: "🚌";
    font-size: 1.2em;
  }

  &::after {
    content: "🚌";
    font-size: 1.2em;
  }
`,r5=h.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,l5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,z0=h.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,E0=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,_0=h.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th {
    background: #e10073;
    color: white;
    padding: 0.75rem 0.5rem;
    text-align: left;
    font-weight: 600;
    border: 1px solid #d00068;
  }

  td {
    padding: 0.75rem 0.5rem;
    border: 1px solid #ddd;
    background: #fff;
  }

  tr:nth-child(even) td {
    background: #f9f9f9;
  }

  tr:hover td {
    background: #f0f0f0;
  }
`,s5=h.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,o5=h.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,c5=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #222;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "✓";
      color: #e10073;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`,u5=h.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,d5=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,f5=h.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,h5=h.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;function m5(){return r.jsxs(r.Fragment,{children:[r.jsx(C2,{children:r.jsxs(N2,{children:[r.jsx(M2,{children:"SC Konstanz-Wollmatingen"}),r.jsx(B2,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),r.jsxs(D2,{children:[r.jsx(v0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),r.jsx(v0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),r.jsxs(O2,{children:[r.jsx(Ir,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),r.jsx(H2,{children:r.jsx(L2,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten - bei uns ist für jeden das Richtige dabei."})}),r.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[r.jsx(F2,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),r.jsxs(l2,{role:"region","aria-label":"Sponsoring-Kategorien",children:[r.jsx(Hu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),r.jsx(Hu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),r.jsx(Hu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),r.jsxs("section",{"aria-labelledby":"premium-pakete",children:[r.jsx(Ir,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),r.jsx(Ya,{packages:Ln.filter(i=>i.price==="15.000 €/Jahr"||i.price==="12.000 €/Jahr"||i.price==="9.500 €/Jahr")})]}),r.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[r.jsx(Ir,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),r.jsx(Ya,{packages:Ln.filter(i=>i.price==="5.000 €/Jahr"||i.price==="800 €/Jahr"||i.price==="2.000 €/Jahr")})]}),r.jsxs("section",{"aria-labelledby":"starter-pakete",children:[r.jsx(Ir,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),r.jsx(Ya,{packages:Ln.filter(i=>i.price==="150 €/pro Spiel"||i.price==="500 €/5 Spiele"||i.price.includes("Ab 100"))}),r.jsxs(I2,{children:[r.jsx(e5,{children:"⚽ Ballspende-Beispiel ansehen"}),r.jsx(t5,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),r.jsx(n5,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),r.jsxs(U2,{children:[r.jsx(G2,{children:"Warum SC Konstanz-Wollmatingen?"}),r.jsxs(V2,{children:[r.jsxs(j0,{children:[r.jsx(S0,{children:"📊 Erreichte Reichweite"}),r.jsxs(w0,{children:[r.jsx("li",{children:"15+ Heimspiele pro Saison"}),r.jsx("li",{children:"200+ Zuschauer pro Spiel"}),r.jsx("li",{children:"2.500+ Instagram Follower"}),r.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),r.jsxs(j0,{children:[r.jsx(S0,{children:"🏆 Sportlicher Erfolg"}),r.jsxs(w0,{children:[r.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),r.jsx("li",{children:"2. Mannschaften pro Abteilung"}),r.jsx("li",{children:"Cheerleading-Team aktiv"}),r.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),r.jsx(Ir,{children:"Zusätzliche Werbemöglichkeiten"}),r.jsxs(Y2,{children:[r.jsx($2,{children:'Werbung im Stadionmagazin „Heimspiel"'}),r.jsxs(q2,{children:[r.jsxs(K2,{children:[r.jsxs(Vu,{children:[r.jsx(Yu,{children:"1 Seite (Farbe)"}),r.jsx($u,{children:"1.000 €"}),r.jsx(qu,{children:"DIN A4 (297 × 210 mm)"})]}),r.jsxs(Vu,{children:[r.jsx(Yu,{children:"1/2 Seite (Farbe)"}),r.jsx($u,{children:"500 €"}),r.jsx(qu,{children:"DIN A5 (148 × 210 mm)"})]}),r.jsxs(Vu,{children:[r.jsx(Yu,{children:"1/4 Seite (Farbe)"}),r.jsx($u,{children:"250 €"}),r.jsx(qu,{children:"DIN A6 (105 × 148 mm)"})]})]}),r.jsx(Z2,{children:r.jsxs(X2,{children:[r.jsxs(Uu,{children:[r.jsx(Gu,{}),"15 Ausgaben pro Saison"]}),r.jsxs(Uu,{children:[r.jsx(Gu,{}),"ca. 100 Exemplare pro Heimspiel"]}),r.jsxs(Uu,{children:[r.jsx(Gu,{}),"Digitale Version (Social Media & Website)"]})]})})]}),r.jsxs(Q2,{children:[r.jsx(P2,{children:"📖 Aktuelle Ausgabe als Beispiel"}),r.jsx(J2,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),r.jsx(W2,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),r.jsxs(i5,{children:[r.jsx(a5,{children:"Werbeflächen auf dem Vereinsbus"}),r.jsx(r5,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs - ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),r.jsxs(l5,{children:[r.jsxs(z0,{children:[r.jsx(E0,{children:"Premium-Flächen"}),r.jsxs(_0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Position"}),r.jsx("th",{children:"Sichtbarkeit"}),r.jsx("th",{children:"Preis / Jahr"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Heckfläche (100×80 cm)"}),r.jsx("td",{children:"Sehr hoch"}),r.jsx("td",{children:"1.200 €"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Seitentüren (links/rechts)"}),r.jsx("td",{children:"Hoch"}),r.jsx("td",{children:"je 900 €"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Hintere Seitenflächen"}),r.jsx("td",{children:"Mittel-hoch"}),r.jsx("td",{children:"je 600 €"})]})]})]})]}),r.jsxs(z0,{children:[r.jsx(E0,{children:"Standard-Flächen"}),r.jsxs(_0,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Position"}),r.jsx("th",{children:"Sichtbarkeit"}),r.jsx("th",{children:"Preis / Jahr"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),r.jsx("td",{children:"Mittel"}),r.jsx("td",{children:"400 € je Seite"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"Frontstoßstange"}),r.jsx("td",{children:"Gering-mittel"}),r.jsx("td",{children:"250 €"})]})]})]})]})]}),r.jsxs(s5,{children:[r.jsx(o5,{children:"Zusatzoptionen:"}),r.jsxs(c5,{children:[r.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),r.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),r.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50-100 €)"})]})]}),r.jsxs(u5,{children:[r.jsx(d5,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),r.jsx(f5,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),r.jsx(h5,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),r.jsx(DS,{}),r.jsx(Cx,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),r.jsx(FS,{})]}),r.jsx(Xd,{})]})}const Pd=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],Mx=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],$a={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},g5="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",Bx=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],Dx=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Ox=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],p5="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",Bt={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},x5=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],b5=h.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }
`,y5=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,v5=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`,j5=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,S5=h.div`
  display: grid;
  grid-template-columns: 120px 1fr 60px; /* Kompakter für Mobile */
  gap: 0.75rem;
  align-items: center;
  min-width: 0;

  @media (min-width: 768px) {
    grid-template-columns: 140px 1fr 100px;
    gap: 1rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 80px 1fr 50px; /* Extrem kompakt für iPhone SE */
    font-size: 0.8rem;
  }
`,w5=h.img`
  width: 100%;
  height: 60px; /* Kleiner auf Mobile */
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    width: 140px;
    height: 90px;
    border-radius: 12px;
  }
`,z5=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`,E5=h.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,_5=h.div`
  background: #f0f0f0;
  border-radius: 9999px;
  height: 28px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
`,T5=h.div`
  background: ${({$gradient:i})=>i};
  height: 100%;
  width: ${({$percent:i})=>i}%;
  border-radius: 9999px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
    border-radius: 9999px 9999px 0 0;
  }
`,k5=h.div`
  font-size: 1.3rem;
  font-weight: 900;
  color: #e10073;
  text-align: right;
  white-space: nowrap;
  min-width: 0;

  @media (max-width: 768px) {
    text-align: right;
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`,A5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
`,Ku=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #555;
`,Zu=h.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: ${({$color:i})=>i};
  flex-shrink: 0;
`,R5=h.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2rem;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Nx=[{label:"Winterpause (Nov–Jan)",value:285e3,gradient:"linear-gradient(135deg, #9ca3af, #6b7280)",icon:"❄️",image:pt("herren/herren_8")},{label:"Saison (Jun–Aug)",value:684e3,gradient:"linear-gradient(135deg, #e10073, #c70066)",icon:"⚽",image:pt("herren/herren_6")},{label:"Prognose Saison (konservativ)",value:65e4,gradient:"linear-gradient(135deg, #ff6b9d, #e10073)",icon:"📈",image:pt("herren/herren_16")}],C5=Math.max(...Nx.map(i=>i.value));function M5(){return r.jsxs(b5,{children:[r.jsx(y5,{children:"📊 Instagram-Reichweite: Saison vs. Winterpause"}),r.jsx(v5,{children:"Echte Zahlen aus unserem Account – so entwickelt sich die Sichtbarkeit über das Jahr"}),r.jsx(j5,{children:Nx.map(i=>r.jsxs(S5,{children:[r.jsx(w5,{src:i.image,alt:i.label}),r.jsxs(z5,{children:[r.jsxs(E5,{children:[i.icon," ",i.label]}),r.jsx(_5,{children:r.jsx(T5,{$percent:i.value/C5*100,$gradient:i.gradient})})]}),r.jsxs(k5,{children:[(i.value/1e3).toFixed(0),"k"]})]},i.label))}),r.jsxs(A5,{children:[r.jsxs(Ku,{children:[r.jsx(Zu,{$color:"#9ca3af"}),r.jsx("span",{children:"Aktuell (Winterpause)"})]}),r.jsxs(Ku,{children:[r.jsx(Zu,{$color:"#e10073"}),r.jsx("span",{children:"Letzte Saison (Landesliga)"})]}),r.jsxs(Ku,{children:[r.jsx(Zu,{$color:"#ff6b9d"}),r.jsx("span",{children:"Prognose kommende Saison"})]})]}),r.jsxs(R5,{children:[r.jsx("strong",{children:"Wichtig:"})," Wir spielen aktuell in der Landesliga. Bei Aufstieg in die Verbandsliga steigt die Reichweite weiter - mehr Gegner, höhere Spielklasse, größere mediale Aufmerksamkeit. Ihre Investition wächst automatisch mit."]})]})}const B5=h.div`
  width: 100%;
  margin: 2rem 0;
`,D5=h.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,O5=h.table`
  width: 100%;
  border-collapse: collapse;
`,T0=h.th`
  background: ${i=>i.isVergeben?"#f8f9fa":"#e10073"};
  color: ${i=>i.isVergeben?"#666":"#fff"};
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 700;
  border: 1px solid #dee2e6;

  &:first-child {
    background: #f8f9fa;
    color: #222;
    font-weight: 800;
    text-align: left;
    min-width: 200px;
  }
`,Ni=h.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${i=>i.isVergeben?"#f8f9fa":"#fff"};
  color: ${i=>i.isVergeben?"#999":"#222"};
  font-size: 0.95rem;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${i=>i.isHighlight&&`
    background: #fff6fa;
    color: #e10073;
    font-weight: 600;
  `}
`,N5=h.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${i=>i.isVergeben?"#f8f9fa":"#fff"};
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;

  ${i=>i.isVergeben&&`
    color: #999;
    text-decoration: line-through;
  `}
`,H5=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,L5=h.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${i=>i.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${i=>i.isVergeben?.8:1};
`,U5=h.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,G5=h.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,Xu=h.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-of-type {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    text-align: right;
    color: #222;
  }
`,k0=h.a`
  display: inline-block;
  background: ${i=>i.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  width: 100%;
  margin-top: 1.5rem;
  box-sizing: border-box;
  pointer-events: ${i=>i.isVergeben?"none":"auto"};
`,V5="sponsoring@sckw.de";function Y5({packages:i}){const s=c=>{const d=c.replace(/[^\w\s]/gi,"").trim(),m=encodeURIComponent(`Interesse am Paket "${d}"`);return`mailto:${V5}?subject=${m}`},u=c=>{const d=c.benefits.find(p=>{const y=p.toLowerCase();return y.includes("social media")||y.includes("instagram")});if(!d)return"-";const m=d.toLowerCase();return m.includes("premium")||m.includes("allen")?"ÜBERALL":m.includes("sehr präsent")?"Sehr präsent":m.includes("regelmässig")||m.includes("regelmäßig")?"Regelmäßig":"Standard"};return r.jsxs(B5,{children:[r.jsx(D5,{children:r.jsxs(O5,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(T0,{children:"Paket"}),i.map((c,d)=>r.jsx(T0,{isVergeben:c.status.includes("Vergeben"),children:c.title},d))]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx(Ni,{children:"Preis"}),i.map((c,d)=>r.jsx(N5,{isVergeben:c.status.includes("Vergeben"),children:c.price},d))]}),r.jsxs("tr",{children:[r.jsx(Ni,{children:"Trikot/Banner"}),i.map((c,d)=>{const m=c.benefits.find(p=>p.includes("Trikot")||p.includes("Banner"));return r.jsx(Ni,{children:m?"✅ Ja":"-"},d)})]}),r.jsxs("tr",{children:[r.jsx(Ni,{children:"Social Media"}),i.map((c,d)=>{const m=u(c);return r.jsx(Ni,{isHighlight:m==="ÜBERALL",children:m==="-"?"-":`✅ ${m}`},d)})]}),r.jsxs("tr",{children:[r.jsx(Ni,{children:"Aktion"}),i.map((c,d)=>r.jsx(Ni,{children:r.jsx(k0,{href:c.status.includes("Vergeben")?void 0:s(c.title),isVergeben:c.status.includes("Vergeben"),children:c.status.includes("Vergeben")?"Vergeben":"Anfragen"})},d))]})]})]})}),r.jsx(H5,{children:i.map((c,d)=>{const m=c.status.includes("Vergeben");return r.jsxs(L5,{isVergeben:m,children:[r.jsx(U5,{children:c.title}),r.jsx(G5,{children:c.price}),r.jsxs(Xu,{children:[r.jsx("span",{children:"Status"}),r.jsx("span",{children:m?"🟥 Vergeben":"🟩 Verfügbar"})]}),r.jsxs(Xu,{children:[r.jsx("span",{children:"Social Media"}),r.jsx("span",{children:u(c)})]}),r.jsxs(Xu,{children:[r.jsx("span",{children:"Vorteile"}),r.jsxs("span",{children:[c.benefits.length," Leistungen"]})]}),r.jsx(k0,{href:m?void 0:s(c.title),isVergeben:m,children:m?"Bereits vergeben":"Jetzt anfragen"})]},d)})})]})}const $5=h.div`
  margin-top: 2.5rem;
`,q5=h.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,K5=h.button`
  background: ${({$active:i})=>i?"#e10073":"transparent"};
  color: ${({$active:i})=>i?"white":"#666"};
  border: none;
  padding: 0.875rem 1.5rem;
  font-weight: ${({$active:i})=>i?"800":"600"};
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s ease;
  position: relative;
  border-bottom: ${({$active:i})=>i?"3px solid #e10073":"3px solid transparent"};

  &:hover {
    background: ${({$active:i})=>i?"#e10073":"#f8f9fa"};
    color: ${({$active:i})=>i?"white":"#e10073"};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.2rem;
  }
`,Z5=h.div`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,X5=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,Q5=Ln.filter(i=>i.tier==="premium"),P5=Ln.filter(i=>i.tier==="lokal"),J5=Ln.filter(i=>i.tier==="starter");function W5(){const[i,s]=A.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:Q5},{key:"lokal",label:"🏢 Lokal",packages:P5},{key:"starter",label:"🌟 Starter",packages:J5}],c=u.find(d=>d.key===i);return r.jsxs($5,{children:[r.jsx(q5,{children:u.map(d=>r.jsx(K5,{$active:i===d.key,onClick:()=>s(d.key),children:d.label},d.key))}),r.jsxs(Z5,{children:[c&&r.jsx(Y5,{packages:c.packages}),r.jsxs(X5,{children:[i==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",i==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",i==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const F5=h.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
  margin: 2rem auto 0;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,I5=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,ew=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,tw=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,nw=h.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #e10073;
    color: white;
    padding: 0.875rem 0.75rem;
    text-align: left;
    font-weight: 700;
    font-size: 0.95rem;
    border: 1px solid #d00068;

    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }

  td {
    padding: 0.875rem 0.75rem;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 0.9rem;
    color: #333;

    &:first-child {
      font-weight: 600;
      background: #f8f9fa;
    }
  }

  tr:nth-child(even) td {
    background: #f9f9f9;

    &:first-child {
      background: #f0f0f0;
    }
  }
`,Qu=h.td`
  font-weight: 700;
  color: #e10073;
`,iw=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,aw=h.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,rw=h.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,lw=h.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    font-weight: 700;
    color: #e10073;
    text-align: right;
  }
`,sw=h.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function ow(){const i=Mx;return r.jsxs(F5,{children:[r.jsx(I5,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),r.jsx(ew,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),r.jsx(tw,{children:r.jsxs(nw,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Leistung / Erfolg"}),r.jsx("th",{children:"Starter"}),r.jsx("th",{children:"Premium"}),r.jsx("th",{children:"Kombi (Beispiel)"})]})}),r.jsxs("tbody",{children:[i.map((s,u)=>r.jsxs("tr",{children:[r.jsx("td",{children:s.label}),r.jsx(Qu,{children:s.starter}),r.jsx(Qu,{children:s.premium}),r.jsx(Qu,{children:s.kombi})]},u)),r.jsxs("tr",{children:[r.jsx("td",{children:"Erwartete Kosten"}),r.jsx("td",{children:$a.starter}),r.jsx("td",{children:$a.premium}),r.jsx("td",{children:$a.kombi})]})]})]})}),r.jsx(iw,{children:["Starter","Premium","Kombi"].map(s=>r.jsxs(aw,{children:[r.jsx(rw,{children:s}),i.map((u,c)=>r.jsxs(lw,{children:[r.jsx("span",{children:u.label}),r.jsx("span",{children:s==="Starter"?u.starter:s==="Premium"?u.premium:u.kombi})]},c))]},s))}),r.jsx(sw,{children:g5})]})}const cw=h.div`
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 1000px;
  margin: 2rem auto 0;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,uw=h.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,dw=h.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,fw=h.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,hw=h.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #e10073;
    color: white;
    padding: 0.875rem 0.75rem;
    text-align: left;
    font-weight: 700;
    font-size: 0.9rem;
    border: 1px solid #d00068;

    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }

  td {
    padding: 0.875rem 0.75rem;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 0.85rem;
    color: #333;
    line-height: 1.4;

    &:first-child {
      font-weight: 700;
      background: #f8f9fa;
      color: #e10073;
    }
  }

  tr:nth-child(even) td {
    background: #f9f9f9;

    &:first-child {
      background: #f0f0f0;
    }
  }
`,mw=h.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,gw=h.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,pw=h.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,xw=h.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    font-weight: 600;
    color: #666;
  }

  span:last-child {
    font-weight: 700;
    color: #333;
    text-align: right;
  }
`,bw=h.div`
  background: linear-gradient(135deg, #fff6fa, #ffffff);
  border: 1px solid #f2c2d9;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;

  strong {
    color: #e10073;
  }

  em {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #888;
  }
`,yw=h.div`
  background: #f8f9fa;
  border-left: 4px solid #e10073;
  border-radius: 8px;
  padding: 1.25rem;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #444;
  line-height: 1.6;

  strong {
    color: #e10073;
  }
`;function vw(){const i=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return r.jsxs(cw,{children:[r.jsx(uw,{children:"👤 Spielerpatenschaften (diskret)"}),r.jsx(dw,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),r.jsx(fw,{children:r.jsxs(hw,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Merkmal"}),r.jsx("th",{children:"Bronze"}),r.jsx("th",{children:"Silber"}),r.jsx("th",{children:"Gold"})]})}),r.jsx("tbody",{children:i.map((s,u)=>r.jsxs("tr",{children:[r.jsx("td",{children:s.label}),r.jsx("td",{children:s.bronze}),r.jsx("td",{children:s.silber}),r.jsx("td",{children:s.gold})]},u))})]})}),r.jsx(mw,{children:["Bronze","Silber","Gold"].map(s=>r.jsxs(gw,{children:[r.jsx(pw,{children:s}),i.map((u,c)=>r.jsxs(xw,{children:[r.jsx("span",{children:u.label}),r.jsx("span",{children:s==="Bronze"?u.bronze:s==="Silber"?u.silber:u.gold})]},c))]},s))}),r.jsxs(bw,{children:[r.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),r.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',r.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',r.jsx("em",{children:"[Foto vom Torjubel]"})]}),r.jsxs(yw,{children:[r.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const jw=h.div`
  max-width: 1000px;
  margin: 0 auto;
`,Sw=h.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,ww=h.a`
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
`,zw=h.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,Ew=h.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,_w=h.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,Tw=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,kw=h.a`
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
`,Aw=h.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,Rw=h.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,Cw={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function Mw(){const{hauptsponsor:i,partners:s}=Cw;return r.jsxs(jw,{children:[r.jsx(Sw,{children:r.jsxs(ww,{href:i.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(zw,{children:"Hauptsponsor"}),r.jsx(Ew,{src:i.logo,alt:i.name}),r.jsx(_w,{children:i.name})]})}),r.jsx(Tw,{children:s.map((u,c)=>r.jsxs(kw,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(Aw,{src:u.logo,alt:u.name}),r.jsx(Rw,{children:u.name})]},c))})]})}const dn=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Ga=h.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,Ts=h(Ga)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  overflow-x: hidden; /* Verhindert, dass Inhalte die Seite verbreitern */
`,Bn=h.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,di=h.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,fi=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,Bw=h.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
  scroll-margin-top: 90px;
`,Dw=h.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:i})=>i}) center/cover no-repeat;
  opacity: ${({$active:i})=>i?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,Ow=h.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,Nw=h.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,Hw=h.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Lw=h.p`
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
`,Uw=h.div`
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
`,Gw=h.div`
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
`,Vw=h.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Yw=h.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,$w=h.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,A0=h.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$primary:i})=>i?"white":"transparent"};
  color: ${({$primary:i})=>i?"#e10073":"white"};
  font-weight: 800;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  padding: 0.9rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({$primary:i})=>i?"0 6px 20px rgba(0, 0, 0, 0.2)":"none"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:i})=>i?"white":"rgba(255, 255, 255, 0.4)"};
  width: 100%;
  max-width: 280px;
  min-height: 48px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 220px;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({$primary:i})=>i?"#f8f9fa":"rgba(255, 255, 255, 0.1)"};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`,qw=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,ks=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem 0.75rem;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,As=h.div`
  font-size: clamp(1.2rem, 4.5vw, 1.9rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.4rem;
`,Rs=h.div`
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,Kw=h.div`
  background: #fff6fa;
  border: 1px solid #f2c2d9;
  border-radius: 16px;
  padding: 1.25rem;
  margin: 2rem auto 0;
  max-width: 900px;
  text-align: center;
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`,Zw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Pu=h.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);
  }
`,Ju=h.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;

  @media (min-width: 768px) {
    height: 200px;
  }
`,Wu=h.div`
  padding: 1.5rem 1.25rem 2rem;
`,Fu=h.h3`
  font-size: clamp(1.1rem, 2.8vw, 1.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
`,Iu=h.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`,Cs=h.div`
  margin-top: 2.5rem;
`,Ms=h.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,ed=h.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,Xw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`,td=h.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #444;
  font-weight: 700;
  font-size: 0.9rem;
`,Qw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,nd=h.div`
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`,id=h.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,ad=h.div`
  padding: 1.25rem 1rem 1.5rem;
`,rd=h.h4`
  margin: 0 0 0.5rem 0;
  color: #e10073;
  font-weight: 800;
`,ld=h.p`
  margin: 0 0 1rem 0;
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
`,R0=h.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
`,Pw=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,C0=h.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,Jw=h.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,Ww=h.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  table-layout: fixed;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  th {
    text-align: left;
    padding: 0.5rem 0.4rem;
    color: #555;
    font-weight: 700;
    border-bottom: 1px solid #ececec;
    word-break: break-word;
  }

  td {
    padding: 0.5rem 0.4rem;
    border-bottom: 1px solid #f2f2f2;
    color: #333;
    word-break: break-word;
  }
`,Fw=h.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,Iw=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Bs=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,Ds=h.div`
  font-weight: 800;
  color: #e10073;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`,Os=h.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`,e3=h.section`
  padding: 4rem 0;
  scroll-margin-top: 90px;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,t3=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,n3=h.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,i3=h.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2.5rem;
    align-items: start;
  }
`,a3=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,r3=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,l3=h.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  border-radius: 20px;
  padding: 1.75rem 1.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(225, 0, 115, 0.25);
`,s3=h.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,sd=h.div`
  background: white;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-size: 0.95rem;
  color: #444;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f2c2d9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;

  &::before {
    content: '\\2713';
    color: #e10073;
    font-weight: 800;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`,o3=h.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 2px solid #e10073;
  text-align: center;
`,c3=h.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(225, 0, 115, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(225, 0, 115, 0.4);
  }
`,u3=Pd,d3=Ln.filter(i=>i.tier==="premium"),f3=Ln.filter(i=>i.tier==="lokal"),h3=Ln.filter(i=>i.tier==="starter");function m3(){const i=[pt("herren/herren_6"),pt("herren/herren_16"),pt("herren/herren_5"),pt("herren/herren_14")].filter(Boolean),[s,u]=A.useState(0);return A.useEffect(()=>{if(i.length<=1)return;const c=setInterval(()=>{u(d=>(d+1)%i.length)},6e3);return()=>clearInterval(c)},[i.length]),r.jsxs(r.Fragment,{children:[r.jsxs(Bw,{children:[i.map((c,d)=>r.jsx(Dw,{$bg:c,$active:d===s},d)),r.jsx(Ow,{}),r.jsxs(Nw,{children:[r.jsx(Hw,{children:"Sponsoring, das messbar wirkt"}),r.jsxs(Lw,{children:["In der Winterpause erzielen wir bereits"," ",r.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",r.jsx("strong",{children:"500.000-800.000 Kontakte pro Saison"})," - ohne Mehrkosten für unsere Partner."]}),r.jsx(Uw,{children:u3.map(c=>r.jsxs(Gw,{children:[r.jsx(Vw,{children:c.value}),r.jsx(Yw,{children:c.label})]},c.label))}),r.jsxs($w,{children:[r.jsx(A0,{href:"#kontakt",$primary:!0,onClick:c=>{c.preventDefault();const d=document.getElementById("kontakt");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Jetzt Kontakt aufnehmen"}),r.jsx(A0,{href:"#pakete",onClick:c=>{c.preventDefault();const d=document.getElementById("pakete");d&&d.scrollIntoView({behavior:"smooth",block:"start"})},children:"Pakete ansehen"})]})]})]}),r.jsx(Ts,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Warum sich Sponsoring bei uns lohnt"}),r.jsx(fi,{children:"Wiederholte Sichtkontakte, regionale Nähe und messbare Wirkung - genau das, was Ihr Marketing erfolgreich macht."})]}),r.jsxs(Zw,{children:[r.jsxs(Pu,{children:[r.jsx(Ju,{src:"https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Fans jubeln im Stadion"}),r.jsxs(Wu,{children:[r.jsx(Fu,{children:"Sichtbarkeit, die bleibt"}),r.jsx(Iu,{children:"Jeder Spieltag, jeder Post, jede Story - Ihre Marke wird wiederholt gesehen. Das schafft Vertrauen und Wiedererkennung."})]})]}),r.jsxs(Pu,{children:[r.jsx(Ju,{src:"https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Konstanz und Bodensee"}),r.jsxs(Wu,{children:[r.jsx(Fu,{children:"Ihre Kunden sind hier"}),r.jsx(Iu,{children:"Erreichen Sie Menschen aus Konstanz und der Region - genau dort, wo Ihre potenziellen Kunden leben und arbeiten."})]})]}),r.jsxs(Pu,{children:[r.jsx(Ju,{src:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",alt:"Social Media und Stadion"}),r.jsxs(Wu,{children:[r.jsx(Fu,{children:"Doppelte Wirkung"}),r.jsx(Iu,{children:"Ihre Marke wird sowohl im Stadion als auch online gesehen - doppelte Reichweite zum Paketpreis."})]})]})]})]})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Diese Unternehmen sind bereits Partner"}),r.jsx(fi,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),r.jsx(Mw,{})]})}),r.jsx(Ts,{id:"pakete",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Finden Sie Ihr perfektes Paket"}),r.jsx(fi,{children:"Von Premium-Partnerschaften bis Starter-Optionen - klare Leistungen, individuell auf Ihr Unternehmen zugeschnitten."})]}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Premium-Partnerschaften"}),r.jsx(Ya,{packages:d3})]}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Pakete im Vergleich"}),r.jsx(W5,{})]}),r.jsx(ow,{}),r.jsx(vw,{}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Lokale Werbemöglichkeiten"}),r.jsx(Ya,{packages:f3}),r.jsx(ed,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im kurzen Erstgespräch."})]}),r.jsxs(Cs,{children:[r.jsx(Ms,{children:"Starter & Spieltag"}),r.jsx(Ya,{packages:h3})]})]})}),r.jsx(Ga,{id:"reichweite",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"So viele Menschen erreichen Sie"}),r.jsx(fi,{children:"Selbst in der Winterpause erzielen wir starke Reichweiten. Mit Saisonstart multipliziert sich Ihre Sichtbarkeit - messbar und verlässlich."})]}),r.jsxs(qw,{children:[r.jsxs(ks,{children:[r.jsx(As,{children:"32.000"}),r.jsx(Rs,{children:"Reichweite / 30 Tage"})]}),r.jsxs(ks,{children:[r.jsx(As,{children:"250.000"}),r.jsx(Rs,{children:"Reichweite / 90 Tage"})]}),r.jsxs(ks,{children:[r.jsx(As,{children:"50-80k"}),r.jsx(Rs,{children:"Pro Monat in Saison"})]}),r.jsxs(ks,{children:[r.jsx(As,{children:"500-800k"}),r.jsx(Rs,{children:"Saisonreichweite (konservativ)"})]})]}),r.jsxs(Kw,{children:["Diese Werte stammen aus der Winterpause - mit Saisonstart steigt die Reichweite automatisch. Für Sponsoren bedeutet das:"," ",r.jsx("strong",{children:"mehr Sichtkontakte ohne Mehrkosten"}),"."]})]})}),r.jsx(Ts,{children:r.jsx(dn,{children:r.jsx(M5,{})})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Was Sie auf Social Media bekommen"}),r.jsx(fi,{children:"Konkrete Posts, Stories und Erwähnungen - je Paket klar definiert und planbar."})]}),r.jsxs(Xw,{children:[r.jsx(td,{children:"📱 Feed-Posts mit Ihrem Logo"}),r.jsx(td,{children:"📸 Stories & Erwähnungen"}),r.jsx(td,{children:"🔗 Verlinkungen zu Ihrer Website"})]}),r.jsx(ed,{children:"Jedes Paket enthält fixe Social-Media-Leistungen (Anzahl, Format, Frequenz). So wissen Sie genau, was Sie bekommen."})]})}),r.jsx(Ts,{id:"buswerbung",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Mobile Werbung auf unserem Vereinsbus"}),r.jsx(fi,{children:"Ihr Logo fährt durch Konstanz und die Region - bei jeder Fahrt zu Heim- und Auswärtsspielen."})]}),r.jsxs(Pw,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen mit Werbeflächen",style:{width:"100%",borderRadius:12,marginBottom:"1.5rem",display:"block"}}),r.jsx(C0,{style:{textAlign:"center",marginBottom:"1.5rem"},children:"Verfügbare Werbeflächen"}),r.jsx(Jw,{children:r.jsxs(Ww,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fläche"}),r.jsx("th",{children:"Größe (ca.)"}),r.jsx("th",{children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[...Bx,...Dx].map(c=>r.jsxs("tr",{children:[r.jsx("td",{children:c.position}),r.jsx("td",{children:c.groesse}),r.jsx("td",{children:r.jsx("strong",{children:c.preis})})]},c.position))})]})}),r.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[r.jsx(C0,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),r.jsx(Fw,{children:Ox.map((c,d)=>r.jsx("li",{children:c},d))})]})]}),r.jsx(ed,{children:p5})]})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"Ihre Marke in Aktion"}),r.jsx(fi,{children:"So wird Ihre Werbung bei uns präsentiert - vom Stadionmagazin bis zur Bandenwerbung."})]}),r.jsxs(Qw,{children:[r.jsxs(nd,{children:[r.jsx(id,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),r.jsxs(ad,{children:[r.jsx(rd,{children:"Stadionmagazin"}),r.jsx(ld,{children:"Print + Digital: Anzeigen im Stadionheft, online geteilt auf unseren Kanälen."}),r.jsx(R0,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"PDF öffnen"})]})]}),r.jsxs(nd,{children:[r.jsx(id,{src:pt("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),r.jsxs(ad,{children:[r.jsx(rd,{children:"Bandenwerbung"}),r.jsx(ld,{children:"Starke Sichtbarkeit am Spielfeldrand - bei jedem Heimspiel."})]})]}),r.jsxs(nd,{children:[r.jsx(id,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),r.jsxs(ad,{children:[r.jsx(rd,{children:"Ballspende"}),r.jsx(ld,{children:"Ballspende mit Spieltagsnennung - idealer Einstieg ins Sponsoring."}),r.jsx(R0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"Beispiel öffnen"})]})]})]})]})}),r.jsx(e3,{id:"500club",children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(t3,{children:"500 €Club"}),r.jsx(n3,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken - werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),r.jsxs(i3,{children:[r.jsxs(a3,{children:[r.jsxs(l3,{children:[r.jsx("div",{style:{fontSize:"0.85rem",opacity:.9,fontWeight:600,marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Mitgliedschaft"}),r.jsx("div",{style:{fontSize:"clamp(1.8rem, 5vw, 2.4rem)",fontWeight:900,lineHeight:1.1},children:"Ab 125€ / Quartal"}),r.jsx("div",{style:{fontSize:"1rem",opacity:.9,marginTop:"0.25rem"},children:"oder 250€ halbjährlich · 500€ jährlich"})]}),r.jsxs(s3,{children:[r.jsxs(sd,{children:["Offizielle ",r.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),r.jsxs(sd,{children:["Ihr ",r.jsx("strong",{children:"Name oder Firmenname"})," wird veröffentlicht"]}),r.jsxs(sd,{children:["Direkte Förderung von ",r.jsx("strong",{children:"Jugend- & Amateurfußball"})]})]})]}),r.jsxs(r3,{children:[r.jsxs(o3,{children:[r.jsx("div",{style:{fontSize:"0.8rem",color:"#e10073",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"0.75rem"},children:"Spendenkonto"}),r.jsx("div",{style:{fontWeight:800,color:"#222",fontSize:"1.05rem",marginBottom:"0.5rem"},children:"SC Konstanz-Wollmatingen e.V."}),r.jsxs("div",{style:{color:"#444",lineHeight:1.7,fontSize:"0.95rem"},children:["IBAN: ",r.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"}),r.jsx("br",{}),"Sparkasse Bodensee",r.jsx("br",{}),r.jsx("span",{style:{fontSize:"0.85rem",color:"#888"},children:"Schleyerweg 5 · 78467 Konstanz"})]})]}),r.jsx(c3,{href:"/sponsoring-handoff?preset=club500&view=preview",children:"500 €Club Anmeldung"})]})]})]})}),r.jsx(Ga,{children:r.jsxs(dn,{children:[r.jsxs(Bn,{children:[r.jsx(di,{children:"In 4 Schritten zum Sponsoring-Start"}),r.jsx(fi,{children:"Schnell, unkompliziert und transparent - so werden Sie unser Partner."})]}),r.jsxs(Iw,{children:[r.jsxs(Bs,{children:[r.jsx(Ds,{children:"1. Kontakt"}),r.jsx(Os,{children:"Kurz anfragen, wir melden uns innerhalb von 24h."})]}),r.jsxs(Bs,{children:[r.jsx(Ds,{children:"2. Bedarf"}),r.jsx(Os,{children:"Wir klären Ziele, Budget und passende Leistungen."})]}),r.jsxs(Bs,{children:[r.jsx(Ds,{children:"3. Angebot"}),r.jsx(Os,{children:"Fixe Leistungen, klare KPIs, sofort nutzbar."})]}),r.jsxs(Bs,{children:[r.jsx(Ds,{children:"4. Umsetzung"}),r.jsx(Os,{children:"Design, Abstimmung, Launch - wir übernehmen das."})]})]})]})}),r.jsx(Cx,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt - wir erstellen ein passendes Paket mit klaren KPI-Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:Bt.email,isEmail:!0},{icon:"📍",title:"Adresse",content:Bt.vollAdresse}]}),r.jsx(Xd,{})]})}function g3(){return Mp(),!0}const p3=_v`
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
`,M0=h.div`
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
  @media print { display: none !important; }
`,B0=h.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,D0=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ns=h.button`
  background: ${i=>i.$primary?"#fff":i.$active?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.12)"};
  color: ${i=>i.$primary?"#1a365d":"#fff"};
  border: 2px solid ${i=>i.$primary?"#fff":"rgba(255,255,255,0.25)"};
  padding: 0.5rem 1.1rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`,x3=h.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,b3=h.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,vt=h.section`
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
    @media print { page-break-after: auto; break-after: auto; }
  }
`,Zt=h.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    bottom: -320px;
    left: -160px;
    background: radial-gradient(circle, rgba(74, 144, 226, 0.10) 0%, transparent 70%);
  }

  &::after {
    content: '';
    position: absolute;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    bottom: -200px;
    right: -120px;
    background: radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, transparent 70%);
  }
`,Xt=h.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,Qt=h.div`text-align: center; margin-bottom: 6mm;`,Pt=h.img`height: 20mm;`,Jt=h.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,yt=h.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,ct=h.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Ae=h.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,J=h.li`
  font-size: 10.5pt;
  color: #222;
  line-height: 1.7;
  margin-bottom: 2mm;
  padding-left: 6mm;
  position: relative;
  list-style: none;
  &::before {
    content: '\\2713';
    position: absolute;
    left: 0;
    color: #1a365d;
    font-weight: 700;
  }
`,xt=h.ul`padding: 0; margin: 3mm 0;`,Yi=h.div`
  display: ${i=>i.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,ot=h.div`margin-bottom: 4mm;`,Je=h.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Mt=h.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${i=>(i.$lines||1)*8}mm;
  background: #fafafa;
`,y3=h.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Jd=h.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Un=h.div`
  text-align: ${i=>i.$right?"right":i.$center?"center":"left"};
`;function pi(){return r.jsxs(y3,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",r.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function an(){return r.jsxs(Jd,{children:[r.jsxs(Un,{children:[r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),r.jsx("br",{}),"Schleyerweg 5",r.jsx("br",{}),"78467 Konstanz"]}),r.jsxs(Un,{$center:!0,children:[Bt.email,r.jsx("br",{}),"partner.sckw.de"]}),r.jsxs(Un,{$right:!0,children:["Sparkasse Bodensee",r.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",r.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const O0=pt("herren/herren_0"),od=pt("herren/herren_6"),N0=pt("herren/herren_1"),v3=pt("herren/herren_14"),Js=h.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function j3(){return r.jsx(vt,{children:r.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),r.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),r.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),r.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",r.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Pd.slice(0,2).map(i=>r.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[r.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:i.value}),r.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:i.label})]},i.label))}),r.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function S3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"WARUM SCKW?"}),r.jsx(yt,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Pd.map(i=>r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[r.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:i.value}),r.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:i.label})]},i.label))}),r.jsx(ct,{children:"Was Sie bei uns erreichen"}),r.jsxs(xt,{children:[r.jsx(J,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),r.jsx(J,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),r.jsx(J,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),r.jsx(J,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),r.jsx(ct,{children:"Der Verein auf einen Blick"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsxs(Ae,{children:[r.jsx("strong",{children:"Gegründet:"})," 1912"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Mitglieder:"})," 500+"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),r.jsxs("div",{children:[r.jsxs(Ae,{children:[r.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),O0&&r.jsx(Js,{src:O0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),r.jsx(an,{})]})]})}function w3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"HAUPTSPONSOR"}),r.jsx(yt,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(xt,{children:[r.jsx(J,{children:"Trikotwerbung auf der Brust"}),r.jsx(J,{children:"Business Club Mitgliedschaft"}),r.jsx(J,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),r.jsx(J,{children:"1/1 seitiges Inserat im SC Magazin"}),r.jsx(J,{children:"10 Saisonkarten"}),r.jsx(J,{children:"Werbeauftritte nach Absprache"}),r.jsx(J,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(J,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(J,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(J,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(J,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(Yi,{$hidden:!i,children:["Beitrag: ",r.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function z3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"CO-SPONSOR"}),r.jsx(yt,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(xt,{children:[r.jsx(J,{children:"Werbung auf den Trainingsanzügen"}),r.jsx(J,{children:"Business Club Mitgliedschaft"}),r.jsx(J,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),r.jsx(J,{children:"1/2 seitiges Inserat im SC Magazin"}),r.jsx(J,{children:"5 Saisonkarten"}),r.jsx(J,{children:"Werbeauftritte nach Absprache"}),r.jsx(J,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(J,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(J,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(J,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(J,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(Yi,{$hidden:!i,children:["Beitrag: ",r.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function E3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"SILBER-PARTNER"}),r.jsx(yt,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),r.jsxs(xt,{children:[r.jsx(J,{children:"1 Bande (5×2 m) am Gelände"}),r.jsx(J,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),r.jsx(J,{children:"Werbeplane am Gelände"}),r.jsx(J,{children:"Vereinsplakate + Eventsichtbarkeit"}),r.jsx(J,{children:"Website: Logo auf Startseite"})]}),r.jsxs(Yi,{$hidden:!i,children:["Beitrag: ",r.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),r.jsx(ct,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),r.jsx(yt,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),r.jsxs(xt,{children:[r.jsx(J,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),r.jsx(J,{children:"Website: Logo auf der Startseite"}),r.jsx(J,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),r.jsx(J,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),r.jsxs(Yi,{$hidden:!i,children:["Beitrag: ",r.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function _3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"BANDENWERBUNG"}),r.jsx(yt,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),r.jsx(xt,{children:r.jsx(J,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),r.jsxs(Ae,{children:[r.jsx("strong",{children:"Platzierung:"}),r.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",r.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",r.jsx("br",{}),r.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),r.jsxs(Yi,{$hidden:!i,children:["Beitrag: ",r.jsx("strong",{children:"ab 800€ pro Saison"})]}),N0&&r.jsx(Js,{src:N0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function T3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:'WERBUNG IM „HEIMSPIEL"'}),r.jsx(yt,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),r.jsxs(xt,{children:[r.jsx(J,{children:"15 Ausgaben pro Saison"}),r.jsx(J,{children:"ca. 100 Exemplare pro Heimspiel"}),r.jsx(J,{children:"Digitale Version (Social Media & Webseite)"}),r.jsx(J,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),r.jsx(J,{children:"DIN A4 Stadionmagazin"}),r.jsx(J,{children:"wird ausgelegt in diversen Arztpraxen"})]}),i&&r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>r.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),r.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),r.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),i&&r.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[r.jsx("strong",{children:"Maße"}),r.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",r.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",r.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function k3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"SPIELTAG-SPONSORING"}),r.jsx(yt,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),r.jsx(ct,{children:"Ballspende"}),r.jsx(Ae,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),r.jsxs(xt,{children:[r.jsx(J,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),r.jsx(J,{children:"Namensnennung in der Halbzeitpause"}),r.jsx(J,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),r.jsx(J,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),r.jsxs(Yi,{$hidden:!i,children:["Beitrag: ",r.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",r.jsx("strong",{children:"500€"})," (statt 750€)"]}),r.jsx(ct,{children:"Spielpräsentator"}),r.jsx(Ae,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),r.jsxs(xt,{children:[r.jsx(J,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),r.jsx(J,{children:"Namentliche Erwähnung im SC Magazin"}),r.jsx(J,{children:"Social Media Erwähnung am Spieltag"})]}),r.jsxs(Yi,{$hidden:!i,children:["Beitrag: ",r.jsx("strong",{children:"ab 250€ pro Spiel"})]}),od&&r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[r.jsx(Js,{src:od,alt:"Action",style:{height:"48mm"}}),r.jsx(Js,{src:v3||od,alt:"Jubel",style:{height:"48mm"}})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function A3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"BUSWERBUNG"}),r.jsx(yt,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),i&&r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[...Bx,...Dx].map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),i&&r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),r.jsx(ct,{children:"Zusatzoptionen"}),r.jsx(xt,{children:Ox.map((s,u)=>r.jsx(J,{children:s},u))}),r.jsx(pi,{}),r.jsx(an,{})]})]})}function R3({showPrices:i}){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{children:"PRÄMIEN-MODELL"}),r.jsx(yt,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),i&&r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),r.jsxs("tbody",{children:[Mx.map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),r.jsxs("tr",{style:{background:"#f0f9ff"},children:[r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:$a.starter}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:$a.premium}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:$a.kombi})]})]})]}),r.jsx(ct,{children:"So funktioniert's"}),r.jsxs(xt,{children:[r.jsx(J,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),r.jsx(J,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),r.jsx(J,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),r.jsx(J,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),r.jsx(ct,{children:"Inkludierte Leistungen"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx(Ae,{children:r.jsx("strong",{children:"Starter:"})}),r.jsxs(xt,{children:[r.jsx(J,{children:"Stadionansage bei Erfolg"}),r.jsx(J,{children:"Logo auf Website"})]})]}),r.jsxs("div",{children:[r.jsx(Ae,{children:r.jsx("strong",{children:"Premium:"})}),r.jsxs(xt,{children:[r.jsx(J,{children:"+ Social Media Post bei Erfolg"}),r.jsx(J,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),r.jsx(pi,{}),r.jsx(an,{})]})]})}const H0=pt("herren/herren_jubel_500club");function C3(){return r.jsxs(vt,{children:[H0&&r.jsx("img",{src:H0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),r.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[r.jsx(yt,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),r.jsxs(Ae,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[r.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den 500 €Club."})," Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),r.jsx(ct,{children:"Ihre Vorteile"}),r.jsxs(xt,{children:[r.jsxs(J,{children:["Offizielle ",r.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),r.jsxs(J,{children:["Veröffentlichung Ihres ",r.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),r.jsx(J,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),r.jsx(ct,{children:"Zahlungsoptionen"}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),r.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(i=>r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:i.label}),r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:i.betrag})]},i.label))})]}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),r.jsx(ct,{children:"Spendenkonto"}),r.jsxs(Ae,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[r.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),r.jsx("br",{}),"IBAN: ",r.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",r.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[r.jsxs(Ae,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",r.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),r.jsxs(Ae,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",r.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),r.jsx(an,{})]})]})}function M3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG 500 €CLUB"}),r.jsxs(yt,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an ",Bt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Vorname:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Nachname:"}),r.jsx(Mt,{$lines:1})]})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Firma (optional):"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Straße, Hausnummer:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"PLZ:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Ort:"}),r.jsx(Mt,{$lines:1})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Geb.-Datum:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Telefon:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"E-Mail:"}),r.jsx(Mt,{$lines:1})]})]}),r.jsx(ct,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(i=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:r.jsxs(Je,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",i]})},i))}),r.jsx(Ae,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),r.jsx(ct,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im 500 €Club bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(i=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:r.jsxs(Je,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",i]})},i))}),r.jsxs(ot,{style:{marginTop:"2mm"},children:[r.jsx(Je,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),r.jsx(Mt,{$lines:1})]}),r.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. 500 €Club. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Konstanz, den _______________"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),r.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Unterschrift:"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),r.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[r.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",r.jsx("br",{}),r.jsx("strong",{children:"Kontakt:"})," ",Bt.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs(Jd,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),r.jsx(Un,{$center:!0,children:"500 €Club"}),r.jsx(Un,{$right:!0,children:"partner.sckw.de"})]})]})]})}function B3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),r.jsx(yt,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(i=>r.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[r.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:i.n}),r.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:i.t}),r.jsx(Ae,{style:{margin:0,fontSize:"9pt"},children:i.d})]},i.n))}),r.jsx(ct,{children:"Kontakt"}),r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:Bt.email})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),r.jsxs("div",{style:{gridColumn:"1 / -1"},children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),r.jsxs("div",{style:{fontSize:"11pt"},children:[Bt.adresse.name," · ",Bt.adresse.strasse," · ",Bt.adresse.plz," ",Bt.adresse.ort]})]})]}),r.jsx(ct,{children:"Gesprächsleitfaden"}),r.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),r.jsx(Ae,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),r.jsx(an,{})]})]})}function D3(){return r.jsxs(vt,{children:[r.jsx(Zt,{}),r.jsxs(Xt,{children:[r.jsx(Qt,{children:r.jsx(Pt,{src:"/logo.svg"})}),r.jsx(Jt,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),r.jsxs(yt,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",Bt.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ot,{children:[r.jsx(Je,{children:"Datum:"}),r.jsx(Mt,{$lines:1})]}),r.jsxs(ot,{children:[r.jsx(Je,{children:"Gesprächsführer (Helfer):"}),r.jsx(Mt,{$lines:1})]})]}),x5.map((i,s)=>r.jsxs(ot,{children:[r.jsxs(Je,{children:[i.label,":"]}),r.jsx(Mt,{$lines:i.lines})]},s)),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(i=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:r.jsxs(Je,{style:{marginBottom:0},children:["☐ ",i]})},i))}),r.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:r.jsxs(Ae,{style:{margin:0,fontSize:"8pt"},children:[r.jsx("strong",{children:"Schnellreferenz:"})," ",Bt.email," · partner.sckw.de ·"," ",Bt.vollAdresse.replace(/\n/g," · ")]})}),r.jsxs(Jd,{style:{marginTop:"auto"},children:[r.jsx(Un,{children:r.jsx("strong",{children:"Internes Dokument"})}),r.jsx(Un,{$center:!0}),r.jsx(Un,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Dn=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>r.jsx(j3,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>r.jsx(S3,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:i=>r.jsx(w3,{showPrices:i})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:i=>r.jsx(z3,{showPrices:i})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:i=>r.jsx(E3,{showPrices:i})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:i=>r.jsx(_3,{showPrices:i})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:i=>r.jsx(T3,{showPrices:i})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:i=>r.jsx(k3,{showPrices:i})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:i=>r.jsx(A3,{showPrices:i})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:i=>r.jsx(R3,{showPrices:i})},{id:"club500",label:"500 €Club",group:"community",render:()=>r.jsx(C3,{})},{id:"club500form",label:"500 €Club Anmeldung",group:"community",render:()=>r.jsx(M3,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>r.jsx(B3,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>r.jsx(D3,{})}],O3=h.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,N3=h.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,H3=h.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,L3=h.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,U3=h.button`
  background: ${i=>i.$on?"#1a365d":"#f1f5f9"};
  color: ${i=>i.$on?"#fff":"#475569"};
  border: 2px solid ${i=>i.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { opacity: 0.85; }
`,cd=h.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,ud=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,dd=h.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  border: 2px solid ${i=>i.$checked?"#1a365d":"#e2e8f0"};
  background: ${i=>i.$checked?"#f0f4ff":"#fff"};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${i=>i.$checked?"#1a365d":"#64748b"};
  transition: all 0.15s;
  user-select: none;
  &:hover { border-color: #94a3b8; }

  input { accent-color: #1a365d; width: 16px; height: 16px; cursor: pointer; }
`,G3=h.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Hi=h.button`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { background: #e2e8f0; }
`,V3=h.button`
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
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26, 54, 93, 0.3); }
  &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; box-shadow: none; }
`,Y3=h.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function $3(){const i=g3(),[s]=Mp(),u=s.get("preset"),c=s.get("view"),d=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Dn.filter(H=>H.group==="broschüre").map(H=>H.id)),[m,p]=A.useState(!0),[y,b]=A.useState(d),[x,w]=A.useState(c==="preview"?"preview":"dashboard");if(!i)return r.jsx(Ys,{to:"/",replace:!0});const R=H=>{b(ve=>{const me=new Set(ve);return me.has(H)?me.delete(H):me.add(H),me})},C=()=>b(new Set(Dn.map(H=>H.id))),V=()=>b(new Set),Y=()=>b(new Set(Dn.filter(H=>H.group==="broschüre").map(H=>H.id))),q=()=>b(new Set(Dn.map(H=>H.id))),Q=()=>b(new Set(["cover","why","spieltag","banden"])),G=()=>b(new Set(["cover","why","haupt","co","silber"])),W=()=>b(new Set(["club500","club500form"])),D=Dn.filter(H=>y.has(H.id)),$=Dn.filter(H=>H.group==="broschüre"),U=Dn.filter(H=>H.group==="community"),F=Dn.filter(H=>H.group==="helfer");return x==="preview"?r.jsxs(r.Fragment,{children:[r.jsx(p3,{}),r.jsxs(M0,{children:[r.jsxs(B0,{children:["Vorschau · ",D.length," Seiten"]}),r.jsxs(D0,{children:[r.jsx(Ns,{$active:m,onClick:()=>p(H=>!H),children:m?"Preise ✓":"Preise ✗"}),r.jsx(Ns,{onClick:()=>w("dashboard"),children:"Zurück"}),r.jsx(Ns,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),r.jsxs(x3,{children:[r.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',r.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),r.jsx(b3,{children:D.map(H=>r.jsx("div",{children:H.render(m)},H.id))})]}):r.jsxs(r.Fragment,{children:[r.jsxs(M0,{children:[r.jsx(B0,{children:"Sponsoring-Kit · SCKW"}),r.jsx(D0,{children:r.jsx(Ns,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),r.jsxs(O3,{children:[r.jsx(N3,{children:"Sponsoring-Kit zusammenstellen"}),r.jsx(H3,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),r.jsxs(L3,{children:[r.jsx(U3,{$on:m,onClick:()=>p(H=>!H),children:m?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),r.jsxs(Y3,{children:[y.size," von ",Dn.length," Seiten ausgewählt"]})]}),r.jsxs(G3,{children:[r.jsx(Hi,{onClick:C,children:"Alles"}),r.jsx(Hi,{onClick:Y,children:"Broschüre komplett"}),r.jsx(Hi,{onClick:q,children:"Komplett-Kit (+ Helfer)"}),r.jsx(Hi,{onClick:G,children:"Nur Premium-Pakete"}),r.jsx(Hi,{onClick:Q,children:"Starter-Paket"}),r.jsx(Hi,{onClick:W,children:"500 €Club"}),r.jsx(Hi,{onClick:V,children:"Keine"})]}),r.jsx(cd,{children:"Broschüre"}),r.jsx(ud,{children:$.map(H=>r.jsxs(dd,{$checked:y.has(H.id),children:[r.jsx("input",{type:"checkbox",checked:y.has(H.id),onChange:()=>R(H.id)}),H.label]},H.id))}),r.jsx(cd,{children:"Community / 500 €Club"}),r.jsx(ud,{children:U.map(H=>r.jsxs(dd,{$checked:y.has(H.id),children:[r.jsx("input",{type:"checkbox",checked:y.has(H.id),onChange:()=>R(H.id)}),H.label]},H.id))}),r.jsx(cd,{children:"Helfer-Anhang"}),r.jsx(ud,{children:F.map(H=>r.jsxs(dd,{$checked:y.has(H.id),children:[r.jsx("input",{type:"checkbox",checked:y.has(H.id),onChange:()=>R(H.id)}),H.label]},H.id))}),r.jsxs(V3,{disabled:y.size===0,onClick:()=>w("preview"),children:["Vorschau & Drucken (",y.size," Seiten)"]})]})]})}const q3=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],K3=h.section`
  background: url("${Qd("herren",1)}") center/cover;
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
`,Z3=h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,X3=h.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,Q3=h.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,P3=h.main`
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
`,J3=h.section`
  margin-bottom: 4rem;
`,W3=h.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,F3=h.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,I3=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,e6=h.div`
  text-align: center;
  margin-bottom: 3rem;
`,t6=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,n6=h.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,i6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,a6=h.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(30, 58, 138, 0.1);
  }
`,r6=h.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: #f59e0b;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
`,l6=h.div`
  width: 60px;
  height: 60px;
  background: #f8fafc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border: 2px solid #e2e8f0;
  overflow: hidden;
`,s6=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,o6=h.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,c6=h.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,u6=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,d6=h.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,f6=h.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,h6=h.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: #2563eb;
  }
`,m6=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,g6=h.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,p6=h.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,x6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Aa=h.div`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(30, 58, 138, 0.15);
  }

  &.popular {
    border-color: #3b82f6;
    transform: scale(1.02);
  }
`,L0=h.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
`,Ra=h.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ca=h.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ma=h.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,Ba=h.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Ce=h.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: #475569;

  &:before {
    content: "✓";
    color: #10b981;
    font-weight: 800;
    font-size: 1.1rem;
  }
`,Da=h.button`
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: #2563eb;
  }

  &.secondary {
    background: #f1f5f9;
    color: #475569;

    &:hover {
      background: #e2e8f0;
    }
  }
`,b6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,y6=h.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,v6=h.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,j6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,fd=h.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,hd=h.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,md=h.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,gd=h.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,S6=h.a`
  display: inline-block;
  background: #3b82f6;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }
`,w6=h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,z6=h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,E6=h.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Oa=h.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,Na=h.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,Ha=h.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function _6(){return r.jsxs(r.Fragment,{children:[r.jsx(K3,{children:r.jsxs(Z3,{children:[r.jsx(X3,{children:"SCKW Jobbörse"}),r.jsx(Q3,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),r.jsxs(P3,{children:[r.jsxs(J3,{children:[r.jsx(W3,{children:"Willkommen bei der SCKW Jobbörse"}),r.jsx(F3,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),r.jsxs(I3,{children:[r.jsxs(e6,{children:[r.jsx(t6,{children:"So könnte es aussehen"}),r.jsx(n6,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),r.jsx(i6,{children:q3.map(i=>r.jsxs(a6,{children:[i.isExample&&r.jsx(r6,{children:"MUSTER"}),r.jsx(l6,{children:r.jsx(s6,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),r.jsx(o6,{children:i.title}),r.jsx(c6,{children:i.company}),r.jsx(u6,{children:i.tags.map((s,u)=>r.jsx(d6,{children:s},u))}),r.jsx(f6,{children:i.description}),r.jsx(h6,{children:"Mehr erfahren"})]},i.id))})]}),r.jsxs(m6,{children:[r.jsx(g6,{children:"Preise für Stellenausschreibungen"}),r.jsx(p6,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),r.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),r.jsxs(x6,{children:[r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Basis"}),r.jsx(Ca,{children:"149 €"}),r.jsx(Ma,{children:"netto / Anzeige"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"30 Tage auf Website (Jobbereich)"}),r.jsx(Ce,{children:"Firmenlogo und Link"}),r.jsx(Ce,{children:"Detaillierte Stellenbeschreibung"}),r.jsx(Ce,{children:"Bewerbermanagement"})]}),r.jsx(Da,{className:"secondary",children:"Basis wählen"})]}),r.jsxs(Aa,{className:"popular",children:[r.jsx(L0,{children:"BELIEBT"}),r.jsx(Ra,{children:"Standard"}),r.jsx(Ca,{children:"229 €"}),r.jsx(Ma,{children:"netto / Anzeige"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Alle Basis-Features"}),r.jsx(Ce,{children:"1 Social Media Post"}),r.jsx(Ce,{children:"Instagram + Facebook Reichweite"}),r.jsx(Ce,{children:"Newsletter-Erwähnung"})]}),r.jsx(Da,{children:"Standard wählen"})]}),r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Boosted"}),r.jsx(Ca,{children:"349 €"}),r.jsx(Ma,{children:"netto / Anzeige"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Alle Standard-Features"}),r.jsx(Ce,{children:"Instagram Story"}),r.jsx(Ce,{children:"Stadionmagazin-Erwähnung"}),r.jsx(Ce,{children:"Prioritäre Platzierung"})]}),r.jsx(Da,{className:"secondary",children:"Boosted wählen"})]})]}),r.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),r.jsxs(b6,{children:[r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Job Flat SMALL"}),r.jsx(Ca,{children:"799 €"}),r.jsx(Ma,{children:"netto / Jahr"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Bis zu 6 Anzeigen im Jahr"}),r.jsx(Ce,{children:"6 Social Media Posts"}),r.jsx(Ce,{children:"Website-Präsenz"}),r.jsx(Ce,{children:"Newsletter-Integration"})]}),r.jsx(Da,{className:"secondary",children:"Small Flat"})]}),r.jsxs(Aa,{className:"popular",children:[r.jsx(L0,{children:"EMPFOHLEN"}),r.jsx(Ra,{children:"Job Flat MEDIUM"}),r.jsx(Ca,{children:"1.199 €"}),r.jsx(Ma,{children:"netto / Jahr"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Bis zu 12 Anzeigen im Jahr"}),r.jsx(Ce,{children:"Stadionmagazin-Präsenz"}),r.jsx(Ce,{children:"Social Media Posts"}),r.jsx(Ce,{children:"Stories & Highlights"})]}),r.jsx(Da,{children:"Medium Flat"})]}),r.jsxs(Aa,{children:[r.jsx(Ra,{children:"Job Flat PARTNER"}),r.jsx(Ca,{children:"1.499 €"}),r.jsx(Ma,{children:"netto / Jahr"}),r.jsxs(Ba,{children:[r.jsx(Ce,{children:"Unbegrenzte Anzeigen"}),r.jsx(Ce,{children:"Erwähnung bei Heimspielen"}),r.jsx(Ce,{children:'"Top Partner" Sichtbarkeit'}),r.jsx(Ce,{children:"Prioritärer Support"})]}),r.jsx(Da,{className:"secondary",children:"Partner Flat"})]})]}),r.jsxs(y6,{children:[r.jsx(v6,{children:"➕ Zusatzoptionen"}),r.jsxs(j6,{children:[r.jsxs(fd,{children:[r.jsx(hd,{children:"Social Story"}),r.jsx(md,{children:"39 €"}),r.jsx(gd,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),r.jsxs(fd,{children:[r.jsx(hd,{children:"Designservice"}),r.jsx(md,{children:"59 €"}),r.jsx(gd,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),r.jsxs(fd,{children:[r.jsx(hd,{children:"Stadionmagazin"}),r.jsx(md,{children:"99 €"}),r.jsx(gd,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),r.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:r.jsx(S6,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),r.jsxs(w6,{children:[r.jsx(z6,{children:"🎯 Warum SCKW Jobbörse?"}),r.jsxs(E6,{children:[r.jsxs(Oa,{children:[r.jsx(Na,{children:"🏠"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"👥"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"💰"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"📈"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"⚡"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),r.jsxs(Oa,{children:[r.jsx(Na,{children:"🤲"}),r.jsxs(Ha,{children:[r.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),r.jsx(Xd,{})]})}h.div`
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
`;h.div`
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
`;h.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;h.div`
  margin-bottom: 1.5rem;
`;h.div`
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
`;h.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;h.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${i=>Math.min(i.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`;h.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;h.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`;h.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;h.div`
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
`;h.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;h.div`
  flex: 1;
`;h.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;h.span`
  font-weight: 600;
  color: #374151;
`;h.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`;h.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`;h.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`;h.button`
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
`;h.div`
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
`;h.section`
  background: url("${Qd("herren",18)}") center/cover;
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
`;h.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`;h.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;h.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`;h.main`
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
`;h.section`
  margin-bottom: 4rem;
`;h.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`;h.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;h.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`;h.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;h.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`;h.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;h.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;h.div`
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
`;h.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;h.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${i=>i.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`;h.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`;h.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${i=>i.$isActive?"#fff":"rgba(255, 255, 255, 0.5)"};
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #fff;
    transform: scale(1.2);
  }
`;h.div`
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
`;h.div`
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
`;h.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;h.button`
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
`;h.button`
  position: absolute;
  top: 50%;
  ${i=>i.$direction==="prev"?"left: -60px;":"right: -60px;"}
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
    ${i=>i.$direction==="prev"?"left: -50px;":"right: -50px;"}
    font-size: 1.2rem;
    padding: 8px 12px;
  }
`;h.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`;h.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`;h.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;h.div`
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
`;h.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;h.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`;h.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`;h.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`;h.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`;h.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`;h.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`;h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;h.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`;h.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;h.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`;h.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`;h.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;h.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;h.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;h.a`
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
`;h.div`
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
`;h.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;h.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`;h.button`
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
`;h.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;h.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;h.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;h.button`
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
`;h.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;Rx();function T6(i,s){if(i.match(/^[a-z]+:\/\//i))return i;if(i.match(/^\/\//))return window.location.protocol+i;if(i.match(/^[a-z]+:/i))return i;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),d=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(d),s&&(c.href=s),d.href=i,d.href}const k6=(()=>{let i=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(i+=1,`u${s()}${i}`)})();function gi(i){const s=[];for(let u=0,c=i.length;u<c;u++)s.push(i[u]);return s}let La=null;function Hx(i={}){return La||(i.includeStyleProperties?(La=i.includeStyleProperties,La):(La=gi(window.getComputedStyle(document.documentElement)),La))}function Ws(i,s){const c=(i.ownerDocument.defaultView||window).getComputedStyle(i).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function A6(i){const s=Ws(i,"border-left-width"),u=Ws(i,"border-right-width");return i.clientWidth+s+u}function R6(i){const s=Ws(i,"border-top-width"),u=Ws(i,"border-bottom-width");return i.clientHeight+s+u}function Lx(i,s={}){const u=s.width||A6(i),c=s.height||R6(i);return{width:u,height:c}}function C6(){let i,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(i=parseInt(u,10),Number.isNaN(i)&&(i=1)),i||window.devicePixelRatio||1}const Rt=16384;function M6(i){(i.width>Rt||i.height>Rt)&&(i.width>Rt&&i.height>Rt?i.width>i.height?(i.height*=Rt/i.width,i.width=Rt):(i.width*=Rt/i.height,i.height=Rt):i.width>Rt?(i.height*=Rt/i.width,i.width=Rt):(i.width*=Rt/i.height,i.height=Rt))}function Fs(i){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=i})}async function B6(i){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(i)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function D6(i,s,u){const c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"svg"),m=document.createElementNS(c,"foreignObject");return d.setAttribute("width",`${s}`),d.setAttribute("height",`${u}`),d.setAttribute("viewBox",`0 0 ${s} ${u}`),m.setAttribute("width","100%"),m.setAttribute("height","100%"),m.setAttribute("x","0"),m.setAttribute("y","0"),m.setAttribute("externalResourcesRequired","true"),d.appendChild(m),m.appendChild(i),B6(d)}const bt=(i,s)=>{if(i instanceof s)return!0;const u=Object.getPrototypeOf(i);return u===null?!1:u.constructor.name===s.name||bt(u,s)};function O6(i){const s=i.getPropertyValue("content");return`${i.cssText} content: '${s.replace(/'|"/g,"")}';`}function N6(i,s){return Hx(s).map(u=>{const c=i.getPropertyValue(u),d=i.getPropertyPriority(u);return`${u}: ${c}${d?" !important":""};`}).join(" ")}function H6(i,s,u,c){const d=`.${i}:${s}`,m=u.cssText?O6(u):N6(u,c);return document.createTextNode(`${d}{${m}}`)}function U0(i,s,u,c){const d=window.getComputedStyle(i,u),m=d.getPropertyValue("content");if(m===""||m==="none")return;const p=k6();try{s.className=`${s.className} ${p}`}catch{return}const y=document.createElement("style");y.appendChild(H6(p,u,d,c)),s.appendChild(y)}function L6(i,s,u){U0(i,s,":before",u),U0(i,s,":after",u)}const G0="application/font-woff",V0="image/jpeg",U6={woff:G0,woff2:G0,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:V0,jpeg:V0,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function G6(i){const s=/\.([^./]*?)$/g.exec(i);return s?s[1]:""}function Wd(i){const s=G6(i).toLowerCase();return U6[s]||""}function V6(i){return i.split(/,/)[1]}function Md(i){return i.search(/^(data:)/)!==-1}function Y6(i,s){return`data:${s};base64,${i}`}async function Ux(i,s,u){const c=await fetch(i,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const d=await c.blob();return new Promise((m,p)=>{const y=new FileReader;y.onerror=p,y.onloadend=()=>{try{m(u({res:c,result:y.result}))}catch(b){p(b)}},y.readAsDataURL(d)})}const pd={};function $6(i,s,u){let c=i.replace(/\?.*/,"");return u&&(c=i),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Fd(i,s,u){const c=$6(i,s,u.includeQueryParams);if(pd[c]!=null)return pd[c];u.cacheBust&&(i+=(/\?/.test(i)?"&":"?")+new Date().getTime());let d;try{const m=await Ux(i,u.fetchRequestInit,({res:p,result:y})=>(s||(s=p.headers.get("Content-Type")||""),V6(y)));d=Y6(m,s)}catch(m){d=u.imagePlaceholder||"";let p=`Failed to fetch resource: ${i}`;m&&(p=typeof m=="string"?m:m.message),p&&console.warn(p)}return pd[c]=d,d}async function q6(i){const s=i.toDataURL();return s==="data:,"?i.cloneNode(!1):Fs(s)}async function K6(i,s){if(i.currentSrc){const m=document.createElement("canvas"),p=m.getContext("2d");m.width=i.clientWidth,m.height=i.clientHeight,p?.drawImage(i,0,0,m.width,m.height);const y=m.toDataURL();return Fs(y)}const u=i.poster,c=Wd(u),d=await Fd(u,c,s);return Fs(d)}async function Z6(i,s){var u;try{if(!((u=i?.contentDocument)===null||u===void 0)&&u.body)return await oo(i.contentDocument.body,s,!0)}catch{}return i.cloneNode(!1)}async function X6(i,s){return bt(i,HTMLCanvasElement)?q6(i):bt(i,HTMLVideoElement)?K6(i,s):bt(i,HTMLIFrameElement)?Z6(i,s):i.cloneNode(Gx(i))}const Q6=i=>i.tagName!=null&&i.tagName.toUpperCase()==="SLOT",Gx=i=>i.tagName!=null&&i.tagName.toUpperCase()==="SVG";async function P6(i,s,u){var c,d;if(Gx(s))return s;let m=[];return Q6(i)&&i.assignedNodes?m=gi(i.assignedNodes()):bt(i,HTMLIFrameElement)&&(!((c=i.contentDocument)===null||c===void 0)&&c.body)?m=gi(i.contentDocument.body.childNodes):m=gi(((d=i.shadowRoot)!==null&&d!==void 0?d:i).childNodes),m.length===0||bt(i,HTMLVideoElement)||await m.reduce((p,y)=>p.then(()=>oo(y,u)).then(b=>{b&&s.appendChild(b)}),Promise.resolve()),s}function J6(i,s,u){const c=s.style;if(!c)return;const d=window.getComputedStyle(i);d.cssText?(c.cssText=d.cssText,c.transformOrigin=d.transformOrigin):Hx(u).forEach(m=>{let p=d.getPropertyValue(m);m==="font-size"&&p.endsWith("px")&&(p=`${Math.floor(parseFloat(p.substring(0,p.length-2)))-.1}px`),bt(i,HTMLIFrameElement)&&m==="display"&&p==="inline"&&(p="block"),m==="d"&&s.getAttribute("d")&&(p=`path(${s.getAttribute("d")})`),c.setProperty(m,p,d.getPropertyPriority(m))})}function W6(i,s){bt(i,HTMLTextAreaElement)&&(s.innerHTML=i.value),bt(i,HTMLInputElement)&&s.setAttribute("value",i.value)}function F6(i,s){if(bt(i,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(d=>i.value===d.getAttribute("value"));c&&c.setAttribute("selected","")}}function I6(i,s,u){return bt(s,Element)&&(J6(i,s,u),L6(i,s,u),W6(i,s),F6(i,s)),s}async function ez(i,s){const u=i.querySelectorAll?i.querySelectorAll("use"):[];if(u.length===0)return i;const c={};for(let m=0;m<u.length;m++){const y=u[m].getAttribute("xlink:href");if(y){const b=i.querySelector(y),x=document.querySelector(y);!b&&x&&!c[y]&&(c[y]=await oo(x,s,!0))}}const d=Object.values(c);if(d.length){const m="http://www.w3.org/1999/xhtml",p=document.createElementNS(m,"svg");p.setAttribute("xmlns",m),p.style.position="absolute",p.style.width="0",p.style.height="0",p.style.overflow="hidden",p.style.display="none";const y=document.createElementNS(m,"defs");p.appendChild(y);for(let b=0;b<d.length;b++)y.appendChild(d[b]);i.appendChild(p)}return i}async function oo(i,s,u){return!u&&s.filter&&!s.filter(i)?null:Promise.resolve(i).then(c=>X6(c,s)).then(c=>P6(i,c,s)).then(c=>I6(i,c,s)).then(c=>ez(c,s))}const Vx=/url\((['"]?)([^'"]+?)\1\)/g,tz=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,nz=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function iz(i){const s=i.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function az(i){const s=[];return i.replace(Vx,(u,c,d)=>(s.push(d),u)),s.filter(u=>!Md(u))}async function rz(i,s,u,c,d){try{const m=u?T6(s,u):s,p=Wd(s);let y;return d||(y=await Fd(m,p,c)),i.replace(iz(s),`$1${y}$3`)}catch{}return i}function lz(i,{preferredFontFormat:s}){return s?i.replace(nz,u=>{for(;;){const[c,,d]=tz.exec(u)||[];if(!d)return"";if(d===s)return`src: ${c};`}}):i}function Yx(i){return i.search(Vx)!==-1}async function $x(i,s,u){if(!Yx(i))return i;const c=lz(i,u);return az(c).reduce((m,p)=>m.then(y=>rz(y,p,s,u)),Promise.resolve(c))}async function Ua(i,s,u){var c;const d=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(i);if(d){const m=await $x(d,null,u);return s.style.setProperty(i,m,s.style.getPropertyPriority(i)),!0}return!1}async function sz(i,s){await Ua("background",i,s)||await Ua("background-image",i,s),await Ua("mask",i,s)||await Ua("-webkit-mask",i,s)||await Ua("mask-image",i,s)||await Ua("-webkit-mask-image",i,s)}async function oz(i,s){const u=bt(i,HTMLImageElement);if(!(u&&!Md(i.src))&&!(bt(i,SVGImageElement)&&!Md(i.href.baseVal)))return;const c=u?i.src:i.href.baseVal,d=await Fd(c,Wd(c),s);await new Promise((m,p)=>{i.onload=m,i.onerror=s.onImageErrorHandler?(...b)=>{try{m(s.onImageErrorHandler(...b))}catch(x){p(x)}}:p;const y=i;y.decode&&(y.decode=m),y.loading==="lazy"&&(y.loading="eager"),u?(i.srcset="",i.src=d):i.href.baseVal=d})}async function cz(i,s){const c=gi(i.childNodes).map(d=>qx(d,s));await Promise.all(c).then(()=>i)}async function qx(i,s){bt(i,Element)&&(await sz(i,s),await oz(i,s),await cz(i,s))}function uz(i,s){const{style:u}=i;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(d=>{u[d]=c[d]}),i}const Y0={};async function $0(i){let s=Y0[i];if(s!=null)return s;const c=await(await fetch(i)).text();return s={url:i,cssText:c},Y0[i]=s,s}async function q0(i,s){let u=i.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,m=(u.match(/url\([^)]+\)/g)||[]).map(async p=>{let y=p.replace(c,"$1");return y.startsWith("https://")||(y=new URL(y,i.url).href),Ux(y,s.fetchRequestInit,({result:b})=>(u=u.replace(p,`url(${b})`),[p,b]))});return Promise.all(m).then(()=>u)}function K0(i){if(i==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=i.replace(u,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const b=d.exec(c);if(b===null)break;s.push(b[0])}c=c.replace(d,"");const m=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,p="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",y=new RegExp(p,"gi");for(;;){let b=m.exec(c);if(b===null){if(b=y.exec(c),b===null)break;m.lastIndex=y.lastIndex}else y.lastIndex=m.lastIndex;s.push(b[0])}return s}async function dz(i,s){const u=[],c=[];return i.forEach(d=>{if("cssRules"in d)try{gi(d.cssRules||[]).forEach((m,p)=>{if(m.type===CSSRule.IMPORT_RULE){let y=p+1;const b=m.href,x=$0(b).then(w=>q0(w,s)).then(w=>K0(w).forEach(R=>{try{d.insertRule(R,R.startsWith("@import")?y+=1:d.cssRules.length)}catch(C){console.error("Error inserting rule from remote css",{rule:R,error:C})}})).catch(w=>{console.error("Error loading remote css",w.toString())});c.push(x)}})}catch(m){const p=i.find(y=>y.href==null)||document.styleSheets[0];d.href!=null&&c.push($0(d.href).then(y=>q0(y,s)).then(y=>K0(y).forEach(b=>{p.insertRule(b,p.cssRules.length)})).catch(y=>{console.error("Error loading remote stylesheet",y)})),console.error("Error inlining remote css file",m)}}),Promise.all(c).then(()=>(i.forEach(d=>{if("cssRules"in d)try{gi(d.cssRules||[]).forEach(m=>{u.push(m)})}catch(m){console.error(`Error while reading CSS rules from ${d.href}`,m)}}),u))}function fz(i){return i.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>Yx(s.style.getPropertyValue("src")))}async function hz(i,s){if(i.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=gi(i.ownerDocument.styleSheets),c=await dz(u,s);return fz(c)}function Kx(i){return i.trim().replace(/["']/g,"")}function mz(i){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(m=>{s.add(Kx(m))}),Array.from(c.children).forEach(m=>{m instanceof HTMLElement&&u(m)})}return u(i),s}async function gz(i,s){const u=await hz(i,s),c=mz(i);return(await Promise.all(u.filter(m=>c.has(Kx(m.style.fontFamily))).map(m=>{const p=m.parentStyleSheet?m.parentStyleSheet.href:null;return $x(m.cssText,p,s)}))).join(`
`)}async function pz(i,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await gz(i,s);if(u){const c=document.createElement("style"),d=document.createTextNode(u);c.appendChild(d),i.firstChild?i.insertBefore(c,i.firstChild):i.appendChild(c)}}async function xz(i,s={}){const{width:u,height:c}=Lx(i,s),d=await oo(i,s,!0);return await pz(d,s),await qx(d,s),uz(d,s),await D6(d,u,c)}async function bz(i,s={}){const{width:u,height:c}=Lx(i,s),d=await xz(i,s),m=await Fs(d),p=document.createElement("canvas"),y=p.getContext("2d"),b=s.pixelRatio||C6(),x=s.canvasWidth||u,w=s.canvasHeight||c;return p.width=x*b,p.height=w*b,s.skipAutoScale||M6(p),p.style.width=`${x}`,p.style.height=`${w}`,s.backgroundColor&&(y.fillStyle=s.backgroundColor,y.fillRect(0,0,p.width,p.height)),y.drawImage(m,0,0,p.width,p.height),p}async function yz(i,s={}){return(await bz(i,s)).toDataURL()}const el=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],vz=h.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,jz=h.div`
  max-width: 1200px;
  margin: 0 auto;
`,Sz=h.div`
  text-align: center;
  margin-bottom: 2rem;
`,wz=h.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,zz=h.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,Ez=h.select`
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
`,_z=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,Tz=h.div`
  flex: 1;
  min-width: 0;
`,kz=h.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,Az=h.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,Rz=h.div`
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
    background: ${i=>i.$hasLogo?"transparent":"rgba(59,130,246,0.08)"};
  }
`,Cz=h.img`
  width: ${i=>i.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${i=>i.$offsetX}%, ${i=>i.$offsetY}%);
`,Mz=h.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,Bz=h.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,Dz=h.div`
  background: #fff;
  border: 2px solid ${i=>i.$active?"#3b82f6":"#e5e7eb"};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
  }
`,Oz=h.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,Nz=h.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Hz=h.label`
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
`,Lz=h.button`
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
`,Uz=h.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,Gz=h.input`
  display: none;
`,Vz=h.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,xd=h.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,bd=h.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,yd=h.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,Yz=h.button`
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
`,$z=h.button`
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
`;function qz(){const[i,s]=A.useState(el[0].id),[u,c]=A.useState(null),[d,m]=A.useState([]),[p,y]=A.useState(!1),b=A.useRef({}),x=A.useRef(null),w=el.find(D=>D.id===i)??el[0],R=D=>d.find($=>$.zoneId===D),C=A.useCallback((D,$)=>{if(!$)return;const U=new FileReader;U.onload=F=>{const H=F.target?.result;m(ve=>[...ve.filter(me=>me.zoneId!==D),{zoneId:D,dataUrl:H,scale:1,offsetX:0,offsetY:0}])},U.readAsDataURL($)},[]),V=A.useCallback((D,$)=>{m(U=>U.map(F=>F.zoneId===D?{...F,scale:$}:F))},[]),Y=A.useCallback((D,$,U)=>{m(F=>F.map(H=>H.zoneId===D?{...H,offsetX:$,offsetY:U}:H))},[]),q=A.useCallback(D=>{m($=>$.filter(U=>U.zoneId!==D))},[]),Q=A.useCallback(()=>{m([]),c(null)},[]),G=A.useCallback(async()=>{if(x.current){y(!0);try{const D=await yz(x.current,{pixelRatio:2,cacheBust:!0}),$=document.createElement("a");$.download=`${w.label}-mockup.png`,$.href=D,$.click()}finally{y(!1)}}},[w.label]),W=D=>{c(D.id),R(D.id)||b.current[D.id]?.click()};return r.jsx(vz,{children:r.jsxs(jz,{children:[r.jsxs(Sz,{children:[r.jsx(wz,{children:"Mockup Generator"}),r.jsx(zz,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),el.length>1&&r.jsx(Ez,{value:i,onChange:D=>{s(D.target.value),m([]),c(null)},children:el.map(D=>r.jsx("option",{value:D.id,children:D.label},D.id))}),r.jsxs(_z,{children:[r.jsx(Tz,{children:r.jsxs(kz,{ref:x,children:[r.jsx(Az,{src:w.image,alt:w.label,draggable:!1}),w.zones.map(D=>{const $=R(D.id);return r.jsx(Rz,{$active:u===D.id,$hasLogo:!!$,style:{left:`${D.x}%`,top:`${D.y}%`,width:`${D.width}%`,height:`${D.height}%`},onClick:()=>W(D),onDragOver:U=>{U.preventDefault(),c(D.id)},onDrop:U=>{U.preventDefault();const F=U.dataTransfer.files?.[0];C(D.id,F)},children:$&&r.jsx(Cz,{src:$.dataUrl,alt:"Logo",draggable:!1,$scale:$.scale,$offsetX:$.offsetX,$offsetY:$.offsetY})},D.id)})]})}),r.jsxs(Mz,{children:[r.jsx(Bz,{children:"Werbeflächen"}),w.zones.map(D=>{const $=R(D.id);return r.jsxs(Dz,{$active:u===D.id,onClick:()=>c(D.id),children:[r.jsx(Oz,{children:D.label}),r.jsxs(Nz,{children:[r.jsx(Hz,{htmlFor:`file-${D.id}`,children:$?"Ändern":"Logo hochladen"}),r.jsx(Gz,{id:`file-${D.id}`,ref:U=>{b.current[D.id]=U},type:"file",accept:"image/*",onChange:U=>C(D.id,U.target.files?.[0])}),$&&r.jsx(Lz,{onClick:U=>{U.stopPropagation(),q(D.id)},children:"Entfernen"}),$&&r.jsx(Uz,{src:$.dataUrl,alt:"Vorschau"})]}),$&&r.jsxs(r.Fragment,{children:[r.jsxs(xd,{children:[r.jsxs(bd,{children:[Math.round($.scale*100),"%"]}),r.jsx(yd,{type:"range",min:"0.3",max:"3",step:"0.05",value:$.scale,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),V(D.id,parseFloat(U.target.value))}})]}),r.jsxs(xd,{children:[r.jsx(bd,{children:"X"}),r.jsx(yd,{type:"range",min:"-100",max:"100",step:"1",value:$.offsetX,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),Y(D.id,parseFloat(U.target.value),$.offsetY)}})]}),r.jsxs(xd,{children:[r.jsx(bd,{children:"Y"}),r.jsx(yd,{type:"range",min:"-100",max:"100",step:"1",value:$.offsetY,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),Y(D.id,$.offsetX,parseFloat(U.target.value))}})]})]}),!$&&r.jsx(Vz,{children:"Klicken oder Bild hierher ziehen"})]},D.id)}),d.length>0&&r.jsxs(r.Fragment,{children:[r.jsx($z,{onClick:G,disabled:p,children:p?"Wird erstellt...":"Bild herunterladen"}),r.jsx(Yz,{onClick:Q,children:"Alle Logos entfernen"})]})]})]})]})})}const Kz=!1;function Zz(){return r.jsx(Gj,{children:r.jsxs(pj,{children:[r.jsx(On,{path:"/",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(Ys,{to:"/sponsoring",replace:!0})]})}),r.jsx(On,{path:"/sponsoring",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(m3,{})]})}),r.jsx(On,{path:"/sponsoring-v2",element:r.jsx(Ys,{to:"/sponsoring",replace:!0})}),r.jsx(On,{path:"/sponsoring-v1",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(m5,{})]})}),r.jsx(On,{path:"/sponsoring-handoff",element:r.jsx($3,{})}),r.jsx(On,{path:"/mockup-generator",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(qz,{})]})}),r.jsx(On,{path:"/jobs",element:r.jsxs(r.Fragment,{children:[r.jsx(Fr,{}),r.jsx(_6,{})]})}),Kz,r.jsx(On,{path:"*",element:r.jsx(Ys,{to:"/sponsoring",replace:!0})})]})})}const Xz={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");zy.createRoot(document.getElementById("root")).render(r.jsx(A.StrictMode,{children:r.jsx(wv,{theme:Xz,children:r.jsx(Zz,{})})}));
