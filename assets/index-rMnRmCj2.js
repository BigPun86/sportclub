(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function c(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(d){if(d.ep)return;d.ep=!0;const m=c(d);fetch(d.href,m)}})();function rx(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Hu={exports:{}},pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function ox(){if(ag)return pi;ag=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(u,d,m){var b=null;if(m!==void 0&&(b=""+m),d.key!==void 0&&(b=""+d.key),"key"in d){m={};for(var j in d)j!=="key"&&(m[j]=d[j])}else m=d;return d=m.ref,{$$typeof:l,type:u,key:b,ref:d!==void 0?d:null,props:m}}return pi.Fragment=s,pi.jsx=c,pi.jsxs=c,pi}var lg;function sx(){return lg||(lg=1,Hu.exports=ox()),Hu.exports}var o=sx(),Lu={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function ux(){if(ig)return ie;ig=1;var l=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),b=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),M=Symbol.iterator;function D(y){return y===null||typeof y!="object"?null:(y=M&&y[M]||y["@@iterator"],typeof y=="function"?y:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,G={};function X(y,N,Y){this.props=y,this.context=N,this.refs=G,this.updater=Y||H}X.prototype.isReactComponent={},X.prototype.setState=function(y,N){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,N,"setState")},X.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function U(){}U.prototype=X.prototype;function J(y,N,Y){this.props=y,this.context=N,this.refs=G,this.updater=Y||H}var Q=J.prototype=new U;Q.constructor=J,L(Q,X.prototype),Q.isPureReactComponent=!0;var ae=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},le=Object.prototype.hasOwnProperty;function W(y,N,Y,V,F,ce){return Y=ce.ref,{$$typeof:l,type:y,key:N,ref:Y!==void 0?Y:null,props:ce}}function Ee(y,N){return W(y.type,N,void 0,void 0,void 0,y.props)}function we(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function at(y){var N={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Y){return N[Y]})}var it=/\/+/g;function Ye(y,N){return typeof y=="object"&&y!==null&&y.key!=null?at(""+y.key):N.toString(36)}function Zt(){}function Kt(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Zt,Zt):(y.status="pending",y.then(function(N){y.status==="pending"&&(y.status="fulfilled",y.value=N)},function(N){y.status==="pending"&&(y.status="rejected",y.reason=N)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function qe(y,N,Y,V,F){var ce=typeof y;(ce==="undefined"||ce==="boolean")&&(y=null);var ee=!1;if(y===null)ee=!0;else switch(ce){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(y.$$typeof){case l:case s:ee=!0;break;case E:return ee=y._init,qe(ee(y._payload),N,Y,V,F)}}if(ee)return F=F(y),ee=V===""?"."+Ye(y,0):V,ae(F)?(Y="",ee!=null&&(Y=ee.replace(it,"$&/")+"/"),qe(F,N,Y,"",function(Pe){return Pe})):F!=null&&(we(F)&&(F=Ee(F,Y+(F.key==null||y&&y.key===F.key?"":(""+F.key).replace(it,"$&/")+"/")+ee)),N.push(F)),1;ee=0;var Ve=V===""?".":V+":";if(ae(y))for(var pe=0;pe<y.length;pe++)V=y[pe],ce=Ve+Ye(V,pe),ee+=qe(V,N,Y,ce,F);else if(pe=D(y),typeof pe=="function")for(y=pe.call(y),pe=0;!(V=y.next()).done;)V=V.value,ce=Ve+Ye(V,pe++),ee+=qe(V,N,Y,ce,F);else if(ce==="object"){if(typeof y.then=="function")return qe(Kt(y),N,Y,V,F);throw N=String(y),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ee}function k(y,N,Y){if(y==null)return y;var V=[],F=0;return qe(y,V,"","",function(ce){return N.call(Y,ce,F++)}),V}function q(y){if(y._status===-1){var N=y._result;N=N(),N.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y)},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y)}),y._status===-1&&(y._status=0,y._result=N)}if(y._status===1)return y._result.default;throw y._result}var P=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function ue(){}return ie.Children={map:k,forEach:function(y,N,Y){k(y,function(){N.apply(this,arguments)},Y)},count:function(y){var N=0;return k(y,function(){N++}),N},toArray:function(y){return k(y,function(N){return N})||[]},only:function(y){if(!we(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ie.Component=X,ie.Fragment=c,ie.Profiler=d,ie.PureComponent=J,ie.StrictMode=u,ie.Suspense=v,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(y){return Z.H.useMemoCache(y)}},ie.cache=function(y){return function(){return y.apply(null,arguments)}},ie.cloneElement=function(y,N,Y){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var V=L({},y.props),F=y.key,ce=void 0;if(N!=null)for(ee in N.ref!==void 0&&(ce=void 0),N.key!==void 0&&(F=""+N.key),N)!le.call(N,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&N.ref===void 0||(V[ee]=N[ee]);var ee=arguments.length-2;if(ee===1)V.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];V.children=Ve}return W(y.type,F,void 0,void 0,ce,V)},ie.createContext=function(y){return y={$$typeof:b,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:m,_context:y},y},ie.createElement=function(y,N,Y){var V,F={},ce=null;if(N!=null)for(V in N.key!==void 0&&(ce=""+N.key),N)le.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(F[V]=N[V]);var ee=arguments.length-2;if(ee===1)F.children=Y;else if(1<ee){for(var Ve=Array(ee),pe=0;pe<ee;pe++)Ve[pe]=arguments[pe+2];F.children=Ve}if(y&&y.defaultProps)for(V in ee=y.defaultProps,ee)F[V]===void 0&&(F[V]=ee[V]);return W(y,ce,void 0,void 0,null,F)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(y){return{$$typeof:j,render:y}},ie.isValidElement=we,ie.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:q}},ie.memo=function(y,N){return{$$typeof:p,type:y,compare:N===void 0?null:N}},ie.startTransition=function(y){var N=Z.T,Y={};Z.T=Y;try{var V=y(),F=Z.S;F!==null&&F(Y,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ue,P)}catch(ce){P(ce)}finally{Z.T=N}},ie.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ie.use=function(y){return Z.H.use(y)},ie.useActionState=function(y,N,Y){return Z.H.useActionState(y,N,Y)},ie.useCallback=function(y,N){return Z.H.useCallback(y,N)},ie.useContext=function(y){return Z.H.useContext(y)},ie.useDebugValue=function(){},ie.useDeferredValue=function(y,N){return Z.H.useDeferredValue(y,N)},ie.useEffect=function(y,N,Y){var V=Z.H;if(typeof Y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(y,N)},ie.useId=function(){return Z.H.useId()},ie.useImperativeHandle=function(y,N,Y){return Z.H.useImperativeHandle(y,N,Y)},ie.useInsertionEffect=function(y,N){return Z.H.useInsertionEffect(y,N)},ie.useLayoutEffect=function(y,N){return Z.H.useLayoutEffect(y,N)},ie.useMemo=function(y,N){return Z.H.useMemo(y,N)},ie.useOptimistic=function(y,N){return Z.H.useOptimistic(y,N)},ie.useReducer=function(y,N,Y){return Z.H.useReducer(y,N,Y)},ie.useRef=function(y){return Z.H.useRef(y)},ie.useState=function(y){return Z.H.useState(y)},ie.useSyncExternalStore=function(y,N,Y){return Z.H.useSyncExternalStore(y,N,Y)},ie.useTransition=function(){return Z.H.useTransition()},ie.version="19.1.0",ie}var rg;function $c(){return rg||(rg=1,Lu.exports=ux()),Lu.exports}var R=$c();const sa=rx(R);var Gu={exports:{}},bi={},Yu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function cx(){return og||(og=1,function(l){function s(k,q){var P=k.length;k.push(q);e:for(;0<P;){var ue=P-1>>>1,y=k[ue];if(0<d(y,q))k[ue]=q,k[P]=y,P=ue;else break e}}function c(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var q=k[0],P=k.pop();if(P!==q){k[0]=P;e:for(var ue=0,y=k.length,N=y>>>1;ue<N;){var Y=2*(ue+1)-1,V=k[Y],F=Y+1,ce=k[F];if(0>d(V,P))F<y&&0>d(ce,V)?(k[ue]=ce,k[F]=P,ue=F):(k[ue]=V,k[Y]=P,ue=Y);else if(F<y&&0>d(ce,P))k[ue]=ce,k[F]=P,ue=F;else break e}}return q}function d(k,q){var P=k.sortIndex-q.sortIndex;return P!==0?P:k.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var b=Date,j=b.now();l.unstable_now=function(){return b.now()-j}}var v=[],p=[],E=1,M=null,D=3,H=!1,L=!1,G=!1,X=!1,U=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function ae(k){for(var q=c(p);q!==null;){if(q.callback===null)u(p);else if(q.startTime<=k)u(p),q.sortIndex=q.expirationTime,s(v,q);else break;q=c(p)}}function Z(k){if(G=!1,ae(k),!L)if(c(v)!==null)L=!0,le||(le=!0,Ye());else{var q=c(p);q!==null&&qe(Z,q.startTime-k)}}var le=!1,W=-1,Ee=5,we=-1;function at(){return X?!0:!(l.unstable_now()-we<Ee)}function it(){if(X=!1,le){var k=l.unstable_now();we=k;var q=!0;try{e:{L=!1,G&&(G=!1,J(W),W=-1),H=!0;var P=D;try{t:{for(ae(k),M=c(v);M!==null&&!(M.expirationTime>k&&at());){var ue=M.callback;if(typeof ue=="function"){M.callback=null,D=M.priorityLevel;var y=ue(M.expirationTime<=k);if(k=l.unstable_now(),typeof y=="function"){M.callback=y,ae(k),q=!0;break t}M===c(v)&&u(v),ae(k)}else u(v);M=c(v)}if(M!==null)q=!0;else{var N=c(p);N!==null&&qe(Z,N.startTime-k),q=!1}}break e}finally{M=null,D=P,H=!1}q=void 0}}finally{q?Ye():le=!1}}}var Ye;if(typeof Q=="function")Ye=function(){Q(it)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,Kt=Zt.port2;Zt.port1.onmessage=it,Ye=function(){Kt.postMessage(null)}}else Ye=function(){U(it,0)};function qe(k,q){W=U(function(){k(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(k){k.callback=null},l.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<k?Math.floor(1e3/k):5},l.unstable_getCurrentPriorityLevel=function(){return D},l.unstable_next=function(k){switch(D){case 1:case 2:case 3:var q=3;break;default:q=D}var P=D;D=q;try{return k()}finally{D=P}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=D;D=k;try{return q()}finally{D=P}},l.unstable_scheduleCallback=function(k,q,P){var ue=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ue+P:ue):P=ue,k){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=P+y,k={id:E++,callback:q,priorityLevel:k,startTime:P,expirationTime:y,sortIndex:-1},P>ue?(k.sortIndex=P,s(p,k),c(v)===null&&k===c(p)&&(G?(J(W),W=-1):G=!0,qe(Z,P-ue))):(k.sortIndex=y,s(v,k),L||H||(L=!0,le||(le=!0,Ye()))),k},l.unstable_shouldYield=at,l.unstable_wrapCallback=function(k){var q=D;return function(){var P=D;D=q;try{return k.apply(this,arguments)}finally{D=P}}}}(qu)),qu}var sg;function fx(){return sg||(sg=1,Yu.exports=cx()),Yu.exports}var Vu={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function dx(){if(ug)return tt;ug=1;var l=$c();function s(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(v,p,E){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:v,containerInfo:p,implementation:E}}var b=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,tt.createPortal=function(v,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return m(v,p,null,E)},tt.flushSync=function(v){var p=b.T,E=u.p;try{if(b.T=null,u.p=2,v)return v()}finally{b.T=p,u.p=E,u.d.f()}},tt.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(v,p))},tt.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},tt.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var E=p.as,M=j(E,p.crossOrigin),D=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?u.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:D,fetchPriority:H}):E==="script"&&u.d.X(v,{crossOrigin:M,integrity:D,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},tt.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=j(p.as,p.crossOrigin);u.d.M(v,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(v)},tt.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,M=j(E,p.crossOrigin);u.d.L(v,E,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},tt.preloadModule=function(v,p){if(typeof v=="string")if(p){var E=j(p.as,p.crossOrigin);u.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(v)},tt.requestFormReset=function(v){u.d.r(v)},tt.unstable_batchedUpdates=function(v,p){return v(p)},tt.useFormState=function(v,p,E){return b.H.useFormState(v,p,E)},tt.useFormStatus=function(){return b.H.useHostTransitionStatus()},tt.version="19.1.0",tt}var cg;function hx(){if(cg)return Vu.exports;cg=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Vu.exports=dx(),Vu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function mx(){if(fg)return bi;fg=1;var l=fx(),s=$c(),c=hx();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(m(e)!==e)throw Error(u(188))}function v(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return j(i),e;if(r===a)return j(i),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,h=i.child;h;){if(h===n){f=!0,n=i,a=r;break}if(h===a){f=!0,a=i,n=r;break}h=h.sibling}if(!f){for(h=r.child;h;){if(h===n){f=!0,n=r,a=i;break}if(h===a){f=!0,a=r,n=i;break}h=h.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,M=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=it&&e[it]||e["@@iterator"],typeof e=="function"?e:null)}var Zt=Symbol.for("react.client.reference");function Kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case X:return"Profiler";case G:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Q:return(e.displayName||"Context")+".Provider";case J:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Kt(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return Kt(e(t))}catch{}}return null}var qe=Array.isArray,k=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ue=[],y=-1;function N(e){return{current:e}}function Y(e){0>y||(e.current=ue[y],ue[y]=null,y--)}function V(e,t){y++,ue[y]=e.current,e.current=t}var F=N(null),ce=N(null),ee=N(null),Ve=N(null);function pe(e,t){switch(V(ee,t),V(ce,e),V(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Dm(t),e=km(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(F),V(F,e)}function Pe(){Y(F),Y(ce),Y(ee)}function Gn(e){e.memoizedState!==null&&V(Ve,e);var t=F.current,n=km(t,e.type);t!==n&&(V(ce,e),V(F,n))}function $t(e){ce.current===e&&(Y(F),Y(ce)),Ve.current===e&&(Y(Ve),fi._currentValue=P)}var St=Object.prototype.hasOwnProperty,zo=l.unstable_scheduleCallback,Eo=l.unstable_cancelCallback,Hp=l.unstable_shouldYield,Lp=l.unstable_requestPaint,Ht=l.unstable_now,Gp=l.unstable_getCurrentPriorityLevel,ff=l.unstable_ImmediatePriority,df=l.unstable_UserBlockingPriority,Ai=l.unstable_NormalPriority,Yp=l.unstable_LowPriority,hf=l.unstable_IdlePriority,qp=l.log,Vp=l.unstable_setDisableYieldValue,vl=null,ft=null;function gn(e){if(typeof qp=="function"&&Vp(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(vl,e)}catch{}}var dt=Math.clz32?Math.clz32:Zp,Xp=Math.log,Qp=Math.LN2;function Zp(e){return e>>>=0,e===0?32:31-(Xp(e)/Qp|0)|0}var Mi=256,Ri=4194304;function Yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Di(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?i=Yn(a):(f&=h,f!==0?i=Yn(f):n||(n=h&~e,n!==0&&(i=Yn(n))))):(h=a&~r,h!==0?i=Yn(h):f!==0?i=Yn(f):n||(n=a&~e,n!==0&&(i=Yn(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Kp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(){var e=Mi;return Mi<<=1,(Mi&4194048)===0&&(Mi=256),e}function gf(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function To(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $p(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,x=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var C=31-dt(n),B=1<<C;h[C]=0,x[C]=-1;var T=z[C];if(T!==null)for(z[C]=null,C=0;C<T.length;C++){var A=T[C];A!==null&&(A.lane&=-536870913)}n&=~B}a!==0&&pf(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function pf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-dt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function bf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-dt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xf(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Fm(e.type))}function Jp(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var pn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+pn,rt="__reactProps$"+pn,ha="__reactContainer$"+pn,Ro="__reactEvents$"+pn,Wp="__reactListeners$"+pn,Fp="__reactHandles$"+pn,vf="__reactResources$"+pn,jl="__reactMarker$"+pn;function Do(e){delete e[Ie],delete e[rt],delete e[Ro],delete e[Wp],delete e[Fp]}function ma(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nm(e);e!==null;){if(n=e[Ie])return n;e=Nm(e)}return t}e=n,n=e.parentNode}return null}function ga(e){if(e=e[Ie]||e[ha]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function pa(e){var t=e[vf];return t||(t=e[vf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[jl]=!0}var yf=new Set,Sf={};function qn(e,t){ba(e,t),ba(e+"Capture",t)}function ba(e,t){for(Sf[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var Pp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jf={},wf={};function Ip(e){return St.call(wf,e)?!0:St.call(jf,e)?!1:Pp.test(e)?wf[e]=!0:(jf[e]=!0,!1)}function ki(e,t,n){if(Ip(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Jt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var ko,_f;function xa(e){if(ko===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ko=t&&t[1]||"",_f=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ko+e+_f}var Co=!1;function Oo(e,t){if(!e||Co)return"";Co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(A){var T=A}Reflect.construct(e,[],B)}else{try{B.call()}catch(A){T=A}e.call(B.prototype)}}else{try{throw Error()}catch(A){T=A}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],h=r[1];if(f&&h){var x=f.split(`
`),z=h.split(`
`);for(i=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(a===x.length||i===z.length)for(a=x.length-1,i=z.length-1;1<=a&&0<=i&&x[a]!==z[i];)i--;for(;1<=a&&0<=i;a--,i--)if(x[a]!==z[i]){if(a!==1||i!==1)do if(a--,i--,0>i||x[a]!==z[i]){var C=`
`+x[a].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=a&&0<=i);break}}}finally{Co=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xa(n):""}function e1(e){switch(e.tag){case 26:case 27:case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 15:return Oo(e.type,!1);case 11:return Oo(e.type.render,!1);case 1:return Oo(e.type,!0);case 31:return xa("Activity");default:return""}}function zf(e){try{var t="";do t+=e1(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function t1(e){var t=Ef(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oi(e){e._valueTracker||(e._valueTracker=t1(e))}function Tf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ef(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var n1=/[\n"\\]/g;function wt(e){return e.replace(n1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bo(e,t,n,a,i,r,f,h){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?No(e,f,jt(t)):n!=null?No(e,f,jt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+jt(h):e.removeAttribute("name")}function Af(e,t,n,a,i,r,f,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function No(e,t,n){t==="number"&&Bi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function va(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mf(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function Rf(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(qe(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ya(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var a1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Df(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||a1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function kf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Df(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&Df(e,r,t[r])}function Uo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ni(e){return i1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ho=null;function Lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sa=null,ja=null;function Cf(e){var t=ga(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[rt]||null;if(!i)throw Error(u(90));Bo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Tf(a)}break e;case"textarea":Mf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&va(e,!!n.multiple,t,!1)}}}var Go=!1;function Of(e,t,n){if(Go)return e(t,n);Go=!0;try{var a=e(t);return a}finally{if(Go=!1,(Sa!==null||ja!==null)&&(Sr(),Sa&&(t=Sa,e=ja,ja=Sa=null,Cf(t),e)))for(t=0;t<e.length;t++)Cf(e[t])}}function _l(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(Wt)try{var zl={};Object.defineProperty(zl,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{Yo=!1}var bn=null,qo=null,Ui=null;function Bf(){if(Ui)return Ui;var e,t=qo,n=t.length,a,i="value"in bn?bn.value:bn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return Ui=i.slice(e,1<a?1-a:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function Nf(){return!1}function ot(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Li:Nf,this.isPropagationStopped=Nf,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=ot(Vn),El=E({},Vn,{view:0,detail:0}),r1=ot(El),Vo,Xo,Tl,Yi=E({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tl&&(Tl&&e.type==="mousemove"?(Vo=e.screenX-Tl.screenX,Xo=e.screenY-Tl.screenY):Xo=Vo=0,Tl=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),Uf=ot(Yi),o1=E({},Yi,{dataTransfer:0}),s1=ot(o1),u1=E({},El,{relatedTarget:0}),Qo=ot(u1),c1=E({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),f1=ot(c1),d1=E({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h1=ot(d1),m1=E({},Vn,{data:0}),Hf=ot(m1),g1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=b1[e])?!!t[e]:!1}function Zo(){return x1}var v1=E({},El,{key:function(e){if(e.key){var t=g1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zo,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y1=ot(v1),S1=E({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=ot(S1),j1=E({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zo}),w1=ot(j1),_1=E({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=ot(_1),E1=E({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T1=ot(E1),A1=E({},Vn,{newState:0,oldState:0}),M1=ot(A1),R1=[9,13,27,32],Ko=Wt&&"CompositionEvent"in window,Al=null;Wt&&"documentMode"in document&&(Al=document.documentMode);var D1=Wt&&"TextEvent"in window&&!Al,Gf=Wt&&(!Ko||Al&&8<Al&&11>=Al),Yf=" ",qf=!1;function Vf(e,t){switch(e){case"keyup":return R1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wa=!1;function k1(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(qf=!0,Yf);case"textInput":return e=t.data,e===Yf&&qf?null:e;default:return null}}function C1(e,t){if(wa)return e==="compositionend"||!Ko&&Vf(e,t)?(e=Bf(),Ui=qo=bn=null,wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var O1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!O1[e.type]:t==="textarea"}function Zf(e,t,n,a){Sa?ja?ja.push(a):ja=[a]:Sa=a,t=Tr(t,"onChange"),0<t.length&&(n=new Gi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ml=null,Rl=null;function B1(e){Em(e,0)}function qi(e){var t=wl(e);if(Tf(t))return e}function Kf(e,t){if(e==="change")return t}var $f=!1;if(Wt){var $o;if(Wt){var Jo="oninput"in document;if(!Jo){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Jo=typeof Jf.oninput=="function"}$o=Jo}else $o=!1;$f=$o&&(!document.documentMode||9<document.documentMode)}function Wf(){Ml&&(Ml.detachEvent("onpropertychange",Ff),Rl=Ml=null)}function Ff(e){if(e.propertyName==="value"&&qi(Rl)){var t=[];Zf(t,Rl,e,Lo(e)),Of(B1,t)}}function N1(e,t,n){e==="focusin"?(Wf(),Ml=t,Rl=n,Ml.attachEvent("onpropertychange",Ff)):e==="focusout"&&Wf()}function U1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Rl)}function H1(e,t){if(e==="click")return qi(t)}function L1(e,t){if(e==="input"||e==="change")return qi(t)}function G1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:G1;function Dl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!St.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Pf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function If(e,t){var n=Pf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pf(n)}}function ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function td(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Y1=Wt&&"documentMode"in document&&11>=document.documentMode,_a=null,Fo=null,kl=null,Po=!1;function nd(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||_a==null||_a!==Bi(a)||(a=_a,"selectionStart"in a&&Wo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),kl&&Dl(kl,a)||(kl=a,a=Tr(Fo,"onSelect"),0<a.length&&(t=new Gi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=_a)))}function Xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var za={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Io={},ad={};Wt&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Qn(e){if(Io[e])return Io[e];if(!za[e])return e;var t=za[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ad)return Io[e]=t[n];return e}var ld=Qn("animationend"),id=Qn("animationiteration"),rd=Qn("animationstart"),q1=Qn("transitionrun"),V1=Qn("transitionstart"),X1=Qn("transitioncancel"),od=Qn("transitionend"),sd=new Map,es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");es.push("scrollEnd");function kt(e,t){sd.set(e,t),qn(t,[e])}var ud=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=ud.get(e);return n!==void 0?n:(t={value:e,source:t,stack:zf(t)},ud.set(e,t),t)}return{value:e,source:t,stack:zf(t)}}var zt=[],Ea=0,ts=0;function Vi(){for(var e=Ea,t=ts=Ea=0;t<e;){var n=zt[t];zt[t++]=null;var a=zt[t];zt[t++]=null;var i=zt[t];zt[t++]=null;var r=zt[t];if(zt[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&cd(n,i,r)}}function Xi(e,t,n,a){zt[Ea++]=e,zt[Ea++]=t,zt[Ea++]=n,zt[Ea++]=a,ts|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ns(e,t,n,a){return Xi(e,t,n,a),Qi(e)}function Ta(e,t){return Xi(e,null,null,t),Qi(e)}function cd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-dt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function Qi(e){if(50<ai)throw ai=0,su=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Aa={};function Q1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,a){return new Q1(e,t,n,a)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function fd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zi(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")as(e)&&(f=1);else if(typeof e=="string")f=Kb(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=mt(31,n,t,i),e.elementType=we,e.lanes=r,e;case L:return Zn(n.children,i,r,t);case G:f=8,i|=24;break;case X:return e=mt(12,n,t,i|2),e.elementType=X,e.lanes=r,e;case Z:return e=mt(13,n,t,i),e.elementType=Z,e.lanes=r,e;case le:return e=mt(19,n,t,i),e.elementType=le,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case Q:f=10;break e;case J:f=9;break e;case ae:f=11;break e;case W:f=14;break e;case Ee:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=mt(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Zn(e,t,n,a){return e=mt(7,e,a,t),e.lanes=n,e}function ls(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function is(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ma=[],Ra=0,Ki=null,$i=0,Et=[],Tt=0,Kn=null,Pt=1,It="";function $n(e,t){Ma[Ra++]=$i,Ma[Ra++]=Ki,Ki=e,$i=t}function dd(e,t,n){Et[Tt++]=Pt,Et[Tt++]=It,Et[Tt++]=Kn,Kn=e;var a=Pt;e=It;var i=32-dt(a)-1;a&=~(1<<i),n+=1;var r=32-dt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,Pt=1<<32-dt(t)+i|n<<i|a,It=r+e}else Pt=1<<r|n<<i|a,It=e}function rs(e){e.return!==null&&($n(e,1),dd(e,1,0))}function os(e){for(;e===Ki;)Ki=Ma[--Ra],Ma[Ra]=null,$i=Ma[--Ra],Ma[Ra]=null;for(;e===Kn;)Kn=Et[--Tt],Et[Tt]=null,It=Et[--Tt],Et[Tt]=null,Pt=Et[--Tt],Et[Tt]=null}var lt=null,ke=null,ge=!1,Jn=null,Lt=!1,ss=Error(u(519));function Wn(e){var t=Error(u(418,""));throw Bl(_t(t,e)),ss}function hd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[rt]=a,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)de(ii[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Af(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Oi(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Rf(t,a.value,a.defaultValue,a.children),Oi(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Rm(t.textContent,n)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=Ar),t=!0):t=!1,t||Wn(e)}function md(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:lt=lt.return}}function Cl(e){if(e!==lt)return!1;if(!ge)return md(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||_u(e.type,e.memoizedProps)),n=!n),n&&ke&&Wn(e),md(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){ke=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}ke=null}}else t===27?(t=ke,Cn(e.type)?(e=Au,Au=null,ke=e):ke=t):ke=lt?Ot(e.stateNode.nextSibling):null;return!0}function Ol(){ke=lt=null,ge=!1}function gd(){var e=Jn;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),Jn=null),e}function Bl(e){Jn===null?Jn=[e]:Jn.push(e)}var us=N(null),Fn=null,en=null;function xn(e,t,n){V(us,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=us.current,Y(us)}function cs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function fs(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var h=r;r=i;for(var x=0;x<t.length;x++)if(h.context===t[x]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),cs(r.return,n,e),a||(f=null);break e}r=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),cs(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Nl(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var h=i.type;ht(i.pendingProps.value,f.value)||(e!==null?e.push(h):e=[h])}}else if(i===Ve.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}i=i.return}e!==null&&fs(t,e,n,a),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Fn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return pd(Fn,e)}function Wi(e,t){return Fn===null&&Pn(e),pd(e,t)}function pd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(u(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var Z1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},K1=l.unstable_scheduleCallback,$1=l.unstable_NormalPriority,Le={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ds(){return{controller:new Z1,data:new Map,refCount:0}}function Ul(e){e.refCount--,e.refCount===0&&K1($1,function(){e.controller.abort()})}var Hl=null,hs=0,Da=0,ka=null;function J1(e,t){if(Hl===null){var n=Hl=[];hs=0,Da=gu(),ka={status:"pending",value:void 0,then:function(a){n.push(a)}}}return hs++,t.then(bd,bd),t}function bd(){if(--hs===0&&Hl!==null){ka!==null&&(ka.status="fulfilled");var e=Hl;Hl=null,Da=0,ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function W1(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var xd=k.S;k.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&J1(e,t),xd!==null&&xd(e,t)};var In=N(null);function ms(){var e=In.current;return e!==null?e:ze.pooledCache}function Fi(e,t){t===null?V(In,In.current):V(In,t.pool)}function vd(){var e=ms();return e===null?null:{parent:Le._currentValue,pool:e}}var Ll=Error(u(460)),yd=Error(u(474)),Pi=Error(u(542)),gs={then:function(){}};function Sd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ii(){}function jd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e}throw Gl=t,Ll}}var Gl=null;function wd(){if(Gl===null)throw Error(u(459));var e=Gl;return Gl=null,e}function _d(e){if(e===Ll||e===Pi)throw Error(u(483))}var vn=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(xe&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Qi(e),cd(e,null,n),t}return Xi(e,a,t,n),Qi(e)}function Yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bf(e,n)}}function xs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var vs=!1;function ql(){if(vs){var e=ka;if(e!==null)throw e}}function Vl(e,t,n,a){vs=!1;var i=e.updateQueue;vn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var x=h,z=x.next;x.next=null,f===null?r=z:f.next=z,f=x;var C=e.alternate;C!==null&&(C=C.updateQueue,h=C.lastBaseUpdate,h!==f&&(h===null?C.firstBaseUpdate=z:h.next=z,C.lastBaseUpdate=x))}if(r!==null){var B=i.baseState;f=0,C=z=x=null,h=r;do{var T=h.lane&-536870913,A=T!==h.lane;if(A?(he&T)===T:(a&T)===T){T!==0&&T===Da&&(vs=!0),C!==null&&(C=C.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ne=e,I=h;T=t;var je=n;switch(I.tag){case 1:if(ne=I.payload,typeof ne=="function"){B=ne.call(je,B,T);break e}B=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=I.payload,T=typeof ne=="function"?ne.call(je,B,T):ne,T==null)break e;B=E({},B,T);break e;case 2:vn=!0}}T=h.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[T]:A.push(T))}else A={lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},C===null?(z=C=A,x=B):C=C.next=A,f|=T;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;A=h,h=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);C===null&&(x=B),i.baseState=x,i.firstBaseUpdate=z,i.lastBaseUpdate=C,r===null&&(i.shared.lanes=0),Mn|=f,e.lanes=f,e.memoizedState=B}}function zd(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ed(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)zd(n[e],t)}var Ca=N(null),er=N(0);function Td(e,t){e=un,V(er,e),V(Ca,t),un=e|t.baseLanes}function ys(){V(er,un),V(Ca,Ca.current)}function Ss(){un=er.current,Y(Ca),Y(er)}var jn=0,oe=null,ye=null,Ne=null,tr=!1,Oa=!1,ea=!1,nr=0,Xl=0,Ba=null,F1=0;function Oe(){throw Error(u(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function ws(e,t,n,a,i,r){return jn=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?ch:fh,ea=!1,r=n(a,i),ea=!1,Oa&&(r=Md(t,n,a,i)),Ad(e),r}function Ad(e){k.H=sr;var t=ye!==null&&ye.next!==null;if(jn=0,Ne=ye=oe=null,tr=!1,Xl=0,Ba=null,t)throw Error(u(300));e===null||Qe||(e=e.dependencies,e!==null&&Ji(e)&&(Qe=!0))}function Md(e,t,n,a){oe=e;var i=0;do{if(Oa&&(Ba=null),Xl=0,Oa=!1,25<=i)throw Error(u(301));if(i+=1,Ne=ye=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}k.H=lb,r=t(n,a)}while(Oa);return r}function P1(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Ql(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(oe.flags|=1024),t}function _s(){var e=nr!==0;return nr=0,e}function zs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Es(e){if(tr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tr=!1}jn=0,Ne=ye=oe=null,Oa=!1,Xl=nr=0,Ba=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?oe.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Ue(){if(ye===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ne===null?oe.memoizedState:Ne.next;if(t!==null)Ne=t,ye=e;else{if(e===null)throw oe.alternate===null?Error(u(467)):Error(u(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ne===null?oe.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ql(e){var t=Xl;return Xl+=1,Ba===null&&(Ba=[]),e=jd(Ba,e,t),t=oe,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?ch:fh),e}function ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ql(e);if(e.$$typeof===Q)return et(e)}throw Error(u(438,String(e)))}function As(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ts(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=at;return t.index++,n}function nn(e,t){return typeof t=="function"?t(e):t}function lr(e){var t=Ue();return Ms(t,ye,e)}function Ms(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var h=f=null,x=null,z=t,C=!1;do{var B=z.lane&-536870913;if(B!==z.lane?(he&B)===B:(jn&B)===B){var T=z.revertLane;if(T===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),B===Da&&(C=!0);else if((jn&T)===T){z=z.next,T===Da&&(C=!0);continue}else B={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(h=x=B,f=r):x=x.next=B,oe.lanes|=T,Mn|=T;B=z.action,ea&&n(r,B),r=z.hasEagerState?z.eagerState:n(r,B)}else T={lane:B,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(h=x=T,f=r):x=x.next=T,oe.lanes|=B,Mn|=B;z=z.next}while(z!==null&&z!==t);if(x===null?f=r:x.next=h,!ht(r,e.memoizedState)&&(Qe=!0,C&&(n=ka,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=x,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Rs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);ht(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Rd(e,t,n){var a=oe,i=Ue(),r=ge;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!ht((ye||i).memoizedState,n);f&&(i.memoizedState=n,Qe=!0),i=i.queue;var h=Cd.bind(null,a,i,e);if(Zl(2048,8,h,[e]),i.getSnapshot!==t||f||Ne!==null&&Ne.memoizedState.tag&1){if(a.flags|=2048,Na(9,ir(),kd.bind(null,a,i,n,t),null),ze===null)throw Error(u(349));r||(jn&124)!==0||Dd(a,t,n)}return n}function Dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=Ts(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kd(e,t,n,a){t.value=n,t.getSnapshot=a,Od(t)&&Bd(e)}function Cd(e,t,n){return n(function(){Od(t)&&Bd(e)})}function Od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Bd(e){var t=Ta(e,2);t!==null&&vt(t,e,2)}function Ds(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ea){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:e},t}function Nd(e,t,n,a){return e.baseState=n,Ms(e,ye,typeof a=="function"?a:nn)}function I1(e,t,n,a,i){if(or(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};k.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Ud(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Ud(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=k.T,f={};k.T=f;try{var h=n(i,a),x=k.S;x!==null&&x(f,h),Hd(e,t,h)}catch(z){ks(e,t,z)}finally{k.T=r}}else try{r=n(i,a),Hd(e,t,r)}catch(z){ks(e,t,z)}}function Hd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ld(e,t,a)},function(a){return ks(e,t,a)}):Ld(e,t,n)}function Ld(e,t,n){t.status="fulfilled",t.value=n,Gd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ud(e,n)))}function ks(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Gd(t),t=t.next;while(t!==a)}e.action=null}function Gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yd(e,t){return t}function qd(e,t){if(ge){var n=ze.formState;if(n!==null){e:{var a=oe;if(ge){if(ke){t:{for(var i=ke,r=Lt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Ot(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){ke=Ot(i.nextSibling),a=i.data==="F!";break e}}Wn(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:t},n.queue=a,n=oh.bind(null,oe,a),a.dispatch=n,a=Ds(!1),r=Us.bind(null,oe,!1,a.queue),a=st(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=I1.bind(null,oe,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Vd(e){var t=Ue();return Xd(t,ye,e)}function Xd(e,t,n){if(t=Ms(e,t,Yd)[0],e=lr(nn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ql(t)}catch(f){throw f===Ll?Pi:f}else a=t;t=Ue();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,Na(9,ir(),eb.bind(null,i,n),null)),[a,r,e]}function eb(e,t){e.action=t}function Qd(e){var t=Ue(),n=ye;if(n!==null)return Xd(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Na(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Ts(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ir(){return{destroy:void 0,resource:void 0}}function Zd(){return Ue().memoizedState}function rr(e,t,n,a){var i=st();a=a===void 0?null:a,oe.flags|=e,i.memoizedState=Na(1|t,ir(),n,a)}function Zl(e,t,n,a){var i=Ue();a=a===void 0?null:a;var r=i.memoizedState.inst;ye!==null&&a!==null&&js(a,ye.memoizedState.deps)?i.memoizedState=Na(t,r,n,a):(oe.flags|=e,i.memoizedState=Na(1|t,r,n,a))}function Kd(e,t){rr(8390656,8,e,t)}function $d(e,t){Zl(2048,8,e,t)}function Jd(e,t){return Zl(4,2,e,t)}function Wd(e,t){return Zl(4,4,e,t)}function Fd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pd(e,t,n){n=n!=null?n.concat([e]):null,Zl(4,4,Fd.bind(null,t,e),n)}function Cs(){}function Id(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&js(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function eh(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&js(t,a[1]))return a[0];if(a=e(),ea){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[a,t],a}function Os(e,t,n){return n===void 0||(jn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=am(),oe.lanes|=e,Mn|=e,n)}function th(e,t,n,a){return ht(n,t)?n:Ca.current!==null?(e=Os(e,n,a),ht(e,t)||(Qe=!0),e):(jn&42)===0?(Qe=!0,e.memoizedState=n):(e=am(),oe.lanes|=e,Mn|=e,t)}function nh(e,t,n,a,i){var r=q.p;q.p=r!==0&&8>r?r:8;var f=k.T,h={};k.T=h,Us(e,!1,t,n);try{var x=i(),z=k.S;if(z!==null&&z(h,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var C=W1(x,a);Kl(e,t,C,xt(e))}else Kl(e,t,a,xt(e))}catch(B){Kl(e,t,{then:function(){},status:"rejected",reason:B},xt())}finally{q.p=r,k.T=f}}function tb(){}function Bs(e,t,n,a){if(e.tag!==5)throw Error(u(476));var i=ah(e).queue;nh(e,i,t,P,n===null?tb:function(){return lh(e),n(a)})}function ah(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lh(e){var t=ah(e).next.queue;Kl(e,t,{},xt())}function Ns(){return et(fi)}function ih(){return Ue().memoizedState}function rh(){return Ue().memoizedState}function nb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xt();e=yn(n);var a=Sn(t,e,n);a!==null&&(vt(a,t,n),Yl(a,t,n)),t={cache:ds()},e.payload=t;return}t=t.return}}function ab(e,t,n){var a=xt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},or(e)?sh(t,n):(n=ns(e,t,n,a),n!==null&&(vt(n,e,a),uh(n,t,a)))}function oh(e,t,n){var a=xt();Kl(e,t,n,a)}function Kl(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(or(e))sh(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,h=r(f,n);if(i.hasEagerState=!0,i.eagerState=h,ht(h,f))return Xi(e,t,i,0),ze===null&&Vi(),!1}catch{}finally{}if(n=ns(e,t,i,a),n!==null)return vt(n,e,a),uh(n,t,a),!0}return!1}function Us(e,t,n,a){if(a={lane:2,revertLane:gu(),action:a,hasEagerState:!1,eagerState:null,next:null},or(e)){if(t)throw Error(u(479))}else t=ns(e,n,a,2),t!==null&&vt(t,e,2)}function or(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function sh(e,t){Oa=tr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,bf(e,n)}}var sr={readContext:et,use:ar,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe},ch={readContext:et,use:ar,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Kd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rr(4194308,4,Fd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rr(4194308,4,e,t)},useInsertionEffect:function(e,t){rr(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(ea){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var i=n(t);if(ea){gn(!0);try{n(t)}finally{gn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=ab.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Ds(e);var t=e.queue,n=oh.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cs,useDeferredValue:function(e,t){var n=st();return Os(n,e,t)},useTransition:function(){var e=Ds(!1);return e=nh.bind(null,oe,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=oe,i=st();if(ge){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),ze===null)throw Error(u(349));(he&124)!==0||Dd(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,Kd(Cd.bind(null,a,r,e),[e]),a.flags|=2048,Na(9,ir(),kd.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=ze.identifierPrefix;if(ge){var n=It,a=Pt;n=(a&~(1<<32-dt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=F1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ns,useFormState:qd,useActionState:qd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Us.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:As,useCacheRefresh:function(){return st().memoizedState=nb.bind(null,oe)}},fh={readContext:et,use:ar,useCallback:Id,useContext:et,useEffect:$d,useImperativeHandle:Pd,useInsertionEffect:Jd,useLayoutEffect:Wd,useMemo:eh,useReducer:lr,useRef:Zd,useState:function(){return lr(nn)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=Ue();return th(n,ye.memoizedState,e,t)},useTransition:function(){var e=lr(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ql(e),t]},useSyncExternalStore:Rd,useId:ih,useHostTransitionStatus:Ns,useFormState:Vd,useActionState:Vd,useOptimistic:function(e,t){var n=Ue();return Nd(n,ye,e,t)},useMemoCache:As,useCacheRefresh:rh},lb={readContext:et,use:ar,useCallback:Id,useContext:et,useEffect:$d,useImperativeHandle:Pd,useInsertionEffect:Jd,useLayoutEffect:Wd,useMemo:eh,useReducer:Rs,useRef:Zd,useState:function(){return Rs(nn)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=Ue();return ye===null?Os(n,e,t):th(n,ye.memoizedState,e,t)},useTransition:function(){var e=Rs(nn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Ql(e),t]},useSyncExternalStore:Rd,useId:ih,useHostTransitionStatus:Ns,useFormState:Qd,useActionState:Qd,useOptimistic:function(e,t){var n=Ue();return ye!==null?Nd(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:As,useCacheRefresh:rh},Ua=null,$l=0;function ur(e){var t=$l;return $l+=1,Ua===null&&(Ua=[]),jd(Ua,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cr(e,t){throw t.$$typeof===M?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dh(e){var t=e._init;return t(e._payload)}function hh(e){function t(w,S){if(e){var _=w.deletions;_===null?(w.deletions=[S],w.flags|=16):_.push(S)}}function n(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function a(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(w,S){return w=Ft(w,S),w.index=0,w.sibling=null,w}function r(w,S,_){return w.index=_,e?(_=w.alternate,_!==null?(_=_.index,_<S?(w.flags|=67108866,S):_):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function f(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function h(w,S,_,O){return S===null||S.tag!==6?(S=ls(_,w.mode,O),S.return=w,S):(S=i(S,_),S.return=w,S)}function x(w,S,_,O){var K=_.type;return K===L?C(w,S,_.props.children,O,_.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&dh(K)===S.type)?(S=i(S,_.props),Jl(S,_),S.return=w,S):(S=Zi(_.type,_.key,_.props,null,w.mode,O),Jl(S,_),S.return=w,S)}function z(w,S,_,O){return S===null||S.tag!==4||S.stateNode.containerInfo!==_.containerInfo||S.stateNode.implementation!==_.implementation?(S=is(_,w.mode,O),S.return=w,S):(S=i(S,_.children||[]),S.return=w,S)}function C(w,S,_,O,K){return S===null||S.tag!==7?(S=Zn(_,w.mode,O,K),S.return=w,S):(S=i(S,_),S.return=w,S)}function B(w,S,_){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ls(""+S,w.mode,_),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case D:return _=Zi(S.type,S.key,S.props,null,w.mode,_),Jl(_,S),_.return=w,_;case H:return S=is(S,w.mode,_),S.return=w,S;case Ee:var O=S._init;return S=O(S._payload),B(w,S,_)}if(qe(S)||Ye(S))return S=Zn(S,w.mode,_,null),S.return=w,S;if(typeof S.then=="function")return B(w,ur(S),_);if(S.$$typeof===Q)return B(w,Wi(w,S),_);cr(w,S)}return null}function T(w,S,_,O){var K=S!==null?S.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return K!==null?null:h(w,S,""+_,O);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case D:return _.key===K?x(w,S,_,O):null;case H:return _.key===K?z(w,S,_,O):null;case Ee:return K=_._init,_=K(_._payload),T(w,S,_,O)}if(qe(_)||Ye(_))return K!==null?null:C(w,S,_,O,null);if(typeof _.then=="function")return T(w,S,ur(_),O);if(_.$$typeof===Q)return T(w,S,Wi(w,_),O);cr(w,_)}return null}function A(w,S,_,O,K){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return w=w.get(_)||null,h(S,w,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case D:return w=w.get(O.key===null?_:O.key)||null,x(S,w,O,K);case H:return w=w.get(O.key===null?_:O.key)||null,z(S,w,O,K);case Ee:var se=O._init;return O=se(O._payload),A(w,S,_,O,K)}if(qe(O)||Ye(O))return w=w.get(_)||null,C(S,w,O,K,null);if(typeof O.then=="function")return A(w,S,_,ur(O),K);if(O.$$typeof===Q)return A(w,S,_,Wi(S,O),K);cr(S,O)}return null}function ne(w,S,_,O){for(var K=null,se=null,$=S,te=S=0,Ke=null;$!==null&&te<_.length;te++){$.index>te?(Ke=$,$=null):Ke=$.sibling;var me=T(w,$,_[te],O);if(me===null){$===null&&($=Ke);break}e&&$&&me.alternate===null&&t(w,$),S=r(me,S,te),se===null?K=me:se.sibling=me,se=me,$=Ke}if(te===_.length)return n(w,$),ge&&$n(w,te),K;if($===null){for(;te<_.length;te++)$=B(w,_[te],O),$!==null&&(S=r($,S,te),se===null?K=$:se.sibling=$,se=$);return ge&&$n(w,te),K}for($=a($);te<_.length;te++)Ke=A($,w,te,_[te],O),Ke!==null&&(e&&Ke.alternate!==null&&$.delete(Ke.key===null?te:Ke.key),S=r(Ke,S,te),se===null?K=Ke:se.sibling=Ke,se=Ke);return e&&$.forEach(function(Hn){return t(w,Hn)}),ge&&$n(w,te),K}function I(w,S,_,O){if(_==null)throw Error(u(151));for(var K=null,se=null,$=S,te=S=0,Ke=null,me=_.next();$!==null&&!me.done;te++,me=_.next()){$.index>te?(Ke=$,$=null):Ke=$.sibling;var Hn=T(w,$,me.value,O);if(Hn===null){$===null&&($=Ke);break}e&&$&&Hn.alternate===null&&t(w,$),S=r(Hn,S,te),se===null?K=Hn:se.sibling=Hn,se=Hn,$=Ke}if(me.done)return n(w,$),ge&&$n(w,te),K;if($===null){for(;!me.done;te++,me=_.next())me=B(w,me.value,O),me!==null&&(S=r(me,S,te),se===null?K=me:se.sibling=me,se=me);return ge&&$n(w,te),K}for($=a($);!me.done;te++,me=_.next())me=A($,w,te,me.value,O),me!==null&&(e&&me.alternate!==null&&$.delete(me.key===null?te:me.key),S=r(me,S,te),se===null?K=me:se.sibling=me,se=me);return e&&$.forEach(function(ix){return t(w,ix)}),ge&&$n(w,te),K}function je(w,S,_,O){if(typeof _=="object"&&_!==null&&_.type===L&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case D:e:{for(var K=_.key;S!==null;){if(S.key===K){if(K=_.type,K===L){if(S.tag===7){n(w,S.sibling),O=i(S,_.props.children),O.return=w,w=O;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ee&&dh(K)===S.type){n(w,S.sibling),O=i(S,_.props),Jl(O,_),O.return=w,w=O;break e}n(w,S);break}else t(w,S);S=S.sibling}_.type===L?(O=Zn(_.props.children,w.mode,O,_.key),O.return=w,w=O):(O=Zi(_.type,_.key,_.props,null,w.mode,O),Jl(O,_),O.return=w,w=O)}return f(w);case H:e:{for(K=_.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===_.containerInfo&&S.stateNode.implementation===_.implementation){n(w,S.sibling),O=i(S,_.children||[]),O.return=w,w=O;break e}else{n(w,S);break}else t(w,S);S=S.sibling}O=is(_,w.mode,O),O.return=w,w=O}return f(w);case Ee:return K=_._init,_=K(_._payload),je(w,S,_,O)}if(qe(_))return ne(w,S,_,O);if(Ye(_)){if(K=Ye(_),typeof K!="function")throw Error(u(150));return _=K.call(_),I(w,S,_,O)}if(typeof _.then=="function")return je(w,S,ur(_),O);if(_.$$typeof===Q)return je(w,S,Wi(w,_),O);cr(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,S!==null&&S.tag===6?(n(w,S.sibling),O=i(S,_),O.return=w,w=O):(n(w,S),O=ls(_,w.mode,O),O.return=w,w=O),f(w)):n(w,S)}return function(w,S,_,O){try{$l=0;var K=je(w,S,_,O);return Ua=null,K}catch($){if($===Ll||$===Pi)throw $;var se=mt(29,$,null,w.mode);return se.lanes=O,se.return=w,se}finally{}}}var Ha=hh(!0),mh=hh(!1),At=N(null),Gt=null;function wn(e){var t=e.alternate;V(Ge,Ge.current&1),V(At,e),Gt===null&&(t===null||Ca.current!==null||t.memoizedState!==null)&&(Gt=e)}function gh(e){if(e.tag===22){if(V(Ge,Ge.current),V(At,e),Gt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Gt=e)}}else _n()}function _n(){V(Ge,Ge.current),V(At,At.current)}function an(e){Y(At),Gt===e&&(Gt=null),Y(Ge)}var Ge=N(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Tu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Hs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=xt(),i=yn(a);i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Yl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=xt(),i=yn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sn(e,i,a),t!==null&&(vt(t,e,a),Yl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xt(),a=yn(n);a.tag=2,t!=null&&(a.callback=t),t=Sn(e,a,n),t!==null&&(vt(t,e,n),Yl(t,e,n))}};function ph(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Dl(n,a)||!Dl(i,r):!0}function bh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=E({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var dr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xh(e){dr(e)}function vh(e){console.error(e)}function yh(e){dr(e)}function hr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Sh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Gs(e,t,n){return n=yn(n),n.tag=3,n.payload={element:null},n.callback=function(){hr(e,t)},n}function jh(e){return e=yn(e),e.tag=3,e}function wh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){Sh(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Sh(t,n,a),typeof i!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function ib(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Nl(t,n,i,!0),n=At.current,n!==null){switch(n.tag){case 13:return Gt===null?cu():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===gs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),du(e,a,i)),!1;case 22:return n.flags|=65536,a===gs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),du(e,a,i)),!1}throw Error(u(435,n.tag))}return du(e,a,i),cu(),!1}if(ge)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==ss&&(e=Error(u(422),{cause:a}),Bl(_t(e,n)))):(a!==ss&&(t=Error(u(423),{cause:a}),Bl(_t(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=_t(a,n),i=Gs(e.stateNode,a,i),xs(e,i),Ce!==4&&(Ce=2)),!1;var r=Error(u(520),{cause:a});if(r=_t(r,n),ni===null?ni=[r]:ni.push(r),Ce!==4&&(Ce=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Gs(n.stateNode,a,e),xs(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=jh(i),wh(i,e,n,a),xs(n,i),!1}n=n.return}while(n!==null);return!1}var _h=Error(u(461)),Qe=!1;function Je(e,t,n,a){t.child=e===null?mh(t,null,n,a):Ha(t,e.child,n,a)}function zh(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var h in a)h!=="ref"&&(f[h]=a[h])}else f=a;return Pn(t),a=ws(e,t,n,f,r,i),h=_s(),e!==null&&!Qe?(zs(e,t,i),ln(e,t,i)):(ge&&h&&rs(t),t.flags|=1,Je(e,t,a,i),t.child)}function Eh(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!as(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Th(e,t,r,a,i)):(e=Zi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!$s(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Dl,n(f,a)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function Th(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Dl(r,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=r,$s(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ln(e,t,i)}return Ys(e,t,n,a,i)}function Ah(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return Mh(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fi(t,r!==null?r.cachePool:null),r!==null?Td(t,r):ys(),gh(t);else return t.lanes=t.childLanes=536870912,Mh(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Fi(t,r.cachePool),Td(t,r),_n(),t.memoizedState=null):(e!==null&&Fi(t,null),ys(),_n());return Je(e,t,i,n),t.child}function Mh(e,t,n,a){var i=ms();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Fi(t,null),ys(),gh(t),e!==null&&Nl(e,t,a,!0),null}function mr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ys(e,t,n,a,i){return Pn(t),n=ws(e,t,n,a,void 0,i),a=_s(),e!==null&&!Qe?(zs(e,t,i),ln(e,t,i)):(ge&&a&&rs(t),t.flags|=1,Je(e,t,n,i),t.child)}function Rh(e,t,n,a,i,r){return Pn(t),t.updateQueue=null,n=Md(t,a,n,i),Ad(e),a=_s(),e!==null&&!Qe?(zs(e,t,r),ln(e,t,r)):(ge&&a&&rs(t),t.flags|=1,Je(e,t,n,r),t.child)}function Dh(e,t,n,a,i){if(Pn(t),t.stateNode===null){var r=Aa,f=n.contextType;typeof f=="object"&&f!==null&&(r=et(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ls,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},ps(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?et(f):Aa,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Hs(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Ls.enqueueReplaceState(r,r.state,null),Vl(t,a,r,i),ql(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var h=t.memoizedProps,x=ta(n,h);r.props=x;var z=r.context,C=n.contextType;f=Aa,typeof C=="object"&&C!==null&&(f=et(C));var B=n.getDerivedStateFromProps;C=typeof B=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,C||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||z!==f)&&bh(t,r,a,f),vn=!1;var T=t.memoizedState;r.state=T,Vl(t,a,r,i),ql(),z=t.memoizedState,h||T!==z||vn?(typeof B=="function"&&(Hs(t,n,B,a),z=t.memoizedState),(x=vn||ph(t,n,x,a,T,z,f))?(C||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),r.props=a,r.state=z,r.context=f,a=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,bs(e,t),f=t.memoizedProps,C=ta(n,f),r.props=C,B=t.pendingProps,T=r.context,z=n.contextType,x=Aa,typeof z=="object"&&z!==null&&(x=et(z)),h=n.getDerivedStateFromProps,(z=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==B||T!==x)&&bh(t,r,a,x),vn=!1,T=t.memoizedState,r.state=T,Vl(t,a,r,i),ql();var A=t.memoizedState;f!==B||T!==A||vn||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof h=="function"&&(Hs(t,n,h,a),A=t.memoizedState),(C=vn||ph(t,n,C,a,T,A,x)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(z||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=x,a=C):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,mr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):Je(e,t,n,i),t.memoizedState=r.state,e=t.child):e=ln(e,t,i),e}function kh(e,t,n,a){return Ol(),t.flags|=256,Je(e,t,n,a),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vs(e){return{baseLanes:e,cachePool:vd()}}function Xs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Mt),e}function Ch(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?wn(t):_n(),ge){var h=ke,x;if(x=h){e:{for(x=h,h=Lt;x.nodeType!==8;){if(!h){h=null;break e}if(x=Ot(x.nextSibling),x===null){h=null;break e}}h=x}h!==null?(t.memoizedState={dehydrated:h,treeContext:Kn!==null?{id:Pt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},x=mt(18,null,null,0),x.stateNode=h,x.return=t,t.child=x,lt=t,ke=null,x=!0):x=!1}x||Wn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Tu(h)?t.lanes=32:t.lanes=536870912,null;an(t)}return h=a.children,a=a.fallback,i?(_n(),i=t.mode,h=gr({mode:"hidden",children:h},i),a=Zn(a,i,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,i=t.child,i.memoizedState=Vs(n),i.childLanes=Xs(e,f,n),t.memoizedState=qs,a):(wn(t),Qs(t,h))}if(x=e.memoizedState,x!==null&&(h=x.dehydrated,h!==null)){if(r)t.flags&256?(wn(t),t.flags&=-257,t=Zs(e,t,n)):t.memoizedState!==null?(_n(),t.child=e.child,t.flags|=128,t=null):(_n(),i=a.fallback,h=t.mode,a=gr({mode:"visible",children:a.children},h),i=Zn(i,h,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Ha(t,e.child,null,n),a=t.child,a.memoizedState=Vs(n),a.childLanes=Xs(e,f,n),t.memoizedState=qs,t=i);else if(wn(t),Tu(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var z=f.dgst;f=z,a=Error(u(419)),a.stack="",a.digest=f,Bl({value:a,source:null,stack:null}),t=Zs(e,t,n)}else if(Qe||Nl(e,t,n,!1),f=(n&e.childLanes)!==0,Qe||f){if(f=ze,f!==null&&(a=n&-n,a=(a&42)!==0?1:Ao(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==x.retryLane))throw x.retryLane=a,Ta(e,a),vt(f,e,a),_h;h.data==="$?"||cu(),t=Zs(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,ke=Ot(h.nextSibling),lt=t,ge=!0,Jn=null,Lt=!1,e!==null&&(Et[Tt++]=Pt,Et[Tt++]=It,Et[Tt++]=Kn,Pt=e.id,It=e.overflow,Kn=t),t=Qs(t,a.children),t.flags|=4096);return t}return i?(_n(),i=a.fallback,h=t.mode,x=e.child,z=x.sibling,a=Ft(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,z!==null?i=Ft(z,i):(i=Zn(i,h,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,h=e.child.memoizedState,h===null?h=Vs(n):(x=h.cachePool,x!==null?(z=Le._currentValue,x=x.parent!==z?{parent:z,pool:z}:x):x=vd(),h={baseLanes:h.baseLanes|n,cachePool:x}),i.memoizedState=h,i.childLanes=Xs(e,f,n),t.memoizedState=qs,a):(wn(t),n=e.child,e=n.sibling,n=Ft(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Qs(e,t){return t=gr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gr(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Zs(e,t,n){return Ha(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),cs(e.return,t,n)}function Ks(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function Bh(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if(Je(e,t,a.children,n),a=Ge.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,n,t);else if(e.tag===19)Oh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(V(Ge,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ks(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ks(t,!0,n,null,r);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Nl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $s(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function rb(e,t,n){switch(t.tag){case 3:pe(t,t.stateNode.containerInfo),xn(t,Le,e.memoizedState.cache),Ol();break;case 27:case 5:Gn(t);break;case 4:pe(t,t.stateNode.containerInfo);break;case 10:xn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ch(e,t,n):(wn(t),e=ln(e,t,n),e!==null?e.sibling:null);wn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Nl(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return Bh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Ge,Ge.current),a)break;return null;case 22:case 23:return t.lanes=0,Ah(e,t,n);case 24:xn(t,Le,e.memoizedState.cache)}return ln(e,t,n)}function Nh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!$s(e,n)&&(t.flags&128)===0)return Qe=!1,rb(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,ge&&(t.flags&1048576)!==0&&dd(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")as(a)?(e=ta(a,e),t.tag=1,t=Dh(null,t,a,e,n)):(t.tag=0,t=Ys(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===ae){t.tag=11,t=zh(null,t,a,e,n);break e}else if(i===W){t.tag=14,t=Eh(null,t,a,e,n);break e}}throw t=Kt(a)||a,Error(u(306,t,""))}}return t;case 0:return Ys(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ta(a,t.pendingProps),Dh(e,t,a,i,n);case 3:e:{if(pe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,bs(e,t),Vl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,xn(t,Le,a),a!==r.cache&&fs(t,[Le],n,!0),ql(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=kh(e,t,a,n);break e}else if(a!==i){i=_t(Error(u(424)),t),Bl(i),t=kh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=Ot(e.firstChild),lt=t,ge=!0,Jn=null,Lt=!0,n=mh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ol(),a===i){t=ln(e,t,n);break e}Je(e,t,a,n)}t=t.child}return t;case 26:return mr(e,t),e===null?(n=Gm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=Mr(ee.current).createElement(n),a[Ie]=t,a[rt]=e,Fe(a,n,e),Xe(a),t.stateNode=a):t.memoizedState=Gm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&ge&&(a=t.stateNode=Um(t.type,t.pendingProps,ee.current),lt=t,Lt=!0,i=ke,Cn(t.type)?(Au=i,ke=Ot(a.firstChild)):ke=i),Je(e,t,t.pendingProps.children,n),mr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=a=ke)&&(a=Ob(a,t.type,t.pendingProps,Lt),a!==null?(t.stateNode=a,lt=t,ke=Ot(a.firstChild),Lt=!1,i=!0):i=!1),i||Wn(t)),Gn(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,_u(i,r)?a=null:f!==null&&_u(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=ws(e,t,P1,null,null,n),fi._currentValue=i),mr(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=ke)&&(n=Bb(n,t.pendingProps,Lt),n!==null?(t.stateNode=n,lt=t,ke=null,e=!0):e=!1),e||Wn(t)),null;case 13:return Ch(e,t,n);case 4:return pe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ha(t,null,a,n):Je(e,t,a,n),t.child;case 11:return zh(e,t,t.type,t.pendingProps,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,xn(t,t.type,a.value),Je(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Pn(t),i=et(i),a=a(i),t.flags|=1,Je(e,t,a,n),t.child;case 14:return Eh(e,t,t.type,t.pendingProps,n);case 15:return Th(e,t,t.type,t.pendingProps,n);case 19:return Bh(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=gr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ft(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ah(e,t,n);case 24:return Pn(t),a=et(Le),e===null?(i=ms(),i===null&&(i=ze,r=ds(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},ps(t),xn(t,Le,i)):((e.lanes&n)!==0&&(bs(e,t),Vl(t,null,null,n),ql()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),xn(t,Le,a)):(a=r.cache,xn(t,Le,a),a!==i.cache&&fs(t,[Le],n,!0))),Je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function rn(e){e.flags|=4}function Uh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(t)){if(t=At.current,t!==null&&((he&4194048)===he?Gt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Gt))throw Gl=gs,yd;e.flags|=8192}}function pr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gf():536870912,e.lanes|=t,qa|=t)}function Wl(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ob(e,t,n){var a=t.pendingProps;switch(os(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),tn(Le),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Cl(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gd())),De(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(De(t),Uh(t,n)):(De(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),De(t),Uh(t,n)):(De(t),t.flags&=-16777217):(e.memoizedProps!==a&&rn(t),De(t),t.flags&=-16777217),null;case 27:$t(t),n=ee.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}e=F.current,Cl(t)?hd(t):(e=Um(i,a,n),t.stateNode=e,rn(t))}return De(t),null;case 5:if($t(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return De(t),null}if(e=F.current,Cl(t))hd(t);else{switch(i=Mr(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[Ie]=t,e[rt]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&rn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ee.current,Cl(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=lt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Rm(e.nodeValue,n)),e||Wn(t)}else e=Mr(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return De(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Cl(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ie]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(an(t),t):(an(t),null)}if(an(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),pr(t,t.updateQueue),De(t),null;case 4:return Pe(),e===null&&vu(t.stateNode.containerInfo),De(t),null;case 10:return tn(t.type),De(t),null;case 19:if(Y(Ge),i=t.memoizedState,i===null)return De(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Wl(i,!1);else{if(Ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=fr(e),r!==null){for(t.flags|=128,Wl(i,!1),e=r.updateQueue,t.updateQueue=e,pr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)fd(n,e),n=n.sibling;return V(Ge,Ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ht()>vr&&(t.flags|=128,a=!0,Wl(i,!1),t.lanes=4194304)}else{if(!a)if(e=fr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,pr(t,e),Wl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ge)return De(t),null}else 2*Ht()-i.renderingStartTime>vr&&n!==536870912&&(t.flags|=128,a=!0,Wl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ht(),t.sibling=null,e=Ge.current,V(Ge,a?e&1|2:e&1),t):(De(t),null);case 22:case 23:return an(t),Ss(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&pr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Y(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(Le),De(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function sb(e,t){switch(os(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(Le),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $t(t),null;case 13:if(an(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Ge),null;case 4:return Pe(),null;case 10:return tn(t.type),null;case 22:case 23:return an(t),Ss(),e!==null&&Y(In),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(Le),null;case 25:return null;default:return null}}function Hh(e,t){switch(os(t),t.tag){case 3:tn(Le),Pe();break;case 26:case 27:case 5:$t(t);break;case 4:Pe();break;case 13:an(t);break;case 19:Y(Ge);break;case 10:tn(t.type);break;case 22:case 23:an(t),Ss(),e!==null&&Y(In);break;case 24:tn(Le)}}function Fl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(h){_e(t,t.return,h)}}function zn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=t;var x=n,z=h;try{z()}catch(C){_e(i,x,C)}}}a=a.next}while(a!==r)}}catch(C){_e(t,t.return,C)}}function Lh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ed(t,n)}catch(a){_e(e,e.return,a)}}}function Gh(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function Pl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){_e(e,t,i)}}function Yt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){_e(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){_e(e,t,i)}else n.current=null}function Yh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){_e(e,e.return,i)}}function Js(e,t,n){try{var a=e.stateNode;Mb(a,e.type,n,t),a[rt]=t}catch(i){_e(e,e.return,i)}}function qh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cn(e.type)||e.tag===4}function Ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ar));else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function br(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Cn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(br(e,t,n),e=e.sibling;e!==null;)br(e,t,n),e=e.sibling}function Vh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fe(t,a,n),t[Ie]=e,t[rt]=n}catch(r){_e(e,e.return,r)}}var on=!1,Be=!1,Ps=!1,Xh=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function ub(e,t){if(e=e.containerInfo,ju=Br,e=td(e),Wo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,h=-1,x=-1,z=0,C=0,B=e,T=null;t:for(;;){for(var A;B!==n||i!==0&&B.nodeType!==3||(h=f+i),B!==r||a!==0&&B.nodeType!==3||(x=f+a),B.nodeType===3&&(f+=B.nodeValue.length),(A=B.firstChild)!==null;)T=B,B=A;for(;;){if(B===e)break t;if(T===n&&++z===i&&(h=f),T===r&&++C===a&&(x=f),(A=B.nextSibling)!==null)break;B=T,T=B.parentNode}B=A}n=h===-1||x===-1?null:{start:h,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},Br=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ne=ta(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ne,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(I){_e(n,n.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Eu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Qh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),a&4&&Fl(5,n);break;case 1:if(En(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var i=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}a&64&&Lh(n),a&512&&Pl(n,n.return);break;case 3:if(En(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ed(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&a&4&&Vh(n);case 26:case 5:En(e,n),t===null&&a&4&&Yh(n),a&512&&Pl(n,n.return);break;case 12:En(e,n);break;case 13:En(e,n),a&4&&$h(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=xb.bind(null,n),Nb(e,n))));break;case 22:if(a=n.memoizedState!==null||on,!a){t=t!==null&&t.memoizedState!==null||Be,i=on;var r=Be;on=a,(Be=t)&&!r?Tn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),on=i,Be=r}break;case 30:break;default:En(e,n)}}function Zh(e){var t=e.alternate;t!==null&&(e.alternate=null,Zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Do(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,ut=!1;function sn(e,t,n){for(n=n.child;n!==null;)Kh(e,t,n),n=n.sibling}function Kh(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 26:Be||Yt(n,t),sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Be||Yt(n,t);var a=Ae,i=ut;Cn(n.type)&&(Ae=n.stateNode,ut=!1),sn(e,t,n),oi(n.stateNode),Ae=a,ut=i;break;case 5:Be||Yt(n,t);case 6:if(a=Ae,i=ut,Ae=null,sn(e,t,n),Ae=a,ut=i,Ae!==null)if(ut)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){_e(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){_e(n,t,r)}break;case 18:Ae!==null&&(ut?(e=Ae,Bm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),gi(e)):Bm(Ae,n.stateNode));break;case 4:a=Ae,i=ut,Ae=n.stateNode.containerInfo,ut=!0,sn(e,t,n),Ae=a,ut=i;break;case 0:case 11:case 14:case 15:Be||zn(2,n,t),Be||zn(4,n,t),sn(e,t,n);break;case 1:Be||(Yt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Gh(n,t,a)),sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:Be=(a=Be)||n.memoizedState!==null,sn(e,t,n),Be=a;break;default:sn(e,t,n)}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gi(e)}catch(n){_e(t,t.return,n)}}function cb(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xh),t;default:throw Error(u(435,e.tag))}}function Is(e,t){var n=cb(e);t.forEach(function(a){var i=vb.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,h=f;e:for(;h!==null;){switch(h.tag){case 27:if(Cn(h.type)){Ae=h.stateNode,ut=!1;break e}break;case 5:Ae=h.stateNode,ut=!1;break e;case 3:case 4:Ae=h.stateNode.containerInfo,ut=!0;break e}h=h.return}if(Ae===null)throw Error(u(160));Kh(r,f,i),Ae=null,ut=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Jh(t,e),t=t.sibling}var Ct=null;function Jh(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),pt(e),a&4&&(zn(3,e,e.return),Fl(3,e),zn(5,e,e.return));break;case 1:gt(t,e),pt(e),a&512&&(Be||n===null||Yt(n,n.return)),a&64&&on&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ct;if(gt(t,e),pt(e),a&512&&(Be||n===null||Yt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[jl]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Fe(r,a,n),r[Ie]=e,Xe(r),a=r;break e;case"link":var f=Vm("link","href",i).get(a+(n.href||""));if(f){for(var h=0;h<f.length;h++)if(r=f[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;case"meta":if(f=Vm("meta","content",i).get(a+(n.content||""))){for(h=0;h<f.length;h++)if(r=f[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(h,1);break t}}r=i.createElement(a),Fe(r,a,n),i.head.appendChild(r);break;default:throw Error(u(468,a))}r[Ie]=e,Xe(r),a=r}e.stateNode=a}else Xm(i,e.type,e.stateNode);else e.stateNode=qm(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Xm(i,e.type,e.stateNode):qm(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Js(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),pt(e),a&512&&(Be||n===null||Yt(n,n.return)),n!==null&&a&4&&Js(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),pt(e),a&512&&(Be||n===null||Yt(n,n.return)),e.flags&32){i=e.stateNode;try{ya(i,"")}catch(A){_e(e,e.return,A)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Js(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Ps=!0);break;case 6:if(gt(t,e),pt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(A){_e(e,e.return,A)}}break;case 3:if(kr=null,i=Ct,Ct=Rr(t.containerInfo),gt(t,e),Ct=i,pt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(A){_e(e,e.return,A)}Ps&&(Ps=!1,Wh(e));break;case 4:a=Ct,Ct=Rr(e.stateNode.containerInfo),gt(t,e),pt(e),Ct=a;break;case 12:gt(t,e),pt(e);break;case 13:gt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(iu=Ht()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 22:i=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,z=on,C=Be;if(on=z||i,Be=C||x,gt(t,e),Be=C,on=z,pt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||x||on||Be||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(r=x.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=x.stateNode;var B=x.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null;h.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(A){_e(x,x.return,A)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(A){_e(x,x.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Is(e,n))));break;case 19:gt(t,e),pt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Is(e,a)));break;case 30:break;case 21:break;default:gt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(qh(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,r=Ws(e);br(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(ya(f,""),n.flags&=-33);var h=Ws(e);br(e,h,f);break;case 3:case 4:var x=n.stateNode.containerInfo,z=Ws(e);Fs(e,z,x);break;default:throw Error(u(161))}}catch(C){_e(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qh(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:zn(4,t,t.return),na(t);break;case 1:Yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gh(t,t.return,n),na(t);break;case 27:oi(t.stateNode);case 26:case 5:Yt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:Tn(i,r,n),Fl(4,r);break;case 1:if(Tn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){_e(a,a.return,z)}if(a=r,i=a.updateQueue,i!==null){var h=a.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)zd(x[i],h)}catch(z){_e(a,a.return,z)}}n&&f&64&&Lh(r),Pl(r,r.return);break;case 27:Vh(r);case 26:case 5:Tn(i,r,n),n&&a===null&&f&4&&Yh(r),Pl(r,r.return);break;case 12:Tn(i,r,n);break;case 13:Tn(i,r,n),n&&f&4&&$h(i,r);break;case 22:r.memoizedState===null&&Tn(i,r,n),Pl(r,r.return);break;case 30:break;default:Tn(i,r,n)}t=t.sibling}}function eu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ul(n))}function tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fh(e,t,n,a),t=t.sibling}function Fh(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),i&2048&&Fl(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e)));break;case 12:if(i&2048){qt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,h=r.onPostCommit;typeof h=="function"&&h(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){_e(t,t.return,x)}}else qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?qt(e,t,n,a):Il(e,t):r._visibility&2?qt(e,t,n,a):(r._visibility|=2,La(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&eu(f,t);break;case 24:qt(e,t,n,a),i&2048&&tu(t.alternate,t);break;default:qt(e,t,n,a)}}function La(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,h=n,x=a,z=f.flags;switch(f.tag){case 0:case 11:case 15:La(r,f,h,x,i),Fl(8,f);break;case 23:break;case 22:var C=f.stateNode;f.memoizedState!==null?C._visibility&2?La(r,f,h,x,i):Il(r,f):(C._visibility|=2,La(r,f,h,x,i)),i&&z&2048&&eu(f.alternate,f);break;case 24:La(r,f,h,x,i),i&&z&2048&&tu(f.alternate,f);break;default:La(r,f,h,x,i)}t=t.sibling}}function Il(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Il(n,a),i&2048&&eu(a.alternate,a);break;case 24:Il(n,a),i&2048&&tu(a.alternate,a);break;default:Il(n,a)}t=t.sibling}}var ei=8192;function Ga(e){if(e.subtreeFlags&ei)for(e=e.child;e!==null;)Ph(e),e=e.sibling}function Ph(e){switch(e.tag){case 26:Ga(e),e.flags&ei&&e.memoizedState!==null&&Jb(Ct,e.memoizedState,e.memoizedProps);break;case 5:Ga(e);break;case 3:case 4:var t=Ct;Ct=Rr(e.stateNode.containerInfo),Ga(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ei,ei=16777216,Ga(e),ei=t):Ga(e));break;default:Ga(e)}}function Ih(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,tm(a,e)}Ih(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)em(e),e=e.sibling}function em(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&zn(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xr(e)):ti(e);break;default:ti(e)}}function xr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ze=a,tm(a,e)}Ih(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:zn(8,t,t.return),xr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,xr(t));break;default:xr(t)}e=e.sibling}}function tm(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ul(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ze=a;else e:for(n=e;Ze!==null;){a=Ze;var i=a.sibling,r=a.return;if(Zh(a),a===n){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var fb={getCacheForType:function(e){var t=et(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},db=typeof WeakMap=="function"?WeakMap:Map,xe=0,ze=null,fe=null,he=0,ve=0,bt=null,An=!1,Ya=!1,nu=!1,un=0,Ce=0,Mn=0,aa=0,au=0,Mt=0,qa=0,ni=null,ct=null,lu=!1,iu=0,vr=1/0,yr=null,Rn=null,We=0,Dn=null,Va=null,Xa=0,ru=0,ou=null,nm=null,ai=0,su=null;function xt(){if((xe&2)!==0&&he!==0)return he&-he;if(k.T!==null){var e=Da;return e!==0?e:gu()}return xf()}function am(){Mt===0&&(Mt=(he&536870912)===0||ge?mf():536870912);var e=At.current;return e!==null&&(e.flags|=32),Mt}function vt(e,t,n){(e===ze&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Qa(e,0),kn(e,he,Mt,!1)),Sl(e,n),((xe&2)===0||e!==ze)&&(e===ze&&((xe&2)===0&&(aa|=n),Ce===4&&kn(e,he,Mt,!1)),Vt(e))}function lm(e,t,n){if((xe&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||yl(e,t),i=a?gb(e,t):fu(e,t,!0),r=a;do{if(i===0){Ya&&!a&&kn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!hb(n)){i=fu(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var h=e;i=ni;var x=h.current.memoizedState.isDehydrated;if(x&&(Qa(h,f).flags|=256),f=fu(h,f,!1),f!==2){if(nu&&!x){h.errorRecoveryDisabledLanes|=r,aa|=r,i=4;break e}r=ct,ct=i,r!==null&&(ct===null?ct=r:ct.push.apply(ct,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Qa(e,0),kn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:kn(a,t,Mt,!An);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=iu+300-Ht(),10<i)){if(kn(a,t,Mt,!An),Di(a,0,!0)!==0)break e;a.timeoutHandle=Cm(im.bind(null,a,n,ct,yr,lu,t,Mt,aa,qa,An,r,2,-0,0),i);break e}im(a,n,ct,yr,lu,t,Mt,aa,qa,An,r,0,-0,0)}}break}while(!0);Vt(e)}function im(e,t,n,a,i,r,f,h,x,z,C,B,T,A){if(e.timeoutHandle=-1,B=t.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(ci={stylesheets:null,count:0,unsuspend:$b},Ph(t),B=Wb(),B!==null)){e.cancelPendingCommit=B(dm.bind(null,e,t,r,n,a,i,f,h,x,C,1,T,A)),kn(e,r,f,!z);return}dm(e,t,r,n,a,i,f,h,x)}function hb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,a){t&=~au,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-dt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&pf(e,n,t)}function Sr(){return(xe&6)===0?(li(0),!1):!0}function uu(){if(fe!==null){if(ve===0)var e=fe.return;else e=fe,en=Fn=null,Es(e),Ua=null,$l=0,e=fe;for(;e!==null;)Hh(e.alternate,e),e=e.return;fe=null}}function Qa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Db(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),uu(),ze=e,fe=n=Ft(e.current,null),he=t,ve=0,bt=null,An=!1,Ya=yl(e,t),nu=!1,qa=Mt=au=aa=Mn=Ce=0,ct=ni=null,lu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-dt(a),r=1<<i;t|=e[i],a&=~r}return un=t,Vi(),n}function rm(e,t){oe=null,k.H=sr,t===Ll||t===Pi?(t=wd(),ve=3):t===yd?(t=wd(),ve=4):ve=t===_h?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Ce=1,hr(e,_t(t,e.current)))}function om(){var e=k.H;return k.H=sr,e===null?sr:e}function sm(){var e=k.A;return k.A=fb,e}function cu(){Ce=4,An||(he&4194048)!==he&&At.current!==null||(Ya=!0),(Mn&134217727)===0&&(aa&134217727)===0||ze===null||kn(ze,he,Mt,!1)}function fu(e,t,n){var a=xe;xe|=2;var i=om(),r=sm();(ze!==e||he!==t)&&(yr=null,Qa(e,t)),t=!1;var f=Ce;e:do try{if(ve!==0&&fe!==null){var h=fe,x=bt;switch(ve){case 8:uu(),f=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var z=ve;if(ve=0,bt=null,Za(e,h,x,z),n&&Ya){f=0;break e}break;default:z=ve,ve=0,bt=null,Za(e,h,x,z)}}mb(),f=Ce;break}catch(C){rm(e,C)}while(!0);return t&&e.shellSuspendCounter++,en=Fn=null,xe=a,k.H=i,k.A=r,fe===null&&(ze=null,he=0,Vi()),f}function mb(){for(;fe!==null;)um(fe)}function gb(e,t){var n=xe;xe|=2;var a=om(),i=sm();ze!==e||he!==t?(yr=null,vr=Ht()+500,Qa(e,t)):Ya=yl(e,t);e:do try{if(ve!==0&&fe!==null){t=fe;var r=bt;t:switch(ve){case 1:ve=0,bt=null,Za(e,t,r,1);break;case 2:case 9:if(Sd(r)){ve=0,bt=null,cm(t);break}t=function(){ve!==2&&ve!==9||ze!==e||(ve=7),Vt(e)},r.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Sd(r)?(ve=0,bt=null,cm(t)):(ve=0,bt=null,Za(e,t,r,7));break;case 5:var f=null;switch(fe.tag){case 26:f=fe.memoizedState;case 5:case 27:var h=fe;if(!f||Qm(f)){ve=0,bt=null;var x=h.sibling;if(x!==null)fe=x;else{var z=h.return;z!==null?(fe=z,jr(z)):fe=null}break t}}ve=0,bt=null,Za(e,t,r,5);break;case 6:ve=0,bt=null,Za(e,t,r,6);break;case 8:uu(),Ce=6;break e;default:throw Error(u(462))}}pb();break}catch(C){rm(e,C)}while(!0);return en=Fn=null,k.H=a,k.A=i,xe=n,fe!==null?0:(ze=null,he=0,Vi(),Ce)}function pb(){for(;fe!==null&&!Hp();)um(fe)}function um(e){var t=Nh(e.alternate,e,un);e.memoizedProps=e.pendingProps,t===null?jr(e):fe=t}function cm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rh(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Rh(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Es(t);default:Hh(n,t),t=fe=fd(t,un),t=Nh(n,t,un)}e.memoizedProps=e.pendingProps,t===null?jr(e):fe=t}function Za(e,t,n,a){en=Fn=null,Es(t),Ua=null,$l=0;var i=t.return;try{if(ib(e,i,t,n,he)){Ce=1,hr(e,_t(n,e.current)),fe=null;return}}catch(r){if(i!==null)throw fe=i,r;Ce=1,hr(e,_t(n,e.current)),fe=null;return}t.flags&32768?(ge||a===1?e=!0:Ya||(he&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),fm(t,e)):jr(t)}function jr(e){var t=e;do{if((t.flags&32768)!==0){fm(t,An);return}e=t.return;var n=ob(t.alternate,t,un);if(n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ce===0&&(Ce=5)}function fm(e,t){do{var n=sb(e.alternate,e);if(n!==null){n.flags&=32767,fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=n}while(e!==null);Ce=6,fe=null}function dm(e,t,n,a,i,r,f,h,x){e.cancelPendingCommit=null;do wr();while(We!==0);if((xe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=ts,$p(e,n,r,f,h,x),e===ze&&(fe=ze=null,he=0),Va=t,Dn=e,Xa=n,ru=r,ou=i,nm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yb(Ai,function(){return bm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=k.T,k.T=null,i=q.p,q.p=2,f=xe,xe|=4;try{ub(e,t,n)}finally{xe=f,q.p=i,k.T=a}}We=1,hm(),mm(),gm()}}function hm(){if(We===1){We=0;var e=Dn,t=Va,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=k.T,k.T=null;var a=q.p;q.p=2;var i=xe;xe|=4;try{Jh(t,e);var r=wu,f=td(e.containerInfo),h=r.focusedElem,x=r.selectionRange;if(f!==h&&h&&h.ownerDocument&&ed(h.ownerDocument.documentElement,h)){if(x!==null&&Wo(h)){var z=x.start,C=x.end;if(C===void 0&&(C=z),"selectionStart"in h)h.selectionStart=z,h.selectionEnd=Math.min(C,h.value.length);else{var B=h.ownerDocument||document,T=B&&B.defaultView||window;if(T.getSelection){var A=T.getSelection(),ne=h.textContent.length,I=Math.min(x.start,ne),je=x.end===void 0?I:Math.min(x.end,ne);!A.extend&&I>je&&(f=je,je=I,I=f);var w=If(h,I),S=If(h,je);if(w&&S&&(A.rangeCount!==1||A.anchorNode!==w.node||A.anchorOffset!==w.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var _=B.createRange();_.setStart(w.node,w.offset),A.removeAllRanges(),I>je?(A.addRange(_),A.extend(S.node,S.offset)):(_.setEnd(S.node,S.offset),A.addRange(_))}}}}for(B=[],A=h;A=A.parentNode;)A.nodeType===1&&B.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<B.length;h++){var O=B[h];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Br=!!ju,wu=ju=null}finally{xe=i,q.p=a,k.T=n}}e.current=t,We=2}}function mm(){if(We===2){We=0;var e=Dn,t=Va,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=k.T,k.T=null;var a=q.p;q.p=2;var i=xe;xe|=4;try{Qh(e,t.alternate,t)}finally{xe=i,q.p=a,k.T=n}}We=3}}function gm(){if(We===4||We===3){We=0,Lp();var e=Dn,t=Va,n=Xa,a=nm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Va=Dn=null,pm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Rn=null),Mo(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,i=q.p,q.p=2,k.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var h=a[f];r(h.value,{componentStack:h.stack})}}finally{k.T=t,q.p=i}}(Xa&3)!==0&&wr(),Vt(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===su?ai++:(ai=0,su=e):ai=0,li(0)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ul(t)))}function wr(e){return hm(),mm(),gm(),bm()}function bm(){if(We!==5)return!1;var e=Dn,t=ru;ru=0;var n=Mo(Xa),a=k.T,i=q.p;try{q.p=32>n?32:n,k.T=null,n=ou,ou=null;var r=Dn,f=Xa;if(We=0,Va=Dn=null,Xa=0,(xe&6)!==0)throw Error(u(331));var h=xe;if(xe|=4,em(r.current),Fh(r,r.current,f,n),xe=h,li(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(vl,r)}catch{}return!0}finally{q.p=i,k.T=a,pm(e,t)}}function xm(e,t,n){t=_t(n,t),t=Gs(e.stateNode,t,2),e=Sn(e,t,2),e!==null&&(Sl(e,2),Vt(e))}function _e(e,t,n){if(e.tag===3)xm(e,e,n);else for(;t!==null;){if(t.tag===3){xm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Rn===null||!Rn.has(a))){e=_t(n,e),n=jh(2),a=Sn(t,n,2),a!==null&&(wh(n,a,t,e),Sl(a,2),Vt(a));break}}t=t.return}}function du(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new db;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(nu=!0,i.add(n),e=bb.bind(null,e,t,n),t.then(e,e))}function bb(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(he&n)===n&&(Ce===4||Ce===3&&(he&62914560)===he&&300>Ht()-iu?(xe&2)===0&&Qa(e,0):au|=n,qa===he&&(qa=0)),Vt(e)}function vm(e,t){t===0&&(t=gf()),e=Ta(e,t),e!==null&&(Sl(e,t),Vt(e))}function xb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vm(e,n)}function vb(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),vm(e,n)}function yb(e,t){return zo(e,t)}var _r=null,Ka=null,hu=!1,zr=!1,mu=!1,la=0;function Vt(e){e!==Ka&&e.next===null&&(Ka===null?_r=Ka=e:Ka=Ka.next=e),zr=!0,hu||(hu=!0,jb())}function li(e,t){if(!mu&&zr){mu=!0;do for(var n=!1,a=_r;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-dt(42|e)+1)-1,r&=i&~(f&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,wm(a,r))}else r=he,r=Di(a,a===ze?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||yl(a,r)||(n=!0,wm(a,r));a=a.next}while(n);mu=!1}}function Sb(){ym()}function ym(){zr=hu=!1;var e=0;la!==0&&(Rb()&&(e=la),la=0);for(var t=Ht(),n=null,a=_r;a!==null;){var i=a.next,r=Sm(a,t);r===0?(a.next=null,n===null?_r=i:n.next=i,i===null&&(Ka=n)):(n=a,(e!==0||(r&3)!==0)&&(zr=!0)),a=i}li(e)}function Sm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-dt(r),h=1<<f,x=i[f];x===-1?((h&n)===0||(h&a)!==0)&&(i[f]=Kp(h,t)):x<=t&&(e.expiredLanes|=h),r&=~h}if(t=ze,n=he,n=Di(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Eo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Eo(a),Mo(n)){case 2:case 8:n=df;break;case 32:n=Ai;break;case 268435456:n=hf;break;default:n=Ai}return a=jm.bind(null,e),n=zo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Eo(a),e.callbackPriority=2,e.callbackNode=null,2}function jm(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var a=he;return a=Di(e,e===ze?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(lm(e,a,t),Sm(e,Ht()),e.callbackNode!=null&&e.callbackNode===n?jm.bind(null,e):null)}function wm(e,t){if(wr())return null;lm(e,t,!0)}function jb(){kb(function(){(xe&6)!==0?zo(ff,Sb):ym()})}function gu(){return la===0&&(la=mf()),la}function _m(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ni(""+e)}function zm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function wb(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=_m((i[rt]||null).action),f=a.submitter;f&&(t=(t=f[rt]||null)?_m(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var h=new Gi("action","action",null,a,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var x=f?zm(i,f):new FormData(i);Bs(n,{pending:!0,data:x,method:i.method,action:r},null,x)}}else typeof r=="function"&&(h.preventDefault(),x=f?zm(i,f):new FormData(i),Bs(n,{pending:!0,data:x,method:i.method,action:r},r,x))},currentTarget:i}]})}}for(var pu=0;pu<es.length;pu++){var bu=es[pu],_b=bu.toLowerCase(),zb=bu[0].toUpperCase()+bu.slice(1);kt(_b,"on"+zb)}kt(ld,"onAnimationEnd"),kt(id,"onAnimationIteration"),kt(rd,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(q1,"onTransitionRun"),kt(V1,"onTransitionStart"),kt(X1,"onTransitionCancel"),kt(od,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function Em(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var h=a[f],x=h.instance,z=h.currentTarget;if(h=h.listener,x!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=z;try{r(i)}catch(C){dr(C)}i.currentTarget=null,r=x}else for(f=0;f<a.length;f++){if(h=a[f],x=h.instance,z=h.currentTarget,h=h.listener,x!==r&&i.isPropagationStopped())break e;r=h,i.currentTarget=z;try{r(i)}catch(C){dr(C)}i.currentTarget=null,r=x}}}}function de(e,t){var n=t[Ro];n===void 0&&(n=t[Ro]=new Set);var a=e+"__bubble";n.has(a)||(Tm(t,e,2,!1),n.add(a))}function xu(e,t,n){var a=0;t&&(a|=4),Tm(n,e,a,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function vu(e){if(!e[Er]){e[Er]=!0,yf.forEach(function(n){n!=="selectionchange"&&(Eb.has(n)||xu(n,!1,e),xu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,xu("selectionchange",!1,t))}}function Tm(e,t,n,a){switch(Fm(t)){case 2:var i=Ib;break;case 8:i=ex;break;default:i=Cu}n=i.bind(null,t,n,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yu(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var h=a.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=a.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=ma(h),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){a=r=f;continue e}h=h.parentNode}}a=a.return}Of(function(){var z=r,C=Lo(n),B=[];e:{var T=sd.get(e);if(T!==void 0){var A=Gi,ne=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":A=y1;break;case"focusin":ne="focus",A=Qo;break;case"focusout":ne="blur",A=Qo;break;case"beforeblur":case"afterblur":A=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=s1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=w1;break;case ld:case id:case rd:A=f1;break;case od:A=z1;break;case"scroll":case"scrollend":A=r1;break;case"wheel":A=T1;break;case"copy":case"cut":case"paste":A=h1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Lf;break;case"toggle":case"beforetoggle":A=M1}var I=(t&4)!==0,je=!I&&(e==="scroll"||e==="scrollend"),w=I?T!==null?T+"Capture":null:T;I=[];for(var S=z,_;S!==null;){var O=S;if(_=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||_===null||w===null||(O=_l(S,w),O!=null&&I.push(ri(S,O,_))),je)break;S=S.return}0<I.length&&(T=new A(T,ne,null,n,C),B.push({event:T,listeners:I}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&n!==Ho&&(ne=n.relatedTarget||n.fromElement)&&(ma(ne)||ne[ha]))break e;if((A||T)&&(T=C.window===C?C:(T=C.ownerDocument)?T.defaultView||T.parentWindow:window,A?(ne=n.relatedTarget||n.toElement,A=z,ne=ne?ma(ne):null,ne!==null&&(je=m(ne),I=ne.tag,ne!==je||I!==5&&I!==27&&I!==6)&&(ne=null)):(A=null,ne=z),A!==ne)){if(I=Uf,O="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(I=Lf,O="onPointerLeave",w="onPointerEnter",S="pointer"),je=A==null?T:wl(A),_=ne==null?T:wl(ne),T=new I(O,S+"leave",A,n,C),T.target=je,T.relatedTarget=_,O=null,ma(C)===z&&(I=new I(w,S+"enter",ne,n,C),I.target=_,I.relatedTarget=je,O=I),je=O,A&&ne)t:{for(I=A,w=ne,S=0,_=I;_;_=$a(_))S++;for(_=0,O=w;O;O=$a(O))_++;for(;0<S-_;)I=$a(I),S--;for(;0<_-S;)w=$a(w),_--;for(;S--;){if(I===w||w!==null&&I===w.alternate)break t;I=$a(I),w=$a(w)}I=null}else I=null;A!==null&&Am(B,T,A,I,!1),ne!==null&&je!==null&&Am(B,je,ne,I,!0)}}e:{if(T=z?wl(z):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var K=Kf;else if(Qf(T))if($f)K=L1;else{K=U1;var se=N1}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?z&&Uo(z.elementType)&&(K=Kf):K=H1;if(K&&(K=K(e,z))){Zf(B,K,n,C);break e}se&&se(e,T,z),e==="focusout"&&z&&T.type==="number"&&z.memoizedProps.value!=null&&No(T,"number",T.value)}switch(se=z?wl(z):window,e){case"focusin":(Qf(se)||se.contentEditable==="true")&&(_a=se,Fo=z,kl=null);break;case"focusout":kl=Fo=_a=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,nd(B,n,C);break;case"selectionchange":if(Y1)break;case"keydown":case"keyup":nd(B,n,C)}var $;if(Ko)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else wa?Vf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Gf&&n.locale!=="ko"&&(wa||te!=="onCompositionStart"?te==="onCompositionEnd"&&wa&&($=Bf()):(bn=C,qo="value"in bn?bn.value:bn.textContent,wa=!0)),se=Tr(z,te),0<se.length&&(te=new Hf(te,e,null,n,C),B.push({event:te,listeners:se}),$?te.data=$:($=Xf(n),$!==null&&(te.data=$)))),($=D1?k1(e,n):C1(e,n))&&(te=Tr(z,"onBeforeInput"),0<te.length&&(se=new Hf("onBeforeInput","beforeinput",null,n,C),B.push({event:se,listeners:te}),se.data=$)),wb(B,e,z,n,C)}Em(B,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=_l(e,n),i!=null&&a.unshift(ri(e,i,r)),i=_l(e,t),i!=null&&a.push(ri(e,i,r))),e.tag===3)return a;e=e.return}return[]}function $a(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Am(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var h=n,x=h.alternate,z=h.stateNode;if(h=h.tag,x!==null&&x===a)break;h!==5&&h!==26&&h!==27||z===null||(x=z,i?(z=_l(n,r),z!=null&&f.unshift(ri(n,z,x))):i||(z=_l(n,r),z!=null&&f.push(ri(n,z,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Tb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function Mm(e){return(typeof e=="string"?e:""+e).replace(Tb,`
`).replace(Ab,"")}function Rm(e,t){return t=Mm(t),Mm(e)===t}function Ar(){}function Se(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ya(e,""+a);break;case"className":Ci(e,"class",a);break;case"tabIndex":Ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,n,a);break;case"style":kf(e,a,r);break;case"data":if(t!=="object"){Ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",i.name,i,null),Se(e,t,"formEncType",i.formEncType,i,null),Se(e,t,"formMethod",i.formMethod,i,null),Se(e,t,"formTarget",i.formTarget,i,null)):(Se(e,t,"encType",i.encType,i,null),Se(e,t,"method",i.method,i,null),Se(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ni(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ni(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":de("beforetoggle",e),de("toggle",e),ki(e,"popover",a);break;case"xlinkActuate":Jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ki(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=l1.get(n)||n,ki(e,n,a))}}function Su(e,t,n,a,i,r){switch(n){case"style":kf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ya(e,a):(typeof a=="number"||typeof a=="bigint")&&ya(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ar);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[rt]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ki(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,r,f,n,null)}}i&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var h=r=f=i=null,x=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var C=n[a];if(C!=null)switch(a){case"name":i=C;break;case"type":f=C;break;case"checked":x=C;break;case"defaultChecked":z=C;break;case"value":r=C;break;case"defaultValue":h=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:Se(e,t,a,C,n,null)}}Af(e,r,h,x,z,f,i,!1),Oi(e);return;case"select":de("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(h=n[i],h!=null))switch(i){case"value":r=h;break;case"defaultValue":f=h;break;case"multiple":a=h;default:Se(e,t,i,h,n,null)}t=r,n=f,e.multiple=!!a,t!=null?va(e,!!a,t,!1):n!=null&&va(e,!!a,n,!0);return;case"textarea":de("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(h=n[f],h!=null))switch(f){case"value":a=h;break;case"defaultValue":i=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:Se(e,t,f,h,n,null)}Rf(e,a,i,r),Oi(e);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,x,a,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)de(ii[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,z,a,n,null)}return;default:if(Uo(t)){for(C in n)n.hasOwnProperty(C)&&(a=n[C],a!==void 0&&Su(e,t,C,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&Se(e,t,h,a,n,null))}function Mb(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,h=null,x=null,z=null,C=null;for(A in n){var B=n[A];if(n.hasOwnProperty(A)&&B!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":x=B;default:a.hasOwnProperty(A)||Se(e,t,A,null,a,B)}}for(var T in a){var A=a[T];if(B=n[T],a.hasOwnProperty(T)&&(A!=null||B!=null))switch(T){case"type":r=A;break;case"name":i=A;break;case"checked":z=A;break;case"defaultChecked":C=A;break;case"value":f=A;break;case"defaultValue":h=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==B&&Se(e,t,T,A,a,B)}}Bo(e,f,h,x,z,C,r,i);return;case"select":A=f=h=T=null;for(r in n)if(x=n[r],n.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":A=x;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,x)}for(i in a)if(r=a[i],x=n[i],a.hasOwnProperty(i)&&(r!=null||x!=null))switch(i){case"value":T=r;break;case"defaultValue":h=r;break;case"multiple":f=r;default:r!==x&&Se(e,t,i,r,a,x)}t=h,n=f,a=A,T!=null?va(e,!!n,T,!1):!!a!=!!n&&(t!=null?va(e,!!n,t,!0):va(e,!!n,n?[]:"",!1));return;case"textarea":A=T=null;for(h in n)if(i=n[h],n.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Se(e,t,h,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":T=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Se(e,t,f,i,a,r)}Mf(e,T,A);return;case"option":for(var ne in n)if(T=n[ne],n.hasOwnProperty(ne)&&T!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Se(e,t,ne,null,a,T)}for(x in a)if(T=a[x],A=n[x],a.hasOwnProperty(x)&&T!==A&&(T!=null||A!=null))switch(x){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:Se(e,t,x,T,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in n)T=n[I],n.hasOwnProperty(I)&&T!=null&&!a.hasOwnProperty(I)&&Se(e,t,I,null,a,T);for(z in a)if(T=a[z],A=n[z],a.hasOwnProperty(z)&&T!==A&&(T!=null||A!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:Se(e,t,z,T,a,A)}return;default:if(Uo(t)){for(var je in n)T=n[je],n.hasOwnProperty(je)&&T!==void 0&&!a.hasOwnProperty(je)&&Su(e,t,je,void 0,a,T);for(C in a)T=a[C],A=n[C],!a.hasOwnProperty(C)||T===A||T===void 0&&A===void 0||Su(e,t,C,T,a,A);return}}for(var w in n)T=n[w],n.hasOwnProperty(w)&&T!=null&&!a.hasOwnProperty(w)&&Se(e,t,w,null,a,T);for(B in a)T=a[B],A=n[B],!a.hasOwnProperty(B)||T===A||T==null&&A==null||Se(e,t,B,T,a,A)}var ju=null,wu=null;function Mr(e){return e.nodeType===9?e:e.ownerDocument}function Dm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function km(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zu=null;function Rb(){var e=window.event;return e&&e.type==="popstate"?e===zu?!1:(zu=e,!0):(zu=null,!1)}var Cm=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,Om=typeof Promise=="function"?Promise:void 0,kb=typeof queueMicrotask=="function"?queueMicrotask:typeof Om<"u"?function(e){return Om.resolve(null).then(e).catch(Cb)}:Cm;function Cb(e){setTimeout(function(){throw e})}function Cn(e){return e==="head"}function Bm(e,t){var n=t,a=0,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&oi(f.documentElement),n&2&&oi(f.body),n&4)for(n=f.head,oi(n),f=n.firstChild;f;){var h=f.nextSibling,x=f.nodeName;f[jl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=h}}if(i===0){e.removeChild(r),gi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);gi(t)}function Eu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Eu(n),Do(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ob(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function Bb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ot(e.nextSibling),e===null))return null;return e}function Tu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Nb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Au=null;function Nm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Um(e,t,n){switch(t=Mr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function oi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Do(e)}var Rt=new Map,Hm=new Set;function Rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cn=q.d;q.d={f:Ub,r:Hb,D:Lb,C:Gb,L:Yb,m:qb,X:Xb,S:Vb,M:Qb};function Ub(){var e=cn.f(),t=Sr();return e||t}function Hb(e){var t=ga(e);t!==null&&t.tag===5&&t.type==="form"?lh(t):cn.r(e)}var Ja=typeof document>"u"?null:document;function Lm(e,t,n){var a=Ja;if(a&&typeof t=="string"&&t){var i=wt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Hm.has(i)||(Hm.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function Lb(e){cn.D(e),Lm("dns-prefetch",e,null)}function Gb(e,t){cn.C(e,t),Lm("preconnect",e,t)}function Yb(e,t,n){cn.L(e,t,n);var a=Ja;if(a&&e&&t){var i='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+wt(n.imageSizes)+'"]')):i+='[href="'+wt(e)+'"]';var r=i;switch(t){case"style":r=Wa(e);break;case"script":r=Fa(e)}Rt.has(r)||(e=E({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Rt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(si(r))||t==="script"&&a.querySelector(ui(r))||(t=a.createElement("link"),Fe(t,"link",e),Xe(t),a.head.appendChild(t)))}}function qb(e,t){cn.m(e,t);var n=Ja;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+wt(a)+'"][href="'+wt(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Fa(e)}if(!Rt.has(r)&&(e=E({rel:"modulepreload",href:e},t),Rt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ui(r)))return}a=n.createElement("link"),Fe(a,"link",e),Xe(a),n.head.appendChild(a)}}}function Vb(e,t,n){cn.S(e,t,n);var a=Ja;if(a&&e){var i=pa(a).hoistableStyles,r=Wa(e);t=t||"default";var f=i.get(r);if(!f){var h={loading:0,preload:null};if(f=a.querySelector(si(r)))h.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Rt.get(r))&&Mu(e,n);var x=f=a.createElement("link");Xe(x),Fe(x,"link",e),x._p=new Promise(function(z,C){x.onload=z,x.onerror=C}),x.addEventListener("load",function(){h.loading|=1}),x.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Dr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(r,f)}}}function Xb(e,t){cn.X(e,t);var n=Ja;if(n&&e){var a=pa(n).hoistableScripts,i=Fa(e),r=a.get(i);r||(r=n.querySelector(ui(i)),r||(e=E({src:e,async:!0},t),(t=Rt.get(i))&&Ru(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Qb(e,t){cn.M(e,t);var n=Ja;if(n&&e){var a=pa(n).hoistableScripts,i=Fa(e),r=a.get(i);r||(r=n.querySelector(ui(i)),r||(e=E({src:e,async:!0,type:"module"},t),(t=Rt.get(i))&&Ru(e,t),r=n.createElement("script"),Xe(r),Fe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Gm(e,t,n,a){var i=(i=ee.current)?Rr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Wa(n.href),n=pa(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Wa(n.href);var r=pa(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(si(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Rt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Rt.set(e,n),r||Zb(i,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Fa(n),n=pa(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Wa(e){return'href="'+wt(e)+'"'}function si(e){return'link[rel="stylesheet"]['+e+"]"}function Ym(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Zb(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Xe(t),e.head.appendChild(t))}function Fa(e){return'[src="'+wt(e)+'"]'}function ui(e){return"script[async]"+e}function qm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(a)return t.instance=a,Xe(a),a;var i=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),Fe(a,"style",i),Dr(a,n.precedence,e),t.instance=a;case"stylesheet":i=Wa(n.href);var r=e.querySelector(si(i));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;a=Ym(n),(i=Rt.get(i))&&Mu(a,i),r=(e.ownerDocument||e).createElement("link"),Xe(r);var f=r;return f._p=new Promise(function(h,x){f.onload=h,f.onerror=x}),Fe(r,"link",a),t.state.loading|=4,Dr(r,n.precedence,e),t.instance=r;case"script":return r=Fa(n.src),(i=e.querySelector(ui(r)))?(t.instance=i,Xe(i),i):(a=n,(i=Rt.get(r))&&(a=E({},n),Ru(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),Fe(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Dr(a,n.precedence,e));return t.instance}function Dr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var h=a[f];if(h.dataset.precedence===t)r=h;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var kr=null;function Vm(e,t,n){if(kr===null){var a=new Map,i=kr=new Map;i.set(n,a)}else i=kr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[jl]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var h=a.get(f);h?h.push(r):a.set(f,[r])}}return a}function Xm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Kb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ci=null;function $b(){}function Jb(e,t,n){if(ci===null)throw Error(u(475));var a=ci;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Wa(n.href),r=e.querySelector(si(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Cr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=Ym(n),(i=Rt.get(i))&&Mu(n,i),r=r.createElement("link"),Xe(r);var f=r;f._p=new Promise(function(h,x){f.onload=h,f.onerror=x}),Fe(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Cr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function Wb(){if(ci===null)throw Error(u(475));var e=ci;return e.stylesheets&&e.count===0&&Du(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Du(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cr(){if(this.count--,this.count===0){if(this.stylesheets)Du(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Or=null;function Du(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Or=new Map,t.forEach(Fb,e),Or=null,Cr.call(e))}function Fb(e,t){if(!(t.state.loading&4)){var n=Or.get(e);if(n)var a=n.get(null);else{n=new Map,Or.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=Cr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:Q,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Pb(e,t,n,a,i,r,f,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Zm(e,t,n,a,i,r,f,h,x,z,C,B){return e=new Pb(e,t,n,f,h,x,z,B),t=1,r===!0&&(t|=24),r=mt(3,null,null,t),e.current=r,r.stateNode=e,t=ds(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},ps(r),e}function Km(e){return e?(e=Aa,e):Aa}function $m(e,t,n,a,i,r){i=Km(i),a.context===null?a.context=i:a.pendingContext=i,a=yn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Sn(e,a,t),n!==null&&(vt(n,e,t),Yl(n,e,t))}function Jm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ku(e,t){Jm(e,t),(e=e.alternate)&&Jm(e,t)}function Wm(e){if(e.tag===13){var t=Ta(e,67108864);t!==null&&vt(t,e,67108864),ku(e,67108864)}}var Br=!0;function Ib(e,t,n,a){var i=k.T;k.T=null;var r=q.p;try{q.p=2,Cu(e,t,n,a)}finally{q.p=r,k.T=i}}function ex(e,t,n,a){var i=k.T;k.T=null;var r=q.p;try{q.p=8,Cu(e,t,n,a)}finally{q.p=r,k.T=i}}function Cu(e,t,n,a){if(Br){var i=Ou(a);if(i===null)yu(e,t,a,Nr,n),Pm(e,a);else if(nx(i,e,t,n,a))a.stopPropagation();else if(Pm(e,a),t&4&&-1<tx.indexOf(e)){for(;i!==null;){var r=ga(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Yn(r.pendingLanes);if(f!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var x=1<<31-dt(f);h.entanglements[1]|=x,f&=~x}Vt(r),(xe&6)===0&&(vr=Ht()+500,li(0))}}break;case 13:h=Ta(r,2),h!==null&&vt(h,r,2),Sr(),ku(r,2)}if(r=Ou(a),r===null&&yu(e,t,a,Nr,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else yu(e,t,a,null,n)}}function Ou(e){return e=Lo(e),Bu(e)}var Nr=null;function Bu(e){if(Nr=null,e=ma(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nr=e,null}function Fm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gp()){case ff:return 2;case df:return 8;case Ai:case Yp:return 32;case hf:return 268435456;default:return 32}default:return 32}}var Nu=!1,On=null,Bn=null,Nn=null,di=new Map,hi=new Map,Un=[],tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pm(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function mi(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ga(t),t!==null&&Wm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nx(e,t,n,a,i){switch(t){case"focusin":return On=mi(On,e,t,n,a,i),!0;case"dragenter":return Bn=mi(Bn,e,t,n,a,i),!0;case"mouseover":return Nn=mi(Nn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return di.set(r,mi(di.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,hi.set(r,mi(hi.get(r)||null,e,t,n,a,i)),!0}return!1}function Im(e){var t=ma(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,Jp(e.priority,function(){if(n.tag===13){var a=xt();a=Ao(a);var i=Ta(n,a);i!==null&&vt(i,n,a),ku(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ou(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ho=a,n.target.dispatchEvent(a),Ho=null}else return t=ga(n),t!==null&&Wm(t),e.blockedOn=n,!1;t.shift()}return!0}function eg(e,t,n){Ur(e)&&n.delete(t)}function ax(){Nu=!1,On!==null&&Ur(On)&&(On=null),Bn!==null&&Ur(Bn)&&(Bn=null),Nn!==null&&Ur(Nn)&&(Nn=null),di.forEach(eg),hi.forEach(eg)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Nu||(Nu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ax)))}var Lr=null;function tg(e){Lr!==e&&(Lr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Lr===e&&(Lr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Bu(a||n)===null)continue;break}var r=ga(n);r!==null&&(e.splice(t,3),t-=3,Bs(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function gi(e){function t(x){return Hr(x,e)}On!==null&&Hr(On,e),Bn!==null&&Hr(Bn,e),Nn!==null&&Hr(Nn,e),di.forEach(t),hi.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Im(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[rt]||null;if(typeof r=="function")f||tg(n);else if(f){var h=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[rt]||null)h=f.formAction;else if(Bu(i)!==null)continue}else h=f.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),tg(n)}}}function Uu(e){this._internalRoot=e}Gr.prototype.render=Uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=xt();$m(n,a,e,t,null,null)},Gr.prototype.unmount=Uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$m(e.current,2,null,e,null,null),Sr(),t[ha]=null}};function Gr(e){this._internalRoot=e}Gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Im(e)}};var ng=s.version;if(ng!=="19.1.0")throw Error(u(527,ng,"19.1.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var lx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{vl=Yr.inject(lx),ft=Yr}catch{}}return bi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",i=xh,r=vh,f=yh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=Zm(e,1,!1,null,null,n,a,i,r,f,h,null),e[ha]=t.current,vu(e),new Uu(t)},bi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,i="",r=xh,f=vh,h=yh,x=null,z=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks),n.formState!==void 0&&(z=n.formState)),t=Zm(e,1,!0,t,n??null,a,i,r,f,h,x,z),t.context=Km(null),n=t.current,a=xt(),a=Ao(a),i=yn(a),i.callback=null,Sn(n,i,a),n=a,t.current.lanes=n,Sl(t,n),Vt(t),e[ha]=t.current,vu(e),new Gr(t)},bi.version="19.1.0",bi}var dg;function gx(){if(dg)return Gu.exports;dg=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(s){console.error(s)}}return l(),Gu.exports=mx(),Gu.exports}var px=gx(),nt=function(){return nt=Object.assign||function(s){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&(s[m]=c[m])}return s},nt.apply(this,arguments)};function wi(l,s,c){if(c||arguments.length===2)for(var u=0,d=s.length,m;u<d;u++)(m||!(u in s))&&(m||(m=Array.prototype.slice.call(s,0,u)),m[u]=s[u]);return l.concat(m||Array.prototype.slice.call(s))}var Te="-ms-",ji="-moz-",be="-webkit-",Fg="comm",po="rule",Jc="decl",bx="@import",Pg="@keyframes",xx="@layer",Ig=Math.abs,Wc=String.fromCharCode,Hc=Object.assign;function vx(l,s){return $e(l,0)^45?(((s<<2^$e(l,0))<<2^$e(l,1))<<2^$e(l,2))<<2^$e(l,3):0}function e0(l){return l.trim()}function fn(l,s){return(l=s.exec(l))?l[0]:l}function re(l,s,c){return l.replace(s,c)}function ao(l,s,c){return l.indexOf(s,c)}function $e(l,s){return l.charCodeAt(s)|0}function fl(l,s,c){return l.slice(s,c)}function Xt(l){return l.length}function t0(l){return l.length}function Si(l,s){return s.push(l),l}function yx(l,s){return l.map(s).join("")}function hg(l,s){return l.filter(function(c){return!fn(c,s)})}var bo=1,dl=1,n0=0,Dt=0,He=0,gl="";function xo(l,s,c,u,d,m,b,j){return{value:l,root:s,parent:c,type:u,props:d,children:m,line:bo,column:dl,length:b,return:"",siblings:j}}function Ln(l,s){return Hc(xo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},s)}function Pa(l){for(;l.root;)l=Ln(l.root,{children:[l]});Si(l,l.siblings)}function Sx(){return He}function jx(){return He=Dt>0?$e(gl,--Dt):0,dl--,He===10&&(dl=1,bo--),He}function Bt(){return He=Dt<n0?$e(gl,Dt++):0,dl++,He===10&&(dl=1,bo++),He}function ra(){return $e(gl,Dt)}function lo(){return Dt}function vo(l,s){return fl(gl,l,s)}function Lc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wx(l){return bo=dl=1,n0=Xt(gl=l),Dt=0,[]}function _x(l){return gl="",l}function Xu(l){return e0(vo(Dt-1,Gc(l===91?l+2:l===40?l+1:l)))}function zx(l){for(;(He=ra())&&He<33;)Bt();return Lc(l)>2||Lc(He)>3?"":" "}function Ex(l,s){for(;--s&&Bt()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return vo(l,lo()+(s<6&&ra()==32&&Bt()==32))}function Gc(l){for(;Bt();)switch(He){case l:return Dt;case 34:case 39:l!==34&&l!==39&&Gc(He);break;case 40:l===41&&Gc(l);break;case 92:Bt();break}return Dt}function Tx(l,s){for(;Bt()&&l+He!==57;)if(l+He===84&&ra()===47)break;return"/*"+vo(s,Dt-1)+"*"+Wc(l===47?l:Bt())}function Ax(l){for(;!Lc(ra());)Bt();return vo(l,Dt)}function Mx(l){return _x(io("",null,null,null,[""],l=wx(l),0,[0],l))}function io(l,s,c,u,d,m,b,j,v){for(var p=0,E=0,M=b,D=0,H=0,L=0,G=1,X=1,U=1,J=0,Q="",ae=d,Z=m,le=u,W=Q;X;)switch(L=J,J=Bt()){case 40:if(L!=108&&$e(W,M-1)==58){ao(W+=re(Xu(J),"&","&\f"),"&\f",Ig(p?j[p-1]:0))!=-1&&(U=-1);break}case 34:case 39:case 91:W+=Xu(J);break;case 9:case 10:case 13:case 32:W+=zx(L);break;case 92:W+=Ex(lo()-1,7);continue;case 47:switch(ra()){case 42:case 47:Si(Rx(Tx(Bt(),lo()),s,c,v),v);break;default:W+="/"}break;case 123*G:j[p++]=Xt(W)*U;case 125*G:case 59:case 0:switch(J){case 0:case 125:X=0;case 59+E:U==-1&&(W=re(W,/\f/g,"")),H>0&&Xt(W)-M&&Si(H>32?gg(W+";",u,c,M-1,v):gg(re(W," ","")+";",u,c,M-2,v),v);break;case 59:W+=";";default:if(Si(le=mg(W,s,c,p,E,d,j,Q,ae=[],Z=[],M,m),m),J===123)if(E===0)io(W,s,le,le,ae,m,M,j,Z);else switch(D===99&&$e(W,3)===110?100:D){case 100:case 108:case 109:case 115:io(l,le,le,u&&Si(mg(l,le,le,0,0,d,j,Q,d,ae=[],M,Z),Z),d,Z,M,j,u?ae:Z);break;default:io(W,le,le,le,[""],Z,0,j,Z)}}p=E=H=0,G=U=1,Q=W="",M=b;break;case 58:M=1+Xt(W),H=L;default:if(G<1){if(J==123)--G;else if(J==125&&G++==0&&jx()==125)continue}switch(W+=Wc(J),J*G){case 38:U=E>0?1:(W+="\f",-1);break;case 44:j[p++]=(Xt(W)-1)*U,U=1;break;case 64:ra()===45&&(W+=Xu(Bt())),D=ra(),E=M=Xt(Q=W+=Ax(lo())),J++;break;case 45:L===45&&Xt(W)==2&&(G=0)}}return m}function mg(l,s,c,u,d,m,b,j,v,p,E,M){for(var D=d-1,H=d===0?m:[""],L=t0(H),G=0,X=0,U=0;G<u;++G)for(var J=0,Q=fl(l,D+1,D=Ig(X=b[G])),ae=l;J<L;++J)(ae=e0(X>0?H[J]+" "+Q:re(Q,/&\f/g,H[J])))&&(v[U++]=ae);return xo(l,s,c,d===0?po:j,v,p,E,M)}function Rx(l,s,c,u){return xo(l,s,c,Fg,Wc(Sx()),fl(l,2,-2),0,u)}function gg(l,s,c,u,d){return xo(l,s,c,Jc,fl(l,0,u),fl(l,u+1,-1),u,d)}function a0(l,s,c){switch(vx(l,s)){case 5103:return be+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+l+l;case 4789:return ji+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return be+l+ji+l+Te+l+l;case 5936:switch($e(l,s+11)){case 114:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return be+l+Te+re(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return be+l+Te+l+l;case 6165:return be+l+Te+"flex-"+l+l;case 5187:return be+l+re(l,/(\w+).+(:[^]+)/,be+"box-$1$2"+Te+"flex-$1$2")+l;case 5443:return be+l+Te+"flex-item-"+re(l,/flex-|-self/g,"")+(fn(l,/flex-|baseline/)?"":Te+"grid-row-"+re(l,/flex-|-self/g,""))+l;case 4675:return be+l+Te+"flex-line-pack"+re(l,/align-content|flex-|-self/g,"")+l;case 5548:return be+l+Te+re(l,"shrink","negative")+l;case 5292:return be+l+Te+re(l,"basis","preferred-size")+l;case 6060:return be+"box-"+re(l,"-grow","")+be+l+Te+re(l,"grow","positive")+l;case 4554:return be+re(l,/([^-])(transform)/g,"$1"+be+"$2")+l;case 6187:return re(re(re(l,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),l,"")+l;case 5495:case 3959:return re(l,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(l,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+l+l;case 4200:if(!fn(l,/flex-|baseline/))return Te+"grid-column-align"+fl(l,s)+l;break;case 2592:case 3360:return Te+re(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(u,d){return s=d,fn(u.props,/grid-\w+-end/)})?~ao(l+(c=c[s].value),"span",0)?l:Te+re(l,"-start","")+l+Te+"grid-row-span:"+(~ao(c,"span",0)?fn(c,/\d+/):+fn(c,/\d+/)-+fn(l,/\d+/))+";":Te+re(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(u){return fn(u.props,/grid-\w+-start/)})?l:Te+re(re(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return re(l,/(.+)-inline(.+)/,be+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(l)-1-s>6)switch($e(l,s+1)){case 109:if($e(l,s+4)!==45)break;case 102:return re(l,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+ji+($e(l,s+3)==108?"$3":"$2-$3"))+l;case 115:return~ao(l,"stretch",0)?a0(re(l,"stretch","fill-available"),s,c)+l:l}break;case 5152:case 5920:return re(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,m,b,j,v,p){return Te+d+":"+m+p+(b?Te+d+"-span:"+(j?v:+v-+m)+p:"")+l});case 4949:if($e(l,s+6)===121)return re(l,":",":"+be)+l;break;case 6444:switch($e(l,$e(l,14)===45?18:11)){case 120:return re(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+($e(l,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Te+"$2box$3")+l;case 100:return re(l,":",":"+Te)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(l,"scroll-","scroll-snap-")+l}return l}function co(l,s){for(var c="",u=0;u<l.length;u++)c+=s(l[u],u,l,s)||"";return c}function Dx(l,s,c,u){switch(l.type){case xx:if(l.children.length)break;case bx:case Jc:return l.return=l.return||l.value;case Fg:return"";case Pg:return l.return=l.value+"{"+co(l.children,u)+"}";case po:if(!Xt(l.value=l.props.join(",")))return""}return Xt(c=co(l.children,u))?l.return=l.value+"{"+c+"}":""}function kx(l){var s=t0(l);return function(c,u,d,m){for(var b="",j=0;j<s;j++)b+=l[j](c,u,d,m)||"";return b}}function Cx(l){return function(s){s.root||(s=s.return)&&l(s)}}function Ox(l,s,c,u){if(l.length>-1&&!l.return)switch(l.type){case Jc:l.return=a0(l.value,l.length,c);return;case Pg:return co([Ln(l,{value:re(l.value,"@","@"+be)})],u);case po:if(l.length)return yx(c=l.props,function(d){switch(fn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pa(Ln(l,{props:[re(d,/:(read-\w+)/,":"+ji+"$1")]})),Pa(Ln(l,{props:[d]})),Hc(l,{props:hg(c,u)});break;case"::placeholder":Pa(Ln(l,{props:[re(d,/:(plac\w+)/,":"+be+"input-$1")]})),Pa(Ln(l,{props:[re(d,/:(plac\w+)/,":"+ji+"$1")]})),Pa(Ln(l,{props:[re(d,/:(plac\w+)/,Te+"input-$1")]})),Pa(Ln(l,{props:[d]})),Hc(l,{props:hg(c,u)});break}return""})}}var Bx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},hl=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",l0="active",i0="data-styled-version",yo="6.1.19",Fc=`/*!sc*/
`,fo=typeof window<"u"&&typeof document<"u",Nx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),So=Object.freeze([]),ml=Object.freeze({});function Ux(l,s,c){return c===void 0&&(c=ml),l.theme!==c.theme&&l.theme||s||c.theme}var r0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lx=/(^-|-$)/g;function pg(l){return l.replace(Hx,"-").replace(Lx,"")}var Gx=/(a)(d)/gi,qr=52,bg=function(l){return String.fromCharCode(l+(l>25?39:97))};function Yc(l){var s,c="";for(s=Math.abs(l);s>qr;s=s/qr|0)c=bg(s%qr)+c;return(bg(s%qr)+c).replace(Gx,"$1-$2")}var Qu,o0=5381,cl=function(l,s){for(var c=s.length;c;)l=33*l^s.charCodeAt(--c);return l},s0=function(l){return cl(o0,l)};function u0(l){return Yc(s0(l)>>>0)}function Yx(l){return l.displayName||l.name||"Component"}function Zu(l){return typeof l=="string"&&!0}var c0=typeof Symbol=="function"&&Symbol.for,f0=c0?Symbol.for("react.memo"):60115,qx=c0?Symbol.for("react.forward_ref"):60112,Vx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},d0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qx=((Qu={})[qx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qu[f0]=d0,Qu);function xg(l){return("type"in(s=l)&&s.type.$$typeof)===f0?d0:"$$typeof"in l?Qx[l.$$typeof]:Vx;var s}var Zx=Object.defineProperty,Kx=Object.getOwnPropertyNames,vg=Object.getOwnPropertySymbols,$x=Object.getOwnPropertyDescriptor,Jx=Object.getPrototypeOf,yg=Object.prototype;function h0(l,s,c){if(typeof s!="string"){if(yg){var u=Jx(s);u&&u!==yg&&h0(l,u,c)}var d=Kx(s);vg&&(d=d.concat(vg(s)));for(var m=xg(l),b=xg(s),j=0;j<d.length;++j){var v=d[j];if(!(v in Xx||c&&c[v]||b&&v in b||m&&v in m)){var p=$x(s,v);try{Zx(l,v,p)}catch{}}}}return l}function ua(l){return typeof l=="function"}function Pc(l){return typeof l=="object"&&"styledComponentId"in l}function ia(l,s){return l&&s?"".concat(l," ").concat(s):l||s||""}function qc(l,s){if(l.length===0)return"";for(var c=l[0],u=1;u<l.length;u++)c+=l[u];return c}function _i(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Vc(l,s,c){if(c===void 0&&(c=!1),!c&&!_i(l)&&!Array.isArray(l))return s;if(Array.isArray(s))for(var u=0;u<s.length;u++)l[u]=Vc(l[u],s[u]);else if(_i(s))for(var u in s)l[u]=Vc(l[u],s[u]);return l}function Ic(l,s){Object.defineProperty(l,"toString",{value:s})}function ca(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Wx=function(){function l(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return l.prototype.indexOfGroup=function(s){for(var c=0,u=0;u<s;u++)c+=this.groupSizes[u];return c},l.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,m=d;s>=m;)if((m<<=1)<0)throw ca(16,"".concat(s));this.groupSizes=new Uint32Array(m),this.groupSizes.set(u),this.length=m;for(var b=d;b<m;b++)this.groupSizes[b]=0}for(var j=this.indexOfGroup(s+1),v=(b=0,c.length);b<v;b++)this.tag.insertRule(j,c[b])&&(this.groupSizes[s]++,j++)},l.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],u=this.indexOfGroup(s),d=u+c;this.groupSizes[s]=0;for(var m=u;m<d;m++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var u=this.groupSizes[s],d=this.indexOfGroup(s),m=d+u,b=d;b<m;b++)c+="".concat(this.tag.getRule(b)).concat(Fc);return c},l}(),ro=new Map,ho=new Map,oo=1,Vr=function(l){if(ro.has(l))return ro.get(l);for(;ho.has(oo);)oo++;var s=oo++;return ro.set(l,s),ho.set(s,l),s},Fx=function(l,s){oo=s+1,ro.set(l,s),ho.set(s,l)},Px="style[".concat(hl,"][").concat(i0,'="').concat(yo,'"]'),Ix=new RegExp("^".concat(hl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ev=function(l,s,c){for(var u,d=c.split(","),m=0,b=d.length;m<b;m++)(u=d[m])&&l.registerName(s,u)},tv=function(l,s){for(var c,u=((c=s.textContent)!==null&&c!==void 0?c:"").split(Fc),d=[],m=0,b=u.length;m<b;m++){var j=u[m].trim();if(j){var v=j.match(Ix);if(v){var p=0|parseInt(v[1],10),E=v[2];p!==0&&(Fx(E,p),ev(l,E,v[3]),l.getTag().insertRules(p,d)),d.length=0}else d.push(j)}}},Sg=function(l){for(var s=document.querySelectorAll(Px),c=0,u=s.length;c<u;c++){var d=s[c];d&&d.getAttribute(hl)!==l0&&(tv(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function nv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var m0=function(l){var s=document.head,c=l||s,u=document.createElement("style"),d=function(j){var v=Array.from(j.querySelectorAll("style[".concat(hl,"]")));return v[v.length-1]}(c),m=d!==void 0?d.nextSibling:null;u.setAttribute(hl,l0),u.setAttribute(i0,yo);var b=nv();return b&&u.setAttribute("nonce",b),c.insertBefore(u,m),u},av=function(){function l(s){this.element=m0(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,m=u.length;d<m;d++){var b=u[d];if(b.ownerNode===c)return b}throw ca(17)}(this.element),this.length=0}return l.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},l.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},l}(),lv=function(){function l(s){this.element=m0(s),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[s]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},l.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},l}(),iv=function(){function l(s){this.rules=[],this.length=0}return l.prototype.insertRule=function(s,c){return s<=this.length&&(this.rules.splice(s,0,c),this.length++,!0)},l.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},l.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},l}(),jg=fo,rv={isServer:!fo,useCSSOMInjection:!Nx},g0=function(){function l(s,c,u){s===void 0&&(s=ml),c===void 0&&(c={});var d=this;this.options=nt(nt({},rv),s),this.gs=c,this.names=new Map(u),this.server=!!s.isServer,!this.server&&fo&&jg&&(jg=!1,Sg(this)),Ic(this,function(){return function(m){for(var b=m.getTag(),j=b.length,v="",p=function(M){var D=function(U){return ho.get(U)}(M);if(D===void 0)return"continue";var H=m.names.get(D),L=b.getGroup(M);if(H===void 0||!H.size||L.length===0)return"continue";var G="".concat(hl,".g").concat(M,'[id="').concat(D,'"]'),X="";H!==void 0&&H.forEach(function(U){U.length>0&&(X+="".concat(U,","))}),v+="".concat(L).concat(G,'{content:"').concat(X,'"}').concat(Fc)},E=0;E<j;E++)p(E);return v}(d)})}return l.registerId=function(s){return Vr(s)},l.prototype.rehydrate=function(){!this.server&&fo&&Sg(this)},l.prototype.reconstructWithOptions=function(s,c){return c===void 0&&(c=!0),new l(nt(nt({},this.options),s),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new iv(d):u?new av(d):new lv(d)}(this.options),new Wx(s)));var s},l.prototype.hasNameForId=function(s,c){return this.names.has(s)&&this.names.get(s).has(c)},l.prototype.registerName=function(s,c){if(Vr(s),this.names.has(s))this.names.get(s).add(c);else{var u=new Set;u.add(c),this.names.set(s,u)}},l.prototype.insertRules=function(s,c,u){this.registerName(s,c),this.getTag().insertRules(Vr(s),u)},l.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},l.prototype.clearRules=function(s){this.getTag().clearGroup(Vr(s)),this.clearNames(s)},l.prototype.clearTag=function(){this.tag=void 0},l}(),ov=/&/g,sv=/^\s*\/\/.*$/gm;function p0(l,s){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(u){return"".concat(s," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=p0(c.children,s)),c})}function uv(l){var s,c,u,d=ml,m=d.options,b=m===void 0?ml:m,j=d.plugins,v=j===void 0?So:j,p=function(D,H,L){return L.startsWith(c)&&L.endsWith(c)&&L.replaceAll(c,"").length>0?".".concat(s):D},E=v.slice();E.push(function(D){D.type===po&&D.value.includes("&")&&(D.props[0]=D.props[0].replace(ov,c).replace(u,p))}),b.prefix&&E.push(Ox),E.push(Dx);var M=function(D,H,L,G){H===void 0&&(H=""),L===void 0&&(L=""),G===void 0&&(G="&"),s=G,c=H,u=new RegExp("\\".concat(c,"\\b"),"g");var X=D.replace(sv,""),U=Mx(L||H?"".concat(L," ").concat(H," { ").concat(X," }"):X);b.namespace&&(U=p0(U,b.namespace));var J=[];return co(U,kx(E.concat(Cx(function(Q){return J.push(Q)})))),J};return M.hash=v.length?v.reduce(function(D,H){return H.name||ca(15),cl(D,H.name)},o0).toString():"",M}var cv=new g0,Xc=uv(),b0=sa.createContext({shouldForwardProp:void 0,styleSheet:cv,stylis:Xc});b0.Consumer;sa.createContext(void 0);function wg(){return R.useContext(b0)}var x0=function(){function l(s,c){var u=this;this.inject=function(d,m){m===void 0&&(m=Xc);var b=u.name+m.hash;d.hasNameForId(u.id,b)||d.insertRules(u.id,b,m(u.rules,b,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,Ic(this,function(){throw ca(12,String(u.name))})}return l.prototype.getName=function(s){return s===void 0&&(s=Xc),this.name+s.hash},l}(),fv=function(l){return l>="A"&&l<="Z"};function _g(l){for(var s="",c=0;c<l.length;c++){var u=l[c];if(c===1&&u==="-"&&l[0]==="-")return l;fv(u)?s+="-"+u.toLowerCase():s+=u}return s.startsWith("ms-")?"-"+s:s}var v0=function(l){return l==null||l===!1||l===""},y0=function(l){var s,c,u=[];for(var d in l){var m=l[d];l.hasOwnProperty(d)&&!v0(m)&&(Array.isArray(m)&&m.isCss||ua(m)?u.push("".concat(_g(d),":"),m,";"):_i(m)?u.push.apply(u,wi(wi(["".concat(d," {")],y0(m),!1),["}"],!1)):u.push("".concat(_g(d),": ").concat((s=d,(c=m)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in Bx||s.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function oa(l,s,c,u){if(v0(l))return[];if(Pc(l))return[".".concat(l.styledComponentId)];if(ua(l)){if(!ua(m=l)||m.prototype&&m.prototype.isReactComponent||!s)return[l];var d=l(s);return oa(d,s,c,u)}var m;return l instanceof x0?c?(l.inject(c,u),[l.getName(u)]):[l]:_i(l)?y0(l):Array.isArray(l)?Array.prototype.concat.apply(So,l.map(function(b){return oa(b,s,c,u)})):[l.toString()]}function dv(l){for(var s=0;s<l.length;s+=1){var c=l[s];if(ua(c)&&!Pc(c))return!1}return!0}var hv=s0(yo),mv=function(){function l(s,c,u){this.rules=s,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&dv(s),this.componentId=c,this.baseHash=cl(hv,c),this.baseStyle=u,g0.registerId(c)}return l.prototype.generateAndInjectStyles=function(s,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=ia(d,this.staticRulesId);else{var m=qc(oa(this.rules,s,c,u)),b=Yc(cl(this.baseHash,m)>>>0);if(!c.hasNameForId(this.componentId,b)){var j=u(m,".".concat(b),void 0,this.componentId);c.insertRules(this.componentId,b,j)}d=ia(d,b),this.staticRulesId=b}else{for(var v=cl(this.baseHash,u.hash),p="",E=0;E<this.rules.length;E++){var M=this.rules[E];if(typeof M=="string")p+=M;else if(M){var D=qc(oa(M,s,c,u));v=cl(v,D+E),p+=D}}if(p){var H=Yc(v>>>0);c.hasNameForId(this.componentId,H)||c.insertRules(this.componentId,H,u(p,".".concat(H),void 0,this.componentId)),d=ia(d,H)}}return d},l}(),mo=sa.createContext(void 0);mo.Consumer;function gv(l){var s=sa.useContext(mo),c=R.useMemo(function(){return function(u,d){if(!u)throw ca(14);if(ua(u)){var m=u(d);return m}if(Array.isArray(u)||typeof u!="object")throw ca(8);return d?nt(nt({},d),u):u}(l.theme,s)},[l.theme,s]);return l.children?sa.createElement(mo.Provider,{value:c},l.children):null}var Ku={};function pv(l,s,c){var u=Pc(l),d=l,m=!Zu(l),b=s.attrs,j=b===void 0?So:b,v=s.componentId,p=v===void 0?function(ae,Z){var le=typeof ae!="string"?"sc":pg(ae);Ku[le]=(Ku[le]||0)+1;var W="".concat(le,"-").concat(u0(yo+le+Ku[le]));return Z?"".concat(Z,"-").concat(W):W}(s.displayName,s.parentComponentId):v,E=s.displayName,M=E===void 0?function(ae){return Zu(ae)?"styled.".concat(ae):"Styled(".concat(Yx(ae),")")}(l):E,D=s.displayName&&s.componentId?"".concat(pg(s.displayName),"-").concat(s.componentId):s.componentId||p,H=u&&d.attrs?d.attrs.concat(j).filter(Boolean):j,L=s.shouldForwardProp;if(u&&d.shouldForwardProp){var G=d.shouldForwardProp;if(s.shouldForwardProp){var X=s.shouldForwardProp;L=function(ae,Z){return G(ae,Z)&&X(ae,Z)}}else L=G}var U=new mv(c,D,u?d.componentStyle:void 0);function J(ae,Z){return function(le,W,Ee){var we=le.attrs,at=le.componentStyle,it=le.defaultProps,Ye=le.foldedComponentIds,Zt=le.styledComponentId,Kt=le.target,qe=sa.useContext(mo),k=wg(),q=le.shouldForwardProp||k.shouldForwardProp,P=Ux(W,qe,it)||ml,ue=function(ce,ee,Ve){for(var pe,Pe=nt(nt({},ee),{className:void 0,theme:Ve}),Gn=0;Gn<ce.length;Gn+=1){var $t=ua(pe=ce[Gn])?pe(Pe):pe;for(var St in $t)Pe[St]=St==="className"?ia(Pe[St],$t[St]):St==="style"?nt(nt({},Pe[St]),$t[St]):$t[St]}return ee.className&&(Pe.className=ia(Pe.className,ee.className)),Pe}(we,W,P),y=ue.as||Kt,N={};for(var Y in ue)ue[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ue.theme===P||(Y==="forwardedAs"?N.as=ue.forwardedAs:q&&!q(Y,y)||(N[Y]=ue[Y]));var V=function(ce,ee){var Ve=wg(),pe=ce.generateAndInjectStyles(ee,Ve.styleSheet,Ve.stylis);return pe}(at,ue),F=ia(Ye,Zt);return V&&(F+=" "+V),ue.className&&(F+=" "+ue.className),N[Zu(y)&&!r0.has(y)?"class":"className"]=F,Ee&&(N.ref=Ee),R.createElement(y,N)}(Q,ae,Z)}J.displayName=M;var Q=sa.forwardRef(J);return Q.attrs=H,Q.componentStyle=U,Q.displayName=M,Q.shouldForwardProp=L,Q.foldedComponentIds=u?ia(d.foldedComponentIds,d.styledComponentId):"",Q.styledComponentId=D,Q.target=u?d.target:l,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ae){this._foldedDefaultProps=u?function(Z){for(var le=[],W=1;W<arguments.length;W++)le[W-1]=arguments[W];for(var Ee=0,we=le;Ee<we.length;Ee++)Vc(Z,we[Ee],!0);return Z}({},d.defaultProps,ae):ae}}),Ic(Q,function(){return".".concat(Q.styledComponentId)}),m&&h0(Q,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function zg(l,s){for(var c=[l[0]],u=0,d=s.length;u<d;u+=1)c.push(s[u],l[u+1]);return c}var Eg=function(l){return Object.assign(l,{isCss:!0})};function S0(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(ua(l)||_i(l))return Eg(oa(zg(So,wi([l],s,!0))));var u=l;return s.length===0&&u.length===1&&typeof u[0]=="string"?oa(u):Eg(oa(zg(u,s)))}function Qc(l,s,c){if(c===void 0&&(c=ml),!s)throw ca(1,s);var u=function(d){for(var m=[],b=1;b<arguments.length;b++)m[b-1]=arguments[b];return l(s,c,S0.apply(void 0,wi([d],m,!1)))};return u.attrs=function(d){return Qc(l,s,nt(nt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Qc(l,s,nt(nt({},c),d))},u}var j0=function(l){return Qc(pv,l)},g=j0;r0.forEach(function(l){g[l]=j0(l)});function w0(l){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];var u=qc(S0.apply(void 0,wi([l],s,!1))),d=u0(u);return new x0(d,u)}/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Tg="popstate";function bv(l={}){function s(u,d){let{pathname:m,search:b,hash:j}=u.location;return Zc("",{pathname:m,search:b,hash:j},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:zi(d)}return vv(s,c,null,l)}function Re(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function Nt(l,s){if(!l){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function xv(){return Math.random().toString(36).substring(2,10)}function Ag(l,s){return{usr:l.state,key:l.key,idx:s}}function Zc(l,s,c=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof s=="string"?pl(s):s,state:c,key:s&&s.key||u||xv()}}function zi({pathname:l="/",search:s="",hash:c=""}){return s&&s!=="?"&&(l+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function pl(l){let s={};if(l){let c=l.indexOf("#");c>=0&&(s.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(s.search=l.substring(u),l=l.substring(0,u)),l&&(s.pathname=l)}return s}function vv(l,s,c,u={}){let{window:d=document.defaultView,v5Compat:m=!1}=u,b=d.history,j="POP",v=null,p=E();p==null&&(p=0,b.replaceState({...b.state,idx:p},""));function E(){return(b.state||{idx:null}).idx}function M(){j="POP";let X=E(),U=X==null?null:X-p;p=X,v&&v({action:j,location:G.location,delta:U})}function D(X,U){j="PUSH";let J=Zc(G.location,X,U);p=E()+1;let Q=Ag(J,p),ae=G.createHref(J);try{b.pushState(Q,"",ae)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;d.location.assign(ae)}m&&v&&v({action:j,location:G.location,delta:1})}function H(X,U){j="REPLACE";let J=Zc(G.location,X,U);p=E();let Q=Ag(J,p),ae=G.createHref(J);b.replaceState(Q,"",ae),m&&v&&v({action:j,location:G.location,delta:0})}function L(X){return yv(X)}let G={get action(){return j},get location(){return l(d,b)},listen(X){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Tg,M),v=X,()=>{d.removeEventListener(Tg,M),v=null}},createHref(X){return s(d,X)},createURL:L,encodeLocation(X){let U=L(X);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:D,replace:H,go(X){return b.go(X)}};return G}function yv(l,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Re(c,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:zi(l);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function _0(l,s,c="/"){return Sv(l,s,c,!1)}function Sv(l,s,c,u){let d=typeof s=="string"?pl(s):s,m=hn(d.pathname||"/",c);if(m==null)return null;let b=z0(l);jv(b);let j=null;for(let v=0;j==null&&v<b.length;++v){let p=Cv(m);j=Dv(b[v],p,u)}return j}function z0(l,s=[],c=[],u=""){let d=(m,b,j)=>{let v={relativePath:j===void 0?m.path||"":j,caseSensitive:m.caseSensitive===!0,childrenIndex:b,route:m};v.relativePath.startsWith("/")&&(Re(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length));let p=dn([u,v.relativePath]),E=c.concat(v);m.children&&m.children.length>0&&(Re(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),z0(m.children,s,E,p)),!(m.path==null&&!m.index)&&s.push({path:p,score:Mv(p,m.index),routesMeta:E})};return l.forEach((m,b)=>{if(m.path===""||!m.path?.includes("?"))d(m,b);else for(let j of E0(m.path))d(m,b,j)}),s}function E0(l){let s=l.split("/");if(s.length===0)return[];let[c,...u]=s,d=c.endsWith("?"),m=c.replace(/\?$/,"");if(u.length===0)return d?[m,""]:[m];let b=E0(u.join("/")),j=[];return j.push(...b.map(v=>v===""?m:[m,v].join("/"))),d&&j.push(...b),j.map(v=>l.startsWith("/")&&v===""?"/":v)}function jv(l){l.sort((s,c)=>s.score!==c.score?c.score-s.score:Rv(s.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var wv=/^:[\w-]+$/,_v=3,zv=2,Ev=1,Tv=10,Av=-2,Mg=l=>l==="*";function Mv(l,s){let c=l.split("/"),u=c.length;return c.some(Mg)&&(u+=Av),s&&(u+=zv),c.filter(d=>!Mg(d)).reduce((d,m)=>d+(wv.test(m)?_v:m===""?Ev:Tv),u)}function Rv(l,s){return l.length===s.length&&l.slice(0,-1).every((u,d)=>u===s[d])?l[l.length-1]-s[s.length-1]:0}function Dv(l,s,c=!1){let{routesMeta:u}=l,d={},m="/",b=[];for(let j=0;j<u.length;++j){let v=u[j],p=j===u.length-1,E=m==="/"?s:s.slice(m.length)||"/",M=go({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},E),D=v.route;if(!M&&p&&c&&!u[u.length-1].route.index&&(M=go({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},E)),!M)return null;Object.assign(d,M.params),b.push({params:d,pathname:dn([m,M.pathname]),pathnameBase:Uv(dn([m,M.pathnameBase])),route:D}),M.pathnameBase!=="/"&&(m=dn([m,M.pathnameBase]))}return b}function go(l,s){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=kv(l.path,l.caseSensitive,l.end),d=s.match(c);if(!d)return null;let m=d[0],b=m.replace(/(.)\/+$/,"$1"),j=d.slice(1);return{params:u.reduce((p,{paramName:E,isOptional:M},D)=>{if(E==="*"){let L=j[D]||"";b=m.slice(0,m.length-L.length).replace(/(.)\/+$/,"$1")}const H=j[D];return M&&!H?p[E]=void 0:p[E]=(H||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:b,pattern:l}}function kv(l,s=!1,c=!0){Nt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,j,v)=>(u.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(u.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),u]}function Cv(l){try{return l.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Nt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),l}}function hn(l,s){if(s==="/")return l;if(!l.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}function Ov(l,s="/"){let{pathname:c,search:u="",hash:d=""}=typeof l=="string"?pl(l):l;return{pathname:c?c.startsWith("/")?c:Bv(c,s):s,search:Hv(u),hash:Lv(d)}}function Bv(l,s){let c=s.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function $u(l,s,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Nv(l){return l.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function ef(l){let s=Nv(l);return s.map((c,u)=>u===s.length-1?c.pathname:c.pathnameBase)}function tf(l,s,c,u=!1){let d;typeof l=="string"?d=pl(l):(d={...l},Re(!d.pathname||!d.pathname.includes("?"),$u("?","pathname","search",d)),Re(!d.pathname||!d.pathname.includes("#"),$u("#","pathname","hash",d)),Re(!d.search||!d.search.includes("#"),$u("#","search","hash",d)));let m=l===""||d.pathname==="",b=m?"/":d.pathname,j;if(b==null)j=c;else{let M=s.length-1;if(!u&&b.startsWith("..")){let D=b.split("/");for(;D[0]==="..";)D.shift(),M-=1;d.pathname=D.join("/")}j=M>=0?s[M]:"/"}let v=Ov(d,j),p=b&&b!=="/"&&b.endsWith("/"),E=(m||b===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(p||E)&&(v.pathname+="/"),v}var dn=l=>l.join("/").replace(/\/\/+/g,"/"),Uv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Hv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Lv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Gv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var T0=["POST","PUT","PATCH","DELETE"];new Set(T0);var Yv=["GET",...T0];new Set(Yv);var bl=R.createContext(null);bl.displayName="DataRouter";var jo=R.createContext(null);jo.displayName="DataRouterState";R.createContext(!1);var A0=R.createContext({isTransitioning:!1});A0.displayName="ViewTransition";var qv=R.createContext(new Map);qv.displayName="Fetchers";var Vv=R.createContext(null);Vv.displayName="Await";var Ut=R.createContext(null);Ut.displayName="Navigation";var Ei=R.createContext(null);Ei.displayName="Location";var Qt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var nf=R.createContext(null);nf.displayName="RouteError";function Xv(l,{relative:s}={}){Re(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=R.useContext(Ut),{hash:d,pathname:m,search:b}=Ti(l,{relative:s}),j=m;return c!=="/"&&(j=m==="/"?c:dn([c,m])),u.createHref({pathname:j,search:b,hash:d})}function xl(){return R.useContext(Ei)!=null}function mn(){return Re(xl(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Ei).location}var M0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function R0(l){R.useContext(Ut).static||R.useLayoutEffect(l)}function D0(){let{isDataRoute:l}=R.useContext(Qt);return l?ay():Qv()}function Qv(){Re(xl(),"useNavigate() may be used only in the context of a <Router> component.");let l=R.useContext(bl),{basename:s,navigator:c}=R.useContext(Ut),{matches:u}=R.useContext(Qt),{pathname:d}=mn(),m=JSON.stringify(ef(u)),b=R.useRef(!1);return R0(()=>{b.current=!0}),R.useCallback((v,p={})=>{if(Nt(b.current,M0),!b.current)return;if(typeof v=="number"){c.go(v);return}let E=tf(v,JSON.parse(m),d,p.relative==="path");l==null&&s!=="/"&&(E.pathname=E.pathname==="/"?s:dn([s,E.pathname])),(p.replace?c.replace:c.push)(E,p.state,p)},[s,c,m,d,l])}R.createContext(null);function Ti(l,{relative:s}={}){let{matches:c}=R.useContext(Qt),{pathname:u}=mn(),d=JSON.stringify(ef(c));return R.useMemo(()=>tf(l,JSON.parse(d),u,s==="path"),[l,d,u,s])}function Zv(l,s){return k0(l,s)}function k0(l,s,c,u){Re(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=R.useContext(Ut),{matches:m}=R.useContext(Qt),b=m[m.length-1],j=b?b.params:{},v=b?b.pathname:"/",p=b?b.pathnameBase:"/",E=b&&b.route;{let U=E&&E.path||"";C0(v,!E||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let M=mn(),D;if(s){let U=typeof s=="string"?pl(s):s;Re(p==="/"||U.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${U.pathname}" was given in the \`location\` prop.`),D=U}else D=M;let H=D.pathname||"/",L=H;if(p!=="/"){let U=p.replace(/^\//,"").split("/");L="/"+H.replace(/^\//,"").split("/").slice(U.length).join("/")}let G=_0(l,{pathname:L});Nt(E||G!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Nt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let X=Fv(G&&G.map(U=>Object.assign({},U,{params:Object.assign({},j,U.params),pathname:dn([p,d.encodeLocation?d.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?p:dn([p,d.encodeLocation?d.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),m,c,u);return s&&X?R.createElement(Ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},X):X}function Kv(){let l=ny(),s=Gv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},b=null;return console.error("Error handled by React Router default ErrorBoundary:",l),b=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:m},"ErrorBoundary")," or"," ",R.createElement("code",{style:m},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},s),c?R.createElement("pre",{style:d},c):null,b)}var $v=R.createElement(Kv,null),Jv=class extends R.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,s){return s.location!==l.location||s.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:s.error,location:s.location,revalidation:l.revalidation||s.revalidation}}componentDidCatch(l,s){console.error("React Router caught the following error during render",l,s)}render(){return this.state.error!==void 0?R.createElement(Qt.Provider,{value:this.props.routeContext},R.createElement(nf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Wv({routeContext:l,match:s,children:c}){let u=R.useContext(bl);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),R.createElement(Qt.Provider,{value:l},c)}function Fv(l,s=[],c=null,u=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let d=l,m=c?.errors;if(m!=null){let v=d.findIndex(p=>p.route.id&&m?.[p.route.id]!==void 0);Re(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let b=!1,j=-1;if(c)for(let v=0;v<d.length;v++){let p=d[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(j=v),p.route.id){let{loaderData:E,errors:M}=c,D=p.route.loader&&!E.hasOwnProperty(p.route.id)&&(!M||M[p.route.id]===void 0);if(p.route.lazy||D){b=!0,j>=0?d=d.slice(0,j+1):d=[d[0]];break}}}return d.reduceRight((v,p,E)=>{let M,D=!1,H=null,L=null;c&&(M=m&&p.route.id?m[p.route.id]:void 0,H=p.route.errorElement||$v,b&&(j<0&&E===0?(C0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,L=null):j===E&&(D=!0,L=p.route.hydrateFallbackElement||null)));let G=s.concat(d.slice(0,E+1)),X=()=>{let U;return M?U=H:D?U=L:p.route.Component?U=R.createElement(p.route.Component,null):p.route.element?U=p.route.element:U=v,R.createElement(Wv,{match:p,routeContext:{outlet:v,matches:G,isDataRoute:c!=null},children:U})};return c&&(p.route.ErrorBoundary||p.route.errorElement||E===0)?R.createElement(Jv,{location:c.location,revalidation:c.revalidation,component:H,error:M,children:X(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):X()},null)}function af(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pv(l){let s=R.useContext(bl);return Re(s,af(l)),s}function Iv(l){let s=R.useContext(jo);return Re(s,af(l)),s}function ey(l){let s=R.useContext(Qt);return Re(s,af(l)),s}function lf(l){let s=ey(l),c=s.matches[s.matches.length-1];return Re(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function ty(){return lf("useRouteId")}function ny(){let l=R.useContext(nf),s=Iv("useRouteError"),c=lf("useRouteError");return l!==void 0?l:s.errors?.[c]}function ay(){let{router:l}=Pv("useNavigate"),s=lf("useNavigate"),c=R.useRef(!1);return R0(()=>{c.current=!0}),R.useCallback(async(d,m={})=>{Nt(c.current,M0),c.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:s,...m}))},[l,s])}var Rg={};function C0(l,s,c){!s&&!Rg[l]&&(Rg[l]=!0,Nt(!1,c))}R.memo(ly);function ly({routes:l,future:s,state:c}){return k0(l,void 0,c,s)}function iy({to:l,replace:s,state:c,relative:u}){Re(xl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=R.useContext(Ut);Nt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=R.useContext(Qt),{pathname:b}=mn(),j=D0(),v=tf(l,ef(m),b,u==="path"),p=JSON.stringify(v);return R.useEffect(()=>{j(JSON.parse(p),{replace:s,state:c,relative:u})},[j,p,u,s,c]),null}function ul(l){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ry({basename:l="/",children:s=null,location:c,navigationType:u="POP",navigator:d,static:m=!1}){Re(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=l.replace(/^\/*/,"/"),j=R.useMemo(()=>({basename:b,navigator:d,static:m,future:{}}),[b,d,m]);typeof c=="string"&&(c=pl(c));let{pathname:v="/",search:p="",hash:E="",state:M=null,key:D="default"}=c,H=R.useMemo(()=>{let L=hn(v,b);return L==null?null:{location:{pathname:L,search:p,hash:E,state:M,key:D},navigationType:u}},[b,v,p,E,M,D,u]);return Nt(H!=null,`<Router basename="${b}"> is not able to match the URL "${v}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:R.createElement(Ut.Provider,{value:j},R.createElement(Ei.Provider,{children:s,value:H}))}function oy({children:l,location:s}){return Zv(Kc(l),s)}function Kc(l,s=[]){let c=[];return R.Children.forEach(l,(u,d)=>{if(!R.isValidElement(u))return;let m=[...s,d];if(u.type===R.Fragment){c.push.apply(c,Kc(u.props.children,m));return}Re(u.type===ul,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!u.props.index||!u.props.children,"An index route cannot have child routes.");let b={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(b.children=Kc(u.props.children,m)),c.push(b)}),c}var so="get",uo="application/x-www-form-urlencoded";function wo(l){return l!=null&&typeof l.tagName=="string"}function sy(l){return wo(l)&&l.tagName.toLowerCase()==="button"}function uy(l){return wo(l)&&l.tagName.toLowerCase()==="form"}function cy(l){return wo(l)&&l.tagName.toLowerCase()==="input"}function fy(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function dy(l,s){return l.button===0&&(!s||s==="_self")&&!fy(l)}var Xr=null;function hy(){if(Xr===null)try{new FormData(document.createElement("form"),0),Xr=!1}catch{Xr=!0}return Xr}var my=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ju(l){return l!=null&&!my.has(l)?(Nt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uo}"`),null):l}function gy(l,s){let c,u,d,m,b;if(uy(l)){let j=l.getAttribute("action");u=j?hn(j,s):null,c=l.getAttribute("method")||so,d=Ju(l.getAttribute("enctype"))||uo,m=new FormData(l)}else if(sy(l)||cy(l)&&(l.type==="submit"||l.type==="image")){let j=l.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=l.getAttribute("formaction")||j.getAttribute("action");if(u=v?hn(v,s):null,c=l.getAttribute("formmethod")||j.getAttribute("method")||so,d=Ju(l.getAttribute("formenctype"))||Ju(j.getAttribute("enctype"))||uo,m=new FormData(j,l),!hy()){let{name:p,type:E,value:M}=l;if(E==="image"){let D=p?`${p}.`:"";m.append(`${D}x`,"0"),m.append(`${D}y`,"0")}else p&&m.append(p,M)}}else{if(wo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=so,u=null,d=uo,b=l}return m&&d==="text/plain"&&(b=m,m=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:m,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rf(l,s){if(l===!1||l===null||typeof l>"u")throw new Error(s)}function py(l,s,c){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname=`_root.${c}`:s&&hn(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function by(l,s){if(l.id in s)return s[l.id];try{let c=await import(l.module);return s[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xy(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function vy(l,s,c){let u=await Promise.all(l.map(async d=>{let m=s.routes[d.route.id];if(m){let b=await by(m,c);return b.links?b.links():[]}return[]}));return wy(u.flat(1).filter(xy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Dg(l,s,c,u,d,m){let b=(v,p)=>c[p]?v.route.id!==c[p].route.id:!0,j=(v,p)=>c[p].pathname!==v.pathname||c[p].route.path?.endsWith("*")&&c[p].params["*"]!==v.params["*"];return m==="assets"?s.filter((v,p)=>b(v,p)||j(v,p)):m==="data"?s.filter((v,p)=>{let E=u.routes[v.route.id];if(!E||!E.hasLoader)return!1;if(b(v,p)||j(v,p))return!0;if(v.route.shouldRevalidate){let M=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function yy(l,s,{includeHydrateFallback:c}={}){return Sy(l.map(u=>{let d=s.routes[u.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function Sy(l){return[...new Set(l)]}function jy(l){let s={},c=Object.keys(l).sort();for(let u of c)s[u]=l[u];return s}function wy(l,s){let c=new Set;return new Set(s),l.reduce((u,d)=>{let m=JSON.stringify(jy(d));return c.has(m)||(c.add(m),u.push({key:m,link:d})),u},[])}function O0(){let l=R.useContext(bl);return rf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function _y(){let l=R.useContext(jo);return rf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var of=R.createContext(void 0);of.displayName="FrameworkContext";function B0(){let l=R.useContext(of);return rf(l,"You must render this element inside a <HydratedRouter> element"),l}function zy(l,s){let c=R.useContext(of),[u,d]=R.useState(!1),[m,b]=R.useState(!1),{onFocus:j,onBlur:v,onMouseEnter:p,onMouseLeave:E,onTouchStart:M}=s,D=R.useRef(null);R.useEffect(()=>{if(l==="render"&&b(!0),l==="viewport"){let G=U=>{U.forEach(J=>{b(J.isIntersecting)})},X=new IntersectionObserver(G,{threshold:.5});return D.current&&X.observe(D.current),()=>{X.disconnect()}}},[l]),R.useEffect(()=>{if(u){let G=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(G)}}},[u]);let H=()=>{d(!0)},L=()=>{d(!1),b(!1)};return c?l!=="intent"?[m,D,{}]:[m,D,{onFocus:xi(j,H),onBlur:xi(v,L),onMouseEnter:xi(p,H),onMouseLeave:xi(E,L),onTouchStart:xi(M,H)}]:[!1,D,{}]}function xi(l,s){return c=>{l&&l(c),c.defaultPrevented||s(c)}}function Ey({page:l,...s}){let{router:c}=O0(),u=R.useMemo(()=>_0(c.routes,l,c.basename),[c.routes,l,c.basename]);return u?R.createElement(Ay,{page:l,matches:u,...s}):null}function Ty(l){let{manifest:s,routeModules:c}=B0(),[u,d]=R.useState([]);return R.useEffect(()=>{let m=!1;return vy(l,s,c).then(b=>{m||d(b)}),()=>{m=!0}},[l,s,c]),u}function Ay({page:l,matches:s,...c}){let u=mn(),{manifest:d,routeModules:m}=B0(),{basename:b}=O0(),{loaderData:j,matches:v}=_y(),p=R.useMemo(()=>Dg(l,s,v,d,u,"data"),[l,s,v,d,u]),E=R.useMemo(()=>Dg(l,s,v,d,u,"assets"),[l,s,v,d,u]),M=R.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let L=new Set,G=!1;if(s.forEach(U=>{let J=d.routes[U.route.id];!J||!J.hasLoader||(!p.some(Q=>Q.route.id===U.route.id)&&U.route.id in j&&m[U.route.id]?.shouldRevalidate||J.hasClientLoader?G=!0:L.add(U.route.id))}),L.size===0)return[];let X=py(l,b,"data");return G&&L.size>0&&X.searchParams.set("_routes",s.filter(U=>L.has(U.route.id)).map(U=>U.route.id).join(",")),[X.pathname+X.search]},[b,j,u,d,p,s,l,m]),D=R.useMemo(()=>yy(E,d),[E,d]),H=Ty(E);return R.createElement(R.Fragment,null,M.map(L=>R.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...c})),D.map(L=>R.createElement("link",{key:L,rel:"modulepreload",href:L,...c})),H.map(({key:L,link:G})=>R.createElement("link",{key:L,...G})))}function My(...l){return s=>{l.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var N0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{N0&&(window.__reactRouterVersion="7.7.1")}catch{}function Ry({basename:l,children:s,window:c}){let u=R.useRef();u.current==null&&(u.current=bv({window:c,v5Compat:!0}));let d=u.current,[m,b]=R.useState({action:d.action,location:d.location}),j=R.useCallback(v=>{R.startTransition(()=>b(v))},[b]);return R.useLayoutEffect(()=>d.listen(j),[d,j]),R.createElement(ry,{basename:l,children:s,location:m.location,navigationType:m.action,navigator:d})}var U0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sf=R.forwardRef(function({onClick:s,discover:c="render",prefetch:u="none",relative:d,reloadDocument:m,replace:b,state:j,target:v,to:p,preventScrollReset:E,viewTransition:M,...D},H){let{basename:L}=R.useContext(Ut),G=typeof p=="string"&&U0.test(p),X,U=!1;if(typeof p=="string"&&G&&(X=p,N0))try{let we=new URL(window.location.href),at=p.startsWith("//")?new URL(we.protocol+p):new URL(p),it=hn(at.pathname,L);at.origin===we.origin&&it!=null?p=it+at.search+at.hash:U=!0}catch{Nt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=Xv(p,{relative:d}),[Q,ae,Z]=zy(u,D),le=Oy(p,{replace:b,state:j,target:v,preventScrollReset:E,relative:d,viewTransition:M});function W(we){s&&s(we),we.defaultPrevented||le(we)}let Ee=R.createElement("a",{...D,...Z,href:X||J,onClick:U||m?s:W,ref:My(H,ae),target:v,"data-discover":!G&&c==="render"?"true":void 0});return Q&&!G?R.createElement(R.Fragment,null,Ee,R.createElement(Ey,{page:J})):Ee});sf.displayName="Link";var Dy=R.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:u="",end:d=!1,style:m,to:b,viewTransition:j,children:v,...p},E){let M=Ti(b,{relative:p.relative}),D=mn(),H=R.useContext(jo),{navigator:L,basename:G}=R.useContext(Ut),X=H!=null&&Ly(M)&&j===!0,U=L.encodeLocation?L.encodeLocation(M).pathname:M.pathname,J=D.pathname,Q=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;c||(J=J.toLowerCase(),Q=Q?Q.toLowerCase():null,U=U.toLowerCase()),Q&&G&&(Q=hn(Q,G)||Q);const ae=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Z=J===U||!d&&J.startsWith(U)&&J.charAt(ae)==="/",le=Q!=null&&(Q===U||!d&&Q.startsWith(U)&&Q.charAt(U.length)==="/"),W={isActive:Z,isPending:le,isTransitioning:X},Ee=Z?s:void 0,we;typeof u=="function"?we=u(W):we=[u,Z?"active":null,le?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let at=typeof m=="function"?m(W):m;return R.createElement(sf,{...p,"aria-current":Ee,className:we,ref:E,style:at,to:b,viewTransition:j},typeof v=="function"?v(W):v)});Dy.displayName="NavLink";var ky=R.forwardRef(({discover:l="render",fetcherKey:s,navigate:c,reloadDocument:u,replace:d,state:m,method:b=so,action:j,onSubmit:v,relative:p,preventScrollReset:E,viewTransition:M,...D},H)=>{let L=Uy(),G=Hy(j,{relative:p}),X=b.toLowerCase()==="get"?"get":"post",U=typeof j=="string"&&U0.test(j),J=Q=>{if(v&&v(Q),Q.defaultPrevented)return;Q.preventDefault();let ae=Q.nativeEvent.submitter,Z=ae?.getAttribute("formmethod")||b;L(ae||Q.currentTarget,{fetcherKey:s,method:Z,navigate:c,replace:d,state:m,relative:p,preventScrollReset:E,viewTransition:M})};return R.createElement("form",{ref:H,method:X,action:G,onSubmit:u?v:J,...D,"data-discover":!U&&l==="render"?"true":void 0})});ky.displayName="Form";function Cy(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H0(l){let s=R.useContext(bl);return Re(s,Cy(l)),s}function Oy(l,{target:s,replace:c,state:u,preventScrollReset:d,relative:m,viewTransition:b}={}){let j=D0(),v=mn(),p=Ti(l,{relative:m});return R.useCallback(E=>{if(dy(E,s)){E.preventDefault();let M=c!==void 0?c:zi(v)===zi(p);j(l,{replace:M,state:u,preventScrollReset:d,relative:m,viewTransition:b})}},[v,j,p,c,u,s,l,d,m,b])}var By=0,Ny=()=>`__${String(++By)}__`;function Uy(){let{router:l}=H0("useSubmit"),{basename:s}=R.useContext(Ut),c=ty();return R.useCallback(async(u,d={})=>{let{action:m,method:b,encType:j,formData:v,body:p}=gy(u,s);if(d.navigate===!1){let E=d.fetcherKey||Ny();await l.fetch(E,c,d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||b,formEncType:d.encType||j,flushSync:d.flushSync})}else await l.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||b,formEncType:d.encType||j,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,s,c])}function Hy(l,{relative:s}={}){let{basename:c}=R.useContext(Ut),u=R.useContext(Qt);Re(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),m={...Ti(l||".",{relative:s})},b=mn();if(l==null){m.search=b.search;let j=new URLSearchParams(m.search),v=j.getAll("index");if(v.some(E=>E==="")){j.delete("index"),v.filter(M=>M).forEach(M=>j.append("index",M));let E=j.toString();m.search=E?`?${E}`:""}}return(!l||l===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:dn([c,m.pathname])),zi(m)}function Ly(l,{relative:s}={}){let c=R.useContext(A0);Re(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=H0("useViewTransitionState"),d=Ti(l,{relative:s});if(!c.isTransitioning)return!1;let m=hn(c.currentLocation.pathname,u)||c.currentLocation.pathname,b=hn(c.nextLocation.pathname,u)||c.nextLocation.pathname;return go(d.pathname,b)!=null||go(d.pathname,m)!=null}const Gy="/assets/logo-Hzr1jdtX.png",Yy=g.nav`
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`,qy=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`,Vy=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Xy=g.img`
  height: 40px;
  width: auto;
`,Qy=g.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${l=>l.theme.colors.primary};
  margin: 0;

  @media (max-width: 640px) {
    display: none;
  }
`,Zy=g.div`
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
`,vi=g(sf)`
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
`,Ky=g.button`
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
`;function $y(){const l=mn(),[s,c]=R.useState(!1);return o.jsx(Yy,{children:o.jsxs(qy,{children:[o.jsx(vi,{to:"/",onClick:()=>c(!1),children:o.jsxs(Vy,{children:[o.jsx(Xy,{src:Gy,alt:"SCKW Logo"}),o.jsx(Qy,{children:"SC Konstanz-Wollmatingen e. V."})]})}),o.jsxs(Ky,{"aria-label":"Menü öffnen/schließen","aria-expanded":s,"aria-controls":"mobile-nav",onClick:()=>c(u=>!u),children:["Menü",o.jsx("span",{style:{fontSize:"1.25rem",marginLeft:"0.1rem"},children:"☰"})]}),o.jsxs(Zy,{id:"mobile-nav",$open:s,children:[o.jsx(vi,{to:"/sponsoring",$active:l.pathname==="/sponsoring",onClick:()=>c(!1),children:"🤝 Sponsoring"}),o.jsx(vi,{to:"/sponsoring-v2",$active:l.pathname==="/sponsoring-v2",onClick:()=>c(!1),children:"🚀 Sponsoring V2"}),o.jsx(vi,{to:"/jobs",$active:l.pathname==="/jobs",onClick:()=>c(!1),children:"💼 Jobbörse"}),o.jsx(vi,{to:"/renovierung",$active:l.pathname==="/renovierung",onClick:()=>c(!1),children:"🏗️ Renovierung"})]})]})})}const Jy=g.footer`
  width: 100%;
  text-align: center;
  padding: 2.5rem 0 2rem 0;
  font-size: 1rem;
  color: #888;
  background: transparent;
  font-family: inherit;
  letter-spacing: 0.01em;
`,Wy=g.a`
  color: #e10073;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;function uf(){return o.jsxs(Jy,{children:["© ",new Date().getFullYear()," SC Konstanz-Wollmatingen •"," ",o.jsx(Wy,{href:"mailto:sponsoring@sckw.de",children:"sponsoring@sckw.de"})]})}const Wu=[{title:"🏆 Hauptsponsor",price:"15.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Trikotbrust 1. Mannschaft",highlight:!0,icon:"👕"},{text:"1 Banner (5x2 m) am Gelände",highlight:!1,icon:"🖼️"},{text:"1 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Social Media: Prominent*",highlight:!1,icon:"📱"},{text:"Website: Startseite Premium*",highlight:!1,icon:"🌐"}],benefits:["Trikotbrust 1. Mannschaft","1 Banner (5x2 m) am Gelände","Logo auf Präsentationsanzügen & Warm-ups","1 Seite im Stadionmagazin","3 Stadiondurchsagen pro Heimspiel","Social Media PROMINENT: Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Story) mit größter Fläche","Website STARTSEITE PREMIUM: Logo prominent auf der Startseite mit größter Fläche"]},{title:"🏟 Stadionpartner",price:"12.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:1,sponsors:[],keyBenefits:[{text:"Namensrecht Stadion",highlight:!0,icon:"🏟️"},{text:"Social Media Post/Monat",highlight:!1,icon:"📱"},{text:"Stadionansage bei jedem Heimspiel",highlight:!1,icon:"📢"},{text:"1 Bande + 4x Plakat",highlight:!0,icon:"🖼️"}],benefits:["Namensrecht Stadion (z. B. Firma-Arena)","Social Media Post/Monat","Stadionansage bei jedem Heimspiel","1 Bande (5x2 m) am Gelände","4x Plakat (A1) am Gelände"]},{title:"🥈 Co-Sponsor",price:"9.500 €/Jahr",status:"🟨 1 von 2 verfügbar",maxSponsors:2,sponsors:[],keyBenefits:[{text:"Trikotärmel",highlight:!0,icon:"👕"},{text:"1 Bande",highlight:!1,icon:"🖼️"},{text:"2x Social Media pro Spiel",highlight:!0,icon:"📱"},{text:"Social Media 1x pro Spiel",highlight:!1,icon:"📱"}],benefits:["Trikotärmel 1. Mannschaft","1 Bande (5x2 m) am Gelände","2x Social Media pro Spiel (Instagram)","Social Media 1x pro Spiel (Facebook)"]},{title:"🥈 SILBER",price:"5.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[{name:"Audi Zentrum Singen Gohm + Graf Hardenberg GmbH",image:"grafhardenberg.png",website:"https://www.grafhardenberg.de/de/standorte/singen/audi-zentrum-singen/",since:"2025",until:"2026"},{name:"Tasty Delivery GmbH",image:"tasty.png",website:"https://tasty-delivery.de",since:"2022",until:"2026"}],keyBenefits:[{text:"1 Bande",highlight:!0,icon:"🖼️"},{text:"Instagram-Erwähnung",highlight:!1,icon:"📱"},{text:"Werbeplane am Gelände",highlight:!1,icon:"🏟️"},{text:"Vereinsplakate + Eventsichtbarkeit",highlight:!0,icon:"🎉"}],benefits:["1 Bande (5x2 m) am Gelände","Instagram-Erwähnung","Werbeplane am Gelände","Vereinsplakate + Eventsichtbarkeit"]},{title:"🤝 Community-Partner",price:"2.000 €/Jahr",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[{name:"Logan’s Linde Wollmatingen",image:"logans.png",website:"https://logans-wollmatingen.de/",since:"2025",until:"2026"}],keyBenefits:[{text:"1 Bande (3x1 m, 6 Monate)",highlight:!1,icon:"🏟️"},{text:"1/4 Seite im Stadionmagazin",highlight:!1,icon:"📰"},{text:"Website: Startseite Basis*",highlight:!1,icon:"🌐"},{text:"Social Media: Basis*",highlight:!0,icon:"📱"},{text:"Optional: Events",highlight:!0,icon:"🎉"}],benefits:["1 Bande (3x1 m, 6 Monate sichtbar)","Website STARTSEITE BASIS: Logo auf der Startseite mit kleinster Fläche","Social Media BASIS: Begrüßungspost + 2 zusätzliche Posts pro Jahr","Optional: Gemeinsame Events (z. B. CL-Abende) mit dem Team in Ihrer Gastronomie zur gezielten Gäste- und Umsatzsteigerung."]},{title:"🏗️ Platz-Renovierung Spende",price:"Ab 100 € (Spende)",status:"🟩 Spenden willkommen",maxSponsors:999,sponsors:[],keyBenefits:[{text:"Platz-Sanierung unterstützen",highlight:!0,icon:"🏟️"},{text:"Spendenquittung",highlight:!1,icon:"📄"},{text:"Website: Dankesliste*",highlight:!1,icon:"🌐"},{text:"Vereinsgeschichte Teil werden",highlight:!0,icon:"🏆"}],benefits:["Unterstützung der Fürstenbergsportplatz-Renovierung","Steuerlich absetzbare Spendenquittung","Namentliche Erwähnung auf der Website (Dankesliste)","Teil der Vereinsgeschichte und Zukunft werden","Bei Spenden ab 1.000€: Kleine Dankestafel am renovierten Platz"]},{title:"🟧 Bandenwerbung",price:"800 €/Jahr",status:"🟩 Verfügbar",maxSponsors:30,sponsors:[],keyBenefits:[{text:"3x1m Werbebande",highlight:!0,icon:"🏟️"},{text:"Sichtbarkeit bei jedem Heimspiel",highlight:!1,icon:"⚽"},{text:"Link auf Homepage optional",highlight:!1,icon:"🌐"}],benefits:["3x1m Werbebande am Spielfeldrand","Sichtbarkeit bei jedem Heimspiel","Link auf Homepage optional"]},{title:"⚽ Ballspende",price:"150 €/pro Spiel",status:"🟩 Verfügbar",maxSponsors:10,sponsors:[],keyBenefits:[{text:"Social Media Post am Spieltag",highlight:!0,icon:"📱"},{text:"Namensnennung vor dem Spiel",highlight:!1,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Namensnennung vor dem Spiel","Namensnennung in der Halbzeitpause"]},{title:"⚽ Ballspende 5er Pack",price:"500 €/5 Spiele",status:"🟩 Verfügbar",maxSponsors:5,sponsors:[],keyBenefits:[{text:"Ballspende für 5 Spiele",highlight:!0,icon:"⚽"},{text:"Namensnennung vor jedem Spiel",highlight:!0,icon:"📢"},{text:"Namensnennung Halbzeitpause",highlight:!1,icon:"⏱️"}],benefits:["Ballspende für 5 Spiele","Namensnennung vor jedem Spiel","Namensnennung in der Halbzeitpause bei jedem Spiel","Günstigerer Preis pro Spiel gegenüber Einzelspende"]}],Fy=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,Py=g.div`
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
`,Iy=g.div`
  text-align: center;
  margin-bottom: 1.5rem;
`,e2=g.span`
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
`,t2=g.h3`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
  color: #222;
  margin: 0 0 0.5rem 0;
`,n2=g.div`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  color: ${l=>l.isVergeben?"#999":"#e10073"};
  margin-bottom: 1rem;
  text-decoration: ${l=>l.isVergeben?"line-through":"none"};
`,a2=g.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({status:l})=>l==="verfügbar"?"#d4edda":l==="vergeben"?"#f8d7da":"#fff3cd"};
  color: ${({status:l})=>l==="verfügbar"?"#155724":l==="vergeben"?"#721c24":"#856404"};
`,l2=g.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex: 1;
`,i2=g.li`
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
`,r2=g.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
`,o2=g.span`
  flex: 1;
`,s2=g.a`
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
`,u2=g.div`
  color: #666;
  font-size: 1rem;
  text-align: center;
  font-style: italic;
  margin: 1rem 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,c2="sponsoring@sckw.de";function Fu({packages:l}){const s=b=>b.toLowerCase().includes("verfügbar")?"verfügbar":b.toLowerCase().includes("vergeben")?"vergeben":"neutral",c=b=>{const j=b.match(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"));return j?j[0]:""},u=b=>{const j=b.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim(),v=encodeURIComponent(`Interesse am Sponsoring-Paket "${j}"`),p=encodeURIComponent(`Hallo liebes SCKW-Team,

ich interessiere mich sehr für das Sponsoring-Paket "${j}" und würde gerne mehr darüber erfahren.
Bitte senden Sie mir weitere Informationen und eine persönliche Kontaktaufnahme zu.

Mein Name: 
Firma (optional): 
Telefon (optional): 

Ich freue mich auf Ihre Rückmeldung!

Herzliche Grüße
`);return`mailto:${c2}?subject=${v}&body=${p}`},d=b=>{const j=b.maxSponsors-(b.sponsors?.length||0);return{availableSlots:j,isFullyBooked:j===0}},m=l.filter(b=>!b.title.includes("Platz-Renovierung"));return o.jsx(Fy,{children:m.map((b,j)=>{const{isFullyBooked:v}=d(b),p=s(b.status),E=p==="vergeben"||v,M=v?"vergeben":p,D=b.keyBenefits||[];return o.jsxs(Py,{isVergeben:E,children:[o.jsxs(Iy,{children:[o.jsx(e2,{children:c(b.title)}),o.jsx(t2,{children:b.title.replace(new RegExp("^(\\p{Emoji_Presentation}|\\p{Extended_Pictographic}|[\\u2600-\\u27BF])\\s*","u"),"").trim()}),!E&&o.jsx(n2,{children:b.price}),o.jsx(a2,{status:M,children:M==="vergeben"?"✅ Vergeben":"🟩 Verfügbar"})]}),E?o.jsx(u2,{children:"✅ Alle Plätze vergeben"}):o.jsx(l2,{children:D.map((H,L)=>o.jsxs(i2,{isHighlight:H.highlight,children:[o.jsx(r2,{children:H.icon}),o.jsx(o2,{children:H.text})]},L))}),o.jsx(s2,{href:E?void 0:u(b.title),isVergeben:E,children:E?"Vergeben":"Jetzt anfragen"})]},j)})})}const f2=g.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: ${l=>l.theme.colors.bgMuted};
  border: 1px solid ${l=>l.theme.colors.border};
  overflow: hidden;
`,d2=g.div`
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`,h2=g.button`
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
`,m2=g.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${l=>l.isOpen?"rotate(180deg)":"rotate(0deg)"};
  color: ${l=>l.theme.colors.primary};
`,g2=g.div`
  background: ${l=>l.theme.colors.bg};
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${l=>l.isOpen?"500px":"0"};
  opacity: ${l=>l.isOpen?"1":"0"};
`,p2=g.div`
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
`,b2=g.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`,x2=[{id:"social-media",title:"Social Media Stufen Erklärung",icon:"📱",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Prominent:"})," Begrüßungspost + Logo bei allen Posts/Reels (Vor- & Nachbericht, Stories) mit größter Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Erweitert:"})," Begrüßungspost + Logo bei Vor-/Nachbericht-Posts mit kleinerer Fläche",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Basis:"})," Begrüßungspost + 2 zusätzliche Posts pro Jahr"]})},{id:"website",title:"Website Stufen Erklärung",icon:"🌐",content:o.jsxs(o.Fragment,{children:[o.jsx("b",{children:"Startseite Premium:"})," Logo prominent auf der Startseite mit größter Fläche (Haupt-, Co-, Stadionpartner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Erweitert:"})," Logo auf der Startseite mit kleinerer Fläche (Premium-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Startseite Basis:"})," Logo auf der Startseite mit kleinster Fläche (Community-Partner)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Sponsoren-Seite:"})," Auflistung auf separater Sponsoren-Seite (Bandenwerbung & weitere)",o.jsx("br",{}),o.jsx("br",{}),o.jsx("b",{children:"Dankesliste:"})," Namentliche Erwähnung auf separater Spender-Dankesliste (Platz-Renovierung)"]})},{id:"banner-info",title:"Wichtige Hinweise zu Banden & Bannern",icon:"ℹ️",content:o.jsx(o.Fragment,{children:"Die Banden und Banner gehen in das Eigentum des Sponsors über. Die Material- und Herstellungskosten für Banden/Banner sind im Sponsoring-Betrag nicht enthalten und werden separat berechnet. Wir kümmern uns um Bestellung, Produktion und das Anbringen – Sie müssen sich um nichts kümmern!"})}];function v2(){const[l,s]=R.useState([]),c=d=>{s(m=>m.includes(d)?m.filter(b=>b!==d):[...m,d])},u=(d,m)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c(m))};return o.jsx(f2,{children:x2.map(d=>{const m=l.includes(d.id);return o.jsxs(d2,{children:[o.jsxs(h2,{isOpen:m,onClick:()=>c(d.id),onKeyDown:b=>u(b,d.id),"aria-expanded":m,"aria-controls":`accordion-content-${d.id}`,children:[o.jsxs("span",{children:[o.jsx(b2,{children:d.icon}),d.title]}),o.jsx(m2,{isOpen:m,children:"▼"})]}),o.jsx(g2,{isOpen:m,id:`accordion-content-${d.id}`,role:"region","aria-labelledby":`accordion-header-${d.id}`,children:o.jsx(p2,{children:d.content})})]},d.id)})})}const L0="/assets/cheerleading_0-DQQGXi0R.jpg",G0="/assets/cheerleading_1-NkLBARmH.jpg",Y0="/assets/cheerleading_2-CrezcZYL.jpg",q0="/assets/cheerleading_3-GN5rPHNN.jpg",V0="/assets/1-ClVWb4ei.png",X0="/assets/10-Bwp2eIye.png",Q0="/assets/11-W061sOUI.png",Z0="/assets/12-TjJyzl8L.png",K0="/assets/13-ChUUCdQQ.png",$0="/assets/14-BVhdRr98.png",J0="/assets/2-CcfgIQYe.png",W0="/assets/3-DYiPkVd7.png",F0="/assets/4-1upoqVoS.png",P0="/assets/5-D0tadXAC.png",I0="/assets/6-NJ4ELm_j.png",ep="/assets/7-BXo4_Bcj.png",tp="/assets/8-BbOqEnj_.png",np="/assets/9-CIK0gi9o.png",ap="/assets/herren_0-BVVgyt1l.jpg",lp="/assets/herren_1-B8ywOnNy.jpg",ip="/assets/herren_10-DPVQsg9B.jpg",rp="/assets/herren_11-wfWG62H3.jpg",op="/assets/herren_12-DEJSN2zG.jpg",sp="/assets/herren_13-F52vdukE.jpg",up="/assets/herren_14-Cq9hoKfG.jpg",cp="/assets/herren_15-aYIFGauG.jpg",fp="/assets/herren_16-NYI2EaEN.jpg",dp="/assets/herren_17-B_52ysA2.jpg",hp="/assets/herren_18-DbwjVNKJ.jpg",mp="/assets/herren_19-BduD_J85.png",gp="/assets/herren_2--jFuixBF.jpg",pp="/assets/herren_3-BPz1zlkG.jpg",bp="/assets/herren_4-BZRrQaFr.jpg",xp="/assets/herren_5-D-QrfY2P.jpg",vp="/assets/herren_6-DWQvi6Am.jpg",yp="/assets/herren_7-BXO6B8Bt.jpg",Sp="/assets/herren_8-Cg4rdr7T.jpg",jp="/assets/herren_9-DoLnTdRG.jpg",wp="/assets/IMG-team-BGcF1agj.png",_p="/assets/IMG_5349-CpvIVKhM.jpg",zp="/assets/IMG_5369-DQ4CSwdg.jpg",Ep="/assets/IMG_5421-BBzniIEN.jpg",Tp="/assets/IMG_5442-D2PgutWB.jpg",Ap="/assets/IMG_5952-B9VW6Qie.jpg",Mp="/assets/Unbenann324t-IPGo6eoQ.png",Rp="/assets/image0-DDrU5aZn.jpeg",Dp="/assets/image11-BNM8hTkT.jpeg",kp="/assets/image8-BUnedp9U.jpeg",y2="/assets/grafhardenberg-Di5cVggE.png",S2="/assets/horta-DydWIGV7.png",j2="/assets/logans-BgpKwKYA.png",w2="/assets/ricobet-DsVC-eZt.png",_2="/assets/rothaus-DqkKD9yW.png",z2="/assets/tasty-B2pSa1rE.png",E2="/assets/cabin-window-B83r_CDB.jpg",T2="/assets/outside-9-xz17qL.jpg",A2="/assets/shower-B75caJ-F.jpg",M2="/assets/sitting-area-D7khB3Gw.jpg",R2="/assets/toilet-BpMHYbhh.jpg",D2=Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":L0,"../assets/gallery/cheerleading/cheerleading_1.jpg":G0,"../assets/gallery/cheerleading/cheerleading_2.jpg":Y0,"../assets/gallery/cheerleading/cheerleading_3.jpg":q0,"../assets/gallery/damen/1.png":V0,"../assets/gallery/damen/10.png":X0,"../assets/gallery/damen/11.png":Q0,"../assets/gallery/damen/12.png":Z0,"../assets/gallery/damen/13.png":K0,"../assets/gallery/damen/14.png":$0,"../assets/gallery/damen/2.png":J0,"../assets/gallery/damen/3.png":W0,"../assets/gallery/damen/4.png":F0,"../assets/gallery/damen/5.png":P0,"../assets/gallery/damen/6.png":I0,"../assets/gallery/damen/7.png":ep,"../assets/gallery/damen/8.png":tp,"../assets/gallery/damen/9.png":np,"../assets/gallery/herren/herren_0.jpg":ap,"../assets/gallery/herren/herren_1.jpg":lp,"../assets/gallery/herren/herren_10.jpg":ip,"../assets/gallery/herren/herren_11.jpg":rp,"../assets/gallery/herren/herren_12.jpg":op,"../assets/gallery/herren/herren_13.jpg":sp,"../assets/gallery/herren/herren_14.jpg":up,"../assets/gallery/herren/herren_15.jpg":cp,"../assets/gallery/herren/herren_16.jpg":fp,"../assets/gallery/herren/herren_17.jpg":dp,"../assets/gallery/herren/herren_18.jpg":hp,"../assets/gallery/herren/herren_19.png":mp,"../assets/gallery/herren/herren_2.jpg":gp,"../assets/gallery/herren/herren_3.jpg":pp,"../assets/gallery/herren/herren_4.jpg":bp,"../assets/gallery/herren/herren_5.jpg":xp,"../assets/gallery/herren/herren_6.jpg":vp,"../assets/gallery/herren/herren_7.jpg":yp,"../assets/gallery/herren/herren_8.jpg":Sp,"../assets/gallery/herren/herren_9.jpg":jp,"../assets/gallery/jfv/IMG-team.png":wp,"../assets/gallery/jfv/IMG_5349.jpg":_p,"../assets/gallery/jfv/IMG_5369.jpg":zp,"../assets/gallery/jfv/IMG_5421.jpg":Ep,"../assets/gallery/jfv/IMG_5442.jpg":Tp,"../assets/gallery/jfv/IMG_5952.jpg":Ap,"../assets/gallery/jfv/Unbenann324t.png":Mp,"../assets/gallery/jfv/image0.jpeg":Rp,"../assets/gallery/jfv/image11.jpeg":Dp,"../assets/gallery/jfv/image8.jpeg":kp}),k2=Object.assign({"../assets/sponsors/grafhardenberg.png":y2,"../assets/sponsors/horta.png":S2,"../assets/sponsors/logans.png":j2,"../assets/sponsors/ricobet.png":w2,"../assets/sponsors/rothaus.png":_2,"../assets/sponsors/tasty.png":z2}),C2=Object.assign({"../assets/renovation/cabin-window.jpg":E2,"../assets/renovation/outside.jpg":T2,"../assets/renovation/shower.jpg":A2,"../assets/renovation/sitting-area.jpg":M2,"../assets/renovation/toilet.jpg":R2}),Cp=l=>l.split("/").pop()?.toLowerCase()||"",O2=l=>{const s=l.match(/gallery\/(.*?)\//);return s?s[1]:"Sonstige"};function B2(l){const s=[...l];for(let c=s.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1));[s[c],s[u]]=[s[u],s[c]]}return s}const Op=()=>{const l={};Object.entries(D2).forEach(([u,d])=>{const m=O2(u);l[m]||(l[m]=[]),l[m].push(d)}),Object.keys(l).forEach(u=>{l[u]=B2(l[u])});const s={},c=["jfv","cheerleading","damen","herren"];return c.forEach(u=>{l[u]&&(s[u]=l[u])}),Object.keys(l).forEach(u=>{c.includes(u.toLowerCase())||(s[u]=l[u])}),s},N2=()=>{const l={};return Object.entries(k2).forEach(([s,c])=>{const u=Cp(s);l[u]=c}),l},Bp=()=>{const l={kabinen:[],fassade:[],waschkueche:[]};return Object.entries(C2).forEach(([s,c])=>{const u=Cp(s);u.includes("sitting")?l.kabinen.push({src:c,alt:"Sitzbereich in den Kabinen"}):u.includes("outside")||u.includes("cabin-window")?u.includes("outside")?l.fassade.push({src:c,alt:"Außenfassade des Fürstenberg"}):u.includes("cabin-window")&&l.fassade.push({src:c,alt:"Fenster in den Kabinen"}):(u.includes("toilet")||u.includes("shower")||u.includes("wash"))&&(u.includes("toilet")?l.waschkueche.push({src:c,alt:"Toilette"}):u.includes("shower")?l.waschkueche.push({src:c,alt:"Dusche"}):l.waschkueche.push({src:c,alt:"Waschküche"}))}),l},Np=l=>{const c=Object.entries(Object.assign({"../assets/gallery/cheerleading/cheerleading_0.jpg":L0,"../assets/gallery/cheerleading/cheerleading_1.jpg":G0,"../assets/gallery/cheerleading/cheerleading_2.jpg":Y0,"../assets/gallery/cheerleading/cheerleading_3.jpg":q0,"../assets/gallery/damen/1.png":V0,"../assets/gallery/damen/10.png":X0,"../assets/gallery/damen/11.png":Q0,"../assets/gallery/damen/12.png":Z0,"../assets/gallery/damen/13.png":K0,"../assets/gallery/damen/14.png":$0,"../assets/gallery/damen/2.png":J0,"../assets/gallery/damen/3.png":W0,"../assets/gallery/damen/4.png":F0,"../assets/gallery/damen/5.png":P0,"../assets/gallery/damen/6.png":I0,"../assets/gallery/damen/7.png":ep,"../assets/gallery/damen/8.png":tp,"../assets/gallery/damen/9.png":np,"../assets/gallery/herren/herren_0.jpg":ap,"../assets/gallery/herren/herren_1.jpg":lp,"../assets/gallery/herren/herren_10.jpg":ip,"../assets/gallery/herren/herren_11.jpg":rp,"../assets/gallery/herren/herren_12.jpg":op,"../assets/gallery/herren/herren_13.jpg":sp,"../assets/gallery/herren/herren_14.jpg":up,"../assets/gallery/herren/herren_15.jpg":cp,"../assets/gallery/herren/herren_16.jpg":fp,"../assets/gallery/herren/herren_17.jpg":dp,"../assets/gallery/herren/herren_18.jpg":hp,"../assets/gallery/herren/herren_19.png":mp,"../assets/gallery/herren/herren_2.jpg":gp,"../assets/gallery/herren/herren_3.jpg":pp,"../assets/gallery/herren/herren_4.jpg":bp,"../assets/gallery/herren/herren_5.jpg":xp,"../assets/gallery/herren/herren_6.jpg":vp,"../assets/gallery/herren/herren_7.jpg":yp,"../assets/gallery/herren/herren_8.jpg":Sp,"../assets/gallery/herren/herren_9.jpg":jp,"../assets/gallery/jfv/IMG-team.png":wp,"../assets/gallery/jfv/IMG_5349.jpg":_p,"../assets/gallery/jfv/IMG_5369.jpg":zp,"../assets/gallery/jfv/IMG_5421.jpg":Ep,"../assets/gallery/jfv/IMG_5442.jpg":Tp,"../assets/gallery/jfv/IMG_5952.jpg":Ap,"../assets/gallery/jfv/Unbenann324t.png":Mp,"../assets/gallery/jfv/image0.jpeg":Rp,"../assets/gallery/jfv/image11.jpeg":Dp,"../assets/gallery/jfv/image8.jpeg":kp})).find(([u])=>u.includes(l));return c?c[1]:""},_o=(l,s)=>Np(`${l}/${l}_${s}.jpg`);Op(),N2(),Bp();function U2(){const l=Op(),[s,c]=R.useState(null);return R.useEffect(()=>{if(!s)return;const u=d=>{d.key==="Escape"&&c(null)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[s]),o.jsxs("section",{children:[o.jsx("h3",{children:"Bildergalerie"}),Object.entries(l).map(([u,d])=>o.jsxs("div",{style:{marginBottom:"2.5rem"},children:[o.jsx(H2,{children:u.toUpperCase()}),o.jsx(L2,{children:d.map((m,b)=>o.jsx(G2,{src:m,alt:`Bild ${b+1} aus ${u}`,onClick:()=>c({folder:u,idx:b}),style:{cursor:"pointer"}},b))}),s&&s.folder===u&&o.jsx(Y2,{onClick:()=>c(null),children:o.jsxs(q2,{onClick:m=>m.stopPropagation(),children:[o.jsx(V2,{src:d[s.idx],alt:`Großansicht aus ${u}`}),o.jsx(X2,{onClick:()=>c(null),title:"Schließen",children:"×"})]})})]},u))]})}const H2=g.h4`
  font-size: 1.25rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.1rem;
  margin-top: 2.2rem;
`,L2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem 0;
`,G2=g.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,Y2=g.div`
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
`,q2=g.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,V2=g.img`
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);
`,X2=g.button`
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
`,Q2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  width: 100%;
`,Z2=g.div`
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
`,K2=g.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,$2=g.h3`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,J2=g.p`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 500;
`,W2=g.div`
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
`,F2=g.a`
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
`;function Pu({icon:l,title:s,description:c,packages:u,buttonHref:d,buttonText:m}){return o.jsxs(Z2,{children:[o.jsx(K2,{children:l}),o.jsx($2,{children:s}),o.jsx(J2,{children:c}),o.jsx(W2,{children:u.map((b,j)=>o.jsxs("div",{children:[b,j<u.length-1&&o.jsx("br",{})]},j))}),o.jsx(F2,{href:d,children:m})]})}const P2=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  width: 100%;
`,I2=g.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  text-align: center;
`,e5=g.h4`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,t5=g.p`
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
`;function n5({headline:l,description:s,contactInfos:c}){return o.jsxs(a5,{id:"kontakt",children:[o.jsx(l5,{children:l}),o.jsx(i5,{children:s}),o.jsx(P2,{children:c.map((u,d)=>o.jsxs(I2,{children:[o.jsxs(e5,{children:[u.icon," ",u.title]}),o.jsx(t5,{$isEmail:u.isEmail,children:u.isEmail?o.jsx("a",{href:`mailto:${u.content}`,children:u.content}):u.content})]},d))})]})}const a5=g.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,l5=g.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
`,i5=g.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,r5=g.section`
  background: url("${_o("herren",4)}") center/cover;
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
`,o5=g.h1`
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
`,s5=g.h2`
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
`,kg=g.a`
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
`,u5=g.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
`,c5=g.main`
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
`,yi=g.h2`
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
`,f5=g.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
`,d5=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: -1.2rem;
`,h5=g.p`
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
  font-weight: 500;
`,m5=g.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,g5=g.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,p5=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`,Cg=g.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Og=g.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`,Bg=g.ul`
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
`,b5=g.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem auto 2rem auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,x5=g.h3`
  font-size: clamp(1.7rem, 2.5vw, 2.1rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`,v5=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
`,y5=g.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,S5=g.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`,j5=g.ul`
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
`,Iu=g.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  text-align: center;
  gap: 0.7em;
`,ec=g.span`
  display: inline-block;
  width: 0.7em;
  height: 0.7em;
  background: #e10073;
  border-radius: 50%;
  margin-right: 0.2em;
`,tc=g.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.3rem 1.5rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,nc=g.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #e10073;
  margin-bottom: 0.5rem;
`,ac=g.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 0.3rem;
`,lc=g.div`
  font-size: 0.98rem;
  color: #666;
`,w5=g.div`
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
`,_5=g.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,z5=g.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,E5=g.a`
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
`,T5=g.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,A5=g.div`
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
`,M5=g.h4`
  font-size: 1.2rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,R5=g.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,D5=g.a`
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
`,k5=g.section`
  background: #f7f7fa;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin: 3rem 0 2rem 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
`,C5=g.h3`
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
`,O5=g.p`
  font-size: 1.13rem;
  color: #222;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,B5=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2.5rem 0;
  width: 100%;
`,Ng=g.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ug=g.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,Hg=g.table`
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
`,N5=g.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
`,U5=g.h4`
  font-size: 1.3rem;
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`,H5=g.ul`
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
`,L5=g.div`
  background: #e10073;
  color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2.5rem 0;
`,G5=g.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,Y5=g.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`,q5=g.a`
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
`;function V5(){return o.jsxs(o.Fragment,{children:[o.jsx(r5,{children:o.jsxs(f5,{children:[o.jsx(o5,{children:"SC Konstanz-Wollmatingen"}),o.jsx(s5,{children:"Werden Sie Teil unserer Erfolgsgeschichte"}),o.jsxs(u5,{children:[o.jsx(kg,{href:"#sponsoring-kategorien",children:"Sponsoring-Übersicht"}),o.jsx(kg,{href:"#kontakt",secondary:!0,children:"Kontakt aufnehmen"})]})]})}),o.jsxs(c5,{children:[o.jsx(yi,{id:"sponsoring-kategorien",children:"Sponsoring-Möglichkeiten"}),o.jsx(d5,{children:o.jsx(h5,{children:"Finden Sie das perfekte Sponsoring-Paket für Ihr Unternehmen. Von exklusiven Premium-Partnerschaften bis hin zu lokalen Werbemöglichkeiten – bei uns ist für jeden das Richtige dabei."})}),o.jsxs("section",{"aria-labelledby":"sponsor-categories-heading",children:[o.jsx(T5,{id:"sponsor-categories-heading",children:"Sponsoring-Kategorien Übersicht"}),o.jsxs(Q2,{role:"region","aria-label":"Sponsoring-Kategorien",children:[o.jsx(Pu,{icon:"🏆",title:"Premium-Partnerschaften",description:"Exklusive Sponsoring-Möglichkeiten für Großunternehmen ab 5.000€",packages:["• Hauptsponsor (15.000€)","• Stadionpartner (12.000€)","• Co-Sponsor (9.500€)"],buttonHref:"#premium-pakete",buttonText:"Premium-Pakete ansehen"}),o.jsx(Pu,{icon:"🏢",title:"Lokale Werbung",description:"Sichtbarkeit bei Heimspielen und lokale Präsenz ab 800€",packages:["• SILBER-Paket (5.000€)","• Bandenwerbung (800€)","• Community-Partner (2.000€)"],buttonHref:"#lokale-pakete",buttonText:"Lokale Pakete ansehen"}),o.jsx(Pu,{icon:"🌟",title:"Starter & Spenden",description:"Einfacher Einstieg in die Vereinsförderung ab 150€",packages:["• Ballspende (150€)","• Ballspende 5er Pack (500€)","• Platz-Renovierung Spende (ab 100€)"],buttonHref:"#starter-pakete",buttonText:"Starter-Pakete ansehen"})]})]}),o.jsxs("section",{"aria-labelledby":"premium-pakete",children:[o.jsx(yi,{id:"premium-pakete",children:"Premium-Sponsoring-Pakete"}),o.jsx(Fu,{packages:Wu.filter(l=>l.price==="15.000 €/Jahr"||l.price==="12.000 €/Jahr"||l.price==="9.500 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"lokale-pakete",children:[o.jsx(yi,{id:"lokale-pakete",children:"Lokale Werbemöglichkeiten"}),o.jsx(Fu,{packages:Wu.filter(l=>l.price==="5.000 €/Jahr"||l.price==="800 €/Jahr"||l.price==="2.000 €/Jahr")})]}),o.jsxs("section",{"aria-labelledby":"starter-pakete",children:[o.jsx(yi,{id:"starter-pakete",children:"Starter & Spenden-Optionen"}),o.jsx(Fu,{packages:Wu.filter(l=>l.price==="150 €/pro Spiel"||l.price==="500 €/5 Spiele"||l.price.includes("Ab 100"))}),o.jsxs(A5,{children:[o.jsx(M5,{children:"⚽ Ballspende-Beispiel ansehen"}),o.jsx(R5,{children:"Schauen Sie sich an, wie eine Ballspende mit Ihrem Logo aussehen könnte."}),o.jsx(D5,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispielbild öffnen"})]})]}),o.jsxs(m5,{children:[o.jsx(g5,{children:"Warum SC Konstanz-Wollmatingen?"}),o.jsxs(p5,{children:[o.jsxs(Cg,{children:[o.jsx(Og,{children:"📊 Erreichte Reichweite"}),o.jsxs(Bg,{children:[o.jsx("li",{children:"15+ Heimspiele pro Saison"}),o.jsx("li",{children:"200+ Zuschauer pro Spiel"}),o.jsx("li",{children:"2.500+ Instagram Follower"}),o.jsx("li",{children:"5.000+ monatliche Website-Besucher"})]})]}),o.jsxs(Cg,{children:[o.jsx(Og,{children:"🏆 Sportlicher Erfolg"}),o.jsxs(Bg,{children:[o.jsx("li",{children:"1. Damenmannschaft in Landesliga"}),o.jsx("li",{children:"2. Mannschaften pro Abteilung"}),o.jsx("li",{children:"Cheerleading-Team aktiv"}),o.jsx("li",{children:"Jugendförderung etabliert"})]})]})]})]}),o.jsx(yi,{children:"Zusätzliche Werbemöglichkeiten"}),o.jsxs(b5,{children:[o.jsx(x5,{children:'Werbung im Stadionmagazin „Heimspiel"'}),o.jsxs(v5,{children:[o.jsxs(y5,{children:[o.jsxs(tc,{children:[o.jsx(nc,{children:"1 Seite (Farbe)"}),o.jsx(ac,{children:"1.000 €"}),o.jsx(lc,{children:"DIN A4 (297 × 210 mm)"})]}),o.jsxs(tc,{children:[o.jsx(nc,{children:"1/2 Seite (Farbe)"}),o.jsx(ac,{children:"500 €"}),o.jsx(lc,{children:"DIN A5 (148 × 210 mm)"})]}),o.jsxs(tc,{children:[o.jsx(nc,{children:"1/4 Seite (Farbe)"}),o.jsx(ac,{children:"250 €"}),o.jsx(lc,{children:"DIN A6 (105 × 148 mm)"})]})]}),o.jsx(S5,{children:o.jsxs(j5,{children:[o.jsxs(Iu,{children:[o.jsx(ec,{}),"15 Ausgaben pro Saison"]}),o.jsxs(Iu,{children:[o.jsx(ec,{}),"ca. 100 Exemplare pro Heimspiel"]}),o.jsxs(Iu,{children:[o.jsx(ec,{}),"Digitale Version (Social Media & Website)"]})]})})]}),o.jsxs(w5,{children:[o.jsx(_5,{children:"📖 Aktuelle Ausgabe als Beispiel"}),o.jsx(z5,{children:"Schauen Sie sich die letzte Ausgabe unseres Stadionmagazins an und sehen Sie, wie Ihre Werbung wirken könnte."}),o.jsx(E5,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 Aktuelle Ausgabe öffnen (PDF)"})]})]}),o.jsxs(k5,{children:[o.jsx(C5,{children:"Werbeflächen auf dem Vereinsbus"}),o.jsx(O5,{children:"Unser Vereinsbus ist jede Woche in Konstanz, im Landkreis und bei Auswärtsspielen unterwegs – ein idealer Ort für Ihre Werbung! Unterstützen Sie den SC Konstanz-Wollmatingen und profitieren Sie von lokaler Sichtbarkeit."}),o.jsxs(B5,{children:[o.jsxs(Ng,{children:[o.jsx(Ug,{children:"Premium-Flächen"}),o.jsxs(Hg,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Heckfläche (100×80 cm)"}),o.jsx("td",{children:"Sehr hoch"}),o.jsx("td",{children:"1.200 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Seitentüren (links/rechts)"}),o.jsx("td",{children:"Hoch"}),o.jsx("td",{children:"je 900 €"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Hintere Seitenflächen"}),o.jsx("td",{children:"Mittel–hoch"}),o.jsx("td",{children:"je 600 €"})]})]})]})]}),o.jsxs(Ng,{children:[o.jsx(Ug,{children:"Standard-Flächen"}),o.jsxs(Hg,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Position"}),o.jsx("th",{children:"Sichtbarkeit"}),o.jsx("th",{children:"Preis / Jahr"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"Fensterstreifen (15 cm Höhe)"}),o.jsx("td",{children:"Mittel"}),o.jsx("td",{children:"400 € je Seite"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"Frontstoßstange"}),o.jsx("td",{children:"Gering–mittel"}),o.jsx("td",{children:"250 €"})]})]})]})]})]}),o.jsxs(N5,{children:[o.jsx(U5,{children:"Zusatzoptionen:"}),o.jsxs(H5,{children:[o.jsx("li",{children:"Mehrjahresrabatt: 10 % (2 Jahre), 15 % (3 Jahre)"}),o.jsx("li",{children:"Kombi-Paket Online + Bus: +150 € für Logo & Link auf partner.sckw.de"}),o.jsx("li",{children:"Design & Folierung: optionaler Kostenbeitrag (50–100 €)"})]})]}),o.jsxs(L5,{children:[o.jsx(G5,{children:"➡️ Interesse an einer Bus-Werbefläche?"}),o.jsx(Y5,{children:"Kontaktieren Sie uns für verfügbare Plätze und Layoutvorschläge:"}),o.jsx(q5,{href:"mailto:sponsoring@sckw.de",children:"📧 sponsoring@sckw.de"})]})]}),o.jsx(v2,{}),o.jsx(n5,{headline:"Bereit für eine Partnerschaft?",description:"Gemeinsam können wir Großartiges erreichen! Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Sponsoring-Möglichkeiten beim SC Konstanz-Wollmatingen.",contactInfos:[{icon:"📧",title:"E-Mail",content:"sponsoring@sckw.de",isEmail:!0},{icon:"📍",title:"Adresse",content:`SC Konstanz-Wollmatingen e.V.
Schleyerweg 5
D-78467 Konstanz`},{icon:"💼",title:"Rechtliches",content:`Gemeinnütziger Verein
Spenden steuerlich absetzbar
Schnelle Abwicklung garantiert`}]}),o.jsx(U2,{})]}),o.jsx(uf,{})]})}const Up=w0`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,cf=w0`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,fa=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,X5=g.section`
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
    background: url("${_o("herren",4)}") center/cover;
    opacity: 0.15;
    z-index: 1;
    animation: ${Up} 1s ease-out;
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
    animation: ${cf} 4s ease-in-out infinite;
    z-index: 1;
  }
`,Q5=g.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 1rem;
  animation: ${Up} 0.8s ease-out 0.2s both;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Z5=g.h1`
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
`,K5=g.p`
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
`,$5=g.div`
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
`,Qr=g.div`
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
`,Zr=g.div`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.25rem;
`,Kr=g.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`,J5=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`,Lg=g.a`
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
`,da=g.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`,W5=g(da)`
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
`,Gg=g.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`,Yg=g.h2`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,qg=g.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,F5=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`,ic=g.div`
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
`,rc=g.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,oc=g.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`,sc=g.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,uc=g.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
`,P5=g(da)`
  background: white;
  position: relative;
`,I5=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`,cc=g.div`
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
`,fc=g.div`
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
`,dc=g.h3`
  font-size: clamp(1.4rem, 3.5vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  margin-top: 1rem;
`,hc=g.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 900;
  color: #222;
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
`,mc=g.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,gc=g.ul`
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
`,pc=g.a`
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
`,eS=g(da)`
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
`,tS=g(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,nS=g.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,aS=g.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`,$r=g.div`
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
`,Jr=g.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,Wr=g.div`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`,lS=g.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  background: #4caf50;
  border-radius: 50%;
  animation: ${cf} 2s infinite;

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
`,iS=g(da)`
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
`,rS=g(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,oS=g.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,sS=g.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 500px;
  line-height: 1.6;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`,uS=g.div`
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
`,cS=g.img`
  flex: 2 0 65%;
  width: 100%;
  height: 65%;
  object-fit: cover;
  min-height: 300px;

  @media (min-width: 768px) {
    min-height: 350px;
  }
`,fS=g.div`
  flex: 1 0 35%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`,dS=g.h4`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`,hS=g.p`
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,mS=g.a`
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
`,gS=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`,bc=g.div`
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
`,Vg=g.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 220px;
  }
`,pS=g.div`
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
`,xc=g.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,vc=g.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`,yc=g.p`
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`,Xg=g.a`
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
`,bS=g(da)`
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
`,xS=g(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,vS=g.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,yS=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`,Qg=g.div`
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
`,Zg=g.p`
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  color: #333;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`,Kg=g.div`
  font-size: 0.9rem;
  color: #e10073;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`,SS=g(da)`
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
    animation: ${cf} 3s ease-in-out infinite;
    opacity: 0.3;
  }
`,jS=g(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`,wS=g.h3`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,_S=g.p`
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
`,zS=g.a`
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
`,ES=g(da)`
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
`,TS=g(fa)`
  display: flex;
  flex-direction: column;
  align-items: center;
`,AS=g.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`,MS=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`,Fr=g.div`
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
`,Pr=g.h4`
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`,Ir=g.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #555;
  line-height: 1.6;
  margin: 0;
`,RS=()=>{const[l,s]=R.useState({followers:2500,posts:450,engagement:8.2,reach:15e3});return R.useEffect(()=>{const c=setInterval(()=>{s({followers:2500+Math.floor(Math.random()*100),posts:450+Math.floor(Math.random()*50),engagement:8.2+Math.random()*2,reach:15e3+Math.floor(Math.random()*5e3)})},5e3);return()=>clearInterval(c)},[]),l};function DS(){const l=RS();return o.jsxs(o.Fragment,{children:[o.jsx(X5,{children:o.jsxs(Q5,{children:[o.jsx(Z5,{children:"Werden Sie Teil der SC-Familie"}),o.jsx(K5,{children:"Maximale Sichtbarkeit bei 15+ Heimspielen, 2.500+ Instagram-Followern und einer leidenschaftlichen Community"}),o.jsxs($5,{children:[o.jsxs(Qr,{children:[o.jsx(Zr,{children:"15+"}),o.jsx(Kr,{children:"Heimspiele"})]}),o.jsxs(Qr,{children:[o.jsx(Zr,{children:"200+"}),o.jsx(Kr,{children:"Zuschauer"})]}),o.jsxs(Qr,{children:[o.jsx(Zr,{children:"2.5k"}),o.jsx(Kr,{children:"Instagram"})]}),o.jsxs(Qr,{children:[o.jsx(Zr,{children:"5k+"}),o.jsx(Kr,{children:"Website Views"})]})]}),o.jsxs(J5,{children:[o.jsx(Lg,{href:"#kontakt",$primary:!0,children:"Jetzt Kontakt aufnehmen"}),o.jsx(Lg,{href:"#pakete",children:"Pakete entdecken"})]})]})}),o.jsx(W5,{children:o.jsxs(fa,{children:[o.jsxs(Gg,{children:[o.jsx(Yg,{children:"Warum SC Konstanz-Wollmatingen?"}),o.jsx(qg,{children:"Entdecken Sie die Vorteile einer Partnerschaft mit einem der erfolgreichsten Amateurvereine der Region"})]}),o.jsxs(F5,{children:[o.jsxs(ic,{children:[o.jsx(rc,{children:"📊"}),o.jsx(oc,{children:"Maximale Reichweite"}),o.jsx(sc,{children:"15+ Heimspiele pro Saison mit 200+ Zuschauern, 2.500+ Instagram-Followern und 5.000+ Website-Besuchern monatlich"}),o.jsx(uc,{children:"Live Impact"})]}),o.jsxs(ic,{children:[o.jsx(rc,{children:"🏆"}),o.jsx(oc,{children:"Sportlicher Erfolg"}),o.jsx(sc,{children:"1. Damenmannschaft in Landesliga, Cheerleading-Team aktiv, Jugendförderung etabliert – Ihr Logo bei echten Siegen"}),o.jsx(uc,{children:"Emotionale Bindung"})]}),o.jsxs(ic,{children:[o.jsx(rc,{children:"🤝"}),o.jsx(oc,{children:"Community Impact"}),o.jsx(sc,{children:"Werden Sie Teil einer starken Gemeinschaft. Ihre Unterstützung fördert Talente und schafft unvergessliche Momente"}),o.jsx(uc,{children:"Gemeinsam stark"})]})]})]})}),o.jsx(P5,{id:"pakete",children:o.jsxs(fa,{children:[o.jsxs(Gg,{children:[o.jsx(Yg,{children:"Sponsoring-Pakete"}),o.jsx(qg,{children:"Wählen Sie das perfekte Paket für Ihr Budget und Ihre Ziele – von Premium-Partnerschaften bis zu Starter-Optionen"})]}),o.jsxs(I5,{children:[o.jsxs(cc,{children:[o.jsx(fc,{children:"Premium"}),o.jsx(dc,{children:"🏆 Premium"}),o.jsx(hc,{children:"15.000€"}),o.jsx(mc,{children:"Pro Jahr"}),o.jsxs(gc,{children:[o.jsx("li",{children:"Trikotbrust 1. Mannschaft"}),o.jsx("li",{children:"Stadion-Namensrecht"}),o.jsx("li",{children:"Premium Social Media"}),o.jsx("li",{children:"Exklusive VIP-Rechte"})]}),o.jsx(pc,{href:"mailto:sponsoring@sckw.de?subject=Premium-Sponsoring",children:"Jetzt anfragen"})]}),o.jsxs(cc,{children:[o.jsx(fc,{children:"Lokal"}),o.jsx(dc,{children:"🏢 Lokal"}),o.jsx(hc,{children:"5.000€"}),o.jsx(mc,{children:"Pro Jahr"}),o.jsxs(gc,{children:[o.jsx("li",{children:"Bandenwerbung (5x2m)"}),o.jsx("li",{children:"Instagram-Erwähnungen"}),o.jsx("li",{children:"Community-Events"}),o.jsx("li",{children:"Website-Logo"})]}),o.jsx(pc,{href:"mailto:sponsoring@sckw.de?subject=Lokales-Sponsoring",children:"Jetzt anfragen"})]}),o.jsxs(cc,{children:[o.jsx(fc,{children:"Starter"}),o.jsx(dc,{children:"🌟 Starter"}),o.jsx(hc,{children:"500€"}),o.jsx(mc,{children:"5 Spiele"}),o.jsxs(gc,{children:[o.jsx("li",{children:"Ballspende für 5 Spiele"}),o.jsx("li",{children:"Stadiondurchsagen"}),o.jsx("li",{children:"Social Media Posts"}),o.jsx("li",{children:"Danke-Meldung"})]}),o.jsx(pc,{href:"mailto:sponsoring@sckw.de?subject=Starter-Sponsoring",children:"Jetzt anfragen"})]})]})]})}),o.jsx(eS,{children:o.jsxs(tS,{children:[o.jsx(nS,{children:"📱 Live Instagram Insights"}),o.jsxs(aS,{children:[o.jsxs($r,{children:[o.jsx(lS,{}),o.jsx(Jr,{children:l.followers.toLocaleString()}),o.jsx(Wr,{children:"Follower"})]}),o.jsxs($r,{children:[o.jsx(Jr,{children:l.posts.toLocaleString()}),o.jsx(Wr,{children:"Posts"})]}),o.jsxs($r,{children:[o.jsxs(Jr,{children:[l.engagement.toFixed(1),"%"]}),o.jsx(Wr,{children:"Engagement"})]}),o.jsxs($r,{children:[o.jsx(Jr,{children:l.reach.toLocaleString()}),o.jsx(Wr,{children:"Reichweite"})]})]})]})}),o.jsx(iS,{children:o.jsxs(rS,{children:[o.jsx(oS,{children:"📸 So sehen Ihre Anzeigen aus"}),o.jsx(sS,{children:"Entdecken Sie, wie Ihre Werbung bei uns wirkt – vom Stadionmagazin bis zur Bandenwerbung"}),o.jsxs(uS,{children:[o.jsx(cS,{src:"/pdf-preview.png",alt:"Stadionmagazin Cover"}),o.jsxs(fS,{children:[o.jsx(dS,{children:"📖 Stadionmagazin"}),o.jsx(hS,{children:"Professionelle Anzeigen in unserem Stadionheft – 100+ Exemplare pro Spiel, digitale Version auf Social Media"}),o.jsx(mS,{href:"/StadionMagazin.pdf",target:"_blank",rel:"noopener noreferrer",children:"📄 PDF öffnen"})]})]}),o.jsxs(gS,{children:[o.jsxs(bc,{children:[o.jsx(Vg,{src:"/ballspende.png",alt:"Ballspende Beispiel"}),o.jsxs(xc,{children:[o.jsx(vc,{children:"⚽ Ballspende"}),o.jsx(yc,{children:"Ihr Logo prominent auf Spielbällen – direkt im Einsatz bei Heimspielen"}),o.jsx(Xg,{href:"/ballspende.png",target:"_blank",rel:"noopener noreferrer",children:"📸 Beispiel öffnen"})]})]}),o.jsxs(bc,{children:[o.jsx(Vg,{src:Np("herren/herren_1"),alt:"Bandenwerbung Beispiel"}),o.jsxs(xc,{children:[o.jsx(vc,{children:"🖼️ Bandenwerbung"}),o.jsx(yc,{children:"Sichtbare Präsenz am Spielfeldrand – bei jedem Heimspiel im Fokus der Zuschauer"})]})]}),o.jsxs(bc,{children:[o.jsx(pS,{}),o.jsxs(xc,{children:[o.jsx(vc,{children:"🚌 Buswerbung"}),o.jsx(yc,{children:"Heck, Seitentüren und Seitenflächen – mobile Werbung auf unserem Vereinsbus"}),o.jsx(Xg,{href:"#kontakt",children:"💬 Details anfragen"})]})]})]})]})}),o.jsx(bS,{children:o.jsxs(xS,{children:[o.jsx(vS,{children:"💬 Was unsere Partner sagen"}),o.jsxs(yS,{children:[o.jsxs(Qg,{children:[o.jsx(Zg,{children:'"Die Zusammenarbeit mit SC Konstanz-Wollmatingen hat uns neue Kunden gebracht. Die Community ist unglaublich engagiert!"'}),o.jsx(Kg,{children:"Graf Hardenberg - Premium Partner"})]}),o.jsxs(Qg,{children:[o.jsx(Zg,{children:'"Lokale Präsenz bei Heimspielen zahlt sich aus. Die Fans sind loyal und das Team professionell."'}),o.jsx(Kg,{children:"Logan's Linde - Community Partner"})]})]})]})}),o.jsx(SS,{id:"kontakt",children:o.jsxs(jS,{children:[o.jsx(wS,{children:"Jetzt Sponsor werden"}),o.jsx(_S,{children:"Erhalten Sie in 24 Stunden ein individuelles Angebot. Gemeinsam schaffen wir unvergessliche Momente!"}),o.jsx(zS,{href:"mailto:sponsoring@sckw.de?subject=Sponsoring-Anfrage",children:"📧 Kontakt aufnehmen"})]})}),o.jsx(ES,{children:o.jsxs(TS,{children:[o.jsx(AS,{children:"❓ Häufige Fragen"}),o.jsxs(MS,{children:[o.jsxs(Fr,{children:[o.jsx(Pr,{children:"Sind die Preise netto?"}),o.jsx(Ir,{children:"Ja, alle Preise verstehen sich netto zzgl. MwSt."})]}),o.jsxs(Fr,{children:[o.jsx(Pr,{children:"Wie lange läuft ein Sponsoring-Vertrag?"}),o.jsx(Ir,{children:"Standard: 1 Jahr mit automatischer Verlängerung. Individuelle Laufzeiten möglich."})]}),o.jsxs(Fr,{children:[o.jsx(Pr,{children:"Wie läuft die Gestaltung ab?"}),o.jsx(Ir,{children:"Wir übernehmen die Gestaltung. Sie liefern Logo + Claim, wir machen den Rest!"})]}),o.jsxs(Fr,{children:[o.jsx(Pr,{children:"Was sind die nächsten Schritte?"}),o.jsx(Ir,{children:"Kontakt → Gespräch → Angebot → Vertrag → Umsetzung. Alles in 1-2 Wochen möglich."})]})]})]})})]})}const kS=[{id:"tasty-kfz-mechaniker",title:"Kfz-Mechatroniker (m/w/d)",company:"Tasty Delivery GmbH",logo:"tasty.png",tags:["Vollzeit","Konstanz","Ausbildung möglich"],description:"Verstärke unser Team in der modernen Kfz-Werkstatt. Wir bieten eine abwechslungsreiche Tätigkeit mit modernster Technik und ein tolles Betriebsklima.",type:"Standard",isExample:!0},{id:"grafhardenberg-verkauf",title:"Verkaufsberater Audi (m/w/d)",company:"Audi Zentrum Singen - Graf Hardenberg GmbH",logo:"grafhardenberg.png",tags:["Vollzeit","Singen","Quereinsteiger willkommen"],description:"Werde Teil unseres erfolgreichen Verkaufsteams im Audi Zentrum Singen. Wir bieten eine strukturierte Einarbeitung und attraktive Verdienstmöglichkeiten.",type:"Boosted",isExample:!0},{id:"ricobet-marketing",title:"Marketing Manager (m/w/d)",company:"RicoBet Deutschland",logo:"ricobet.png",tags:["Vollzeit","Remote möglich","Berufserfahrung"],description:"Gestalte mit uns die Zukunft des digitalen Marketings. Kreativität, Datenanalyse und Teamwork stehen bei uns im Fokus.",type:"Standard",isExample:!0},{id:"logans-service",title:"Servicekraft Gastronomie (m/w/d)",company:"Logan's Linde Wollmatingen",logo:"logans.png",tags:["Teilzeit/Vollzeit","Konstanz","Flexible Zeiten"],description:"Unterstütze unser gastfreundliches Team in einem der beliebtesten Restaurants in Konstanz. Wir suchen motivierte Menschen mit Leidenschaft für Service.",type:"Basis",isExample:!0}],CS=g.section`
  background: url("${_o("herren",1)}") center/cover;
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
`,OS=g.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,BS=g.h1`
  color: #fff;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,NS=g.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`,US=g.main`
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
`,HS=g.section`
  margin-bottom: 4rem;
`,LS=g.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #1e3a8a;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #3b82f6;
  display: inline-block;
  padding-bottom: 0.5rem;
`,GS=g.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,YS=g.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,qS=g.div`
  text-align: center;
  margin-bottom: 3rem;
`,VS=g.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
`,XS=g.p`
  color: #64748b;
  font-size: 1.1rem;
  font-style: italic;
`,QS=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ZS=g.div`
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
`,KS=g.div`
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
`,$S=g.div`
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
`,JS=g.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
`,WS=g.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,FS=g.p`
  color: #64748b;
  font-weight: 600;
  margin-bottom: 1rem;
`,PS=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,IS=g.span`
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`,e3=g.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,t3=g.button`
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
`,n3=g.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 4rem 0;
`,a3=g.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1rem;
  text-align: center;
`,l3=g.p`
  color: #64748b;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,i3=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Ia=g.div`
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
`,$g=g.div`
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
`,el=g.h4`
  font-size: 1.4rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,tl=g.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,nl=g.div`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`,al=g.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`,Me=g.li`
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
`,ll=g.button`
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
`,r3=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,o3=g.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
`,s3=g.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
`,u3=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,Sc=g.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`,jc=g.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
`,wc=g.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 0.5rem;
`,_c=g.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
`,c3=g.a`
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
`,f3=g.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,d3=g.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
`,h3=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`,il=g.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,rl=g.span`
  font-size: 1.5rem;
  margin-top: 0.2rem;
`,ol=g.span`
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
`;function m3(){return o.jsxs(o.Fragment,{children:[o.jsx(CS,{children:o.jsxs(OS,{children:[o.jsx(BS,{children:"SCKW Jobbörse"}),o.jsx(NS,{children:"Karrierechancen bei unseren Sponsoren und Partnern"})]})}),o.jsxs(US,{children:[o.jsxs(HS,{children:[o.jsx(LS,{children:"Willkommen bei der SCKW Jobbörse"}),o.jsx(GS,{children:"Entdecken Sie spannende Karrieremöglichkeiten bei unseren Sponsoren und Partnern. Als Vermittler zwischen lokalen Unternehmen und qualifizierten Bewerbern schaffen wir eine Win-Win-Situation für alle Beteiligten."})]}),o.jsxs(YS,{children:[o.jsxs(qS,{children:[o.jsx(VS,{children:"So könnte es aussehen"}),o.jsx(XS,{children:"Beispiel-Stellenausschreibungen unserer Partner"})]}),o.jsx(QS,{children:kS.map(l=>o.jsxs(ZS,{children:[l.isExample&&o.jsx(KS,{children:"MUSTER"}),o.jsx($S,{children:o.jsx(JS,{src:`/sponsors/${l.logo}`,alt:`${l.company} Logo`,onError:s=>{s.currentTarget.style.display="none",s.currentTarget.parentElement.style.background="linear-gradient(135deg, #3b82f6, #1e3a8a)",s.currentTarget.parentElement.innerHTML=l.company.substring(0,2).toUpperCase()}})}),o.jsx(WS,{children:l.title}),o.jsx(FS,{children:l.company}),o.jsx(PS,{children:l.tags.map((s,c)=>o.jsx(IS,{children:s},c))}),o.jsx(e3,{children:l.description}),o.jsx(t3,{children:"Mehr erfahren"})]},l.id))})]}),o.jsxs(n3,{children:[o.jsx(a3,{children:"Preise für Stellenausschreibungen"}),o.jsx(l3,{children:"Professionelle Jobbörse mit lokaler Reichweite und authentischer Community-Nähe. Alle Preise verstehen sich netto, zzgl. gesetzlicher MwSt."}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"💼 Einzelanzeigen"}),o.jsxs(i3,{children:[o.jsxs(Ia,{children:[o.jsx(el,{children:"Basis"}),o.jsx(tl,{children:"149 €"}),o.jsx(nl,{children:"netto / Anzeige"}),o.jsxs(al,{children:[o.jsx(Me,{children:"30 Tage auf Website (Jobbereich)"}),o.jsx(Me,{children:"Firmenlogo und Link"}),o.jsx(Me,{children:"Detaillierte Stellenbeschreibung"}),o.jsx(Me,{children:"Bewerbermanagement"})]}),o.jsx(ll,{className:"secondary",children:"Basis wählen"})]}),o.jsxs(Ia,{className:"popular",children:[o.jsx($g,{children:"BELIEBT"}),o.jsx(el,{children:"Standard"}),o.jsx(tl,{children:"229 €"}),o.jsx(nl,{children:"netto / Anzeige"}),o.jsxs(al,{children:[o.jsx(Me,{children:"Alle Basis-Features"}),o.jsx(Me,{children:"1 Social Media Post"}),o.jsx(Me,{children:"Instagram + Facebook Reichweite"}),o.jsx(Me,{children:"Newsletter-Erwähnung"})]}),o.jsx(ll,{children:"Standard wählen"})]}),o.jsxs(Ia,{children:[o.jsx(el,{children:"Boosted"}),o.jsx(tl,{children:"349 €"}),o.jsx(nl,{children:"netto / Anzeige"}),o.jsxs(al,{children:[o.jsx(Me,{children:"Alle Standard-Features"}),o.jsx(Me,{children:"Instagram Story"}),o.jsx(Me,{children:"Stadionmagazin-Erwähnung"}),o.jsx(Me,{children:"Prioritäre Platzierung"})]}),o.jsx(ll,{className:"secondary",children:"Boosted wählen"})]})]}),o.jsx("h4",{style:{fontSize:"1.5rem",fontWeight:"700",color:"#1e3a8a",marginBottom:"2rem",textAlign:"center"},children:"🧾 Jahres-Flatrates"}),o.jsxs(r3,{children:[o.jsxs(Ia,{children:[o.jsx(el,{children:"Job Flat SMALL"}),o.jsx(tl,{children:"799 €"}),o.jsx(nl,{children:"netto / Jahr"}),o.jsxs(al,{children:[o.jsx(Me,{children:"Bis zu 6 Anzeigen im Jahr"}),o.jsx(Me,{children:"6 Social Media Posts"}),o.jsx(Me,{children:"Website-Präsenz"}),o.jsx(Me,{children:"Newsletter-Integration"})]}),o.jsx(ll,{className:"secondary",children:"Small Flat"})]}),o.jsxs(Ia,{className:"popular",children:[o.jsx($g,{children:"EMPFOHLEN"}),o.jsx(el,{children:"Job Flat MEDIUM"}),o.jsx(tl,{children:"1.199 €"}),o.jsx(nl,{children:"netto / Jahr"}),o.jsxs(al,{children:[o.jsx(Me,{children:"Bis zu 12 Anzeigen im Jahr"}),o.jsx(Me,{children:"Stadionmagazin-Präsenz"}),o.jsx(Me,{children:"Social Media Posts"}),o.jsx(Me,{children:"Stories & Highlights"})]}),o.jsx(ll,{children:"Medium Flat"})]}),o.jsxs(Ia,{children:[o.jsx(el,{children:"Job Flat PARTNER"}),o.jsx(tl,{children:"1.499 €"}),o.jsx(nl,{children:"netto / Jahr"}),o.jsxs(al,{children:[o.jsx(Me,{children:"Unbegrenzte Anzeigen"}),o.jsx(Me,{children:"Erwähnung bei Heimspielen"}),o.jsx(Me,{children:'"Top Partner" Sichtbarkeit'}),o.jsx(Me,{children:"Prioritärer Support"})]}),o.jsx(ll,{className:"secondary",children:"Partner Flat"})]})]}),o.jsxs(o3,{children:[o.jsx(s3,{children:"➕ Zusatzoptionen"}),o.jsxs(u3,{children:[o.jsxs(Sc,{children:[o.jsx(jc,{children:"Social Story"}),o.jsx(wc,{children:"39 €"}),o.jsx(_c,{children:"Facebook & Instagram Story mit 24h Laufzeit"})]}),o.jsxs(Sc,{children:[o.jsx(jc,{children:"Designservice"}),o.jsx(wc,{children:"59 €"}),o.jsx(_c,{children:"Wir gestalten Ihre Anzeige professionell (1 Revision inklusive)"})]}),o.jsxs(Sc,{children:[o.jsx(jc,{children:"Stadionmagazin"}),o.jsx(wc,{children:"99 €"}),o.jsx(_c,{children:"1/4 Seite im Stadionmagazin (nur kombinierbar mit Flat oder Boosted)"})]})]})]}),o.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:o.jsx(c3,{href:"mailto:sponsoring@sckw.de?subject=SCKW Jobbörse - Preisanfrage&body=Hallo liebes SCKW-Team,%0A%0Aich interessiere mich für die SCKW Jobbörse und möchte gerne ein Angebot erhalten.%0A%0AGewünschtes Paket: %0AMein Name: %0AFirma: %0ATelefon: %0A%0ABitte nehmen Sie Kontakt mit mir auf.%0A%0AHerzliche Grüße",children:"📧 Jetzt Angebot anfordern"})})]}),o.jsxs(f3,{children:[o.jsx(d3,{children:"🎯 Warum SCKW Jobbörse?"}),o.jsxs(h3,{children:[o.jsxs(il,{children:[o.jsx(rl,{children:"🏠"}),o.jsxs(ol,{children:[o.jsx("strong",{children:"Lokal & authentisch:"})," Echte Sichtbarkeit bei Vereinsmitgliedern, Eltern und Fans aus der Region Konstanz"]})]}),o.jsxs(il,{children:[o.jsx(rl,{children:"👥"}),o.jsxs(ol,{children:[o.jsx("strong",{children:"Community-Nähe:"})," Zugang zu potenziellen Azubis, Werkstudenten und erfahrenen Fachkräften"]})]}),o.jsxs(il,{children:[o.jsx(rl,{children:"💰"}),o.jsxs(ol,{children:[o.jsx("strong",{children:"Günstiger & flexibler:"})," Faire Preise im Vergleich zu großen Medienhäusern bei gezielter Reichweite"]})]}),o.jsxs(il,{children:[o.jsx(rl,{children:"📈"}),o.jsxs(ol,{children:[o.jsx("strong",{children:"Über 4.000 Follower:"})," Ihre Stellenausschreibungen erreichen eine engagierte Community"]})]}),o.jsxs(il,{children:[o.jsx(rl,{children:"⚡"}),o.jsxs(ol,{children:[o.jsx("strong",{children:"Schnelle Umsetzung:"})," Ihre Stellenausschreibung ist innerhalb von 24h online und wird beworben"]})]}),o.jsxs(il,{children:[o.jsx(rl,{children:"🤲"}),o.jsxs(ol,{children:[o.jsx("strong",{children:"Persönlicher Service:"})," Individuelle Betreuung und Beratung durch unser erfahrenes Team"]})]})]})]})]}),o.jsx(uf,{})]})}const g3={kabinen:{goal:8e3,current:1200,donors:[{name:"Maria Schmidt",amount:500,comment:"Für die Zukunft unserer Kinder! Der Fürstenberg braucht neue Kabinen.",date:"2024-07-29",paypalTransactionId:"example_txn_001"},{name:"Anonymous",amount:250,comment:"Tolle Initiative, weiter so!",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_002"},{name:"Thomas Müller",amount:450,comment:"Als ehemaliger Spieler freue ich mich über die Renovierung.",date:"2024-07-27",paypalTransactionId:"example_txn_003"}]},fassade:{goal:15e3,current:2100,donors:[{name:"Local Business GmbH",amount:1e3,comment:"Gerne unterstützen wir den Vereinssport in Konstanz!",date:"2024-07-29",paypalTransactionId:"example_txn_004"},{name:"Familie Weber",amount:300,comment:"Der Fürstenberg soll wieder schön werden.",date:"2024-07-28",paypalTransactionId:"example_txn_005"},{name:"Stefan K.",amount:800,date:"2024-07-26",paypalTransactionId:"example_txn_006"}]},waschkueche:{goal:5e3,current:450,donors:[{name:"Anonymous",amount:200,comment:"Moderne Geräte sind wichtig für den Verein.",date:"2024-07-28",anonymous:!0,paypalTransactionId:"example_txn_007"},{name:"Petra Hoffmann",amount:250,comment:"Für saubere Trikots! 😊",date:"2024-07-27",paypalTransactionId:"example_txn_008"}]}},p3={packages:g3},b3=g.div`
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
`,x3=g.div`
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
`,v3=g.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,y3=g.div`
  margin-bottom: 1.5rem;
`,S3=g.div`
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
`,j3=g.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,w3=g.div`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${l=>Math.min(l.$progress,100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`,_3=g.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`,z3=g.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,E3=g.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,T3=g.div`
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
`,A3=g.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,M3=g.div`
  flex: 1;
`,R3=g.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`,D3=g.span`
  font-weight: 600;
  color: #374151;
`,k3=g.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`,C3=g.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`,O3=g.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`,B3=g.button`
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
`,N3=g.div`
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
`,U3=()=>{const l=p3;return{kabinen:{current:l.packages.kabinen.current,goal:l.packages.kabinen.goal,donors:l.packages.kabinen.donors},fassade:{current:l.packages.fassade.current,goal:l.packages.fassade.goal,donors:l.packages.fassade.donors},waschkueche:{current:l.packages.waschkueche.current,goal:l.packages.waschkueche.goal,donors:l.packages.waschkueche.donors}}};function H3({data:l=U3(),realTime:s=!1}){const[c,u]=R.useState(l),[d,m]=R.useState(new Date),[b,j]=R.useState(!1),v=async()=>{j(!0);try{const M=await fetch("https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",{cache:"no-cache",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}});if(M.ok){const D=await M.json(),H={kabinen:{current:D.packages.kabinen.current,goal:D.packages.kabinen.goal,donors:D.packages.kabinen.donors},fassade:{current:D.packages.fassade.current,goal:D.packages.fassade.goal,donors:D.packages.fassade.donors},waschkueche:{current:D.packages.waschkueche.current,goal:D.packages.waschkueche.goal,donors:D.packages.waschkueche.donors}};u(H),m(new Date),console.log("✅ Spendendaten aktualisiert!")}}catch(M){console.error("❌ Fehler beim Laden der Spendendaten:",M)}finally{j(!1)}};R.useEffect(()=>{if(!s)return;const M=setInterval(()=>{v()},3e4);return()=>clearInterval(M)},[s]);const p=M=>{switch(M){case"kabinen":return"🔧";case"fassade":return"🎨";case"waschkueche":return"🧺";default:return"💰"}},E=M=>{switch(M){case"kabinen":return"Kabinen sanieren";case"fassade":return"Fassade & Fenster";case"waschkueche":return"Waschküche modernisieren";default:return M}};return o.jsxs(o.Fragment,{children:[o.jsx(b3,{children:Object.entries(c).map(([M,D])=>{const H=D.current/D.goal*100;return o.jsxs(x3,{children:[o.jsxs(v3,{children:[p(M)," ",E(M)]}),o.jsxs(y3,{children:[o.jsxs(S3,{children:[o.jsxs("span",{children:[D.current.toLocaleString("de-DE")," €"]}),o.jsxs("span",{children:[D.goal.toLocaleString("de-DE")," €"]})]}),o.jsx(j3,{children:o.jsx(w3,{$progress:H})}),o.jsxs(_3,{children:[Math.round(H),"% erreicht"]})]}),o.jsxs(z3,{children:[o.jsxs(E3,{children:["💝 Spender (",D.donors.length,")"]}),o.jsx(T3,{children:D.donors.length>0?D.donors.slice().reverse().map((L,G)=>o.jsxs(A3,{children:[o.jsxs(M3,{children:[o.jsx(R3,{children:L.anonymous?"Anonymer Spender":L.name}),L.comment&&o.jsxs(k3,{children:['"',L.comment,'"']}),L.date&&o.jsx(C3,{children:L.date})]}),o.jsxs(D3,{children:[L.amount.toLocaleString("de-DE")," €"]})]},G)):o.jsx(O3,{children:"Noch keine Spenden 🤗"})})]})]},M)})}),o.jsxs(B3,{onClick:v,disabled:b,title:"Spendendaten aktualisieren",children:["🔄",b?"Lade...":"Aktualisieren"]}),o.jsxs(N3,{children:["Letztes Update: ",d.toLocaleTimeString("de-DE")]})]})}const L3=g.section`
  background: url("${_o("herren",18)}") center/cover;
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
`,G3=g.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem 3.5rem 2rem;
  text-align: center;
`,Y3=g.h1`
  color: #fff;
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`,q3=g.h2`
  color: #fff;
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  max-width: 800px;
`,V3=g.main`
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
`,X3=g.section`
  margin-bottom: 4rem;
`,Q3=g.h2`
  font-size: clamp(1.8rem, 5vw, 2.25rem);
  color: #059669;
  font-weight: 800;
  margin-bottom: 2rem;
  border-bottom: 4px solid #10b981;
  display: inline-block;
  padding-bottom: 0.5rem;
`,Z3=g.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,K3=g.div`
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0 3rem 0;
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
`,$3=g.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,J3=g.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
`,W3=g.section`
  background: #f8fafc;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,F3=g.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 2rem;
  text-align: center;
`,P3=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,zc=g.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`,Ec=g.div`
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
`,I3=g.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`,ej=g.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${l=>l.$isActive?1:0};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
`,tj=g.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
`,nj=g.div`
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
`,aj=g.div`
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
`,lj=g.div`
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
`,ij=g.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`,rj=g.button`
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
`,Jg=g.button`
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
`,Tc=g.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ef4444;
  margin-bottom: 0.5rem;
`,Ac=g.p`
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
`,oj=g.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,sj=g.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0c4a6e;
  margin-bottom: 2rem;
  text-align: center;
`,uj=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`,Mc=g.div`
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
`,Rc=g.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Dc=g.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0c4a6e;
  margin-bottom: 1rem;
`,kc=g.p`
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Cc=g.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: #059669;
  background: #f0fdf4;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
`,cj=g.section`
  background: #fff7ed;
  border: 2px solid #fb923c;
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
`,fj=g.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #ea580c;
  margin-bottom: 2rem;
  text-align: center;
`,dj=g.p`
  font-size: 1.1rem;
  color: #9a3412;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`,hj=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,eo=g.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #fb923c;
`,to=g.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`,no=g.p`
  color: #7c2d12;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
`,mj=g.section`
  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(5, 150, 105, 0.2);
`,gj=g.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,pj=g.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,bj=g.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,Wg=g.a`
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
`,xj=g.div`
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
`,vj=g.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`,yj=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,Sj=g.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e10073;
  margin: 0;
`,jj=g.button`
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
`,wj=g.div`
  background: #f8f9fb;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`,Oc=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Bc=g.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`,Nc=g.span`
  font-family: "Courier New", monospace;
  color: #e10073;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
`,_j=g.button`
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
`,zj=g.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  text-align: center;
`,sl=Bp();function Uc({images:l,onImageClick:s}){const[c,u]=R.useState(0);return R.useEffect(()=>{if(l.length<=1)return;const d=setInterval(()=>{u(m=>(m+1)%l.length)},4e3);return()=>clearInterval(d)},[l.length]),l.length===0?o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#64748b",fontSize:"0.9rem",textAlign:"center"},children:"📷 Bilder folgen bald"}):o.jsxs(I3,{children:[l.map((d,m)=>o.jsx(ej,{src:d.src,alt:d.alt,$isActive:m===c,onClick:()=>s(m)},m)),l.length>1&&o.jsx(tj,{children:l.map((d,m)=>o.jsx(nj,{$isActive:m===c,onClick:()=>u(m)},m))})]})}function Ej({images:l,initialIndex:s,onClose:c}){const[u,d]=R.useState(s),m=R.useCallback(()=>{d(j=>(j+1)%l.length)},[l.length]),b=R.useCallback(()=>{d(j=>(j-1+l.length)%l.length)},[l.length]);return R.useEffect(()=>{const j=v=>{v.key==="Escape"&&c(),v.key==="ArrowRight"&&m(),v.key==="ArrowLeft"&&b()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[c,m,b]),o.jsx(aj,{onClick:c,children:o.jsxs(lj,{onClick:j=>j.stopPropagation(),children:[o.jsx(rj,{onClick:c,children:"×"}),o.jsx(ij,{src:l[u].src,alt:l[u].alt}),l.length>1&&o.jsxs(o.Fragment,{children:[o.jsx(Jg,{$direction:"prev",onClick:b,children:"‹"}),o.jsx(Jg,{$direction:"next",onClick:m,children:"›"})]})]})})}function Tj(){const[l,s]=R.useState(!1),[c,u]=R.useState([]),[d,m]=R.useState(0),[b,j]=R.useState(!1),v=(M,D)=>{u(M),m(D),s(!0)},p=M=>{M.preventDefault(),j(!0)},E=()=>{navigator.clipboard.writeText("DE12 6905 0001 0000 0228 06")};return o.jsxs(o.Fragment,{children:[o.jsx(L3,{children:o.jsxs(G3,{children:[o.jsx(Y3,{children:"🏟️ Fürstenberg weiterentwickeln"}),o.jsx(q3,{children:"Unser Kultplatz verdient es - gemeinsam machen wir den Charme noch besser"})]})}),o.jsxs(V3,{children:[o.jsxs(X3,{children:[o.jsx(Q3,{children:"Der Fürstenberg - unser Kultplatz"}),o.jsx(Z3,{children:"Der Fürstenberg ist mehr als ein Sportplatz - er ist das Herzstück unseres Vereins mit einer einzigartigen Atmosphäre und besonderem Charme. Dieser authentische Charakter macht ihn zu dem, was er ist: unser Zuhause."}),o.jsxs(K3,{children:[o.jsx($3,{children:"✨ Charme erhalten, Komfort verbessern"}),o.jsx(J3,{children:"Wir möchten den besonderen Charakter des Fürstenberg bewahren und gleichzeitig einige Bereiche behutsam weiterentwickeln. Mit Ihrer Unterstützung können wir das Beste aus beiden Welten schaffen."})]})]}),o.jsxs(W3,{children:[o.jsx(F3,{children:"🔍 Wo wir ansetzen möchten"}),o.jsxs(P3,{children:[o.jsxs(zc,{children:[o.jsx(Ec,{children:o.jsx(Uc,{images:sl.kabinen,onImageClick:M=>v(sl.kabinen,M)})}),o.jsx(Tc,{children:"🔧 Kabinen komfortabler gestalten"}),o.jsx(Ac,{children:"Die Kabinen haben schon viele Geschichten erlebt - nun möchten wir ihnen mit neuen Bänken, frischen Wänden und durchdachter Ausstattung mehr Komfort verleihen, ohne ihren authentischen Charakter zu verlieren."})]}),o.jsxs(zc,{children:[o.jsx(Ec,{children:o.jsx(Uc,{images:sl.fassade,onImageClick:M=>v(sl.fassade,M)})}),o.jsx(Tc,{children:"🎨 Fassade & Fenster erneuern"}),o.jsx(Ac,{children:"Die Außenfassade hat ihren Dienst getan und möchte nun erneuert werden. Neue Fenster, frischer Putz und eine ansprechende Gestaltung werden dem Fürstenberg gut stehen - und bieten Raum für die Namen unserer Partner, die diesen Kultplatz unterstützen."})]}),o.jsxs(zc,{children:[o.jsx(Ec,{children:o.jsx(Uc,{images:sl.waschkueche,onImageClick:M=>v(sl.waschkueche,M)})}),o.jsx(Tc,{children:"🧺 Waschküche auf Vordermann bringen"}),o.jsx(Ac,{children:"Unsere treuen Waschgeräte haben jahrelang gute Arbeit geleistet. Moderne, energieeffiziente Nachfolger würden nicht nur die Umwelt schonen, sondern auch die Pflege unserer Trikots optimieren."})]})]})]}),o.jsxs(oj,{children:[o.jsx(sj,{children:"✨ Unsere Pläne für den Fürstenberg"}),o.jsxs(uj,{children:[o.jsxs(Mc,{children:[o.jsx(Rc,{children:"🪑"}),o.jsx(Dc,{children:"Kabinen sanieren"}),o.jsx(kc,{children:"Neue Bänke einbauen, Böden erneuern, Belüchtung modernisieren und eine freundliche Atmosphäre schaffen."}),o.jsx(Cc,{children:"~8.000 €"})]}),o.jsxs(Mc,{children:[o.jsx(Rc,{children:"🎨"}),o.jsx(Dc,{children:"Fassade & Fenster erneuern"}),o.jsx(kc,{children:"Putz erneuern, professionell streichen, neue Fenster einbauen, SCKW-Logo anbringen und Sponsoren-Namen prominent platzieren für maximale Sichtbarkeit."}),o.jsx(Cc,{children:"~15.000 €"})]}),o.jsxs(Mc,{children:[o.jsx(Rc,{children:"🧺"}),o.jsx(Dc,{children:"Waschküche modernisieren"}),o.jsx(kc,{children:"Die vorhandenen Geräte durch moderne, energieeffiziente Waschmaschine und Trockner ersetzen für eine optimale Pflege der Sportkleidung."}),o.jsx(Cc,{children:"~5.000 €"})]})]})]}),o.jsxs(cj,{children:[o.jsx(fj,{children:"🤝 Werden Sie Renovierungs-Partner!"}),o.jsx(dj,{children:"Als Renovierungs-Sponsor erhalten Sie nicht nur steuerliche Vorteile, sondern auch prominent sichtbare Anerkennung direkt an unserem Sportplatz!"}),o.jsxs(hj,{children:[o.jsxs(eo,{children:[o.jsx(to,{children:"🏆"}),o.jsxs(no,{children:[o.jsx("strong",{children:"Namensschild an der Fassade:"})," Ihr Firmenname wird dauerhaft und gut sichtbar an der renovierten Außenfassade angebracht"]})]}),o.jsxs(eo,{children:[o.jsx(to,{children:"📄"}),o.jsxs(no,{children:[o.jsx("strong",{children:"Spendenquittung:"})," Alle Spenden sind steuerlich absetzbar - wir stellen Ihnen gerne eine Quittung aus"]})]}),o.jsxs(eo,{children:[o.jsx(to,{children:"📱"}),o.jsxs(no,{children:[o.jsx("strong",{children:"Social Media Dank:"})," Wir danken Ihnen öffentlich auf unseren Kanälen mit über 4.000 Followern"]})]}),o.jsxs(eo,{children:[o.jsx(to,{children:"🎯"}),o.jsxs(no,{children:[o.jsx("strong",{children:"Maximale Sichtbarkeit:"})," Die Fassade liegt direkt am Eingang - jeder Besucher sieht Ihren Namen"]})]})]})]}),o.jsxs(mj,{children:[o.jsx(gj,{children:"🤝 Gemeinsam für den Fürstenberg"}),o.jsx(pj,{children:"Jeder Beitrag macht einen Unterschied. Ob 50€ oder 5.000€ - gemeinsam können wir unserem Kultplatz das geben, was er verdient."}),o.jsx(H3,{realTime:!0}),o.jsxs(bj,{children:[o.jsx(Wg,{className:"primary",href:"https://www.paypal.com/donate/?hosted_button_id=NRFWJ3SGN37XW",target:"_blank",rel:"noopener noreferrer",children:"💳 Mit PayPal spenden"}),o.jsx(Wg,{href:"#",onClick:p,children:"🏦 Per Überweisung spenden"})]})]})]}),o.jsx(uf,{}),b&&o.jsx(xj,{onClick:()=>j(!1),children:o.jsxs(vj,{onClick:M=>M.stopPropagation(),children:[o.jsxs(yj,{children:[o.jsx(Sj,{children:"Kontoverbindung für Spenden"}),o.jsx(jj,{onClick:()=>j(!1),children:"×"})]}),o.jsxs(wj,{children:[o.jsxs(Oc,{children:[o.jsx(Bc,{children:"Kontoinhaber:"}),o.jsx(Nc,{children:"SC Konstanz-Wollmatingen"})]}),o.jsxs(Oc,{children:[o.jsx(Bc,{children:"IBAN:"}),o.jsx(Nc,{children:"DE12 6905 0001 0000 0228 06"})]}),o.jsxs(Oc,{children:[o.jsx(Bc,{children:"BIC:"}),o.jsx(Nc,{children:"SOLADES1KNZ"})]})]}),o.jsx(_j,{onClick:E,children:"📋 IBAN kopieren"}),o.jsx(zj,{children:"Klicken Sie außerhalb dieses Fensters oder auf × zum Schließen"})]})}),l&&o.jsx(Ej,{images:c,initialIndex:d,onClose:()=>s(!1)})]})}function Aj(){return o.jsxs(Ry,{children:[o.jsx($y,{}),o.jsxs(oy,{children:[o.jsx(ul,{path:"/",element:o.jsx(iy,{to:"/sponsoring",replace:!0})}),o.jsx(ul,{path:"/sponsoring",element:o.jsx(V5,{})}),o.jsx(ul,{path:"/sponsoring-v2",element:o.jsx(DS,{})}),o.jsx(ul,{path:"/jobs",element:o.jsx(m3,{})}),o.jsx(ul,{path:"/renovierung",element:o.jsx(Tj,{})})]})]})}const Mj={colors:{primary:"#d9245f",primaryDark:"#b81d51",primaryLight:"#ff4b82",secondary:"#1696ff",secondaryDark:"#0e6ec0",secondaryLight:"#5ab8ff",text:"#222",textMuted:"#666",bg:"#fff",bgMuted:"#f8f9fa",border:"#e9ecef"}};console.log("sckw sponsoring Website loaded");px.createRoot(document.getElementById("root")).render(o.jsx(R.StrictMode,{children:o.jsx(gv,{theme:Mj,children:o.jsx(Aj,{})})}));
