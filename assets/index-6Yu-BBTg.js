(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function o(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=o(d);fetch(d.href,m)}})();function j1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Mo={exports:{}},di={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function z1(){if(Tm)return di;Tm=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,d,m){var b=null;if(m!==void 0&&(b=""+m),d.key!==void 0&&(b=""+d.key),"key"in d){m={};for(var T in d)T!=="key"&&(m[T]=d[T])}else m=d;return d=m.ref,{$$typeof:i,type:c,key:b,ref:d!==void 0?d:null,props:m}}return di.Fragment=u,di.jsx=o,di.jsxs=o,di}var Am;function E1(){return Am||(Am=1,Mo.exports=z1()),Mo.exports}var s=E1(),Do={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function T1(){if(_m)return ie;_m=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.iterator;function U(x){return x===null||typeof x!="object"?null:(x=C&&x[C]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,q={};function Z(x,N,G){this.props=x,this.context=N,this.refs=q,this.updater=G||k}Z.prototype.isReactComponent={},Z.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},Z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=Z.prototype;function $(x,N,G){this.props=x,this.context=N,this.refs=q,this.updater=G||k}var X=$.prototype=new H;X.constructor=$,L(X,Z.prototype),X.isPureReactComponent=!0;var ae=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(x,N,G,V,F,se){return G=se.ref,{$$typeof:i,type:x,key:N,ref:G!==void 0?G:null,props:se}}function Ae(x,N){return W(x.type,N,void 0,void 0,void 0,x.props)}function ze(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function nt(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(G){return N[G]})}var lt=/\/+/g;function qe(x,N){return typeof x=="object"&&x!==null&&x.key!=null?nt(""+x.key):N.toString(36)}function Xt(){}function Qt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Xt,Xt):(x.status="pending",x.then(function(N){x.status==="pending"&&(x.status="fulfilled",x.value=N)},function(N){x.status==="pending"&&(x.status="rejected",x.reason=N)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Ye(x,N,G,V,F){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var ee=!1;if(x===null)ee=!0;else switch(se){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(x.$$typeof){case i:case u:ee=!0;break;case A:return ee=x._init,Ye(ee(x._payload),N,G,V,F)}}if(ee)return F=F(x),ee=V===""?"."+qe(x,0):V,ae(F)?(G="",ee!=null&&(G=ee.replace(lt,"$&/")+"/"),Ye(F,N,G,"",function(Pe){return Pe})):F!=null&&(ze(F)&&(F=Ae(F,G+(F.key==null||x&&x.key===F.key?"":(""+F.key).replace(lt,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(x))for(var pe=0;pe<x.length;pe++)V=x[pe],se=Ve+qe(V,pe),ee+=Ye(V,N,G,se,F);else if(pe=U(x),typeof pe=="function")for(x=pe.call(x),pe=0;!(V=x.next()).done;)V=V.value,se=Ve+qe(V,pe++),ee+=Ye(V,N,G,se,F);else if(se==="object"){if(typeof x.then=="function")return Ye(Qt(x),N,G,V,F);throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function R(x,N,G){if(x==null)return x;var V=[],F=0;return Ye(x,V,"","",function(se){return N.call(G,se,F++)}),V}function Y(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(G){(x._status===0||x._status===-1)&&(x._status=1,x._result=G)},function(G){(x._status===0||x._status===-1)&&(x._status=2,x._result=G)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function oe(){}return ie.Children={map:R,forEach:function(x,N,G){R(x,function(){N.apply(this,arguments)},G)},count:function(x){var N=0;return R(x,function(){N++}),N},toArray:function(x){return R(x,function(N){return N})||[]},only:function(x){if(!ze(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ie.Component=Z,ie.Fragment=o,ie.Profiler=d,ie.PureComponent=$,ie.StrictMode=c,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return Q.H.useMemoCache(x)}},ie.cache=function(x){return function(){return x.apply(null,arguments)}},ie.cloneElement=function(x,N,G){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=L({},x.props),F=x.key,se=void 0;if(N!=null)for(ee in N.ref!==void 0&&(se=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=G;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(x.type,F,void 0,void 0,se,V)},ie.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},ie.createElement=function(x,N,G){var V,F={},se=null;if(N!=null)for(V in N.key!==void 0&&(se=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=G;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(x&&x.defaultProps)for(V in ee=x.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(x,se,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(x){return{$$typeof:T,render:x}},ie.isValidElement=ze,ie.lazy=function(x){return{$$typeof:A,_payload:{_status:-1,_result:x},_init:Y}},ie.memo=function(x,N){return{$$typeof:g,type:x,compare:N===void 0?null:N}},ie.startTransition=function(x){var N=Q.T,G={};Q.T=G;try{var V=x(),F=Q.S;F!==null&&F(G,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(oe,P)}catch(se){P(se)}finally{Q.T=N}},ie.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},ie.use=function(x){return Q.H.use(x)},ie.useActionState=function(x,N,G){return Q.H.useActionState(x,N,G)},ie.useCallback=function(x,N){return Q.H.useCallback(x,N)},ie.useContext=function(x){return Q.H.useContext(x)},ie.useDebugValue=function(){},ie.useDeferredValue=function(x,N){return Q.H.useDeferredValue(x,N)},ie.useEffect=function(x,N,G){var V=Q.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(x,N)},ie.useId=function(){return Q.H.useId()},ie.useImperativeHandle=function(x,N,G){return Q.H.useImperativeHandle(x,N,G)},ie.useInsertionEffect=function(x,N){return Q.H.useInsertionEffect(x,N)},ie.useLayoutEffect=function(x,N){return Q.H.useLayoutEffect(x,N)},ie.useMemo=function(x,N){return Q.H.useMemo(x,N)},ie.useOptimistic=function(x,N){return Q.H.useOptimistic(x,N)},ie.useReducer=function(x,N,G){return Q.H.useReducer(x,N,G)},ie.useRef=function(x){return Q.H.useRef(x)},ie.useState=function(x){return Q.H.useState(x)},ie.useSyncExternalStore=function(x,N,G){return Q.H.useSyncExternalStore(x,N,G)},ie.useTransition=function(){return Q.H.useTransition()},ie.version="19.1.0",ie}var wm;function ys(){return wm||(wm=1,Do.exports=T1()),Do.exports}var D=ys();const vi=j1(D);var Oo={exports:{}},hi={},Bo={exports:{}},Co={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function A1(){return Rm||(Rm=1,function(i){function u(R,Y){var P=R.length;R.push(Y);e:for(;0<P;){var oe=P-1>>>1,x=R[oe];if(0<d(x,Y))R[oe]=Y,R[P]=x,P=oe;else break e}}function o(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var Y=R[0],P=R.pop();if(P!==Y){R[0]=P;e:for(var oe=0,x=R.length,N=x>>>1;oe<N;){var G=2*(oe+1)-1,V=R[G],F=G+1,se=R[F];if(0>d(V,P))F<x&&0>d(se,V)?(R[oe]=se,R[F]=P,oe=F):(R[oe]=V,R[G]=P,oe=G);else if(F<x&&0>d(se,P))R[oe]=se,R[F]=P,oe=F;else break e}}return Y}function d(R,Y){var P=R.sortIndex-Y.sortIndex;return P!==0?P:R.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var b=Date,T=b.now();i.unstable_now=function(){return b.now()-T}}var v=[],g=[],A=1,C=null,U=3,k=!1,L=!1,q=!1,Z=!1,H=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function ae(R){for(var Y=o(g);Y!==null;){if(Y.callback===null)c(g);else if(Y.startTime<=R)c(g),Y.sortIndex=Y.expirationTime,u(v,Y);else break;Y=o(g)}}function Q(R){if(q=!1,ae(R),!L)if(o(v)!==null)L=!0,le||(le=!0,qe());else{var Y=o(g);Y!==null&&Ye(Q,Y.startTime-R)}}var le=!1,W=-1,Ae=5,ze=-1;function nt(){return Z?!0:!(i.unstable_now()-ze<Ae)}function lt(){if(Z=!1,le){var R=i.unstable_now();ze=R;var Y=!0;try{e:{L=!1,q&&(q=!1,$(W),W=-1),k=!0;var P=U;try{t:{for(ae(R),C=o(v);C!==null&&!(C.expirationTime>R&&nt());){var oe=C.callback;if(typeof oe=="function"){C.callback=null,U=C.priorityLevel;var x=oe(C.expirationTime<=R);if(R=i.unstable_now(),typeof x=="function"){C.callback=x,ae(R),Y=!0;break t}C===o(v)&&c(v),ae(R)}else c(v);C=o(v)}if(C!==null)Y=!0;else{var N=o(g);N!==null&&Ye(Q,N.startTime-R),Y=!1}}break e}finally{C=null,U=P,k=!1}Y=void 0}}finally{Y?qe():le=!1}}}var qe;if(typeof X=="function")qe=function(){X(lt)};else if(typeof MessageChannel<"u"){var Xt=new MessageChannel,Qt=Xt.port2;Xt.port1.onmessage=lt,qe=function(){Qt.postMessage(null)}}else qe=function(){H(lt,0)};function Ye(R,Y){W=H(function(){R(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_next=function(R){switch(U){case 1:case 2:case 3:var Y=3;break;default:Y=U}var P=U;U=Y;try{return R()}finally{U=P}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var P=U;U=R;try{return Y()}finally{U=P}},i.unstable_scheduleCallback=function(R,Y,P){var oe=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?oe+P:oe):P=oe,R){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,R={id:A++,callback:Y,priorityLevel:R,startTime:P,expirationTime:x,sortIndex:-1},P>oe?(R.sortIndex=P,u(g,R),o(v)===null&&R===o(g)&&(q?($(W),W=-1):q=!0,Ye(Q,P-oe))):(R.sortIndex=x,u(v,R),L||k||(L=!0,le||(le=!0,qe()))),R},i.unstable_shouldYield=nt,i.unstable_wrapCallback=function(R){var Y=U;return function(){var P=U;U=Y;try{return R.apply(this,arguments)}finally{U=P}}}}(Co)),Co}var Mm;function _1(){return Mm||(Mm=1,Bo.exports=A1()),Bo.exports}var No={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function w1(){if(Dm)return tt;Dm=1;var i=ys();function u(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)g+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(v,g,A){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:C==null?null:""+C,children:v,containerInfo:g,implementation:A}}var b=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(v,g){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return m(v,g,null,A)},tt.flushSync=function(v){var g=b.T,A=c.p;try{if(b.T=null,c.p=2,v)return v()}finally{b.T=g,c.p=A,c.d.f()}},tt.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(v,g))},tt.prefetchDNS=function(v){typeof v=="string"&&c.d.D(v)},tt.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var A=g.as,C=T(A,g.crossOrigin),U=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;A==="style"?c.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:C,integrity:U,fetchPriority:k}):A==="script"&&c.d.X(v,{crossOrigin:C,integrity:U,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},tt.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var A=T(g.as,g.crossOrigin);c.d.M(v,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(v)},tt.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var A=g.as,C=T(A,g.crossOrigin);c.d.L(v,A,{crossOrigin:C,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},tt.preloadModule=function(v,g){if(typeof v=="string")if(g){var A=T(g.as,g.crossOrigin);c.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(v)},tt.requestFormReset=function(v){c.d.r(v)},tt.unstable_batchedUpdates=function(v,g){return v(g)},tt.useFormState=function(v,g,A){return b.H.useFormState(v,g,A)},tt.useFormStatus=function(){return b.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var Om;function R1(){if(Om)return No.exports;Om=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),No.exports=w1(),No.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function M1(){if(Bm)return hi;Bm=1;var i=_1(),u=ys(),o=R1();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(m(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return T(l),e;if(r===a)return T(l),t;r=r.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,h=l.child;h;){if(h===n){f=!0,n=l,a=r;break}if(h===a){f=!0,a=l,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=l;break}if(h===a){f=!0,a=r,n=l;break}h=h.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,C=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ze=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Xt=Symbol.for("react.client.reference");function Qt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Profiler";case q:return"StrictMode";case Q:return"Suspense";case le:return"SuspenseList";case ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case X:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Qt(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Qt(e(t))}catch{}}return null}var Ye=Array.isArray,R=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},oe=[],x=-1;function N(e){return{current:e}}function G(e){0>x||(e.current=oe[x],oe[x]=null,x--)}function V(e,t){x++,oe[x]=e.current,e.current=t}var F=N(null),se=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(se,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ih(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ih(t),e=em(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(F),V(F,e)}function Pe(){G(F),G(se),G(ee)}function Gn(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=em(t,e.type);t!==n&&(V(se,e),V(F,n))}function Kt(e){se.current===e&&(G(F),G(se)),Ve.current===e&&(G(Ve),ui._currentValue=P)}var St=Object.prototype.hasOwnProperty,pu=i.unstable_scheduleCallback,bu=i.unstable_cancelCallback,e0=i.unstable_shouldYield,t0=i.unstable_requestPaint,Ut=i.unstable_now,n0=i.unstable_getCurrentPriorityLevel,Os=i.unstable_ImmediatePriority,Bs=i.unstable_UserBlockingPriority,Ai=i.unstable_NormalPriority,a0=i.unstable_LowPriority,Cs=i.unstable_IdlePriority,l0=i.log,i0=i.unstable_setDisableYieldValue,gl=null,ft=null;function mn(e){if(typeof l0=="function"&&i0(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(gl,e)}catch{}}var dt=Math.clz32?Math.clz32:c0,r0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(r0(e)/u0|0)|0}var _i=256,wi=4194304;function qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ri(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=qn(a):(f&=h,f!==0?l=qn(f):n||(n=h&~e,n!==0&&(l=qn(n))))):(h=a&~r,h!==0?l=qn(h):f!==0?l=qn(f):n||(n=a&~e,n!==0&&(l=qn(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function o0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ns(){var e=_i;return _i<<=1,(_i&4194048)===0&&(_i=256),e}function Us(){var e=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),e}function yu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function s0(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,p=e.expirationTimes,E=e.hiddenUpdates;for(n=f&~n;0<n;){var M=31-dt(n),B=1<<M;h[M]=0,p[M]=-1;var _=E[M];if(_!==null)for(E[M]=null,M=0;M<_.length;M++){var w=_[M];w!==null&&(w.lane&=-536870913)}n&=~B}a!==0&&Hs(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Hs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function vu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ls(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:vm(e.type))}function f0(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var gn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+gn,it="__reactProps$"+gn,ca="__reactContainer$"+gn,Su="__reactEvents$"+gn,d0="__reactListeners$"+gn,h0="__reactHandles$"+gn,Gs="__reactResources$"+gn,yl="__reactMarker$"+gn;function ju(e){delete e[Ie],delete e[it],delete e[Su],delete e[d0],delete e[h0]}function oa(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ca]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lm(e);e!==null;){if(n=e[Ie])return n;e=lm(e)}return t}e=n,n=e.parentNode}return null}function sa(e){if(e=e[Ie]||e[ca]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function vl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function fa(e){var t=e[Gs];return t||(t=e[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[yl]=!0}var qs=new Set,Ys={};function Yn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Ys[e]=t,e=0;e<t.length;e++)qs.add(t[e])}var m0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Zs={};function g0(e){return St.call(Zs,e)?!0:St.call(Vs,e)?!1:m0.test(e)?Zs[e]=!0:(Vs[e]=!0,!1)}function Mi(e,t,n){if(g0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Di(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var zu,Xs;function ha(e){if(zu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||"",Xs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zu+e+Xs}var Eu=!1;function Tu(e,t){if(!e||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(w){var _=w}Reflect.construct(e,[],B)}else{try{B.call()}catch(w){_=w}e.call(B.prototype)}}else{try{throw Error()}catch(w){_=w}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(w){if(w&&_&&typeof w.stack=="string")return[w.stack,_.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var p=f.split(`
`),E=h.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===E.length)for(a=p.length-1,l=E.length-1;1<=a&&0<=l&&p[a]!==E[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==E[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==E[l]){var M=`
`+p[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=l);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ha(n):""}function p0(e){switch(e.tag){case 26:case 27:case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return Tu(e.type,!1);case 11:return Tu(e.type.render,!1);case 1:return Tu(e.type,!0);case 31:return ha("Activity");default:return""}}function Qs(e){try{var t="";do t+=p0(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ks(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function b0(e){var t=Ks(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oi(e){e._valueTracker||(e._valueTracker=b0(e))}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ks(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var y0=/[\n"\\]/g;function zt(e){return e.replace(y0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Au(e,t,n,a,l,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?_u(e,f,jt(t)):n!=null?_u(e,f,jt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function $s(e,t,n,a,l,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function _u(e,t,n){t==="number"&&Bi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ma(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ws(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function Fs(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(Ye(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var v0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ps(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||v0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Is(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Ps(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&Ps(e,r,t[r])}function wu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ci(e){return S0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ru=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,ba=null;function ef(e){var t=sa(e);if(t&&(e=t.stateNode)){var n=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Au(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[it]||null;if(!l)throw Error(c(90));Au(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Js(a)}break e;case"textarea":Ws(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}}}var Du=!1;function tf(e,t,n){if(Du)return e(t,n);Du=!0;try{var a=e(t);return a}finally{if(Du=!1,(pa!==null||ba!==null)&&(vr(),pa&&(t=pa,e=ba,ba=pa=null,ef(t),e)))for(t=0;t<e.length;t++)ef(e[t])}}function xl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[it]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if($t)try{var Sl={};Object.defineProperty(Sl,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",Sl,Sl),window.removeEventListener("test",Sl,Sl)}catch{Ou=!1}var pn=null,Bu=null,Ni=null;function nf(){if(Ni)return Ni;var e,t=Bu,n=t.length,a,l="value"in pn?pn.value:pn.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return Ni=l.slice(e,1<a?1-a:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function af(){return!1}function rt(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Hi:af,this.isPropagationStopped=af,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=rt(Vn),jl=A({},Vn,{view:0,detail:0}),j0=rt(jl),Cu,Nu,zl,Li=A({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Cu=e.screenX-zl.screenX,Nu=e.screenY-zl.screenY):Nu=Cu=0,zl=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),lf=rt(Li),z0=A({},Li,{dataTransfer:0}),E0=rt(z0),T0=A({},jl,{relatedTarget:0}),Uu=rt(T0),A0=A({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=rt(A0),w0=A({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R0=rt(w0),M0=A({},Vn,{data:0}),rf=rt(M0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B0[e])?!!t[e]:!1}function Hu(){return C0}var N0=A({},jl,{key:function(e){if(e.key){var t=D0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U0=rt(N0),H0=A({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=rt(H0),k0=A({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),L0=rt(k0),G0=A({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=rt(G0),Y0=A({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=rt(Y0),Z0=A({},Vn,{newState:0,oldState:0}),X0=rt(Z0),Q0=[9,13,27,32],ku=$t&&"CompositionEvent"in window,El=null;$t&&"documentMode"in document&&(El=document.documentMode);var K0=$t&&"TextEvent"in window&&!El,cf=$t&&(!ku||El&&8<El&&11>=El),of=" ",sf=!1;function ff(e,t){switch(e){case"keyup":return Q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function J0(e,t){switch(e){case"compositionend":return df(t);case"keypress":return t.which!==32?null:(sf=!0,of);case"textInput":return e=t.data,e===of&&sf?null:e;default:return null}}function $0(e,t){if(ya)return e==="compositionend"||!ku&&ff(e,t)?(e=nf(),Ni=Bu=pn=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W0[e.type]:t==="textarea"}function mf(e,t,n,a){pa?ba?ba.push(a):ba=[a]:pa=a,t=Tr(t,"onChange"),0<t.length&&(n=new ki("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Tl=null,Al=null;function F0(e){Jh(e,0)}function Gi(e){var t=vl(e);if(Js(t))return e}function gf(e,t){if(e==="change")return t}var pf=!1;if($t){var Lu;if($t){var Gu="oninput"in document;if(!Gu){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Gu=typeof bf.oninput=="function"}Lu=Gu}else Lu=!1;pf=Lu&&(!document.documentMode||9<document.documentMode)}function yf(){Tl&&(Tl.detachEvent("onpropertychange",vf),Al=Tl=null)}function vf(e){if(e.propertyName==="value"&&Gi(Al)){var t=[];mf(t,Al,e,Mu(e)),tf(F0,t)}}function P0(e,t,n){e==="focusin"?(yf(),Tl=t,Al=n,Tl.attachEvent("onpropertychange",vf)):e==="focusout"&&yf()}function I0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Al)}function ep(e,t){if(e==="click")return Gi(t)}function tp(e,t){if(e==="input"||e==="change")return Gi(t)}function np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:np;function _l(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!St.call(t,l)||!ht(e[l],t[l]))return!1}return!0}function xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sf(e,t){var n=xf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xf(n)}}function jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ap=$t&&"documentMode"in document&&11>=document.documentMode,va=null,Yu=null,wl=null,Vu=!1;function Ef(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||va==null||va!==Bi(a)||(a=va,"selectionStart"in a&&qu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),wl&&_l(wl,a)||(wl=a,a=Tr(Yu,"onSelect"),0<a.length&&(t=new ki("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=va)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xa={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},Zu={},Tf={};$t&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function Xn(e){if(Zu[e])return Zu[e];if(!xa[e])return e;var t=xa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tf)return Zu[e]=t[n];return e}var Af=Xn("animationend"),_f=Xn("animationiteration"),wf=Xn("animationstart"),lp=Xn("transitionrun"),ip=Xn("transitionstart"),rp=Xn("transitioncancel"),Rf=Xn("transitionend"),Mf=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Ot(e,t){Mf.set(e,t),Yn(t,[e])}var Df=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var n=Df.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Qs(t)},Df.set(e,t),t)}return{value:e,source:t,stack:Qs(t)}}var Tt=[],Sa=0,Qu=0;function qi(){for(var e=Sa,t=Qu=Sa=0;t<e;){var n=Tt[t];Tt[t++]=null;var a=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var r=Tt[t];if(Tt[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Of(n,l,r)}}function Yi(e,t,n,a){Tt[Sa++]=e,Tt[Sa++]=t,Tt[Sa++]=n,Tt[Sa++]=a,Qu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ku(e,t,n,a){return Yi(e,t,n,a),Vi(e)}function ja(e,t){return Yi(e,null,null,t),Vi(e)}function Of(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-dt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function Vi(e){if(50<Il)throw Il=0,Ic=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var za={};function up(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,a){return new up(e,t,n,a)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zi(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")Ju(e)&&(f=1);else if(typeof e=="string")f=o1(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ze:return e=mt(31,n,t,l),e.elementType=ze,e.lanes=r,e;case L:return Qn(n.children,l,r,t);case q:f=8,l|=24;break;case Z:return e=mt(12,n,t,l|2),e.elementType=Z,e.lanes=r,e;case Q:return e=mt(13,n,t,l),e.elementType=Q,e.lanes=r,e;case le:return e=mt(19,n,t,l),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:case X:f=10;break e;case $:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Ae:f=16,a=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=mt(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function Qn(e,t,n,a){return e=mt(7,e,a,t),e.lanes=n,e}function $u(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Wu(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ea=[],Ta=0,Xi=null,Qi=0,At=[],_t=0,Kn=null,Ft=1,Pt="";function Jn(e,t){Ea[Ta++]=Qi,Ea[Ta++]=Xi,Xi=e,Qi=t}function Cf(e,t,n){At[_t++]=Ft,At[_t++]=Pt,At[_t++]=Kn,Kn=e;var a=Ft;e=Pt;var l=32-dt(a)-1;a&=~(1<<l),n+=1;var r=32-dt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,Ft=1<<32-dt(t)+l|n<<l|a,Pt=r+e}else Ft=1<<r|n<<l|a,Pt=e}function Fu(e){e.return!==null&&(Jn(e,1),Cf(e,1,0))}function Pu(e){for(;e===Xi;)Xi=Ea[--Ta],Ea[Ta]=null,Qi=Ea[--Ta],Ea[Ta]=null;for(;e===Kn;)Kn=At[--_t],At[_t]=null,Pt=At[--_t],At[_t]=null,Ft=At[--_t],At[_t]=null}var at=null,Oe=null,ge=!1,$n=null,Ht=!1,Iu=Error(c(519));function Wn(e){var t=Error(c(418,""));throw Dl(Et(t,e)),Iu}function Nf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[it]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ti.length;n++)de(ti[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),$s(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Oi(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Fs(t,a.value,a.defaultValue,a.children),Oi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ph(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Ar),t=!0):t=!1,t||Wn(e)}function Uf(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Ht=!1;return;case 27:case 3:Ht=!0;return;default:at=at.return}}function Rl(e){if(e!==at)return!1;if(!ge)return Uf(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||po(e.type,e.memoizedProps)),n=!n),n&&Oe&&Wn(e),Uf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,On(e.type)?(e=xo,xo=null,Oe=e):Oe=t):Oe=at?Ct(e.stateNode.nextSibling):null;return!0}function Ml(){Oe=at=null,ge=!1}function Hf(){var e=$n;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),$n=null),e}function Dl(e){$n===null?$n=[e]:$n.push(e)}var ec=N(null),Fn=null,It=null;function bn(e,t,n){V(ec,t._currentValue),t._currentValue=n}function en(e){e._currentValue=ec.current,G(ec)}function tc(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function nc(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=l;for(var p=0;p<t.length;p++)if(h.context===t[p]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),tc(r.return,n,e),a||(f=null);break e}r=h.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),tc(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Ol(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var h=l.type;ht(l.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(l===Ve.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ui):e=[ui])}l=l.return}e!==null&&nc(t,e,n,a),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return kf(Fn,e)}function Ji(e,t){return Fn===null&&Pn(e),kf(e,t)}function kf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(c(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var cp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},op=i.unstable_scheduleCallback,sp=i.unstable_NormalPriority,Le={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new cp,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&op(sp,function(){e.controller.abort()})}var Cl=null,lc=0,Aa=0,_a=null;function fp(e,t){if(Cl===null){var n=Cl=[];lc=0,Aa=ro(),_a={status:"pending",value:void 0,then:function(a){n.push(a)}}}return lc++,t.then(Lf,Lf),t}function Lf(){if(--lc===0&&Cl!==null){_a!==null&&(_a.status="fulfilled");var e=Cl;Cl=null,Aa=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function dp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Gf=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&fp(e,t),Gf!==null&&Gf(e,t)};var In=N(null);function ic(){var e=In.current;return e!==null?e:Te.pooledCache}function $i(e,t){t===null?V(In,In.current):V(In,t.pool)}function qf(){var e=ic();return e===null?null:{parent:Le._currentValue,pool:e}}var Nl=Error(c(460)),Yf=Error(c(474)),Wi=Error(c(542)),rc={then:function(){}};function Vf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fi(){}function Zf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Fi,Fi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qf(e),e;default:if(typeof t.status=="string")t.then(Fi,Fi);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qf(e),e}throw Ul=t,Nl}}var Ul=null;function Xf(){if(Ul===null)throw Error(c(459));var e=Ul;return Ul=null,e}function Qf(e){if(e===Nl||e===Wi)throw Error(c(483))}var yn=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Vi(e),Of(e,null,n),t}return Yi(e,a,t,n),Vi(e)}function Hl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ks(e,n)}}function oc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var sc=!1;function kl(){if(sc){var e=_a;if(e!==null)throw e}}function Ll(e,t,n,a){sc=!1;var l=e.updateQueue;yn=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var p=h,E=p.next;p.next=null,f===null?r=E:f.next=E,f=p;var M=e.alternate;M!==null&&(M=M.updateQueue,h=M.lastBaseUpdate,h!==f&&(h===null?M.firstBaseUpdate=E:h.next=E,M.lastBaseUpdate=p))}if(r!==null){var B=l.baseState;f=0,M=E=p=null,h=r;do{var _=h.lane&-536870913,w=_!==h.lane;if(w?(he&_)===_:(a&_)===_){_!==0&&_===Aa&&(sc=!0),M!==null&&(M=M.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;_=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){B=ne.call(je,B,_);break e}B=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,_=typeof ne=="function"?ne.call(je,B,_):ne,_==null)break e;B=A({},B,_);break e;case 2:yn=!0}}_=h.callback,_!==null&&(e.flags|=64,w&&(e.flags|=8192),w=l.callbacks,w===null?l.callbacks=[_]:w.push(_))}else w={lane:_,tag:h.tag,payload:h.payload,callback:h.callback,next:null},M===null?(E=M=w,p=B):M=M.next=w,f|=_;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;w=h,h=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);M===null&&(p=B),l.baseState=p,l.firstBaseUpdate=E,l.lastBaseUpdate=M,r===null&&(l.shared.lanes=0),wn|=f,e.lanes=f,e.memoizedState=B}}function Kf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Jf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Kf(n[e],t)}var wa=N(null),Pi=N(0);function $f(e,t){e=cn,V(Pi,e),V(wa,t),cn=e|t.baseLanes}function fc(){V(Pi,cn),V(wa,wa.current)}function dc(){cn=Pi.current,G(wa),G(Pi)}var Sn=0,ue=null,xe=null,Ue=null,Ii=!1,Ra=!1,ea=!1,er=0,Gl=0,Ma=null,hp=0;function Ce(){throw Error(c(321))}function hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function mc(e,t,n,a,l,r){return Sn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Od:Bd,ea=!1,r=n(a,l),ea=!1,Ra&&(r=Ff(t,n,a,l)),Wf(e),r}function Wf(e){R.H=rr;var t=xe!==null&&xe.next!==null;if(Sn=0,Ue=xe=ue=null,Ii=!1,Gl=0,Ma=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Ki(e)&&(Xe=!0))}function Ff(e,t,n,a){ue=e;var l=0;do{if(Ra&&(Ma=null),Gl=0,Ra=!1,25<=l)throw Error(c(301));if(l+=1,Ue=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=xp,r=t(n,a)}while(Ra);return r}function mp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ql(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ue.flags|=1024),t}function gc(){var e=er!==0;return er=0,e}function pc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bc(e){if(Ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ii=!1}Sn=0,Ue=xe=ue=null,Ra=!1,Gl=er=0,Ma=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function He(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ue===null?ue.memoizedState:Ue.next;if(t!==null)Ue=t,xe=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ue.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var t=Gl;return Gl+=1,Ma===null&&(Ma=[]),e=Zf(Ma,e,t),t=ue,(Ue===null?t.memoizedState:Ue.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Od:Bd),e}function tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===X)return et(e)}throw Error(c(438,String(e)))}function vc(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=yc(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=nt;return t.index++,n}function tn(e,t){return typeof t=="function"?t(e):t}function nr(e){var t=He();return xc(t,xe,e)}function xc(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var h=f=null,p=null,E=t,M=!1;do{var B=E.lane&-536870913;if(B!==E.lane?(he&B)===B:(Sn&B)===B){var _=E.revertLane;if(_===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),B===Aa&&(M=!0);else if((Sn&_)===_){E=E.next,_===Aa&&(M=!0);continue}else B={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(h=p=B,f=r):p=p.next=B,ue.lanes|=_,wn|=_;B=E.action,ea&&n(r,B),r=E.hasEagerState?E.eagerState:n(r,B)}else _={lane:B,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(h=p=_,f=r):p=p.next=_,ue.lanes|=B,wn|=B;E=E.next}while(E!==null&&E!==t);if(p===null?f=r:p.next=h,!ht(r,e.memoizedState)&&(Xe=!0,M&&(n=_a,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Sc(e){var t=He(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);ht(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Pf(e,t,n){var a=ue,l=He(),r=ge;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!ht((xe||l).memoizedState,n);f&&(l.memoizedState=n,Xe=!0),l=l.queue;var h=td.bind(null,a,l,e);if(Yl(2048,8,h,[e]),l.getSnapshot!==t||f||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,Da(9,ar(),ed.bind(null,a,l,n,t),null),Te===null)throw Error(c(349));r||(Sn&124)!==0||If(a,t,n)}return n}function If(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=yc(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ed(e,t,n,a){t.value=n,t.getSnapshot=a,nd(t)&&ad(e)}function td(e,t,n){return n(function(){nd(t)&&ad(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function ad(e){var t=ja(e,2);t!==null&&vt(t,e,2)}function jc(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),ea){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t}function ld(e,t,n,a){return e.baseState=n,xc(e,xe,typeof a=="function"?a:tn)}function gp(e,t,n,a,l){if(ir(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};R.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,id(t,r)):(r.next=n.next,t.pending=n.next=r)}}function id(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=R.T,f={};R.T=f;try{var h=n(l,a),p=R.S;p!==null&&p(f,h),rd(e,t,h)}catch(E){zc(e,t,E)}finally{R.T=r}}else try{r=n(l,a),rd(e,t,r)}catch(E){zc(e,t,E)}}function rd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ud(e,t,a)},function(a){return zc(e,t,a)}):ud(e,t,n)}function ud(e,t,n){t.status="fulfilled",t.value=n,cd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,id(e,n)))}function zc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,cd(t),t=t.next;while(t!==a)}e.action=null}function cd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function od(e,t){return t}function sd(e,t){if(ge){var n=Te.formState;if(n!==null){e:{var a=ue;if(ge){if(Oe){t:{for(var l=Oe,r=Ht;l.nodeType!==8;){if(!r){l=null;break t}if(l=Ct(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Oe=Ct(l.nextSibling),a=l.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:od,lastRenderedState:t},n.queue=a,n=Rd.bind(null,ue,a),a.dispatch=n,a=jc(!1),r=wc.bind(null,ue,!1,a.queue),a=ut(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=gp.bind(null,ue,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function fd(e){var t=He();return dd(t,xe,e)}function dd(e,t,n){if(t=xc(e,t,od)[0],e=nr(tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ql(t)}catch(f){throw f===Nl?Wi:f}else a=t;t=He();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Da(9,ar(),pp.bind(null,l,n),null)),[a,r,e]}function pp(e,t){e.action=t}function hd(e){var t=He(),n=xe;if(n!==null)return dd(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Da(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=yc(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ar(){return{destroy:void 0,resource:void 0}}function md(){return He().memoizedState}function lr(e,t,n,a){var l=ut();a=a===void 0?null:a,ue.flags|=e,l.memoizedState=Da(1|t,ar(),n,a)}function Yl(e,t,n,a){var l=He();a=a===void 0?null:a;var r=l.memoizedState.inst;xe!==null&&a!==null&&hc(a,xe.memoizedState.deps)?l.memoizedState=Da(t,r,n,a):(ue.flags|=e,l.memoizedState=Da(1|t,r,n,a))}function gd(e,t){lr(8390656,8,e,t)}function pd(e,t){Yl(2048,8,e,t)}function bd(e,t){return Yl(4,2,e,t)}function yd(e,t){return Yl(4,4,e,t)}function vd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xd(e,t,n){n=n!=null?n.concat([e]):null,Yl(4,4,vd.bind(null,t,e),n)}function Ec(){}function Sd(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&hc(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function jd(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&hc(t,a[1]))return a[0];if(a=e(),ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a}function Tc(e,t,n){return n===void 0||(Sn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Th(),ue.lanes|=e,wn|=e,n)}function zd(e,t,n,a){return ht(n,t)?n:wa.current!==null?(e=Tc(e,n,a),ht(e,t)||(Xe=!0),e):(Sn&42)===0?(Xe=!0,e.memoizedState=n):(e=Th(),ue.lanes|=e,wn|=e,t)}function Ed(e,t,n,a,l){var r=Y.p;Y.p=r!==0&&8>r?r:8;var f=R.T,h={};R.T=h,wc(e,!1,t,n);try{var p=l(),E=R.S;if(E!==null&&E(h,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var M=dp(p,a);Vl(e,t,M,yt(e))}else Vl(e,t,a,yt(e))}catch(B){Vl(e,t,{then:function(){},status:"rejected",reason:B},yt())}finally{Y.p=r,R.T=f}}function bp(){}function Ac(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=Td(e).queue;Ed(e,l,t,P,n===null?bp:function(){return Ad(e),n(a)})}function Td(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ad(e){var t=Td(e).next.queue;Vl(e,t,{},yt())}function _c(){return et(ui)}function _d(){return He().memoizedState}function wd(){return He().memoizedState}function yp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=vn(n);var a=xn(t,e,n);a!==null&&(vt(a,t,n),Hl(a,t,n)),t={cache:ac()},e.payload=t;return}t=t.return}}function vp(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ir(e)?Md(t,n):(n=Ku(e,t,n,a),n!==null&&(vt(n,e,a),Dd(n,t,a)))}function Rd(e,t,n){var a=yt();Vl(e,t,n,a)}function Vl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ir(e))Md(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(l.hasEagerState=!0,l.eagerState=h,ht(h,f))return Yi(e,t,l,0),Te===null&&qi(),!1}catch{}finally{}if(n=Ku(e,t,l,a),n!==null)return vt(n,e,a),Dd(n,t,a),!0}return!1}function wc(e,t,n,a){if(a={lane:2,revertLane:ro(),action:a,hasEagerState:!1,eagerState:null,next:null},ir(e)){if(t)throw Error(c(479))}else t=Ku(e,n,a,2),t!==null&&vt(t,e,2)}function ir(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Md(e,t){Ra=Ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ks(e,n)}}var rr={readContext:et,use:tr,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce},Od={readContext:et,use:tr,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:gd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,lr(4194308,4,vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lr(4194308,4,e,t)},useInsertionEffect:function(e,t){lr(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(ea){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var l=n(t);if(ea){mn(!0);try{n(t)}finally{mn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=vp.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=jc(e);var t=e.queue,n=Rd.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ec,useDeferredValue:function(e,t){var n=ut();return Tc(n,e,t)},useTransition:function(){var e=jc(!1);return e=Ed.bind(null,ue,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,l=ut();if(ge){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Te===null)throw Error(c(349));(he&124)!==0||If(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,gd(td.bind(null,a,r,e),[e]),a.flags|=2048,Da(9,ar(),ed.bind(null,a,r,n,t),null),n},useId:function(){var e=ut(),t=Te.identifierPrefix;if(ge){var n=Pt,a=Ft;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=hp++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:_c,useFormState:sd,useActionState:sd,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wc.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:vc,useCacheRefresh:function(){return ut().memoizedState=yp.bind(null,ue)}},Bd={readContext:et,use:tr,useCallback:Sd,useContext:et,useEffect:pd,useImperativeHandle:xd,useInsertionEffect:bd,useLayoutEffect:yd,useMemo:jd,useReducer:nr,useRef:md,useState:function(){return nr(tn)},useDebugValue:Ec,useDeferredValue:function(e,t){var n=He();return zd(n,xe.memoizedState,e,t)},useTransition:function(){var e=nr(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:Pf,useId:_d,useHostTransitionStatus:_c,useFormState:fd,useActionState:fd,useOptimistic:function(e,t){var n=He();return ld(n,xe,e,t)},useMemoCache:vc,useCacheRefresh:wd},xp={readContext:et,use:tr,useCallback:Sd,useContext:et,useEffect:pd,useImperativeHandle:xd,useInsertionEffect:bd,useLayoutEffect:yd,useMemo:jd,useReducer:Sc,useRef:md,useState:function(){return Sc(tn)},useDebugValue:Ec,useDeferredValue:function(e,t){var n=He();return xe===null?Tc(n,e,t):zd(n,xe.memoizedState,e,t)},useTransition:function(){var e=Sc(tn)[0],t=He().memoizedState;return[typeof e=="boolean"?e:ql(e),t]},useSyncExternalStore:Pf,useId:_d,useHostTransitionStatus:_c,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var n=He();return xe!==null?ld(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vc,useCacheRefresh:wd},Oa=null,Zl=0;function ur(e){var t=Zl;return Zl+=1,Oa===null&&(Oa=[]),Zf(Oa,e,t)}function Xl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cd(e){var t=e._init;return t(e._payload)}function Nd(e){function t(j,S){if(e){var z=j.deletions;z===null?(j.deletions=[S],j.flags|=16):z.push(S)}}function n(j,S){if(!e)return null;for(;S!==null;)t(j,S),S=S.sibling;return null}function a(j){for(var S=new Map;j!==null;)j.key!==null?S.set(j.key,j):S.set(j.index,j),j=j.sibling;return S}function l(j,S){return j=Wt(j,S),j.index=0,j.sibling=null,j}function r(j,S,z){return j.index=z,e?(z=j.alternate,z!==null?(z=z.index,z<S?(j.flags|=67108866,S):z):(j.flags|=67108866,S)):(j.flags|=1048576,S)}function f(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function h(j,S,z,O){return S===null||S.tag!==6?(S=$u(z,j.mode,O),S.return=j,S):(S=l(S,z),S.return=j,S)}function p(j,S,z,O){var K=z.type;return K===L?M(j,S,z.props.children,O,z.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Cd(K)===S.type)?(S=l(S,z.props),Xl(S,z),S.return=j,S):(S=Zi(z.type,z.key,z.props,null,j.mode,O),Xl(S,z),S.return=j,S)}function E(j,S,z,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=Wu(z,j.mode,O),S.return=j,S):(S=l(S,z.children||[]),S.return=j,S)}function M(j,S,z,O,K){return S===null||S.tag!==7?(S=Qn(z,j.mode,O,K),S.return=j,S):(S=l(S,z),S.return=j,S)}function B(j,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=$u(""+S,j.mode,z),S.return=j,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return z=Zi(S.type,S.key,S.props,null,j.mode,z),Xl(z,S),z.return=j,z;case k:return S=Wu(S,j.mode,z),S.return=j,S;case Ae:var O=S._init;return S=O(S._payload),B(j,S,z)}if(Ye(S)||qe(S))return S=Qn(S,j.mode,z,null),S.return=j,S;if(typeof S.then=="function")return B(j,ur(S),z);if(S.$$typeof===X)return B(j,Ji(j,S),z);cr(j,S)}return null}function _(j,S,z,O){var K=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return K!==null?null:h(j,S,""+z,O);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case U:return z.key===K?p(j,S,z,O):null;case k:return z.key===K?E(j,S,z,O):null;case Ae:return K=z._init,z=K(z._payload),_(j,S,z,O)}if(Ye(z)||qe(z))return K!==null?null:M(j,S,z,O,null);if(typeof z.then=="function")return _(j,S,ur(z),O);if(z.$$typeof===X)return _(j,S,Ji(j,z),O);cr(j,z)}return null}function w(j,S,z,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(z)||null,h(S,j,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return j=j.get(O.key===null?z:O.key)||null,p(S,j,O,K);case k:return j=j.get(O.key===null?z:O.key)||null,E(S,j,O,K);case Ae:var ce=O._init;return O=ce(O._payload),w(j,S,z,O,K)}if(Ye(O)||qe(O))return j=j.get(z)||null,M(S,j,O,K,null);if(typeof O.then=="function")return w(j,S,z,ur(O),K);if(O.$$typeof===X)return w(j,S,z,Ji(S,O),K);cr(S,O)}return null}function ne(j,S,z,O){for(var K=null,ce=null,J=S,te=S=0,Ke=null;J!==null&&te<z.length;te++){J.index>te?(Ke=J,J=null):Ke=J.sibling;var me=_(j,J,z[te],O);if(me===null){J===null&&(J=Ke);break}e&&J&&me.alternate===null&&t(j,J),S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me,J=Ke}if(te===z.length)return n(j,J),ge&&Jn(j,te),K;if(J===null){for(;te<z.length;te++)J=B(j,z[te],O),J!==null&&(S=r(J,S,te),ce===null?K=J:ce.sibling=J,ce=J);return ge&&Jn(j,te),K}for(J=a(J);te<z.length;te++)Ke=w(J,j,te,z[te],O),Ke!==null&&(e&&Ke.alternate!==null&&J.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),ce===null?K=Ke:ce.sibling=Ke,ce=Ke);return e&&J.forEach(function(Hn){return t(j,Hn)}),ge&&Jn(j,te),K}function I(j,S,z,O){if(z==null)throw Error(c(151));for(var K=null,ce=null,J=S,te=S=0,Ke=null,me=z.next();J!==null&&!me.done;te++,me=z.next()){J.index>te?(Ke=J,J=null):Ke=J.sibling;var Hn=_(j,J,me.value,O);if(Hn===null){J===null&&(J=Ke);break}e&&J&&Hn.alternate===null&&t(j,J),S=r(Hn,S,te),ce===null?K=Hn:ce.sibling=Hn,ce=Hn,J=Ke}if(me.done)return n(j,J),ge&&Jn(j,te),K;if(J===null){for(;!me.done;te++,me=z.next())me=B(j,me.value,O),me!==null&&(S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me);return ge&&Jn(j,te),K}for(J=a(J);!me.done;te++,me=z.next())me=w(J,j,te,me.value,O),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?te:me.key),S=r(me,S,te),ce===null?K=me:ce.sibling=me,ce=me);return e&&J.forEach(function(S1){return t(j,S1)}),ge&&Jn(j,te),K}function je(j,S,z,O){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case U:e:{for(var K=z.key;S!==null;){if(S.key===K){if(K=z.type,K===L){if(S.tag===7){n(j,S.sibling),O=l(S,z.props.children),O.return=j,j=O;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Cd(K)===S.type){n(j,S.sibling),O=l(S,z.props),Xl(O,z),O.return=j,j=O;break e}n(j,S);break}else t(j,S);S=S.sibling}z.type===L?(O=Qn(z.props.children,j.mode,O,z.key),O.return=j,j=O):(O=Zi(z.type,z.key,z.props,null,j.mode,O),Xl(O,z),O.return=j,j=O)}return f(j);case k:e:{for(K=z.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){n(j,S.sibling),O=l(S,z.children||[]),O.return=j,j=O;break e}else{n(j,S);break}else t(j,S);S=S.sibling}O=Wu(z,j.mode,O),O.return=j,j=O}return f(j);case Ae:return K=z._init,z=K(z._payload),je(j,S,z,O)}if(Ye(z))return ne(j,S,z,O);if(qe(z)){if(K=qe(z),typeof K!="function")throw Error(c(150));return z=K.call(z),I(j,S,z,O)}if(typeof z.then=="function")return je(j,S,ur(z),O);if(z.$$typeof===X)return je(j,S,Ji(j,z),O);cr(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,S!==null&&S.tag===6?(n(j,S.sibling),O=l(S,z),O.return=j,j=O):(n(j,S),O=$u(z,j.mode,O),O.return=j,j=O),f(j)):n(j,S)}return function(j,S,z,O){try{Zl=0;var K=je(j,S,z,O);return Oa=null,K}catch(J){if(J===Nl||J===Wi)throw J;var ce=mt(29,J,null,j.mode);return ce.lanes=O,ce.return=j,ce}finally{}}}var Ba=Nd(!0),Ud=Nd(!1),wt=N(null),kt=null;function jn(e){var t=e.alternate;V(Ge,Ge.current&1),V(wt,e),kt===null&&(t===null||wa.current!==null||t.memoizedState!==null)&&(kt=e)}function Hd(e){if(e.tag===22){if(V(Ge,Ge.current),V(wt,e),kt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(kt=e)}}else zn()}function zn(){V(Ge,Ge.current),V(wt,wt.current)}function nn(e){G(wt),kt===e&&(kt=null),G(Ge)}var Ge=N(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||vo(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Rc(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),Hl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),l=vn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,a),t!==null&&(vt(t,e,a),Hl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=vn(n);a.tag=2,t!=null&&(a.callback=t),t=xn(e,a,n),t!==null&&(vt(t,e,n),Hl(t,e,n))}};function kd(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!_l(n,a)||!_l(l,r):!0}function Ld(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Mc.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=A({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var sr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gd(e){sr(e)}function qd(e){console.error(e)}function Yd(e){sr(e)}function fr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Vd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Dc(e,t,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){fr(e,t)},n}function Zd(e){return e=vn(e),e.tag=3,e}function Xd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){Vd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Vd(t,n,a),typeof l!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Sp(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ol(t,n,l,!0),n=wt.current,n!==null){switch(n.tag){case 13:return kt===null?to():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===rc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ao(e,a,l)),!1;case 22:return n.flags|=65536,a===rc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ao(e,a,l)),!1}throw Error(c(435,n.tag))}return ao(e,a,l),to(),!1}if(ge)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Iu&&(e=Error(c(422),{cause:a}),Dl(Et(e,n)))):(a!==Iu&&(t=Error(c(423),{cause:a}),Dl(Et(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Et(a,n),l=Dc(e.stateNode,a,l),oc(e,l),Be!==4&&(Be=2)),!1;var r=Error(c(520),{cause:a});if(r=Et(r,n),Pl===null?Pl=[r]:Pl.push(r),Be!==4&&(Be=2),t===null)return!0;a=Et(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Dc(n.stateNode,a,e),oc(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Zd(l),Xd(l,e,n,a),oc(n,l),!1}n=n.return}while(n!==null);return!1}var Qd=Error(c(461)),Xe=!1;function $e(e,t,n,a){t.child=e===null?Ud(t,null,n,a):Ba(t,e.child,n,a)}function Kd(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=mc(e,t,n,f,r,l),h=gc(),e!==null&&!Xe?(pc(e,t,l),an(e,t,l)):(ge&&h&&Fu(t),t.flags|=1,$e(e,t,a,l),t.child)}function Jd(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!Ju(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,$d(e,t,r,a,l)):(e=Zi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Lc(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(f,a)&&e.ref===t.ref)return an(e,t,l)}return t.flags|=1,e=Wt(r,a),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(_l(r,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=r,Lc(e,l))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,an(e,t,l)}return Oc(e,t,n,a,l)}function Wd(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return Fd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$i(t,r!==null?r.cachePool:null),r!==null?$f(t,r):fc(),Hd(t);else return t.lanes=t.childLanes=536870912,Fd(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?($i(t,r.cachePool),$f(t,r),zn(),t.memoizedState=null):(e!==null&&$i(t,null),fc(),zn());return $e(e,t,l,n),t.child}function Fd(e,t,n,a){var l=ic();return l=l===null?null:{parent:Le._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&$i(t,null),fc(),Hd(t),e!==null&&Ol(e,t,a,!0),null}function dr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Oc(e,t,n,a,l){return Pn(t),n=mc(e,t,n,a,void 0,l),a=gc(),e!==null&&!Xe?(pc(e,t,l),an(e,t,l)):(ge&&a&&Fu(t),t.flags|=1,$e(e,t,n,l),t.child)}function Pd(e,t,n,a,l,r){return Pn(t),t.updateQueue=null,n=Ff(t,a,n,l),Wf(e),a=gc(),e!==null&&!Xe?(pc(e,t,r),an(e,t,r)):(ge&&a&&Fu(t),t.flags|=1,$e(e,t,n,r),t.child)}function Id(e,t,n,a,l){if(Pn(t),t.stateNode===null){var r=za,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Mc,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},uc(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):za,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Rc(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Mc.enqueueReplaceState(r,r.state,null),Ll(t,a,r,l),kl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,p=ta(n,h);r.props=p;var E=r.context,M=n.contextType;f=za,typeof M=="object"&&M!==null&&(f=et(M));var B=n.getDerivedStateFromProps;M=typeof B=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||E!==f)&&Ld(t,r,a,f),yn=!1;var _=t.memoizedState;r.state=_,Ll(t,a,r,l),kl(),E=t.memoizedState,h||_!==E||yn?(typeof B=="function"&&(Rc(t,n,B,a),E=t.memoizedState),(p=yn||kd(t,n,p,a,_,E,f))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=E),r.props=a,r.state=E,r.context=f,a=p):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,cc(e,t),f=t.memoizedProps,M=ta(n,f),r.props=M,B=t.pendingProps,_=r.context,E=n.contextType,p=za,typeof E=="object"&&E!==null&&(p=et(E)),h=n.getDerivedStateFromProps,(E=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==B||_!==p)&&Ld(t,r,a,p),yn=!1,_=t.memoizedState,r.state=_,Ll(t,a,r,l),kl();var w=t.memoizedState;f!==B||_!==w||yn||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof h=="function"&&(Rc(t,n,h,a),w=t.memoizedState),(M=yn||kd(t,n,M,a,_,w,p)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(E||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,w,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,w,p)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),r.props=a,r.state=w,r.context=p,a=M):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,dr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ba(t,e.child,null,l),t.child=Ba(t,null,n,l)):$e(e,t,n,l),t.memoizedState=r.state,e=t.child):e=an(e,t,l),e}function eh(e,t,n,a){return Ml(),t.flags|=256,$e(e,t,n,a),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:qf()}}function Nc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function th(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(l?jn(t):zn(),ge){var h=Oe,p;if(p=h){e:{for(p=h,h=Ht;p.nodeType!==8;){if(!h){h=null;break e}if(p=Ct(p.nextSibling),p===null){h=null;break e}}h=p}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Ft,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},p=mt(18,null,null,0),p.stateNode=h,p.return=t,t.child=p,at=t,Oe=null,p=!0):p=!1}p||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return vo(h)?t.lanes=32:t.lanes=536870912,null;nn(t)}return h=a.children,a=a.fallback,l?(zn(),l=t.mode,h=hr({mode:"hidden",children:h},l),a=Qn(a,l,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,l=t.child,l.memoizedState=Cc(n),l.childLanes=Nc(e,f,n),t.memoizedState=Bc,a):(jn(t),Uc(t,h))}if(p=e.memoizedState,p!==null&&(h=p.dehydrated,h!==null)){if(r)t.flags&256?(jn(t),t.flags&=-257,t=Hc(e,t,n)):t.memoizedState!==null?(zn(),t.child=e.child,t.flags|=128,t=null):(zn(),l=a.fallback,h=t.mode,a=hr({mode:"visible",children:a.children},h),l=Qn(l,h,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Ba(t,e.child,null,n),a=t.child,a.memoizedState=Cc(n),a.childLanes=Nc(e,f,n),t.memoizedState=Bc,t=l);else if(jn(t),vo(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var E=f.dgst;f=E,a=Error(c(419)),a.stack="",a.digest=f,Dl({value:a,source:null,stack:null}),t=Hc(e,t,n)}else if(Xe||Ol(e,t,n,!1),f=(n&e.childLanes)!==0,Xe||f){if(f=Te,f!==null&&(a=n&-n,a=(a&42)!==0?1:vu(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==p.retryLane))throw p.retryLane=a,ja(e,a),vt(f,e,a),Qd;h.data==="$?"||to(),t=Hc(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Oe=Ct(h.nextSibling),at=t,ge=!0,$n=null,Ht=!1,e!==null&&(At[_t++]=Ft,At[_t++]=Pt,At[_t++]=Kn,Ft=e.id,Pt=e.overflow,Kn=t),t=Uc(t,a.children),t.flags|=4096);return t}return l?(zn(),l=a.fallback,h=t.mode,p=e.child,E=p.sibling,a=Wt(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,E!==null?l=Wt(E,l):(l=Qn(l,h,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,h=e.child.memoizedState,h===null?h=Cc(n):(p=h.cachePool,p!==null?(E=Le._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=qf(),h={baseLanes:h.baseLanes|n,cachePool:p}),l.memoizedState=h,l.childLanes=Nc(e,f,n),t.memoizedState=Bc,a):(jn(t),n=e.child,e=n.sibling,n=Wt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Uc(e,t){return t=hr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hr(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hc(e,t,n){return Ba(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),tc(e.return,t,n)}function kc(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function ah(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if($e(e,t,a.children,n),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nh(e,n,t);else if(e.tag===19)nh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Ge,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),kc(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&or(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}kc(t,!0,n,null,r);break;case"together":kc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function jp(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),bn(t,Le,e.memoizedState.cache),Ml();break;case 27:case 5:Gn(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(jn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?th(e,t,n):(jn(t),e=an(e,t,n),e!==null?e.sibling:null);jn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ol(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return ah(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),V(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,Wd(e,t,n);case 24:bn(t,Le,e.memoizedState.cache)}return an(e,t,n)}function lh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Lc(e,n)&&(t.flags&128)===0)return Xe=!1,jp(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,ge&&(t.flags&1048576)!==0&&Cf(t,Qi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")Ju(a)?(e=ta(a,e),t.tag=1,t=Id(null,t,a,e,n)):(t.tag=0,t=Oc(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===ae){t.tag=11,t=Kd(null,t,a,e,n);break e}else if(l===W){t.tag=14,t=Jd(null,t,a,e,n);break e}}throw t=Qt(a)||a,Error(c(306,t,""))}}return t;case 0:return Oc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=ta(a,t.pendingProps),Id(e,t,a,l,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,cc(e,t),Ll(t,a,null,n);var f=t.memoizedState;if(a=f.cache,bn(t,Le,a),a!==r.cache&&nc(t,[Le],n,!0),kl(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=eh(e,t,a,n);break e}else if(a!==l){l=Et(Error(c(424)),t),Dl(l),t=eh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Ct(e.firstChild),at=t,ge=!0,$n=null,Ht=!0,n=Ud(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ml(),a===l){t=an(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 26:return dr(e,t),e===null?(n=cm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=_r(ee.current).createElement(n),a[Ie]=t,a[it]=e,Fe(a,n,e),Ze(a),t.stateNode=a):t.memoizedState=cm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&ge&&(a=t.stateNode=im(t.type,t.pendingProps,ee.current),at=t,Ht=!0,l=Oe,On(t.type)?(xo=l,Oe=Ct(a.firstChild)):Oe=l),$e(e,t,t.pendingProps.children,n),dr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((l=a=Oe)&&(a=Wp(a,t.type,t.pendingProps,Ht),a!==null?(t.stateNode=a,at=t,Oe=Ct(a.firstChild),Ht=!1,l=!0):l=!1),l||Wn(t)),Gn(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,po(l,r)?a=null:f!==null&&po(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=mc(e,t,mp,null,null,n),ui._currentValue=l),dr(e,t),$e(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=Oe)&&(n=Fp(n,t.pendingProps,Ht),n!==null?(t.stateNode=n,at=t,Oe=null,e=!0):e=!1),e||Wn(t)),null;case 13:return th(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ba(t,null,a,n):$e(e,t,a,n),t.child;case 11:return Kd(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,bn(t,t.type,a.value),$e(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Pn(t),l=et(l),a=a(l),t.flags|=1,$e(e,t,a,n),t.child;case 14:return Jd(e,t,t.type,t.pendingProps,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 19:return ah(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=hr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Wt(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Wd(e,t,n);case 24:return Pn(t),a=et(Le),e===null?(l=ic(),l===null&&(l=Te,r=ac(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},uc(t),bn(t,Le,l)):((e.lanes&n)!==0&&(cc(e,t),Ll(t,null,null,n),kl()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),bn(t,Le,a)):(a=r.cache,bn(t,Le,a),a!==l.cache&&nc(t,[Le],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ln(e){e.flags|=4}function ih(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hm(t)){if(t=wt.current,t!==null&&((he&4194048)===he?kt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==kt))throw Ul=rc,Yf;e.flags|=8192}}function mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Us():536870912,e.lanes|=t,Ha|=t)}function Ql(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function zp(e,t,n){var a=t.pendingProps;switch(Pu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),en(Le),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Rl(t)?ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hf())),Me(t),null;case 26:return n=t.memoizedState,e===null?(ln(t),n!==null?(Me(t),ih(t,n)):(Me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(ln(t),Me(t),ih(t,n)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==a&&ln(t),Me(t),t.flags&=-16777217),null;case 27:Kt(t),n=ee.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Me(t),null}e=F.current,Rl(t)?Nf(t):(e=im(l,a,n),t.stateNode=e,ln(t))}return Me(t),null;case 5:if(Kt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Me(t),null}if(e=F.current,Rl(t))Nf(t);else{switch(l=_r(ee.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[Ie]=t,e[it]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ln(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&ln(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ee.current,Rl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=at,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ph(e.nodeValue,n)),e||Wn(t)}else e=_r(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return Me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Rl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Ie]=t}else Ml(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else l=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(nn(t),t):(nn(t),null)}if(nn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),mr(t,t.updateQueue),Me(t),null;case 4:return Pe(),e===null&&so(t.stateNode.containerInfo),Me(t),null;case 10:return en(t.type),Me(t),null;case 19:if(G(Ge),l=t.memoizedState,l===null)return Me(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)Ql(l,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=or(e),r!==null){for(t.flags|=128,Ql(l,!1),e=r.updateQueue,t.updateQueue=e,mr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bf(n,e),n=n.sibling;return V(Ge,Ge.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ut()>br&&(t.flags|=128,a=!0,Ql(l,!1),t.lanes=4194304)}else{if(!a)if(e=or(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,mr(t,e),Ql(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ge)return Me(t),null}else 2*Ut()-l.renderingStartTime>br&&n!==536870912&&(t.flags|=128,a=!0,Ql(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,e=Ge.current,V(Ge,a?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return nn(t),dc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&mr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&G(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),en(Le),Me(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Ep(e,t){switch(Pu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(Le),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kt(t),null;case 13:if(nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ml()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Ge),null;case 4:return Pe(),null;case 10:return en(t.type),null;case 22:case 23:return nn(t),dc(),e!==null&&G(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return en(Le),null;case 25:return null;default:return null}}function rh(e,t){switch(Pu(t),t.tag){case 3:en(Le),Pe();break;case 26:case 27:case 5:Kt(t);break;case 4:Pe();break;case 13:nn(t);break;case 19:G(Ge);break;case 10:en(t.type);break;case 22:case 23:nn(t),dc(),e!==null&&G(In);break;case 24:en(Le)}}function Kl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(h){Ee(t,t.return,h)}}function En(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,l=t;var p=n,E=h;try{E()}catch(M){Ee(l,p,M)}}}a=a.next}while(a!==r)}}catch(M){Ee(t,t.return,M)}}function uh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Jf(t,n)}catch(a){Ee(e,e.return,a)}}}function ch(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ee(e,t,a)}}function Jl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){Ee(e,t,l)}}function Lt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Ee(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ee(e,t,l)}else n.current=null}function oh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Ee(e,e.return,l)}}function Gc(e,t,n){try{var a=e.stateNode;Xp(a,e.type,n,t),a[it]=t}catch(l){Ee(e,e.return,l)}}function sh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function gr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&On(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gr(e,t,n),e=e.sibling;e!==null;)gr(e,t,n),e=e.sibling}function fh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fe(t,a,n),t[Ie]=e,t[it]=n}catch(r){Ee(e,e.return,r)}}var rn=!1,Ne=!1,Vc=!1,dh=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Tp(e,t){if(e=e.containerInfo,mo=Br,e=zf(e),qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,p=-1,E=0,M=0,B=e,_=null;t:for(;;){for(var w;B!==n||l!==0&&B.nodeType!==3||(h=f+l),B!==r||a!==0&&B.nodeType!==3||(p=f+a),B.nodeType===3&&(f+=B.nodeValue.length),(w=B.firstChild)!==null;)_=B,B=w;for(;;){if(B===e)break t;if(_===n&&++E===l&&(h=f),_===r&&++M===a&&(p=f),(w=B.nextSibling)!==null)break;B=_,_=B.parentNode}B=w}n=h===-1||p===-1?null:{start:h,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Br=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){Ee(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function hh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),a&4&&Kl(5,n);break;case 1:if(Tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Ee(n,n.return,f)}else{var l=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ee(n,n.return,f)}}a&64&&uh(n),a&512&&Jl(n,n.return);break;case 3:if(Tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Jf(e,t)}catch(f){Ee(n,n.return,f)}}break;case 27:t===null&&a&4&&fh(n);case 26:case 5:Tn(e,n),t===null&&a&4&&oh(n),a&512&&Jl(n,n.return);break;case 12:Tn(e,n);break;case 13:Tn(e,n),a&4&&ph(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Cp.bind(null,n),Pp(e,n))));break;case 22:if(a=n.memoizedState!==null||rn,!a){t=t!==null&&t.memoizedState!==null||Ne,l=rn;var r=Ne;rn=a,(Ne=t)&&!r?An(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),rn=l,Ne=r}break;case 30:break;default:Tn(e,n)}}function mh(e){var t=e.alternate;t!==null&&(e.alternate=null,mh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ju(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,ct=!1;function un(e,t,n){for(n=n.child;n!==null;)gh(e,t,n),n=n.sibling}function gh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 26:Ne||Lt(n,t),un(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Lt(n,t);var a=we,l=ct;On(n.type)&&(we=n.stateNode,ct=!1),un(e,t,n),ai(n.stateNode),we=a,ct=l;break;case 5:Ne||Lt(n,t);case 6:if(a=we,l=ct,we=null,un(e,t,n),we=a,ct=l,we!==null)if(ct)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(r){Ee(n,t,r)}else try{we.removeChild(n.stateNode)}catch(r){Ee(n,t,r)}break;case 18:we!==null&&(ct?(e=we,am(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),fi(e)):am(we,n.stateNode));break;case 4:a=we,l=ct,we=n.stateNode.containerInfo,ct=!0,un(e,t,n),we=a,ct=l;break;case 0:case 11:case 14:case 15:Ne||En(2,n,t),Ne||En(4,n,t),un(e,t,n);break;case 1:Ne||(Lt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ch(n,t,a)),un(e,t,n);break;case 21:un(e,t,n);break;case 22:Ne=(a=Ne)||n.memoizedState!==null,un(e,t,n),Ne=a;break;default:un(e,t,n)}}function ph(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fi(e)}catch(n){Ee(t,t.return,n)}}function Ap(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new dh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new dh),t;default:throw Error(c(435,e.tag))}}function Zc(e,t){var n=Ap(e);t.forEach(function(a){var l=Np.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(On(h.type)){we=h.stateNode,ct=!1;break e}break;case 5:we=h.stateNode,ct=!1;break e;case 3:case 4:we=h.stateNode.containerInfo,ct=!0;break e}h=h.return}if(we===null)throw Error(c(160));gh(r,f,l),we=null,ct=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bh(t,e),t=t.sibling}var Bt=null;function bh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),pt(e),a&4&&(En(3,e,e.return),Kl(3,e),En(5,e,e.return));break;case 1:gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),a&64&&rn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Bt;if(gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[yl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Ze(r),a=r;break e;case"link":var f=fm("link","href",l).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;case"meta":if(f=fm("meta","content",l).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=l.createElement(a),Fe(r,a,n),l.head.appendChild(r);break;default:throw Error(c(468,a))}r[Ie]=e,Ze(r),a=r}e.stateNode=a}else dm(l,e.type,e.stateNode);else e.stateNode=sm(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?dm(l,e.type,e.stateNode):sm(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),n!==null&&a&4&&Gc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),pt(e),a&512&&(Ne||n===null||Lt(n,n.return)),e.flags&32){l=e.stateNode;try{ga(l,"")}catch(w){Ee(e,e.return,w)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Gc(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Vc=!0);break;case 6:if(gt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(w){Ee(e,e.return,w)}}break;case 3:if(Mr=null,l=Bt,Bt=wr(t.containerInfo),gt(t,e),Bt=l,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(w){Ee(e,e.return,w)}Vc&&(Vc=!1,yh(e));break;case 4:a=Bt,Bt=wr(e.stateNode.containerInfo),gt(t,e),pt(e),Bt=a;break;case 12:gt(t,e),pt(e);break;case 13:gt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Wc=Ut()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zc(e,a)));break;case 22:l=e.memoizedState!==null;var p=n!==null&&n.memoizedState!==null,E=rn,M=Ne;if(rn=E||l,Ne=M||p,gt(t,e),Ne=M,rn=E,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||p||rn||Ne||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){p=n=t;try{if(r=p.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=p.stateNode;var B=p.memoizedProps.style,_=B!=null&&B.hasOwnProperty("display")?B.display:null;h.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(w){Ee(p,p.return,w)}}}else if(t.tag===6){if(n===null){p=t;try{p.stateNode.nodeValue=l?"":p.memoizedProps}catch(w){Ee(p,p.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Zc(e,n))));break;case 19:gt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Zc(e,a)));break;case 30:break;case 21:break;default:gt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(sh(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,r=qc(e);gr(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(ga(f,""),n.flags&=-33);var h=qc(e);gr(e,h,f);break;case 3:case 4:var p=n.stateNode.containerInfo,E=qc(e);Yc(e,E,p);break;default:throw Error(c(161))}}catch(M){Ee(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hh(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),na(t);break;case 1:Lt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ch(t,t.return,n),na(t);break;case 27:ai(t.stateNode);case 26:case 5:Lt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function An(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:An(l,r,n),Kl(4,r);break;case 1:if(An(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){Ee(a,a.return,E)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)Kf(p[l],h)}catch(E){Ee(a,a.return,E)}}n&&f&64&&uh(r),Jl(r,r.return);break;case 27:fh(r);case 26:case 5:An(l,r,n),n&&a===null&&f&4&&oh(r),Jl(r,r.return);break;case 12:An(l,r,n);break;case 13:An(l,r,n),n&&f&4&&ph(l,r);break;case 22:r.memoizedState===null&&An(l,r,n),Jl(r,r.return);break;case 30:break;default:An(l,r,n)}t=t.sibling}}function Xc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Bl(n))}function Qc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e))}function Gt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vh(e,t,n,a),t=t.sibling}function vh(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Gt(e,t,n,a),l&2048&&Kl(9,t);break;case 1:Gt(e,t,n,a);break;case 3:Gt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bl(e)));break;case 12:if(l&2048){Gt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Ee(t,t.return,p)}}else Gt(e,t,n,a);break;case 13:Gt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Gt(e,t,n,a):$l(e,t):r._visibility&2?Gt(e,t,n,a):(r._visibility|=2,Ca(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Xc(f,t);break;case 24:Gt(e,t,n,a),l&2048&&Qc(t.alternate,t);break;default:Gt(e,t,n,a)}}function Ca(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,p=a,E=f.flags;switch(f.tag){case 0:case 11:case 15:Ca(r,f,h,p,l),Kl(8,f);break;case 23:break;case 22:var M=f.stateNode;f.memoizedState!==null?M._visibility&2?Ca(r,f,h,p,l):$l(r,f):(M._visibility|=2,Ca(r,f,h,p,l)),l&&E&2048&&Xc(f.alternate,f);break;case 24:Ca(r,f,h,p,l),l&&E&2048&&Qc(f.alternate,f);break;default:Ca(r,f,h,p,l)}t=t.sibling}}function $l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:$l(n,a),l&2048&&Xc(a.alternate,a);break;case 24:$l(n,a),l&2048&&Qc(a.alternate,a);break;default:$l(n,a)}t=t.sibling}}var Wl=8192;function Na(e){if(e.subtreeFlags&Wl)for(e=e.child;e!==null;)xh(e),e=e.sibling}function xh(e){switch(e.tag){case 26:Na(e),e.flags&Wl&&e.memoizedState!==null&&f1(Bt,e.memoizedState,e.memoizedProps);break;case 5:Na(e);break;case 3:case 4:var t=Bt;Bt=wr(e.stateNode.containerInfo),Na(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Wl,Wl=16777216,Na(e),Wl=t):Na(e));break;default:Na(e)}}function Sh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,zh(a,e)}Sh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jh(e),e=e.sibling}function jh(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&En(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pr(e)):Fl(e);break;default:Fl(e)}}function pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,zh(a,e)}Sh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),pr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,pr(t));break;default:pr(t)}e=e.sibling}}function zh(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Bl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var l=a.sibling,r=a.return;if(mh(a),a===n){Qe=null;break e}if(l!==null){l.return=r,Qe=l;break e}Qe=r}}}var _p={getCacheForType:function(e){var t=et(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},wp=typeof WeakMap=="function"?WeakMap:Map,ye=0,Te=null,fe=null,he=0,ve=0,bt=null,_n=!1,Ua=!1,Kc=!1,cn=0,Be=0,wn=0,aa=0,Jc=0,Rt=0,Ha=0,Pl=null,ot=null,$c=!1,Wc=0,br=1/0,yr=null,Rn=null,We=0,Mn=null,ka=null,La=0,Fc=0,Pc=null,Eh=null,Il=0,Ic=null;function yt(){if((ye&2)!==0&&he!==0)return he&-he;if(R.T!==null){var e=Aa;return e!==0?e:ro()}return Ls()}function Th(){Rt===0&&(Rt=(he&536870912)===0||ge?Ns():536870912);var e=wt.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===Te&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Ga(e,0),Dn(e,he,Rt,!1)),bl(e,n),((ye&2)===0||e!==Te)&&(e===Te&&((ye&2)===0&&(aa|=n),Be===4&&Dn(e,he,Rt,!1)),qt(e))}function Ah(e,t,n){if((ye&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||pl(e,t),l=a?Dp(e,t):no(e,t,!0),r=a;do{if(l===0){Ua&&!a&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Rp(n)){l=no(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;l=Pl;var p=h.current.memoizedState.isDehydrated;if(p&&(Ga(h,f).flags|=256),f=no(h,f,!1),f!==2){if(Kc&&!p){h.errorRecoveryDisabledLanes|=r,aa|=r,l=4;break e}r=ot,ot=l,r!==null&&(ot===null?ot=r:ot.push.apply(ot,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){Ga(e,0),Dn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Dn(a,t,Rt,!_n);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Wc+300-Ut(),10<l)){if(Dn(a,t,Rt,!_n),Ri(a,0,!0)!==0)break e;a.timeoutHandle=tm(_h.bind(null,a,n,ot,yr,$c,t,Rt,aa,Ha,_n,r,2,-0,0),l);break e}_h(a,n,ot,yr,$c,t,Rt,aa,Ha,_n,r,0,-0,0)}}break}while(!0);qt(e)}function _h(e,t,n,a,l,r,f,h,p,E,M,B,_,w){if(e.timeoutHandle=-1,B=t.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(ri={stylesheets:null,count:0,unsuspend:s1},xh(t),B=d1(),B!==null)){e.cancelPendingCommit=B(Ch.bind(null,e,t,r,n,a,l,f,h,p,M,1,_,w)),Dn(e,r,f,!E);return}Ch(e,t,r,n,a,l,f,h,p)}function Rp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!ht(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,a){t&=~Jc,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-dt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&Hs(e,n,t)}function vr(){return(ye&6)===0?(ei(0),!1):!0}function eo(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,It=Fn=null,bc(e),Oa=null,Zl=0,e=fe;for(;e!==null;)rh(e.alternate,e),e=e.return;fe=null}}function Ga(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Kp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),eo(),Te=e,fe=n=Wt(e.current,null),he=t,ve=0,bt=null,_n=!1,Ua=pl(e,t),Kc=!1,Ha=Rt=Jc=aa=wn=Be=0,ot=Pl=null,$c=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-dt(a),r=1<<l;t|=e[l],a&=~r}return cn=t,qi(),n}function wh(e,t){ue=null,R.H=rr,t===Nl||t===Wi?(t=Xf(),ve=3):t===Yf?(t=Xf(),ve=4):ve=t===Qd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Be=1,fr(e,Et(t,e.current)))}function Rh(){var e=R.H;return R.H=rr,e===null?rr:e}function Mh(){var e=R.A;return R.A=_p,e}function to(){Be=4,_n||(he&4194048)!==he&&wt.current!==null||(Ua=!0),(wn&134217727)===0&&(aa&134217727)===0||Te===null||Dn(Te,he,Rt,!1)}function no(e,t,n){var a=ye;ye|=2;var l=Rh(),r=Mh();(Te!==e||he!==t)&&(yr=null,Ga(e,t)),t=!1;var f=Be;e:do try{if(ve!==0&&fe!==null){var h=fe,p=bt;switch(ve){case 8:eo(),f=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var E=ve;if(ve=0,bt=null,qa(e,h,p,E),n&&Ua){f=0;break e}break;default:E=ve,ve=0,bt=null,qa(e,h,p,E)}}Mp(),f=Be;break}catch(M){wh(e,M)}while(!0);return t&&e.shellSuspendCounter++,It=Fn=null,ye=a,R.H=l,R.A=r,fe===null&&(Te=null,he=0,qi()),f}function Mp(){for(;fe!==null;)Dh(fe)}function Dp(e,t){var n=ye;ye|=2;var a=Rh(),l=Mh();Te!==e||he!==t?(yr=null,br=Ut()+500,Ga(e,t)):Ua=pl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,qa(e,t,r,1);break;case 2:case 9:if(Vf(r)){ve=0,bt=null,Oh(t);break}t=function(){ve!==2&&ve!==9||Te!==e||(ve=7),qt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Vf(r)?(ve=0,bt=null,Oh(t)):(ve=0,bt=null,qa(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||hm(f)){ve=0,bt=null;var p=h.sibling;if(p!==null)fe=p;else{var E=h.return;E!==null?(fe=E,xr(E)):fe=null}break t}}ve=0,bt=null,qa(e,t,r,5);break;case 6:ve=0,bt=null,qa(e,t,r,6);break;case 8:eo(),Be=6;break e;default:throw Error(c(462))}}Op();break}catch(M){wh(e,M)}while(!0);return It=Fn=null,R.H=a,R.A=l,ye=n,fe!==null?0:(Te=null,he=0,qi(),Be)}function Op(){for(;fe!==null&&!e0();)Dh(fe)}function Dh(e){var t=lh(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?xr(e):fe=t}function Oh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Pd(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Pd(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:bc(t);default:rh(n,t),t=fe=Bf(t,cn),t=lh(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?xr(e):fe=t}function qa(e,t,n,a){It=Fn=null,bc(t),Oa=null,Zl=0;var l=t.return;try{if(Sp(e,l,t,n,he)){Be=1,fr(e,Et(n,e.current)),fe=null;return}}catch(r){if(l!==null)throw fe=l,r;Be=1,fr(e,Et(n,e.current)),fe=null;return}t.flags&32768?(ge||a===1?e=!0:Ua||(he&536870912)!==0?e=!1:(_n=e=!0,(a===2||a===9||a===3||a===6)&&(a=wt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Bh(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){Bh(t,_n);return}e=t.return;var n=zp(t.alternate,t,cn);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Be===0&&(Be=5)}function Bh(e,t){do{var n=Ep(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Be=6,fe=null}function Ch(e,t,n,a,l,r,f,h,p){e.cancelPendingCommit=null;do Sr();while(We!==0);if((ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Qu,s0(e,n,r,f,h,p),e===Te&&(fe=Te=null,he=0),ka=t,Mn=e,La=n,Fc=r,Pc=l,Eh=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Up(Ai,function(){return Lh(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,l=Y.p,Y.p=2,f=ye,ye|=4;try{Tp(e,t,n)}finally{ye=f,Y.p=l,R.T=a}}We=1,Nh(),Uh(),Hh()}}function Nh(){if(We===1){We=0;var e=Mn,t=ka,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{bh(t,e);var r=go,f=zf(e.containerInfo),h=r.focusedElem,p=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&jf(h.ownerDocument.documentElement,h)){if(p!==null&&qu(h)){var E=p.start,M=p.end;if(M===void 0&&(M=E),"selectionStart"in h)h.selectionStart=E,h.selectionEnd=Math.min(M,h.value.length);else{var B=h.ownerDocument||document,_=B&&B.defaultView||window;if(_.getSelection){var w=_.getSelection(),ne=h.textContent.length,I=Math.min(p.start,ne),je=p.end===void 0?I:Math.min(p.end,ne);!w.extend&&I>je&&(f=je,je=I,I=f);var j=Sf(h,I),S=Sf(h,je);if(j&&S&&(w.rangeCount!==1||w.anchorNode!==j.node||w.anchorOffset!==j.offset||w.focusNode!==S.node||w.focusOffset!==S.offset)){var z=B.createRange();z.setStart(j.node,j.offset),w.removeAllRanges(),I>je?(w.addRange(z),w.extend(S.node,S.offset)):(z.setEnd(S.node,S.offset),w.addRange(z))}}}}for(B=[],w=h;w=w.parentNode;)w.nodeType===1&&B.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<B.length;h++){var O=B[h];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Br=!!mo,go=mo=null}finally{ye=l,Y.p=a,R.T=n}}e.current=t,We=2}}function Uh(){if(We===2){We=0;var e=Mn,t=ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var a=Y.p;Y.p=2;var l=ye;ye|=4;try{hh(e,t.alternate,t)}finally{ye=l,Y.p=a,R.T=n}}We=3}}function Hh(){if(We===4||We===3){We=0,t0();var e=Mn,t=ka,n=La,a=Eh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,ka=Mn=null,kh(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Rn=null),xu(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=R.T,l=Y.p,Y.p=2,R.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{R.T=t,Y.p=l}}(La&3)!==0&&Sr(),qt(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Ic?Il++:(Il=0,Ic=e):Il=0,ei(0)}}function kh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bl(t)))}function Sr(e){return Nh(),Uh(),Hh(),Lh()}function Lh(){if(We!==5)return!1;var e=Mn,t=Fc;Fc=0;var n=xu(La),a=R.T,l=Y.p;try{Y.p=32>n?32:n,R.T=null,n=Pc,Pc=null;var r=Mn,f=La;if(We=0,ka=Mn=null,La=0,(ye&6)!==0)throw Error(c(331));var h=ye;if(ye|=4,jh(r.current),vh(r,r.current,f,n),ye=h,ei(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(gl,r)}catch{}return!0}finally{Y.p=l,R.T=a,kh(e,t)}}function Gh(e,t,n){t=Et(n,t),t=Dc(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(bl(e,2),qt(e))}function Ee(e,t,n){if(e.tag===3)Gh(e,e,n);else for(;t!==null;){if(t.tag===3){Gh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rn===null||!Rn.has(a))){e=Et(n,e),n=Zd(2),a=xn(t,n,2),a!==null&&(Xd(n,a,t,e),bl(a,2),qt(a));break}}t=t.return}}function ao(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new wp;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Kc=!0,l.add(n),e=Bp.bind(null,e,t,n),t.then(e,e))}function Bp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(he&n)===n&&(Be===4||Be===3&&(he&62914560)===he&&300>Ut()-Wc?(ye&2)===0&&Ga(e,0):Jc|=n,Ha===he&&(Ha=0)),qt(e)}function qh(e,t){t===0&&(t=Us()),e=ja(e,t),e!==null&&(bl(e,t),qt(e))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qh(e,n)}function Np(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),qh(e,n)}function Up(e,t){return pu(e,t)}var jr=null,Ya=null,lo=!1,zr=!1,io=!1,la=0;function qt(e){e!==Ya&&e.next===null&&(Ya===null?jr=Ya=e:Ya=Ya.next=e),zr=!0,lo||(lo=!0,kp())}function ei(e,t){if(!io&&zr){io=!0;do for(var n=!1,a=jr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=l&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Xh(a,r))}else r=he,r=Ri(a,a===Te?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||pl(a,r)||(n=!0,Xh(a,r));a=a.next}while(n);io=!1}}function Hp(){Yh()}function Yh(){zr=lo=!1;var e=0;la!==0&&(Qp()&&(e=la),la=0);for(var t=Ut(),n=null,a=jr;a!==null;){var l=a.next,r=Vh(a,t);r===0?(a.next=null,n===null?jr=l:n.next=l,l===null&&(Ya=n)):(n=a,(e!==0||(r&3)!==0)&&(zr=!0)),a=l}ei(e)}function Vh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,p=l[f];p===-1?((h&n)===0||(h&a)!==0)&&(l[f]=o0(h,t)):p<=t&&(e.expiredLanes|=h),r&=~h}if(t=Te,n=he,n=Ri(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&bu(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||pl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&bu(a),xu(n)){case 2:case 8:n=Bs;break;case 32:n=Ai;break;case 268435456:n=Cs;break;default:n=Ai}return a=Zh.bind(null,e),n=pu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&bu(a),e.callbackPriority=2,e.callbackNode=null,2}function Zh(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var a=he;return a=Ri(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ah(e,a,t),Vh(e,Ut()),e.callbackNode!=null&&e.callbackNode===n?Zh.bind(null,e):null)}function Xh(e,t){if(Sr())return null;Ah(e,t,!0)}function kp(){Jp(function(){(ye&6)!==0?pu(Os,Hp):Yh()})}function ro(){return la===0&&(la=Ns()),la}function Qh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ci(""+e)}function Kh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Lp(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=Qh((l[it]||null).action),f=a.submitter;f&&(t=(t=f[it]||null)?Qh(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new ki("action","action",null,a,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var p=f?Kh(l,f):new FormData(l);Ac(n,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(h.preventDefault(),p=f?Kh(l,f):new FormData(l),Ac(n,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var uo=0;uo<Xu.length;uo++){var co=Xu[uo],Gp=co.toLowerCase(),qp=co[0].toUpperCase()+co.slice(1);Ot(Gp,"on"+qp)}Ot(Af,"onAnimationEnd"),Ot(_f,"onAnimationIteration"),Ot(wf,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(lp,"onTransitionRun"),Ot(ip,"onTransitionStart"),Ot(rp,"onTransitionCancel"),Ot(Rf,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ti));function Jh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],p=h.instance,E=h.currentTarget;if(h=h.listener,p!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=E;try{r(l)}catch(M){sr(M)}l.currentTarget=null,r=p}else for(f=0;f<a.length;f++){if(h=a[f],p=h.instance,E=h.currentTarget,h=h.listener,p!==r&&l.isPropagationStopped())break e;r=h,l.currentTarget=E;try{r(l)}catch(M){sr(M)}l.currentTarget=null,r=p}}}}function de(e,t){var n=t[Su];n===void 0&&(n=t[Su]=new Set);var a=e+"__bubble";n.has(a)||($h(t,e,2,!1),n.add(a))}function oo(e,t,n){var a=0;t&&(a|=4),$h(n,e,a,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function so(e){if(!e[Er]){e[Er]=!0,qs.forEach(function(n){n!=="selectionchange"&&(Yp.has(n)||oo(n,!1,e),oo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,oo("selectionchange",!1,t))}}function $h(e,t,n,a){switch(vm(t)){case 2:var l=g1;break;case 8:l=p1;break;default:l=To}n=l.bind(null,t,n,e),l=void 0,!Ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function fo(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===l)break;if(f===4)for(f=a.return;f!==null;){var p=f.tag;if((p===3||p===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;h!==null;){if(f=oa(h),f===null)return;if(p=f.tag,p===5||p===6||p===26||p===27){a=r=f;continue e}h=h.parentNode}}a=a.return}tf(function(){var E=r,M=Mu(n),B=[];e:{var _=Mf.get(e);if(_!==void 0){var w=ki,ne=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":w=U0;break;case"focusin":ne="focus",w=Uu;break;case"focusout":ne="blur",w=Uu;break;case"beforeblur":case"afterblur":w=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=E0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=L0;break;case Af:case _f:case wf:w=_0;break;case Rf:w=q0;break;case"scroll":case"scrollend":w=j0;break;case"wheel":w=V0;break;case"copy":case"cut":case"paste":w=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=uf;break;case"toggle":case"beforetoggle":w=X0}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),j=I?_!==null?_+"Capture":null:_;I=[];for(var S=E,z;S!==null;){var O=S;if(z=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||z===null||j===null||(O=xl(S,j),O!=null&&I.push(ni(S,O,z))),je)break;S=S.return}0<I.length&&(_=new w(_,ne,null,n,M),B.push({event:_,listeners:I}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",_&&n!==Ru&&(ne=n.relatedTarget||n.fromElement)&&(oa(ne)||ne[ca]))break e;if((w||_)&&(_=M.window===M?M:(_=M.ownerDocument)?_.defaultView||_.parentWindow:window,w?(ne=n.relatedTarget||n.toElement,w=E,ne=ne?oa(ne):null,ne!==null&&(je=m(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(w=null,ne=E),w!==ne)){if(I=lf,O="onMouseLeave",j="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=uf,O="onPointerLeave",j="onPointerEnter",S="pointer"),je=w==null?_:vl(w),z=ne==null?_:vl(ne),_=new I(O,S+"leave",w,n,M),_.target=je,_.relatedTarget=z,O=null,oa(M)===E&&(I=new I(j,S+"enter",ne,n,M),I.target=z,I.relatedTarget=je,O=I),je=O,w&&ne)t:{for(I=w,j=ne,S=0,z=I;z;z=Va(z))S++;for(z=0,O=j;O;O=Va(O))z++;for(;0<S-z;)I=Va(I),S--;for(;0<z-S;)j=Va(j),z--;for(;S--;){if(I===j||j!==null&&I===j.alternate)break t;I=Va(I),j=Va(j)}I=null}else I=null;w!==null&&Wh(B,_,w,I,!1),ne!==null&&je!==null&&Wh(B,je,ne,I,!0)}}e:{if(_=E?vl(E):window,w=_.nodeName&&_.nodeName.toLowerCase(),w==="select"||w==="input"&&_.type==="file")var K=gf;else if(hf(_))if(pf)K=tp;else{K=I0;var ce=P0}else w=_.nodeName,!w||w.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?E&&wu(E.elementType)&&(K=gf):K=ep;if(K&&(K=K(e,E))){mf(B,K,n,M);break e}ce&&ce(e,_,E),e==="focusout"&&E&&_.type==="number"&&E.memoizedProps.value!=null&&_u(_,"number",_.value)}switch(ce=E?vl(E):window,e){case"focusin":(hf(ce)||ce.contentEditable==="true")&&(va=ce,Yu=E,wl=null);break;case"focusout":wl=Yu=va=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Ef(B,n,M);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":Ef(B,n,M)}var J;if(ku)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ya?ff(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(cf&&n.locale!=="ko"&&(ya||te!=="onCompositionStart"?te==="onCompositionEnd"&&ya&&(J=nf()):(pn=M,Bu="value"in pn?pn.value:pn.textContent,ya=!0)),ce=Tr(E,te),0<ce.length&&(te=new rf(te,e,null,n,M),B.push({event:te,listeners:ce}),J?te.data=J:(J=df(n),J!==null&&(te.data=J)))),(J=K0?J0(e,n):$0(e,n))&&(te=Tr(E,"onBeforeInput"),0<te.length&&(ce=new rf("onBeforeInput","beforeinput",null,n,M),B.push({event:ce,listeners:te}),ce.data=J)),Lp(B,e,E,n,M)}Jh(B,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=xl(e,n),l!=null&&a.unshift(ni(e,l,r)),l=xl(e,t),l!=null&&a.push(ni(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wh(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,p=h.alternate,E=h.stateNode;if(h=h.tag,p!==null&&p===a)break;h!==5&&h!==26&&h!==27||E===null||(p=E,l?(E=xl(n,r),E!=null&&f.unshift(ni(n,E,p))):l||(E=xl(n,r),E!=null&&f.push(ni(n,E,p)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Vp=/\r\n?/g,Zp=/\u0000|\uFFFD/g;function Fh(e){return(typeof e=="string"?e:""+e).replace(Vp,`
`).replace(Zp,"")}function Ph(e,t){return t=Fh(t),Fh(e)===t}function Ar(){}function Se(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ga(e,""+a);break;case"className":Di(e,"class",a);break;case"tabIndex":Di(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(e,n,a);break;case"style":Is(e,a,r);break;case"data":if(t!=="object"){Di(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ci(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",l.name,l,null),Se(e,t,"formEncType",l.formEncType,l,null),Se(e,t,"formMethod",l.formMethod,l,null),Se(e,t,"formTarget",l.formTarget,l,null)):(Se(e,t,"encType",l.encType,l,null),Se(e,t,"method",l.method,l,null),Se(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ci(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ci(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Mi(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=x0.get(n)||n,Mi(e,n,a))}}function ho(e,t,n,a,l,r){switch(n){case"style":Is(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ys.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[it]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Mi(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,r,f,n,null)}}l&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=l=null,p=null,E=null;for(a in n)if(n.hasOwnProperty(a)){var M=n[a];if(M!=null)switch(a){case"name":l=M;break;case"type":f=M;break;case"checked":p=M;break;case"defaultChecked":E=M;break;case"value":r=M;break;case"defaultValue":h=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:Se(e,t,a,M,n,null)}}$s(e,r,h,p,E,f,l,!1),Oi(e);return;case"select":de("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,l,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ma(e,!!a,t,!1):n!=null&&ma(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Se(e,t,f,h,n,null)}Fs(e,a,l,r),Oi(e);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,p,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ti.length;a++)de(ti[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Se(e,t,E,a,n,null)}return;default:if(wu(t)){for(M in n)n.hasOwnProperty(M)&&(a=n[M],a!==void 0&&ho(e,t,M,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function Xp(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,h=null,p=null,E=null,M=null;for(w in n){var B=n[w];if(n.hasOwnProperty(w)&&B!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":p=B;default:a.hasOwnProperty(w)||Se(e,t,w,null,a,B)}}for(var _ in a){var w=a[_];if(B=n[_],a.hasOwnProperty(_)&&(w!=null||B!=null))switch(_){case"type":r=w;break;case"name":l=w;break;case"checked":E=w;break;case"defaultChecked":M=w;break;case"value":f=w;break;case"defaultValue":h=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,t));break;default:w!==B&&Se(e,t,_,w,a,B)}}Au(e,f,h,p,E,M,r,l);return;case"select":w=f=h=_=null;for(r in n)if(p=n[r],n.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":w=p;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,p)}for(l in a)if(r=a[l],p=n[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":_=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==p&&Se(e,t,l,r,a,p)}t=h,n=f,a=w,_!=null?ma(e,!!n,_,!1):!!a!=!!n&&(t!=null?ma(e,!!n,t,!0):ma(e,!!n,n?[]:"",!1));return;case"textarea":w=_=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":_=l;break;case"defaultValue":w=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&Se(e,t,f,l,a,r)}Ws(e,_,w);return;case"option":for(var ne in n)if(_=n[ne],n.hasOwnProperty(ne)&&_!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,_)}for(p in a)if(_=a[p],w=n[p],a.hasOwnProperty(p)&&_!==w&&(_!=null||w!=null))switch(p){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Se(e,t,p,_,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)_=n[I],n.hasOwnProperty(I)&&_!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,_);for(E in a)if(_=a[E],w=n[E],a.hasOwnProperty(E)&&_!==w&&(_!=null||w!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:Se(e,t,E,_,a,w)}return;default:if(wu(t)){for(var je in n)_=n[je],n.hasOwnProperty(je)&&_!==void 0&&!a.hasOwnProperty(je)&&ho(e,t,je,void 0,a,_);for(M in a)_=a[M],w=n[M],!a.hasOwnProperty(M)||_===w||_===void 0&&w===void 0||ho(e,t,M,_,a,w);return}}for(var j in n)_=n[j],n.hasOwnProperty(j)&&_!=null&&!a.hasOwnProperty(j)&&Se(e,t,j,null,a,_);for(B in a)_=a[B],w=n[B],!a.hasOwnProperty(B)||_===w||_==null&&w==null||Se(e,t,B,_,a,w)}var mo=null,go=null;function _r(e){return e.nodeType===9?e:e.ownerDocument}function Ih(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function em(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=null;function Qp(){var e=window.event;return e&&e.type==="popstate"?e===bo?!1:(bo=e,!0):(bo=null,!1)}var tm=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,Jp=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(e){return nm.resolve(null).then(e).catch($p)}:tm;function $p(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function am(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&ai(f.documentElement),n&2&&ai(f.body),n&4)for(n=f.head,ai(n),f=n.firstChild;f;){var h=f.nextSibling,p=f.nodeName;f[yl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(l===0){e.removeChild(r),fi(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);fi(t)}function yo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yo(n),ju(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Wp(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[yl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ct(e.nextSibling),e===null)break}return null}function Fp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ct(e.nextSibling),e===null))return null;return e}function vo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Pp(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var xo=null;function lm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function im(e,t,n){switch(t=_r(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ai(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ju(e)}var Mt=new Map,rm=new Set;function wr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=Y.d;Y.d={f:Ip,r:e1,D:t1,C:n1,L:a1,m:l1,X:r1,S:i1,M:u1};function Ip(){var e=on.f(),t=vr();return e||t}function e1(e){var t=sa(e);t!==null&&t.tag===5&&t.type==="form"?Ad(t):on.r(e)}var Za=typeof document>"u"?null:document;function um(e,t,n){var a=Za;if(a&&typeof t=="string"&&t){var l=zt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),rm.has(l)||(rm.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function t1(e){on.D(e),um("dns-prefetch",e,null)}function n1(e,t){on.C(e,t),um("preconnect",e,t)}function a1(e,t,n){on.L(e,t,n);var a=Za;if(a&&e&&t){var l='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+zt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+zt(n.imageSizes)+'"]')):l+='[href="'+zt(e)+'"]';var r=l;switch(t){case"style":r=Xa(e);break;case"script":r=Qa(e)}Mt.has(r)||(e=A({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(li(r))||t==="script"&&a.querySelector(ii(r))||(t=a.createElement("link"),Fe(t,"link",e),Ze(t),a.head.appendChild(t)))}}function l1(e,t){on.m(e,t);var n=Za;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+zt(a)+'"][href="'+zt(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Qa(e)}if(!Mt.has(r)&&(e=A({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ii(r)))return}a=n.createElement("link"),Fe(a,"link",e),Ze(a),n.head.appendChild(a)}}}function i1(e,t,n){on.S(e,t,n);var a=Za;if(a&&e){var l=fa(a).hoistableStyles,r=Xa(e);t=t||"default";var f=l.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(li(r)))h.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&So(e,n);var p=f=a.createElement("link");Ze(p),Fe(p,"link",e),p._p=new Promise(function(E,M){p.onload=E,p.onerror=M}),p.addEventListener("load",function(){h.loading|=1}),p.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Rr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},l.set(r,f)}}}function r1(e,t){on.X(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ii(l)),r||(e=A({src:e,async:!0},t),(t=Mt.get(l))&&jo(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function u1(e,t){on.M(e,t);var n=Za;if(n&&e){var a=fa(n).hoistableScripts,l=Qa(e),r=a.get(l);r||(r=n.querySelector(ii(l)),r||(e=A({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&jo(e,t),r=n.createElement("script"),Ze(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function cm(e,t,n,a){var l=(l=ee.current)?wr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xa(n.href),n=fa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xa(n.href);var r=fa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(li(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||c1(l,e,n,f.state))),t&&a===null)throw Error(c(528,""));return f}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qa(n),n=fa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Xa(e){return'href="'+zt(e)+'"'}function li(e){return'link[rel="stylesheet"]['+e+"]"}function om(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function c1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Ze(t),e.head.appendChild(t))}function Qa(e){return'[src="'+zt(e)+'"]'}function ii(e){return"script[async]"+e}function sm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+zt(n.href)+'"]');if(a)return t.instance=a,Ze(a),a;var l=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),Fe(a,"style",l),Rr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Xa(n.href);var r=e.querySelector(li(l));if(r)return t.state.loading|=4,t.instance=r,Ze(r),r;a=om(n),(l=Mt.get(l))&&So(a,l),r=(e.ownerDocument||e).createElement("link"),Ze(r);var f=r;return f._p=new Promise(function(h,p){f.onload=h,f.onerror=p}),Fe(r,"link",a),t.state.loading|=4,Rr(r,n.precedence,e),t.instance=r;case"script":return r=Qa(n.src),(l=e.querySelector(ii(r)))?(t.instance=l,Ze(l),l):(a=n,(l=Mt.get(r))&&(a=A({},n),jo(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Fe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Rr(a,n.precedence,e));return t.instance}function Rr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function So(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mr=null;function fm(e,t,n){if(Mr===null){var a=new Map,l=Mr=new Map;l.set(n,a)}else l=Mr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[yl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function dm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function o1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ri=null;function s1(){}function f1(e,t,n){if(ri===null)throw Error(c(475));var a=ri;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Xa(n.href),r=e.querySelector(li(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Dr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ze(r);return}r=e.ownerDocument||e,n=om(n),(l=Mt.get(l))&&So(n,l),r=r.createElement("link"),Ze(r);var f=r;f._p=new Promise(function(h,p){f.onload=h,f.onerror=p}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Dr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function d1(){if(ri===null)throw Error(c(475));var e=ri;return e.stylesheets&&e.count===0&&zo(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&zo(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Dr(){if(this.count--,this.count===0){if(this.stylesheets)zo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Or=null;function zo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Or=new Map,t.forEach(h1,e),Or=null,Dr.call(e))}function h1(e,t){if(!(t.state.loading&4)){var n=Or.get(e);if(n)var a=n.get(null);else{n=new Map,Or.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Dr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ui={$$typeof:X,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function m1(e,t,n,a,l,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.hiddenUpdates=yu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function mm(e,t,n,a,l,r,f,h,p,E,M,B){return e=new m1(e,t,n,f,h,p,E,B),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=ac(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},uc(r),e}function gm(e){return e?(e=za,e):za}function pm(e,t,n,a,l,r){l=gm(l),a.context===null?a.context=l:a.pendingContext=l,a=vn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=xn(e,a,t),n!==null&&(vt(n,e,t),Hl(n,e,t))}function bm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eo(e,t){bm(e,t),(e=e.alternate)&&bm(e,t)}function ym(e){if(e.tag===13){var t=ja(e,67108864);t!==null&&vt(t,e,67108864),Eo(e,67108864)}}var Br=!0;function g1(e,t,n,a){var l=R.T;R.T=null;var r=Y.p;try{Y.p=2,To(e,t,n,a)}finally{Y.p=r,R.T=l}}function p1(e,t,n,a){var l=R.T;R.T=null;var r=Y.p;try{Y.p=8,To(e,t,n,a)}finally{Y.p=r,R.T=l}}function To(e,t,n,a){if(Br){var l=Ao(a);if(l===null)fo(e,t,a,Cr,n),xm(e,a);else if(y1(l,e,t,n,a))a.stopPropagation();else if(xm(e,a),t&4&&-1<b1.indexOf(e)){for(;l!==null;){var r=sa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=qn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var p=1<<31-dt(f);h.entanglements[1]|=p,f&=~p}qt(r),(ye&6)===0&&(br=Ut()+500,ei(0))}}break;case 13:h=ja(r,2),h!==null&&vt(h,r,2),vr(),Eo(r,2)}if(r=Ao(a),r===null&&fo(e,t,a,Cr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else fo(e,t,a,null,n)}}function Ao(e){return e=Mu(e),_o(e)}var Cr=null;function _o(e){if(Cr=null,e=oa(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cr=e,null}function vm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(n0()){case Os:return 2;case Bs:return 8;case Ai:case a0:return 32;case Cs:return 268435456;default:return 32}default:return 32}}var wo=!1,Bn=null,Cn=null,Nn=null,ci=new Map,oi=new Map,Un=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xm(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function si(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=sa(t),t!==null&&ym(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function y1(e,t,n,a,l){switch(t){case"focusin":return Bn=si(Bn,e,t,n,a,l),!0;case"dragenter":return Cn=si(Cn,e,t,n,a,l),!0;case"mouseover":return Nn=si(Nn,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return ci.set(r,si(ci.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,oi.set(r,si(oi.get(r)||null,e,t,n,a,l)),!0}return!1}function Sm(e){var t=oa(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,f0(e.priority,function(){if(n.tag===13){var a=yt();a=vu(a);var l=ja(n,a);l!==null&&vt(l,n,a),Eo(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ao(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ru=a,n.target.dispatchEvent(a),Ru=null}else return t=sa(n),t!==null&&ym(t),e.blockedOn=n,!1;t.shift()}return!0}function jm(e,t,n){Nr(e)&&n.delete(t)}function v1(){wo=!1,Bn!==null&&Nr(Bn)&&(Bn=null),Cn!==null&&Nr(Cn)&&(Cn=null),Nn!==null&&Nr(Nn)&&(Nn=null),ci.forEach(jm),oi.forEach(jm)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,wo||(wo=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,v1)))}var Hr=null;function zm(e){Hr!==e&&(Hr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Hr===e&&(Hr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(_o(a||n)===null)continue;break}var r=sa(n);r!==null&&(e.splice(t,3),t-=3,Ac(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function fi(e){function t(p){return Ur(p,e)}Bn!==null&&Ur(Bn,e),Cn!==null&&Ur(Cn,e),Nn!==null&&Ur(Nn,e),ci.forEach(t),oi.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Sm(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[it]||null;if(typeof r=="function")f||zm(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[it]||null)h=f.formAction;else if(_o(l)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),zm(n)}}}function Ro(e){this._internalRoot=e}kr.prototype.render=Ro.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=yt();pm(n,a,e,t,null,null)},kr.prototype.unmount=Ro.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pm(e.current,2,null,e,null,null),vr(),t[ca]=null}};function kr(e){this._internalRoot=e}kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Sm(e)}};var Em=u.version;if(Em!=="19.1.0")throw Error(c(527,Em,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var x1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{gl=Lr.inject(x1),ft=Lr}catch{}}return hi.createRoot=function(e,t){if(!d(e))throw Error(c(299));var n=!1,a="",l=Gd,r=qd,f=Yd,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=mm(e,1,!1,null,null,n,a,l,r,f,h,null),e[ca]=t.current,so(e),new Ro(t)},hi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(c(299));var a=!1,l="",r=Gd,f=qd,h=Yd,p=null,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(E=n.formState)),t=mm(e,1,!0,t,n??null,a,l,r,f,h,p,E),t.context=gm(null),n=t.current,a=yt(),a=vu(a),l=vn(a),l.callback=null,xn(n,l,a),n=a,t.current.lanes=n,bl(t,n),qt(t),e[ca]=t.current,so(e),new kr(t)},hi.version="19.1.0",hi}var Cm;function D1(){if(Cm)return Oo.exports;Cm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Oo.exports=M1(),Oo.exports}var O1=D1();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nm="popstate";function B1(i={}){function u(c,d){let{pathname:m,search:b,hash:T}=c.location;return os("",{pathname:m,search:b,hash:T},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(c,d){return typeof d=="string"?d:xi(d)}return N1(u,o,null,i)}function De(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Vt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function C1(){return Math.random().toString(36).substring(2,10)}function Um(i,u){return{usr:i.state,key:i.key,idx:u}}function os(i,u,o=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?dl(u):u,state:o,key:u&&u.key||c||C1()}}function xi({pathname:i="/",search:u="",hash:o=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function dl(i){let u={};if(i){let o=i.indexOf("#");o>=0&&(u.hash=i.substring(o),i=i.substring(0,o));let c=i.indexOf("?");c>=0&&(u.search=i.substring(c),i=i.substring(0,c)),i&&(u.pathname=i)}return u}function N1(i,u,o,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,b=d.history,T="POP",v=null,g=A();g==null&&(g=0,b.replaceState({...b.state,idx:g},""));function A(){return(b.state||{idx:null}).idx}function C(){T="POP";let Z=A(),H=Z==null?null:Z-g;g=Z,v&&v({action:T,location:q.location,delta:H})}function U(Z,H){T="PUSH";let $=os(q.location,Z,H);g=A()+1;let X=Um($,g),ae=q.createHref($);try{b.pushState(X,"",ae)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;d.location.assign(ae)}m&&v&&v({action:T,location:q.location,delta:1})}function k(Z,H){T="REPLACE";let $=os(q.location,Z,H);g=A();let X=Um($,g),ae=q.createHref($);b.replaceState(X,"",ae),m&&v&&v({action:T,location:q.location,delta:0})}function L(Z){return U1(Z)}let q={get action(){return T},get location(){return i(d,b)},listen(Z){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Nm,C),v=Z,()=>{d.removeEventListener(Nm,C),v=null}},createHref(Z){return u(d,Z)},createURL:L,encodeLocation(Z){let H=L(Z);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:U,replace:k,go(Z){return b.go(Z)}};return q}function U1(i,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),De(o,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:xi(i);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=o+c),new URL(c,o)}function hg(i,u,o="/"){return H1(i,u,o,!1)}function H1(i,u,o,c){let d=typeof u=="string"?dl(u):u,m=dn(d.pathname||"/",o);if(m==null)return null;let b=mg(i);k1(b);let T=null;for(let v=0;T==null&&v<b.length;++v){let g=$1(m);T=K1(b[v],g,c)}return T}function mg(i,u=[],o=[],c=""){let d=(m,b,T)=>{let v={relativePath:T===void 0?m.path||"":T,caseSensitive:m.caseSensitive===!0,childrenIndex:b,route:m};v.relativePath.startsWith("/")&&(De(v.relativePath.startsWith(c),`Absolute route path "${v.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(c.length));let g=fn([c,v.relativePath]),A=o.concat(v);m.children&&m.children.length>0&&(De(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),mg(m.children,u,A,g)),!(m.path==null&&!m.index)&&u.push({path:g,score:X1(g,m.index),routesMeta:A})};return i.forEach((m,b)=>{if(m.path===""||!m.path?.includes("?"))d(m,b);else for(let T of gg(m.path))d(m,b,T)}),u}function gg(i){let u=i.split("/");if(u.length===0)return[];let[o,...c]=u,d=o.endsWith("?"),m=o.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let b=gg(c.join("/")),T=[];return T.push(...b.map(v=>v===""?m:[m,v].join("/"))),d&&T.push(...b),T.map(v=>i.startsWith("/")&&v===""?"/":v)}function k1(i){i.sort((u,o)=>u.score!==o.score?o.score-u.score:Q1(u.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var L1=/^:[\w-]+$/,G1=3,q1=2,Y1=1,V1=10,Z1=-2,Hm=i=>i==="*";function X1(i,u){let o=i.split("/"),c=o.length;return o.some(Hm)&&(c+=Z1),u&&(c+=q1),o.filter(d=>!Hm(d)).reduce((d,m)=>d+(L1.test(m)?G1:m===""?Y1:V1),c)}function Q1(i,u){return i.length===u.length&&i.slice(0,-1).every((c,d)=>c===u[d])?i[i.length-1]-u[u.length-1]:0}function K1(i,u,o=!1){let{routesMeta:c}=i,d={},m="/",b=[];for(let T=0;T<c.length;++T){let v=c[T],g=T===c.length-1,A=m==="/"?u:u.slice(m.length)||"/",C=au({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},A),U=v.route;if(!C&&g&&o&&!c[c.length-1].route.index&&(C=au({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},A)),!C)return null;Object.assign(d,C.params),b.push({params:d,pathname:fn([m,C.pathname]),pathnameBase:I1(fn([m,C.pathnameBase])),route:U}),C.pathnameBase!=="/"&&(m=fn([m,C.pathnameBase]))}return b}function au(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,c]=J1(i.path,i.caseSensitive,i.end),d=u.match(o);if(!d)return null;let m=d[0],b=m.replace(/(.)\/+$/,"$1"),T=d.slice(1);return{params:c.reduce((g,{paramName:A,isOptional:C},U)=>{if(A==="*"){let L=T[U]||"";b=m.slice(0,m.length-L.length).replace(/(.)\/+$/,"$1")}const k=T[U];return C&&!k?g[A]=void 0:g[A]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:b,pattern:i}}function J1(i,u=!1,o=!0){Vt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,T,v)=>(c.push({paramName:T,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),c]}function $1(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Vt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function dn(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,c=i.charAt(o);return c&&c!=="/"?null:i.slice(o)||"/"}function W1(i,u="/"){let{pathname:o,search:c="",hash:d=""}=typeof i=="string"?dl(i):i;return{pathname:o?o.startsWith("/")?o:F1(o,u):u,search:eb(c),hash:tb(d)}}function F1(i,u){let o=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function Uo(i,u,o,c){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P1(i){return i.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function pg(i){let u=P1(i);return u.map((o,c)=>c===u.length-1?o.pathname:o.pathnameBase)}function bg(i,u,o,c=!1){let d;typeof i=="string"?d=dl(i):(d={...i},De(!d.pathname||!d.pathname.includes("?"),Uo("?","pathname","search",d)),De(!d.pathname||!d.pathname.includes("#"),Uo("#","pathname","hash",d)),De(!d.search||!d.search.includes("#"),Uo("#","search","hash",d)));let m=i===""||d.pathname==="",b=m?"/":d.pathname,T;if(b==null)T=o;else{let C=u.length-1;if(!c&&b.startsWith("..")){let U=b.split("/");for(;U[0]==="..";)U.shift(),C-=1;d.pathname=U.join("/")}T=C>=0?u[C]:"/"}let v=W1(d,T),g=b&&b!=="/"&&b.endsWith("/"),A=(m||b===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(g||A)&&(v.pathname+="/"),v}var fn=i=>i.join("/").replace(/\/\/+/g,"/"),I1=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),eb=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,tb=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function nb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var yg=["POST","PUT","PATCH","DELETE"];new Set(yg);var ab=["GET",...yg];new Set(ab);var hl=D.createContext(null);hl.displayName="DataRouter";var cu=D.createContext(null);cu.displayName="DataRouterState";D.createContext(!1);var vg=D.createContext({isTransitioning:!1});vg.displayName="ViewTransition";var lb=D.createContext(new Map);lb.displayName="Fetchers";var ib=D.createContext(null);ib.displayName="Await";var Zt=D.createContext(null);Zt.displayName="Navigation";var ji=D.createContext(null);ji.displayName="Location";var hn=D.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var vs=D.createContext(null);vs.displayName="RouteError";function rb(i,{relative:u}={}){De(zi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=D.useContext(Zt),{hash:d,pathname:m,search:b}=Ei(i,{relative:u}),T=m;return o!=="/"&&(T=m==="/"?o:fn([o,m])),c.createHref({pathname:T,search:b,hash:d})}function zi(){return D.useContext(ji)!=null}function Ln(){return De(zi(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(ji).location}var xg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sg(i){D.useContext(Zt).static||D.useLayoutEffect(i)}function ub(){let{isDataRoute:i}=D.useContext(hn);return i?xb():cb()}function cb(){De(zi(),"useNavigate() may be used only in the context of a <Router> component.");let i=D.useContext(hl),{basename:u,navigator:o}=D.useContext(Zt),{matches:c}=D.useContext(hn),{pathname:d}=Ln(),m=JSON.stringify(pg(c)),b=D.useRef(!1);return Sg(()=>{b.current=!0}),D.useCallback((v,g={})=>{if(Vt(b.current,xg),!b.current)return;if(typeof v=="number"){o.go(v);return}let A=bg(v,JSON.parse(m),d,g.relative==="path");i==null&&u!=="/"&&(A.pathname=A.pathname==="/"?u:fn([u,A.pathname])),(g.replace?o.replace:o.push)(A,g.state,g)},[u,o,m,d,i])}D.createContext(null);function Ei(i,{relative:u}={}){let{matches:o}=D.useContext(hn),{pathname:c}=Ln(),d=JSON.stringify(pg(o));return D.useMemo(()=>bg(i,JSON.parse(d),c,u==="path"),[i,d,c,u])}function ob(i,u){return jg(i,u)}function jg(i,u,o,c){De(zi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=D.useContext(Zt),{matches:m}=D.useContext(hn),b=m[m.length-1],T=b?b.params:{},v=b?b.pathname:"/",g=b?b.pathnameBase:"/",A=b&&b.route;{let H=A&&A.path||"";zg(v,!A||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let C=Ln(),U;if(u){let H=typeof u=="string"?dl(u):u;De(g==="/"||H.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${H.pathname}" was given in the \`location\` prop.`),U=H}else U=C;let k=U.pathname||"/",L=k;if(g!=="/"){let H=g.replace(/^\//,"").split("/");L="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=hg(i,{pathname:L});Vt(A||q!=null,`No routes matched location "${U.pathname}${U.search}${U.hash}" `),Vt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=mb(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},T,H.params),pathname:fn([g,d.encodeLocation?d.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:fn([g,d.encodeLocation?d.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),m,o,c);return u&&Z?D.createElement(ji.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...U},navigationType:"POP"}},Z):Z}function sb(){let i=vb(),u=nb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",i),b=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:m},"ErrorBoundary")," or"," ",D.createElement("code",{style:m},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},u),o?D.createElement("pre",{style:d},o):null,b)}var fb=D.createElement(sb,null),db=class extends D.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){console.error("React Router caught the following error during render",i,u)}render(){return this.state.error!==void 0?D.createElement(hn.Provider,{value:this.props.routeContext},D.createElement(vs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hb({routeContext:i,match:u,children:o}){let c=D.useContext(hl);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),D.createElement(hn.Provider,{value:i},o)}function mb(i,u=[],o=null,c=null){if(i==null){if(!o)return null;if(o.errors)i=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let d=i,m=o?.errors;if(m!=null){let v=d.findIndex(g=>g.route.id&&m?.[g.route.id]!==void 0);De(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let b=!1,T=-1;if(o)for(let v=0;v<d.length;v++){let g=d[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(T=v),g.route.id){let{loaderData:A,errors:C}=o,U=g.route.loader&&!A.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||U){b=!0,T>=0?d=d.slice(0,T+1):d=[d[0]];break}}}return d.reduceRight((v,g,A)=>{let C,U=!1,k=null,L=null;o&&(C=m&&g.route.id?m[g.route.id]:void 0,k=g.route.errorElement||fb,b&&(T<0&&A===0?(zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),U=!0,L=null):T===A&&(U=!0,L=g.route.hydrateFallbackElement||null)));let q=u.concat(d.slice(0,A+1)),Z=()=>{let H;return C?H=k:U?H=L:g.route.Component?H=D.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=v,D.createElement(hb,{match:g,routeContext:{outlet:v,matches:q,isDataRoute:o!=null},children:H})};return o&&(g.route.ErrorBoundary||g.route.errorElement||A===0)?D.createElement(db,{location:o.location,revalidation:o.revalidation,component:k,error:C,children:Z(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):Z()},null)}function xs(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gb(i){let u=D.useContext(hl);return De(u,xs(i)),u}function pb(i){let u=D.useContext(cu);return De(u,xs(i)),u}function bb(i){let u=D.useContext(hn);return De(u,xs(i)),u}function Ss(i){let u=bb(i),o=u.matches[u.matches.length-1];return De(o.route.id,`${i} can only be used on routes that contain a unique "id"`),o.route.id}function yb(){return Ss("useRouteId")}function vb(){let i=D.useContext(vs),u=pb("useRouteError"),o=Ss("useRouteError");return i!==void 0?i:u.errors?.[o]}function xb(){let{router:i}=gb("useNavigate"),u=Ss("useNavigate"),o=D.useRef(!1);return Sg(()=>{o.current=!0}),D.useCallback(async(d,m={})=>{Vt(o.current,xg),o.current&&(typeof d=="number"?i.navigate(d):await i.navigate(d,{fromRouteId:u,...m}))},[i,u])}var km={};function zg(i,u,o){!u&&!km[i]&&(km[i]=!0,Vt(!1,o))}D.memo(Sb);function Sb({routes:i,future:u,state:o}){return jg(i,void 0,o,u)}function $r(i){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jb({basename:i="/",children:u=null,location:o,navigationType:c="POP",navigator:d,static:m=!1}){De(!zi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=i.replace(/^\/*/,"/"),T=D.useMemo(()=>({basename:b,navigator:d,static:m,future:{}}),[b,d,m]);typeof o=="string"&&(o=dl(o));let{pathname:v="/",search:g="",hash:A="",state:C=null,key:U="default"}=o,k=D.useMemo(()=>{let L=dn(v,b);return L==null?null:{location:{pathname:L,search:g,hash:A,state:C,key:U},navigationType:c}},[b,v,g,A,C,U,c]);return Vt(k!=null,`<Router basename="${b}"> is not able to match the URL "${v}${g}${A}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:D.createElement(Zt.Provider,{value:T},D.createElement(ji.Provider,{children:u,value:k}))}function zb({children:i,location:u}){return ob(ss(i),u)}function ss(i,u=[]){let o=[];return D.Children.forEach(i,(c,d)=>{if(!D.isValidElement(c))return;let m=[...u,d];if(c.type===D.Fragment){o.push.apply(o,ss(c.props.children,m));return}De(c.type===$r,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=ss(c.props.children,m)),o.push(b)}),o}var Wr="get",Fr="application/x-www-form-urlencoded";function ou(i){return i!=null&&typeof i.tagName=="string"}function Eb(i){return ou(i)&&i.tagName.toLowerCase()==="button"}function Tb(i){return ou(i)&&i.tagName.toLowerCase()==="form"}function Ab(i){return ou(i)&&i.tagName.toLowerCase()==="input"}function _b(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function wb(i,u){return i.button===0&&(!u||u==="_self")&&!_b(i)}var Gr=null;function Rb(){if(Gr===null)try{new FormData(document.createElement("form"),0),Gr=!1}catch{Gr=!0}return Gr}var Mb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ho(i){return i!=null&&!Mb.has(i)?(Vt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fr}"`),null):i}function Db(i,u){let o,c,d,m,b;if(Tb(i)){let T=i.getAttribute("action");c=T?dn(T,u):null,o=i.getAttribute("method")||Wr,d=Ho(i.getAttribute("enctype"))||Fr,m=new FormData(i)}else if(Eb(i)||Ab(i)&&(i.type==="submit"||i.type==="image")){let T=i.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=i.getAttribute("formaction")||T.getAttribute("action");if(c=v?dn(v,u):null,o=i.getAttribute("formmethod")||T.getAttribute("method")||Wr,d=Ho(i.getAttribute("formenctype"))||Ho(T.getAttribute("enctype"))||Fr,m=new FormData(T,i),!Rb()){let{name:g,type:A,value:C}=i;if(A==="image"){let U=g?`${g}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else g&&m.append(g,C)}}else{if(ou(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Wr,c=null,d=Fr,b=i}return m&&d==="text/plain"&&(b=m,m=void 0),{action:c,method:o.toLowerCase(),encType:d,formData:m,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function js(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Ob(i,u,o){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${o}`:u&&dn(c.pathname,u)==="/"?c.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${o}`,c}async function Bb(i,u){if(i.id in u)return u[i.id];try{let o=await import(i.module);return u[i.id]=o,o}catch(o){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Cb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Nb(i,u,o){let c=await Promise.all(i.map(async d=>{let m=u.routes[d.route.id];if(m){let b=await Bb(m,o);return b.links?b.links():[]}return[]}));return Lb(c.flat(1).filter(Cb).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Lm(i,u,o,c,d,m){let b=(v,g)=>o[g]?v.route.id!==o[g].route.id:!0,T=(v,g)=>o[g].pathname!==v.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==v.params["*"];return m==="assets"?u.filter((v,g)=>b(v,g)||T(v,g)):m==="data"?u.filter((v,g)=>{let A=c.routes[v.route.id];if(!A||!A.hasLoader)return!1;if(b(v,g)||T(v,g))return!0;if(v.route.shouldRevalidate){let C=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function Ub(i,u,{includeHydrateFallback:o}={}){return Hb(i.map(c=>{let d=u.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function Hb(i){return[...new Set(i)]}function kb(i){let u={},o=Object.keys(i).sort();for(let c of o)u[c]=i[c];return u}function Lb(i,u){let o=new Set;return new Set(u),i.reduce((c,d)=>{let m=JSON.stringify(kb(d));return o.has(m)||(o.add(m),c.push({key:m,link:d})),c},[])}function Eg(){let i=D.useContext(hl);return js(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Gb(){let i=D.useContext(cu);return js(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var zs=D.createContext(void 0);zs.displayName="FrameworkContext";function Tg(){let i=D.useContext(zs);return js(i,"You must render this element inside a <HydratedRouter> element"),i}function qb(i,u){let o=D.useContext(zs),[c,d]=D.useState(!1),[m,b]=D.useState(!1),{onFocus:T,onBlur:v,onMouseEnter:g,onMouseLeave:A,onTouchStart:C}=u,U=D.useRef(null);D.useEffect(()=>{if(i==="render"&&b(!0),i==="viewport"){let q=H=>{H.forEach($=>{b($.isIntersecting)})},Z=new IntersectionObserver(q,{threshold:.5});return U.current&&Z.observe(U.current),()=>{Z.disconnect()}}},[i]),D.useEffect(()=>{if(c){let q=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(q)}}},[c]);let k=()=>{d(!0)},L=()=>{d(!1),b(!1)};return o?i!=="intent"?[m,U,{}]:[m,U,{onFocus:mi(T,k),onBlur:mi(v,L),onMouseEnter:mi(g,k),onMouseLeave:mi(A,L),onTouchStart:mi(C,k)}]:[!1,U,{}]}function mi(i,u){return o=>{i&&i(o),o.defaultPrevented||u(o)}}function Yb({page:i,...u}){let{router:o}=Eg(),c=D.useMemo(()=>hg(o.routes,i,o.basename),[o.routes,i,o.basename]);return c?D.createElement(Zb,{page:i,matches:c,...u}):null}function Vb(i){let{manifest:u,routeModules:o}=Tg(),[c,d]=D.useState([]);return D.useEffect(()=>{let m=!1;return Nb(i,u,o).then(b=>{m||d(b)}),()=>{m=!0}},[i,u,o]),c}function Zb({page:i,matches:u,...o}){let c=Ln(),{manifest:d,routeModules:m}=Tg(),{basename:b}=Eg(),{loaderData:T,matches:v}=Gb(),g=D.useMemo(()=>Lm(i,u,v,d,c,"data"),[i,u,v,d,c]),A=D.useMemo(()=>Lm(i,u,v,d,c,"assets"),[i,u,v,d,c]),C=D.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let L=new Set,q=!1;if(u.forEach(H=>{let $=d.routes[H.route.id];!$||!$.hasLoader||(!g.some(X=>X.route.id===H.route.id)&&H.route.id in T&&m[H.route.id]?.shouldRevalidate||$.hasClientLoader?q=!0:L.add(H.route.id))}),L.size===0)return[];let Z=Ob(i,b,"data");return q&&L.size>0&&Z.searchParams.set("_routes",u.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[Z.pathname+Z.search]},[b,T,c,d,g,u,i,m]),U=D.useMemo(()=>Ub(A,d),[A,d]),k=Vb(A);return D.createElement(D.Fragment,null,C.map(L=>D.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...o})),U.map(L=>D.createElement("link",{key:L,rel:"modulepreload",href:L,...o})),k.map(({key:L,link:q})=>D.createElement("link",{key:L,...q})))}function Xb(...i){return u=>{i.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var Ag=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ag&&(window.__reactRouterVersion="7.7.1")}catch{}function Qb({basename:i,children:u,window:o}){let c=D.useRef();c.current==null&&(c.current=B1({window:o,v5Compat:!0}));let d=c.current,[m,b]=D.useState({action:d.action,location:d.location}),T=D.useCallback(v=>{D.startTransition(()=>b(v))},[b]);return D.useLayoutEffect(()=>d.listen(T),[d,T]),D.createElement(jb,{basename:i,children:u,location:m.location,navigationType:m.action,navigator:d})}var _g=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Es=D.forwardRef(function({onClick:u,discover:o="render",prefetch:c="none",relative:d,reloadDocument:m,replace:b,state:T,target:v,to:g,preventScrollReset:A,viewTransition:C,...U},k){let{basename:L}=D.useContext(Zt),q=typeof g=="string"&&_g.test(g),Z,H=!1;if(typeof g=="string"&&q&&(Z=g,Ag))try{let ze=new URL(window.location.href),nt=g.startsWith("//")?new URL(ze.protocol+g):new URL(g),lt=dn(nt.pathname,L);nt.origin===ze.origin&&lt!=null?g=lt+nt.search+nt.hash:H=!0}catch{Vt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=rb(g,{relative:d}),[X,ae,Q]=qb(c,U),le=Wb(g,{replace:b,state:T,target:v,preventScrollReset:A,relative:d,viewTransition:C});function W(ze){u&&u(ze),ze.defaultPrevented||le(ze)}let Ae=D.createElement("a",{...U,...Q,href:Z||$,onClick:H||m?u:W,ref:Xb(k,ae),target:v,"data-discover":!q&&o==="render"?"true":void 0});return X&&!q?D.createElement(D.Fragment,null,Ae,D.createElement(Yb,{page:$})):Ae});Es.displayName="Link";var Kb=D.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:c="",end:d=!1,style:m,to:b,viewTransition:T,children:v,...g},A){let C=Ei(b,{relative:g.relative}),U=Ln(),k=D.useContext(cu),{navigator:L,basename:q}=D.useContext(Zt),Z=k!=null&&ty(C)&&T===!0,H=L.encodeLocation?L.encodeLocation(C).pathname:C.pathname,$=U.pathname,X=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||($=$.toLowerCase(),X=X?X.toLowerCase():null,H=H.toLowerCase()),X&&q&&(X=dn(X,q)||X);const ae=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Q=$===H||!d&&$.startsWith(H)&&$.charAt(ae)==="/",le=X!=null&&(X===H||!d&&X.startsWith(H)&&X.charAt(H.length)==="/"),W={isActive:Q,isPending:le,isTransitioning:Z},Ae=Q?u:void 0,ze;typeof c=="function"?ze=c(W):ze=[c,Q?"active":null,le?"pending":null,Z?"transitioning":null].filter(Boolean).join(" ");let nt=typeof m=="function"?m(W):m;return D.createElement(Es,{...g,"aria-current":Ae,className:ze,ref:A,style:nt,to:b,viewTransition:T},typeof v=="function"?v(W):v)});Kb.displayName="NavLink";var Jb=D.forwardRef(({discover:i="render",fetcherKey:u,navigate:o,reloadDocument:c,replace:d,state:m,method:b=Wr,action:T,onSubmit:v,relative:g,preventScrollReset:A,viewTransition:C,...U},k)=>{let L=Ib(),q=ey(T,{relative:g}),Z=b.toLowerCase()==="get"?"get":"post",H=typeof T=="string"&&_g.test(T),$=X=>{if(v&&v(X),X.defaultPrevented)return;X.preventDefault();let ae=X.nativeEvent.submitter,Q=ae?.getAttribute("formmethod")||b;L(ae||X.currentTarget,{fetcherKey:u,method:Q,navigate:o,replace:d,state:m,relative:g,preventScrollReset:A,viewTransition:C})};return D.createElement("form",{ref:k,method:Z,action:q,onSubmit:c?v:$,...U,"data-discover":!H&&i==="render"?"true":void 0})});Jb.displayName="Form";function $b(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wg(i){let u=D.useContext(hl);return De(u,$b(i)),u}function Wb(i,{target:u,replace:o,state:c,preventScrollReset:d,relative:m,viewTransition:b}={}){let T=ub(),v=Ln(),g=Ei(i,{relative:m});return D.useCallback(A=>{if(wb(A,u)){A.preventDefault();let C=o!==void 0?o:xi(v)===xi(g);T(i,{replace:C,state:c,preventScrollReset:d,relative:m,viewTransition:b})}},[v,T,g,o,c,u,i,d,m,b])}var Fb=0,Pb=()=>`__${String(++Fb)}__`;function Ib(){let{router:i}=wg("useSubmit"),{basename:u}=D.useContext(Zt),o=yb();return D.useCallback(async(c,d={})=>{let{action:m,method:b,encType:T,formData:v,body:g}=Db(c,u);if(d.navigate===!1){let A=d.fetcherKey||Pb();await i.fetch(A,o,d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||b,formEncType:d.encType||T,flushSync:d.flushSync})}else await i.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:g,formMethod:d.method||b,formEncType:d.encType||T,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,u,o])}function ey(i,{relative:u}={}){let{basename:o}=D.useContext(Zt),c=D.useContext(hn);De(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...Ei(i||".",{relative:u})},b=Ln();if(i==null){m.search=b.search;let T=new URLSearchParams(m.search),v=T.getAll("index");if(v.some(A=>A==="")){T.delete("index"),v.filter(C=>C).forEach(C=>T.append("index",C));let A=T.toString();m.search=A?`?${A}`:""}}return(!i||i===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:fn([o,m.pathname])),xi(m)}function ty(i,{relative:u}={}){let o=D.useContext(vg);De(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=wg("useViewTransitionState"),d=Ei(i,{relative:u});if(!o.isTransitioning)return!1;let m=dn(o.currentLocation.pathname,c)||o.currentLocation.pathname,b=dn(o.nextLocation.pathname,c)||o.nextLocation.pathname;return au(d.pathname,b)!=null||au(d.pathname,m)!=null}var st=function(){return st=Object.assign||function(u){for(var o,c=1,d=arguments.length;c<d;c++){o=arguments[c];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(u[m]=o[m])}return u},st.apply(this,arguments)};function lu(i,u,o){if(o||arguments.length===2)for(var c=0,d=u.length,m;c<d;c++)(m||!(c in u))&&(m||(m=Array.prototype.slice.call(u,0,c)),m[c]=u[c]);return i.concat(m||Array.prototype.slice.call(u))}var _e="-ms-",yi="-moz-",be="-webkit-",Rg="comm",su="rule",Ts="decl",ny="@import",Mg="@keyframes",ay="@layer",Dg=Math.abs,As=String.fromCharCode,fs=Object.assign;function ly(i,u){return Je(i,0)^45?(((u<<2^Je(i,0))<<2^Je(i,1))<<2^Je(i,2))<<2^Je(i,3):0}function Og(i){return i.trim()}function sn(i,u){return(i=u.exec(i))?i[0]:i}function re(i,u,o){return i.replace(u,o)}function Pr(i,u,o){return i.indexOf(u,o)}function Je(i,u){return i.charCodeAt(u)|0}function ul(i,u,o){return i.slice(u,o)}function Yt(i){return i.length}function Bg(i){return i.length}function bi(i,u){return u.push(i),i}function iy(i,u){return i.map(u).join("")}function Gm(i,u){return i.filter(function(o){return!sn(o,u)})}var fu=1,cl=1,Cg=0,Dt=0,ke=0,ml="";function du(i,u,o,c,d,m,b,T){return{value:i,root:u,parent:o,type:c,props:d,children:m,line:fu,column:cl,length:b,return:"",siblings:T}}function kn(i,u){return fs(du("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},u)}function Ka(i){for(;i.root;)i=kn(i.root,{children:[i]});bi(i,i.siblings)}function ry(){return ke}function uy(){return ke=Dt>0?Je(ml,--Dt):0,cl--,ke===10&&(cl=1,fu--),ke}function Nt(){return ke=Dt<Cg?Je(ml,Dt++):0,cl++,ke===10&&(cl=1,fu++),ke}function ra(){return Je(ml,Dt)}function Ir(){return Dt}function hu(i,u){return ul(ml,i,u)}function ds(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cy(i){return fu=cl=1,Cg=Yt(ml=i),Dt=0,[]}function oy(i){return ml="",i}function ko(i){return Og(hu(Dt-1,hs(i===91?i+2:i===40?i+1:i)))}function sy(i){for(;(ke=ra())&&ke<33;)Nt();return ds(i)>2||ds(ke)>3?"":" "}function fy(i,u){for(;--u&&Nt()&&!(ke<48||ke>102||ke>57&&ke<65||ke>70&&ke<97););return hu(i,Ir()+(u<6&&ra()==32&&Nt()==32))}function hs(i){for(;Nt();)switch(ke){case i:return Dt;case 34:case 39:i!==34&&i!==39&&hs(ke);break;case 40:i===41&&hs(i);break;case 92:Nt();break}return Dt}function dy(i,u){for(;Nt()&&i+ke!==57;)if(i+ke===84&&ra()===47)break;return"/*"+hu(u,Dt-1)+"*"+As(i===47?i:Nt())}function hy(i){for(;!ds(ra());)Nt();return hu(i,Dt)}function my(i){return oy(eu("",null,null,null,[""],i=cy(i),0,[0],i))}function eu(i,u,o,c,d,m,b,T,v){for(var g=0,A=0,C=b,U=0,k=0,L=0,q=1,Z=1,H=1,$=0,X="",ae=d,Q=m,le=c,W=X;Z;)switch(L=$,$=Nt()){case 40:if(L!=108&&Je(W,C-1)==58){Pr(W+=re(ko($),"&","&\f"),"&\f",Dg(g?T[g-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:W+=ko($);break;case 9:case 10:case 13:case 32:W+=sy(L);break;case 92:W+=fy(Ir()-1,7);continue;case 47:switch(ra()){case 42:case 47:bi(gy(dy(Nt(),Ir()),u,o,v),v);break;default:W+="/"}break;case 123*q:T[g++]=Yt(W)*H;case 125*q:case 59:case 0:switch($){case 0:case 125:Z=0;case 59+A:H==-1&&(W=re(W,/\f/g,"")),k>0&&Yt(W)-C&&bi(k>32?Ym(W+";",c,o,C-1,v):Ym(re(W," ","")+";",c,o,C-2,v),v);break;case 59:W+=";";default:if(bi(le=qm(W,u,o,g,A,d,T,X,ae=[],Q=[],C,m),m),$===123)if(A===0)eu(W,u,le,le,ae,m,C,T,Q);else switch(U===99&&Je(W,3)===110?100:U){case 100:case 108:case 109:case 115:eu(i,le,le,c&&bi(qm(i,le,le,0,0,d,T,X,d,ae=[],C,Q),Q),d,Q,C,T,c?ae:Q);break;default:eu(W,le,le,le,[""],Q,0,T,Q)}}g=A=k=0,q=H=1,X=W="",C=b;break;case 58:C=1+Yt(W),k=L;default:if(q<1){if($==123)--q;else if($==125&&q++==0&&uy()==125)continue}switch(W+=As($),$*q){case 38:H=A>0?1:(W+="\f",-1);break;case 44:T[g++]=(Yt(W)-1)*H,H=1;break;case 64:ra()===45&&(W+=ko(Nt())),U=ra(),A=C=Yt(X=W+=hy(Ir())),$++;break;case 45:L===45&&Yt(W)==2&&(q=0)}}return m}function qm(i,u,o,c,d,m,b,T,v,g,A,C){for(var U=d-1,k=d===0?m:[""],L=Bg(k),q=0,Z=0,H=0;q<c;++q)for(var $=0,X=ul(i,U+1,U=Dg(Z=b[q])),ae=i;$<L;++$)(ae=Og(Z>0?k[$]+" "+X:re(X,/&\f/g,k[$])))&&(v[H++]=ae);return du(i,u,o,d===0?su:T,v,g,A,C)}function gy(i,u,o,c){return du(i,u,o,Rg,As(ry()),ul(i,2,-2),0,c)}function Ym(i,u,o,c,d){return du(i,u,o,Ts,ul(i,0,c),ul(i,c+1,-1),c,d)}function Ng(i,u,o){switch(ly(i,u)){case 5103:return be+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+i+i;case 4789:return yi+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return be+i+yi+i+_e+i+i;case 5936:switch(Je(i,u+11)){case 114:return be+i+_e+re(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return be+i+_e+re(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return be+i+_e+re(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return be+i+_e+i+i;case 6165:return be+i+_e+"flex-"+i+i;case 5187:return be+i+re(i,/(\w+).+(:[^]+)/,be+"box-$1$2"+_e+"flex-$1$2")+i;case 5443:return be+i+_e+"flex-item-"+re(i,/flex-|-self/g,"")+(sn(i,/flex-|baseline/)?"":_e+"grid-row-"+re(i,/flex-|-self/g,""))+i;case 4675:return be+i+_e+"flex-line-pack"+re(i,/align-content|flex-|-self/g,"")+i;case 5548:return be+i+_e+re(i,"shrink","negative")+i;case 5292:return be+i+_e+re(i,"basis","preferred-size")+i;case 6060:return be+"box-"+re(i,"-grow","")+be+i+_e+re(i,"grow","positive")+i;case 4554:return be+re(i,/([^-])(transform)/g,"$1"+be+"$2")+i;case 6187:return re(re(re(i,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),i,"")+i;case 5495:case 3959:return re(i,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(i,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+i+i;case 4200:if(!sn(i,/flex-|baseline/))return _e+"grid-column-align"+ul(i,u)+i;break;case 2592:case 3360:return _e+re(i,"template-","")+i;case 4384:case 3616:return o&&o.some(function(c,d){return u=d,sn(c.props,/grid-\w+-end/)})?~Pr(i+(o=o[u].value),"span",0)?i:_e+re(i,"-start","")+i+_e+"grid-row-span:"+(~Pr(o,"span",0)?sn(o,/\d+/):+sn(o,/\d+/)-+sn(i,/\d+/))+";":_e+re(i,"-start","")+i;case 4896:case 4128:return o&&o.some(function(c){return sn(c.props,/grid-\w+-start/)})?i:_e+re(re(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return re(i,/(.+)-inline(.+)/,be+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(i)-1-u>6)switch(Je(i,u+1)){case 109:if(Je(i,u+4)!==45)break;case 102:return re(i,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+yi+(Je(i,u+3)==108?"$3":"$2-$3"))+i;case 115:return~Pr(i,"stretch",0)?Ng(re(i,"stretch","fill-available"),u,o)+i:i}break;case 5152:case 5920:return re(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,d,m,b,T,v,g){return _e+d+":"+m+g+(b?_e+d+"-span:"+(T?v:+v-+m)+g:"")+i});case 4949:if(Je(i,u+6)===121)return re(i,":",":"+be)+i;break;case 6444:switch(Je(i,Je(i,14)===45?18:11)){case 120:return re(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(Je(i,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+_e+"$2box$3")+i;case 100:return re(i,":",":"+_e)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(i,"scroll-","scroll-snap-")+i}return i}function iu(i,u){for(var o="",c=0;c<i.length;c++)o+=u(i[c],c,i,u)||"";return o}function py(i,u,o,c){switch(i.type){case ay:if(i.children.length)break;case ny:case Ts:return i.return=i.return||i.value;case Rg:return"";case Mg:return i.return=i.value+"{"+iu(i.children,c)+"}";case su:if(!Yt(i.value=i.props.join(",")))return""}return Yt(o=iu(i.children,c))?i.return=i.value+"{"+o+"}":""}function by(i){var u=Bg(i);return function(o,c,d,m){for(var b="",T=0;T<u;T++)b+=i[T](o,c,d,m)||"";return b}}function yy(i){return function(u){u.root||(u=u.return)&&i(u)}}function vy(i,u,o,c){if(i.length>-1&&!i.return)switch(i.type){case Ts:i.return=Ng(i.value,i.length,o);return;case Mg:return iu([kn(i,{value:re(i.value,"@","@"+be)})],c);case su:if(i.length)return iy(o=i.props,function(d){switch(sn(d,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ka(kn(i,{props:[re(d,/:(read-\w+)/,":"+yi+"$1")]})),Ka(kn(i,{props:[d]})),fs(i,{props:Gm(o,c)});break;case"::placeholder":Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,":"+yi+"$1")]})),Ka(kn(i,{props:[re(d,/:(plac\w+)/,_e+"input-$1")]})),Ka(kn(i,{props:[d]})),fs(i,{props:Gm(o,c)});break}return""})}}var xy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},ol=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",Ug="active",Hg="data-styled-version",mu="6.1.19",_s=`/*!sc*/
`,ru=typeof window<"u"&&typeof document<"u",Sy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),gu=Object.freeze([]),sl=Object.freeze({});function jy(i,u,o){return o===void 0&&(o=sl),i.theme!==o.theme&&i.theme||u||o.theme}var kg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ey=/(^-|-$)/g;function Vm(i){return i.replace(zy,"-").replace(Ey,"")}var Ty=/(a)(d)/gi,qr=52,Zm=function(i){return String.fromCharCode(i+(i>25?39:97))};function ms(i){var u,o="";for(u=Math.abs(i);u>qr;u=u/qr|0)o=Zm(u%qr)+o;return(Zm(u%qr)+o).replace(Ty,"$1-$2")}var Lo,Lg=5381,rl=function(i,u){for(var o=u.length;o;)i=33*i^u.charCodeAt(--o);return i},Gg=function(i){return rl(Lg,i)};function Ay(i){return ms(Gg(i)>>>0)}function _y(i){return i.displayName||i.name||"Component"}function Go(i){return typeof i=="string"&&!0}var qg=typeof Symbol=="function"&&Symbol.for,Yg=qg?Symbol.for("react.memo"):60115,wy=qg?Symbol.for("react.forward_ref"):60112,Ry={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},My={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dy=((Lo={})[wy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lo[Yg]=Vg,Lo);function Xm(i){return("type"in(u=i)&&u.type.$$typeof)===Yg?Vg:"$$typeof"in i?Dy[i.$$typeof]:Ry;var u}var Oy=Object.defineProperty,By=Object.getOwnPropertyNames,Qm=Object.getOwnPropertySymbols,Cy=Object.getOwnPropertyDescriptor,Ny=Object.getPrototypeOf,Km=Object.prototype;function Zg(i,u,o){if(typeof u!="string"){if(Km){var c=Ny(u);c&&c!==Km&&Zg(i,c,o)}var d=By(u);Qm&&(d=d.concat(Qm(u)));for(var m=Xm(i),b=Xm(u),T=0;T<d.length;++T){var v=d[T];if(!(v in My||o&&o[v]||b&&v in b||m&&v in m)){var g=Cy(u,v);try{Oy(i,v,g)}catch{}}}}return i}function fl(i){return typeof i=="function"}function ws(i){return typeof i=="object"&&"styledComponentId"in i}function ia(i,u){return i&&u?"".concat(i," ").concat(u):i||u||""}function Jm(i,u){if(i.length===0)return"";for(var o=i[0],c=1;c<i.length;c++)o+=i[c];return o}function Si(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function gs(i,u,o){if(o===void 0&&(o=!1),!o&&!Si(i)&&!Array.isArray(i))return u;if(Array.isArray(u))for(var c=0;c<u.length;c++)i[c]=gs(i[c],u[c]);else if(Si(u))for(var c in u)i[c]=gs(i[c],u[c]);return i}function Rs(i,u){Object.defineProperty(i,"toString",{value:u})}function Ti(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Uy=function(){function i(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return i.prototype.indexOfGroup=function(u){for(var o=0,c=0;c<u;c++)o+=this.groupSizes[c];return o},i.prototype.insertRules=function(u,o){if(u>=this.groupSizes.length){for(var c=this.groupSizes,d=c.length,m=d;u>=m;)if((m<<=1)<0)throw Ti(16,"".concat(u));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var b=d;b<m;b++)this.groupSizes[b]=0}for(var T=this.indexOfGroup(u+1),v=(b=0,o.length);b<v;b++)this.tag.insertRule(T,o[b])&&(this.groupSizes[u]++,T++)},i.prototype.clearGroup=function(u){if(u<this.length){var o=this.groupSizes[u],c=this.indexOfGroup(u),d=c+o;this.groupSizes[u]=0;for(var m=c;m<d;m++)this.tag.deleteRule(c)}},i.prototype.getGroup=function(u){var o="";if(u>=this.length||this.groupSizes[u]===0)return o;for(var c=this.groupSizes[u],d=this.indexOfGroup(u),m=d+c,b=d;b<m;b++)o+="".concat(this.tag.getRule(b)).concat(_s);return o},i}(),tu=new Map,uu=new Map,nu=1,Yr=function(i){if(tu.has(i))return tu.get(i);for(;uu.has(nu);)nu++;var u=nu++;return tu.set(i,u),uu.set(u,i),u},Hy=function(i,u){nu=u+1,tu.set(i,u),uu.set(u,i)},ky="style[".concat(ol,"][").concat(Hg,'="').concat(mu,'"]'),Ly=new RegExp("^".concat(ol,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gy=function(i,u,o){for(var c,d=o.split(","),m=0,b=d.length;m<b;m++)(c=d[m])&&i.registerName(u,c)},qy=function(i,u){for(var o,c=((o=u.textContent)!==null&&o!==void 0?o:"").split(_s),d=[],m=0,b=c.length;m<b;m++){var T=c[m].trim();if(T){var v=T.match(Ly);if(v){var g=0|parseInt(v[1],10),A=v[2];g!==0&&(Hy(A,g),Gy(i,A,v[3]),i.getTag().insertRules(g,d)),d.length=0}else d.push(T)}}},$m=function(i){for(var u=document.querySelectorAll(ky),o=0,c=u.length;o<c;o++){var d=u[o];d&&d.getAttribute(ol)!==Ug&&(qy(i,d),d.parentNode&&d.parentNode.removeChild(d))}};function Yy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Xg=function(i){var u=document.head,o=i||u,c=document.createElement("style"),d=function(T){var v=Array.from(T.querySelectorAll("style[".concat(ol,"]")));return v[v.length-1]}(o),m=d!==void 0?d.nextSibling:null;c.setAttribute(ol,Ug),c.setAttribute(Hg,mu);var b=Yy();return b&&c.setAttribute("nonce",b),o.insertBefore(c,m),c},Vy=function(){function i(u){this.element=Xg(u),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,d=0,m=c.length;d<m;d++){var b=c[d];if(b.ownerNode===o)return b}throw Ti(17)}(this.element),this.length=0}return i.prototype.insertRule=function(u,o){try{return this.sheet.insertRule(o,u),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},i.prototype.getRule=function(u){var o=this.sheet.cssRules[u];return o&&o.cssText?o.cssText:""},i}(),Zy=function(){function i(u){this.element=Xg(u),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(u,o){if(u<=this.length&&u>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[u]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},i.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},i}(),Xy=function(){function i(u){this.rules=[],this.length=0}return i.prototype.insertRule=function(u,o){return u<=this.length&&(this.rules.splice(u,0,o),this.length++,!0)},i.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},i.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},i}(),Wm=ru,Qy={isServer:!ru,useCSSOMInjection:!Sy},Qg=function(){function i(u,o,c){u===void 0&&(u=sl),o===void 0&&(o={});var d=this;this.options=st(st({},Qy),u),this.gs=o,this.names=new Map(c),this.server=!!u.isServer,!this.server&&ru&&Wm&&(Wm=!1,$m(this)),Rs(this,function(){return function(m){for(var b=m.getTag(),T=b.length,v="",g=function(C){var U=function(H){return uu.get(H)}(C);if(U===void 0)return"continue";var k=m.names.get(U),L=b.getGroup(C);if(k===void 0||!k.size||L.length===0)return"continue";var q="".concat(ol,".g").concat(C,'[id="').concat(U,'"]'),Z="";k!==void 0&&k.forEach(function(H){H.length>0&&(Z+="".concat(H,","))}),v+="".concat(L).concat(q,'{content:"').concat(Z,'"}').concat(_s)},A=0;A<T;A++)g(A);return v}(d)})}return i.registerId=function(u){return Yr(u)},i.prototype.rehydrate=function(){!this.server&&ru&&$m(this)},i.prototype.reconstructWithOptions=function(u,o){return o===void 0&&(o=!0),new i(st(st({},this.options),u),this.gs,o&&this.names||void 0)},i.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(u=function(o){var c=o.useCSSOMInjection,d=o.target;return o.isServer?new Xy(d):c?new Vy(d):new Zy(d)}(this.options),new Uy(u)));var u},i.prototype.hasNameForId=function(u,o){return this.names.has(u)&&this.names.get(u).has(o)},i.prototype.registerName=function(u,o){if(Yr(u),this.names.has(u))this.names.get(u).add(o);else{var c=new Set;c.add(o),this.names.set(u,c)}},i.prototype.insertRules=function(u,o,c){this.registerName(u,o),this.getTag().insertRules(Yr(u),c)},i.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},i.prototype.clearRules=function(u){this.getTag().clearGroup(Yr(u)),this.clearNames(u)},i.prototype.clearTag=function(){this.tag=void 0},i}(),Ky=/&/g,Jy=/^\s*\/\/.*$/gm;function Kg(i,u){return i.map(function(o){return o.type==="rule"&&(o.value="".concat(u," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(u," ")),o.props=o.props.map(function(c){return"".concat(u," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Kg(o.children,u)),o})}function $y(i){var u,o,c,d=sl,m=d.options,b=m===void 0?sl:m,T=d.plugins,v=T===void 0?gu:T,g=function(U,k,L){return L.startsWith(o)&&L.endsWith(o)&&L.replaceAll(o,"").length>0?".".concat(u):U},A=v.slice();A.push(function(U){U.type===su&&U.value.includes("&")&&(U.props[0]=U.props[0].replace(Ky,o).replace(c,g))}),b.prefix&&A.push(vy),A.push(py);var C=function(U,k,L,q){k===void 0&&(k=""),L===void 0&&(L=""),q===void 0&&(q="&"),u=q,o=k,c=new RegExp("\\".concat(o,"\\b"),"g");var Z=U.replace(Jy,""),H=my(L||k?"".concat(L," ").concat(k," { ").concat(Z," }"):Z);b.namespace&&(H=Kg(H,b.namespace));var $=[];return iu(H,by(A.concat(yy(function(X){return $.push(X)})))),$};return C.hash=v.length?v.reduce(function(U,k){return k.name||Ti(15),rl(U,k.name)},Lg).toString():"",C}var Wy=new Qg,ps=$y(),Jg=vi.createContext({shouldForwardProp:void 0,styleSheet:Wy,stylis:ps});Jg.Consumer;vi.createContext(void 0);function Fm(){return D.useContext(Jg)}var Fy=function(){function i(u,o){var c=this;this.inject=function(d,m){m===void 0&&(m=ps);var b=c.name+m.hash;d.hasNameForId(c.id,b)||d.insertRules(c.id,b,m(c.rules,b,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=o,Rs(this,function(){throw Ti(12,String(c.name))})}return i.prototype.getName=function(u){return u===void 0&&(u=ps),this.name+u.hash},i}(),Py=function(i){return i>="A"&&i<="Z"};function Pm(i){for(var u="",o=0;o<i.length;o++){var c=i[o];if(o===1&&c==="-"&&i[0]==="-")return i;Py(c)?u+="-"+c.toLowerCase():u+=c}return u.startsWith("ms-")?"-"+u:u}var $g=function(i){return i==null||i===!1||i===""},Wg=function(i){var u,o,c=[];for(var d in i){var m=i[d];i.hasOwnProperty(d)&&!$g(m)&&(Array.isArray(m)&&m.isCss||fl(m)?c.push("".concat(Pm(d),":"),m,";"):Si(m)?c.push.apply(c,lu(lu(["".concat(d," {")],Wg(m),!1),["}"],!1)):c.push("".concat(Pm(d),": ").concat((u=d,(o=m)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||u in xy||u.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return c};function ua(i,u,o,c){if($g(i))return[];if(ws(i))return[".".concat(i.styledComponentId)];if(fl(i)){if(!fl(m=i)||m.prototype&&m.prototype.isReactComponent||!u)return[i];var d=i(u);return ua(d,u,o,c)}var m;return i instanceof Fy?o?(i.inject(o,c),[i.getName(c)]):[i]:Si(i)?Wg(i):Array.isArray(i)?Array.prototype.concat.apply(gu,i.map(function(b){return ua(b,u,o,c)})):[i.toString()]}function Iy(i){for(var u=0;u<i.length;u+=1){var o=i[u];if(fl(o)&&!ws(o))return!1}return!0}var ev=Gg(mu),tv=function(){function i(u,o,c){this.rules=u,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&Iy(u),this.componentId=o,this.baseHash=rl(ev,o),this.baseStyle=c,Qg.registerId(o)}return i.prototype.generateAndInjectStyles=function(u,o,c){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,o,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var m=Jm(ua(this.rules,u,o,c)),b=ms(rl(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,b)){var T=c(m,".".concat(b),void 0,this.componentId);o.insertRules(this.componentId,b,T)}d=ia(d,b),this.staticRulesId=b}else{for(var v=rl(this.baseHash,c.hash),g="",A=0;A<this.rules.length;A++){var C=this.rules[A];if(typeof C=="string")g+=C;else if(C){var U=Jm(ua(C,u,o,c));v=rl(v,U+A),g+=U}}if(g){var k=ms(v>>>0);o.hasNameForId(this.componentId,k)||o.insertRules(this.componentId,k,c(g,".".concat(k),void 0,this.componentId)),d=ia(d,k)}}return d},i}(),Fg=vi.createContext(void 0);Fg.Consumer;var qo={};function nv(i,u,o){var c=ws(i),d=i,m=!Go(i),b=u.attrs,T=b===void 0?gu:b,v=u.componentId,g=v===void 0?function(ae,Q){var le=typeof ae!="string"?"sc":Vm(ae);qo[le]=(qo[le]||0)+1;var W="".concat(le,"-").concat(Ay(mu+le+qo[le]));return Q?"".concat(Q,"-").concat(W):W}(u.displayName,u.parentComponentId):v,A=u.displayName,C=A===void 0?function(ae){return Go(ae)?"styled.".concat(ae):"Styled(".concat(_y(ae),")")}(i):A,U=u.displayName&&u.componentId?"".concat(Vm(u.displayName),"-").concat(u.componentId):u.componentId||g,k=c&&d.attrs?d.attrs.concat(T).filter(Boolean):T,L=u.shouldForwardProp;if(c&&d.shouldForwardProp){var q=d.shouldForwardProp;if(u.shouldForwardProp){var Z=u.shouldForwardProp;L=function(ae,Q){return q(ae,Q)&&Z(ae,Q)}}else L=q}var H=new tv(o,U,c?d.componentStyle:void 0);function $(ae,Q){return function(le,W,Ae){var ze=le.attrs,nt=le.componentStyle,lt=le.defaultProps,qe=le.foldedComponentIds,Xt=le.styledComponentId,Qt=le.target,Ye=vi.useContext(Fg),R=Fm(),Y=le.shouldForwardProp||R.shouldForwardProp,P=jy(W,Ye,lt)||sl,oe=function(se,ee,Ve){for(var pe,Pe=st(st({},ee),{className:void 0,theme:Ve}),Gn=0;Gn<se.length;Gn+=1){var Kt=fl(pe=se[Gn])?pe(Pe):pe;for(var St in Kt)Pe[St]=St==="className"?ia(Pe[St],Kt[St]):St==="style"?st(st({},Pe[St]),Kt[St]):Kt[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(ze,W,P),x=oe.as||Qt,N={};for(var G in oe)oe[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&oe.theme===P||(G==="forwardedAs"?N.as=oe.forwardedAs:Y&&!Y(G,x)||(N[G]=oe[G]));var V=function(se,ee){var Ve=Fm(),pe=se.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(nt,oe),F=ia(qe,Xt);return V&&(F+=" "+V),oe.className&&(F+=" "+oe.className),N[Go(x)&&!kg.has(x)?"class":"className"]=F,Ae&&(N.ref=Ae),D.createElement(x,N)}(X,ae,Q)}$.displayName=C;var X=vi.forwardRef($);return X.attrs=k,X.componentStyle=H,X.displayName=C,X.shouldForwardProp=L,X.foldedComponentIds=c?ia(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=U,X.target=c?d.target:i,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=c?function(Q){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Ae=0,ze=le;Ae<ze.length;Ae++)gs(Q,ze[Ae],!0);return Q}({},d.defaultProps,ae):ae}}),Rs(X,function(){return".".concat(X.styledComponentId)}),m&&Zg(X,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function Im(i,u){for(var o=[i[0]],c=0,d=u.length;c<d;c+=1)o.push(u[c],i[c+1]);return o}var eg=function(i){return Object.assign(i,{isCss:!0})};function av(i){for(var u=[],o=1;o<arguments.length;o++)u[o-1]=arguments[o];if(fl(i)||Si(i))return eg(ua(Im(gu,lu([i],u,!0))));var c=i;return u.length===0&&c.length===1&&typeof c[0]=="string"?ua(c):eg(ua(Im(c,u)))}function bs(i,u,o){if(o===void 0&&(o=sl),!u)throw Ti(1,u);var c=function(d){for(var m=[],b=1;b<arguments.length;b++)m[b-1]=arguments[b];return i(u,o,av.apply(void 0,lu([d],m,!1)))};return c.attrs=function(d){return bs(i,u,st(st({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},c.withConfig=function(d){return bs(i,u,st(st({},o),d))},c}var Pg=function(i){return bs(nv,i)},y=Pg;kg.forEach(function(i){y[i]=Pg(i)});const lv=y.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,iv=y.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`,rv=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,uv=y.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #e10073;
  margin: 0;
`,cv=y.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Yo=y(Es)`
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
`;function ov(){const i=Ln();return s.jsx(lv,{children:s.jsxs(iv,{children:[s.jsx(rv,{children:s.jsx(uv,{children:"SCKW"})}),s.jsxs(cv,{children:[s.jsx(Yo,{to:"/",$active:i.pathname==="/",children:"🤝 Sponsoring"}),s.jsx(Yo,{to:"/jobs",$active:i.pathname==="/jobs",children:"💼 Jobbörse"}),s.jsx(Yo,{to:"/renovierung",$active:i.pathname==="/renovierung",children:"🏗️ Renovierung"})]})]})})}const sv=y.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,fv=y.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function Ms(){return s.jsxs(sv,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",s.jsx(fv,{href:"mailto:grimm@sckw.de",children:"grimm@sckw.de"})]})}const Ig=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"✅ Vergeben",maxSponsors:1,sponsors:[{name:"RicoBet",image:"ricobet.png",website:null,since:"2023",until:"2025"}],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","1 Banner (5x2 m) am Gelände","1/1 Seite im Stadionmagazin","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Stadionansage bei jedem Heimspiel","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🥈 Co-Sponsor",price:"10.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotärmel 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1/2 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotärmel 1. Mannschaft","1 Banner (5x2 m) am Gelände","1/2 Seite im Stadionmagazin","2 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"⭐️ Premium-Partner",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Banner (5x2 m) am Gelände",highlight:!0,icon:"🖼️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Erweitert*",highlight:!0,icon:"📱"},{text:"Website: Startseite Erweitert*",highlight:!1,icon:"🌐"}],benefits:["1 Banner (5x2 m) am Gelände","1/4 Seite im Stadionmagazin","Social Media ERWEITERT: Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche","Website STARTSEITE ERWEITERT: Logo auf der Startseite mit kleinerer Fläche"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟧 11 vergeben · ~19 verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"1 Bande (3x1 m)",highlight:!1,icon:"🏟️"},{text:"Alle Heimspiele",highlight:!0,icon:"⚽"},{text:"Website: Sponsoren-Seite*",highlight:!1,icon:"🌐"}],benefits:["1 Bande (3x1 m) am Spielfeldrand","Sichtbarkeit bei allen Heimspielen","Website SPONSOREN-SEITE: Auflistung auf separater Sponsoren-Seite","Einmalkosten: 70 €/lfd. Meter für Herstellung"]}],dv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,hv=y.div`
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
`,mv=y.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,gv=y.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,pv=y.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,bv=y.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${i=>i.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${i=>i.isVergeben?"line-through":"none"};
`,yv=y.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:i})=>i==="verfügbar"?"#d4edda":i==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:i})=>i==="verfügbar"?"#155724":i==="vergeben"?"#721c24":"#856404"};
`,vv=y.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,xv=y.li`
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
`,Sv=y.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,jv=y.span`
  flex: 1;
`,zv=y.a`
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
`,Ev=y.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Tv="grimm@sckw.de";function Av({packages:i}){const u=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",o=b=>{const T=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return T?T[0]:""},c=b=>{const T=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${T}"`),g=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${T}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${Tv}?subject=${v}&body=${g}`},d=b=>{const T=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:T,isFullyBooked:T===0}},m=i.filter(b=>!b.title.includes("Platz-Renovierung"));return s.jsx(dv,{children:m.map((b,T)=>{const{isFullyBooked:v}=d(b),g=u(b.status),A=g==="vergeben"||v,C=v?"vergeben":g,U=b.keyBenefits||[];return s.jsxs(hv,{isVergeben:A,children:[s.jsxs(mv,{children:[s.jsx(gv,{children:o(b.title)}),s.jsx(pv,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!A&&s.jsx(bv,{children:b.price}),s.jsx(yv,{status:C,children:C==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),A?s.jsx(Ev,{children:"✅ Alle Plätze vergeben"}):s.jsx(vv,{children:U.map((k,L)=>s.jsxs(xv,{isHighlight:k.highlight,children:[s.jsx(Sv,{children:k.icon}),s.jsx(jv,{children:k.text})]},L))}),s.jsx(zv,{href:A?void 0:c(b.title),isVergeben:A,children:A?"Vergeben":"Jetzt anfragen"})]},T)})})}const _v=y.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  overflow: hidden;
`,wv=y.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,Rv=y.button`
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
`,Mv=y.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${i=>i.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: #e10073;
`,Dv=y.div`
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${i=>i.isOpen?"500px":"0"};
  opacity: ${i=>i.isOpen?"1":"0"};
`,Ov=y.div`
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
`,Bv=y.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,Cv=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:s.jsxs(s.Fragment,{children:[s.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:s.jsxs(s.Fragment,{children:[s.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",s.jsx("br",{}),s.jsx("br",{}),s.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:s.jsx(s.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function Nv(){const[i,u]=D.useState([]),o=d=>{u(m=>m.includes(d)?m.filter(b=>b!==d):[...m,d])},c=(d,m)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o(m))};return s.jsx(_v,{children:Cv.map(d=>{const m=i.includes(d.id);return s.jsxs(wv,{children:[s.jsxs(Rv,{isOpen:m,onClick:()=>o(d.id),onKeyDown:b=>c(b,d.id),"aria-expanded":m,"aria-controls":`accordion-content-${d.id}`,children:[s.jsxs("span",{children:[s.jsx(Bv,{children:d.icon}),d.title]}),s.jsx(Mv,{isOpen:m,children:"▼"})]}),s.jsx(Dv,{isOpen:m,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:s.jsx(Ov,{children:d.content})})]},d.id)})})}const Uv=y.section`
  background: #f8f9fb;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,Hv=y.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  width: 100%;
  padding-bottom: 0.5rem;
`,kv=y.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`,tg=y.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`,Lv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ng=y.div`
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
`,Gv=y.div`
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
`,ag=y.div`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`,qv=y.svg`
  height: 50px;
  width: auto;
`,lg=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,ig=y.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.5;
`,rg=y.a`
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
`,Yv=y.div`
  background: #e8f4fd;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;
`,Vv=y.h4`
  color: #0c5460;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ug=y.p`
  color: #0c5460;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Zv=y.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`,Xv=y.h4`
  color: #856404;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,Qv=y.p`
  color: #856404;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0;
`,Kv=y.div`
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
`,Jv=y.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,$v=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Wv=y.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,Fv=y.button`
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
`,Pv=y.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Vo=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Zo=y.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Xo=y.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,Iv=y.button`
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
`,ex=y.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`;function tx(){const[i,u]=D.useState(!1),o=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")},c=d=>{d.preventDefault(),u(!0)};return s.jsxs(Uv,{id:"spenden",children:[s.jsx(Hv,{children:"💚 Spenden für den SC Konstanz-Wollmatingen"}),s.jsxs(kv,{children:[s.jsx(tg,{children:"Ohne Zuwendungen von Spendern, Gönnern, Förderern und Sponsoren ist der Spiel-, Turnier- und Trainingsbetrieb der Jugendabteilung und der Aktivenbereiche unseres Vereins nicht zu finanzieren. Die Mitgliedsbeiträge reichen für die umfassenden Aufgaben, die unser Verein für die Jugend im Breiten- und im Leistungssport, die Aus- und Weiterbildung der Trainer und Betreuer und die sportlich aktiv tätigen Mitglieder, Spieler und Teams erbringt, nicht aus."}),s.jsx(tg,{children:s.jsx("strong",{children:"Wir freuen uns über jede Zuwendung und Unterstützung!"})})]}),s.jsxs(Lv,{children:[s.jsxs(ng,{preferred:!0,children:[s.jsx(Gv,{children:"⭐ Bevorzugt"}),s.jsx(ag,{children:s.jsxs(qv,{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.33c-.498 0-.968.382-1.061.913l-.619 3.949-.013.083-.637 4.084c-.229.685-.727 1.061-1.319 1.061L7.076 21.337z",fill:"#263B80"}),s.jsx("path",{d:"M20.781 7.519c-.023.143-.047.286-.077.429v.008c-.842 4.235-2.877 5.943-6.626 5.943H11.95c-.498 0-.968.382-1.061.913l-.756 4.814-.035.199-.561 3.584c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c3.213 0 5.733-1.311 6.467-5.097.307-1.582.149-2.906-.697-3.732-.244-.238-.5-.44-.785-.602-.998-.011-1.998-.011-1.998-.011z",fill:"#139AD6"}),s.jsx("path",{d:"M19.175 7.129c-.166-.039-.34-.071-.519-.097a9.54 9.54 0 0 0-1.348-.082H11.77c-.498 0-.969.382-1.062.913L9.493 13.34c-.062.394.166.756.566.756h3.913c.43 0 .805-.301.894-.734v-.008l.035-.199.698-4.464.045-.257c.089-.433.464-.734.894-.734h.564c.564 0 1.096.045 1.583.135.166.039.34.087.498.143.498-3.146.166-5.286-1.508-6.849z",fill:"#232C65"})]})}),s.jsx(lg,{children:"PayPal Spende"}),s.jsx(ig,{children:"Schnell, sicher und unkompliziert - spenden Sie direkt über PayPal. Ihre Spende kommt sofort bei uns an."}),s.jsx(rg,{href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💚 Mit PayPal spenden"})]}),s.jsxs(ng,{children:[s.jsx(ag,{children:"🏦"}),s.jsx(lg,{children:"Banküberweisung"}),s.jsx(ig,{children:"Traditionelle Überweisung direkt auf unser Vereinskonto. Ideal für größere Spenden und Spendenquittungen."}),s.jsx(rg,{onClick:c,children:"🏦 Kontodaten anzeigen"})]})]}),s.jsxs(Yv,{children:[s.jsx(Vv,{children:"📄 Steuerliche Absetzbarkeit"}),s.jsxs(ug,{children:[s.jsx("strong",{children:"Bis 200 EUR:"})," Sie können einfach die Überweisungsquittung als Spendenbescheinigung bei der Steuererklärung angeben."]}),s.jsxs(ug,{children:[s.jsx("strong",{children:"Über 200 EUR:"})," Wir stellen Ihnen gerne eine offizielle Spendenquittung aus. Überweisen Sie dafür bitte auf unser Vereinskonto."]})]}),s.jsxs(Zv,{children:[s.jsx(Xv,{children:"📧 Spendenquittung anfordern"}),s.jsxs(Qv,{children:["Für Spenden über 200 EUR richten Sie bitte die Anforderung einer Spendenquittung per E-Mail an ",s.jsx("strong",{children:"grimm@sckw.de"})," oder schriftlich an die Postanschrift des Vereins. Bitte geben Sie Ihre Anschrift, Telefonnummer und den Verwendungszweck an."]})]}),i&&s.jsx(Kv,{onClick:()=>u(!1),children:s.jsxs(Jv,{onClick:d=>d.stopPropagation(),children:[s.jsxs($v,{children:[s.jsx(Wv,{children:"Kontoverbindung für Spenden"}),s.jsx(Fv,{onClick:()=>u(!1),children:"×"})]}),s.jsxs(Pv,{children:[s.jsxs(Vo,{children:[s.jsx(Zo,{children:"Kontoinhaber:"}),s.jsx(Xo,{children:"SC Konstanz-Wollmatingen"})]}),s.jsxs(Vo,{children:[s.jsx(Zo,{children:"IBAN:"}),s.jsx(Xo,{children:"DE12 6905 0001 0000 0228 06"})]}),s.jsxs(Vo,{children:[s.jsx(Zo,{children:"BIC:"}),s.jsx(Xo,{children:"SOLADES1KNZ"})]})]}),s.jsx(Iv,{onClick:o,children:"📋 IBAN kopieren"}),s.jsx(ex,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})})]})}const nx=y.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  margin: 2rem 0;
`,ax=y.div`
  max-width: 1200px;
  margin: 0 auto;
`,lx=y.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
`,ix=y.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,rx=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,ux=y.div`
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
`,cx=y.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e10073;
`,ox=y.span`
  font-size: 2.5rem;
  margin-right: 1rem;
`,sx=y.h4`
  font-size: 1.2rem;
  color: #222;
  font-weight: 600;
  margin: 0;
`,fx=y.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,dx=y.li`
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
`,hx=y.span`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`,mx=y.span`
  flex: 1;
`,gx=y.div`
  background: linear-gradient(135deg, #e10073 0%, #c70066 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  text-align: center;
  font-weight: 500;
`,px=[{department:"Herren",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Trainer-Gehälter"},{icon:"⚽",text:"Equipment & Trainingsbälle"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Trainerkosten"},{department:"Damen",icon:"⚽",items:[{icon:"👕",text:"Trikots (Spiel & Training)"},{icon:"👨‍🏫",text:"Trainer-Gehälter"},{icon:"🥅",text:"Torwart-Ausrüstung"},{icon:"🚌",text:"Auswärtsfahrten"},{icon:"🏟️",text:"Spielbetrieb & Platzkosten"}],costInfo:"Fokus: Spielbetrieb & Equipment"},{department:"Renovierung Fürstenbergsportplatz",icon:"🏗️",items:[{icon:"🏟️",text:"Platz-Sanierung & Drainage"},{icon:"🚿",text:"Umkleiden & Sanitäranlagen"},{icon:"💡",text:"Flutlichtanlage modernisieren"},{icon:"🪑",text:"Tribüne & Zuschauerbereich"},{icon:"🚧",text:"Sicherheitsmaßnahmen & Zäune"}],costInfo:"Großprojekt: Modernisierung der Sportanlage"},{department:"Cheerleading",icon:"💃",items:[{icon:"👗",text:"Tanz-Outfits & Kostüme"},{icon:"👨‍🏫",text:"Trainer-Gehälter"},{icon:"🏆",text:"Wettkämpfe & Turniere"},{icon:"🎵",text:"Musik & Choreografie"},{icon:"🚌",text:"Auswärtsfahrten"}],costInfo:"Fokus: Wettkämpfe & Ausrüstung"},{department:"Allgemein",icon:"🏟️",items:[{icon:"🏟️",text:"Platzpflege & Infrastruktur"},{icon:"💡",text:"Flutlicht & Stromkosten"},{icon:"🚿",text:"Sanitäranlagen & Umkleiden"},{icon:"🛠️",text:"Wartung & Reparaturen"},{icon:"📢",text:"Kommunikation & Marketing"}],costInfo:"Grundlage für alle Abteilungen"},{department:"Fördergruppe",icon:"🎯",items:[{icon:"👕",text:"Zuschuss zu Trikots (Training)"},{icon:"🥅",text:"Minitore & Equipment"},{icon:"🏟️",text:"Fangnetze & Infrastruktur"},{icon:"⚽",text:"Trainingsbälle & Zubehör"},{icon:"🛠️",text:"Wartung & Reparaturen"}],costInfo:"Unterstützung für alle Abteilungen"}];function bx(){return s.jsx(nx,{children:s.jsxs(ax,{children:[s.jsx(lx,{children:"Wofür wird Ihr Sponsoring verwendet?"}),s.jsx(ix,{children:"Transparenz ist uns wichtig! Hier sehen Sie, wie Ihr Sponsoring-Geld direkt in die verschiedenen Abteilungen und deren Bedürfnisse fließt."}),s.jsx(rx,{children:px.map((i,u)=>s.jsxs(ux,{children:[s.jsxs(cx,{children:[s.jsx(ox,{children:i.icon}),s.jsx(sx,{children:i.department})]}),s.jsx(fx,{children:i.items.map((o,c)=>s.jsxs(dx,{children:[s.jsx(hx,{children:o.icon}),s.jsx(mx,{children:o.text})]},c))}),s.jsx(gx,{children:i.costInfo})]},u))})]})})}const yx="/sportclub/assets/cheerleading_0-BLANwEed.jpg",vx="/sportclub/assets/cheerleading_1-NkLBARmH.jpg",xx="/sportclub/assets/cheerleading_2-CrezcZYL.jpg",Sx="/sportclub/assets/cheerleading_3-GN5rPHNN.jpg",jx="/sportclub/assets/herren_0-BVVgyt1l.jpg",zx="/sportclub/assets/herren_1-B8ywOnNy.jpg",Ex="/sportclub/assets/herren_10-DPVQsg9B.jpg",Tx="/sportclub/assets/herren_11-wfWG62H3.jpg",Ax="/sportclub/assets/herren_12-DEJSN2zG.jpg",_x="/sportclub/assets/herren_13-F52vdukE.jpg",wx="/sportclub/assets/herren_14-Cq9hoKfG.jpg",Rx="/sportclub/assets/herren_15-aYIFGauG.jpg",Mx="/sportclub/assets/herren_16-NYI2EaEN.jpg",Dx="/sportclub/assets/herren_17-B_52ysA2.jpg",Ox="/sportclub/assets/herren_18-DbwjVNKJ.jpg",Bx="/sportclub/assets/herren_19-BduD_J85.png",Cx="/sportclub/assets/herren_2--jFuixBF.jpg",Nx="/sportclub/assets/herren_3-BPz1zlkG.jpg",Ux="/sportclub/assets/herren_4-BZRrQaFr.jpg",Hx="/sportclub/assets/herren_5-D-QrfY2P.jpg",kx="/sportclub/assets/herren_6-DWQvi6Am.jpg",Lx="/sportclub/assets/herren_7-BXO6B8Bt.jpg",Gx="/sportclub/assets/herren_8-Cg4rdr7T.jpg",qx="/sportclub/assets/herren_9-DoLnTdRG.jpg",Yx=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":yx,"../assets/gallery/cheerleading/cheerleading_1.jpg":vx,"../assets/gallery/cheerleading/cheerleading_2.jpg":xx,"../assets/gallery/cheerleading/cheerleading_3.jpg":Sx,"../assets/gallery/herren/herren_0.jpg":jx,"../assets/gallery/herren/herren_1.jpg":zx,"../assets/gallery/herren/herren_10.jpg":Ex,"../assets/gallery/herren/herren_11.jpg":Tx,"../assets/gallery/herren/herren_12.jpg":Ax,"../assets/gallery/herren/herren_13.jpg":_x,"../assets/gallery/herren/herren_14.jpg":wx,"../assets/gallery/herren/herren_15.jpg":Rx,"../assets/gallery/herren/herren_16.jpg":Mx,"../assets/gallery/herren/herren_17.jpg":Dx,"../assets/gallery/herren/herren_18.jpg":Ox,"../assets/gallery/herren/herren_19.png":Bx,"../assets/gallery/herren/herren_2.jpg":Cx,"../assets/gallery/herren/herren_3.jpg":Nx,"../assets/gallery/herren/herren_4.jpg":Ux,"../assets/gallery/herren/herren_5.jpg":Hx,"../assets/gallery/herren/herren_6.jpg":kx,"../assets/gallery/herren/herren_7.jpg":Lx,"../assets/gallery/herren/herren_8.jpg":Gx,"../assets/gallery/herren/herren_9.jpg":qx});function Vx(i){const u=[...i];for(let o=u.length-1;o>0;o--){const c=Math.floor(Math.random()*(o+1));[u[o],u[c]]=[u[c],u[o]]}return u}function Zx(i){const u={};return Object.entries(i).forEach(([o,c])=>{const d=o.match(/gallery\/(.*?)\//),m=d?d[1]:"Sonstige";u[m]||(u[m]=[]),u[m].push(c)}),Object.keys(u).forEach(o=>{u[o]=Vx(u[o])}),u}function Xx(){const i=D.useMemo(()=>Zx(Yx),[]),[u,o]=D.useState(null);return D.useMemo(()=>{if(!u)return;const c=d=>{d.key==="Escape"&&o(null)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[u]),s.jsxs("section",{children:[s.jsx("h3",{children:"Bildergalerie"}),Object.entries(i).map(([c,d])=>s.jsxs("div",{style:{marginBottom:"2.5rem"},children:[s.jsx(Qx,{children:c.toUpperCase()}),s.jsx(Kx,{children:d.map((m,b)=>s.jsx(Jx,{src:m,alt:`Bild ${b+1} aus ${c}`,onClick:()=>o({folder:c,idx:b}),style:{cursor:"pointer"}},b))}),u&&u.folder===c&&s.jsx($x,{onClick:()=>o(null),children:s.jsxs(Wx,{onClick:m=>m.stopPropagation(),children:[s.jsx(Fx,{src:d[u.idx],alt:`Großansicht aus ${c}`}),s.jsx(Px,{onClick:()=>o(null),title:"Schließen",children:"×"})]})})]},c))]})}const Qx=y.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,Kx=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,Jx=y.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,$x=y.div`
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
`,Wx=y.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fx=y.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,Px=y.button`
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
`,Ix="/sportclub/assets/ricobet-DsVC-eZt.png",eS="/sportclub/assets/grafhardenberg-Di5cVggE.png",tS="/sportclub/assets/tasty-B2pSa1rE.png",nS="/sportclub/assets/horta-DydWIGV7.png",aS="/sportclub/assets/logans-BgpKwKYA.png",cg=i=>{switch(i){case"ricobet.png":return Ix;case"grafhardenberg.png":return eS;case"tasty.png":return tS;case"horta.png":return nS;case"logans.png":return aS;default:return}};function lS(){const i=[];return Ig.forEach(u=>{Array.isArray(u.sponsors)&&u.sponsors.forEach(o=>{i.push({name:o.name,image:o.image,website:o.website})})}),i.filter((u,o,c)=>c.findIndex(d=>d.name===u.name)===o)}const iS=lS();function rS(){return s.jsxs(uS,{children:[s.jsx(cS,{children:"Unsere Partner"}),s.jsx(oS,{children:iS.map((i,u)=>{const o=i.image&&cg(i.image)?s.jsx(fS,{src:cg(i.image),alt:i.name}):s.jsx(dS,{children:i.name});return i.website?s.jsx(Ds,{href:i.website,target:"_blank",rel:"noopener noreferrer",title:`Besuche ${i.name}`,children:o},u):s.jsx(sS,{children:o},u)})})]})}const uS=y.section`
  background: #fff6fa;
  border-radius: 12px;
  margin: 3rem 0 2rem 0;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 12px rgba(225, 0, 115, 0.06);
  text-align: center;
`,cS=y.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2.2rem;
`,oS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2.2rem 2.5rem;
  align-items: center;
  justify-items: center;
`,Ds=y.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover {
    transform: scale(1.05);
  }
`,sS=y.div`
  display: block;
`,fS=y.img`
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
  ${Ds}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`,dS=y.div`
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
  ${Ds}:hover & {
    background: #e10073;
    color: #fff;
  }
`,hS=y.section`
  background: url("hero.jpg") center/cover no-repeat;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
`,mS=y.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
`,gS=y.h1`
  position: relative;
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
`,pS=y.h2`
  position: relative;
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
  text-align: center;
  margin-top: 0.5rem;
`,og=y.a`
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
`,bS=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,yS=y.main`
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
`,vS=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #222;
  font-weight: 800;
  margin-bottom: 3rem;
  border-bottom: 4px solid #e10073;
  display: inline-block;
  scroll-margin-top: 80px; /* Für Anker-Navigation */
`,xS=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0 1.5rem 0;
  flex-wrap: wrap;
`,SS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,jS=y.h3`
  font-size: 1.7rem;
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
`,sg=y.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`,zS=y.div`
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
`,ES=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,TS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,AS=y.p`
  font-size: clamp(1.13rem, 1.5vw, 1.25rem);
  color: #222;
  text-align: center;
  margin-bottom: 1.1rem;
  max-width: 700px;
`,_S=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,wS=y.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,RS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Vr=y.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Zr=y.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,Xr=y.ul`
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
`,MS=y.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,DS=y.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,OS=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,BS=y.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,CS=y.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,NS=y.ul`
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
`,gi=y.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,pi=y.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,Qo=y.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ko=y.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,Jo=y.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,$o=y.div`
  font-size: 0.98rem;
  color: #666;
`;function US(){return s.jsxs(s.Fragment,{children:[s.jsxs(hS,{children:[s.jsx(mS,{}),s.jsxs(ES,{children:[s.jsx(gS,{children:"SC Konstanz-Wollmatingen"}),s.jsx(pS,{children:"Ihre Marke im Fokus – direkt am Spielfeldrand"}),s.jsxs(bS,{children:[s.jsx(og,{href:"#sponsoring-pakete",children:"Jetzt Sponsor werden"}),s.jsx(og,{href:"#spenden",secondary:!0,children:"Spenden"})]})]})]}),s.jsxs(yS,{children:[s.jsx(vS,{id:"sponsoring-pakete",children:"Sponsoring-Pakete 2025/2026"}),s.jsx(TS,{children:s.jsx(AS,{children:"Gemeinsam für den Sport in Konstanz: Unterstützen Sie unsere Teams, fördern Sie Talente und werden Sie Teil einer starken Gemeinschaft. Ihr Engagement als Sponsor macht den Unterschied – auf und neben dem Spielfeld!"})}),s.jsx(Av,{packages:Ig}),s.jsx(Nv,{}),s.jsx(tx,{}),s.jsx(bx,{}),s.jsx(rS,{}),s.jsxs(_S,{children:[s.jsx(wS,{children:"Unsere Reichweite & Kanäle"}),s.jsxs(RS,{children:[s.jsxs(Vr,{children:[s.jsx(Zr,{children:"📱 Social Media"}),s.jsxs(Xr,{children:[s.jsx("li",{children:"Instagram: 2.500+ Follower"}),s.jsx("li",{children:"Reel-Reichweite bis 200k"}),s.jsx("li",{children:"Facebook: 1.800+ Follower"})]})]}),s.jsxs(Vr,{children:[s.jsx(Zr,{children:"🌐 Website & Online"}),s.jsxs(Xr,{children:[s.jsx("li",{children:"Monatliche Besucher: 5.000+"}),s.jsx("li",{children:"Newsletter-Abonnenten: 450+"}),s.jsx("li",{children:"Durchschnittliche Seitenaufrufe: 15.000+"}),s.jsx("li",{children:"Google-Sichtbarkeit: 95% lokale Suche"})]})]}),s.jsxs(Vr,{children:[s.jsx(Zr,{children:"🏟️ Offline & Events"}),s.jsxs(Xr,{children:[s.jsx("li",{children:"Heimspiele pro Saison: 15+"}),s.jsx("li",{children:"Durchschnittliche Zuschauer: 200+"}),s.jsx("li",{children:"Events & Turniere: 8+ pro Jahr"}),s.jsx("li",{children:"Stadionheft-Auflage: 300+ pro Spiel"})]})]}),s.jsxs(Vr,{children:[s.jsx(Zr,{children:"📢 Zusätzliche Kanäle"}),s.jsxs(Xr,{children:[s.jsx("li",{children:"Pressearbeit & Medienkontakte"}),s.jsx("li",{children:"Kooperationen mit lokalen Partnern"}),s.jsx("li",{children:"Vereinsfeste & Community-Events"}),s.jsx("li",{children:"Jugendförderung & Nachwuchsarbeit"})]})]})]})]}),s.jsxs(MS,{children:[s.jsx(DS,{children:'Werbung im Stadionmagazin „Heimspiel"'}),s.jsxs(OS,{children:[s.jsxs(BS,{children:[s.jsxs(Qo,{children:[s.jsx(Ko,{children:"1 Seite (Farbe)"}),s.jsx(Jo,{children:"1.000 €"}),s.jsx($o,{children:"DIN A4 (297 × 210 mm)"})]}),s.jsxs(Qo,{children:[s.jsx(Ko,{children:"1/2 Seite (Farbe)"}),s.jsx(Jo,{children:"500 €"}),s.jsx($o,{children:"DIN A5 (148 × 210 mm)"})]}),s.jsxs(Qo,{children:[s.jsx(Ko,{children:"1/4 Seite (Farbe)"}),s.jsx(Jo,{children:"250 €"}),s.jsx($o,{children:"DIN A6 (105 × 148 mm)"})]})]}),s.jsx(CS,{children:s.jsxs(NS,{children:[s.jsxs(gi,{children:[s.jsx(pi,{}),"15 Ausgaben pro Saison"]}),s.jsxs(gi,{children:[s.jsx(pi,{}),"ca. 100 Exemplare pro Heimspiel"]}),s.jsxs(gi,{children:[s.jsx(pi,{}),"Digitale Version (Social Media & Website)"]}),s.jsxs(gi,{children:[s.jsx(pi,{}),"1.000 – 1.500 Online Zugriffe je Ausgabe"]}),s.jsxs(gi,{children:[s.jsx(pi,{}),"DIN A4 Stadionmagazin"]})]})})]})]}),s.jsx(xS,{}),s.jsxs(SS,{children:[s.jsx(jS,{children:"Unsere Ziele und Ihr Beitrag als Sponsor"}),s.jsx(sg,{children:"Der SC Konstanz-Wollmatingen blickt mit großer Motivation auf die Saison 2025/26. Unsere Abteilungen verfolgen ambitionierte, aber realistische Ziele, die wir mit Ihrer Unterstützung erreichen möchten:"}),s.jsxs(zS,{children:[s.jsxs(Ja,{children:[s.jsx($a,{children:"1. Mannschaft (Herren)"}),s.jsx(Wa,{children:"Unser klares Ziel ist der Aufstieg in die nächsthöhere Liga. Dafür investieren wir in eine gezielte sportliche Weiterentwicklung und benötigen insbesondere Unterstützung für die Finanzierung von Trainings- und Spielbetrieb."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"2. Mannschaft (Herren)"}),s.jsx(Wa,{children:"Die zweite Mannschaft strebt einen Platz unter den Top 3 an. Auch hier sind gezielte Fördermaßnahmen und eine stabile finanzielle Basis entscheidend, um das sportliche Potenzial voll auszuschöpfen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Damenmannschaft"}),s.jsx(Wa,{children:"Unsere Damen möchten sich in der Landesliga unter den besten drei Teams etablieren und ihren Bezirkspokal verteidigen. Die längeren Auswärtsfahrten in dieser Liga bringen erhöhte Reisekosten mit sich, für die wir gezielt Unterstützung suchen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Cheerleading"}),s.jsx(Wa,{children:"Das Cheerleading-Team plant die Teilnahme an mehreren Turnieren und benötigt dringend einen neuen Trikotsatz (Cheerleading-Uniformen). Auch hier sind Reisekosten ein wichtiger Faktor, um die Teilnahme an Wettbewerben zu ermöglichen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Fördergruppe / Jugend"}),s.jsx(Wa,{children:"Mit der Fördergruppe legen wir den Grundstein für den neuen Jugendfußball-Förderverein (JFV) Konstanz. Unser Ziel ist es, gezielt Talente zu fördern und ihnen durch qualifizierte Trainer optimale Entwicklungsmöglichkeiten zu bieten. Für die Finanzierung von Trainerfortbildungen und zusätzlichem Trainingsmaterial sind wir auf Unterstützung angewiesen."})]}),s.jsxs(Ja,{children:[s.jsx($a,{children:"Vereinsziel: Langfristige Partnerschaften"}),s.jsx(Wa,{children:"Unser übergeordnetes Ziel ist es, langfristige Partner zu gewinnen, die uns sportlich wie wirtschaftlich begleiten und gemeinsam mit uns die Weiterentwicklung des Vereins in den kommenden Jahren aktiv mitgestalten möchten."})]})]}),s.jsxs(sg,{children:[s.jsx("b",{children:"Warum Ihre Unterstützung wichtig ist:"}),s.jsx("br",{}),"Die genannten Ziele sind nur mit einer soliden finanziellen Basis erreichbar. Ihre Förderung trägt dazu bei, Reisekosten zu decken, moderne Ausrüstung bereitzustellen und die sportliche Entwicklung aller Teams nachhaltig zu sichern. Sie investieren damit direkt in die Zukunft des Sports in Konstanz und in die Entwicklung junger Talente.",s.jsx("br",{}),s.jsx("br",{}),"Wir freuen uns, gemeinsam mit Ihnen diese Ziele zu verwirklichen!"]})]}),s.jsx(Xx,{})]}),s.jsx(Ms,{})]})}const HS=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],kS=y.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;
`,LS=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,GS=y.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,qS=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,YS=y.main`
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
`,VS=y.section`
  margin-bottom: 4rem;
`,ZS=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,XS=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,QS=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,KS=y.div`
  text-align: center;
  margin-bottom: 3rem;
`,JS=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,$S=y.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,WS=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,FS=y.div`
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
`,PS=y.div`
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
`,IS=y.div`
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
`,e2=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,t2=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,n2=y.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,a2=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,l2=y.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,i2=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,r2=y.button`
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
`,u2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,c2=y.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,o2=y.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,s2=y.div`
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
`,fg=y.div`
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
`,f2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,d2=y.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,h2=y.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,m2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Wo=y.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Fo=y.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Po=y.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Io=y.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,g2=y.a`
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
`,p2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,b2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,y2=y.ul`
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
`;function v2(){return s.jsxs(s.Fragment,{children:[s.jsx(kS,{children:s.jsxs(LS,{children:[s.jsx(GS,{children:"SCKW Jobbörse"}),s.jsx(qS,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),s.jsxs(YS,{children:[s.jsxs(VS,{children:[s.jsx(ZS,{children:"Willkommen bei der SCKW Jobbörse"}),s.jsx(XS,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),s.jsxs(QS,{children:[s.jsxs(KS,{children:[s.jsx(JS,{children:"So könnte es aussehen"}),s.jsx($S,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),s.jsx(WS,{children:HS.map(i=>s.jsxs(FS,{children:[i.isExample&&s.jsx(PS,{children:"MUSTER"}),s.jsx(IS,{children:s.jsx(e2,{src:`/sponsors/${i.logo}`,alt:`${i.company} Logo`,onError:u=>{u.currentTarget.style.display="none",u.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",u.currentTarget.parentElement.innerHTML=i.company.substring(0,2).toUpperCase()}})}),s.jsx(t2,{children:i.title}),s.jsx(n2,{children:i.company}),s.jsx(a2,{children:i.tags.map((u,o)=>s.jsx(l2,{children:u},o))}),s.jsx(i2,{children:i.description}),s.jsx(r2,{children:"Mehr erfahren"})]},i.id))})]}),s.jsxs(u2,{children:[s.jsx(c2,{children:"Preise für Stellenausschreibungen"}),s.jsx(o2,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),s.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),s.jsxs(s2,{children:[s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Basis"}),s.jsx(Ia,{children:"149 €"}),s.jsx(el,{children:"netto / Anzeige"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),s.jsx(Re,{children:"Firmenlogo und Link"}),s.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),s.jsx(Re,{children:"Bewerbermanagement"})]}),s.jsx(nl,{className:"secondary",children:"Basis wählen"})]}),s.jsxs(Fa,{className:"popular",children:[s.jsx(fg,{children:"BELIEBT"}),s.jsx(Pa,{children:"Standard"}),s.jsx(Ia,{children:"229 €"}),s.jsx(el,{children:"netto / Anzeige"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Alle Basis-Features"}),s.jsx(Re,{children:"1 Social Media Post"}),s.jsx(Re,{children:"Instagram + Facebook Reichweite"}),s.jsx(Re,{children:"Newsletter-Erwähnung"})]}),s.jsx(nl,{children:"Standard wählen"})]}),s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Boosted"}),s.jsx(Ia,{children:"349 €"}),s.jsx(el,{children:"netto / Anzeige"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Alle Standard-Features"}),s.jsx(Re,{children:"Instagram Story"}),s.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),s.jsx(Re,{children:"Prioritäre Platzierung"})]}),s.jsx(nl,{className:"secondary",children:"Boosted wählen"})]})]}),s.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),s.jsxs(f2,{children:[s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Job Flat SMALL"}),s.jsx(Ia,{children:"799 €"}),s.jsx(el,{children:"netto / Jahr"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),s.jsx(Re,{children:"6 Social Media Posts"}),s.jsx(Re,{children:"Website-Präsenz"}),s.jsx(Re,{children:"Newsletter-Integration"})]}),s.jsx(nl,{className:"secondary",children:"Small Flat"})]}),s.jsxs(Fa,{className:"popular",children:[s.jsx(fg,{children:"EMPFOHLEN"}),s.jsx(Pa,{children:"Job Flat MEDIUM"}),s.jsx(Ia,{children:"1.199 €"}),s.jsx(el,{children:"netto / Jahr"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),s.jsx(Re,{children:"Stadionmagazin-Präsenz"}),s.jsx(Re,{children:"Social Media Posts"}),s.jsx(Re,{children:"Stories & Highlights"})]}),s.jsx(nl,{children:"Medium Flat"})]}),s.jsxs(Fa,{children:[s.jsx(Pa,{children:"Job Flat PARTNER"}),s.jsx(Ia,{children:"1.499 €"}),s.jsx(el,{children:"netto / Jahr"}),s.jsxs(tl,{children:[s.jsx(Re,{children:"Unbegrenzte Anzeigen"}),s.jsx(Re,{children:"Erwähnung bei Heimspielen"}),s.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),s.jsx(Re,{children:"Prioritärer Support"})]}),s.jsx(nl,{className:"secondary",children:"Partner Flat"})]})]}),s.jsxs(d2,{children:[s.jsx(h2,{children:"➕ Zusatzoptionen"}),s.jsxs(m2,{children:[s.jsxs(Wo,{children:[s.jsx(Fo,{children:"Social Story"}),s.jsx(Po,{children:"39 €"}),s.jsx(Io,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),s.jsxs(Wo,{children:[s.jsx(Fo,{children:"Designservice"}),s.jsx(Po,{children:"59 €"}),s.jsx(Io,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),s.jsxs(Wo,{children:[s.jsx(Fo,{children:"Stadionmagazin"}),s.jsx(Po,{children:"99 €"}),s.jsx(Io,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:s.jsx(g2,{href:"mailto:grimm@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),s.jsxs(p2,{children:[s.jsx(b2,{children:"🎯 Warum SCKW Jobbörse?"}),s.jsxs(y2,{children:[s.jsxs(al,{children:[s.jsx(ll,{children:"🏠"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"👥"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"💰"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"📈"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"⚡"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),s.jsxs(al,{children:[s.jsx(ll,{children:"🤲"}),s.jsxs(il,{children:[s.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),s.jsx(Ms,{})]})}const x2=y.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 1.5rem;
`,S2=y.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,j2=y.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,z2=y.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,E2=y.main`
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
`,T2=y.section`
  margin-bottom: 4rem;
`,A2=y.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,_2=y.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,w2=y.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,R2=y.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,M2=y.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,D2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,O2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,B2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,es=y.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,ts=y.div`
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
`,ns=y.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,as=y.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,C2=y.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,N2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,U2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,ls=y.div`
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
`,is=y.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,rs=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,us=y.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,cs=y.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,H2=y.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,k2=y.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,L2=y.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,G2=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Qr=y.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,Kr=y.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,Jr=y.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,q2=y.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,Y2=y.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,V2=y.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Z2=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,dg=y.a`
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
`,X2=y.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
`,Q2=y.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 1rem;
  text-align: center;
`,K2=y.div`
  width: 100%;
  height: 20px;
  background: #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`,J2=y.div`
  width: ${i=>i.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #059669, #10b981);
  transition: width 0.3s ease;
`,$2=y.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #64748b;
`;function W2(){return s.jsxs(s.Fragment,{children:[s.jsx(x2,{children:s.jsxs(S2,{children:[s.jsx(j2,{children:"🏟️ Fürstenberg Sportplatz Renovierung"}),s.jsx(z2,{children:"Gemeinsam renovieren wir unser Zuhause - für die Zukunft des Sports in Konstanz"})]})}),s.jsxs(E2,{children:[s.jsxs(T2,{children:[s.jsx(A2,{children:"Unser Sportplatz braucht Ihre Hilfe!"}),s.jsx(_2,{children:"Der Fürstenberg Sportplatz ist das Herzstück unseres Vereins. Nach jahrelanger intensiver Nutzung sind dringende Renovierungsarbeiten erforderlich, um unseren Spielern und Fans weiterhin optimale Bedingungen bieten zu können."}),s.jsxs(w2,{children:[s.jsx(R2,{children:"⚠️ Dringender Handlungsbedarf"}),s.jsx(M2,{children:"Die Kabinen sind nicht mehr nutzbar, die Außenfassade bröckelt und die Wascheinrichtungen sind defekt. Ohne Ihre Unterstützung können wir den Spielbetrieb nicht aufrechterhalten!"})]})]}),s.jsxs(D2,{children:[s.jsx(O2,{children:"📸 Aktueller Zustand - So sieht es aus"}),s.jsxs(B2,{children:[s.jsxs(es,{children:[s.jsxs(ts,{children:["📷 Foto: Kabinen Innenbereich",s.jsx("br",{}),"(Hier werden Bilder der",s.jsx("br",{}),"ausgebrochenen Bänke eingefügt)"]}),s.jsx(ns,{children:"❌ Kabinen unbrauchbar"}),s.jsx(as,{children:"Die Bänke in den Umkleidekabinen sind komplett ausgebrochen. Spieler müssen sich derzeit im Freien umziehen - das ist besonders im Winter untragbar."})]}),s.jsxs(es,{children:[s.jsxs(ts,{children:["📷 Foto: Außenfassade",s.jsx("br",{}),"(Hier werden Bilder der",s.jsx("br",{}),"abblätternden Fassade eingefügt)"]}),s.jsx(ns,{children:"🏚️ Fassade marode"}),s.jsx(as,{children:"Der Putz der Außenfassade platzt ab und hinterlässt einen ungepflegten Eindruck. Hier sollen auch die Namen unserer Sponsoren sichtbar werden."})]}),s.jsxs(es,{children:[s.jsxs(ts,{children:["📷 Foto: Waschküche",s.jsx("br",{}),"(Hier werden Bilder der",s.jsx("br",{}),"defekten Geräte eingefügt)"]}),s.jsx(ns,{children:"🚫 Keine funktionsfähige Wäsche"}),s.jsx(as,{children:"Waschmaschine und Trockner sind defekt. Die Spielkleidung kann nicht ordnungsgemäß gereinigt werden, was hygienische Probleme mit sich bringt."})]})]})]}),s.jsxs(C2,{children:[s.jsx(N2,{children:"🔨 Das werden wir renovieren"}),s.jsxs(U2,{children:[s.jsxs(ls,{children:[s.jsx(is,{children:"🪑"}),s.jsx(rs,{children:"Kabinen sanieren"}),s.jsx(us,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),s.jsx(cs,{children:"~8.000 €"})]}),s.jsxs(ls,{children:[s.jsx(is,{children:"🎨"}),s.jsx(rs,{children:"Fassade neu gestalten"}),s.jsx(us,{children:"Putz erneuern, professionell streichen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),s.jsx(cs,{children:"~12.000 €"})]}),s.jsxs(ls,{children:[s.jsx(is,{children:"🧺"}),s.jsx(rs,{children:"Waschküche erneuern"}),s.jsx(us,{children:"Neue, energieeffiziente Waschmaschine und Trockner anschaffen für die professionelle Pflege der Sportkleidung."}),s.jsx(cs,{children:"~5.000 €"})]})]})]}),s.jsxs(H2,{children:[s.jsx(k2,{children:"🤝 Werden Sie Renovierungs-Partner!"}),s.jsx(L2,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),s.jsxs(G2,{children:[s.jsxs(Qr,{children:[s.jsx(Kr,{children:"🏆"}),s.jsxs(Jr,{children:[s.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),s.jsxs(Qr,{children:[s.jsx(Kr,{children:"📄"}),s.jsxs(Jr,{children:[s.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),s.jsxs(Qr,{children:[s.jsx(Kr,{children:"📱"}),s.jsxs(Jr,{children:[s.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),s.jsxs(Qr,{children:[s.jsx(Kr,{children:"🎯"}),s.jsxs(Jr,{children:[s.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),s.jsxs(q2,{children:[s.jsx(Y2,{children:"💚 Jetzt spenden und helfen!"}),s.jsx(V2,{children:"Jeder Beitrag bringt uns unserem Ziel näher. Egal ob 50€ oder 5.000€ - gemeinsam schaffen wir es, unseren Sportplatz zu renovieren!"}),s.jsxs(X2,{children:[s.jsx(Q2,{children:"Unser Fortschritt"}),s.jsx(K2,{children:s.jsx(J2,{$progress:12.8})}),s.jsxs($2,{children:[s.jsxs("span",{children:[3200 .toLocaleString("de-DE")," € gesammelt"]}),s.jsxs("span",{children:["Ziel: ",25e3.toLocaleString("de-DE")," €"]})]})]}),s.jsxs(Z2,{children:[s.jsx(dg,{className:"primary",href:"https://www.paypal.me/sckw2012",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),s.jsx(dg,{href:"mailto:grimm@sckw.de?subject=Sportplatz Renovierung - Bankverbindung&body=Hallo liebes SCKW-Team,%0A%0Aich möchte für die Sportplatz-Renovierung spenden und benötige die Bankverbindung.%0A%0AMein Name: %0AFirma: %0ASpendenhöhe: %0A%0ABitte senden Sie mir die Kontodaten zu.%0A%0AHerzliche Grüße",children:"🏦 Per Überweisung spenden"})]})]})]}),s.jsx(Ms,{})]})}function F2(){return s.jsxs(Qb,{basename:"/sportclub/",children:[s.jsx(ov,{}),s.jsxs(zb,{children:[s.jsx($r,{path:"/",element:s.jsx(US,{})}),s.jsx($r,{path:"/jobs",element:s.jsx(v2,{})}),s.jsx($r,{path:"/renovierung",element:s.jsx(W2,{})})]})]})}console.log("sckw sponsoring Website loaded");O1.createRoot(document.getElementById("root")).render(s.jsx(D.StrictMode,{children:s.jsx(F2,{})}));
