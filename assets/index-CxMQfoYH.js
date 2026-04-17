(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function wy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var pu={exports:{}},Qr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Ey(){if(Ng)return Qr;Ng=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,f){var b=null;if(f!==void 0&&(b=""+f),d.key!==void 0&&(b=""+d.key),"key"in d){f={};for(var v in d)v!=="key"&&(f[v]=d[v])}else f=d;return d=f.ref,{$$typeof:a,type:c,key:b,ref:d!==void 0?d:null,props:f}}return Qr.Fragment=s,Qr.jsx=u,Qr.jsxs=u,Qr}var Lg;function _y(){return Lg||(Lg=1,pu.exports=Ey()),pu.exports}var r=_y(),bu={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function zy(){if(Ug)return se;Ug=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),b=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function w(E){return E===null||typeof E!="object"?null:(E=S&&E[S]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,N={};function G(E,q,X){this.props=E,this.context=q,this.refs=N,this.updater=X||M}G.prototype.isReactComponent={},G.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},G.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function O(){}O.prototype=G.prototype;function P(E,q,X){this.props=E,this.context=q,this.refs=N,this.updater=X||M}var k=P.prototype=new O;k.constructor=P,A(k,G.prototype),k.isPureReactComponent=!0;var K=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function $(E,q,X,J,ee,me){return X=me.ref,{$$typeof:a,type:E,key:q,ref:X!==void 0?X:null,props:me}}function he(E,q){return $(E.type,q,void 0,void 0,void 0,E.props)}function oe(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function Me(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(X){return q[X]})}var Z=/\/+/g;function xe(E,q){return typeof E=="object"&&E!==null&&E.key!=null?Me(""+E.key):q.toString(36)}function st(){}function qe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(st,st):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Te(E,q,X,J,ee){var me=typeof E;(me==="undefined"||me==="boolean")&&(E=null);var ie=!1;if(E===null)ie=!0;else switch(me){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(E.$$typeof){case a:case s:ie=!0;break;case y:return ie=E._init,Te(ie(E._payload),q,X,J,ee)}}if(ie)return ee=ee(E),ie=J===""?"."+xe(E,0):J,K(ee)?(X="",ie!=null&&(X=ie.replace(Z,"$&/")+"/"),Te(ee,q,X,"",function(ot){return ot})):ee!=null&&(oe(ee)&&(ee=he(ee,X+(ee.key==null||E&&E.key===ee.key?"":(""+ee.key).replace(Z,"$&/")+"/")+ie)),q.push(ee)),1;ie=0;var Je=J===""?".":J+":";if(K(E))for(var je=0;je<E.length;je++)J=E[je],me=Je+xe(J,je),ie+=Te(J,q,X,me,ee);else if(je=w(E),typeof je=="function")for(E=je.call(E),je=0;!(J=E.next()).done;)J=J.value,me=Je+xe(J,je++),ie+=Te(J,q,X,me,ee);else if(me==="object"){if(typeof E.then=="function")return Te(qe(E),q,X,J,ee);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function L(E,q,X){if(E==null)return E;var J=[],ee=0;return Te(E,J,"","",function(me){return q.call(X,me,ee++)}),J}function Q(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(X){(E._status===0||E._status===-1)&&(E._status=1,E._result=X)},function(X){(E._status===0||E._status===-1)&&(E._status=2,E._result=X)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var ne=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function ce(){}return se.Children={map:L,forEach:function(E,q,X){L(E,function(){q.apply(this,arguments)},X)},count:function(E){var q=0;return L(E,function(){q++}),q},toArray:function(E){return L(E,function(q){return q})||[]},only:function(E){if(!oe(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},se.Component=G,se.Fragment=u,se.Profiler=d,se.PureComponent=P,se.StrictMode=c,se.Suspense=h,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,se.__COMPILER_RUNTIME={__proto__:null,c:function(E){return U.H.useMemoCache(E)}},se.cache=function(E){return function(){return E.apply(null,arguments)}},se.cloneElement=function(E,q,X){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=A({},E.props),ee=E.key,me=void 0;if(q!=null)for(ie in q.ref!==void 0&&(me=void 0),q.key!==void 0&&(ee=""+q.key),q)!I.call(q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&q.ref===void 0||(J[ie]=q[ie]);var ie=arguments.length-2;if(ie===1)J.children=X;else if(1<ie){for(var Je=Array(ie),je=0;je<ie;je++)Je[je]=arguments[je+2];J.children=Je}return $(E.type,ee,void 0,void 0,me,J)},se.createContext=function(E){return E={$$typeof:b,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},se.createElement=function(E,q,X){var J,ee={},me=null;if(q!=null)for(J in q.key!==void 0&&(me=""+q.key),q)I.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ee[J]=q[J]);var ie=arguments.length-2;if(ie===1)ee.children=X;else if(1<ie){for(var Je=Array(ie),je=0;je<ie;je++)Je[je]=arguments[je+2];ee.children=Je}if(E&&E.defaultProps)for(J in ie=E.defaultProps,ie)ee[J]===void 0&&(ee[J]=ie[J]);return $(E,me,void 0,void 0,null,ee)},se.createRef=function(){return{current:null}},se.forwardRef=function(E){return{$$typeof:v,render:E}},se.isValidElement=oe,se.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:Q}},se.memo=function(E,q){return{$$typeof:m,type:E,compare:q===void 0?null:q}},se.startTransition=function(E){var q=U.T,X={};U.T=X;try{var J=E(),ee=U.S;ee!==null&&ee(X,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ce,ne)}catch(me){ne(me)}finally{U.T=q}},se.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},se.use=function(E){return U.H.use(E)},se.useActionState=function(E,q,X){return U.H.useActionState(E,q,X)},se.useCallback=function(E,q){return U.H.useCallback(E,q)},se.useContext=function(E){return U.H.useContext(E)},se.useDebugValue=function(){},se.useDeferredValue=function(E,q){return U.H.useDeferredValue(E,q)},se.useEffect=function(E,q,X){var J=U.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(E,q)},se.useId=function(){return U.H.useId()},se.useImperativeHandle=function(E,q,X){return U.H.useImperativeHandle(E,q,X)},se.useInsertionEffect=function(E,q){return U.H.useInsertionEffect(E,q)},se.useLayoutEffect=function(E,q){return U.H.useLayoutEffect(E,q)},se.useMemo=function(E,q){return U.H.useMemo(E,q)},se.useOptimistic=function(E,q){return U.H.useOptimistic(E,q)},se.useReducer=function(E,q,X){return U.H.useReducer(E,q,X)},se.useRef=function(E){return U.H.useRef(E)},se.useState=function(E){return U.H.useState(E)},se.useSyncExternalStore=function(E,q,X){return U.H.useSyncExternalStore(E,q,X)},se.useTransition=function(){return U.H.useTransition()},se.version="19.1.0",se}var Hg;function wd(){return Hg||(Hg=1,bu.exports=zy()),bu.exports}var T=wd();const Ee=wy(T);var xu={exports:{}},Zr={},yu={exports:{}},vu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Ty(){return Gg||(Gg=1,function(a){function s(L,Q){var ne=L.length;L.push(Q);e:for(;0<ne;){var ce=ne-1>>>1,E=L[ce];if(0<d(E,Q))L[ce]=Q,L[ne]=E,ne=ce;else break e}}function u(L){return L.length===0?null:L[0]}function c(L){if(L.length===0)return null;var Q=L[0],ne=L.pop();if(ne!==Q){L[0]=ne;e:for(var ce=0,E=L.length,q=E>>>1;ce<q;){var X=2*(ce+1)-1,J=L[X],ee=X+1,me=L[ee];if(0>d(J,ne))ee<E&&0>d(me,J)?(L[ce]=me,L[ee]=ne,ce=ee):(L[ce]=J,L[X]=ne,ce=X);else if(ee<E&&0>d(me,ne))L[ce]=me,L[ee]=ne,ce=ee;else break e}}return Q}function d(L,Q){var ne=L.sortIndex-Q.sortIndex;return ne!==0?ne:L.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var b=Date,v=b.now();a.unstable_now=function(){return b.now()-v}}var h=[],m=[],y=1,S=null,w=3,M=!1,A=!1,N=!1,G=!1,O=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function K(L){for(var Q=u(m);Q!==null;){if(Q.callback===null)c(m);else if(Q.startTime<=L)c(m),Q.sortIndex=Q.expirationTime,s(h,Q);else break;Q=u(m)}}function U(L){if(N=!1,K(L),!A)if(u(h)!==null)A=!0,I||(I=!0,xe());else{var Q=u(m);Q!==null&&Te(U,Q.startTime-L)}}var I=!1,$=-1,he=5,oe=-1;function Me(){return G?!0:!(a.unstable_now()-oe<he)}function Z(){if(G=!1,I){var L=a.unstable_now();oe=L;var Q=!0;try{e:{A=!1,N&&(N=!1,P($),$=-1),M=!0;var ne=w;try{t:{for(K(L),S=u(h);S!==null&&!(S.expirationTime>L&&Me());){var ce=S.callback;if(typeof ce=="function"){S.callback=null,w=S.priorityLevel;var E=ce(S.expirationTime<=L);if(L=a.unstable_now(),typeof E=="function"){S.callback=E,K(L),Q=!0;break t}S===u(h)&&c(h),K(L)}else c(h);S=u(h)}if(S!==null)Q=!0;else{var q=u(m);q!==null&&Te(U,q.startTime-L),Q=!1}}break e}finally{S=null,w=ne,M=!1}Q=void 0}}finally{Q?xe():I=!1}}}var xe;if(typeof k=="function")xe=function(){k(Z)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,qe=st.port2;st.port1.onmessage=Z,xe=function(){qe.postMessage(null)}}else xe=function(){O(Z,0)};function Te(L,Q){$=O(function(){L(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(L){switch(w){case 1:case 2:case 3:var Q=3;break;default:Q=w}var ne=w;w=Q;try{return L()}finally{w=ne}},a.unstable_requestPaint=function(){G=!0},a.unstable_runWithPriority=function(L,Q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ne=w;w=L;try{return Q()}finally{w=ne}},a.unstable_scheduleCallback=function(L,Q,ne){var ce=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ce+ne:ce):ne=ce,L){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ne+E,L={id:y++,callback:Q,priorityLevel:L,startTime:ne,expirationTime:E,sortIndex:-1},ne>ce?(L.sortIndex=ne,s(m,L),u(h)===null&&L===u(m)&&(N?(P($),$=-1):N=!0,Te(U,ne-ce))):(L.sortIndex=E,s(h,L),A||M||(A=!0,I||(I=!0,xe()))),L},a.unstable_shouldYield=Me,a.unstable_wrapCallback=function(L){var Q=w;return function(){var ne=w;w=Q;try{return L.apply(this,arguments)}finally{w=ne}}}}(vu)),vu}var $g;function Cy(){return $g||($g=1,yu.exports=Ty()),yu.exports}var Su={exports:{}},dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Ay(){if(Vg)return dt;Vg=1;var a=wd();function s(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(h,m,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:S==null?null:""+S,children:h,containerInfo:m,implementation:y}}var b=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,dt.createPortal=function(h,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(s(299));return f(h,m,null,y)},dt.flushSync=function(h){var m=b.T,y=c.p;try{if(b.T=null,c.p=2,h)return h()}finally{b.T=m,c.p=y,c.d.f()}},dt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(h,m))},dt.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},dt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var y=m.as,S=v(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?c.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:M}):y==="script"&&c.d.X(h,{crossOrigin:S,integrity:w,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=v(m.as,m.crossOrigin);c.d.M(h,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(h)},dt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,S=v(y,m.crossOrigin);c.d.L(h,y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(h,m){if(typeof h=="string")if(m){var y=v(m.as,m.crossOrigin);c.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(h)},dt.requestFormReset=function(h){c.d.r(h)},dt.unstable_batchedUpdates=function(h,m){return h(m)},dt.useFormState=function(h,m,y){return b.H.useFormState(h,m,y)},dt.useFormStatus=function(){return b.H.useHostTransitionStatus()},dt.version="19.1.0",dt}var Yg;function ky(){if(Yg)return Su.exports;Yg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Su.exports=Ay(),Su.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Ry(){if(qg)return Zr;qg=1;var a=Cy(),s=wd(),u=ky();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return v(l),e;if(o===i)return v(l),t;o=o.sibling}throw Error(c(188))}if(n.return!==i.return)n=l,i=o;else{for(var g=!1,x=l.child;x;){if(x===n){g=!0,n=l,i=o;break}if(x===i){g=!0,i=l,n=o;break}x=x.sibling}if(!g){for(x=o.child;x;){if(x===n){g=!0,n=o,i=l;break}if(x===i){g=!0,i=o,n=l;break}x=x.sibling}if(!g)throw Error(c(189))}}if(n.alternate!==i)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),k=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),Me=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case G:return"Profiler";case N:return"StrictMode";case U:return"Suspense";case I:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case k:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:qe(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return qe(e(t))}catch{}}return null}var Te=Array.isArray,L=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ce=[],E=-1;function q(e){return{current:e}}function X(e){0>E||(e.current=ce[E],ce[E]=null,E--)}function J(e,t){E++,ce[E]=e.current,e.current=t}var ee=q(null),me=q(null),ie=q(null),Je=q(null);function je(e,t){switch(J(ie,t),J(me,e),J(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ug(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ug(t),e=dg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(ee),J(ee,e)}function ot(){X(ee),X(me),X(ie)}function ma(e){e.memoizedState!==null&&J(Je,e);var t=ee.current,n=dg(t,e.type);t!==n&&(J(me,e),J(ee,n))}function bn(e){me.current===e&&(X(ee),X(me)),Je.current===e&&(X(Je),Vr._currentValue=ne)}var Ut=Object.prototype.hasOwnProperty,no=a.unstable_scheduleCallback,ao=a.unstable_cancelCallback,t1=a.unstable_shouldYield,n1=a.unstable_requestPaint,cn=a.unstable_now,a1=a.unstable_getCurrentPriorityLevel,Yd=a.unstable_ImmediatePriority,qd=a.unstable_UserBlockingPriority,ll=a.unstable_NormalPriority,i1=a.unstable_LowPriority,Kd=a.unstable_IdlePriority,r1=a.log,l1=a.unstable_setDisableYieldValue,Ji=null,zt=null;function Hn(e){if(typeof r1=="function"&&l1(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Ji,e)}catch{}}var Tt=Math.clz32?Math.clz32:c1,s1=Math.log,o1=Math.LN2;function c1(e){return e>>>=0,e===0?32:31-(s1(e)/o1|0)|0}var sl=256,ol=4194304;function ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cl(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,o=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~o,i!==0?l=ga(i):(g&=x,g!==0?l=ga(g):n||(n=x&~e,n!==0&&(l=ga(n))))):(x=i&~o,x!==0?l=ga(x):g!==0?l=ga(g):n||(n=i&~e,n!==0&&(l=ga(n)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:l}function Ii(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function u1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(){var e=sl;return sl<<=1,(sl&4194048)===0&&(sl=256),e}function Qd(){var e=ol;return ol<<=1,(ol&62914560)===0&&(ol=4194304),e}function io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function d1(e,t,n,i,l,o){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,j=e.expirationTimes,R=e.hiddenUpdates;for(n=g&~n;0<n;){var H=31-Tt(n),Y=1<<H;x[H]=0,j[H]=-1;var D=R[H];if(D!==null)for(R[H]=null,H=0;H<D.length;H++){var B=D[H];B!==null&&(B.lane&=-536870913)}n&=~Y}i!==0&&Zd(e,i,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(g&~t))}function Zd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Tt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function Xd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Tt(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function ro(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jd(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:kg(e.type))}function f1(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var Gn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Gn,pt="__reactProps$"+Gn,qa="__reactContainer$"+Gn,so="__reactEvents$"+Gn,h1="__reactListeners$"+Gn,m1="__reactHandles$"+Gn,Id="__reactResources$"+Gn,Wi="__reactMarker$"+Gn;function oo(e){delete e[ct],delete e[pt],delete e[so],delete e[h1],delete e[m1]}function Ka(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qa]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gg(e);e!==null;){if(n=e[ct])return n;e=gg(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){if(e=e[ct]||e[qa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function er(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Qa(e){var t=e[Id];return t||(t=e[Id]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[Wi]=!0}var Fd=new Set,Wd={};function pa(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(Wd[e]=t,e=0;e<t.length;e++)Fd.add(t[e])}var g1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ef={},tf={};function p1(e){return Ut.call(tf,e)?!0:Ut.call(ef,e)?!1:g1.test(e)?tf[e]=!0:(ef[e]=!0,!1)}function ul(e,t,n){if(p1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function dl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function xn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var co,nf;function Xa(e){if(co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);co=t&&t[1]||"",nf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+co+e+nf}var uo=!1;function fo(e,t){if(!e||uo)return"";uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var D=B}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(B){D=B}e.call(Y.prototype)}}else{try{throw Error()}catch(B){D=B}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&D&&typeof B.stack=="string")return[B.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),g=o[0],x=o[1];if(g&&x){var j=g.split(`
`),R=x.split(`
`);for(l=i=0;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(i===j.length||l===R.length)for(i=j.length-1,l=R.length-1;1<=i&&0<=l&&j[i]!==R[l];)l--;for(;1<=i&&0<=l;i--,l--)if(j[i]!==R[l]){if(i!==1||l!==1)do if(i--,l--,0>l||j[i]!==R[l]){var H=`
`+j[i].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=i&&0<=l);break}}}finally{uo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Xa(n):""}function b1(e){switch(e.tag){case 26:case 27:case 5:return Xa(e.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 15:return fo(e.type,!1);case 11:return fo(e.type.render,!1);case 1:return fo(e.type,!0);case 31:return Xa("Activity");default:return""}}function af(e){try{var t="";do t+=b1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x1(e){var t=rf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){i=""+g,o.call(this,g)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(g){i=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fl(e){e._valueTracker||(e._valueTracker=x1(e))}function lf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=rf(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var y1=/[\n"\\]/g;function Gt(e){return e.replace(y1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ho(e,t,n,i,l,o,g,x){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?mo(e,g,Ht(t)):n!=null?mo(e,g,Ht(n)):i!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Ht(x):e.removeAttribute("name")}function sf(e,t,n,i,l,o,g,x){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g)}function mo(e,t,n){t==="number"&&hl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ja(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function of(e,t,n){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ht(n):""}function cf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(c(92));if(Te(i)){if(1<i.length)throw Error(c(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ht(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var v1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||v1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function df(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&uf(e,l,i)}else for(var o in t)t.hasOwnProperty(o)&&uf(e,o,t[o])}function go(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return j1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var po=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Wa=null;function ff(e){var t=Pa(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ho(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[pt]||null;if(!l)throw Error(c(90));ho(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&lf(i)}break e;case"textarea":of(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ja(e,!!n.multiple,t,!1)}}}var xo=!1;function hf(e,t,n){if(xo)return e(t,n);xo=!0;try{var i=e(t);return i}finally{if(xo=!1,(Fa!==null||Wa!==null)&&(Wl(),Fa&&(t=Fa,e=Wa,Wa=Fa=null,ff(t),e)))for(t=0;t<e.length;t++)ff(e[t])}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var i=n[pt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yo=!1;if(yn)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){yo=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{yo=!1}var $n=null,vo=null,gl=null;function mf(){if(gl)return gl;var e,t=vo,n=t.length,i,l="value"in $n?$n.value:$n.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var g=n-e;for(i=1;i<=g&&t[n-i]===l[o-i];i++);return gl=l.slice(e,1<i?1-i:void 0)}function pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function gf(){return!1}function bt(e){function t(n,i,l,o,g){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=g,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(o):o[x]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?bl:gf,this.isPropagationStopped=gf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=bt(ba),ar=y({},ba,{view:0,detail:0}),w1=bt(ar),So,jo,ir,yl=y({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(So=e.screenX-ir.screenX,jo=e.screenY-ir.screenY):jo=So=0,ir=e),So)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),pf=bt(yl),E1=y({},yl,{dataTransfer:0}),_1=bt(E1),z1=y({},ar,{relatedTarget:0}),wo=bt(z1),T1=y({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=bt(T1),A1=y({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k1=bt(A1),R1=y({},ba,{data:0}),bf=bt(R1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B1[e])?!!t[e]:!1}function Eo(){return O1}var N1=y({},ar,{key:function(e){if(e.key){var t=M1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=bt(N1),U1=y({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=bt(U1),H1=y({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),G1=bt(H1),$1=y({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=bt($1),Y1=y({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=bt(Y1),K1=y({},ba,{newState:0,oldState:0}),P1=bt(K1),Q1=[9,13,27,32],_o=yn&&"CompositionEvent"in window,rr=null;yn&&"documentMode"in document&&(rr=document.documentMode);var Z1=yn&&"TextEvent"in window&&!rr,yf=yn&&(!_o||rr&&8<rr&&11>=rr),vf=" ",Sf=!1;function jf(e,t){switch(e){case"keyup":return Q1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ei=!1;function X1(e,t){switch(e){case"compositionend":return wf(t);case"keypress":return t.which!==32?null:(Sf=!0,vf);case"textInput":return e=t.data,e===vf&&Sf?null:e;default:return null}}function J1(e,t){if(ei)return e==="compositionend"||!_o&&jf(e,t)?(e=mf(),gl=vo=$n=null,ei=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I1[e.type]:t==="textarea"}function _f(e,t,n,i){Fa?Wa?Wa.push(i):Wa=[i]:Fa=i,t=rs(t,"onChange"),0<t.length&&(n=new xl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var lr=null,sr=null;function F1(e){rg(e,0)}function vl(e){var t=er(e);if(lf(t))return e}function zf(e,t){if(e==="change")return t}var Tf=!1;if(yn){var zo;if(yn){var To="oninput"in document;if(!To){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),To=typeof Cf.oninput=="function"}zo=To}else zo=!1;Tf=zo&&(!document.documentMode||9<document.documentMode)}function Af(){lr&&(lr.detachEvent("onpropertychange",kf),sr=lr=null)}function kf(e){if(e.propertyName==="value"&&vl(sr)){var t=[];_f(t,sr,e,bo(e)),hf(F1,t)}}function W1(e,t,n){e==="focusin"?(Af(),lr=t,sr=n,lr.attachEvent("onpropertychange",kf)):e==="focusout"&&Af()}function ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(sr)}function tx(e,t){if(e==="click")return vl(t)}function nx(e,t){if(e==="input"||e==="change")return vl(t)}function ax(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:ax;function or(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Ut.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mf(e,t){var n=Rf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hl(e.document)}return t}function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ix=yn&&"documentMode"in document&&11>=document.documentMode,ti=null,Ao=null,cr=null,ko=!1;function Of(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ko||ti==null||ti!==hl(i)||(i=ti,"selectionStart"in i&&Co(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),cr&&or(cr,i)||(cr=i,i=rs(Ao,"onSelect"),0<i.length&&(t=new xl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ti)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ni={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},Ro={},Nf={};yn&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete ni.animationend.animation,delete ni.animationiteration.animation,delete ni.animationstart.animation),"TransitionEvent"in window||delete ni.transitionend.transition);function ya(e){if(Ro[e])return Ro[e];if(!ni[e])return e;var t=ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nf)return Ro[e]=t[n];return e}var Lf=ya("animationend"),Uf=ya("animationiteration"),Hf=ya("animationstart"),rx=ya("transitionrun"),lx=ya("transitionstart"),sx=ya("transitioncancel"),Gf=ya("transitionend"),$f=new Map,Mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mo.push("scrollEnd");function nn(e,t){$f.set(e,t),pa(t,[e])}var Vf=new WeakMap;function $t(e,t){if(typeof e=="object"&&e!==null){var n=Vf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:af(t)},Vf.set(e,t),t)}return{value:e,source:t,stack:af(t)}}var Vt=[],ai=0,Do=0;function Sl(){for(var e=ai,t=Do=ai=0;t<e;){var n=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var o=Vt[t];if(Vt[t++]=null,i!==null&&l!==null){var g=i.pending;g===null?l.next=l:(l.next=g.next,g.next=l),i.pending=l}o!==0&&Yf(n,l,o)}}function jl(e,t,n,i){Vt[ai++]=e,Vt[ai++]=t,Vt[ai++]=n,Vt[ai++]=i,Do|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Bo(e,t,n,i){return jl(e,t,n,i),wl(e)}function ii(e,t){return jl(e,null,null,t),wl(e)}function Yf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,o=e.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-Tt(n),e=o.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),o):null}function wl(e){if(50<Br)throw Br=0,Gc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ri={};function ox(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,i){return new ox(e,t,n,i)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function qf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function El(e,t,n,i,l,o){var g=0;if(i=e,typeof e=="function")Oo(e)&&(g=1);else if(typeof e=="string")g=uy(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=At(31,n,t,l),e.elementType=oe,e.lanes=o,e;case A:return va(n.children,l,o,t);case N:g=8,l|=24;break;case G:return e=At(12,n,t,l|2),e.elementType=G,e.lanes=o,e;case U:return e=At(13,n,t,l),e.elementType=U,e.lanes=o,e;case I:return e=At(19,n,t,l),e.elementType=I,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case k:g=10;break e;case P:g=9;break e;case K:g=11;break e;case $:g=14;break e;case he:g=16,i=null;break e}g=29,n=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=At(g,n,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function va(e,t,n,i){return e=At(7,e,i,t),e.lanes=n,e}function No(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function Lo(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=[],si=0,_l=null,zl=0,Yt=[],qt=0,Sa=null,Sn=1,jn="";function ja(e,t){li[si++]=zl,li[si++]=_l,_l=e,zl=t}function Kf(e,t,n){Yt[qt++]=Sn,Yt[qt++]=jn,Yt[qt++]=Sa,Sa=e;var i=Sn;e=jn;var l=32-Tt(i)-1;i&=~(1<<l),n+=1;var o=32-Tt(t)+l;if(30<o){var g=l-l%5;o=(i&(1<<g)-1).toString(32),i>>=g,l-=g,Sn=1<<32-Tt(t)+l|n<<l|i,jn=o+e}else Sn=1<<o|n<<l|i,jn=e}function Uo(e){e.return!==null&&(ja(e,1),Kf(e,1,0))}function Ho(e){for(;e===_l;)_l=li[--si],li[si]=null,zl=li[--si],li[si]=null;for(;e===Sa;)Sa=Yt[--qt],Yt[qt]=null,jn=Yt[--qt],Yt[qt]=null,Sn=Yt[--qt],Yt[qt]=null}var ft=null,He=null,Se=!1,wa=null,un=!1,Go=Error(c(519));function Ea(e){var t=Error(c(418,""));throw fr($t(t,e)),Go}function Pf(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ct]=e,t[pt]=i,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Nr.length;n++)pe(Nr[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),sf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),fl(t);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),cf(t,i.value,i.defaultValue,i.children),fl(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||cg(t.textContent,n)?(i.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),i.onScroll!=null&&pe("scroll",t),i.onScrollEnd!=null&&pe("scrollend",t),i.onClick!=null&&(t.onclick=ls),t=!0):t=!1,t||Ea(e)}function Qf(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 13:un=!1;return;case 27:case 3:un=!0;return;default:ft=ft.return}}function ur(e){if(e!==ft)return!1;if(!Se)return Qf(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||nu(e.type,e.memoizedProps)),n=!n),n&&He&&Ea(e),Qf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,aa(e.type)?(e=lu,lu=null,He=e):He=t):He=ft?rn(e.stateNode.nextSibling):null;return!0}function dr(){He=ft=null,Se=!1}function Zf(){var e=wa;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),wa=null),e}function fr(e){wa===null?wa=[e]:wa.push(e)}var $o=q(null),_a=null,wn=null;function Vn(e,t,n){J($o,t._currentValue),t._currentValue=n}function En(e){e._currentValue=$o.current,X($o)}function Vo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Yo(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var g=l.child;o=o.firstContext;e:for(;o!==null;){var x=o;o=l;for(var j=0;j<t.length;j++)if(x.context===t[j]){o.lanes|=n,x=o.alternate,x!==null&&(x.lanes|=n),Vo(o.return,n,e),i||(g=null);break e}o=x.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(c(341));g.lanes|=n,o=g.alternate,o!==null&&(o.lanes|=n),Vo(g,n,e),g=null}else g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===e){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function hr(e,t,n,i){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(c(387));if(g=g.memoizedProps,g!==null){var x=l.type;Ct(l.pendingProps.value,g.value)||(e!==null?e.push(x):e=[x])}}else if(l===Je.current){if(g=l.alternate,g===null)throw Error(c(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Vr):e=[Vr])}l=l.return}e!==null&&Yo(t,e,n,i),t.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){_a=e,wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return Xf(_a,e)}function Cl(e,t){return _a===null&&za(e),Xf(e,t)}function Xf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wn===null){if(e===null)throw Error(c(308));wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wn=wn.next=t;return n}var cx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ux=a.unstable_scheduleCallback,dx=a.unstable_NormalPriority,Ze={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qo(){return{controller:new cx,data:new Map,refCount:0}}function mr(e){e.refCount--,e.refCount===0&&ux(dx,function(){e.controller.abort()})}var gr=null,Ko=0,oi=0,ci=null;function fx(e,t){if(gr===null){var n=gr=[];Ko=0,oi=Qc(),ci={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ko++,t.then(Jf,Jf),t}function Jf(){if(--Ko===0&&gr!==null){ci!==null&&(ci.status="fulfilled");var e=gr;gr=null,oi=0,ci=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hx(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var If=L.S;L.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&fx(e,t),If!==null&&If(e,t)};var Ta=q(null);function Po(){var e=Ta.current;return e!==null?e:De.pooledCache}function Al(e,t){t===null?J(Ta,Ta.current):J(Ta,t.pool)}function Ff(){var e=Po();return e===null?null:{parent:Ze._currentValue,pool:e}}var pr=Error(c(460)),Wf=Error(c(474)),kl=Error(c(542)),Qo={then:function(){}};function eh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rl(){}function th(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Rl,Rl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ah(e),e;default:if(typeof t.status=="string")t.then(Rl,Rl);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ah(e),e}throw br=t,pr}}var br=null;function nh(){if(br===null)throw Error(c(459));var e=br;return br=null,e}function ah(e){if(e===pr||e===kl)throw Error(c(483))}var Yn=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(_e&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=wl(e),Yf(e,null,n),t}return jl(e,i,t,n),wl(e)}function xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xd(e,n)}}function Jo(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?l=o=g:o=o.next=g,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Io=!1;function yr(){if(Io){var e=ci;if(e!==null)throw e}}function vr(e,t,n,i){Io=!1;var l=e.updateQueue;Yn=!1;var o=l.firstBaseUpdate,g=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var j=x,R=j.next;j.next=null,g===null?o=R:g.next=R,g=j;var H=e.alternate;H!==null&&(H=H.updateQueue,x=H.lastBaseUpdate,x!==g&&(x===null?H.firstBaseUpdate=R:x.next=R,H.lastBaseUpdate=j))}if(o!==null){var Y=l.baseState;g=0,H=R=j=null,x=o;do{var D=x.lane&-536870913,B=D!==x.lane;if(B?(ye&D)===D:(i&D)===D){D!==0&&D===oi&&(Io=!0),H!==null&&(H=H.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var le=e,ae=x;D=t;var ke=n;switch(ae.tag){case 1:if(le=ae.payload,typeof le=="function"){Y=le.call(ke,Y,D);break e}Y=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ae.payload,D=typeof le=="function"?le.call(ke,Y,D):le,D==null)break e;Y=y({},Y,D);break e;case 2:Yn=!0}}D=x.callback,D!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[D]:B.push(D))}else B={lane:D,tag:x.tag,payload:x.payload,callback:x.callback,next:null},H===null?(R=H=B,j=Y):H=H.next=B,g|=D;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;B=x,x=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);H===null&&(j=Y),l.baseState=j,l.firstBaseUpdate=R,l.lastBaseUpdate=H,o===null&&(l.shared.lanes=0),Wn|=g,e.lanes=g,e.memoizedState=Y}}function ih(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function rh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ih(n[e],t)}var ui=q(null),Ml=q(0);function lh(e,t){e=Rn,J(Ml,e),J(ui,t),Rn=e|t.baseLanes}function Fo(){J(Ml,Rn),J(ui,ui.current)}function Wo(){Rn=Ml.current,X(ui),X(Ml)}var Pn=0,de=null,Ce=null,Ke=null,Dl=!1,di=!1,Ca=!1,Bl=0,Sr=0,fi=null,mx=0;function Ve(){throw Error(c(321))}function ec(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function tc(e,t,n,i,l,o){return Pn=o,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Yh:qh,Ca=!1,o=n(i,l),Ca=!1,di&&(o=oh(t,n,i,l)),sh(e),o}function sh(e){L.H=Gl;var t=Ce!==null&&Ce.next!==null;if(Pn=0,Ke=Ce=de=null,Dl=!1,Sr=0,fi=null,t)throw Error(c(300));e===null||Fe||(e=e.dependencies,e!==null&&Tl(e)&&(Fe=!0))}function oh(e,t,n,i){de=e;var l=0;do{if(di&&(fi=null),Sr=0,di=!1,25<=l)throw Error(c(301));if(l+=1,Ke=Ce=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}L.H=Sx,o=t(n,i)}while(di);return o}function gx(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?jr(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(de.flags|=1024),t}function nc(){var e=Bl!==0;return Bl=0,e}function ac(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ic(e){if(Dl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Dl=!1}Pn=0,Ke=Ce=de=null,di=!1,Sr=Bl=0,fi=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?de.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Pe(){if(Ce===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ke===null?de.memoizedState:Ke.next;if(t!==null)Ke=t,Ce=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ke===null?de.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jr(e){var t=Sr;return Sr+=1,fi===null&&(fi=[]),e=th(fi,e,t),t=de,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Yh:qh),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jr(e);if(e.$$typeof===k)return ut(e)}throw Error(c(438,String(e)))}function lc(e){var t=null,n=de.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=de.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=rc(),de.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Me;return t.index++,n}function _n(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=Pe();return sc(t,Ce,e)}function sc(e,t,n){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=n;var l=e.baseQueue,o=i.pending;if(o!==null){if(l!==null){var g=l.next;l.next=o.next,o.next=g}t.baseQueue=l=o,i.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var x=g=null,j=null,R=t,H=!1;do{var Y=R.lane&-536870913;if(Y!==R.lane?(ye&Y)===Y:(Pn&Y)===Y){var D=R.revertLane;if(D===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),Y===oi&&(H=!0);else if((Pn&D)===D){R=R.next,D===oi&&(H=!0);continue}else Y={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(x=j=Y,g=o):j=j.next=Y,de.lanes|=D,Wn|=D;Y=R.action,Ca&&n(o,Y),o=R.hasEagerState?R.eagerState:n(o,Y)}else D={lane:Y,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(x=j=D,g=o):j=j.next=D,de.lanes|=Y,Wn|=Y;R=R.next}while(R!==null&&R!==t);if(j===null?g=o:j.next=x,!Ct(o,e.memoizedState)&&(Fe=!0,H&&(n=ci,n!==null)))throw n;e.memoizedState=o,e.baseState=g,e.baseQueue=j,i.lastRenderedState=o}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function oc(e){var t=Pe(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var g=l=l.next;do o=e(o,g.action),g=g.next;while(g!==l);Ct(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function ch(e,t,n){var i=de,l=Pe(),o=Se;if(o){if(n===void 0)throw Error(c(407));n=n()}else n=t();var g=!Ct((Ce||l).memoizedState,n);g&&(l.memoizedState=n,Fe=!0),l=l.queue;var x=fh.bind(null,i,l,e);if(wr(2048,8,x,[e]),l.getSnapshot!==t||g||Ke!==null&&Ke.memoizedState.tag&1){if(i.flags|=2048,hi(9,Ll(),dh.bind(null,i,l,n,t),null),De===null)throw Error(c(349));o||(Pn&124)!==0||uh(i,t,n)}return n}function uh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t=rc(),de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dh(e,t,n,i){t.value=n,t.getSnapshot=i,hh(t)&&mh(e)}function fh(e,t,n){return n(function(){hh(t)&&mh(e)})}function hh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function mh(e){var t=ii(e,2);t!==null&&Bt(t,e,2)}function cc(e){var t=xt();if(typeof e=="function"){var n=e;if(e=n(),Ca){Hn(!0);try{n()}finally{Hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},t}function gh(e,t,n,i){return e.baseState=n,sc(e,Ce,typeof i=="function"?i:_n)}function px(e,t,n,i,l){if(Hl(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){o.listeners.push(g)}};L.T!==null?n(!0):o.isTransition=!1,i(o),n=t.pending,n===null?(o.next=t.pending=o,ph(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ph(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var o=L.T,g={};L.T=g;try{var x=n(l,i),j=L.S;j!==null&&j(g,x),bh(e,t,x)}catch(R){uc(e,t,R)}finally{L.T=o}}else try{o=n(l,i),bh(e,t,o)}catch(R){uc(e,t,R)}}function bh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){xh(e,t,i)},function(i){return uc(e,t,i)}):xh(e,t,n)}function xh(e,t,n){t.status="fulfilled",t.value=n,yh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ph(e,n)))}function uc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,yh(t),t=t.next;while(t!==i)}e.action=null}function yh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vh(e,t){return t}function Sh(e,t){if(Se){var n=De.formState;if(n!==null){e:{var i=de;if(Se){if(He){t:{for(var l=He,o=un;l.nodeType!==8;){if(!o){l=null;break t}if(l=rn(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){He=rn(l.nextSibling),i=l.data==="F!";break e}}Ea(i)}i=!1}i&&(t=n[0])}}return n=xt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vh,lastRenderedState:t},n.queue=i,n=Gh.bind(null,de,i),i.dispatch=n,i=cc(!1),o=gc.bind(null,de,!1,i.queue),i=xt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=px.bind(null,de,l,o,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function jh(e){var t=Pe();return wh(t,Ce,e)}function wh(e,t,n){if(t=sc(e,t,vh)[0],e=Nl(_n)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=jr(t)}catch(g){throw g===pr?kl:g}else i=t;t=Pe();var l=t.queue,o=l.dispatch;return n!==t.memoizedState&&(de.flags|=2048,hi(9,Ll(),bx.bind(null,l,n),null)),[i,o,e]}function bx(e,t){e.action=t}function Eh(e){var t=Pe(),n=Ce;if(n!==null)return wh(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function hi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=de.updateQueue,t===null&&(t=rc(),de.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ll(){return{destroy:void 0,resource:void 0}}function _h(){return Pe().memoizedState}function Ul(e,t,n,i){var l=xt();i=i===void 0?null:i,de.flags|=e,l.memoizedState=hi(1|t,Ll(),n,i)}function wr(e,t,n,i){var l=Pe();i=i===void 0?null:i;var o=l.memoizedState.inst;Ce!==null&&i!==null&&ec(i,Ce.memoizedState.deps)?l.memoizedState=hi(t,o,n,i):(de.flags|=e,l.memoizedState=hi(1|t,o,n,i))}function zh(e,t){Ul(8390656,8,e,t)}function Th(e,t){wr(2048,8,e,t)}function Ch(e,t){return wr(4,2,e,t)}function Ah(e,t){return wr(4,4,e,t)}function kh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rh(e,t,n){n=n!=null?n.concat([e]):null,wr(4,4,kh.bind(null,t,e),n)}function dc(){}function Mh(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ec(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Dh(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ec(t,i[1]))return i[0];if(i=e(),Ca){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i}function fc(e,t,n){return n===void 0||(Pn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Nm(),de.lanes|=e,Wn|=e,n)}function Bh(e,t,n,i){return Ct(n,t)?n:ui.current!==null?(e=fc(e,n,i),Ct(e,t)||(Fe=!0),e):(Pn&42)===0?(Fe=!0,e.memoizedState=n):(e=Nm(),de.lanes|=e,Wn|=e,t)}function Oh(e,t,n,i,l){var o=Q.p;Q.p=o!==0&&8>o?o:8;var g=L.T,x={};L.T=x,gc(e,!1,t,n);try{var j=l(),R=L.S;if(R!==null&&R(x,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var H=hx(j,i);Er(e,t,H,Dt(e))}else Er(e,t,i,Dt(e))}catch(Y){Er(e,t,{then:function(){},status:"rejected",reason:Y},Dt())}finally{Q.p=o,L.T=g}}function xx(){}function hc(e,t,n,i){if(e.tag!==5)throw Error(c(476));var l=Nh(e).queue;Oh(e,l,t,ne,n===null?xx:function(){return Lh(e),n(i)})}function Nh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lh(e){var t=Nh(e).next.queue;Er(e,t,{},Dt())}function mc(){return ut(Vr)}function Uh(){return Pe().memoizedState}function Hh(){return Pe().memoizedState}function yx(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Dt();e=qn(n);var i=Kn(t,e,n);i!==null&&(Bt(i,t,n),xr(i,t,n)),t={cache:qo()},e.payload=t;return}t=t.return}}function vx(e,t,n){var i=Dt();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Hl(e)?$h(t,n):(n=Bo(e,t,n,i),n!==null&&(Bt(n,e,i),Vh(n,t,i)))}function Gh(e,t,n){var i=Dt();Er(e,t,n,i)}function Er(e,t,n,i){var l={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))$h(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var g=t.lastRenderedState,x=o(g,n);if(l.hasEagerState=!0,l.eagerState=x,Ct(x,g))return jl(e,t,l,0),De===null&&Sl(),!1}catch{}finally{}if(n=Bo(e,t,l,i),n!==null)return Bt(n,e,i),Vh(n,t,i),!0}return!1}function gc(e,t,n,i){if(i={lane:2,revertLane:Qc(),action:i,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(t)throw Error(c(479))}else t=Bo(e,n,i,2),t!==null&&Bt(t,e,2)}function Hl(e){var t=e.alternate;return e===de||t!==null&&t===de}function $h(e,t){di=Dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xd(e,n)}}var Gl={readContext:ut,use:Ol,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve},Yh={readContext:ut,use:Ol,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:zh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ul(4194308,4,kh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ul(4194308,4,e,t)},useInsertionEffect:function(e,t){Ul(4,2,e,t)},useMemo:function(e,t){var n=xt();t=t===void 0?null:t;var i=e();if(Ca){Hn(!0);try{e()}finally{Hn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=xt();if(n!==void 0){var l=n(t);if(Ca){Hn(!0);try{n(t)}finally{Hn(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=vx.bind(null,de,e),[i.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=cc(e);var t=e.queue,n=Gh.bind(null,de,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:dc,useDeferredValue:function(e,t){var n=xt();return fc(n,e,t)},useTransition:function(){var e=cc(!1);return e=Oh.bind(null,de,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=de,l=xt();if(Se){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),De===null)throw Error(c(349));(ye&124)!==0||uh(i,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,zh(fh.bind(null,i,o,e),[e]),i.flags|=2048,hi(9,Ll(),dh.bind(null,i,o,n,t),null),n},useId:function(){var e=xt(),t=De.identifierPrefix;if(Se){var n=jn,i=Sn;n=(i&~(1<<32-Tt(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Bl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=mx++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:mc,useFormState:Sh,useActionState:Sh,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gc.bind(null,de,!0,n),n.dispatch=t,[e,t]},useMemoCache:lc,useCacheRefresh:function(){return xt().memoizedState=yx.bind(null,de)}},qh={readContext:ut,use:Ol,useCallback:Mh,useContext:ut,useEffect:Th,useImperativeHandle:Rh,useInsertionEffect:Ch,useLayoutEffect:Ah,useMemo:Dh,useReducer:Nl,useRef:_h,useState:function(){return Nl(_n)},useDebugValue:dc,useDeferredValue:function(e,t){var n=Pe();return Bh(n,Ce.memoizedState,e,t)},useTransition:function(){var e=Nl(_n)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:jr(e),t]},useSyncExternalStore:ch,useId:Uh,useHostTransitionStatus:mc,useFormState:jh,useActionState:jh,useOptimistic:function(e,t){var n=Pe();return gh(n,Ce,e,t)},useMemoCache:lc,useCacheRefresh:Hh},Sx={readContext:ut,use:Ol,useCallback:Mh,useContext:ut,useEffect:Th,useImperativeHandle:Rh,useInsertionEffect:Ch,useLayoutEffect:Ah,useMemo:Dh,useReducer:oc,useRef:_h,useState:function(){return oc(_n)},useDebugValue:dc,useDeferredValue:function(e,t){var n=Pe();return Ce===null?fc(n,e,t):Bh(n,Ce.memoizedState,e,t)},useTransition:function(){var e=oc(_n)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:jr(e),t]},useSyncExternalStore:ch,useId:Uh,useHostTransitionStatus:mc,useFormState:Eh,useActionState:Eh,useOptimistic:function(e,t){var n=Pe();return Ce!==null?gh(n,Ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:lc,useCacheRefresh:Hh},mi=null,_r=0;function $l(e){var t=_r;return _r+=1,mi===null&&(mi=[]),th(mi,e,t)}function zr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vl(e,t){throw t.$$typeof===S?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Kh(e){var t=e._init;return t(e._payload)}function Ph(e){function t(z,_){if(e){var C=z.deletions;C===null?(z.deletions=[_],z.flags|=16):C.push(_)}}function n(z,_){if(!e)return null;for(;_!==null;)t(z,_),_=_.sibling;return null}function i(z){for(var _=new Map;z!==null;)z.key!==null?_.set(z.key,z):_.set(z.index,z),z=z.sibling;return _}function l(z,_){return z=vn(z,_),z.index=0,z.sibling=null,z}function o(z,_,C){return z.index=C,e?(C=z.alternate,C!==null?(C=C.index,C<_?(z.flags|=67108866,_):C):(z.flags|=67108866,_)):(z.flags|=1048576,_)}function g(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function x(z,_,C,V){return _===null||_.tag!==6?(_=No(C,z.mode,V),_.return=z,_):(_=l(_,C),_.return=z,_)}function j(z,_,C,V){var F=C.type;return F===A?H(z,_,C.props.children,V,C.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===he&&Kh(F)===_.type)?(_=l(_,C.props),zr(_,C),_.return=z,_):(_=El(C.type,C.key,C.props,null,z.mode,V),zr(_,C),_.return=z,_)}function R(z,_,C,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==C.containerInfo||_.stateNode.implementation!==C.implementation?(_=Lo(C,z.mode,V),_.return=z,_):(_=l(_,C.children||[]),_.return=z,_)}function H(z,_,C,V,F){return _===null||_.tag!==7?(_=va(C,z.mode,V,F),_.return=z,_):(_=l(_,C),_.return=z,_)}function Y(z,_,C){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=No(""+_,z.mode,C),_.return=z,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case w:return C=El(_.type,_.key,_.props,null,z.mode,C),zr(C,_),C.return=z,C;case M:return _=Lo(_,z.mode,C),_.return=z,_;case he:var V=_._init;return _=V(_._payload),Y(z,_,C)}if(Te(_)||xe(_))return _=va(_,z.mode,C,null),_.return=z,_;if(typeof _.then=="function")return Y(z,$l(_),C);if(_.$$typeof===k)return Y(z,Cl(z,_),C);Vl(z,_)}return null}function D(z,_,C,V){var F=_!==null?_.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return F!==null?null:x(z,_,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case w:return C.key===F?j(z,_,C,V):null;case M:return C.key===F?R(z,_,C,V):null;case he:return F=C._init,C=F(C._payload),D(z,_,C,V)}if(Te(C)||xe(C))return F!==null?null:H(z,_,C,V,null);if(typeof C.then=="function")return D(z,_,$l(C),V);if(C.$$typeof===k)return D(z,_,Cl(z,C),V);Vl(z,C)}return null}function B(z,_,C,V,F){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return z=z.get(C)||null,x(_,z,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return z=z.get(V.key===null?C:V.key)||null,j(_,z,V,F);case M:return z=z.get(V.key===null?C:V.key)||null,R(_,z,V,F);case he:var fe=V._init;return V=fe(V._payload),B(z,_,C,V,F)}if(Te(V)||xe(V))return z=z.get(C)||null,H(_,z,V,F,null);if(typeof V.then=="function")return B(z,_,C,$l(V),F);if(V.$$typeof===k)return B(z,_,C,Cl(_,V),F);Vl(_,V)}return null}function le(z,_,C,V){for(var F=null,fe=null,te=_,re=_=0,et=null;te!==null&&re<C.length;re++){te.index>re?(et=te,te=null):et=te.sibling;var ve=D(z,te,C[re],V);if(ve===null){te===null&&(te=et);break}e&&te&&ve.alternate===null&&t(z,te),_=o(ve,_,re),fe===null?F=ve:fe.sibling=ve,fe=ve,te=et}if(re===C.length)return n(z,te),Se&&ja(z,re),F;if(te===null){for(;re<C.length;re++)te=Y(z,C[re],V),te!==null&&(_=o(te,_,re),fe===null?F=te:fe.sibling=te,fe=te);return Se&&ja(z,re),F}for(te=i(te);re<C.length;re++)et=B(te,z,re,C[re],V),et!==null&&(e&&et.alternate!==null&&te.delete(et.key===null?re:et.key),_=o(et,_,re),fe===null?F=et:fe.sibling=et,fe=et);return e&&te.forEach(function(oa){return t(z,oa)}),Se&&ja(z,re),F}function ae(z,_,C,V){if(C==null)throw Error(c(151));for(var F=null,fe=null,te=_,re=_=0,et=null,ve=C.next();te!==null&&!ve.done;re++,ve=C.next()){te.index>re?(et=te,te=null):et=te.sibling;var oa=D(z,te,ve.value,V);if(oa===null){te===null&&(te=et);break}e&&te&&oa.alternate===null&&t(z,te),_=o(oa,_,re),fe===null?F=oa:fe.sibling=oa,fe=oa,te=et}if(ve.done)return n(z,te),Se&&ja(z,re),F;if(te===null){for(;!ve.done;re++,ve=C.next())ve=Y(z,ve.value,V),ve!==null&&(_=o(ve,_,re),fe===null?F=ve:fe.sibling=ve,fe=ve);return Se&&ja(z,re),F}for(te=i(te);!ve.done;re++,ve=C.next())ve=B(te,z,re,ve.value,V),ve!==null&&(e&&ve.alternate!==null&&te.delete(ve.key===null?re:ve.key),_=o(ve,_,re),fe===null?F=ve:fe.sibling=ve,fe=ve);return e&&te.forEach(function(jy){return t(z,jy)}),Se&&ja(z,re),F}function ke(z,_,C,V){if(typeof C=="object"&&C!==null&&C.type===A&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case w:e:{for(var F=C.key;_!==null;){if(_.key===F){if(F=C.type,F===A){if(_.tag===7){n(z,_.sibling),V=l(_,C.props.children),V.return=z,z=V;break e}}else if(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===he&&Kh(F)===_.type){n(z,_.sibling),V=l(_,C.props),zr(V,C),V.return=z,z=V;break e}n(z,_);break}else t(z,_);_=_.sibling}C.type===A?(V=va(C.props.children,z.mode,V,C.key),V.return=z,z=V):(V=El(C.type,C.key,C.props,null,z.mode,V),zr(V,C),V.return=z,z=V)}return g(z);case M:e:{for(F=C.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===C.containerInfo&&_.stateNode.implementation===C.implementation){n(z,_.sibling),V=l(_,C.children||[]),V.return=z,z=V;break e}else{n(z,_);break}else t(z,_);_=_.sibling}V=Lo(C,z.mode,V),V.return=z,z=V}return g(z);case he:return F=C._init,C=F(C._payload),ke(z,_,C,V)}if(Te(C))return le(z,_,C,V);if(xe(C)){if(F=xe(C),typeof F!="function")throw Error(c(150));return C=F.call(C),ae(z,_,C,V)}if(typeof C.then=="function")return ke(z,_,$l(C),V);if(C.$$typeof===k)return ke(z,_,Cl(z,C),V);Vl(z,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,_!==null&&_.tag===6?(n(z,_.sibling),V=l(_,C),V.return=z,z=V):(n(z,_),V=No(C,z.mode,V),V.return=z,z=V),g(z)):n(z,_)}return function(z,_,C,V){try{_r=0;var F=ke(z,_,C,V);return mi=null,F}catch(te){if(te===pr||te===kl)throw te;var fe=At(29,te,null,z.mode);return fe.lanes=V,fe.return=z,fe}finally{}}}var gi=Ph(!0),Qh=Ph(!1),Kt=q(null),dn=null;function Qn(e){var t=e.alternate;J(Xe,Xe.current&1),J(Kt,e),dn===null&&(t===null||ui.current!==null||t.memoizedState!==null)&&(dn=e)}function Zh(e){if(e.tag===22){if(J(Xe,Xe.current),J(Kt,e),dn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(dn=e)}}else Zn()}function Zn(){J(Xe,Xe.current),J(Kt,Kt.current)}function zn(e){X(Kt),dn===e&&(dn=null),X(Xe)}var Xe=q(0);function Yl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ru(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function pc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Dt(),l=qn(i);l.payload=t,n!=null&&(l.callback=n),t=Kn(e,l,i),t!==null&&(Bt(t,e,i),xr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Dt(),l=qn(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Kn(e,l,i),t!==null&&(Bt(t,e,i),xr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),i=qn(n);i.tag=2,t!=null&&(i.callback=t),t=Kn(e,i,n),t!==null&&(Bt(t,e,n),xr(t,e,n))}};function Xh(e,t,n,i,l,o,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,g):t.prototype&&t.prototype.isPureReactComponent?!or(n,i)||!or(l,o):!0}function Jh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ih(e){ql(e)}function Fh(e){console.error(e)}function Wh(e){ql(e)}function Kl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function em(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function xc(e,t,n){return n=qn(n),n.tag=3,n.payload={element:null},n.callback=function(){Kl(e,t)},n}function tm(e){return e=qn(e),e.tag=3,e}function nm(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;e.payload=function(){return l(o)},e.callback=function(){em(t,n,i)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){em(t,n,i),typeof l!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function jx(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&hr(t,n,l,!0),n=Kt.current,n!==null){switch(n.tag){case 13:return dn===null?Vc():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===Qo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),qc(e,i,l)),!1;case 22:return n.flags|=65536,i===Qo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),qc(e,i,l)),!1}throw Error(c(435,n.tag))}return qc(e,i,l),Vc(),!1}if(Se)return t=Kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Go&&(e=Error(c(422),{cause:i}),fr($t(e,n)))):(i!==Go&&(t=Error(c(423),{cause:i}),fr($t(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=$t(i,n),l=xc(e.stateNode,i,l),Jo(e,l),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:i});if(o=$t(o,n),Dr===null?Dr=[o]:Dr.push(o),Ge!==4&&(Ge=2),t===null)return!0;i=$t(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=xc(n.stateNode,i,e),Jo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(ea===null||!ea.has(o))))return n.flags|=65536,l&=-l,n.lanes|=l,l=tm(l),nm(l,e,n,i),Jo(n,l),!1}n=n.return}while(n!==null);return!1}var am=Error(c(461)),Fe=!1;function it(e,t,n,i){t.child=e===null?Qh(t,null,n,i):gi(t,e.child,n,i)}function im(e,t,n,i,l){n=n.render;var o=t.ref;if("ref"in i){var g={};for(var x in i)x!=="ref"&&(g[x]=i[x])}else g=i;return za(t),i=tc(e,t,n,g,o,l),x=nc(),e!==null&&!Fe?(ac(e,t,l),Tn(e,t,l)):(Se&&x&&Uo(t),t.flags|=1,it(e,t,i,l),t.child)}function rm(e,t,n,i,l){if(e===null){var o=n.type;return typeof o=="function"&&!Oo(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,lm(e,t,o,i,l)):(e=El(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!zc(e,l)){var g=o.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(g,i)&&e.ref===t.ref)return Tn(e,t,l)}return t.flags|=1,e=vn(o,i),e.ref=t.ref,e.return=t,t.child=e}function lm(e,t,n,i,l){if(e!==null){var o=e.memoizedProps;if(or(o,i)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=i=o,zc(e,l))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,Tn(e,t,l)}return yc(e,t,n,i,l)}function sm(e,t,n){var i=t.pendingProps,l=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=o!==null?o.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~i}else t.childLanes=0,t.child=null;return om(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(t,o!==null?o.cachePool:null),o!==null?lh(t,o):Fo(),Zh(t);else return t.lanes=t.childLanes=536870912,om(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Al(t,o.cachePool),lh(t,o),Zn(),t.memoizedState=null):(e!==null&&Al(t,null),Fo(),Zn());return it(e,t,l,n),t.child}function om(e,t,n,i){var l=Po();return l=l===null?null:{parent:Ze._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Al(t,null),Fo(),Zh(t),e!==null&&hr(e,t,i,!0),null}function Pl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,i,l){return za(t),n=tc(e,t,n,i,void 0,l),i=nc(),e!==null&&!Fe?(ac(e,t,l),Tn(e,t,l)):(Se&&i&&Uo(t),t.flags|=1,it(e,t,n,l),t.child)}function cm(e,t,n,i,l,o){return za(t),t.updateQueue=null,n=oh(t,i,n,l),sh(e),i=nc(),e!==null&&!Fe?(ac(e,t,o),Tn(e,t,o)):(Se&&i&&Uo(t),t.flags|=1,it(e,t,n,o),t.child)}function um(e,t,n,i,l){if(za(t),t.stateNode===null){var o=ri,g=n.contextType;typeof g=="object"&&g!==null&&(o=ut(g)),o=new n(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=bc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},Zo(t),g=n.contextType,o.context=typeof g=="object"&&g!==null?ut(g):ri,o.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(pc(t,n,g,i),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(g=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),g!==o.state&&bc.enqueueReplaceState(o,o.state,null),vr(t,i,o,l),yr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var x=t.memoizedProps,j=Aa(n,x);o.props=j;var R=o.context,H=n.contextType;g=ri,typeof H=="object"&&H!==null&&(g=ut(H));var Y=n.getDerivedStateFromProps;H=typeof Y=="function"||typeof o.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,H||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(x||R!==g)&&Jh(t,o,i,g),Yn=!1;var D=t.memoizedState;o.state=D,vr(t,i,o,l),yr(),R=t.memoizedState,x||D!==R||Yn?(typeof Y=="function"&&(pc(t,n,Y,i),R=t.memoizedState),(j=Yn||Xh(t,n,j,i,D,R,g))?(H||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=R),o.props=i,o.state=R,o.context=g,i=j):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,Xo(e,t),g=t.memoizedProps,H=Aa(n,g),o.props=H,Y=t.pendingProps,D=o.context,R=n.contextType,j=ri,typeof R=="object"&&R!==null&&(j=ut(R)),x=n.getDerivedStateFromProps,(R=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g!==Y||D!==j)&&Jh(t,o,i,j),Yn=!1,D=t.memoizedState,o.state=D,vr(t,i,o,l),yr();var B=t.memoizedState;g!==Y||D!==B||Yn||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof x=="function"&&(pc(t,n,x,i),B=t.memoizedState),(H=Yn||Xh(t,n,H,i,D,B,j)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,B,j),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,B,j)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=B),o.props=i,o.state=B,o.context=j,i=H):(typeof o.componentDidUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,Pl(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=gi(t,e.child,null,l),t.child=gi(t,null,n,l)):it(e,t,n,l),t.memoizedState=o.state,e=t.child):e=Tn(e,t,l),e}function dm(e,t,n,i){return dr(),t.flags|=256,it(e,t,n,i),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ff()}}function jc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pt),e}function fm(e,t,n){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,g;if((g=o)||(g=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),g&&(l=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?Qn(t):Zn(),Se){var x=He,j;if(j=x){e:{for(j=x,x=un;j.nodeType!==8;){if(!x){x=null;break e}if(j=rn(j.nextSibling),j===null){x=null;break e}}x=j}x!==null?(t.memoizedState={dehydrated:x,treeContext:Sa!==null?{id:Sn,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},j=At(18,null,null,0),j.stateNode=x,j.return=t,t.child=j,ft=t,He=null,j=!0):j=!1}j||Ea(t)}if(x=t.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return ru(x)?t.lanes=32:t.lanes=536870912,null;zn(t)}return x=i.children,i=i.fallback,l?(Zn(),l=t.mode,x=Ql({mode:"hidden",children:x},l),i=va(i,l,n,null),x.return=t,i.return=t,x.sibling=i,t.child=x,l=t.child,l.memoizedState=Sc(n),l.childLanes=jc(e,g,n),t.memoizedState=vc,i):(Qn(t),wc(t,x))}if(j=e.memoizedState,j!==null&&(x=j.dehydrated,x!==null)){if(o)t.flags&256?(Qn(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),l=i.fallback,x=t.mode,i=Ql({mode:"visible",children:i.children},x),l=va(l,x,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,gi(t,e.child,null,n),i=t.child,i.memoizedState=Sc(n),i.childLanes=jc(e,g,n),t.memoizedState=vc,t=l);else if(Qn(t),ru(x)){if(g=x.nextSibling&&x.nextSibling.dataset,g)var R=g.dgst;g=R,i=Error(c(419)),i.stack="",i.digest=g,fr({value:i,source:null,stack:null}),t=Ec(e,t,n)}else if(Fe||hr(e,t,n,!1),g=(n&e.childLanes)!==0,Fe||g){if(g=De,g!==null&&(i=n&-n,i=(i&42)!==0?1:ro(i),i=(i&(g.suspendedLanes|n))!==0?0:i,i!==0&&i!==j.retryLane))throw j.retryLane=i,ii(e,i),Bt(g,e,i),am;x.data==="$?"||Vc(),t=Ec(e,t,n)}else x.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,He=rn(x.nextSibling),ft=t,Se=!0,wa=null,un=!1,e!==null&&(Yt[qt++]=Sn,Yt[qt++]=jn,Yt[qt++]=Sa,Sn=e.id,jn=e.overflow,Sa=t),t=wc(t,i.children),t.flags|=4096);return t}return l?(Zn(),l=i.fallback,x=t.mode,j=e.child,R=j.sibling,i=vn(j,{mode:"hidden",children:i.children}),i.subtreeFlags=j.subtreeFlags&65011712,R!==null?l=vn(R,l):(l=va(l,x,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,x=e.child.memoizedState,x===null?x=Sc(n):(j=x.cachePool,j!==null?(R=Ze._currentValue,j=j.parent!==R?{parent:R,pool:R}:j):j=Ff(),x={baseLanes:x.baseLanes|n,cachePool:j}),l.memoizedState=x,l.childLanes=jc(e,g,n),t.memoizedState=vc,i):(Qn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Ql({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ql(e,t){return e=At(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ec(e,t,n){return gi(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vo(e.return,t,n)}function _c(e,t,n,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=l)}function mm(e,t,n){var i=t.pendingProps,l=i.revealOrder,o=i.tail;if(it(e,t,i.children,n),i=Xe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(J(Xe,i),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),_c(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}_c(t,!0,n,null,o);break;case"together":_c(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(hr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function wx(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),Vn(t,Ze,e.memoizedState.cache),dr();break;case 27:case 5:ma(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?fm(e,t,n):(Qn(t),e=Tn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(hr(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return mm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(Xe,Xe.current),i)break;return null;case 22:case 23:return t.lanes=0,sm(e,t,n);case 24:Vn(t,Ze,e.memoizedState.cache)}return Tn(e,t,n)}function gm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!zc(e,n)&&(t.flags&128)===0)return Fe=!1,wx(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Se&&(t.flags&1048576)!==0&&Kf(t,zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")Oo(i)?(e=Aa(i,e),t.tag=1,t=um(null,t,i,e,n)):(t.tag=0,t=yc(null,t,i,e,n));else{if(i!=null){if(l=i.$$typeof,l===K){t.tag=11,t=im(null,t,i,e,n);break e}else if(l===$){t.tag=14,t=rm(null,t,i,e,n);break e}}throw t=qe(i)||i,Error(c(306,t,""))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Aa(i,t.pendingProps),um(e,t,i,l,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,Xo(e,t),vr(t,i,null,n);var g=t.memoizedState;if(i=g.cache,Vn(t,Ze,i),i!==o.cache&&Yo(t,[Ze],n,!0),yr(),i=g.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=dm(e,t,i,n);break e}else if(i!==l){l=$t(Error(c(424)),t),fr(l),t=dm(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=rn(e.firstChild),ft=t,Se=!0,wa=null,un=!0,n=Qh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(dr(),i===l){t=Tn(e,t,n);break e}it(e,t,i,n)}t=t.child}return t;case 26:return Pl(e,t),e===null?(n=yg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,i=ss(ie.current).createElement(n),i[ct]=t,i[pt]=e,lt(i,n,e),Ie(i),t.stateNode=i):t.memoizedState=yg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ma(t),e===null&&Se&&(i=t.stateNode=pg(t.type,t.pendingProps,ie.current),ft=t,un=!0,l=He,aa(t.type)?(lu=l,He=rn(i.firstChild)):He=l),it(e,t,t.pendingProps.children,n),Pl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=i=He)&&(i=Ix(i,t.type,t.pendingProps,un),i!==null?(t.stateNode=i,ft=t,He=rn(i.firstChild),un=!1,l=!0):l=!1),l||Ea(t)),ma(t),l=t.type,o=t.pendingProps,g=e!==null?e.memoizedProps:null,i=o.children,nu(l,o)?i=null:g!==null&&nu(l,g)&&(t.flags|=32),t.memoizedState!==null&&(l=tc(e,t,gx,null,null,n),Vr._currentValue=l),Pl(e,t),it(e,t,i,n),t.child;case 6:return e===null&&Se&&((e=n=He)&&(n=Fx(n,t.pendingProps,un),n!==null?(t.stateNode=n,ft=t,He=null,e=!0):e=!1),e||Ea(t)),null;case 13:return fm(e,t,n);case 4:return je(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=gi(t,null,i,n):it(e,t,i,n),t.child;case 11:return im(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Vn(t,t.type,i.value),it(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,za(t),l=ut(l),i=i(l),t.flags|=1,it(e,t,i,n),t.child;case 14:return rm(e,t,t.type,t.pendingProps,n);case 15:return lm(e,t,t.type,t.pendingProps,n);case 19:return mm(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=Ql(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=vn(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return sm(e,t,n);case 24:return za(t),i=ut(Ze),e===null?(l=Po(),l===null&&(l=De,o=qo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=n),l=o),t.memoizedState={parent:i,cache:l},Zo(t),Vn(t,Ze,l)):((e.lanes&n)!==0&&(Xo(e,t),vr(t,null,null,n),yr()),l=e.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Vn(t,Ze,i)):(i=o.cache,Vn(t,Ze,i),i!==l.cache&&Yo(t,[Ze],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function Cn(e){e.flags|=4}function pm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Eg(t)){if(t=Kt.current,t!==null&&((ye&4194048)===ye?dn!==null:(ye&62914560)!==ye&&(ye&536870912)===0||t!==dn))throw br=Qo,Wf;e.flags|=8192}}function Zl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qd():536870912,e.lanes|=t,yi|=t)}function Tr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Ex(e,t,n){var i=t.pendingProps;switch(Ho(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),En(Ze),ot(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ur(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zf())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(Cn(t),n!==null?(Ue(t),pm(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Cn(t),Ue(t),pm(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==i&&Cn(t),Ue(t),t.flags&=-16777217),null;case 27:bn(t),n=ie.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}e=ee.current,ur(t)?Pf(t):(e=pg(l,i,n),t.stateNode=e,Cn(t))}return Ue(t),null;case 5:if(bn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}if(e=ee.current,ur(t))Pf(t);else{switch(l=ss(ie.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(n,{is:i.is}):l.createElement(n)}}e[ct]=t,e[pt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(lt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Cn(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,ur(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=ft,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[ct]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||cg(e.nodeValue,n)),e||Ea(t)}else e=ss(e).createTextNode(i),e[ct]=t,t.stateNode=e}return Ue(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ur(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ct]=t}else dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else l=Zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(zn(t),t):(zn(t),null)}if(zn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var o=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Zl(t,t.updateQueue),Ue(t),null;case 4:return ot(),e===null&&Ic(t.stateNode.containerInfo),Ue(t),null;case 10:return En(t.type),Ue(t),null;case 19:if(X(Xe),l=t.memoizedState,l===null)return Ue(t),null;if(i=(t.flags&128)!==0,o=l.rendering,o===null)if(i)Tr(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Yl(e),o!==null){for(t.flags|=128,Tr(l,!1),e=o.updateQueue,t.updateQueue=e,Zl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)qf(n,e),n=n.sibling;return J(Xe,Xe.current&1|2),t.child}e=e.sibling}l.tail!==null&&cn()>Il&&(t.flags|=128,i=!0,Tr(l,!1),t.lanes=4194304)}else{if(!i)if(e=Yl(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Zl(t,e),Tr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Se)return Ue(t),null}else 2*cn()-l.renderingStartTime>Il&&n!==536870912&&(t.flags|=128,i=!0,Tr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=cn(),t.sibling=null,e=Xe.current,J(Xe,i?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return zn(t),Wo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&Zl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&X(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),En(Ze),Ue(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function _x(e,t){switch(Ho(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return En(Ze),ot(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bn(t),null;case 13:if(zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Xe),null;case 4:return ot(),null;case 10:return En(t.type),null;case 22:case 23:return zn(t),Wo(),e!==null&&X(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return En(Ze),null;case 25:return null;default:return null}}function bm(e,t){switch(Ho(t),t.tag){case 3:En(Ze),ot();break;case 26:case 27:case 5:bn(t);break;case 4:ot();break;case 13:zn(t);break;case 19:X(Xe);break;case 10:En(t.type);break;case 22:case 23:zn(t),Wo(),e!==null&&X(Ta);break;case 24:En(Ze)}}function Cr(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var o=n.create,g=n.inst;i=o(),g.destroy=i}n=n.next}while(n!==l)}}catch(x){Re(t,t.return,x)}}function Xn(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){var g=i.inst,x=g.destroy;if(x!==void 0){g.destroy=void 0,l=t;var j=n,R=x;try{R()}catch(H){Re(l,j,H)}}}i=i.next}while(i!==o)}}catch(H){Re(t,t.return,H)}}function xm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{rh(t,n)}catch(i){Re(e,e.return,i)}}}function ym(e,t,n){n.props=Aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Re(e,t,i)}}function Ar(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Re(e,t,l)}}function fn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Re(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Re(e,t,l)}else n.current=null}function vm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Re(e,e.return,l)}}function Tc(e,t,n){try{var i=e.stateNode;Px(i,e.type,n,t),i[pt]=t}catch(l){Re(e,e.return,l)}}function Sm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&aa(e.type)||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ls));else if(i!==4&&(i===27&&aa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function Xl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&aa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function jm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);lt(t,i,n),t[ct]=e,t[pt]=n}catch(o){Re(e,e.return,o)}}var An=!1,Ye=!1,kc=!1,wm=typeof WeakSet=="function"?WeakSet:Set,We=null;function zx(e,t){if(e=e.containerInfo,eu=hs,e=Bf(e),Co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var g=0,x=-1,j=-1,R=0,H=0,Y=e,D=null;t:for(;;){for(var B;Y!==n||l!==0&&Y.nodeType!==3||(x=g+l),Y!==o||i!==0&&Y.nodeType!==3||(j=g+i),Y.nodeType===3&&(g+=Y.nodeValue.length),(B=Y.firstChild)!==null;)D=Y,Y=B;for(;;){if(Y===e)break t;if(D===n&&++R===l&&(x=g),D===o&&++H===i&&(j=g),(B=Y.nextSibling)!==null)break;Y=D,D=Y.parentNode}Y=B}n=x===-1||j===-1?null:{start:x,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:e,selectionRange:n},hs=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,l=o.memoizedProps,o=o.memoizedState,i=n.stateNode;try{var le=Aa(n.type,l,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(le,o),i.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Re(n,n.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)iu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":iu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}}function Em(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n),i&4&&Cr(5,n);break;case 1:if(Jn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Re(n,n.return,g)}else{var l=Aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Re(n,n.return,g)}}i&64&&xm(n),i&512&&Ar(n,n.return);break;case 3:if(Jn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{rh(e,t)}catch(g){Re(n,n.return,g)}}break;case 27:t===null&&i&4&&jm(n);case 26:case 5:Jn(e,n),t===null&&i&4&&vm(n),i&512&&Ar(n,n.return);break;case 12:Jn(e,n);break;case 13:Jn(e,n),i&4&&Tm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ox.bind(null,n),Wx(e,n))));break;case 22:if(i=n.memoizedState!==null||An,!i){t=t!==null&&t.memoizedState!==null||Ye,l=An;var o=Ye;An=i,(Ye=t)&&!o?In(e,n,(n.subtreeFlags&8772)!==0):Jn(e,n),An=l,Ye=o}break;case 30:break;default:Jn(e,n)}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,yt=!1;function kn(e,t,n){for(n=n.child;n!==null;)zm(e,t,n),n=n.sibling}function zm(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 26:Ye||fn(n,t),kn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||fn(n,t);var i=Ne,l=yt;aa(n.type)&&(Ne=n.stateNode,yt=!1),kn(e,t,n),Ur(n.stateNode),Ne=i,yt=l;break;case 5:Ye||fn(n,t);case 6:if(i=Ne,l=yt,Ne=null,kn(e,t,n),Ne=i,yt=l,Ne!==null)if(yt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(o){Re(n,t,o)}else try{Ne.removeChild(n.stateNode)}catch(o){Re(n,t,o)}break;case 18:Ne!==null&&(yt?(e=Ne,mg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Pr(e)):mg(Ne,n.stateNode));break;case 4:i=Ne,l=yt,Ne=n.stateNode.containerInfo,yt=!0,kn(e,t,n),Ne=i,yt=l;break;case 0:case 11:case 14:case 15:Ye||Xn(2,n,t),Ye||Xn(4,n,t),kn(e,t,n);break;case 1:Ye||(fn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ym(n,t,i)),kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:Ye=(i=Ye)||n.memoizedState!==null,kn(e,t,n),Ye=i;break;default:kn(e,t,n)}}function Tm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pr(e)}catch(n){Re(t,t.return,n)}}function Tx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wm),t;default:throw Error(c(435,e.tag))}}function Rc(e,t){var n=Tx(e);t.forEach(function(i){var l=Nx.bind(null,e,i);n.has(i)||(n.add(i),i.then(l,l))})}function kt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],o=e,g=t,x=g;e:for(;x!==null;){switch(x.tag){case 27:if(aa(x.type)){Ne=x.stateNode,yt=!1;break e}break;case 5:Ne=x.stateNode,yt=!1;break e;case 3:case 4:Ne=x.stateNode.containerInfo,yt=!0;break e}x=x.return}if(Ne===null)throw Error(c(160));zm(o,g,l),Ne=null,yt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Cm(t,e),t=t.sibling}var an=null;function Cm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),Rt(e),i&4&&(Xn(3,e,e.return),Cr(3,e),Xn(5,e,e.return));break;case 1:kt(t,e),Rt(e),i&512&&(Ye||n===null||fn(n,n.return)),i&64&&An&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=an;if(kt(t,e),Rt(e),i&512&&(Ye||n===null||fn(n,n.return)),i&4){var o=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Wi]||o[ct]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),lt(o,i,n),o[ct]=e,Ie(o),i=o;break e;case"link":var g=jg("link","href",l).get(i+(n.href||""));if(g){for(var x=0;x<g.length;x++)if(o=g[x],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(x,1);break t}}o=l.createElement(i),lt(o,i,n),l.head.appendChild(o);break;case"meta":if(g=jg("meta","content",l).get(i+(n.content||""))){for(x=0;x<g.length;x++)if(o=g[x],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(x,1);break t}}o=l.createElement(i),lt(o,i,n),l.head.appendChild(o);break;default:throw Error(c(468,i))}o[ct]=e,Ie(o),i=o}e.stateNode=i}else wg(l,e.type,e.stateNode);else e.stateNode=Sg(l,i,e.memoizedProps);else o!==i?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,i===null?wg(l,e.type,e.stateNode):Sg(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Tc(e,e.memoizedProps,n.memoizedProps)}break;case 27:kt(t,e),Rt(e),i&512&&(Ye||n===null||fn(n,n.return)),n!==null&&i&4&&Tc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kt(t,e),Rt(e),i&512&&(Ye||n===null||fn(n,n.return)),e.flags&32){l=e.stateNode;try{Ia(l,"")}catch(B){Re(e,e.return,B)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Tc(e,l,n!==null?n.memoizedProps:l)),i&1024&&(kc=!0);break;case 6:if(kt(t,e),Rt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(B){Re(e,e.return,B)}}break;case 3:if(us=null,l=an,an=os(t.containerInfo),kt(t,e),an=l,Rt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(B){Re(e,e.return,B)}kc&&(kc=!1,Am(e));break;case 4:i=an,an=os(e.stateNode.containerInfo),kt(t,e),Rt(e),an=i;break;case 12:kt(t,e),Rt(e);break;case 13:kt(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lc=cn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rc(e,i)));break;case 22:l=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,R=An,H=Ye;if(An=R||l,Ye=H||j,kt(t,e),Ye=H,An=R,Rt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||j||An||Ye||ka(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(o=j.stateNode,l)g=o.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{x=j.stateNode;var Y=j.memoizedProps.style,D=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;x.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(B){Re(j,j.return,B)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=l?"":j.memoizedProps}catch(B){Re(j,j.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Rc(e,n))));break;case 19:kt(t,e),Rt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rc(e,i)));break;case 30:break;case 21:break;default:kt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Sm(i)){n=i;break}i=i.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,o=Cc(e);Xl(e,o,l);break;case 5:var g=n.stateNode;n.flags&32&&(Ia(g,""),n.flags&=-33);var x=Cc(e);Xl(e,x,g);break;case 3:case 4:var j=n.stateNode.containerInfo,R=Cc(e);Ac(e,R,j);break;default:throw Error(c(161))}}catch(H){Re(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Am(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Em(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),ka(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ym(t,t.return,n),ka(t);break;case 27:Ur(t.stateNode);case 26:case 5:fn(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,o=t,g=o.flags;switch(o.tag){case 0:case 11:case 15:In(l,o,n),Cr(4,o);break;case 1:if(In(l,o,n),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){Re(i,i.return,R)}if(i=o,l=i.updateQueue,l!==null){var x=i.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)ih(j[l],x)}catch(R){Re(i,i.return,R)}}n&&g&64&&xm(o),Ar(o,o.return);break;case 27:jm(o);case 26:case 5:In(l,o,n),n&&i===null&&g&4&&vm(o),Ar(o,o.return);break;case 12:In(l,o,n);break;case 13:In(l,o,n),n&&g&4&&Tm(l,o);break;case 22:o.memoizedState===null&&In(l,o,n),Ar(o,o.return);break;case 30:break;default:In(l,o,n)}t=t.sibling}}function Mc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&mr(n))}function Dc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mr(e))}function hn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)km(e,t,n,i),t=t.sibling}function km(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,i),l&2048&&Cr(9,t);break;case 1:hn(e,t,n,i);break;case 3:hn(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mr(e)));break;case 12:if(l&2048){hn(e,t,n,i),e=t.stateNode;try{var o=t.memoizedProps,g=o.id,x=o.onPostCommit;typeof x=="function"&&x(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Re(t,t.return,j)}}else hn(e,t,n,i);break;case 13:hn(e,t,n,i);break;case 23:break;case 22:o=t.stateNode,g=t.alternate,t.memoizedState!==null?o._visibility&2?hn(e,t,n,i):kr(e,t):o._visibility&2?hn(e,t,n,i):(o._visibility|=2,pi(e,t,n,i,(t.subtreeFlags&10256)!==0)),l&2048&&Mc(g,t);break;case 24:hn(e,t,n,i),l&2048&&Dc(t.alternate,t);break;default:hn(e,t,n,i)}}function pi(e,t,n,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,g=t,x=n,j=i,R=g.flags;switch(g.tag){case 0:case 11:case 15:pi(o,g,x,j,l),Cr(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&2?pi(o,g,x,j,l):kr(o,g):(H._visibility|=2,pi(o,g,x,j,l)),l&&R&2048&&Mc(g.alternate,g);break;case 24:pi(o,g,x,j,l),l&&R&2048&&Dc(g.alternate,g);break;default:pi(o,g,x,j,l)}t=t.sibling}}function kr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:kr(n,i),l&2048&&Mc(i.alternate,i);break;case 24:kr(n,i),l&2048&&Dc(i.alternate,i);break;default:kr(n,i)}t=t.sibling}}var Rr=8192;function bi(e){if(e.subtreeFlags&Rr)for(e=e.child;e!==null;)Rm(e),e=e.sibling}function Rm(e){switch(e.tag){case 26:bi(e),e.flags&Rr&&e.memoizedState!==null&&fy(an,e.memoizedState,e.memoizedProps);break;case 5:bi(e);break;case 3:case 4:var t=an;an=os(e.stateNode.containerInfo),bi(e),an=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Rr,Rr=16777216,bi(e),Rr=t):bi(e));break;default:bi(e)}}function Mm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,Bm(i,e)}Mm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dm(e),e=e.sibling}function Dm(e){switch(e.tag){case 0:case 11:case 15:Mr(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Mr(e);break;case 12:Mr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jl(e)):Mr(e);break;default:Mr(e)}}function Jl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,Bm(i,e)}Mm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),Jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Bm(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:mr(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,We=i;else e:for(n=e;We!==null;){i=We;var l=i.sibling,o=i.return;if(_m(i),i===n){We=null;break e}if(l!==null){l.return=o,We=l;break e}We=o}}}var Cx={getCacheForType:function(e){var t=ut(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Ax=typeof WeakMap=="function"?WeakMap:Map,_e=0,De=null,ge=null,ye=0,ze=0,Mt=null,Fn=!1,xi=!1,Bc=!1,Rn=0,Ge=0,Wn=0,Ra=0,Oc=0,Pt=0,yi=0,Dr=null,vt=null,Nc=!1,Lc=0,Il=1/0,Fl=null,ea=null,rt=0,ta=null,vi=null,Si=0,Uc=0,Hc=null,Om=null,Br=0,Gc=null;function Dt(){if((_e&2)!==0&&ye!==0)return ye&-ye;if(L.T!==null){var e=oi;return e!==0?e:Qc()}return Jd()}function Nm(){Pt===0&&(Pt=(ye&536870912)===0||Se?Pd():536870912);var e=Kt.current;return e!==null&&(e.flags|=32),Pt}function Bt(e,t,n){(e===De&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(ji(e,0),na(e,ye,Pt,!1)),Fi(e,n),((_e&2)===0||e!==De)&&(e===De&&((_e&2)===0&&(Ra|=n),Ge===4&&na(e,ye,Pt,!1)),mn(e))}function Lm(e,t,n){if((_e&6)!==0)throw Error(c(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ii(e,t),l=i?Mx(e,t):Yc(e,t,!0),o=i;do{if(l===0){xi&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!kx(n)){l=Yc(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var x=e;l=Dr;var j=x.current.memoizedState.isDehydrated;if(j&&(ji(x,g).flags|=256),g=Yc(x,g,!1),g!==2){if(Bc&&!j){x.errorRecoveryDisabledLanes|=o,Ra|=o,l=4;break e}o=vt,vt=l,o!==null&&(vt===null?vt=o:vt.push.apply(vt,o))}l=g}if(o=!1,l!==2)continue}}if(l===1){ji(e,0),na(e,t,0,!0);break}e:{switch(i=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,Pt,!Fn);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Lc+300-cn(),10<l)){if(na(i,t,Pt,!Fn),cl(i,0,!0)!==0)break e;i.timeoutHandle=fg(Um.bind(null,i,n,vt,Fl,Nc,t,Pt,Ra,yi,Fn,o,2,-0,0),l);break e}Um(i,n,vt,Fl,Nc,t,Pt,Ra,yi,Fn,o,0,-0,0)}}break}while(!0);mn(e)}function Um(e,t,n,i,l,o,g,x,j,R,H,Y,D,B){if(e.timeoutHandle=-1,Y=t.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&($r={stylesheets:null,count:0,unsuspend:dy},Rm(t),Y=hy(),Y!==null)){e.cancelPendingCommit=Y(Km.bind(null,e,t,o,n,i,l,g,x,j,H,1,D,B)),na(e,o,g,!R);return}Km(e,t,o,n,i,l,g,x,j)}function kx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],o=l.getSnapshot;l=l.value;try{if(!Ct(o(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t&=~Oc,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var o=31-Tt(l),g=1<<o;i[o]=-1,l&=~g}n!==0&&Zd(e,n,t)}function Wl(){return(_e&6)===0?(Or(0),!1):!0}function $c(){if(ge!==null){if(ze===0)var e=ge.return;else e=ge,wn=_a=null,ic(e),mi=null,_r=0,e=ge;for(;e!==null;)bm(e.alternate,e),e=e.return;ge=null}}function ji(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Zx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$c(),De=e,ge=n=vn(e.current,null),ye=t,ze=0,Mt=null,Fn=!1,xi=Ii(e,t),Bc=!1,yi=Pt=Oc=Ra=Wn=Ge=0,vt=Dr=null,Nc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Tt(i),o=1<<l;t|=e[l],i&=~o}return Rn=t,Sl(),n}function Hm(e,t){de=null,L.H=Gl,t===pr||t===kl?(t=nh(),ze=3):t===Wf?(t=nh(),ze=4):ze=t===am?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,ge===null&&(Ge=1,Kl(e,$t(t,e.current)))}function Gm(){var e=L.H;return L.H=Gl,e===null?Gl:e}function $m(){var e=L.A;return L.A=Cx,e}function Vc(){Ge=4,Fn||(ye&4194048)!==ye&&Kt.current!==null||(xi=!0),(Wn&134217727)===0&&(Ra&134217727)===0||De===null||na(De,ye,Pt,!1)}function Yc(e,t,n){var i=_e;_e|=2;var l=Gm(),o=$m();(De!==e||ye!==t)&&(Fl=null,ji(e,t)),t=!1;var g=Ge;e:do try{if(ze!==0&&ge!==null){var x=ge,j=Mt;switch(ze){case 8:$c(),g=6;break e;case 3:case 2:case 9:case 6:Kt.current===null&&(t=!0);var R=ze;if(ze=0,Mt=null,wi(e,x,j,R),n&&xi){g=0;break e}break;default:R=ze,ze=0,Mt=null,wi(e,x,j,R)}}Rx(),g=Ge;break}catch(H){Hm(e,H)}while(!0);return t&&e.shellSuspendCounter++,wn=_a=null,_e=i,L.H=l,L.A=o,ge===null&&(De=null,ye=0,Sl()),g}function Rx(){for(;ge!==null;)Vm(ge)}function Mx(e,t){var n=_e;_e|=2;var i=Gm(),l=$m();De!==e||ye!==t?(Fl=null,Il=cn()+500,ji(e,t)):xi=Ii(e,t);e:do try{if(ze!==0&&ge!==null){t=ge;var o=Mt;t:switch(ze){case 1:ze=0,Mt=null,wi(e,t,o,1);break;case 2:case 9:if(eh(o)){ze=0,Mt=null,Ym(t);break}t=function(){ze!==2&&ze!==9||De!==e||(ze=7),mn(e)},o.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:eh(o)?(ze=0,Mt=null,Ym(t)):(ze=0,Mt=null,wi(e,t,o,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var x=ge;if(!g||Eg(g)){ze=0,Mt=null;var j=x.sibling;if(j!==null)ge=j;else{var R=x.return;R!==null?(ge=R,es(R)):ge=null}break t}}ze=0,Mt=null,wi(e,t,o,5);break;case 6:ze=0,Mt=null,wi(e,t,o,6);break;case 8:$c(),Ge=6;break e;default:throw Error(c(462))}}Dx();break}catch(H){Hm(e,H)}while(!0);return wn=_a=null,L.H=i,L.A=l,_e=n,ge!==null?0:(De=null,ye=0,Sl(),Ge)}function Dx(){for(;ge!==null&&!t1();)Vm(ge)}function Vm(e){var t=gm(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,t===null?es(e):ge=t}function Ym(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=cm(n,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=cm(n,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:ic(t);default:bm(n,t),t=ge=qf(t,Rn),t=gm(n,t,Rn)}e.memoizedProps=e.pendingProps,t===null?es(e):ge=t}function wi(e,t,n,i){wn=_a=null,ic(t),mi=null,_r=0;var l=t.return;try{if(jx(e,l,t,n,ye)){Ge=1,Kl(e,$t(n,e.current)),ge=null;return}}catch(o){if(l!==null)throw ge=l,o;Ge=1,Kl(e,$t(n,e.current)),ge=null;return}t.flags&32768?(Se||i===1?e=!0:xi||(ye&536870912)!==0?e=!1:(Fn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Kt.current,i!==null&&i.tag===13&&(i.flags|=16384))),qm(t,e)):es(t)}function es(e){var t=e;do{if((t.flags&32768)!==0){qm(t,Fn);return}e=t.return;var n=Ex(t.alternate,t,Rn);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ge===0&&(Ge=5)}function qm(e,t){do{var n=_x(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);Ge=6,ge=null}function Km(e,t,n,i,l,o,g,x,j){e.cancelPendingCommit=null;do ts();while(rt!==0);if((_e&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Do,d1(e,n,o,g,x,j),e===De&&(ge=De=null,ye=0),vi=t,ta=e,Si=n,Uc=o,Hc=l,Om=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lx(ll,function(){return Jm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=L.T,L.T=null,l=Q.p,Q.p=2,g=_e,_e|=4;try{zx(e,t,n)}finally{_e=g,Q.p=l,L.T=i}}rt=1,Pm(),Qm(),Zm()}}function Pm(){if(rt===1){rt=0;var e=ta,t=vi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var i=Q.p;Q.p=2;var l=_e;_e|=4;try{Cm(t,e);var o=tu,g=Bf(e.containerInfo),x=o.focusedElem,j=o.selectionRange;if(g!==x&&x&&x.ownerDocument&&Df(x.ownerDocument.documentElement,x)){if(j!==null&&Co(x)){var R=j.start,H=j.end;if(H===void 0&&(H=R),"selectionStart"in x)x.selectionStart=R,x.selectionEnd=Math.min(H,x.value.length);else{var Y=x.ownerDocument||document,D=Y&&Y.defaultView||window;if(D.getSelection){var B=D.getSelection(),le=x.textContent.length,ae=Math.min(j.start,le),ke=j.end===void 0?ae:Math.min(j.end,le);!B.extend&&ae>ke&&(g=ke,ke=ae,ae=g);var z=Mf(x,ae),_=Mf(x,ke);if(z&&_&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==_.node||B.focusOffset!==_.offset)){var C=Y.createRange();C.setStart(z.node,z.offset),B.removeAllRanges(),ae>ke?(B.addRange(C),B.extend(_.node,_.offset)):(C.setEnd(_.node,_.offset),B.addRange(C))}}}}for(Y=[],B=x;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<Y.length;x++){var V=Y[x];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}hs=!!eu,tu=eu=null}finally{_e=l,Q.p=i,L.T=n}}e.current=t,rt=2}}function Qm(){if(rt===2){rt=0;var e=ta,t=vi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var i=Q.p;Q.p=2;var l=_e;_e|=4;try{Em(e,t.alternate,t)}finally{_e=l,Q.p=i,L.T=n}}rt=3}}function Zm(){if(rt===4||rt===3){rt=0,n1();var e=ta,t=vi,n=Si,i=Om;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,vi=ta=null,Xm(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ea=null),lo(n),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Ji,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=L.T,l=Q.p,Q.p=2,L.T=null;try{for(var o=e.onRecoverableError,g=0;g<i.length;g++){var x=i[g];o(x.value,{componentStack:x.stack})}}finally{L.T=t,Q.p=l}}(Si&3)!==0&&ts(),mn(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Gc?Br++:(Br=0,Gc=e):Br=0,Or(0)}}function Xm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mr(t)))}function ts(e){return Pm(),Qm(),Zm(),Jm()}function Jm(){if(rt!==5)return!1;var e=ta,t=Uc;Uc=0;var n=lo(Si),i=L.T,l=Q.p;try{Q.p=32>n?32:n,L.T=null,n=Hc,Hc=null;var o=ta,g=Si;if(rt=0,vi=ta=null,Si=0,(_e&6)!==0)throw Error(c(331));var x=_e;if(_e|=4,Dm(o.current),km(o,o.current,g,n),_e=x,Or(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Ji,o)}catch{}return!0}finally{Q.p=l,L.T=i,Xm(e,t)}}function Im(e,t,n){t=$t(n,t),t=xc(e.stateNode,t,2),e=Kn(e,t,2),e!==null&&(Fi(e,2),mn(e))}function Re(e,t,n){if(e.tag===3)Im(e,e,n);else for(;t!==null;){if(t.tag===3){Im(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=$t(n,e),n=tm(2),i=Kn(t,n,2),i!==null&&(nm(n,i,t,e),Fi(i,2),mn(i));break}}t=t.return}}function qc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ax;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Bc=!0,l.add(n),e=Bx.bind(null,e,t,n),t.then(e,e))}function Bx(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(ye&n)===n&&(Ge===4||Ge===3&&(ye&62914560)===ye&&300>cn()-Lc?(_e&2)===0&&ji(e,0):Oc|=n,yi===ye&&(yi=0)),mn(e)}function Fm(e,t){t===0&&(t=Qd()),e=ii(e,t),e!==null&&(Fi(e,t),mn(e))}function Ox(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fm(e,n)}function Nx(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),Fm(e,n)}function Lx(e,t){return no(e,t)}var ns=null,Ei=null,Kc=!1,as=!1,Pc=!1,Ma=0;function mn(e){e!==Ei&&e.next===null&&(Ei===null?ns=Ei=e:Ei=Ei.next=e),as=!0,Kc||(Kc=!0,Hx())}function Or(e,t){if(!Pc&&as){Pc=!0;do for(var n=!1,i=ns;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var g=i.suspendedLanes,x=i.pingedLanes;o=(1<<31-Tt(42|e)+1)-1,o&=l&~(g&~x),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,ng(i,o))}else o=ye,o=cl(i,i===De?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Ii(i,o)||(n=!0,ng(i,o));i=i.next}while(n);Pc=!1}}function Ux(){Wm()}function Wm(){as=Kc=!1;var e=0;Ma!==0&&(Qx()&&(e=Ma),Ma=0);for(var t=cn(),n=null,i=ns;i!==null;){var l=i.next,o=eg(i,t);o===0?(i.next=null,n===null?ns=l:n.next=l,l===null&&(Ei=n)):(n=i,(e!==0||(o&3)!==0)&&(as=!0)),i=l}Or(e)}function eg(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var g=31-Tt(o),x=1<<g,j=l[g];j===-1?((x&n)===0||(x&i)!==0)&&(l[g]=u1(x,t)):j<=t&&(e.expiredLanes|=x),o&=~x}if(t=De,n=ye,n=cl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ao(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ii(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ao(i),lo(n)){case 2:case 8:n=qd;break;case 32:n=ll;break;case 268435456:n=Kd;break;default:n=ll}return i=tg.bind(null,e),n=no(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ao(i),e.callbackPriority=2,e.callbackNode=null,2}function tg(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ts()&&e.callbackNode!==n)return null;var i=ye;return i=cl(e,e===De?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Lm(e,i,t),eg(e,cn()),e.callbackNode!=null&&e.callbackNode===n?tg.bind(null,e):null)}function ng(e,t){if(ts())return null;Lm(e,t,!0)}function Hx(){Xx(function(){(_e&6)!==0?no(Yd,Ux):Wm()})}function Qc(){return Ma===0&&(Ma=Pd()),Ma}function ag(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function ig(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Gx(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var o=ag((l[pt]||null).action),g=i.submitter;g&&(t=(t=g[pt]||null)?ag(t.formAction):g.getAttribute("formAction"),t!==null&&(o=t,g=null));var x=new xl("action","action",null,i,l);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ma!==0){var j=g?ig(l,g):new FormData(l);hc(n,{pending:!0,data:j,method:l.method,action:o},null,j)}}else typeof o=="function"&&(x.preventDefault(),j=g?ig(l,g):new FormData(l),hc(n,{pending:!0,data:j,method:l.method,action:o},o,j))},currentTarget:l}]})}}for(var Zc=0;Zc<Mo.length;Zc++){var Xc=Mo[Zc],$x=Xc.toLowerCase(),Vx=Xc[0].toUpperCase()+Xc.slice(1);nn($x,"on"+Vx)}nn(Lf,"onAnimationEnd"),nn(Uf,"onAnimationIteration"),nn(Hf,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(rx,"onTransitionRun"),nn(lx,"onTransitionStart"),nn(sx,"onTransitionCancel"),nn(Gf,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nr));function rg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var g=i.length-1;0<=g;g--){var x=i[g],j=x.instance,R=x.currentTarget;if(x=x.listener,j!==o&&l.isPropagationStopped())break e;o=x,l.currentTarget=R;try{o(l)}catch(H){ql(H)}l.currentTarget=null,o=j}else for(g=0;g<i.length;g++){if(x=i[g],j=x.instance,R=x.currentTarget,x=x.listener,j!==o&&l.isPropagationStopped())break e;o=x,l.currentTarget=R;try{o(l)}catch(H){ql(H)}l.currentTarget=null,o=j}}}}function pe(e,t){var n=t[so];n===void 0&&(n=t[so]=new Set);var i=e+"__bubble";n.has(i)||(lg(t,e,2,!1),n.add(i))}function Jc(e,t,n){var i=0;t&&(i|=4),lg(n,e,i,t)}var is="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[is]){e[is]=!0,Fd.forEach(function(n){n!=="selectionchange"&&(Yx.has(n)||Jc(n,!1,e),Jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[is]||(t[is]=!0,Jc("selectionchange",!1,t))}}function lg(e,t,n,i){switch(kg(t)){case 2:var l=py;break;case 8:l=by;break;default:l=du}n=l.bind(null,t,n,e),l=void 0,!yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Fc(e,t,n,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var x=i.stateNode.containerInfo;if(x===l)break;if(g===4)for(g=i.return;g!==null;){var j=g.tag;if((j===3||j===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;x!==null;){if(g=Ka(x),g===null)return;if(j=g.tag,j===5||j===6||j===26||j===27){i=o=g;continue e}x=x.parentNode}}i=i.return}hf(function(){var R=o,H=bo(n),Y=[];e:{var D=$f.get(e);if(D!==void 0){var B=xl,le=e;switch(e){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":B=L1;break;case"focusin":le="focus",B=wo;break;case"focusout":le="blur",B=wo;break;case"beforeblur":case"afterblur":B=wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=_1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=G1;break;case Lf:case Uf:case Hf:B=C1;break;case Gf:B=V1;break;case"scroll":case"scrollend":B=w1;break;case"wheel":B=q1;break;case"copy":case"cut":case"paste":B=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=xf;break;case"toggle":case"beforetoggle":B=P1}var ae=(t&4)!==0,ke=!ae&&(e==="scroll"||e==="scrollend"),z=ae?D!==null?D+"Capture":null:D;ae=[];for(var _=R,C;_!==null;){var V=_;if(C=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||C===null||z===null||(V=tr(_,z),V!=null&&ae.push(Lr(_,V,C))),ke)break;_=_.return}0<ae.length&&(D=new B(D,le,null,n,H),Y.push({event:D,listeners:ae}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",D&&n!==po&&(le=n.relatedTarget||n.fromElement)&&(Ka(le)||le[qa]))break e;if((B||D)&&(D=H.window===H?H:(D=H.ownerDocument)?D.defaultView||D.parentWindow:window,B?(le=n.relatedTarget||n.toElement,B=R,le=le?Ka(le):null,le!==null&&(ke=f(le),ae=le.tag,le!==ke||ae!==5&&ae!==27&&ae!==6)&&(le=null)):(B=null,le=R),B!==le)){if(ae=pf,V="onMouseLeave",z="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(ae=xf,V="onPointerLeave",z="onPointerEnter",_="pointer"),ke=B==null?D:er(B),C=le==null?D:er(le),D=new ae(V,_+"leave",B,n,H),D.target=ke,D.relatedTarget=C,V=null,Ka(H)===R&&(ae=new ae(z,_+"enter",le,n,H),ae.target=C,ae.relatedTarget=ke,V=ae),ke=V,B&&le)t:{for(ae=B,z=le,_=0,C=ae;C;C=_i(C))_++;for(C=0,V=z;V;V=_i(V))C++;for(;0<_-C;)ae=_i(ae),_--;for(;0<C-_;)z=_i(z),C--;for(;_--;){if(ae===z||z!==null&&ae===z.alternate)break t;ae=_i(ae),z=_i(z)}ae=null}else ae=null;B!==null&&sg(Y,D,B,ae,!1),le!==null&&ke!==null&&sg(Y,ke,le,ae,!0)}}e:{if(D=R?er(R):window,B=D.nodeName&&D.nodeName.toLowerCase(),B==="select"||B==="input"&&D.type==="file")var F=zf;else if(Ef(D))if(Tf)F=nx;else{F=ex;var fe=W1}else B=D.nodeName,!B||B.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?R&&go(R.elementType)&&(F=zf):F=tx;if(F&&(F=F(e,R))){_f(Y,F,n,H);break e}fe&&fe(e,D,R),e==="focusout"&&R&&D.type==="number"&&R.memoizedProps.value!=null&&mo(D,"number",D.value)}switch(fe=R?er(R):window,e){case"focusin":(Ef(fe)||fe.contentEditable==="true")&&(ti=fe,Ao=R,cr=null);break;case"focusout":cr=Ao=ti=null;break;case"mousedown":ko=!0;break;case"contextmenu":case"mouseup":case"dragend":ko=!1,Of(Y,n,H);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":Of(Y,n,H)}var te;if(_o)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ei?jf(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(yf&&n.locale!=="ko"&&(ei||re!=="onCompositionStart"?re==="onCompositionEnd"&&ei&&(te=mf()):($n=H,vo="value"in $n?$n.value:$n.textContent,ei=!0)),fe=rs(R,re),0<fe.length&&(re=new bf(re,e,null,n,H),Y.push({event:re,listeners:fe}),te?re.data=te:(te=wf(n),te!==null&&(re.data=te)))),(te=Z1?X1(e,n):J1(e,n))&&(re=rs(R,"onBeforeInput"),0<re.length&&(fe=new bf("onBeforeInput","beforeinput",null,n,H),Y.push({event:fe,listeners:re}),fe.data=te)),Gx(Y,e,R,n,H)}rg(Y,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rs(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=tr(e,n),l!=null&&i.unshift(Lr(e,l,o)),l=tr(e,t),l!=null&&i.push(Lr(e,l,o))),e.tag===3)return i;e=e.return}return[]}function _i(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sg(e,t,n,i,l){for(var o=t._reactName,g=[];n!==null&&n!==i;){var x=n,j=x.alternate,R=x.stateNode;if(x=x.tag,j!==null&&j===i)break;x!==5&&x!==26&&x!==27||R===null||(j=R,l?(R=tr(n,o),R!=null&&g.unshift(Lr(n,R,j))):l||(R=tr(n,o),R!=null&&g.push(Lr(n,R,j)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var qx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function og(e){return(typeof e=="string"?e:""+e).replace(qx,`
`).replace(Kx,"")}function cg(e,t){return t=og(t),og(e)===t}function ls(){}function Ae(e,t,n,i,l,o){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ia(e,""+i);break;case"className":dl(e,"class",i);break;case"tabIndex":dl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":dl(e,n,i);break;case"style":df(e,i,o);break;case"data":if(t!=="object"){dl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ml(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",l.name,l,null),Ae(e,t,"formEncType",l.formEncType,l,null),Ae(e,t,"formMethod",l.formMethod,l,null),Ae(e,t,"formTarget",l.formTarget,l,null)):(Ae(e,t,"encType",l.encType,l,null),Ae(e,t,"method",l.method,l,null),Ae(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ml(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ls);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ml(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":pe("beforetoggle",e),pe("toggle",e),ul(e,"popover",i);break;case"xlinkActuate":xn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":xn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":xn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":xn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":xn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":xn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":xn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":xn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":xn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ul(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=S1.get(n)||n,ul(e,n,i))}}function Wc(e,t,n,i,l,o){switch(n){case"style":df(e,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&Ia(e,""+i);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ls);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),o=e[pt]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ul(e,n,i)}}}function lt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var i=!1,l=!1,o;for(o in n)if(n.hasOwnProperty(o)){var g=n[o];if(g!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,o,g,n,null)}}l&&Ae(e,t,"srcSet",n.srcSet,n,null),i&&Ae(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var x=o=g=l=null,j=null,R=null;for(i in n)if(n.hasOwnProperty(i)){var H=n[i];if(H!=null)switch(i){case"name":l=H;break;case"type":g=H;break;case"checked":j=H;break;case"defaultChecked":R=H;break;case"value":o=H;break;case"defaultValue":x=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:Ae(e,t,i,H,n,null)}}sf(e,o,x,j,R,g,l,!1),fl(e);return;case"select":pe("invalid",e),i=g=o=null;for(l in n)if(n.hasOwnProperty(l)&&(x=n[l],x!=null))switch(l){case"value":o=x;break;case"defaultValue":g=x;break;case"multiple":i=x;default:Ae(e,t,l,x,n,null)}t=o,n=g,e.multiple=!!i,t!=null?Ja(e,!!i,t,!1):n!=null&&Ja(e,!!i,n,!0);return;case"textarea":pe("invalid",e),o=l=i=null;for(g in n)if(n.hasOwnProperty(g)&&(x=n[g],x!=null))switch(g){case"value":i=x;break;case"defaultValue":l=x;break;case"children":o=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(91));break;default:Ae(e,t,g,x,n,null)}cf(e,i,l,o),fl(e);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(i=n[j],i!=null))switch(j){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ae(e,t,j,i,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(i=0;i<Nr.length;i++)pe(Nr[i],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(i=n[R],i!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,R,i,n,null)}return;default:if(go(t)){for(H in n)n.hasOwnProperty(H)&&(i=n[H],i!==void 0&&Wc(e,t,H,i,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null&&Ae(e,t,x,i,n,null))}function Px(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,g=null,x=null,j=null,R=null,H=null;for(B in n){var Y=n[B];if(n.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":j=Y;default:i.hasOwnProperty(B)||Ae(e,t,B,null,i,Y)}}for(var D in i){var B=i[D];if(Y=n[D],i.hasOwnProperty(D)&&(B!=null||Y!=null))switch(D){case"type":o=B;break;case"name":l=B;break;case"checked":R=B;break;case"defaultChecked":H=B;break;case"value":g=B;break;case"defaultValue":x=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:B!==Y&&Ae(e,t,D,B,i,Y)}}ho(e,g,x,j,R,H,o,l);return;case"select":B=g=x=D=null;for(o in n)if(j=n[o],n.hasOwnProperty(o)&&j!=null)switch(o){case"value":break;case"multiple":B=j;default:i.hasOwnProperty(o)||Ae(e,t,o,null,i,j)}for(l in i)if(o=i[l],j=n[l],i.hasOwnProperty(l)&&(o!=null||j!=null))switch(l){case"value":D=o;break;case"defaultValue":x=o;break;case"multiple":g=o;default:o!==j&&Ae(e,t,l,o,i,j)}t=x,n=g,i=B,D!=null?Ja(e,!!n,D,!1):!!i!=!!n&&(t!=null?Ja(e,!!n,t,!0):Ja(e,!!n,n?[]:"",!1));return;case"textarea":B=D=null;for(x in n)if(l=n[x],n.hasOwnProperty(x)&&l!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Ae(e,t,x,null,i,l)}for(g in i)if(l=i[g],o=n[g],i.hasOwnProperty(g)&&(l!=null||o!=null))switch(g){case"value":D=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Ae(e,t,g,l,i,o)}of(e,D,B);return;case"option":for(var le in n)if(D=n[le],n.hasOwnProperty(le)&&D!=null&&!i.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:Ae(e,t,le,null,i,D)}for(j in i)if(D=i[j],B=n[j],i.hasOwnProperty(j)&&D!==B&&(D!=null||B!=null))switch(j){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Ae(e,t,j,D,i,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in n)D=n[ae],n.hasOwnProperty(ae)&&D!=null&&!i.hasOwnProperty(ae)&&Ae(e,t,ae,null,i,D);for(R in i)if(D=i[R],B=n[R],i.hasOwnProperty(R)&&D!==B&&(D!=null||B!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Ae(e,t,R,D,i,B)}return;default:if(go(t)){for(var ke in n)D=n[ke],n.hasOwnProperty(ke)&&D!==void 0&&!i.hasOwnProperty(ke)&&Wc(e,t,ke,void 0,i,D);for(H in i)D=i[H],B=n[H],!i.hasOwnProperty(H)||D===B||D===void 0&&B===void 0||Wc(e,t,H,D,i,B);return}}for(var z in n)D=n[z],n.hasOwnProperty(z)&&D!=null&&!i.hasOwnProperty(z)&&Ae(e,t,z,null,i,D);for(Y in i)D=i[Y],B=n[Y],!i.hasOwnProperty(Y)||D===B||D==null&&B==null||Ae(e,t,Y,D,i,B)}var eu=null,tu=null;function ss(e){return e.nodeType===9?e:e.ownerDocument}function ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=null;function Qx(){var e=window.event;return e&&e.type==="popstate"?e===au?!1:(au=e,!0):(au=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(Jx)}:fg;function Jx(e){setTimeout(function(){throw e})}function aa(e){return e==="head"}function mg(e,t){var n=t,i=0,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<i&&8>i){n=i;var g=e.ownerDocument;if(n&1&&Ur(g.documentElement),n&2&&Ur(g.body),n&4)for(n=g.head,Ur(n),g=n.firstChild;g;){var x=g.nextSibling,j=g.nodeName;g[Wi]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&g.rel.toLowerCase()==="stylesheet"||n.removeChild(g),g=x}}if(l===0){e.removeChild(o),Pr(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:i=n.charCodeAt(0)-48;else i=0;n=o}while(n);Pr(t)}function iu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":iu(n),oo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ix(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=rn(e.nextSibling),e===null)break}return null}function Fx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rn(e.nextSibling),e===null))return null;return e}function ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Wx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var lu=null;function gg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function pg(e,t,n){switch(t=ss(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ur(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oo(e)}var Qt=new Map,bg=new Set;function os(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=Q.d;Q.d={f:ey,r:ty,D:ny,C:ay,L:iy,m:ry,X:sy,S:ly,M:oy};function ey(){var e=Mn.f(),t=Wl();return e||t}function ty(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Lh(t):Mn.r(e)}var zi=typeof document>"u"?null:document;function xg(e,t,n){var i=zi;if(i&&typeof t=="string"&&t){var l=Gt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),bg.has(l)||(bg.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),lt(t,"link",e),Ie(t),i.head.appendChild(t)))}}function ny(e){Mn.D(e),xg("dns-prefetch",e,null)}function ay(e,t){Mn.C(e,t),xg("preconnect",e,t)}function iy(e,t,n){Mn.L(e,t,n);var i=zi;if(i&&e&&t){var l='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Gt(n.imageSizes)+'"]')):l+='[href="'+Gt(e)+'"]';var o=l;switch(t){case"style":o=Ti(e);break;case"script":o=Ci(e)}Qt.has(o)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qt.set(o,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Hr(o))||t==="script"&&i.querySelector(Gr(o))||(t=i.createElement("link"),lt(t,"link",e),Ie(t),i.head.appendChild(t)))}}function ry(e,t){Mn.m(e,t);var n=zi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Gt(i)+'"][href="'+Gt(e)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ci(e)}if(!Qt.has(o)&&(e=y({rel:"modulepreload",href:e},t),Qt.set(o,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gr(o)))return}i=n.createElement("link"),lt(i,"link",e),Ie(i),n.head.appendChild(i)}}}function ly(e,t,n){Mn.S(e,t,n);var i=zi;if(i&&e){var l=Qa(i).hoistableStyles,o=Ti(e);t=t||"default";var g=l.get(o);if(!g){var x={loading:0,preload:null};if(g=i.querySelector(Hr(o)))x.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qt.get(o))&&su(e,n);var j=g=i.createElement("link");Ie(j),lt(j,"link",e),j._p=new Promise(function(R,H){j.onload=R,j.onerror=H}),j.addEventListener("load",function(){x.loading|=1}),j.addEventListener("error",function(){x.loading|=2}),x.loading|=4,cs(g,t,i)}g={type:"stylesheet",instance:g,count:1,state:x},l.set(o,g)}}}function sy(e,t){Mn.X(e,t);var n=zi;if(n&&e){var i=Qa(n).hoistableScripts,l=Ci(e),o=i.get(l);o||(o=n.querySelector(Gr(l)),o||(e=y({src:e,async:!0},t),(t=Qt.get(l))&&ou(e,t),o=n.createElement("script"),Ie(o),lt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function oy(e,t){Mn.M(e,t);var n=zi;if(n&&e){var i=Qa(n).hoistableScripts,l=Ci(e),o=i.get(l);o||(o=n.querySelector(Gr(l)),o||(e=y({src:e,async:!0,type:"module"},t),(t=Qt.get(l))&&ou(e,t),o=n.createElement("script"),Ie(o),lt(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function yg(e,t,n,i){var l=(l=ie.current)?os(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ti(n.href),n=Qa(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ti(n.href);var o=Qa(l).hoistableStyles,g=o.get(e);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,g),(o=l.querySelector(Hr(e)))&&!o._p&&(g.instance=o,g.state.loading=5),Qt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qt.set(e,n),o||cy(l,e,n,g.state))),t&&i===null)throw Error(c(528,""));return g}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(n),n=Qa(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ti(e){return'href="'+Gt(e)+'"'}function Hr(e){return'link[rel="stylesheet"]['+e+"]"}function vg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function cy(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),lt(t,"link",n),Ie(t),e.head.appendChild(t))}function Ci(e){return'[src="'+Gt(e)+'"]'}function Gr(e){return"script[async]"+e}function Sg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Gt(n.href)+'"]');if(i)return t.instance=i,Ie(i),i;var l=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ie(i),lt(i,"style",l),cs(i,n.precedence,e),t.instance=i;case"stylesheet":l=Ti(n.href);var o=e.querySelector(Hr(l));if(o)return t.state.loading|=4,t.instance=o,Ie(o),o;i=vg(n),(l=Qt.get(l))&&su(i,l),o=(e.ownerDocument||e).createElement("link"),Ie(o);var g=o;return g._p=new Promise(function(x,j){g.onload=x,g.onerror=j}),lt(o,"link",i),t.state.loading|=4,cs(o,n.precedence,e),t.instance=o;case"script":return o=Ci(n.src),(l=e.querySelector(Gr(o)))?(t.instance=l,Ie(l),l):(i=n,(l=Qt.get(o))&&(i=y({},n),ou(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ie(l),lt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,cs(i,n.precedence,e));return t.instance}function cs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,g=0;g<i.length;g++){var x=i[g];if(x.dataset.precedence===t)o=x;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ou(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var us=null;function jg(e,t,n){if(us===null){var i=new Map,l=us=new Map;l.set(n,i)}else l=us,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var o=n[l];if(!(o[Wi]||o[ct]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var g=o.getAttribute(t)||"";g=e+g;var x=i.get(g);x?x.push(o):i.set(g,[o])}}return i}function wg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function uy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Eg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $r=null;function dy(){}function fy(e,t,n){if($r===null)throw Error(c(475));var i=$r;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ti(n.href),o=e.querySelector(Hr(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=ds.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=o,Ie(o);return}o=e.ownerDocument||e,n=vg(n),(l=Qt.get(l))&&su(n,l),o=o.createElement("link"),Ie(o);var g=o;g._p=new Promise(function(x,j){g.onload=x,g.onerror=j}),lt(o,"link",n),t.instance=o}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=ds.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function hy(){if($r===null)throw Error(c(475));var e=$r;return e.stylesheets&&e.count===0&&cu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&cu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ds(){if(this.count--,this.count===0){if(this.stylesheets)cu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fs=null;function cu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fs=new Map,t.forEach(my,e),fs=null,ds.call(e))}function my(e,t){if(!(t.state.loading&4)){var n=fs.get(e);if(n)var i=n.get(null);else{n=new Map,fs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var g=l[o];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),i=g)}i&&n.set(null,i)}l=t.instance,g=l.getAttribute("data-precedence"),o=n.get(g)||i,o===i&&n.set(null,l),n.set(g,l),this.count++,i=ds.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Vr={$$typeof:k,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function gy(e,t,n,i,l,o,g,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=io(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.hiddenUpdates=io(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function _g(e,t,n,i,l,o,g,x,j,R,H,Y){return e=new gy(e,t,n,g,x,j,R,Y),t=1,o===!0&&(t|=24),o=At(3,null,null,t),e.current=o,o.stateNode=e,t=qo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:t},Zo(o),e}function zg(e){return e?(e=ri,e):ri}function Tg(e,t,n,i,l,o){l=zg(l),i.context===null?i.context=l:i.pendingContext=l,i=qn(t),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=Kn(e,i,t),n!==null&&(Bt(n,e,t),xr(n,e,t))}function Cg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){Cg(e,t),(e=e.alternate)&&Cg(e,t)}function Ag(e){if(e.tag===13){var t=ii(e,67108864);t!==null&&Bt(t,e,67108864),uu(e,67108864)}}var hs=!0;function py(e,t,n,i){var l=L.T;L.T=null;var o=Q.p;try{Q.p=2,du(e,t,n,i)}finally{Q.p=o,L.T=l}}function by(e,t,n,i){var l=L.T;L.T=null;var o=Q.p;try{Q.p=8,du(e,t,n,i)}finally{Q.p=o,L.T=l}}function du(e,t,n,i){if(hs){var l=fu(i);if(l===null)Fc(e,t,i,ms,n),Rg(e,i);else if(yy(l,e,t,n,i))i.stopPropagation();else if(Rg(e,i),t&4&&-1<xy.indexOf(e)){for(;l!==null;){var o=Pa(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var g=ga(o.pendingLanes);if(g!==0){var x=o;for(x.pendingLanes|=2,x.entangledLanes|=2;g;){var j=1<<31-Tt(g);x.entanglements[1]|=j,g&=~j}mn(o),(_e&6)===0&&(Il=cn()+500,Or(0))}}break;case 13:x=ii(o,2),x!==null&&Bt(x,o,2),Wl(),uu(o,2)}if(o=fu(i),o===null&&Fc(e,t,i,ms,n),o===l)break;l=o}l!==null&&i.stopPropagation()}else Fc(e,t,i,null,n)}}function fu(e){return e=bo(e),hu(e)}var ms=null;function hu(e){if(ms=null,e=Ka(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ms=e,null}function kg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(a1()){case Yd:return 2;case qd:return 8;case ll:case i1:return 32;case Kd:return 268435456;default:return 32}default:return 32}}var mu=!1,ia=null,ra=null,la=null,Yr=new Map,qr=new Map,sa=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rg(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Kr(e,t,n,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Pa(t),t!==null&&Ag(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yy(e,t,n,i,l){switch(t){case"focusin":return ia=Kr(ia,e,t,n,i,l),!0;case"dragenter":return ra=Kr(ra,e,t,n,i,l),!0;case"mouseover":return la=Kr(la,e,t,n,i,l),!0;case"pointerover":var o=l.pointerId;return Yr.set(o,Kr(Yr.get(o)||null,e,t,n,i,l)),!0;case"gotpointercapture":return o=l.pointerId,qr.set(o,Kr(qr.get(o)||null,e,t,n,i,l)),!0}return!1}function Mg(e){var t=Ka(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,f1(e.priority,function(){if(n.tag===13){var i=Dt();i=ro(i);var l=ii(n,i);l!==null&&Bt(l,n,i),uu(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);po=i,n.target.dispatchEvent(i),po=null}else return t=Pa(n),t!==null&&Ag(t),e.blockedOn=n,!1;t.shift()}return!0}function Dg(e,t,n){gs(e)&&n.delete(t)}function vy(){mu=!1,ia!==null&&gs(ia)&&(ia=null),ra!==null&&gs(ra)&&(ra=null),la!==null&&gs(la)&&(la=null),Yr.forEach(Dg),qr.forEach(Dg)}function ps(e,t){e.blockedOn===t&&(e.blockedOn=null,mu||(mu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,vy)))}var bs=null;function Bg(e){bs!==e&&(bs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){bs===e&&(bs=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(hu(i||n)===null)continue;break}var o=Pa(n);o!==null&&(e.splice(t,3),t-=3,hc(o,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function Pr(e){function t(j){return ps(j,e)}ia!==null&&ps(ia,e),ra!==null&&ps(ra,e),la!==null&&ps(la,e),Yr.forEach(t),qr.forEach(t);for(var n=0;n<sa.length;n++){var i=sa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)Mg(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],o=n[i+1],g=l[pt]||null;if(typeof o=="function")g||Bg(n);else if(g){var x=null;if(o&&o.hasAttribute("formAction")){if(l=o,g=o[pt]||null)x=g.formAction;else if(hu(l)!==null)continue}else x=g.action;typeof x=="function"?n[i+1]=x:(n.splice(i,3),i-=3),Bg(n)}}}function gu(e){this._internalRoot=e}xs.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,i=Dt();Tg(n,i,e,t,null,null)},xs.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tg(e.current,2,null,e,null,null),Wl(),t[qa]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&Mg(e)}};var Og=s.version;if(Og!=="19.1.0")throw Error(c(527,Og,"19.1.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Sy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{Ji=ys.inject(Sy),zt=ys}catch{}}return Zr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,i="",l=Ih,o=Fh,g=Wh,x=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(x=t.unstable_transitionCallbacks)),t=_g(e,1,!1,null,null,n,i,l,o,g,x,null),e[qa]=t.current,Ic(e),new gu(t)},Zr.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var i=!1,l="",o=Ih,g=Fh,x=Wh,j=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(j=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=_g(e,1,!0,t,n??null,i,l,o,g,x,j,R),t.context=zg(null),n=t.current,i=Dt(),i=ro(i),l=qn(i),l.callback=null,Kn(n,l,i),n=i,t.current.lanes=n,Fi(t,n),mn(t),e[qa]=t.current,Ic(e),new xs(t)},Zr.version="19.1.0",Zr}var Kg;function My(){if(Kg)return xu.exports;Kg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),xu.exports=Ry(),xu.exports}var Dy=My(),at=function(){return at=Object.assign||function(s){for(var u,c=1,d=arguments.length;c<d;c++){u=arguments[c];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(s[f]=u[f])}return s},at.apply(this,arguments)};function Ui(a,s,u){if(u||arguments.length===2)for(var c=0,d=s.length,f;c<d;c++)(f||!(c in s))&&(f||(f=Array.prototype.slice.call(s,0,c)),f[c]=s[c]);return a.concat(f||Array.prototype.slice.call(s))}var Be="-ms-",el="-moz-",we="-webkit-",G0="comm",Ps="rule",Ed="decl",By="@import",$0="@keyframes",Oy="@layer",V0=Math.abs,_d=String.fromCharCode,od=Object.assign;function Ny(a,s){return nt(a,0)^45?(((s<<2^nt(a,0))<<2^nt(a,1))<<2^nt(a,2))<<2^nt(a,3):0}function Y0(a){return a.trim()}function On(a,s){return(a=s.exec(a))?a[0]:a}function ue(a,s,u){return a.replace(s,u)}function Cs(a,s,u){return a.indexOf(s,u)}function nt(a,s){return a.charCodeAt(s)|0}function Hi(a,s,u){return a.slice(s,u)}function gn(a){return a.length}function q0(a){return a.length}function Fr(a,s){return s.push(a),a}function Ly(a,s){return a.map(s).join("")}function Pg(a,s){return a.filter(function(u){return!On(u,s)})}var Qs=1,Gi=1,K0=0,Zt=0,Qe=0,qi="";function Zs(a,s,u,c,d,f,b,v){return{value:a,root:s,parent:u,type:c,props:d,children:f,line:Qs,column:Gi,length:b,return:"",siblings:v}}function ua(a,s){return od(Zs("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function Ai(a){for(;a.root;)a=ua(a.root,{children:[a]});Fr(a,a.siblings)}function Uy(){return Qe}function Hy(){return Qe=Zt>0?nt(qi,--Zt):0,Gi--,Qe===10&&(Gi=1,Qs--),Qe}function ln(){return Qe=Zt<K0?nt(qi,Zt++):0,Gi++,Qe===10&&(Gi=1,Qs++),Qe}function Ha(){return nt(qi,Zt)}function As(){return Zt}function Xs(a,s){return Hi(qi,a,s)}function cd(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gy(a){return Qs=Gi=1,K0=gn(qi=a),Zt=0,[]}function $y(a){return qi="",a}function ju(a){return Y0(Xs(Zt-1,ud(a===91?a+2:a===40?a+1:a)))}function Vy(a){for(;(Qe=Ha())&&Qe<33;)ln();return cd(a)>2||cd(Qe)>3?"":" "}function Yy(a,s){for(;--s&&ln()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return Xs(a,As()+(s<6&&Ha()==32&&ln()==32))}function ud(a){for(;ln();)switch(Qe){case a:return Zt;case 34:case 39:a!==34&&a!==39&&ud(Qe);break;case 40:a===41&&ud(a);break;case 92:ln();break}return Zt}function qy(a,s){for(;ln()&&a+Qe!==57;)if(a+Qe===84&&Ha()===47)break;return"/*"+Xs(s,Zt-1)+"*"+_d(a===47?a:ln())}function Ky(a){for(;!cd(Ha());)ln();return Xs(a,Zt)}function Py(a){return $y(ks("",null,null,null,[""],a=Gy(a),0,[0],a))}function ks(a,s,u,c,d,f,b,v,h){for(var m=0,y=0,S=b,w=0,M=0,A=0,N=1,G=1,O=1,P=0,k="",K=d,U=f,I=c,$=k;G;)switch(A=P,P=ln()){case 40:if(A!=108&&nt($,S-1)==58){Cs($+=ue(ju(P),"&","&\f"),"&\f",V0(m?v[m-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:$+=ju(P);break;case 9:case 10:case 13:case 32:$+=Vy(A);break;case 92:$+=Yy(As()-1,7);continue;case 47:switch(Ha()){case 42:case 47:Fr(Qy(qy(ln(),As()),s,u,h),h);break;default:$+="/"}break;case 123*N:v[m++]=gn($)*O;case 125*N:case 59:case 0:switch(P){case 0:case 125:G=0;case 59+y:O==-1&&($=ue($,/\f/g,"")),M>0&&gn($)-S&&Fr(M>32?Zg($+";",c,u,S-1,h):Zg(ue($," ","")+";",c,u,S-2,h),h);break;case 59:$+=";";default:if(Fr(I=Qg($,s,u,m,y,d,v,k,K=[],U=[],S,f),f),P===123)if(y===0)ks($,s,I,I,K,f,S,v,U);else switch(w===99&&nt($,3)===110?100:w){case 100:case 108:case 109:case 115:ks(a,I,I,c&&Fr(Qg(a,I,I,0,0,d,v,k,d,K=[],S,U),U),d,U,S,v,c?K:U);break;default:ks($,I,I,I,[""],U,0,v,U)}}m=y=M=0,N=O=1,k=$="",S=b;break;case 58:S=1+gn($),M=A;default:if(N<1){if(P==123)--N;else if(P==125&&N++==0&&Hy()==125)continue}switch($+=_d(P),P*N){case 38:O=y>0?1:($+="\f",-1);break;case 44:v[m++]=(gn($)-1)*O,O=1;break;case 64:Ha()===45&&($+=ju(ln())),w=Ha(),y=S=gn(k=$+=Ky(As())),P++;break;case 45:A===45&&gn($)==2&&(N=0)}}return f}function Qg(a,s,u,c,d,f,b,v,h,m,y,S){for(var w=d-1,M=d===0?f:[""],A=q0(M),N=0,G=0,O=0;N<c;++N)for(var P=0,k=Hi(a,w+1,w=V0(G=b[N])),K=a;P<A;++P)(K=Y0(G>0?M[P]+" "+k:ue(k,/&\f/g,M[P])))&&(h[O++]=K);return Zs(a,s,u,d===0?Ps:v,h,m,y,S)}function Qy(a,s,u,c){return Zs(a,s,u,G0,_d(Uy()),Hi(a,2,-2),0,c)}function Zg(a,s,u,c,d){return Zs(a,s,u,Ed,Hi(a,0,c),Hi(a,c+1,-1),c,d)}function P0(a,s,u){switch(Ny(a,s)){case 5103:return we+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+a+a;case 4789:return el+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return we+a+el+a+Be+a+a;case 5936:switch(nt(a,s+11)){case 114:return we+a+Be+ue(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return we+a+Be+ue(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return we+a+Be+ue(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return we+a+Be+a+a;case 6165:return we+a+Be+"flex-"+a+a;case 5187:return we+a+ue(a,/(\w+).+(:[^]+)/,we+"box-$1$2"+Be+"flex-$1$2")+a;case 5443:return we+a+Be+"flex-item-"+ue(a,/flex-|-self/g,"")+(On(a,/flex-|baseline/)?"":Be+"grid-row-"+ue(a,/flex-|-self/g,""))+a;case 4675:return we+a+Be+"flex-line-pack"+ue(a,/align-content|flex-|-self/g,"")+a;case 5548:return we+a+Be+ue(a,"shrink","negative")+a;case 5292:return we+a+Be+ue(a,"basis","preferred-size")+a;case 6060:return we+"box-"+ue(a,"-grow","")+we+a+Be+ue(a,"grow","positive")+a;case 4554:return we+ue(a,/([^-])(transform)/g,"$1"+we+"$2")+a;case 6187:return ue(ue(ue(a,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),a,"")+a;case 5495:case 3959:return ue(a,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ue(ue(a,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+a+a;case 4200:if(!On(a,/flex-|baseline/))return Be+"grid-column-align"+Hi(a,s)+a;break;case 2592:case 3360:return Be+ue(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,d){return s=d,On(c.props,/grid-\w+-end/)})?~Cs(a+(u=u[s].value),"span",0)?a:Be+ue(a,"-start","")+a+Be+"grid-row-span:"+(~Cs(u,"span",0)?On(u,/\d+/):+On(u,/\d+/)-+On(a,/\d+/))+";":Be+ue(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return On(c.props,/grid-\w+-start/)})?a:Be+ue(ue(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ue(a,/(.+)-inline(.+)/,we+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(a)-1-s>6)switch(nt(a,s+1)){case 109:if(nt(a,s+4)!==45)break;case 102:return ue(a,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+el+(nt(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~Cs(a,"stretch",0)?P0(ue(a,"stretch","fill-available"),s,u)+a:a}break;case 5152:case 5920:return ue(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,f,b,v,h,m){return Be+d+":"+f+m+(b?Be+d+"-span:"+(v?h:+h-+f)+m:"")+a});case 4949:if(nt(a,s+6)===121)return ue(a,":",":"+we)+a;break;case 6444:switch(nt(a,nt(a,14)===45?18:11)){case 120:return ue(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(nt(a,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+Be+"$2box$3")+a;case 100:return ue(a,":",":"+Be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(a,"scroll-","scroll-snap-")+a}return a}function Ns(a,s){for(var u="",c=0;c<a.length;c++)u+=s(a[c],c,a,s)||"";return u}function Zy(a,s,u,c){switch(a.type){case Oy:if(a.children.length)break;case By:case Ed:return a.return=a.return||a.value;case G0:return"";case $0:return a.return=a.value+"{"+Ns(a.children,c)+"}";case Ps:if(!gn(a.value=a.props.join(",")))return""}return gn(u=Ns(a.children,c))?a.return=a.value+"{"+u+"}":""}function Xy(a){var s=q0(a);return function(u,c,d,f){for(var b="",v=0;v<s;v++)b+=a[v](u,c,d,f)||"";return b}}function Jy(a){return function(s){s.root||(s=s.return)&&a(s)}}function Iy(a,s,u,c){if(a.length>-1&&!a.return)switch(a.type){case Ed:a.return=P0(a.value,a.length,u);return;case $0:return Ns([ua(a,{value:ue(a.value,"@","@"+we)})],c);case Ps:if(a.length)return Ly(u=a.props,function(d){switch(On(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ai(ua(a,{props:[ue(d,/:(read-\w+)/,":"+el+"$1")]})),Ai(ua(a,{props:[d]})),od(a,{props:Pg(u,c)});break;case"::placeholder":Ai(ua(a,{props:[ue(d,/:(plac\w+)/,":"+we+"input-$1")]})),Ai(ua(a,{props:[ue(d,/:(plac\w+)/,":"+el+"$1")]})),Ai(ua(a,{props:[ue(d,/:(plac\w+)/,Be+"input-$1")]})),Ai(ua(a,{props:[d]})),od(a,{props:Pg(u,c)});break}return""})}}var Fy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},$i=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",Q0="active",Z0="data-styled-version",Js="6.1.19",zd=`/*!sc*/
`,Ls=typeof window<"u"&&typeof document<"u",Wy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),ev={},Is=Object.freeze([]),Vi=Object.freeze({});function X0(a,s,u){return u===void 0&&(u=Vi),a.theme!==u.theme&&a.theme||s||u.theme}var J0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nv=/(^-|-$)/g;function Xg(a){return a.replace(tv,"-").replace(nv,"")}var av=/(a)(d)/gi,vs=52,Jg=function(a){return String.fromCharCode(a+(a>25?39:97))};function dd(a){var s,u="";for(s=Math.abs(a);s>vs;s=s/vs|0)u=Jg(s%vs)+u;return(Jg(s%vs)+u).replace(av,"$1-$2")}var wu,I0=5381,Oi=function(a,s){for(var u=s.length;u;)a=33*a^s.charCodeAt(--u);return a},F0=function(a){return Oi(I0,a)};function Td(a){return dd(F0(a)>>>0)}function iv(a){return a.displayName||a.name||"Component"}function Eu(a){return typeof a=="string"&&!0}var W0=typeof Symbol=="function"&&Symbol.for,ep=W0?Symbol.for("react.memo"):60115,rv=W0?Symbol.for("react.forward_ref"):60112,lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ov=((wu={})[rv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wu[ep]=tp,wu);function Ig(a){return("type"in(s=a)&&s.type.$$typeof)===ep?tp:"$$typeof"in a?ov[a.$$typeof]:lv;var s}var cv=Object.defineProperty,uv=Object.getOwnPropertyNames,Fg=Object.getOwnPropertySymbols,dv=Object.getOwnPropertyDescriptor,fv=Object.getPrototypeOf,Wg=Object.prototype;function np(a,s,u){if(typeof s!="string"){if(Wg){var c=fv(s);c&&c!==Wg&&np(a,c,u)}var d=uv(s);Fg&&(d=d.concat(Fg(s)));for(var f=Ig(a),b=Ig(s),v=0;v<d.length;++v){var h=d[v];if(!(h in sv||u&&u[h]||b&&h in b||f&&h in f)){var m=dv(s,h);try{cv(a,h,m)}catch{}}}}return a}function Ga(a){return typeof a=="function"}function Cd(a){return typeof a=="object"&&"styledComponentId"in a}function Ua(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function Us(a,s){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function tl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function fd(a,s,u){if(u===void 0&&(u=!1),!u&&!tl(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var c=0;c<s.length;c++)a[c]=fd(a[c],s[c]);else if(tl(s))for(var c in s)a[c]=fd(a[c],s[c]);return a}function Ad(a,s){Object.defineProperty(a,"toString",{value:s})}function $a(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var hv=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return a.prototype.indexOfGroup=function(s){for(var u=0,c=0;c<s;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(s,u){if(s>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,f=d;s>=f;)if((f<<=1)<0)throw $a(16,"".concat(s));this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(var b=d;b<f;b++)this.groupSizes[b]=0}for(var v=this.indexOfGroup(s+1),h=(b=0,u.length);b<h;b++)this.tag.insertRule(v,u[b])&&(this.groupSizes[s]++,v++)},a.prototype.clearGroup=function(s){if(s<this.length){var u=this.groupSizes[s],c=this.indexOfGroup(s),d=c+u;this.groupSizes[s]=0;for(var f=c;f<d;f++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(s){var u="";if(s>=this.length||this.groupSizes[s]===0)return u;for(var c=this.groupSizes[s],d=this.indexOfGroup(s),f=d+c,b=d;b<f;b++)u+="".concat(this.tag.getRule(b)).concat(zd);return u},a}(),Rs=new Map,Hs=new Map,Ms=1,Ss=function(a){if(Rs.has(a))return Rs.get(a);for(;Hs.has(Ms);)Ms++;var s=Ms++;return Rs.set(a,s),Hs.set(s,a),s},mv=function(a,s){Ms=s+1,Rs.set(a,s),Hs.set(s,a)},gv="style[".concat($i,"][").concat(Z0,'="').concat(Js,'"]'),pv=new RegExp("^".concat($i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bv=function(a,s,u){for(var c,d=u.split(","),f=0,b=d.length;f<b;f++)(c=d[f])&&a.registerName(s,c)},xv=function(a,s){for(var u,c=((u=s.textContent)!==null&&u!==void 0?u:"").split(zd),d=[],f=0,b=c.length;f<b;f++){var v=c[f].trim();if(v){var h=v.match(pv);if(h){var m=0|parseInt(h[1],10),y=h[2];m!==0&&(mv(y,m),bv(a,y,h[3]),a.getTag().insertRules(m,d)),d.length=0}else d.push(v)}}},e0=function(a){for(var s=document.querySelectorAll(gv),u=0,c=s.length;u<c;u++){var d=s[u];d&&d.getAttribute($i)!==Q0&&(xv(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function yv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ap=function(a){var s=document.head,u=a||s,c=document.createElement("style"),d=function(v){var h=Array.from(v.querySelectorAll("style[".concat($i,"]")));return h[h.length-1]}(u),f=d!==void 0?d.nextSibling:null;c.setAttribute($i,Q0),c.setAttribute(Z0,Js);var b=yv();return b&&c.setAttribute("nonce",b),u.insertBefore(c,f),c},vv=function(){function a(s){this.element=ap(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,d=0,f=c.length;d<f;d++){var b=c[d];if(b.ownerNode===u)return b}throw $a(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,u){try{return this.sheet.insertRule(u,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var u=this.sheet.cssRules[s];return u&&u.cssText?u.cssText:""},a}(),Sv=function(){function a(s){this.element=ap(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,u){if(s<=this.length&&s>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),jv=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,u){return s<=this.length&&(this.rules.splice(s,0,u),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),t0=Ls,wv={isServer:!Ls,useCSSOMInjection:!Wy},Gs=function(){function a(s,u,c){s===void 0&&(s=Vi),u===void 0&&(u={});var d=this;this.options=at(at({},wv),s),this.gs=u,this.names=new Map(c),this.server=!!s.isServer,!this.server&&Ls&&t0&&(t0=!1,e0(this)),Ad(this,function(){return function(f){for(var b=f.getTag(),v=b.length,h="",m=function(S){var w=function(O){return Hs.get(O)}(S);if(w===void 0)return"continue";var M=f.names.get(w),A=b.getGroup(S);if(M===void 0||!M.size||A.length===0)return"continue";var N="".concat($i,".g").concat(S,'[id="').concat(w,'"]'),G="";M!==void 0&&M.forEach(function(O){O.length>0&&(G+="".concat(O,","))}),h+="".concat(A).concat(N,'{content:"').concat(G,'"}').concat(zd)},y=0;y<v;y++)m(y);return h}(d)})}return a.registerId=function(s){return Ss(s)},a.prototype.rehydrate=function(){!this.server&&Ls&&e0(this)},a.prototype.reconstructWithOptions=function(s,u){return u===void 0&&(u=!0),new a(at(at({},this.options),s),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(u){var c=u.useCSSOMInjection,d=u.target;return u.isServer?new jv(d):c?new vv(d):new Sv(d)}(this.options),new hv(s)));var s},a.prototype.hasNameForId=function(s,u){return this.names.has(s)&&this.names.get(s).has(u)},a.prototype.registerName=function(s,u){if(Ss(s),this.names.has(s))this.names.get(s).add(u);else{var c=new Set;c.add(u),this.names.set(s,c)}},a.prototype.insertRules=function(s,u,c){this.registerName(s,u),this.getTag().insertRules(Ss(s),c)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(Ss(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),Ev=/&/g,_v=/^\s*\/\/.*$/gm;function ip(a,s){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(s," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(s," ")),u.props=u.props.map(function(c){return"".concat(s," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=ip(u.children,s)),u})}function zv(a){var s,u,c,d=Vi,f=d.options,b=f===void 0?Vi:f,v=d.plugins,h=v===void 0?Is:v,m=function(w,M,A){return A.startsWith(u)&&A.endsWith(u)&&A.replaceAll(u,"").length>0?".".concat(s):w},y=h.slice();y.push(function(w){w.type===Ps&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Ev,u).replace(c,m))}),b.prefix&&y.push(Iy),y.push(Zy);var S=function(w,M,A,N){M===void 0&&(M=""),A===void 0&&(A=""),N===void 0&&(N="&"),s=N,u=M,c=new RegExp("\\".concat(u,"\\b"),"g");var G=w.replace(_v,""),O=Py(A||M?"".concat(A," ").concat(M," { ").concat(G," }"):G);b.namespace&&(O=ip(O,b.namespace));var P=[];return Ns(O,Xy(y.concat(Jy(function(k){return P.push(k)})))),P};return S.hash=h.length?h.reduce(function(w,M){return M.name||$a(15),Oi(w,M.name)},I0).toString():"",S}var Tv=new Gs,hd=zv(),rp=Ee.createContext({shouldForwardProp:void 0,styleSheet:Tv,stylis:hd});rp.Consumer;Ee.createContext(void 0);function md(){return T.useContext(rp)}var lp=function(){function a(s,u){var c=this;this.inject=function(d,f){f===void 0&&(f=hd);var b=c.name+f.hash;d.hasNameForId(c.id,b)||d.insertRules(c.id,b,f(c.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=u,Ad(this,function(){throw $a(12,String(c.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=hd),this.name+s.hash},a}(),Cv=function(a){return a>="A"&&a<="Z"};function n0(a){for(var s="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;Cv(c)?s+="-"+c.toLowerCase():s+=c}return s.startsWith("ms-")?"-"+s:s}var sp=function(a){return a==null||a===!1||a===""},op=function(a){var s,u,c=[];for(var d in a){var f=a[d];a.hasOwnProperty(d)&&!sp(f)&&(Array.isArray(f)&&f.isCss||Ga(f)?c.push("".concat(n0(d),":"),f,";"):tl(f)?c.push.apply(c,Ui(Ui(["".concat(d," {")],op(f),!1),["}"],!1)):c.push("".concat(n0(d),": ").concat((s=d,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||s in Fy||s.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function da(a,s,u,c){if(sp(a))return[];if(Cd(a))return[".".concat(a.styledComponentId)];if(Ga(a)){if(!Ga(f=a)||f.prototype&&f.prototype.isReactComponent||!s)return[a];var d=a(s);return da(d,s,u,c)}var f;return a instanceof lp?u?(a.inject(u,c),[a.getName(c)]):[a]:tl(a)?op(a):Array.isArray(a)?Array.prototype.concat.apply(Is,a.map(function(b){return da(b,s,u,c)})):[a.toString()]}function cp(a){for(var s=0;s<a.length;s+=1){var u=a[s];if(Ga(u)&&!Cd(u))return!1}return!0}var Av=F0(Js),kv=function(){function a(s,u,c){this.rules=s,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&cp(s),this.componentId=u,this.baseHash=Oi(Av,u),this.baseStyle=c,Gs.registerId(u)}return a.prototype.generateAndInjectStyles=function(s,u,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))d=Ua(d,this.staticRulesId);else{var f=Us(da(this.rules,s,u,c)),b=dd(Oi(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,b)){var v=c(f,".".concat(b),void 0,this.componentId);u.insertRules(this.componentId,b,v)}d=Ua(d,b),this.staticRulesId=b}else{for(var h=Oi(this.baseHash,c.hash),m="",y=0;y<this.rules.length;y++){var S=this.rules[y];if(typeof S=="string")m+=S;else if(S){var w=Us(da(S,s,u,c));h=Oi(h,w+y),m+=w}}if(m){var M=dd(h>>>0);u.hasNameForId(this.componentId,M)||u.insertRules(this.componentId,M,c(m,".".concat(M),void 0,this.componentId)),d=Ua(d,M)}}return d},a}(),nl=Ee.createContext(void 0);nl.Consumer;function Rv(a){var s=Ee.useContext(nl),u=T.useMemo(function(){return function(c,d){if(!c)throw $a(14);if(Ga(c)){var f=c(d);return f}if(Array.isArray(c)||typeof c!="object")throw $a(8);return d?at(at({},d),c):c}(a.theme,s)},[a.theme,s]);return a.children?Ee.createElement(nl.Provider,{value:u},a.children):null}var _u={};function Mv(a,s,u){var c=Cd(a),d=a,f=!Eu(a),b=s.attrs,v=b===void 0?Is:b,h=s.componentId,m=h===void 0?function(K,U){var I=typeof K!="string"?"sc":Xg(K);_u[I]=(_u[I]||0)+1;var $="".concat(I,"-").concat(Td(Js+I+_u[I]));return U?"".concat(U,"-").concat($):$}(s.displayName,s.parentComponentId):h,y=s.displayName,S=y===void 0?function(K){return Eu(K)?"styled.".concat(K):"Styled(".concat(iv(K),")")}(a):y,w=s.displayName&&s.componentId?"".concat(Xg(s.displayName),"-").concat(s.componentId):s.componentId||m,M=c&&d.attrs?d.attrs.concat(v).filter(Boolean):v,A=s.shouldForwardProp;if(c&&d.shouldForwardProp){var N=d.shouldForwardProp;if(s.shouldForwardProp){var G=s.shouldForwardProp;A=function(K,U){return N(K,U)&&G(K,U)}}else A=N}var O=new kv(u,w,c?d.componentStyle:void 0);function P(K,U){return function(I,$,he){var oe=I.attrs,Me=I.componentStyle,Z=I.defaultProps,xe=I.foldedComponentIds,st=I.styledComponentId,qe=I.target,Te=Ee.useContext(nl),L=md(),Q=I.shouldForwardProp||L.shouldForwardProp,ne=X0($,Te,Z)||Vi,ce=function(me,ie,Je){for(var je,ot=at(at({},ie),{className:void 0,theme:Je}),ma=0;ma<me.length;ma+=1){var bn=Ga(je=me[ma])?je(ot):je;for(var Ut in bn)ot[Ut]=Ut==="className"?Ua(ot[Ut],bn[Ut]):Ut==="style"?at(at({},ot[Ut]),bn[Ut]):bn[Ut]}return ie.className&&(ot.className=Ua(ot.className,ie.className)),ot}(oe,$,ne),E=ce.as||qe,q={};for(var X in ce)ce[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ce.theme===ne||(X==="forwardedAs"?q.as=ce.forwardedAs:Q&&!Q(X,E)||(q[X]=ce[X]));var J=function(me,ie){var Je=md(),je=me.generateAndInjectStyles(ie,Je.styleSheet,Je.stylis);return je}(Me,ce),ee=Ua(xe,st);return J&&(ee+=" "+J),ce.className&&(ee+=" "+ce.className),q[Eu(E)&&!J0.has(E)?"class":"className"]=ee,he&&(q.ref=he),T.createElement(E,q)}(k,K,U)}P.displayName=S;var k=Ee.forwardRef(P);return k.attrs=M,k.componentStyle=O,k.displayName=S,k.shouldForwardProp=A,k.foldedComponentIds=c?Ua(d.foldedComponentIds,d.styledComponentId):"",k.styledComponentId=w,k.target=c?d.target:a,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=c?function(U){for(var I=[],$=1;$<arguments.length;$++)I[$-1]=arguments[$];for(var he=0,oe=I;he<oe.length;he++)fd(U,oe[he],!0);return U}({},d.defaultProps,K):K}}),Ad(k,function(){return".".concat(k.styledComponentId)}),f&&np(k,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function a0(a,s){for(var u=[a[0]],c=0,d=s.length;c<d;c+=1)u.push(s[c],a[c+1]);return u}var i0=function(a){return Object.assign(a,{isCss:!0})};function Yi(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];if(Ga(a)||tl(a))return i0(da(a0(Is,Ui([a],s,!0))));var c=a;return s.length===0&&c.length===1&&typeof c[0]=="string"?da(c):i0(da(a0(c,s)))}function gd(a,s,u){if(u===void 0&&(u=Vi),!s)throw $a(1,s);var c=function(d){for(var f=[],b=1;b<arguments.length;b++)f[b-1]=arguments[b];return a(s,u,Yi.apply(void 0,Ui([d],f,!1)))};return c.attrs=function(d){return gd(a,s,at(at({},u),{attrs:Array.prototype.concat(u.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return gd(a,s,at(at({},u),d))},c}var up=function(a){return gd(Mv,a)},p=up;J0.forEach(function(a){p[a]=up(a)});var Dv=function(){function a(s,u){this.rules=s,this.componentId=u,this.isStatic=cp(s),Gs.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,u,c,d){var f=d(Us(da(this.rules,u,c,d)),""),b=this.componentId+s;c.insertRules(b,b,f)},a.prototype.removeStyles=function(s,u){u.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,u,c,d){s>2&&Gs.registerId(this.componentId+s),this.removeStyles(s,c),this.createStyles(s,u,c,d)},a}();function Bv(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Yi.apply(void 0,Ui([a],s,!1)),d="sc-global-".concat(Td(JSON.stringify(c))),f=new Dv(c,d),b=function(h){var m=md(),y=Ee.useContext(nl),S=Ee.useRef(m.styleSheet.allocateGSInstance(d)).current;return m.styleSheet.server&&v(S,h,m.styleSheet,y,m.stylis),Ee.useLayoutEffect(function(){if(!m.styleSheet.server)return v(S,h,m.styleSheet,y,m.stylis),function(){return f.removeStyles(S,m.styleSheet)}},[S,h,m.styleSheet,y,m.stylis]),null};function v(h,m,y,S,w){if(f.isStatic)f.renderStyles(h,ev,y,w);else{var M=at(at({},m),{theme:X0(m,S,b.defaultProps)});f.renderStyles(h,M,y,w)}}return Ee.memo(b)}function kd(a){for(var s=[],u=1;u<arguments.length;u++)s[u-1]=arguments[u];var c=Us(Yi.apply(void 0,Ui([a],s,!1))),d=Td(c);return new lp(d,c)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var r0="popstate";function Ov(a={}){function s(c,d){let{pathname:f,search:b,hash:v}=c.location;return pd("",{pathname:f,search:b,hash:v},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:al(d)}return Lv(s,u,null,a)}function Le(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function Xt(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Nv(){return Math.random().toString(36).substring(2,10)}function l0(a,s){return{usr:a.state,key:a.key,idx:s}}function pd(a,s,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?Ki(s):s,state:u,key:s&&s.key||c||Nv()}}function al({pathname:a="/",search:s="",hash:u=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Ki(a){let s={};if(a){let u=a.indexOf("#");u>=0&&(s.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(s.search=a.substring(c),a=a.substring(0,c)),a&&(s.pathname=a)}return s}function Lv(a,s,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,b=d.history,v="POP",h=null,m=y();m==null&&(m=0,b.replaceState({...b.state,idx:m},""));function y(){return(b.state||{idx:null}).idx}function S(){v="POP";let G=y(),O=G==null?null:G-m;m=G,h&&h({action:v,location:N.location,delta:O})}function w(G,O){v="PUSH";let P=pd(N.location,G,O);m=y()+1;let k=l0(P,m),K=N.createHref(P);try{b.pushState(k,"",K)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;d.location.assign(K)}f&&h&&h({action:v,location:N.location,delta:1})}function M(G,O){v="REPLACE";let P=pd(N.location,G,O);m=y();let k=l0(P,m),K=N.createHref(P);b.replaceState(k,"",K),f&&h&&h({action:v,location:N.location,delta:0})}function A(G){return Uv(G)}let N={get action(){return v},get location(){return a(d,b)},listen(G){if(h)throw new Error("A history only accepts one active listener");return d.addEventListener(r0,S),h=G,()=>{d.removeEventListener(r0,S),h=null}},createHref(G){return s(d,G)},createURL:A,encodeLocation(G){let O=A(G);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:w,replace:M,go(G){return b.go(G)}};return N}function Uv(a,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Le(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:al(a);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function dp(a,s,u="/"){return Hv(a,s,u,!1)}function Hv(a,s,u,c){let d=typeof s=="string"?Ki(s):s,f=Un(d.pathname||"/",u);if(f==null)return null;let b=fp(a);Gv(b);let v=null;for(let h=0;v==null&&h<b.length;++h){let m=Iv(f);v=Xv(b[h],m,c)}return v}function fp(a,s=[],u=[],c=""){let d=(f,b,v)=>{let h={relativePath:v===void 0?f.path||"":v,caseSensitive:f.caseSensitive===!0,childrenIndex:b,route:f};h.relativePath.startsWith("/")&&(Le(h.relativePath.startsWith(c),`Absolute route path "${h.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(c.length));let m=Nn([c,h.relativePath]),y=u.concat(h);f.children&&f.children.length>0&&(Le(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),fp(f.children,s,y,m)),!(f.path==null&&!f.index)&&s.push({path:m,score:Qv(m,f.index),routesMeta:y})};return a.forEach((f,b)=>{if(f.path===""||!f.path?.includes("?"))d(f,b);else for(let v of hp(f.path))d(f,b,v)}),s}function hp(a){let s=a.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let b=hp(c.join("/")),v=[];return v.push(...b.map(h=>h===""?f:[f,h].join("/"))),d&&v.push(...b),v.map(h=>a.startsWith("/")&&h===""?"/":h)}function Gv(a){a.sort((s,u)=>s.score!==u.score?u.score-s.score:Zv(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var $v=/^:[\w-]+$/,Vv=3,Yv=2,qv=1,Kv=10,Pv=-2,s0=a=>a==="*";function Qv(a,s){let u=a.split("/"),c=u.length;return u.some(s0)&&(c+=Pv),s&&(c+=Yv),u.filter(d=>!s0(d)).reduce((d,f)=>d+($v.test(f)?Vv:f===""?qv:Kv),c)}function Zv(a,s){return a.length===s.length&&a.slice(0,-1).every((c,d)=>c===s[d])?a[a.length-1]-s[s.length-1]:0}function Xv(a,s,u=!1){let{routesMeta:c}=a,d={},f="/",b=[];for(let v=0;v<c.length;++v){let h=c[v],m=v===c.length-1,y=f==="/"?s:s.slice(f.length)||"/",S=$s({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y),w=h.route;if(!S&&m&&u&&!c[c.length-1].route.index&&(S=$s({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!S)return null;Object.assign(d,S.params),b.push({params:d,pathname:Nn([f,S.pathname]),pathnameBase:tS(Nn([f,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(f=Nn([f,S.pathnameBase]))}return b}function $s(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=Jv(a.path,a.caseSensitive,a.end),d=s.match(u);if(!d)return null;let f=d[0],b=f.replace(/(.)\/+$/,"$1"),v=d.slice(1);return{params:c.reduce((m,{paramName:y,isOptional:S},w)=>{if(y==="*"){let A=v[w]||"";b=f.slice(0,f.length-A.length).replace(/(.)\/+$/,"$1")}const M=v[w];return S&&!M?m[y]=void 0:m[y]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:b,pattern:a}}function Jv(a,s=!1,u=!0){Xt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,v,h)=>(c.push({paramName:v,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function Iv(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Xt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Un(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function Fv(a,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof a=="string"?Ki(a):a;return{pathname:u?u.startsWith("/")?u:Wv(u,s):s,search:nS(c),hash:aS(d)}}function Wv(a,s){let u=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function zu(a,s,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eS(a){return a.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Rd(a){let s=eS(a);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Md(a,s,u,c=!1){let d;typeof a=="string"?d=Ki(a):(d={...a},Le(!d.pathname||!d.pathname.includes("?"),zu("?","pathname","search",d)),Le(!d.pathname||!d.pathname.includes("#"),zu("#","pathname","hash",d)),Le(!d.search||!d.search.includes("#"),zu("#","search","hash",d)));let f=a===""||d.pathname==="",b=f?"/":d.pathname,v;if(b==null)v=u;else{let S=s.length-1;if(!c&&b.startsWith("..")){let w=b.split("/");for(;w[0]==="..";)w.shift(),S-=1;d.pathname=w.join("/")}v=S>=0?s[S]:"/"}let h=Fv(d,v),m=b&&b!=="/"&&b.endsWith("/"),y=(f||b===".")&&u.endsWith("/");return!h.pathname.endsWith("/")&&(m||y)&&(h.pathname+="/"),h}var Nn=a=>a.join("/").replace(/\/\/+/g,"/"),tS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),nS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,aS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function iS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var mp=["POST","PUT","PATCH","DELETE"];new Set(mp);var rS=["GET",...mp];new Set(rS);var Pi=T.createContext(null);Pi.displayName="DataRouter";var Fs=T.createContext(null);Fs.displayName="DataRouterState";T.createContext(!1);var gp=T.createContext({isTransitioning:!1});gp.displayName="ViewTransition";var lS=T.createContext(new Map);lS.displayName="Fetchers";var sS=T.createContext(null);sS.displayName="Await";var sn=T.createContext(null);sn.displayName="Navigation";var il=T.createContext(null);il.displayName="Location";var pn=T.createContext({outlet:null,matches:[],isDataRoute:!1});pn.displayName="Route";var Dd=T.createContext(null);Dd.displayName="RouteError";function oS(a,{relative:s}={}){Le(Qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=T.useContext(sn),{hash:d,pathname:f,search:b}=rl(a,{relative:s}),v=f;return u!=="/"&&(v=f==="/"?u:Nn([u,f])),c.createHref({pathname:v,search:b,hash:d})}function Qi(){return T.useContext(il)!=null}function Jt(){return Le(Qi(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(il).location}var pp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bp(a){T.useContext(sn).static||T.useLayoutEffect(a)}function Bd(){let{isDataRoute:a}=T.useContext(pn);return a?SS():cS()}function cS(){Le(Qi(),"useNavigate() may be used only in the context of a <Router> component.");let a=T.useContext(Pi),{basename:s,navigator:u}=T.useContext(sn),{matches:c}=T.useContext(pn),{pathname:d}=Jt(),f=JSON.stringify(Rd(c)),b=T.useRef(!1);return bp(()=>{b.current=!0}),T.useCallback((h,m={})=>{if(Xt(b.current,pp),!b.current)return;if(typeof h=="number"){u.go(h);return}let y=Md(h,JSON.parse(f),d,m.relative==="path");a==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:Nn([s,y.pathname])),(m.replace?u.replace:u.push)(y,m.state,m)},[s,u,f,d,a])}T.createContext(null);function rl(a,{relative:s}={}){let{matches:u}=T.useContext(pn),{pathname:c}=Jt(),d=JSON.stringify(Rd(u));return T.useMemo(()=>Md(a,JSON.parse(d),c,s==="path"),[a,d,c,s])}function uS(a,s){return xp(a,s)}function xp(a,s,u,c){Le(Qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=T.useContext(sn),{matches:f}=T.useContext(pn),b=f[f.length-1],v=b?b.params:{},h=b?b.pathname:"/",m=b?b.pathnameBase:"/",y=b&&b.route;{let O=y&&y.path||"";yp(h,!y||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let S=Jt(),w;if(s){let O=typeof s=="string"?Ki(s):s;Le(m==="/"||O.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${O.pathname}" was given in the \`location\` prop.`),w=O}else w=S;let M=w.pathname||"/",A=M;if(m!=="/"){let O=m.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(O.length).join("/")}let N=dp(a,{pathname:A});Xt(y||N!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Xt(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=gS(N&&N.map(O=>Object.assign({},O,{params:Object.assign({},v,O.params),pathname:Nn([m,d.encodeLocation?d.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?m:Nn([m,d.encodeLocation?d.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),f,u,c);return s&&G?T.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},G):G}function dS(){let a=vS(),s=iS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",a),b=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:f},"ErrorBoundary")," or"," ",T.createElement("code",{style:f},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},s),u?T.createElement("pre",{style:d},u):null,b)}var fS=T.createElement(dS,null),hS=class extends T.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?T.createElement(pn.Provider,{value:this.props.routeContext},T.createElement(Dd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mS({routeContext:a,match:s,children:u}){let c=T.useContext(Pi);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),T.createElement(pn.Provider,{value:a},u)}function gS(a,s=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let d=a,f=u?.errors;if(f!=null){let h=d.findIndex(m=>m.route.id&&f?.[m.route.id]!==void 0);Le(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,h+1))}let b=!1,v=-1;if(u)for(let h=0;h<d.length;h++){let m=d[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(v=h),m.route.id){let{loaderData:y,errors:S}=u,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!S||S[m.route.id]===void 0);if(m.route.lazy||w){b=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}return d.reduceRight((h,m,y)=>{let S,w=!1,M=null,A=null;u&&(S=f&&m.route.id?f[m.route.id]:void 0,M=m.route.errorElement||fS,b&&(v<0&&y===0?(yp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):v===y&&(w=!0,A=m.route.hydrateFallbackElement||null)));let N=s.concat(d.slice(0,y+1)),G=()=>{let O;return S?O=M:w?O=A:m.route.Component?O=T.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=h,T.createElement(mS,{match:m,routeContext:{outlet:h,matches:N,isDataRoute:u!=null},children:O})};return u&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?T.createElement(hS,{location:u.location,revalidation:u.revalidation,component:M,error:S,children:G(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):G()},null)}function Od(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pS(a){let s=T.useContext(Pi);return Le(s,Od(a)),s}function bS(a){let s=T.useContext(Fs);return Le(s,Od(a)),s}function xS(a){let s=T.useContext(pn);return Le(s,Od(a)),s}function Nd(a){let s=xS(a),u=s.matches[s.matches.length-1];return Le(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function yS(){return Nd("useRouteId")}function vS(){let a=T.useContext(Dd),s=bS("useRouteError"),u=Nd("useRouteError");return a!==void 0?a:s.errors?.[u]}function SS(){let{router:a}=pS("useNavigate"),s=Nd("useNavigate"),u=T.useRef(!1);return bp(()=>{u.current=!0}),T.useCallback(async(d,f={})=>{Xt(u.current,pp),u.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:s,...f}))},[a,s])}var o0={};function yp(a,s,u){!s&&!o0[a]&&(o0[a]=!0,Xt(!1,u))}T.memo(jS);function jS({routes:a,future:s,state:u}){return xp(a,void 0,u,s)}function bd({to:a,replace:s,state:u,relative:c}){Le(Qi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=T.useContext(sn);Xt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=T.useContext(pn),{pathname:b}=Jt(),v=Bd(),h=Md(a,Rd(f),b,c==="path"),m=JSON.stringify(h);return T.useEffect(()=>{v(JSON.parse(m),{replace:s,state:u,relative:c})},[v,m,c,s,u]),null}function Bn(a){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wS({basename:a="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){Le(!Qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=a.replace(/^\/*/,"/"),v=T.useMemo(()=>({basename:b,navigator:d,static:f,future:{}}),[b,d,f]);typeof u=="string"&&(u=Ki(u));let{pathname:h="/",search:m="",hash:y="",state:S=null,key:w="default"}=u,M=T.useMemo(()=>{let A=Un(h,b);return A==null?null:{location:{pathname:A,search:m,hash:y,state:S,key:w},navigationType:c}},[b,h,m,y,S,w,c]);return Xt(M!=null,`<Router basename="${b}"> is not able to match the URL "${h}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:T.createElement(sn.Provider,{value:v},T.createElement(il.Provider,{children:s,value:M}))}function ES({children:a,location:s}){return uS(xd(a),s)}function xd(a,s=[]){let u=[];return T.Children.forEach(a,(c,d)=>{if(!T.isValidElement(c))return;let f=[...s,d];if(c.type===T.Fragment){u.push.apply(u,xd(c.props.children,f));return}Le(c.type===Bn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=xd(c.props.children,f)),u.push(b)}),u}var Ds="get",Bs="application/x-www-form-urlencoded";function Ws(a){return a!=null&&typeof a.tagName=="string"}function _S(a){return Ws(a)&&a.tagName.toLowerCase()==="button"}function zS(a){return Ws(a)&&a.tagName.toLowerCase()==="form"}function TS(a){return Ws(a)&&a.tagName.toLowerCase()==="input"}function CS(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function AS(a,s){return a.button===0&&(!s||s==="_self")&&!CS(a)}function yd(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((s,u)=>{let c=a[u];return s.concat(Array.isArray(c)?c.map(d=>[u,d]):[[u,c]])},[]))}function kS(a,s){let u=yd(a);return s&&s.forEach((c,d)=>{u.has(d)||s.getAll(d).forEach(f=>{u.append(d,f)})}),u}var js=null;function RS(){if(js===null)try{new FormData(document.createElement("form"),0),js=!1}catch{js=!0}return js}var MS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tu(a){return a!=null&&!MS.has(a)?(Xt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bs}"`),null):a}function DS(a,s){let u,c,d,f,b;if(zS(a)){let v=a.getAttribute("action");c=v?Un(v,s):null,u=a.getAttribute("method")||Ds,d=Tu(a.getAttribute("enctype"))||Bs,f=new FormData(a)}else if(_S(a)||TS(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=a.getAttribute("formaction")||v.getAttribute("action");if(c=h?Un(h,s):null,u=a.getAttribute("formmethod")||v.getAttribute("method")||Ds,d=Tu(a.getAttribute("formenctype"))||Tu(v.getAttribute("enctype"))||Bs,f=new FormData(v,a),!RS()){let{name:m,type:y,value:S}=a;if(y==="image"){let w=m?`${m}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else m&&f.append(m,S)}}else{if(Ws(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Ds,c=null,d=Bs,b=a}return f&&d==="text/plain"&&(b=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ld(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function BS(a,s,u){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname=`_root.${u}`:s&&Un(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function OS(a,s){if(a.id in s)return s[a.id];try{let u=await import(a.module);return s[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NS(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function LS(a,s,u){let c=await Promise.all(a.map(async d=>{let f=s.routes[d.route.id];if(f){let b=await OS(f,u);return b.links?b.links():[]}return[]}));return $S(c.flat(1).filter(NS).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function c0(a,s,u,c,d,f){let b=(h,m)=>u[m]?h.route.id!==u[m].route.id:!0,v=(h,m)=>u[m].pathname!==h.pathname||u[m].route.path?.endsWith("*")&&u[m].params["*"]!==h.params["*"];return f==="assets"?s.filter((h,m)=>b(h,m)||v(h,m)):f==="data"?s.filter((h,m)=>{let y=c.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(b(h,m)||v(h,m))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function US(a,s,{includeHydrateFallback:u}={}){return HS(a.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function HS(a){return[...new Set(a)]}function GS(a){let s={},u=Object.keys(a).sort();for(let c of u)s[c]=a[c];return s}function $S(a,s){let u=new Set;return new Set(s),a.reduce((c,d)=>{let f=JSON.stringify(GS(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}function vp(){let a=T.useContext(Pi);return Ld(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function VS(){let a=T.useContext(Fs);return Ld(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Ud=T.createContext(void 0);Ud.displayName="FrameworkContext";function Sp(){let a=T.useContext(Ud);return Ld(a,"You must render this element inside a <HydratedRouter> element"),a}function YS(a,s){let u=T.useContext(Ud),[c,d]=T.useState(!1),[f,b]=T.useState(!1),{onFocus:v,onBlur:h,onMouseEnter:m,onMouseLeave:y,onTouchStart:S}=s,w=T.useRef(null);T.useEffect(()=>{if(a==="render"&&b(!0),a==="viewport"){let N=O=>{O.forEach(P=>{b(P.isIntersecting)})},G=new IntersectionObserver(N,{threshold:.5});return w.current&&G.observe(w.current),()=>{G.disconnect()}}},[a]),T.useEffect(()=>{if(c){let N=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(N)}}},[c]);let M=()=>{d(!0)},A=()=>{d(!1),b(!1)};return u?a!=="intent"?[f,w,{}]:[f,w,{onFocus:Xr(v,M),onBlur:Xr(h,A),onMouseEnter:Xr(m,M),onMouseLeave:Xr(y,A),onTouchStart:Xr(S,M)}]:[!1,w,{}]}function Xr(a,s){return u=>{a&&a(u),u.defaultPrevented||s(u)}}function qS({page:a,...s}){let{router:u}=vp(),c=T.useMemo(()=>dp(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?T.createElement(PS,{page:a,matches:c,...s}):null}function KS(a){let{manifest:s,routeModules:u}=Sp(),[c,d]=T.useState([]);return T.useEffect(()=>{let f=!1;return LS(a,s,u).then(b=>{f||d(b)}),()=>{f=!0}},[a,s,u]),c}function PS({page:a,matches:s,...u}){let c=Jt(),{manifest:d,routeModules:f}=Sp(),{basename:b}=vp(),{loaderData:v,matches:h}=VS(),m=T.useMemo(()=>c0(a,s,h,d,c,"data"),[a,s,h,d,c]),y=T.useMemo(()=>c0(a,s,h,d,c,"assets"),[a,s,h,d,c]),S=T.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let A=new Set,N=!1;if(s.forEach(O=>{let P=d.routes[O.route.id];!P||!P.hasLoader||(!m.some(k=>k.route.id===O.route.id)&&O.route.id in v&&f[O.route.id]?.shouldRevalidate||P.hasClientLoader?N=!0:A.add(O.route.id))}),A.size===0)return[];let G=BS(a,b,"data");return N&&A.size>0&&G.searchParams.set("_routes",s.filter(O=>A.has(O.route.id)).map(O=>O.route.id).join(",")),[G.pathname+G.search]},[b,v,c,d,m,s,a,f]),w=T.useMemo(()=>US(y,d),[y,d]),M=KS(y);return T.createElement(T.Fragment,null,S.map(A=>T.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...u})),w.map(A=>T.createElement("link",{key:A,rel:"modulepreload",href:A,...u})),M.map(({key:A,link:N})=>T.createElement("link",{key:A,...N})))}function QS(...a){return s=>{a.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var jp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jp&&(window.__reactRouterVersion="7.7.1")}catch{}function ZS({basename:a,children:s,window:u}){let c=T.useRef();c.current==null&&(c.current=Ov({window:u,v5Compat:!0}));let d=c.current,[f,b]=T.useState({action:d.action,location:d.location}),v=T.useCallback(h=>{T.startTransition(()=>b(h))},[b]);return T.useLayoutEffect(()=>d.listen(v),[d,v]),T.createElement(wS,{basename:a,children:s,location:f.location,navigationType:f.action,navigator:d})}var wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zi=T.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:b,state:v,target:h,to:m,preventScrollReset:y,viewTransition:S,...w},M){let{basename:A}=T.useContext(sn),N=typeof m=="string"&&wp.test(m),G,O=!1;if(typeof m=="string"&&N&&(G=m,jp))try{let oe=new URL(window.location.href),Me=m.startsWith("//")?new URL(oe.protocol+m):new URL(m),Z=Un(Me.pathname,A);Me.origin===oe.origin&&Z!=null?m=Z+Me.search+Me.hash:O=!0}catch{Xt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=oS(m,{relative:d}),[k,K,U]=YS(c,w),I=FS(m,{replace:b,state:v,target:h,preventScrollReset:y,relative:d,viewTransition:S});function $(oe){s&&s(oe),oe.defaultPrevented||I(oe)}let he=T.createElement("a",{...w,...U,href:G||P,onClick:O||f?s:$,ref:QS(M,K),target:h,"data-discover":!N&&u==="render"?"true":void 0});return k&&!N?T.createElement(T.Fragment,null,he,T.createElement(qS,{page:P})):he});Zi.displayName="Link";var XS=T.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:b,viewTransition:v,children:h,...m},y){let S=rl(b,{relative:m.relative}),w=Jt(),M=T.useContext(Fs),{navigator:A,basename:N}=T.useContext(sn),G=M!=null&&a2(S)&&v===!0,O=A.encodeLocation?A.encodeLocation(S).pathname:S.pathname,P=w.pathname,k=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;u||(P=P.toLowerCase(),k=k?k.toLowerCase():null,O=O.toLowerCase()),k&&N&&(k=Un(k,N)||k);const K=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let U=P===O||!d&&P.startsWith(O)&&P.charAt(K)==="/",I=k!=null&&(k===O||!d&&k.startsWith(O)&&k.charAt(O.length)==="/"),$={isActive:U,isPending:I,isTransitioning:G},he=U?s:void 0,oe;typeof c=="function"?oe=c($):oe=[c,U?"active":null,I?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Me=typeof f=="function"?f($):f;return T.createElement(Zi,{...m,"aria-current":he,className:oe,ref:y,style:Me,to:b,viewTransition:v},typeof h=="function"?h($):h)});XS.displayName="NavLink";var JS=T.forwardRef(({discover:a="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:f,method:b=Ds,action:v,onSubmit:h,relative:m,preventScrollReset:y,viewTransition:S,...w},M)=>{let A=t2(),N=n2(v,{relative:m}),G=b.toLowerCase()==="get"?"get":"post",O=typeof v=="string"&&wp.test(v),P=k=>{if(h&&h(k),k.defaultPrevented)return;k.preventDefault();let K=k.nativeEvent.submitter,U=K?.getAttribute("formmethod")||b;A(K||k.currentTarget,{fetcherKey:s,method:U,navigate:u,replace:d,state:f,relative:m,preventScrollReset:y,viewTransition:S})};return T.createElement("form",{ref:M,method:G,action:N,onSubmit:c?h:P,...w,"data-discover":!O&&a==="render"?"true":void 0})});JS.displayName="Form";function IS(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ep(a){let s=T.useContext(Pi);return Le(s,IS(a)),s}function FS(a,{target:s,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:b}={}){let v=Bd(),h=Jt(),m=rl(a,{relative:f});return T.useCallback(y=>{if(AS(y,s)){y.preventDefault();let S=u!==void 0?u:al(h)===al(m);v(a,{replace:S,state:c,preventScrollReset:d,relative:f,viewTransition:b})}},[h,v,m,u,c,s,a,d,f,b])}function _p(a){Xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=T.useRef(yd(a)),u=T.useRef(!1),c=Jt(),d=T.useMemo(()=>kS(c.search,u.current?null:s.current),[c.search]),f=Bd(),b=T.useCallback((v,h)=>{const m=yd(typeof v=="function"?v(new URLSearchParams(d)):v);u.current=!0,f("?"+m,h)},[f,d]);return[d,b]}var WS=0,e2=()=>`__${String(++WS)}__`;function t2(){let{router:a}=Ep("useSubmit"),{basename:s}=T.useContext(sn),u=yS();return T.useCallback(async(c,d={})=>{let{action:f,method:b,encType:v,formData:h,body:m}=DS(c,s);if(d.navigate===!1){let y=d.fetcherKey||e2();await a.fetch(y,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:h,body:m,formMethod:d.method||b,formEncType:d.encType||v,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:h,body:m,formMethod:d.method||b,formEncType:d.encType||v,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,s,u])}function n2(a,{relative:s}={}){let{basename:u}=T.useContext(sn),c=T.useContext(pn);Le(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...rl(a||".",{relative:s})},b=Jt();if(a==null){f.search=b.search;let v=new URLSearchParams(f.search),h=v.getAll("index");if(h.some(y=>y==="")){v.delete("index"),h.filter(S=>S).forEach(S=>v.append("index",S));let y=v.toString();f.search=y?`?${y}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Nn([u,f.pathname])),al(f)}function a2(a,{relative:s}={}){let u=T.useContext(gp);Le(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Ep("useViewTransitionState"),d=rl(a,{relative:s});if(!u.isTransitioning)return!1;let f=Un(u.currentLocation.pathname,c)||u.currentLocation.pathname,b=Un(u.nextLocation.pathname,c)||u.nextLocation.pathname;return $s(d.pathname,b)!=null||$s(d.pathname,f)!=null}const i2="/assets/logo-BY-LKRi7.png",r2=p.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 64px; /* Reserve Platz, verhindert Überlappung */
`,l2=p.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,s2=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,o2=p.img`
  height: 40px;
  width: auto;
`,c2=p.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${a=>a.theme.colors.primary};
  margin: 0;
  white-space: nowrap; /* niemals umbrechen */

  /* Auf kleineren Screens nur das Logo anzeigen */
  @media (max-width: 900px) {
    display: none;
  }
`,u2=p.div`
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
`,Cu=p(Zi)`
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
`,d2=p.button`
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
`;function ki(){const a=Jt(),[s,u]=T.useState(!1);return r.jsx(r2,{children:r.jsxs(l2,{children:[r.jsx(Cu,{to:"/",onClick:()=>u(!1),children:r.jsxs(s2,{children:[r.jsx(o2,{src:i2,alt:"SCKW Logo"}),r.jsx(c2,{children:"SC Konstanz-Wollmatingen e. V."})]})}),r.jsxs(d2,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>u(d=>!d),children:["Menü",r.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),r.jsxs(u2,{id:"mobile-nav",$open:s,children:[r.jsx(Cu,{to:"/sponsoring",$active:a.pathname==="/sponsoring",onClick:()=>u(!1),children:"🤝 Sponsoring"}),r.jsx(Cu,{to:"/sponsoring/club-500",$active:a.pathname==="/sponsoring/club-500",onClick:()=>u(!1),children:"⚽ CLUB 500"}),!1]})]})})}const f2=p.footer`
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.95rem;
  color: #666;
  background: #fafafa;
  border-top: 1px solid #eee;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Au=p.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`,h2=p.div`
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
`,m2=p.nav`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;function eo(){return r.jsx(f2,{children:r.jsxs(h2,{children:[r.jsxs("div",{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",r.jsx(Au,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]}),r.jsxs(m2,{"aria-label":"Rechtliches",children:[r.jsx(Au,{href:"https://www.sckw.de/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutz"}),r.jsx(Au,{href:"https://www.sckw.de/impressum",target:"_blank",rel:"noopener noreferrer",children:"Impressum"})]})]})})}const zp="/assets/cheerleading_0-DQQGXi0R.jpg",Tp="/assets/cheerleading_1-NkLBARmH.jpg",Cp="/assets/cheerleading_2-CrezcZYL.jpg",Ap="/assets/cheerleading_3-GN5rPHNN.jpg",kp="/assets/1-ClVWb4ei.png",Rp="/assets/10-Bwp2eIye.png",Mp="/assets/11-W061sOUI.png",Dp="/assets/12-TjJyzl8L.png",Bp="/assets/13-ChUUCdQQ.png",Op="/assets/14-BVhdRr98.png",Np="/assets/2-CcfgIQYe.png",Lp="/assets/3-DYiPkVd7.png",Up="/assets/4-1upoqVoS.png",Hp="/assets/5-D0tadXAC.png",Gp="/assets/6-NJ4ELm_j.png",$p="/assets/7-BXo4_Bcj.png",Vp="/assets/8-BbOqEnj_.png",Yp="/assets/9-CIK0gi9o.png",qp="/assets/herren_0-BVVgyt1l.jpg",Kp="/assets/herren_1-B8ywOnNy.jpg",Pp="/assets/herren_10-DPVQsg9B.jpg",Qp="/assets/herren_11-wfWG62H3.jpg",Zp="/assets/herren_12-DEJSN2zG.jpg",Xp="/assets/herren_13-F52vdukE.jpg",Jp="/assets/herren_14-Cq9hoKfG.jpg",Ip="/assets/herren_15-aYIFGauG.jpg",Fp="/assets/herren_16-NYI2EaEN.jpg",Wp="/assets/herren_17-B_52ysA2.jpg",eb="/assets/herren_18-DbwjVNKJ.jpg",tb="/assets/herren_19-BduD_J85.png",nb="/assets/herren_2--jFuixBF.jpg",ab="/assets/herren_3-BPz1zlkG.jpg",ib="/assets/herren_4-BZRrQaFr.jpg",rb="/assets/herren_5-D-QrfY2P.jpg",lb="/assets/herren_6-DWQvi6Am.jpg",sb="/assets/herren_7-BXO6B8Bt.jpg",ob="/assets/herren_8-Cg4rdr7T.jpg",cb="/assets/herren_9-DoLnTdRG.jpg",ub="/assets/herren_club500_1-DNikBmOh.png",db="/assets/herren_club500_2-CABnv8vs.png",fb="/assets/herren_club500_3-Cjxe_RiU.png",hb="/assets/herren_club500_4-Dgm0Z9_i.png",mb="/assets/herren_club500_5-3OeJLCAP.png",gb="/assets/herren_jubel_500club-mxBrnD8H.png",pb="/assets/IMG-team-BGcF1agj.png",bb="/assets/IMG_5349-CpvIVKhM.jpg",xb="/assets/IMG_5369-DQ4CSwdg.jpg",yb="/assets/IMG_5421-BBzniIEN.jpg",vb="/assets/IMG_5442-D2PgutWB.jpg",Sb="/assets/IMG_5952-B9VW6Qie.jpg",jb="/assets/Unbenann324t-IPGo6eoQ.png",wb="/assets/image0-DDrU5aZn.jpeg",Eb="/assets/image11-BNM8hTkT.jpeg",_b="/assets/image8-BUnedp9U.jpeg",g2="/assets/grafhardenberg-Di5cVggE.png",p2="/assets/horta-DydWIGV7.png",b2="/assets/logans-BgpKwKYA.png",x2="/assets/ricobet-DsVC-eZt.png",y2="/assets/rothaus-DqkKD9yW.png",v2="/assets/tasty-B2pSa1rE.png",S2="/assets/cabin-window-B83r_CDB.jpg",j2="/assets/outside-9-xz17qL.jpg",w2="/assets/shower-B75caJ-F.jpg",E2="/assets/sitting-area-D7khB3Gw.jpg",_2="/assets/toilet-BpMHYbhh.jpg",z2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":zp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Tp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Cp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Ap,"../assets/gallery/damen/1.png":kp,"../assets/gallery/damen/10.png":Rp,"../assets/gallery/damen/11.png":Mp,"../assets/gallery/damen/12.png":Dp,"../assets/gallery/damen/13.png":Bp,"../assets/gallery/damen/14.png":Op,"../assets/gallery/damen/2.png":Np,"../assets/gallery/damen/3.png":Lp,"../assets/gallery/damen/4.png":Up,"../assets/gallery/damen/5.png":Hp,"../assets/gallery/damen/6.png":Gp,"../assets/gallery/damen/7.png":$p,"../assets/gallery/damen/8.png":Vp,"../assets/gallery/damen/9.png":Yp,"../assets/gallery/herren/herren_0.jpg":qp,"../assets/gallery/herren/herren_1.jpg":Kp,"../assets/gallery/herren/herren_10.jpg":Pp,"../assets/gallery/herren/herren_11.jpg":Qp,"../assets/gallery/herren/herren_12.jpg":Zp,"../assets/gallery/herren/herren_13.jpg":Xp,"../assets/gallery/herren/herren_14.jpg":Jp,"../assets/gallery/herren/herren_15.jpg":Ip,"../assets/gallery/herren/herren_16.jpg":Fp,"../assets/gallery/herren/herren_17.jpg":Wp,"../assets/gallery/herren/herren_18.jpg":eb,"../assets/gallery/herren/herren_19.png":tb,"../assets/gallery/herren/herren_2.jpg":nb,"../assets/gallery/herren/herren_3.jpg":ab,"../assets/gallery/herren/herren_4.jpg":ib,"../assets/gallery/herren/herren_5.jpg":rb,"../assets/gallery/herren/herren_6.jpg":lb,"../assets/gallery/herren/herren_7.jpg":sb,"../assets/gallery/herren/herren_8.jpg":ob,"../assets/gallery/herren/herren_9.jpg":cb,"../assets/gallery/herren/herren_club500_1.png":ub,"../assets/gallery/herren/herren_club500_2.png":db,"../assets/gallery/herren/herren_club500_3.png":fb,"../assets/gallery/herren/herren_club500_4.png":hb,"../assets/gallery/herren/herren_club500_5.png":mb,"../assets/gallery/herren/herren_jubel_500club.png":gb,"../assets/gallery/jfv/IMG-team.png":pb,"../assets/gallery/jfv/IMG_5349.jpg":bb,"../assets/gallery/jfv/IMG_5369.jpg":xb,"../assets/gallery/jfv/IMG_5421.jpg":yb,"../assets/gallery/jfv/IMG_5442.jpg":vb,"../assets/gallery/jfv/IMG_5952.jpg":Sb,"../assets/gallery/jfv/Unbenann324t.png":jb,"../assets/gallery/jfv/image0.jpeg":wb,"../assets/gallery/jfv/image11.jpeg":Eb,"../assets/gallery/jfv/image8.jpeg":_b}),T2=Object.assign({"../assets/sponsors/grafhardenberg.png":g2,"../assets/sponsors/horta.png":p2,"../assets/sponsors/logans.png":b2,"../assets/sponsors/ricobet.png":x2,"../assets/sponsors/rothaus.png":y2,"../assets/sponsors/tasty.png":v2}),C2=Object.assign({"../assets/renovation/cabin-window.jpg":S2,"../assets/renovation/outside.jpg":j2,"../assets/renovation/shower.jpg":w2,"../assets/renovation/sitting-area.jpg":E2,"../assets/renovation/toilet.jpg":_2}),zb=a=>a.split("/").pop()?.toLowerCase()||"",A2=a=>{const s=a.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function k2(a){const s=[...a];for(let u=s.length-1;u>0;u--){const c=Math.floor(Math.random()*(u+1));[s[u],s[c]]=[s[c],s[u]]}return s}const R2=()=>{const a={};Object.entries(z2).forEach(([c,d])=>{const f=A2(c);a[f]||(a[f]=[]),a[f].push(d)}),Object.keys(a).forEach(c=>{a[c]=k2(a[c])});const s={},u=["jfv","cheerleading","damen","herren"];return u.forEach(c=>{a[c]&&(s[c]=a[c])}),Object.keys(a).forEach(c=>{u.includes(c.toLowerCase())||(s[c]=a[c])}),s},M2=()=>{const a={};return Object.entries(T2).forEach(([s,u])=>{const c=zb(s);a[c]=u}),a},Tb=()=>{const a={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(C2).forEach(([s,u])=>{const c=zb(s);c.includes("sitting")?a.kabinen.push({src:u,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?a.fassade.push({src:u,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&a.fassade.push({src:u,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?a.waschkueche.push({src:u,alt:"Toilette"}):c.includes("shower")?a.waschkueche.push({src:u,alt:"Dusche"}):a.waschkueche.push({src:u,alt:"Waschküche"}))}),a},mt=a=>{const u=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":zp,"../assets/gallery/cheerleading/cheerleading_1.jpg":Tp,"../assets/gallery/cheerleading/cheerleading_2.jpg":Cp,"../assets/gallery/cheerleading/cheerleading_3.jpg":Ap,"../assets/gallery/damen/1.png":kp,"../assets/gallery/damen/10.png":Rp,"../assets/gallery/damen/11.png":Mp,"../assets/gallery/damen/12.png":Dp,"../assets/gallery/damen/13.png":Bp,"../assets/gallery/damen/14.png":Op,"../assets/gallery/damen/2.png":Np,"../assets/gallery/damen/3.png":Lp,"../assets/gallery/damen/4.png":Up,"../assets/gallery/damen/5.png":Hp,"../assets/gallery/damen/6.png":Gp,"../assets/gallery/damen/7.png":$p,"../assets/gallery/damen/8.png":Vp,"../assets/gallery/damen/9.png":Yp,"../assets/gallery/herren/herren_0.jpg":qp,"../assets/gallery/herren/herren_1.jpg":Kp,"../assets/gallery/herren/herren_10.jpg":Pp,"../assets/gallery/herren/herren_11.jpg":Qp,"../assets/gallery/herren/herren_12.jpg":Zp,"../assets/gallery/herren/herren_13.jpg":Xp,"../assets/gallery/herren/herren_14.jpg":Jp,"../assets/gallery/herren/herren_15.jpg":Ip,"../assets/gallery/herren/herren_16.jpg":Fp,"../assets/gallery/herren/herren_17.jpg":Wp,"../assets/gallery/herren/herren_18.jpg":eb,"../assets/gallery/herren/herren_19.png":tb,"../assets/gallery/herren/herren_2.jpg":nb,"../assets/gallery/herren/herren_3.jpg":ab,"../assets/gallery/herren/herren_4.jpg":ib,"../assets/gallery/herren/herren_5.jpg":rb,"../assets/gallery/herren/herren_6.jpg":lb,"../assets/gallery/herren/herren_7.jpg":sb,"../assets/gallery/herren/herren_8.jpg":ob,"../assets/gallery/herren/herren_9.jpg":cb,"../assets/gallery/herren/herren_club500_1.png":ub,"../assets/gallery/herren/herren_club500_2.png":db,"../assets/gallery/herren/herren_club500_3.png":fb,"../assets/gallery/herren/herren_club500_4.png":hb,"../assets/gallery/herren/herren_club500_5.png":mb,"../assets/gallery/herren/herren_jubel_500club.png":gb,"../assets/gallery/jfv/IMG-team.png":pb,"../assets/gallery/jfv/IMG_5349.jpg":bb,"../assets/gallery/jfv/IMG_5369.jpg":xb,"../assets/gallery/jfv/IMG_5421.jpg":yb,"../assets/gallery/jfv/IMG_5442.jpg":vb,"../assets/gallery/jfv/IMG_5952.jpg":Sb,"../assets/gallery/jfv/Unbenann324t.png":jb,"../assets/gallery/jfv/image0.jpeg":wb,"../assets/gallery/jfv/image11.jpeg":Eb,"../assets/gallery/jfv/image8.jpeg":_b})).find(([c])=>c.includes(a));return u?u[1]:""},D2=(a,s)=>mt(`${a}/${a}_${s}.jpg`);R2(),M2(),Tb();const B2={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},O2={packages:B2},N2=p.div`
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
`,L2=p.div`
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
`,U2=p.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,H2=p.div`
  margin-bottom: 1.5rem;
`,G2=p.div`
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
`,$2=p.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,V2=p.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${a=>Math.min(a.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,Y2=p.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,q2=p.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,K2=p.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,P2=p.div`
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
`,Q2=p.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,Z2=p.div`
  flex: 1;
`,X2=p.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,J2=p.span`
  font-weight: 600;
  color: #374151;
`,I2=p.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,F2=p.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,W2=p.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,e5=p.button`
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
`,t5=p.div`
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
`,n5=()=>{const a=O2;return{kabinen:{current:a.packages.kabinen.current,goal:a.packages.kabinen.goal,donors:a.packages.kabinen.donors},fassade:{current:a.packages.fassade.current,goal:a.packages.fassade.goal,donors:a.packages.fassade.donors},waschkueche:{current:a.packages.waschkueche.current,goal:a.packages.waschkueche.goal,donors:a.packages.waschkueche.donors}}};function a5({data:a=n5(),realTime:s=!1}){const[u,c]=T.useState(a),[d,f]=T.useState(new Date),[b,v]=T.useState(!1),h=async()=>{v(!0);try{const S=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(S.ok){const w=await S.json(),M={kabinen:{current:w.packages.kabinen.current,goal:w.packages.kabinen.goal,donors:w.packages.kabinen.donors},fassade:{current:w.packages.fassade.current,goal:w.packages.fassade.goal,donors:w.packages.fassade.donors},waschkueche:{current:w.packages.waschkueche.current,goal:w.packages.waschkueche.goal,donors:w.packages.waschkueche.donors}};c(M),f(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(S){console.error("❌ Fehler beim Laden der Spendendaten:",S)}finally{v(!1)}};T.useEffect(()=>{if(!s)return;const S=setInterval(()=>{h()},3e4);return()=>clearInterval(S)},[s]);const m=S=>{switch(S){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},y=S=>{switch(S){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return S}};return r.jsxs(r.Fragment,{children:[r.jsx(N2,{children:Object.entries(u).map(([S,w])=>{const M=w.current/w.goal*100;return r.jsxs(L2,{children:[r.jsxs(U2,{children:[m(S)," ",y(S)]}),r.jsxs(H2,{children:[r.jsxs(G2,{children:[r.jsxs("span",{children:[w.current.toLocaleString("de-DE")," €"]}),r.jsxs("span",{children:[w.goal.toLocaleString("de-DE")," €"]})]}),r.jsx($2,{children:r.jsx(V2,{$progress:M})}),r.jsxs(Y2,{children:[Math.round(M),"% erreicht"]})]}),r.jsxs(q2,{children:[r.jsxs(K2,{children:["💝 Spender (",w.donors.length,")"]}),r.jsx(P2,{children:w.donors.length>0?w.donors.slice().reverse().map((A,N)=>r.jsxs(Q2,{children:[r.jsxs(Z2,{children:[r.jsx(X2,{children:A.anonymous?"Anonymer Spender":A.name}),A.comment&&r.jsxs(I2,{children:['"',A.comment,'"']}),A.date&&r.jsx(F2,{children:A.date})]}),r.jsxs(J2,{children:[A.amount.toLocaleString("de-DE")," €"]})]},N)):r.jsx(W2,{children:"Noch keine Spenden 🤗"})})]})]},S)})}),r.jsxs(e5,{onClick:h,disabled:b,title:"Spendendaten aktualisieren",children:["🔄",b?"Lade...":"Aktualisieren"]}),r.jsxs(t5,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const i5=p.section`
  background: url("${D2("herren",18)}") center/cover;
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
`,r5=p.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,l5=p.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,s5=p.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,o5=p.main`
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
`,c5=p.section`
  margin-bottom: 4rem;
`,u5=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,d5=p.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,f5=p.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,h5=p.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,m5=p.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,g5=p.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,p5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,b5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ku=p.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Ru=p.div`
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
`,x5=p.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,y5=p.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${a=>a.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,v5=p.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,S5=p.div`
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
`,j5=p.div`
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
`,w5=p.div`
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
`,E5=p.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,_5=p.button`
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
`,u0=p.button`
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
`,Mu=p.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Du=p.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,z5=p.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,T5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,C5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Bu=p.div`
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
`,Ou=p.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Nu=p.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Lu=p.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Uu=p.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,A5=p.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,k5=p.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,R5=p.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,M5=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,ws=p.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Es=p.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,_s=p.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,D5=p.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,B5=p.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,O5=p.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,N5=p.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,d0=p.a`
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
`,L5=p.div`
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
`,U5=p.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,H5=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,G5=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,$5=p.button`
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
`,V5=p.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Hu=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Gu=p.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,$u=p.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,Y5=p.button`
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
`,q5=p.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,Ri=Tb();function Vu({images:a,onImageClick:s}){const[u,c]=T.useState(0);return T.useEffect(()=>{if(a.length<=1)return;const d=setInterval(()=>{c(f=>(f+1)%a.length)},4e3);return()=>clearInterval(d)},[a.length]),a.length===0?r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):r.jsxs(x5,{children:[a.map((d,f)=>r.jsx(y5,{src:d.src,alt:d.alt,$isActive:f===u,onClick:()=>s(f)},f)),a.length>1&&r.jsx(v5,{children:a.map((d,f)=>r.jsx(S5,{$isActive:f===u,onClick:()=>c(f)},f))})]})}function K5({images:a,initialIndex:s,onClose:u}){const[c,d]=T.useState(s),f=T.useCallback(()=>{d(v=>(v+1)%a.length)},[a.length]),b=T.useCallback(()=>{d(v=>(v-1+a.length)%a.length)},[a.length]);return T.useEffect(()=>{const v=h=>{h.key==="Escape"&&u(),h.key==="ArrowRight"&&f(),h.key==="ArrowLeft"&&b()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[u,f,b]),r.jsx(j5,{onClick:u,children:r.jsxs(w5,{onClick:v=>v.stopPropagation(),children:[r.jsx(_5,{onClick:u,children:"×"}),r.jsx(E5,{src:a[c].src,alt:a[c].alt}),a.length>1&&r.jsxs(r.Fragment,{children:[r.jsx(u0,{$direction:"prev",onClick:b,children:"‹"}),r.jsx(u0,{$direction:"next",onClick:f,children:"›"})]})]})})}function P5(){const[a,s]=T.useState(!1),[u,c]=T.useState([]),[d,f]=T.useState(0),[b,v]=T.useState(!1),h=(S,w)=>{c(S),f(w),s(!0)},m=S=>{S.preventDefault(),v(!0)},y=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return r.jsxs(r.Fragment,{children:[r.jsx(i5,{children:r.jsxs(r5,{children:[r.jsx(l5,{children:"🏟️ Fürstenberg weiterentwickeln"}),r.jsx(s5,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),r.jsxs(o5,{children:[r.jsxs(c5,{children:[r.jsx(u5,{children:"Der Fürstenberg - unser Kultplatz"}),r.jsx(d5,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),r.jsxs(f5,{children:[r.jsx(h5,{children:"✨ Charme erhalten, Komfort verbessern"}),r.jsx(m5,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),r.jsxs(g5,{children:[r.jsx(p5,{children:"🔍 Wo wir ansetzen möchten"}),r.jsxs(b5,{children:[r.jsxs(ku,{children:[r.jsx(Ru,{children:r.jsx(Vu,{images:Ri.kabinen,onImageClick:S=>h(Ri.kabinen,S)})}),r.jsx(Mu,{children:"🔧 Kabinen komfortabler gestalten"}),r.jsx(Du,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),r.jsxs(ku,{children:[r.jsx(Ru,{children:r.jsx(Vu,{images:Ri.fassade,onImageClick:S=>h(Ri.fassade,S)})}),r.jsx(Mu,{children:"🎨 Fassade & Fenster erneuern"}),r.jsx(Du,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),r.jsxs(ku,{children:[r.jsx(Ru,{children:r.jsx(Vu,{images:Ri.waschkueche,onImageClick:S=>h(Ri.waschkueche,S)})}),r.jsx(Mu,{children:"🧺 Waschküche auf Vordermann bringen"}),r.jsx(Du,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),r.jsxs(z5,{children:[r.jsx(T5,{children:"✨ Unsere Pläne für den Fürstenberg"}),r.jsxs(C5,{children:[r.jsxs(Bu,{children:[r.jsx(Ou,{children:"🪑"}),r.jsx(Nu,{children:"Kabinen sanieren"}),r.jsx(Lu,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),r.jsx(Uu,{children:"~8.000 €"})]}),r.jsxs(Bu,{children:[r.jsx(Ou,{children:"🎨"}),r.jsx(Nu,{children:"Fassade & Fenster erneuern"}),r.jsx(Lu,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),r.jsx(Uu,{children:"~15.000 €"})]}),r.jsxs(Bu,{children:[r.jsx(Ou,{children:"🧺"}),r.jsx(Nu,{children:"Waschküche modernisieren"}),r.jsx(Lu,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),r.jsx(Uu,{children:"~5.000 €"})]})]})]}),r.jsxs(A5,{children:[r.jsx(k5,{children:"🤝 Werden Sie Renovierungs-Partner!"}),r.jsx(R5,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),r.jsxs(M5,{children:[r.jsxs(ws,{children:[r.jsx(Es,{children:"🏆"}),r.jsxs(_s,{children:[r.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),r.jsxs(ws,{children:[r.jsx(Es,{children:"📄"}),r.jsxs(_s,{children:[r.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),r.jsxs(ws,{children:[r.jsx(Es,{children:"📱"}),r.jsxs(_s,{children:[r.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),r.jsxs(ws,{children:[r.jsx(Es,{children:"🎯"}),r.jsxs(_s,{children:[r.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),r.jsxs(D5,{children:[r.jsx(B5,{children:"🤝 Gemeinsam für den Fürstenberg"}),r.jsx(O5,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),r.jsx(a5,{realTime:!0}),r.jsxs(N5,{children:[r.jsx(d0,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),r.jsx(d0,{href:"#",onClick:m,children:"🏦 Per Überweisung spenden"})]})]})]}),r.jsx(eo,{}),b&&r.jsx(L5,{onClick:()=>v(!1),children:r.jsxs(U5,{onClick:S=>S.stopPropagation(),children:[r.jsxs(H5,{children:[r.jsx(G5,{children:"Kontoverbindung für Spenden"}),r.jsx($5,{onClick:()=>v(!1),children:"×"})]}),r.jsxs(V5,{children:[r.jsxs(Hu,{children:[r.jsx(Gu,{children:"Kontoinhaber:"}),r.jsx($u,{children:"SC Konstanz-Wollmatingen"})]}),r.jsxs(Hu,{children:[r.jsx(Gu,{children:"IBAN:"}),r.jsx($u,{children:"DE12 6905 0001 0000 0228 06"})]}),r.jsxs(Hu,{children:[r.jsx(Gu,{children:"BIC:"}),r.jsx($u,{children:"SOLADES1KNZ"})]})]}),r.jsx(Y5,{onClick:y,children:"📋 IBAN kopieren"}),r.jsx(q5,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),a&&r.jsx(K5,{images:u,initialIndex:d,onClose:()=>s(!1)})]})}const Yu={text:"Auf Aufstiegskurs:",highlight:"7 Punkte Vorsprung",suffix:"– ab Saison 26/27 voraussichtlich Verbandsliga Südbaden"},Hd=[{value:"250.000",label:"Reichweite / 90 Tage",description:"In der Winterpause gemessen"},{value:"32.000",label:"Reichweite / 30 Tage",description:"Monatliche Reichweite aktuell"},{value:"50-80k",label:"Monat im Spielbetrieb",description:"Erwartete monatliche Reichweite"},{value:"500-800k",label:"Saisonreichweite",description:"Konservative Hochrechnung"}],Cb=[{label:"Pro Tor",starter:"100 €",premium:"200 €",kombi:"Fix + 150 €"},{label:"Pro Punkt",starter:"150 €",premium:"250 €",kombi:"Fix + 200 €"},{label:"Pro Zu-Null",starter:"300 €",premium:"500 €",kombi:"Fix + 400 €"},{label:"Pro Sieg",starter:"-",premium:"800 €",kombi:"Fix + 600 €"}],Li={starter:"~5.000 €",premium:"~12.000 €",kombi:"~9.000 €"},Q5="Hochrechnung basierend auf Ø 50 Tore, 45 Punkte, 15 Siege pro Saison.",Ab=[{position:"Motorhaube",groesse:"100 x 65 cm",preis:"1.000 €"},{position:"Heckfläche gesamt (Doppeltür)",groesse:"180 x 170 cm",preis:"2.000 €"},{position:"Heckfläche pro Tür",groesse:"80 x 160 cm",preis:"je 1.000 €"},{position:"Seitenfläche groß (links)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Seitenfläche groß (rechts)",groesse:"350 x 70 cm",preis:"1.500 €"},{position:"Schiebetür",groesse:"130 x 150 cm",preis:"1.200 €"}],kb=[{position:"Fensterstreifen (umlaufend)",groesse:"15-20 cm Höhe",preis:"800 €"},{position:"Heckstreifen",groesse:"170 x 20 cm",preis:"600 €"},{position:"Dachfläche (optional)",groesse:"200 x 150 cm",preis:"1.000 €"}],Rb=["Mehrjahresrabatt: 10% (2 Jahre), 15% (3 Jahre)","Kombi-Paket Online + Bus: +150 € (Logo & Link auf Website)","Design & Folierung: optionaler Kostenbeitrag (50-100 €)","Social-Media-Add-on: +200 € für 1 dedizierten Post/Jahr"],Z5="Alle Flächen sind ca.-Angaben und werden bei Vertragsabschluss exakt vermessen. Kombinationen möglich!",St={email:"sponsoring@sckw.de",adresse:{name:"SC Konstanz-Wollmatingen e.V.",strasse:"Schleyerweg 5",plz:"D-78467",ort:"Konstanz"},vollAdresse:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},X5=[{label:"Firma / Organisation",type:"text",lines:1},{label:"Ansprechpartner",type:"text",lines:1},{label:"Telefon / E-Mail",type:"text",lines:1},{label:"Interessiert an (Paket/Leistung)",type:"text",lines:2},{label:"Budget-Rahmen",type:"text",lines:1},{label:"Notizen / Besonderheiten",type:"text",lines:4},{label:"Nächste Schritte / Follow-up",type:"text",lines:2}],J5=p.div`
  max-width: 1000px;
  margin: 0 auto;
`,I5=p.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,F5=p.a`
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
`,W5=p.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  margin-bottom: 1rem;
`,ej=p.img`
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    max-width: 140px;
    max-height: 80px;
  }
`,tj=p.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 700;
`,nj=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,aj=p.a`
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
`,ij=p.img`
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`,rj=p.div`
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
`,lj={hauptsponsor:{name:"Fuchsbau Immobilien",logo:"/sponsors/fuchsbau-logo.png",website:"https://immofuchsbau.com/"},partners:[{name:"Tasty Delivery",logo:"/sponsors/tasty.png",website:"https://tasty-delivery.de"},{name:"Stadtwerke Konstanz",logo:"/sponsors/Stadtwerke.avif",website:"https://www.stadtwerke-konstanz.de/"},{name:"Graf Hardenberg",logo:"/sponsors/grafhardenberg.png",website:"https://www.grafhardenberg.de/"},{name:"Kountz",logo:"/sponsors/KOUNTZ.avif",website:"#"},{name:"Rothaus",logo:"/sponsors/Rothaus.avif",website:"https://www.rothaus.de/"},{name:"J&C",logo:"/sponsors/JC.avif",website:"#"},{name:"Danlin Media",logo:"/sponsors/DANLIN.avif",website:"#"},{name:"Logan's Linde",logo:"/sponsors/logans.png",website:"https://logans-wollmatingen.de/"}]};function sj(){const{hauptsponsor:a,partners:s}=lj;return r.jsxs(J5,{children:[r.jsx(I5,{children:r.jsxs(F5,{href:a.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(W5,{children:"Hauptsponsor"}),r.jsx(ej,{src:a.logo,alt:a.name}),r.jsx(tj,{children:a.name})]})}),r.jsx(nj,{children:s.map((u,c)=>r.jsxs(aj,{href:u.website,target:"_blank",rel:"noopener noreferrer",children:[r.jsx(ij,{src:u.logo,alt:u.name}),r.jsx(rj,{children:u.name})]},c))})]})}const oj=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 1.25rem 0;
  width: 100%;
`,cj=p.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.25rem 1rem;
  text-align: center;
`,uj=p.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,dj=p.p`
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
`;function fj({headline:a,description:s,contactInfos:u}){const c=d=>{d.preventDefault();const f=d.currentTarget,b=new FormData(f);if(String(b.get("website")||"").trim()!=="")return;const h=String(b.get("firstName")||"").trim(),m=String(b.get("lastName")||"").trim(),y=String(b.get("email")||"").trim(),S=String(b.get("phone")||"").trim(),w={};if(h||(w.firstName="Bitte Vornamen angeben"),m||(w.lastName="Bitte Nachnamen angeben"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)||(w.email="Bitte gültige E-Mail eingeben"),/^[+\d][\d\s\-/()]{5,}$/.test(S)||(w.phone="Bitte gültige Telefonnummer eingeben"),Object.keys(w).length>0){const M=Object.keys(w)[0],A=f.querySelector(`[name="${M}"]`);A&&A.focus(),alert(Object.values(w).join(`
`));return}alert("Danke! Wir melden uns innerhalb von 24 Stunden."),f.reset()};return r.jsx(hj,{id:"kontakt",children:r.jsxs(mj,{children:[r.jsx(_j,{children:a}),r.jsx(zj,{children:s}),r.jsx(oj,{children:u.map((d,f)=>r.jsxs(cj,{children:[r.jsxs(uj,{children:[d.icon," ",d.title]}),r.jsx(dj,{$isEmail:d.isEmail,children:d.isEmail?r.jsx("a",{href:`mailto:${d.content}`,children:d.content}):d.content})]},f))}),r.jsxs(gj,{children:[r.jsx(pj,{children:"Kontakt aufnehmen"}),r.jsx(bj,{children:"Kurzformular ausfüllen - wir melden uns innerhalb von 24 Stunden."}),r.jsxs(xj,{noValidate:!0,onSubmit:c,children:[r.jsxs(qu,{children:[r.jsxs(Wr,{children:[r.jsx("label",{htmlFor:"firstName",children:"Vorname"}),r.jsx("input",{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0})]}),r.jsxs(Wr,{children:[r.jsx("label",{htmlFor:"lastName",children:"Nachname"}),r.jsx("input",{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0})]})]}),r.jsxs(qu,{children:[r.jsxs(Wr,{children:[r.jsx("label",{htmlFor:"company",children:"Firma (optional)"}),r.jsx("input",{id:"company",name:"company",type:"text",autoComplete:"organization"})]}),r.jsxs(Wr,{children:[r.jsx("label",{htmlFor:"phone",children:"Telefon"}),r.jsx("input",{id:"phone",name:"phone",type:"tel",autoComplete:"tel",required:!0})]})]}),r.jsx(qu,{children:r.jsxs(yj,{children:[r.jsx("label",{htmlFor:"email",children:"E-Mail"}),r.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]})}),r.jsxs(vj,{"aria-hidden":"true",tabIndex:-1,children:[r.jsx("label",{htmlFor:"website",children:"Wenn Sie ein Mensch sind, lassen Sie dieses Feld leer"}),r.jsx("input",{id:"website",name:"website",type:"text",autoComplete:"off"})]}),r.jsxs(Sj,{children:[r.jsx("input",{id:"consent",name:"consent",type:"checkbox",required:!0}),r.jsxs("label",{htmlFor:"consent",children:["Ich stimme der Verarbeitung meiner Daten gemäß"," ",r.jsx("a",{href:"/datenschutz",target:"_blank",rel:"noopener noreferrer",children:"Datenschutzhinweisen"})," ","zu."]})]}),r.jsxs(jj,{children:[r.jsx(wj,{type:"submit",children:"Absenden"}),r.jsxs(Ej,{children:["Alternativ:"," ",r.jsx("a",{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})]})]})]})]})})}const hj=p.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,mj=p.div`
  max-width: 1000px;
  margin: 0 auto;
`,gj=p.div`
  margin-top: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  padding: 1.25rem;
`,pj=p.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #e10073;
`,bj=p.p`
  margin: 0 0 1rem 0;
  color: #555;
`,xj=p.form`
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
`,qu=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,Wr=p.div`
  display: flex;
  flex-direction: column;
`,yj=p(Wr)`
  grid-column: 1 / -1;
`,vj=p.div`
  position: absolute;
  left: -5000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,Sj=p.div`
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
`,jj=p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`,wj=p.button`
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
`,Ej=p.span`
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
`,_j=p.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,zj=p.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Tj="sponsoring@sckw.de",Ku=p.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Mb=p.section`
  padding: 3rem 0;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`,Cj=p(Mb)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,zs=p.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,f0=p.h2`
  font-size: clamp(1.6rem, 5vw, 2.4rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  padding: 0 0.5rem;
`,h0=p.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,Aj=p.section`
  background: #0b0b0d;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 0 3rem 0;
  overflow: hidden;
`,kj=p.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center/cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.85);
`,Rj=p.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.6);
`,Mj=p.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1.25rem;
`,Dj=p.h1`
  color: white;
  font-size: clamp(2rem, 8vw, 4.2rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Bj=p.p`
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
`,Oj=p.div`
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
`,Nj=p.div`
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
`,Lj=p.div`
  font-size: clamp(1.1rem, 4.5vw, 1.6rem);
  font-weight: 900;
  color: white;
  margin-bottom: 0.2rem;
`,Uj=p.div`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,Hj=p.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,m0=p.a`
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
`,Gj=kd`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`,$j=p.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`,Vj=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
`,g0=p.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  animation: ${Gj} 2s ease-in-out infinite;
  flex-shrink: 0;
`,Yj=p.span`
  color: white;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.02em;

  strong {
    color: #fbbf24;
  }
`,qj=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`,Kj=p.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }
`,Pj=p.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Qj=p.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,Zj=p.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
  flex: 1;
`,Xj=p.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`,Jj=p.li`
  padding: 0.35rem 0;
  font-size: 0.9rem;
  color: #444;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "\\2713";
    color: #e10073;
    font-weight: 800;
    flex-shrink: 0;
  }
`,Ij=p.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: auto;
  flex-wrap: wrap;
`,Fj=p.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e10073;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #b8005a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }
`,Wj=p(Zi)`
  font-size: 0.85rem;
  font-weight: 600;
  color: #e10073;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,ew=p.div`
  margin-top: 3rem;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
`,tw=p.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,nw=p.div`
  position: relative;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 360px;
  }
`,aw=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,iw=p.div`
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
`,rw=p.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,lw=p.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #222;
  margin: 0 0 0.75rem 0;
`,sw=p.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
`,ow=p.div`
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
`,cw=p.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 50%, #fff0f7 100%);
  overflow-x: hidden;
`,uw=p.h2`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: #e10073;
  font-weight: 900;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`,dw=p.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: #666;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 0 1rem;
`,fw=p.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`,Pu=p.div`
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
`,hw=p(Zi)`
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
`,mw=Hd,gw=[{icon:"🏆",title:"Premium-Partnerschaften",hash:"premium",desc:"Maximale Sichtbarkeit als Hauptsponsor, Stadionpartner oder Co-Sponsor. Trikot, Banner, Stadionmagazin und Social Media in einem Paket.",bullets:["Trikot- oder Bannerplatzierung","Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media: bis zu 60 Posts + 100 Stories/Saison","Logo prominent auf der Website"]},{icon:"🚌",title:"Buswerbung",hash:"bus",desc:"Ihr Logo fährt ständig durch Konstanz und die Region. Der Vereinsbus ist für alle Mannschaften im Einsatz – Herren, Damen, Jugend – und an fast jedem Wochenende unterwegs.",bullets:["Im Einsatz für 5+ Mannschaften (Herren, Damen, Jugend)","Sichtbar in 15+ Städten der Liga","Großflächen, Seitenflächen oder Heckwerbung","Mehrjahresrabatt & Kombi mit Online-Präsenz"]},{icon:"📍",title:"Lokale Präsenz",hash:"lokal",desc:"Bandenwerbung, Community-Partnerschaften und Events. Perfekt für lokale Unternehmen, die im Stadion und bei Veranstaltungen sichtbar sein wollen.",bullets:["Banden am Spielfeldrand","Regelmäßige Social-Media-Posts & Stories","Gemeinsame Events mit dem Team","Logo auf der Website"]},{icon:"⚽",title:"Einstieg & Spieltag",hash:"starter",desc:"Ballspenden, Prämien-Modelle und Spielerpatenschaften. Idealer Einstieg ins Sponsoring mit direkter Spieltagspräsenz.",bullets:["Ballspende mit Stadiondurchsage","Erfolgsbasierte Prämien-Modelle","Spielerpatenschaften (diskret)","Instagram-Stories am Spieltag"]}];function pw(){const a=[mt("herren/herren_6"),mt("herren/herren_16"),mt("herren/herren_5"),mt("herren/herren_14")].filter(Boolean),[s,u]=T.useState(0);T.useEffect(()=>{if(a.length<=1)return;const f=setInterval(()=>{u(b=>(b+1)%a.length)},6e3);return()=>clearInterval(f)},[a.length]);const c=f=>{document.getElementById(f)?.scrollIntoView({behavior:"smooth",block:"start"})},d=f=>{const b=encodeURIComponent(`Interesse an Sponsoring: ${f}`),v=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich für den Bereich "${f}" und würde gerne mehr erfahren.

Bitte senden Sie mir weitere Informationen.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Herzliche Grüße
`);return`mailto:${Tj}?subject=${b}&body=${v}`};return r.jsxs(r.Fragment,{children:[r.jsxs(Aj,{children:[a.map((f,b)=>r.jsx(kj,{$bg:f,$active:b===s},b)),r.jsx(Rj,{}),r.jsxs(Mj,{children:[r.jsx(Dj,{children:"Sponsoring, das messbar wirkt"}),r.jsxs(Bj,{children:["In der Winterpause erzielen wir bereits"," ",r.jsx("strong",{children:"250.000 Reichweite in 90 Tagen"}),". Mit Spielbetrieb steigt die Sichtbarkeit konservativ auf"," ",r.jsx("strong",{children:"500.000–800.000 Kontakte pro Saison"})," – ohne Mehrkosten für unsere Partner."]}),r.jsx(Oj,{children:mw.map(f=>r.jsxs(Nj,{children:[r.jsx(Lj,{children:f.value}),r.jsx(Uj,{children:f.label})]},f.label))}),r.jsxs(Hj,{children:[r.jsx(m0,{href:"#kontakt",$primary:!0,onClick:f=>{f.preventDefault(),c("kontakt")},children:"Jetzt Kontakt aufnehmen"}),r.jsx(m0,{href:"#angebot",onClick:f=>{f.preventDefault(),c("angebot")},children:"Angebot ansehen"})]})]})]}),r.jsx($j,{children:r.jsxs(Vj,{children:[r.jsx(g0,{}),r.jsxs(Yj,{children:[Yu.text," ",r.jsx("strong",{children:Yu.highlight})," ",Yu.suffix]}),r.jsx(g0,{})]})}),r.jsx(Mb,{children:r.jsxs(Ku,{children:[r.jsxs(zs,{children:[r.jsx(f0,{children:"Unsere Partner"}),r.jsx(h0,{children:"Starke Marken vertrauen auf unsere Reichweite. Werden Sie Teil dieser Erfolgsgeschichte."})]}),r.jsx(sj,{})]})}),r.jsx(Cj,{id:"angebot",children:r.jsxs(Ku,{children:[r.jsxs(zs,{children:[r.jsx(f0,{children:"Sponsoring-Möglichkeiten"}),r.jsx(h0,{children:"Vier Wege, Ihre Marke beim SC Konstanz-Wollmatingen zu platzieren. Alle Details besprechen wir persönlich."})]}),r.jsx(qj,{children:gw.map(f=>r.jsxs(Kj,{children:[r.jsx(Pj,{children:f.icon}),r.jsx(Qj,{children:f.title}),r.jsx(Zj,{children:f.desc}),r.jsx(Xj,{children:f.bullets.map(b=>r.jsx(Jj,{children:b},b))}),r.jsxs(Ij,{children:[r.jsx(Fj,{href:d(f.title),children:"Jetzt anfragen"}),r.jsx(Wj,{to:`/sponsoring/pakete#${f.hash}`,children:"Details ansehen →"})]})]},f.title))}),r.jsx(ew,{children:r.jsxs(tw,{children:[r.jsxs(nw,{children:[r.jsx(aw,{src:"/verbandsliga-karte.jpg",alt:"Verbandsliga Südbaden – Spielorte und Reichweite"}),r.jsx(iw,{children:"Saison 26/27"})]}),r.jsxs(rw,{children:[r.jsx(lw,{children:"Ihre Reichweite wächst mit"}),r.jsx(sw,{children:"Ob Buswerbung, Trikot oder Bande – Ihre Marke wird in der gesamten Region sichtbar. Mit dem voraussichtlichen Aufstieg in die Verbandsliga spielen wir in 15+ Städten zwischen Freiburg und Konstanz."}),r.jsxs(ow,{children:[r.jsx("strong",{children:"Was das für Sie bedeutet:"})," Mehr Gegner, größere Städte, mehr Medienaufmerksamkeit – Ihre Investition wächst automatisch mit, ohne Mehrkosten."]})]})]})})]})}),r.jsx(cw,{children:r.jsxs(Ku,{children:[r.jsxs(zs,{children:[r.jsx(uw,{children:"CLUB 500"}),r.jsx(dw,{children:"Gemeinsam den Fußball beim SC Konstanz-Wollmatingen stärken – werden Sie Mitglied und fördern Sie unseren Jugend- und Amateurfußball."})]}),r.jsxs(fw,{children:[r.jsx(Pu,{children:"Spendenbescheinigung"}),r.jsx(Pu,{children:"Name auf der Spendentafel"}),r.jsx(Pu,{children:"Jugend- & Amateurfußball"})]}),r.jsx(zs,{children:r.jsx(hw,{to:"/sponsoring/club-500",children:"Jetzt Mitglied werden →"})})]})}),r.jsx(fj,{headline:"Kontakt aufnehmen",description:"Kurze Anfrage genügt – wir erstellen ein passendes Angebot mit klaren Leistungen.",contactInfos:[{icon:"📧",title:"E-Mail",content:St.email,isEmail:!0},{icon:"📍",title:"Adresse",content:St.vollAdresse}]}),r.jsx(eo,{})]})}function bw(){return _p(),!0}const xw=Bv`
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
`,p0=p.div`
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
`,b0=p.h1`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`,x0=p.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`,Ts=p.button`
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
  &:hover { opacity: 0.9; transform: translateY(-1px); }
`,yw=p.div`
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border-left: 4px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  font-size: 0.85rem;
  color: #92400e;
  line-height: 1.5;
  @media print { display: none !important; }
`,vw=p.div`
  padding: 2rem;
  background: #e5e7eb;
  min-height: 100vh;
  @media print { padding: 0; background: none; }
`,_t=p.section`
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
`,It=p.div`
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
`,Ft=p.div`
  position: relative;
  z-index: 1;
  padding: 14mm 18mm;
  display: flex;
  flex-direction: column;
  min-height: 273mm; /* 297 - 2*12 */
`,Wt=p.div`text-align: center; margin-bottom: 6mm;`,en=p.img`height: 20mm;`,tn=p.h1`
  font-size: 28pt;
  font-weight: 900;
  font-style: italic;
  color: #1a1a1a;
  margin: 0 0 2mm;
  letter-spacing: -0.02em;
  line-height: 1.1;
`,Et=p.p`
  font-size: 11pt;
  font-style: italic;
  color: #444;
  margin: 0 0 6mm;
  line-height: 1.6;
`,gt=p.h2`
  font-size: 13pt;
  font-weight: 800;
  color: #1a365d;
  margin: 5mm 0 3mm;
  padding-bottom: 1.5mm;
  border-bottom: 2px solid #1a365d;
`,Oe=p.p`
  font-size: 10.5pt;
  color: #333;
  line-height: 1.6;
  margin: 0 0 3mm;
`,W=p.li`
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
`,jt=p.ul`padding: 0; margin: 3mm 0;`,Va=p.div`
  display: ${a=>a.$hidden?"none":"block"};
  background: #f8fafc;
  border-left: 4px solid #1a365d;
  padding: 3.5mm 5mm;
  margin: 5mm 0;
  font-size: 10.5pt;
  color: #333;
  strong { font-size: 14pt; color: #1a365d; margin-left: 2mm; }
`,ht=p.div`margin-bottom: 4mm;`,tt=p.label`
  display: block;
  font-size: 9pt;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 1.5mm;
`,Lt=p.div`
  border: 1px solid #d1d5db;
  border-radius: 2mm;
  min-height: ${a=>(a.$lines||1)*8}mm;
  background: #fafafa;
`,Sw=p.div`
  font-size: 7pt;
  color: #999;
  font-style: italic;
  margin-top: auto;
  padding-top: 3mm;
`,Gd=p.div`
  border-top: 0.5pt solid #ddd;
  padding-top: 3mm;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  font-size: 7.5pt;
  color: #777;
  line-height: 1.5;
  margin-top: 3mm;
`,Ln=p.div`
  text-align: ${a=>a.$right?"right":a.$center?"center":"left"};
`;function ha(){return r.jsxs(Sw,{children:["Die Preise verstehen sich excl. MwSt. und ohne Druckvorlagen.",r.jsx("br",{}),"Die Druckvorlagen werden von den Inserenten zur Verfügung gestellt."]})}function on(){return r.jsxs(Gd,{children:[r.jsxs(Ln,{children:[r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."}),r.jsx("br",{}),"Schleyerweg 5",r.jsx("br",{}),"78467 Konstanz"]}),r.jsxs(Ln,{$center:!0,children:[St.email,r.jsx("br",{}),"partner.sckw.de"]}),r.jsxs(Ln,{$right:!0,children:["Sparkasse Bodensee",r.jsx("br",{}),"IBAN: DE12 6905 0001 0000 0228 06",r.jsx("br",{}),"BIC: SOLADES1KNZ"]})]})}const y0=mt("herren/herren_0"),Qu=mt("herren/herren_6"),v0=mt("herren/herren_1"),jw=mt("herren/herren_14"),Vs=p.img`
  width: 100%;
  border-radius: 3mm;
  object-fit: cover;
`;function ww(){return r.jsx(_t,{children:r.jsxs("div",{style:{background:"linear-gradient(150deg, #0a1628 0%, #0e2240 15%, #1a3a6a 35%, #2d5a87 50%, #6b1d4a 65%, #a81e45 80%, #c41e3a 90%, #e10073 100%)",height:"100%",minHeight:"297mm",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",position:"relative",overflow:"hidden"},children:[r.jsx("div",{style:{position:"absolute",top:"-60mm",right:"-50mm",width:"200mm",height:"200mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(74,144,226,0.12) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",bottom:"-40mm",left:"-40mm",width:"180mm",height:"180mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(196,30,58,0.10) 0%, transparent 70%)"}}),r.jsx("div",{style:{position:"absolute",top:"40mm",left:"-20mm",width:"140mm",height:"140mm",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)"}}),r.jsx("img",{src:"/sckw-logo-500club.png",alt:"SC Konstanz-Wollmatingen",style:{height:"70mm",objectFit:"contain",position:"relative",zIndex:1,filter:"drop-shadow(0 3mm 10mm rgba(0,0,0,0.35))"}}),r.jsx("h1",{style:{fontSize:"40pt",fontWeight:900,margin:"8mm 0 6mm",letterSpacing:"-0.03em",position:"relative",zIndex:1,textShadow:"0 2px 12px rgba(0,0,0,0.4)"},children:"SPONSORING"}),r.jsxs("p",{style:{fontSize:"15pt",fontWeight:400,opacity:.95,maxWidth:"140mm",lineHeight:1.5,margin:"0 0 12mm",position:"relative",zIndex:1,textShadow:"0 1px 8px rgba(0,0,0,0.3)"},children:["Werden Sie Teil unserer Erfolgsgeschichte.",r.jsx("br",{}),"Sichtbarkeit, die wirkt."]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"5mm",position:"relative",zIndex:1},children:Hd.slice(0,2).map(a=>r.jsxs("div",{style:{background:"rgba(0,0,0,0.35)",borderRadius:"4mm",padding:"5mm 10mm",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,0.15)"},children:[r.jsx("div",{style:{fontSize:"24pt",fontWeight:900},children:a.value}),r.jsx("div",{style:{fontSize:"7pt",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.9},children:a.label})]},a.label))}),r.jsx("div",{style:{position:"absolute",bottom:"12mm",fontSize:"9pt",opacity:.8,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"Saison 2025/26 · partner.sckw.de"})]})})}function Ew(){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"WARUM SCKW?"}),r.jsx(Et,{children:"Ihre Investition in lokale Sichtbarkeit – messbar, nachhaltig, emotional."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"3mm",margin:"4mm 0"},children:Hd.map(a=>r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"4mm 3mm",textAlign:"center",color:"#fff"},children:[r.jsx("div",{style:{fontSize:"16pt",fontWeight:900},children:a.value}),r.jsx("div",{style:{fontSize:"6.5pt",textTransform:"uppercase",opacity:.9},children:a.label})]},a.label))}),r.jsx(gt,{children:"Was Sie bei uns erreichen"}),r.jsxs(jt,{children:[r.jsx(W,{children:"Wiederholte Sichtkontakte bei Ihrer Zielgruppe in Konstanz & Region"}),r.jsx(W,{children:"Emotionale Bindung durch Sport – Ihre Marke wird Teil des Erlebnisses"}),r.jsx(W,{children:"Doppelte Reichweite: Live im Stadion + Digital auf Social Media"}),r.jsx(W,{children:"Messbare Ergebnisse: Wir liefern Reichweiten-Reports auf Wunsch"})]}),r.jsx(gt,{children:"Der Verein auf einen Blick"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsxs(Oe,{children:[r.jsx("strong",{children:"Gegründet:"})," 1912"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Mitglieder:"})," 500+"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Mannschaften:"})," Herren, Damen, Jugend"]})]}),r.jsxs("div",{children:[r.jsxs(Oe,{children:[r.jsx("strong",{children:"Heimspiele:"})," 15+ pro Saison"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Zuschauer:"})," Ø 200 pro Spiel"]}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Instagram:"})," 2.500+ Follower"]})]})]}),y0&&r.jsx(Vs,{src:y0,alt:"Team",style:{height:"55mm",marginTop:"4mm"}}),r.jsx(on,{})]})]})}function _w({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"HAUPTSPONSOR"}),r.jsx(Et,{children:"Der Hauptsponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(jt,{children:[r.jsx(W,{children:"Trikotwerbung auf der Brust"}),r.jsx(W,{children:"Business Club Mitgliedschaft"}),r.jsx(W,{children:"5 Meter Bandenwerbung (Herstellkosten übernimmt der Verein)"}),r.jsx(W,{children:"1/1 seitiges Inserat im SC Magazin"}),r.jsx(W,{children:"10 Saisonkarten"}),r.jsx(W,{children:"Werbeauftritte nach Absprache"}),r.jsx(W,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(W,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(W,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(W,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(W,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(Va,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 15.000€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function zw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"CO-SPONSOR"}),r.jsx(Et,{children:"Der Co-Sponsor ist automatisch Mitglied im Business Club und erhält weitere Leistungen zur optimalen Präsentation des Unternehmens."}),r.jsxs(jt,{children:[r.jsx(W,{children:"Werbung auf den Trainingsanzügen"}),r.jsx(W,{children:"Business Club Mitgliedschaft"}),r.jsx(W,{children:"5 Meter Bandenwerbung (Herstellkosten und die Montage trägt der Verein)"}),r.jsx(W,{children:"1/2 seitiges Inserat im SC Magazin"}),r.jsx(W,{children:"5 Saisonkarten"}),r.jsx(W,{children:"Werbeauftritte nach Absprache"}),r.jsx(W,{children:"Nennung (Logo) auf dem Briefpapier des SCKW"}),r.jsx(W,{children:"Lautsprecherdurchsage während dem Spiel und in der Halbzeit"}),r.jsx(W,{children:"Logo / Namenszug auf den Fahrzeugen"}),r.jsx(W,{children:"Logo / Link auf der Vereinshomepage"}),r.jsx(W,{children:"weitere Möglichkeiten nach Absprache"})]}),r.jsxs(Va,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 9.500€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function Tw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"SILBER-PARTNER"}),r.jsx(Et,{children:"Lokale Sichtbarkeit mit starkem Preis-Leistungs-Verhältnis – ideal für mittelständische Unternehmen in der Region."}),r.jsxs(jt,{children:[r.jsx(W,{children:"1 Bande (5×2 m) am Gelände"}),r.jsx(W,{children:"Social Media: 12 dedizierte Posts/Jahr + 18 Stories/Jahr"}),r.jsx(W,{children:"Werbeplane am Gelände"}),r.jsx(W,{children:"Vereinsplakate + Eventsichtbarkeit"}),r.jsx(W,{children:"Website: Logo auf Startseite"})]}),r.jsxs(Va,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 5.000€ pro Saison"})]}),r.jsx(gt,{style:{marginTop:"8mm"},children:"COMMUNITY-PARTNER"}),r.jsx(Et,{children:"Perfekter Einstieg für lokale Betriebe – Gastronomie, Handwerk, Einzelhandel."}),r.jsxs(jt,{children:[r.jsx(W,{children:"1 Bande (3×1 m, 6 Monate sichtbar)"}),r.jsx(W,{children:"Website: Logo auf der Startseite"}),r.jsx(W,{children:"Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr + 8 Stories/Jahr"}),r.jsx(W,{children:"Optional: Gemeinsame Events (z.B. CL-Abende) mit dem Team in Ihrer Gastronomie"})]}),r.jsxs(Va,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 2.000€ pro Saison"})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function Cw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"BANDENWERBUNG"}),r.jsx(Et,{children:"Fürstenberg-Sportplatz des SC Konstanz-Wollmatingen"}),r.jsx(jt,{children:r.jsx(W,{children:"Montage, Gestaltung & Druck übernimmt der Verein auf Wunsch"})}),r.jsxs(Oe,{children:[r.jsx("strong",{children:"Platzierung:"}),r.jsx("br",{}),"Gemäss Besprechung und Belegungsplan.",r.jsx("br",{}),"Die Banden sind unterteilt in einer Größe von 100 x 90 cm.",r.jsx("br",{}),r.jsx("strong",{children:"Mindestabnahmemenge: 2 Meter"})]}),r.jsxs(Va,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 800€ pro Saison"})]}),v0&&r.jsx(Vs,{src:v0,alt:"Banden",style:{height:"60mm",marginTop:"4mm"}}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function Aw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:'WERBUNG IM „HEIMSPIEL"'}),r.jsx(Et,{children:"Stadionmagazin des SC Konstanz-Wollmatingen"}),r.jsxs(jt,{children:[r.jsx(W,{children:"15 Ausgaben pro Saison"}),r.jsx(W,{children:"ca. 100 Exemplare pro Heimspiel"}),r.jsx(W,{children:"Digitale Version (Social Media & Webseite)"}),r.jsx(W,{children:"1.000 - 1.500 Online Zugriffe je Auflage"}),r.jsx(W,{children:"DIN A4 Stadionmagazin"}),r.jsx(W,{children:"wird ausgelegt in diversen Arztpraxen"})]}),a&&r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4mm",margin:"8mm 0"},children:[{size:"1 SEITE",price:"1.000€",dim:"DIN A4 (297 × 210 mm)"},{size:"1/2 SEITE",price:"500€",dim:"DIN A5 (148 × 210 mm)"},{size:"1/4 SEITE",price:"250€",dim:"DIN A6 (105 × 148 mm)"}].map(s=>r.jsxs("div",{style:{border:"2px solid #1a365d",borderRadius:"3mm",padding:"5mm",textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"14pt",fontWeight:800},children:s.size}),r.jsx("div",{style:{fontSize:"9pt",color:"#666"},children:"FARBE"}),r.jsx("div",{style:{fontSize:"18pt",fontWeight:900,color:"#1a365d",margin:"2mm 0"},children:s.price})]},s.size))}),a&&r.jsxs("div",{style:{fontSize:"10pt",lineHeight:1.7},children:[r.jsx("strong",{children:"Maße"}),r.jsx("br",{}),"1 Seite = DIN A4 (297 x 210 mm)",r.jsx("br",{}),"1/2 Seite = DIN A5 (148 x 210 mm)",r.jsx("br",{}),"1/4 Seite = DIN A6 (105 x 148 mm)"]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function kw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"SPIELTAG-SPONSORING"}),r.jsx(Et,{children:"Das Zielpublikum sind die ZuschauerInnen bei den Heimspielen der 1. Mannschaft. Perfekter Einstieg ins Sponsoring – ab einem einzelnen Spiel möglich."}),r.jsx(gt,{children:"Ballspende"}),r.jsx(Oe,{style:{fontStyle:"italic"},children:"Ihr Unternehmen sponsert den Spielball. Bei jedem Tor, bei der Mannschaftsaufstellung und in der Halbzeitpause wird Ihr Name genannt. Exklusiv: nur ein Ballsponsor pro Spiel."}),r.jsxs(jt,{children:[r.jsx(W,{children:"Stadiondurchsage vor dem Spiel + bei jedem Tor"}),r.jsx(W,{children:"Namensnennung in der Halbzeitpause"}),r.jsx(W,{children:"1 Instagram-Story vor dem Spiel mit Logo"}),r.jsx(W,{children:"Logo/Name auf Website + Erwähnung im SC Magazin"})]}),r.jsxs(Va,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"150€ pro Spiel"})," · 5er-Pack: ",r.jsx("strong",{children:"500€"})," (statt 750€)"]}),r.jsx(gt,{children:"Spielpräsentator"}),r.jsx(Oe,{style:{fontStyle:"italic"},children:"Die Mannschaftsaufstellung und alle Auswechslungen werden im Namen Ihres Unternehmens präsentiert – 15-20 Nennungen pro Spiel. Exklusiv: nur ein Präsentator pro Spiel. Preis variiert je nach Spiel (z.B. Derby)."}),r.jsxs(jt,{children:[r.jsx(W,{children:"Alle Aufstellungen + Auswechslungen im Firmennamen"}),r.jsx(W,{children:"Namentliche Erwähnung im SC Magazin"}),r.jsx(W,{children:"Social Media Erwähnung am Spieltag"})]}),r.jsxs(Va,{$hidden:!a,children:["Beitrag: ",r.jsx("strong",{children:"ab 250€ pro Spiel"})]}),Qu&&r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"3mm"},children:[r.jsx(Vs,{src:Qu,alt:"Action",style:{height:"48mm"}}),r.jsx(Vs,{src:jw||Qu,alt:"Jubel",style:{height:"48mm"}})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function Rw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"BUSWERBUNG"}),r.jsx(Et,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – mobile Werbung für Ihr Unternehmen."}),r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:"3mm",margin:"3mm 0 4mm",display:"block"}}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Fläche"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Größe (ca.)"}),a&&r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left",fontWeight:700},children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[...Ab,...kb].map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.position}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.groesse}),a&&r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:700},children:s.preis})]},s.position))})]}),r.jsx(gt,{children:"Zusatzoptionen"}),r.jsx(jt,{children:Rb.map((s,u)=>r.jsx(W,{children:s},u))}),r.jsx(ha,{}),r.jsx(on,{})]})]})}function Mw({showPrices:a}){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{children:"PRÄMIEN-MODELL"}),r.jsx(Et,{children:"Erfolgsbasiertes Sponsoring – Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),a&&r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10pt",margin:"4mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Leistung"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Starter"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Premium"}),r.jsx("th",{style:{background:"#1a365d",color:"#fff",padding:"2.5mm 3mm",textAlign:"left"},children:"Kombi"})]})}),r.jsxs("tbody",{children:[Cb.map((s,u)=>r.jsxs("tr",{style:{background:u%2===1?"#f8fafc":"transparent"},children:[r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb",fontWeight:600},children:s.label}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.starter}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.premium}),r.jsx("td",{style:{padding:"2mm 3mm",borderBottom:"1px solid #e5e7eb"},children:s.kombi})]},s.label)),r.jsxs("tr",{style:{background:"#f0f9ff"},children:[r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:"Ø Kosten/Saison"}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Li.starter}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Li.premium}),r.jsx("td",{style:{padding:"2mm 3mm",fontWeight:700},children:Li.kombi})]})]})]}),r.jsx(gt,{children:"So funktioniert's"}),r.jsxs(jt,{children:[r.jsx(W,{children:"Sie wählen ein Modell (Starter, Premium oder Kombi)"}),r.jsx(W,{children:"Bei sportlichem Erfolg (Tor, Sieg, Zu-Null) wird die vereinbarte Prämie fällig"}),r.jsx(W,{children:"Stadionansage + Social Media Erwähnung bei jedem Erfolg"}),r.jsx(W,{children:"Niedrig-Risiko: Keine Erfolge = keine Kosten (Starter/Premium)"})]}),r.jsx(gt,{children:"Inkludierte Leistungen"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx(Oe,{children:r.jsx("strong",{children:"Starter:"})}),r.jsxs(jt,{children:[r.jsx(W,{children:"Stadionansage bei Erfolg"}),r.jsx(W,{children:"Logo auf Website"})]})]}),r.jsxs("div",{children:[r.jsx(Oe,{children:r.jsx("strong",{children:"Premium:"})}),r.jsxs(jt,{children:[r.jsx(W,{children:"+ Social Media Post bei Erfolg"}),r.jsx(W,{children:"+ 1 Bande (3×1m) inklusive"})]})]})]}),r.jsx(ha,{}),r.jsx(on,{})]})]})}const S0=mt("herren/herren_jubel_500club");function Dw(){return r.jsxs(_t,{children:[S0&&r.jsx("img",{src:S0,alt:"Mannschaft feiert",style:{width:"100%",height:"65mm",objectFit:"cover",display:"block"}}),r.jsxs("div",{style:{padding:"8mm 18mm 10mm",position:"relative"},children:[r.jsx(Et,{style:{fontSize:"11pt",margin:"0 0 4mm",fontStyle:"normal",lineHeight:1.6,color:"#333"},children:"Die Aussage, dass Amateurfußball ohne Gönner und Sponsoren kaum noch finanzierbar ist, trifft die aktuelle Realität vieler Vereine. Ob Trikots, Trainingsmaterial, Platzpflege oder Schiedsrichterkosten – die laufenden Ausgaben können oft nicht mehr allein durch Mitgliedsbeiträge gedeckt werden."}),r.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 5mm",lineHeight:1.6},children:[r.jsx("strong",{children:"Helfen Sie uns mit dem Beitritt in den CLUB 500."})," Unterstützen Sie unseren Verein und fördern Sie direkt den Jugend‑ und Amateurfußball, Trainingsmaterial, Infrastruktur und die Entwicklung unserer Mannschaften."]}),r.jsx(gt,{children:"Ihre Vorteile"}),r.jsxs(jt,{children:[r.jsxs(W,{children:["Offizielle ",r.jsx("strong",{children:"Spendenbescheinigung"})," (gemeinnütziger Verein)"]}),r.jsxs(W,{children:["Veröffentlichung Ihres ",r.jsx("strong",{children:"Namens oder Firmennamens"})," als Unterstützer"]}),r.jsx(W,{children:"Direkte Förderung des Jugend- und Amateurfußballs in unserer Region"})]}),r.jsx(gt,{children:"Zahlungsoptionen"}),r.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"10.5pt",margin:"2mm 0"},children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"left",fontWeight:800,fontSize:"9pt"},children:"Zahlungsweise"}),r.jsx("th",{style:{borderBottom:"2px solid #1a365d",color:"#1a365d",padding:"2mm 0",textAlign:"right",fontWeight:800,fontSize:"9pt"},children:"Beitrag"})]})}),r.jsx("tbody",{children:[{label:"Vierteljährlich",betrag:"125 €"},{label:"Halbjährlich",betrag:"250 €"},{label:"Jährlich",betrag:"500 €"}].map(a=>r.jsxs("tr",{children:[r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",color:"#444"},children:a.label}),r.jsx("td",{style:{padding:"2.5mm 0",borderBottom:"1px solid #e5e7eb",fontWeight:800,color:"#1a365d",textAlign:"right"},children:a.betrag})]},a.label))})]}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#888",margin:"1mm 0 4mm"},children:"Auch Mehrjahres-Vorauszahlung möglich: 1.000 € (2 Jahre) oder 1.500 € (3 Jahre)."}),r.jsx(gt,{children:"Spendenkonto"}),r.jsxs(Oe,{style:{fontSize:"10.5pt",margin:"0 0 0",lineHeight:1.7},children:[r.jsx("strong",{children:"Sport Club Konstanz‑Wollmatingen e.V."}),r.jsx("br",{}),"IBAN: ",r.jsx("strong",{children:"DE84 6905 0001 0000 0929 99"})," · Sparkasse Bodensee",r.jsx("br",{}),"Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs("div",{style:{marginTop:"6mm",textAlign:"center",borderTop:"1px solid #e5e7eb",paddingTop:"5mm"},children:[r.jsxs(Oe,{style:{margin:0,fontSize:"11pt",fontWeight:800,fontStyle:"italic",color:"#1a365d",lineHeight:1.4},children:["Gehen Sie den gemeinsamen Weg mit uns",r.jsx("br",{}),"in eine erfolgreiche Zukunft!"]}),r.jsxs(Oe,{style:{margin:"2mm 0 0",fontSize:"9pt",color:"#666"},children:["Adel Grimm · Sportlicher Leiter",r.jsx("br",{}),"Tel. +49 152 3384 2436 · grimm@sckw.de"]})]}),r.jsx(on,{})]})]})}function Bw(){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{style:{color:"#1a365d",fontSize:"22pt"},children:"BEITRITTSERKLÄRUNG CLUB 500"}),r.jsxs(Et,{style:{margin:"0 0 4mm"},children:["Bitte ausfüllen und an den Verein übergeben oder per E-Mail an ",St.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(tt,{children:"Vorname:"}),r.jsx(Lt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"Nachname:"}),r.jsx(Lt,{$lines:1})]})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"Firma (optional):"}),r.jsx(Lt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"Straße, Hausnummer:"}),r.jsx(Lt,{$lines:1})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(tt,{children:"PLZ:"}),r.jsx(Lt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"Ort:"}),r.jsx(Lt,{$lines:1})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(tt,{children:"Geb.-Datum:"}),r.jsx(Lt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"Telefon:"}),r.jsx(Lt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"E-Mail:"}),r.jsx(Lt,{$lines:1})]})]}),r.jsx(gt,{style:{marginTop:"4mm"},children:"Zahlungsweise"}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Bitte ankreuzen:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2mm"},children:["125 € vierteljährlich","250 € halbjährlich","500 € jährlich"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm 3mm",textAlign:"center",background:"#fafafa"},children:r.jsxs(tt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),r.jsx(Oe,{style:{fontSize:"8pt",color:"#888",margin:"1mm 0 0"},children:"Auch Mehrjahres-Vorauszahlung möglich: ☐ 1.000 € (2 Jahre) · ☐ 1.500 € (3 Jahre)"}),r.jsx(gt,{style:{marginTop:"4mm"},children:"Wie möchten Sie gewürdigt werden?"}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#555",margin:"0 0 2mm"},children:"Mehrfachauswahl möglich:"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"1.5mm"},children:['Danke-Post auf Instagram ("Danke [Name], dass du Mitglied im CLUB 500 bist!")',"Nennung auf der Spendentafel (Vereinsgelände / Website)","Ich möchte anonym bleiben"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2mm 3mm",background:"#fafafa",fontSize:"9pt"},children:r.jsxs(tt,{style:{marginBottom:0,fontSize:"9pt"},children:["☐ ",a]})},a))}),r.jsxs(ht,{style:{marginTop:"2mm"},children:[r.jsx(tt,{children:"Name/Firma für Veröffentlichung (falls abweichend):"}),r.jsx(Lt,{$lines:1})]}),r.jsx("div",{style:{marginTop:"3mm",background:"#f8fafc",borderRadius:"2mm",padding:"2.5mm 3mm",fontSize:"7.5pt",color:"#666",lineHeight:1.5},children:"Hiermit erkläre ich meinen Beitritt zum SC Konstanz‑Wollmatingen e.V. CLUB 500. Die Mitgliedschaft besteht für 1 Jahr und kann beiderseitig verlängert werden. Der Betrag ist innerhalb 14 Tagen nach Beitrittsdatum auf das unten stehende Konto zu überweisen. Das Mitglied erklärt sich damit einverstanden, dass im Zusammenhang mit der Mitgliedschaft Foto- und Filmaufnahmen und die dazugehörigen Daten für Werbezwecke in den Medien verwendet werden dürfen. Für Ihre Spende wird Ihnen auf Wunsch eine Spendenquittung ausgestellt."}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm",marginTop:"4mm"},children:[r.jsxs(ht,{children:[r.jsx(tt,{children:"Konstanz, den _______________"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}}),r.jsx("div",{style:{fontSize:"7pt",color:"#999",marginTop:"1mm"},children:"Datum"})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"Unterschrift:"}),r.jsx("div",{style:{borderBottom:"1px solid #333",minHeight:"10mm",marginTop:"2mm"}})]})]}),r.jsxs("div",{style:{marginTop:"3mm",fontSize:"8pt",color:"#555",lineHeight:1.5,borderTop:"1px solid #e5e7eb",paddingTop:"2mm"},children:[r.jsx("strong",{children:"Spendenkonto:"})," SC Konstanz‑Wollmatingen e.V. · IBAN: DE84 6905 0001 0000 0929 99 · Sparkasse Bodensee",r.jsx("br",{}),r.jsx("strong",{children:"Kontakt:"})," ",St.email," · Tel. +49 152 3384 2436 · Schleyerweg 5 · 78467 Konstanz"]}),r.jsxs(Gd,{style:{marginTop:"auto"},children:[r.jsx(Ln,{children:r.jsx("strong",{children:"SC Konstanz-Wollmatingen e.V."})}),r.jsx(Ln,{$center:!0,children:"CLUB 500"}),r.jsx(Ln,{$right:!0,children:"partner.sckw.de"})]})]})]})}function Ow(){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{style:{color:"#1a365d"},children:"SO GEHT'S WEITER"}),r.jsx(Et,{children:"In 4 einfachen Schritten zum Sponsoring-Start."}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4mm",margin:"4mm 0"},children:[{n:"1",t:"KONTAKT",d:"Kurzes Gespräch oder E-Mail. Wir melden uns innerhalb von 24h."},{n:"2",t:"BEDARF",d:"Wir klären gemeinsam Ziele, Budget und passende Leistungen."},{n:"3",t:"ANGEBOT",d:"Sie erhalten ein individuelles Angebot mit klaren Leistungen."},{n:"4",t:"START",d:"Nach Zusage: Design, Abstimmung, Launch!"}].map(a=>r.jsxs("div",{style:{background:"#f8fafc",borderRadius:"3mm",padding:"4mm",borderLeft:"4px solid #1a365d"},children:[r.jsx("div",{style:{fontSize:"22pt",fontWeight:900,color:"#1a365d"},children:a.n}),r.jsx("div",{style:{fontSize:"11pt",fontWeight:800,marginBottom:"1mm"},children:a.t}),r.jsx(Oe,{style:{margin:0,fontSize:"9pt"},children:a.d})]},a.n))}),r.jsx(gt,{children:"Kontakt"}),r.jsxs("div",{style:{background:"linear-gradient(135deg, #1a365d, #2d5a87)",borderRadius:"3mm",padding:"5mm",color:"#fff",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4mm"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"E-Mail"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:St.email})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Website"}),r.jsx("div",{style:{fontSize:"13pt",fontWeight:700},children:"partner.sckw.de"})]}),r.jsxs("div",{style:{gridColumn:"1 / -1"},children:[r.jsx("div",{style:{fontSize:"8pt",opacity:.7},children:"Adresse"}),r.jsxs("div",{style:{fontSize:"11pt"},children:[St.adresse.name," · ",St.adresse.strasse," · ",St.adresse.plz," ",St.adresse.ort]})]})]}),r.jsx(gt,{children:"Gesprächsleitfaden"}),r.jsxs("div",{style:{background:"#eff6ff",border:"2px dashed #3b82f6",borderRadius:"3mm",padding:"4mm"},children:[r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "In der Winterpause erreichen wir bereits 250.000 Kontakte – mit Spielbetrieb steigt das auf 500-800k."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Ihr Logo erscheint nicht nur im Stadion, sondern auch in unseren Social Media Posts."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Probieren Sie uns für 150€ aus – wenn es passt, upgraden wir."'}),r.jsx(Oe,{style:{fontSize:"9pt",color:"#1e3a5f",margin:"0 0 1.5mm"},children:'→ "Wann startet Ihre nächste Kampagne? Wir können sofort loslegen."'})]}),r.jsx(on,{})]})]})}function Nw(){return r.jsxs(_t,{children:[r.jsx(It,{}),r.jsxs(Ft,{children:[r.jsx(Wt,{children:r.jsx(en,{src:"/logo.svg"})}),r.jsx(tn,{style:{color:"#1a365d"},children:"GESPRÄCHSNOTIZ"}),r.jsxs(Et,{children:["Interne Dokumentation – nach dem Gespräch ausfüllen und an ",St.email," senden."]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3mm"},children:[r.jsxs(ht,{children:[r.jsx(tt,{children:"Datum:"}),r.jsx(Lt,{$lines:1})]}),r.jsxs(ht,{children:[r.jsx(tt,{children:"Gesprächsführer (Helfer):"}),r.jsx(Lt,{$lines:1})]})]}),X5.map((a,s)=>r.jsxs(ht,{children:[r.jsxs(tt,{children:[a.label,":"]}),r.jsx(Lt,{$lines:a.lines})]},s)),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"3mm",marginTop:"3mm"},children:["Hot Lead","Warm Lead","Später kontaktieren"].map(a=>r.jsx("div",{style:{border:"1px solid #d1d5db",borderRadius:"2mm",padding:"2.5mm"},children:r.jsxs(tt,{style:{marginBottom:0},children:["☐ ",a]})},a))}),r.jsx("div",{style:{marginTop:"4mm",background:"#f0f9ff",borderRadius:"2mm",padding:"3mm"},children:r.jsxs(Oe,{style:{margin:0,fontSize:"8pt"},children:[r.jsx("strong",{children:"Schnellreferenz:"})," ",St.email," · partner.sckw.de ·"," ",St.vollAdresse.replace(/\n/g," · ")]})}),r.jsxs(Gd,{style:{marginTop:"auto"},children:[r.jsx(Ln,{children:r.jsx("strong",{children:"Internes Dokument"})}),r.jsx(Ln,{$center:!0}),r.jsx(Ln,{$right:!0,children:"SC Konstanz-Wollmatingen e.V."})]})]})]})}const Dn=[{id:"cover",label:"Titelseite",group:"broschüre",render:()=>r.jsx(ww,{})},{id:"why",label:"Warum SCKW?",group:"broschüre",render:()=>r.jsx(Ew,{})},{id:"haupt",label:"Hauptsponsor",group:"broschüre",needsPrices:!0,render:a=>r.jsx(_w,{showPrices:a})},{id:"co",label:"Co-Sponsor",group:"broschüre",needsPrices:!0,render:a=>r.jsx(zw,{showPrices:a})},{id:"silber",label:"Silber + Community",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Tw,{showPrices:a})},{id:"banden",label:"Bandenwerbung",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Cw,{showPrices:a})},{id:"magazin",label:"Stadionmagazin",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Aw,{showPrices:a})},{id:"spieltag",label:"Spieltag-Sponsoring",group:"broschüre",needsPrices:!0,render:a=>r.jsx(kw,{showPrices:a})},{id:"bus",label:"Buswerbung",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Rw,{showPrices:a})},{id:"praemien",label:"Prämienmodell",group:"broschüre",needsPrices:!0,render:a=>r.jsx(Mw,{showPrices:a})},{id:"club500",label:"CLUB 500",group:"community",render:()=>r.jsx(Dw,{})},{id:"club500form",label:"CLUB 500 Anmeldung",group:"community",render:()=>r.jsx(Bw,{})},{id:"steps",label:"So geht's weiter",group:"helfer",render:()=>r.jsx(Ow,{})},{id:"lead",label:"Gesprächsnotiz",group:"helfer",render:()=>r.jsx(Nw,{})}],Lw=p.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  @media print { display: none !important; }
`,Uw=p.h2`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;
`,Hw=p.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 1.5rem;
  line-height: 1.5;
`,Gw=p.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
`,$w=p.button`
  background: ${a=>a.$on?"#1a365d":"#f1f5f9"};
  color: ${a=>a.$on?"#fff":"#475569"};
  border: 2px solid ${a=>a.$on?"#1a365d":"#cbd5e1"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { opacity: 0.85; }
`,Zu=p.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #334155;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
`,Xu=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.5rem;
`,Ju=p.label`
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
  &:hover { border-color: #94a3b8; }

  input { accent-color: #1a365d; width: 16px; height: 16px; cursor: pointer; }
`,Vw=p.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`,Da=p.button`
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
`,Yw=p.button`
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
`,qw=p.span`
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
`;function Kw(){const a=bw(),[s]=_p(),u=s.get("preset"),c=s.get("view"),d=()=>u==="club500"?new Set(["club500","club500form"]):new Set(Dn.filter($=>$.group==="broschüre").map($=>$.id)),[f,b]=T.useState(!0),[v,h]=T.useState(d),[m,y]=T.useState(c==="preview"?"preview":"dashboard");if(!a)return r.jsx(bd,{to:"/",replace:!0});const S=$=>{h(he=>{const oe=new Set(he);return oe.has($)?oe.delete($):oe.add($),oe})},w=()=>h(new Set(Dn.map($=>$.id))),M=()=>h(new Set),A=()=>h(new Set(Dn.filter($=>$.group==="broschüre").map($=>$.id))),N=()=>h(new Set(Dn.map($=>$.id))),G=()=>h(new Set(["cover","why","spieltag","banden"])),O=()=>h(new Set(["cover","why","haupt","co","silber"])),P=()=>h(new Set(["club500","club500form"])),k=Dn.filter($=>v.has($.id)),K=Dn.filter($=>$.group==="broschüre"),U=Dn.filter($=>$.group==="community"),I=Dn.filter($=>$.group==="helfer");return m==="preview"?r.jsxs(r.Fragment,{children:[r.jsx(xw,{}),r.jsxs(p0,{children:[r.jsxs(b0,{children:["Vorschau · ",k.length," Seiten"]}),r.jsxs(x0,{children:[r.jsx(Ts,{$active:f,onClick:()=>b($=>!$),children:f?"Preise ✓":"Preise ✗"}),r.jsx(Ts,{onClick:()=>y("dashboard"),children:"Zurück"}),r.jsx(Ts,{$primary:!0,onClick:()=>window.print(),children:"Drucken / PDF"})]})]}),r.jsxs(yw,{children:[r.jsx("strong",{children:"PDF erstellen:"}),' "Drucken / PDF" klicken, "Als PDF speichern" wählen.',r.jsx("strong",{children:" Hintergrundgrafiken aktivieren"}),". Format: A4, Ränder: Keine."]}),r.jsx(vw,{children:k.map($=>r.jsx("div",{children:$.render(f)},$.id))})]}):r.jsxs(r.Fragment,{children:[r.jsxs(p0,{children:[r.jsx(b0,{children:"Sponsoring-Kit · SCKW"}),r.jsx(x0,{children:r.jsx(Ts,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Link kopieren"})})]}),r.jsxs(Lw,{children:[r.jsx(Uw,{children:"Sponsoring-Kit zusammenstellen"}),r.jsx(Hw,{children:"Wählen Sie die Seiten, die Sie drucken oder als PDF exportieren möchten. Perfekt für individuelle Gespräche – stellen Sie das passende Paket zusammen."}),r.jsxs(Gw,{children:[r.jsx($w,{$on:f,onClick:()=>b($=>!$),children:f?"Preise anzeigen ✓":"Preise ausgeblendet ✗"}),r.jsxs(qw,{children:[v.size," von ",Dn.length," Seiten ausgewählt"]})]}),r.jsxs(Vw,{children:[r.jsx(Da,{onClick:w,children:"Alles"}),r.jsx(Da,{onClick:A,children:"Broschüre komplett"}),r.jsx(Da,{onClick:N,children:"Komplett-Kit (+ Helfer)"}),r.jsx(Da,{onClick:O,children:"Nur Premium-Pakete"}),r.jsx(Da,{onClick:G,children:"Starter-Paket"}),r.jsx(Da,{onClick:P,children:"CLUB 500"}),r.jsx(Da,{onClick:M,children:"Keine"})]}),r.jsx(Zu,{children:"Broschüre"}),r.jsx(Xu,{children:K.map($=>r.jsxs(Ju,{$checked:v.has($.id),children:[r.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>S($.id)}),$.label]},$.id))}),r.jsx(Zu,{children:"Community / CLUB 500"}),r.jsx(Xu,{children:U.map($=>r.jsxs(Ju,{$checked:v.has($.id),children:[r.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>S($.id)}),$.label]},$.id))}),r.jsx(Zu,{children:"Helfer-Anhang"}),r.jsx(Xu,{children:I.map($=>r.jsxs(Ju,{$checked:v.has($.id),children:[r.jsx("input",{type:"checkbox",checked:v.has($.id),onChange:()=>S($.id)}),$.label]},$.id))}),r.jsxs(Yw,{disabled:v.size===0,onClick:()=>y("preview"),children:["Vorschau & Drucken (",v.size," Seiten)"]})]})]})}function Pw(a,s){if(a.match(/^[a-z]+:\/\//i))return a;if(a.match(/^\/\//))return window.location.protocol+a;if(a.match(/^[a-z]+:/i))return a;const u=document.implementation.createHTMLDocument(),c=u.createElement("base"),d=u.createElement("a");return u.head.appendChild(c),u.body.appendChild(d),s&&(c.href=s),d.href=a,d.href}const Qw=(()=>{let a=0;const s=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(a+=1,`u${s()}${a}`)})();function fa(a){const s=[];for(let u=0,c=a.length;u<c;u++)s.push(a[u]);return s}let Mi=null;function Db(a={}){return Mi||(a.includeStyleProperties?(Mi=a.includeStyleProperties,Mi):(Mi=fa(window.getComputedStyle(document.documentElement)),Mi))}function Ys(a,s){const c=(a.ownerDocument.defaultView||window).getComputedStyle(a).getPropertyValue(s);return c?parseFloat(c.replace("px","")):0}function Zw(a){const s=Ys(a,"border-left-width"),u=Ys(a,"border-right-width");return a.clientWidth+s+u}function Xw(a){const s=Ys(a,"border-top-width"),u=Ys(a,"border-bottom-width");return a.clientHeight+s+u}function Bb(a,s={}){const u=s.width||Zw(a),c=s.height||Xw(a);return{width:u,height:c}}function Jw(){let a,s;try{s=process}catch{}const u=s&&s.env?s.env.devicePixelRatio:null;return u&&(a=parseInt(u,10),Number.isNaN(a)&&(a=1)),a||window.devicePixelRatio||1}const Ot=16384;function Iw(a){(a.width>Ot||a.height>Ot)&&(a.width>Ot&&a.height>Ot?a.width>a.height?(a.height*=Ot/a.width,a.width=Ot):(a.width*=Ot/a.height,a.height=Ot):a.width>Ot?(a.height*=Ot/a.width,a.width=Ot):(a.width*=Ot/a.height,a.height=Ot))}function qs(a){return new Promise((s,u)=>{const c=new Image;c.onload=()=>{c.decode().then(()=>{requestAnimationFrame(()=>s(c))})},c.onerror=u,c.crossOrigin="anonymous",c.decoding="async",c.src=a})}async function Fw(a){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(a)).then(encodeURIComponent).then(s=>`data:image/svg+xml;charset=utf-8,${s}`)}async function Ww(a,s,u){const c="http://www.w3.org/2000/svg",d=document.createElementNS(c,"svg"),f=document.createElementNS(c,"foreignObject");return d.setAttribute("width",`${s}`),d.setAttribute("height",`${u}`),d.setAttribute("viewBox",`0 0 ${s} ${u}`),f.setAttribute("width","100%"),f.setAttribute("height","100%"),f.setAttribute("x","0"),f.setAttribute("y","0"),f.setAttribute("externalResourcesRequired","true"),d.appendChild(f),f.appendChild(a),Fw(d)}const wt=(a,s)=>{if(a instanceof s)return!0;const u=Object.getPrototypeOf(a);return u===null?!1:u.constructor.name===s.name||wt(u,s)};function e3(a){const s=a.getPropertyValue("content");return`${a.cssText} content: '${s.replace(/'|"/g,"")}';`}function t3(a,s){return Db(s).map(u=>{const c=a.getPropertyValue(u),d=a.getPropertyPriority(u);return`${u}: ${c}${d?" !important":""};`}).join(" ")}function n3(a,s,u,c){const d=`.${a}:${s}`,f=u.cssText?e3(u):t3(u,c);return document.createTextNode(`${d}{${f}}`)}function j0(a,s,u,c){const d=window.getComputedStyle(a,u),f=d.getPropertyValue("content");if(f===""||f==="none")return;const b=Qw();try{s.className=`${s.className} ${b}`}catch{return}const v=document.createElement("style");v.appendChild(n3(b,u,d,c)),s.appendChild(v)}function a3(a,s,u){j0(a,s,":before",u),j0(a,s,":after",u)}const w0="application/font-woff",E0="image/jpeg",i3={woff:w0,woff2:w0,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:E0,jpeg:E0,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function r3(a){const s=/\.([^./]*?)$/g.exec(a);return s?s[1]:""}function $d(a){const s=r3(a).toLowerCase();return i3[s]||""}function l3(a){return a.split(/,/)[1]}function vd(a){return a.search(/^(data:)/)!==-1}function s3(a,s){return`data:${s};base64,${a}`}async function Ob(a,s,u){const c=await fetch(a,s);if(c.status===404)throw new Error(`Resource "${c.url}" not found`);const d=await c.blob();return new Promise((f,b)=>{const v=new FileReader;v.onerror=b,v.onloadend=()=>{try{f(u({res:c,result:v.result}))}catch(h){b(h)}},v.readAsDataURL(d)})}const Iu={};function o3(a,s,u){let c=a.replace(/\?.*/,"");return u&&(c=a),/ttf|otf|eot|woff2?/i.test(c)&&(c=c.replace(/.*\//,"")),s?`[${s}]${c}`:c}async function Vd(a,s,u){const c=o3(a,s,u.includeQueryParams);if(Iu[c]!=null)return Iu[c];u.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+new Date().getTime());let d;try{const f=await Ob(a,u.fetchRequestInit,({res:b,result:v})=>(s||(s=b.headers.get("Content-Type")||""),l3(v)));d=s3(f,s)}catch(f){d=u.imagePlaceholder||"";let b=`Failed to fetch resource: ${a}`;f&&(b=typeof f=="string"?f:f.message),b&&console.warn(b)}return Iu[c]=d,d}async function c3(a){const s=a.toDataURL();return s==="data:,"?a.cloneNode(!1):qs(s)}async function u3(a,s){if(a.currentSrc){const f=document.createElement("canvas"),b=f.getContext("2d");f.width=a.clientWidth,f.height=a.clientHeight,b?.drawImage(a,0,0,f.width,f.height);const v=f.toDataURL();return qs(v)}const u=a.poster,c=$d(u),d=await Vd(u,c,s);return qs(d)}async function d3(a,s){var u;try{if(!((u=a?.contentDocument)===null||u===void 0)&&u.body)return await to(a.contentDocument.body,s,!0)}catch{}return a.cloneNode(!1)}async function f3(a,s){return wt(a,HTMLCanvasElement)?c3(a):wt(a,HTMLVideoElement)?u3(a,s):wt(a,HTMLIFrameElement)?d3(a,s):a.cloneNode(Nb(a))}const h3=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SLOT",Nb=a=>a.tagName!=null&&a.tagName.toUpperCase()==="SVG";async function m3(a,s,u){var c,d;if(Nb(s))return s;let f=[];return h3(a)&&a.assignedNodes?f=fa(a.assignedNodes()):wt(a,HTMLIFrameElement)&&(!((c=a.contentDocument)===null||c===void 0)&&c.body)?f=fa(a.contentDocument.body.childNodes):f=fa(((d=a.shadowRoot)!==null&&d!==void 0?d:a).childNodes),f.length===0||wt(a,HTMLVideoElement)||await f.reduce((b,v)=>b.then(()=>to(v,u)).then(h=>{h&&s.appendChild(h)}),Promise.resolve()),s}function g3(a,s,u){const c=s.style;if(!c)return;const d=window.getComputedStyle(a);d.cssText?(c.cssText=d.cssText,c.transformOrigin=d.transformOrigin):Db(u).forEach(f=>{let b=d.getPropertyValue(f);f==="font-size"&&b.endsWith("px")&&(b=`${Math.floor(parseFloat(b.substring(0,b.length-2)))-.1}px`),wt(a,HTMLIFrameElement)&&f==="display"&&b==="inline"&&(b="block"),f==="d"&&s.getAttribute("d")&&(b=`path(${s.getAttribute("d")})`),c.setProperty(f,b,d.getPropertyPriority(f))})}function p3(a,s){wt(a,HTMLTextAreaElement)&&(s.innerHTML=a.value),wt(a,HTMLInputElement)&&s.setAttribute("value",a.value)}function b3(a,s){if(wt(a,HTMLSelectElement)){const u=s,c=Array.from(u.children).find(d=>a.value===d.getAttribute("value"));c&&c.setAttribute("selected","")}}function x3(a,s,u){return wt(s,Element)&&(g3(a,s,u),a3(a,s,u),p3(a,s),b3(a,s)),s}async function y3(a,s){const u=a.querySelectorAll?a.querySelectorAll("use"):[];if(u.length===0)return a;const c={};for(let f=0;f<u.length;f++){const v=u[f].getAttribute("xlink:href");if(v){const h=a.querySelector(v),m=document.querySelector(v);!h&&m&&!c[v]&&(c[v]=await to(m,s,!0))}}const d=Object.values(c);if(d.length){const f="http://www.w3.org/1999/xhtml",b=document.createElementNS(f,"svg");b.setAttribute("xmlns",f),b.style.position="absolute",b.style.width="0",b.style.height="0",b.style.overflow="hidden",b.style.display="none";const v=document.createElementNS(f,"defs");b.appendChild(v);for(let h=0;h<d.length;h++)v.appendChild(d[h]);a.appendChild(b)}return a}async function to(a,s,u){return!u&&s.filter&&!s.filter(a)?null:Promise.resolve(a).then(c=>f3(c,s)).then(c=>m3(a,c,s)).then(c=>x3(a,c,s)).then(c=>y3(c,s))}const Lb=/url\((['"]?)([^'"]+?)\1\)/g,v3=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,S3=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function j3(a){const s=a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")}function w3(a){const s=[];return a.replace(Lb,(u,c,d)=>(s.push(d),u)),s.filter(u=>!vd(u))}async function E3(a,s,u,c,d){try{const f=u?Pw(s,u):s,b=$d(s);let v;return d||(v=await Vd(f,b,c)),a.replace(j3(s),`$1${v}$3`)}catch{}return a}function _3(a,{preferredFontFormat:s}){return s?a.replace(S3,u=>{for(;;){const[c,,d]=v3.exec(u)||[];if(!d)return"";if(d===s)return`src: ${c};`}}):a}function Ub(a){return a.search(Lb)!==-1}async function Hb(a,s,u){if(!Ub(a))return a;const c=_3(a,u);return w3(c).reduce((f,b)=>f.then(v=>E3(v,b,s,u)),Promise.resolve(c))}async function Di(a,s,u){var c;const d=(c=s.style)===null||c===void 0?void 0:c.getPropertyValue(a);if(d){const f=await Hb(d,null,u);return s.style.setProperty(a,f,s.style.getPropertyPriority(a)),!0}return!1}async function z3(a,s){await Di("background",a,s)||await Di("background-image",a,s),await Di("mask",a,s)||await Di("-webkit-mask",a,s)||await Di("mask-image",a,s)||await Di("-webkit-mask-image",a,s)}async function T3(a,s){const u=wt(a,HTMLImageElement);if(!(u&&!vd(a.src))&&!(wt(a,SVGImageElement)&&!vd(a.href.baseVal)))return;const c=u?a.src:a.href.baseVal,d=await Vd(c,$d(c),s);await new Promise((f,b)=>{a.onload=f,a.onerror=s.onImageErrorHandler?(...h)=>{try{f(s.onImageErrorHandler(...h))}catch(m){b(m)}}:b;const v=a;v.decode&&(v.decode=f),v.loading==="lazy"&&(v.loading="eager"),u?(a.srcset="",a.src=d):a.href.baseVal=d})}async function C3(a,s){const c=fa(a.childNodes).map(d=>Gb(d,s));await Promise.all(c).then(()=>a)}async function Gb(a,s){wt(a,Element)&&(await z3(a,s),await T3(a,s),await C3(a,s))}function A3(a,s){const{style:u}=a;s.backgroundColor&&(u.backgroundColor=s.backgroundColor),s.width&&(u.width=`${s.width}px`),s.height&&(u.height=`${s.height}px`);const c=s.style;return c!=null&&Object.keys(c).forEach(d=>{u[d]=c[d]}),a}const _0={};async function z0(a){let s=_0[a];if(s!=null)return s;const c=await(await fetch(a)).text();return s={url:a,cssText:c},_0[a]=s,s}async function T0(a,s){let u=a.cssText;const c=/url\(["']?([^"')]+)["']?\)/g,f=(u.match(/url\([^)]+\)/g)||[]).map(async b=>{let v=b.replace(c,"$1");return v.startsWith("https://")||(v=new URL(v,a.url).href),Ob(v,s.fetchRequestInit,({result:h})=>(u=u.replace(b,`url(${h})`),[b,h]))});return Promise.all(f).then(()=>u)}function C0(a){if(a==null)return[];const s=[],u=/(\/\*[\s\S]*?\*\/)/gi;let c=a.replace(u,"");const d=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=d.exec(c);if(h===null)break;s.push(h[0])}c=c.replace(d,"");const f=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,b="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",v=new RegExp(b,"gi");for(;;){let h=f.exec(c);if(h===null){if(h=v.exec(c),h===null)break;f.lastIndex=v.lastIndex}else v.lastIndex=f.lastIndex;s.push(h[0])}return s}async function k3(a,s){const u=[],c=[];return a.forEach(d=>{if("cssRules"in d)try{fa(d.cssRules||[]).forEach((f,b)=>{if(f.type===CSSRule.IMPORT_RULE){let v=b+1;const h=f.href,m=z0(h).then(y=>T0(y,s)).then(y=>C0(y).forEach(S=>{try{d.insertRule(S,S.startsWith("@import")?v+=1:d.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:S,error:w})}})).catch(y=>{console.error("Error loading remote css",y.toString())});c.push(m)}})}catch(f){const b=a.find(v=>v.href==null)||document.styleSheets[0];d.href!=null&&c.push(z0(d.href).then(v=>T0(v,s)).then(v=>C0(v).forEach(h=>{b.insertRule(h,b.cssRules.length)})).catch(v=>{console.error("Error loading remote stylesheet",v)})),console.error("Error inlining remote css file",f)}}),Promise.all(c).then(()=>(a.forEach(d=>{if("cssRules"in d)try{fa(d.cssRules||[]).forEach(f=>{u.push(f)})}catch(f){console.error(`Error while reading CSS rules from ${d.href}`,f)}}),u))}function R3(a){return a.filter(s=>s.type===CSSRule.FONT_FACE_RULE).filter(s=>Ub(s.style.getPropertyValue("src")))}async function M3(a,s){if(a.ownerDocument==null)throw new Error("Provided element is not within a Document");const u=fa(a.ownerDocument.styleSheets),c=await k3(u,s);return R3(c)}function $b(a){return a.trim().replace(/["']/g,"")}function D3(a){const s=new Set;function u(c){(c.style.fontFamily||getComputedStyle(c).fontFamily).split(",").forEach(f=>{s.add($b(f))}),Array.from(c.children).forEach(f=>{f instanceof HTMLElement&&u(f)})}return u(a),s}async function B3(a,s){const u=await M3(a,s),c=D3(a);return(await Promise.all(u.filter(f=>c.has($b(f.style.fontFamily))).map(f=>{const b=f.parentStyleSheet?f.parentStyleSheet.href:null;return Hb(f.cssText,b,s)}))).join(`
`)}async function O3(a,s){const u=s.fontEmbedCSS!=null?s.fontEmbedCSS:s.skipFonts?null:await B3(a,s);if(u){const c=document.createElement("style"),d=document.createTextNode(u);c.appendChild(d),a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)}}async function N3(a,s={}){const{width:u,height:c}=Bb(a,s),d=await to(a,s,!0);return await O3(d,s),await Gb(d,s),A3(d,s),await Ww(d,u,c)}async function L3(a,s={}){const{width:u,height:c}=Bb(a,s),d=await N3(a,s),f=await qs(d),b=document.createElement("canvas"),v=b.getContext("2d"),h=s.pixelRatio||Jw(),m=s.canvasWidth||u,y=s.canvasHeight||c;return b.width=m*h,b.height=y*h,s.skipAutoScale||Iw(b),b.style.width=`${m}`,b.style.height=`${y}`,s.backgroundColor&&(v.fillStyle=s.backgroundColor,v.fillRect(0,0,b.width,b.height)),v.drawImage(f,0,0,b.width,b.height),b}async function U3(a,s={}){return(await L3(a,s)).toDataURL()}const Jr=[{id:"vereinsbus",label:"Vereinsbus",image:"/sckw-bud-exclusive-platzhalter.png",zones:[{id:"seite-gross-oben",label:"Seitenfläche groß",x:42.5,y:14.6,width:30.3,height:9.8},{id:"heck",label:"Heckfläche",x:5.9,y:70.4,width:15.2,height:7.9},{id:"seite-gross-unten",label:"Seitenfläche groß",x:43.5,y:71.6,width:27.1,height:8.3}]}],H3=p.div`
  min-height: 100vh;
  background: #f5f6f8;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,G3=p.div`
  max-width: 1200px;
  margin: 0 auto;
`,$3=p.div`
  text-align: center;
  margin-bottom: 2rem;
`,V3=p.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1a365d;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Y3=p.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`,q3=p.select`
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
`,K3=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,P3=p.div`
  flex: 1;
  min-width: 0;
`,Q3=p.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #111;
`,Z3=p.img`
  width: 100%;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`,X3=p.div`
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
`,J3=p.img`
  width: ${a=>a.$scale*100}%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  transform: translate(${a=>a.$offsetX}%, ${a=>a.$offsetY}%);
`,I3=p.div`
  width: 100%;

  @media (min-width: 900px) {
    width: 300px;
    flex-shrink: 0;
  }
`,F3=p.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a365d;
  margin: 0 0 1rem;
`,W3=p.div`
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
`,e6=p.div`
  font-weight: 700;
  font-size: 0.95rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
`,t6=p.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,n6=p.label`
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
`,a6=p.button`
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
`,i6=p.img`
  width: 48px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-left: auto;
`,r6=p.input`
  display: none;
`,l6=p.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.25rem;
`,Fu=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,Wu=p.span`
  font-size: 0.8rem;
  color: #666;
  white-space: nowrap;
  min-width: 38px;
  text-align: right;
`,ed=p.input`
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
`,s6=p.button`
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
`,o6=p.button`
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
`;function c6(){const[a,s]=T.useState(Jr[0].id),[u,c]=T.useState(null),[d,f]=T.useState([]),[b,v]=T.useState(!1),h=T.useRef({}),m=T.useRef(null),y=Jr.find(k=>k.id===a)??Jr[0],S=k=>d.find(K=>K.zoneId===k),w=T.useCallback((k,K)=>{if(!K)return;const U=new FileReader;U.onload=I=>{const $=I.target?.result;f(he=>[...he.filter(oe=>oe.zoneId!==k),{zoneId:k,dataUrl:$,scale:1,offsetX:0,offsetY:0}])},U.readAsDataURL(K)},[]),M=T.useCallback((k,K)=>{f(U=>U.map(I=>I.zoneId===k?{...I,scale:K}:I))},[]),A=T.useCallback((k,K,U)=>{f(I=>I.map($=>$.zoneId===k?{...$,offsetX:K,offsetY:U}:$))},[]),N=T.useCallback(k=>{f(K=>K.filter(U=>U.zoneId!==k))},[]),G=T.useCallback(()=>{f([]),c(null)},[]),O=T.useCallback(async()=>{if(m.current){v(!0);try{const k=await U3(m.current,{pixelRatio:2,cacheBust:!0}),K=document.createElement("a");K.download=`${y.label}-mockup.png`,K.href=k,K.click()}finally{v(!1)}}},[y.label]),P=k=>{c(k.id),S(k.id)||h.current[k.id]?.click()};return r.jsx(H3,{children:r.jsxs(G3,{children:[r.jsxs($3,{children:[r.jsx(V3,{children:"Mockup Generator"}),r.jsx(Y3,{children:"Laden Sie Ihr Logo hoch und sehen Sie live, wie es auf unseren Werbeflächen aussieht."})]}),Jr.length>1&&r.jsx(q3,{value:a,onChange:k=>{s(k.target.value),f([]),c(null)},children:Jr.map(k=>r.jsx("option",{value:k.id,children:k.label},k.id))}),r.jsxs(K3,{children:[r.jsx(P3,{children:r.jsxs(Q3,{ref:m,children:[r.jsx(Z3,{src:y.image,alt:y.label,draggable:!1}),y.zones.map(k=>{const K=S(k.id);return r.jsx(X3,{$active:u===k.id,$hasLogo:!!K,style:{left:`${k.x}%`,top:`${k.y}%`,width:`${k.width}%`,height:`${k.height}%`},onClick:()=>P(k),onDragOver:U=>{U.preventDefault(),c(k.id)},onDrop:U=>{U.preventDefault();const I=U.dataTransfer.files?.[0];w(k.id,I)},children:K&&r.jsx(J3,{src:K.dataUrl,alt:"Logo",draggable:!1,$scale:K.scale,$offsetX:K.offsetX,$offsetY:K.offsetY})},k.id)})]})}),r.jsxs(I3,{children:[r.jsx(F3,{children:"Werbeflächen"}),y.zones.map(k=>{const K=S(k.id);return r.jsxs(W3,{$active:u===k.id,onClick:()=>c(k.id),children:[r.jsx(e6,{children:k.label}),r.jsxs(t6,{children:[r.jsx(n6,{htmlFor:`file-${k.id}`,children:K?"Ändern":"Logo hochladen"}),r.jsx(r6,{id:`file-${k.id}`,ref:U=>{h.current[k.id]=U},type:"file",accept:"image/*",onChange:U=>w(k.id,U.target.files?.[0])}),K&&r.jsx(a6,{onClick:U=>{U.stopPropagation(),N(k.id)},children:"Entfernen"}),K&&r.jsx(i6,{src:K.dataUrl,alt:"Vorschau"})]}),K&&r.jsxs(r.Fragment,{children:[r.jsxs(Fu,{children:[r.jsxs(Wu,{children:[Math.round(K.scale*100),"%"]}),r.jsx(ed,{type:"range",min:"0.3",max:"3",step:"0.05",value:K.scale,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),M(k.id,parseFloat(U.target.value))}})]}),r.jsxs(Fu,{children:[r.jsx(Wu,{children:"X"}),r.jsx(ed,{type:"range",min:"-100",max:"100",step:"1",value:K.offsetX,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),A(k.id,parseFloat(U.target.value),K.offsetY)}})]}),r.jsxs(Fu,{children:[r.jsx(Wu,{children:"Y"}),r.jsx(ed,{type:"range",min:"-100",max:"100",step:"1",value:K.offsetY,onClick:U=>U.stopPropagation(),onChange:U=>{U.stopPropagation(),A(k.id,K.offsetX,parseFloat(U.target.value))}})]})]}),!K&&r.jsx(l6,{children:"Klicken oder Bild hierher ziehen"})]},k.id)}),d.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(o6,{onClick:O,disabled:b,children:b?"Wird erstellt...":"Bild herunterladen"}),r.jsx(s6,{onClick:G,children:"Alle Logos entfernen"})]})]})]})]})})}var u6=Object.defineProperty,Ks=Object.getOwnPropertySymbols,Vb=Object.prototype.hasOwnProperty,Yb=Object.prototype.propertyIsEnumerable,A0=(a,s,u)=>s in a?u6(a,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[s]=u,Sd=(a,s)=>{for(var u in s||(s={}))Vb.call(s,u)&&A0(a,u,s[u]);if(Ks)for(var u of Ks(s))Yb.call(s,u)&&A0(a,u,s[u]);return a},jd=(a,s)=>{var u={};for(var c in a)Vb.call(a,c)&&s.indexOf(c)<0&&(u[c]=a[c]);if(a!=null&&Ks)for(var c of Ks(a))s.indexOf(c)<0&&Yb.call(a,c)&&(u[c]=a[c]);return u};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ya;(a=>{const s=class be{constructor(h,m,y,S){if(this.version=h,this.errorCorrectionLevel=m,this.modules=[],this.isFunction=[],h<be.MIN_VERSION||h>be.MAX_VERSION)throw new RangeError("Version value out of range");if(S<-1||S>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let w=[];for(let A=0;A<this.size;A++)w.push(!1);for(let A=0;A<this.size;A++)this.modules.push(w.slice()),this.isFunction.push(w.slice());this.drawFunctionPatterns();const M=this.addEccAndInterleave(y);if(this.drawCodewords(M),S==-1){let A=1e9;for(let N=0;N<8;N++){this.applyMask(N),this.drawFormatBits(N);const G=this.getPenaltyScore();G<A&&(S=N,A=G),this.applyMask(N)}}d(0<=S&&S<=7),this.mask=S,this.applyMask(S),this.drawFormatBits(S),this.isFunction=[]}static encodeText(h,m){const y=a.QrSegment.makeSegments(h);return be.encodeSegments(y,m)}static encodeBinary(h,m){const y=a.QrSegment.makeBytes(h);return be.encodeSegments([y],m)}static encodeSegments(h,m,y=1,S=40,w=-1,M=!0){if(!(be.MIN_VERSION<=y&&y<=S&&S<=be.MAX_VERSION)||w<-1||w>7)throw new RangeError("Invalid value");let A,N;for(A=y;;A++){const k=be.getNumDataCodewords(A,m)*8,K=b.getTotalBits(h,A);if(K<=k){N=K;break}if(A>=S)throw new RangeError("Data too long")}for(const k of[be.Ecc.MEDIUM,be.Ecc.QUARTILE,be.Ecc.HIGH])M&&N<=be.getNumDataCodewords(A,k)*8&&(m=k);let G=[];for(const k of h){u(k.mode.modeBits,4,G),u(k.numChars,k.mode.numCharCountBits(A),G);for(const K of k.getData())G.push(K)}d(G.length==N);const O=be.getNumDataCodewords(A,m)*8;d(G.length<=O),u(0,Math.min(4,O-G.length),G),u(0,(8-G.length%8)%8,G),d(G.length%8==0);for(let k=236;G.length<O;k^=253)u(k,8,G);let P=[];for(;P.length*8<G.length;)P.push(0);return G.forEach((k,K)=>P[K>>>3]|=k<<7-(K&7)),new be(A,m,P,w)}getModule(h,m){return 0<=h&&h<this.size&&0<=m&&m<this.size&&this.modules[m][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let y=0;y<this.size;y++)this.setFunctionModule(6,y,y%2==0),this.setFunctionModule(y,6,y%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),m=h.length;for(let y=0;y<m;y++)for(let S=0;S<m;S++)y==0&&S==0||y==0&&S==m-1||y==m-1&&S==0||this.drawAlignmentPattern(h[y],h[S]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const m=this.errorCorrectionLevel.formatBits<<3|h;let y=m;for(let w=0;w<10;w++)y=y<<1^(y>>>9)*1335;const S=(m<<10|y)^21522;d(S>>>15==0);for(let w=0;w<=5;w++)this.setFunctionModule(8,w,c(S,w));this.setFunctionModule(8,7,c(S,6)),this.setFunctionModule(8,8,c(S,7)),this.setFunctionModule(7,8,c(S,8));for(let w=9;w<15;w++)this.setFunctionModule(14-w,8,c(S,w));for(let w=0;w<8;w++)this.setFunctionModule(this.size-1-w,8,c(S,w));for(let w=8;w<15;w++)this.setFunctionModule(8,this.size-15+w,c(S,w));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let y=0;y<12;y++)h=h<<1^(h>>>11)*7973;const m=this.version<<12|h;d(m>>>18==0);for(let y=0;y<18;y++){const S=c(m,y),w=this.size-11+y%3,M=Math.floor(y/3);this.setFunctionModule(w,M,S),this.setFunctionModule(M,w,S)}}drawFinderPattern(h,m){for(let y=-4;y<=4;y++)for(let S=-4;S<=4;S++){const w=Math.max(Math.abs(S),Math.abs(y)),M=h+S,A=m+y;0<=M&&M<this.size&&0<=A&&A<this.size&&this.setFunctionModule(M,A,w!=2&&w!=4)}}drawAlignmentPattern(h,m){for(let y=-2;y<=2;y++)for(let S=-2;S<=2;S++)this.setFunctionModule(h+S,m+y,Math.max(Math.abs(S),Math.abs(y))!=1)}setFunctionModule(h,m,y){this.modules[m][h]=y,this.isFunction[m][h]=!0}addEccAndInterleave(h){const m=this.version,y=this.errorCorrectionLevel;if(h.length!=be.getNumDataCodewords(m,y))throw new RangeError("Invalid argument");const S=be.NUM_ERROR_CORRECTION_BLOCKS[y.ordinal][m],w=be.ECC_CODEWORDS_PER_BLOCK[y.ordinal][m],M=Math.floor(be.getNumRawDataModules(m)/8),A=S-M%S,N=Math.floor(M/S);let G=[];const O=be.reedSolomonComputeDivisor(w);for(let k=0,K=0;k<S;k++){let U=h.slice(K,K+N-w+(k<A?0:1));K+=U.length;const I=be.reedSolomonComputeRemainder(U,O);k<A&&U.push(0),G.push(U.concat(I))}let P=[];for(let k=0;k<G[0].length;k++)G.forEach((K,U)=>{(k!=N-w||U>=A)&&P.push(K[k])});return d(P.length==M),P}drawCodewords(h){if(h.length!=Math.floor(be.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let m=0;for(let y=this.size-1;y>=1;y-=2){y==6&&(y=5);for(let S=0;S<this.size;S++)for(let w=0;w<2;w++){const M=y-w,N=(y+1&2)==0?this.size-1-S:S;!this.isFunction[N][M]&&m<h.length*8&&(this.modules[N][M]=c(h[m>>>3],7-(m&7)),m++)}}d(m==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let m=0;m<this.size;m++)for(let y=0;y<this.size;y++){let S;switch(h){case 0:S=(y+m)%2==0;break;case 1:S=m%2==0;break;case 2:S=y%3==0;break;case 3:S=(y+m)%3==0;break;case 4:S=(Math.floor(y/3)+Math.floor(m/2))%2==0;break;case 5:S=y*m%2+y*m%3==0;break;case 6:S=(y*m%2+y*m%3)%2==0;break;case 7:S=((y+m)%2+y*m%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[m][y]&&S&&(this.modules[m][y]=!this.modules[m][y])}}getPenaltyScore(){let h=0;for(let w=0;w<this.size;w++){let M=!1,A=0,N=[0,0,0,0,0,0,0];for(let G=0;G<this.size;G++)this.modules[w][G]==M?(A++,A==5?h+=be.PENALTY_N1:A>5&&h++):(this.finderPenaltyAddHistory(A,N),M||(h+=this.finderPenaltyCountPatterns(N)*be.PENALTY_N3),M=this.modules[w][G],A=1);h+=this.finderPenaltyTerminateAndCount(M,A,N)*be.PENALTY_N3}for(let w=0;w<this.size;w++){let M=!1,A=0,N=[0,0,0,0,0,0,0];for(let G=0;G<this.size;G++)this.modules[G][w]==M?(A++,A==5?h+=be.PENALTY_N1:A>5&&h++):(this.finderPenaltyAddHistory(A,N),M||(h+=this.finderPenaltyCountPatterns(N)*be.PENALTY_N3),M=this.modules[G][w],A=1);h+=this.finderPenaltyTerminateAndCount(M,A,N)*be.PENALTY_N3}for(let w=0;w<this.size-1;w++)for(let M=0;M<this.size-1;M++){const A=this.modules[w][M];A==this.modules[w][M+1]&&A==this.modules[w+1][M]&&A==this.modules[w+1][M+1]&&(h+=be.PENALTY_N2)}let m=0;for(const w of this.modules)m=w.reduce((M,A)=>M+(A?1:0),m);const y=this.size*this.size,S=Math.ceil(Math.abs(m*20-y*10)/y)-1;return d(0<=S&&S<=9),h+=S*be.PENALTY_N4,d(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,m=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let y=[6];for(let S=this.size-7;y.length<h;S-=m)y.splice(1,0,S);return y}}static getNumRawDataModules(h){if(h<be.MIN_VERSION||h>be.MAX_VERSION)throw new RangeError("Version number out of range");let m=(16*h+128)*h+64;if(h>=2){const y=Math.floor(h/7)+2;m-=(25*y-10)*y-55,h>=7&&(m-=36)}return d(208<=m&&m<=29648),m}static getNumDataCodewords(h,m){return Math.floor(be.getNumRawDataModules(h)/8)-be.ECC_CODEWORDS_PER_BLOCK[m.ordinal][h]*be.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let m=[];for(let S=0;S<h-1;S++)m.push(0);m.push(1);let y=1;for(let S=0;S<h;S++){for(let w=0;w<m.length;w++)m[w]=be.reedSolomonMultiply(m[w],y),w+1<m.length&&(m[w]^=m[w+1]);y=be.reedSolomonMultiply(y,2)}return m}static reedSolomonComputeRemainder(h,m){let y=m.map(S=>0);for(const S of h){const w=S^y.shift();y.push(0),m.forEach((M,A)=>y[A]^=be.reedSolomonMultiply(M,w))}return y}static reedSolomonMultiply(h,m){if(h>>>8||m>>>8)throw new RangeError("Byte out of range");let y=0;for(let S=7;S>=0;S--)y=y<<1^(y>>>7)*285,y^=(m>>>S&1)*h;return d(y>>>8==0),y}finderPenaltyCountPatterns(h){const m=h[1];d(m<=this.size*3);const y=m>0&&h[2]==m&&h[3]==m*3&&h[4]==m&&h[5]==m;return(y&&h[0]>=m*4&&h[6]>=m?1:0)+(y&&h[6]>=m*4&&h[0]>=m?1:0)}finderPenaltyTerminateAndCount(h,m,y){return h&&(this.finderPenaltyAddHistory(m,y),m=0),m+=this.size,this.finderPenaltyAddHistory(m,y),this.finderPenaltyCountPatterns(y)}finderPenaltyAddHistory(h,m){m[0]==0&&(h+=this.size),m.pop(),m.unshift(h)}};s.MIN_VERSION=1,s.MAX_VERSION=40,s.PENALTY_N1=3,s.PENALTY_N2=3,s.PENALTY_N3=40,s.PENALTY_N4=10,s.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],s.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=s;function u(v,h,m){if(h<0||h>31||v>>>h)throw new RangeError("Value out of range");for(let y=h-1;y>=0;y--)m.push(v>>>y&1)}function c(v,h){return(v>>>h&1)!=0}function d(v){if(!v)throw new Error("Assertion error")}const f=class $e{constructor(h,m,y){if(this.mode=h,this.numChars=m,this.bitData=y,m<0)throw new RangeError("Invalid argument");this.bitData=y.slice()}static makeBytes(h){let m=[];for(const y of h)u(y,8,m);return new $e($e.Mode.BYTE,h.length,m)}static makeNumeric(h){if(!$e.isNumeric(h))throw new RangeError("String contains non-numeric characters");let m=[];for(let y=0;y<h.length;){const S=Math.min(h.length-y,3);u(parseInt(h.substring(y,y+S),10),S*3+1,m),y+=S}return new $e($e.Mode.NUMERIC,h.length,m)}static makeAlphanumeric(h){if(!$e.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let m=[],y;for(y=0;y+2<=h.length;y+=2){let S=$e.ALPHANUMERIC_CHARSET.indexOf(h.charAt(y))*45;S+=$e.ALPHANUMERIC_CHARSET.indexOf(h.charAt(y+1)),u(S,11,m)}return y<h.length&&u($e.ALPHANUMERIC_CHARSET.indexOf(h.charAt(y)),6,m),new $e($e.Mode.ALPHANUMERIC,h.length,m)}static makeSegments(h){return h==""?[]:$e.isNumeric(h)?[$e.makeNumeric(h)]:$e.isAlphanumeric(h)?[$e.makeAlphanumeric(h)]:[$e.makeBytes($e.toUtf8ByteArray(h))]}static makeEci(h){let m=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)u(h,8,m);else if(h<16384)u(2,2,m),u(h,14,m);else if(h<1e6)u(6,3,m),u(h,21,m);else throw new RangeError("ECI assignment value out of range");return new $e($e.Mode.ECI,0,m)}static isNumeric(h){return $e.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return $e.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,m){let y=0;for(const S of h){const w=S.mode.numCharCountBits(m);if(S.numChars>=1<<w)return 1/0;y+=4+w+S.bitData.length}return y}static toUtf8ByteArray(h){h=encodeURI(h);let m=[];for(let y=0;y<h.length;y++)h.charAt(y)!="%"?m.push(h.charCodeAt(y)):(m.push(parseInt(h.substring(y+1,y+3),16)),y+=2);return m}};f.NUMERIC_REGEX=/^[0-9]*$/,f.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,f.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let b=f;a.QrSegment=f})(Ya||(Ya={}));(a=>{(s=>{const u=class{constructor(d,f){this.ordinal=d,this.formatBits=f}};u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),s.Ecc=u})(a.QrCode||(a.QrCode={}))})(Ya||(Ya={}));(a=>{(s=>{const u=class{constructor(d,f){this.modeBits=d,this.numBitsCharCount=f}numCharCountBits(d){return this.numBitsCharCount[Math.floor((d+7)/17)]}};u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),s.Mode=u})(a.QrSegment||(a.QrSegment={}))})(Ya||(Ya={}));var Ni=Ya;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var d6={L:Ni.QrCode.Ecc.LOW,M:Ni.QrCode.Ecc.MEDIUM,Q:Ni.QrCode.Ecc.QUARTILE,H:Ni.QrCode.Ecc.HIGH},qb=128,Kb="L",Pb="#FFFFFF",Qb="#000000",Zb=!1,Xb=1,f6=4,h6=0,m6=.1;function Jb(a,s=0){const u=[];return a.forEach(function(c,d){let f=null;c.forEach(function(b,v){if(!b&&f!==null){u.push(`M${f+s} ${d+s}h${v-f}v1H${f+s}z`),f=null;return}if(v===c.length-1){if(!b)return;f===null?u.push(`M${v+s},${d+s} h1v1H${v+s}z`):u.push(`M${f+s},${d+s} h${v+1-f}v1H${f+s}z`);return}b&&f===null&&(f=v)})}),u.join("")}function Ib(a,s){return a.slice().map((u,c)=>c<s.y||c>=s.y+s.h?u:u.map((d,f)=>f<s.x||f>=s.x+s.w?d:!1))}function g6(a,s,u,c){if(c==null)return null;const d=a.length+u*2,f=Math.floor(s*m6),b=d/s,v=(c.width||f)*b,h=(c.height||f)*b,m=c.x==null?a.length/2-v/2:c.x*b,y=c.y==null?a.length/2-h/2:c.y*b,S=c.opacity==null?1:c.opacity;let w=null;if(c.excavate){let A=Math.floor(m),N=Math.floor(y),G=Math.ceil(v+m-A),O=Math.ceil(h+y-N);w={x:A,y:N,w:G,h:O}}const M=c.crossOrigin;return{x:m,y,h,w:v,excavation:w,opacity:S,crossOrigin:M}}function p6(a,s){return s!=null?Math.max(Math.floor(s),0):a?f6:h6}function Fb({value:a,level:s,minVersion:u,includeMargin:c,marginSize:d,imageSettings:f,size:b,boostLevel:v}){let h=Ee.useMemo(()=>{const A=(Array.isArray(a)?a:[a]).reduce((N,G)=>(N.push(...Ni.QrSegment.makeSegments(G)),N),[]);return Ni.QrCode.encodeSegments(A,d6[s],u,void 0,void 0,v)},[a,s,u,v]);const{cells:m,margin:y,numCells:S,calculatedImageSettings:w}=Ee.useMemo(()=>{let M=h.getModules();const A=p6(c,d),N=M.length+A*2,G=g6(M,b,A,f);return{cells:M,margin:A,numCells:N,calculatedImageSettings:G}},[h,b,f,c,d]);return{qrcode:h,margin:y,cells:m,numCells:S,calculatedImageSettings:w}}var b6=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),x6=Ee.forwardRef(function(s,u){const c=s,{value:d,size:f=qb,level:b=Kb,bgColor:v=Pb,fgColor:h=Qb,includeMargin:m=Zb,minVersion:y=Xb,boostLevel:S,marginSize:w,imageSettings:M}=c,N=jd(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:G}=N,O=jd(N,["style"]),P=M?.src,k=Ee.useRef(null),K=Ee.useRef(null),U=Ee.useCallback(qe=>{k.current=qe,typeof u=="function"?u(qe):u&&(u.current=qe)},[u]),[I,$]=Ee.useState(!1),{margin:he,cells:oe,numCells:Me,calculatedImageSettings:Z}=Fb({value:d,level:b,minVersion:y,boostLevel:S,includeMargin:m,marginSize:w,imageSettings:M,size:f});Ee.useEffect(()=>{if(k.current!=null){const qe=k.current,Te=qe.getContext("2d");if(!Te)return;let L=oe;const Q=K.current,ne=Z!=null&&Q!==null&&Q.complete&&Q.naturalHeight!==0&&Q.naturalWidth!==0;ne&&Z.excavation!=null&&(L=Ib(oe,Z.excavation));const ce=window.devicePixelRatio||1;qe.height=qe.width=f*ce;const E=f/Me*ce;Te.scale(E,E),Te.fillStyle=v,Te.fillRect(0,0,Me,Me),Te.fillStyle=h,b6?Te.fill(new Path2D(Jb(L,he))):oe.forEach(function(q,X){q.forEach(function(J,ee){J&&Te.fillRect(ee+he,X+he,1,1)})}),Z&&(Te.globalAlpha=Z.opacity),ne&&Te.drawImage(Q,Z.x+he,Z.y+he,Z.w,Z.h)}}),Ee.useEffect(()=>{$(!1)},[P]);const xe=Sd({height:f,width:f},G);let st=null;return P!=null&&(st=Ee.createElement("img",{src:P,key:P,style:{display:"none"},onLoad:()=>{$(!0)},ref:K,crossOrigin:Z?.crossOrigin})),Ee.createElement(Ee.Fragment,null,Ee.createElement("canvas",Sd({style:xe,height:f,width:f,ref:U,role:"img"},O)),st)});x6.displayName="QRCodeCanvas";var Wb=Ee.forwardRef(function(s,u){const c=s,{value:d,size:f=qb,level:b=Kb,bgColor:v=Pb,fgColor:h=Qb,includeMargin:m=Zb,minVersion:y=Xb,boostLevel:S,title:w,marginSize:M,imageSettings:A}=c,N=jd(c,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:G,cells:O,numCells:P,calculatedImageSettings:k}=Fb({value:d,level:b,minVersion:y,boostLevel:S,includeMargin:m,marginSize:M,imageSettings:A,size:f});let K=O,U=null;A!=null&&k!=null&&(k.excavation!=null&&(K=Ib(O,k.excavation)),U=Ee.createElement("image",{href:A.src,height:k.h,width:k.w,x:k.x+G,y:k.y+G,preserveAspectRatio:"none",opacity:k.opacity,crossOrigin:k.crossOrigin}));const I=Jb(K,G);return Ee.createElement("svg",Sd({height:f,width:f,viewBox:`0 0 ${P} ${P}`,ref:u,role:"img"},N),!!w&&Ee.createElement("title",null,w),Ee.createElement("path",{fill:v,d:`M0,0 h${P}v${P}H0z`,shapeRendering:"crispEdges"}),Ee.createElement("path",{fill:h,d:I,shapeRendering:"crispEdges"}),U)});Wb.displayName="QRCodeSVG";const y6={subtitle:"Veränderung beginnt mit dem Engagement jedes Einzelnen. Spenden helfen, einen echten Unterschied zu machen. Gemeinsam erreichen wir mehr.",heroImage:"/sckw-logo-500club.png",heroTitle:"CLUB 500",sectionTitle:"Unterstützungsmöglichkeiten",memberships:[{value:500,label:"500 €",duration:"1 Jahr",description:"Mitglied im CLUB 500"},{value:1e3,label:"1.000 €",duration:"2 Jahre",description:"Unterstützung"},{value:1500,label:"1.500 €",duration:"3 Jahre",description:"Unterstützung"}],customAmount:{label:"Eigener Betrag",minAmount:500,minHint:"Mindestens 500 €"},benefits:[{icon:"📄",text:"Offizielle <strong>Spendenbescheinigung</strong> (gemeinnütziger Verein)"},{icon:"🏅",text:"Veröffentlichung Ihres <strong>Namens oder Firmennamens</strong> als Unterstützer"},{icon:"⚽",text:"Direkte Förderung des <strong>lokalen Sports</strong> und der Jugend"}],spendentafel:{label:"Auf die Spendentafel",sublabel:"Ihr Name/Firma wird auf unserer Website & am Vereinsgelände veröffentlicht.",anonymLabel:"Anonym spenden",nameFieldPlaceholder:"Name/Firma für Veröffentlichung (optional, falls abweichend)"},bescheinigung:{label:"Ich möchte eine Spendenbescheinigung erhalten",hinweis:"Sie erhalten Ihre Spendenbescheinigung per E-Mail als PDF.",fields:{vorname:"Vorname",nachname:"Nachname",email:"E-Mail",strasse:"Straße + Hausnr.",plz:"PLZ",ort:"Ort"}},paypalCtaLabel:"Mit PayPal spenden",paypalHinweis:"Bitte geben Sie bei PayPal im Mitteilungsfeld Ihren vollständigen Namen und Ihre Adresse an, damit wir Ihnen eine Spendenbescheinigung ausstellen können.",bankCtaLabel:"Per Überweisung",verwendungszweck:"CLUB 500",paypalMeUrl:"https://www.paypal.me/sckw2012",bankDetails:{kontoinhaber:"SC Konstanz-Wollmatingen e.V.",iban:"DE84 6905 0001 0000 0929 99",ibanClean:"DE84690500010000092999",bic:"SOLADES1KNZ",bank:"Sparkasse Bodensee",adresse:"Schleyerweg 5 · 78467 Konstanz"}},v6=p.section`
  background: #0b0b0d;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
`,S6=p.div`
  position: absolute;
  inset: 0;
  background: url(${({$bg:a})=>a}) center/cover no-repeat;
  opacity: ${({$active:a})=>a?1:0};
  transition: opacity 900ms ease;
  z-index: 1;
  filter: saturate(1.05) brightness(0.65);
`,j6=p.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
  z-index: 2;
`,w6=p.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,E6=p.img`
  width: clamp(100px, 22vw, 180px);
  height: auto;
  margin-bottom: 1.25rem;
  filter: drop-shadow(0 6px 24px rgba(0, 0, 0, 0.6));
`,_6=p.h1`
  color: #fff;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
`,z6=p.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: 500;
  margin: 0 0 2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  max-width: 600px;
`,T6=p.a`
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
`,k0=p.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.25rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,e1=p.section`
  padding: 3rem 0;
  scroll-margin-top: 90px;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,C6=p(e1)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,R0=p.h2`
  font-size: clamp(1.5rem, 4.5vw, 2.2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-align: center;
`,M0=p.p`
  font-size: clamp(0.92rem, 2.3vw, 1.05rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
`,A6=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,k6=p.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
`,R6=p.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`,M6=p.p`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  margin: 0;

  strong {
    color: #222;
  }
`,D0=p.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.6rem;
`,D6=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,B6=p.button`
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
`,O6=p.div`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${({$active:a})=>a?"#e10073":"#222"};
  margin-bottom: 0.25rem;
  transition: color 0.15s;
`,N6=p.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({$active:a})=>a?"#e10073":"#555"};
  margin-bottom: 0.2rem;
  transition: color 0.15s;
`,L6=p.div`
  font-size: 0.75rem;
  color: #999;
  line-height: 1.3;
`,U6=p.div`
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
`,H6=p.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  font-size: 0.95rem;
  color: #333;
`,G6=p.div`
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
`,$6=p.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: start;
`,V6=p.div`
  display: flex;
  gap: 0.35rem;
`,Y6=p.button`
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
`,ca=p.input`
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
`,q6=p.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`,K6=p.div`
  margin-bottom: 1.5rem;
`,P6=p.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`,B0=p.button`
  flex: 1;
  padding: 0.65rem 0.5rem;
  border-radius: 8px;
  border: 1.5px solid ${({$active:a})=>a?"#e10073":"#e5e7eb"};
  background: ${({$active:a})=>a?"#fff0f6":"#fff"};
  color: ${({$active:a})=>a?"#e10073":"#555"};
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #e10073;
  }
`,Q6=p.div`
  font-size: 0.78rem;
  color: #999;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`,Z6=p.label`
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
`,X6=p.div`
  font-size: 0.78rem;
  color: #999;
  margin: 0.3rem 0 0 1.6rem;
  line-height: 1.4;
`,J6=kd`
  from { opacity: 0; max-height: 0; }
  to { opacity: 1; max-height: 400px; }
`,I6=kd`
  from { opacity: 1; max-height: 400px; }
  to { opacity: 0; max-height: 0; }
`,F6=p.div`
  overflow: hidden;
  margin-top: 0.75rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({$visible:a})=>a?Yi`animation: ${J6} 0.3s ease forwards;`:Yi`animation: ${I6} 0.2s ease forwards; pointer-events: none;`}
`,O0=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`,W6=p.div`
  margin-bottom: 1.75rem;
`,eE=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,tE=p.a`
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
`,nE=p.button`
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
`,N0=p.span`
  font-size: 0.78rem;
  opacity: 0.8;
  font-weight: 600;
  margin-top: 0.15rem;
`,aE=p.div`
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #6d4c00;
  line-height: 1.5;
`,iE=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,rE=p.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  max-width: 460px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`,lE=p.button`
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
`,sE=p.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #e10073;
  margin: 0 0 0.5rem;
`,oE=p.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,cE=p.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #eee;
`,Ir=p.div`
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
  strong { color: #222; }
`,uE=p.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  font-size: 0.82rem;
  color: #166534;
  line-height: 1.5;
`;function td(a){return a.toLocaleString("de-DE",{minimumFractionDigits:a%1===0?0:1,maximumFractionDigits:2})}function dE(a,s,u,c,d){return["BCD","002","1","SCT",u,a,s,`EUR${c.toFixed(2)}`,"","",d].join(`
`)}const nd=[mt("herren/herren_club500_1"),mt("herren/herren_club500_4"),mt("herren/herren_club500_2"),mt("herren/herren_club500_3"),mt("herren/herren_club500_5")].filter(Boolean),fE=["1 Jahr","2 Jahre","3 Jahre"];function hE(){const a=y6,[s,u]=T.useState(0);T.useEffect(()=>{if(nd.length<=1)return;const Z=setInterval(()=>u(xe=>(xe+1)%nd.length),6e3);return()=>clearInterval(Z)},[]);const[c,d]=T.useState(0),[f,b]=T.useState(!1),[v,h]=T.useState(""),[m,y]=T.useState("1 Jahr"),[S,w]=T.useState(!0),[M,A]=T.useState(""),[N,G]=T.useState(!1),[O,P]=T.useState({vorname:"",nachname:"",email:"",strasse:"",plz:"",ort:""}),[k,K]=T.useState(!1),U=T.useMemo(()=>{if(f){const Z=parseFloat(v.replace(",","."));return isNaN(Z)||Z<a.customAmount.minAmount?0:Z}return a.memberships[c]?.value??0},[f,v,c,a.memberships,a.customAmount.minAmount]),I=T.useMemo(()=>f?m:a.memberships[c]?.duration??"",[f,m,c,a.memberships]),$=T.useMemo(()=>{const Z=[a.verwendungszweck];if(I&&Z.push(I),S?Z.push(M.trim()?`Tafel: Ja (${M.trim()})`:"Tafel: Ja"):Z.push("Tafel: Nein"),N){const xe=[O.vorname,O.nachname].filter(Boolean).join(" "),st=[O.strasse,O.plz,O.ort].filter(Boolean).join(", "),qe=[xe,st].filter(Boolean).join(", ");qe&&Z.push(`Besch: ${qe}`)}return Z.join(" | ")},[a.verwendungszweck,I,S,M,N,O]),he=T.useMemo(()=>U<=0?"#":`${a.paypalMeUrl}/${U}EUR`,[U,a.paypalMeUrl]),oe=T.useMemo(()=>dE(a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,U,$),[a.bankDetails.kontoinhaber,a.bankDetails.ibanClean,a.bankDetails.bic,U,$]),Me=(Z,xe)=>P(st=>({...st,[Z]:xe}));return r.jsxs(r.Fragment,{children:[r.jsxs(v6,{children:[nd.map((Z,xe)=>r.jsx(S6,{$bg:Z,$active:xe===s},xe)),r.jsx(j6,{}),r.jsxs(w6,{children:[r.jsx(E6,{src:a.heroImage,alt:"Club 500"}),r.jsx(_6,{children:a.heroTitle}),r.jsx(z6,{children:a.subtitle}),r.jsx(T6,{href:"#mitglied-werden",onClick:Z=>{Z.preventDefault(),document.getElementById("mitglied-werden")?.scrollIntoView({behavior:"smooth"})},children:"Jetzt Mitglied werden"})]})]}),r.jsx(e1,{children:r.jsxs(k0,{children:[r.jsx(R0,{children:"Ihre Vorteile"}),r.jsx(M0,{children:"Als Mitglied im CLUB 500 unterstützen Sie direkt den Jugend- und Amateurfußball in Konstanz."}),r.jsx(A6,{children:a.benefits.map((Z,xe)=>r.jsxs(k6,{children:[r.jsx(R6,{children:Z.icon}),r.jsx(M6,{dangerouslySetInnerHTML:{__html:Z.text}})]},xe))})]})}),r.jsx(C6,{id:"mitglied-werden",children:r.jsxs(k0,{children:[r.jsx(R0,{children:"Mitglied werden"}),r.jsx(M0,{children:"Wählen Sie Ihre Unterstützung und werden Sie Teil des CLUB 500."}),r.jsx(D0,{children:a.sectionTitle}),r.jsx(D6,{children:a.memberships.map((Z,xe)=>r.jsxs(B6,{$active:!f&&c===xe,onClick:()=>{b(!1),d(xe)},type:"button",children:[r.jsx(O6,{$active:!f&&c===xe,children:Z.label}),r.jsx(N6,{$active:!f&&c===xe,children:Z.duration}),r.jsx(L6,{children:Z.description})]},Z.value))}),r.jsxs(U6,{$active:f,onClick:()=>{f||b(!0)},children:[r.jsxs(H6,{children:[r.jsx(G6,{$active:f}),a.customAmount.label]}),f&&r.jsxs($6,{onClick:Z=>Z.stopPropagation(),children:[r.jsx(ca,{type:"text",inputMode:"decimal",placeholder:"Betrag in EUR",value:v,onChange:Z=>h(Z.target.value),autoFocus:!0}),r.jsx(V6,{children:fE.map(Z=>r.jsx(Y6,{$active:m===Z,onClick:()=>y(Z),type:"button",children:Z},Z))})]}),f&&r.jsx(q6,{children:a.customAmount.minHint})]}),r.jsxs(K6,{children:[r.jsx(D0,{children:"Veröffentlichung"}),r.jsxs(P6,{children:[r.jsx(B0,{$active:S,onClick:()=>w(!0),type:"button",children:a.spendentafel.label}),r.jsx(B0,{$active:!S,onClick:()=>w(!1),type:"button",children:a.spendentafel.anonymLabel})]}),S&&r.jsxs(r.Fragment,{children:[r.jsx(Q6,{children:a.spendentafel.sublabel}),r.jsx(ca,{type:"text",placeholder:a.spendentafel.nameFieldPlaceholder,value:M,onChange:Z=>A(Z.target.value)})]})]}),r.jsxs(W6,{children:[r.jsxs(Z6,{children:[r.jsx("input",{type:"checkbox",checked:N,onChange:Z=>G(Z.target.checked)}),r.jsx("span",{children:a.bescheinigung.label})]}),r.jsx(X6,{children:a.bescheinigung.hinweis}),r.jsxs(F6,{$visible:N,children:[r.jsxs(O0,{children:[r.jsx(ca,{type:"text",name:"bescheinigung-vorname",autoComplete:"given-name",placeholder:a.bescheinigung.fields.vorname,value:O.vorname,onChange:Z=>Me("vorname",Z.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-nachname",autoComplete:"family-name",placeholder:a.bescheinigung.fields.nachname,value:O.nachname,onChange:Z=>Me("nachname",Z.target.value)})]}),r.jsx(ca,{type:"email",name:"bescheinigung-email",autoComplete:"email",placeholder:a.bescheinigung.fields.email,value:O.email,onChange:Z=>Me("email",Z.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-strasse",autoComplete:"street-address",placeholder:a.bescheinigung.fields.strasse,value:O.strasse,onChange:Z=>Me("strasse",Z.target.value)}),r.jsxs(O0,{children:[r.jsx(ca,{type:"text",name:"bescheinigung-plz",autoComplete:"postal-code",placeholder:a.bescheinigung.fields.plz,value:O.plz,onChange:Z=>Me("plz",Z.target.value)}),r.jsx(ca,{type:"text",name:"bescheinigung-ort",autoComplete:"address-level2",placeholder:a.bescheinigung.fields.ort,value:O.ort,onChange:Z=>Me("ort",Z.target.value)})]})]})]}),r.jsxs(eE,{children:[r.jsxs(tE,{href:he,target:"_blank",rel:"noopener noreferrer",children:[a.paypalCtaLabel,r.jsxs(N0,{children:[td(U)," €"]})]}),r.jsxs(nE,{type:"button",onClick:()=>K(!0),children:[a.bankCtaLabel,r.jsxs(N0,{children:[td(U)," €"]})]})]}),N&&r.jsx(aE,{children:a.paypalHinweis})]})}),r.jsx(eo,{}),k&&r.jsx(iE,{onClick:()=>K(!1),children:r.jsxs(rE,{onClick:Z=>Z.stopPropagation(),children:[r.jsx(lE,{onClick:()=>K(!1),children:"×"}),r.jsx(sE,{children:"Überweisung per QR-Code"}),r.jsx(oE,{children:"Scannen Sie den QR-Code mit Ihrer Banking-App (Sparkasse, VR-Banking, ING, etc.) – alle Daten werden automatisch ausgefüllt."}),U>0&&r.jsx(cE,{children:r.jsx(Wb,{value:oe,size:220,level:"M"})}),r.jsx(Ir,{children:r.jsx("strong",{children:a.bankDetails.kontoinhaber})}),r.jsxs(Ir,{children:["IBAN: ",r.jsx("strong",{children:a.bankDetails.iban})]}),r.jsxs(Ir,{children:["Betrag: ",r.jsxs("strong",{children:[td(U)," €"]}),I&&r.jsxs(r.Fragment,{children:[" · ",r.jsx("strong",{children:I})]})]}),r.jsxs(Ir,{children:["Verwendungszweck: ",r.jsx("strong",{children:$})]}),r.jsxs(Ir,{style:{fontSize:"0.8rem",color:"#888"},children:[a.bankDetails.bank," · ",a.bankDetails.adresse]}),N&&O.email&&r.jsxs(uE,{children:["Wir senden Ihre Spendenbescheinigung an ",r.jsx("strong",{children:O.email}),"."]})]})})]})}const Xi=JSON.parse('[{"title":"🏆 Hauptsponsor","price":"Individuell","tier":"premium","status":"🟥 Vergeben","maxSponsors":1,"sponsors":[{"name":"Fuchsbau Immobilien","image":"fuchsbau-logo.png","website":"https://immofuchsbau.com/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"Trikotbrust 1. Mannschaft","highlight":true,"icon":"👕"},{"text":"1 Banner (5x2 m) am Gelände","highlight":false,"icon":"🖼️"},{"text":"1 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Social Media: Prominent*","highlight":false,"icon":"📱"},{"text":"Website: Startseite Premium*","highlight":false,"icon":"🌐"}],"benefits":["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin (15 Ausgaben/Saison)","3 Stadiondurchsagen pro Heimspiel","Social Media PREMIUM: Logo in ALLEN Spieltag-Posts (~60/Saison) + 4 dedizierte Posts/Jahr + ALLE Spieltag-Stories (~100/Saison)","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{"title":"🏟 Stadionpartner","price":"Individuell","tier":"premium","status":"🟩 Verfügbar","maxSponsors":1,"sponsors":[],"keyBenefits":[{"text":"Namensrecht Stadion","highlight":true,"icon":"🏟️"},{"text":"Social Media Post/Monat","highlight":false,"icon":"📱"},{"text":"1/2 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"Stadionansage bei jedem Heimspiel","highlight":false,"icon":"📢"},{"text":"1 Bande + 4x Plakat","highlight":true,"icon":"🖼️"}],"benefits":["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","4x Plakat (A1) am Gelände","1/2 Seite im Stadionmagazin (15 Ausgaben/Saison)","Stadionansage bei jedem Heimspiel","Social Media SEHR PRÄSENT: 1 dedizierter Post/Monat (12/Jahr) + Logo in allen Heimspiel-Posts (~15) + 2 Stories/Monat (24/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 Co-Sponsor","price":"Individuell","tier":"premium","status":"🟨 1 von 2 verfügbar","maxSponsors":2,"sponsors":[],"keyBenefits":[{"text":"Trikotärmel","highlight":true,"icon":"👕"},{"text":"1 Bande","highlight":false,"icon":"🖼️"},{"text":"1/4 Seite im Stadionmagazin","highlight":true,"icon":"📰"},{"text":"2x Social Media pro Spiel","highlight":true,"icon":"📱"}],"benefits":["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin (15 Ausgaben/Saison)","Social Media REGELMÄSSIG: 1 dedizierter Post alle 3 Wochen (~15/Jahr) + Logo in jedem 2. Heimspiel-Post (~8) + 1 Story/Monat (12/Jahr)","Website: Logo prominent auf Startseite"]},{"title":"🥈 SILBER","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[{"name":"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH","image":"grafhardenberg.png","website":"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/","since":"2025","until":"2026"},{"name":"Tasty Delivery GmbH","image":"tasty.png","website":"https://tasty-delivery.de","since":"2022","until":"2026"}],"keyBenefits":[{"text":"1 Bande","highlight":true,"icon":"🖼️"},{"text":"Instagram-Erwähnung","highlight":false,"icon":"📱"},{"text":"Werbeplane am Gelände","highlight":false,"icon":"🏟️"},{"text":"Vereinsplakate + Eventsichtbarkeit","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (5x2 m) am Gelände","Social Media: 12 dedizierte Posts/Jahr (1/Monat) + 18 Stories/Jahr (1,5/Monat)","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit","Website: Logo auf Startseite"]},{"title":"🤝 Community-Partner","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[{"name":"Logan’s Linde Wollmatingen","image":"logans.png","website":"https://logans-wollmatingen.de/","since":"2025","until":"2026"}],"keyBenefits":[{"text":"1 Bande (3x1 m, 6 Monate)","highlight":false,"icon":"🏟️"},{"text":"1/4 Seite im Stadionmagazin","highlight":false,"icon":"📰"},{"text":"Website: Startseite Basis*","highlight":false,"icon":"🌐"},{"text":"Social Media: Basis*","highlight":true,"icon":"📱"},{"text":"Optional: Events","highlight":true,"icon":"🎉"}],"benefits":["1 Bande (3x1 m, 6 Monate sichtbar)","Website: Logo auf der Startseite","Social Media: 1 Willkommens-Post + 3 weitere Posts/Jahr (Events, Jubiläum) + 8 Stories/Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{"title":"🏗️ Platz-Renovierung Spende","price":"Spende ab 100 €","tier":"spende","status":"🟩 Spenden willkommen","maxSponsors":999,"sponsors":[],"keyBenefits":[{"text":"Platz-Sanierung unterstützen","highlight":true,"icon":"🏟️"},{"text":"Spendenquittung","highlight":false,"icon":"📄"},{"text":"Website: Dankesliste*","highlight":false,"icon":"🌐"},{"text":"Vereinsgeschichte Teil werden","highlight":true,"icon":"🏆"}],"benefits":["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{"title":"🟧 Bandenwerbung","price":"Individuell","tier":"lokal","status":"🟩 Verfügbar","maxSponsors":30,"sponsors":[],"keyBenefits":[{"text":"3x1m Werbebande","highlight":true,"icon":"🏟️"},{"text":"Sichtbarkeit bei jedem Heimspiel","highlight":false,"icon":"⚽"},{"text":"Link auf Homepage optional","highlight":false,"icon":"🌐"}],"benefits":["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Logo sichtbar in Stadion-Posts (wo Banden zu sehen sind)","Aufnahme in Bandensponsor-Übersicht auf Website","Optional: +1 dedizierter Post/Jahr gegen Aufpreis (+200 €)"]},{"title":"⚽ Ballspende","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Social Media Post am Spieltag","highlight":true,"icon":"📱"},{"text":"Namensnennung vor dem Spiel","highlight":false,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Stadiondurchsage vor dem Spiel","Namensnennung in der Halbzeitpause","1 Instagram-Story vor dem Spiel mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)"]},{"title":"⚽ Ballspende 5er Pack","price":"Auf Anfrage","tier":"starter","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Ballspende für 5 Spiele","highlight":true,"icon":"⚽"},{"text":"Namensnennung vor jedem Spiel","highlight":true,"icon":"📢"},{"text":"Namensnennung Halbzeitpause","highlight":false,"icon":"⏱️"}],"benefits":["Ballspende für 5 Spiele","Stadiondurchsage vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","5 Instagram-Stories (1 pro Spiel) mit Dankung + Logo","Logo/Name auf Website (Ballspenden-Seite)","Günstigerer Preis pro Spiel gegenüber Einzelspende"]},{"title":"🎯 Prämien-Modell STARTER","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":20,"sponsors":[],"keyBenefits":[{"text":"Pro Tor: 100 €","highlight":true,"icon":"⚽"},{"text":"Pro Punkt: 150 €","highlight":false,"icon":"📊"},{"text":"Pro Zu-Null: 300 €","highlight":true,"icon":"🛡️"},{"text":"Nennung nach jedem Erfolg","highlight":false,"icon":"📢"}],"benefits":["Pro Tor: 100 € (Ø 50 Tore/Saison = 5.000 €)","Pro Punkt: 150 € (Ø 45 Punkte/Saison = 6.750 €)","Pro Zu-Null-Spiel: 300 € (Ø 10/Saison = 3.000 €)","Stadionansage nach jedem Erfolg","Social Media Erwähnung bei Meilenstein-Toren","Logo auf Website"]},{"title":"🏆 Prämien-Modell PREMIUM","price":"Erfolgsbasiert","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":5,"sponsors":[],"keyBenefits":[{"text":"Pro Sieg: 800 €","highlight":true,"icon":"🏆"},{"text":"Pro Punkt: 250 €","highlight":true,"icon":"📊"},{"text":"Pro Zu-Null: 500 €","highlight":true,"icon":"🛡️"},{"text":"Social Media nach jedem Erfolg","highlight":true,"icon":"📱"}],"benefits":["Pro Sieg: 800 € (Ø 15 Siege/Saison = 12.000 €)","Pro Punkt: 250 € (Ø 45 Punkte/Saison = 11.250 €)","Pro Zu-Null-Spiel: 500 € (Ø 10/Saison = 5.000 €)","Stadionansage + Social Media Post nach jedem Erfolg","Namensnennung in Spielberichten","Logo prominent auf Website","1 Bande (3x1 m) am Gelände"]},{"title":"💰 Prämien-Kombi","price":"Individuell","tier":"praemien","status":"🟩 Verfügbar","maxSponsors":10,"sponsors":[],"keyBenefits":[{"text":"Basis-Betrag + Erfolgs-Prämien","highlight":true,"icon":"💼"},{"text":"Planbare Kosten + Upside","highlight":true,"icon":"📈"},{"text":"Z.B. 2.000€ Fix + 150€/Punkt","highlight":false,"icon":"🎯"},{"text":"Individuell kombinierbar","highlight":false,"icon":"🔧"}],"benefits":["Basis-Betrag (z.B. 2.000-5.000 €) + variable Prämien","Beispiel: 3.000 € Fix + 150 €/Punkt = 9.750 € bei 45 Punkten","Planbare Mindestkosten, Upside bei Erfolg","Social Media Erwähnung nach jedem Erfolg","Logo auf Website","Optional: +1 Bande gegen Aufpreis"]}]'),mE=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`,gE=p.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${a=>a.isVergeben?"0.8":"1"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`,pE=p.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,bE=p.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,xE=p.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,yE=p.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${a=>a.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${a=>a.isVergeben?"line-through":"none"};
`,vE=p.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:a})=>a==="verfügbar"?"#d4edda":a==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:a})=>a==="verfügbar"?"#155724":a==="vergeben"?"#721c24":"#856404"};
`,SE=p.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,jE=p.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  line-height: 1.5;
  color: ${a=>a.isHighlight?"#e10073":"#222"};
  font-weight: ${a=>a.isHighlight?"600":"400"};
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`,wE=p.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,EE=p.span`
  flex: 1;
`,_E=p.a`
  display: inline-block;
  background: ${a=>a.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 1.75rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${a=>a.isVergeben?"none":"auto"};
  margin-top: auto;
  border: ${a=>a.isVergeben?"2px solid #ccc":"2px solid #e10073"};
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${a=>a.isVergeben?"#ccc":"#b8005a"};
    border-color: ${a=>a.isVergeben?"#ccc":"#b8005a"};
    transform: ${a=>a.isVergeben?"none":"translateY(-1px)"};
    box-shadow: ${a=>a.isVergeben?"none":"0 4px 12px rgba(225, 0, 115, 0.3)"};
  }

  &:focus {
    outline: 3px solid
      ${a=>a.isVergeben?"#ccc":"rgba(225, 0, 115, 0.5)"};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.95rem;
    padding: 1rem 1.5rem;
  }
`,zE=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`,TE=p.img`
  max-width: 180px;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
`,CE=p.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`,AE=p.div`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  text-align: center;
`,kE=p.a`
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
`,RE="sponsoring@sckw.de";function ad({packages:a}){const s=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",u=b=>{const v=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return v?v[0]:""},c=b=>{const v=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),h=encodeURIComponent(`Interesse am Sponsoring-Paket "${v}"`),m=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${v}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${RE}?subject=${h}&body=${m}`},d=b=>{const v=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:v,isFullyBooked:v===0}},f=a.filter(b=>!b.title.includes("Platz-Renovierung"));return r.jsx(mE,{children:f.map((b,v)=>{const{isFullyBooked:h}=d(b),m=s(b.status),y=m==="vergeben"||h,S=h?"vergeben":m,w=b.keyBenefits||[];return r.jsxs(gE,{isVergeben:y,children:[r.jsxs(pE,{children:[r.jsx(bE,{children:u(b.title)}),r.jsx(xE,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!y&&r.jsx(yE,{children:b.price}),r.jsx(vE,{status:S,children:S==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),y&&b.sponsors&&b.sponsors.length>0?r.jsxs(zE,{children:[b.sponsors[0].image&&r.jsx(TE,{src:`/sponsors/${b.sponsors[0].image}`,alt:b.sponsors[0].name}),r.jsx(CE,{children:b.sponsors[0].name}),r.jsxs(AE,{children:["Hauptsponsor seit ",b.sponsors[0].since]}),b.sponsors[0].website&&r.jsx(kE,{href:b.sponsors[0].website,target:"_blank",rel:"noopener noreferrer",children:"🔗 Website besuchen"})]}):r.jsx(SE,{children:w.map((M,A)=>r.jsxs(jE,{isHighlight:M.highlight,children:[r.jsx(wE,{children:M.icon}),r.jsx(EE,{children:M.text})]},A))}),r.jsx(_E,{href:y?void 0:c(b.title),isVergeben:y,children:y?"Vergeben":"Jetzt anfragen"})]},v)})})}const ME=p.div`
  width: 100%;
  margin: 2rem 0;
`,DE=p.div`
  display: block;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    display: none; /* Verstecke Tabelle auf Mobile */
  }
`,BE=p.table`
  width: 100%;
  border-collapse: collapse;
`,L0=p.th`
  background: ${a=>a.isVergeben?"#f8f9fa":"#e10073"};
  color: ${a=>a.isVergeben?"#666":"#fff"};
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
`,Ba=p.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${a=>a.isVergeben?"#f8f9fa":"#fff"};
  color: ${a=>a.isVergeben?"#999":"#222"};
  font-size: 0.95rem;

  &:first-child {
    text-align: left;
    font-weight: 600;
    background: #f8f9fa;
    color: #222;
  }

  ${a=>a.isHighlight&&`
    background: #fff6fa;
    color: #e10073;
    font-weight: 600;
  `}
`,OE=p.td`
  padding: 1rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: ${a=>a.isVergeben?"#f8f9fa":"#fff"};
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;

  ${a=>a.isVergeben&&`
    color: #999;
    text-decoration: line-through;
  `}
`,NE=p.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,LE=p.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 2px solid ${a=>a.isVergeben?"#eee":"#f0f0f0"};
  opacity: ${a=>a.isVergeben?.8:1};
`,UE=p.h4`
  color: #e10073;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
`,HE=p.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`,id=p.div`
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
`,U0=p.a`
  display: inline-block;
  background: ${a=>a.isVergeben?"#ccc":"#e10073"};
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
  pointer-events: ${a=>a.isVergeben?"none":"auto"};
`,GE="sponsoring@sckw.de";function $E({packages:a}){const s=c=>{const d=c.replace(/[^\w\s]/gi,"").trim(),f=encodeURIComponent(`Interesse am Paket "${d}"`);return`mailto:${GE}?subject=${f}`},u=c=>{const d=c.benefits.find(b=>{const v=b.toLowerCase();return v.includes("social media")||v.includes("instagram")});if(!d)return"-";const f=d.toLowerCase();return f.includes("premium")||f.includes("allen")?"ÜBERALL":f.includes("sehr präsent")?"Sehr präsent":f.includes("regelmässig")||f.includes("regelmäßig")?"Regelmäßig":"Standard"};return r.jsxs(ME,{children:[r.jsx(DE,{children:r.jsxs(BE,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(L0,{children:"Paket"}),a.map((c,d)=>r.jsx(L0,{isVergeben:c.status.includes("Vergeben"),children:c.title},d))]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx(Ba,{children:"Preis"}),a.map((c,d)=>r.jsx(OE,{isVergeben:c.status.includes("Vergeben"),children:c.price},d))]}),r.jsxs("tr",{children:[r.jsx(Ba,{children:"Trikot/Banner"}),a.map((c,d)=>{const f=c.benefits.find(b=>b.includes("Trikot")||b.includes("Banner"));return r.jsx(Ba,{children:f?"✅ Ja":"-"},d)})]}),r.jsxs("tr",{children:[r.jsx(Ba,{children:"Social Media"}),a.map((c,d)=>{const f=u(c);return r.jsx(Ba,{isHighlight:f==="ÜBERALL",children:f==="-"?"-":`✅ ${f}`},d)})]}),r.jsxs("tr",{children:[r.jsx(Ba,{children:"Aktion"}),a.map((c,d)=>r.jsx(Ba,{children:r.jsx(U0,{href:c.status.includes("Vergeben")?void 0:s(c.title),isVergeben:c.status.includes("Vergeben"),children:c.status.includes("Vergeben")?"Vergeben":"Anfragen"})},d))]})]})]})}),r.jsx(NE,{children:a.map((c,d)=>{const f=c.status.includes("Vergeben");return r.jsxs(LE,{isVergeben:f,children:[r.jsx(UE,{children:c.title}),r.jsx(HE,{children:c.price}),r.jsxs(id,{children:[r.jsx("span",{children:"Status"}),r.jsx("span",{children:f?"🟥 Vergeben":"🟩 Verfügbar"})]}),r.jsxs(id,{children:[r.jsx("span",{children:"Social Media"}),r.jsx("span",{children:u(c)})]}),r.jsxs(id,{children:[r.jsx("span",{children:"Vorteile"}),r.jsxs("span",{children:[c.benefits.length," Leistungen"]})]}),r.jsx(U0,{href:f?void 0:s(c.title),isVergeben:f,children:f?"Bereits vergeben":"Jetzt anfragen"})]},d)})})]})}const VE=p.div`
  margin-top: 2.5rem;
`,YE=p.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`,qE=p.button`
  background: ${({$active:a})=>a?"#e10073":"transparent"};
  color: ${({$active:a})=>a?"white":"#666"};
  border: none;
  padding: 0.875rem 1.5rem;
  font-weight: ${({$active:a})=>a?"800":"600"};
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s ease;
  position: relative;
  border-bottom: ${({$active:a})=>a?"3px solid #e10073":"3px solid transparent"};

  &:hover {
    background: ${({$active:a})=>a?"#e10073":"#f8f9fa"};
    color: ${({$active:a})=>a?"white":"#e10073"};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.2rem;
  }
`,KE=p.div`
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
`,PE=p.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`,QE=Xi.filter(a=>a.tier==="premium"),ZE=Xi.filter(a=>a.tier==="lokal"),XE=Xi.filter(a=>a.tier==="starter");function JE(){const[a,s]=T.useState("premium"),u=[{key:"premium",label:"🏆 Premium",packages:QE},{key:"lokal",label:"🏢 Lokal",packages:ZE},{key:"starter",label:"🌟 Starter",packages:XE}],c=u.find(d=>d.key===a);return r.jsxs(VE,{children:[r.jsx(YE,{children:u.map(d=>r.jsx(qE,{$active:a===d.key,onClick:()=>s(d.key),children:d.label},d.key))}),r.jsxs(KE,{children:[c&&r.jsx($E,{packages:c.packages}),r.jsxs(PE,{children:[a==="premium"&&"Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website.",a==="lokal"&&"Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz.",a==="starter"&&"Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."]})]})]})}const IE=p.div`
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
`,FE=p.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,WE=p.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,e_=p.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,t_=p.table`
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
`,rd=p.td`
  font-weight: 700;
  color: #e10073;
`,n_=p.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,a_=p.div`
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
`,i_=p.div`
  background: #e10073;
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
`,r_=p.div`
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
`,l_=p.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.6;
  font-style: italic;
`;function s_(){const a=Cb;return r.jsxs(IE,{children:[r.jsx(FE,{children:"🎯 Prämien-Modell: Erfolgsbasiertes Sponsoring"}),r.jsx(WE,{children:"Sie zahlen nur bei sportlichem Erfolg. Perfekt für Sponsoren, die mit dem Team mitfiebern wollen."}),r.jsx(e_,{children:r.jsxs(t_,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Leistung / Erfolg"}),r.jsx("th",{children:"Starter"}),r.jsx("th",{children:"Premium"}),r.jsx("th",{children:"Kombi (Beispiel)"})]})}),r.jsxs("tbody",{children:[a.map((s,u)=>r.jsxs("tr",{children:[r.jsx("td",{children:s.label}),r.jsx(rd,{children:s.starter}),r.jsx(rd,{children:s.premium}),r.jsx(rd,{children:s.kombi})]},u)),r.jsxs("tr",{children:[r.jsx("td",{children:"Erwartete Kosten"}),r.jsx("td",{children:Li.starter}),r.jsx("td",{children:Li.premium}),r.jsx("td",{children:Li.kombi})]})]})]})}),r.jsx(n_,{children:["Starter","Premium","Kombi"].map(s=>r.jsxs(a_,{children:[r.jsx(i_,{children:s}),a.map((u,c)=>r.jsxs(r_,{children:[r.jsx("span",{children:u.label}),r.jsx("span",{children:s==="Starter"?u.starter:s==="Premium"?u.premium:u.kombi})]},c))]},s))}),r.jsx(l_,{children:Q5})]})}const o_=p.div`
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
`,c_=p.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
`,u_=p.p`
  font-size: 0.95rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`,d_=p.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`,f_=p.table`
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
`,h_=p.div`
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`,m_=p.div`
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,g_=p.div`
  background: #e10073;
  color: white;
  padding: 1rem;
  font-weight: 800;
  font-size: 1.2rem;
  text-align: center;
`,p_=p.div`
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
`,b_=p.div`
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
`,x_=p.div`
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
`;function y_(){const a=[{label:"Fix-Betrag",bronze:"1.200 €",silber:"2.000 €",gold:"3.000 €"},{label:"Bonus Tor/Assist",bronze:"-",silber:"+50 €",gold:"+100 €"},{label:"Stories/Monat",bronze:"1",silber:"2",gold:"2-3"},{label:"Events",bronze:"-",silber:"-",gold:"✅ 1x/Jahr"}];return r.jsxs(o_,{children:[r.jsx(c_,{children:"👤 Spielerpatenschaften (diskret)"}),r.jsx(u_,{children:"Unterstützen Sie einen Spieler Ihrer Wahl - diskret, emotional und mit direkter Sichtbarkeit bei jedem Erfolg."}),r.jsx(d_,{children:r.jsxs(f_,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Merkmal"}),r.jsx("th",{children:"Bronze"}),r.jsx("th",{children:"Silber"}),r.jsx("th",{children:"Gold"})]})}),r.jsx("tbody",{children:a.map((s,u)=>r.jsxs("tr",{children:[r.jsx("td",{children:s.label}),r.jsx("td",{children:s.bronze}),r.jsx("td",{children:s.silber}),r.jsx("td",{children:s.gold})]},u))})]})}),r.jsx(h_,{children:["Bronze","Silber","Gold"].map(s=>r.jsxs(m_,{children:[r.jsx(g_,{children:s}),a.map((u,c)=>r.jsxs(p_,{children:[r.jsx("span",{children:u.label}),r.jsx("span",{children:s==="Bronze"?u.bronze:s==="Silber"?u.silber:u.gold})]},c))]},s))}),r.jsxs(b_,{children:[r.jsx("strong",{children:"📸 Beispiel - So sieht's aus:"}),r.jsx("br",{}),'"⚽ TOOOOR! Mertcan Tuncer bringt uns in Führung! 🔥',r.jsx("br",{}),'Danke an [Ihr Unternehmen] für die Unterstützung! 💪"',r.jsx("em",{children:"[Foto vom Torjubel]"})]}),r.jsxs(x_,{children:[r.jsx("strong",{children:"💡 Diskrete Handhabung:"}),' Nach außen wirkt es wie normales Sponsoring. Intern wissen Sie und das Team, dass Sie "Ihren" Spieler unterstützen.']})]})}const ld=[{id:"premium",label:"Premium"},{id:"vergleich",label:"Vergleich"},{id:"lokal",label:"Lokal"},{id:"starter",label:"Starter"},{id:"praemien",label:"Prämien"},{id:"bus",label:"Buswerbung"}],v_=p.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 3rem 1rem 1.5rem;
  text-align: center;
`,S_=p(Zi)`
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
`,j_=p.h1`
  color: white;
  font-size: clamp(1.8rem, 6vw, 3rem);
  font-weight: 900;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
`,w_=p.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`,E_=p.nav`
  position: sticky;
  top: 64px;
  z-index: 80;
  background: white;
  border-bottom: 1px solid #eee;
  transition: box-shadow 0.2s ease;

  ${({$stuck:a})=>a&&Yi`
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    `}
`,__=p.div`
  display: flex;
  gap: 0;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,z_=p.button`
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0.9rem 1.25rem;
  font-size: 0.85rem;
  font-weight: ${({$active:a})=>a?800:600};
  color: ${({$active:a})=>a?"#e10073":"#666"};
  border-bottom: 3px solid ${({$active:a})=>a?"#e10073":"transparent"};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #e10073;
    background: rgba(225, 0, 115, 0.04);
  }
`,Oa=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Os=p.section`
  padding: 3rem 0;
  overflow-x: hidden;
  scroll-margin-top: 130px;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,sd=p(Os)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`,Bi=p.div`
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,Na=p.h2`
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`,La=p.p`
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  color: #666;
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.6;
`,T_=p.h3`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 1.25rem;
  text-align: left;
  padding-left: 0.5rem;
  border-left: 4px solid #e10073;
`,C_=p.div`
  margin-top: 2.5rem;
`,H0=p.p`
  font-size: 0.9rem;
  color: #666;
  max-width: 860px;
  margin: 1rem auto 0 auto;
  line-height: 1.6;
  text-align: center;
  padding: 0 1rem;
`,A_=p.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    padding: 1.25rem 0.75rem;
  }
`,k_=p.h4`
  margin: 0 0 0.75rem 0;
  color: #e10073;
  font-weight: 800;
`,R_=p.div`
  @media (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`,M_=p.table`
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
`,D_=p.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #444;
  line-height: 1.6;
  font-size: 0.9rem;
`,B_=p.section`
  padding: 3rem 0;
  text-align: center;
  background: linear-gradient(135deg, #fff6fa 0%, #ffeef5 100%);
`,O_=p.a`
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
`,N_=Xi.filter(a=>a.tier==="premium"),L_=Xi.filter(a=>a.tier==="lokal"),U_=Xi.filter(a=>a.tier==="starter");function H_(){const a=Jt(),[s,u]=T.useState(ld[0].id),[c,d]=T.useState(!1),f=T.useRef(null);T.useEffect(()=>{if(a.hash){const h=a.hash.slice(1);setTimeout(()=>{document.getElementById(h)?.scrollIntoView({behavior:"smooth",block:"start"})},100)}},[a.hash]);const b=T.useCallback(()=>{d(window.scrollY>300)},[]);T.useEffect(()=>(window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)),[b]),T.useEffect(()=>(f.current=new IntersectionObserver(h=>{const m=h.filter(y=>y.isIntersecting);m.length>0&&u(m[0].target.id)},{rootMargin:"-140px 0px -60% 0px",threshold:0}),ld.forEach(({id:h})=>{const m=document.getElementById(h);m&&f.current.observe(m)}),()=>f.current?.disconnect()),[]);const v=h=>{document.getElementById(h)?.scrollIntoView({behavior:"smooth",block:"start"})};return r.jsxs(r.Fragment,{children:[r.jsxs(v_,{children:[r.jsx(S_,{to:"/sponsoring",children:"← Zurück zur Übersicht"}),r.jsx(j_,{children:"Sponsoring-Pakete im Detail"}),r.jsx(w_,{children:"Alle Leistungen auf einen Blick – von Premium-Partnerschaften bis zum Spieltag-Einstieg. Alle Preise individuell verhandelbar."})]}),r.jsx(E_,{$stuck:c,children:r.jsx(__,{children:ld.map(h=>r.jsx(z_,{$active:s===h.id,onClick:()=>v(h.id),children:h.label},h.id))})}),r.jsx(Os,{id:"premium",children:r.jsxs(Oa,{children:[r.jsxs(Bi,{children:[r.jsx(Na,{children:"Premium-Partnerschaften"}),r.jsx(La,{children:"Maximale Sichtbarkeit und exklusive Platzierungen für Ihr Unternehmen."})]}),r.jsx(ad,{packages:N_})]})}),r.jsx(sd,{id:"vergleich",children:r.jsxs(Oa,{children:[r.jsxs(Bi,{children:[r.jsx(Na,{children:"Pakete im Vergleich"}),r.jsx(La,{children:"Alle Leistungen der verschiedenen Pakete auf einen Blick vergleichen."})]}),r.jsx(JE,{})]})}),r.jsx(Os,{id:"lokal",children:r.jsxs(Oa,{children:[r.jsxs(Bi,{children:[r.jsx(Na,{children:"Lokale Werbemöglichkeiten"}),r.jsx(La,{children:"Starke Präsenz bei Heimspielen und regelmäßige Online-Sichtbarkeit."})]}),r.jsx(ad,{packages:L_}),r.jsx(H0,{children:"Bandenwerbung kann mit Social-Add-on kombiniert werden (Post oder Story-Erwähnung). Details gerne im Erstgespräch."})]})}),r.jsx(sd,{id:"starter",children:r.jsxs(Oa,{children:[r.jsxs(Bi,{children:[r.jsx(Na,{children:"Starter & Spieltag"}),r.jsx(La,{children:"Der ideale Einstieg ins Sponsoring mit direkter Spieltagspräsenz."})]}),r.jsx(ad,{packages:U_})]})}),r.jsx(Os,{id:"praemien",children:r.jsxs(Oa,{children:[r.jsxs(Bi,{children:[r.jsx(Na,{children:"Erfolgsbasierte Modelle"}),r.jsx(La,{children:"Prämien und Spielerpatenschaften – Sie zahlen bei sportlichem Erfolg."})]}),r.jsx(s_,{}),r.jsx(y_,{})]})}),r.jsx(sd,{id:"bus",children:r.jsxs(Oa,{children:[r.jsxs(Bi,{children:[r.jsx(Na,{children:"Buswerbung im Detail"}),r.jsx(La,{children:"Der Vereinsbus ist für alle Mannschaften im Einsatz – Herren, Damen, Jugend – und an fast jedem Wochenende unterwegs."})]}),r.jsxs(A_,{style:{maxWidth:900,margin:"0 auto 2rem"},children:[r.jsx("img",{src:"/vereinsbus.png",alt:"Vereinsbus SC Konstanz-Wollmatingen",style:{width:"100%",borderRadius:12,marginBottom:"1.5rem",display:"block"}}),r.jsxs(C_,{children:[r.jsx(T_,{children:"Verfügbare Werbeflächen"}),r.jsx(R_,{children:r.jsxs(M_,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Fläche"}),r.jsx("th",{children:"Größe (ca.)"}),r.jsx("th",{children:"Preis/Jahr"})]})}),r.jsx("tbody",{children:[...Ab,...kb].map(h=>r.jsxs("tr",{children:[r.jsx("td",{children:h.position}),r.jsx("td",{children:h.groesse}),r.jsx("td",{children:r.jsx("strong",{children:h.preis})})]},h.position))})]})})]}),r.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #f0f0f0"},children:[r.jsx(k_,{style:{fontSize:"1.1rem",marginBottom:"0.75rem"},children:"Zusatzoptionen"}),r.jsx(D_,{children:Rb.map((h,m)=>r.jsx("li",{children:h},m))})]})]}),r.jsx(H0,{children:Z5})]})}),r.jsx(B_,{children:r.jsxs(Oa,{children:[r.jsx(Na,{children:"Interesse geweckt?"}),r.jsx(La,{children:"Alle Pakete sind individuell anpassbar. Kontaktieren Sie uns für ein unverbindliches Erstgespräch."}),r.jsx(O_,{href:`mailto:${St.email}?subject=${encodeURIComponent("Interesse an Sponsoring-Paket")}`,children:"Jetzt anfragen"})]})}),r.jsx(eo,{})]})}function G_(){const{pathname:a}=Jt();return T.useEffect(()=>{window.scrollTo(0,0)},[a]),null}function $_(){return r.jsxs(ZS,{children:[r.jsx(G_,{}),r.jsxs(ES,{children:[r.jsx(Bn,{path:"/",element:r.jsxs(r.Fragment,{children:[r.jsx(ki,{}),r.jsx(bd,{to:"/sponsoring",replace:!0})]})}),r.jsx(Bn,{path:"/sponsoring",element:r.jsxs(r.Fragment,{children:[r.jsx(ki,{}),r.jsx(pw,{})]})}),r.jsx(Bn,{path:"/sponsoring-handoff",element:r.jsx(Kw,{})}),r.jsx(Bn,{path:"/sponsoring/club-500",element:r.jsxs(r.Fragment,{children:[r.jsx(ki,{}),r.jsx(hE,{})]})}),r.jsx(Bn,{path:"/sponsoring/pakete",element:r.jsxs(r.Fragment,{children:[r.jsx(ki,{}),r.jsx(H_,{})]})}),r.jsx(Bn,{path:"/mockup-generator",element:r.jsxs(r.Fragment,{children:[r.jsx(ki,{}),r.jsx(c6,{})]})}),r.jsx(Bn,{path:"/renovierung",element:r.jsxs(r.Fragment,{children:[r.jsx(ki,{}),r.jsx(P5,{})]})}),r.jsx(Bn,{path:"*",element:r.jsx(bd,{to:"/sponsoring",replace:!0})})]})]})}const V_={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");Dy.createRoot(document.getElementById("root")).render(r.jsx(T.StrictMode,{children:r.jsx(Rv,{theme:V_,children:r.jsx($_,{})})}));
