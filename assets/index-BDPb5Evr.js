(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function A1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Do={exports:{}},hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function _1(){if(_m)return hi;_m=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,d,m){var b=null;if(m!==void 0&&(b=""+m),d.key!==void 0&&(b=""+d.key),"key"in d){m={};for(var z in d)z!=="key"&&(m[z]=d[z])}else m=d;return d=m.ref,{$$typeof:i,type:c,key:b,ref:d!==void 0?d:null,props:m}}return hi.Fragment=u,hi.jsx=o,hi.jsxs=o,hi}var wm;function w1(){return wm||(wm=1,Do.exports=_1()),Do.exports}var s=w1(),Oo={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function R1(){if(Rm)return ie;Rm=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,Y={};function Z(x,N,G){this.props=x,this.context=N,this.refs=Y,this.updater=G||k}Z.prototype.isReactComponent={},Z.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},Z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=Z.prototype;function $(x,N,G){this.props=x,this.context=N,this.refs=Y,this.updater=G||k}var X=$.prototype=new H;X.constructor=$,L(X,Z.prototype),X.isPureReactComponent=!0;var ae=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(x,N,G,V,F,se){return G=se.ref,{$$typeof:i,type:x,key:N,ref:G!==void 0?G:null,props:se}}function Ae(x,N){return W(x.type,N,void 0,void 0,void 0,x.props)}function ze(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function nt(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(G){return N[G]})}var lt=/\/+/g;function Ye(x,N){return typeof x=="object"&&x!==null&&x.key!=null?nt(""+x.key):N.toString(36)}function Xt(){}function Qt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Xt,Xt):(x.status="pending",x.then(function(N){x.status==="pending"&&(x.status="fulfilled",x.value=N)},function(N){x.status==="pending"&&(x.status="rejected",x.reason=N)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function qe(x,N,G,V,F){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(se){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case i:case u:ee=!0;break;case T:return ee=x._init,qe(ee(x._payload),N,G,V,F)}}if(ee)return F=F(x),ee=V===""?"."+Ye(x,0):V,ae(F)?(G="",ee!=null&&(G=ee.replace(lt,"$&/")+"/"),qe(F,N,G,"",function(Pe){return Pe})):F!=null&&(ze(F)&&(F=Ae(F,G+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(lt,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(x))for(var pe=0;pe<x.length;pe++)V=x[pe],se=Ve+Ye(V,pe),ee+=qe(V,N,G,se,F);else if(pe=U(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(V=x.next()).done;)V=V.value,se=Ve+Ye(V,pe++),ee+=qe(V,N,G,se,F);else if(se==="object"){if(typeof x.then=="function")return qe(Qt(x),N,G,V,F);throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function M(x,N,G){if(x==null)return x;var V=[],F=0;return qe(x,V,"","",function(se){return N.call(G,se,F++)}),V}function q(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(G){(x._status===0||x._status===-1)&&(x._status=1,x._result=G)},function(G){(x._status===0||x._status===-1)&&(x._status=2,x._result=G)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function oe(){}return ie.Children={map:M,forEach:function(x,N,G){M(x,function(){N.apply(this,arguments)},G)},count:function(x){var N=0;return M(x,function(){N++}),N},toArray:function(x){return M(x,function(N){return N})||[]},only:function(x){if(!ze(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=Z,ie.Fragment=o,ie.Profiler=d,ie.PureComponent=$,ie.StrictMode=c,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Q.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cloneElement=function(x,N,G){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=L({},x.props),F=x.key,se=void 0;if(N!=null)for(ee in N.ref!==void 0&&(se=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=G;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(x.type,F,void 0,void 0,se,V)},ie.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ie.createElement=function(x,N,G){var V,F={},se=null;if(N!=null)for(V in N.key!==void 0&&(se=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=G;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(x&&x.defaultProps)for(V in ee=x.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(x,se,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:z,render:x}},ie.isValidElement=ze,ie.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:q}},ie.memo=function(x,N){return{$$typeof:g,type:x,compare:N===void 0?null:N}},ie.startTransition=function(x){var N=Q.T,G={};Q.T=G;try{var V=x(),F=Q.S;F!==null&&F(G,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(oe,P)}catch(se){P(se)}finally{Q.T=N}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(x){return Q.H.use(x)},ie.useActionState=function(x,N,G){return Q.H.useActionState(x,N,G)},ie.useCallback=function(x,N){return Q.H.useCallback(x,N)},ie.useContext=function(x){return Q.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,N){return Q.H.useDeferredValue(x,N)},ie.useEffect=function(x,N,G){var V=Q.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,N)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(x,N,G){return Q.H.useImperativeHandle(x,N,G)},ie.useInsertionEffect=function(x,N){return Q.H.useInsertionEffect(x,N)},ie.useLayoutEffect=function(x,N){return Q.H.useLayoutEffect(x,N)},ie.useMemo=function(x,N){return Q.H.useMemo(x,N)},ie.useOptimistic=function(x,N){return Q.H.useOptimistic(x,N)},ie.useReducer=function(x,N,G){return Q.H.useReducer(x,N,G)},ie.useRef=function(x){return Q.H.useRef(x)},ie.useState=function(x){return Q.H.useState(x)},ie.useSyncExternalStore=function(x,N,G){return Q.H.useSyncExternalStore(x,N,G)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.1.0",ie}var Mm;function xs(){return Mm||(Mm=1,Oo.exports=R1()),Oo.exports}var R=xs();const xi=A1(R);var Co={exports:{}},mi={},Bo={exports:{}},No={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function M1(){return Dm||(Dm=1,function(i){function u(M,q){var P=M.length;M.push(q);e:for(;0<P;){var oe=P-1>>>1,x=M[oe];if(0<d(x,q))M[oe]=q,M[P]=x,P=oe;else break e}}function o(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var q=M[0],P=M.pop();if(P!==q){M[0]=P;e:for(var oe=0,x=M.length,N=x>>>1;oe<N;){var G=2*(oe+1)-1,V=M[G],F=G+1,se=M[F];if(0>d(V,P))F<x&&0>d(se,V)?(M[oe]=se,M[F]=P,oe=F):(M[oe]=V,M[G]=P,oe=G);else if(F<x&&0>d(se,P))M[oe]=se,M[F]=P,oe=F;else break e}}return q}function d(M,q){var P=M.sortIndex-q.sortIndex;return P!==0?P:M.id-q.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var b=Date,z=b.now();i.unstable_now=function(){return b.now()-z}}var v=[],g=[],T=1,C=null,U=3,k=!1,L=!1,Y=!1,Z=!1,H=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ae(M){for(var q=o(g);q!==null;){if(q.callback===null)c(g);else if(q.startTime<=M)c(g),q.sortIndex=q.expirationTime,u(v,q);else break;q=o(g)}}function Q(M){if(Y=!1,ae(M),!L)if(o(v)!==null)L=!0,le||(le=!0,Ye());else{var q=o(g);q!==null&&qe(Q,q.startTime-M)}}var le=!1,W=-1,Ae=5,ze=-1;function nt(){return Z?!0:!(i.unstable_now()-ze<Ae)}function lt(){if(Z=!1,le){var M=i.unstable_now();ze=M;var q=!0;try{e:{L=!1,Y&&(Y=!1,$(W),W=-1),k=!0;var P=U;try{t:{for(ae(M),C=o(v);C!==null&&!(C.expirationTime>M&&nt());){var oe=C.callback;if(typeof oe=="function"){C.callback=null,U=C.priorityLevel;var x=oe(C.expirationTime<=M);if(M=i.unstable_now(),typeof x=="function"){C.callback=x,ae(M),q=!0;break t}C===o(v)&&c(v),ae(M)}else c(v);C=o(v)}if(C!==null)q=!0;else{var N=o(g);N!==null&&qe(Q,N.startTime-M),q=!1}}break e}finally{C=null,U=P,k=!1}q=void 0}}finally{q?Ye():le=!1}}}var Ye;if(typeof X=="function")Ye=function(){X(lt)};else if(typeof MessageChannel<"u"){var Xt=new MessageChannel,Qt=Xt.port2;Xt.port1.onmessage=lt,Ye=function(){Qt.postMessage(null)}}else Ye=function(){H(lt,0)};function qe(M,q){W=H(function(){M(i.unstable_now())},q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(M){switch(U){case 1:case 2:case 3:var q=3;break;default:q=U}var P=U;U=q;try{return M()}finally{U=P}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var P=U;U=M;try{return q()}finally{U=P}},i.unstable_scheduleCallback=function(M,q,P){var oe=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?oe+P:oe):P=oe,M){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,M={id:T++,callback:q,priorityLevel:M,startTime:P,expirationTime:x,sortIndex:-1},P>oe?(M.sortIndex=P,u(g,M),o(v)===null&&M===o(g)&&(Y?($(W),W=-1):Y=!0,qe(Q,P-oe))):(M.sortIndex=x,u(v,M),L||k||(L=!0,le||(le=!0,Ye()))),M},i.unstable_shouldYield=nt,i.unstable_wrapCallback=function(M){var q=U;return function(){var P=U;U=q;try{return M.apply(this,arguments)}finally{U=P}}}}(No)),No}var Om;function D1(){return Om||(Om=1,Bo.exports=M1()),Bo.exports}var Uo={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function O1(){if(Cm)return tt;Cm=1;var i=xs();function u(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(v,g,T){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:C==null?null:""+C,children:v,containerInfo:g,implementation:T}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(v,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return m(v,g,null,T)},tt.flushSync=function(v){var g=b.T,T=c.p;try{if(b.T=null,c.p=2,v)return v()}finally{b.T=g,c.p=T,c.d.f()}},tt.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(v,g))},tt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},tt.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var T=g.as,C=z(T,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?c.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:U,fetchPriority:k}):T==="script"&&c.d.X(v,{crossOrigin:C,integrity:U,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},tt.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=z(g.as,g.crossOrigin);c.d.M(v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(v)},tt.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,C=z(T,g.crossOrigin);c.d.L(v,T,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},tt.preloadModule=function(v,g){if(typeof v=="string")if(g){var T=z(g.as,g.crossOrigin);c.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(v)},tt.requestFormReset=function(v){c.d.r(v)},tt.unstable_batchedUpdates=function(v,g){return v(g)},tt.useFormState=function(v,g,T){return b.H.useFormState(v,g,T)},tt.useFormStatus=function(){return b.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Bm;function C1(){if(Bm)return Uo.exports;Bm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Uo.exports=O1(),Uo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function B1(){if(Nm)return mi;Nm=1;var i=D1(),u=xs(),o=C1();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(m(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return z(l),e;if(r===a)return z(l),t;r=r.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,h=l.child;h;){if(h===n){f=!0,n=l,a=r;break}if(h===a){f=!0,a=l,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=l;break}if(h===a){f=!0,a=r,n=l;break}h=h.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,C=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Xt=Symbol.for("react.client.reference");function Qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Profiler";case Y:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList";case ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case X:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Qt(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Qt(e(t))}catch{}}return null}var qe=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},oe=[],x=-1;function N(e){return{current:e}}function G(e){0>x||(e.current=oe[x],oe[x]=null,x--)}function V(e,t){x++,oe[x]=e.current,e.current=t}var F=N(null),se=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(se,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tm(t),e=nm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(F),V(F,e)}function Pe(){G(F),G(se),G(ee)}function Gn(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=nm(t,e.type);t!==n&&(V(se,e),V(F,n))}function Kt(e){se.current===e&&(G(F),G(se)),Ve.current===e&&(G(Ve),ci._currentValue=P)}var St=Object.prototype.hasOwnProperty,bu=i.unstable_scheduleCallback,yu=i.unstable_cancelCallback,l0=i.unstable_shouldYield,i0=i.unstable_requestPaint,Ut=i.unstable_now,r0=i.unstable_getCurrentPriorityLevel,Bs=i.unstable_ImmediatePriority,Ns=i.unstable_UserBlockingPriority,_i=i.unstable_NormalPriority,u0=i.unstable_LowPriority,Us=i.unstable_IdlePriority,c0=i.log,o0=i.unstable_setDisableYieldValue,pl=null,ft=null;function mn(e){if(typeof c0=="function"&&o0(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(pl,e)}catch{}}var dt=Math.clz32?Math.clz32:d0,s0=Math.log,f0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(s0(e)/f0|0)|0}var wi=256,Ri=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=Yn(a):(f&=h,f!==0?l=Yn(f):n||(n=h&~e,n!==0&&(l=Yn(n))))):(h=a&~r,h!==0?l=Yn(h):f!==0?l=Yn(f):n||(n=a&~e,n!==0&&(l=Yn(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function h0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hs(){var e=wi;return wi<<=1,(wi&4194048)===0&&(wi=256),e}function ks(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function vu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function m0(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,p=e.expirationTimes,A=e.hiddenUpdates;for(n=f&~n;0<n;){var D=31-dt(n),B=1<<D;h[D]=0,p[D]=-1;var _=A[D];if(_!==null)for(A[D]=null,D=0;D<_.length;D++){var w=_[D];w!==null&&(w.lane&=-536870913)}n&=~B}a!==0&&Ls(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Ls(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function xu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ys(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Sm(e.type))}function g0(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var gn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+gn,it="__reactProps$"+gn,ca="__reactContainer$"+gn,ju="__reactEvents$"+gn,p0="__reactListeners$"+gn,b0="__reactHandles$"+gn,qs="__reactResources$"+gn,vl="__reactMarker$"+gn;function zu(e){delete e[Ie],delete e[it],delete e[ju],delete e[p0],delete e[b0]}function oa(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ca]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rm(e);e!==null;){if(n=e[Ie])return n;e=rm(e)}return t}e=n,n=e.parentNode}return null}function sa(e){if(e=e[Ie]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function fa(e){var t=e[qs];return t||(t=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[vl]=!0}var Vs=new Set,Zs={};function qn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Zs[e]=t,e=0;e<t.length;e++)Vs.add(t[e])}var y0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xs={},Qs={};function v0(e){return St.call(Qs,e)?!0:St.call(Xs,e)?!1:y0.test(e)?Qs[e]=!0:(Xs[e]=!0,!1)}function Di(e,t,n){if(v0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Oi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Eu,Ks;function ha(e){if(Eu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eu=t&&t[1]||"",Ks=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Eu+e+Ks}var Tu=!1;function Au(e,t){if(!e||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(w){var _=w}Reflect.construct(e,[],B)}else{try{B.call()}catch(w){_=w}e.call(B.prototype)}}else{try{throw Error()}catch(w){_=w}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(w){if(w&&_&&typeof w.stack=="string")return[w.stack,_.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var p=f.split(`
`),A=h.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===A.length)for(a=p.length-1,l=A.length-1;1<=a&&0<=l&&p[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==A[l]){var D=`
`+p[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=l);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function x0(e){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return Au(e.type,!1);case 11:return Au(e.type.render,!1);case 1:return Au(e.type,!0);case 31:return ha("Activity");default:return""}}function Js(e){try{var t="";do t+=x0(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $s(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S0(e){var t=$s(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=S0(e))}function Ws(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=$s(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var j0=/[\n"\\]/g;function zt(e){return e.replace(j0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _u(e,t,n,a,l,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?wu(e,f,jt(t)):n!=null?wu(e,f,jt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function Fs(e,t,n,a,l,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function wu(e,t,n){t==="number"&&Bi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ma(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ps(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function Is(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(qe(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ef(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||z0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function tf(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&ef(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&ef(e,r,t[r])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(e){return T0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,ba=null;function nf(e){var t=sa(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(_u(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[it]||null;if(!l)throw Error(c(90));_u(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ws(a)}break e;case"textarea":Ps(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}}}var Ou=!1;function af(e,t,n){if(Ou)return e(t,n);Ou=!0;try{var a=e(t);return a}finally{if(Ou=!1,(pa!==null||ba!==null)&&(xr(),pa&&(t=pa,e=ba,ba=pa=null,nf(t),e)))for(t=0;t<e.length;t++)nf(e[t])}}function Sl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[it]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if($t)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{Cu=!1}var pn=null,Bu=null,Ui=null;function lf(){if(Ui)return Ui;var e,t=Bu,n=t.length,a,l="value"in pn?pn.value:pn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return Ui=l.slice(e,1<a?1-a:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function rf(){return!1}function rt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ki:rf,this.isPropagationStopped=rf,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=rt(Vn),zl=T({},Vn,{view:0,detail:0}),A0=rt(zl),Nu,Uu,El,Gi=T({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==El&&(El&&e.type==="mousemove"?(Nu=e.screenX-El.screenX,Uu=e.screenY-El.screenY):Uu=Nu=0,El=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),uf=rt(Gi),_0=T({},Gi,{dataTransfer:0}),w0=rt(_0),R0=T({},zl,{relatedTarget:0}),Hu=rt(R0),M0=T({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=rt(M0),O0=T({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=rt(O0),B0=T({},Vn,{data:0}),cf=rt(B0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=H0[e])?!!t[e]:!1}function ku(){return k0}var L0=T({},zl,{key:function(e){if(e.key){var t=N0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G0=rt(L0),Y0=T({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=rt(Y0),q0=T({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),V0=rt(q0),Z0=T({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=rt(Z0),Q0=T({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K0=rt(Q0),J0=T({},Vn,{newState:0,oldState:0}),$0=rt(J0),W0=[9,13,27,32],Lu=$t&&"CompositionEvent"in window,Tl=null;$t&&"documentMode"in document&&(Tl=document.documentMode);var F0=$t&&"TextEvent"in window&&!Tl,sf=$t&&(!Lu||Tl&&8<Tl&&11>=Tl),ff=" ",df=!1;function hf(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function P0(e,t){switch(e){case"compositionend":return mf(t);case"keypress":return t.which!==32?null:(df=!0,ff);case"textInput":return e=t.data,e===ff&&df?null:e;default:return null}}function I0(e,t){if(ya)return e==="compositionend"||!Lu&&hf(e,t)?(e=lf(),Ui=Bu=pn=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sf&&t.locale!=="ko"?null:t.data;default:return null}}var ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ep[e.type]:t==="textarea"}function pf(e,t,n,a){pa?ba?ba.push(a):ba=[a]:pa=a,t=Ar(t,"onChange"),0<t.length&&(n=new Li("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Al=null,_l=null;function tp(e){Wh(e,0)}function Yi(e){var t=xl(e);if(Ws(t))return e}function bf(e,t){if(e==="change")return t}var yf=!1;if($t){var Gu;if($t){var Yu="oninput"in document;if(!Yu){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),Yu=typeof vf.oninput=="function"}Gu=Yu}else Gu=!1;yf=Gu&&(!document.documentMode||9<document.documentMode)}function xf(){Al&&(Al.detachEvent("onpropertychange",Sf),_l=Al=null)}function Sf(e){if(e.propertyName==="value"&&Yi(_l)){var t=[];pf(t,_l,e,Du(e)),af(tp,t)}}function np(e,t,n){e==="focusin"?(xf(),Al=t,_l=n,Al.attachEvent("onpropertychange",Sf)):e==="focusout"&&xf()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(_l)}function lp(e,t){if(e==="click")return Yi(t)}function ip(e,t){if(e==="input"||e==="change")return Yi(t)}function rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:rp;function wl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!St.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var n=jf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function Ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var up=$t&&"documentMode"in document&&11>=document.documentMode,va=null,Vu=null,Rl=null,Zu=!1;function Af(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||va==null||va!==Bi(a)||(a=va,"selectionStart"in a&&qu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rl&&wl(Rl,a)||(Rl=a,a=Ar(Vu,"onSelect"),0<a.length&&(t=new Li("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xa={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},Xu={},_f={};$t&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Xn(e){if(Xu[e])return Xu[e];if(!xa[e])return e;var t=xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _f)return Xu[e]=t[n];return e}var wf=Xn("animationend"),Rf=Xn("animationiteration"),Mf=Xn("animationstart"),cp=Xn("transitionrun"),op=Xn("transitionstart"),sp=Xn("transitioncancel"),Df=Xn("transitionend"),Of=new Map,Qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qu.push("scrollEnd");function Ot(e,t){Of.set(e,t),qn(t,[e])}var Cf=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var n=Cf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Js(t)},Cf.set(e,t),t)}return{value:e,source:t,stack:Js(t)}}var Tt=[],Sa=0,Ku=0;function qi(){for(var e=Sa,t=Ku=Sa=0;t<e;){var n=Tt[t];Tt[t++]=null;var a=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var r=Tt[t];if(Tt[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Bf(n,l,r)}}function Vi(e,t,n,a){Tt[Sa++]=e,Tt[Sa++]=t,Tt[Sa++]=n,Tt[Sa++]=a,Ku|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ju(e,t,n,a){return Vi(e,t,n,a),Zi(e)}function ja(e,t){return Vi(e,null,null,t),Zi(e)}function Bf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-dt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function Zi(e){if(50<ei)throw ei=0,eo=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var za={};function fp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,a){return new fp(e,t,n,a)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xi(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")$u(e)&&(f=1);else if(typeof e=="string")f=h1(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ze:return e=mt(31,n,t,l),e.elementType=ze,e.lanes=r,e;case L:return Qn(n.children,l,r,t);case Y:f=8,l|=24;break;case Z:return e=mt(12,n,t,l|2),e.elementType=Z,e.lanes=r,e;case Q:return e=mt(13,n,t,l),e.elementType=Q,e.lanes=r,e;case le:return e=mt(19,n,t,l),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case X:f=10;break e;case $:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Ae:f=16,a=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=mt(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function Qn(e,t,n,a){return e=mt(7,e,a,t),e.lanes=n,e}function Wu(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Fu(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ea=[],Ta=0,Qi=null,Ki=0,At=[],_t=0,Kn=null,Ft=1,Pt="";function Jn(e,t){Ea[Ta++]=Ki,Ea[Ta++]=Qi,Qi=e,Ki=t}function Uf(e,t,n){At[_t++]=Ft,At[_t++]=Pt,At[_t++]=Kn,Kn=e;var a=Ft;e=Pt;var l=32-dt(a)-1;a&=~(1<<l),n+=1;var r=32-dt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,Ft=1<<32-dt(t)+l|n<<l|a,Pt=r+e}else Ft=1<<r|n<<l|a,Pt=e}function Pu(e){e.return!==null&&(Jn(e,1),Uf(e,1,0))}function Iu(e){for(;e===Qi;)Qi=Ea[--Ta],Ea[Ta]=null,Ki=Ea[--Ta],Ea[Ta]=null;for(;e===Kn;)Kn=At[--_t],At[_t]=null,Pt=At[--_t],At[_t]=null,Ft=At[--_t],At[_t]=null}var at=null,Oe=null,ge=!1,$n=null,Ht=!1,ec=Error(c(519));function Wn(e){var t=Error(c(418,""));throw Ol(Et(t,e)),ec}function Hf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[it]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ni.length;n++)de(ni[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Fs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ci(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Is(t,a.value,a.defaultValue,a.children),Ci(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||em(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=_r),t=!0):t=!1,t||Wn(e)}function kf(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:at=at.return}}function Ml(e){if(e!==at)return!1;if(!ge)return kf(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bo(e.type,e.memoizedProps)),n=!n),n&&Oe&&Wn(e),kf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,On(e.type)?(e=So,So=null,Oe=e):Oe=t):Oe=at?Bt(e.stateNode.nextSibling):null;return!0}function Dl(){Oe=at=null,ge=!1}function Lf(){var e=$n;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),$n=null),e}function Ol(e){$n===null?$n=[e]:$n.push(e)}var tc=N(null),Fn=null,It=null;function bn(e,t,n){V(tc,t._currentValue),t._currentValue=n}function en(e){e._currentValue=tc.current,G(tc)}function nc(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ac(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var p=0;p<t.length;p++)if(h.context===t[p]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),nc(r.return,n,e),a||(f=null);break e}r=h.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),nc(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Cl(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var h=l.type;ht(l.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(l===Ve.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ci):e=[ci])}l=l.return}e!==null&&ac(t,e,n,a),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Gf(Fn,e)}function $i(e,t){return Fn===null&&Pn(e),Gf(e,t)}function Gf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(c(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var dp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},hp=i.unstable_scheduleCallback,mp=i.unstable_NormalPriority,Le={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new dp,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&hp(mp,function(){e.controller.abort()})}var Nl=null,ic=0,Aa=0,_a=null;function gp(e,t){if(Nl===null){var n=Nl=[];ic=0,Aa=uo(),_a={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ic++,t.then(Yf,Yf),t}function Yf(){if(--ic===0&&Nl!==null){_a!==null&&(_a.status="fulfilled");var e=Nl;Nl=null,Aa=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var qf=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&gp(e,t),qf!==null&&qf(e,t)};var In=N(null);function rc(){var e=In.current;return e!==null?e:Te.pooledCache}function Wi(e,t){t===null?V(In,In.current):V(In,t.pool)}function Vf(){var e=rc();return e===null?null:{parent:Le._currentValue,pool:e}}var Ul=Error(c(460)),Zf=Error(c(474)),Fi=Error(c(542)),uc={then:function(){}};function Xf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pi(){}function Qf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Pi,Pi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e;default:if(typeof t.status=="string")t.then(Pi,Pi);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jf(e),e}throw Hl=t,Ul}}var Hl=null;function Kf(){if(Hl===null)throw Error(c(459));var e=Hl;return Hl=null,e}function Jf(e){if(e===Ul||e===Fi)throw Error(c(483))}var yn=!1;function cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Zi(e),Bf(e,null,n),t}return Vi(e,a,t,n),Zi(e)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Gs(e,n)}}function sc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fc=!1;function Ll(){if(fc){var e=_a;if(e!==null)throw e}}function Gl(e,t,n,a){fc=!1;var l=e.updateQueue;yn=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var p=h,A=p.next;p.next=null,f===null?r=A:f.next=A,f=p;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==f&&(h===null?D.firstBaseUpdate=A:h.next=A,D.lastBaseUpdate=p))}if(r!==null){var B=l.baseState;f=0,D=A=p=null,h=r;do{var _=h.lane&-536870913,w=_!==h.lane;if(w?(he&_)===_:(a&_)===_){_!==0&&_===Aa&&(fc=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;_=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){B=ne.call(je,B,_);break e}B=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,_=typeof ne=="function"?ne.call(je,B,_):ne,_==null)break e;B=T({},B,_);break e;case 2:yn=!0}}_=h.callback,_!==null&&(e.flags|=64,w&&(e.flags|=8192),w=l.callbacks,w===null?l.callbacks=[_]:w.push(_))}else w={lane:_,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(A=D=w,p=B):D=D.next=w,f|=_;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;w=h,h=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);D===null&&(p=B),l.baseState=p,l.firstBaseUpdate=A,l.lastBaseUpdate=D,r===null&&(l.shared.lanes=0),wn|=f,e.lanes=f,e.memoizedState=B}}function $f(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Wf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$f(n[e],t)}var wa=N(null),Ii=N(0);function Ff(e,t){e=cn,V(Ii,e),V(wa,t),cn=e|t.baseLanes}function dc(){V(Ii,cn),V(wa,wa.current)}function hc(){cn=Ii.current,G(wa),G(Ii)}var Sn=0,ue=null,xe=null,Ue=null,er=!1,Ra=!1,ea=!1,tr=0,Yl=0,Ma=null,bp=0;function Be(){throw Error(c(321))}function mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function gc(e,t,n,a,l,r){return Sn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Bd:Nd,ea=!1,r=n(a,l),ea=!1,Ra&&(r=If(t,n,a,l)),Pf(e),r}function Pf(e){M.H=ur;var t=xe!==null&&xe.next!==null;if(Sn=0,Ue=xe=ue=null,er=!1,Yl=0,Ma=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Ji(e)&&(Xe=!0))}function If(e,t,n,a){ue=e;var l=0;do{if(Ra&&(Ma=null),Yl=0,Ra=!1,25<=l)throw Error(c(301));if(l+=1,Ue=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}M.H=Ep,r=t(n,a)}while(Ra);return r}function yp(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?ql(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ue.flags|=1024),t}function pc(){var e=tr!==0;return tr=0,e}function bc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yc(e){if(er){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}er=!1}Sn=0,Ue=xe=ue=null,Ra=!1,Yl=tr=0,Ma=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function He(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var t=Yl;return Yl+=1,Ma===null&&(Ma=[]),e=Qf(Ma,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Bd:Nd),e}function nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===X)return et(e)}throw Error(c(438,String(e)))}function xc(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vc(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=nt;return t.index++,n}function tn(e,t){return typeof t=="function"?t(e):t}function ar(e){var t=He();return Sc(t,xe,e)}function Sc(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=f=null,p=null,A=t,D=!1;do{var B=A.lane&-536870913;if(B!==A.lane?(he&B)===B:(Sn&B)===B){var _=A.revertLane;if(_===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),B===Aa&&(D=!0);else if((Sn&_)===_){A=A.next,_===Aa&&(D=!0);continue}else B={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},p===null?(h=p=B,f=r):p=p.next=B,ue.lanes|=_,wn|=_;B=A.action,ea&&n(r,B),r=A.hasEagerState?A.eagerState:n(r,B)}else _={lane:B,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},p===null?(h=p=_,f=r):p=p.next=_,ue.lanes|=B,wn|=B;A=A.next}while(A!==null&&A!==t);if(p===null?f=r:p.next=h,!ht(r,e.memoizedState)&&(Xe=!0,D&&(n=_a,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function jc(e){var t=He(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);ht(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function ed(e,t,n){var a=ue,l=He(),r=ge;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!ht((xe||l).memoizedState,n);f&&(l.memoizedState=n,Xe=!0),l=l.queue;var h=ad.bind(null,a,l,e);if(Vl(2048,8,h,[e]),l.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,Da(9,lr(),nd.bind(null,a,l,n,t),null),Te===null)throw Error(c(349));r||(Sn&124)!==0||td(a,t,n)}return n}function td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=vc(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nd(e,t,n,a){t.value=n,t.getSnapshot=a,ld(t)&&id(e)}function ad(e,t,n){return n(function(){ld(t)&&id(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function id(e){var t=ja(e,2);t!==null&&vt(t,e,2)}function zc(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),ea){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t}function rd(e,t,n,a){return e.baseState=n,Sc(e,xe,typeof a=="function"?a:tn)}function vp(e,t,n,a,l){if(rr(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};M.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,ud(t,r)):(r.next=n.next,t.pending=n.next=r)}}function ud(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=M.T,f={};M.T=f;try{var h=n(l,a),p=M.S;p!==null&&p(f,h),cd(e,t,h)}catch(A){Ec(e,t,A)}finally{M.T=r}}else try{r=n(l,a),cd(e,t,r)}catch(A){Ec(e,t,A)}}function cd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){od(e,t,a)},function(a){return Ec(e,t,a)}):od(e,t,n)}function od(e,t,n){t.status="fulfilled",t.value=n,sd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ud(e,n)))}function Ec(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,sd(t),t=t.next;while(t!==a)}e.action=null}function sd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fd(e,t){return t}function dd(e,t){if(ge){var n=Te.formState;if(n!==null){e:{var a=ue;if(ge){if(Oe){t:{for(var l=Oe,r=Ht;l.nodeType!==8;){if(!r){l=null;break t}if(l=Bt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Oe=Bt(l.nextSibling),a=l.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fd,lastRenderedState:t},n.queue=a,n=Dd.bind(null,ue,a),a.dispatch=n,a=zc(!1),r=Rc.bind(null,ue,!1,a.queue),a=ut(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=vp.bind(null,ue,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function hd(e){var t=He();return md(t,xe,e)}function md(e,t,n){if(t=Sc(e,t,fd)[0],e=ar(tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ql(t)}catch(f){throw f===Ul?Fi:f}else a=t;t=He();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Da(9,lr(),xp.bind(null,l,n),null)),[a,r,e]}function xp(e,t){e.action=t}function gd(e){var t=He(),n=xe;if(n!==null)return md(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Da(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=vc(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function lr(){return{destroy:void 0,resource:void 0}}function pd(){return He().memoizedState}function ir(e,t,n,a){var l=ut();a=a===void 0?null:a,ue.flags|=e,l.memoizedState=Da(1|t,lr(),n,a)}function Vl(e,t,n,a){var l=He();a=a===void 0?null:a;var r=l.memoizedState.inst;xe!==null&&a!==null&&mc(a,xe.memoizedState.deps)?l.memoizedState=Da(t,r,n,a):(ue.flags|=e,l.memoizedState=Da(1|t,r,n,a))}function bd(e,t){ir(8390656,8,e,t)}function yd(e,t){Vl(2048,8,e,t)}function vd(e,t){return Vl(4,2,e,t)}function xd(e,t){return Vl(4,4,e,t)}function Sd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jd(e,t,n){n=n!=null?n.concat([e]):null,Vl(4,4,Sd.bind(null,t,e),n)}function Tc(){}function zd(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&mc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&mc(t,a[1]))return a[0];if(a=e(),ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function Ac(e,t,n){return n===void 0||(Sn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=_h(),ue.lanes|=e,wn|=e,n)}function Td(e,t,n,a){return ht(n,t)?n:wa.current!==null?(e=Ac(e,n,a),ht(e,t)||(Xe=!0),e):(Sn&42)===0?(Xe=!0,e.memoizedState=n):(e=_h(),ue.lanes|=e,wn|=e,t)}function Ad(e,t,n,a,l){var r=q.p;q.p=r!==0&&8>r?r:8;var f=M.T,h={};M.T=h,Rc(e,!1,t,n);try{var p=l(),A=M.S;if(A!==null&&A(h,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var D=pp(p,a);Zl(e,t,D,yt(e))}else Zl(e,t,a,yt(e))}catch(B){Zl(e,t,{then:function(){},status:"rejected",reason:B},yt())}finally{q.p=r,M.T=f}}function Sp(){}function _c(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=_d(e).queue;Ad(e,l,t,P,n===null?Sp:function(){return wd(e),n(a)})}function _d(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wd(e){var t=_d(e).next.queue;Zl(e,t,{},yt())}function wc(){return et(ci)}function Rd(){return He().memoizedState}function Md(){return He().memoizedState}function jp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=vn(n);var a=xn(t,e,n);a!==null&&(vt(a,t,n),kl(a,t,n)),t={cache:lc()},e.payload=t;return}t=t.return}}function zp(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},rr(e)?Od(t,n):(n=Ju(e,t,n,a),n!==null&&(vt(n,e,a),Cd(n,t,a)))}function Dd(e,t,n){var a=yt();Zl(e,t,n,a)}function Zl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(rr(e))Od(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(l.hasEagerState=!0,l.eagerState=h,ht(h,f))return Vi(e,t,l,0),Te===null&&qi(),!1}catch{}finally{}if(n=Ju(e,t,l,a),n!==null)return vt(n,e,a),Cd(n,t,a),!0}return!1}function Rc(e,t,n,a){if(a={lane:2,revertLane:uo(),action:a,hasEagerState:!1,eagerState:null,next:null},rr(e)){if(t)throw Error(c(479))}else t=Ju(e,n,a,2),t!==null&&vt(t,e,2)}function rr(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Od(e,t){Ra=er=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Gs(e,n)}}var ur={readContext:et,use:nr,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},Bd={readContext:et,use:nr,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:bd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ir(4194308,4,Sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ir(4194308,4,e,t)},useInsertionEffect:function(e,t){ir(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var l=n(t);if(ea){mn(!0);try{n(t)}finally{mn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=zp.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=zc(e);var t=e.queue,n=Dd.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Tc,useDeferredValue:function(e,t){var n=ut();return Ac(n,e,t)},useTransition:function(){var e=zc(!1);return e=Ad.bind(null,ue,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,l=ut();if(ge){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Te===null)throw Error(c(349));(he&124)!==0||td(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,bd(ad.bind(null,a,r,e),[e]),a.flags|=2048,Da(9,lr(),nd.bind(null,a,r,n,t),null),n},useId:function(){var e=ut(),t=Te.identifierPrefix;if(ge){var n=Pt,a=Ft;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=bp++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:wc,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rc.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:xc,useCacheRefresh:function(){return ut().memoizedState=jp.bind(null,ue)}},Nd={readContext:et,use:nr,useCallback:zd,useContext:et,useEffect:yd,useImperativeHandle:jd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:Ed,useReducer:ar,useRef:pd,useState:function(){return ar(tn)},useDebugValue:Tc,useDeferredValue:function(e,t){var n=He();return Td(n,xe.memoizedState,e,t)},useTransition:function(){var e=ar(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:ed,useId:Rd,useHostTransitionStatus:wc,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var n=He();return rd(n,xe,e,t)},useMemoCache:xc,useCacheRefresh:Md},Ep={readContext:et,use:nr,useCallback:zd,useContext:et,useEffect:yd,useImperativeHandle:jd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:Ed,useReducer:jc,useRef:pd,useState:function(){return jc(tn)},useDebugValue:Tc,useDeferredValue:function(e,t){var n=He();return xe===null?Ac(n,e,t):Td(n,xe.memoizedState,e,t)},useTransition:function(){var e=jc(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:ed,useId:Rd,useHostTransitionStatus:wc,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var n=He();return xe!==null?rd(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:xc,useCacheRefresh:Md},Oa=null,Xl=0;function cr(e){var t=Xl;return Xl+=1,Oa===null&&(Oa=[]),Qf(Oa,e,t)}function Ql(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function or(e,t){throw t.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){var t=e._init;return t(e._payload)}function Hd(e){function t(j,S){if(e){var E=j.deletions;E===null?(j.deletions=[S],j.flags|=16):E.push(S)}}function n(j,S){if(!e)return null;for(;S!==null;)t(j,S),S=S.sibling;return null}function a(j){for(var S=new Map;j!==null;)j.key!==null?S.set(j.key,j):S.set(j.index,j),j=j.sibling;return S}function l(j,S){return j=Wt(j,S),j.index=0,j.sibling=null,j}function r(j,S,E){return j.index=E,e?(E=j.alternate,E!==null?(E=E.index,E<S?(j.flags|=67108866,S):E):(j.flags|=67108866,S)):(j.flags|=1048576,S)}function f(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function h(j,S,E,O){return S===null||S.tag!==6?(S=Wu(E,j.mode,O),S.return=j,S):(S=l(S,E),S.return=j,S)}function p(j,S,E,O){var K=E.type;return K===L?D(j,S,E.props.children,O,E.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Ud(K)===S.type)?(S=l(S,E.props),Ql(S,E),S.return=j,S):(S=Xi(E.type,E.key,E.props,null,j.mode,O),Ql(S,E),S.return=j,S)}function A(j,S,E,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=Fu(E,j.mode,O),S.return=j,S):(S=l(S,E.children||[]),S.return=j,S)}function D(j,S,E,O,K){return S===null||S.tag!==7?(S=Qn(E,j.mode,O,K),S.return=j,S):(S=l(S,E),S.return=j,S)}function B(j,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Wu(""+S,j.mode,E),S.return=j,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return E=Xi(S.type,S.key,S.props,null,j.mode,E),Ql(E,S),E.return=j,E;case k:return S=Fu(S,j.mode,E),S.return=j,S;case Ae:var O=S._init;return S=O(S._payload),B(j,S,E)}if(qe(S)||Ye(S))return S=Qn(S,j.mode,E,null),S.return=j,S;if(typeof S.then=="function")return B(j,cr(S),E);if(S.$$typeof===X)return B(j,$i(j,S),E);or(j,S)}return null}function _(j,S,E,O){var K=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return K!==null?null:h(j,S,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case U:return E.key===K?p(j,S,E,O):null;case k:return E.key===K?A(j,S,E,O):null;case Ae:return K=E._init,E=K(E._payload),_(j,S,E,O)}if(qe(E)||Ye(E))return K!==null?null:D(j,S,E,O,null);if(typeof E.then=="function")return _(j,S,cr(E),O);if(E.$$typeof===X)return _(j,S,$i(j,E),O);or(j,E)}return null}function w(j,S,E,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(E)||null,h(S,j,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return j=j.get(O.key===null?E:O.key)||null,p(S,j,O,K);case k:return j=j.get(O.key===null?E:O.key)||null,A(S,j,O,K);case Ae:var ce=O._init;return O=ce(O._payload),w(j,S,E,O,K)}if(qe(O)||Ye(O))return j=j.get(E)||null,D(S,j,O,K,null);if(typeof O.then=="function")return w(j,S,E,cr(O),K);if(O.$$typeof===X)return w(j,S,E,$i(S,O),K);or(S,O)}return null}function ne(j,S,E,O){for(var K=null,ce=null,J=S,te=S=0,Ke=null;J!==null&&te<E.length;te++){J.index>te?(Ke=J,J=null):Ke=J.sibling;var me=_(j,J,E[te],O);if(me===null){J===null&&(J=Ke);break}e&&J&&me.alternate===null&&t(j,J),S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me,J=Ke}if(te===E.length)return n(j,J),ge&&Jn(j,te),K;if(J===null){for(;te<E.length;te++)J=B(j,E[te],O),J!==null&&(S=r(J,S,te),ce===null?K=J:ce.sibling=J,ce=J);return ge&&Jn(j,te),K}for(J=a(J);te<E.length;te++)Ke=w(J,j,te,E[te],O),Ke!==null&&(e&&Ke.alternate!==null&&J.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),ce===null?K=Ke:ce.sibling=Ke,ce=Ke);return e&&J.forEach(function(Hn){return t(j,Hn)}),ge&&Jn(j,te),K}function I(j,S,E,O){if(E==null)throw Error(c(151));for(var K=null,ce=null,J=S,te=S=0,Ke=null,me=E.next();J!==null&&!me.done;te++,me=E.next()){J.index>te?(Ke=J,J=null):Ke=J.sibling;var Hn=_(j,J,me.value,O);if(Hn===null){J===null&&(J=Ke);break}e&&J&&Hn.alternate===null&&t(j,J),S=r(Hn,S,te),ce===null?K=Hn:ce.sibling=Hn,ce=Hn,J=Ke}if(me.done)return n(j,J),ge&&Jn(j,te),K;if(J===null){for(;!me.done;te++,me=E.next())me=B(j,me.value,O),me!==null&&(S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me);return ge&&Jn(j,te),K}for(J=a(J);!me.done;te++,me=E.next())me=w(J,j,te,me.value,O),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?te:me.key),S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me);return e&&J.forEach(function(T1){return t(j,T1)}),ge&&Jn(j,te),K}function je(j,S,E,O){if(typeof E=="object"&&E!==null&&E.type===L&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case U:e:{for(var K=E.key;S!==null;){if(S.key===K){if(K=E.type,K===L){if(S.tag===7){n(j,S.sibling),O=l(S,E.props.children),O.return=j,j=O;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Ud(K)===S.type){n(j,S.sibling),O=l(S,E.props),Ql(O,E),O.return=j,j=O;break e}n(j,S);break}else t(j,S);S=S.sibling}E.type===L?(O=Qn(E.props.children,j.mode,O,E.key),O.return=j,j=O):(O=Xi(E.type,E.key,E.props,null,j.mode,O),Ql(O,E),O.return=j,j=O)}return f(j);case k:e:{for(K=E.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(j,S.sibling),O=l(S,E.children||[]),O.return=j,j=O;break e}else{n(j,S);break}else t(j,S);S=S.sibling}O=Fu(E,j.mode,O),O.return=j,j=O}return f(j);case Ae:return K=E._init,E=K(E._payload),je(j,S,E,O)}if(qe(E))return ne(j,S,E,O);if(Ye(E)){if(K=Ye(E),typeof K!="function")throw Error(c(150));return E=K.call(E),I(j,S,E,O)}if(typeof E.then=="function")return je(j,S,cr(E),O);if(E.$$typeof===X)return je(j,S,$i(j,E),O);or(j,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(n(j,S.sibling),O=l(S,E),O.return=j,j=O):(n(j,S),O=Wu(E,j.mode,O),O.return=j,j=O),f(j)):n(j,S)}return function(j,S,E,O){try{Xl=0;var K=je(j,S,E,O);return Oa=null,K}catch(J){if(J===Ul||J===Fi)throw J;var ce=mt(29,J,null,j.mode);return ce.lanes=O,ce.return=j,ce}finally{}}}var Ca=Hd(!0),kd=Hd(!1),wt=N(null),kt=null;function jn(e){var t=e.alternate;V(Ge,Ge.current&1),V(wt,e),kt===null&&(t===null||wa.current!==null||t.memoizedState!==null)&&(kt=e)}function Ld(e){if(e.tag===22){if(V(Ge,Ge.current),V(wt,e),kt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(kt=e)}}else zn()}function zn(){V(Ge,Ge.current),V(wt,wt.current)}function nn(e){G(wt),kt===e&&(kt=null),G(Ge)}var Ge=N(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||xo(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Mc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),kl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),kl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=vn(n);a.tag=2,t!=null&&(a.callback=t),t=xn(e,a,n),t!==null&&(vt(t,e,n),kl(t,e,n))}};function Gd(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!wl(n,a)||!wl(l,r):!0}function Yd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var fr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qd(e){fr(e)}function Vd(e){console.error(e)}function Zd(e){fr(e)}function dr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Xd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Oc(e,t,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){dr(e,t)},n}function Qd(e){return e=vn(e),e.tag=3,e}function Kd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Xd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Xd(t,n,a),typeof l!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Tp(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Cl(t,n,l,!0),n=wt.current,n!==null){switch(n.tag){case 13:return kt===null?no():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===uc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),lo(e,a,l)),!1;case 22:return n.flags|=65536,a===uc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),lo(e,a,l)),!1}throw Error(c(435,n.tag))}return lo(e,a,l),no(),!1}if(ge)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==ec&&(e=Error(c(422),{cause:a}),Ol(Et(e,n)))):(a!==ec&&(t=Error(c(423),{cause:a}),Ol(Et(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Et(a,n),l=Oc(e.stateNode,a,l),sc(e,l),Ce!==4&&(Ce=2)),!1;var r=Error(c(520),{cause:a});if(r=Et(r,n),Il===null?Il=[r]:Il.push(r),Ce!==4&&(Ce=2),t===null)return!0;a=Et(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Oc(n.stateNode,a,e),sc(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Qd(l),Kd(l,e,n,a),sc(n,l),!1}n=n.return}while(n!==null);return!1}var Jd=Error(c(461)),Xe=!1;function $e(e,t,n,a){t.child=e===null?kd(t,null,n,a):Ca(t,e.child,n,a)}function $d(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=gc(e,t,n,f,r,l),h=pc(),e!==null&&!Xe?(bc(e,t,l),an(e,t,l)):(ge&&h&&Pu(t),t.flags|=1,$e(e,t,a,l),t.child)}function Wd(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!$u(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Fd(e,t,r,a,l)):(e=Xi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Gc(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:wl,n(f,a)&&e.ref===t.ref)return an(e,t,l)}return t.flags|=1,e=Wt(r,a),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(wl(r,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=r,Gc(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,an(e,t,l)}return Cc(e,t,n,a,l)}function Pd(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return Id(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,r!==null?r.cachePool:null),r!==null?Ff(t,r):dc(),Ld(t);else return t.lanes=t.childLanes=536870912,Id(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Wi(t,r.cachePool),Ff(t,r),zn(),t.memoizedState=null):(e!==null&&Wi(t,null),dc(),zn());return $e(e,t,l,n),t.child}function Id(e,t,n,a){var l=rc();return l=l===null?null:{parent:Le._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Wi(t,null),dc(),Ld(t),e!==null&&Cl(e,t,a,!0),null}function hr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cc(e,t,n,a,l){return Pn(t),n=gc(e,t,n,a,void 0,l),a=pc(),e!==null&&!Xe?(bc(e,t,l),an(e,t,l)):(ge&&a&&Pu(t),t.flags|=1,$e(e,t,n,l),t.child)}function eh(e,t,n,a,l,r){return Pn(t),t.updateQueue=null,n=If(t,a,n,l),Pf(e),a=pc(),e!==null&&!Xe?(bc(e,t,r),an(e,t,r)):(ge&&a&&Pu(t),t.flags|=1,$e(e,t,n,r),t.child)}function th(e,t,n,a,l){if(Pn(t),t.stateNode===null){var r=za,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Dc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},cc(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):za,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Mc(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Dc.enqueueReplaceState(r,r.state,null),Gl(t,a,r,l),Ll(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,p=ta(n,h);r.props=p;var A=r.context,D=n.contextType;f=za,typeof D=="object"&&D!==null&&(f=et(D));var B=n.getDerivedStateFromProps;D=typeof B=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||A!==f)&&Yd(t,r,a,f),yn=!1;var _=t.memoizedState;r.state=_,Gl(t,a,r,l),Ll(),A=t.memoizedState,h||_!==A||yn?(typeof B=="function"&&(Mc(t,n,B,a),A=t.memoizedState),(p=yn||Gd(t,n,p,a,_,A,f))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=f,a=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,oc(e,t),f=t.memoizedProps,D=ta(n,f),r.props=D,B=t.pendingProps,_=r.context,A=n.contextType,p=za,typeof A=="object"&&A!==null&&(p=et(A)),h=n.getDerivedStateFromProps,(A=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==B||_!==p)&&Yd(t,r,a,p),yn=!1,_=t.memoizedState,r.state=_,Gl(t,a,r,l),Ll();var w=t.memoizedState;f!==B||_!==w||yn||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof h=="function"&&(Mc(t,n,h,a),w=t.memoizedState),(D=yn||Gd(t,n,D,a,_,w,p)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,w,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,w,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),r.props=a,r.state=w,r.context=p,a=D):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,hr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ca(t,e.child,null,l),t.child=Ca(t,null,n,l)):$e(e,t,n,l),t.memoizedState=r.state,e=t.child):e=an(e,t,l),e}function nh(e,t,n,a){return Dl(),t.flags|=256,$e(e,t,n,a),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:Vf()}}function Uc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function ah(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(l?jn(t):zn(),ge){var h=Oe,p;if(p=h){e:{for(p=h,h=Ht;p.nodeType!==8;){if(!h){h=null;break e}if(p=Bt(p.nextSibling),p===null){h=null;break e}}h=p}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Ft,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},p=mt(18,null,null,0),p.stateNode=h,p.return=t,t.child=p,at=t,Oe=null,p=!0):p=!1}p||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return xo(h)?t.lanes=32:t.lanes=536870912,null;nn(t)}return h=a.children,a=a.fallback,l?(zn(),l=t.mode,h=mr({mode:"hidden",children:h},l),a=Qn(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=Nc(n),l.childLanes=Uc(e,f,n),t.memoizedState=Bc,a):(jn(t),Hc(t,h))}if(p=e.memoizedState,p!==null&&(h=p.dehydrated,h!==null)){if(r)t.flags&256?(jn(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState!==null?(zn(),t.child=e.child,t.flags|=128,t=null):(zn(),l=a.fallback,h=t.mode,a=mr({mode:"visible",children:a.children},h),l=Qn(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Ca(t,e.child,null,n),a=t.child,a.memoizedState=Nc(n),a.childLanes=Uc(e,f,n),t.memoizedState=Bc,t=l);else if(jn(t),xo(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var A=f.dgst;f=A,a=Error(c(419)),a.stack="",a.digest=f,Ol({value:a,source:null,stack:null}),t=kc(e,t,n)}else if(Xe||Cl(e,t,n,!1),f=(n&e.childLanes)!==0,Xe||f){if(f=Te,f!==null&&(a=n&-n,a=(a&42)!==0?1:xu(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,ja(e,a),vt(f,e,a),Jd;h.data==="$?"||no(),t=kc(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Oe=Bt(h.nextSibling),at=t,ge=!0,$n=null,Ht=!1,e!==null&&(At[_t++]=Ft,At[_t++]=Pt,At[_t++]=Kn,Ft=e.id,Pt=e.overflow,Kn=t),t=Hc(t,a.children),t.flags|=4096);return t}return l?(zn(),l=a.fallback,h=t.mode,p=e.child,A=p.sibling,a=Wt(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,A!==null?l=Wt(A,l):(l=Qn(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=Nc(n):(p=h.cachePool,p!==null?(A=Le._currentValue,p=p.parent!==A?{parent:A,pool:A}:p):p=Vf(),h={baseLanes:h.baseLanes|n,cachePool:p}),l.memoizedState=h,l.childLanes=Uc(e,f,n),t.memoizedState=Bc,a):(jn(t),n=e.child,e=n.sibling,n=Wt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Hc(e,t){return t=mr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mr(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function kc(e,t,n){return Ca(t,e.child,null,n),e=Hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),nc(e.return,t,n)}function Lc(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function ih(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if($e(e,t,a.children,n),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lh(e,n,t);else if(e.tag===19)lh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Ge,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Lc(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Lc(t,!0,n,null,r);break;case"together":Lc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Cl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function Ap(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),bn(t,Le,e.memoizedState.cache),Dl();break;case 27:case 5:Gn(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ah(e,t,n):(jn(t),e=an(e,t,n),e!==null?e.sibling:null);jn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Cl(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return ih(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,n);case 24:bn(t,Le,e.memoizedState.cache)}return an(e,t,n)}function rh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Gc(e,n)&&(t.flags&128)===0)return Xe=!1,Ap(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,ge&&(t.flags&1048576)!==0&&Uf(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")$u(a)?(e=ta(a,e),t.tag=1,t=th(null,t,a,e,n)):(t.tag=0,t=Cc(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===ae){t.tag=11,t=$d(null,t,a,e,n);break e}else if(l===W){t.tag=14,t=Wd(null,t,a,e,n);break e}}throw t=Qt(a)||a,Error(c(306,t,""))}}return t;case 0:return Cc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ta(a,t.pendingProps),th(e,t,a,l,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,oc(e,t),Gl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,bn(t,Le,a),a!==r.cache&&ac(t,[Le],n,!0),Ll(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=nh(e,t,a,n);break e}else if(a!==l){l=Et(Error(c(424)),t),Ol(l),t=nh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Bt(e.firstChild),at=t,ge=!0,$n=null,Ht=!0,n=kd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Dl(),a===l){t=an(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return hr(e,t),e===null?(n=sm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=wr(ee.current).createElement(n),a[Ie]=t,a[it]=e,Fe(a,n,e),Ze(a),t.stateNode=a):t.memoizedState=sm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&ge&&(a=t.stateNode=um(t.type,t.pendingProps,ee.current),at=t,Ht=!0,l=Oe,On(t.type)?(So=l,Oe=Bt(a.firstChild)):Oe=l),$e(e,t,t.pendingProps.children,n),hr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((l=a=Oe)&&(a=e1(a,t.type,t.pendingProps,Ht),a!==null?(t.stateNode=a,at=t,Oe=Bt(a.firstChild),Ht=!1,l=!0):l=!1),l||Wn(t)),Gn(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,bo(l,r)?a=null:f!==null&&bo(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=gc(e,t,yp,null,null,n),ci._currentValue=l),hr(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=Oe)&&(n=t1(n,t.pendingProps,Ht),n!==null?(t.stateNode=n,at=t,Oe=null,e=!0):e=!1),e||Wn(t)),null;case 13:return ah(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ca(t,null,a,n):$e(e,t,a,n),t.child;case 11:return $d(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,bn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Pn(t),l=et(l),a=a(l),t.flags|=1,$e(e,t,a,n),t.child;case 14:return Wd(e,t,t.type,t.pendingProps,n);case 15:return Fd(e,t,t.type,t.pendingProps,n);case 19:return ih(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=mr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Wt(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Pd(e,t,n);case 24:return Pn(t),a=et(Le),e===null?(l=rc(),l===null&&(l=Te,r=lc(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},cc(t),bn(t,Le,l)):((e.lanes&n)!==0&&(oc(e,t),Gl(t,null,null,n),Ll()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),bn(t,Le,a)):(a=r.cache,bn(t,Le,a),a!==l.cache&&ac(t,[Le],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ln(e){e.flags|=4}function uh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gm(t)){if(t=wt.current,t!==null&&((he&4194048)===he?kt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==kt))throw Hl=uc,Zf;e.flags|=8192}}function gr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ks():536870912,e.lanes|=t,Ha|=t)}function Kl(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function _p(e,t,n){var a=t.pendingProps;switch(Iu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),en(Le),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ml(t)?ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lf())),Me(t),null;case 26:return n=t.memoizedState,e===null?(ln(t),n!==null?(Me(t),uh(t,n)):(Me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ln(t),Me(t),uh(t,n)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==a&&ln(t),Me(t),t.flags&=-16777217),null;case 27:Kt(t),n=ee.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Me(t),null}e=F.current,Ml(t)?Hf(t):(e=um(l,a,n),t.stateNode=e,ln(t))}return Me(t),null;case 5:if(Kt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Me(t),null}if(e=F.current,Ml(t))Hf(t);else{switch(l=wr(ee.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Ie]=t,e[it]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ln(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ee.current,Ml(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=at,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||em(e.nodeValue,n)),e||Wn(t)}else e=wr(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return Me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ml(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ie]=t}else Dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=Lf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(nn(t),t):(nn(t),null)}if(nn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),gr(t,t.updateQueue),Me(t),null;case 4:return Pe(),e===null&&fo(t.stateNode.containerInfo),Me(t),null;case 10:return en(t.type),Me(t),null;case 19:if(G(Ge),l=t.memoizedState,l===null)return Me(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)Kl(l,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=sr(e),r!==null){for(t.flags|=128,Kl(l,!1),e=r.updateQueue,t.updateQueue=e,gr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nf(n,e),n=n.sibling;return V(Ge,Ge.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ut()>yr&&(t.flags|=128,a=!0,Kl(l,!1),t.lanes=4194304)}else{if(!a)if(e=sr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,gr(t,e),Kl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ge)return Me(t),null}else 2*Ut()-l.renderingStartTime>yr&&n!==536870912&&(t.flags|=128,a=!0,Kl(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,e=Ge.current,V(Ge,a?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return nn(t),hc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&gr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&G(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),en(Le),Me(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function wp(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(Le),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 13:if(nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Ge),null;case 4:return Pe(),null;case 10:return en(t.type),null;case 22:case 23:return nn(t),hc(),e!==null&&G(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return en(Le),null;case 25:return null;default:return null}}function ch(e,t){switch(Iu(t),t.tag){case 3:en(Le),Pe();break;case 26:case 27:case 5:Kt(t);break;case 4:Pe();break;case 13:nn(t);break;case 19:G(Ge);break;case 10:en(t.type);break;case 22:case 23:nn(t),hc(),e!==null&&G(In);break;case 24:en(Le)}}function Jl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(h){Ee(t,t.return,h)}}function En(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,l=t;var p=n,A=h;try{A()}catch(D){Ee(l,p,D)}}}a=a.next}while(a!==r)}}catch(D){Ee(t,t.return,D)}}function oh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wf(t,n)}catch(a){Ee(e,e.return,a)}}}function sh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function $l(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Ee(e,t,l)}}function Lt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ee(e,t,l)}else n.current=null}function fh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ee(e,e.return,l)}}function Yc(e,t,n){try{var a=e.stateNode;$p(a,e.type,n,t),a[it]=t}catch(l){Ee(e,e.return,l)}}function dh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_r));else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}function pr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pr(e,t,n),e=e.sibling;e!==null;)pr(e,t,n),e=e.sibling}function hh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fe(t,a,n),t[Ie]=e,t[it]=n}catch(r){Ee(e,e.return,r)}}var rn=!1,Ne=!1,Zc=!1,mh=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Rp(e,t){if(e=e.containerInfo,go=Br,e=Tf(e),qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,p=-1,A=0,D=0,B=e,_=null;t:for(;;){for(var w;B!==n||l!==0&&B.nodeType!==3||(h=f+l),B!==r||a!==0&&B.nodeType!==3||(p=f+a),B.nodeType===3&&(f+=B.nodeValue.length),(w=B.firstChild)!==null;)_=B,B=w;for(;;){if(B===e)break t;if(_===n&&++A===l&&(h=f),_===r&&++D===a&&(p=f),(w=B.nextSibling)!==null)break;B=_,_=B.parentNode}B=w}n=h===-1||p===-1?null:{start:h,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(po={focusedElem:e,selectionRange:n},Br=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){Ee(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function gh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),a&4&&Jl(5,n);break;case 1:if(Tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ee(n,n.return,f)}else{var l=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ee(n,n.return,f)}}a&64&&oh(n),a&512&&$l(n,n.return);break;case 3:if(Tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wf(e,t)}catch(f){Ee(n,n.return,f)}}break;case 27:t===null&&a&4&&hh(n);case 26:case 5:Tn(e,n),t===null&&a&4&&fh(n),a&512&&$l(n,n.return);break;case 12:Tn(e,n);break;case 13:Tn(e,n),a&4&&yh(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=kp.bind(null,n),n1(e,n))));break;case 22:if(a=n.memoizedState!==null||rn,!a){t=t!==null&&t.memoizedState!==null||Ne,l=rn;var r=Ne;rn=a,(Ne=t)&&!r?An(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),rn=l,Ne=r}break;case 30:break;default:Tn(e,n)}}function ph(e){var t=e.alternate;t!==null&&(e.alternate=null,ph(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,ct=!1;function un(e,t,n){for(n=n.child;n!==null;)bh(e,t,n),n=n.sibling}function bh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:Ne||Lt(n,t),un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Lt(n,t);var a=we,l=ct;On(n.type)&&(we=n.stateNode,ct=!1),un(e,t,n),li(n.stateNode),we=a,ct=l;break;case 5:Ne||Lt(n,t);case 6:if(a=we,l=ct,we=null,un(e,t,n),we=a,ct=l,we!==null)if(ct)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(r){Ee(n,t,r)}else try{we.removeChild(n.stateNode)}catch(r){Ee(n,t,r)}break;case 18:we!==null&&(ct?(e=we,im(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),di(e)):im(we,n.stateNode));break;case 4:a=we,l=ct,we=n.stateNode.containerInfo,ct=!0,un(e,t,n),we=a,ct=l;break;case 0:case 11:case 14:case 15:Ne||En(2,n,t),Ne||En(4,n,t),un(e,t,n);break;case 1:Ne||(Lt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&sh(n,t,a)),un(e,t,n);break;case 21:un(e,t,n);break;case 22:Ne=(a=Ne)||n.memoizedState!==null,un(e,t,n),Ne=a;break;default:un(e,t,n)}}function yh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{di(e)}catch(n){Ee(t,t.return,n)}}function Mp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mh),t;default:throw Error(c(435,e.tag))}}function Xc(e,t){var n=Mp(e);t.forEach(function(a){var l=Lp.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(On(h.type)){we=h.stateNode,ct=!1;break e}break;case 5:we=h.stateNode,ct=!1;break e;case 3:case 4:we=h.stateNode.containerInfo,ct=!0;break e}h=h.return}if(we===null)throw Error(c(160));bh(r,f,l),we=null,ct=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vh(t,e),t=t.sibling}var Ct=null;function vh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),pt(e),a&4&&(En(3,e,e.return),Jl(3,e),En(5,e,e.return));break;case 1:gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),a&64&&rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Ct;if(gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[vl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Ze(r),a=r;break e;case"link":var f=hm("link","href",l).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;case"meta":if(f=hm("meta","content",l).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;default:throw Error(c(468,a))}r[Ie]=e,Ze(r),a=r}e.stateNode=a}else mm(l,e.type,e.stateNode);else e.stateNode=dm(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?mm(l,e.type,e.stateNode):dm(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),n!==null&&a&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),e.flags&32){l=e.stateNode;try{ga(l,"")}catch(w){Ee(e,e.return,w)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Yc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Zc=!0);break;case 6:if(gt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(w){Ee(e,e.return,w)}}break;case 3:if(Dr=null,l=Ct,Ct=Rr(t.containerInfo),gt(t,e),Ct=l,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(w){Ee(e,e.return,w)}Zc&&(Zc=!1,xh(e));break;case 4:a=Ct,Ct=Rr(e.stateNode.containerInfo),gt(t,e),pt(e),Ct=a;break;case 12:gt(t,e),pt(e);break;case 13:gt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fc=Ut()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xc(e,a)));break;case 22:l=e.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,A=rn,D=Ne;if(rn=A||l,Ne=D||p,gt(t,e),Ne=D,rn=A,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||p||rn||Ne||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){p=n=t;try{if(r=p.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=p.stateNode;var B=p.memoizedProps.style,_=B!=null&&B.hasOwnProperty("display")?B.display:null;h.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(w){Ee(p,p.return,w)}}}else if(t.tag===6){if(n===null){p=t;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(w){Ee(p,p.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Xc(e,n))));break;case 19:gt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Xc(e,a)));break;case 30:break;case 21:break;default:gt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(dh(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,r=qc(e);pr(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(ga(f,""),n.flags&=-33);var h=qc(e);pr(e,h,f);break;case 3:case 4:var p=n.stateNode.containerInfo,A=qc(e);Vc(e,A,p);break;default:throw Error(c(161))}}catch(D){Ee(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gh(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),na(t);break;case 1:Lt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&sh(t,t.return,n),na(t);break;case 27:li(t.stateNode);case 26:case 5:Lt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function An(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:An(l,r,n),Jl(4,r);break;case 1:if(An(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Ee(a,a.return,A)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)$f(p[l],h)}catch(A){Ee(a,a.return,A)}}n&&f&64&&oh(r),$l(r,r.return);break;case 27:hh(r);case 26:case 5:An(l,r,n),n&&a===null&&f&4&&fh(r),$l(r,r.return);break;case 12:An(l,r,n);break;case 13:An(l,r,n),n&&f&4&&yh(l,r);break;case 22:r.memoizedState===null&&An(l,r,n),$l(r,r.return);break;case 30:break;default:An(l,r,n)}t=t.sibling}}function Qc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bl(n))}function Kc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function Gt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sh(e,t,n,a),t=t.sibling}function Sh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,n,a),l&2048&&Jl(9,t);break;case 1:Gt(e,t,n,a);break;case 3:Gt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e)));break;case 12:if(l&2048){Gt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ee(t,t.return,p)}}else Gt(e,t,n,a);break;case 13:Gt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Gt(e,t,n,a):Wl(e,t):r._visibility&2?Gt(e,t,n,a):(r._visibility|=2,Ba(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Qc(f,t);break;case 24:Gt(e,t,n,a),l&2048&&Kc(t.alternate,t);break;default:Gt(e,t,n,a)}}function Ba(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,p=a,A=f.flags;switch(f.tag){case 0:case 11:case 15:Ba(r,f,h,p,l),Jl(8,f);break;case 23:break;case 22:var D=f.stateNode;f.memoizedState!==null?D._visibility&2?Ba(r,f,h,p,l):Wl(r,f):(D._visibility|=2,Ba(r,f,h,p,l)),l&&A&2048&&Qc(f.alternate,f);break;case 24:Ba(r,f,h,p,l),l&&A&2048&&Kc(f.alternate,f);break;default:Ba(r,f,h,p,l)}t=t.sibling}}function Wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Wl(n,a),l&2048&&Qc(a.alternate,a);break;case 24:Wl(n,a),l&2048&&Kc(a.alternate,a);break;default:Wl(n,a)}t=t.sibling}}var Fl=8192;function Na(e){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)jh(e),e=e.sibling}function jh(e){switch(e.tag){case 26:Na(e),e.flags&Fl&&e.memoizedState!==null&&g1(Ct,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var t=Ct;Ct=Rr(e.stateNode.containerInfo),Na(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Fl,Fl=16777216,Na(e),Fl=t):Na(e));break;default:Na(e)}}function zh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Th(a,e)}zh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eh(e),e=e.sibling}function Eh(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&En(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,br(e)):Pl(e);break;default:Pl(e)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Th(a,e)}zh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),br(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,br(t));break;default:br(t)}e=e.sibling}}function Th(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Bl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var l=a.sibling,r=a.return;if(ph(a),a===n){Qe=null;break e}if(l!==null){l.return=r,Qe=l;break e}Qe=r}}}var Dp={getCacheForType:function(e){var t=et(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Op=typeof WeakMap=="function"?WeakMap:Map,ye=0,Te=null,fe=null,he=0,ve=0,bt=null,_n=!1,Ua=!1,Jc=!1,cn=0,Ce=0,wn=0,aa=0,$c=0,Rt=0,Ha=0,Il=null,ot=null,Wc=!1,Fc=0,yr=1/0,vr=null,Rn=null,We=0,Mn=null,ka=null,La=0,Pc=0,Ic=null,Ah=null,ei=0,eo=null;function yt(){if((ye&2)!==0&&he!==0)return he&-he;if(M.T!==null){var e=Aa;return e!==0?e:uo()}return Ys()}function _h(){Rt===0&&(Rt=(he&536870912)===0||ge?Hs():536870912);var e=wt.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===Te&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Ga(e,0),Dn(e,he,Rt,!1)),yl(e,n),((ye&2)===0||e!==Te)&&(e===Te&&((ye&2)===0&&(aa|=n),Ce===4&&Dn(e,he,Rt,!1)),Yt(e))}function wh(e,t,n){if((ye&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||bl(e,t),l=a?Np(e,t):ao(e,t,!0),r=a;do{if(l===0){Ua&&!a&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Cp(n)){l=ao(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;l=Il;var p=h.current.memoizedState.isDehydrated;if(p&&(Ga(h,f).flags|=256),f=ao(h,f,!1),f!==2){if(Jc&&!p){h.errorRecoveryDisabledLanes|=r,aa|=r,l=4;break e}r=ot,ot=l,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){Ga(e,0),Dn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Dn(a,t,Rt,!_n);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Fc+300-Ut(),10<l)){if(Dn(a,t,Rt,!_n),Mi(a,0,!0)!==0)break e;a.timeoutHandle=am(Rh.bind(null,a,n,ot,vr,Wc,t,Rt,aa,Ha,_n,r,2,-0,0),l);break e}Rh(a,n,ot,vr,Wc,t,Rt,aa,Ha,_n,r,0,-0,0)}}break}while(!0);Yt(e)}function Rh(e,t,n,a,l,r,f,h,p,A,D,B,_,w){if(e.timeoutHandle=-1,B=t.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(ui={stylesheets:null,count:0,unsuspend:m1},jh(t),B=p1(),B!==null)){e.cancelPendingCommit=B(Uh.bind(null,e,t,r,n,a,l,f,h,p,D,1,_,w)),Dn(e,r,f,!A);return}Uh(e,t,r,n,a,l,f,h,p)}function Cp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!ht(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,a){t&=~$c,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-dt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&Ls(e,n,t)}function xr(){return(ye&6)===0?(ti(0),!1):!0}function to(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,It=Fn=null,yc(e),Oa=null,Xl=0,e=fe;for(;e!==null;)ch(e.alternate,e),e=e.return;fe=null}}function Ga(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Fp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),to(),Te=e,fe=n=Wt(e.current,null),he=t,ve=0,bt=null,_n=!1,Ua=bl(e,t),Jc=!1,Ha=Rt=$c=aa=wn=Ce=0,ot=Il=null,Wc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-dt(a),r=1<<l;t|=e[l],a&=~r}return cn=t,qi(),n}function Mh(e,t){ue=null,M.H=ur,t===Ul||t===Fi?(t=Kf(),ve=3):t===Zf?(t=Kf(),ve=4):ve=t===Jd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Ce=1,dr(e,Et(t,e.current)))}function Dh(){var e=M.H;return M.H=ur,e===null?ur:e}function Oh(){var e=M.A;return M.A=Dp,e}function no(){Ce=4,_n||(he&4194048)!==he&&wt.current!==null||(Ua=!0),(wn&134217727)===0&&(aa&134217727)===0||Te===null||Dn(Te,he,Rt,!1)}function ao(e,t,n){var a=ye;ye|=2;var l=Dh(),r=Oh();(Te!==e||he!==t)&&(vr=null,Ga(e,t)),t=!1;var f=Ce;e:do try{if(ve!==0&&fe!==null){var h=fe,p=bt;switch(ve){case 8:to(),f=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var A=ve;if(ve=0,bt=null,Ya(e,h,p,A),n&&Ua){f=0;break e}break;default:A=ve,ve=0,bt=null,Ya(e,h,p,A)}}Bp(),f=Ce;break}catch(D){Mh(e,D)}while(!0);return t&&e.shellSuspendCounter++,It=Fn=null,ye=a,M.H=l,M.A=r,fe===null&&(Te=null,he=0,qi()),f}function Bp(){for(;fe!==null;)Ch(fe)}function Np(e,t){var n=ye;ye|=2;var a=Dh(),l=Oh();Te!==e||he!==t?(vr=null,yr=Ut()+500,Ga(e,t)):Ua=bl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,Ya(e,t,r,1);break;case 2:case 9:if(Xf(r)){ve=0,bt=null,Bh(t);break}t=function(){ve!==2&&ve!==9||Te!==e||(ve=7),Yt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Xf(r)?(ve=0,bt=null,Bh(t)):(ve=0,bt=null,Ya(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||gm(f)){ve=0,bt=null;var p=h.sibling;if(p!==null)fe=p;else{var A=h.return;A!==null?(fe=A,Sr(A)):fe=null}break t}}ve=0,bt=null,Ya(e,t,r,5);break;case 6:ve=0,bt=null,Ya(e,t,r,6);break;case 8:to(),Ce=6;break e;default:throw Error(c(462))}}Up();break}catch(D){Mh(e,D)}while(!0);return It=Fn=null,M.H=a,M.A=l,ye=n,fe!==null?0:(Te=null,he=0,qi(),Ce)}function Up(){for(;fe!==null&&!l0();)Ch(fe)}function Ch(e){var t=rh(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function Bh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=eh(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=eh(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:yc(t);default:ch(n,t),t=fe=Nf(t,cn),t=rh(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?Sr(e):fe=t}function Ya(e,t,n,a){It=Fn=null,yc(t),Oa=null,Xl=0;var l=t.return;try{if(Tp(e,l,t,n,he)){Ce=1,dr(e,Et(n,e.current)),fe=null;return}}catch(r){if(l!==null)throw fe=l,r;Ce=1,dr(e,Et(n,e.current)),fe=null;return}t.flags&32768?(ge||a===1?e=!0:Ua||(he&536870912)!==0?e=!1:(_n=e=!0,(a===2||a===9||a===3||a===6)&&(a=wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Nh(t,e)):Sr(t)}function Sr(e){var t=e;do{if((t.flags&32768)!==0){Nh(t,_n);return}e=t.return;var n=_p(t.alternate,t,cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ce===0&&(Ce=5)}function Nh(e,t){do{var n=wp(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ce=6,fe=null}function Uh(e,t,n,a,l,r,f,h,p){e.cancelPendingCommit=null;do jr();while(We!==0);if((ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Ku,m0(e,n,r,f,h,p),e===Te&&(fe=Te=null,he=0),ka=t,Mn=e,La=n,Pc=r,Ic=l,Ah=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gp(_i,function(){return Yh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,l=q.p,q.p=2,f=ye,ye|=4;try{Rp(e,t,n)}finally{ye=f,q.p=l,M.T=a}}We=1,Hh(),kh(),Lh()}}function Hh(){if(We===1){We=0;var e=Mn,t=ka,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null;var a=q.p;q.p=2;var l=ye;ye|=4;try{vh(t,e);var r=po,f=Tf(e.containerInfo),h=r.focusedElem,p=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&Ef(h.ownerDocument.documentElement,h)){if(p!==null&&qu(h)){var A=p.start,D=p.end;if(D===void 0&&(D=A),"selectionStart"in h)h.selectionStart=A,h.selectionEnd=Math.min(D,h.value.length);else{var B=h.ownerDocument||document,_=B&&B.defaultView||window;if(_.getSelection){var w=_.getSelection(),ne=h.textContent.length,I=Math.min(p.start,ne),je=p.end===void 0?I:Math.min(p.end,ne);!w.extend&&I>je&&(f=je,je=I,I=f);var j=zf(h,I),S=zf(h,je);if(j&&S&&(w.rangeCount!==1||w.anchorNode!==j.node||w.anchorOffset!==j.offset||w.focusNode!==S.node||w.focusOffset!==S.offset)){var E=B.createRange();E.setStart(j.node,j.offset),w.removeAllRanges(),I>je?(w.addRange(E),w.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),w.addRange(E))}}}}for(B=[],w=h;w=w.parentNode;)w.nodeType===1&&B.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<B.length;h++){var O=B[h];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Br=!!go,po=go=null}finally{ye=l,q.p=a,M.T=n}}e.current=t,We=2}}function kh(){if(We===2){We=0;var e=Mn,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=M.T,M.T=null;var a=q.p;q.p=2;var l=ye;ye|=4;try{gh(e,t.alternate,t)}finally{ye=l,q.p=a,M.T=n}}We=3}}function Lh(){if(We===4||We===3){We=0,i0();var e=Mn,t=ka,n=La,a=Ah;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,ka=Mn=null,Gh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Rn=null),Su(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,l=q.p,q.p=2,M.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{M.T=t,q.p=l}}(La&3)!==0&&jr(),Yt(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===eo?ei++:(ei=0,eo=e):ei=0,ti(0)}}function Gh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function jr(e){return Hh(),kh(),Lh(),Yh()}function Yh(){if(We!==5)return!1;var e=Mn,t=Pc;Pc=0;var n=Su(La),a=M.T,l=q.p;try{q.p=32>n?32:n,M.T=null,n=Ic,Ic=null;var r=Mn,f=La;if(We=0,ka=Mn=null,La=0,(ye&6)!==0)throw Error(c(331));var h=ye;if(ye|=4,Eh(r.current),Sh(r,r.current,f,n),ye=h,ti(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(pl,r)}catch{}return!0}finally{q.p=l,M.T=a,Gh(e,t)}}function qh(e,t,n){t=Et(n,t),t=Oc(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(yl(e,2),Yt(e))}function Ee(e,t,n){if(e.tag===3)qh(e,e,n);else for(;t!==null;){if(t.tag===3){qh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rn===null||!Rn.has(a))){e=Et(n,e),n=Qd(2),a=xn(t,n,2),a!==null&&(Kd(n,a,t,e),yl(a,2),Yt(a));break}}t=t.return}}function lo(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Op;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Jc=!0,l.add(n),e=Hp.bind(null,e,t,n),t.then(e,e))}function Hp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(he&n)===n&&(Ce===4||Ce===3&&(he&62914560)===he&&300>Ut()-Fc?(ye&2)===0&&Ga(e,0):$c|=n,Ha===he&&(Ha=0)),Yt(e)}function Vh(e,t){t===0&&(t=ks()),e=ja(e,t),e!==null&&(yl(e,t),Yt(e))}function kp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vh(e,n)}function Lp(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Vh(e,n)}function Gp(e,t){return bu(e,t)}var zr=null,qa=null,io=!1,Er=!1,ro=!1,la=0;function Yt(e){e!==qa&&e.next===null&&(qa===null?zr=qa=e:qa=qa.next=e),Er=!0,io||(io=!0,qp())}function ti(e,t){if(!ro&&Er){ro=!0;do for(var n=!1,a=zr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=l&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Kh(a,r))}else r=he,r=Mi(a,a===Te?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||bl(a,r)||(n=!0,Kh(a,r));a=a.next}while(n);ro=!1}}function Yp(){Zh()}function Zh(){Er=io=!1;var e=0;la!==0&&(Wp()&&(e=la),la=0);for(var t=Ut(),n=null,a=zr;a!==null;){var l=a.next,r=Xh(a,t);r===0?(a.next=null,n===null?zr=l:n.next=l,l===null&&(qa=n)):(n=a,(e!==0||(r&3)!==0)&&(Er=!0)),a=l}ti(e)}function Xh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,p=l[f];p===-1?((h&n)===0||(h&a)!==0)&&(l[f]=h0(h,t)):p<=t&&(e.expiredLanes|=h),r&=~h}if(t=Te,n=he,n=Mi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&yu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&yu(a),Su(n)){case 2:case 8:n=Ns;break;case 32:n=_i;break;case 268435456:n=Us;break;default:n=_i}return a=Qh.bind(null,e),n=bu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&yu(a),e.callbackPriority=2,e.callbackNode=null,2}function Qh(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var a=he;return a=Mi(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(wh(e,a,t),Xh(e,Ut()),e.callbackNode!=null&&e.callbackNode===n?Qh.bind(null,e):null)}function Kh(e,t){if(jr())return null;wh(e,t,!0)}function qp(){Pp(function(){(ye&6)!==0?bu(Bs,Yp):Zh()})}function uo(){return la===0&&(la=Hs()),la}function Jh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ni(""+e)}function $h(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Vp(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=Jh((l[it]||null).action),f=a.submitter;f&&(t=(t=f[it]||null)?Jh(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Li("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var p=f?$h(l,f):new FormData(l);_c(n,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(h.preventDefault(),p=f?$h(l,f):new FormData(l),_c(n,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var co=0;co<Qu.length;co++){var oo=Qu[co],Zp=oo.toLowerCase(),Xp=oo[0].toUpperCase()+oo.slice(1);Ot(Zp,"on"+Xp)}Ot(wf,"onAnimationEnd"),Ot(Rf,"onAnimationIteration"),Ot(Mf,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(cp,"onTransitionRun"),Ot(op,"onTransitionStart"),Ot(sp,"onTransitionCancel"),Ot(Df,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));function Wh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],p=h.instance,A=h.currentTarget;if(h=h.listener,p!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=A;try{r(l)}catch(D){fr(D)}l.currentTarget=null,r=p}else for(f=0;f<a.length;f++){if(h=a[f],p=h.instance,A=h.currentTarget,h=h.listener,p!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=A;try{r(l)}catch(D){fr(D)}l.currentTarget=null,r=p}}}}function de(e,t){var n=t[ju];n===void 0&&(n=t[ju]=new Set);var a=e+"__bubble";n.has(a)||(Fh(t,e,2,!1),n.add(a))}function so(e,t,n){var a=0;t&&(a|=4),Fh(n,e,a,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function fo(e){if(!e[Tr]){e[Tr]=!0,Vs.forEach(function(n){n!=="selectionchange"&&(Qp.has(n)||so(n,!1,e),so(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,so("selectionchange",!1,t))}}function Fh(e,t,n,a){switch(Sm(t)){case 2:var l=v1;break;case 8:l=x1;break;default:l=Ao}n=l.bind(null,t,n,e),l=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ho(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===l)break;if(f===4)for(f=a.return;f!==null;){var p=f.tag;if((p===3||p===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;h!==null;){if(f=oa(h),f===null)return;if(p=f.tag,p===5||p===6||p===26||p===27){a=r=f;continue e}h=h.parentNode}}a=a.return}af(function(){var A=r,D=Du(n),B=[];e:{var _=Of.get(e);if(_!==void 0){var w=Li,ne=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":w=G0;break;case"focusin":ne="focus",w=Hu;break;case"focusout":ne="blur",w=Hu;break;case"beforeblur":case"afterblur":w=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=V0;break;case wf:case Rf:case Mf:w=D0;break;case Df:w=X0;break;case"scroll":case"scrollend":w=A0;break;case"wheel":w=K0;break;case"copy":case"cut":case"paste":w=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=of;break;case"toggle":case"beforetoggle":w=$0}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),j=I?_!==null?_+"Capture":null:_;I=[];for(var S=A,E;S!==null;){var O=S;if(E=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||E===null||j===null||(O=Sl(S,j),O!=null&&I.push(ai(S,O,E))),je)break;S=S.return}0<I.length&&(_=new w(_,ne,null,n,D),B.push({event:_,listeners:I}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",_&&n!==Mu&&(ne=n.relatedTarget||n.fromElement)&&(oa(ne)||ne[ca]))break e;if((w||_)&&(_=D.window===D?D:(_=D.ownerDocument)?_.defaultView||_.parentWindow:window,w?(ne=n.relatedTarget||n.toElement,w=A,ne=ne?oa(ne):null,ne!==null&&(je=m(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(w=null,ne=A),w!==ne)){if(I=uf,O="onMouseLeave",j="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=of,O="onPointerLeave",j="onPointerEnter",S="pointer"),je=w==null?_:xl(w),E=ne==null?_:xl(ne),_=new I(O,S+"leave",w,n,D),_.target=je,_.relatedTarget=E,O=null,oa(D)===A&&(I=new I(j,S+"enter",ne,n,D),I.target=E,I.relatedTarget=je,O=I),je=O,w&&ne)t:{for(I=w,j=ne,S=0,E=I;E;E=Va(E))S++;for(E=0,O=j;O;O=Va(O))E++;for(;0<S-E;)I=Va(I),S--;for(;0<E-S;)j=Va(j),E--;for(;S--;){if(I===j||j!==null&&I===j.alternate)break t;I=Va(I),j=Va(j)}I=null}else I=null;w!==null&&Ph(B,_,w,I,!1),ne!==null&&je!==null&&Ph(B,je,ne,I,!0)}}e:{if(_=A?xl(A):window,w=_.nodeName&&_.nodeName.toLowerCase(),w==="select"||w==="input"&&_.type==="file")var K=bf;else if(gf(_))if(yf)K=ip;else{K=ap;var ce=np}else w=_.nodeName,!w||w.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?A&&Ru(A.elementType)&&(K=bf):K=lp;if(K&&(K=K(e,A))){pf(B,K,n,D);break e}ce&&ce(e,_,A),e==="focusout"&&A&&_.type==="number"&&A.memoizedProps.value!=null&&wu(_,"number",_.value)}switch(ce=A?xl(A):window,e){case"focusin":(gf(ce)||ce.contentEditable==="true")&&(va=ce,Vu=A,Rl=null);break;case"focusout":Rl=Vu=va=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Af(B,n,D);break;case"selectionchange":if(up)break;case"keydown":case"keyup":Af(B,n,D)}var J;if(Lu)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ya?hf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(sf&&n.locale!=="ko"&&(ya||te!=="onCompositionStart"?te==="onCompositionEnd"&&ya&&(J=lf()):(pn=D,Bu="value"in pn?pn.value:pn.textContent,ya=!0)),ce=Ar(A,te),0<ce.length&&(te=new cf(te,e,null,n,D),B.push({event:te,listeners:ce}),J?te.data=J:(J=mf(n),J!==null&&(te.data=J)))),(J=F0?P0(e,n):I0(e,n))&&(te=Ar(A,"onBeforeInput"),0<te.length&&(ce=new cf("onBeforeInput","beforeinput",null,n,D),B.push({event:ce,listeners:te}),ce.data=J)),Vp(B,e,A,n,D)}Wh(B,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Sl(e,n),l!=null&&a.unshift(ai(e,l,r)),l=Sl(e,t),l!=null&&a.push(ai(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ph(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,p=h.alternate,A=h.stateNode;if(h=h.tag,p!==null&&p===a)break;h!==5&&h!==26&&h!==27||A===null||(p=A,l?(A=Sl(n,r),A!=null&&f.unshift(ai(n,A,p))):l||(A=Sl(n,r),A!=null&&f.push(ai(n,A,p)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Kp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function Ih(e){return(typeof e=="string"?e:""+e).replace(Kp,`
`).replace(Jp,"")}function em(e,t){return t=Ih(t),Ih(e)===t}function _r(){}function Se(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ga(e,""+a);break;case"className":Oi(e,"class",a);break;case"tabIndex":Oi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,n,a);break;case"style":tf(e,a,r);break;case"data":if(t!=="object"){Oi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=_r);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ni(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Di(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Di(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=E0.get(n)||n,Di(e,n,a))}}function mo(e,t,n,a,l,r){switch(n){case"style":tf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=_r);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[it]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Di(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,r,f,n,null)}}l&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=l=null,p=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":l=D;break;case"type":f=D;break;case"checked":p=D;break;case"defaultChecked":A=D;break;case"value":r=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Se(e,t,a,D,n,null)}}Fs(e,r,h,p,A,f,l,!1),Ci(e);return;case"select":de("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,l,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ma(e,!!a,t,!1):n!=null&&ma(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Se(e,t,f,h,n,null)}Is(e,a,l,r),Ci(e);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,p,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ni.length;a++)de(ni[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,A,a,n,null)}return;default:if(Ru(t)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&mo(e,t,D,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function $p(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,h=null,p=null,A=null,D=null;for(w in n){var B=n[w];if(n.hasOwnProperty(w)&&B!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":p=B;default:a.hasOwnProperty(w)||Se(e,t,w,null,a,B)}}for(var _ in a){var w=a[_];if(B=n[_],a.hasOwnProperty(_)&&(w!=null||B!=null))switch(_){case"type":r=w;break;case"name":l=w;break;case"checked":A=w;break;case"defaultChecked":D=w;break;case"value":f=w;break;case"defaultValue":h=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:w!==B&&Se(e,t,_,w,a,B)}}_u(e,f,h,p,A,D,r,l);return;case"select":w=f=h=_=null;for(r in n)if(p=n[r],n.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":w=p;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,p)}for(l in a)if(r=a[l],p=n[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":_=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==p&&Se(e,t,l,r,a,p)}t=h,n=f,a=w,_!=null?ma(e,!!n,_,!1):!!a!=!!n&&(t!=null?ma(e,!!n,t,!0):ma(e,!!n,n?[]:"",!1));return;case"textarea":w=_=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":_=l;break;case"defaultValue":w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Se(e,t,f,l,a,r)}Ps(e,_,w);return;case"option":for(var ne in n)if(_=n[ne],n.hasOwnProperty(ne)&&_!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,_)}for(p in a)if(_=a[p],w=n[p],a.hasOwnProperty(p)&&_!==w&&(_!=null||w!=null))switch(p){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Se(e,t,p,_,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)_=n[I],n.hasOwnProperty(I)&&_!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,_);for(A in a)if(_=a[A],w=n[A],a.hasOwnProperty(A)&&_!==w&&(_!=null||w!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:Se(e,t,A,_,a,w)}return;default:if(Ru(t)){for(var je in n)_=n[je],n.hasOwnProperty(je)&&_!==void 0&&!a.hasOwnProperty(je)&&mo(e,t,je,void 0,a,_);for(D in a)_=a[D],w=n[D],!a.hasOwnProperty(D)||_===w||_===void 0&&w===void 0||mo(e,t,D,_,a,w);return}}for(var j in n)_=n[j],n.hasOwnProperty(j)&&_!=null&&!a.hasOwnProperty(j)&&Se(e,t,j,null,a,_);for(B in a)_=a[B],w=n[B],!a.hasOwnProperty(B)||_===w||_==null&&w==null||Se(e,t,B,_,a,w)}var go=null,po=null;function wr(e){return e.nodeType===9?e:e.ownerDocument}function tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=null;function Wp(){var e=window.event;return e&&e.type==="popstate"?e===yo?!1:(yo=e,!0):(yo=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,Fp=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,Pp=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(e){return lm.resolve(null).then(e).catch(Ip)}:am;function Ip(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function im(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&li(f.documentElement),n&2&&li(f.body),n&4)for(n=f.head,li(n),f=n.firstChild;f;){var h=f.nextSibling,p=f.nodeName;f[vl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(l===0){e.removeChild(r),di(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);di(t)}function vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vo(n),zu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function e1(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function t1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function xo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function n1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var So=null;function rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function um(e,t,n){switch(t=wr(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function li(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zu(e)}var Mt=new Map,cm=new Set;function Rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=q.d;q.d={f:a1,r:l1,D:i1,C:r1,L:u1,m:c1,X:s1,S:o1,M:f1};function a1(){var e=on.f(),t=xr();return e||t}function l1(e){var t=sa(e);t!==null&&t.tag===5&&t.type==="form"?wd(t):on.r(e)}var Za=typeof document>"u"?null:document;function om(e,t,n){var a=Za;if(a&&typeof t=="string"&&t){var l=zt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),cm.has(l)||(cm.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function i1(e){on.D(e),om("dns-prefetch",e,null)}function r1(e,t){on.C(e,t),om("preconnect",e,t)}function u1(e,t,n){on.L(e,t,n);var a=Za;if(a&&e&&t){var l='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+zt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+zt(n.imageSizes)+'"]')):l+='[href="'+zt(e)+'"]';var r=l;switch(t){case"style":r=Xa(e);break;case"script":r=Qa(e)}Mt.has(r)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(ii(r))||t==="script"&&a.querySelector(ri(r))||(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function c1(e,t){on.m(e,t);var n=Za;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+zt(a)+'"][href="'+zt(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Qa(e)}if(!Mt.has(r)&&(e=T({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ri(r)))return}a=n.createElement("link"),Fe(a,"link",e),Ze(a),n.head.appendChild(a)}}}function o1(e,t,n){on.S(e,t,n);var a=Za;if(a&&e){var l=fa(a).hoistableStyles,r=Xa(e);t=t||"default";var f=l.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(ii(r)))h.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&jo(e,n);var p=f=a.createElement("link");Ze(p),Fe(p,"link",e),p._p=new Promise(function(A,D){p.onload=A,p.onerror=D}),p.addEventListener("load",function(){h.loading|=1}),p.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Mr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},l.set(r,f)}}}function s1(e,t){on.X(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ri(l)),r||(e=T({src:e,async:!0},t),(t=Mt.get(l))&&zo(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function f1(e,t){on.M(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ri(l)),r||(e=T({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&zo(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function sm(e,t,n,a){var l=(l=ee.current)?Rr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xa(n.href),n=fa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xa(n.href);var r=fa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(ii(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||d1(l,e,n,f.state))),t&&a===null)throw Error(c(528,""));return f}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qa(n),n=fa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Xa(e){return'href="'+zt(e)+'"'}function ii(e){return'link[rel="stylesheet"]['+e+"]"}function fm(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function d1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Ze(t),e.head.appendChild(t))}function Qa(e){return'[src="'+zt(e)+'"]'}function ri(e){return"script[async]"+e}function dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+zt(n.href)+'"]');if(a)return t.instance=a,Ze(a),a;var l=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),Fe(a,"style",l),Mr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Xa(n.href);var r=e.querySelector(ii(l));if(r)return t.state.loading|=4,t.instance=r,Ze(r),r;a=fm(n),(l=Mt.get(l))&&jo(a,l),r=(e.ownerDocument||e).createElement("link"),Ze(r);var f=r;return f._p=new Promise(function(h,p){f.onload=h,f.onerror=p}),Fe(r,"link",a),t.state.loading|=4,Mr(r,n.precedence,e),t.instance=r;case"script":return r=Qa(n.src),(l=e.querySelector(ri(r)))?(t.instance=l,Ze(l),l):(a=n,(l=Mt.get(r))&&(a=T({},n),zo(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Fe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mr(a,n.precedence,e));return t.instance}function Mr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dr=null;function hm(e,t,n){if(Dr===null){var a=new Map,l=Dr=new Map;l.set(n,a)}else l=Dr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[vl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function mm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function h1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ui=null;function m1(){}function g1(e,t,n){if(ui===null)throw Error(c(475));var a=ui;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Xa(n.href),r=e.querySelector(ii(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Or.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ze(r);return}r=e.ownerDocument||e,n=fm(n),(l=Mt.get(l))&&jo(n,l),r=r.createElement("link"),Ze(r);var f=r;f._p=new Promise(function(h,p){f.onload=h,f.onerror=p}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Or.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function p1(){if(ui===null)throw Error(c(475));var e=ui;return e.stylesheets&&e.count===0&&Eo(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Eo(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Or(){if(this.count--,this.count===0){if(this.stylesheets)Eo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cr=null;function Eo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cr=new Map,t.forEach(b1,e),Cr=null,Or.call(e))}function b1(e,t){if(!(t.state.loading&4)){var n=Cr.get(e);if(n)var a=n.get(null);else{n=new Map,Cr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Or.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ci={$$typeof:X,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function y1(e,t,n,a,l,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function pm(e,t,n,a,l,r,f,h,p,A,D,B){return e=new y1(e,t,n,f,h,p,A,B),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=lc(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},cc(r),e}function bm(e){return e?(e=za,e):za}function ym(e,t,n,a,l,r){l=bm(l),a.context===null?a.context=l:a.pendingContext=l,a=vn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=xn(e,a,t),n!==null&&(vt(n,e,t),kl(n,e,t))}function vm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function To(e,t){vm(e,t),(e=e.alternate)&&vm(e,t)}function xm(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&vt(t,e,67108864),To(e,67108864)}}var Br=!0;function v1(e,t,n,a){var l=M.T;M.T=null;var r=q.p;try{q.p=2,Ao(e,t,n,a)}finally{q.p=r,M.T=l}}function x1(e,t,n,a){var l=M.T;M.T=null;var r=q.p;try{q.p=8,Ao(e,t,n,a)}finally{q.p=r,M.T=l}}function Ao(e,t,n,a){if(Br){var l=_o(a);if(l===null)ho(e,t,a,Nr,n),jm(e,a);else if(j1(l,e,t,n,a))a.stopPropagation();else if(jm(e,a),t&4&&-1<S1.indexOf(e)){for(;l!==null;){var r=sa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Yn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var p=1<<31-dt(f);h.entanglements[1]|=p,f&=~p}Yt(r),(ye&6)===0&&(yr=Ut()+500,ti(0))}}break;case 13:h=ja(r,2),h!==null&&vt(h,r,2),xr(),To(r,2)}if(r=_o(a),r===null&&ho(e,t,a,Nr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else ho(e,t,a,null,n)}}function _o(e){return e=Du(e),wo(e)}var Nr=null;function wo(e){if(Nr=null,e=oa(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function Sm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r0()){case Bs:return 2;case Ns:return 8;case _i:case u0:return 32;case Us:return 268435456;default:return 32}default:return 32}}var Ro=!1,Cn=null,Bn=null,Nn=null,oi=new Map,si=new Map,Un=[],S1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jm(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function fi(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=sa(t),t!==null&&xm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function j1(e,t,n,a,l){switch(t){case"focusin":return Cn=fi(Cn,e,t,n,a,l),!0;case"dragenter":return Bn=fi(Bn,e,t,n,a,l),!0;case"mouseover":return Nn=fi(Nn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return oi.set(r,fi(oi.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,si.set(r,fi(si.get(r)||null,e,t,n,a,l)),!0}return!1}function zm(e){var t=oa(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,g0(e.priority,function(){if(n.tag===13){var a=yt();a=xu(a);var l=ja(n,a);l!==null&&vt(l,n,a),To(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_o(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Mu=a,n.target.dispatchEvent(a),Mu=null}else return t=sa(n),t!==null&&xm(t),e.blockedOn=n,!1;t.shift()}return!0}function Em(e,t,n){Ur(e)&&n.delete(t)}function z1(){Ro=!1,Cn!==null&&Ur(Cn)&&(Cn=null),Bn!==null&&Ur(Bn)&&(Bn=null),Nn!==null&&Ur(Nn)&&(Nn=null),oi.forEach(Em),si.forEach(Em)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ro||(Ro=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,z1)))}var kr=null;function Tm(e){kr!==e&&(kr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){kr===e&&(kr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(wo(a||n)===null)continue;break}var r=sa(n);r!==null&&(e.splice(t,3),t-=3,_c(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function di(e){function t(p){return Hr(p,e)}Cn!==null&&Hr(Cn,e),Bn!==null&&Hr(Bn,e),Nn!==null&&Hr(Nn,e),oi.forEach(t),si.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)zm(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[it]||null;if(typeof r=="function")f||Tm(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[it]||null)h=f.formAction;else if(wo(l)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),Tm(n)}}}function Mo(e){this._internalRoot=e}Lr.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=yt();ym(n,a,e,t,null,null)},Lr.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ym(e.current,2,null,e,null,null),xr(),t[ca]=null}};function Lr(e){this._internalRoot=e}Lr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ys();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&zm(e)}};var Am=u.version;if(Am!=="19.1.0")throw Error(c(527,Am,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var E1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{pl=Gr.inject(E1),ft=Gr}catch{}}return mi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",l=qd,r=Vd,f=Zd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=pm(e,1,!1,null,null,n,a,l,r,f,h,null),e[ca]=t.current,fo(e),new Mo(t)},mi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,l="",r=qd,f=Vd,h=Zd,p=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),t=pm(e,1,!0,t,n??null,a,l,r,f,h,p,A),t.context=bm(null),n=t.current,a=yt(),a=xu(a),l=vn(a),l.callback=null,xn(n,l,a),n=a,t.current.lanes=n,yl(t,n),Yt(t),e[ca]=t.current,fo(e),new Lr(t)},mi.version="19.1.0",mi}var Um;function N1(){if(Um)return Co.exports;Um=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Co.exports=B1(),Co.exports}var U1=N1();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hm="popstate";function H1(i={}){function u(c,d){let{pathname:m,search:b,hash:z}=c.location;return fs("",{pathname:m,search:b,hash:z},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){return typeof d=="string"?d:Si(d)}return L1(u,o,null,i)}function De(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Vt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function k1(){return Math.random().toString(36).substring(2,10)}function km(i,u){return{usr:i.state,key:i.key,idx:u}}function fs(i,u,o=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?hl(u):u,state:o,key:u&&u.key||c||k1()}}function Si({pathname:i="/",search:u="",hash:o=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function hl(i){let u={};if(i){let o=i.indexOf("#");o>=0&&(u.hash=i.substring(o),i=i.substring(0,o));let c=i.indexOf("?");c>=0&&(u.search=i.substring(c),i=i.substring(0,c)),i&&(u.pathname=i)}return u}function L1(i,u,o,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,b=d.history,z="POP",v=null,g=T();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function T(){return(b.state||{idx:null}).idx}function C(){z="POP";let Z=T(),H=Z==null?null:Z-g;g=Z,v&&v({action:z,location:Y.location,delta:H})}function U(Z,H){z="PUSH";let $=fs(Y.location,Z,H);g=T()+1;let X=km($,g),ae=Y.createHref($);try{b.pushState(X,"",ae)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;d.location.assign(ae)}m&&v&&v({action:z,location:Y.location,delta:1})}function k(Z,H){z="REPLACE";let $=fs(Y.location,Z,H);g=T();let X=km($,g),ae=Y.createHref($);b.replaceState(X,"",ae),m&&v&&v({action:z,location:Y.location,delta:0})}function L(Z){return G1(Z)}let Y={get action(){return z},get location(){return i(d,b)},listen(Z){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Hm,C),v=Z,()=>{d.removeEventListener(Hm,C),v=null}},createHref(Z){return u(d,Z)},createURL:L,encodeLocation(Z){let H=L(Z);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:k,go(Z){return b.go(Z)}};return Y}function G1(i,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),De(o,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:Si(i);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=o+c),new URL(c,o)}function pg(i,u,o="/"){return Y1(i,u,o,!1)}function Y1(i,u,o,c){let d=typeof u=="string"?hl(u):u,m=dn(d.pathname||"/",o);if(m==null)return null;let b=bg(i);q1(b);let z=null;for(let v=0;z==null&&v<b.length;++v){let g=I1(m);z=F1(b[v],g,c)}return z}function bg(i,u=[],o=[],c=""){let d=(m,b,z)=>{let v={relativePath:z===void 0?m.path||"":z,caseSensitive:m.caseSensitive===!0,childrenIndex:b,route:m};v.relativePath.startsWith("/")&&(De(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let g=fn([c,v.relativePath]),T=o.concat(v);m.children&&m.children.length>0&&(De(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),bg(m.children,u,T,g)),!(m.path==null&&!m.index)&&u.push({path:g,score:$1(g,m.index),routesMeta:T})};return i.forEach((m,b)=>{if(m.path===""||!m.path?.includes("?"))d(m,b);else for(let z of yg(m.path))d(m,b,z)}),u}function yg(i){let u=i.split("/");if(u.length===0)return[];let[o,...c]=u,d=o.endsWith("?"),m=o.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let b=yg(c.join("/")),z=[];return z.push(...b.map(v=>v===""?m:[m,v].join("/"))),d&&z.push(...b),z.map(v=>i.startsWith("/")&&v===""?"/":v)}function q1(i){i.sort((u,o)=>u.score!==o.score?o.score-u.score:W1(u.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var V1=/^:[\w-]+$/,Z1=3,X1=2,Q1=1,K1=10,J1=-2,Lm=i=>i==="*";function $1(i,u){let o=i.split("/"),c=o.length;return o.some(Lm)&&(c+=J1),u&&(c+=X1),o.filter(d=>!Lm(d)).reduce((d,m)=>d+(V1.test(m)?Z1:m===""?Q1:K1),c)}function W1(i,u){return i.length===u.length&&i.slice(0,-1).every((c,d)=>c===u[d])?i[i.length-1]-u[u.length-1]:0}function F1(i,u,o=!1){let{routesMeta:c}=i,d={},m="/",b=[];for(let z=0;z<c.length;++z){let v=c[z],g=z===c.length-1,T=m==="/"?u:u.slice(m.length)||"/",C=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},T),U=v.route;if(!C&&g&&o&&!c[c.length-1].route.index&&(C=lu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},T)),!C)return null;Object.assign(d,C.params),b.push({params:d,pathname:fn([m,C.pathname]),pathnameBase:ab(fn([m,C.pathnameBase])),route:U}),C.pathnameBase!=="/"&&(m=fn([m,C.pathnameBase]))}return b}function lu(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,c]=P1(i.path,i.caseSensitive,i.end),d=u.match(o);if(!d)return null;let m=d[0],b=m.replace(/(.)\/+$/,"$1"),z=d.slice(1);return{params:c.reduce((g,{paramName:T,isOptional:C},U)=>{if(T==="*"){let L=z[U]||"";b=m.slice(0,m.length-L.length).replace(/(.)\/+$/,"$1")}const k=z[U];return C&&!k?g[T]=void 0:g[T]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:b,pattern:i}}function P1(i,u=!1,o=!0){Vt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,z,v)=>(c.push({paramName:z,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),c]}function I1(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Vt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function dn(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,c=i.charAt(o);return c&&c!=="/"?null:i.slice(o)||"/"}function eb(i,u="/"){let{pathname:o,search:c="",hash:d=""}=typeof i=="string"?hl(i):i;return{pathname:o?o.startsWith("/")?o:tb(o,u):u,search:lb(c),hash:ib(d)}}function tb(i,u){let o=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function Ho(i,u,o,c){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nb(i){return i.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function vg(i){let u=nb(i);return u.map((o,c)=>c===u.length-1?o.pathname:o.pathnameBase)}function xg(i,u,o,c=!1){let d;typeof i=="string"?d=hl(i):(d={...i},De(!d.pathname||!d.pathname.includes("?"),Ho("?","pathname","search",d)),De(!d.pathname||!d.pathname.includes("#"),Ho("#","pathname","hash",d)),De(!d.search||!d.search.includes("#"),Ho("#","search","hash",d)));let m=i===""||d.pathname==="",b=m?"/":d.pathname,z;if(b==null)z=o;else{let C=u.length-1;if(!c&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),C-=1;d.pathname=U.join("/")}z=C>=0?u[C]:"/"}let v=eb(d,z),g=b&&b!=="/"&&b.endsWith("/"),T=(m||b===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(g||T)&&(v.pathname+="/"),v}var fn=i=>i.join("/").replace(/\/\/+/g,"/"),ab=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),lb=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ib=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function rb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Sg=["POST","PUT","PATCH","DELETE"];new Set(Sg);var ub=["GET",...Sg];new Set(ub);var ml=R.createContext(null);ml.displayName="DataRouter";var ou=R.createContext(null);ou.displayName="DataRouterState";R.createContext(!1);var jg=R.createContext({isTransitioning:!1});jg.displayName="ViewTransition";var cb=R.createContext(new Map);cb.displayName="Fetchers";var ob=R.createContext(null);ob.displayName="Await";var Zt=R.createContext(null);Zt.displayName="Navigation";var zi=R.createContext(null);zi.displayName="Location";var hn=R.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var Ss=R.createContext(null);Ss.displayName="RouteError";function sb(i,{relative:u}={}){De(Ei(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=R.useContext(Zt),{hash:d,pathname:m,search:b}=Ti(i,{relative:u}),z=m;return o!=="/"&&(z=m==="/"?o:fn([o,m])),c.createHref({pathname:z,search:b,hash:d})}function Ei(){return R.useContext(zi)!=null}function Ln(){return De(Ei(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(zi).location}var zg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Eg(i){R.useContext(Zt).static||R.useLayoutEffect(i)}function fb(){let{isDataRoute:i}=R.useContext(hn);return i?Eb():db()}function db(){De(Ei(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(ml),{basename:u,navigator:o}=R.useContext(Zt),{matches:c}=R.useContext(hn),{pathname:d}=Ln(),m=JSON.stringify(vg(c)),b=R.useRef(!1);return Eg(()=>{b.current=!0}),R.useCallback((v,g={})=>{if(Vt(b.current,zg),!b.current)return;if(typeof v=="number"){o.go(v);return}let T=xg(v,JSON.parse(m),d,g.relative==="path");i==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:fn([u,T.pathname])),(g.replace?o.replace:o.push)(T,g.state,g)},[u,o,m,d,i])}R.createContext(null);function Ti(i,{relative:u}={}){let{matches:o}=R.useContext(hn),{pathname:c}=Ln(),d=JSON.stringify(vg(o));return R.useMemo(()=>xg(i,JSON.parse(d),c,u==="path"),[i,d,c,u])}function hb(i,u){return Tg(i,u)}function Tg(i,u,o,c){De(Ei(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=R.useContext(Zt),{matches:m}=R.useContext(hn),b=m[m.length-1],z=b?b.params:{},v=b?b.pathname:"/",g=b?b.pathnameBase:"/",T=b&&b.route;{let H=T&&T.path||"";Ag(v,!T||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let C=Ln(),U;if(u){let H=typeof u=="string"?hl(u):u;De(g==="/"||H.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=C;let k=U.pathname||"/",L=k;if(g!=="/"){let H=g.replace(/^\//,"").split("/");L="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let Y=pg(i,{pathname:L});Vt(T||Y!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Vt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=yb(Y&&Y.map(H=>Object.assign({},H,{params:Object.assign({},z,H.params),pathname:fn([g,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:fn([g,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),m,o,c);return u&&Z?R.createElement(zi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},Z):Z}function mb(){let i=zb(),u=rb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:m},"ErrorBoundary")," or"," ",R.createElement("code",{style:m},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),o?R.createElement("pre",{style:d},o):null,b)}var gb=R.createElement(mb,null),pb=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){console.error("React Router caught the following error during render",i,u)}render(){return this.state.error!==void 0?R.createElement(hn.Provider,{value:this.props.routeContext},R.createElement(Ss.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bb({routeContext:i,match:u,children:o}){let c=R.useContext(ml);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(hn.Provider,{value:i},o)}function yb(i,u=[],o=null,c=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let d=i,m=o?.errors;if(m!=null){let v=d.findIndex(g=>g.route.id&&m?.[g.route.id]!==void 0);De(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let b=!1,z=-1;if(o)for(let v=0;v<d.length;v++){let g=d[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(z=v),g.route.id){let{loaderData:T,errors:C}=o,U=g.route.loader&&!T.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||U){b=!0,z>=0?d=d.slice(0,z+1):d=[d[0]];break}}}return d.reduceRight((v,g,T)=>{let C,U=!1,k=null,L=null;o&&(C=m&&g.route.id?m[g.route.id]:void 0,k=g.route.errorElement||gb,b&&(z<0&&T===0?(Ag("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,L=null):z===T&&(U=!0,L=g.route.hydrateFallbackElement||null)));let Y=u.concat(d.slice(0,T+1)),Z=()=>{let H;return C?H=k:U?H=L:g.route.Component?H=R.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=v,R.createElement(bb,{match:g,routeContext:{outlet:v,matches:Y,isDataRoute:o!=null},children:H})};return o&&(g.route.ErrorBoundary||g.route.errorElement||T===0)?R.createElement(pb,{location:o.location,revalidation:o.revalidation,component:k,error:C,children:Z(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):Z()},null)}function js(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vb(i){let u=R.useContext(ml);return De(u,js(i)),u}function xb(i){let u=R.useContext(ou);return De(u,js(i)),u}function Sb(i){let u=R.useContext(hn);return De(u,js(i)),u}function zs(i){let u=Sb(i),o=u.matches[u.matches.length-1];return De(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function jb(){return zs("useRouteId")}function zb(){let i=R.useContext(Ss),u=xb("useRouteError"),o=zs("useRouteError");return i!==void 0?i:u.errors?.[o]}function Eb(){let{router:i}=vb("useNavigate"),u=zs("useNavigate"),o=R.useRef(!1);return Eg(()=>{o.current=!0}),R.useCallback(async(d,m={})=>{Vt(o.current,zg),o.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:u,...m}))},[i,u])}var Gm={};function Ag(i,u,o){!u&&!Gm[i]&&(Gm[i]=!0,Vt(!1,o))}R.memo(Tb);function Tb({routes:i,future:u,state:o}){return Tg(i,void 0,o,u)}function Wr(i){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ab({basename:i="/",children:u=null,location:o,navigationType:c="POP",navigator:d,static:m=!1}){De(!Ei(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),z=R.useMemo(()=>({basename:b,navigator:d,static:m,future:{}}),[b,d,m]);typeof o=="string"&&(o=hl(o));let{pathname:v="/",search:g="",hash:T="",state:C=null,key:U="default"}=o,k=R.useMemo(()=>{let L=dn(v,b);return L==null?null:{location:{pathname:L,search:g,hash:T,state:C,key:U},navigationType:c}},[b,v,g,T,C,U,c]);return Vt(k!=null,`<Router basename="${b}"> is not able to match the URL "${v}${g}${T}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:R.createElement(Zt.Provider,{value:z},R.createElement(zi.Provider,{children:u,value:k}))}function _b({children:i,location:u}){return hb(ds(i),u)}function ds(i,u=[]){let o=[];return R.Children.forEach(i,(c,d)=>{if(!R.isValidElement(c))return;let m=[...u,d];if(c.type===R.Fragment){o.push.apply(o,ds(c.props.children,m));return}De(c.type===Wr,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=ds(c.props.children,m)),o.push(b)}),o}var Fr="get",Pr="application/x-www-form-urlencoded";function su(i){return i!=null&&typeof i.tagName=="string"}function wb(i){return su(i)&&i.tagName.toLowerCase()==="button"}function Rb(i){return su(i)&&i.tagName.toLowerCase()==="form"}function Mb(i){return su(i)&&i.tagName.toLowerCase()==="input"}function Db(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ob(i,u){return i.button===0&&(!u||u==="_self")&&!Db(i)}var Yr=null;function Cb(){if(Yr===null)try{new FormData(document.createElement("form"),0),Yr=!1}catch{Yr=!0}return Yr}var Bb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ko(i){return i!=null&&!Bb.has(i)?(Vt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pr}"`),null):i}function Nb(i,u){let o,c,d,m,b;if(Rb(i)){let z=i.getAttribute("action");c=z?dn(z,u):null,o=i.getAttribute("method")||Fr,d=ko(i.getAttribute("enctype"))||Pr,m=new FormData(i)}else if(wb(i)||Mb(i)&&(i.type==="submit"||i.type==="image")){let z=i.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||z.getAttribute("action");if(c=v?dn(v,u):null,o=i.getAttribute("formmethod")||z.getAttribute("method")||Fr,d=ko(i.getAttribute("formenctype"))||ko(z.getAttribute("enctype"))||Pr,m=new FormData(z,i),!Cb()){let{name:g,type:T,value:C}=i;if(T==="image"){let U=g?`${g}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else g&&m.append(g,C)}}else{if(su(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Fr,c=null,d=Pr,b=i}return m&&d==="text/plain"&&(b=m,m=void 0),{action:c,method:o.toLowerCase(),encType:d,formData:m,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Es(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Ub(i,u,o){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${o}`:u&&dn(c.pathname,u)==="/"?c.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${o}`,c}async function Hb(i,u){if(i.id in u)return u[i.id];try{let o=await import(i.module);return u[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Lb(i,u,o){let c=await Promise.all(i.map(async d=>{let m=u.routes[d.route.id];if(m){let b=await Hb(m,o);return b.links?b.links():[]}return[]}));return Vb(c.flat(1).filter(kb).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Ym(i,u,o,c,d,m){let b=(v,g)=>o[g]?v.route.id!==o[g].route.id:!0,z=(v,g)=>o[g].pathname!==v.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==v.params["*"];return m==="assets"?u.filter((v,g)=>b(v,g)||z(v,g)):m==="data"?u.filter((v,g)=>{let T=c.routes[v.route.id];if(!T||!T.hasLoader)return!1;if(b(v,g)||z(v,g))return!0;if(v.route.shouldRevalidate){let C=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Gb(i,u,{includeHydrateFallback:o}={}){return Yb(i.map(c=>{let d=u.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function Yb(i){return[...new Set(i)]}function qb(i){let u={},o=Object.keys(i).sort();for(let c of o)u[c]=i[c];return u}function Vb(i,u){let o=new Set;return new Set(u),i.reduce((c,d)=>{let m=JSON.stringify(qb(d));return o.has(m)||(o.add(m),c.push({key:m,link:d})),c},[])}function _g(){let i=R.useContext(ml);return Es(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Zb(){let i=R.useContext(ou);return Es(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ts=R.createContext(void 0);Ts.displayName="FrameworkContext";function wg(){let i=R.useContext(Ts);return Es(i,"You must render this element inside a <HydratedRouter> element"),i}function Xb(i,u){let o=R.useContext(Ts),[c,d]=R.useState(!1),[m,b]=R.useState(!1),{onFocus:z,onBlur:v,onMouseEnter:g,onMouseLeave:T,onTouchStart:C}=u,U=R.useRef(null);R.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let Y=H=>{H.forEach($=>{b($.isIntersecting)})},Z=new IntersectionObserver(Y,{threshold:.5});return U.current&&Z.observe(U.current),()=>{Z.disconnect()}}},[i]),R.useEffect(()=>{if(c){let Y=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(Y)}}},[c]);let k=()=>{d(!0)},L=()=>{d(!1),b(!1)};return o?i!=="intent"?[m,U,{}]:[m,U,{onFocus:gi(z,k),onBlur:gi(v,L),onMouseEnter:gi(g,k),onMouseLeave:gi(T,L),onTouchStart:gi(C,k)}]:[!1,U,{}]}function gi(i,u){return o=>{i&&i(o),o.defaultPrevented||u(o)}}function Qb({page:i,...u}){let{router:o}=_g(),c=R.useMemo(()=>pg(o.routes,i,o.basename),[o.routes,i,o.basename]);return c?R.createElement(Jb,{page:i,matches:c,...u}):null}function Kb(i){let{manifest:u,routeModules:o}=wg(),[c,d]=R.useState([]);return R.useEffect(()=>{let m=!1;return Lb(i,u,o).then(b=>{m||d(b)}),()=>{m=!0}},[i,u,o]),c}function Jb({page:i,matches:u,...o}){let c=Ln(),{manifest:d,routeModules:m}=wg(),{basename:b}=_g(),{loaderData:z,matches:v}=Zb(),g=R.useMemo(()=>Ym(i,u,v,d,c,"data"),[i,u,v,d,c]),T=R.useMemo(()=>Ym(i,u,v,d,c,"assets"),[i,u,v,d,c]),C=R.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let L=new Set,Y=!1;if(u.forEach(H=>{let $=d.routes[H.route.id];!$||!$.hasLoader||(!g.some(X=>X.route.id===H.route.id)&&H.route.id in z&&m[H.route.id]?.shouldRevalidate||$.hasClientLoader?Y=!0:L.add(H.route.id))}),L.size===0)return[];let Z=Ub(i,b,"data");return Y&&L.size>0&&Z.searchParams.set("_routes",u.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[Z.pathname+Z.search]},[b,z,c,d,g,u,i,m]),U=R.useMemo(()=>Gb(T,d),[T,d]),k=Kb(T);return R.createElement(R.Fragment,null,C.map(L=>R.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...o})),U.map(L=>R.createElement("link",{key:L,rel:"modulepreload",href:L,...o})),k.map(({key:L,link:Y})=>R.createElement("link",{key:L,...Y})))}function $b(...i){return u=>{i.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var Rg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rg&&(window.__reactRouterVersion="7.7.1")}catch{}function Wb({basename:i,children:u,window:o}){let c=R.useRef();c.current==null&&(c.current=H1({window:o,v5Compat:!0}));let d=c.current,[m,b]=R.useState({action:d.action,location:d.location}),z=R.useCallback(v=>{R.startTransition(()=>b(v))},[b]);return R.useLayoutEffect(()=>d.listen(z),[d,z]),R.createElement(Ab,{basename:i,children:u,location:m.location,navigationType:m.action,navigator:d})}var Mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,As=R.forwardRef(function({onClick:u,discover:o="render",prefetch:c="none",relative:d,reloadDocument:m,replace:b,state:z,target:v,to:g,preventScrollReset:T,viewTransition:C,...U},k){let{basename:L}=R.useContext(Zt),Y=typeof g=="string"&&Mg.test(g),Z,H=!1;if(typeof g=="string"&&Y&&(Z=g,Rg))try{let ze=new URL(window.location.href),nt=g.startsWith("//")?new URL(ze.protocol+g):new URL(g),lt=dn(nt.pathname,L);nt.origin===ze.origin&&lt!=null?g=lt+nt.search+nt.hash:H=!0}catch{Vt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=sb(g,{relative:d}),[X,ae,Q]=Xb(c,U),le=ey(g,{replace:b,state:z,target:v,preventScrollReset:T,relative:d,viewTransition:C});function W(ze){u&&u(ze),ze.defaultPrevented||le(ze)}let Ae=R.createElement("a",{...U,...Q,href:Z||$,onClick:H||m?u:W,ref:$b(k,ae),target:v,"data-discover":!Y&&o==="render"?"true":void 0});return X&&!Y?R.createElement(R.Fragment,null,Ae,R.createElement(Qb,{page:$})):Ae});As.displayName="Link";var Fb=R.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:c="",end:d=!1,style:m,to:b,viewTransition:z,children:v,...g},T){let C=Ti(b,{relative:g.relative}),U=Ln(),k=R.useContext(ou),{navigator:L,basename:Y}=R.useContext(Zt),Z=k!=null&&iy(C)&&z===!0,H=L.encodeLocation?L.encodeLocation(C).pathname:C.pathname,$=U.pathname,X=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||($=$.toLowerCase(),X=X?X.toLowerCase():null,H=H.toLowerCase()),X&&Y&&(X=dn(X,Y)||X);const ae=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Q=$===H||!d&&$.startsWith(H)&&$.charAt(ae)==="/",le=X!=null&&(X===H||!d&&X.startsWith(H)&&X.charAt(H.length)==="/"),W={isActive:Q,isPending:le,isTransitioning:Z},Ae=Q?u:void 0,ze;typeof c=="function"?ze=c(W):ze=[c,Q?"active":null,le?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let nt=typeof m=="function"?m(W):m;return R.createElement(As,{...g,"aria-current":Ae,className:ze,ref:T,style:nt,to:b,viewTransition:z},typeof v=="function"?v(W):v)});Fb.displayName="NavLink";var Pb=R.forwardRef(({discover:i="render",fetcherKey:u,navigate:o,reloadDocument:c,replace:d,state:m,method:b=Fr,action:z,onSubmit:v,relative:g,preventScrollReset:T,viewTransition:C,...U},k)=>{let L=ay(),Y=ly(z,{relative:g}),Z=b.toLowerCase()==="get"?"get":"post",H=typeof z=="string"&&Mg.test(z),$=X=>{if(v&&v(X),X.defaultPrevented)return;X.preventDefault();let ae=X.nativeEvent.submitter,Q=ae?.getAttribute("formmethod")||b;L(ae||X.currentTarget,{fetcherKey:u,method:Q,navigate:o,replace:d,state:m,relative:g,preventScrollReset:T,viewTransition:C})};return R.createElement("form",{ref:k,method:Z,action:Y,onSubmit:c?v:$,...U,"data-discover":!H&&i==="render"?"true":void 0})});Pb.displayName="Form";function Ib(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dg(i){let u=R.useContext(ml);return De(u,Ib(i)),u}function ey(i,{target:u,replace:o,state:c,preventScrollReset:d,relative:m,viewTransition:b}={}){let z=fb(),v=Ln(),g=Ti(i,{relative:m});return R.useCallback(T=>{if(Ob(T,u)){T.preventDefault();let C=o!==void 0?o:Si(v)===Si(g);z(i,{replace:C,state:c,preventScrollReset:d,relative:m,viewTransition:b})}},[v,z,g,o,c,u,i,d,m,b])}var ty=0,ny=()=>`__${String(++ty)}__`;function ay(){let{router:i}=Dg("useSubmit"),{basename:u}=R.useContext(Zt),o=jb();return R.useCallback(async(c,d={})=>{let{action:m,method:b,encType:z,formData:v,body:g}=Nb(c,u);if(d.navigate===!1){let T=d.fetcherKey||ny();await i.fetch(T,o,d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||b,formEncType:d.encType||z,flushSync:d.flushSync})}else await i.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||b,formEncType:d.encType||z,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,u,o])}function ly(i,{relative:u}={}){let{basename:o}=R.useContext(Zt),c=R.useContext(hn);De(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...Ti(i||".",{relative:u})},b=Ln();if(i==null){m.search=b.search;let z=new URLSearchParams(m.search),v=z.getAll("index");if(v.some(T=>T==="")){z.delete("index"),v.filter(C=>C).forEach(C=>z.append("index",C));let T=z.toString();m.search=T?`?${T}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:fn([o,m.pathname])),Si(m)}function iy(i,{relative:u}={}){let o=R.useContext(jg);De(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Dg("useViewTransitionState"),d=Ti(i,{relative:u});if(!o.isTransitioning)return!1;let m=dn(o.currentLocation.pathname,c)||o.currentLocation.pathname,b=dn(o.nextLocation.pathname,c)||o.nextLocation.pathname;return lu(d.pathname,b)!=null||lu(d.pathname,m)!=null}var st=function(){return st=Object.assign||function(u){for(var o,c=1,d=arguments.length;c<d;c++){o=arguments[c];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(u[m]=o[m])}return u},st.apply(this,arguments)};function iu(i,u,o){if(o||arguments.length===2)for(var c=0,d=u.length,m;c<d;c++)(m||!(c in u))&&(m||(m=Array.prototype.slice.call(u,0,c)),m[c]=u[c]);return i.concat(m||Array.prototype.slice.call(u))}var _e="-ms-",vi="-moz-",be="-webkit-",Og="comm",fu="rule",_s="decl",ry="@import",Cg="@keyframes",uy="@layer",Bg=Math.abs,ws=String.fromCharCode,hs=Object.assign;function cy(i,u){return Je(i,0)^45?(((u<<2^Je(i,0))<<2^Je(i,1))<<2^Je(i,2))<<2^Je(i,3):0}function Ng(i){return i.trim()}function sn(i,u){return(i=u.exec(i))?i[0]:i}function re(i,u,o){return i.replace(u,o)}function Ir(i,u,o){return i.indexOf(u,o)}function Je(i,u){return i.charCodeAt(u)|0}function cl(i,u,o){return i.slice(u,o)}function qt(i){return i.length}function Ug(i){return i.length}function yi(i,u){return u.push(i),i}function oy(i,u){return i.map(u).join("")}function qm(i,u){return i.filter(function(o){return!sn(o,u)})}var du=1,ol=1,Hg=0,Dt=0,ke=0,gl="";function hu(i,u,o,c,d,m,b,z){return{value:i,root:u,parent:o,type:c,props:d,children:m,line:du,column:ol,length:b,return:"",siblings:z}}function kn(i,u){return hs(hu("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},u)}function Ka(i){for(;i.root;)i=kn(i.root,{children:[i]});yi(i,i.siblings)}function sy(){return ke}function fy(){return ke=Dt>0?Je(gl,--Dt):0,ol--,ke===10&&(ol=1,du--),ke}function Nt(){return ke=Dt<Hg?Je(gl,Dt++):0,ol++,ke===10&&(ol=1,du++),ke}function ra(){return Je(gl,Dt)}function eu(){return Dt}function mu(i,u){return cl(gl,i,u)}function ms(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dy(i){return du=ol=1,Hg=qt(gl=i),Dt=0,[]}function hy(i){return gl="",i}function Lo(i){return Ng(mu(Dt-1,gs(i===91?i+2:i===40?i+1:i)))}function my(i){for(;(ke=ra())&&ke<33;)Nt();return ms(i)>2||ms(ke)>3?"":" "}function gy(i,u){for(;--u&&Nt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return mu(i,eu()+(u<6&&ra()==32&&Nt()==32))}function gs(i){for(;Nt();)switch(ke){case i:return Dt;case 34:case 39:i!==34&&i!==39&&gs(ke);break;case 40:i===41&&gs(i);break;case 92:Nt();break}return Dt}function py(i,u){for(;Nt()&&i+ke!==57;)if(i+ke===84&&ra()===47)break;return"/*"+mu(u,Dt-1)+"*"+ws(i===47?i:Nt())}function by(i){for(;!ms(ra());)Nt();return mu(i,Dt)}function yy(i){return hy(tu("",null,null,null,[""],i=dy(i),0,[0],i))}function tu(i,u,o,c,d,m,b,z,v){for(var g=0,T=0,C=b,U=0,k=0,L=0,Y=1,Z=1,H=1,$=0,X="",ae=d,Q=m,le=c,W=X;Z;)switch(L=$,$=Nt()){case 40:if(L!=108&&Je(W,C-1)==58){Ir(W+=re(Lo($),"&","&\f"),"&\f",Bg(g?z[g-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:W+=Lo($);break;case 9:case 10:case 13:case 32:W+=my(L);break;case 92:W+=gy(eu()-1,7);continue;case 47:switch(ra()){case 42:case 47:yi(vy(py(Nt(),eu()),u,o,v),v);break;default:W+="/"}break;case 123*Y:z[g++]=qt(W)*H;case 125*Y:case 59:case 0:switch($){case 0:case 125:Z=0;case 59+T:H==-1&&(W=re(W,/\f/g,"")),k>0&&qt(W)-C&&yi(k>32?Zm(W+";",c,o,C-1,v):Zm(re(W," ","")+";",c,o,C-2,v),v);break;case 59:W+=";";default:if(yi(le=Vm(W,u,o,g,T,d,z,X,ae=[],Q=[],C,m),m),$===123)if(T===0)tu(W,u,le,le,ae,m,C,z,Q);else switch(U===99&&Je(W,3)===110?100:U){case 100:case 108:case 109:case 115:tu(i,le,le,c&&yi(Vm(i,le,le,0,0,d,z,X,d,ae=[],C,Q),Q),d,Q,C,z,c?ae:Q);break;default:tu(W,le,le,le,[""],Q,0,z,Q)}}g=T=k=0,Y=H=1,X=W="",C=b;break;case 58:C=1+qt(W),k=L;default:if(Y<1){if($==123)--Y;else if($==125&&Y++==0&&fy()==125)continue}switch(W+=ws($),$*Y){case 38:H=T>0?1:(W+="\f",-1);break;case 44:z[g++]=(qt(W)-1)*H,H=1;break;case 64:ra()===45&&(W+=Lo(Nt())),U=ra(),T=C=qt(X=W+=by(eu())),$++;break;case 45:L===45&&qt(W)==2&&(Y=0)}}return m}function Vm(i,u,o,c,d,m,b,z,v,g,T,C){for(var U=d-1,k=d===0?m:[""],L=Ug(k),Y=0,Z=0,H=0;Y<c;++Y)for(var $=0,X=cl(i,U+1,U=Bg(Z=b[Y])),ae=i;$<L;++$)(ae=Ng(Z>0?k[$]+" "+X:re(X,/&\f/g,k[$])))&&(v[H++]=ae);return hu(i,u,o,d===0?fu:z,v,g,T,C)}function vy(i,u,o,c){return hu(i,u,o,Og,ws(sy()),cl(i,2,-2),0,c)}function Zm(i,u,o,c,d){return hu(i,u,o,_s,cl(i,0,c),cl(i,c+1,-1),c,d)}function kg(i,u,o){switch(cy(i,u)){case 5103:return be+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+i+i;case 4789:return vi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return be+i+vi+i+_e+i+i;case 5936:switch(Je(i,u+11)){case 114:return be+i+_e+re(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return be+i+_e+re(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return be+i+_e+re(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return be+i+_e+i+i;case 6165:return be+i+_e+"flex-"+i+i;case 5187:return be+i+re(i,/(\w+).+(:[^]+)/,be+"box-$1$2"+_e+"flex-$1$2")+i;case 5443:return be+i+_e+"flex-item-"+re(i,/flex-|-self/g,"")+(sn(i,/flex-|baseline/)?"":_e+"grid-row-"+re(i,/flex-|-self/g,""))+i;case 4675:return be+i+_e+"flex-line-pack"+re(i,/align-content|flex-|-self/g,"")+i;case 5548:return be+i+_e+re(i,"shrink","negative")+i;case 5292:return be+i+_e+re(i,"basis","preferred-size")+i;case 6060:return be+"box-"+re(i,"-grow","")+be+i+_e+re(i,"grow","positive")+i;case 4554:return be+re(i,/([^-])(transform)/g,"$1"+be+"$2")+i;case 6187:return re(re(re(i,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),i,"")+i;case 5495:case 3959:return re(i,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(i,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+i+i;case 4200:if(!sn(i,/flex-|baseline/))return _e+"grid-column-align"+cl(i,u)+i;break;case 2592:case 3360:return _e+re(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(c,d){return u=d,sn(c.props,/grid-\w+-end/)})?~Ir(i+(o=o[u].value),"span",0)?i:_e+re(i,"-start","")+i+_e+"grid-row-span:"+(~Ir(o,"span",0)?sn(o,/\d+/):+sn(o,/\d+/)-+sn(i,/\d+/))+";":_e+re(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(c){return sn(c.props,/grid-\w+-start/)})?i:_e+re(re(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return re(i,/(.+)-inline(.+)/,be+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qt(i)-1-u>6)switch(Je(i,u+1)){case 109:if(Je(i,u+4)!==45)break;case 102:return re(i,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+vi+(Je(i,u+3)==108?"$3":"$2-$3"))+i;case 115:return~Ir(i,"stretch",0)?kg(re(i,"stretch","fill-available"),u,o)+i:i}break;case 5152:case 5920:return re(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,m,b,z,v,g){return _e+d+":"+m+g+(b?_e+d+"-span:"+(z?v:+v-+m)+g:"")+i});case 4949:if(Je(i,u+6)===121)return re(i,":",":"+be)+i;break;case 6444:switch(Je(i,Je(i,14)===45?18:11)){case 120:return re(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(i,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+_e+"$2box$3")+i;case 100:return re(i,":",":"+_e)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(i,"scroll-","scroll-snap-")+i}return i}function ru(i,u){for(var o="",c=0;c<i.length;c++)o+=u(i[c],c,i,u)||"";return o}function xy(i,u,o,c){switch(i.type){case uy:if(i.children.length)break;case ry:case _s:return i.return=i.return||i.value;case Og:return"";case Cg:return i.return=i.value+"{"+ru(i.children,c)+"}";case fu:if(!qt(i.value=i.props.join(",")))return""}return qt(o=ru(i.children,c))?i.return=i.value+"{"+o+"}":""}function Sy(i){var u=Ug(i);return function(o,c,d,m){for(var b="",z=0;z<u;z++)b+=i[z](o,c,d,m)||"";return b}}function jy(i){return function(u){u.root||(u=u.return)&&i(u)}}function zy(i,u,o,c){if(i.length>-1&&!i.return)switch(i.type){case _s:i.return=kg(i.value,i.length,o);return;case Cg:return ru([kn(i,{value:re(i.value,"@","@"+be)})],c);case fu:if(i.length)return oy(o=i.props,function(d){switch(sn(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ka(kn(i,{props:[re(d,/:(read-\w+)/,":"+vi+"$1")]})),Ka(kn(i,{props:[d]})),hs(i,{props:qm(o,c)});break;case"::placeholder":Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+vi+"$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,_e+"input-$1")]})),Ka(kn(i,{props:[d]})),hs(i,{props:qm(o,c)});break}return""})}}var Ey={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},sl=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Lg="active",Gg="data-styled-version",gu="6.1.19",Rs=`/*!sc*/
`,uu=typeof window<"u"&&typeof document<"u",Ty=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),pu=Object.freeze([]),fl=Object.freeze({});function Ay(i,u,o){return o===void 0&&(o=fl),i.theme!==o.theme&&i.theme||u||o.theme}var Yg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_y=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wy=/(^-|-$)/g;function Xm(i){return i.replace(_y,"-").replace(wy,"")}var Ry=/(a)(d)/gi,qr=52,Qm=function(i){return String.fromCharCode(i+(i>25?39:97))};function ps(i){var u,o="";for(u=Math.abs(i);u>qr;u=u/qr|0)o=Qm(u%qr)+o;return(Qm(u%qr)+o).replace(Ry,"$1-$2")}var Go,qg=5381,ul=function(i,u){for(var o=u.length;o;)i=33*i^u.charCodeAt(--o);return i},Vg=function(i){return ul(qg,i)};function My(i){return ps(Vg(i)>>>0)}function Dy(i){return i.displayName||i.name||"Component"}function Yo(i){return typeof i=="string"&&!0}var Zg=typeof Symbol=="function"&&Symbol.for,Xg=Zg?Symbol.for("react.memo"):60115,Oy=Zg?Symbol.for("react.forward_ref"):60112,Cy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},By={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ny=((Go={})[Oy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Go[Xg]=Qg,Go);function Km(i){return("type"in(u=i)&&u.type.$$typeof)===Xg?Qg:"$$typeof"in i?Ny[i.$$typeof]:Cy;var u}var Uy=Object.defineProperty,Hy=Object.getOwnPropertyNames,Jm=Object.getOwnPropertySymbols,ky=Object.getOwnPropertyDescriptor,Ly=Object.getPrototypeOf,$m=Object.prototype;function Kg(i,u,o){if(typeof u!="string"){if($m){var c=Ly(u);c&&c!==$m&&Kg(i,c,o)}var d=Hy(u);Jm&&(d=d.concat(Jm(u)));for(var m=Km(i),b=Km(u),z=0;z<d.length;++z){var v=d[z];if(!(v in By||o&&o[v]||b&&v in b||m&&v in m)){var g=ky(u,v);try{Uy(i,v,g)}catch{}}}}return i}function dl(i){return typeof i=="function"}function Ms(i){return typeof i=="object"&&"styledComponentId"in i}function ia(i,u){return i&&u?"".concat(i," ").concat(u):i||u||""}function Wm(i,u){if(i.length===0)return"";for(var o=i[0],c=1;c<i.length;c++)o+=i[c];return o}function ji(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function bs(i,u,o){if(o===void 0&&(o=!1),!o&&!ji(i)&&!Array.isArray(i))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)i[c]=bs(i[c],u[c]);else if(ji(u))for(var c in u)i[c]=bs(i[c],u[c]);return i}function Ds(i,u){Object.defineProperty(i,"toString",{value:u})}function Ai(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Gy=function(){function i(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return i.prototype.indexOfGroup=function(u){for(var o=0,c=0;c<u;c++)o+=this.groupSizes[c];return o},i.prototype.insertRules=function(u,o){if(u>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,m=d;u>=m;)if((m<<=1)<0)throw Ai(16,"".concat(u));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var b=d;b<m;b++)this.groupSizes[b]=0}for(var z=this.indexOfGroup(u+1),v=(b=0,o.length);b<v;b++)this.tag.insertRule(z,o[b])&&(this.groupSizes[u]++,z++)},i.prototype.clearGroup=function(u){if(u<this.length){var o=this.groupSizes[u],c=this.indexOfGroup(u),d=c+o;this.groupSizes[u]=0;for(var m=c;m<d;m++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(u){var o="";if(u>=this.length||this.groupSizes[u]===0)return o;for(var c=this.groupSizes[u],d=this.indexOfGroup(u),m=d+c,b=d;b<m;b++)o+="".concat(this.tag.getRule(b)).concat(Rs);return o},i}(),nu=new Map,cu=new Map,au=1,Vr=function(i){if(nu.has(i))return nu.get(i);for(;cu.has(au);)au++;var u=au++;return nu.set(i,u),cu.set(u,i),u},Yy=function(i,u){au=u+1,nu.set(i,u),cu.set(u,i)},qy="style[".concat(sl,"][").concat(Gg,'="').concat(gu,'"]'),Vy=new RegExp("^".concat(sl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zy=function(i,u,o){for(var c,d=o.split(","),m=0,b=d.length;m<b;m++)(c=d[m])&&i.registerName(u,c)},Xy=function(i,u){for(var o,c=((o=u.textContent)!==null&&o!==void 0?o:"").split(Rs),d=[],m=0,b=c.length;m<b;m++){var z=c[m].trim();if(z){var v=z.match(Vy);if(v){var g=0|parseInt(v[1],10),T=v[2];g!==0&&(Yy(T,g),Zy(i,T,v[3]),i.getTag().insertRules(g,d)),d.length=0}else d.push(z)}}},Fm=function(i){for(var u=document.querySelectorAll(qy),o=0,c=u.length;o<c;o++){var d=u[o];d&&d.getAttribute(sl)!==Lg&&(Xy(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function Qy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jg=function(i){var u=document.head,o=i||u,c=document.createElement("style"),d=function(z){var v=Array.from(z.querySelectorAll("style[".concat(sl,"]")));return v[v.length-1]}(o),m=d!==void 0?d.nextSibling:null;c.setAttribute(sl,Lg),c.setAttribute(Gg,gu);var b=Qy();return b&&c.setAttribute("nonce",b),o.insertBefore(c,m),c},Ky=function(){function i(u){this.element=Jg(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,d=0,m=c.length;d<m;d++){var b=c[d];if(b.ownerNode===o)return b}throw Ai(17)}(this.element),this.length=0}return i.prototype.insertRule=function(u,o){try{return this.sheet.insertRule(o,u),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},i.prototype.getRule=function(u){var o=this.sheet.cssRules[u];return o&&o.cssText?o.cssText:""},i}(),Jy=function(){function i(u){this.element=Jg(u),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(u,o){if(u<=this.length&&u>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},i.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},i}(),$y=function(){function i(u){this.rules=[],this.length=0}return i.prototype.insertRule=function(u,o){return u<=this.length&&(this.rules.splice(u,0,o),this.length++,!0)},i.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},i.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},i}(),Pm=uu,Wy={isServer:!uu,useCSSOMInjection:!Ty},$g=function(){function i(u,o,c){u===void 0&&(u=fl),o===void 0&&(o={});var d=this;this.options=st(st({},Wy),u),this.gs=o,this.names=new Map(c),this.server=!!u.isServer,!this.server&&uu&&Pm&&(Pm=!1,Fm(this)),Ds(this,function(){return function(m){for(var b=m.getTag(),z=b.length,v="",g=function(C){var U=function(H){return cu.get(H)}(C);if(U===void 0)return"continue";var k=m.names.get(U),L=b.getGroup(C);if(k===void 0||!k.size||L.length===0)return"continue";var Y="".concat(sl,".g").concat(C,'[id="').concat(U,'"]'),Z="";k!==void 0&&k.forEach(function(H){H.length>0&&(Z+="".concat(H,","))}),v+="".concat(L).concat(Y,'{content:"').concat(Z,'"}').concat(Rs)},T=0;T<z;T++)g(T);return v}(d)})}return i.registerId=function(u){return Vr(u)},i.prototype.rehydrate=function(){!this.server&&uu&&Fm(this)},i.prototype.reconstructWithOptions=function(u,o){return o===void 0&&(o=!0),new i(st(st({},this.options),u),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(u=function(o){var c=o.useCSSOMInjection,d=o.target;return o.isServer?new $y(d):c?new Ky(d):new Jy(d)}(this.options),new Gy(u)));var u},i.prototype.hasNameForId=function(u,o){return this.names.has(u)&&this.names.get(u).has(o)},i.prototype.registerName=function(u,o){if(Vr(u),this.names.has(u))this.names.get(u).add(o);else{var c=new Set;c.add(o),this.names.set(u,c)}},i.prototype.insertRules=function(u,o,c){this.registerName(u,o),this.getTag().insertRules(Vr(u),c)},i.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},i.prototype.clearRules=function(u){this.getTag().clearGroup(Vr(u)),this.clearNames(u)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Fy=/&/g,Py=/^\s*\/\/.*$/gm;function Wg(i,u){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(u," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(u," ")),o.props=o.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Wg(o.children,u)),o})}function Iy(i){var u,o,c,d=fl,m=d.options,b=m===void 0?fl:m,z=d.plugins,v=z===void 0?pu:z,g=function(U,k,L){return L.startsWith(o)&&L.endsWith(o)&&L.replaceAll(o,"").length>0?".".concat(u):U},T=v.slice();T.push(function(U){U.type===fu&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Fy,o).replace(c,g))}),b.prefix&&T.push(zy),T.push(xy);var C=function(U,k,L,Y){k===void 0&&(k=""),L===void 0&&(L=""),Y===void 0&&(Y="&"),u=Y,o=k,c=new RegExp("\\".concat(o,"\\b"),"g");var Z=U.replace(Py,""),H=yy(L||k?"".concat(L," ").concat(k," { ").concat(Z," }"):Z);b.namespace&&(H=Wg(H,b.namespace));var $=[];return ru(H,Sy(T.concat(jy(function(X){return $.push(X)})))),$};return C.hash=v.length?v.reduce(function(U,k){return k.name||Ai(15),ul(U,k.name)},qg).toString():"",C}var ev=new $g,ys=Iy(),Fg=xi.createContext({shouldForwardProp:void 0,styleSheet:ev,stylis:ys});Fg.Consumer;xi.createContext(void 0);function Im(){return R.useContext(Fg)}var tv=function(){function i(u,o){var c=this;this.inject=function(d,m){m===void 0&&(m=ys);var b=c.name+m.hash;d.hasNameForId(c.id,b)||d.insertRules(c.id,b,m(c.rules,b,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=o,Ds(this,function(){throw Ai(12,String(c.name))})}return i.prototype.getName=function(u){return u===void 0&&(u=ys),this.name+u.hash},i}(),nv=function(i){return i>="A"&&i<="Z"};function eg(i){for(var u="",o=0;o<i.length;o++){var c=i[o];if(o===1&&c==="-"&&i[0]==="-")return i;nv(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var Pg=function(i){return i==null||i===!1||i===""},Ig=function(i){var u,o,c=[];for(var d in i){var m=i[d];i.hasOwnProperty(d)&&!Pg(m)&&(Array.isArray(m)&&m.isCss||dl(m)?c.push("".concat(eg(d),":"),m,";"):ji(m)?c.push.apply(c,iu(iu(["".concat(d," {")],Ig(m),!1),["}"],!1)):c.push("".concat(eg(d),": ").concat((u=d,(o=m)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||u in Ey||u.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function ua(i,u,o,c){if(Pg(i))return[];if(Ms(i))return[".".concat(i.styledComponentId)];if(dl(i)){if(!dl(m=i)||m.prototype&&m.prototype.isReactComponent||!u)return[i];var d=i(u);return ua(d,u,o,c)}var m;return i instanceof tv?o?(i.inject(o,c),[i.getName(c)]):[i]:ji(i)?Ig(i):Array.isArray(i)?Array.prototype.concat.apply(pu,i.map(function(b){return ua(b,u,o,c)})):[i.toString()]}function av(i){for(var u=0;u<i.length;u+=1){var o=i[u];if(dl(o)&&!Ms(o))return!1}return!0}var lv=Vg(gu),iv=function(){function i(u,o,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&av(u),this.componentId=o,this.baseHash=ul(lv,o),this.baseStyle=c,$g.registerId(o)}return i.prototype.generateAndInjectStyles=function(u,o,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var m=Wm(ua(this.rules,u,o,c)),b=ps(ul(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,b)){var z=c(m,".".concat(b),void 0,this.componentId);o.insertRules(this.componentId,b,z)}d=ia(d,b),this.staticRulesId=b}else{for(var v=ul(this.baseHash,c.hash),g="",T=0;T<this.rules.length;T++){var C=this.rules[T];if(typeof C=="string")g+=C;else if(C){var U=Wm(ua(C,u,o,c));v=ul(v,U+T),g+=U}}if(g){var k=ps(v>>>0);o.hasNameForId(this.componentId,k)||o.insertRules(this.componentId,k,c(g,".".concat(k),void 0,this.componentId)),d=ia(d,k)}}return d},i}(),e0=xi.createContext(void 0);e0.Consumer;var qo={};function rv(i,u,o){var c=Ms(i),d=i,m=!Yo(i),b=u.attrs,z=b===void 0?pu:b,v=u.componentId,g=v===void 0?function(ae,Q){var le=typeof ae!="string"?"sc":Xm(ae);qo[le]=(qo[le]||0)+1;var W="".concat(le,"-").concat(My(gu+le+qo[le]));return Q?"".concat(Q,"-").concat(W):W}(u.displayName,u.parentComponentId):v,T=u.displayName,C=T===void 0?function(ae){return Yo(ae)?"styled.".concat(ae):"Styled(".concat(Dy(ae),")")}(i):T,U=u.displayName&&u.componentId?"".concat(Xm(u.displayName),"-").concat(u.componentId):u.componentId||g,k=c&&d.attrs?d.attrs.concat(z).filter(Boolean):z,L=u.shouldForwardProp;if(c&&d.shouldForwardProp){var Y=d.shouldForwardProp;if(u.shouldForwardProp){var Z=u.shouldForwardProp;L=function(ae,Q){return Y(ae,Q)&&Z(ae,Q)}}else L=Y}var H=new iv(o,U,c?d.componentStyle:void 0);function $(ae,Q){return function(le,W,Ae){var ze=le.attrs,nt=le.componentStyle,lt=le.defaultProps,Ye=le.foldedComponentIds,Xt=le.styledComponentId,Qt=le.target,qe=xi.useContext(e0),M=Im(),q=le.shouldForwardProp||M.shouldForwardProp,P=Ay(W,qe,lt)||fl,oe=function(se,ee,Ve){for(var pe,Pe=st(st({},ee),{className:void 0,theme:Ve}),Gn=0;Gn<se.length;Gn+=1){var Kt=dl(pe=se[Gn])?pe(Pe):pe;for(var St in Kt)Pe[St]=St==="className"?ia(Pe[St],Kt[St]):St==="style"?st(st({},Pe[St]),Kt[St]):Kt[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(ze,W,P),x=oe.as||Qt,N={};for(var G in oe)oe[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&oe.theme===P||(G==="forwardedAs"?N.as=oe.forwardedAs:q&&!q(G,x)||(N[G]=oe[G]));var V=function(se,ee){var Ve=Im(),pe=se.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(nt,oe),F=ia(Ye,Xt);return V&&(F+=" "+V),oe.className&&(F+=" "+oe.className),N[Yo(x)&&!Yg.has(x)?"class":"className"]=F,Ae&&(N.ref=Ae),R.createElement(x,N)}(X,ae,Q)}$.displayName=C;var X=xi.forwardRef($);return X.attrs=k,X.componentStyle=H,X.displayName=C,X.shouldForwardProp=L,X.foldedComponentIds=c?ia(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=U,X.target=c?d.target:i,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=c?function(Q){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Ae=0,ze=le;Ae<ze.length;Ae++)bs(Q,ze[Ae],!0);return Q}({},d.defaultProps,ae):ae}}),Ds(X,function(){return".".concat(X.styledComponentId)}),m&&Kg(X,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function tg(i,u){for(var o=[i[0]],c=0,d=u.length;c<d;c+=1)o.push(u[c],i[c+1]);return o}var ng=function(i){return Object.assign(i,{isCss:!0})};function uv(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];if(dl(i)||ji(i))return ng(ua(tg(pu,iu([i],u,!0))));var c=i;return u.length===0&&c.length===1&&typeof c[0]=="string"?ua(c):ng(ua(tg(c,u)))}function vs(i,u,o){if(o===void 0&&(o=fl),!u)throw Ai(1,u);var c=function(d){for(var m=[],b=1;b<arguments.length;b++)m[b-1]=arguments[b];return i(u,o,uv.apply(void 0,iu([d],m,!1)))};return c.attrs=function(d){return vs(i,u,st(st({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return vs(i,u,st(st({},o),d))},c}var t0=function(i){return vs(rv,i)},y=t0;Yg.forEach(function(i){y[i]=t0(i)});const cv=y.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,ov=y.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,sv=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,fv=y.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #e10073;
  margin: 0;
`,dv=y.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Vo=y(As)`
  text-decoration: none;
  color: ${i=>i.$active?"#e10073":"#333"};
  font-weight: ${i=>i.$active?"700":"600"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;
  border-bottom: ${i=>i.$active?"2px solid #e10073":"2px solid transparent"};

  &:hover {
    color: #e10073;
    background: rgba(225, 0, 115, 0.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;function hv(){const i=Ln();return s.jsx(cv,{children:s.jsxs(ov,{children:[s.jsx(sv,{children:s.jsx(fv,{children:"SCKW"})}),s.jsxs(dv,{children:[s.jsx(Vo,{to:"/",$active:i.pathname==="/",children:"🤝 Sponsoring"}),s.jsx(Vo,{to:"/jobs",$active:i.pathname==="/jobs",children:"💼 Jobbörse"}),s.jsx(Vo,{to:"/renovierung",$active:i.pathname==="/renovierung",children:"🏗️ Renovierung"})]})]})})}const mv=y.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,gv=y.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function Os(){return s.jsxs(mv,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",s.jsx(gv,{href:"mailto:grimm@sckw.de",children:"grimm@sckw.de"})]})}const n0=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"✅ Vergeben",maxSponsors:1,sponsors:[{name:"RicoBet",image:"ricobet.png",website:null,since:"2023",until:"2025"}],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","1/1 Seite im Stadionmagazin","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Stadionansage bei jedem Heimspiel","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🥈 Co-Sponsor",price:"10.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotärmel 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1/2 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/2 Seite im Stadionmagazin","2 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"⭐️ Premium-Partner",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Banner (5x2 m) am Gelände",highlight:!0,icon:"🖼️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Erweitert*",highlight:!0,icon:"📱"},{text:"Website: Startseite Erweitert*",highlight:!1,icon:"🌐"}],benefits:["1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin","Social Media ERWEITERT: Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche","Website STARTSEITE ERWEITERT: Logo auf der Startseite mit kleinerer Fläche"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟧 11 vergeben · ~19 verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"1 Bande (3x1 m)",highlight:!1,icon:"🏟️"},{text:"Alle Heimspiele",highlight:!0,icon:"⚽"},{text:"Website: Sponsoren-Seite*",highlight:!1,icon:"🌐"}],benefits:["1 Bande (3x1 m) am Spielfeldrand","Sichtbarkeit bei allen Heimspielen","Website SPONSOREN-SEITE: Auflistung auf separater Sponsoren-Seite","Einmalkosten: 70 €/lfd. Meter für Herstellung"]}],pv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,bv=y.div`
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
`,yv=y.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,vv=y.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,xv=y.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,Sv=y.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,jv=y.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,zv=y.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,Ev=y.li`
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
`,Tv=y.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,Av=y.span`
  flex: 1;
`,_v=y.a`
  display: inline-block;
  background: ${i=>i.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${i=>i.isVergeben?"none":"auto"};
  margin-top: auto;

  &:hover {
    background: ${i=>i.isVergeben?"#ccc":"#b8005a"};
    transform: ${i=>i.isVergeben?"none":"scale(1.05)"};
  }
`,wv=y.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Rv="grimm@sckw.de";function Mv({packages:i}){const u=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",o=b=>{const z=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return z?z[0]:""},c=b=>{const z=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${z}"`),g=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${z}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Rv}?subject=${v}&body=${g}`},d=b=>{const z=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:z,isFullyBooked:z===0}},m=i.filter(b=>!b.title.includes("Platz-Renovierung"));return s.jsx(pv,{children:m.map((b,z)=>{const{isFullyBooked:v}=d(b),g=u(b.status),T=g==="vergeben"||v,C=v?"vergeben":g,U=b.keyBenefits||[];return s.jsxs(bv,{isVergeben:T,children:[s.jsxs(yv,{children:[s.jsx(vv,{children:o(b.title)}),s.jsx(xv,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!T&&s.jsx(Sv,{children:b.price}),s.jsx(jv,{status:C,children:C==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),T?s.jsx(wv,{children:"✅ Alle Plätze vergeben"}):s.jsx(zv,{children:U.map((k,L)=>s.jsxs(Ev,{isHighlight:k.highlight,children:[s.jsx(Tv,{children:k.icon}),s.jsx(Av,{children:k.text})]},L))}),s.jsx(_v,{href:T?void 0:c(b.title),isVergeben:T,children:T?"Vergeben":"Jetzt anfragen"})]},z)})})}const Dv=y.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  overflow: hidden;
`,Ov=y.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Cv=y.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${i=>i.isOpen?"#fff":"#f8f9fa"};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
  }

  &:focus {
    outline: 2px solid #e10073;
    outline-offset: -2px;
  }
`,Bv=y.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: #e10073;
`,Nv=y.div`
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,Uv=y.div`
  padding: 1.5rem;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  color: #444;

  b {
    color: #e10073;
    font-weight: 600;
  }

  br {
    margin-bottom: 0.5rem;
  }
`,Hv=y.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,kv=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:s.jsxs(s.Fragment,{children:[s.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:s.jsxs(s.Fragment,{children:[s.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:s.jsx(s.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function Lv(){const[i,u]=R.useState([]),o=d=>{u(m=>m.includes(d)?m.filter(b=>b!==d):[...m,d])},c=(d,m)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o(m))};return s.jsx(Dv,{children:kv.map(d=>{const m=i.includes(d.id);return s.jsxs(Ov,{children:[s.jsxs(Cv,{isOpen:m,onClick:()=>o(d.id),onKeyDown:b=>c(b,d.id),"aria-expanded":m,"aria-controls":`accordion-content-${d.id}`,children:[s.jsxs("span",{children:[s.jsx(Hv,{children:d.icon}),d.title]}),s.jsx(Bv,{isOpen:m,children:"▼"})]}),s.jsx(Nv,{isOpen:m,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:s.jsx(Uv,{children:d.content})})]},d.id)})})}const Gv=y.section`
  background: #f8f9fb;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,Yv=y.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
`,qv=y.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`,ag=y.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`,Vv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,lg=y.div`
  background: ${i=>i.preferred?"linear-gradient(135deg, #e10073 0%, #ff1493 100%)":"linear-gradient(135deg, #6c757d 0%, #495057 100%)"};
  color: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px
    ${i=>i.preferred?"rgba(225, 0, 115, 0.25)":"rgba(108, 117, 125, 0.25)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px
      ${i=>i.preferred?"rgba(225, 0, 115, 0.35)":"rgba(108, 117, 125, 0.35)"};
  }
`,Zv=y.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background: #ffd700;
  color: #333;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
`,ig=y.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`,Xv=y.svg`
  height: 50px;
  width: auto;
`,rg=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,ug=y.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,cg=y.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }
`,Qv=y.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
`,Kv=y.h4`
  color: #0c5460;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,og=y.p`
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Jv=y.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,$v=y.h4`
  color: #856404;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,Wv=y.p`
  color: #856404;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`,Fv=y.div`
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
`,Pv=y.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,Iv=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,ex=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,tx=y.button`
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
`,nx=y.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Zo=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Xo=y.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Qo=y.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,ax=y.button`
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
`,lx=y.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;function ix(){const[i,u]=R.useState(!1),o=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")},c=d=>{d.preventDefault(),u(!0)};return s.jsxs(Gv,{id:"spenden",children:[s.jsx(Yv,{children:"💚 Spenden für den SC Konstanz-Wollmatingen"}),s.jsxs(qv,{children:[s.jsx(ag,{children:"Ohne Zuwendungen von Spendern, Gönnern, Förderern und Sponsoren ist der Spiel-, Turnier- und Trainingsbetrieb der Jugendabteilung und der Aktivenbereiche unseres Vereins nicht zu finanzieren. Die Mitgliedsbeiträge reichen für die umfassenden Aufgaben, die unser Verein für die Jugend im Breiten- und im Leistungssport, die Aus- und Weiterbildung der Trainer und Betreuer und die sportlich aktiv tätigen Mitglieder, Spieler und Teams erbringt, nicht aus."}),s.jsx(ag,{children:s.jsx("strong",{children:"Wir freuen uns über jede Zuwendung und Unterstützung!"})})]}),s.jsxs(Vv,{children:[s.jsxs(lg,{preferred:!0,children:[s.jsx(Zv,{children:"⭐ Bevorzugt"}),s.jsx(ig,{children:s.jsxs(Xv,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.33c-.498 0-.968.382-1.061.913l-.619 3.949-.013.083-.637 4.084c-.229.685-.727 1.061-1.319 1.061L7.076 21.337z",fill:"#263B80"}),s.jsx("path",{d:"M20.781 7.519c-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.95c-.498 0-.968.382-1.061.913l-.756 4.814-.035.199-.561 3.584c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c3.213 0 5.733-1.311 6.467-5.097.307-1.582.149-2.906-.697-3.732-.244-.238-.5-.44-.785-.602-.998-.011-1.998-.011-1.998-.011z",fill:"#139AD6"}),s.jsx("path",{d:"M19.175 7.129c-.166-.039-.34-.071-.519-.097a9.54 9.54 0 0 0-1.348-.082H11.77c-.498 0-.969.382-1.062.913L9.493 13.34c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c.564 0 1.096.045 1.583.135.166.039.34.087.498.143.498-3.146.166-5.286-1.508-6.849z",fill:"#232C65"})]})}),s.jsx(rg,{children:"PayPal Spende"}),s.jsx(ug,{children:"Schnell, sicher und unkompliziert - spenden Sie direkt über PayPal. Ihre Spende kommt sofort bei uns an."}),s.jsx(cg,{href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💚 Mit PayPal spenden"})]}),s.jsxs(lg,{children:[s.jsx(ig,{children:"🏦"}),s.jsx(rg,{children:"Banküberweisung"}),s.jsx(ug,{children:"Traditionelle Überweisung direkt auf unser Vereinskonto. Ideal für größere Spenden und Spendenquittungen."}),s.jsx(cg,{onClick:c,children:"🏦 Kontodaten anzeigen"})]})]}),s.jsxs(Qv,{children:[s.jsx(Kv,{children:"📄 Steuerliche Absetzbarkeit"}),s.jsxs(og,{children:[s.jsx("strong",{children:"Bis 200 EUR:"})," Sie können einfach die Überweisungsquittung als Spendenbescheinigung bei der Steuererklärung angeben."]}),s.jsxs(og,{children:[s.jsx("strong",{children:"Über 200 EUR:"})," Wir stellen Ihnen gerne eine offizielle Spendenquittung aus. Überweisen Sie dafür bitte auf unser Vereinskonto."]})]}),s.jsxs(Jv,{children:[s.jsx($v,{children:"📧 Spendenquittung anfordern"}),s.jsxs(Wv,{children:["Für Spenden über 200 EUR richten Sie bitte die Anforderung einer Spendenquittung per E-Mail an ",s.jsx("strong",{children:"grimm@sckw.de"})," oder schriftlich an die Postanschrift des Vereins. Bitte geben Sie Ihre Anschrift, Telefonnummer und den Verwendungszweck an."]})]}),i&&s.jsx(Fv,{onClick:()=>u(!1),children:s.jsxs(Pv,{onClick:d=>d.stopPropagation(),children:[s.jsxs(Iv,{children:[s.jsx(ex,{children:"Kontoverbindung für Spenden"}),s.jsx(tx,{onClick:()=>u(!1),children:"×"})]}),s.jsxs(nx,{children:[s.jsxs(Zo,{children:[s.jsx(Xo,{children:"Kontoinhaber:"}),s.jsx(Qo,{children:"SC Konstanz-Wollmatingen"})]}),s.jsxs(Zo,{children:[s.jsx(Xo,{children:"IBAN:"}),s.jsx(Qo,{children:"DE12 6905 0001 0000 0228 06"})]}),s.jsxs(Zo,{children:[s.jsx(Xo,{children:"BIC:"}),s.jsx(Qo,{children:"SOLADES1KNZ"})]})]}),s.jsx(ax,{onClick:o,children:"📋 IBAN kopieren"}),s.jsx(lx,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})})]})}const rx=y.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  margin: 2rem 0;
`,ux=y.div`
  max-width: 1200px;
  margin: 0 auto;
`,cx=y.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
`,ox=y.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,sx=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,fx=y.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`,dx=y.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e10073;
`,hx=y.span`
  font-size: 2.5rem;
  margin-right: 1rem;
`,mx=y.h4`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin: 0;
`,gx=y.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,px=y.li`
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.5;
  color: #444;
  display: flex;
  align-items: flex-start;

  &:last-child {
    border-bottom: none;
  }
`,bx=y.span`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`,yx=y.span`
  flex: 1;
`,vx=y.div`
  background: linear-gradient(135deg, #e10073 0%, #c70066 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  text-align: center;
  font-weight: 500;
`,xx=[{department:"Herren",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Trainer-Gehälter"},{icon:"⚽",text:"Equipment & Trainingsbälle"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Trainerkosten"},{department:"Damen",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Trainer-Gehälter"},{icon:"🥅",text:"Torwart-Ausrüstung"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Equipment"},{department:"Renovierung Fürstenbergsportplatz",icon:"🏗️",items:[{icon:"🏟️",text:"Platz-Sanierung & Drainage"},{icon:"🚿",text:"Umkleiden & Sanitäranlagen"},{icon:"💡",text:"Flutlichtanlage modernisieren"},{icon:"🪑",text:"Tribüne & Zuschauerbereich"},{icon:"🚧",text:"Sicherheitsmaßnahmen & Zäune"}],costInfo:"Großprojekt: Modernisierung der Sportanlage"},{department:"Cheerleading",icon:"💃",items:[{icon:"👗",text:"Tanz-Outfits & Kostüme"},{icon:"👨‍🏫",text:"Trainer-Gehälter"},{icon:"🏆",text:"Wettkämpfe & Turniere"},{icon:"🎵",text:"Musik & Choreografie"},{icon:"🚌",text:"Auswärtsfahrten"}],costInfo:"Fokus: Wettkämpfe & Ausrüstung"},{department:"Allgemein",icon:"🏟️",items:[{icon:"🏟️",text:"Platzpflege & Infrastruktur"},{icon:"💡",text:"Flutlicht & Stromkosten"},{icon:"🚿",text:"Sanitäranlagen & Umkleiden"},{icon:"🛠️",text:"Wartung & Reparaturen"},{icon:"📢",text:"Kommunikation & Marketing"}],costInfo:"Grundlage für alle Abteilungen"},{department:"Fördergruppe",icon:"🎯",items:[{icon:"👕",text:"Zuschuss zu Trikots (Training)"},{icon:"🥅",text:"Minitore & Equipment"},{icon:"🏟️",text:"Fangnetze & Infrastruktur"},{icon:"⚽",text:"Trainingsbälle & Zubehör"},{icon:"🛠️",text:"Wartung & Reparaturen"}],costInfo:"Unterstützung für alle Abteilungen"}];function Sx(){return s.jsx(rx,{children:s.jsxs(ux,{children:[s.jsx(cx,{children:"Wofür wird Ihr Sponsoring verwendet?"}),s.jsx(ox,{children:"Transparenz ist uns wichtig! Hier sehen Sie, wie Ihr Sponsoring-Geld direkt in die verschiedenen Abteilungen und deren Bedürfnisse fließt."}),s.jsx(sx,{children:xx.map((i,u)=>s.jsxs(fx,{children:[s.jsxs(dx,{children:[s.jsx(hx,{children:i.icon}),s.jsx(mx,{children:i.department})]}),s.jsx(gx,{children:i.items.map((o,c)=>s.jsxs(px,{children:[s.jsx(bx,{children:o.icon}),s.jsx(yx,{children:o.text})]},c))}),s.jsx(vx,{children:i.costInfo})]},u))})]})})}const jx="/sportclub/assets/cheerleading_0-BLANwEed.jpg",zx="/sportclub/assets/cheerleading_1-NkLBARmH.jpg",Ex="/sportclub/assets/cheerleading_2-CrezcZYL.jpg",Tx="/sportclub/assets/cheerleading_3-GN5rPHNN.jpg",Ax="/sportclub/assets/herren_0-BVVgyt1l.jpg",_x="/sportclub/assets/herren_1-B8ywOnNy.jpg",wx="/sportclub/assets/herren_10-DPVQsg9B.jpg",Rx="/sportclub/assets/herren_11-wfWG62H3.jpg",Mx="/sportclub/assets/herren_12-DEJSN2zG.jpg",Dx="/sportclub/assets/herren_13-F52vdukE.jpg",Ox="/sportclub/assets/herren_14-Cq9hoKfG.jpg",Cx="/sportclub/assets/herren_15-aYIFGauG.jpg",Bx="/sportclub/assets/herren_16-NYI2EaEN.jpg",Nx="/sportclub/assets/herren_17-B_52ysA2.jpg",a0="/sportclub/assets/herren_18-DbwjVNKJ.jpg",Ux="/sportclub/assets/herren_19-BduD_J85.png",Hx="/sportclub/assets/herren_2--jFuixBF.jpg",kx="/sportclub/assets/herren_3-BPz1zlkG.jpg",Lx="/sportclub/assets/herren_4-BZRrQaFr.jpg",Gx="/sportclub/assets/herren_5-D-QrfY2P.jpg",Yx="/sportclub/assets/herren_6-DWQvi6Am.jpg",qx="/sportclub/assets/herren_7-BXO6B8Bt.jpg",Vx="/sportclub/assets/herren_8-Cg4rdr7T.jpg",Zx="/sportclub/assets/herren_9-DoLnTdRG.jpg",Xx=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":jx,"../assets/gallery/cheerleading/cheerleading_1.jpg":zx,"../assets/gallery/cheerleading/cheerleading_2.jpg":Ex,"../assets/gallery/cheerleading/cheerleading_3.jpg":Tx,"../assets/gallery/herren/herren_0.jpg":Ax,"../assets/gallery/herren/herren_1.jpg":_x,"../assets/gallery/herren/herren_10.jpg":wx,"../assets/gallery/herren/herren_11.jpg":Rx,"../assets/gallery/herren/herren_12.jpg":Mx,"../assets/gallery/herren/herren_13.jpg":Dx,"../assets/gallery/herren/herren_14.jpg":Ox,"../assets/gallery/herren/herren_15.jpg":Cx,"../assets/gallery/herren/herren_16.jpg":Bx,"../assets/gallery/herren/herren_17.jpg":Nx,"../assets/gallery/herren/herren_18.jpg":a0,"../assets/gallery/herren/herren_19.png":Ux,"../assets/gallery/herren/herren_2.jpg":Hx,"../assets/gallery/herren/herren_3.jpg":kx,"../assets/gallery/herren/herren_4.jpg":Lx,"../assets/gallery/herren/herren_5.jpg":Gx,"../assets/gallery/herren/herren_6.jpg":Yx,"../assets/gallery/herren/herren_7.jpg":qx,"../assets/gallery/herren/herren_8.jpg":Vx,"../assets/gallery/herren/herren_9.jpg":Zx});function Qx(i){const u=[...i];for(let o=u.length-1;o>0;o--){const c=Math.floor(Math.random()*(o+1));[u[o],u[c]]=[u[c],u[o]]}return u}function Kx(i){const u={};return Object.entries(i).forEach(([o,c])=>{const d=o.match(/gallery\/(.*?)\//),m=d?d[1]:"Sonstige";u[m]||(u[m]=[]),u[m].push(c)}),Object.keys(u).forEach(o=>{u[o]=Qx(u[o])}),u}function Jx(){const i=R.useMemo(()=>Kx(Xx),[]),[u,o]=R.useState(null);return R.useMemo(()=>{if(!u)return;const c=d=>{d.key==="Escape"&&o(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[u]),s.jsxs("section",{children:[s.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([c,d])=>s.jsxs("div",{style:{marginBottom:"2.5rem"},children:[s.jsx($x,{children:c.toUpperCase()}),s.jsx(Wx,{children:d.map((m,b)=>s.jsx(Fx,{src:m,alt:`Bild ${b+1} aus ${c}`,onClick:()=>o({folder:c,idx:b}),style:{cursor:"pointer"}},b))}),u&&u.folder===c&&s.jsx(Px,{onClick:()=>o(null),children:s.jsxs(Ix,{onClick:m=>m.stopPropagation(),children:[s.jsx(eS,{src:d[u.idx],alt:`Großansicht aus ${c}`}),s.jsx(tS,{onClick:()=>o(null),title:"Schließen",children:"×"})]})})]},c))]})}const $x=y.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,Wx=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,Fx=y.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,Px=y.div`
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
`,Ix=y.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,eS=y.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,tS=y.button`
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
`,nS="/sportclub/assets/ricobet-DsVC-eZt.png",aS="/sportclub/assets/grafhardenberg-Di5cVggE.png",lS="/sportclub/assets/tasty-B2pSa1rE.png",iS="/sportclub/assets/horta-DydWIGV7.png",rS="/sportclub/assets/logans-BgpKwKYA.png",sg=i=>{switch(i){case"ricobet.png":return nS;case"grafhardenberg.png":return aS;case"tasty.png":return lS;case"horta.png":return iS;case"logans.png":return rS;default:return}};function uS(){const i=[];return n0.forEach(u=>{Array.isArray(u.sponsors)&&u.sponsors.forEach(o=>{i.push({name:o.name,image:o.image,website:o.website})})}),i.filter((u,o,c)=>c.findIndex(d=>d.name===u.name)===o)}const cS=uS();function oS(){return s.jsxs(sS,{children:[s.jsx(fS,{children:"Unsere Partner"}),s.jsx(dS,{children:cS.map((i,u)=>{const o=i.image&&sg(i.image)?s.jsx(mS,{src:sg(i.image),alt:i.name}):s.jsx(gS,{children:i.name});return i.website?s.jsx(Cs,{href:i.website,target:"_blank",rel:"noopener noreferrer",title:`Besuche ${i.name}`,children:o},u):s.jsx(hS,{children:o},u)})})]})}const sS=y.section`
  background: #fff6fa;
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`,fS=y.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2.2rem;
`,dS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2.2rem 2.5rem;
  align-items: center;
  justify-items: center;
`,Cs=y.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
`,hS=y.div`
  display: block;
`,mS=y.img`
  max-width: 120px;
  max-height: 60px;
  object-fit: contain;
  //filter: grayscale(1);
  opacity: 0.8;
  transition: filter 0.2s, opacity 0.2s;
  background: #fff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  box-shadow: 0 1px 6px rgba(225, 0, 115, 0.04);
  ${Cs}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`,gS=y.div`
  max-width: 120px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7fa;
  color: #e10073;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  box-shadow: 0 1px 6px rgba(225, 0, 115, 0.04);
  transition: background 0.2s, color 0.2s;
  ${Cs}:hover & {
    background: #e10073;
    color: #fff;
  }
`,pS=y.section`
  background: url("src/assets/gallery/herren/herren_4.jpg") center/cover;
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
`,bS=y.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
`,yS=y.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
  margin-top: 0.5rem;
`,fg=y.a`
  display: inline-block;
  background: ${i=>i.secondary?"rgba(255, 255, 255, 0.2)":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.7rem 2.1rem;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  z-index: 1;
  border: ${i=>i.secondary?"2px solid rgba(255, 255, 255, 0.4)":"none"};
  backdrop-filter: ${i=>i.secondary?"blur(10px)":"none"};

  &:hover {
    background: ${i=>i.secondary?"rgba(255, 255, 255, 0.3)":"#b8005a"};
    transform: translateY(-2px);
  }
`,vS=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,xS=y.main`
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
`,SS=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,jS=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 1.5rem 0;
  flex-wrap: wrap;
`,zS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,ES=y.h3`
  font-size: 1.7rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`,dg=y.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`,TS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0 2rem 0;
`,Ja=y.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.1rem 1.1rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,$a=y.div`
  font-size: 1.13rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`,Wa=y.div`
  font-size: 1.04rem;
  color: #222;
  line-height: 1.6;
`,AS=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,_S=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,wS=y.p`
  font-size: clamp(1.13rem, 1.5vw, 1.25rem);
  color: #222;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 700px;
`,RS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,MS=y.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,DS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Zr=y.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Xr=y.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,Qr=y.ul`
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
`,OS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,CS=y.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,BS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,NS=y.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,US=y.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,HS=y.ul`
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
`,pi=y.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,bi=y.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Ko=y.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Jo=y.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,$o=y.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,Wo=y.div`
  font-size: 0.98rem;
  color: #666;
`;function kS(){return s.jsxs(s.Fragment,{children:[s.jsx(pS,{children:s.jsxs(AS,{children:[s.jsx(bS,{children:"SC Konstanz-Wollmatingen"}),s.jsx(yS,{children:"Ihre Marke im Fokus – direkt am Spielfeldrand"}),s.jsxs(vS,{children:[s.jsx(fg,{href:"#sponsoring-pakete",children:"Jetzt Sponsor werden"}),s.jsx(fg,{href:"#spenden",secondary:!0,children:"Spenden"})]})]})}),s.jsxs(xS,{children:[s.jsx(SS,{id:"sponsoring-pakete",children:"Sponsoring-Pakete 2025/2026"}),s.jsx(_S,{children:s.jsx(wS,{children:"Gemeinsam für den Sport in Konstanz: Unterstützen Sie unsere Teams, fördern Sie Talente und werden Sie Teil einer starken Gemeinschaft. Ihr Engagement als Sponsor macht den Unterschied – auf und neben dem Spielfeld!"})}),s.jsx(Mv,{packages:n0}),s.jsx(Lv,{}),s.jsx(ix,{}),s.jsx(Sx,{}),s.jsx(oS,{}),s.jsxs(RS,{children:[s.jsx(MS,{children:"Unsere Reichweite & Kanäle"}),s.jsxs(DS,{children:[s.jsxs(Zr,{children:[s.jsx(Xr,{children:"📱 Social Media"}),s.jsxs(Qr,{children:[s.jsx("li",{children:"Instagram: 2.500+ Follower"}),s.jsx("li",{children:"Reel-Reichweite bis 200k"}),s.jsx("li",{children:"Facebook: 1.800+ Follower"})]})]}),s.jsxs(Zr,{children:[s.jsx(Xr,{children:"🌐 Website & Online"}),s.jsxs(Qr,{children:[s.jsx("li",{children:"Monatliche Besucher: 5.000+"}),s.jsx("li",{children:"Newsletter-Abonnenten: 450+"}),s.jsx("li",{children:"Durchschnittliche Seitenaufrufe: 15.000+"}),s.jsx("li",{children:"Google-Sichtbarkeit: 95% lokale Suche"})]})]}),s.jsxs(Zr,{children:[s.jsx(Xr,{children:"🏟️ Offline & Events"}),s.jsxs(Qr,{children:[s.jsx("li",{children:"Heimspiele pro Saison: 15+"}),s.jsx("li",{children:"Durchschnittliche Zuschauer: 200+"}),s.jsx("li",{children:"Events & Turniere: 8+ pro Jahr"}),s.jsx("li",{children:"Stadionheft-Auflage: 300+ pro Spiel"})]})]}),s.jsxs(Zr,{children:[s.jsx(Xr,{children:"📢 Zusätzliche Kanäle"}),s.jsxs(Qr,{children:[s.jsx("li",{children:"Pressearbeit & Medienkontakte"}),s.jsx("li",{children:"Kooperationen mit lokalen Partnern"}),s.jsx("li",{children:"Vereinsfeste & Community-Events"}),s.jsx("li",{children:"Jugendförderung & Nachwuchsarbeit"})]})]})]})]}),s.jsxs(OS,{children:[s.jsx(CS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),s.jsxs(BS,{children:[s.jsxs(NS,{children:[s.jsxs(Ko,{children:[s.jsx(Jo,{children:"1 Seite (Farbe)"}),s.jsx($o,{children:"1.000 €"}),s.jsx(Wo,{children:"DIN A4 (297 × 210 mm)"})]}),s.jsxs(Ko,{children:[s.jsx(Jo,{children:"1/2 Seite (Farbe)"}),s.jsx($o,{children:"500 €"}),s.jsx(Wo,{children:"DIN A5 (148 × 210 mm)"})]}),s.jsxs(Ko,{children:[s.jsx(Jo,{children:"1/4 Seite (Farbe)"}),s.jsx($o,{children:"250 €"}),s.jsx(Wo,{children:"DIN A6 (105 × 148 mm)"})]})]}),s.jsx(US,{children:s.jsxs(HS,{children:[s.jsxs(pi,{children:[s.jsx(bi,{}),"15 Ausgaben pro Saison"]}),s.jsxs(pi,{children:[s.jsx(bi,{}),"ca. 100 Exemplare pro Heimspiel"]}),s.jsxs(pi,{children:[s.jsx(bi,{}),"Digitale Version (Social Media & Website)"]}),s.jsxs(pi,{children:[s.jsx(bi,{}),"1.000 – 1.500 Online Zugriffe je Ausgabe"]}),s.jsxs(pi,{children:[s.jsx(bi,{}),"DIN A4 Stadionmagazin"]})]})})]})]}),s.jsx(jS,{}),s.jsxs(zS,{children:[s.jsx(ES,{children:"Unsere Ziele und Ihr Beitrag als Sponsor"}),s.jsx(dg,{children:"Der SC Konstanz-Wollmatingen blickt mit großer Motivation auf die Saison 2025/26. Unsere Abteilungen verfolgen ambitionierte, aber realistische Ziele, die wir mit Ihrer Unterstützung erreichen möchten:"}),s.jsxs(TS,{children:[s.jsxs(Ja,{children:[s.jsx($a,{children:"1. Mannschaft (Herren)"}),s.jsx(Wa,{children:"Unser klares Ziel ist der Aufstieg in die nächsthöhere Liga. Dafür investieren wir in eine gezielte sportliche Weiterentwicklung und benötigen insbesondere Unterstützung für die Finanzierung von Trainings- und Spielbetrieb."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"2. Mannschaft (Herren)"}),s.jsx(Wa,{children:"Die zweite Mannschaft strebt einen Platz unter den Top 3 an. Auch hier sind gezielte Fördermaßnahmen und eine stabile finanzielle Basis entscheidend, um das sportliche Potenzial voll auszuschöpfen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Damenmannschaft"}),s.jsx(Wa,{children:"Unsere Damen möchten sich in der Landesliga unter den besten drei Teams etablieren und ihren Bezirkspokal verteidigen. Die längeren Auswärtsfahrten in dieser Liga bringen erhöhte Reisekosten mit sich, für die wir gezielt Unterstützung suchen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Cheerleading"}),s.jsx(Wa,{children:"Das Cheerleading-Team plant die Teilnahme an mehreren Turnieren und benötigt dringend einen neuen Trikotsatz (Cheerleading-Uniformen). Auch hier sind Reisekosten ein wichtiger Faktor, um die Teilnahme an Wettbewerben zu ermöglichen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Fördergruppe / Jugend"}),s.jsx(Wa,{children:"Mit der Fördergruppe legen wir den Grundstein für den neuen Jugendfußball-Förderverein (JFV) Konstanz. Unser Ziel ist es, gezielt Talente zu fördern und ihnen durch qualifizierte Trainer optimale Entwicklungsmöglichkeiten zu bieten. Für die Finanzierung von Trainerfortbildungen und zusätzlichem Trainingsmaterial sind wir auf Unterstützung angewiesen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Vereinsziel: Langfristige Partnerschaften"}),s.jsx(Wa,{children:"Unser übergeordnetes Ziel ist es, langfristige Partner zu gewinnen, die uns sportlich wie wirtschaftlich begleiten und gemeinsam mit uns die Weiterentwicklung des Vereins in den kommenden Jahren aktiv mitgestalten möchten."})]})]}),s.jsxs(dg,{children:[s.jsx("b",{children:"Warum Ihre Unterstützung wichtig ist:"}),s.jsx("br",{}),"Die genannten Ziele sind nur mit einer soliden finanziellen Basis erreichbar. Ihre Förderung trägt dazu bei, Reisekosten zu decken, moderne Ausrüstung bereitzustellen und die sportliche Entwicklung aller Teams nachhaltig zu sichern. Sie investieren damit direkt in die Zukunft des Sports in Konstanz und in die Entwicklung junger Talente.",s.jsx("br",{}),s.jsx("br",{}),"Wir freuen uns, gemeinsam mit Ihnen diese Ziele zu verwirklichen!"]})]}),s.jsx(Jx,{})]}),s.jsx(Os,{})]})}const LS=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],GS=y.section`
  background: url("src/assets/gallery/herren/herren_1.jpg") center/cover;
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
`,YS=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,qS=y.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,VS=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,ZS=y.main`
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
`,XS=y.section`
  margin-bottom: 4rem;
`,QS=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,KS=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,JS=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,$S=y.div`
  text-align: center;
  margin-bottom: 3rem;
`,WS=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,FS=y.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,PS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,IS=y.div`
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
`,e2=y.div`
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
`,t2=y.div`
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
`,n2=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,a2=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,l2=y.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,i2=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,r2=y.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,u2=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,c2=y.button`
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
`,o2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,s2=y.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,f2=y.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,d2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Fa=y.div`
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
`,hg=y.div`
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
`,Pa=y.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Ia=y.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,el=y.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,tl=y.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Re=y.li`
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
`,nl=y.button`
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
`,h2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,m2=y.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,g2=y.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,p2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Fo=y.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Po=y.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Io=y.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,es=y.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,b2=y.a`
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
`,y2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,v2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,x2=y.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,al=y.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ll=y.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,il=y.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function S2(){return s.jsxs(s.Fragment,{children:[s.jsx(GS,{children:s.jsxs(YS,{children:[s.jsx(qS,{children:"SCKW Jobbörse"}),s.jsx(VS,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),s.jsxs(ZS,{children:[s.jsxs(XS,{children:[s.jsx(QS,{children:"Willkommen bei der SCKW Jobbörse"}),s.jsx(KS,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),s.jsxs(JS,{children:[s.jsxs($S,{children:[s.jsx(WS,{children:"So könnte es aussehen"}),s.jsx(FS,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),s.jsx(PS,{children:LS.map(i=>s.jsxs(IS,{children:[i.isExample&&s.jsx(e2,{children:"MUSTER"}),s.jsx(t2,{children:s.jsx(n2,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:u=>{u.currentTarget.style.display="none",u.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",u.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),s.jsx(a2,{children:i.title}),s.jsx(l2,{children:i.company}),s.jsx(i2,{children:i.tags.map((u,o)=>s.jsx(r2,{children:u},o))}),s.jsx(u2,{children:i.description}),s.jsx(c2,{children:"Mehr erfahren"})]},i.id))})]}),s.jsxs(o2,{children:[s.jsx(s2,{children:"Preise für Stellenausschreibungen"}),s.jsx(f2,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),s.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),s.jsxs(d2,{children:[s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Basis"}),s.jsx(Ia,{children:"149 €"}),s.jsx(el,{children:"netto / Anzeige"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),s.jsx(Re,{children:"Firmenlogo und Link"}),s.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),s.jsx(Re,{children:"Bewerbermanagement"})]}),s.jsx(nl,{className:"secondary",children:"Basis wählen"})]}),s.jsxs(Fa,{className:"popular",children:[s.jsx(hg,{children:"BELIEBT"}),s.jsx(Pa,{children:"Standard"}),s.jsx(Ia,{children:"229 €"}),s.jsx(el,{children:"netto / Anzeige"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Alle Basis-Features"}),s.jsx(Re,{children:"1 Social Media Post"}),s.jsx(Re,{children:"Instagram + Facebook Reichweite"}),s.jsx(Re,{children:"Newsletter-Erwähnung"})]}),s.jsx(nl,{children:"Standard wählen"})]}),s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Boosted"}),s.jsx(Ia,{children:"349 €"}),s.jsx(el,{children:"netto / Anzeige"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Alle Standard-Features"}),s.jsx(Re,{children:"Instagram Story"}),s.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),s.jsx(Re,{children:"Prioritäre Platzierung"})]}),s.jsx(nl,{className:"secondary",children:"Boosted wählen"})]})]}),s.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),s.jsxs(h2,{children:[s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Job Flat SMALL"}),s.jsx(Ia,{children:"799 €"}),s.jsx(el,{children:"netto / Jahr"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),s.jsx(Re,{children:"6 Social Media Posts"}),s.jsx(Re,{children:"Website-Präsenz"}),s.jsx(Re,{children:"Newsletter-Integration"})]}),s.jsx(nl,{className:"secondary",children:"Small Flat"})]}),s.jsxs(Fa,{className:"popular",children:[s.jsx(hg,{children:"EMPFOHLEN"}),s.jsx(Pa,{children:"Job Flat MEDIUM"}),s.jsx(Ia,{children:"1.199 €"}),s.jsx(el,{children:"netto / Jahr"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),s.jsx(Re,{children:"Stadionmagazin-Präsenz"}),s.jsx(Re,{children:"Social Media Posts"}),s.jsx(Re,{children:"Stories & Highlights"})]}),s.jsx(nl,{children:"Medium Flat"})]}),s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Job Flat PARTNER"}),s.jsx(Ia,{children:"1.499 €"}),s.jsx(el,{children:"netto / Jahr"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Unbegrenzte Anzeigen"}),s.jsx(Re,{children:"Erwähnung bei Heimspielen"}),s.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),s.jsx(Re,{children:"Prioritärer Support"})]}),s.jsx(nl,{className:"secondary",children:"Partner Flat"})]})]}),s.jsxs(m2,{children:[s.jsx(g2,{children:"➕ Zusatzoptionen"}),s.jsxs(p2,{children:[s.jsxs(Fo,{children:[s.jsx(Po,{children:"Social Story"}),s.jsx(Io,{children:"39 €"}),s.jsx(es,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),s.jsxs(Fo,{children:[s.jsx(Po,{children:"Designservice"}),s.jsx(Io,{children:"59 €"}),s.jsx(es,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),s.jsxs(Fo,{children:[s.jsx(Po,{children:"Stadionmagazin"}),s.jsx(Io,{children:"99 €"}),s.jsx(es,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:s.jsx(b2,{href:"mailto:grimm@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),s.jsxs(y2,{children:[s.jsx(v2,{children:"🎯 Warum SCKW Jobbörse?"}),s.jsxs(x2,{children:[s.jsxs(al,{children:[s.jsx(ll,{children:"🏠"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"👥"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"💰"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"📈"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"⚡"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"🤲"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),s.jsx(Os,{})]})}const j2="/sportclub/assets/cabin-window-B83r_CDB.jpg",z2="/sportclub/assets/outside-9-xz17qL.jpg",E2="/sportclub/assets/shower-B75caJ-F.jpg",T2="/sportclub/assets/sitting-area-D7khB3Gw.jpg",A2="/sportclub/assets/toilet-BpMHYbhh.jpg",_2=Object.assign({"../assets/gallery/herren/herren_18.jpg":a0}),w2=Object.values(_2)[0],R2=y.section`
  background: url("${w2}") center/cover;
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
`,M2=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,D2=y.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,O2=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,C2=y.main`
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
`,B2=y.section`
  margin-bottom: 4rem;
`,N2=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,U2=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,H2=y.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,k2=y.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,L2=y.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,G2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Y2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,q2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ts=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,ns=y.div`
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
`,V2=y.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,Z2=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${i=>i.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,X2=y.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,Q2=y.div`
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
`,K2=y.div`
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
`,J2=y.div`
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
`,$2=y.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,W2=y.button`
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
`,mg=y.button`
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
`,as=y.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,ls=y.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,F2=y.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,P2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,I2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,is=y.div`
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
`,rs=y.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,us=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,cs=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,os=y.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,e3=y.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,t3=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,n3=y.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,a3=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Kr=y.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Jr=y.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,$r=y.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,l3=y.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,i3=y.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,r3=y.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,u3=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,gg=y.a`
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
`,c3=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
`,o3=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 1rem;
  text-align: center;
`,s3=y.div`
  width: 100%;
  height: 20px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`,f3=y.div`
  width: ${i=>i.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #059669, #10b981);
  transition: width 0.3s ease;
`,d3=y.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #64748b;
`,h3=Object.assign({"../assets/renovation/cabin-window.jpg":j2,"../assets/renovation/outside.jpg":z2,"../assets/renovation/shower.jpg":E2,"../assets/renovation/sitting-area.jpg":T2,"../assets/renovation/toilet.jpg":A2}),m3=()=>{const i={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(h3).forEach(([u,o])=>{const c=u.split("/").pop()?.toLowerCase()||"";c.includes("sitting")?i.kabinen.push({src:o,alt:"Sitzbereich in den Kabinen"}):c.includes("outside")||c.includes("cabin-window")?c.includes("outside")?i.fassade.push({src:o,alt:"Außenfassade des Fürstenberg"}):c.includes("cabin-window")&&i.fassade.push({src:o,alt:"Fenster in den Kabinen"}):(c.includes("toilet")||c.includes("shower")||c.includes("wash"))&&(c.includes("toilet")?i.waschkueche.push({src:o,alt:"Toilette"}):c.includes("shower")?i.waschkueche.push({src:o,alt:"Dusche"}):i.waschkueche.push({src:o,alt:"Waschküche"}))}),i},rl=m3();function ss({images:i,onImageClick:u}){const[o,c]=R.useState(0);return R.useEffect(()=>{if(i.length<=1)return;const d=setInterval(()=>{c(m=>(m+1)%i.length)},4e3);return()=>clearInterval(d)},[i.length]),i.length===0?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):s.jsxs(V2,{children:[i.map((d,m)=>s.jsx(Z2,{src:d.src,alt:d.alt,$isActive:m===o,onClick:()=>u(m)},m)),i.length>1&&s.jsx(X2,{children:i.map((d,m)=>s.jsx(Q2,{$isActive:m===o,onClick:()=>c(m)},m))})]})}function g3({images:i,initialIndex:u,onClose:o}){const[c,d]=R.useState(u),m=()=>{d(z=>(z+1)%i.length)},b=()=>{d(z=>(z-1+i.length)%i.length)};return R.useEffect(()=>{const z=v=>{v.key==="Escape"&&o(),v.key==="ArrowRight"&&m(),v.key==="ArrowLeft"&&b()};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[]),s.jsx(K2,{onClick:o,children:s.jsxs(J2,{onClick:z=>z.stopPropagation(),children:[s.jsx(W2,{onClick:o,children:"×"}),s.jsx($2,{src:i[c].src,alt:i[c].alt}),i.length>1&&s.jsxs(s.Fragment,{children:[s.jsx(mg,{$direction:"prev",onClick:b,children:"‹"}),s.jsx(mg,{$direction:"next",onClick:m,children:"›"})]})]})})}function p3(){const o=11.428571428571429,[c,d]=R.useState(!1),[m,b]=R.useState([]),[z,v]=R.useState(0),g=(T,C)=>{b(T),v(C),d(!0)};return s.jsxs(s.Fragment,{children:[s.jsx(R2,{children:s.jsxs(M2,{children:[s.jsx(D2,{children:"🏟️ Fürstenberg weiterentwickeln"}),s.jsx(O2,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),s.jsxs(C2,{children:[s.jsxs(B2,{children:[s.jsx(N2,{children:"Der Fürstenberg - unser Kultplatz"}),s.jsx(U2,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),s.jsxs(H2,{children:[s.jsx(k2,{children:"✨ Charme erhalten, Komfort verbessern"}),s.jsx(L2,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),s.jsxs(G2,{children:[s.jsx(Y2,{children:"🔍 Wo wir ansetzen möchten"}),s.jsxs(q2,{children:[s.jsxs(ts,{children:[s.jsx(ns,{children:s.jsx(ss,{images:rl.kabinen,onImageClick:T=>g(rl.kabinen,T)})}),s.jsx(as,{children:"🔧 Kabinen komfortabler gestalten"}),s.jsx(ls,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),s.jsxs(ts,{children:[s.jsx(ns,{children:s.jsx(ss,{images:rl.fassade,onImageClick:T=>g(rl.fassade,T)})}),s.jsx(as,{children:"🎨 Fassade & Fenster erneuern"}),s.jsx(ls,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),s.jsxs(ts,{children:[s.jsx(ns,{children:s.jsx(ss,{images:rl.waschkueche,onImageClick:T=>g(rl.waschkueche,T)})}),s.jsx(as,{children:"🧺 Waschküche auf Vordermann bringen"}),s.jsx(ls,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),s.jsxs(F2,{children:[s.jsx(P2,{children:"✨ Unsere Pläne für den Fürstenberg"}),s.jsxs(I2,{children:[s.jsxs(is,{children:[s.jsx(rs,{children:"🪑"}),s.jsx(us,{children:"Kabinen sanieren"}),s.jsx(cs,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),s.jsx(os,{children:"~8.000 €"})]}),s.jsxs(is,{children:[s.jsx(rs,{children:"🎨"}),s.jsx(us,{children:"Fassade & Fenster erneuern"}),s.jsx(cs,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),s.jsx(os,{children:"~15.000 €"})]}),s.jsxs(is,{children:[s.jsx(rs,{children:"🧺"}),s.jsx(us,{children:"Waschküche modernisieren"}),s.jsx(cs,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),s.jsx(os,{children:"~5.000 €"})]})]})]}),s.jsxs(e3,{children:[s.jsx(t3,{children:"🤝 Werden Sie Renovierungs-Partner!"}),s.jsx(n3,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),s.jsxs(a3,{children:[s.jsxs(Kr,{children:[s.jsx(Jr,{children:"🏆"}),s.jsxs($r,{children:[s.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),s.jsxs(Kr,{children:[s.jsx(Jr,{children:"📄"}),s.jsxs($r,{children:[s.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),s.jsxs(Kr,{children:[s.jsx(Jr,{children:"📱"}),s.jsxs($r,{children:[s.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),s.jsxs(Kr,{children:[s.jsx(Jr,{children:"🎯"}),s.jsxs($r,{children:[s.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),s.jsxs(l3,{children:[s.jsx(i3,{children:"🤝 Gemeinsam für den Fürstenberg"}),s.jsx(r3,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),s.jsxs(c3,{children:[s.jsx(o3,{children:"Unser Fortschritt"}),s.jsx(s3,{children:s.jsx(f3,{$progress:o})}),s.jsxs(d3,{children:[s.jsxs("span",{children:[3200 .toLocaleString("de-DE")," € gesammelt"]}),s.jsxs("span",{children:["Ziel: ",28e3.toLocaleString("de-DE")," €"]})]})]}),s.jsxs(u3,{children:[s.jsx(gg,{className:"primary",href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),s.jsx(gg,{href:"mailto:grimm@sckw.de?subject=Sportplatz Renovierung - Bankverbindung&body=Hallo liebes SCKW-Team,%0A%0Aich möchte für die Sportplatz-Renovierung spenden und benötige die Bankverbindung.%0A%0AMein Name: %0AFirma: %0ASpendenhöhe: %0A%0ABitte senden Sie mir die Kontodaten zu.%0A%0AHerzliche Grüße",children:"🏦 Per Überweisung spenden"})]})]})]}),s.jsx(Os,{}),c&&s.jsx(g3,{images:m,initialIndex:z,onClose:()=>d(!1)})]})}function b3(){return s.jsxs(Wb,{basename:"/sportclub/",children:[s.jsx(hv,{}),s.jsxs(_b,{children:[s.jsx(Wr,{path:"/",element:s.jsx(kS,{})}),s.jsx(Wr,{path:"/jobs",element:s.jsx(S2,{})}),s.jsx(Wr,{path:"/renovierung",element:s.jsx(p3,{})})]})]})}console.log("sckw sponsoring Website loaded");U1.createRoot(document.getElementById("root")).render(s.jsx(R.StrictMode,{children:s.jsx(b3,{})}));
