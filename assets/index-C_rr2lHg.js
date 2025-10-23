(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const b of g.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function c(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerPolicy&&(g.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?g.credentials="include":d.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(d){if(d.ep)return;d.ep=!0;const g=c(d);fetch(d.href,g)}})();function gx(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var qu={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function px(){if(u0)return vi;u0=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,g){var b=null;if(g!==void 0&&(b=""+g),d.key!==void 0&&(b=""+d.key),"key"in d){g={};for(var j in d)j!=="key"&&(g[j]=d[j])}else g=d;return d=g.ref,{$$typeof:l,type:u,key:b,ref:d!==void 0?d:null,props:g}}return vi.Fragment=s,vi.jsx=c,vi.jsxs=c,vi}var c0;function bx(){return c0||(c0=1,qu.exports=px()),qu.exports}var o=bx(),Vu={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function xx(){if(f0)return ie;f0=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function k(y){return y===null||typeof y!="object"?null:(y=R&&y[R]||y["@@iterator"],typeof y=="function"?y:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,G={};function X(y,N,Y){this.props=y,this.context=N,this.refs=G,this.updater=Y||H}X.prototype.isReactComponent={},X.prototype.setState=function(y,N){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,N,"setState")},X.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function U(){}U.prototype=X.prototype;function J(y,N,Y){this.props=y,this.context=N,this.refs=G,this.updater=Y||H}var Q=J.prototype=new U;Q.constructor=J,L(Q,X.prototype),Q.isPureReactComponent=!0;var ae=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(y,N,Y,V,F,ce){return Y=ce.ref,{$$typeof:l,type:y,key:N,ref:Y!==void 0?Y:null,props:ce}}function Ee(y,N){return W(y.type,N,void 0,void 0,void 0,y.props)}function we(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function at(y){var N={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return N[Y]})}var it=/\/+/g;function Ye(y,N){return typeof y=="object"&&y!==null&&y.key!=null?at(""+y.key):N.toString(36)}function Zt(){}function Kt(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Zt,Zt):(y.status="pending",y.then(function(N){y.status==="pending"&&(y.status="fulfilled",y.value=N)},function(N){y.status==="pending"&&(y.status="rejected",y.reason=N)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function qe(y,N,Y,V,F){var ce=typeof y;(ce==="undefined"||ce==="boolean")&&(y=null);var ee=!1;if(y===null)ee=!0;else switch(ce){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(y.$$typeof){case l:case s:ee=!0;break;case E:return ee=y._init,qe(ee(y._payload),N,Y,V,F)}}if(ee)return F=F(y),ee=V===""?"."+Ye(y,0):V,ae(F)?(Y="",ee!=null&&(Y=ee.replace(it,"$&/")+"/"),qe(F,N,Y,"",function(Pe){return Pe})):F!=null&&(we(F)&&(F=Ee(F,Y+(F.key==null||y&&y.key===F.key?"":(""+F.key).replace(it,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(y))for(var pe=0;pe<y.length;pe++)V=y[pe],ce=Ve+Ye(V,pe),ee+=qe(V,N,Y,ce,F);else if(pe=k(y),typeof pe=="function")for(y=pe.call(y),pe=0;!(V=y.next()).done;)V=V.value,ce=Ve+Ye(V,pe++),ee+=qe(V,N,Y,ce,F);else if(ce==="object"){if(typeof y.then=="function")return qe(Kt(y),N,Y,V,F);throw N=String(y),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function C(y,N,Y){if(y==null)return y;var V=[],F=0;return qe(y,V,"","",function(ce){return N.call(Y,ce,F++)}),V}function q(y){if(y._status===-1){var N=y._result;N=N(),N.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=N)}if(y._status===1)return y._result.default;throw y._result}var P=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ue(){}return ie.Children={map:C,forEach:function(y,N,Y){C(y,function(){N.apply(this,arguments)},Y)},count:function(y){var N=0;return C(y,function(){N++}),N},toArray:function(y){return C(y,function(N){return N})||[]},only:function(y){if(!we(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ie.Component=X,ie.Fragment=c,ie.Profiler=d,ie.PureComponent=J,ie.StrictMode=u,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(y){return Z.H.useMemoCache(y)}},ie.cache=function(y){return function(){return y.apply(null,arguments)}},ie.cloneElement=function(y,N,Y){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var V=L({},y.props),F=y.key,ce=void 0;if(N!=null)for(ee in N.ref!==void 0&&(ce=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(y.type,F,void 0,void 0,ce,V)},ie.createContext=function(y){return y={$$typeof:b,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:g,_context:y},y},ie.createElement=function(y,N,Y){var V,F={},ce=null;if(N!=null)for(V in N.key!==void 0&&(ce=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(y&&y.defaultProps)for(V in ee=y.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(y,ce,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(y){return{$$typeof:j,render:y}},ie.isValidElement=we,ie.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:q}},ie.memo=function(y,N){return{$$typeof:p,type:y,compare:N===void 0?null:N}},ie.startTransition=function(y){var N=Z.T,Y={};Z.T=Y;try{var V=y(),F=Z.S;F!==null&&F(Y,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ue,P)}catch(ce){P(ce)}finally{Z.T=N}},ie.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ie.use=function(y){return Z.H.use(y)},ie.useActionState=function(y,N,Y){return Z.H.useActionState(y,N,Y)},ie.useCallback=function(y,N){return Z.H.useCallback(y,N)},ie.useContext=function(y){return Z.H.useContext(y)},ie.useDebugValue=function(){},ie.useDeferredValue=function(y,N){return Z.H.useDeferredValue(y,N)},ie.useEffect=function(y,N,Y){var V=Z.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(y,N)},ie.useId=function(){return Z.H.useId()},ie.useImperativeHandle=function(y,N,Y){return Z.H.useImperativeHandle(y,N,Y)},ie.useInsertionEffect=function(y,N){return Z.H.useInsertionEffect(y,N)},ie.useLayoutEffect=function(y,N){return Z.H.useLayoutEffect(y,N)},ie.useMemo=function(y,N){return Z.H.useMemo(y,N)},ie.useOptimistic=function(y,N){return Z.H.useOptimistic(y,N)},ie.useReducer=function(y,N,Y){return Z.H.useReducer(y,N,Y)},ie.useRef=function(y){return Z.H.useRef(y)},ie.useState=function(y){return Z.H.useState(y)},ie.useSyncExternalStore=function(y,N,Y){return Z.H.useSyncExternalStore(y,N,Y)},ie.useTransition=function(){return Z.H.useTransition()},ie.version="19.1.0",ie}var d0;function Pc(){return d0||(d0=1,Vu.exports=xx()),Vu.exports}var M=Pc();const sa=gx(M);var Xu={exports:{}},yi={},Qu={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function vx(){return h0||(h0=1,function(l){function s(C,q){var P=C.length;C.push(q);e:for(;0<P;){var ue=P-1>>>1,y=C[ue];if(0<d(y,q))C[ue]=q,C[P]=y,P=ue;else break e}}function c(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var q=C[0],P=C.pop();if(P!==q){C[0]=P;e:for(var ue=0,y=C.length,N=y>>>1;ue<N;){var Y=2*(ue+1)-1,V=C[Y],F=Y+1,ce=C[F];if(0>d(V,P))F<y&&0>d(ce,V)?(C[ue]=ce,C[F]=P,ue=F):(C[ue]=V,C[Y]=P,ue=Y);else if(F<y&&0>d(ce,P))C[ue]=ce,C[F]=P,ue=F;else break e}}return q}function d(C,q){var P=C.sortIndex-q.sortIndex;return P!==0?P:C.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;l.unstable_now=function(){return g.now()}}else{var b=Date,j=b.now();l.unstable_now=function(){return b.now()-j}}var v=[],p=[],E=1,R=null,k=3,H=!1,L=!1,G=!1,X=!1,U=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function ae(C){for(var q=c(p);q!==null;){if(q.callback===null)u(p);else if(q.startTime<=C)u(p),q.sortIndex=q.expirationTime,s(v,q);else break;q=c(p)}}function Z(C){if(G=!1,ae(C),!L)if(c(v)!==null)L=!0,le||(le=!0,Ye());else{var q=c(p);q!==null&&qe(Z,q.startTime-C)}}var le=!1,W=-1,Ee=5,we=-1;function at(){return X?!0:!(l.unstable_now()-we<Ee)}function it(){if(X=!1,le){var C=l.unstable_now();we=C;var q=!0;try{e:{L=!1,G&&(G=!1,J(W),W=-1),H=!0;var P=k;try{t:{for(ae(C),R=c(v);R!==null&&!(R.expirationTime>C&&at());){var ue=R.callback;if(typeof ue=="function"){R.callback=null,k=R.priorityLevel;var y=ue(R.expirationTime<=C);if(C=l.unstable_now(),typeof y=="function"){R.callback=y,ae(C),q=!0;break t}R===c(v)&&u(v),ae(C)}else u(v);R=c(v)}if(R!==null)q=!0;else{var N=c(p);N!==null&&qe(Z,N.startTime-C),q=!1}}break e}finally{R=null,k=P,H=!1}q=void 0}}finally{q?Ye():le=!1}}}var Ye;if(typeof Q=="function")Ye=function(){Q(it)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Kt=Zt.port2;Zt.port1.onmessage=it,Ye=function(){Kt.postMessage(null)}}else Ye=function(){U(it,0)};function qe(C,q){W=U(function(){C(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(C){C.callback=null},l.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<C?Math.floor(1e3/C):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(C){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var P=k;k=q;try{return C()}finally{k=P}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(C,q){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=k;k=C;try{return q()}finally{k=P}},l.unstable_scheduleCallback=function(C,q,P){var ue=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ue+P:ue):P=ue,C){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=P+y,C={id:E++,callback:q,priorityLevel:C,startTime:P,expirationTime:y,sortIndex:-1},P>ue?(C.sortIndex=P,s(p,C),c(v)===null&&C===c(p)&&(G?(J(W),W=-1):G=!0,qe(Z,P-ue))):(C.sortIndex=y,s(v,C),L||H||(L=!0,le||(le=!0,Ye()))),C},l.unstable_shouldYield=at,l.unstable_wrapCallback=function(C){var q=k;return function(){var P=k;k=q;try{return C.apply(this,arguments)}finally{k=P}}}}(Zu)),Zu}var m0;function yx(){return m0||(m0=1,Qu.exports=vx()),Qu.exports}var Ku={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Sx(){if(g0)return tt;g0=1;var l=Pc();function s(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function g(v,p,E){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:R==null?null:""+R,children:v,containerInfo:p,implementation:E}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,tt.createPortal=function(v,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return g(v,p,null,E)},tt.flushSync=function(v){var p=b.T,E=u.p;try{if(b.T=null,u.p=2,v)return v()}finally{b.T=p,u.p=E,u.d.f()}},tt.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(v,p))},tt.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},tt.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var E=p.as,R=j(E,p.crossOrigin),k=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?u.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:R,integrity:k,fetchPriority:H}):E==="script"&&u.d.X(v,{crossOrigin:R,integrity:k,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},tt.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=j(p.as,p.crossOrigin);u.d.M(v,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(v)},tt.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,R=j(E,p.crossOrigin);u.d.L(v,E,{crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},tt.preloadModule=function(v,p){if(typeof v=="string")if(p){var E=j(p.as,p.crossOrigin);u.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(v)},tt.requestFormReset=function(v){u.d.r(v)},tt.unstable_batchedUpdates=function(v,p){return v(p)},tt.useFormState=function(v,p,E){return b.H.useFormState(v,p,E)},tt.useFormStatus=function(){return b.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var p0;function jx(){if(p0)return Ku.exports;p0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Ku.exports=Sx(),Ku.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function wx(){if(b0)return yi;b0=1;var l=yx(),s=Pc(),c=jx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(g(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return j(i),e;if(r===a)return j(i),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,h=i.child;h;){if(h===n){f=!0,n=i,a=r;break}if(h===a){f=!0,a=i,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=i;break}if(h===a){f=!0,a=r,n=i;break}h=h.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Zt=Symbol.for("react.client.reference");function Kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case X:return"Profiler";case G:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Q:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Kt(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return Kt(e(t))}catch{}}return null}var qe=Array.isArray,C=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ue=[],y=-1;function N(e){return{current:e}}function Y(e){0>y||(e.current=ue[y],ue[y]=null,y--)}function V(e,t){y++,ue[y]=e.current,e.current=t}var F=N(null),ce=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(ce,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Um(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Um(t),e=Hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(F),V(F,e)}function Pe(){Y(F),Y(ce),Y(ee)}function Gn(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=Hm(t,e.type);t!==n&&(V(ce,e),V(F,n))}function $t(e){ce.current===e&&(Y(F),Y(ce)),Ve.current===e&&(Y(Ve),mi._currentValue=P)}var St=Object.prototype.hasOwnProperty,Ro=l.unstable_scheduleCallback,Mo=l.unstable_cancelCallback,Kp=l.unstable_shouldYield,$p=l.unstable_requestPaint,Ht=l.unstable_now,Jp=l.unstable_getCurrentPriorityLevel,bf=l.unstable_ImmediatePriority,xf=l.unstable_UserBlockingPriority,ki=l.unstable_NormalPriority,Wp=l.unstable_LowPriority,vf=l.unstable_IdlePriority,Fp=l.log,Pp=l.unstable_setDisableYieldValue,jl=null,ft=null;function gn(e){if(typeof Fp=="function"&&Pp(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(jl,e)}catch{}}var dt=Math.clz32?Math.clz32:t1,Ip=Math.log,e1=Math.LN2;function t1(e){return e>>>=0,e===0?32:31-(Ip(e)/e1|0)|0}var Ci=256,Di=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?i=Yn(a):(f&=h,f!==0?i=Yn(f):n||(n=h&~e,n!==0&&(i=Yn(n))))):(h=a&~r,h!==0?i=Yn(h):f!==0?i=Yn(f):n||(n=a&~e,n!==0&&(i=Yn(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function wl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function n1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yf(){var e=Ci;return Ci<<=1,(Ci&4194048)===0&&(Ci=256),e}function Sf(){var e=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),e}function ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function a1(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,x=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var D=31-dt(n),O=1<<D;h[D]=0,x[D]=-1;var T=z[D];if(T!==null)for(z[D]=null,D=0;D<T.length;D++){var A=T[D];A!==null&&(A.lane&=-536870913)}n&=~O}a!==0&&jf(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function jf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function wf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Do(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _f(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:a0(e.type))}function l1(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var pn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+pn,rt="__reactProps$"+pn,ha="__reactContainer$"+pn,Bo="__reactEvents$"+pn,i1="__reactListeners$"+pn,r1="__reactHandles$"+pn,zf="__reactResources$"+pn,zl="__reactMarker$"+pn;function Oo(e){delete e[Ie],delete e[rt],delete e[Bo],delete e[i1],delete e[r1]}function ma(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qm(e);e!==null;){if(n=e[Ie])return n;e=qm(e)}return t}e=n,n=e.parentNode}return null}function ga(e){if(e=e[Ie]||e[ha]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function El(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function pa(e){var t=e[zf];return t||(t=e[zf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[zl]=!0}var Ef=new Set,Tf={};function qn(e,t){ba(e,t),ba(e+"Capture",t)}function ba(e,t){for(Tf[e]=t,e=0;e<t.length;e++)Ef.add(t[e])}var o1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},Rf={};function s1(e){return St.call(Rf,e)?!0:St.call(Af,e)?!1:o1.test(e)?Rf[e]=!0:(Af[e]=!0,!1)}function Oi(e,t,n){if(s1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ni(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var No,Mf;function xa(e){if(No===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);No=t&&t[1]||"",Mf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+No+e+Mf}var Uo=!1;function Ho(e,t){if(!e||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(A){var T=A}Reflect.construct(e,[],O)}else{try{O.call()}catch(A){T=A}e.call(O.prototype)}}else{try{throw Error()}catch(A){T=A}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var x=f.split(`
`),z=h.split(`
`);for(i=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(a===x.length||i===z.length)for(a=x.length-1,i=z.length-1;1<=a&&0<=i&&x[a]!==z[i];)i--;for(;1<=a&&0<=i;a--,i--)if(x[a]!==z[i]){if(a!==1||i!==1)do if(a--,i--,0>i||x[a]!==z[i]){var D=`
`+x[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=i);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xa(n):""}function u1(e){switch(e.tag){case 26:case 27:case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 15:return Ho(e.type,!1);case 11:return Ho(e.type.render,!1);case 1:return Ho(e.type,!0);case 31:return xa("Activity");default:return""}}function kf(e){try{var t="";do t+=u1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function c1(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=c1(e))}function Df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Cf(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var f1=/[\n"\\]/g;function wt(e){return e.replace(f1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lo(e,t,n,a,i,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Go(e,f,jt(t)):n!=null?Go(e,f,jt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function Bf(e,t,n,a,i,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Go(e,t,n){t==="number"&&Hi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function va(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Of(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function Nf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(qe(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ya(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var d1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||d1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Hf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Uf(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&Uf(e,r,t[r])}function Yo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Li(e){return m1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qo=null;function Vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sa=null,ja=null;function Lf(e){var t=ga(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[rt]||null;if(!i)throw Error(u(90));Lo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Df(a)}break e;case"textarea":Of(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&va(e,!!n.multiple,t,!1)}}}var Xo=!1;function Gf(e,t,n){if(Xo)return e(t,n);Xo=!0;try{var a=e(t);return a}finally{if(Xo=!1,(Sa!==null||ja!==null)&&(_r(),Sa&&(t=Sa,e=ja,ja=Sa=null,Lf(t),e)))for(t=0;t<e.length;t++)Lf(e[t])}}function Tl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qo=!1;if(Wt)try{var Al={};Object.defineProperty(Al,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",Al,Al),window.removeEventListener("test",Al,Al)}catch{Qo=!1}var bn=null,Zo=null,Gi=null;function Yf(){if(Gi)return Gi;var e,t=Zo,n=t.length,a,i="value"in bn?bn.value:bn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return Gi=i.slice(e,1<a?1-a:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function qf(){return!1}function ot(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?qi:qf,this.isPropagationStopped=qf,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=ot(Vn),Rl=E({},Vn,{view:0,detail:0}),g1=ot(Rl),Ko,$o,Ml,Xi=E({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ml&&(Ml&&e.type==="mousemove"?(Ko=e.screenX-Ml.screenX,$o=e.screenY-Ml.screenY):$o=Ko=0,Ml=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),Vf=ot(Xi),p1=E({},Xi,{dataTransfer:0}),b1=ot(p1),x1=E({},Rl,{relatedTarget:0}),Jo=ot(x1),v1=E({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=ot(v1),S1=E({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),j1=ot(S1),w1=E({},Vn,{data:0}),Xf=ot(w1),_1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E1[e])?!!t[e]:!1}function Wo(){return T1}var A1=E({},Rl,{key:function(e){if(e.key){var t=_1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wo,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R1=ot(A1),M1=E({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=ot(M1),k1=E({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wo}),C1=ot(k1),D1=E({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=ot(D1),O1=E({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N1=ot(O1),U1=E({},Vn,{newState:0,oldState:0}),H1=ot(U1),L1=[9,13,27,32],Fo=Wt&&"CompositionEvent"in window,kl=null;Wt&&"documentMode"in document&&(kl=document.documentMode);var G1=Wt&&"TextEvent"in window&&!kl,Zf=Wt&&(!Fo||kl&&8<kl&&11>=kl),Kf=" ",$f=!1;function Jf(e,t){switch(e){case"keyup":return L1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wa=!1;function Y1(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:($f=!0,Kf);case"textInput":return e=t.data,e===Kf&&$f?null:e;default:return null}}function q1(e,t){if(wa)return e==="compositionend"||!Fo&&Jf(e,t)?(e=Yf(),Gi=Zo=bn=null,wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zf&&t.locale!=="ko"?null:t.data;default:return null}}var V1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V1[e.type]:t==="textarea"}function Pf(e,t,n,a){Sa?ja?ja.push(a):ja=[a]:Sa=a,t=Mr(t,"onChange"),0<t.length&&(n=new Vi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Cl=null,Dl=null;function X1(e){Cm(e,0)}function Qi(e){var t=El(e);if(Df(t))return e}function If(e,t){if(e==="change")return t}var ed=!1;if(Wt){var Po;if(Wt){var Io="oninput"in document;if(!Io){var td=document.createElement("div");td.setAttribute("oninput","return;"),Io=typeof td.oninput=="function"}Po=Io}else Po=!1;ed=Po&&(!document.documentMode||9<document.documentMode)}function nd(){Cl&&(Cl.detachEvent("onpropertychange",ad),Dl=Cl=null)}function ad(e){if(e.propertyName==="value"&&Qi(Dl)){var t=[];Pf(t,Dl,e,Vo(e)),Gf(X1,t)}}function Q1(e,t,n){e==="focusin"?(nd(),Cl=t,Dl=n,Cl.attachEvent("onpropertychange",ad)):e==="focusout"&&nd()}function Z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(Dl)}function K1(e,t){if(e==="click")return Qi(t)}function $1(e,t){if(e==="input"||e==="change")return Qi(t)}function J1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:J1;function Bl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!St.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=ld(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ld(n)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function od(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hi(e.document)}return t}function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var W1=Wt&&"documentMode"in document&&11>=document.documentMode,_a=null,ts=null,Ol=null,ns=!1;function sd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||_a==null||_a!==Hi(a)||(a=_a,"selectionStart"in a&&es(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ol&&Bl(Ol,a)||(Ol=a,a=Mr(ts,"onSelect"),0<a.length&&(t=new Vi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=_a)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var za={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},as={},ud={};Wt&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Qn(e){if(as[e])return as[e];if(!za[e])return e;var t=za[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ud)return as[e]=t[n];return e}var cd=Qn("animationend"),fd=Qn("animationiteration"),dd=Qn("animationstart"),F1=Qn("transitionrun"),P1=Qn("transitionstart"),I1=Qn("transitioncancel"),hd=Qn("transitionend"),md=new Map,ls="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ls.push("scrollEnd");function Ct(e,t){md.set(e,t),qn(t,[e])}var gd=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=gd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:kf(t)},gd.set(e,t),t)}return{value:e,source:t,stack:kf(t)}}var zt=[],Ea=0,is=0;function Zi(){for(var e=Ea,t=is=Ea=0;t<e;){var n=zt[t];zt[t++]=null;var a=zt[t];zt[t++]=null;var i=zt[t];zt[t++]=null;var r=zt[t];if(zt[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&pd(n,i,r)}}function Ki(e,t,n,a){zt[Ea++]=e,zt[Ea++]=t,zt[Ea++]=n,zt[Ea++]=a,is|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function rs(e,t,n,a){return Ki(e,t,n,a),$i(e)}function Ta(e,t){return Ki(e,null,null,t),$i(e)}function pd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-dt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function $i(e){if(50<ri)throw ri=0,du=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Aa={};function eb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,a){return new eb(e,t,n,a)}function os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ji(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")os(e)&&(f=1);else if(typeof e=="string")f=nx(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=mt(31,n,t,i),e.elementType=we,e.lanes=r,e;case L:return Zn(n.children,i,r,t);case G:f=8,i|=24;break;case X:return e=mt(12,n,t,i|2),e.elementType=X,e.lanes=r,e;case Z:return e=mt(13,n,t,i),e.elementType=Z,e.lanes=r,e;case le:return e=mt(19,n,t,i),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case Q:f=10;break e;case J:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Ee:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=mt(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Zn(e,t,n,a){return e=mt(7,e,a,t),e.lanes=n,e}function ss(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function us(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ra=[],Ma=0,Wi=null,Fi=0,Et=[],Tt=0,Kn=null,Pt=1,It="";function $n(e,t){Ra[Ma++]=Fi,Ra[Ma++]=Wi,Wi=e,Fi=t}function xd(e,t,n){Et[Tt++]=Pt,Et[Tt++]=It,Et[Tt++]=Kn,Kn=e;var a=Pt;e=It;var i=32-dt(a)-1;a&=~(1<<i),n+=1;var r=32-dt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,Pt=1<<32-dt(t)+i|n<<i|a,It=r+e}else Pt=1<<r|n<<i|a,It=e}function cs(e){e.return!==null&&($n(e,1),xd(e,1,0))}function fs(e){for(;e===Wi;)Wi=Ra[--Ma],Ra[Ma]=null,Fi=Ra[--Ma],Ra[Ma]=null;for(;e===Kn;)Kn=Et[--Tt],Et[Tt]=null,It=Et[--Tt],Et[Tt]=null,Pt=Et[--Tt],Et[Tt]=null}var lt=null,Ce=null,ge=!1,Jn=null,Lt=!1,ds=Error(u(519));function Wn(e){var t=Error(u(418,""));throw Hl(_t(t,e)),ds}function vd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[rt]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<si.length;n++)de(si[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Bf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ui(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Nf(t,a.value,a.defaultValue,a.children),Ui(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Nm(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=kr),t=!0):t=!1,t||Wn(e)}function yd(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:lt=lt.return}}function Nl(e){if(e!==lt)return!1;if(!ge)return yd(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Au(e.type,e.memoizedProps)),n=!n),n&&Ce&&Wn(e),yd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ce=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ce=null}}else t===27?(t=Ce,Dn(e.type)?(e=Cu,Cu=null,Ce=e):Ce=t):Ce=lt?Bt(e.stateNode.nextSibling):null;return!0}function Ul(){Ce=lt=null,ge=!1}function Sd(){var e=Jn;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),Jn=null),e}function Hl(e){Jn===null?Jn=[e]:Jn.push(e)}var hs=N(null),Fn=null,en=null;function xn(e,t,n){V(hs,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=hs.current,Y(hs)}function ms(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function gs(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var x=0;x<t.length;x++)if(h.context===t[x]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),ms(r.return,n,e),a||(f=null);break e}r=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),ms(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Ll(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var h=i.type;ht(i.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(i===Ve.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}i=i.return}e!==null&&gs(t,e,n,a),t.flags|=262144}function Pi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return jd(Fn,e)}function Ii(e,t){return Fn===null&&Pn(e),jd(e,t)}function jd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(u(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var tb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},nb=l.unstable_scheduleCallback,ab=l.unstable_NormalPriority,Le={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ps(){return{controller:new tb,data:new Map,refCount:0}}function Gl(e){e.refCount--,e.refCount===0&&nb(ab,function(){e.controller.abort()})}var Yl=null,bs=0,ka=0,Ca=null;function lb(e,t){if(Yl===null){var n=Yl=[];bs=0,ka=vu(),Ca={status:"pending",value:void 0,then:function(a){n.push(a)}}}return bs++,t.then(wd,wd),t}function wd(){if(--bs===0&&Yl!==null){Ca!==null&&(Ca.status="fulfilled");var e=Yl;Yl=null,ka=0,Ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ib(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var _d=C.S;C.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&lb(e,t),_d!==null&&_d(e,t)};var In=N(null);function xs(){var e=In.current;return e!==null?e:ze.pooledCache}function er(e,t){t===null?V(In,In.current):V(In,t.pool)}function zd(){var e=xs();return e===null?null:{parent:Le._currentValue,pool:e}}var ql=Error(u(460)),Ed=Error(u(474)),tr=Error(u(542)),vs={then:function(){}};function Td(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nr(){}function Ad(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nr,nr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e;default:if(typeof t.status=="string")t.then(nr,nr);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Md(e),e}throw Vl=t,ql}}var Vl=null;function Rd(){if(Vl===null)throw Error(u(459));var e=Vl;return Vl=null,e}function Md(e){if(e===ql||e===tr)throw Error(u(483))}var vn=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ss(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(xe&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=$i(e),pd(e,null,n),t}return Ki(e,a,t,n),$i(e)}function Xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,wf(e,n)}}function js(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ws=!1;function Ql(){if(ws){var e=Ca;if(e!==null)throw e}}function Zl(e,t,n,a){ws=!1;var i=e.updateQueue;vn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var x=h,z=x.next;x.next=null,f===null?r=z:f.next=z,f=x;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==f&&(h===null?D.firstBaseUpdate=z:h.next=z,D.lastBaseUpdate=x))}if(r!==null){var O=i.baseState;f=0,D=z=x=null,h=r;do{var T=h.lane&-536870913,A=T!==h.lane;if(A?(he&T)===T:(a&T)===T){T!==0&&T===ka&&(ws=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;T=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){O=ne.call(je,O,T);break e}O=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,T=typeof ne=="function"?ne.call(je,O,T):ne,T==null)break e;O=E({},O,T);break e;case 2:vn=!0}}T=h.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[T]:A.push(T))}else A={lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(z=D=A,x=O):D=D.next=A,f|=T;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;A=h,h=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);D===null&&(x=O),i.baseState=x,i.firstBaseUpdate=z,i.lastBaseUpdate=D,r===null&&(i.shared.lanes=0),Rn|=f,e.lanes=f,e.memoizedState=O}}function kd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)kd(n[e],t)}var Da=N(null),ar=N(0);function Dd(e,t){e=un,V(ar,e),V(Da,t),un=e|t.baseLanes}function _s(){V(ar,un),V(Da,Da.current)}function zs(){un=ar.current,Y(Da),Y(ar)}var jn=0,oe=null,ye=null,Ne=null,lr=!1,Ba=!1,ea=!1,ir=0,Kl=0,Oa=null,rb=0;function Be(){throw Error(u(321))}function Es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Ts(e,t,n,a,i,r){return jn=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?ph:bh,ea=!1,r=n(a,i),ea=!1,Ba&&(r=Od(t,n,a,i)),Bd(e),r}function Bd(e){C.H=fr;var t=ye!==null&&ye.next!==null;if(jn=0,Ne=ye=oe=null,lr=!1,Kl=0,Oa=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&Pi(e)&&(Qe=!0))}function Od(e,t,n,a){oe=e;var i=0;do{if(Ba&&(Oa=null),Kl=0,Ba=!1,25<=i)throw Error(u(301));if(i+=1,Ne=ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=hb,r=t(n,a)}while(Ba);return r}function ob(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?$l(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(oe.flags|=1024),t}function As(){var e=ir!==0;return ir=0,e}function Rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ms(e){if(lr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lr=!1}jn=0,Ne=ye=oe=null,Ba=!1,Kl=ir=0,Oa=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?oe.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Ue(){if(ye===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ne===null?oe.memoizedState:Ne.next;if(t!==null)Ne=t,ye=e;else{if(e===null)throw oe.alternate===null?Error(u(467)):Error(u(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ne===null?oe.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $l(e){var t=Kl;return Kl+=1,Oa===null&&(Oa=[]),e=Ad(Oa,e,t),t=oe,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?ph:bh),e}function rr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $l(e);if(e.$$typeof===Q)return et(e)}throw Error(u(438,String(e)))}function Cs(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ks(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=at;return t.index++,n}function nn(e,t){return typeof t=="function"?t(e):t}function or(e){var t=Ue();return Ds(t,ye,e)}function Ds(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=f=null,x=null,z=t,D=!1;do{var O=z.lane&-536870913;if(O!==z.lane?(he&O)===O:(jn&O)===O){var T=z.revertLane;if(T===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),O===ka&&(D=!0);else if((jn&T)===T){z=z.next,T===ka&&(D=!0);continue}else O={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(h=x=O,f=r):x=x.next=O,oe.lanes|=T,Rn|=T;O=z.action,ea&&n(r,O),r=z.hasEagerState?z.eagerState:n(r,O)}else T={lane:O,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(h=x=T,f=r):x=x.next=T,oe.lanes|=O,Rn|=O;z=z.next}while(z!==null&&z!==t);if(x===null?f=r:x.next=h,!ht(r,e.memoizedState)&&(Qe=!0,D&&(n=Ca,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=x,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Bs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);ht(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Nd(e,t,n){var a=oe,i=Ue(),r=ge;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!ht((ye||i).memoizedState,n);f&&(i.memoizedState=n,Qe=!0),i=i.queue;var h=Ld.bind(null,a,i,e);if(Jl(2048,8,h,[e]),i.getSnapshot!==t||f||Ne!==null&&Ne.memoizedState.tag&1){if(a.flags|=2048,Na(9,sr(),Hd.bind(null,a,i,n,t),null),ze===null)throw Error(u(349));r||(jn&124)!==0||Ud(a,t,n)}return n}function Ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=ks(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hd(e,t,n,a){t.value=n,t.getSnapshot=a,Gd(t)&&Yd(e)}function Ld(e,t,n){return n(function(){Gd(t)&&Yd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Yd(e){var t=Ta(e,2);t!==null&&vt(t,e,2)}function Os(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ea){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function qd(e,t,n,a){return e.baseState=n,Ds(e,ye,typeof a=="function"?a:nn)}function sb(e,t,n,a,i){if(cr(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};C.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Vd(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Vd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=C.T,f={};C.T=f;try{var h=n(i,a),x=C.S;x!==null&&x(f,h),Xd(e,t,h)}catch(z){Ns(e,t,z)}finally{C.T=r}}else try{r=n(i,a),Xd(e,t,r)}catch(z){Ns(e,t,z)}}function Xd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Qd(e,t,a)},function(a){return Ns(e,t,a)}):Qd(e,t,n)}function Qd(e,t,n){t.status="fulfilled",t.value=n,Zd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vd(e,n)))}function Ns(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Zd(t),t=t.next;while(t!==a)}e.action=null}function Zd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kd(e,t){return t}function $d(e,t){if(ge){var n=ze.formState;if(n!==null){e:{var a=oe;if(ge){if(Ce){t:{for(var i=Ce,r=Lt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Bt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ce=Bt(i.nextSibling),a=i.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kd,lastRenderedState:t},n.queue=a,n=hh.bind(null,oe,a),a.dispatch=n,a=Os(!1),r=Ys.bind(null,oe,!1,a.queue),a=st(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=sb.bind(null,oe,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Jd(e){var t=Ue();return Wd(t,ye,e)}function Wd(e,t,n){if(t=Ds(e,t,Kd)[0],e=or(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=$l(t)}catch(f){throw f===ql?tr:f}else a=t;t=Ue();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,Na(9,sr(),ub.bind(null,i,n),null)),[a,r,e]}function ub(e,t){e.action=t}function Fd(e){var t=Ue(),n=ye;if(n!==null)return Wd(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Na(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=oe.updateQueue,t===null&&(t=ks(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function sr(){return{destroy:void 0,resource:void 0}}function Pd(){return Ue().memoizedState}function ur(e,t,n,a){var i=st();a=a===void 0?null:a,oe.flags|=e,i.memoizedState=Na(1|t,sr(),n,a)}function Jl(e,t,n,a){var i=Ue();a=a===void 0?null:a;var r=i.memoizedState.inst;ye!==null&&a!==null&&Es(a,ye.memoizedState.deps)?i.memoizedState=Na(t,r,n,a):(oe.flags|=e,i.memoizedState=Na(1|t,r,n,a))}function Id(e,t){ur(8390656,8,e,t)}function eh(e,t){Jl(2048,8,e,t)}function th(e,t){return Jl(4,2,e,t)}function nh(e,t){return Jl(4,4,e,t)}function ah(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lh(e,t,n){n=n!=null?n.concat([e]):null,Jl(4,4,ah.bind(null,t,e),n)}function Us(){}function ih(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Es(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function rh(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Es(t,a[1]))return a[0];if(a=e(),ea){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[a,t],a}function Hs(e,t,n){return n===void 0||(jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=um(),oe.lanes|=e,Rn|=e,n)}function oh(e,t,n,a){return ht(n,t)?n:Da.current!==null?(e=Hs(e,n,a),ht(e,t)||(Qe=!0),e):(jn&42)===0?(Qe=!0,e.memoizedState=n):(e=um(),oe.lanes|=e,Rn|=e,t)}function sh(e,t,n,a,i){var r=q.p;q.p=r!==0&&8>r?r:8;var f=C.T,h={};C.T=h,Ys(e,!1,t,n);try{var x=i(),z=C.S;if(z!==null&&z(h,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var D=ib(x,a);Wl(e,t,D,xt(e))}else Wl(e,t,a,xt(e))}catch(O){Wl(e,t,{then:function(){},status:"rejected",reason:O},xt())}finally{q.p=r,C.T=f}}function cb(){}function Ls(e,t,n,a){if(e.tag!==5)throw Error(u(476));var i=uh(e).queue;sh(e,i,t,P,n===null?cb:function(){return ch(e),n(a)})}function uh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ch(e){var t=uh(e).next.queue;Wl(e,t,{},xt())}function Gs(){return et(mi)}function fh(){return Ue().memoizedState}function dh(){return Ue().memoizedState}function fb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xt();e=yn(n);var a=Sn(t,e,n);a!==null&&(vt(a,t,n),Xl(a,t,n)),t={cache:ps()},e.payload=t;return}t=t.return}}function db(e,t,n){var a=xt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},cr(e)?mh(t,n):(n=rs(e,t,n,a),n!==null&&(vt(n,e,a),gh(n,t,a)))}function hh(e,t,n){var a=xt();Wl(e,t,n,a)}function Wl(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(cr(e))mh(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(i.hasEagerState=!0,i.eagerState=h,ht(h,f))return Ki(e,t,i,0),ze===null&&Zi(),!1}catch{}finally{}if(n=rs(e,t,i,a),n!==null)return vt(n,e,a),gh(n,t,a),!0}return!1}function Ys(e,t,n,a){if(a={lane:2,revertLane:vu(),action:a,hasEagerState:!1,eagerState:null,next:null},cr(e)){if(t)throw Error(u(479))}else t=rs(e,n,a,2),t!==null&&vt(t,e,2)}function cr(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function mh(e,t){Ba=lr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,wf(e,n)}}var fr={readContext:et,use:rr,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},ph={readContext:et,use:rr,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Id,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ur(4194308,4,ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ur(4194308,4,e,t)},useInsertionEffect:function(e,t){ur(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(ea){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var i=n(t);if(ea){gn(!0);try{n(t)}finally{gn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=db.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Os(e);var t=e.queue,n=hh.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Us,useDeferredValue:function(e,t){var n=st();return Hs(n,e,t)},useTransition:function(){var e=Os(!1);return e=sh.bind(null,oe,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=oe,i=st();if(ge){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),ze===null)throw Error(u(349));(he&124)!==0||Ud(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,Id(Ld.bind(null,a,r,e),[e]),a.flags|=2048,Na(9,sr(),Hd.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=ze.identifierPrefix;if(ge){var n=It,a=Pt;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=rb++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Gs,useFormState:$d,useActionState:$d,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ys.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Cs,useCacheRefresh:function(){return st().memoizedState=fb.bind(null,oe)}},bh={readContext:et,use:rr,useCallback:ih,useContext:et,useEffect:eh,useImperativeHandle:lh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:rh,useReducer:or,useRef:Pd,useState:function(){return or(nn)},useDebugValue:Us,useDeferredValue:function(e,t){var n=Ue();return oh(n,ye.memoizedState,e,t)},useTransition:function(){var e=or(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:$l(e),t]},useSyncExternalStore:Nd,useId:fh,useHostTransitionStatus:Gs,useFormState:Jd,useActionState:Jd,useOptimistic:function(e,t){var n=Ue();return qd(n,ye,e,t)},useMemoCache:Cs,useCacheRefresh:dh},hb={readContext:et,use:rr,useCallback:ih,useContext:et,useEffect:eh,useImperativeHandle:lh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:rh,useReducer:Bs,useRef:Pd,useState:function(){return Bs(nn)},useDebugValue:Us,useDeferredValue:function(e,t){var n=Ue();return ye===null?Hs(n,e,t):oh(n,ye.memoizedState,e,t)},useTransition:function(){var e=Bs(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:$l(e),t]},useSyncExternalStore:Nd,useId:fh,useHostTransitionStatus:Gs,useFormState:Fd,useActionState:Fd,useOptimistic:function(e,t){var n=Ue();return ye!==null?qd(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Cs,useCacheRefresh:dh},Ua=null,Fl=0;function dr(e){var t=Fl;return Fl+=1,Ua===null&&(Ua=[]),Ad(Ua,e,t)}function Pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hr(e,t){throw t.$$typeof===R?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xh(e){var t=e._init;return t(e._payload)}function vh(e){function t(w,S){if(e){var _=w.deletions;_===null?(w.deletions=[S],w.flags|=16):_.push(S)}}function n(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function a(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(w,S){return w=Ft(w,S),w.index=0,w.sibling=null,w}function r(w,S,_){return w.index=_,e?(_=w.alternate,_!==null?(_=_.index,_<S?(w.flags|=67108866,S):_):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function f(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function h(w,S,_,B){return S===null||S.tag!==6?(S=ss(_,w.mode,B),S.return=w,S):(S=i(S,_),S.return=w,S)}function x(w,S,_,B){var K=_.type;return K===L?D(w,S,_.props.children,B,_.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&xh(K)===S.type)?(S=i(S,_.props),Pl(S,_),S.return=w,S):(S=Ji(_.type,_.key,_.props,null,w.mode,B),Pl(S,_),S.return=w,S)}function z(w,S,_,B){return S===null||S.tag!==4||S.stateNode.containerInfo!==_.containerInfo||S.stateNode.implementation!==_.implementation?(S=us(_,w.mode,B),S.return=w,S):(S=i(S,_.children||[]),S.return=w,S)}function D(w,S,_,B,K){return S===null||S.tag!==7?(S=Zn(_,w.mode,B,K),S.return=w,S):(S=i(S,_),S.return=w,S)}function O(w,S,_){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ss(""+S,w.mode,_),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case k:return _=Ji(S.type,S.key,S.props,null,w.mode,_),Pl(_,S),_.return=w,_;case H:return S=us(S,w.mode,_),S.return=w,S;case Ee:var B=S._init;return S=B(S._payload),O(w,S,_)}if(qe(S)||Ye(S))return S=Zn(S,w.mode,_,null),S.return=w,S;if(typeof S.then=="function")return O(w,dr(S),_);if(S.$$typeof===Q)return O(w,Ii(w,S),_);hr(w,S)}return null}function T(w,S,_,B){var K=S!==null?S.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return K!==null?null:h(w,S,""+_,B);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case k:return _.key===K?x(w,S,_,B):null;case H:return _.key===K?z(w,S,_,B):null;case Ee:return K=_._init,_=K(_._payload),T(w,S,_,B)}if(qe(_)||Ye(_))return K!==null?null:D(w,S,_,B,null);if(typeof _.then=="function")return T(w,S,dr(_),B);if(_.$$typeof===Q)return T(w,S,Ii(w,_),B);hr(w,_)}return null}function A(w,S,_,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return w=w.get(_)||null,h(S,w,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case k:return w=w.get(B.key===null?_:B.key)||null,x(S,w,B,K);case H:return w=w.get(B.key===null?_:B.key)||null,z(S,w,B,K);case Ee:var se=B._init;return B=se(B._payload),A(w,S,_,B,K)}if(qe(B)||Ye(B))return w=w.get(_)||null,D(S,w,B,K,null);if(typeof B.then=="function")return A(w,S,_,dr(B),K);if(B.$$typeof===Q)return A(w,S,_,Ii(S,B),K);hr(S,B)}return null}function ne(w,S,_,B){for(var K=null,se=null,$=S,te=S=0,Ke=null;$!==null&&te<_.length;te++){$.index>te?(Ke=$,$=null):Ke=$.sibling;var me=T(w,$,_[te],B);if(me===null){$===null&&($=Ke);break}e&&$&&me.alternate===null&&t(w,$),S=r(me,S,te),se===null?K=me:se.sibling=me,se=me,$=Ke}if(te===_.length)return n(w,$),ge&&$n(w,te),K;if($===null){for(;te<_.length;te++)$=O(w,_[te],B),$!==null&&(S=r($,S,te),se===null?K=$:se.sibling=$,se=$);return ge&&$n(w,te),K}for($=a($);te<_.length;te++)Ke=A($,w,te,_[te],B),Ke!==null&&(e&&Ke.alternate!==null&&$.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),se===null?K=Ke:se.sibling=Ke,se=Ke);return e&&$.forEach(function(Hn){return t(w,Hn)}),ge&&$n(w,te),K}function I(w,S,_,B){if(_==null)throw Error(u(151));for(var K=null,se=null,$=S,te=S=0,Ke=null,me=_.next();$!==null&&!me.done;te++,me=_.next()){$.index>te?(Ke=$,$=null):Ke=$.sibling;var Hn=T(w,$,me.value,B);if(Hn===null){$===null&&($=Ke);break}e&&$&&Hn.alternate===null&&t(w,$),S=r(Hn,S,te),se===null?K=Hn:se.sibling=Hn,se=Hn,$=Ke}if(me.done)return n(w,$),ge&&$n(w,te),K;if($===null){for(;!me.done;te++,me=_.next())me=O(w,me.value,B),me!==null&&(S=r(me,S,te),se===null?K=me:se.sibling=me,se=me);return ge&&$n(w,te),K}for($=a($);!me.done;te++,me=_.next())me=A($,w,te,me.value,B),me!==null&&(e&&me.alternate!==null&&$.delete(me.key===null?te:me.key),S=r(me,S,te),se===null?K=me:se.sibling=me,se=me);return e&&$.forEach(function(mx){return t(w,mx)}),ge&&$n(w,te),K}function je(w,S,_,B){if(typeof _=="object"&&_!==null&&_.type===L&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case k:e:{for(var K=_.key;S!==null;){if(S.key===K){if(K=_.type,K===L){if(S.tag===7){n(w,S.sibling),B=i(S,_.props.children),B.return=w,w=B;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&xh(K)===S.type){n(w,S.sibling),B=i(S,_.props),Pl(B,_),B.return=w,w=B;break e}n(w,S);break}else t(w,S);S=S.sibling}_.type===L?(B=Zn(_.props.children,w.mode,B,_.key),B.return=w,w=B):(B=Ji(_.type,_.key,_.props,null,w.mode,B),Pl(B,_),B.return=w,w=B)}return f(w);case H:e:{for(K=_.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===_.containerInfo&&S.stateNode.implementation===_.implementation){n(w,S.sibling),B=i(S,_.children||[]),B.return=w,w=B;break e}else{n(w,S);break}else t(w,S);S=S.sibling}B=us(_,w.mode,B),B.return=w,w=B}return f(w);case Ee:return K=_._init,_=K(_._payload),je(w,S,_,B)}if(qe(_))return ne(w,S,_,B);if(Ye(_)){if(K=Ye(_),typeof K!="function")throw Error(u(150));return _=K.call(_),I(w,S,_,B)}if(typeof _.then=="function")return je(w,S,dr(_),B);if(_.$$typeof===Q)return je(w,S,Ii(w,_),B);hr(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,S!==null&&S.tag===6?(n(w,S.sibling),B=i(S,_),B.return=w,w=B):(n(w,S),B=ss(_,w.mode,B),B.return=w,w=B),f(w)):n(w,S)}return function(w,S,_,B){try{Fl=0;var K=je(w,S,_,B);return Ua=null,K}catch($){if($===ql||$===tr)throw $;var se=mt(29,$,null,w.mode);return se.lanes=B,se.return=w,se}finally{}}}var Ha=vh(!0),yh=vh(!1),At=N(null),Gt=null;function wn(e){var t=e.alternate;V(Ge,Ge.current&1),V(At,e),Gt===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(Gt=e)}function Sh(e){if(e.tag===22){if(V(Ge,Ge.current),V(At,e),Gt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Gt=e)}}else _n()}function _n(){V(Ge,Ge.current),V(At,At.current)}function an(e){Y(At),Gt===e&&(Gt=null),Y(Ge)}var Ge=N(0);function mr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ku(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function qs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=xt(),i=yn(a);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Xl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=xt(),i=yn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Xl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xt(),a=yn(n);a.tag=2,t!=null&&(a.callback=t),t=Sn(e,a,n),t!==null&&(vt(t,e,n),Xl(t,e,n))}};function jh(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Bl(n,a)||!Bl(i,r):!0}function wh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var gr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function _h(e){gr(e)}function zh(e){console.error(e)}function Eh(e){gr(e)}function pr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Th(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Xs(e,t,n){return n=yn(n),n.tag=3,n.payload={element:null},n.callback=function(){pr(e,t)},n}function Ah(e){return e=yn(e),e.tag=3,e}function Rh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){Th(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Th(t,n,a),typeof i!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function mb(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ll(t,n,i,!0),n=At.current,n!==null){switch(n.tag){case 13:return Gt===null?mu():n.alternate===null&&De===0&&(De=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===vs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),pu(e,a,i)),!1;case 22:return n.flags|=65536,a===vs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),pu(e,a,i)),!1}throw Error(u(435,n.tag))}return pu(e,a,i),mu(),!1}if(ge)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==ds&&(e=Error(u(422),{cause:a}),Hl(_t(e,n)))):(a!==ds&&(t=Error(u(423),{cause:a}),Hl(_t(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=_t(a,n),i=Xs(e.stateNode,a,i),js(e,i),De!==4&&(De=2)),!1;var r=Error(u(520),{cause:a});if(r=_t(r,n),ii===null?ii=[r]:ii.push(r),De!==4&&(De=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Xs(n.stateNode,a,e),js(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ah(i),Rh(i,e,n,a),js(n,i),!1}n=n.return}while(n!==null);return!1}var Mh=Error(u(461)),Qe=!1;function Je(e,t,n,a){t.child=e===null?yh(t,null,n,a):Ha(t,e.child,n,a)}function kh(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=Ts(e,t,n,f,r,i),h=As(),e!==null&&!Qe?(Rs(e,t,i),ln(e,t,i)):(ge&&h&&cs(t),t.flags|=1,Je(e,t,a,i),t.child)}function Ch(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!os(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Dh(e,t,r,a,i)):(e=Ji(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ps(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Bl,n(f,a)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function Dh(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Bl(r,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=r,Ps(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ln(e,t,i)}return Qs(e,t,n,a,i)}function Bh(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return Oh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&er(t,r!==null?r.cachePool:null),r!==null?Dd(t,r):_s(),Sh(t);else return t.lanes=t.childLanes=536870912,Oh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(er(t,r.cachePool),Dd(t,r),_n(),t.memoizedState=null):(e!==null&&er(t,null),_s(),_n());return Je(e,t,i,n),t.child}function Oh(e,t,n,a){var i=xs();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&er(t,null),_s(),Sh(t),e!==null&&Ll(e,t,a,!0),null}function br(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Qs(e,t,n,a,i){return Pn(t),n=Ts(e,t,n,a,void 0,i),a=As(),e!==null&&!Qe?(Rs(e,t,i),ln(e,t,i)):(ge&&a&&cs(t),t.flags|=1,Je(e,t,n,i),t.child)}function Nh(e,t,n,a,i,r){return Pn(t),t.updateQueue=null,n=Od(t,a,n,i),Bd(e),a=As(),e!==null&&!Qe?(Rs(e,t,r),ln(e,t,r)):(ge&&a&&cs(t),t.flags|=1,Je(e,t,n,r),t.child)}function Uh(e,t,n,a,i){if(Pn(t),t.stateNode===null){var r=Aa,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Vs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},ys(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):Aa,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(qs(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Vs.enqueueReplaceState(r,r.state,null),Zl(t,a,r,i),Ql(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,x=ta(n,h);r.props=x;var z=r.context,D=n.contextType;f=Aa,typeof D=="object"&&D!==null&&(f=et(D));var O=n.getDerivedStateFromProps;D=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||z!==f)&&wh(t,r,a,f),vn=!1;var T=t.memoizedState;r.state=T,Zl(t,a,r,i),Ql(),z=t.memoizedState,h||T!==z||vn?(typeof O=="function"&&(qs(t,n,O,a),z=t.memoizedState),(x=vn||jh(t,n,x,a,T,z,f))?(D||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),r.props=a,r.state=z,r.context=f,a=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Ss(e,t),f=t.memoizedProps,D=ta(n,f),r.props=D,O=t.pendingProps,T=r.context,z=n.contextType,x=Aa,typeof z=="object"&&z!==null&&(x=et(z)),h=n.getDerivedStateFromProps,(z=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==O||T!==x)&&wh(t,r,a,x),vn=!1,T=t.memoizedState,r.state=T,Zl(t,a,r,i),Ql();var A=t.memoizedState;f!==O||T!==A||vn||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof h=="function"&&(qs(t,n,h,a),A=t.memoizedState),(D=vn||jh(t,n,D,a,T,A,x)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(z||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=x,a=D):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,br(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):Je(e,t,n,i),t.memoizedState=r.state,e=t.child):e=ln(e,t,i),e}function Hh(e,t,n,a){return Ul(),t.flags|=256,Je(e,t,n,a),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ks(e){return{baseLanes:e,cachePool:zd()}}function $s(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function Lh(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?wn(t):_n(),ge){var h=Ce,x;if(x=h){e:{for(x=h,h=Lt;x.nodeType!==8;){if(!h){h=null;break e}if(x=Bt(x.nextSibling),x===null){h=null;break e}}h=x}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Pt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},x=mt(18,null,null,0),x.stateNode=h,x.return=t,t.child=x,lt=t,Ce=null,x=!0):x=!1}x||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return ku(h)?t.lanes=32:t.lanes=536870912,null;an(t)}return h=a.children,a=a.fallback,i?(_n(),i=t.mode,h=xr({mode:"hidden",children:h},i),a=Zn(a,i,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,i=t.child,i.memoizedState=Ks(n),i.childLanes=$s(e,f,n),t.memoizedState=Zs,a):(wn(t),Js(t,h))}if(x=e.memoizedState,x!==null&&(h=x.dehydrated,h!==null)){if(r)t.flags&256?(wn(t),t.flags&=-257,t=Ws(e,t,n)):t.memoizedState!==null?(_n(),t.child=e.child,t.flags|=128,t=null):(_n(),i=a.fallback,h=t.mode,a=xr({mode:"visible",children:a.children},h),i=Zn(i,h,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Ha(t,e.child,null,n),a=t.child,a.memoizedState=Ks(n),a.childLanes=$s(e,f,n),t.memoizedState=Zs,t=i);else if(wn(t),ku(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var z=f.dgst;f=z,a=Error(u(419)),a.stack="",a.digest=f,Hl({value:a,source:null,stack:null}),t=Ws(e,t,n)}else if(Qe||Ll(e,t,n,!1),f=(n&e.childLanes)!==0,Qe||f){if(f=ze,f!==null&&(a=n&-n,a=(a&42)!==0?1:Co(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==x.retryLane))throw x.retryLane=a,Ta(e,a),vt(f,e,a),Mh;h.data==="$?"||mu(),t=Ws(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ce=Bt(h.nextSibling),lt=t,ge=!0,Jn=null,Lt=!1,e!==null&&(Et[Tt++]=Pt,Et[Tt++]=It,Et[Tt++]=Kn,Pt=e.id,It=e.overflow,Kn=t),t=Js(t,a.children),t.flags|=4096);return t}return i?(_n(),i=a.fallback,h=t.mode,x=e.child,z=x.sibling,a=Ft(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,z!==null?i=Ft(z,i):(i=Zn(i,h,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,h=e.child.memoizedState,h===null?h=Ks(n):(x=h.cachePool,x!==null?(z=Le._currentValue,x=x.parent!==z?{parent:z,pool:z}:x):x=zd(),h={baseLanes:h.baseLanes|n,cachePool:x}),i.memoizedState=h,i.childLanes=$s(e,f,n),t.memoizedState=Zs,a):(wn(t),n=e.child,e=n.sibling,n=Ft(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Js(e,t){return t=xr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xr(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ws(e,t,n){return Ha(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ms(e.return,t,n)}function Fs(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function Yh(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if(Je(e,t,a.children,n),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gh(e,n,t);else if(e.tag===19)Gh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Ge,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,r);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ll(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ps(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function gb(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),xn(t,Le,e.memoizedState.cache),Ul();break;case 27:case 5:Gn(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:xn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Lh(e,t,n):(wn(t),e=ln(e,t,n),e!==null?e.sibling:null);wn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ll(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Yh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,Bh(e,t,n);case 24:xn(t,Le,e.memoizedState.cache)}return ln(e,t,n)}function qh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Ps(e,n)&&(t.flags&128)===0)return Qe=!1,gb(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,ge&&(t.flags&1048576)!==0&&xd(t,Fi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")os(a)?(e=ta(a,e),t.tag=1,t=Uh(null,t,a,e,n)):(t.tag=0,t=Qs(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===ae){t.tag=11,t=kh(null,t,a,e,n);break e}else if(i===W){t.tag=14,t=Ch(null,t,a,e,n);break e}}throw t=Kt(a)||a,Error(u(306,t,""))}}return t;case 0:return Qs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ta(a,t.pendingProps),Uh(e,t,a,i,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,Ss(e,t),Zl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,xn(t,Le,a),a!==r.cache&&gs(t,[Le],n,!0),Ql(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Hh(e,t,a,n);break e}else if(a!==i){i=_t(Error(u(424)),t),Hl(i),t=Hh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Bt(e.firstChild),lt=t,ge=!0,Jn=null,Lt=!0,n=yh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ul(),a===i){t=ln(e,t,n);break e}Je(e,t,a,n)}t=t.child}return t;case 26:return br(e,t),e===null?(n=Zm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=Cr(ee.current).createElement(n),a[Ie]=t,a[rt]=e,Fe(a,n,e),Xe(a),t.stateNode=a):t.memoizedState=Zm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&ge&&(a=t.stateNode=Vm(t.type,t.pendingProps,ee.current),lt=t,Lt=!0,i=Ce,Dn(t.type)?(Cu=i,Ce=Bt(a.firstChild)):Ce=i),Je(e,t,t.pendingProps.children,n),br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=a=Ce)&&(a=Vb(a,t.type,t.pendingProps,Lt),a!==null?(t.stateNode=a,lt=t,Ce=Bt(a.firstChild),Lt=!1,i=!0):i=!1),i||Wn(t)),Gn(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,Au(i,r)?a=null:f!==null&&Au(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Ts(e,t,ob,null,null,n),mi._currentValue=i),br(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=Ce)&&(n=Xb(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,lt=t,Ce=null,e=!0):e=!1),e||Wn(t)),null;case 13:return Lh(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ha(t,null,a,n):Je(e,t,a,n),t.child;case 11:return kh(e,t,t.type,t.pendingProps,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,xn(t,t.type,a.value),Je(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Pn(t),i=et(i),a=a(i),t.flags|=1,Je(e,t,a,n),t.child;case 14:return Ch(e,t,t.type,t.pendingProps,n);case 15:return Dh(e,t,t.type,t.pendingProps,n);case 19:return Yh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=xr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ft(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Bh(e,t,n);case 24:return Pn(t),a=et(Le),e===null?(i=xs(),i===null&&(i=ze,r=ps(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},ys(t),xn(t,Le,i)):((e.lanes&n)!==0&&(Ss(e,t),Zl(t,null,null,n),Ql()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xn(t,Le,a)):(a=r.cache,xn(t,Le,a),a!==i.cache&&gs(t,[Le],n,!0))),Je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function rn(e){e.flags|=4}function Vh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fm(t)){if(t=At.current,t!==null&&((he&4194048)===he?Gt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Gt))throw Vl=vs,Ed;e.flags|=8192}}function vr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sf():536870912,e.lanes|=t,qa|=t)}function Il(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function pb(e,t,n){var a=t.pendingProps;switch(fs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ke(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tn(Le),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Nl(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sd())),ke(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(ke(t),Vh(t,n)):(ke(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),ke(t),Vh(t,n)):(ke(t),t.flags&=-16777217):(e.memoizedProps!==a&&rn(t),ke(t),t.flags&=-16777217),null;case 27:$t(t),n=ee.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ke(t),null}e=F.current,Nl(t)?vd(t):(e=Vm(i,a,n),t.stateNode=e,rn(t))}return ke(t),null;case 5:if($t(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ke(t),null}if(e=F.current,Nl(t))vd(t);else{switch(i=Cr(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Ie]=t,e[rt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return ke(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ee.current,Nl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=lt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Nm(e.nodeValue,n)),e||Wn(t)}else e=Cr(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return ke(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Nl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ie]=t}else Ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),i=!1}else i=Sd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(an(t),t):(an(t),null)}if(an(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),vr(t,t.updateQueue),ke(t),null;case 4:return Pe(),e===null&&wu(t.stateNode.containerInfo),ke(t),null;case 10:return tn(t.type),ke(t),null;case 19:if(Y(Ge),i=t.memoizedState,i===null)return ke(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Il(i,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=mr(e),r!==null){for(t.flags|=128,Il(i,!1),e=r.updateQueue,t.updateQueue=e,vr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bd(n,e),n=n.sibling;return V(Ge,Ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ht()>jr&&(t.flags|=128,a=!0,Il(i,!1),t.lanes=4194304)}else{if(!a)if(e=mr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,vr(t,e),Il(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ge)return ke(t),null}else 2*Ht()-i.renderingStartTime>jr&&n!==536870912&&(t.flags|=128,a=!0,Il(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ht(),t.sibling=null,e=Ge.current,V(Ge,a?e&1|2:e&1),t):(ke(t),null);case 22:case 23:return an(t),zs(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),n=t.updateQueue,n!==null&&vr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Y(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(Le),ke(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function bb(e,t){switch(fs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(Le),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $t(t),null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Ge),null;case 4:return Pe(),null;case 10:return tn(t.type),null;case 22:case 23:return an(t),zs(),e!==null&&Y(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(Le),null;case 25:return null;default:return null}}function Xh(e,t){switch(fs(t),t.tag){case 3:tn(Le),Pe();break;case 26:case 27:case 5:$t(t);break;case 4:Pe();break;case 13:an(t);break;case 19:Y(Ge);break;case 10:tn(t.type);break;case 22:case 23:an(t),zs(),e!==null&&Y(In);break;case 24:tn(Le)}}function ei(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(h){_e(t,t.return,h)}}function zn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=t;var x=n,z=h;try{z()}catch(D){_e(i,x,D)}}}a=a.next}while(a!==r)}}catch(D){_e(t,t.return,D)}}function Qh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cd(t,n)}catch(a){_e(e,e.return,a)}}}function Zh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function ti(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){_e(e,t,i)}}function Yt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){_e(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){_e(e,t,i)}else n.current=null}function Kh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){_e(e,e.return,i)}}function Is(e,t,n){try{var a=e.stateNode;Hb(a,e.type,n,t),a[rt]=t}catch(i){_e(e,e.return,i)}}function $h(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dn(e.type)||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kr));else if(a!==4&&(a===27&&Dn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function yr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Dn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(yr(e,t,n),e=e.sibling;e!==null;)yr(e,t,n),e=e.sibling}function Jh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fe(t,a,n),t[Ie]=e,t[rt]=n}catch(r){_e(e,e.return,r)}}var on=!1,Oe=!1,nu=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function xb(e,t){if(e=e.containerInfo,Eu=Hr,e=od(e),es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,x=-1,z=0,D=0,O=e,T=null;t:for(;;){for(var A;O!==n||i!==0&&O.nodeType!==3||(h=f+i),O!==r||a!==0&&O.nodeType!==3||(x=f+a),O.nodeType===3&&(f+=O.nodeValue.length),(A=O.firstChild)!==null;)T=O,O=A;for(;;){if(O===e)break t;if(T===n&&++z===i&&(h=f),T===r&&++D===a&&(x=f),(A=O.nextSibling)!==null)break;O=T,T=O.parentNode}O=A}n=h===-1||x===-1?null:{start:h,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:e,selectionRange:n},Hr=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){_e(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Mu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Fh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),a&4&&ei(5,n);break;case 1:if(En(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var i=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}a&64&&Qh(n),a&512&&ti(n,n.return);break;case 3:if(En(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cd(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&a&4&&Jh(n);case 26:case 5:En(e,n),t===null&&a&4&&Kh(n),a&512&&ti(n,n.return);break;case 12:En(e,n);break;case 13:En(e,n),a&4&&em(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Tb.bind(null,n),Qb(e,n))));break;case 22:if(a=n.memoizedState!==null||on,!a){t=t!==null&&t.memoizedState!==null||Oe,i=on;var r=Oe;on=a,(Oe=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),on=i,Oe=r}break;case 30:break;default:En(e,n)}}function Ph(e){var t=e.alternate;t!==null&&(e.alternate=null,Ph(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Oo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ut=!1;function sn(e,t,n){for(n=n.child;n!==null;)Ih(e,t,n),n=n.sibling}function Ih(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 26:Oe||Yt(n,t),sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Oe||Yt(n,t);var a=Ae,i=ut;Dn(n.type)&&(Ae=n.stateNode,ut=!1),sn(e,t,n),ci(n.stateNode),Ae=a,ut=i;break;case 5:Oe||Yt(n,t);case 6:if(a=Ae,i=ut,Ae=null,sn(e,t,n),Ae=a,ut=i,Ae!==null)if(ut)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){_e(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){_e(n,t,r)}break;case 18:Ae!==null&&(ut?(e=Ae,Ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),xi(e)):Ym(Ae,n.stateNode));break;case 4:a=Ae,i=ut,Ae=n.stateNode.containerInfo,ut=!0,sn(e,t,n),Ae=a,ut=i;break;case 0:case 11:case 14:case 15:Oe||zn(2,n,t),Oe||zn(4,n,t),sn(e,t,n);break;case 1:Oe||(Yt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Zh(n,t,a)),sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:Oe=(a=Oe)||n.memoizedState!==null,sn(e,t,n),Oe=a;break;default:sn(e,t,n)}}function em(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xi(e)}catch(n){_e(t,t.return,n)}}function vb(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wh),t;default:throw Error(u(435,e.tag))}}function au(e,t){var n=vb(e);t.forEach(function(a){var i=Ab.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Dn(h.type)){Ae=h.stateNode,ut=!1;break e}break;case 5:Ae=h.stateNode,ut=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,ut=!0;break e}h=h.return}if(Ae===null)throw Error(u(160));Ih(r,f,i),Ae=null,ut=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)tm(t,e),t=t.sibling}var Dt=null;function tm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),pt(e),a&4&&(zn(3,e,e.return),ei(3,e),zn(5,e,e.return));break;case 1:gt(t,e),pt(e),a&512&&(Oe||n===null||Yt(n,n.return)),a&64&&on&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Dt;if(gt(t,e),pt(e),a&512&&(Oe||n===null||Yt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[zl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Xe(r),a=r;break e;case"link":var f=Jm("link","href",i).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;case"meta":if(f=Jm("meta","content",i).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;default:throw Error(u(468,a))}r[Ie]=e,Xe(r),a=r}e.stateNode=a}else Wm(i,e.type,e.stateNode);else e.stateNode=$m(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Wm(i,e.type,e.stateNode):$m(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Is(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),pt(e),a&512&&(Oe||n===null||Yt(n,n.return)),n!==null&&a&4&&Is(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),pt(e),a&512&&(Oe||n===null||Yt(n,n.return)),e.flags&32){i=e.stateNode;try{ya(i,"")}catch(A){_e(e,e.return,A)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Is(e,i,n!==null?n.memoizedProps:i)),a&1024&&(nu=!0);break;case 6:if(gt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(A){_e(e,e.return,A)}}break;case 3:if(Or=null,i=Dt,Dt=Dr(t.containerInfo),gt(t,e),Dt=i,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(A){_e(e,e.return,A)}nu&&(nu=!1,nm(e));break;case 4:a=Dt,Dt=Dr(e.stateNode.containerInfo),gt(t,e),pt(e),Dt=a;break;case 12:gt(t,e),pt(e);break;case 13:gt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(uu=Ht()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,au(e,a)));break;case 22:i=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,z=on,D=Oe;if(on=z||i,Oe=D||x,gt(t,e),Oe=D,on=z,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||x||on||Oe||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(r=x.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=x.stateNode;var O=x.memoizedProps.style,T=O!=null&&O.hasOwnProperty("display")?O.display:null;h.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(A){_e(x,x.return,A)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(A){_e(x,x.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,au(e,n))));break;case 19:gt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,au(e,a)));break;case 30:break;case 21:break;default:gt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if($h(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,r=eu(e);yr(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(ya(f,""),n.flags&=-33);var h=eu(e);yr(e,h,f);break;case 3:case 4:var x=n.stateNode.containerInfo,z=eu(e);tu(e,z,x);break;default:throw Error(u(161))}}catch(D){_e(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fh(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zn(4,t,t.return),na(t);break;case 1:Yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zh(t,t.return,n),na(t);break;case 27:ci(t.stateNode);case 26:case 5:Yt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(i,r,n),ei(4,r);break;case 1:if(Tn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){_e(a,a.return,z)}if(a=r,i=a.updateQueue,i!==null){var h=a.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)kd(x[i],h)}catch(z){_e(a,a.return,z)}}n&&f&64&&Qh(r),ti(r,r.return);break;case 27:Jh(r);case 26:case 5:Tn(i,r,n),n&&a===null&&f&4&&Kh(r),ti(r,r.return);break;case 12:Tn(i,r,n);break;case 13:Tn(i,r,n),n&&f&4&&em(i,r);break;case 22:r.memoizedState===null&&Tn(i,r,n),ti(r,r.return);break;case 30:break;default:Tn(i,r,n)}t=t.sibling}}function lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Gl(n))}function iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)am(e,t,n,a),t=t.sibling}function am(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),i&2048&&ei(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Gl(e)));break;case 12:if(i&2048){qt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){_e(t,t.return,x)}}else qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?qt(e,t,n,a):ni(e,t):r._visibility&2?qt(e,t,n,a):(r._visibility|=2,La(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&lu(f,t);break;case 24:qt(e,t,n,a),i&2048&&iu(t.alternate,t);break;default:qt(e,t,n,a)}}function La(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,x=a,z=f.flags;switch(f.tag){case 0:case 11:case 15:La(r,f,h,x,i),ei(8,f);break;case 23:break;case 22:var D=f.stateNode;f.memoizedState!==null?D._visibility&2?La(r,f,h,x,i):ni(r,f):(D._visibility|=2,La(r,f,h,x,i)),i&&z&2048&&lu(f.alternate,f);break;case 24:La(r,f,h,x,i),i&&z&2048&&iu(f.alternate,f);break;default:La(r,f,h,x,i)}t=t.sibling}}function ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:ni(n,a),i&2048&&lu(a.alternate,a);break;case 24:ni(n,a),i&2048&&iu(a.alternate,a);break;default:ni(n,a)}t=t.sibling}}var ai=8192;function Ga(e){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)lm(e),e=e.sibling}function lm(e){switch(e.tag){case 26:Ga(e),e.flags&ai&&e.memoizedState!==null&&lx(Dt,e.memoizedState,e.memoizedProps);break;case 5:Ga(e);break;case 3:case 4:var t=Dt;Dt=Dr(e.stateNode.containerInfo),Ga(e),Dt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ai,ai=16777216,Ga(e),ai=t):Ga(e));break;default:Ga(e)}}function im(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,om(a,e)}im(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rm(e),e=e.sibling}function rm(e){switch(e.tag){case 0:case 11:case 15:li(e),e.flags&2048&&zn(9,e,e.return);break;case 3:li(e);break;case 12:li(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Sr(e)):li(e);break;default:li(e)}}function Sr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,om(a,e)}im(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zn(8,t,t.return),Sr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Sr(t));break;default:Sr(t)}e=e.sibling}}function om(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ze=a;else e:for(n=e;Ze!==null;){a=Ze;var i=a.sibling,r=a.return;if(Ph(a),a===n){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var yb={getCacheForType:function(e){var t=et(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Sb=typeof WeakMap=="function"?WeakMap:Map,xe=0,ze=null,fe=null,he=0,ve=0,bt=null,An=!1,Ya=!1,ru=!1,un=0,De=0,Rn=0,aa=0,ou=0,Rt=0,qa=0,ii=null,ct=null,su=!1,uu=0,jr=1/0,wr=null,Mn=null,We=0,kn=null,Va=null,Xa=0,cu=0,fu=null,sm=null,ri=0,du=null;function xt(){if((xe&2)!==0&&he!==0)return he&-he;if(C.T!==null){var e=ka;return e!==0?e:vu()}return _f()}function um(){Rt===0&&(Rt=(he&536870912)===0||ge?yf():536870912);var e=At.current;return e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===ze&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Qa(e,0),Cn(e,he,Rt,!1)),_l(e,n),((xe&2)===0||e!==ze)&&(e===ze&&((xe&2)===0&&(aa|=n),De===4&&Cn(e,he,Rt,!1)),Vt(e))}function cm(e,t,n){if((xe&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||wl(e,t),i=a?_b(e,t):gu(e,t,!0),r=a;do{if(i===0){Ya&&!a&&Cn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!jb(n)){i=gu(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;i=ii;var x=h.current.memoizedState.isDehydrated;if(x&&(Qa(h,f).flags|=256),f=gu(h,f,!1),f!==2){if(ru&&!x){h.errorRecoveryDisabledLanes|=r,aa|=r,i=4;break e}r=ct,ct=i,r!==null&&(ct===null?ct=r:ct.push.apply(ct,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Qa(e,0),Cn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Cn(a,t,Rt,!An);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=uu+300-Ht(),10<i)){if(Cn(a,t,Rt,!An),Bi(a,0,!0)!==0)break e;a.timeoutHandle=Lm(fm.bind(null,a,n,ct,wr,su,t,Rt,aa,qa,An,r,2,-0,0),i);break e}fm(a,n,ct,wr,su,t,Rt,aa,qa,An,r,0,-0,0)}}break}while(!0);Vt(e)}function fm(e,t,n,a,i,r,f,h,x,z,D,O,T,A){if(e.timeoutHandle=-1,O=t.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(hi={stylesheets:null,count:0,unsuspend:ax},lm(t),O=ix(),O!==null)){e.cancelPendingCommit=O(xm.bind(null,e,t,r,n,a,i,f,h,x,D,1,T,A)),Cn(e,r,f,!z);return}xm(e,t,r,n,a,i,f,h,x)}function jb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t,n,a){t&=~ou,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-dt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&jf(e,n,t)}function _r(){return(xe&6)===0?(oi(0),!1):!0}function hu(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,en=Fn=null,Ms(e),Ua=null,Fl=0,e=fe;for(;e!==null;)Xh(e.alternate,e),e=e.return;fe=null}}function Qa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Gb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),hu(),ze=e,fe=n=Ft(e.current,null),he=t,ve=0,bt=null,An=!1,Ya=wl(e,t),ru=!1,qa=Rt=ou=aa=Rn=De=0,ct=ii=null,su=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-dt(a),r=1<<i;t|=e[i],a&=~r}return un=t,Zi(),n}function dm(e,t){oe=null,C.H=fr,t===ql||t===tr?(t=Rd(),ve=3):t===Ed?(t=Rd(),ve=4):ve=t===Mh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(De=1,pr(e,_t(t,e.current)))}function hm(){var e=C.H;return C.H=fr,e===null?fr:e}function mm(){var e=C.A;return C.A=yb,e}function mu(){De=4,An||(he&4194048)!==he&&At.current!==null||(Ya=!0),(Rn&134217727)===0&&(aa&134217727)===0||ze===null||Cn(ze,he,Rt,!1)}function gu(e,t,n){var a=xe;xe|=2;var i=hm(),r=mm();(ze!==e||he!==t)&&(wr=null,Qa(e,t)),t=!1;var f=De;e:do try{if(ve!==0&&fe!==null){var h=fe,x=bt;switch(ve){case 8:hu(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var z=ve;if(ve=0,bt=null,Za(e,h,x,z),n&&Ya){f=0;break e}break;default:z=ve,ve=0,bt=null,Za(e,h,x,z)}}wb(),f=De;break}catch(D){dm(e,D)}while(!0);return t&&e.shellSuspendCounter++,en=Fn=null,xe=a,C.H=i,C.A=r,fe===null&&(ze=null,he=0,Zi()),f}function wb(){for(;fe!==null;)gm(fe)}function _b(e,t){var n=xe;xe|=2;var a=hm(),i=mm();ze!==e||he!==t?(wr=null,jr=Ht()+500,Qa(e,t)):Ya=wl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,Za(e,t,r,1);break;case 2:case 9:if(Td(r)){ve=0,bt=null,pm(t);break}t=function(){ve!==2&&ve!==9||ze!==e||(ve=7),Vt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Td(r)?(ve=0,bt=null,pm(t)):(ve=0,bt=null,Za(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||Fm(f)){ve=0,bt=null;var x=h.sibling;if(x!==null)fe=x;else{var z=h.return;z!==null?(fe=z,zr(z)):fe=null}break t}}ve=0,bt=null,Za(e,t,r,5);break;case 6:ve=0,bt=null,Za(e,t,r,6);break;case 8:hu(),De=6;break e;default:throw Error(u(462))}}zb();break}catch(D){dm(e,D)}while(!0);return en=Fn=null,C.H=a,C.A=i,xe=n,fe!==null?0:(ze=null,he=0,Zi(),De)}function zb(){for(;fe!==null&&!Kp();)gm(fe)}function gm(e){var t=qh(e.alternate,e,un);e.memoizedProps=e.pendingProps,t===null?zr(e):fe=t}function pm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Nh(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Nh(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Ms(t);default:Xh(n,t),t=fe=bd(t,un),t=qh(n,t,un)}e.memoizedProps=e.pendingProps,t===null?zr(e):fe=t}function Za(e,t,n,a){en=Fn=null,Ms(t),Ua=null,Fl=0;var i=t.return;try{if(mb(e,i,t,n,he)){De=1,pr(e,_t(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;De=1,pr(e,_t(n,e.current)),fe=null;return}t.flags&32768?(ge||a===1?e=!0:Ya||(he&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),bm(t,e)):zr(t)}function zr(e){var t=e;do{if((t.flags&32768)!==0){bm(t,An);return}e=t.return;var n=pb(t.alternate,t,un);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);De===0&&(De=5)}function bm(e,t){do{var n=bb(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);De=6,fe=null}function xm(e,t,n,a,i,r,f,h,x){e.cancelPendingCommit=null;do Er();while(We!==0);if((xe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=is,a1(e,n,r,f,h,x),e===ze&&(fe=ze=null,he=0),Va=t,kn=e,Xa=n,cu=r,fu=i,sm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rb(ki,function(){return wm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,i=q.p,q.p=2,f=xe,xe|=4;try{xb(e,t,n)}finally{xe=f,q.p=i,C.T=a}}We=1,vm(),ym(),Sm()}}function vm(){if(We===1){We=0;var e=kn,t=Va,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=q.p;q.p=2;var i=xe;xe|=4;try{tm(t,e);var r=Tu,f=od(e.containerInfo),h=r.focusedElem,x=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&rd(h.ownerDocument.documentElement,h)){if(x!==null&&es(h)){var z=x.start,D=x.end;if(D===void 0&&(D=z),"selectionStart"in h)h.selectionStart=z,h.selectionEnd=Math.min(D,h.value.length);else{var O=h.ownerDocument||document,T=O&&O.defaultView||window;if(T.getSelection){var A=T.getSelection(),ne=h.textContent.length,I=Math.min(x.start,ne),je=x.end===void 0?I:Math.min(x.end,ne);!A.extend&&I>je&&(f=je,je=I,I=f);var w=id(h,I),S=id(h,je);if(w&&S&&(A.rangeCount!==1||A.anchorNode!==w.node||A.anchorOffset!==w.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var _=O.createRange();_.setStart(w.node,w.offset),A.removeAllRanges(),I>je?(A.addRange(_),A.extend(S.node,S.offset)):(_.setEnd(S.node,S.offset),A.addRange(_))}}}}for(O=[],A=h;A=A.parentNode;)A.nodeType===1&&O.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<O.length;h++){var B=O[h];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Hr=!!Eu,Tu=Eu=null}finally{xe=i,q.p=a,C.T=n}}e.current=t,We=2}}function ym(){if(We===2){We=0;var e=kn,t=Va,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=q.p;q.p=2;var i=xe;xe|=4;try{Fh(e,t.alternate,t)}finally{xe=i,q.p=a,C.T=n}}We=3}}function Sm(){if(We===4||We===3){We=0,$p();var e=kn,t=Va,n=Xa,a=sm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Va=kn=null,jm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Mn=null),Do(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,i=q.p,q.p=2,C.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{C.T=t,q.p=i}}(Xa&3)!==0&&Er(),Vt(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===du?ri++:(ri=0,du=e):ri=0,oi(0)}}function jm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Gl(t)))}function Er(e){return vm(),ym(),Sm(),wm()}function wm(){if(We!==5)return!1;var e=kn,t=cu;cu=0;var n=Do(Xa),a=C.T,i=q.p;try{q.p=32>n?32:n,C.T=null,n=fu,fu=null;var r=kn,f=Xa;if(We=0,Va=kn=null,Xa=0,(xe&6)!==0)throw Error(u(331));var h=xe;if(xe|=4,rm(r.current),am(r,r.current,f,n),xe=h,oi(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(jl,r)}catch{}return!0}finally{q.p=i,C.T=a,jm(e,t)}}function _m(e,t,n){t=_t(n,t),t=Xs(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(_l(e,2),Vt(e))}function _e(e,t,n){if(e.tag===3)_m(e,e,n);else for(;t!==null;){if(t.tag===3){_m(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){e=_t(n,e),n=Ah(2),a=Sn(t,n,2),a!==null&&(Rh(n,a,t,e),_l(a,2),Vt(a));break}}t=t.return}}function pu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Sb;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(ru=!0,i.add(n),e=Eb.bind(null,e,t,n),t.then(e,e))}function Eb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(he&n)===n&&(De===4||De===3&&(he&62914560)===he&&300>Ht()-uu?(xe&2)===0&&Qa(e,0):ou|=n,qa===he&&(qa=0)),Vt(e)}function zm(e,t){t===0&&(t=Sf()),e=Ta(e,t),e!==null&&(_l(e,t),Vt(e))}function Tb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zm(e,n)}function Ab(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),zm(e,n)}function Rb(e,t){return Ro(e,t)}var Tr=null,Ka=null,bu=!1,Ar=!1,xu=!1,la=0;function Vt(e){e!==Ka&&e.next===null&&(Ka===null?Tr=Ka=e:Ka=Ka.next=e),Ar=!0,bu||(bu=!0,kb())}function oi(e,t){if(!xu&&Ar){xu=!0;do for(var n=!1,a=Tr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=i&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Rm(a,r))}else r=he,r=Bi(a,a===ze?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||wl(a,r)||(n=!0,Rm(a,r));a=a.next}while(n);xu=!1}}function Mb(){Em()}function Em(){Ar=bu=!1;var e=0;la!==0&&(Lb()&&(e=la),la=0);for(var t=Ht(),n=null,a=Tr;a!==null;){var i=a.next,r=Tm(a,t);r===0?(a.next=null,n===null?Tr=i:n.next=i,i===null&&(Ka=n)):(n=a,(e!==0||(r&3)!==0)&&(Ar=!0)),a=i}oi(e)}function Tm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,x=i[f];x===-1?((h&n)===0||(h&a)!==0)&&(i[f]=n1(h,t)):x<=t&&(e.expiredLanes|=h),r&=~h}if(t=ze,n=he,n=Bi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Mo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||wl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Mo(a),Do(n)){case 2:case 8:n=xf;break;case 32:n=ki;break;case 268435456:n=vf;break;default:n=ki}return a=Am.bind(null,e),n=Ro(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Mo(a),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var a=he;return a=Bi(e,e===ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cm(e,a,t),Tm(e,Ht()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function Rm(e,t){if(Er())return null;cm(e,t,!0)}function kb(){Yb(function(){(xe&6)!==0?Ro(bf,Mb):Em()})}function vu(){return la===0&&(la=yf()),la}function Mm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Li(""+e)}function km(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Cb(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=Mm((i[rt]||null).action),f=a.submitter;f&&(t=(t=f[rt]||null)?Mm(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Vi("action","action",null,a,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var x=f?km(i,f):new FormData(i);Ls(n,{pending:!0,data:x,method:i.method,action:r},null,x)}}else typeof r=="function"&&(h.preventDefault(),x=f?km(i,f):new FormData(i),Ls(n,{pending:!0,data:x,method:i.method,action:r},r,x))},currentTarget:i}]})}}for(var yu=0;yu<ls.length;yu++){var Su=ls[yu],Db=Su.toLowerCase(),Bb=Su[0].toUpperCase()+Su.slice(1);Ct(Db,"on"+Bb)}Ct(cd,"onAnimationEnd"),Ct(fd,"onAnimationIteration"),Ct(dd,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(F1,"onTransitionRun"),Ct(P1,"onTransitionStart"),Ct(I1,"onTransitionCancel"),Ct(hd,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function Cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],x=h.instance,z=h.currentTarget;if(h=h.listener,x!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=z;try{r(i)}catch(D){gr(D)}i.currentTarget=null,r=x}else for(f=0;f<a.length;f++){if(h=a[f],x=h.instance,z=h.currentTarget,h=h.listener,x!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=z;try{r(i)}catch(D){gr(D)}i.currentTarget=null,r=x}}}}function de(e,t){var n=t[Bo];n===void 0&&(n=t[Bo]=new Set);var a=e+"__bubble";n.has(a)||(Dm(t,e,2,!1),n.add(a))}function ju(e,t,n){var a=0;t&&(a|=4),Dm(n,e,a,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function wu(e){if(!e[Rr]){e[Rr]=!0,Ef.forEach(function(n){n!=="selectionchange"&&(Ob.has(n)||ju(n,!1,e),ju(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,ju("selectionchange",!1,t))}}function Dm(e,t,n,a){switch(a0(t)){case 2:var i=sx;break;case 8:i=ux;break;default:i=Uu}n=i.bind(null,t,n,e),i=void 0,!Qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _u(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=a.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=ma(h),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){a=r=f;continue e}h=h.parentNode}}a=a.return}Gf(function(){var z=r,D=Vo(n),O=[];e:{var T=md.get(e);if(T!==void 0){var A=Vi,ne=e;switch(e){case"keypress":if(Yi(n)===0)break e;case"keydown":case"keyup":A=R1;break;case"focusin":ne="focus",A=Jo;break;case"focusout":ne="blur",A=Jo;break;case"beforeblur":case"afterblur":A=Jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=b1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=C1;break;case cd:case fd:case dd:A=y1;break;case hd:A=B1;break;case"scroll":case"scrollend":A=g1;break;case"wheel":A=N1;break;case"copy":case"cut":case"paste":A=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Qf;break;case"toggle":case"beforetoggle":A=H1}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),w=I?T!==null?T+"Capture":null:T;I=[];for(var S=z,_;S!==null;){var B=S;if(_=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||_===null||w===null||(B=Tl(S,w),B!=null&&I.push(ui(S,B,_))),je)break;S=S.return}0<I.length&&(T=new A(T,ne,null,n,D),O.push({event:T,listeners:I}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&n!==qo&&(ne=n.relatedTarget||n.fromElement)&&(ma(ne)||ne[ha]))break e;if((A||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,A?(ne=n.relatedTarget||n.toElement,A=z,ne=ne?ma(ne):null,ne!==null&&(je=g(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(A=null,ne=z),A!==ne)){if(I=Vf,B="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=Qf,B="onPointerLeave",w="onPointerEnter",S="pointer"),je=A==null?T:El(A),_=ne==null?T:El(ne),T=new I(B,S+"leave",A,n,D),T.target=je,T.relatedTarget=_,B=null,ma(D)===z&&(I=new I(w,S+"enter",ne,n,D),I.target=_,I.relatedTarget=je,B=I),je=B,A&&ne)t:{for(I=A,w=ne,S=0,_=I;_;_=$a(_))S++;for(_=0,B=w;B;B=$a(B))_++;for(;0<S-_;)I=$a(I),S--;for(;0<_-S;)w=$a(w),_--;for(;S--;){if(I===w||w!==null&&I===w.alternate)break t;I=$a(I),w=$a(w)}I=null}else I=null;A!==null&&Bm(O,T,A,I,!1),ne!==null&&je!==null&&Bm(O,je,ne,I,!0)}}e:{if(T=z?El(z):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var K=If;else if(Ff(T))if(ed)K=$1;else{K=Z1;var se=Q1}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&Yo(z.elementType)&&(K=If):K=K1;if(K&&(K=K(e,z))){Pf(O,K,n,D);break e}se&&se(e,T,z),e==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&Go(T,"number",T.value)}switch(se=z?El(z):window,e){case"focusin":(Ff(se)||se.contentEditable==="true")&&(_a=se,ts=z,Ol=null);break;case"focusout":Ol=ts=_a=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,sd(O,n,D);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":sd(O,n,D)}var $;if(Fo)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else wa?Jf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Zf&&n.locale!=="ko"&&(wa||te!=="onCompositionStart"?te==="onCompositionEnd"&&wa&&($=Yf()):(bn=D,Zo="value"in bn?bn.value:bn.textContent,wa=!0)),se=Mr(z,te),0<se.length&&(te=new Xf(te,e,null,n,D),O.push({event:te,listeners:se}),$?te.data=$:($=Wf(n),$!==null&&(te.data=$)))),($=G1?Y1(e,n):q1(e,n))&&(te=Mr(z,"onBeforeInput"),0<te.length&&(se=new Xf("onBeforeInput","beforeinput",null,n,D),O.push({event:se,listeners:te}),se.data=$)),Cb(O,e,z,n,D)}Cm(O,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Tl(e,n),i!=null&&a.unshift(ui(e,i,r)),i=Tl(e,t),i!=null&&a.push(ui(e,i,r))),e.tag===3)return a;e=e.return}return[]}function $a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bm(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,x=h.alternate,z=h.stateNode;if(h=h.tag,x!==null&&x===a)break;h!==5&&h!==26&&h!==27||z===null||(x=z,i?(z=Tl(n,r),z!=null&&f.unshift(ui(n,z,x))):i||(z=Tl(n,r),z!=null&&f.push(ui(n,z,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Nb=/\r\n?/g,Ub=/\u0000|\uFFFD/g;function Om(e){return(typeof e=="string"?e:""+e).replace(Nb,`
`).replace(Ub,"")}function Nm(e,t){return t=Om(t),Om(e)===t}function kr(){}function Se(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ya(e,""+a);break;case"className":Ni(e,"class",a);break;case"tabIndex":Ni(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ni(e,n,a);break;case"style":Hf(e,a,r);break;case"data":if(t!=="object"){Ni(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Li(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",i.name,i,null),Se(e,t,"formEncType",i.formEncType,i,null),Se(e,t,"formMethod",i.formMethod,i,null),Se(e,t,"formTarget",i.formTarget,i,null)):(Se(e,t,"encType",i.encType,i,null),Se(e,t,"method",i.method,i,null),Se(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Li(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=kr);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Li(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),Oi(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Oi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=h1.get(n)||n,Oi(e,n,a))}}function zu(e,t,n,a,i,r){switch(n){case"style":Hf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ya(e,a):(typeof a=="number"||typeof a=="bigint")&&ya(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=kr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[rt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Oi(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,r,f,n,null)}}i&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=i=null,x=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var D=n[a];if(D!=null)switch(a){case"name":i=D;break;case"type":f=D;break;case"checked":x=D;break;case"defaultChecked":z=D;break;case"value":r=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:Se(e,t,a,D,n,null)}}Bf(e,r,h,x,z,f,i,!1),Ui(e);return;case"select":de("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,i,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?va(e,!!a,t,!1):n!=null&&va(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:Se(e,t,f,h,n,null)}Nf(e,a,i,r),Ui(e);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,x,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<si.length;a++)de(si[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,z,a,n,null)}return;default:if(Yo(t)){for(D in n)n.hasOwnProperty(D)&&(a=n[D],a!==void 0&&zu(e,t,D,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function Hb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,h=null,x=null,z=null,D=null;for(A in n){var O=n[A];if(n.hasOwnProperty(A)&&O!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":x=O;default:a.hasOwnProperty(A)||Se(e,t,A,null,a,O)}}for(var T in a){var A=a[T];if(O=n[T],a.hasOwnProperty(T)&&(A!=null||O!=null))switch(T){case"type":r=A;break;case"name":i=A;break;case"checked":z=A;break;case"defaultChecked":D=A;break;case"value":f=A;break;case"defaultValue":h=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==O&&Se(e,t,T,A,a,O)}}Lo(e,f,h,x,z,D,r,i);return;case"select":A=f=h=T=null;for(r in n)if(x=n[r],n.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":A=x;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,x)}for(i in a)if(r=a[i],x=n[i],a.hasOwnProperty(i)&&(r!=null||x!=null))switch(i){case"value":T=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==x&&Se(e,t,i,r,a,x)}t=h,n=f,a=A,T!=null?va(e,!!n,T,!1):!!a!=!!n&&(t!=null?va(e,!!n,t,!0):va(e,!!n,n?[]:"",!1));return;case"textarea":A=T=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":T=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Se(e,t,f,i,a,r)}Of(e,T,A);return;case"option":for(var ne in n)if(T=n[ne],n.hasOwnProperty(ne)&&T!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,T)}for(x in a)if(T=a[x],A=n[x],a.hasOwnProperty(x)&&T!==A&&(T!=null||A!=null))switch(x){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Se(e,t,x,T,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)T=n[I],n.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,T);for(z in a)if(T=a[z],A=n[z],a.hasOwnProperty(z)&&T!==A&&(T!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:Se(e,t,z,T,a,A)}return;default:if(Yo(t)){for(var je in n)T=n[je],n.hasOwnProperty(je)&&T!==void 0&&!a.hasOwnProperty(je)&&zu(e,t,je,void 0,a,T);for(D in a)T=a[D],A=n[D],!a.hasOwnProperty(D)||T===A||T===void 0&&A===void 0||zu(e,t,D,T,a,A);return}}for(var w in n)T=n[w],n.hasOwnProperty(w)&&T!=null&&!a.hasOwnProperty(w)&&Se(e,t,w,null,a,T);for(O in a)T=a[O],A=n[O],!a.hasOwnProperty(O)||T===A||T==null&&A==null||Se(e,t,O,T,a,A)}var Eu=null,Tu=null;function Cr(e){return e.nodeType===9?e:e.ownerDocument}function Um(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ru=null;function Lb(){var e=window.event;return e&&e.type==="popstate"?e===Ru?!1:(Ru=e,!0):(Ru=null,!1)}var Lm=typeof setTimeout=="function"?setTimeout:void 0,Gb=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,Yb=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(e){return Gm.resolve(null).then(e).catch(qb)}:Lm;function qb(e){setTimeout(function(){throw e})}function Dn(e){return e==="head"}function Ym(e,t){var n=t,a=0,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&ci(f.documentElement),n&2&&ci(f.body),n&4)for(n=f.head,ci(n),f=n.firstChild;f;){var h=f.nextSibling,x=f.nodeName;f[zl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(i===0){e.removeChild(r),xi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);xi(t)}function Mu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Mu(n),Oo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vb(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function Xb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Bt(e.nextSibling),e===null))return null;return e}function ku(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Qb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Cu=null;function qm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Vm(e,t,n){switch(t=Cr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ci(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Oo(e)}var Mt=new Map,Xm=new Set;function Dr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=q.d;q.d={f:Zb,r:Kb,D:$b,C:Jb,L:Wb,m:Fb,X:Ib,S:Pb,M:ex};function Zb(){var e=cn.f(),t=_r();return e||t}function Kb(e){var t=ga(e);t!==null&&t.tag===5&&t.type==="form"?ch(t):cn.r(e)}var Ja=typeof document>"u"?null:document;function Qm(e,t,n){var a=Ja;if(a&&typeof t=="string"&&t){var i=wt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Xm.has(i)||(Xm.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function $b(e){cn.D(e),Qm("dns-prefetch",e,null)}function Jb(e,t){cn.C(e,t),Qm("preconnect",e,t)}function Wb(e,t,n){cn.L(e,t,n);var a=Ja;if(a&&e&&t){var i='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+wt(n.imageSizes)+'"]')):i+='[href="'+wt(e)+'"]';var r=i;switch(t){case"style":r=Wa(e);break;case"script":r=Fa(e)}Mt.has(r)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(fi(r))||t==="script"&&a.querySelector(di(r))||(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function Fb(e,t){cn.m(e,t);var n=Ja;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+wt(a)+'"][href="'+wt(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Fa(e)}if(!Mt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Mt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(di(r)))return}a=n.createElement("link"),Fe(a,"link",e),Xe(a),n.head.appendChild(a)}}}function Pb(e,t,n){cn.S(e,t,n);var a=Ja;if(a&&e){var i=pa(a).hoistableStyles,r=Wa(e);t=t||"default";var f=i.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(fi(r)))h.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(r))&&Du(e,n);var x=f=a.createElement("link");Xe(x),Fe(x,"link",e),x._p=new Promise(function(z,D){x.onload=z,x.onerror=D}),x.addEventListener("load",function(){h.loading|=1}),x.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Br(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(r,f)}}}function Ib(e,t){cn.X(e,t);var n=Ja;if(n&&e){var a=pa(n).hoistableScripts,i=Fa(e),r=a.get(i);r||(r=n.querySelector(di(i)),r||(e=E({src:e,async:!0},t),(t=Mt.get(i))&&Bu(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function ex(e,t){cn.M(e,t);var n=Ja;if(n&&e){var a=pa(n).hoistableScripts,i=Fa(e),r=a.get(i);r||(r=n.querySelector(di(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Mt.get(i))&&Bu(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Zm(e,t,n,a){var i=(i=ee.current)?Dr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Wa(n.href),n=pa(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Wa(n.href);var r=pa(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(fi(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),r||tx(i,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fa(n),n=pa(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Wa(e){return'href="'+wt(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function Km(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function tx(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Xe(t),e.head.appendChild(t))}function Fa(e){return'[src="'+wt(e)+'"]'}function di(e){return"script[async]"+e}function $m(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(a)return t.instance=a,Xe(a),a;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),Fe(a,"style",i),Br(a,n.precedence,e),t.instance=a;case"stylesheet":i=Wa(n.href);var r=e.querySelector(fi(i));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;a=Km(n),(i=Mt.get(i))&&Du(a,i),r=(e.ownerDocument||e).createElement("link"),Xe(r);var f=r;return f._p=new Promise(function(h,x){f.onload=h,f.onerror=x}),Fe(r,"link",a),t.state.loading|=4,Br(r,n.precedence,e),t.instance=r;case"script":return r=Fa(n.src),(i=e.querySelector(di(r)))?(t.instance=i,Xe(i),i):(a=n,(i=Mt.get(r))&&(a=E({},n),Bu(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),Fe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Br(a,n.precedence,e));return t.instance}function Br(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function Jm(e,t,n){if(Or===null){var a=new Map,i=Or=new Map;i.set(n,a)}else i=Or,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[zl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function Wm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var hi=null;function ax(){}function lx(e,t,n){if(hi===null)throw Error(u(475));var a=hi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Wa(n.href),r=e.querySelector(fi(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Nr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=Km(n),(i=Mt.get(i))&&Du(n,i),r=r.createElement("link"),Xe(r);var f=r;f._p=new Promise(function(h,x){f.onload=h,f.onerror=x}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Nr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function ix(){if(hi===null)throw Error(u(475));var e=hi;return e.stylesheets&&e.count===0&&Ou(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ou(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Nr(){if(this.count--,this.count===0){if(this.stylesheets)Ou(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ur=null;function Ou(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ur=new Map,t.forEach(rx,e),Ur=null,Nr.call(e))}function rx(e,t){if(!(t.state.loading&4)){var n=Ur.get(e);if(n)var a=n.get(null);else{n=new Map,Ur.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=Nr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function ox(e,t,n,a,i,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ko(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.hiddenUpdates=ko(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Pm(e,t,n,a,i,r,f,h,x,z,D,O){return e=new ox(e,t,n,f,h,x,z,O),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=ps(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},ys(r),e}function Im(e){return e?(e=Aa,e):Aa}function e0(e,t,n,a,i,r){i=Im(i),a.context===null?a.context=i:a.pendingContext=i,a=yn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Sn(e,a,t),n!==null&&(vt(n,e,t),Xl(n,e,t))}function t0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nu(e,t){t0(e,t),(e=e.alternate)&&t0(e,t)}function n0(e){if(e.tag===13){var t=Ta(e,67108864);t!==null&&vt(t,e,67108864),Nu(e,67108864)}}var Hr=!0;function sx(e,t,n,a){var i=C.T;C.T=null;var r=q.p;try{q.p=2,Uu(e,t,n,a)}finally{q.p=r,C.T=i}}function ux(e,t,n,a){var i=C.T;C.T=null;var r=q.p;try{q.p=8,Uu(e,t,n,a)}finally{q.p=r,C.T=i}}function Uu(e,t,n,a){if(Hr){var i=Hu(a);if(i===null)_u(e,t,a,Lr,n),l0(e,a);else if(fx(i,e,t,n,a))a.stopPropagation();else if(l0(e,a),t&4&&-1<cx.indexOf(e)){for(;i!==null;){var r=ga(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Yn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var x=1<<31-dt(f);h.entanglements[1]|=x,f&=~x}Vt(r),(xe&6)===0&&(jr=Ht()+500,oi(0))}}break;case 13:h=Ta(r,2),h!==null&&vt(h,r,2),_r(),Nu(r,2)}if(r=Hu(a),r===null&&_u(e,t,a,Lr,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else _u(e,t,a,null,n)}}function Hu(e){return e=Vo(e),Lu(e)}var Lr=null;function Lu(e){if(Lr=null,e=ma(e),e!==null){var t=g(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lr=e,null}function a0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jp()){case bf:return 2;case xf:return 8;case ki:case Wp:return 32;case vf:return 268435456;default:return 32}default:return 32}}var Gu=!1,Bn=null,On=null,Nn=null,gi=new Map,pi=new Map,Un=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l0(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function bi(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ga(t),t!==null&&n0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fx(e,t,n,a,i){switch(t){case"focusin":return Bn=bi(Bn,e,t,n,a,i),!0;case"dragenter":return On=bi(On,e,t,n,a,i),!0;case"mouseover":return Nn=bi(Nn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return gi.set(r,bi(gi.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,pi.set(r,bi(pi.get(r)||null,e,t,n,a,i)),!0}return!1}function i0(e){var t=ma(e.target);if(t!==null){var n=g(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,l1(e.priority,function(){if(n.tag===13){var a=xt();a=Co(a);var i=Ta(n,a);i!==null&&vt(i,n,a),Nu(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);qo=a,n.target.dispatchEvent(a),qo=null}else return t=ga(n),t!==null&&n0(t),e.blockedOn=n,!1;t.shift()}return!0}function r0(e,t,n){Gr(e)&&n.delete(t)}function dx(){Gu=!1,Bn!==null&&Gr(Bn)&&(Bn=null),On!==null&&Gr(On)&&(On=null),Nn!==null&&Gr(Nn)&&(Nn=null),gi.forEach(r0),pi.forEach(r0)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gu||(Gu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,dx)))}var qr=null;function o0(e){qr!==e&&(qr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){qr===e&&(qr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Lu(a||n)===null)continue;break}var r=ga(n);r!==null&&(e.splice(t,3),t-=3,Ls(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function xi(e){function t(x){return Yr(x,e)}Bn!==null&&Yr(Bn,e),On!==null&&Yr(On,e),Nn!==null&&Yr(Nn,e),gi.forEach(t),pi.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)i0(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[rt]||null;if(typeof r=="function")f||o0(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[rt]||null)h=f.formAction;else if(Lu(i)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),o0(n)}}}function Yu(e){this._internalRoot=e}Vr.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=xt();e0(n,a,e,t,null,null)},Vr.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e0(e.current,2,null,e,null,null),_r(),t[ha]=null}};function Vr(e){this._internalRoot=e}Vr.prototype.unstable_scheduleHydration=function(e){if(e){var t=_f();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&i0(e)}};var s0=s.version;if(s0!=="19.1.0")throw Error(u(527,s0,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var hx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{jl=Xr.inject(hx),ft=Xr}catch{}}return yi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",i=_h,r=zh,f=Eh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=Pm(e,1,!1,null,null,n,a,i,r,f,h,null),e[ha]=t.current,wu(e),new Yu(t)},yi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,i="",r=_h,f=zh,h=Eh,x=null,z=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks),n.formState!==void 0&&(z=n.formState)),t=Pm(e,1,!0,t,n??null,a,i,r,f,h,x,z),t.context=Im(null),n=t.current,a=xt(),a=Co(a),i=yn(a),i.callback=null,Sn(n,i,a),n=a,t.current.lanes=n,_l(t,n),Vt(t),e[ha]=t.current,wu(e),new Vr(t)},yi.version="19.1.0",yi}var x0;function _x(){if(x0)return Xu.exports;x0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Xu.exports=wx(),Xu.exports}var zx=_x(),nt=function(){return nt=Object.assign||function(s){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(s[g]=c[g])}return s},nt.apply(this,arguments)};function Ei(l,s,c){if(c||arguments.length===2)for(var u=0,d=s.length,g;u<d;u++)(g||!(u in s))&&(g||(g=Array.prototype.slice.call(s,0,u)),g[u]=s[u]);return l.concat(g||Array.prototype.slice.call(s))}var Te="-ms-",zi="-moz-",be="-webkit-",rg="comm",yo="rule",Ic="decl",Ex="@import",og="@keyframes",Tx="@layer",sg=Math.abs,ef=String.fromCharCode,qc=Object.assign;function Ax(l,s){return $e(l,0)^45?(((s<<2^$e(l,0))<<2^$e(l,1))<<2^$e(l,2))<<2^$e(l,3):0}function ug(l){return l.trim()}function fn(l,s){return(l=s.exec(l))?l[0]:l}function re(l,s,c){return l.replace(s,c)}function oo(l,s,c){return l.indexOf(s,c)}function $e(l,s){return l.charCodeAt(s)|0}function ml(l,s,c){return l.slice(s,c)}function Xt(l){return l.length}function cg(l){return l.length}function _i(l,s){return s.push(l),l}function Rx(l,s){return l.map(s).join("")}function v0(l,s){return l.filter(function(c){return!fn(c,s)})}var So=1,gl=1,fg=0,kt=0,He=0,xl="";function jo(l,s,c,u,d,g,b,j){return{value:l,root:s,parent:c,type:u,props:d,children:g,line:So,column:gl,length:b,return:"",siblings:j}}function Ln(l,s){return qc(jo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},s)}function Pa(l){for(;l.root;)l=Ln(l.root,{children:[l]});_i(l,l.siblings)}function Mx(){return He}function kx(){return He=kt>0?$e(xl,--kt):0,gl--,He===10&&(gl=1,So--),He}function Ot(){return He=kt<fg?$e(xl,kt++):0,gl++,He===10&&(gl=1,So++),He}function ra(){return $e(xl,kt)}function so(){return kt}function wo(l,s){return ml(xl,l,s)}function Vc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cx(l){return So=gl=1,fg=Xt(xl=l),kt=0,[]}function Dx(l){return xl="",l}function $u(l){return ug(wo(kt-1,Xc(l===91?l+2:l===40?l+1:l)))}function Bx(l){for(;(He=ra())&&He<33;)Ot();return Vc(l)>2||Vc(He)>3?"":" "}function Ox(l,s){for(;--s&&Ot()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return wo(l,so()+(s<6&&ra()==32&&Ot()==32))}function Xc(l){for(;Ot();)switch(He){case l:return kt;case 34:case 39:l!==34&&l!==39&&Xc(He);break;case 40:l===41&&Xc(l);break;case 92:Ot();break}return kt}function Nx(l,s){for(;Ot()&&l+He!==57;)if(l+He===84&&ra()===47)break;return"/*"+wo(s,kt-1)+"*"+ef(l===47?l:Ot())}function Ux(l){for(;!Vc(ra());)Ot();return wo(l,kt)}function Hx(l){return Dx(uo("",null,null,null,[""],l=Cx(l),0,[0],l))}function uo(l,s,c,u,d,g,b,j,v){for(var p=0,E=0,R=b,k=0,H=0,L=0,G=1,X=1,U=1,J=0,Q="",ae=d,Z=g,le=u,W=Q;X;)switch(L=J,J=Ot()){case 40:if(L!=108&&$e(W,R-1)==58){oo(W+=re($u(J),"&","&\f"),"&\f",sg(p?j[p-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:W+=$u(J);break;case 9:case 10:case 13:case 32:W+=Bx(L);break;case 92:W+=Ox(so()-1,7);continue;case 47:switch(ra()){case 42:case 47:_i(Lx(Nx(Ot(),so()),s,c,v),v);break;default:W+="/"}break;case 123*G:j[p++]=Xt(W)*U;case 125*G:case 59:case 0:switch(J){case 0:case 125:X=0;case 59+E:U==-1&&(W=re(W,/\f/g,"")),H>0&&Xt(W)-R&&_i(H>32?S0(W+";",u,c,R-1,v):S0(re(W," ","")+";",u,c,R-2,v),v);break;case 59:W+=";";default:if(_i(le=y0(W,s,c,p,E,d,j,Q,ae=[],Z=[],R,g),g),J===123)if(E===0)uo(W,s,le,le,ae,g,R,j,Z);else switch(k===99&&$e(W,3)===110?100:k){case 100:case 108:case 109:case 115:uo(l,le,le,u&&_i(y0(l,le,le,0,0,d,j,Q,d,ae=[],R,Z),Z),d,Z,R,j,u?ae:Z);break;default:uo(W,le,le,le,[""],Z,0,j,Z)}}p=E=H=0,G=U=1,Q=W="",R=b;break;case 58:R=1+Xt(W),H=L;default:if(G<1){if(J==123)--G;else if(J==125&&G++==0&&kx()==125)continue}switch(W+=ef(J),J*G){case 38:U=E>0?1:(W+="\f",-1);break;case 44:j[p++]=(Xt(W)-1)*U,U=1;break;case 64:ra()===45&&(W+=$u(Ot())),k=ra(),E=R=Xt(Q=W+=Ux(so())),J++;break;case 45:L===45&&Xt(W)==2&&(G=0)}}return g}function y0(l,s,c,u,d,g,b,j,v,p,E,R){for(var k=d-1,H=d===0?g:[""],L=cg(H),G=0,X=0,U=0;G<u;++G)for(var J=0,Q=ml(l,k+1,k=sg(X=b[G])),ae=l;J<L;++J)(ae=ug(X>0?H[J]+" "+Q:re(Q,/&\f/g,H[J])))&&(v[U++]=ae);return jo(l,s,c,d===0?yo:j,v,p,E,R)}function Lx(l,s,c,u){return jo(l,s,c,rg,ef(Mx()),ml(l,2,-2),0,u)}function S0(l,s,c,u,d){return jo(l,s,c,Ic,ml(l,0,u),ml(l,u+1,-1),u,d)}function dg(l,s,c){switch(Ax(l,s)){case 5103:return be+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+l+l;case 4789:return zi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return be+l+zi+l+Te+l+l;case 5936:switch($e(l,s+11)){case 114:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return be+l+Te+l+l;case 6165:return be+l+Te+"flex-"+l+l;case 5187:return be+l+re(l,/(\w+).+(:[^]+)/,be+"box-$1$2"+Te+"flex-$1$2")+l;case 5443:return be+l+Te+"flex-item-"+re(l,/flex-|-self/g,"")+(fn(l,/flex-|baseline/)?"":Te+"grid-row-"+re(l,/flex-|-self/g,""))+l;case 4675:return be+l+Te+"flex-line-pack"+re(l,/align-content|flex-|-self/g,"")+l;case 5548:return be+l+Te+re(l,"shrink","negative")+l;case 5292:return be+l+Te+re(l,"basis","preferred-size")+l;case 6060:return be+"box-"+re(l,"-grow","")+be+l+Te+re(l,"grow","positive")+l;case 4554:return be+re(l,/([^-])(transform)/g,"$1"+be+"$2")+l;case 6187:return re(re(re(l,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),l,"")+l;case 5495:case 3959:return re(l,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(l,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+l+l;case 4200:if(!fn(l,/flex-|baseline/))return Te+"grid-column-align"+ml(l,s)+l;break;case 2592:case 3360:return Te+re(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(u,d){return s=d,fn(u.props,/grid-\w+-end/)})?~oo(l+(c=c[s].value),"span",0)?l:Te+re(l,"-start","")+l+Te+"grid-row-span:"+(~oo(c,"span",0)?fn(c,/\d+/):+fn(c,/\d+/)-+fn(l,/\d+/))+";":Te+re(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(u){return fn(u.props,/grid-\w+-start/)})?l:Te+re(re(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return re(l,/(.+)-inline(.+)/,be+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(l)-1-s>6)switch($e(l,s+1)){case 109:if($e(l,s+4)!==45)break;case 102:return re(l,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+zi+($e(l,s+3)==108?"$3":"$2-$3"))+l;case 115:return~oo(l,"stretch",0)?dg(re(l,"stretch","fill-available"),s,c)+l:l}break;case 5152:case 5920:return re(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,g,b,j,v,p){return Te+d+":"+g+p+(b?Te+d+"-span:"+(j?v:+v-+g)+p:"")+l});case 4949:if($e(l,s+6)===121)return re(l,":",":"+be)+l;break;case 6444:switch($e(l,$e(l,14)===45?18:11)){case 120:return re(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+($e(l,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Te+"$2box$3")+l;case 100:return re(l,":",":"+Te)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(l,"scroll-","scroll-snap-")+l}return l}function go(l,s){for(var c="",u=0;u<l.length;u++)c+=s(l[u],u,l,s)||"";return c}function Gx(l,s,c,u){switch(l.type){case Tx:if(l.children.length)break;case Ex:case Ic:return l.return=l.return||l.value;case rg:return"";case og:return l.return=l.value+"{"+go(l.children,u)+"}";case yo:if(!Xt(l.value=l.props.join(",")))return""}return Xt(c=go(l.children,u))?l.return=l.value+"{"+c+"}":""}function Yx(l){var s=cg(l);return function(c,u,d,g){for(var b="",j=0;j<s;j++)b+=l[j](c,u,d,g)||"";return b}}function qx(l){return function(s){s.root||(s=s.return)&&l(s)}}function Vx(l,s,c,u){if(l.length>-1&&!l.return)switch(l.type){case Ic:l.return=dg(l.value,l.length,c);return;case og:return go([Ln(l,{value:re(l.value,"@","@"+be)})],u);case yo:if(l.length)return Rx(c=l.props,function(d){switch(fn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pa(Ln(l,{props:[re(d,/:(read-\w+)/,":"+zi+"$1")]})),Pa(Ln(l,{props:[d]})),qc(l,{props:v0(c,u)});break;case"::placeholder":Pa(Ln(l,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Pa(Ln(l,{props:[re(d,/:(plac\w+)/,":"+zi+"$1")]})),Pa(Ln(l,{props:[re(d,/:(plac\w+)/,Te+"input-$1")]})),Pa(Ln(l,{props:[d]})),qc(l,{props:v0(c,u)});break}return""})}}var Xx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},pl=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",hg="active",mg="data-styled-version",_o="6.1.19",tf=`/*!sc*/
`,po=typeof window<"u"&&typeof document<"u",Qx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),zo=Object.freeze([]),bl=Object.freeze({});function Zx(l,s,c){return c===void 0&&(c=bl),l.theme!==c.theme&&l.theme||s||c.theme}var gg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$x=/(^-|-$)/g;function j0(l){return l.replace(Kx,"-").replace($x,"")}var Jx=/(a)(d)/gi,Qr=52,w0=function(l){return String.fromCharCode(l+(l>25?39:97))};function Qc(l){var s,c="";for(s=Math.abs(l);s>Qr;s=s/Qr|0)c=w0(s%Qr)+c;return(w0(s%Qr)+c).replace(Jx,"$1-$2")}var Ju,pg=5381,hl=function(l,s){for(var c=s.length;c;)l=33*l^s.charCodeAt(--c);return l},bg=function(l){return hl(pg,l)};function xg(l){return Qc(bg(l)>>>0)}function Wx(l){return l.displayName||l.name||"Component"}function Wu(l){return typeof l=="string"&&!0}var vg=typeof Symbol=="function"&&Symbol.for,yg=vg?Symbol.for("react.memo"):60115,Fx=vg?Symbol.for("react.forward_ref"):60112,Px={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ix={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ev=((Ju={})[Fx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ju[yg]=Sg,Ju);function _0(l){return("type"in(s=l)&&s.type.$$typeof)===yg?Sg:"$$typeof"in l?ev[l.$$typeof]:Px;var s}var tv=Object.defineProperty,nv=Object.getOwnPropertyNames,z0=Object.getOwnPropertySymbols,av=Object.getOwnPropertyDescriptor,lv=Object.getPrototypeOf,E0=Object.prototype;function jg(l,s,c){if(typeof s!="string"){if(E0){var u=lv(s);u&&u!==E0&&jg(l,u,c)}var d=nv(s);z0&&(d=d.concat(z0(s)));for(var g=_0(l),b=_0(s),j=0;j<d.length;++j){var v=d[j];if(!(v in Ix||c&&c[v]||b&&v in b||g&&v in g)){var p=av(s,v);try{tv(l,v,p)}catch{}}}}return l}function ua(l){return typeof l=="function"}function nf(l){return typeof l=="object"&&"styledComponentId"in l}function ia(l,s){return l&&s?"".concat(l," ").concat(s):l||s||""}function Zc(l,s){if(l.length===0)return"";for(var c=l[0],u=1;u<l.length;u++)c+=l[u];return c}function Ti(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Kc(l,s,c){if(c===void 0&&(c=!1),!c&&!Ti(l)&&!Array.isArray(l))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)l[u]=Kc(l[u],s[u]);else if(Ti(s))for(var u in s)l[u]=Kc(l[u],s[u]);return l}function af(l,s){Object.defineProperty(l,"toString",{value:s})}function ca(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var iv=function(){function l(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return l.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},l.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,g=d;s>=g;)if((g<<=1)<0)throw ca(16,"".concat(s));this.groupSizes=new Uint32Array(g),this.groupSizes.set(u),this.length=g;for(var b=d;b<g;b++)this.groupSizes[b]=0}for(var j=this.indexOfGroup(s+1),v=(b=0,c.length);b<v;b++)this.tag.insertRule(j,c[b])&&(this.groupSizes[s]++,j++)},l.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),d=u+c;this.groupSizes[s]=0;for(var g=u;g<d;g++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],d=this.indexOfGroup(s),g=d+u,b=d;b<g;b++)c+="".concat(this.tag.getRule(b)).concat(tf);return c},l}(),co=new Map,bo=new Map,fo=1,Zr=function(l){if(co.has(l))return co.get(l);for(;bo.has(fo);)fo++;var s=fo++;return co.set(l,s),bo.set(s,l),s},rv=function(l,s){fo=s+1,co.set(l,s),bo.set(s,l)},ov="style[".concat(pl,"][").concat(mg,'="').concat(_o,'"]'),sv=new RegExp("^".concat(pl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uv=function(l,s,c){for(var u,d=c.split(","),g=0,b=d.length;g<b;g++)(u=d[g])&&l.registerName(s,u)},cv=function(l,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(tf),d=[],g=0,b=u.length;g<b;g++){var j=u[g].trim();if(j){var v=j.match(sv);if(v){var p=0|parseInt(v[1],10),E=v[2];p!==0&&(rv(E,p),uv(l,E,v[3]),l.getTag().insertRules(p,d)),d.length=0}else d.push(j)}}},T0=function(l){for(var s=document.querySelectorAll(ov),c=0,u=s.length;c<u;c++){var d=s[c];d&&d.getAttribute(pl)!==hg&&(cv(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function fv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wg=function(l){var s=document.head,c=l||s,u=document.createElement("style"),d=function(j){var v=Array.from(j.querySelectorAll("style[".concat(pl,"]")));return v[v.length-1]}(c),g=d!==void 0?d.nextSibling:null;u.setAttribute(pl,hg),u.setAttribute(mg,_o);var b=fv();return b&&u.setAttribute("nonce",b),c.insertBefore(u,g),u},dv=function(){function l(s){this.element=wg(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,g=u.length;d<g;d++){var b=u[d];if(b.ownerNode===c)return b}throw ca(17)}(this.element),this.length=0}return l.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},l.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},l}(),hv=function(){function l(s){this.element=wg(s),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},l.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},l}(),mv=function(){function l(s){this.rules=[],this.length=0}return l.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},l.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},l.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},l}(),A0=po,gv={isServer:!po,useCSSOMInjection:!Qx},_g=function(){function l(s,c,u){s===void 0&&(s=bl),c===void 0&&(c={});var d=this;this.options=nt(nt({},gv),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&po&&A0&&(A0=!1,T0(this)),af(this,function(){return function(g){for(var b=g.getTag(),j=b.length,v="",p=function(R){var k=function(U){return bo.get(U)}(R);if(k===void 0)return"continue";var H=g.names.get(k),L=b.getGroup(R);if(H===void 0||!H.size||L.length===0)return"continue";var G="".concat(pl,".g").concat(R,'[id="').concat(k,'"]'),X="";H!==void 0&&H.forEach(function(U){U.length>0&&(X+="".concat(U,","))}),v+="".concat(L).concat(G,'{content:"').concat(X,'"}').concat(tf)},E=0;E<j;E++)p(E);return v}(d)})}return l.registerId=function(s){return Zr(s)},l.prototype.rehydrate=function(){!this.server&&po&&T0(this)},l.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new l(nt(nt({},this.options),s),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new mv(d):u?new dv(d):new hv(d)}(this.options),new iv(s)));var s},l.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},l.prototype.registerName=function(s,c){if(Zr(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},l.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(Zr(s),u)},l.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},l.prototype.clearRules=function(s){this.getTag().clearGroup(Zr(s)),this.clearNames(s)},l.prototype.clearTag=function(){this.tag=void 0},l}(),pv=/&/g,bv=/^\s*\/\/.*$/gm;function zg(l,s){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=zg(c.children,s)),c})}function xv(l){var s,c,u,d=bl,g=d.options,b=g===void 0?bl:g,j=d.plugins,v=j===void 0?zo:j,p=function(k,H,L){return L.startsWith(c)&&L.endsWith(c)&&L.replaceAll(c,"").length>0?".".concat(s):k},E=v.slice();E.push(function(k){k.type===yo&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(pv,c).replace(u,p))}),b.prefix&&E.push(Vx),E.push(Gx);var R=function(k,H,L,G){H===void 0&&(H=""),L===void 0&&(L=""),G===void 0&&(G="&"),s=G,c=H,u=new RegExp("\\".concat(c,"\\b"),"g");var X=k.replace(bv,""),U=Hx(L||H?"".concat(L," ").concat(H," { ").concat(X," }"):X);b.namespace&&(U=zg(U,b.namespace));var J=[];return go(U,Yx(E.concat(qx(function(Q){return J.push(Q)})))),J};return R.hash=v.length?v.reduce(function(k,H){return H.name||ca(15),hl(k,H.name)},pg).toString():"",R}var vv=new _g,$c=xv(),Eg=sa.createContext({shouldForwardProp:void 0,styleSheet:vv,stylis:$c});Eg.Consumer;sa.createContext(void 0);function R0(){return M.useContext(Eg)}var Tg=function(){function l(s,c){var u=this;this.inject=function(d,g){g===void 0&&(g=$c);var b=u.name+g.hash;d.hasNameForId(u.id,b)||d.insertRules(u.id,b,g(u.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,af(this,function(){throw ca(12,String(u.name))})}return l.prototype.getName=function(s){return s===void 0&&(s=$c),this.name+s.hash},l}(),yv=function(l){return l>="A"&&l<="Z"};function M0(l){for(var s="",c=0;c<l.length;c++){var u=l[c];if(c===1&&u==="-"&&l[0]==="-")return l;yv(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var Ag=function(l){return l==null||l===!1||l===""},Rg=function(l){var s,c,u=[];for(var d in l){var g=l[d];l.hasOwnProperty(d)&&!Ag(g)&&(Array.isArray(g)&&g.isCss||ua(g)?u.push("".concat(M0(d),":"),g,";"):Ti(g)?u.push.apply(u,Ei(Ei(["".concat(d," {")],Rg(g),!1),["}"],!1)):u.push("".concat(M0(d),": ").concat((s=d,(c=g)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in Xx||s.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function oa(l,s,c,u){if(Ag(l))return[];if(nf(l))return[".".concat(l.styledComponentId)];if(ua(l)){if(!ua(g=l)||g.prototype&&g.prototype.isReactComponent||!s)return[l];var d=l(s);return oa(d,s,c,u)}var g;return l instanceof Tg?c?(l.inject(c,u),[l.getName(u)]):[l]:Ti(l)?Rg(l):Array.isArray(l)?Array.prototype.concat.apply(zo,l.map(function(b){return oa(b,s,c,u)})):[l.toString()]}function Sv(l){for(var s=0;s<l.length;s+=1){var c=l[s];if(ua(c)&&!nf(c))return!1}return!0}var jv=bg(_o),wv=function(){function l(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Sv(s),this.componentId=c,this.baseHash=hl(jv,c),this.baseStyle=u,_g.registerId(c)}return l.prototype.generateAndInjectStyles=function(s,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var g=Zc(oa(this.rules,s,c,u)),b=Qc(hl(this.baseHash,g)>>>0);if(!c.hasNameForId(this.componentId,b)){var j=u(g,".".concat(b),void 0,this.componentId);c.insertRules(this.componentId,b,j)}d=ia(d,b),this.staticRulesId=b}else{for(var v=hl(this.baseHash,u.hash),p="",E=0;E<this.rules.length;E++){var R=this.rules[E];if(typeof R=="string")p+=R;else if(R){var k=Zc(oa(R,s,c,u));v=hl(v,k+E),p+=k}}if(p){var H=Qc(v>>>0);c.hasNameForId(this.componentId,H)||c.insertRules(this.componentId,H,u(p,".".concat(H),void 0,this.componentId)),d=ia(d,H)}}return d},l}(),xo=sa.createContext(void 0);xo.Consumer;function _v(l){var s=sa.useContext(xo),c=M.useMemo(function(){return function(u,d){if(!u)throw ca(14);if(ua(u)){var g=u(d);return g}if(Array.isArray(u)||typeof u!="object")throw ca(8);return d?nt(nt({},d),u):u}(l.theme,s)},[l.theme,s]);return l.children?sa.createElement(xo.Provider,{value:c},l.children):null}var Fu={};function zv(l,s,c){var u=nf(l),d=l,g=!Wu(l),b=s.attrs,j=b===void 0?zo:b,v=s.componentId,p=v===void 0?function(ae,Z){var le=typeof ae!="string"?"sc":j0(ae);Fu[le]=(Fu[le]||0)+1;var W="".concat(le,"-").concat(xg(_o+le+Fu[le]));return Z?"".concat(Z,"-").concat(W):W}(s.displayName,s.parentComponentId):v,E=s.displayName,R=E===void 0?function(ae){return Wu(ae)?"styled.".concat(ae):"Styled(".concat(Wx(ae),")")}(l):E,k=s.displayName&&s.componentId?"".concat(j0(s.displayName),"-").concat(s.componentId):s.componentId||p,H=u&&d.attrs?d.attrs.concat(j).filter(Boolean):j,L=s.shouldForwardProp;if(u&&d.shouldForwardProp){var G=d.shouldForwardProp;if(s.shouldForwardProp){var X=s.shouldForwardProp;L=function(ae,Z){return G(ae,Z)&&X(ae,Z)}}else L=G}var U=new wv(c,k,u?d.componentStyle:void 0);function J(ae,Z){return function(le,W,Ee){var we=le.attrs,at=le.componentStyle,it=le.defaultProps,Ye=le.foldedComponentIds,Zt=le.styledComponentId,Kt=le.target,qe=sa.useContext(xo),C=R0(),q=le.shouldForwardProp||C.shouldForwardProp,P=Zx(W,qe,it)||bl,ue=function(ce,ee,Ve){for(var pe,Pe=nt(nt({},ee),{className:void 0,theme:Ve}),Gn=0;Gn<ce.length;Gn+=1){var $t=ua(pe=ce[Gn])?pe(Pe):pe;for(var St in $t)Pe[St]=St==="className"?ia(Pe[St],$t[St]):St==="style"?nt(nt({},Pe[St]),$t[St]):$t[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(we,W,P),y=ue.as||Kt,N={};for(var Y in ue)ue[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ue.theme===P||(Y==="forwardedAs"?N.as=ue.forwardedAs:q&&!q(Y,y)||(N[Y]=ue[Y]));var V=function(ce,ee){var Ve=R0(),pe=ce.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(at,ue),F=ia(Ye,Zt);return V&&(F+=" "+V),ue.className&&(F+=" "+ue.className),N[Wu(y)&&!gg.has(y)?"class":"className"]=F,Ee&&(N.ref=Ee),M.createElement(y,N)}(Q,ae,Z)}J.displayName=R;var Q=sa.forwardRef(J);return Q.attrs=H,Q.componentStyle=U,Q.displayName=R,Q.shouldForwardProp=L,Q.foldedComponentIds=u?ia(d.foldedComponentIds,d.styledComponentId):"",Q.styledComponentId=k,Q.target=u?d.target:l,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=u?function(Z){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Ee=0,we=le;Ee<we.length;Ee++)Kc(Z,we[Ee],!0);return Z}({},d.defaultProps,ae):ae}}),af(Q,function(){return".".concat(Q.styledComponentId)}),g&&jg(Q,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function k0(l,s){for(var c=[l[0]],u=0,d=s.length;u<d;u+=1)c.push(s[u],l[u+1]);return c}var C0=function(l){return Object.assign(l,{isCss:!0})};function Mg(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(ua(l)||Ti(l))return C0(oa(k0(zo,Ei([l],s,!0))));var u=l;return s.length===0&&u.length===1&&typeof u[0]=="string"?oa(u):C0(oa(k0(u,s)))}function Jc(l,s,c){if(c===void 0&&(c=bl),!s)throw ca(1,s);var u=function(d){for(var g=[],b=1;b<arguments.length;b++)g[b-1]=arguments[b];return l(s,c,Mg.apply(void 0,Ei([d],g,!1)))};return u.attrs=function(d){return Jc(l,s,nt(nt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Jc(l,s,nt(nt({},c),d))},u}var kg=function(l){return Jc(zv,l)},m=kg;gg.forEach(function(l){m[l]=kg(l)});function Cg(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];var u=Zc(Mg.apply(void 0,Ei([l],s,!1))),d=xg(u);return new Tg(d,u)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D0="popstate";function Ev(l={}){function s(u,d){let{pathname:g,search:b,hash:j}=u.location;return Wc("",{pathname:g,search:b,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:Ai(d)}return Av(s,c,null,l)}function Me(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Nt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Tv(){return Math.random().toString(36).substring(2,10)}function B0(l,s){return{usr:l.state,key:l.key,idx:s}}function Wc(l,s,c=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?vl(s):s,state:c,key:s&&s.key||u||Tv()}}function Ai({pathname:l="/",search:s="",hash:c=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function vl(l){let s={};if(l){let c=l.indexOf("#");c>=0&&(s.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(s.search=l.substring(u),l=l.substring(0,u)),l&&(s.pathname=l)}return s}function Av(l,s,c,u={}){let{window:d=document.defaultView,v5Compat:g=!1}=u,b=d.history,j="POP",v=null,p=E();p==null&&(p=0,b.replaceState({...b.state,idx:p},""));function E(){return(b.state||{idx:null}).idx}function R(){j="POP";let X=E(),U=X==null?null:X-p;p=X,v&&v({action:j,location:G.location,delta:U})}function k(X,U){j="PUSH";let J=Wc(G.location,X,U);p=E()+1;let Q=B0(J,p),ae=G.createHref(J);try{b.pushState(Q,"",ae)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;d.location.assign(ae)}g&&v&&v({action:j,location:G.location,delta:1})}function H(X,U){j="REPLACE";let J=Wc(G.location,X,U);p=E();let Q=B0(J,p),ae=G.createHref(J);b.replaceState(Q,"",ae),g&&v&&v({action:j,location:G.location,delta:0})}function L(X){return Rv(X)}let G={get action(){return j},get location(){return l(d,b)},listen(X){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(D0,R),v=X,()=>{d.removeEventListener(D0,R),v=null}},createHref(X){return s(d,X)},createURL:L,encodeLocation(X){let U=L(X);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:k,replace:H,go(X){return b.go(X)}};return G}function Rv(l,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Me(c,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:Ai(l);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Dg(l,s,c="/"){return Mv(l,s,c,!1)}function Mv(l,s,c,u){let d=typeof s=="string"?vl(s):s,g=hn(d.pathname||"/",c);if(g==null)return null;let b=Bg(l);kv(b);let j=null;for(let v=0;j==null&&v<b.length;++v){let p=qv(g);j=Gv(b[v],p,u)}return j}function Bg(l,s=[],c=[],u=""){let d=(g,b,j)=>{let v={relativePath:j===void 0?g.path||"":j,caseSensitive:g.caseSensitive===!0,childrenIndex:b,route:g};v.relativePath.startsWith("/")&&(Me(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length));let p=dn([u,v.relativePath]),E=c.concat(v);g.children&&g.children.length>0&&(Me(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Bg(g.children,s,E,p)),!(g.path==null&&!g.index)&&s.push({path:p,score:Hv(p,g.index),routesMeta:E})};return l.forEach((g,b)=>{if(g.path===""||!g.path?.includes("?"))d(g,b);else for(let j of Og(g.path))d(g,b,j)}),s}function Og(l){let s=l.split("/");if(s.length===0)return[];let[c,...u]=s,d=c.endsWith("?"),g=c.replace(/\?$/,"");if(u.length===0)return d?[g,""]:[g];let b=Og(u.join("/")),j=[];return j.push(...b.map(v=>v===""?g:[g,v].join("/"))),d&&j.push(...b),j.map(v=>l.startsWith("/")&&v===""?"/":v)}function kv(l){l.sort((s,c)=>s.score!==c.score?c.score-s.score:Lv(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Cv=/^:[\w-]+$/,Dv=3,Bv=2,Ov=1,Nv=10,Uv=-2,O0=l=>l==="*";function Hv(l,s){let c=l.split("/"),u=c.length;return c.some(O0)&&(u+=Uv),s&&(u+=Bv),c.filter(d=>!O0(d)).reduce((d,g)=>d+(Cv.test(g)?Dv:g===""?Ov:Nv),u)}function Lv(l,s){return l.length===s.length&&l.slice(0,-1).every((u,d)=>u===s[d])?l[l.length-1]-s[s.length-1]:0}function Gv(l,s,c=!1){let{routesMeta:u}=l,d={},g="/",b=[];for(let j=0;j<u.length;++j){let v=u[j],p=j===u.length-1,E=g==="/"?s:s.slice(g.length)||"/",R=vo({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},E),k=v.route;if(!R&&p&&c&&!u[u.length-1].route.index&&(R=vo({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},E)),!R)return null;Object.assign(d,R.params),b.push({params:d,pathname:dn([g,R.pathname]),pathnameBase:Zv(dn([g,R.pathnameBase])),route:k}),R.pathnameBase!=="/"&&(g=dn([g,R.pathnameBase]))}return b}function vo(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=Yv(l.path,l.caseSensitive,l.end),d=s.match(c);if(!d)return null;let g=d[0],b=g.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:u.reduce((p,{paramName:E,isOptional:R},k)=>{if(E==="*"){let L=j[k]||"";b=g.slice(0,g.length-L.length).replace(/(.)\/+$/,"$1")}const H=j[k];return R&&!H?p[E]=void 0:p[E]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:g,pathnameBase:b,pattern:l}}function Yv(l,s=!1,c=!0){Nt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,j,v)=>(u.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(u.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),u]}function qv(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Nt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function hn(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}function Vv(l,s="/"){let{pathname:c,search:u="",hash:d=""}=typeof l=="string"?vl(l):l;return{pathname:c?c.startsWith("/")?c:Xv(c,s):s,search:Kv(u),hash:$v(d)}}function Xv(l,s){let c=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Pu(l,s,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qv(l){return l.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function lf(l){let s=Qv(l);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function rf(l,s,c,u=!1){let d;typeof l=="string"?d=vl(l):(d={...l},Me(!d.pathname||!d.pathname.includes("?"),Pu("?","pathname","search",d)),Me(!d.pathname||!d.pathname.includes("#"),Pu("#","pathname","hash",d)),Me(!d.search||!d.search.includes("#"),Pu("#","search","hash",d)));let g=l===""||d.pathname==="",b=g?"/":d.pathname,j;if(b==null)j=c;else{let R=s.length-1;if(!u&&b.startsWith("..")){let k=b.split("/");for(;k[0]==="..";)k.shift(),R-=1;d.pathname=k.join("/")}j=R>=0?s[R]:"/"}let v=Vv(d,j),p=b&&b!=="/"&&b.endsWith("/"),E=(g||b===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(p||E)&&(v.pathname+="/"),v}var dn=l=>l.join("/").replace(/\/\/+/g,"/"),Zv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Kv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,$v=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Jv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Ng=["POST","PUT","PATCH","DELETE"];new Set(Ng);var Wv=["GET",...Ng];new Set(Wv);var yl=M.createContext(null);yl.displayName="DataRouter";var Eo=M.createContext(null);Eo.displayName="DataRouterState";M.createContext(!1);var Ug=M.createContext({isTransitioning:!1});Ug.displayName="ViewTransition";var Fv=M.createContext(new Map);Fv.displayName="Fetchers";var Pv=M.createContext(null);Pv.displayName="Await";var Ut=M.createContext(null);Ut.displayName="Navigation";var Ri=M.createContext(null);Ri.displayName="Location";var Qt=M.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var of=M.createContext(null);of.displayName="RouteError";function Iv(l,{relative:s}={}){Me(Sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=M.useContext(Ut),{hash:d,pathname:g,search:b}=Mi(l,{relative:s}),j=g;return c!=="/"&&(j=g==="/"?c:dn([c,g])),u.createHref({pathname:j,search:b,hash:d})}function Sl(){return M.useContext(Ri)!=null}function mn(){return Me(Sl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Ri).location}var Hg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lg(l){M.useContext(Ut).static||M.useLayoutEffect(l)}function Gg(){let{isDataRoute:l}=M.useContext(Qt);return l?dy():ey()}function ey(){Me(Sl(),"useNavigate() may be used only in the context of a <Router> component.");let l=M.useContext(yl),{basename:s,navigator:c}=M.useContext(Ut),{matches:u}=M.useContext(Qt),{pathname:d}=mn(),g=JSON.stringify(lf(u)),b=M.useRef(!1);return Lg(()=>{b.current=!0}),M.useCallback((v,p={})=>{if(Nt(b.current,Hg),!b.current)return;if(typeof v=="number"){c.go(v);return}let E=rf(v,JSON.parse(g),d,p.relative==="path");l==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:dn([s,E.pathname])),(p.replace?c.replace:c.push)(E,p.state,p)},[s,c,g,d,l])}M.createContext(null);function Mi(l,{relative:s}={}){let{matches:c}=M.useContext(Qt),{pathname:u}=mn(),d=JSON.stringify(lf(c));return M.useMemo(()=>rf(l,JSON.parse(d),u,s==="path"),[l,d,u,s])}function ty(l,s){return Yg(l,s)}function Yg(l,s,c,u){Me(Sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=M.useContext(Ut),{matches:g}=M.useContext(Qt),b=g[g.length-1],j=b?b.params:{},v=b?b.pathname:"/",p=b?b.pathnameBase:"/",E=b&&b.route;{let U=E&&E.path||"";qg(v,!E||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let R=mn(),k;if(s){let U=typeof s=="string"?vl(s):s;Me(p==="/"||U.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${U.pathname}" was given in the \`location\` prop.`),k=U}else k=R;let H=k.pathname||"/",L=H;if(p!=="/"){let U=p.replace(/^\//,"").split("/");L="/"+H.replace(/^\//,"").split("/").slice(U.length).join("/")}let G=Dg(l,{pathname:L});Nt(E||G!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Nt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=ry(G&&G.map(U=>Object.assign({},U,{params:Object.assign({},j,U.params),pathname:dn([p,d.encodeLocation?d.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?p:dn([p,d.encodeLocation?d.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),g,c,u);return s&&X?M.createElement(Ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},X):X}function ny(){let l=fy(),s=Jv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},g={padding:"2px 4px",backgroundColor:u},b=null;return console.error("Error handled by React Router default ErrorBoundary:",l),b=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:g},"ErrorBoundary")," or"," ",M.createElement("code",{style:g},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},s),c?M.createElement("pre",{style:d},c):null,b)}var ay=M.createElement(ny,null),ly=class extends M.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){console.error("React Router caught the following error during render",l,s)}render(){return this.state.error!==void 0?M.createElement(Qt.Provider,{value:this.props.routeContext},M.createElement(of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function iy({routeContext:l,match:s,children:c}){let u=M.useContext(yl);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(Qt.Provider,{value:l},c)}function ry(l,s=[],c=null,u=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let d=l,g=c?.errors;if(g!=null){let v=d.findIndex(p=>p.route.id&&g?.[p.route.id]!==void 0);Me(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let b=!1,j=-1;if(c)for(let v=0;v<d.length;v++){let p=d[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(j=v),p.route.id){let{loaderData:E,errors:R}=c,k=p.route.loader&&!E.hasOwnProperty(p.route.id)&&(!R||R[p.route.id]===void 0);if(p.route.lazy||k){b=!0,j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}return d.reduceRight((v,p,E)=>{let R,k=!1,H=null,L=null;c&&(R=g&&p.route.id?g[p.route.id]:void 0,H=p.route.errorElement||ay,b&&(j<0&&E===0?(qg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,L=null):j===E&&(k=!0,L=p.route.hydrateFallbackElement||null)));let G=s.concat(d.slice(0,E+1)),X=()=>{let U;return R?U=H:k?U=L:p.route.Component?U=M.createElement(p.route.Component,null):p.route.element?U=p.route.element:U=v,M.createElement(iy,{match:p,routeContext:{outlet:v,matches:G,isDataRoute:c!=null},children:U})};return c&&(p.route.ErrorBoundary||p.route.errorElement||E===0)?M.createElement(ly,{location:c.location,revalidation:c.revalidation,component:H,error:R,children:X(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):X()},null)}function sf(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oy(l){let s=M.useContext(yl);return Me(s,sf(l)),s}function sy(l){let s=M.useContext(Eo);return Me(s,sf(l)),s}function uy(l){let s=M.useContext(Qt);return Me(s,sf(l)),s}function uf(l){let s=uy(l),c=s.matches[s.matches.length-1];return Me(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function cy(){return uf("useRouteId")}function fy(){let l=M.useContext(of),s=sy("useRouteError"),c=uf("useRouteError");return l!==void 0?l:s.errors?.[c]}function dy(){let{router:l}=oy("useNavigate"),s=uf("useNavigate"),c=M.useRef(!1);return Lg(()=>{c.current=!0}),M.useCallback(async(d,g={})=>{Nt(c.current,Hg),c.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:s,...g}))},[l,s])}var N0={};function qg(l,s,c){!s&&!N0[l]&&(N0[l]=!0,Nt(!1,c))}M.memo(hy);function hy({routes:l,future:s,state:c}){return Yg(l,void 0,c,s)}function my({to:l,replace:s,state:c,relative:u}){Me(Sl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=M.useContext(Ut);Nt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:g}=M.useContext(Qt),{pathname:b}=mn(),j=Gg(),v=rf(l,lf(g),b,u==="path"),p=JSON.stringify(v);return M.useEffect(()=>{j(JSON.parse(p),{replace:s,state:c,relative:u})},[j,p,u,s,c]),null}function dl(l){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gy({basename:l="/",children:s=null,location:c,navigationType:u="POP",navigator:d,static:g=!1}){Me(!Sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),j=M.useMemo(()=>({basename:b,navigator:d,static:g,future:{}}),[b,d,g]);typeof c=="string"&&(c=vl(c));let{pathname:v="/",search:p="",hash:E="",state:R=null,key:k="default"}=c,H=M.useMemo(()=>{let L=hn(v,b);return L==null?null:{location:{pathname:L,search:p,hash:E,state:R,key:k},navigationType:u}},[b,v,p,E,R,k,u]);return Nt(H!=null,`<Router basename="${b}"> is not able to match the URL "${v}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:M.createElement(Ut.Provider,{value:j},M.createElement(Ri.Provider,{children:s,value:H}))}function py({children:l,location:s}){return ty(Fc(l),s)}function Fc(l,s=[]){let c=[];return M.Children.forEach(l,(u,d)=>{if(!M.isValidElement(u))return;let g=[...s,d];if(u.type===M.Fragment){c.push.apply(c,Fc(u.props.children,g));return}Me(u.type===dl,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!u.props.index||!u.props.children,"An index route cannot have child routes.");let b={id:u.props.id||g.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=Fc(u.props.children,g)),c.push(b)}),c}var ho="get",mo="application/x-www-form-urlencoded";function To(l){return l!=null&&typeof l.tagName=="string"}function by(l){return To(l)&&l.tagName.toLowerCase()==="button"}function xy(l){return To(l)&&l.tagName.toLowerCase()==="form"}function vy(l){return To(l)&&l.tagName.toLowerCase()==="input"}function yy(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Sy(l,s){return l.button===0&&(!s||s==="_self")&&!yy(l)}var Kr=null;function jy(){if(Kr===null)try{new FormData(document.createElement("form"),0),Kr=!1}catch{Kr=!0}return Kr}var wy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Iu(l){return l!=null&&!wy.has(l)?(Nt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mo}"`),null):l}function _y(l,s){let c,u,d,g,b;if(xy(l)){let j=l.getAttribute("action");u=j?hn(j,s):null,c=l.getAttribute("method")||ho,d=Iu(l.getAttribute("enctype"))||mo,g=new FormData(l)}else if(by(l)||vy(l)&&(l.type==="submit"||l.type==="image")){let j=l.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||j.getAttribute("action");if(u=v?hn(v,s):null,c=l.getAttribute("formmethod")||j.getAttribute("method")||ho,d=Iu(l.getAttribute("formenctype"))||Iu(j.getAttribute("enctype"))||mo,g=new FormData(j,l),!jy()){let{name:p,type:E,value:R}=l;if(E==="image"){let k=p?`${p}.`:"";g.append(`${k}x`,"0"),g.append(`${k}y`,"0")}else p&&g.append(p,R)}}else{if(To(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ho,u=null,d=mo,b=l}return g&&d==="text/plain"&&(b=g,g=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:g,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cf(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function zy(l,s,c){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname=`_root.${c}`:s&&hn(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function Ey(l,s){if(l.id in s)return s[l.id];try{let c=await import(l.module);return s[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ty(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Ay(l,s,c){let u=await Promise.all(l.map(async d=>{let g=s.routes[d.route.id];if(g){let b=await Ey(g,c);return b.links?b.links():[]}return[]}));return Cy(u.flat(1).filter(Ty).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function U0(l,s,c,u,d,g){let b=(v,p)=>c[p]?v.route.id!==c[p].route.id:!0,j=(v,p)=>c[p].pathname!==v.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==v.params["*"];return g==="assets"?s.filter((v,p)=>b(v,p)||j(v,p)):g==="data"?s.filter((v,p)=>{let E=u.routes[v.route.id];if(!E||!E.hasLoader)return!1;if(b(v,p)||j(v,p))return!0;if(v.route.shouldRevalidate){let R=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Ry(l,s,{includeHydrateFallback:c}={}){return My(l.map(u=>{let d=s.routes[u.route.id];if(!d)return[];let g=[d.module];return d.clientActionModule&&(g=g.concat(d.clientActionModule)),d.clientLoaderModule&&(g=g.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(g=g.concat(d.hydrateFallbackModule)),d.imports&&(g=g.concat(d.imports)),g}).flat(1))}function My(l){return[...new Set(l)]}function ky(l){let s={},c=Object.keys(l).sort();for(let u of c)s[u]=l[u];return s}function Cy(l,s){let c=new Set;return new Set(s),l.reduce((u,d)=>{let g=JSON.stringify(ky(d));return c.has(g)||(c.add(g),u.push({key:g,link:d})),u},[])}function Vg(){let l=M.useContext(yl);return cf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Dy(){let l=M.useContext(Eo);return cf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var ff=M.createContext(void 0);ff.displayName="FrameworkContext";function Xg(){let l=M.useContext(ff);return cf(l,"You must render this element inside a <HydratedRouter> element"),l}function By(l,s){let c=M.useContext(ff),[u,d]=M.useState(!1),[g,b]=M.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:p,onMouseLeave:E,onTouchStart:R}=s,k=M.useRef(null);M.useEffect(()=>{if(l==="render"&&b(!0),l==="viewport"){let G=U=>{U.forEach(J=>{b(J.isIntersecting)})},X=new IntersectionObserver(G,{threshold:.5});return k.current&&X.observe(k.current),()=>{X.disconnect()}}},[l]),M.useEffect(()=>{if(u){let G=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(G)}}},[u]);let H=()=>{d(!0)},L=()=>{d(!1),b(!1)};return c?l!=="intent"?[g,k,{}]:[g,k,{onFocus:Si(j,H),onBlur:Si(v,L),onMouseEnter:Si(p,H),onMouseLeave:Si(E,L),onTouchStart:Si(R,H)}]:[!1,k,{}]}function Si(l,s){return c=>{l&&l(c),c.defaultPrevented||s(c)}}function Oy({page:l,...s}){let{router:c}=Vg(),u=M.useMemo(()=>Dg(c.routes,l,c.basename),[c.routes,l,c.basename]);return u?M.createElement(Uy,{page:l,matches:u,...s}):null}function Ny(l){let{manifest:s,routeModules:c}=Xg(),[u,d]=M.useState([]);return M.useEffect(()=>{let g=!1;return Ay(l,s,c).then(b=>{g||d(b)}),()=>{g=!0}},[l,s,c]),u}function Uy({page:l,matches:s,...c}){let u=mn(),{manifest:d,routeModules:g}=Xg(),{basename:b}=Vg(),{loaderData:j,matches:v}=Dy(),p=M.useMemo(()=>U0(l,s,v,d,u,"data"),[l,s,v,d,u]),E=M.useMemo(()=>U0(l,s,v,d,u,"assets"),[l,s,v,d,u]),R=M.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let L=new Set,G=!1;if(s.forEach(U=>{let J=d.routes[U.route.id];!J||!J.hasLoader||(!p.some(Q=>Q.route.id===U.route.id)&&U.route.id in j&&g[U.route.id]?.shouldRevalidate||J.hasClientLoader?G=!0:L.add(U.route.id))}),L.size===0)return[];let X=zy(l,b,"data");return G&&L.size>0&&X.searchParams.set("_routes",s.filter(U=>L.has(U.route.id)).map(U=>U.route.id).join(",")),[X.pathname+X.search]},[b,j,u,d,p,s,l,g]),k=M.useMemo(()=>Ry(E,d),[E,d]),H=Ny(E);return M.createElement(M.Fragment,null,R.map(L=>M.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...c})),k.map(L=>M.createElement("link",{key:L,rel:"modulepreload",href:L,...c})),H.map(({key:L,link:G})=>M.createElement("link",{key:L,...G})))}function Hy(...l){return s=>{l.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var Qg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qg&&(window.__reactRouterVersion="7.7.1")}catch{}function Ly({basename:l,children:s,window:c}){let u=M.useRef();u.current==null&&(u.current=Ev({window:c,v5Compat:!0}));let d=u.current,[g,b]=M.useState({action:d.action,location:d.location}),j=M.useCallback(v=>{M.startTransition(()=>b(v))},[b]);return M.useLayoutEffect(()=>d.listen(j),[d,j]),M.createElement(gy,{basename:l,children:s,location:g.location,navigationType:g.action,navigator:d})}var Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,df=M.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:d,reloadDocument:g,replace:b,state:j,target:v,to:p,preventScrollReset:E,viewTransition:R,...k},H){let{basename:L}=M.useContext(Ut),G=typeof p=="string"&&Zg.test(p),X,U=!1;if(typeof p=="string"&&G&&(X=p,Qg))try{let we=new URL(window.location.href),at=p.startsWith("//")?new URL(we.protocol+p):new URL(p),it=hn(at.pathname,L);at.origin===we.origin&&it!=null?p=it+at.search+at.hash:U=!0}catch{Nt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=Iv(p,{relative:d}),[Q,ae,Z]=By(u,k),le=Vy(p,{replace:b,state:j,target:v,preventScrollReset:E,relative:d,viewTransition:R});function W(we){s&&s(we),we.defaultPrevented||le(we)}let Ee=M.createElement("a",{...k,...Z,href:X||J,onClick:U||g?s:W,ref:Hy(H,ae),target:v,"data-discover":!G&&c==="render"?"true":void 0});return Q&&!G?M.createElement(M.Fragment,null,Ee,M.createElement(Oy,{page:J})):Ee});df.displayName="Link";var Gy=M.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:d=!1,style:g,to:b,viewTransition:j,children:v,...p},E){let R=Mi(b,{relative:p.relative}),k=mn(),H=M.useContext(Eo),{navigator:L,basename:G}=M.useContext(Ut),X=H!=null&&$y(R)&&j===!0,U=L.encodeLocation?L.encodeLocation(R).pathname:R.pathname,J=k.pathname,Q=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;c||(J=J.toLowerCase(),Q=Q?Q.toLowerCase():null,U=U.toLowerCase()),Q&&G&&(Q=hn(Q,G)||Q);const ae=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Z=J===U||!d&&J.startsWith(U)&&J.charAt(ae)==="/",le=Q!=null&&(Q===U||!d&&Q.startsWith(U)&&Q.charAt(U.length)==="/"),W={isActive:Z,isPending:le,isTransitioning:X},Ee=Z?s:void 0,we;typeof u=="function"?we=u(W):we=[u,Z?"active":null,le?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let at=typeof g=="function"?g(W):g;return M.createElement(df,{...p,"aria-current":Ee,className:we,ref:E,style:at,to:b,viewTransition:j},typeof v=="function"?v(W):v)});Gy.displayName="NavLink";var Yy=M.forwardRef(({discover:l="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:d,state:g,method:b=ho,action:j,onSubmit:v,relative:p,preventScrollReset:E,viewTransition:R,...k},H)=>{let L=Zy(),G=Ky(j,{relative:p}),X=b.toLowerCase()==="get"?"get":"post",U=typeof j=="string"&&Zg.test(j),J=Q=>{if(v&&v(Q),Q.defaultPrevented)return;Q.preventDefault();let ae=Q.nativeEvent.submitter,Z=ae?.getAttribute("formmethod")||b;L(ae||Q.currentTarget,{fetcherKey:s,method:Z,navigate:c,replace:d,state:g,relative:p,preventScrollReset:E,viewTransition:R})};return M.createElement("form",{ref:H,method:X,action:G,onSubmit:u?v:J,...k,"data-discover":!U&&l==="render"?"true":void 0})});Yy.displayName="Form";function qy(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kg(l){let s=M.useContext(yl);return Me(s,qy(l)),s}function Vy(l,{target:s,replace:c,state:u,preventScrollReset:d,relative:g,viewTransition:b}={}){let j=Gg(),v=mn(),p=Mi(l,{relative:g});return M.useCallback(E=>{if(Sy(E,s)){E.preventDefault();let R=c!==void 0?c:Ai(v)===Ai(p);j(l,{replace:R,state:u,preventScrollReset:d,relative:g,viewTransition:b})}},[v,j,p,c,u,s,l,d,g,b])}var Xy=0,Qy=()=>`__${String(++Xy)}__`;function Zy(){let{router:l}=Kg("useSubmit"),{basename:s}=M.useContext(Ut),c=cy();return M.useCallback(async(u,d={})=>{let{action:g,method:b,encType:j,formData:v,body:p}=_y(u,s);if(d.navigate===!1){let E=d.fetcherKey||Qy();await l.fetch(E,c,d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||b,formEncType:d.encType||j,flushSync:d.flushSync})}else await l.navigate(d.action||g,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||b,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,s,c])}function Ky(l,{relative:s}={}){let{basename:c}=M.useContext(Ut),u=M.useContext(Qt);Me(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),g={...Mi(l||".",{relative:s})},b=mn();if(l==null){g.search=b.search;let j=new URLSearchParams(g.search),v=j.getAll("index");if(v.some(E=>E==="")){j.delete("index"),v.filter(R=>R).forEach(R=>j.append("index",R));let E=j.toString();g.search=E?`?${E}`:""}}return(!l||l===".")&&d.route.index&&(g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(g.pathname=g.pathname==="/"?c:dn([c,g.pathname])),Ai(g)}function $y(l,{relative:s}={}){let c=M.useContext(Ug);Me(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Kg("useViewTransitionState"),d=Mi(l,{relative:s});if(!c.isTransitioning)return!1;let g=hn(c.currentLocation.pathname,u)||c.currentLocation.pathname,b=hn(c.nextLocation.pathname,u)||c.nextLocation.pathname;return vo(d.pathname,b)!=null||vo(d.pathname,g)!=null}const Jy="/assets/logo-Hzr1jdtX.png",Wy=m.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,Fy=m.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,Py=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Iy=m.img`
  height: 40px;
  width: auto;
`,e2=m.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;

  @media (max-width: 640px) {
    display: none;
  }
`,t2=m.div`
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
`,ji=m(df)`
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
`,n2=m.button`
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
`;function a2(){const l=mn(),[s,c]=M.useState(!1);return o.jsx(Wy,{children:o.jsxs(Fy,{children:[o.jsx(ji,{to:"/",onClick:()=>c(!1),children:o.jsxs(Py,{children:[o.jsx(Iy,{src:Jy,alt:"SCKW Logo"}),o.jsx(e2,{children:"SC Konstanz-Wollmatingen e. V."})]})}),o.jsxs(n2,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>c(u=>!u),children:["Menü",o.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),o.jsxs(t2,{id:"mobile-nav",$open:s,children:[o.jsx(ji,{to:"/sponsoring",$active:l.pathname==="/sponsoring",onClick:()=>c(!1),children:"🤝 Sponsoring"}),o.jsx(ji,{to:"/sponsoring-v2",$active:l.pathname==="/sponsoring-v2",onClick:()=>c(!1),children:"🚀 Sponsoring V2"}),o.jsx(ji,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>c(!1),children:"💼 Jobbörse"}),o.jsx(ji,{to:"/renovierung",$active:l.pathname==="/renovierung",onClick:()=>c(!1),children:"🏗️ Renovierung"})]})]})})}const l2=m.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,i2=m.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function hf(){return o.jsxs(l2,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",o.jsx(i2,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})}const ec=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"Social Media Post/Monat",highlight:!1,icon:"📱"},{text:"Stadionansage bei jedem Heimspiel",highlight:!1,icon:"📢"},{text:"1 Bande + 4x Plakat",highlight:!0,icon:"🖼️"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","Social Media Post/Monat","Stadionansage bei jedem Heimspiel","1 Bande (5x2 m) am Gelände","4x Plakat (A1) am Gelände"]},{title:"🥈 Co-Sponsor",price:"9.500 €/Jahr",status:"🟨 1 von 2 verfügbar",maxSponsors:2,sponsors:[],keyBenefits:[{text:"Trikotärmel",highlight:!0,icon:"👕"},{text:"1 Bande",highlight:!1,icon:"🖼️"},{text:"2x Social Media pro Spiel",highlight:!0,icon:"📱"},{text:"Social Media 1x pro Spiel",highlight:!1,icon:"📱"}],benefits:["Trikotärmel 1. Mannschaft","1 Bande (5x2 m) am Gelände","2x Social Media pro Spiel (Instagram)","Social Media 1x pro Spiel (Facebook)"]},{title:"🥈 SILBER",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Bande",highlight:!0,icon:"🖼️"},{text:"Instagram-Erwähnung",highlight:!1,icon:"📱"},{text:"Werbeplane am Gelände",highlight:!1,icon:"🏟️"},{text:"Vereinsplakate + Eventsichtbarkeit",highlight:!0,icon:"🎉"}],benefits:["1 Bande (5x2 m) am Gelände","Instagram-Erwähnung","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟩 Verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"3x1m Werbebande",highlight:!0,icon:"🏟️"},{text:"Sichtbarkeit bei jedem Heimspiel",highlight:!1,icon:"⚽"},{text:"Link auf Homepage optional",highlight:!1,icon:"🌐"}],benefits:["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Link auf Homepage optional"]},{title:"⚽ Ballspende",price:"150 €/pro Spiel",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[],keyBenefits:[{text:"Social Media Post am Spieltag",highlight:!0,icon:"📱"},{text:"Namensnennung vor dem Spiel",highlight:!1,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Namensnennung vor dem Spiel","Namensnennung in der Halbzeitpause"]},{title:"⚽ Ballspende 5er Pack",price:"500 €/5 Spiele",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[],keyBenefits:[{text:"Ballspende für 5 Spiele",highlight:!0,icon:"⚽"},{text:"Namensnennung vor jedem Spiel",highlight:!0,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Ballspende für 5 Spiele","Namensnennung vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","Günstigerer Preis pro Spiel gegenüber Einzelspende"]}],r2=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,o2=m.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${l=>l.isVergeben?"0.8":"1"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`,s2=m.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,u2=m.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,c2=m.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,f2=m.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,d2=m.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,h2=m.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,m2=m.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  line-height: 1.5;
  color: ${l=>l.isHighlight?"#e10073":"#222"};
  font-weight: ${l=>l.isHighlight?"600":"400"};
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`,g2=m.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,p2=m.span`
  flex: 1;
`,b2=m.a`
  display: inline-block;
  background: ${l=>l.isVergeben?"#ccc":"#e10073"};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.875rem 1.75rem;
  border-radius: 25px;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  pointer-events: ${l=>l.isVergeben?"none":"auto"};
  margin-top: auto;
  border: ${l=>l.isVergeben?"2px solid #ccc":"2px solid #e10073"};

  &:hover {
    background: ${l=>l.isVergeben?"#ccc":"#b8005a"};
    border-color: ${l=>l.isVergeben?"#ccc":"#b8005a"};
    transform: ${l=>l.isVergeben?"none":"translateY(-1px)"};
    box-shadow: ${l=>l.isVergeben?"none":"0 4px 12px rgba(225, 0, 115, 0.3)"};
  }

  &:focus {
    outline: 3px solid
      ${l=>l.isVergeben?"#ccc":"rgba(225, 0, 115, 0.5)"};
    outline-offset: 2px;
  }
`,x2=m.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,v2="sponsoring@sckw.de";function tc({packages:l}){const s=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",c=b=>{const j=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},u=b=>{const j=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),p=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${v2}?subject=${v}&body=${p}`},d=b=>{const j=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},g=l.filter(b=>!b.title.includes("Platz-Renovierung"));return o.jsx(r2,{children:g.map((b,j)=>{const{isFullyBooked:v}=d(b),p=s(b.status),E=p==="vergeben"||v,R=v?"vergeben":p,k=b.keyBenefits||[];return o.jsxs(o2,{isVergeben:E,children:[o.jsxs(s2,{children:[o.jsx(u2,{children:c(b.title)}),o.jsx(c2,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!E&&o.jsx(f2,{children:b.price}),o.jsx(d2,{status:R,children:R==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),E?o.jsx(x2,{children:"✅ Alle Plätze vergeben"}):o.jsx(h2,{children:k.map((H,L)=>o.jsxs(m2,{isHighlight:H.highlight,children:[o.jsx(g2,{children:H.icon}),o.jsx(p2,{children:H.text})]},L))}),o.jsx(b2,{href:E?void 0:u(b.title),isVergeben:E,children:E?"Vergeben":"Jetzt anfragen"})]},j)})})}const y2=m.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,S2=m.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,j2=m.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${l=>l.isOpen?l.theme.colors.bg:l.theme.colors.bgMuted};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 600;
  color: ${l=>l.theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  span {
    text-align: left;
  }

  &:hover {
    background: ${l=>l.theme.colors.bg};
  }

  &:focus {
    outline: 2px solid #e10073;
    outline-offset: -2px;
  }
`,w2=m.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,_2=m.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,z2=m.div`
  padding: 1.5rem;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  color: ${l=>l.theme.colors.text};
  text-align: left;

  b {
    color: ${l=>l.theme.colors.primary};
    font-weight: 600;
  }

  br {
    margin-bottom: 0.5rem;
  }
`,E2=m.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,T2=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:o.jsx(o.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function A2(){const[l,s]=M.useState([]),c=d=>{s(g=>g.includes(d)?g.filter(b=>b!==d):[...g,d])},u=(d,g)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c(g))};return o.jsx(y2,{children:T2.map(d=>{const g=l.includes(d.id);return o.jsxs(S2,{children:[o.jsxs(j2,{isOpen:g,onClick:()=>c(d.id),onKeyDown:b=>u(b,d.id),"aria-expanded":g,"aria-controls":`accordion-content-${d.id}`,children:[o.jsxs("span",{children:[o.jsx(E2,{children:d.icon}),d.title]}),o.jsx(w2,{isOpen:g,children:"▼"})]}),o.jsx(_2,{isOpen:g,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:o.jsx(z2,{children:d.content})})]},d.id)})})}const $g="/assets/cheerleading_0-DQQGXi0R.jpg",Jg="/assets/cheerleading_1-NkLBARmH.jpg",Wg="/assets/cheerleading_2-CrezcZYL.jpg",Fg="/assets/cheerleading_3-GN5rPHNN.jpg",Pg="/assets/1-ClVWb4ei.png",Ig="/assets/10-Bwp2eIye.png",ep="/assets/11-W061sOUI.png",tp="/assets/12-TjJyzl8L.png",np="/assets/13-ChUUCdQQ.png",ap="/assets/14-BVhdRr98.png",lp="/assets/2-CcfgIQYe.png",ip="/assets/3-DYiPkVd7.png",rp="/assets/4-1upoqVoS.png",op="/assets/5-D0tadXAC.png",sp="/assets/6-NJ4ELm_j.png",up="/assets/7-BXo4_Bcj.png",cp="/assets/8-BbOqEnj_.png",fp="/assets/9-CIK0gi9o.png",dp="/assets/herren_0-BVVgyt1l.jpg",hp="/assets/herren_1-B8ywOnNy.jpg",mp="/assets/herren_10-DPVQsg9B.jpg",gp="/assets/herren_11-wfWG62H3.jpg",pp="/assets/herren_12-DEJSN2zG.jpg",bp="/assets/herren_13-F52vdukE.jpg",xp="/assets/herren_14-Cq9hoKfG.jpg",vp="/assets/herren_15-aYIFGauG.jpg",yp="/assets/herren_16-NYI2EaEN.jpg",Sp="/assets/herren_17-B_52ysA2.jpg",jp="/assets/herren_18-DbwjVNKJ.jpg",wp="/assets/herren_19-BduD_J85.png",_p="/assets/herren_2--jFuixBF.jpg",zp="/assets/herren_3-BPz1zlkG.jpg",Ep="/assets/herren_4-BZRrQaFr.jpg",Tp="/assets/herren_5-D-QrfY2P.jpg",Ap="/assets/herren_6-DWQvi6Am.jpg",Rp="/assets/herren_7-BXO6B8Bt.jpg",Mp="/assets/herren_8-Cg4rdr7T.jpg",kp="/assets/herren_9-DoLnTdRG.jpg",Cp="/assets/IMG-team-BGcF1agj.png",Dp="/assets/IMG_5349-CpvIVKhM.jpg",Bp="/assets/IMG_5369-DQ4CSwdg.jpg",Op="/assets/IMG_5421-BBzniIEN.jpg",Np="/assets/IMG_5442-D2PgutWB.jpg",Up="/assets/IMG_5952-B9VW6Qie.jpg",Hp="/assets/Unbenann324t-IPGo6eoQ.png",Lp="/assets/image0-DDrU5aZn.jpeg",Gp="/assets/image11-BNM8hTkT.jpeg",Yp="/assets/image8-BUnedp9U.jpeg",R2="/assets/grafhardenberg-Di5cVggE.png",M2="/assets/horta-DydWIGV7.png",k2="/assets/logans-BgpKwKYA.png",C2="/assets/ricobet-DsVC-eZt.png",D2="/assets/rothaus-DqkKD9yW.png",B2="/assets/tasty-B2pSa1rE.png",O2="/assets/cabin-window-B83r_CDB.jpg",N2="/assets/outside-9-xz17qL.jpg",U2="/assets/shower-B75caJ-F.jpg",H2="/assets/sitting-area-D7khB3Gw.jpg",L2="/assets/toilet-BpMHYbhh.jpg",G2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":$g,"../assets/gallery/cheerleading/cheerleading_1.jpg":Jg,"../assets/gallery/cheerleading/cheerleading_2.jpg":Wg,"../assets/gallery/cheerleading/cheerleading_3.jpg":Fg,"../assets/gallery/damen/1.png":Pg,"../assets/gallery/damen/10.png":Ig,"../assets/gallery/damen/11.png":ep,"../assets/gallery/damen/12.png":tp,"../assets/gallery/damen/13.png":np,"../assets/gallery/damen/14.png":ap,"../assets/gallery/damen/2.png":lp,"../assets/gallery/damen/3.png":ip,"../assets/gallery/damen/4.png":rp,"../assets/gallery/damen/5.png":op,"../assets/gallery/damen/6.png":sp,"../assets/gallery/damen/7.png":up,"../assets/gallery/damen/8.png":cp,"../assets/gallery/damen/9.png":fp,"../assets/gallery/herren/herren_0.jpg":dp,"../assets/gallery/herren/herren_1.jpg":hp,"../assets/gallery/herren/herren_10.jpg":mp,"../assets/gallery/herren/herren_11.jpg":gp,"../assets/gallery/herren/herren_12.jpg":pp,"../assets/gallery/herren/herren_13.jpg":bp,"../assets/gallery/herren/herren_14.jpg":xp,"../assets/gallery/herren/herren_15.jpg":vp,"../assets/gallery/herren/herren_16.jpg":yp,"../assets/gallery/herren/herren_17.jpg":Sp,"../assets/gallery/herren/herren_18.jpg":jp,"../assets/gallery/herren/herren_19.png":wp,"../assets/gallery/herren/herren_2.jpg":_p,"../assets/gallery/herren/herren_3.jpg":zp,"../assets/gallery/herren/herren_4.jpg":Ep,"../assets/gallery/herren/herren_5.jpg":Tp,"../assets/gallery/herren/herren_6.jpg":Ap,"../assets/gallery/herren/herren_7.jpg":Rp,"../assets/gallery/herren/herren_8.jpg":Mp,"../assets/gallery/herren/herren_9.jpg":kp,"../assets/gallery/jfv/IMG-team.png":Cp,"../assets/gallery/jfv/IMG_5349.jpg":Dp,"../assets/gallery/jfv/IMG_5369.jpg":Bp,"../assets/gallery/jfv/IMG_5421.jpg":Op,"../assets/gallery/jfv/IMG_5442.jpg":Np,"../assets/gallery/jfv/IMG_5952.jpg":Up,"../assets/gallery/jfv/Unbenann324t.png":Hp,"../assets/gallery/jfv/image0.jpeg":Lp,"../assets/gallery/jfv/image11.jpeg":Gp,"../assets/gallery/jfv/image8.jpeg":Yp}),Y2=Object.assign({"../assets/sponsors/grafhardenberg.png":R2,"../assets/sponsors/horta.png":M2,"../assets/sponsors/logans.png":k2,"../assets/sponsors/ricobet.png":C2,"../assets/sponsors/rothaus.png":D2,"../assets/sponsors/tasty.png":B2}),q2=Object.assign({"../assets/renovation/cabin-window.jpg":O2,"../assets/renovation/outside.jpg":N2,"../assets/renovation/shower.jpg":U2,"../assets/renovation/sitting-area.jpg":H2,"../assets/renovation/toilet.jpg":L2}),qp=l=>l.split("/").pop()?.toLowerCase()||"",V2=l=>{const s=l.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function X2(l){const s=[...l];for(let c=s.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1));[s[c],s[u]]=[s[u],s[c]]}return s}const Vp=()=>{const l={};Object.entries(G2).forEach(([u,d])=>{const g=V2(u);l[g]||(l[g]=[]),l[g].push(d)}),Object.keys(l).forEach(u=>{l[u]=X2(l[u])});const s={},c=["jfv","cheerleading","damen","herren"];return c.forEach(u=>{l[u]&&(s[u]=l[u])}),Object.keys(l).forEach(u=>{c.includes(u.toLowerCase())||(s[u]=l[u])}),s},Q2=()=>{const l={};return Object.entries(Y2).forEach(([s,c])=>{const u=qp(s);l[u]=c}),l},Xp=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(q2).forEach(([s,c])=>{const u=qp(s);u.includes("sitting")?l.kabinen.push({src:c,alt:"Sitzbereich in den Kabinen"}):u.includes("outside")||u.includes("cabin-window")?u.includes("outside")?l.fassade.push({src:c,alt:"Außenfassade des Fürstenberg"}):u.includes("cabin-window")&&l.fassade.push({src:c,alt:"Fenster in den Kabinen"}):(u.includes("toilet")||u.includes("shower")||u.includes("wash"))&&(u.includes("toilet")?l.waschkueche.push({src:c,alt:"Toilette"}):u.includes("shower")?l.waschkueche.push({src:c,alt:"Dusche"}):l.waschkueche.push({src:c,alt:"Waschküche"}))}),l},Qp=l=>{const c=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":$g,"../assets/gallery/cheerleading/cheerleading_1.jpg":Jg,"../assets/gallery/cheerleading/cheerleading_2.jpg":Wg,"../assets/gallery/cheerleading/cheerleading_3.jpg":Fg,"../assets/gallery/damen/1.png":Pg,"../assets/gallery/damen/10.png":Ig,"../assets/gallery/damen/11.png":ep,"../assets/gallery/damen/12.png":tp,"../assets/gallery/damen/13.png":np,"../assets/gallery/damen/14.png":ap,"../assets/gallery/damen/2.png":lp,"../assets/gallery/damen/3.png":ip,"../assets/gallery/damen/4.png":rp,"../assets/gallery/damen/5.png":op,"../assets/gallery/damen/6.png":sp,"../assets/gallery/damen/7.png":up,"../assets/gallery/damen/8.png":cp,"../assets/gallery/damen/9.png":fp,"../assets/gallery/herren/herren_0.jpg":dp,"../assets/gallery/herren/herren_1.jpg":hp,"../assets/gallery/herren/herren_10.jpg":mp,"../assets/gallery/herren/herren_11.jpg":gp,"../assets/gallery/herren/herren_12.jpg":pp,"../assets/gallery/herren/herren_13.jpg":bp,"../assets/gallery/herren/herren_14.jpg":xp,"../assets/gallery/herren/herren_15.jpg":vp,"../assets/gallery/herren/herren_16.jpg":yp,"../assets/gallery/herren/herren_17.jpg":Sp,"../assets/gallery/herren/herren_18.jpg":jp,"../assets/gallery/herren/herren_19.png":wp,"../assets/gallery/herren/herren_2.jpg":_p,"../assets/gallery/herren/herren_3.jpg":zp,"../assets/gallery/herren/herren_4.jpg":Ep,"../assets/gallery/herren/herren_5.jpg":Tp,"../assets/gallery/herren/herren_6.jpg":Ap,"../assets/gallery/herren/herren_7.jpg":Rp,"../assets/gallery/herren/herren_8.jpg":Mp,"../assets/gallery/herren/herren_9.jpg":kp,"../assets/gallery/jfv/IMG-team.png":Cp,"../assets/gallery/jfv/IMG_5349.jpg":Dp,"../assets/gallery/jfv/IMG_5369.jpg":Bp,"../assets/gallery/jfv/IMG_5421.jpg":Op,"../assets/gallery/jfv/IMG_5442.jpg":Np,"../assets/gallery/jfv/IMG_5952.jpg":Up,"../assets/gallery/jfv/Unbenann324t.png":Hp,"../assets/gallery/jfv/image0.jpeg":Lp,"../assets/gallery/jfv/image11.jpeg":Gp,"../assets/gallery/jfv/image8.jpeg":Yp})).find(([u])=>u.includes(l));return c?c[1]:""},Ao=(l,s)=>Qp(`${l}/${l}_${s}.jpg`);Vp(),Q2(),Xp();function Z2(){const l=Vp(),[s,c]=M.useState(null);return M.useEffect(()=>{if(!s)return;const u=d=>{d.key==="Escape"&&c(null)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[s]),o.jsxs("section",{children:[o.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([u,d])=>o.jsxs("div",{style:{marginBottom:"2.5rem"},children:[o.jsx(K2,{children:u.toUpperCase()}),o.jsx($2,{children:d.map((g,b)=>o.jsx(J2,{src:g,alt:`Bild ${b+1} aus ${u}`,onClick:()=>c({folder:u,idx:b}),style:{cursor:"pointer"}},b))}),s&&s.folder===u&&o.jsx(W2,{onClick:()=>c(null),children:o.jsxs(F2,{onClick:g=>g.stopPropagation(),children:[o.jsx(P2,{src:d[s.idx],alt:`Großansicht aus ${u}`}),o.jsx(I2,{onClick:()=>c(null),title:"Schließen",children:"×"})]})})]},u))]})}const K2=m.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,$2=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,J2=m.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,W2=m.div`
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
`,F2=m.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,P2=m.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,I2=m.button`
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
`,e5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,t5=m.div`
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
`,n5=m.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,a5=m.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,l5=m.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,i5=m.div`
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
`,r5=m.a`
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
`;function nc({icon:l,title:s,description:c,packages:u,buttonHref:d,buttonText:g}){return o.jsxs(t5,{children:[o.jsx(n5,{children:l}),o.jsx(a5,{children:s}),o.jsx(l5,{children:c}),o.jsx(i5,{children:u.map((b,j)=>o.jsxs("div",{children:[b,j<u.length-1&&o.jsx("br",{})]},j))}),o.jsx(r5,{href:d,children:g})]})}const o5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;
`,s5=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  text-align: center;
`,u5=m.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,c5=m.p`
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
`;function f5({headline:l,description:s,contactInfos:c}){return o.jsxs(d5,{id:"kontakt",children:[o.jsx(h5,{children:l}),o.jsx(m5,{children:s}),o.jsx(o5,{children:c.map((u,d)=>o.jsxs(s5,{children:[o.jsxs(u5,{children:[u.icon," ",u.title]}),o.jsx(c5,{$isEmail:u.isEmail,children:u.isEmail?o.jsx("a",{href:`mailto:${u.content}`,children:u.content}):u.content})]},d))})]})}const d5=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,h5=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,m5=m.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,g5=m.section`
  background: url("${Ao("herren",4)}") center/cover;
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
`,p5=m.h1`
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
`,b5=m.h2`
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
`,H0=m.a`
  display: inline-block;
  background: ${l=>l.secondary?"rgba(255, 255, 255, 0.15)":"#e10073"};
  color: #fff;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  border: ${l=>l.secondary?"2px solid rgba(255, 255, 255, 0.5)":"none"};
  backdrop-filter: ${l=>l.secondary?"blur(15px)":"none"};
  letter-spacing: 0.02em;
  text-transform: uppercase;

  &:hover {
    background: ${l=>l.secondary?"rgba(255, 255, 255, 0.25)":"#b8005a"};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`,x5=m.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,v5=m.main`
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
`,wi=m.h2`
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
`,y5=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,S5=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,j5=m.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,w5=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,_5=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,z5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,L0=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,G0=m.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,Y0=m.ul`
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
`,E5=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,T5=m.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,A5=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,R5=m.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,M5=m.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,k5=m.ul`
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
`,ac=m.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,lc=m.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,ic=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,rc=m.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,oc=m.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,sc=m.div`
  font-size: 0.98rem;
  color: #666;
`,C5=m.div`
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
`,D5=m.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,B5=m.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,O5=m.a`
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
`,N5=m.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,U5=m.div`
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
`,H5=m.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,L5=m.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,G5=m.a`
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
`,Y5=m.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,q5=m.h3`
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
`,V5=m.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,X5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,q0=m.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,V0=m.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,X0=m.table`
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
`,Q5=m.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,Z5=m.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,K5=m.ul`
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
`,$5=m.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,J5=m.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,W5=m.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,F5=m.a`
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
`;function P5(){return o.jsxs(o.Fragment,{children:[o.jsx(g5,{children:o.jsxs(y5,{children:[o.jsx(p5,{children:"SC Konstanz-Wollmatingen"}),o.jsx(b5,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),o.jsxs(x5,{children:[o.jsx(H0,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),o.jsx(H0,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),o.jsxs(v5,{children:[o.jsx(wi,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),o.jsx(S5,{children:o.jsx(j5,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten – bei uns ist für jeden das Richtige dabei."})}),o.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[o.jsx(N5,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),o.jsxs(e5,{role:"region","aria-label":"Sponsoring-Kategorien",children:[o.jsx(nc,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),o.jsx(nc,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),o.jsx(nc,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),o.jsxs("section",{"aria-labelledby":"premium-pakete",children:[o.jsx(wi,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),o.jsx(tc,{packages:ec.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[o.jsx(wi,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),o.jsx(tc,{packages:ec.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"starter-pakete",children:[o.jsx(wi,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),o.jsx(tc,{packages:ec.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))}),o.jsxs(U5,{children:[o.jsx(H5,{children:"⚽ Ballspende-Beispiel ansehen"}),o.jsx(L5,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),o.jsx(G5,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),o.jsxs(w5,{children:[o.jsx(_5,{children:"Warum SC Konstanz-Wollmatingen?"}),o.jsxs(z5,{children:[o.jsxs(L0,{children:[o.jsx(G0,{children:"📊 Erreichte Reichweite"}),o.jsxs(Y0,{children:[o.jsx("li",{children:"15+ Heimspiele pro Saison"}),o.jsx("li",{children:"200+ Zuschauer pro Spiel"}),o.jsx("li",{children:"2.500+ Instagram Follower"}),o.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),o.jsxs(L0,{children:[o.jsx(G0,{children:"🏆 Sportlicher Erfolg"}),o.jsxs(Y0,{children:[o.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),o.jsx("li",{children:"2. Mannschaften pro Abteilung"}),o.jsx("li",{children:"Cheerleading-Team aktiv"}),o.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),o.jsx(wi,{children:"Zusätzliche Werbemöglichkeiten"}),o.jsxs(E5,{children:[o.jsx(T5,{children:'Werbung im Stadionmagazin „Heimspiel"'}),o.jsxs(A5,{children:[o.jsxs(R5,{children:[o.jsxs(ic,{children:[o.jsx(rc,{children:"1 Seite (Farbe)"}),o.jsx(oc,{children:"1.000 €"}),o.jsx(sc,{children:"DIN A4 (297 × 210 mm)"})]}),o.jsxs(ic,{children:[o.jsx(rc,{children:"1/2 Seite (Farbe)"}),o.jsx(oc,{children:"500 €"}),o.jsx(sc,{children:"DIN A5 (148 × 210 mm)"})]}),o.jsxs(ic,{children:[o.jsx(rc,{children:"1/4 Seite (Farbe)"}),o.jsx(oc,{children:"250 €"}),o.jsx(sc,{children:"DIN A6 (105 × 148 mm)"})]})]}),o.jsx(M5,{children:o.jsxs(k5,{children:[o.jsxs(ac,{children:[o.jsx(lc,{}),"15 Ausgaben pro Saison"]}),o.jsxs(ac,{children:[o.jsx(lc,{}),"ca. 100 Exemplare pro Heimspiel"]}),o.jsxs(ac,{children:[o.jsx(lc,{}),"Digitale Version (Social Media & Website)"]})]})})]}),o.jsxs(C5,{children:[o.jsx(D5,{children:"📖 Aktuelle Ausgabe als Beispiel"}),o.jsx(B5,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),o.jsx(O5,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),o.jsxs(Y5,{children:[o.jsx(q5,{children:"Werbeflächen auf dem Vereinsbus"}),o.jsx(V5,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),o.jsxs(X5,{children:[o.jsxs(q0,{children:[o.jsx(V0,{children:"Premium-Flächen"}),o.jsxs(X0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche (100×80 cm)"}),o.jsx("td",{children:"Sehr hoch"}),o.jsx("td",{children:"1.200 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitentüren (links/rechts)"}),o.jsx("td",{children:"Hoch"}),o.jsx("td",{children:"je 900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Hintere Seitenflächen"}),o.jsx("td",{children:"Mittel–hoch"}),o.jsx("td",{children:"je 600 €"})]})]})]})]}),o.jsxs(q0,{children:[o.jsx(V0,{children:"Standard-Flächen"}),o.jsxs(X0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),o.jsx("td",{children:"Mittel"}),o.jsx("td",{children:"400 € je Seite"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Frontstoßstange"}),o.jsx("td",{children:"Gering–mittel"}),o.jsx("td",{children:"250 €"})]})]})]})]})]}),o.jsxs(Q5,{children:[o.jsx(Z5,{children:"Zusatzoptionen:"}),o.jsxs(K5,{children:[o.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),o.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),o.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50–100 €)"})]})]}),o.jsxs($5,{children:[o.jsx(J5,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),o.jsx(W5,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),o.jsx(F5,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),o.jsx(A2,{}),o.jsx(f5,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),o.jsx(Z2,{})]}),o.jsx(hf,{})]})}const Zp=Cg`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,mf=Cg`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,fa=m.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,I5=m.section`
  background: linear-gradient(135deg, #e10073 0%, #ff6b9d 50%, #e10073 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("${Ao("herren",4)}") center/cover;
    opacity: 0.15;
    z-index: 1;
    animation: ${Zp} 1s ease-out;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    );
    background-size: 50px 50px;
    animation: ${mf} 4s ease-in-out infinite;
    z-index: 1;
  }
`,eS=m.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 1rem;
  animation: ${Zp} 0.8s ease-out 0.2s both;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,tS=m.h1`
  color: white;
  font-size: clamp(2.2rem, 9vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,nS=m.p`
  color: white;
  font-size: clamp(1.1rem, 4vw, 1.6rem);
  font-weight: 500;
  margin-bottom: 2rem;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,aS=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }
`,$r=m.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }

  @media (min-width: 768px) {
    padding: 1.5rem 1rem;
  }
`,Jr=m.div`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.25rem;
`,Wr=m.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,lS=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,Q0=m.a`
  display: inline-block;
  background: ${({$primary:l})=>l?"white":"rgba(255, 255, 255, 0.1)"};
  color: ${({$primary:l})=>l?"#e10073":"white"};
  font-weight: 700;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({$primary:l})=>l?"white":"rgba(255, 255, 255, 0.3)"};
  backdrop-filter: ${({$primary:l})=>l?"none":"blur(10px)"};
  min-width: 200px;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    background: ${({$primary:l})=>l?"#f8f9fa":"rgba(255, 255, 255, 0.2)"};
    border-color: ${({$primary:l})=>l?"white":"rgba(255, 255, 255, 0.5)"};
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    padding: 1.2rem 2.5rem;
    min-width: 220px;
  }
`,da=m.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,iS=m(da)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`,Z0=m.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`,K0=m.h2`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,$0=m.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,rS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`,uc=m.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #e10073;
    box-shadow: 0 16px 48px rgba(225, 0, 115, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,cc=m.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,fc=m.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`,dc=m.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,hc=m.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
`,oS=m(da)`
  background: white;
  position: relative;
`,sS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`,mc=m.div`
  background: #fff;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #e10073;
    box-shadow: 0 16px 48px rgba(225, 0, 115, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`,gc=m.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);

  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
`,pc=m.h3`
  font-size: clamp(1.4rem, 3.5vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  margin-top: 1rem;
`,bc=m.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 900;
  color: #222;
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
`,xc=m.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,vc=m.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    text-align: center;
    padding: 0.4rem 0;
    color: #333;
    font-size: 0.95rem;
    line-height: 1.5;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "✓";
      color: #e10073;
      position: absolute;
      left: 0;
      font-weight: bold;
      font-size: 1.1rem;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
      padding: 0.5rem 0;
    }
  }
`,yc=m.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid transparent;
  width: 100%;
  max-width: 200px;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(225, 0, 115, 0.4);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`,uS=m(da)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`,cS=m(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,fS=m.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,dS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`,gf=m.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e10073;
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,pf=m.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,hS=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Fr=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`,Pr=m.span`
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
`,Ir=m.div`
  background: ${({$color:l})=>l};
  height: 8px;
  border-radius: 4px;
  width: ${({$percentage:l})=>`${l}%`};
  min-width: 40px;
  margin-right: 1rem;
  transition: width 0.3s ease;
`,eo=m.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
  white-space: nowrap;
`,mS=m(gf)``,gS=m(pf)``,pS=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,bS=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`,xS=m.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`,vS=m.span`
  font-size: 0.9rem;
  color: #e10073;
  font-weight: 700;
`,yS=m(gf)``,SS=m(pf)``,jS=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,J0=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 12px;
`,W0=m.span`
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
`,F0=m.span`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 800;
`,wS=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
`,Ia=m.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
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
    height: 3px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`,el=m.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,tl=m.div`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`,_S=m.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  background: #4caf50;
  border-radius: 50%;
  animation: ${mf} 2s infinite;

  &::before {
    content: "Live";
    position: absolute;
    top: -1px;
    left: -30px;
    font-size: 0.6rem;
    color: #4caf50;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;

    @media (max-width: 767px) {
      display: none;
    }
  }
`,zS=m(da)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`,ES=m(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,TS=m.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,AS=m.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 500px;
  line-height: 1.6;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`,RS=m.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 500px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #e10073;
    box-shadow: 0 20px 60px rgba(225, 0, 115, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    min-height: 600px;
    margin-bottom: 3rem;
  }
`,MS=m.img`
  flex: 2 0 65%;
  width: 100%;
  height: 65%;
  object-fit: cover;
  min-height: 300px;

  @media (min-width: 768px) {
    min-height: 350px;
  }
`,kS=m.div`
  flex: 1 0 35%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,CS=m.h4`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`,DS=m.p`
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,BS=m.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid transparent;
  align-self: center;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(225, 0, 115, 0.4);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`,OS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`,Sc=m.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: #e10073;
    box-shadow: 0 16px 48px rgba(225, 0, 115, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`,P0=m.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 220px;
  }
`,NS=m.div`
  width: 100%;
  height: 200px;
  border-radius: 12px 12px 0 0;
  background: ${({$bg:l})=>l?`url(${l}) center/cover`:"linear-gradient(135deg,#f7f7fa,#ffffff)"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "Vorschau";
    color: #e10073;
    font-weight: 900;
    font-size: 1.05rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.35rem 0.7rem;
    border-radius: 6px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`,jc=m.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,wc=m.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`,_c=m.p`
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`,I0=m.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid transparent;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    padding: 0.7rem 1.4rem;
  }
`,US=m(da)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`,HS=m(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,LS=m.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,GS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`,eg=m.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  border-left: 5px solid #e10073;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    font-size: 4rem;
    color: rgba(225, 0, 115, 0.1);
    font-family: serif;
    line-height: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,tg=m.p`
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  color: #333;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,ng=m.div`
  font-size: 0.9rem;
  color: #e10073;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,YS=m(da)`
  background: linear-gradient(135deg, #e10073 0%, #ff6b9d 50%, #e10073 100%);
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    );
    background-size: 30px 30px;
    animation: ${mf} 3s ease-in-out infinite;
    opacity: 0.3;
  }
`,qS=m(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`,VS=m.h3`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,XS=m.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`,QS=m.a`
  display: inline-block;
  background: white;
  color: #e10073;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 2px solid white;
  position: relative;
  z-index: 3;
  min-width: 250px;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
    border-color: #f0f0f0;
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.8);
    outline-offset: 3px;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.5rem;
    min-width: 280px;
  }
`,ZS=m(da)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`,KS=m(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,$S=m.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,JS=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`,to=m.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: #e10073;
    box-shadow: 0 8px 32px rgba(225, 0, 115, 0.1);
    transform: translateY(-2px);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,no=m.h4`
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`,ao=m.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #555;
  line-height: 1.6;
  margin: 0;
`,WS=()=>{const[l,s]=M.useState({followers:2068,posts:90,engagement:3.4,reach:620619,interactions:5128,views:620619,topContentViews:[19200,12e3,11300,9700,9700],contentBreakdown:{posts:56.5,stories:40.2,reels:3.4,videos:0},activeTimes:[{time:"9:00",reach:552},{time:"6:00",reach:649},{time:"9:00",reach:658},{time:"12:00",reach:616},{time:"15:00",reach:151},{time:"18:00",reach:91},{time:"21:00",reach:430}],followerVsNonFollower:{follower:82.2,nonFollower:17.8}});return M.useEffect(()=>{const c=setInterval(()=>{s(u=>({...u,followers:2068+Math.floor(Math.random()*20)-10,reach:620619+Math.floor(Math.random()*5e3)-2500,engagement:3.4+Math.random()*1-.5}))},1e4);return()=>clearInterval(c)},[]),l};function FS(){const l=WS();return o.jsxs(o.Fragment,{children:[o.jsx(I5,{children:o.jsxs(eS,{children:[o.jsx(tS,{children:"Werden Sie Teil der SC-Familie"}),o.jsx(nS,{children:"Maximale Sichtbarkeit bei 15+ Heimspielen, 620k+ Instagram-Aufrufen und einer leidenschaftlichen Community"}),o.jsxs(aS,{children:[o.jsxs($r,{children:[o.jsx(Jr,{children:"620k+"}),o.jsx(Wr,{children:"Aufrufe"})]}),o.jsxs($r,{children:[o.jsx(Jr,{children:"5.1k"}),o.jsx(Wr,{children:"Interaktionen"})]}),o.jsxs($r,{children:[o.jsx(Jr,{children:"2.1k"}),o.jsx(Wr,{children:"Follower"})]}),o.jsxs($r,{children:[o.jsx(Jr,{children:"56%"}),o.jsx(Wr,{children:"Beiträge"})]})]}),o.jsxs(lS,{children:[o.jsx(Q0,{href:"#kontakt",$primary:!0,children:"Jetzt Kontakt aufnehmen"}),o.jsx(Q0,{href:"#pakete",children:"Pakete entdecken"})]})]})}),o.jsx(iS,{children:o.jsxs(fa,{children:[o.jsxs(Z0,{children:[o.jsx(K0,{children:"Warum SC Konstanz-Wollmatingen?"}),o.jsx($0,{children:"Entdecken Sie die Vorteile einer Partnerschaft mit einem der erfolgreichsten Amateurvereine der Region"})]}),o.jsxs(rS,{children:[o.jsxs(uc,{children:[o.jsx(cc,{children:"📊"}),o.jsx(fc,{children:"Maximale Reichweite"}),o.jsx(dc,{children:"15+ Heimspiele pro Saison mit 200+ Zuschauern, 2.068 Instagram-Followern und 620k+ Aufrufen in 90 Tagen"}),o.jsx(hc,{children:"Live Impact"})]}),o.jsxs(uc,{children:[o.jsx(cc,{children:"🏆"}),o.jsx(fc,{children:"Sportlicher Erfolg"}),o.jsx(dc,{children:"1. Damenmannschaft in Landesliga, Cheerleading-Team aktiv, Jugendförderung etabliert – Ihr Logo bei echten Siegen"}),o.jsx(hc,{children:"Emotionale Bindung"})]}),o.jsxs(uc,{children:[o.jsx(cc,{children:"🤝"}),o.jsx(fc,{children:"Community Impact"}),o.jsx(dc,{children:"Werden Sie Teil einer starken Gemeinschaft. Ihre Unterstützung fördert Talente und schafft unvergessliche Momente"}),o.jsx(hc,{children:"Gemeinsam stark"})]})]})]})}),o.jsx(oS,{id:"pakete",children:o.jsxs(fa,{children:[o.jsxs(Z0,{children:[o.jsx(K0,{children:"Sponsoring-Pakete"}),o.jsx($0,{children:"Wählen Sie das perfekte Paket für Ihr Budget und Ihre Ziele – von Premium-Partnerschaften bis zu Starter-Optionen"})]}),o.jsxs(sS,{children:[o.jsxs(mc,{children:[o.jsx(gc,{children:"Premium"}),o.jsx(pc,{children:"🏆 Premium"}),o.jsx(bc,{children:"15.000€"}),o.jsx(xc,{children:"Pro Jahr"}),o.jsxs(vc,{children:[o.jsx("li",{children:"Trikotbrust 1. Mannschaft"}),o.jsx("li",{children:"Stadion-Namensrecht"}),o.jsx("li",{children:"Premium Social Media"}),o.jsx("li",{children:"Exklusive VIP-Rechte"})]}),o.jsx(yc,{href:"mailto:sponsoring@sckw.de?subject=Premium-Sponsoring",children:"Jetzt anfragen"})]}),o.jsxs(mc,{children:[o.jsx(gc,{children:"Lokal"}),o.jsx(pc,{children:"🏢 Lokal"}),o.jsx(bc,{children:"5.000€"}),o.jsx(xc,{children:"Pro Jahr"}),o.jsxs(vc,{children:[o.jsx("li",{children:"Bandenwerbung (5x2m)"}),o.jsx("li",{children:"Instagram-Erwähnungen"}),o.jsx("li",{children:"Community-Events"}),o.jsx("li",{children:"Website-Logo"})]}),o.jsx(yc,{href:"mailto:sponsoring@sckw.de?subject=Lokales-Sponsoring",children:"Jetzt anfragen"})]}),o.jsxs(mc,{children:[o.jsx(gc,{children:"Starter"}),o.jsx(pc,{children:"🌟 Starter"}),o.jsx(bc,{children:"500€"}),o.jsx(xc,{children:"5 Spiele"}),o.jsxs(vc,{children:[o.jsx("li",{children:"Ballspende für 5 Spiele"}),o.jsx("li",{children:"Stadiondurchsagen"}),o.jsx("li",{children:"Social Media Posts"}),o.jsx("li",{children:"Danke-Meldung"})]}),o.jsx(yc,{href:"mailto:sponsoring@sckw.de?subject=Starter-Sponsoring",children:"Jetzt anfragen"})]})]})]})}),o.jsx(uS,{children:o.jsxs(cS,{children:[o.jsx(fS,{children:"📱 Live Instagram Insights"}),o.jsxs(wS,{children:[o.jsxs(Ia,{children:[o.jsx(_S,{}),o.jsx(el,{children:l.followers.toLocaleString()}),o.jsx(tl,{children:"Follower"})]}),o.jsxs(Ia,{children:[o.jsx(el,{children:l.views.toLocaleString()}),o.jsx(tl,{children:"Aufrufe"})]}),o.jsxs(Ia,{children:[o.jsx(el,{children:l.interactions.toLocaleString()}),o.jsx(tl,{children:"Interaktionen"})]}),o.jsxs(Ia,{children:[o.jsx(el,{children:l.reach.toLocaleString()}),o.jsx(tl,{children:"Reichweite"})]}),o.jsxs(Ia,{children:[o.jsxs(el,{children:[l.engagement.toFixed(1),"%"]}),o.jsx(tl,{children:"Engagement"})]}),o.jsxs(Ia,{children:[o.jsx(el,{children:l.posts}),o.jsx(tl,{children:"Posts (90 Tage)"})]})]}),o.jsxs(dS,{children:[o.jsxs(gf,{children:[o.jsx(pf,{children:"📈 Content-Performance"}),o.jsxs(hS,{children:[o.jsxs(Fr,{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flex:1},children:[o.jsx(Pr,{children:"Beiträge"}),o.jsx(Ir,{$percentage:l.contentBreakdown.posts,$color:"#e10073"})]}),o.jsxs(eo,{children:[l.contentBreakdown.posts,"%"]})]}),o.jsxs(Fr,{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flex:1},children:[o.jsx(Pr,{children:"Stories"}),o.jsx(Ir,{$percentage:l.contentBreakdown.stories,$color:"#ff6b9d"})]}),o.jsxs(eo,{children:[l.contentBreakdown.stories,"%"]})]}),o.jsxs(Fr,{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flex:1},children:[o.jsx(Pr,{children:"Reels"}),o.jsx(Ir,{$percentage:l.contentBreakdown.reels,$color:"#b8005a"})]}),o.jsxs(eo,{children:[l.contentBreakdown.reels,"%"]})]}),o.jsxs(Fr,{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flex:1},children:[o.jsx(Pr,{children:"Videos"}),o.jsx(Ir,{$percentage:l.contentBreakdown.videos,$color:"#d00068"})]}),o.jsxs(eo,{children:[l.contentBreakdown.videos,"%"]})]})]})]}),o.jsxs(mS,{children:[o.jsx(gS,{children:"🕐 Aktivste Zeiten"}),o.jsx(pS,{children:l.activeTimes.slice(0,5).map((s,c)=>o.jsxs(bS,{children:[o.jsxs(xS,{children:[s.time,":00"]}),o.jsx(vS,{children:s.reach.toLocaleString()})]},c))})]}),o.jsxs(yS,{children:[o.jsx(SS,{children:"👥 Audience Breakdown"}),o.jsxs(jS,{children:[o.jsxs(J0,{children:[o.jsx(W0,{children:"Follower"}),o.jsxs(F0,{children:[l.followerVsNonFollower.follower,"%"]})]}),o.jsxs(J0,{children:[o.jsx(W0,{children:"Nicht-Follower"}),o.jsxs(F0,{children:[l.followerVsNonFollower.nonFollower,"%"]})]})]})]})]})]})}),o.jsx(zS,{children:o.jsxs(ES,{children:[o.jsx(TS,{children:"📸 So sehen Ihre Anzeigen aus"}),o.jsx(AS,{children:"Entdecken Sie, wie Ihre Werbung bei uns wirkt – vom Stadionmagazin bis zur Bandenwerbung"}),o.jsxs(RS,{children:[o.jsx(MS,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),o.jsxs(kS,{children:[o.jsx(CS,{children:"📖 Stadionmagazin"}),o.jsx(DS,{children:"Professionelle Anzeigen in unserem Stadionheft – 100+ Exemplare pro Spiel, digitale Version auf Social Media"}),o.jsx(BS,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 PDF öffnen"})]})]}),o.jsxs(OS,{children:[o.jsxs(Sc,{children:[o.jsx(P0,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),o.jsxs(jc,{children:[o.jsx(wc,{children:"⚽ Ballspende"}),o.jsx(_c,{children:"Ihr Logo prominent auf Spielbällen – direkt im Einsatz bei Heimspielen"}),o.jsx(I0,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispiel öffnen"})]})]}),o.jsxs(Sc,{children:[o.jsx(P0,{src:Qp("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),o.jsxs(jc,{children:[o.jsx(wc,{children:"🖼️ Bandenwerbung"}),o.jsx(_c,{children:"Sichtbare Präsenz am Spielfeldrand – bei jedem Heimspiel im Fokus der Zuschauer"})]})]}),o.jsxs(Sc,{children:[o.jsx(NS,{}),o.jsxs(jc,{children:[o.jsx(wc,{children:"🚌 Buswerbung"}),o.jsx(_c,{children:"Heck, Seitentüren und Seitenflächen – mobile Werbung auf unserem Vereinsbus"}),o.jsx(I0,{href:"#kontakt",children:"💬 Details anfragen"})]})]})]})]})}),o.jsx(US,{children:o.jsxs(HS,{children:[o.jsx(LS,{children:"💬 Was unsere Partner sagen"}),o.jsxs(GS,{children:[o.jsxs(eg,{children:[o.jsx(tg,{children:'"Die Zusammenarbeit mit SC Konstanz-Wollmatingen hat uns neue Kunden gebracht. Die Community ist unglaublich engagiert!"'}),o.jsx(ng,{children:"Graf Hardenberg - Premium Partner"})]}),o.jsxs(eg,{children:[o.jsx(tg,{children:'"Lokale Präsenz bei Heimspielen zahlt sich aus. Die Fans sind loyal und das Team professionell."'}),o.jsx(ng,{children:"Logan's Linde - Community Partner"})]})]})]})}),o.jsx(YS,{id:"kontakt",children:o.jsxs(qS,{children:[o.jsx(VS,{children:"Jetzt Sponsor werden"}),o.jsx(XS,{children:"Erhalten Sie in 24 Stunden ein individuelles Angebot. Gemeinsam schaffen wir unvergessliche Momente!"}),o.jsx(QS,{href:"mailto:sponsoring@sckw.de?subject=Sponsoring-Anfrage",children:"📧 Kontakt aufnehmen"})]})}),o.jsx(ZS,{children:o.jsxs(KS,{children:[o.jsx($S,{children:"❓ Häufige Fragen"}),o.jsxs(JS,{children:[o.jsxs(to,{children:[o.jsx(no,{children:"Sind die Preise netto?"}),o.jsx(ao,{children:"Ja, alle Preise verstehen sich netto zzgl. MwSt."})]}),o.jsxs(to,{children:[o.jsx(no,{children:"Wie lange läuft ein Sponsoring-Vertrag?"}),o.jsx(ao,{children:"Standard: 1 Jahr mit automatischer Verlängerung. Individuelle Laufzeiten möglich."})]}),o.jsxs(to,{children:[o.jsx(no,{children:"Wie läuft die Gestaltung ab?"}),o.jsx(ao,{children:"Wir übernehmen die Gestaltung. Sie liefern Logo + Claim, wir machen den Rest!"})]}),o.jsxs(to,{children:[o.jsx(no,{children:"Was sind die nächsten Schritte?"}),o.jsx(ao,{children:"Kontakt → Gespräch → Angebot → Vertrag → Umsetzung. Alles in 1-2 Wochen möglich."})]})]})]})})]})}const PS=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],IS=m.section`
  background: url("${Ao("herren",1)}") center/cover;
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
`,ej=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,tj=m.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,nj=m.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,aj=m.main`
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
`,lj=m.section`
  margin-bottom: 4rem;
`,ij=m.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,rj=m.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,oj=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,sj=m.div`
  text-align: center;
  margin-bottom: 3rem;
`,uj=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,cj=m.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,fj=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,dj=m.div`
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
`,hj=m.div`
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
`,mj=m.div`
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
`,gj=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,pj=m.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,bj=m.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,xj=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,vj=m.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,yj=m.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Sj=m.button`
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
`,jj=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,wj=m.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,_j=m.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,zj=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,nl=m.div`
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
`,ag=m.div`
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
`,al=m.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,ll=m.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,il=m.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,rl=m.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Re=m.li`
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
`,ol=m.button`
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
`,Ej=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Tj=m.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,Aj=m.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,Rj=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,zc=m.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,Ec=m.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,Tc=m.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,Ac=m.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,Mj=m.a`
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
`,kj=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,Cj=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,Dj=m.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,sl=m.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,ul=m.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,cl=m.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function Bj(){return o.jsxs(o.Fragment,{children:[o.jsx(IS,{children:o.jsxs(ej,{children:[o.jsx(tj,{children:"SCKW Jobbörse"}),o.jsx(nj,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),o.jsxs(aj,{children:[o.jsxs(lj,{children:[o.jsx(ij,{children:"Willkommen bei der SCKW Jobbörse"}),o.jsx(rj,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),o.jsxs(oj,{children:[o.jsxs(sj,{children:[o.jsx(uj,{children:"So könnte es aussehen"}),o.jsx(cj,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),o.jsx(fj,{children:PS.map(l=>o.jsxs(dj,{children:[l.isExample&&o.jsx(hj,{children:"MUSTER"}),o.jsx(mj,{children:o.jsx(gj,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),o.jsx(pj,{children:l.title}),o.jsx(bj,{children:l.company}),o.jsx(xj,{children:l.tags.map((s,c)=>o.jsx(vj,{children:s},c))}),o.jsx(yj,{children:l.description}),o.jsx(Sj,{children:"Mehr erfahren"})]},l.id))})]}),o.jsxs(jj,{children:[o.jsx(wj,{children:"Preise für Stellenausschreibungen"}),o.jsx(_j,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),o.jsxs(zj,{children:[o.jsxs(nl,{children:[o.jsx(al,{children:"Basis"}),o.jsx(ll,{children:"149 €"}),o.jsx(il,{children:"netto / Anzeige"}),o.jsxs(rl,{children:[o.jsx(Re,{children:"30 Tage auf Website (Jobbereich)"}),o.jsx(Re,{children:"Firmenlogo und Link"}),o.jsx(Re,{children:"Detaillierte Stellenbeschreibung"}),o.jsx(Re,{children:"Bewerbermanagement"})]}),o.jsx(ol,{className:"secondary",children:"Basis wählen"})]}),o.jsxs(nl,{className:"popular",children:[o.jsx(ag,{children:"BELIEBT"}),o.jsx(al,{children:"Standard"}),o.jsx(ll,{children:"229 €"}),o.jsx(il,{children:"netto / Anzeige"}),o.jsxs(rl,{children:[o.jsx(Re,{children:"Alle Basis-Features"}),o.jsx(Re,{children:"1 Social Media Post"}),o.jsx(Re,{children:"Instagram + Facebook Reichweite"}),o.jsx(Re,{children:"Newsletter-Erwähnung"})]}),o.jsx(ol,{children:"Standard wählen"})]}),o.jsxs(nl,{children:[o.jsx(al,{children:"Boosted"}),o.jsx(ll,{children:"349 €"}),o.jsx(il,{children:"netto / Anzeige"}),o.jsxs(rl,{children:[o.jsx(Re,{children:"Alle Standard-Features"}),o.jsx(Re,{children:"Instagram Story"}),o.jsx(Re,{children:"Stadionmagazin-Erwähnung"}),o.jsx(Re,{children:"Prioritäre Platzierung"})]}),o.jsx(ol,{className:"secondary",children:"Boosted wählen"})]})]}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),o.jsxs(Ej,{children:[o.jsxs(nl,{children:[o.jsx(al,{children:"Job Flat SMALL"}),o.jsx(ll,{children:"799 €"}),o.jsx(il,{children:"netto / Jahr"}),o.jsxs(rl,{children:[o.jsx(Re,{children:"Bis zu 6 Anzeigen im Jahr"}),o.jsx(Re,{children:"6 Social Media Posts"}),o.jsx(Re,{children:"Website-Präsenz"}),o.jsx(Re,{children:"Newsletter-Integration"})]}),o.jsx(ol,{className:"secondary",children:"Small Flat"})]}),o.jsxs(nl,{className:"popular",children:[o.jsx(ag,{children:"EMPFOHLEN"}),o.jsx(al,{children:"Job Flat MEDIUM"}),o.jsx(ll,{children:"1.199 €"}),o.jsx(il,{children:"netto / Jahr"}),o.jsxs(rl,{children:[o.jsx(Re,{children:"Bis zu 12 Anzeigen im Jahr"}),o.jsx(Re,{children:"Stadionmagazin-Präsenz"}),o.jsx(Re,{children:"Social Media Posts"}),o.jsx(Re,{children:"Stories & Highlights"})]}),o.jsx(ol,{children:"Medium Flat"})]}),o.jsxs(nl,{children:[o.jsx(al,{children:"Job Flat PARTNER"}),o.jsx(ll,{children:"1.499 €"}),o.jsx(il,{children:"netto / Jahr"}),o.jsxs(rl,{children:[o.jsx(Re,{children:"Unbegrenzte Anzeigen"}),o.jsx(Re,{children:"Erwähnung bei Heimspielen"}),o.jsx(Re,{children:'"Top Partner" Sichtbarkeit'}),o.jsx(Re,{children:"Prioritärer Support"})]}),o.jsx(ol,{className:"secondary",children:"Partner Flat"})]})]}),o.jsxs(Tj,{children:[o.jsx(Aj,{children:"➕ Zusatzoptionen"}),o.jsxs(Rj,{children:[o.jsxs(zc,{children:[o.jsx(Ec,{children:"Social Story"}),o.jsx(Tc,{children:"39 €"}),o.jsx(Ac,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),o.jsxs(zc,{children:[o.jsx(Ec,{children:"Designservice"}),o.jsx(Tc,{children:"59 €"}),o.jsx(Ac,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),o.jsxs(zc,{children:[o.jsx(Ec,{children:"Stadionmagazin"}),o.jsx(Tc,{children:"99 €"}),o.jsx(Ac,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),o.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:o.jsx(Mj,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),o.jsxs(kj,{children:[o.jsx(Cj,{children:"🎯 Warum SCKW Jobbörse?"}),o.jsxs(Dj,{children:[o.jsxs(sl,{children:[o.jsx(ul,{children:"🏠"}),o.jsxs(cl,{children:[o.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),o.jsxs(sl,{children:[o.jsx(ul,{children:"👥"}),o.jsxs(cl,{children:[o.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),o.jsxs(sl,{children:[o.jsx(ul,{children:"💰"}),o.jsxs(cl,{children:[o.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),o.jsxs(sl,{children:[o.jsx(ul,{children:"📈"}),o.jsxs(cl,{children:[o.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),o.jsxs(sl,{children:[o.jsx(ul,{children:"⚡"}),o.jsxs(cl,{children:[o.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),o.jsxs(sl,{children:[o.jsx(ul,{children:"🤲"}),o.jsxs(cl,{children:[o.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),o.jsx(hf,{})]})}const Oj={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},Nj={packages:Oj},Uj=m.div`
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
`,Hj=m.div`
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
`,Lj=m.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Gj=m.div`
  margin-bottom: 1.5rem;
`,Yj=m.div`
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
`,qj=m.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,Vj=m.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,Xj=m.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,Qj=m.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,Zj=m.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Kj=m.div`
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
`,$j=m.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,Jj=m.div`
  flex: 1;
`,Wj=m.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,Fj=m.span`
  font-weight: 600;
  color: #374151;
`,Pj=m.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,Ij=m.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,e3=m.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,t3=m.button`
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
`,n3=m.div`
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
`,a3=()=>{const l=Nj;return{kabinen:{current:l.packages.kabinen.current,goal:l.packages.kabinen.goal,donors:l.packages.kabinen.donors},fassade:{current:l.packages.fassade.current,goal:l.packages.fassade.goal,donors:l.packages.fassade.donors},waschkueche:{current:l.packages.waschkueche.current,goal:l.packages.waschkueche.goal,donors:l.packages.waschkueche.donors}}};function l3({data:l=a3(),realTime:s=!1}){const[c,u]=M.useState(l),[d,g]=M.useState(new Date),[b,j]=M.useState(!1),v=async()=>{j(!0);try{const R=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(R.ok){const k=await R.json(),H={kabinen:{current:k.packages.kabinen.current,goal:k.packages.kabinen.goal,donors:k.packages.kabinen.donors},fassade:{current:k.packages.fassade.current,goal:k.packages.fassade.goal,donors:k.packages.fassade.donors},waschkueche:{current:k.packages.waschkueche.current,goal:k.packages.waschkueche.goal,donors:k.packages.waschkueche.donors}};u(H),g(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(R){console.error("❌ Fehler beim Laden der Spendendaten:",R)}finally{j(!1)}};M.useEffect(()=>{if(!s)return;const R=setInterval(()=>{v()},3e4);return()=>clearInterval(R)},[s]);const p=R=>{switch(R){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},E=R=>{switch(R){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return R}};return o.jsxs(o.Fragment,{children:[o.jsx(Uj,{children:Object.entries(c).map(([R,k])=>{const H=k.current/k.goal*100;return o.jsxs(Hj,{children:[o.jsxs(Lj,{children:[p(R)," ",E(R)]}),o.jsxs(Gj,{children:[o.jsxs(Yj,{children:[o.jsxs("span",{children:[k.current.toLocaleString("de-DE")," €"]}),o.jsxs("span",{children:[k.goal.toLocaleString("de-DE")," €"]})]}),o.jsx(qj,{children:o.jsx(Vj,{$progress:H})}),o.jsxs(Xj,{children:[Math.round(H),"% erreicht"]})]}),o.jsxs(Qj,{children:[o.jsxs(Zj,{children:["💝 Spender (",k.donors.length,")"]}),o.jsx(Kj,{children:k.donors.length>0?k.donors.slice().reverse().map((L,G)=>o.jsxs($j,{children:[o.jsxs(Jj,{children:[o.jsx(Wj,{children:L.anonymous?"Anonymer Spender":L.name}),L.comment&&o.jsxs(Pj,{children:['"',L.comment,'"']}),L.date&&o.jsx(Ij,{children:L.date})]}),o.jsxs(Fj,{children:[L.amount.toLocaleString("de-DE")," €"]})]},G)):o.jsx(e3,{children:"Noch keine Spenden 🤗"})})]})]},R)})}),o.jsxs(t3,{onClick:v,disabled:b,title:"Spendendaten aktualisieren",children:["🔄",b?"Lade...":"Aktualisieren"]}),o.jsxs(n3,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const i3=m.section`
  background: url("${Ao("herren",18)}") center/cover;
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
`,r3=m.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,o3=m.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,s3=m.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,u3=m.main`
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
`,c3=m.section`
  margin-bottom: 4rem;
`,f3=m.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,d3=m.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,h3=m.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,m3=m.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,g3=m.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,p3=m.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,b3=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,x3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Rc=m.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Mc=m.div`
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
`,v3=m.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,y3=m.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,S3=m.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,j3=m.div`
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
`,w3=m.div`
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
`,_3=m.div`
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
`,z3=m.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,E3=m.button`
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
`,lg=m.button`
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
`,kc=m.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Cc=m.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,T3=m.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,A3=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,R3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Dc=m.div`
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
`,Bc=m.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Oc=m.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,Nc=m.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Uc=m.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,M3=m.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,k3=m.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,C3=m.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,D3=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,lo=m.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,io=m.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,ro=m.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,B3=m.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,O3=m.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,N3=m.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,U3=m.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,ig=m.a`
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
`,H3=m.div`
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
`,L3=m.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,G3=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Y3=m.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,q3=m.button`
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
`,V3=m.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Hc=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Lc=m.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Gc=m.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,X3=m.button`
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
`,Q3=m.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,fl=Xp();function Yc({images:l,onImageClick:s}){const[c,u]=M.useState(0);return M.useEffect(()=>{if(l.length<=1)return;const d=setInterval(()=>{u(g=>(g+1)%l.length)},4e3);return()=>clearInterval(d)},[l.length]),l.length===0?o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):o.jsxs(v3,{children:[l.map((d,g)=>o.jsx(y3,{src:d.src,alt:d.alt,$isActive:g===c,onClick:()=>s(g)},g)),l.length>1&&o.jsx(S3,{children:l.map((d,g)=>o.jsx(j3,{$isActive:g===c,onClick:()=>u(g)},g))})]})}function Z3({images:l,initialIndex:s,onClose:c}){const[u,d]=M.useState(s),g=M.useCallback(()=>{d(j=>(j+1)%l.length)},[l.length]),b=M.useCallback(()=>{d(j=>(j-1+l.length)%l.length)},[l.length]);return M.useEffect(()=>{const j=v=>{v.key==="Escape"&&c(),v.key==="ArrowRight"&&g(),v.key==="ArrowLeft"&&b()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[c,g,b]),o.jsx(w3,{onClick:c,children:o.jsxs(_3,{onClick:j=>j.stopPropagation(),children:[o.jsx(E3,{onClick:c,children:"×"}),o.jsx(z3,{src:l[u].src,alt:l[u].alt}),l.length>1&&o.jsxs(o.Fragment,{children:[o.jsx(lg,{$direction:"prev",onClick:b,children:"‹"}),o.jsx(lg,{$direction:"next",onClick:g,children:"›"})]})]})})}function K3(){const[l,s]=M.useState(!1),[c,u]=M.useState([]),[d,g]=M.useState(0),[b,j]=M.useState(!1),v=(R,k)=>{u(R),g(k),s(!0)},p=R=>{R.preventDefault(),j(!0)},E=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return o.jsxs(o.Fragment,{children:[o.jsx(i3,{children:o.jsxs(r3,{children:[o.jsx(o3,{children:"🏟️ Fürstenberg weiterentwickeln"}),o.jsx(s3,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),o.jsxs(u3,{children:[o.jsxs(c3,{children:[o.jsx(f3,{children:"Der Fürstenberg - unser Kultplatz"}),o.jsx(d3,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),o.jsxs(h3,{children:[o.jsx(m3,{children:"✨ Charme erhalten, Komfort verbessern"}),o.jsx(g3,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),o.jsxs(p3,{children:[o.jsx(b3,{children:"🔍 Wo wir ansetzen möchten"}),o.jsxs(x3,{children:[o.jsxs(Rc,{children:[o.jsx(Mc,{children:o.jsx(Yc,{images:fl.kabinen,onImageClick:R=>v(fl.kabinen,R)})}),o.jsx(kc,{children:"🔧 Kabinen komfortabler gestalten"}),o.jsx(Cc,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),o.jsxs(Rc,{children:[o.jsx(Mc,{children:o.jsx(Yc,{images:fl.fassade,onImageClick:R=>v(fl.fassade,R)})}),o.jsx(kc,{children:"🎨 Fassade & Fenster erneuern"}),o.jsx(Cc,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),o.jsxs(Rc,{children:[o.jsx(Mc,{children:o.jsx(Yc,{images:fl.waschkueche,onImageClick:R=>v(fl.waschkueche,R)})}),o.jsx(kc,{children:"🧺 Waschküche auf Vordermann bringen"}),o.jsx(Cc,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),o.jsxs(T3,{children:[o.jsx(A3,{children:"✨ Unsere Pläne für den Fürstenberg"}),o.jsxs(R3,{children:[o.jsxs(Dc,{children:[o.jsx(Bc,{children:"🪑"}),o.jsx(Oc,{children:"Kabinen sanieren"}),o.jsx(Nc,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),o.jsx(Uc,{children:"~8.000 €"})]}),o.jsxs(Dc,{children:[o.jsx(Bc,{children:"🎨"}),o.jsx(Oc,{children:"Fassade & Fenster erneuern"}),o.jsx(Nc,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),o.jsx(Uc,{children:"~15.000 €"})]}),o.jsxs(Dc,{children:[o.jsx(Bc,{children:"🧺"}),o.jsx(Oc,{children:"Waschküche modernisieren"}),o.jsx(Nc,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),o.jsx(Uc,{children:"~5.000 €"})]})]})]}),o.jsxs(M3,{children:[o.jsx(k3,{children:"🤝 Werden Sie Renovierungs-Partner!"}),o.jsx(C3,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),o.jsxs(D3,{children:[o.jsxs(lo,{children:[o.jsx(io,{children:"🏆"}),o.jsxs(ro,{children:[o.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),o.jsxs(lo,{children:[o.jsx(io,{children:"📄"}),o.jsxs(ro,{children:[o.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),o.jsxs(lo,{children:[o.jsx(io,{children:"📱"}),o.jsxs(ro,{children:[o.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),o.jsxs(lo,{children:[o.jsx(io,{children:"🎯"}),o.jsxs(ro,{children:[o.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),o.jsxs(B3,{children:[o.jsx(O3,{children:"🤝 Gemeinsam für den Fürstenberg"}),o.jsx(N3,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),o.jsx(l3,{realTime:!0}),o.jsxs(U3,{children:[o.jsx(ig,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),o.jsx(ig,{href:"#",onClick:p,children:"🏦 Per Überweisung spenden"})]})]})]}),o.jsx(hf,{}),b&&o.jsx(H3,{onClick:()=>j(!1),children:o.jsxs(L3,{onClick:R=>R.stopPropagation(),children:[o.jsxs(G3,{children:[o.jsx(Y3,{children:"Kontoverbindung für Spenden"}),o.jsx(q3,{onClick:()=>j(!1),children:"×"})]}),o.jsxs(V3,{children:[o.jsxs(Hc,{children:[o.jsx(Lc,{children:"Kontoinhaber:"}),o.jsx(Gc,{children:"SC Konstanz-Wollmatingen"})]}),o.jsxs(Hc,{children:[o.jsx(Lc,{children:"IBAN:"}),o.jsx(Gc,{children:"DE12 6905 0001 0000 0228 06"})]}),o.jsxs(Hc,{children:[o.jsx(Lc,{children:"BIC:"}),o.jsx(Gc,{children:"SOLADES1KNZ"})]})]}),o.jsx(X3,{onClick:E,children:"📋 IBAN kopieren"}),o.jsx(Q3,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),l&&o.jsx(Z3,{images:c,initialIndex:d,onClose:()=>s(!1)})]})}function $3(){return o.jsxs(Ly,{children:[o.jsx(a2,{}),o.jsxs(py,{children:[o.jsx(dl,{path:"/",element:o.jsx(my,{to:"/sponsoring",replace:!0})}),o.jsx(dl,{path:"/sponsoring",element:o.jsx(P5,{})}),o.jsx(dl,{path:"/sponsoring-v2",element:o.jsx(FS,{})}),o.jsx(dl,{path:"/jobs",element:o.jsx(Bj,{})}),o.jsx(dl,{path:"/renovierung",element:o.jsx(K3,{})})]})]})}const J3={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");zx.createRoot(document.getElementById("root")).render(o.jsx(M.StrictMode,{children:o.jsx(_v,{theme:J3,children:o.jsx($3,{})})}));
